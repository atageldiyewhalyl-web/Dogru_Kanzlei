import { useLanguage } from "../context/LanguageContext";
import { useSEO, SITE_URL } from "../hooks/useSEO";
import { Link } from "react-router";

export function Datenschutz() {
  const { language, t, paths } = useLanguage();

  const segment = language === 'de' ? 'datenschutz' : 'gizlilik-politikasi';
  const altSegment = language === 'de' ? 'gizlilik-politikasi' : 'datenschutz';

  useSEO({
    title: language === 'de'
      ? 'Datenschutzerklärung | Doğru Kanzlei'
      : 'Gizlilik Politikası | Doğru Kanzlei',
    description: language === 'de'
      ? 'Datenschutzerklärung der Kanzlei Doğru in Mannheim.'
      : 'Mannheim\'daki Doğru Kanzlei\'nin gizlilik politikası.',
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
              {language === 'de' ? 'Datenschutz' : 'Gizlilik Politikası'}
            </li>
          </ol>
        </nav>

        <h1
          className="text-[#1C3829] mb-12"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(36px, 4vw, 48px)", fontWeight: 500 }}
        >
          {language === 'de' ? 'Datenschutzerklärung' : 'Gizlilik Politikası'}
        </h1>

        <div className="prose prose-lg max-w-none font-sans text-[#3a3a3a] leading-[1.9] font-light">
          {language === 'de' ? (
            <>
              <h2 className="font-serif text-2xl text-[#1C3829] mt-8 mb-4">1. Verantwortlicher</h2>
              <p>
                Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br />
                Hasan Doğru<br />
                R1 2,3<br />
                68161 Mannheim<br />
                Telefon: +4917661221210<br />
                E-Mail: Avukat.hasandogru@outlook.de
              </p>

              <h2 className="font-serif text-2xl text-[#1C3829] mt-8 mb-4">2. Erhebung und Speicherung personenbezogener Daten</h2>
              <p>
                Beim Besuch unserer Website werden automatisch Informationen an den Server unserer Website gesendet.
                Diese Informationen werden temporär in einem sog. Logfile gespeichert. Weitere Informationen werden
                in Kürze ergänzt.
              </p>

              <h2 className="font-serif text-2xl text-[#1C3829] mt-8 mb-4">3. Kontaktformular</h2>
              <p>
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
                Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der
                Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
              </p>

              <p className="mt-8 text-sm text-[#6a6a6a] italic">
                Diese Datenschutzerklärung wird in Kürze vervollständigt.
              </p>
            </>
          ) : (
            <>
              <h2 className="font-serif text-2xl text-[#1C3829] mt-8 mb-4">1. Sorumlu Kişi</h2>
              <p>
                Bu web sitesindeki veri işlemeden sorumlu olan kişi:<br />
                Hasan Doğru<br />
                R1 2,3<br />
                68161 Mannheim<br />
                Telefon: +4917661221210<br />
                E-posta: Avukat.hasandogru@outlook.de
              </p>

              <h2 className="font-serif text-2xl text-[#1C3829] mt-8 mb-4">2. Kişisel Verilerin Toplanması ve Saklanması</h2>
              <p>
                Web sitemizi ziyaret ettiğinizde, bilgiler otomatik olarak web sitesi sunucumuza gönderilir.
                Bu bilgiler geçici olarak bir log dosyasında saklanır.
              </p>

              <h2 className="font-serif text-2xl text-[#1C3829] mt-8 mb-4">3. İletişim Formu</h2>
              <p>
                İletişim formu aracılığıyla bize soru gönderdiğinizde, sorgulama formundaki bilgileriniz,
                orada belirttiğiniz iletişim bilgileri dahil olmak üzere, sorgunun işlenmesi ve
                takip soruları için tarafımızca saklanır.
              </p>

              <p className="mt-8 text-sm text-[#6a6a6a] italic">
                Bu gizlilik politikası yakında tamamlanacaktır.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
