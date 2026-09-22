import { useLanguage } from "../context/LanguageContext";
import { useSEO, SITE_URL } from "../hooks/useSEO";
import { Link } from "react-router";
import { usePrerender } from "../hooks/usePrerender";

export function Impressum() {
  const { language, t, paths } = useLanguage();
  usePrerender();

  const segment = language === 'de' ? 'impressum' : 'yasal-bilgiler';
  const altSegment = language === 'de' ? 'yasal-bilgiler' : 'impressum';

  useSEO({
    title: language === 'de'
      ? 'Impressum | Doğru Kanzlei'
      : 'Yasal Bilgiler | Doğru Kanzlei',
    description: language === 'de'
      ? 'Impressum der Kanzlei Doğru in Mannheim. Angaben gemäß § 5 DDG.'
      : 'Mannheim\'daki Doğru Kanzlei yasal bilgileri.',
    lang: language,
    canonical: `${SITE_URL}/${language}/${segment}`,
    alternateLang: {
      lang: language === 'de' ? 'tr' : 'de',
      href: `${SITE_URL}/${language === 'de' ? 'tr' : 'de'}/${altSegment}`,
    },
    noindex: true,
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
            Angaben gemäß § 5 DDG
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
            <p className="mb-2"><strong>E-Mail:</strong><br />info@hasandogru.de</p>
            <p className="mb-2"><strong>Webseite:</strong><br />https://www.hasandogru.de</p>
          </div>

          <h2 className="font-serif text-2xl text-[#1C3829] mt-8 mb-4">
            Steuerliche Angaben
          </h2>
          <div className="mb-8">
            {/* Kein Handelsregistereintrag: Die Kanzlei wird als Einzelunternehmen
                geführt und ist kein Handelsgewerbe i.S.d. § 1 HGB. Die Kammer-
                zugehörigkeit steht unter „Berufsrechtliche Angaben“.
                Laut Bescheid des Finanzamts Mannheim-Stadt (27.05.2025) gilt die
                Kleinunternehmerregelung; eine USt-IdNr. besteht daher nicht.
                § 5 Abs. 1 Nr. 6 DDG verlangt nur eine vorhandene USt-IdNr., nicht
                die Steuernummer — die wird bewusst nicht veröffentlicht. */}
            <p className="mb-2">
              Umsatzsteuer wird aufgrund der Kleinunternehmerregelung gemäß § 19 UStG
              nicht erhoben; eine Umsatzsteuer-Identifikationsnummer besteht nicht.
            </p>
          </div>

          <div className="bg-[#1C3829] text-white p-6 my-8">
            <p className="font-mono text-sm tracking-widest mb-0">
              IBAN: DE70 6705 0505 0040 5727 75
            </p>
          </div>

          <h2 className="font-serif text-2xl text-[#1C3829] mt-8 mb-4">
            Berufsrechtliche Angaben
          </h2>
          <div className="mb-8">
            <p className="mb-2">
              <strong>Gesetzliche Berufsbezeichnung:</strong><br />
              Avukat, verliehen in der Republik Türkei
            </p>
            <p className="mb-2">
              <strong>Zuständige Kammern:</strong><br />
              Ankara Barosu (Rechtsanwaltskammer Ankara), Sicil-Nr. 47068<br />
              Rechtsanwaltskammer Karlsruhe — Registrierung als niedergelassener
              ausländischer Rechtsanwalt gemäß § 207 BRAO
            </p>
            <p className="mb-2">
              <strong>Umfang der Tätigkeit:</strong><br />
              Die Beratung und Vertretung erfolgt gemäß § 207 BRAO ausschließlich im
              türkischen Recht und im Völkerrecht. Eine Beratung oder Vertretung im deutschen
              Recht findet nicht statt.
            </p>
            <p className="mb-2">
              <strong>Berufsrechtliche Regelungen:</strong><br />
              Bundesrechtsanwaltsordnung (BRAO), Berufsordnung für Rechtsanwälte (BORA),
              Rechtsanwaltsvergütungsgesetz (RVG), Berufsregeln der Rechtsanwälte der
              Europäischen Union (CCBE) sowie das Anwaltsgesetz der Republik Türkei
              (Avukatlık Kanunu Nr. 1136). Die Regelungen sind abrufbar unter{" "}
              <a
                href="https://www.brak.de/fuer-anwaelte/berufsrecht/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#B8963E] hover:underline"
              >
                brak.de
              </a>
              .
            </p>
          </div>

          <h2 className="font-serif text-2xl text-[#1C3829] mt-8 mb-4">
            Berufshaftpflichtversicherung
          </h2>
          <div className="mb-8">
            {/* § 2 Abs. 1 Nr. 11 DL-InfoV. Versicherer laut Police SV97983281
                (Vermögensschaden-Haftpflichtversicherung, aktiv). Policennummer
                und Prämie sind keine Pflichtangaben und werden nicht veröffentlicht.
                OFFEN: räumlicher Geltungsbereich laut Versicherungsschein ergänzen. */}
            <p className="mb-2">
              <strong>Versicherer:</strong><br />
              ERGO Versicherung AG<br />
              ERGO-Platz 1, 40477 Düsseldorf
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
            Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte verantwortlich. Nach §§ 8 bis 10 DDG sind wir jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen.
          </p>

          <h3 className="text-xl font-serif text-[#1C3829] mt-8 mb-3">2. Haftung für externe Links</h3>
          <p className="mb-6 text-sm">
            Unsere Website enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Betreiber verantwortlich. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
          </p>

          <h3 className="text-xl font-serif text-[#1C3829] mt-8 mb-3">3. Urheberrecht</h3>
          <p className="mb-6 text-sm">
            Alle auf dieser Website veröffentlichten Inhalte unterliegen dem deutschen Urheberrecht. Vervielfältigung, Bearbeitung oder Verbreitung außerhalb der Grenzen des Urheberrechts bedarf der schriftlichen Zustimmung des jeweiligen Autors.
          </p>

          <h2 className="font-serif text-2xl text-[#1C3829] mt-12 mb-4">Verbraucherstreitbeilegung</h2>
          <p className="mb-4 text-sm">
            Die Plattform der Europäischen Kommission zur Online-Streitbeilegung (OS-Plattform)
            wurde zum 20. Juli 2025 eingestellt; ein Verweis darauf entfällt daher.
          </p>
          <p className="mb-4 text-sm">
            Für Streitigkeiten zwischen Rechtsanwältinnen bzw. Rechtsanwälten und ihren Auftraggebern
            besteht die Schlichtungsstelle der Rechtsanwaltschaft (Neue Grünstraße 17, 10179 Berlin,{" "}
            <a
              href="https://www.schlichtungsstelle-der-rechtsanwaltschaft.de"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#B8963E] hover:underline"
            >
              schlichtungsstelle-der-rechtsanwaltschaft.de
            </a>
            ).
          </p>
          <p className="text-sm font-italic">
            Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen (§ 36 VSBG).
          </p>
        </div>
      </div>
    </div>
  );
}
