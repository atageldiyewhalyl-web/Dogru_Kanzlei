import { FormEvent, useEffect, useMemo, useState } from "react";
import { X } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const WHATSAPP_PHONE = "4917661221210";
const DEFAULT_SUPABASE_URL = "https://srnynewvauzymnljqskj.supabase.co";
const SUPABASE_URL = (((import.meta as any).env?.VITE_SUPABASE_URL || DEFAULT_SUPABASE_URL) as string).replace(/\/$/, "");
const LEAD_ENDPOINT = (
  ((import.meta as any).env?.VITE_LEAD_CAPTURE_ENDPOINT || "") ||
  (SUPABASE_URL ? `${SUPABASE_URL}/functions/v1/lead-anfrage` : "")
) as string;
const NOTIFY_EMAILS = ((import.meta as any).env?.VITE_LEAD_NOTIFY_EMAILS || "halyl@xn--nll-hoa.com,avukat.hasandogru@outlook.de") as string;

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

type LeadCaptureDetail = Partial<Pick<LeadFormState, "service" | "source" | "situation">>;

type LeadFormState = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  service: string;
  source: string;
  situation: string;
};

const serviceOptions = [
  "Vekaletname",
  "Tanıma & Tenfiz",
  "Mavi Kart",
  "Miras",
  "Boşanma",
  "Sorgerecht / Velayet",
  "Unterhalt / Nafaka",
  "Ceza / Yakalama Kararı",
  "Tapu / Gayrimenkul",
  "Forderung / Inkasso",
  "Diğer",
];

const sourceOptions = [
  "Google Search",
  "Google Maps",
  "Instagram",
  "WhatsApp",
  "Tavsiye / Referans",
  "Daha önce müvekkildim",
  "Diğer",
];

export function openWhatsAppLeadCapture(detail: LeadCaptureDetail = {}) {
  window.dispatchEvent(new CustomEvent("open-whatsapp-lead-capture", { detail }));
}

function buildWhatsAppMessage(form: LeadFormState, pageUrl: string) {
  return [
    "Merhaba Hasan Bey,",
    "",
    `Ben ${form.firstName} ${form.lastName}.`,
    `Telefon: ${form.phone}`,
    `E-posta: ${form.email}`,
    "",
    `Şu konuda destek almak istiyorum: ${form.service}`,
    "",
    "Durumum kısaca:",
    form.situation,
    "",
    `Sizi şuradan buldum: ${form.source}`,
    `Sayfa: ${pageUrl}`,
  ].join("\n");
}

function trackWhatsAppClickConversion(lead: LeadFormState & { language: string; pageUrl: string }) {
  const payload = {
    event: "whatsapp_click",
    event_category: "lead",
    event_action: "submit_whatsapp_form",
    event_label: lead.service || "unknown",
    lead_service: lead.service || "unknown",
    lead_source: lead.source || "unknown",
    lead_language: lead.language,
    page_location: lead.pageUrl,
  };

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);

  if (typeof window.gtag === "function") {
    window.gtag("event", "whatsapp_click", {
      event_category: payload.event_category,
      event_label: payload.event_label,
      lead_service: payload.lead_service,
      lead_source: payload.lead_source,
      page_location: payload.page_location,
    });
  }
}

