#!/usr/bin/env python3
"""Report qualified inquiries to Google Ads as offline conversions.

Only leads that are
  * labelled  lead_quality = 'qualified'   (set by us after reading the inquiry),
  * recorded  ad_consent   = 'granted'     (visitor allowed "Marketing" in the cookie banner),
  * carrying a Google click ID (gclid / gbraid / wbraid) in page_url,
  * younger than 90 days and not uploaded yet
are sent. Only the click ID and the time of the inquiry go to Google, never name, contact
details or the text of the inquiry (see Datenschutzerklärung, section 5).

Usage (from the repo root; needs the linked Supabase CLI and the null-client-reports skill):
  python3 tools/upload_qualified_leads.py               # dry run: list what would be sent
  python3 tools/upload_qualified_leads.py --apply       # upload and mark leads as uploaded
  python3 tools/upload_qualified_leads.py --unlabelled  # inquiries still waiting for a label
  python3 tools/upload_qualified_leads.py --label <lead-id>=qualified|unclear|not_qualified|duplicate
"""
import json
import os
import re
import subprocess
import sys
from urllib.parse import parse_qs, urlparse

sys.path.insert(0, os.path.expanduser("~/.claude/skills/null-client-reports/scripts"))
from common import CONFIG, token  # noqa: E402  (service-account auth, keys never printed)

CUSTOMER_ID = "7515600745"            # Hasan Doğru Google Ads
CONVERSION_ACTION = f"customers/{CUSTOMER_ID}/conversionActions/7890973151"  # Qualifizierte Anfrage (Offline)
LABELS = {"qualified", "unclear", "not_qualified", "duplicate"}


def sql(query: str) -> list:
    out = subprocess.run(["supabase", "db", "query", "--linked", query], capture_output=True, text=True).stdout
    start, end = out.find("{"), out.rfind("}")
    return json.loads(out[start:end + 1]).get("rows", []) if start >= 0 else []


def click_id(page_url: str):
    params = parse_qs(urlparse(page_url or "").query)
    for key in ("gclid", "gbraid", "wbraid"):
        if params.get(key):
            return key, params[key][0]
    return None, None


def main():
    args = sys.argv[1:]
    if "--label" in args:
        for item in args[args.index("--label") + 1:]:
            lead_id, _, label = item.partition("=")
            if label not in LABELS or not re.fullmatch(r"[0-9a-f-]{36}", lead_id):
                sys.exit(f"bad label argument: {item}")
            sql(f"update public.lead_anfragen set lead_quality = '{label}' where id = '{lead_id}'")
            print("labelled", lead_id, label)
        return
    if "--unlabelled" in args:
        rows = sql("select id, created_at::date d, service, language, ad_consent, "
                   "(page_url ~* 'gclid|gbraid|wbraid') ads, left(regexp_replace(situation, '\\s+', ' ', 'g'), 300) s "
                   "from lead_anfragen where lead_quality is null and coalesce(service,'') <> 'Test / E-Mail Zustellung' "
                   "order by created_at")
        for r in rows:
            print(r["id"], r["d"], r["service"], r["language"], "ADS" if r["ads"] else "", r["ad_consent"] or "-", "|", r["s"])
        print(f"{len(rows)} unlabelled")
        return

    apply = "--apply" in args
    rows = sql("select id, created_at, page_url from lead_anfragen where lead_quality = 'qualified' "
               "and ad_consent = 'granted' and conversion_uploaded_at is null "
               "and created_at >= now() - interval '89 days' and page_url ~* 'gclid|gbraid|wbraid' order by created_at")
    conversions, ids = [], []
    for r in rows:
        kind, value = click_id(r["page_url"])
        if not value:
            continue
        ts = r["created_at"].replace("T", " ")[:19]
        conversions.append({kind: value, "conversionAction": CONVERSION_ACTION, "conversionDateTime": f"{ts}+00:00",
                            "conversionValue": 1, "currencyCode": "EUR", "consent": {"adUserData": "GRANTED"}})
        ids.append(r["id"])
    print(f"{len(conversions)} qualified, consented ad inquiries ready" + ("" if apply else " (dry run)"))
    if not conversions:
        return
    body = {"conversions": conversions, "partialFailure": True, "validateOnly": not apply}
    tok = token("google_ads", "https://www.googleapis.com/auth/adwords")
    res = subprocess.run(["curl", "-s", "-X", "POST", f"{CONFIG['google_ads_api']}/customers/{CUSTOMER_ID}:uploadClickConversions",
                          "-H", f"Authorization: Bearer {tok}", "-H", f"login-customer-id: {CONFIG['mcc']}",
                          "-H", "Content-Type: application/json", "-d", json.dumps(body)], capture_output=True, text=True)
    data = json.loads(res.stdout or "{}")
    failed = {int(m) for m in re.findall(r"conversions\[(\d+)\]", json.dumps(data.get("partialFailureError", {})))}
    if "error" in data:
        sys.exit(f"upload failed: {data['error'].get('message')}")
    ok_ids = [lead_id for i, lead_id in enumerate(ids) if i not in failed]
    print(f"accepted {len(ok_ids)}, rejected {len(failed)}")
    if apply and ok_ids:
        sql("update public.lead_anfragen set conversion_uploaded_at = now() where id in ("
            + ",".join(f"'{i}'" for i in ok_ids) + ")")


if __name__ == "__main__":
    main()
