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

        <div className="prose prose-lg max-w-none font-sans text-[#3a3a3a] leading-[1.8] font-medium">
          <h2 className="font-serif text-2xl text-[#1C3829] mt-8 mb-4">
            Angaben gemäß § 5 TMG
          </h2>
          <div className="mb-8">
            <p className="mb-2"><strong>Firma / Anbieter:</strong><br />DOGRU KANZLEİ</p>
            <p className="mb-2"><strong>Rechtsform:</strong><br />Einzelunternehmen</p>
            <p className="mb-2"><strong>Vertreten durch (Geschäftsführer / Inhaber):</strong><br />Avukat Hasan DOĞRU</p>
            <p className="mb-2"><strong>Anschrift:</strong><br />R1 2,3<br />68161 MANNHEIM<br />DEUTSCHLAND</p>
          </div>

          <h2 className="font-serif text-2xl text-[#1C3829] mt-8 mb-4">
            Kontakt
          </h2>
          <div className="mb-8">
            <p className="mb-2"><strong>Telefon:</strong><br />+4917661221210<br />+905332375918</p>
            <p className="mb-2"><strong>E-Mail:</strong><br />info@hasandogru.de<br />Avukat.hasandogru@outlook.de</p>
            <p className="mb-2"><strong>Webseite:</strong><br />Strato</p>
          </div>

          <h2 className="font-serif text-2xl text-[#1C3829] mt-8 mb-4">
            Registereintrag
          </h2>
          <div className="mb-8">
            <p className="mb-2"><strong>Handelsregister:</strong> [HRA]</p>
            <p className="mb-2"><strong>Registergericht:</strong> Rechtsanwaltskammer Karlsruhe</p>
            <p className="mb-2"><strong>Registernummer:</strong> Mitgliedsnummer: [Miras]</p>
            <p className="mb-2"><strong>Umsatzsteuer-ID gemäß § 27a UStG:</strong> (Ust.-Nr.: 38240/01054)</p>
          </div>

          <div className="bg-[#1C3829] text-white p-6 my-8">
            <p className="font-mono text-sm tracking-widest mb-0">
              IBAN: DE70 6705 0505 0040 5727 75
            </p>
          </div>

          <h2 className="font-serif text-2xl text-[#1C3829] mt-8 mb-4">
            Inhaltlich verantwortlich gemäß § 18 Abs. 2 MStV
          </h2>
          <p className="mb-8">
            Hasan DOĞRU<br />
            R1 2,3 68161 Mannheim
          </p>

          <hr className="border-[#B8963E]/30 my-12" />

          <h2 className="font-serif text-3xl text-[#1C3829] mt-12 mb-6">Haftungsausschluss</h2>
          
          <h3 className="text-xl font-serif text-[#1C3829] mt-8 mb-3">1. Haftung für Inhalte</h3>
          <p className="mb-6 text-sm">
            Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte verantwortlich. Nach §§ 8 bis 10 TMG sind wir jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen.
          </p>

          <h3 className="text-xl font-serif text-[#1C3829] mt-8 mb-3">2. Haftung für externe Links</h3>
          <p className="mb-6 text-sm">
            Unsere Website enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Betreiber verantwortlich. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
          </p>

          <h3 className="text-xl font-serif text-[#1C3829] mt-8 mb-3">3. Urheberrecht</h3>
          <p className="mb-6 text-sm">
            Alle auf dieser Website veröffentlichten Inhalte unterliegen dem deutschen Urheberrecht. Vervielfältigung, Bearbeitung oder Verbreitung außerhalb der Grenzen des Urheberrechts bedarf der schriftlichen Zustimmung des jeweiligen Autors.
          </p>

          <h2 className="font-serif text-2xl text-[#1C3829] mt-12 mb-4">EU-Streitschlichtung gemäß Art. 14 ODR-VO</h2>
          <p className="mb-4 text-sm">
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung bereit:<br />
            <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-[#B8963E] hover:underline">
              https://ec.europa.eu/consumers/odr/
            </a>
          </p>
          <p className="text-sm font-italic">
            Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </div>
      </div>
    </div>
  );
}
