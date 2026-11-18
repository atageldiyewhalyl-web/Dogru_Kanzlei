import investorResidenceImg from "@/assets/blog_mavi_kart.avif";
import type { BlogPost } from "./blogPosts";

// Client draft "Blog – Yatırım Karşılığı İkamet İzni (TR/DE)", 18.11.2026. Turkish and German only.
// Checked against the official text: Resmî Gazete 18.11.2026, sayı 33434, CK 11994 (art. 1–5 and the
// list match the draft; art. 4 reads "değerlendirilmez"). The draft's "Almanya tarafı" section dealt
// with German residence, tax and pension law; under § 207 BRAO it is cut to a neutral referral plus
// the Turkish tax-residence rule (GVK m. 4/5). Update when the Interior Ministry publishes the procedure.
// FAQs live in the faq arrays — the body must not contain an FAQ heading.
const RG_URL = "https://www.resmigazete.gov.tr/eskiler/2026/11/20261118-3.pdf";

export const investorResidencePermitPost: BlogPost = {
  slug: "yatirim-karsiligi-ikamet-izni-almanyada-yasayanlar",
  slugDE: "aufenthaltserlaubnis-tuerkei-geldanlage",
  slugTR: "yatirim-karsiligi-ikamet-izni-almanyada-yasayanlar",
  slugEN: "",
  titleDE: "Aufenthaltserlaubnis in der Türkei gegen Geldanlage: Was der neue Präsidialbeschluss für Menschen in Deutschland bedeutet",
  titleTR: "Türkiye'de yatırım karşılığı 3 ve 5 yıllık ikamet izni: Almanya'da yaşıyorsanız bu kararı nasıl okumalısınız?",
  titleEN: "",
  excerptDE: "Seit 18.11.2026: 3 Jahre Aufenthalt ab 150.000 USD, 5 Jahre ab 200.000 USD. Wer profitiert, was nicht zählt und was noch offen ist.",
  excerptTR: "150.000 dolara 3, 200.000 dolara 5 yıllık ikamet izni: kimler yararlanır, ev alımı sayılır mı, vatandaşlık verir mi? Almanya'da yaşayanlar için özet.",
  excerptEN: "",
  metaTitleDE: "Türkei: Aufenthaltserlaubnis für Investoren ab 150.000 USD",
  metaTitleTR: "Yatırımla Türkiye'de İkamet İzni: Almanya'dan Bakış",
  metaDescriptionDE: "Seit 18.11.2026: 3 Jahre Aufenthalt ab 150.000 USD, 5 Jahre ab 200.000 USD. Wer profitiert, was nicht zählt und was noch offen ist – der Überblick.",
  metaDescriptionTR: "150.000 dolara 3, 200.000 dolara 5 yıllık ikamet izni: kimler yararlanır, ev alımı sayılır mı, vatandaşlık verir mi? Almanya'da yaşayanlar için özet.",
  keywordsDE: "aufenthaltserlaubnis türkei, aufenthaltstitel türkei geldanlage, türkei aufenthalt rentner, ikamet izni, aufenthaltserlaubnis türkei investor, türkei 150.000 dollar aufenthalt, präsidialbeschluss 11994",
  keywordsTR: "yatırım karşılığı ikamet izni, yabancı yatırımcı oturma izni, 150 bin dolar oturma izni, alman vatandaşı türkiye oturum, 11994 sayılı cumhurbaşkanı kararı, yatırımcı ikamet izni 2026",
  articleAuthor: "Av. Hasan Doğru",
  articleSectionDE: "Migrationsrecht",
  articleSectionTR: "Göç Hukuku",
  articleTagsDE: ["Aufenthaltserlaubnis Türkei", "Geldanlage", "Mavi Kart", "Präsidialbeschluss 11994"],
  articleTagsTR: ["İkamet İzni", "Yatırımcı İkamet İzni", "Mavi Kart", "11994 sayılı Karar"],
  exactHreflangs: true,
  category: "Göç Hukuku",
  categoryDE: "Migrationsrecht",
  categoryEN: "Migration Law",
  image: investorResidenceImg,
  dateDE: "18. November 2026",
  dateTR: "18 Kasım 2026",
  dateEN: "",
  readTimeDE: "7 Min. Lesezeit",
  readTimeTR: "7 dk okuma",
  readTimeEN: "",
  publishedAt: "2026-11-18",
  modifiedAt: "2026-11-18",
  publishedAtDE: "2026-11-18",
  publishedAtTR: "2026-11-18",
  modifiedAtDE: "2026-11-18",
  modifiedAtTR: "2026-11-18",
  ctaTitleDE: "Welcher Aufenthaltsweg passt zu Ihnen?",
  ctaTitleTR: "Size hangi ikamet yolu uygun?",
  ctaDescriptionDE: "Mavi Kart, Familienaufenthalt, Immobilie oder Geldanlage: Schildern Sie kurz Ihre Situation, wir ordnen sie nach türkischem Recht ein.",
  ctaDescriptionTR: "Mavi Kart, aile ikamet izni, taşınmaz veya yatırım: Durumunuzu kısaca yazın, Türk hukuku bakımından değerlendirelim.",
  contentTR: `> **Hukuki Bilgilendirme:** Bu makale yalnızca Türk hukukuna ilişkin genel bilgi amaçlıdır ve münferit hukuki danışmanlık yerine geçmez. Doğru Kanzlei, § 207 BRAO kapsamında yalnızca Türk hukuku konularında danışmanlık vermektedir.

18 Kasım 2026 tarihli Resmî Gazete'de yayımlanan [11994 sayılı Cumhurbaşkanı Kararı](${RG_URL}), Türkiye'de çalışmayan yabancılara belirli finansal yatırımlar karşılığında üç veya beş yıllık ikamet izni verilmesinin yolunu açtı. Haber "150 bin dolara oturum" başlığıyla dolaşıyor. Almanya'da yaşayanlar için asıl sorular ise başka: Bu izin kimin işine yarar, kimin buna hiç ihtiyacı yok, ev almak sayılır mı, vatandaşlığa gider mi?

## Kısaca

- En az 150.000 ABD doları yatırım: 3 yıllık ikamet izni. En az 200.000 ABD doları: 5 yıllık ikamet izni. Tutar başka bir dövizle de karşılanabilir.
- Sayılan yatırımlar: Türkiye'deki bankalarda mevduat, devlet borçlanma araçları, gayrimenkul yatırım fonu veya girişim sermayesi yatırım fonu katılma payı, bireysel emeklilik katkı payı.
- Yatırım, izin süresinin yarısı boyunca korunmalıdır: 18 ay veya 30 ay.
- Doğrudan ev, daire veya arsa satın almak bu kararın kapsamında değildir.
- İzin çalışma hakkı vermez ve yatırım yoluyla vatandaşlığa dayanak olmaz.
- Başvurunun nasıl yapılacağını İçişleri Bakanlığı ayrıca belirleyecek. Bu yazının tarihinde usul ve esaslar henüz yayımlanmamıştır.

## Karar ne getiriyor?

Yabancılar ve Uluslararası Koruma Kanunu (6458 sayılı Kanun) m. 31, Türkiye'de çalışmayan ancak Cumhurbaşkanınca belirlenecek kapsam ve tutarda yatırım yapacak yabancılara kısa dönem ikamet izni verilebileceğini öngörür. Yeni karar bu hükmün kapsamını ve tutarını belirliyor.

| Yatırım tutarı | İkamet izni süresi | Yatırımın korunacağı asgari süre |
|---|---|---|
| En az 150.000 ABD doları veya karşılığı döviz | 3 yıl | 18 ay |
| En az 200.000 ABD doları veya karşılığı döviz | 5 yıl | 30 ay |

Hangi yatırımın şartı karşıladığını, yatırımın türüne göre ilgili kurum tespit eder.

| Yatırım türü | Tespiti yapan kurum |
|---|---|
| Türkiye'de faaliyet gösteren bankalarda mevduat | Bankacılık Düzenleme ve Denetleme Kurumu (BDDK) |
| Devlet borçlanma araçları | Hazine ve Maliye Bakanlığı |
| Gayrimenkul yatırım fonu veya girişim sermayesi yatırım fonu katılma payı | Sermaye Piyasası Kurulu (SPK) |
| Bireysel emeklilik sistemi katkı payı | Sigortacılık ve Özel Emeklilik Düzenleme ve Denetleme Kurumu (SEDDK) |

Yatırımcının yabancı eşi ile kendisinin ve eşinin ergin olmayan veya bağımlı yabancı çocukları da bu izinden yararlanabilir.

## Almanya'da yaşıyorsanız: sizin durumunuz hangisi?

Almanya'daki Türk toplumunun büyük bölümü için bu karar yeni bir ihtiyaç doğurmuyor. Kararın asıl muhatabı, Türk vatandaşı olmayan aile üyeleri, hayat arkadaşları ve Türkiye'de uzun süre kalmak isteyen yabancılardır.

| Durumunuz | Bu izne ihtiyacınız var mı? |
|---|---|
| Türk vatandaşısınız (Alman vatandaşlığınız da olsa) | Hayır. Türkiye'de yaşamak için ikamet iznine ihtiyacınız yoktur. |
| Mavi Kart sahibisiniz | Hayır. Mavi Kart sahipleri ikamet izninden muaftır. |
| Türk vatandaşlığından izinle çıktınız, Mavi Kart'ınız yok | Önce [Mavi Kart](/tr/hizmetler/mavi-kart) hakkınız incelenmelidir; çoğu durumda yatırım gerektirmeyen yol budur. |
| Türk vatandaşıyla evli bir yabancısınız | Kural olarak hayır. Aile ikamet izni yatırım şartı aramaz. |
| Türk vatandaşı olmayan hayat arkadaşınızla evli değilsiniz | Aile ikamet izni evlilik bağına dayanır. Yatırım karşılığı ikamet izni hayat arkadaşınız için bir seçenek olabilir. |
| Alman vatandaşısınız, emeklilikte veya kış aylarında uzun süre Türkiye'de kalmak istiyorsunuz | Karar sizin için yeni bir seçenektir. Vizesiz kalış 180 gün içinde 90 günle sınırlıdır; daha uzun kalış ikamet izni gerektirir ve diğer kısa dönem izinler kural olarak en fazla ikişer yıllık verilir. |
| Almanya'da oturum izniyle yaşayan başka bir ülkenin vatandaşısınız | Seçenek olabilir; ancak Türkiye'de uzun kalışın Almanya'daki oturum izninize etkisini önceden kontrol ettirmelisiniz. |

## Haber başlıklarında yer almayan altı nokta

- **Ev almak bu kararda sayılmıyor.** Sayılan tek gayrimenkul bağlantılı araç gayrimenkul yatırım fonu katılma payıdır; bu bir tapu değil, fon payıdır. Taşınmaz üzerinden ikamet izni ayrı bir yoldur: 16 Ekim 2023'ten sonra edinilen taşınmazlarda en az 200.000 ABD doları değer aranır ve izin kural olarak en fazla ikişer yıllık verilir.
- **Bu bir vatandaşlık programı değil.** Karar, bu kapsamda verilen izinlerin Türk Vatandaşlığı Kanunu m. 12 çerçevesinde değerlendirilmeyeceğini açıkça belirtiyor. Yatırım yoluyla vatandaşlık ayrı ve daha yüksek eşiklere tabidir.
- **Çalışma hakkı yok.** İzin, Türkiye'de çalışmayan yabancılar içindir. Türkiye'de çalışmak isteyen yabancının ayrıca çalışma iznine ihtiyacı vardır.
- **Para belirli bir süre bağlı kalır.** Yatırımın 18 veya 30 ay korunması gerekiyor. Sürenin hangi gün başlayacağı, yatırım erken çözülürse iznin ne olacağı ve tutarın dövizde mi Türk lirasında mı tutulacağı kararda yazmıyor; bu sorular usul ve esaslarla netleşecek.
- **Yatırım tek başına yetmez.** [Giriş yasağı](/tr/hizmetler/turkiye-vize-giris-yasagi) bulunmaması, geçerli pasaport ve sağlık sigortası gibi genel ikamet şartları aranmaya devam eder. Ayrıca Kanun, kısa dönem ikamet izinlerinde son bir yıl içinde toplam 120 günden fazla yurt dışında kalınmasını ret, iptal veya uzatmama sebebi sayar. Yılın çoğunu Almanya'da geçirecekseniz bu kuralın yatırımcı izninde nasıl uygulanacağı sizin için belirleyici olacaktır.
- **Uzatma düzenlenmemiş.** Üç veya beş yıl dolduğunda ne olacağı kararda yer almıyor. Süresiz kalış hakkı veren uzun dönem ikamet izni ise Türkiye'de kesintisiz en az sekiz yıl ikamet şartına bağlıdır.

## Almanya tarafını ayrıca kontrol ettirin

Türkiye'de alınan bir ikamet izni, Almanya'daki hukuki durumunuzu kendiliğinden belirlemez. Almanya'daki oturum izniniz, vergi, emeklilik ve sağlık sigortası bakımından doğacak sonuçlar Alman hukukuna tabidir; bu konuları Almanya'da yetkili bir meslek mensubuyla görüşün. Türk vergi hukuku bakımından ise bir takvim yılında Türkiye'de devamlı olarak altı aydan fazla oturmak kural olarak Türkiye'de tam mükellefiyet sebebidir (Gelir Vergisi Kanunu m. 4); istirahat ve seyahat amaçlı kalışlar için Kanun istisna öngörür (m. 5).

## Şimdi ne yapmalısınız?

- Usul ve esaslar yayımlanmadan para transfer etmeyin. Hangi hesabın, hangi belgenin ve hangi tarihin esas alınacağı belli olmadan yapılan bir yatırımın sonradan kabul edilip edilmeyeceği bilinmiyor.
- Önce hangi yola ihtiyacınız olduğunu netleştirin: [Mavi Kart](/tr/hizmetler/mavi-kart), aile ikamet izni, taşınmaz üzerinden ikamet izni veya yatırım karşılığı ikamet izni.
- Türkiye'ye girişinizde geçmişten kalan bir engel (giriş yasağı, vize ihlali, sınır dışı kaydı) varsa önce onu çözün: [Türkiye giriş yasağı ve vize reddi](/tr/hizmetler/turkiye-vize-giris-yasagi).
- Eş ve çocuklar için gerekecek nüfus ve evlilik belgelerini [apostil](/tr/hizmetler/vekaletname-ve-apostil) ve tercümeleriyle birlikte şimdiden hazırlayın.

## Bilgi almak için

Türkiye'de ikamet izni, Mavi Kart, aile ikamet izni ve giriş yasağı konularında Türk hukuku bakımından bilgi almak için bize ulaşabilirsiniz.

- **Telefon ve WhatsApp:** +49 176 6122 1210
- **E-posta:** info@hasandogru.de

Kaynak: [Resmî Gazete, 18.11.2026, sayı 33434, Karar Sayısı 11994](${RG_URL}); 6458 sayılı Kanun m. 20, 31, 33 ve 42; 5901 sayılı Kanun m. 12 ve 28.

---

Bu makaleyi Almanca olarak da yayımladık: [Aufenthaltserlaubnis in der Türkei gegen Geldanlage](/de/blog/aufenthaltserlaubnis-tuerkei-geldanlage)

> **Hukuki Bilgilendirme:** Bu yazı 18.11.2026 tarihindeki duruma göre hazırlanmıştır ve İçişleri Bakanlığı'nın usul ve esasları yayımlandığında güncellenecektir. Genel bilgilendirme amaçlıdır; hukuki danışmanlık veya yatırım tavsiyesi değildir. Av. Hasan Doğru, Ankara Barosu'na kayıtlıdır ve Karlsruhe Avukatlar Odası (Rechtsanwaltskammer Karlsruhe) üyesidir (BRAO § 207); yalnızca Türk hukuku ve uluslararası hukuk alanında danışmanlık verir.`,
  contentDE: `> **Rechtlicher Hinweis:** Dieser Artikel befasst sich ausschließlich mit dem türkischen Recht und dient der allgemeinen Information; er ersetzt keine Beratung im Einzelfall. Die Doğru Kanzlei berät gemäß § 207 BRAO ausschließlich im türkischen Recht und Völkerrecht.

Seit dem 18. November 2026 können Ausländerinnen und Ausländer, die in der Türkei nicht arbeiten, gegen bestimmte Finanzanlagen eine Aufenthaltserlaubnis für drei oder fünf Jahre erhalten. Grundlage ist der [Präsidialbeschluss Nr. 11994](${RG_URL}), veröffentlicht im türkischen Amtsblatt (Resmî Gazete) Nr. 33434. In den Schlagzeilen heißt es „Aufenthalt ab 150.000 Dollar“. Für Menschen, die in Deutschland leben, sind andere Fragen wichtiger: Wem nützt diese Erlaubnis, wer braucht sie gar nicht, zählt ein Immobilienkauf, und führt sie zur türkischen Staatsangehörigkeit?

## Das Wichtigste in Kürze

- Anlage von mindestens 150.000 US-Dollar: Aufenthaltserlaubnis für 3 Jahre. Mindestens 200.000 US-Dollar: 5 Jahre. Der Betrag kann auch in einer anderen Fremdwährung erbracht werden.
- Anerkannte Anlagen: Einlagen bei Banken in der Türkei, türkische Staatsanleihen, Anteile an Immobilien- oder Wagniskapitalfonds sowie Beiträge zur privaten Altersvorsorge (BES).
- Die Anlage muss für die Hälfte der Erlaubnisdauer gehalten werden: 18 bzw. 30 Monate.
- Der direkte Kauf einer Wohnung, eines Hauses oder eines Grundstücks zählt nicht.
- Die Erlaubnis berechtigt nicht zur Erwerbstätigkeit und führt nicht zur Einbürgerung durch Investition.
- Das Antragsverfahren legt das türkische Innenministerium gesondert fest. Zum Zeitpunkt dieses Beitrags sind die Verfahrensregeln noch nicht veröffentlicht.

## Was regelt der Beschluss?

Das türkische Gesetz Nr. 6458 über Ausländer und internationalen Schutz sieht in Art. 31 vor, dass Ausländer, die in der Türkei nicht arbeiten, aber in einem vom Staatspräsidenten bestimmten Umfang investieren, eine Kurzzeitaufenthaltserlaubnis erhalten können. Der neue Beschluss legt Umfang und Beträge fest.

| Anlagebetrag | Dauer der Aufenthaltserlaubnis | Mindesthaltedauer der Anlage |
|---|---|---|
| Mindestens 150.000 US-Dollar oder Gegenwert in Fremdwährung | 3 Jahre | 18 Monate |
| Mindestens 200.000 US-Dollar oder Gegenwert in Fremdwährung | 5 Jahre | 30 Monate |

Ob eine Anlage die Voraussetzungen erfüllt, stellt je nach Anlageform die zuständige türkische Stelle fest.

| Anlageform | Feststellende Stelle |
|---|---|
| Einlagen bei in der Türkei tätigen Banken | Bankenaufsicht (BDDK) |
| Staatliche Schuldtitel | Ministerium für Schatzamt und Finanzen |
| Anteile an Immobilienfonds (GYF) oder Wagniskapitalfonds (GSYF) | Kapitalmarktaufsicht (SPK) |
| Beiträge zur privaten Altersvorsorge (BES) | Aufsichtsbehörde für Versicherungen und private Altersvorsorge (SEDDK) |

Einbezogen sind auch der ausländische Ehepartner sowie die minderjährigen oder unterhaltsabhängigen ausländischen Kinder des Anlegers und seines Ehepartners.

## Wer in Deutschland braucht diese Erlaubnis – und wer nicht?

Für den größten Teil der türkischen Gemeinschaft in Deutschland entsteht durch den Beschluss kein neuer Bedarf. Angesprochen sind vor allem Familienangehörige und Lebenspartner ohne türkische Staatsangehörigkeit sowie Ausländer, die sich länger in der Türkei aufhalten möchten.

| Ihre Situation | Brauchen Sie diese Erlaubnis? |
|---|---|
| Sie besitzen die türkische Staatsangehörigkeit (auch neben der deutschen) | Nein. Für das Leben in der Türkei benötigen Sie keine Aufenthaltserlaubnis. |
| Sie besitzen die Mavi Kart (Blaue Karte) | Nein. Inhaber der Mavi Kart sind von der Aufenthaltserlaubnis befreit. |
| Sie sind mit Genehmigung aus der türkischen Staatsangehörigkeit ausgeschieden und haben keine Mavi Kart | Zuerst sollte Ihr Anspruch auf die [Mavi Kart](/de/leistungen/mavi-kart) geprüft werden; das ist in den meisten Fällen der Weg ohne Geldanlage. |
| Sie sind mit einer Person türkischer Staatsangehörigkeit verheiratet und selbst Ausländer | In der Regel nein. Die Familienaufenthaltserlaubnis setzt keine Geldanlage voraus. |
| Sie leben mit Ihrer Partnerin oder Ihrem Partner ohne türkische Staatsangehörigkeit unverheiratet zusammen | Die Familienaufenthaltserlaubnis knüpft an die Ehe an. Die Aufenthaltserlaubnis gegen Geldanlage kann für Ihre Partnerin oder Ihren Partner eine Option sein. |
| Sie besitzen die deutsche Staatsangehörigkeit und möchten im Ruhestand oder über den Winter länger in der Türkei bleiben | Für Sie ist der Beschluss eine neue Option. Visumfrei sind nur 90 Tage innerhalb von 180 Tagen möglich; für längere Aufenthalte ist eine Aufenthaltserlaubnis nötig, und andere Kurzzeitaufenthaltserlaubnisse werden in der Regel für höchstens zwei Jahre erteilt. |
| Sie leben mit einem deutschen Aufenthaltstitel in Deutschland und besitzen die Staatsangehörigkeit eines dritten Staates | Eine mögliche Option. Lassen Sie aber vorher prüfen, wie sich ein längerer Aufenthalt in der Türkei auf Ihren deutschen Aufenthaltstitel auswirkt. |

## Sechs Punkte, die in den Schlagzeilen fehlen

- **Ein Immobilienkauf zählt nicht.** Die einzige immobiliennahe Anlageform sind Anteile an Immobilienfonds; das ist kein Grundbucheintrag, sondern ein Fondsanteil. Die Aufenthaltserlaubnis für Immobilieneigentümer ist ein eigener Weg: Für Immobilien, die nach dem 16. Oktober 2023 erworben wurden, wird ein Wert von mindestens 200.000 US-Dollar verlangt, und die Erlaubnis wird in der Regel für höchstens zwei Jahre erteilt.
- **Kein Weg zur Staatsangehörigkeit.** Der Beschluss bestimmt ausdrücklich, dass diese Aufenthaltserlaubnisse nicht im Rahmen von Art. 12 des türkischen Staatsangehörigkeitsgesetzes berücksichtigt werden. Für die Einbürgerung durch Investition gelten eigene, höhere Schwellen.
- **Keine Arbeitserlaubnis.** Die Erlaubnis richtet sich an Ausländer, die in der Türkei nicht arbeiten. Wer dort arbeiten möchte, benötigt zusätzlich eine Arbeitserlaubnis.
- **Das Geld ist gebunden.** Die Anlage muss 18 bzw. 30 Monate gehalten werden. Ab wann die Frist läuft, was bei vorzeitiger Auflösung mit der Erlaubnis geschieht und ob der Betrag in Fremdwährung oder in türkischer Lira zu halten ist, regelt der Beschluss nicht; das bleibt den Verfahrensregeln vorbehalten.
- **Die Anlage allein genügt nicht.** Die allgemeinen Voraussetzungen gelten weiter, etwa kein [Einreiseverbot](/de/leistungen/tuerkei-visum-einreiseverbot), ein gültiger Pass und eine Krankenversicherung. Außerdem nennt das Gesetz bei Kurzzeitaufenthaltserlaubnissen einen Auslandsaufenthalt von insgesamt mehr als 120 Tagen innerhalb des letzten Jahres als Grund für Ablehnung, Widerruf oder Nichtverlängerung. Wer den größeren Teil des Jahres in Deutschland verbringt, sollte abwarten, wie diese Regel auf die neue Erlaubnis angewendet wird.
- **Die Verlängerung ist nicht geregelt.** Was nach Ablauf der drei oder fünf Jahre gilt, sagt der Beschluss nicht. Die unbefristete Daueraufenthaltserlaubnis setzt einen ununterbrochenen Aufenthalt von mindestens acht Jahren in der Türkei voraus.

## Die deutsche Seite gesondert klären

Eine türkische Aufenthaltserlaubnis bestimmt Ihre Rechtsstellung in Deutschland nicht. Fragen zu Ihrem deutschen Aufenthaltstitel, zu Steuern, Rente und Krankenversicherung richten sich nach deutschem Recht; klären Sie sie mit einer in Deutschland dafür zuständigen Beratung. Nach türkischem Steuerrecht gilt: Wer sich in einem Kalenderjahr ununterbrochen länger als sechs Monate in der Türkei aufhält, ist dort grundsätzlich unbeschränkt steuerpflichtig (Einkommensteuergesetz Nr. 193, Art. 4); für Aufenthalte zur Erholung oder Reise sieht das Gesetz Ausnahmen vor (Art. 5).

## Was Sie jetzt tun können

- Überweisen Sie kein Geld, bevor die Verfahrensregeln veröffentlicht sind. Solange nicht feststeht, welches Konto, welcher Nachweis und welcher Stichtag maßgeblich sind, ist offen, ob eine vorher getätigte Anlage später anerkannt wird.
- Klären Sie zuerst, welcher Weg zu Ihnen passt: [Mavi Kart](/de/leistungen/mavi-kart), Familienaufenthaltserlaubnis, Aufenthaltserlaubnis für Immobilieneigentümer oder Aufenthaltserlaubnis gegen Geldanlage.
- Besteht aus früheren Aufenthalten ein Hindernis für die Einreise in die Türkei (Einreiseverbot, Überschreitung der Aufenthaltsdauer, Abschiebung), sollte dieses zuerst geklärt werden: [Einreiseverbot und Visum Türkei](/de/leistungen/tuerkei-visum-einreiseverbot).
- Bereiten Sie Personenstands- und Heiratsurkunden für Ehepartner und Kinder mit [Apostille](/de/leistungen/vollmacht-apostille) und Übersetzung vor.

## Kontakt

Für Fragen zum türkischen Aufenthaltsrecht, zur Mavi Kart, zur Familienaufenthaltserlaubnis und zu Einreiseverboten erreichen Sie uns unter:

- **Telefon und WhatsApp:** +49 176 6122 1210
- **E-Mail:** info@hasandogru.de

Quellen: [Resmî Gazete Nr. 33434 vom 18.11.2026, Präsidialbeschluss Nr. 11994](${RG_URL}); Gesetz Nr. 6458, Art. 20, 31, 33 und 42; Gesetz Nr. 5901, Art. 12 und 28.

---

Diesen Beitrag gibt es auch auf Türkisch: [Yatırım karşılığı ikamet izni](/tr/blog/yatirim-karsiligi-ikamet-izni-almanyada-yasayanlar)

> **Rechtlicher Hinweis:** Stand: 18.11.2026. Der Beitrag wird ergänzt, sobald das türkische Innenministerium die Verfahrensregeln veröffentlicht. Er dient der allgemeinen Information und ersetzt weder eine Rechtsberatung noch eine Anlageberatung. Avukat Hasan Doğru (Türkei) ist bei der Anwaltskammer Ankara zugelassen und Mitglied der Rechtsanwaltskammer Karlsruhe (§ 207 BRAO); er berät ausschließlich im türkischen Recht und im Völkerrecht.`,
  contentEN: "",
  faqTR: [
    { question: "Türkiye'de ev alırsam bu izni alabilir miyim?", answer: "Hayır. Doğrudan taşınmaz alımı bu kararın saydığı yatırımlar arasında değildir. Taşınmaz sahipleri için ayrı bir kısa dönem ikamet izni türü vardır." },
    { question: "Türk vatandaşıyım veya Mavi Kartlıyım; Türkiye'de yaşamak için yatırım yapmam gerekir mi?", answer: "Hayır. Bu karar yalnızca ikamet iznine ihtiyaç duyan yabancıları ilgilendirir." },
    { question: "Bu izinle Türkiye'de çalışabilir miyim?", answer: "Hayır. İzin çalışmayan yabancılar içindir; çalışmak için ayrıca çalışma izni gerekir." },
    { question: "Beş yıl sonra Türk vatandaşı olabilir miyim?", answer: "Bu izin yatırım yoluyla vatandaşlığa dayanak olmaz. Genel yoldan vatandaşlık ayrı şartlara bağlıdır ve her dosyada ayrıca incelenir." },
    { question: "Yatırımı ne zaman geri çekebilirim?", answer: "Karar yalnızca asgari süreyi belirliyor: 3 yıllık izinde 18 ay, 5 yıllık izinde 30 ay. Ayrıntılar usul ve esaslarla belli olacak." },
    { question: "Başvuru nereye yapılacak?", answer: "Henüz açıklanmadı. İkamet izni işlemlerini Göç İdaresi yürütür; bu izin türü için başvuru yolu ve belgeler İçişleri Bakanlığı'nın belirleyeceği usul ve esaslarla duyurulacak." },
  ],
  faqDE: [
    { question: "Erhalte ich die Erlaubnis, wenn ich in der Türkei eine Wohnung kaufe?", answer: "Nein. Der direkte Immobilienerwerb gehört nicht zu den Anlagen, die der Beschluss nennt. Für Immobilieneigentümer gibt es eine eigene Art der Kurzzeitaufenthaltserlaubnis." },
    { question: "Ich bin türkischer Staatsangehöriger oder habe die Mavi Kart. Muss ich investieren, um in der Türkei zu leben?", answer: "Nein. Der Beschluss betrifft nur Ausländer, die eine Aufenthaltserlaubnis benötigen." },
    { question: "Darf ich mit dieser Erlaubnis in der Türkei arbeiten?", answer: "Nein. Sie richtet sich an Personen, die nicht arbeiten; für eine Erwerbstätigkeit ist eine Arbeitserlaubnis erforderlich." },
    { question: "Kann ich nach fünf Jahren die türkische Staatsangehörigkeit erhalten?", answer: "Diese Erlaubnis ist keine Grundlage für die Einbürgerung durch Investition. Die allgemeine Einbürgerung hat eigene Voraussetzungen und wird in jedem Einzelfall gesondert geprüft." },
    { question: "Wann kann ich die Anlage auflösen?", answer: "Der Beschluss nennt nur die Mindestdauer: 18 Monate bei der dreijährigen, 30 Monate bei der fünfjährigen Erlaubnis. Einzelheiten werden die Verfahrensregeln bestimmen." },
    { question: "Wo wird der Antrag gestellt?", answer: "Das ist noch nicht bekannt gegeben. Für Aufenthaltserlaubnisse ist die türkische Migrationsbehörde (Göç İdaresi) zuständig; Antragsweg und Unterlagen für diese Erlaubnis werden mit den Verfahrensregeln des Innenministeriums veröffentlicht." },
  ],
};
