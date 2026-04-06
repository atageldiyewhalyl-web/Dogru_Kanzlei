import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Shield, ChevronDown, ChevronUp, Check, X } from "lucide-react";
import { useConsent } from "../context/ConsentContext";
import { useLanguage } from "../context/LanguageContext";
import { Link } from "react-router";

const content = {
  de: {
    title: "Ihre Privatsphäre",
    subtitle: "Wir respektieren Ihre Daten",
    description:
      "Diese Website verwendet Cookies und ähnliche Technologien. Einige sind notwendig, andere helfen uns, Ihnen einen besseren Service zu bieten. Gemäß §25 TDDDG und DSGVO benötigen wir Ihre Einwilligung.",
    essential: "Technisch notwendig",
    essentialDesc: "Erforderlich für die Grundfunktionen der Website. Kann nicht deaktiviert werden.",
    functional: "Funktional",
    functionalDesc: "Ermöglicht externe Dienste wie Calendly (Terminbuchung) und WhatsApp.",
    analytics: "Analyse",
    analyticsDesc: "Hilft uns, die Nutzung der Website zu verstehen (z.B. Google Analytics). Aktuell nicht aktiv.",
    acceptAll: "Alle akzeptieren",
    rejectAll: "Nur notwendige",
    saveCustom: "Auswahl speichern",
    customize: "Anpassen",
    alwaysOn: "Immer aktiv",
    privacyLink: "Datenschutzerklärung",
    imprintLink: "Impressum",
  },
  tr: {
    title: "Gizliliğiniz",
    subtitle: "Verilerinize saygı duyuyoruz",
    description:
      "Bu web sitesi çerezler ve benzer teknolojiler kullanmaktadır. Bazıları zorunlu, bazıları daha iyi hizmet sunmamıza yardımcı olmaktadır. GDPR ve §25 TDDDG kapsamında onayınızı talep ediyoruz.",
    essential: "Teknik Zorunlu",
    essentialDesc: "Web sitesinin temel işlevleri için gereklidir. Devre dışı bırakılamaz.",
    functional: "İşlevsel",
    functionalDesc: "Calendly (randevu) ve WhatsApp gibi harici hizmetlere olanak tanır.",
    analytics: "Analitik",
    analyticsDesc: "Web sitesi kullanımını anlamamıza yardımcı olur (örn. Google Analytics). Şu anda aktif değil.",
    acceptAll: "Tümünü kabul et",
    rejectAll: "Yalnızca zorunlu",
    saveCustom: "Seçimi kaydet",
    customize: "Özelleştir",
    alwaysOn: "Her zaman aktif",
    privacyLink: "Gizlilik Politikası",
    imprintLink: "Künye",
  },
};

