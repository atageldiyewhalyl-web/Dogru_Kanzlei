import { ArrowRight, Building2, Languages, Scale } from "lucide-react";
import meralImage from "@/assets/meral-goeren.webp";
import { useLanguage } from "../context/LanguageContext";
import { openWhatsAppLeadCapture } from "./WhatsAppLeadCapture";

export function CooperationPartner() {
  const { language } = useLanguage();

  const copy = {
    de: {
      eyebrow: "Deutsches Recht",
      title: "Unser Kooperationspartner für deutsches Recht",
      body:
        "Für Mandate mit deutschem Rechtsbezug arbeiten wir mit der Rechtsanwaltskanzlei Meral Gören in Mannheim zusammen. So können Anliegen mit Bezug zu Deutschland und zur Türkei zweisprachig und abgestimmt betreut werden.",
      profileTitle: "Rechtsanwaltskanzlei Meral Gören",
      profileBody:
        "Rechtsanwältin Meral Gören ist deutsche Staatsangehörige türkischer Herkunft. Sie ist seit dem 6. Juni 2008 als Rechtsanwältin zugelassen und an allen Amts-, Land- und Oberlandesgerichten vertretungsbefugt.",
      points: ["Zivilrecht", "Arbeitsrecht", "Ausländerrecht", "Familienrecht", "Verkehrsrecht"],
      cta: "Anfrage zu deutschem Recht stellen",
      leadSituation: "Anfrage zu deutschem Recht / Kooperationspartnerin Meral Gören",
    },
    tr: {
      eyebrow: "Alman Hukuku",
      title: "Alman hukuku için iş birliği yaptığımız partnerimiz",
      body:
        "Alman hukuku bağlantılı dosyalarda Mannheim'daki Rechtsanwaltskanzlei Meral Gören ile iş birliği yapıyoruz. Böylece Almanya ve Türkiye bağlantılı konular Almanca ve Türkçe, uyumlu şekilde ele alınabilir.",
      profileTitle: "Rechtsanwaltskanzlei Meral Gören",
      profileBody:
        "Avukat Meral Gören Türk kökenli Alman vatandaşıdır. 6 Haziran 2008 tarihinden beri avukat olarak kayıtlıdır ve tüm Amtsgericht, Landgericht ve Oberlandesgericht mahkemelerinde temsil yetkisine sahiptir.",
      points: ["Medeni hukuk", "İş hukuku", "Yabancılar hukuku", "Aile hukuku", "Trafik hukuku"],
      cta: "Alman hukuku için talep gönder",
      leadSituation: "Alman hukuku / Meral Gören iş birliği hakkında talep",
    },
    en: {
      eyebrow: "German Law",
      title: "Our cooperation partner for German law",
      body:
        "For matters involving German law, we cooperate with Rechtsanwaltskanzlei Meral Gören in Mannheim. This allows matters connected to Germany and Turkey to be handled in German and Turkish with coordinated support.",
      profileTitle: "Rechtsanwaltskanzlei Meral Gören",
      profileBody:
        "Attorney Meral Gören is a German national of Turkish origin. She has been admitted as an attorney since 6 June 2008 and is authorised to represent clients before all local, regional and higher regional courts.",
      points: ["Civil law", "Employment law", "Immigration law", "Family law", "Traffic law"],
      cta: "Send German-law request",
      leadSituation: "German law / Meral Gören cooperation request",
    },
  }[language];

  return (
    <section className="bg-[#F7F5F0] px-5 py-14 text-[#1C3829] md:px-8 md:py-20">
      <div className="mx-auto grid max-w-[1040px] gap-10 md:grid-cols-[0.85fr_1.15fr] md:items-center">
        <div className="border border-[#1C3829]/10 bg-white p-7 shadow-[0_20px_55px_rgba(28,56,41,0.06)]">
          <div className="relative h-36 w-36 overflow-hidden bg-[#1C3829]">
              <img
                src={meralImage}
                alt="Rechtsanwältin Meral Gören"
                width={1000}
                height={1250}
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
                Mannheim
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
