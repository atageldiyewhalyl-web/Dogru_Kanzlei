import { useLanguage } from "../context/LanguageContext";
import { useSEO, SITE_URL } from "../hooks/useSEO";
import { Link } from "react-router";

export function Impressum() {
  const { language, t, paths } = useLanguage();

  const segment = language === 'de' ? 'impressum' : 'yasal-bilgiler';
  const altSegment = language === 'de' ? 'yasal-bilgiler' : 'impressum';

  useSEO({
    title: language === 'de'
      ? 'Impressum | Doğru Kanzlei'
      : 'Yasal Bilgiler | Doğru Kanzlei',
    description: language === 'de'
      ? 'Impressum der Kanzlei Doğru in Mannheim. Angaben gemäß § 5 TMG.'
      : 'Mannheim\'daki Doğru Kanzlei yasal bilgileri.',
    lang: language,
    canonical: `${SITE_URL}/${language}/${segment}`,
    alternateLang: {
      lang: language === 'de' ? 'tr' : 'de',
      href: `${SITE_URL}/${language === 'de' ? 'tr' : 'de'}/${altSegment}`,
    },
  });

  return (
    <div className="bg-[#F7F5F0] pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 font-sans text-xs tracking-widest uppercase">
            <li>
              <Link to={paths.home} className="text-[#6a6a6a] hover:text-[#B8963E] transition-colors">
                {t("nav_home")}
              </Link>
            </li>
            <li className="text-[#6a6a6a]">/</li>
            <li className="text-[#1C3829] font-bold">
              {language === 'de' ? 'Impressum' : 'Yasal Bilgiler'}
            </li>
          </ol>
        </nav>

        <h1
          className="text-[#1C3829] mb-12"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(36px, 4vw, 48px)", fontWeight: 500 }}
        >
          {language === 'de' ? 'Impressum' : 'Yasal Bilgiler'}
        </h1>

        <div className="prose prose-lg max-w-none font-sans text-[#3a3a3a] leading-[1.9] font-light">
          <h2 className="font-serif text-2xl text-[#1C3829] mt-8 mb-4">
            {language === 'de' ? 'Angaben gemäß § 5 TMG' : '§ 5 TMG Kapsamında Bilgiler'}
          </h2>
          <p>
            Rechtsanwalt Hasan Doğru<br />
            Doğru Kanzlei<br />
            Q7, 24<br />
            68161 Mannheim<br />
            Deutschland
          </p>

          <h2 className="font-serif text-2xl text-[#1C3829] mt-8 mb-4">
            {language === 'de' ? 'Kontakt' : 'İletişim'}
          </h2>
          <p>
            {language === 'de' ? 'Telefon' : 'Telefon'}: +49 (0) 621 15 20 83 23<br />
            E-Mail: info@dogru-kanzlei.de
          </p>

          <h2 className="font-serif text-2xl text-[#1C3829] mt-8 mb-4">
            {language === 'de' ? 'Berufsbezeichnung und berufsrechtliche Regelungen' : 'Meslek Unvanı ve Mesleki Düzenlemeler'}
          </h2>
          <p>
            {language === 'de' ? 'Berufsbezeichnung: Rechtsanwalt' : 'Meslek Unvanı: Avukat'}<br />
            {language === 'de' ? 'Zuständige Kammer: Rechtsanwaltskammer' : 'Yetkili Oda: Rechtsanwaltskammer'}<br />
            {language === 'de' ? 'Verliehen in: Bundesrepublik Deutschland' : 'Verilen Ülke: Federal Almanya Cumhuriyeti'}
          </p>

          <h2 className="font-serif text-2xl text-[#1C3829] mt-8 mb-4">
            {language === 'de' ? 'Zweigstelle Ankara' : 'Ankara Şubesi'}
          </h2>
          <p>
            Ankara, Türkiye<br />
            {language === 'de' ? 'Telefon' : 'Telefon'}: +90 (0) 312 431 01 01
          </p>

          <p className="mt-8 text-sm text-[#6a6a6a] italic">
            {language === 'de'
              ? 'Dieses Impressum wird in Kürze mit vollständigen Angaben aktualisiert.'
              : 'Bu yasal bilgiler sayfası yakında tam bilgilerle güncellenecektir.'}
          </p>
        </div>
      </div>
    </div>
  );
}
