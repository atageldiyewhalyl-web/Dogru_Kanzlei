import realEstateImg from "@/assets/blog_real_estate.png";
import verasetIlamiImg from "@/assets/blog_veraset_ilami.png";
import tanimaTenfizImg from "@/assets/blog_tanima_tenfiz.png";
import sakliPayImg from "@/assets/blog_sakli_pay.png";
import izaleISuyuImg from "@/assets/blog_izale_i_suyu.png";
import maviKartImg from "@/assets/blog_mavi_kart.png";
import criminalSummonsImg from "@/assets/blog_criminal_summons.png";
import criminalComplaintImg from "@/assets/blog_criminal_complaint.png";
import divorceImg from "@/assets/blog_divorce.png";
import vekaletnameImg from "@/assets/blog_vekaletname.png";

export interface BlogPost {
  slug: string;
  slugDE: string;
  slugTR: string;
  titleDE: string;
  titleTR: string;
  excerptDE: string;
  excerptTR: string;
  contentDE: string;
  contentTR: string;
  category: string;
  categoryDE: string;
  image: string;
  dateDE: string;
  dateTR: string;
  readTimeDE: string;
  readTimeTR: string;
  publishedAt: string; // ISO date for sitemap
}

export const blogPosts: BlogPost[] = [
  {
    slug: "miras-hukuku-rehberi",
    slugDE: "erbrecht-leitfaden-tuerkei",
    slugTR: "miras-hukuku-rehberi",
    titleDE: "Erbrecht-Leitfaden für türkische Staatsangehörige in Deutschland",
    titleTR: "Almanya'daki Türk Vatandaşları için Kapsamlı Miras Hukuku Rehberi",
    excerptDE: "Das Erbrecht für türkische Staatsangehörige in Deutschland beschäftigt viele Familien. Wir erklären den Veraset İlamı und Testamente nach türkischem Recht.",
    excerptTR: "Almanya'daki Türk vatandaşları için miras hukuku rehberi. Türk hukukuna göre Veraset İlamı, vasiyetnameler ve dikkat edilmesi gereken kritik noktalar.",
    contentDE: `**RECHTLICHER HINWEIS:** Dieser Artikel befasst sich ausschließlich mit dem türkischen Recht. Eine Beratung zum deutschen Recht (z.B. deutsches Erbrecht, Familienrecht nach BGB oder deutsches Migrationsrecht) findet in unserer Kanzlei nicht statt.

Das Erbrecht für türkische Staatsangehörige in Deutschland beschäftigt viele Familien in Mannheim, Heidelberg und dem gesamten Rhein-Neckar-Raum – und das aus gutem Grund. Es berührt zwei völlig unterschiedliche Rechtssysteme gleichzeitig. Wer sich nicht rechtzeitig damit auseinandersetzt, riskiert monatelange Verfahren, unnötige Kosten und familiäre Konflikte in einer ohnehin schon belastenden Lebensphase.

In diesem Leitfaden erklären wir Ihnen die wichtigsten Aspekte des türkischen Erbrechts: klar, praxisnah und ohne juristischen Fachjargon.

### Welches Erbrecht gilt für Immobilien in der Türkei?

Stirbt ein türkischer Staatsangehöriger, der in Deutschland gelebt hat, gilt für sein in der Türkei befindliches unbewegliches Vermögen (Immobilien, Grundstücke) zwingend das türkische Recht. Dies ist der Grundsatz des Belegenheitsorts (lex rei sitae).

**Wichtig**: Die Türkei ist kein EU-Mitgliedstaat und hat die EU-Erbrechtsverordnung nicht ratifiziert. Türkische Gerichte wenden bei Nachlässen mit Bezug zur Türkei weiterhin eigene Kollisionsnormen an. Eine grenzüberschreitende Nachlassregelung erfordert daher fundierte Kenntnisse der türkischen Rechtspraxis.

### Die Veraset İlamı – Das türkische Erbschaftszeugnis

Ein Begriff, der in unserer Kanzlei in Mannheim fast täglich fällt: die **Veraset İlamı**. Dieses Dokument wird von einem türkischen Notar oder Nachlassgericht ausgestellt und weist aus, wer gesetzlicher Erbe nach türkischem Recht ist und zu welchem Anteil. Ohne dieses Dokument ist in der Türkei in der Regel kein Zugriff auf Konten, Immobilien oder sonstige Vermögenswerte möglich.

**Was Sie wissen müssen**:
- Die Veraset İlamı ist Voraussetzung für den Zugriff auf Bankkonten und Immobilien in der Türkei.
- Sie kann über einen türkischen Notar (**Noter**) oder das Sulh Hukuk Mahkemesi beantragt werden.
- Für die Verwendung im Ausland sind Apostille und beglaubigte Übersetzungen erforderlich.

### Gesetzliche Erbfolge in der Türkei

Wenn kein Testament vorhanden ist, richtet sich die Erbfolge nach dem türkischen Zivilgesetzbuch (TMK). In der Türkei gilt das Belegenheitsprinzip für Immobilien, was bedeutet, dass für in der Türkei belegenes Grundvermögen zwingend türkisches Erbrecht Anwendung findet.

**Die Erbfolge nach türkischem Recht**:
1. **Abkömmlinge**: Kinder und deren Nachkommen bilden die erste Parentel.
2. **Eltern**: Wenn keine Abkömmlinge vorhanden sind, erben die Eltern zu gleichen Teilen.
3. **Großeltern**: Wenn weder Abkömmlinge noch Eltern vorhanden sind, geht das Erbe an die Großeltern.
**Überlebender Ehegatte**: Sein Erbanteil variiert je nachdem, mit welcher Parentel er gemeinsam erbt (1/4 neben Abkömmlingen, 1/2 neben Eltern).

### Testament nach türkischem Recht – Warum es wichtig ist

Ein Testament ist das wirksamste Mittel, um den eigenen Nachlass nach dem eigenen Willen zu regeln. Türkische Staatsangehörige können in einem Testament ausdrücklich festlegen, wie ihr Vermögen in der Türkei verteilt werden soll.

**Achtung**: Ein deutsches "Berliner Testament" kann in der Türkei zu Problemen mit dem türkischen Pflichtteilsrecht (**Mahfuz Hisse**) führen. Wir beraten Sie gerne zur Wirksamkeit Ihrer letztwilligen Verfügungen nach türkischem Recht.

### Immobilien in der Türkei – Was passiert im Erbfall?

Viele türkischstämmige Familien besitzen Immobilien in der Türkei. Stirbt der Eigentümer, gilt das sogenannte Belegenheitsprinzip: Für Immobilien wenden türkische Gerichte zwingend türkisches Recht an.

**Das hat konkrete Konsequenzen**:
- Die Immobilie muss im türkischen Grundbuch (**Tapu Sicili**) auf die Erben umgeschrieben werden.
- Dafür ist eine türkische Veraset İlamı erforderlich.
- Türkische Erbschaftsteuer (**Veraset ve İntikal Vergisi**) muss fristgerecht angemeldet werden.

### Häufige Fehler

- **Kein Testament nach türkischem Recht** – Die gesetzliche Erbfolge entspricht selten dem tatsächlichen Willen.
- **Fristen für die Erbschaftsteuer versäumt** – Bei im Ausland lebenden Erben gelten oft 6 Monate ab Todesfall.
- **Unbeglaubigte Dokumente** – Dokumente ohne Apostille werden in der Türkei nicht anerkannt.

**Dogru Kanzlei: Ihre Experten für türkisches Recht**
Als Mitglied der Ankara Barosu und der Anwaltskammer Karlsruhe (§ 207 BRAO) führen wir Erbschaftsangelegenheiten direkt vor türkischen Behörden durch. Wir sprechen Türkisch und Deutsch. Kontaktieren Sie uns für eine professionelle Unterstützung.`,
    contentTR: `**YASAL UYARI:** Bu makale yalnızca Türk hukuku ile ilgilidir. Büromuzda Alman hukuku (örneğin Alman miras hukuku, BGB uyarınca aile hukuku veya Alman göç hukuku) konusunda danışmanlık verilmemektedir.

Almanya'da yaşayan Türk vatandaşları için miras hukuku, özellikle Türkiye'deki malvarlıklarının yönetimi açısından büyük önem taşır.

Bu rehberde Türk miras hukukunun en önemli konularını sade ve anlaşılır bir şekilde ele alıyoruz.

### Türkiye'deki Gayrimenkuller İçin Hangi Hukuk Geçerli?

Türkiye'deki taşınmazlar (ev, arsa, tarla) söz konusu olduğunda, mirasçılık ve paylaşım süreçleri için mülkün bulunduğu yer kuralı (lex rei sitae) gereği zwingend **Türk miras hukuku** kuralları uygulanır.

**Bilmeniz gerekenler**:
- Türkiye, AB Miras Tüzüğü'ne taraf değildir.
- Türkiye'deki malvarlıkları için Türk mahkemeleri kendi yasalarını uygulamaktadır.

### Veraset İlamı (Mirasçılık Belgesi)

Ofisimizde en sık karşılaştığımız belge: **Veraset İlamı**. Türk noter veya mahkemesi tarafından düzenlenen bu resmi belge, mirasçıları ve miras paylarını gösterir. Türkiye'deki mülk devri ve banka işlemleri için mutlaka gereklidir.

**Süreç**:
- Türk noter (**Noter**) veya Sulh Hukuk Mahkemesi aracılığıyla alınabilir.
- Almanya'da yaşayan vatandaşlarımız vekaletname vererek bu süreci Türkiye'ye gitmeden tamamlayabilirler.

### Türk Hukukuna Göre Mirasçılar

Vasiyetname yoksa Türk Medeni Kanunu (TMK) hükümleri uygulanır. 

**Miras sırası**:
1. **Zümre**: Çocuklar ve torunlar.
2. **Zümre**: Anne ve baba (altsoy yoksa).
3. **Zümre**: Büyükana ve büyükbaba.
**Sağ Kalan Eş**: Mirasçı olduğu zümreye göre pay alır (Altsoy ile 1/4, ana-baba grubu ile 1/2).

### Vasiyetname ve Saklı Pay (Mahfuz Hisse)

Vasiyetname, mirasın nasıl paylaştırılacağını belirleyen önemli bir araçtır. Ancak Türk hukukunda belirli mirasçıların **saklı pay** (mahfuz hisse) hakları vardır ve bu haklar vasiyetname ile tamamen ortadan kaldırılamaz.

**Berliner Testament**: Almanya'da yaygın olan bu vasiyetname türü, Türkiye'deki saklı pay haklarıyla çelişebilir ve ileride tenkis davalarına yol açabilir.

### Türkiye'deki Taşınmazların Devri

Miras kalan mülklerin Tapu Sicili'nde mirasçılar adına tescil edilmesi gerekir. Bunun için:
- Veraset İlamı alınmalı.
- Veraset ve İntikal Vergisi beyannamesi verilmeli.
- Tapu dairesinde intikal işlemleri yapılmalı.

### Sıkça Yapılan Hatalar

- **Vergi sürelerini kaçırmak** – Yurt dışındakiler için vefattan itibaren genellikle 6 aylık süre mevcuttur.
- **Vekaletname hataları** – Özel yetki içermeyen vekaletnameler tapu işlemlerinde reddedilebilir.
- **Apostilsiz belge kullanımı** – Alman makamlarından alınan belgelerin (örneğin Erbschein) Türkiye'de geçerli olması için apostil gereklidir.

**Neden Dogru Kanzlei Mannheim?**
Ankara Barosu ve Karlsruhe Barosu (§ 207 BRAO) üyesi olarak, Türkiye'deki tüm miras sürecinizi bizzat ve doğrudan yönetiyoruz. Türkçe ve Almanca hizmet veriyoruz.`,
    category: "Miras Hukuku",
    categoryDE: "Erbrecht",
    image: "https://images.unsplash.com/photo-1769092992534-f2d0210162b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXclMjBsaWJyYXJ5JTIwYm9va3MlMjBsZWdhbHxlbnwxfHx8fDE3NzQ2OTc3NDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    dateDE: "15. März 2026",
    dateTR: "15 Mart 2026",
    readTimeDE: "12 Min. Lesezeit",
    readTimeTR: "12 dk okuma",
    publishedAt: "2026-03-15",
  },
  {
    slug: "uluslararasi-bosanma",
    slugDE: "internationale-scheidung-tuerkei",
    slugTR: "uluslararasi-bosanma",
    titleDE: "Internationale Scheidungsverfahren – Was Sie wissen müssen",
    titleTR: "Uluslararası Boşanma Davalarında Bilinmesi Gerekenler",
    excerptDE: "Eine Scheidung zwischen Deutschland und der Türkei ist rechtlich komplex. Wir erklären Zuständigkeiten und die Anerkennung nach türkischem Recht.",
    excerptTR: "Almanya ve Türkiye arasındaki boşanma süreçleri hukuken karmaşıktır. Yetkili mahkemeler ve tanıma-tenfiz konularını Türk hukukuna göre açıklıyoruz.",
    contentDE: `**RECHTLICHER HINWEIS:** Dieser Artikel befasst sich ausschließlich mit dem türkischen Recht. Eine Beratung zum deutschen Recht (z.B. deutsches Erbrecht, Familienrecht nach BGB oder deutsches Migrationsrecht) findet in unserer Kanzlei nicht statt.

Für türkische Staatsangehörige in Deutschland ist eine Scheidung nicht nur emotional belastend – sie ist auch rechtlich komplex. Wenn zwei Rechtssysteme berührt werden, kann ein einziger Fehler jahrelange juristische Probleme nach sich ziehen.

In diesem Artikel erläutern wir die wichtigsten Aspekte einer internationalen Scheidung aus der Sicht des türkischen Rechts.

### Gilt ein deutsches Scheidungsurteil in der Türkei automatisch?

Die kurze Antwort: Nein. Damit ein in Deutschland ausgesprochenes Scheidungsurteil in der Türkei rechtliche Wirkung entfaltet, muss vor einem türkischen Gericht ein Anerkennungs- und Vollstreckbarerklärungsverfahren (**Tanıma ve Tenfiz**) durchgeführt werden.

Ohne dieses Verfahren gilt die Person in türkischen Registern weiterhin als verheiratet. Erforderliche Dokumente nach türkischem Recht:
- Original oder beglaubigte Kopie des deutschen Urteils.
- Rechtskraftbescheinigung.
- Apostille.
- Beglaubigte türkische Übersetzung.

### Das Anerkennungsverfahren (Tanıma-Tenfiz) in der Türkei

In der Türkei sind seit 2017 Verfahren zur Anerkennung ausländischer Urteile teilweise auch über die Bevölkerungsämter möglich, sofern beide Parteien gemeinsam erscheinen. Ist dies nicht der Fall, muss die Klage vor einem türkischen Familiengericht (Aile Mahkemesi) erhoben werden.

**Rechtsgrundlage**: MÖHUK (Milletlerarası Özel Hukuk ve Usul Hukuku Hakkında Kanun).

### Vermögensaufteilung und Kindesunterhalt nach türkischem Recht

Wird die Scheidung direkt in der Türkei geführt, gilt seit 2002 das System der Beteiligung an erworbenen Gütern (**edinilmiş mallara katılım rejimi**). 

**Wichtig**: Unterhaltsansprüche (**Nafaka**) und Sorgerechtsfragen (**Velayet**) werden von türkischen Gerichten streng nach dem türkischen Zivilgesetzbuch (TMK) und dem Kindeswohl beurteilt.

### Sıkça Yapılan Hatalar

- **Tanıma davasını ertelemek**: Offene Registereinträge in der Türkei verhindern erneute Eheschließungen oder korrekte Erbfallabwicklungen.
- **Einseitige Scheidungen**: Wenn die Gegenseite nicht ordnungsgemäß geladen wurde, kann die Anerkennung in der Türkei verweigert werden.

**Doğru Kanzlei: Ihr Partner für internationales Familienrecht**
Internationale Scheidungsverfahren sind unser Alltag. Wir führen Anerkennungsverfahren direkt vor türkischen Gerichten – oft ohne dass Sie selbst reisen müssen. Wir sprechen Türkisch und Deutsch.`,
    contentTR: `**YASAL UYARI:** Bu makale yalnızca Türk hukuku ile ilgilidir. Büromuzda Alman hukuku (örneğin Alman miras hukuku, BGB uyarınca aile hukuku veya Alman göç hukuku) konusunda danışmanlık verilmemektedir.

Almanya'da yaşayan Türk vatandaşları için boşanma süreci, iki ülkenin hukuk sistemini ilgilendiren karmaşık bir süreçtir. 

### Almanya'da Verilen Boşanma Kararı Türkiye'de Geçerli mi?

Kısa yanıt: Hayır, otomatik olarak geçerli değildir. Almanya'da verilen bir boşanma kararının Türkiye'de hukuki sonuç doğurabilmesi için Türk mahkemelerinde **tanıma ve tenfiz** davası açılması veya nüfus müdürlükleri nezdinde idari tanıma sürecinin işletilmesi gerekmektedir.

Tanıma ve tenfiz davası için gerekli belgeler:
- Almanya'da verilen boşanma kararının aslı.
- Kararın kesinleştiğine dair belge (Rechtskraftbescheinigung).
- Apostil şerhi.
- Onaylı Türkçe tercüme.

### Mal Paylaşımı ve Nafaka (Türk Hukukuna Göre)

Türk hukukunda boşanma sonrası mal paylaşımı, 2002'den itibaren geçerli olan **edinilmiş mallara katılım rejimi** üzerinden yürütülür. Almanya'daki mal paylaşımı kararları her zaman Türkiye'deki taşınmazları kapsamayabilir.

### Velayet ve Çocuk Kaçırma

- **Velayet**: Türk mahkemeleri velayet kararlarında çocuğun üstün yararını esas alır.
- **Uluslararası çocuk kaçırma**: Çocuğun diğer ebeveynin rızası olmadan Türkiye'ye götürülmesi, Lahey Sözleşmesi kapsamında suç teşkil edebilir.

### Sıkça Yapılan Hatalar

- **Tanıma davasını ertelemek**: Resmi kaydın güncellenmemesi, Türkiye'deki miras ve evlilik haklarını kısıtlar.
- **Tebligat hataları**: Karşı tarafın Almanya'daki adresine usulüne uygun tebligat yapılmaması, davanın uzamasına neden olur.

**Neden Dogru Kanzlei Mannheim?**
Uluslararası boşanma davaları ve tanıma-tenfiz süreçleri bizim uzmanlık alanımızdır. Davanızı Türkiye'deki mahkemeler nezdinde bizzat takip ediyoruz.`,
    category: "Aile Hukuku",
    categoryDE: "Familienrecht",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxsYXclMjBmaXJtJTIwY291cnR8ZW58MXx8fHwxNzc0Njk3NzQ1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    dateDE: "2. März 2026",
    dateTR: "2 Mart 2026",
    readTimeDE: "10 Min. Lesezeit",
    readTimeTR: "10 dk okuma",
    publishedAt: "2026-03-02",
  },
  {
    slug: "gayrimenkul-haklari",
    slugDE: "immobilienrechte-tuerkei",
    slugTR: "gayrimenkul-haklari",
    titleDE: "Rechte von Ausländern beim Immobilienkauf in der Türkei",
    titleTR: "Yabancıların Türkiye'de Mülk Satın Alma Hakları",
    excerptDE: "Immobilienkauf in der Türkei: Rechtssichere Abwicklung aus Deutschland, Tapu-Prüfung und Risiken nach türkischem Recht.",
    excerptTR: "Türkiye'de taşınmaz edinimi: Almanya'dan vekaletle tapu devri, yasal incelemeler ve yabancı alıcılar için kritik riskler.",
    contentDE: `**RECHTLICHER HINWEIS:** Dieser Artikel befasst sich ausschließlich mit dem türkischen Recht. Eine Beratung zum deutschen Recht (z.B. deutsches Erbrecht, Familienrecht nach BGB oder deutsches Migrationsrecht) findet in unserer Kanzlei nicht statt.

Der Traum vom eigenen Haus oder einer Ferienwohnung in der Türkei ist für viele Menschen in Deutschland sehr real. Doch der Immobilienkauf in der Türkei unterliegt besonderen türkischen Vorschriften und erfordert eine sorgfältige rechtliche Begleitung vor Ort.

### Dürfen Ausländer in der Türkei Immobilien kaufen?

Ja. Seit 2012 ist der Erwerb von Immobilien durch ausländische Staatsangehörige (einschließlich deutscher Staatsbürger) in der Türkei liberalisiert.

**Einschränkungen nach türkischem Recht**:
- Die Immobilie darf nicht in militärischen Sperrzonen liegen.
- Es gilt eine Flächenbegrenzung (max. 30 Hektar landesweit).

### Der Kaufprozess aus Deutschland gesteuert

Dank des türkischen Vollmachtsverfahrens können wir den gesamten Kaufprozess für Sie aus Deutschland heraus steuern.

**1. Vorprüfung (Tapu-Check)**:
Wir prüfen im Grundbuchamt (**Tapu Müdürlüğü**), ob die Immobilie belastet ist (Hipotek, Haciz).

**2. Eigentumsübertragung**:
In der Türkei erfolgt die Eigentumsübertragung zwingend beim zuständigen Grundbuchamt, nicht beim Notar. Mit einer in Deutschland erstellten und apostillierten Vollmacht (**Vekaletname**) führen wir diesen Schritt für Sie durch.

### Welche Steuern fallen an?

- **Grunderwerbsteuer (Tapu Harcı)**: In der Regel 4 % des offiziellen Wertes.
- **Jährliche Grundsteuer (Emlak Vergisi)**: Wird an die jeweilige Kommune gezahlt.

**Doğru Kanzlei: Ihre Sicherheit in der Türkei**
Wir prüfen Ihre Verträge nach türkischem Recht und sorgen für eine rechtssichere Eintragung im Grundbuch. Wir sprechen Türkisch und Deutsch.`,
    contentTR: `**YASAL UYARI:** Bu makale yalnızca Türk hukuku ile ilgilidir. Büromuzda Alman hukuku (örneğin Alman miras hukuku, BGB uyarınca aile hukuku veya Alman göç hukuku) konusunda danışmanlık verilmemektedir.

Türkiye'de taşınmaz edinimi, yabancı uyruklular ve yurt dışında yaşayan vatandaşlarımız için özel yasal prosedürlere tabidir.

### Yabancılar İçin Taşınmaz Edinimi

Alman vatandaşları ve diğer yabancı uyruklular, belirli kısıtlamalar (askeri yasak bölgeler gibi) dışında Türkiye'de mülk sahibi olabilirler.

### Süreci Almanya'dan Yönetmek

Türkiye'ye gitmenize gerek kalmadan, uzman bir avukat aracılığıyla tüm süreci yönetebilirsiniz:
- **Tapu Kaydı İncelemesi**: Mülk üzerinde haciz veya ipotek olup olmadığının kontrolü.
- **Vekaletle İntikal**: Almanya'daki noterden alınan apostilli vekaletname ile Türkiye'deki tapu devrinin tamamlanması.

### Dikkat Edilmesi Gereken Riskler

- **İskan Sorunu**: Yapı kullanma izni olmayan mülklerin devrinde sorunlar yaşanabilir.
- **Tapu Harçları**: Satış bedeli üzerinden alınan %4 harç ve yıllık emlak vergileri.

**Neden Dogru Kanzlei?**
Türkiye'deki taşınmaz hukukuna hakimiz ve işlemlerinizi doğrudan Türk makamları nezdinde takip ediyoruz.`,
    category: "Gayrimenkul Hukuku",
    categoryDE: "Immobilienrecht",
    image: realEstateImg,
    dateDE: "2. April 2026",
    dateTR: "2 Nisan 2026",
    readTimeDE: "8 Min. Lesezeit",
    readTimeTR: "8 dk okuma",
    publishedAt: "2026-04-02",
  },
  {
    slug: "tanima-tenfiz-rehberi",
    slugDE: "tanima-tenfiz-leitfaden",
    slugTR: "tanima-tenfiz-rehberi",
    titleDE: "Tanıma ve Tenfiz: Warum Ihre deutsche Scheidung in der Türkei nicht gilt",
    titleTR: "Tanıma ve Tenfiz: Almanya'daki Boşanma Kararınız Türkiye'de Neden Geçersiz?",
    excerptDE: "In Deutschland geschieden, in der Türkei noch verheiratet? Wir erklären das Anerkennungsverfahren nach türkischem Recht.",
    excerptTR: "Almanya'daki boşanma kararınızı Türkiye'de nasıl tanıtabilirsiniz? Tanıma ve tenfiz davası süreçlerini açıklıyoruz.",
    contentDE: `**RECHTLICHER HINWEIS:** Dieser Artikel befasst sich ausschließlich mit dem türkischen Recht. Eine Beratung zum deutschen Recht (z.B. deutsches Erbrecht, Familienrecht nach BGB oder deutsches Migrationsrecht) findet in unserer Kanzlei nicht statt.

### Das Problem: Statusdiskrepanz

Viele Menschen in Deutschland sind hier rechtskräftig geschieden, gelten aber in der Türkei weiterhin als verheiratet. Dies hat Folgen für das Erbrecht und erneute Eheschließungen in der Türkei.

**Rechtsgrundlage**: MÖHUK Art. 50–59.

### Voraussetzungen für die Anerkennung in der Türkei

1. **Rechtskraft**: Das deutsche Urteil muss rechtskräftig sein.
2. **Apostille**: Bestätigung der Echtheit des Dokuments.
3. **Kein Verstoß gegen den Ordre Public**: Das Urteil darf nicht gegen fundamentale Werte des türkischen Rechts verstoßen.

### Dauer und Kosten

Das Verfahren vor dem türkischen Familiengericht dauert in der Regel **3 bis 6 Monate**. Wenn beide Parteien durch Anwälte vertreten sind, kann es deutlich schneller gehen.

**Doğru Kanzlei: Direkte Vertretung vor türkischen Gerichten**
Wir führen Tanıma-Tenfiz-Verfahren persönlich vor dem türkischen Familiengericht – ohne Drittvermittlung.`,
    contentTR: `**YASAL UYARI:** Bu makale yalnızca Türk hukuku ile ilgilidir. Büromuzda Alman hukuku (örneğin Alman miras hukuku, BGB uyarınca aile hukuku veya Alman göç hukuku) konusunda danışmanlık verilmemektedir.

### Almanya'da Boşanmış, Türkiye'de Hala Evli

Alman mahkemesinin boşanma kararı Türkiye'de otomatik olarak tanınmaz. Bu kararın nüfus kayıtlarına işlenmesi için **Tanıma ve Tenfiz** davası açılmalıdır.

### Şartlar

- **Kesinleşme Şerhi**: Kararın kesinleşmiş olması.
- **Apostil**: Alman makamlarından alınan doğrulama şerhi.
- **Onaylı Tercüme**: Belgelerin Türkçeye çevrilmiş olması.

**Neden Dogru Kanzlei?**
Türkiye'deki aile mahkemeleri nezdindeki süreci bizzat yönetiyoruz.`,
    category: "Aile Hukuku",
    categoryDE: "Familienrecht",
    image: tanimaTenfizImg,
    dateDE: "2. April 2026",
    dateTR: "2 Nisan 2026",
    readTimeDE: "6 Min. Lesezeit",
    readTimeTR: "6 dk okuma",
    publishedAt: "2026-04-02",
  },
  {
    slug: "sakli-pay-tenkis-davasi",
    slugDE: "pflichtteil-herabsetzungsklage-tuerkei",
    slugTR: "sakli-pay-tenkis-davasi",
    titleDE: "Saklı Pay im türkischen Erbrecht: Wann Erben klagen können",
    titleTR: "Saklı Pay ve Tenkis Davası: Mirasçıların Hakları ve Dava Süreci",
    excerptDE: "Pflichtteil (Saklı Pay) nach türkischem Recht verletzt? Wir erklären die Herabsetzungsklage (Tenkis Davası).",
    excerptTR: "Türk miras hukukunda saklı pay nedir? Tenkis davası şartları ve mirasçıların haklarını açıklıyoruz.",
    contentDE: `**RECHTLICHER HINWEIS:** Dieser Artikel befasst sich ausschließlich mit dem türkischen Recht. Eine Beratung zum deutschen Recht (z.B. deutsches Erbrecht, Familienrecht nach BGB oder deutsches Migrationsrecht) findet in unserer Kanzlei nicht statt.

### Was ist der Saklı Pay (Pflichtteil)?

Im türkischen Erbrecht schützt der Saklı Pay bestimmte nahe Angehörige davor, vollständig vom Erbe ausgeschlossen zu werden.

**Rechtsgrundlage**: TMK Art. 505–512.

### Die Tenkis Davası (Herabsetzungsklage)

Wurde der Pflichtteil verletzt, kann innerhalb einer Frist von 1 Jahr ab Kenntnis (max. 10 Jahre ab Eröffnung) die **Tenkis Davası** vor einem türkischen Zivilgericht erhoben werden.

**Doğru Kanzlei: Ihr Vorteil**
Als Mitglied der Ankara Barosu führen wir diese Klagen professionell vor türkischen Gerichten.`,
    contentTR: `**YASAL UYARI:** Bu makale yalnızca Türk hukuku ile ilgilidir. Büromuzda Alman hukuku (örneğin Alman miras hukuku, BGB uyarınca aile hukuku veya Alman göç hukuku) konusunda danışmanlık verilmemektedir.

### Saklı Pay Nedir?

Türk miras hukukunda saklı pay, miras bırakanın vasiyetname ile dahi dokunamayacağı miras hissesidir.

**Hukuki Dayanak**: TMK m. 505-512.

### Tenkis Davası

Saklı payınız ihlal edilmişse, öğrenmeden itibaren 1 yıl içinde **Tenkis Davası** açarak haklarınızı talep edebilirsiniz.`,
    category: "Miras Hukuku",
    categoryDE: "Erbrecht",
    image: sakliPayImg,
    dateDE: "2. April 2026",
    dateTR: "2 Nisan 2026",
    readTimeDE: "8 Min. Lesezeit",
    readTimeTR: "8 dk okuma",
    publishedAt: "2026-04-02",
  },
  {
    slug: "izale-i-suyu-paylasim-davasi",
    slugDE: "teilungsklage-immobilien-tuerkei",
    slugTR: "izale-i-suyu-paylasim-davasi",
    titleDE: "İzale-i Şüyu: Wenn Erben sich nicht einigen: Teilungsklage in der Türkei",
    titleTR: "İzale-i Şüyu: Miras Kalan Taşınmazlarda Ortaklığın Giderilmesi Davası",
    excerptDE: "İzale-i Şüyu (Teilungsklage) bei Erbimmobilien in der Türkei nach türkischem Zivilrecht.",
    excerptTR: "Mirasçılar arasında paylaşılamayan taşınmazlar için izale-i şüyu davası süreci ve yasal prosedürler.",
    contentDE: `**RECHTLICHER HINWEIS:** Dieser Artikel befasst sich ausschließlich mit dem türkischen Recht. Eine Beratung zum deutschen Recht (z.B. deutsches Erbrecht, Familienrecht nach BGB oder deutsches Migrationsrecht) findet in unserer Kanzlei nicht statt.

### Was ist İzale-i Şüyu?

Können sich Miteigentümer einer Immobilie in der Türkei nicht über Verkauf oder Nutzung einigen, kann jeder Teilhaber die Teilungsklage (**İzale-i Şüyu**) erheben.

**Rechtsgrundlage**: TMK Art. 698–699.

### Ablauf

Wenn eine Realteilung nicht möglich ist, wird das Gericht die Versteigerung der Immobilie anordnen. Der Erlös wird nach Anteilen verteilt.

**Unser Service**: Wir vertreten Sie im gesamten Versteigerungsprozess in der Türkei.`,
    contentTR: `**YASAL UYARI:** Bu makale yalnızca Türk hukuku ile ilgilidir. Büromuzda Alman hukuku (örneğin Alman miras hukuku, BGB uyarınca aile hukuku veya Alman göç hukuku) konusunda danışmanlık verilmemektedir.

### İzale-i Şüyu (Ortaklığın Giderilmesi)

Paydaşlar arasında paylaşılamayan taşınmazlar için Sulh Hukuk Mahkemesi'nde açılan davadır.

**Hukuki Dayanak**: TMK m. 698-699.`,
    category: "Miras Hukuku",
    categoryDE: "Erbrecht",
    image: izaleISuyuImg,
    dateDE: "2. April 2026",
    dateTR: "2 Nisan 2026",
    readTimeDE: "7 Min. Lesezeit",
    readTimeTR: "7 dk okuma",
    publishedAt: "2026-04-02",
  },
  {
    slug: "mavi-kart-haklari-rehberi",
    slugDE: "mavi-kart-rechte-tuerkei",
    slugTR: "mavi-kart-haklari-rehberi",
    titleDE: "Mavi Kart: Ihre Rechte in der Türkei nach Einbürgerung in Deutschland",
    titleTR: "Mavi Kart: Alman Vatandaşlığına Geçiş Sonrası Türkiye'deki Haklarınız",
    excerptDE: "Mavi Kart — Rechte in der Türkei: Eigentum und Erbschaft nach türkischem Staatsangehörigkeitsrecht.",
    excerptTR: "Mavi Kart nedir? Türkiye'de mülkiyet ve miras haklarınız. 5901 sayılı Kanun kapsamında eski Türk vatandaşlarının statüsü.",
    contentDE: `**RECHTLICHER HINWEIS:** Dieser Artikel befasst sich ausschließlich mit dem türkischen Recht. Eine Beratung zum deutschen Recht (z.B. deutsches Erbrecht, Familienrecht nach BGB oder deutsches Migrationsrecht) findet in unserer Kanzlei nicht statt.

### Was ist die Mavi Kart?

Ehemalige türkische Staatsbürger behalten durch die **Mavi Kart** viele ihrer Rechte in der Türkei.

**Rechtsgrundlage**: Art. 28 des türkischen Staatsangehörigkeitsgesetzes (TVK).

### Ihre Rechte in der Türkei

- **Immobilienerwerb**: Sie können wie türkische Bürger Immobilien erwerben.
- **Erbrecht**: Sie bleiben voll erbberechtigt.
- **Aufenthalt**: Visumfreier Aufenthalt in der Türkei.

**Doğru Kanzlei**: Wir beraten Sie zu allen mavkart-bezogenen Rechtsfragen in der Türkei.`,
    contentTR: `**YASAL UYARI:** Bu makale yalnızca Türk hukuku ile ilgilidir. Büromuzda Alman hukuku (örneğin Alman miras hukuku, BGB uyarınca aile hukuku veya Alman göç hukuku) konusunda danışmanlık verilmemektedir.

### Mavi Kart Hakları

Türk vatandaşlığından çıkan kişilerin Türkiye'deki haklarını koruyan statüdür.

**Hukuki Dayanak**: 5901 sayılı TVK Madde 28.`,
    category: "Vatandaşlık Hukuku",
    categoryDE: "Staatsangehörigkeitsrecht",
    image: maviKartImg,
    dateDE: "2. April 2026",
    dateTR: "2 Nisan 2026",
    readTimeDE: "5 Min. Lesezeit",
    readTimeTR: "5 dk okuma",
    publishedAt: "2026-04-02",
  },
  {
    slug: "vorladung-haftbefehl-tuerkei",
    slugDE: "vorladung-haftbefehl-tuerkei",
    slugTR: "turkiye-den-tebligat-veya-yakalama-karari",
    titleDE: "Vorladung oder Haftbefehl aus der Türkei: Was tun?",
    titleTR: "Türkiye'den Tebligat veya Yakalama Kararı mı Geldi? Almanya'dan Ne Yapmalısınız?",
    excerptDE: "Vorladungen oder Strafverfahren in der Türkei können auch aus Deutschland heraus nach türkischem Strafprozessrecht verteidigt werden.",
    excerptTR: "Türkiye'de hakkınızda açılan ceza davaları ve yakalama kararları. CMK uyarınca Almanya'dan savunma haklarınız.",
    contentDE: `**RECHTLICHER HINWEIS:** Dieser Artikel befasst sich ausschließlich mit dem türkischen Recht. Eine Beratung zum deutschen Recht (z.B. deutsches Erbrecht, Familienrecht nach BGB oder deutsches Migrationsrecht) findet in unserer Kanzlei nicht statt.

### Wenn Post aus der Türkei kommt

Erhalten Sie eine Vorladung oder einen Haftbefehl (**Yakalama Kararı**) aus der Türkei, ist professionelle Hilfe vor Ort in der Türkei entscheidend.

**Rechtsgrundlage**: Türkische Strafprozessordnung (CMK).

### Ihre Rechte

- **Vertretung**: Sie können sich durch einen in der Türkei zugelassenen Avukat vertreten lassen, oft ohne selbst reisen zu müssen.
- **Akteneinsicht**: Über das UYAP-System können wir den Stand Ihres Verfahrens prüfen.

**Doğru Kanzlei**: Als Mitglied der Ankara Barosu übernehmen wir Ihre Verteidigung vor türkischen Strafgerichten.`,
    contentTR: `**YASAL UYARI:** Bu makale yalnızca Türk hukuku ile ilgilidir. Büromuzda Alman hukuku (örneğin Alman miras hukuku, BGB uyarınca aile hukuku veya Alman göç hukuku) konusunda danışmanlık verilmemektedir.

### Yakalama Kararı ve Tebligatlar

Türkiye'deki ceza dosyalarınızı Almanya'dan vekalet vererek takip edebilirsiniz.

**Hukuki Dayanak**: CMK m. 145 vd.`,
    category: "Ceza Hukuku",
    categoryDE: "Strafrecht",
    image: criminalSummonsImg,
    dateDE: "2. April 2026",
    dateTR: "2 Nisan 2026",
    readTimeDE: "7 Min. Lesezeit",
    readTimeTR: "7 dk okuma",
    publishedAt: "2026-04-02",
  },
  {
    slug: "suc-duyurusu-tuerkei-rehberi",
    slugDE: "strafanzeige-tuerkei-rehber",
    slugTR: "turkiye-de-suc-duyurusu-rehberi",
    titleDE: "Strafanzeige in der Türkei aus Deutschland erstatten",
    titleTR: "Almanya'dan Türkiye'deki Bir Suç İçin Şikayetçi Olmak: Suç Duyurusu Rehberi",
    excerptDE: "Opfer einer Straftat in der Türkei geworden? Wir erklären die Strafanzeige (Suç Duyurusu) nach türkischem Recht.",
    excerptTR: "Türkiye'de mağdur olduğunuz suçlar için Almanya'dan nasıl suç duyurusunda bulunabilirsiniz?",
    contentDE: `**RECHTLICHER HINWEIS:** Dieser Artikel befasst sich ausschließlich mit dem türkischen Recht. Eine Beratung zum deutschen Recht (z.B. deutsches Erbrecht, Familienrecht nach BGB oder deutsches Migrationsrecht) findet in unserer Kanzlei nicht statt.

### Anzeige in der Türkei

Wenn Sie in der Türkei Opfer eines Betrugs oder einer anderen Straftat geworden sind, können Sie über einen Avukat Strafanzeige (**Suç Duyurusu**) bei der zuständigen türkischen Staatsanwaltschaft erstatten.

**Rechtsgrundlage**: CMK Art. 158.

**Doğru Kanzlei**: Wir formulieren Ihre Anzeige und verfolgen das Ermittlungsverfahren in der Türkei für Sie.`,
    contentTR: `**YASAL UYARI:** Bu makale yalnızca Türk hukuku ile ilgilidir. Büromuzda Alman hukuku (örneğin Alman miras hukuku, BGB uyarınca aile hukuku veya Alman göç hukuku) konusunda danışmanlık verilmemektedir.

### Türkiye'de Suç Duyurusu

Türkiye'deki suç mağduriyetleriniz için Almanya'dan vekaletle suç duyurusunda bulunabilirsiniz.`,
    category: "Ceza Hukuku",
    categoryDE: "Strafrecht",
    image: criminalComplaintImg,
    dateDE: "2. April 2026",
    dateTR: "2 Nisan 2026",
    readTimeDE: "6 Min. Lesezeit",
    readTimeTR: "6 dk okuma",
    publishedAt: "2026-04-02",
  },
  {
    slug: "bosanma-rehberi-tuerkiye",
    slugDE: "scheidung-tuerkei-ohne-reise",
    slugTR: "turkiye-de-bosanma-rehberi",
    titleDE: "Scheidung in der Türkei ohne Reise",
    titleTR: "Almanya'dan Türkiye'de Boşanma: Anlaşmalı ve Çekişmeli Boşanma Rehberi",
    excerptDE: "Scheidung in der Türkei aus Deutschland einreichen nach türkischem Zivilgesetzbuch (TMK).",
    excerptTR: "Türkiye'ye gitmeden Almanya'dan boşanma davası nasıl açılır? Yasal şartlar ve süreçler.",
    contentDE: `**RECHTLICHER HINWEIS:** Dieser Artikel befasst sich ausschließlich mit dem türkischen Recht. Eine Beratung zum deutschen Recht (z.B. deutsches Erbrecht, Familienrecht nach BGB oder deutsches Migrationsrecht) findet in unserer Kanzlei nicht statt.

### Scheidung nach türkischem Recht

Eine Scheidung kann direkt vor türkischen Familiengerichten beantragt werden.

**Rechtsgrundlage**: TMK Art. 166.

- **Anlaşmalı Boşanma**: Einvernehmliche Scheidung via Anwaltsprotokoll.
- **Çekişmeli Boşanma**: Streitige Scheidung.

**Doğru Kanzlei**: Wir vertreten Sie in allen Phasen des türkischen Boşanma-Verfahrens.`,
    contentTR: `**YASAL UYARI:** Bu makale yalnızca Türk hukuku ile ilgilidir. Büromuzda Alman hukuku (örneğin Alman miras hukuku, BGB uyarınca aile hukuku veya Alman göç hukuku) konusunda danışmanlık verilmemektedir.

### Türkiye'de Boşanma Davası

Süreci Almanya'dan vekaletle yönetmek mümkündür. 

**Hukuki Dayanak**: TMK m. 166.`,
    category: "Aile Hukuku",
    categoryDE: "Familienrecht",
    image: divorceImg,
    dateDE: "2. April 2026",
    dateTR: "2 Nisan 2026",
    readTimeDE: "8 Min. Lesezeit",
    readTimeTR: "8 dk okuma",
    publishedAt: "2026-04-02",
  },
  {
    slug: "vekaletname-rehberi-almanya",
    slugDE: "tuerkische-vekaletname-deutschland",
    slugTR: "almanya-da-vekaletname-cikarma-rehberi",
    titleDE: "Türkische Vollmacht (Vekaletname) in Deutschland",
    titleTR: "Almanya'da Türk Vekaletnamesi: Noter, Apostil ve Konsolosluk Rehberi",
    excerptDE: "Vekaletname in Deutschland erstellen — Schritte nach türkischem Notariatsrecht.",
    excerptTR: "Almanya'da nasıl vekaletname çıkarılır? Apostil ve tercüme süreçleri.",
    contentDE: `**RECHTLICHER HINWEIS:** Dieser Artikel befasst sich ausschließlich mit dem türkischen Recht. Eine Beratung zum deutschen Recht (z.B. deutsches Erbrecht, Familienrecht nach BGB oder deutsches Migrationsrecht) findet in unserer Kanzlei nicht statt.

### Die Vekaletname

Für Rechtsgeschäfte in der Türkei benötigen Sie eine formelle Vollmacht (**Vekaletname**).

**Verfahren**:
- Über ein türkisches Konsulat.
- Über einen deutschen Notar mit anschließender Apostille und Übersetzung.

**Doğru Kanzlei**: Wir stellen Ihnen die passenden Textvorlagen für Ihre türkische Vollmacht zur Verfügung.`,
    contentTR: `**YASAL UYARI:** Bu makale yalnızca Türk hukuku ile ilgilidir. Büromuzda Alman hukuku (örneğin Alman miras hukuku, BGB uyarınca aile hukuku veya Alman göç hukuku) konusunda danışmanlık verilmemektedir.

### Vekaletname İşlemleri

Türkiye'deki işlemleriniz için gerekli olan yetki belgesidir.`,
    category: "Hukuki Danışmanlık",
    categoryDE: "Rechtsberatung",
    image: vekaletnameImg,
    dateDE: "2. April 2026",
    dateTR: "2 Nisan 2026",
    readTimeDE: "6 Min. Lesezeit",
    readTimeTR: "6 dk okuma",
    publishedAt: "2026-04-02",
  },
];
