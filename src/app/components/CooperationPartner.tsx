import { ArrowRight, Building2, Languages, Scale } from "lucide-react";
import bulentImage from "@/assets/bulent.webp";
import { useLanguage } from "../context/LanguageContext";
import { openWhatsAppLeadCapture } from "./WhatsAppLeadCapture";

export function CooperationPartner() {
  const { language } = useLanguage();

  const copy = {
    de: {
      eyebrow: "Deutsches Recht",
      title: "Unser Kooperationspartner für deutsches Recht",
      body:
        "Für Mandate mit deutschem Rechtsbezug arbeiten wir mit der Anwaltskanzlei Döger zusammen. Die Kanzlei ist in Wiesbaden ansässig und verfügt über eine Zweigstelle in Ludwigshafen.",
      profileTitle: "Anwaltskanzlei Döger",
      profileBody:
        "Rechtsanwalt Bülent Döger ist Fachanwalt für Strafrecht sowie vereidigter Dolmetscher und Übersetzer für die türkische Sprache. Rechtsanwalt Samet Döger ist ebenfalls Teil der Kanzlei.",
      points: ["Strafrecht", "Familienrecht", "Arbeitsrecht", "Verkehrsrecht", "Insolvenzrecht", "Zivilrecht"],
      cta: "Anfrage zu deutschem Recht stellen",
      leadSituation: "Anfrage zu deutschem Recht / Kooperationspartner Kanzlei Döger",
    },
    tr: {
      eyebrow: "Alman Hukuku",
      title: "Alman hukuku için iş birliği yaptığımız partnerimiz",
      body:
        "Alman hukuku bağlantılı dosyalarda Anwaltskanzlei Döger ile iş birliği yapıyoruz. Kanzleinin ana merkezi Wiesbaden'de, şubesi ise Ludwigshafen'dedir.",
      profileTitle: "Anwaltskanzlei Döger",
      profileBody:
        "Avukat Bülent Döger ceza hukuku uzman avukatı ve Türkçe için yeminli tercüman/çevirmen olarak belirtilmektedir. Avukat Samet Döger de kanzlei ekibinde yer almaktadır.",
      points: ["Ceza hukuku", "Aile hukuku", "İş hukuku", "Trafik hukuku", "İflas hukuku", "Medeni hukuk"],
      cta: "Alman hukuku için talep gönder",
      leadSituation: "Alman hukuku / Kanzlei Döger iş birliği hakkında talep",
    },
    en: {
      eyebrow: "German Law",
      title: "Our cooperation partner for German law",
      body:
        "For matters involving German law, we cooperate with Anwaltskanzlei Döger. The firm is based in Wiesbaden and also has a branch office in Ludwigshafen.",
      profileTitle: "Anwaltskanzlei Döger",
      profileBody:
        "Attorney Bülent Döger is listed as a certified specialist lawyer for criminal law and a sworn interpreter and translator for Turkish. Attorney Samet Döger is also part of the firm.",
      points: ["Criminal law", "Family law", "Employment law", "Traffic law", "Insolvency law", "Civil law"],
      cta: "Send German-law request",
      leadSituation: "German law / Kanzlei Döger cooperation request",
    },
  }[language];

  return (
    <section className="bg-[#F7F5F0] px-5 py-14 text-[#1C3829] md:px-8 md:py-20">
      <div className="mx-auto grid max-w-[1040px] gap-10 md:grid-cols-[0.85fr_1.15fr] md:items-center">
        <div className="border border-[#1C3829]/10 bg-white p-7 shadow-[0_20px_55px_rgba(28,56,41,0.06)]">
          <div className="relative h-36 w-36 overflow-hidden bg-[#1C3829]">
              <img
                src={bulentImage}
                alt="Rechtsanwalt Bülent Döger"
                width={193}
                height={222}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover object-top"
              />
              <div className="absolute bottom-0 right-0 flex h-11 w-11 items-center justify-center bg-[#1C3829] text-white">
                <Scale size={20} strokeWidth={1.6} aria-hidden="true" />
              </div>
          </div>

          <div className="mt-8">
            <div className="font-serif text-[30px] font-medium leading-tight text-[#1C3829]">
              {copy.profileTitle}
            </div>
            <p className="mt-4 font-sans text-[14px] leading-7 text-[#5f665f]">
              {copy.profileBody}
            </p>
          </div>

          <div className="mt-7 grid gap-3">
            <div className="flex items-start gap-3 border-t border-[#1C3829]/10 pt-4">
              <Building2 size={18} className="mt-1 shrink-0 text-[#8B6E2A]" aria-hidden="true" />
              <div className="font-sans text-[13px] leading-6 text-[#1C3829]">
                Wiesbaden · Ludwigshafen
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Languages size={18} className="mt-1 shrink-0 text-[#8B6E2A]" aria-hidden="true" />
              <div className="font-sans text-[13px] leading-6 text-[#1C3829]">
                Deutsch · Türkisch
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-[#B8963E]" />
            <span className="font-sans text-[11px] font-bold uppercase tracking-[0.22em] text-[#B8963E]">
              {copy.eyebrow}
            </span>
          </div>

          <h2 className="max-w-[720px] font-serif text-[34px] font-medium leading-[1.08] text-[#1C3829] md:text-[50px]">
            {copy.title}
          </h2>

          <p className="mt-5 max-w-[660px] font-sans text-[16px] leading-8 text-[#5f665f]">
            {copy.body}
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            {copy.points.map((point) => (
              <div
                key={point}
                className="border-l-2 border-[#B8963E] bg-white px-4 py-3 font-sans text-[13px] font-bold leading-5 text-[#1C3829]"
              >
                {point}
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={() =>
              openWhatsAppLeadCapture({
                service: "Diğer",
                source: "Kooperationspartner Sektion",
                situation: copy.leadSituation,
              })
            }
            className="mt-8 inline-flex items-center gap-3 bg-[#1C3829] px-7 py-4 font-sans text-[11px] font-bold uppercase tracking-[0.15em] text-white transition-colors hover:bg-[#8B6E2A]"
          >
            {copy.cta}
            <ArrowRight size={16} aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