export function WhatsAppLeadCapture() {
  const { language } = useLanguage();
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [form, setForm] = useState<LeadFormState>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    service: "",
    source: "",
    situation: "",
  });

  const labels = useMemo(() => {
    if (language === "de") {
      return {
        eyebrow: "WhatsApp Anfrage",
        title: "Kurz einordnen, dann WhatsApp öffnen",
        description: "Ihre Angaben werden an Hasan Doğru weitergeleitet und anschließend als WhatsApp-Nachricht vorbereitet.",
        firstName: "Vorname",
        lastName: "Nachname",
        phone: "Telefonnummer",
        email: "E-Mail-Adresse",
        service: "Wobei brauchen Sie Hilfe?",
        source: "Wo haben Sie Hasan gefunden?",
        situation: "Ihre Situation kurz erklärt",
        privacy: "Mit dem Absenden stimmen Sie zu, dass Ihre Angaben zur Bearbeitung Ihrer Anfrage an Hasan Doğru und nüll übermittelt werden.",
        submit: "Weiter zu WhatsApp",
        submitting: "Wird vorbereitet...",
        missingEndpoint: "Das Formular ist noch nicht vollständig eingerichtet. Bitte versuchen Sie es später erneut.",
        submitFailed: "Die Anfrage konnte nicht gesendet werden. WhatsApp wird erst geöffnet, wenn die Angaben erfolgreich übermittelt wurden.",
      };
    }

    if (language === "en") {
      return {
        eyebrow: "WhatsApp request",
        title: "Add context before WhatsApp",
        description: "Your details are sent to Hasan Doğru first, then we prepare your WhatsApp message.",
        firstName: "First name",
        lastName: "Last name",
        phone: "Phone number",
        email: "Email address",
        service: "What do you need help with?",
        source: "Where did you find Hasan?",
        situation: "Briefly explain your situation",
        privacy: "By submitting, you agree that your details are shared with Hasan Doğru and nüll to process your request.",
        submit: "Continue to WhatsApp",
        submitting: "Preparing...",
        missingEndpoint: "The form is not fully configured yet. Please try again later.",
        submitFailed: "The request could not be sent. WhatsApp opens only after the details are successfully submitted.",
      };
    }

    return {
      eyebrow: "WhatsApp talebi",
      title: "WhatsApp'a geçmeden önce kısa bilgi",
      description: "Bilgileriniz önce Hasan Doğru'ya iletilir, ardından WhatsApp mesajınız hazır şekilde açılır.",
      firstName: "Ad",
      lastName: "Soyad",
      phone: "Telefon",
      email: "E-posta",
      service: "Hangi konuda destek istiyorsunuz?",
      source: "Hasan Bey'i nereden buldunuz?",
      situation: "Durumunuzu kısaca anlatın",
      privacy: "Göndererek bilgilerinizin talebinizin işlenmesi için Hasan Doğru ve nüll ile paylaşılmasını kabul edersiniz.",
      submit: "WhatsApp'a Devam Et",
      submitting: "Hazırlanıyor...",
      missingEndpoint: "Form henüz tam yapılandırılmamış. Lütfen daha sonra tekrar deneyin.",
      submitFailed: "Talep gönderilemedi. WhatsApp yalnızca bilgiler başarıyla iletildikten sonra açılır.",
    };
  }, [language]);

  useEffect(() => {
    const handleOpen = (event: Event) => {
      event.preventDefault();
      const detail = (event as CustomEvent<LeadCaptureDetail>).detail || {};
      setForm((current) => ({
        ...current,
        ...detail,
      }));
      setOpen(true);
    };

    const interceptWhatsAppLinks = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const link = target?.closest?.("a[href^='https://wa.me/'], a[href^='http://wa.me/']") as HTMLAnchorElement | null;
      if (!link) return;

      event.preventDefault();
      const url = new URL(link.href);
      setForm((current) => ({
        ...current,
        service: url.searchParams.get("service") || current.service,
        source: url.searchParams.get("source") || current.source,
        situation: url.searchParams.get("situation") || current.situation,
      }));
      setOpen(true);
    };

    window.addEventListener("open-whatsapp-lead-capture", handleOpen);
    document.addEventListener("click", interceptWhatsAppLinks, true);

    return () => {
      window.removeEventListener("open-whatsapp-lead-capture", handleOpen);
      document.removeEventListener("click", interceptWhatsAppLinks, true);
    };
  }, []);

  if (!open) return null;

  const updateField = (field: keyof LeadFormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const submitLead = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setSubmitError("");

    const pageUrl = window.location.href;
    const normalizedForm = {
      firstName: form.firstName.trim(),
      lastName: form.lastName.trim(),
      phone: form.phone.trim(),
      email: form.email.trim(),
      service: form.service.trim(),
      source: form.source.trim(),
      situation: form.situation.trim(),
    };
    const lead = {
      ...normalizedForm,
      language,
      pageUrl,
      notifyEmails: NOTIFY_EMAILS,
      createdAt: new Date().toISOString(),
    };

    if (!LEAD_ENDPOINT) {
      setSubmitError(labels.missingEndpoint);
      setSubmitting(false);
      return;
    }

    try {
      const stored = JSON.parse(window.localStorage.getItem("dogru_whatsapp_leads") || "[]");
      stored.push(lead);
      window.localStorage.setItem("dogru_whatsapp_leads", JSON.stringify(stored.slice(-100)));
    } catch {
      // Local storage can be unavailable in strict privacy modes; the WhatsApp handoff still works.
    }

    try {
      const response = await fetch(LEAD_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || result?.ok !== true) {
        throw new Error(`Lead endpoint returned ${response.status}`);
      }
    } catch {
      setSubmitError(labels.submitFailed);
      setSubmitting(false);
      return;
    }

    const message = encodeURIComponent(buildWhatsAppMessage(normalizedForm, pageUrl));
    const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${message}`;
    trackWhatsAppClickConversion(lead);
    window.location.assign(whatsappUrl);
    setSubmitting(false);
    setOpen(false);
    setForm({ firstName: "", lastName: "", phone: "", email: "", service: "", source: "", situation: "" });
  };

  return (
    <div className="fixed inset-0 z-[3000] flex items-center justify-center bg-black/55 px-4 py-6">
      <div className="relative max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-xl bg-[#F7F5F0] shadow-2xl">
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="absolute right-4 top-4 z-10 rounded-full bg-white p-2 text-[#1C3829] shadow-sm transition hover:bg-[#EFE9DD]"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        <div className="border-t-8 border-[#8B6E2A] p-6 md:p-8">
          <p className="mb-3 font-sans text-[11px] font-bold uppercase tracking-[0.22em] text-[#7A5F20]">
            {labels.eyebrow}
          </p>
          <h2 className="mb-3 max-w-xl font-serif text-3xl leading-tight text-[#1C3829] md:text-4xl">
            {labels.title}
          </h2>
          <p className="mb-7 max-w-xl text-[15px] leading-7 text-[#555]">
            {labels.description}
          </p>

          <form onSubmit={submitLead} className="space-y-5">
            <div className="grid gap-4 md:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-[12px] font-bold uppercase tracking-[0.12em] text-[#1C3829]">{labels.firstName}</span>
                <input
                  required
                  name="firstName"
                  autoComplete="given-name"
                  value={form.firstName}
                  onChange={(e) => updateField("firstName", e.target.value)}
                  className="w-full rounded-md border border-[#D8D0C2] bg-white px-4 py-3 text-[15px] outline-none transition focus:border-[#8B6E2A] focus:ring-2 focus:ring-[#8B6E2A]/20"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-[12px] font-bold uppercase tracking-[0.12em] text-[#1C3829]">{labels.lastName}</span>
                <input
                  required
                  name="lastName"
                  autoComplete="family-name"
                  value={form.lastName}
                  onChange={(e) => updateField("lastName", e.target.value)}
                  className="w-full rounded-md border border-[#D8D0C2] bg-white px-4 py-3 text-[15px] outline-none transition focus:border-[#8B6E2A] focus:ring-2 focus:ring-[#8B6E2A]/20"
                />
              </label>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-[12px] font-bold uppercase tracking-[0.12em] text-[#1C3829]">{labels.phone}</span>
                <input
                  required
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  value={form.phone}
                  onChange={(e) => updateField("phone", e.target.value)}
                  className="w-full rounded-md border border-[#D8D0C2] bg-white px-4 py-3 text-[15px] outline-none transition focus:border-[#8B6E2A] focus:ring-2 focus:ring-[#8B6E2A]/20"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-[12px] font-bold uppercase tracking-[0.12em] text-[#1C3829]">{labels.email}</span>
                <input
                  required
                  name="email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  className="w-full rounded-md border border-[#D8D0C2] bg-white px-4 py-3 text-[15px] outline-none transition focus:border-[#8B6E2A] focus:ring-2 focus:ring-[#8B6E2A]/20"
                />
              </label>
            </div>

            <label className="block">
              <span className="mb-2 block text-[12px] font-bold uppercase tracking-[0.12em] text-[#1C3829]">{labels.service}</span>
              <select
                required
                name="service"
                value={form.service}
                onChange={(e) => updateField("service", e.target.value)}
                className="w-full rounded-md border border-[#D8D0C2] bg-white px-4 py-3 text-[15px] outline-none transition focus:border-[#8B6E2A] focus:ring-2 focus:ring-[#8B6E2A]/20"
              >
                <option value="">Bitte auswählen / Seçiniz</option>
                {serviceOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="mb-2 block text-[12px] font-bold uppercase tracking-[0.12em] text-[#1C3829]">{labels.source}</span>
              <select
                required
                name="source"
                value={form.source}
                onChange={(e) => updateField("source", e.target.value)}
                className="w-full rounded-md border border-[#D8D0C2] bg-white px-4 py-3 text-[15px] outline-none transition focus:border-[#8B6E2A] focus:ring-2 focus:ring-[#8B6E2A]/20"
              >
                <option value="">Bitte auswählen / Seçiniz</option>
                {sourceOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="mb-2 block text-[12px] font-bold uppercase tracking-[0.12em] text-[#1C3829]">{labels.situation}</span>
              <textarea
                required
                name="situation"
                rows={4}
                value={form.situation}
                onChange={(e) => updateField("situation", e.target.value)}
                className="w-full resize-none rounded-md border border-[#D8D0C2] bg-white px-4 py-3 text-[15px] leading-7 outline-none transition focus:border-[#8B6E2A] focus:ring-2 focus:ring-[#8B6E2A]/20"
              />
            </label>

            <p className="text-[12px] leading-5 text-[#666]">{labels.privacy}</p>
            {submitError && <p className="text-[12px] font-semibold text-[#8B2A2A]">{submitError}</p>}

            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-full bg-[#1C3829] px-6 py-4 text-[12px] font-bold uppercase tracking-[0.16em] text-white shadow-lg transition hover:bg-[#8B6E2A] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitting ? labels.submitting : labels.submit}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
