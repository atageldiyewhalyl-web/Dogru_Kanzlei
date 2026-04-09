import { useLanguage } from "../context/LanguageContext";
import { useSEO, SITE_URL } from "../hooks/useSEO";
import { Link } from "react-router";
import { usePrerender } from "../hooks/usePrerender";

export function Datenschutz() {
  const { language, t, paths } = useLanguage();
  usePrerender();

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

        <div className="prose prose-lg max-w-none font-sans text-[#3a3a3a] leading-[1.8] font-medium">
          {language === 'de' ? (
            <>
              <p className="mb-8">
                Wir freuen uns über Ihr Interesse an unserer Website. Der Schutz Ihrer persönlichen Daten ist uns sehr wichtig. Nachfolgend informieren wir Sie ausführlich über die Verarbeitung personenbezogener Daten bei der Nutzung unserer Website.
              </p>

              <h2 className="font-serif text-2xl text-[#1C3829] mt-8 mb-4">1. Verantwortliche Stelle</h2>
              <p className="mb-8">
                Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br />
                Hasan Doğru<br />
                R1 2-3, 68161 Mannheim<br />
                E-Mail: info@hasandogru.de, Avukat.hasandogru@outlook.de<br />
                Telefon: +49 176 61221210
              </p>

              <h2 className="font-serif text-2xl text-[#1C3829] mt-8 mb-4">2. Erhebung und Speicherung personenbezogener Daten sowie Art und Zweck ihrer Verwendung</h2>
              
              <h3 className="text-xl font-serif text-[#1C3829] mt-6 mb-3">a) Beim Besuch der Website</h3>
              <p className="mb-4">
                Beim Aufrufen unserer Website werden durch den Browser Ihres Endgeräts automatisch Informationen an unseren Server gesendet. Diese Informationen werden temporär in Logfiles gespeichert. Folgende Daten können erfasst werden:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-1 text-sm">
                <li>IP-Adresse des anfragenden Endgeräts</li>
                <li>Datum und Uhrzeit des Zugriffs</li>
                <li>Name und URL der abgerufenen Datei</li>
                <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
                <li>Verwendeter Browser und ggf. Betriebssystem Ihres Endgeräts</li>
              </ul>
              <p className="mb-6">
                Die Verarbeitung erfolgt zur Sicherstellung eines reibungslosen Verbindungsaufbaus, der komfortablen Nutzung der Website sowie zur Auswertung der Systemsicherheit und -stabilität.
              </p>

              <h3 className="text-xl font-serif text-[#1C3829] mt-6 mb-3">b) Bei Nutzung des Kontaktformulars oder E-Mail-Kontakts</h3>
              <p className="mb-8">
                Wenn Sie uns per Formular oder E-Mail kontaktieren, verarbeiten wir die von Ihnen freiwillig übermittelten Daten (z. B. Name, E-Mail-Adresse, Nachricht) ausschließlich zur Bearbeitung Ihrer Anfrage.
              </p>

              <h2 className="font-serif text-2xl text-[#1C3829] mt-8 mb-4">3. Weitergabe von Daten</h2>
              <p className="mb-4">Eine Übermittlung Ihrer personenbezogenen Daten an Dritte erfolgt nur, wenn:</p>
              <ul className="list-disc pl-6 mb-8 space-y-1 text-sm">
                <li>Sie ausdrücklich eingewilligt haben,</li>
                <li>die Verarbeitung zur Erfüllung eines Vertrags erforderlich ist,</li>
                <li>eine gesetzliche Verpflichtung besteht, oder</li>
                <li>die Weitergabe zur Wahrung berechtigter Interessen erforderlich ist.</li>
              </ul>

              <h2 className="font-serif text-2xl text-[#1C3829] mt-8 mb-4">4. Cookies</h2>
              <p className="mb-8">
                Unsere Website verwendet Cookies. Dabei handelt es sich um kleine Dateien, die automatisch auf Ihrem Endgerät gespeichert werden. Cookies dienen dazu, die Nutzung unserer Website zu erleichtern, statistische Auswertungen zu ermöglichen und bestimmte Funktionen bereitzustellen. Sie können das Speichern von Cookies in den Einstellungen Ihres Browsers deaktivieren.
              </p>

              <h2 className="font-serif text-2xl text-[#1C3829] mt-8 mb-4">5. Analyse-Tools</h2>
              <p className="mb-8">
                Wir können Analyse-Tools wie Google Analytics verwenden, um das Nutzerverhalten auszuwerten. Die dabei gewonnenen Daten werden anonymisiert. Details entnehmen Sie bitte den Datenschutzhinweisen des jeweiligen Dienstanbieters.
              </p>

              <h2 className="font-serif text-2xl text-[#1C3829] mt-8 mb-4">6. Ihre Rechte als betroffene Person</h2>
              <p className="mb-4">Sie haben das Recht:</p>
              <ul className="list-disc pl-6 mb-8 space-y-1 text-sm">
                <li>Auskunft über Ihre gespeicherten Daten zu erhalten (Art. 15 DSGVO),</li>
                <li>Berichtigung unrichtiger Daten zu verlangen (Art. 16 DSGVO),</li>
                <li>Löschung Ihrer Daten zu verlangen (Art. 17 DSGVO),</li>
                <li>Einschränkung der Verarbeitung zu verlangen (Art. 18 DSGVO),</li>
                <li>Widerspruch gegen die Verarbeitung einzulegen (Art. 21 DSGVO),</li>
                <li>Datenübertragbarkeit zu verlangen (Art. 20 DSGVO).</li>
              </ul>

              <h2 className="font-serif text-2xl text-[#1C3829] mt-8 mb-4">7. Datensicherheit</h2>
              <p className="mb-8">
                Wir setzen technische und organisatorische Sicherheitsmaßnahmen ein, um Ihre Daten gegen Verlust, Missbrauch oder unbefugten Zugriff zu schützen.
              </p>

              <h2 className="font-serif text-2xl text-[#1C3829] mt-8 mb-4">8. Aktualität und Änderung dieser Datenschutzerklärung</h2>
              <p className="mb-8">
                Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen, um sie an aktuelle rechtliche Anforderungen anzupassen.
              </p>
            </>
          ) : (
            <>
              <p className="mb-8">
                Web sitemize gösterdiğiniz ilgi için teşekkür ederiz. Kişisel verilerinizin korunması bizim için çok önemlidir. Aşağıda, web sitemizi kullanımınız sırasında kişisel verilerin işlenmesi hakkında size ayrıntılı bilgi veriyoruz.
              </p>

              <h2 className="font-serif text-2xl text-[#1C3829] mt-8 mb-4">1. Sorumlu Kişi</h2>
              <p className="mb-8">
                Bu web sitesindeki veri işlemeden sorumlu olan kişi:<br />
                Hasan Doğru<br />
                R1 2-3, 68161 Mannheim<br />
                E-posta: info@hasandogru.de, Avukat.hasandogru@outlook.de<br />
                Telefon: +49 176 61221210
              </p>

              <h2 className="font-serif text-2xl text-[#1C3829] mt-8 mb-4">2. Kişisel Verilerin Toplanması, Saklanması ve Kullanım Amacı</h2>
              
              <h3 className="text-xl font-serif text-[#1C3829] mt-6 mb-3">a) Web Sitesi Ziyareti Sırasında</h3>
              <p className="mb-4">
                Web sitemizi ziyaret ettiğinizde, cihazınızdaki tarayıcı otomatik olarak sunucumuza bilgi gönderir. Bu bilgiler geçici olarak günlük dosyalarında (log files) saklanır. Aşağıdaki veriler toplanabilir:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-1 text-sm">
                <li>Talep eden cihazın IP adresi</li>
                <li>Erişimin tarihi ve saati</li>
                <li>Erişilen dosyanın adı ve URL'si</li>
                <li>Erişimin yapıldığı web sitesi (Referrer-URL)</li>
                <li>Kullanılan tarayıcı ve varsa cihazınızın işletim sistemi</li>
              </ul>
              <p className="mb-6">
                İşleme faaliyetleri, sorunsuz bir bağlantı kurulumunu sağlamak, web sitesinin rahat kullanımını garanti etmek ve sistem güvenliği ile kararlılığını değerlendirmek amacıyla gerçekleştirilir.
              </p>

              <h3 className="text-xl font-serif text-[#1C3829] mt-6 mb-3">b) İletişim Formu veya E-posta Yoluyla İletişim</h3>
              <p className="mb-8">
                Bizimle forum veya e-posta yoluyla iletişime geçtiğinizde, kendi isteğinizle ilettiğiniz veriler (örn. isim, e-posta adresi, mesaj) yalnızca talebinizin işleme alınması amacıyla kullanılır.
              </p>

              <h2 className="font-serif text-2xl text-[#1C3829] mt-8 mb-4">3. Verilerin Paylaşılması</h2>
              <p className="mb-4">Kişisel verileriniz üçüncü taraflara yalnızca şu durumlarda aktarılır:</p>
              <ul className="list-disc pl-6 mb-8 space-y-1 text-sm">
                <li>Açıkça onay verdiyseniz,</li>
                <li>Bir sözleşmenin ifası için işleme gerekliyse,</li>
                <li>Yasal bir yükümlülük varsa veya</li>
                <li>Aktarım, meşru menfaatlerin korunması için gerekliyse.</li>
              </ul>

              <h2 className="font-serif text-2xl text-[#1C3829] mt-8 mb-4">4. Çerezler (Cookies)</h2>
              <p className="mb-8">
                Web sitemiz çerezler kullanmaktadır. Çerezler, cihazınıza otomatik olarak kaydedilen küçük dosyalardır. Çerezler, web sitemizin kullanımını kolaylaştırmak, istatistiksel değerlendirmeler yapmak ve belirli işlevleri sunmak amacına hizmet eder. Tarayıcınızın ayarlarından çerezlerin kaydedilmesini devre dışı bırakabilirsiniz.
              </p>

              <h2 className="font-serif text-2xl text-[#1C3829] mt-8 mb-4">5. Analiz Araçları</h2>
              <p className="mb-8">
                Kullanıcı davranışlarını değerlendirmek için Google Analytics gibi analiz araçları kullanabiliriz. Elde edilen veriler anonimleştirilir. Detaylı bilgi için ilgili servis sağlayıcının gizlilik politikasına bakabilirsiniz.
              </p>

              <h2 className="font-serif text-2xl text-[#1C3829] mt-8 mb-4">6. Veri Sahibi Olarak Haklarınız</h2>
              <p className="mb-4">Aşağıdaki haklara sahipsiniz:</p>
              <ul className="list-disc pl-6 mb-8 space-y-1 text-sm">
                <li>Saklanan verileriniz hakkında bilgi alma (GDPR/DSGVO Madde 15),</li>
                <li>Yanlış verilerin düzeltilmesini talep etme (Madde 16),</li>
                <li>Verilerinizin silinmesini talep etme (Madde 17),</li>
                <li>İşlemenin kısıtlanmasını talep etme (Madde 18),</li>
                <li>İşlemeye itiraz etme (Madde 21),</li>
                <li>Veri taşınabilirliği talep etme (Madde 20).</li>
              </ul>

              <h2 className="font-serif text-2xl text-[#1C3829] mt-8 mb-4">7. Veri Güvenliği</h2>
              <p className="mb-8">
                Verilerinizi kayıp, kötüye kullanım veya yetkisiz erişime karşı korumak için teknik ve organizasyonel güvenlik önlemleri uygulamaktayız.
              </p>

              <h2 className="font-serif text-2xl text-[#1C3829] mt-8 mb-4">8. Gizlilik Politikasının Güncelliği ve Değiştirilmesi</h2>
              <p className="mb-8">
                Gerektiğinde bu gizlilik politikasını güncel yasal gerekliliklere uyarlamak amacıyla değiştirme hakkımızı saklı tutarız.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
