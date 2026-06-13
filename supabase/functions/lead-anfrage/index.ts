import { createClient } from "https://esm.sh/@supabase/supabase-js@2.46.1";

type LeadPayload = {
  firstName?: string;
  lastName?: string;
  service?: string;
  source?: string;
  situation?: string;
  language?: string;
  pageUrl?: string;
  notifyEmails?: string;
};

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const defaultFromEmail = "Doğru Kanzlei Anfrage <anfrage@forms.xn--nll-hoa.com>";
const defaultToEmail = "halyl@xn--nll-hoa.com";

function cleanText(value: unknown, maxLength = 2000) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLength);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function validatePayload(payload: LeadPayload) {
  const lead = {
    firstName: cleanText(payload.firstName, 100),
    lastName: cleanText(payload.lastName, 100),
    service: cleanText(payload.service, 120),
    source: cleanText(payload.source, 120),
    situation: cleanText(payload.situation, 3000),
    language: cleanText(payload.language, 20),
    pageUrl: cleanText(payload.pageUrl, 1000),
    notifyEmails: cleanText(payload.notifyEmails, 500),
  };

  if (!lead.firstName || !lead.lastName || !lead.service || !lead.source || !lead.situation) {
    throw new Error("Missing required lead fields.");
  }

  return lead;
}

function renderTextEmail(lead: ReturnType<typeof validatePayload>) {
  return [
    "Yeni WhatsApp Anfrage",
    "",
    `Ad soyad: ${lead.firstName} ${lead.lastName}`,
    `Hizmet: ${lead.service}`,
    `Hasan'ı nereden buldu: ${lead.source}`,
    `Dil: ${lead.language || "-"}`,
    `Sayfa: ${lead.pageUrl || "-"}`,
    "",
    "Durum:",
    lead.situation,
  ].join("\n");
}

function renderHtmlEmail(lead: ReturnType<typeof validatePayload>) {
  const rows = [
    ["Ad soyad", `${lead.firstName} ${lead.lastName}`],
    ["Hizmet", lead.service],
    ["Hasan'ı nereden buldu", lead.source],
    ["Dil", lead.language || "-"],
    ["Sayfa", lead.pageUrl || "-"],
  ];

  return `
    <div style="font-family:Arial,sans-serif;color:#1c3829;line-height:1.5">
      <h1 style="font-size:22px;margin:0 0 16px">Yeni WhatsApp Anfrage</h1>
      <table style="border-collapse:collapse;width:100%;max-width:720px">
        ${rows
          .map(([label, value]) => `
            <tr>
              <td style="border:1px solid #e5dfd2;padding:10px;font-weight:700;background:#f7f5f0;width:190px">${escapeHtml(label)}</td>
              <td style="border:1px solid #e5dfd2;padding:10px">${escapeHtml(value)}</td>
            </tr>
          `)
          .join("")}
      </table>
      <h2 style="font-size:16px;margin:22px 0 8px">Durum</h2>
      <p style="white-space:pre-wrap;background:#f7f5f0;border:1px solid #e5dfd2;padding:14px">${escapeHtml(lead.situation)}</p>
    </div>
  `;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return Response.json({ error: "Method not allowed" }, { status: 405, headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
    const resendApiKey = Deno.env.get("RESEND_API_KEY");

    if (!supabaseUrl || !serviceRoleKey || !resendApiKey) {
      throw new Error("Missing required server secrets.");
    }

    const payload = await req.json() as LeadPayload;
    const lead = validatePayload(payload);

    const supabase = createClient(supabaseUrl, serviceRoleKey, {
      auth: { persistSession: false },
    });

    const { data, error } = await supabase
      .from("lead_anfragen")
      .insert({
        first_name: lead.firstName,
        last_name: lead.lastName,
        service: lead.service,
        source: lead.source,
        situation: lead.situation,
        language: lead.language,
        page_url: lead.pageUrl,
        notify_emails: lead.notifyEmails,
      })
      .select("id")
      .single();

    if (error) throw error;

    const leadId = data.id as string;
    const from = Deno.env.get("LEAD_FROM_EMAIL") || defaultFromEmail;
    const to = (Deno.env.get("LEAD_TO_EMAIL") || defaultToEmail)
      .split(",")
      .map((email) => email.trim())
      .filter(Boolean);

    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to,
        subject: `Yeni WhatsApp Anfrage: ${lead.service} - ${lead.firstName} ${lead.lastName}`,
        html: renderHtmlEmail(lead),
        text: renderTextEmail(lead),
      }),
    });

    if (!emailResponse.ok) {
      const emailError = await emailResponse.text();
      await supabase
        .from("lead_anfragen")
        .update({ status: "email_failed", email_error: emailError.slice(0, 1000) })
        .eq("id", leadId);

      return Response.json(
        { ok: false, error: "Email delivery failed" },
        { status: 502, headers: corsHeaders },
      );
    }

    await supabase
      .from("lead_anfragen")
      .update({ status: "email_sent", email_sent_at: new Date().toISOString(), email_error: null })
      .eq("id", leadId);

    return Response.json({ ok: true }, { headers: corsHeaders });
  } catch (error) {
    const message = error instanceof Error
      ? error.message
      : error && typeof error === "object" && "message" in error
        ? String((error as { message?: unknown }).message)
        : "Unknown error";
    return Response.json({ error: message }, { status: 400, headers: corsHeaders });
  }
});