export function CookieBanner() {
  const { showBanner, consent, acceptAll, rejectAll, saveCustom } = useConsent();
  const { language, paths } = useLanguage();
  const c = content[language as "de" | "tr"] ?? content.de;

  const [showDetails, setShowDetails] = useState(false);
  const [functional, setFunctional] = useState(consent.functional);
  const [analytics, setAnalytics] = useState(consent.analytics);

  if (!showBanner) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="cookie-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] flex items-end justify-center pointer-events-none"
        style={{ paddingBottom: "0" }}
      >
        {/* Soft backdrop for focus */}
        <div className="absolute inset-0 bg-black/20 pointer-events-auto" />

        <motion.div
          key="cookie-panel"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="relative pointer-events-auto w-full max-w-4xl mx-auto bg-white shadow-2xl border-t-4 border-[#8B6E2A]"
          style={{ maxHeight: "90vh", overflowY: "auto" }}
        >
          <div className="p-8 lg:p-12">
            {/* Header */}
            <div className="flex items-start justify-between gap-6 mb-8">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-[#1C3829] flex items-center justify-center shrink-0">
                  <Shield size={22} className="text-[#8B6E2A]" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="font-sans text-[10px] font-bold tracking-[0.2em] uppercase text-[#7A5F20]">
                      Doğru Kanzlei
                    </span>
                  </div>
                  <h2 className="font-serif text-2xl lg:text-3xl text-[#1C3829] font-medium leading-tight">
                    {c.title}
                  </h2>
                  <p className="font-sans text-sm text-[#6a6a6a] mt-1">{c.subtitle}</p>
                </div>
              </div>
            </div>

            <p className="font-sans text-[14px] text-[#4a4a4a] leading-relaxed mb-8 max-w-2xl">
              {c.description}
            </p>

            {/* Toggle Details */}
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="flex items-center gap-2 font-sans text-[12px] font-bold tracking-widest text-[#7A5F20] uppercase mb-6 hover:text-[#1C3829] transition-colors"
            >
              {showDetails ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              {c.customize}
            </button>

            {/* Cookie Categories */}
            <AnimatePresence>
              {showDetails && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden mb-8"
                >
                  <div className="space-y-4 border border-[#1C3829]/5 p-6 bg-[#F7F5F0]">
                    {/* Essential */}
                    <CookieRow
                      title={c.essential}
                      description={c.essentialDesc}
                      checked={true}
                      disabled={true}
                      alwaysOnLabel={c.alwaysOn}
                      onChange={() => {}}
                    />
                    {/* Functional */}
                    <CookieRow
                      title={c.functional}
                      description={c.functionalDesc}
                      checked={functional}
                      onChange={setFunctional}
                    />
                    {/* Analytics */}
                    <CookieRow
                      title={c.analytics}
                      description={c.analyticsDesc}
                      checked={analytics}
                      onChange={setAnalytics}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <button
                onClick={acceptAll}
                className="flex-1 flex items-center justify-center gap-2 py-4 bg-[#1C3829] text-white font-sans text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-[#8B6E2A] transition-colors"
              >
                <Check size={14} />
                {c.acceptAll}
              </button>

              {showDetails ? (
                <button
                  onClick={() => saveCustom(functional, analytics)}
                  className="flex-1 flex items-center justify-center gap-2 py-4 border border-[#1C3829] text-[#1C3829] font-sans text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-[#F7F5F0] transition-colors"
                >
                  <Check size={14} />
                  {c.saveCustom}
                </button>
              ) : (
                <button
                  onClick={rejectAll}
                  className="flex-1 flex items-center justify-center gap-2 py-4 border border-[#1C3829]/30 text-[#6a6a6a] font-sans text-[11px] font-bold tracking-[0.2em] uppercase hover:border-[#1C3829] hover:text-[#1C3829] transition-colors"
                >
                  <X size={14} />
                  {c.rejectAll}
                </button>
              )}
            </div>

            {/* Footer links */}
            <div className="flex gap-4 font-sans text-[11px] text-[#6a6a6a]">
              <Link
                to={paths.datenschutz}
                className="hover:text-[#7A5F20] transition-colors underline-offset-2 hover:underline"
                onClick={rejectAll}
              >
                {c.privacyLink}
              </Link>
              <span>·</span>
              <Link
                to={paths.impressum}
                className="hover:text-[#7A5F20] transition-colors underline-offset-2 hover:underline"
                onClick={rejectAll}
              >
                {c.imprintLink}
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function CookieRow({
  title,
  description,
  checked,
  disabled = false,
  alwaysOnLabel,
  onChange,
}: {
  title: string;
  description: string;
  checked: boolean;
  disabled?: boolean;
  alwaysOnLabel?: string;
  onChange: (v: boolean) => void;
}) {
  return (
    <div className="flex items-start justify-between gap-4 py-4 border-b border-[#1C3829]/5 last:border-0">
      <div className="flex-grow">
        <div className="font-sans text-[13px] font-bold text-[#1C3829] mb-1">{title}</div>
        <div className="font-sans text-[12px] text-[#6a6a6a] leading-relaxed">{description}</div>
      </div>
      <div className="shrink-0 pt-1">
        {disabled ? (
          <span className="font-sans text-[10px] font-bold tracking-widest text-[#8B6E2A] uppercase">
            {alwaysOnLabel}
          </span>
        ) : (
          <button
            role="switch"
            aria-checked={checked}
            aria-label={title}
            onClick={() => onChange(!checked)}
            className={`relative w-12 h-6 rounded-full transition-colors duration-200 focus:outline-none ${
              checked ? "bg-[#1C3829]" : "bg-[#d4cfc6]"
            }`}
          >
            <span
              className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200 ${
                checked ? "translate-x-6" : "translate-x-0"
              }`}
            />
          </button>
        )}
      </div>
    </div>
  );
}
