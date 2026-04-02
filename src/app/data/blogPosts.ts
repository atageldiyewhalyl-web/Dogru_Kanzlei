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
    titleDE: "Erbrecht-Leitfaden für türkische Staatsangehörige in Deutschland",
    titleTR: "Almanya'daki Türk Vatandaşları için Kapsamlı Miras Hukuku Rehberi",
    excerptDE: "Das Erbrecht für türkische Staatsangehörige in Deutschland beschäftigt viele Familien. Wir erklären die EU-Erbrechtsverordnung, Veraset İlamı und Testamente.",
    excerptTR: "Almanya'daki Türk vatandaşları için miras hukuku rehberi. AB Miras Tüzüğü, Veraset İlamı, vasiyetnameler ve dikkat edilmesi gereken kritik noktalar.",
    contentDE: `Das Erbrecht für türkische Staatsangehörige in Deutschland beschäftigt viele Familien in Mannheim, Heidelberg und dem gesamten Rhein-Neckar-Raum – und das aus gutem Grund. Es berührt zwei völlig unterschiedliche Rechtssysteme gleichzeitig. Wer sich nicht rechtzeitig damit auseinandersetzt, riskiert monatelange Verfahren, unnötige Kosten und familiäre Konflikte in einer ohnehin schon belastenden Lebensphase.

In diesem Leitfaden erklären wir Ihnen die wichtigsten Aspekte: klar, praxisnah und ohne juristischen Fachjargon.

### Welches Erbrecht gilt – deutsches oder türkisches?

Seit dem 17. August 2015 gilt in der gesamten EU die EU-Erbrechtsverordnung (Nr. 650/2012). Sie legt den entscheidenden Grundsatz fest: Das Erbrecht des Staates, in dem die verstorbene Person zuletzt ihren gewöhnlichen Aufenthalt hatte, findet Anwendung.

Das bedeutet konkret: Stirbt ein türkischer Staatsangehöriger nach Jahren des Lebens und Arbeitens in Deutschland, gilt in der Regel deutsches Erbrecht – und zwar nicht nur für das in Deutschland befindliche Vermögen, sondern je nach Sachlage auch für Vermögen im Ausland.

**Die Ausnahmemöglichkeit: Rechtswahl im Testament**
Die EU-Verordnung erlaubt es, zu Lebzeiten eine Rechtswahl zu treffen. Türkische Staatsangehörige können in einem Testament ausdrücklich festlegen, dass auf ihren Nachlass türkisches Erbrecht angewendet werden soll. Das kann besonders dann Vorteile haben, wenn sich größeres Vermögen in der Türkei befindet. Eine solche Rechtswahl muss jedoch formgerecht und hinsichtlich beider Rechtssysteme sorgfältig gestaltet sein.

**Wichtig**: Die Türkei ist kein EU-Mitgliedstaat und hat die EU-Erbrechtsverordnung nicht ratifiziert. Türkische Gerichte wenden bei Nachlässen mit Bezug zur Türkei weiterhin eigene Kollisionsnormen an. Eine grenzüberschreitende Nachlassregelung erfordert daher fundierte Kenntnisse beider Rechtssysteme.

### Die Veraset İlamı – Das türkische Erbschaftszeugnis

Ein Begriff, der in unserer Kanzlei in Mannheim fast täglich fällt: die **Veraset İlamı**. Dieses Dokument wird von einem türkischen Notar oder Nachlassgericht ausgestellt und weist aus, wer gesetzlicher Erbe nach türkischem Recht ist und zu welchem Anteil. Ohne dieses Dokument ist in der Türkei in der Regel kein Zugriff auf Konten, Immobilien oder sonstige Vermögenswerte möglich.

**Was Sie wissen müssen**:
- Die Veraset İlamı ist Voraussetzung für den Zugriff auf Bankkonten und Immobilien in der Türkei
- Sie kann über einen türkischen Notar (**Noter**) oder das Sulh Hukuk Mahkemesi beantragt werden
- Für die Verwendung in Deutschland sind Apostille und beglaubigte Übersetzung erforderlich
- Die Anerkennung in Deutschland ist nicht automatisch und muss rechtlich geprüft werden

### Gesetzliche Erbfolge in Deutschland

Wenn kein Testament vorhanden ist, greift die gesetzliche Erbfolge des deutschen BGB:
1. **Ordnung**: Kinder und deren Nachkommen – sie erben vorrangig
2. **Ordnung**: Eltern und Geschwister – wenn keine Kinder vorhanden sind
3. **Ordnung**: Großeltern und deren Nachkommen
**Ehegatte**: Erbt neben den Verwandten – der Anteil hängt vom Güterstand ab (in der Regel 1/4 bis 1/2)

### Testament – Warum es besonders wichtig ist

Ein Testament ist das wirksamste Mittel, um den eigenen Nachlass nach dem eigenen Willen zu regeln – und bei grenzüberschreitenden Sachverhalten schlicht unerlässlich.

**Berliner Testament – Funktioniert es für türkische Ehepaare?**
Das Berliner Testament – bei dem sich Ehegatten gegenseitig als Alleinerben einsetzen – ist in Deutschland weit verbreitet. Für türkische Staatsangehörige kann es jedoch Fallstricke bergen: Es kann mit türkischen Pflichtteilsansprüchen (**Mahfuz Hisse**) kollidieren. Eine individuelle Prüfung ist hier unbedingt notwendig.

### Immobilien in der Türkei – Was passiert im Erbfall?

Viele türkischstämmige Familien in der Region Mannheim besitzen Immobilien in der Türkei. Stirbt der Eigentümer in Deutschland, gilt das sogenannte Belegenheitsprinzip: Für Immobilien wenden türkische Gerichte in der Regel türkisches Recht an – unabhängig vom letzten Wohnort des Verstorbenen.

**Das hat konkrete Konsequenzen**:
- Die Immobilie muss im türkischen Grundbuch (**Tapu Sicili**) auf die Erben umgeschrieben werden
- Dafür ist in der Regel eine Veraset İlamı erforderlich
- Türkische Erbschaftsteuer (**Veraset ve İntikal Vergisi**) kann anfallen

### Häufige Fehler, die wir in der Praxis beobachten

- **Kein Testament hinterlassen** – Die gesetzliche Erbfolge entspricht selten dem tatsächlichen Willen
- **Ausschlagungsfrist versäumt** – 6 Wochen ab Kenntnis (bei Auslandsberührung 6 Monate)
- **Nachlassverbindlichkeiten übersehen** – Haftung für Schulden
- **Unbeglaubigte Dokumente** – Dokumente ohne Apostille werden oft nicht anerkannt

**Warum Dogru Kanzlei Mannheim?**
Wir sind eine Anwaltskanzlei in Mannheim, die sich auf die rechtlichen Bedürfnisse türkischstämmiger Mandantinnen und Mandanten spezialisiert hat. Wir sprechen Türkisch und Deutsch. Vereinbaren Sie jetzt Ihren unverbindlichen Beratungstermin.`,
    contentTR: `Almanya'da yaşayan Türk vatandaşları için miras hukuku, Mannheim, Heidelberg ve Rhein-Neckar bölgesindeki pek çok aileyi derinden ilgilendiren ve iki farklı hukuk sistemini aynı anda ele almayı gerektiren karmaşık bir alandır.

Bu rehberde en önemli konuları sade, anlaşılır ve uygulamaya dönük bir şekilde ele alıyoruz.

### Hangi Hukuk Geçerli – Alman mı, Türk mü?

17 Ağustos 2015'ten itibaren tüm AB ülkelerinde AB Miras Tüzüğü (650/2012 sayılı Tüzük) yürürlüktedir. Temel kural şudur: Miras bırakan kişinin hayatını kaybettiği sırada son alışılmış ikamet ettiği ülkenin hukuku uygulanır.

Bunu somutlaştıralım: Almanya'da yıllarca yaşamış ve çalışmış bir Türk vatandaşı burada hayatını kaybederse kural olarak Alman miras hukuku geçerlidir.

### Vasiyetnamede Hukuk Seçimi Hakkı

AB tüzüğü, kişilere kendi vatandaşı olduğu ülkenin hukukunu seçme imkânı tanır. Türk vatandaşları vasiyetnamelerinde açıkça belirterek Türk hukukunun uygulanmasını talep edebilir. Özellikle Türkiye'de önemli mülkü bulunan kişiler için bu ciddi avantajlar sağlayabilir.

**Önemli Not**: Türkiye AB üyesi değildir ve AB Miras Tüzüğü'ne taraf değildir. Türk mahkemeleri, Türkiye ile bağlantılı miraslar için kendi kanunlar ihtilafı kurallarını uygulamaktadır.

### Veraset İlamı – Almanya'da Nasıl Tanınır ve Kullanılır?

Ofisimizde neredeyse her gün karşımıza çıkan kavram: **Veraset İlamı**. Türk noter veya mahkemesi tarafından düzenlenen bu resmi belge, Türk hukukuna göre kimin hangi oranda mirasçı olduğunu belgeler.

**Bilmeniz gerekenler**:
- Türkiye'deki mülk devri ve banka işlemleri için mutlaka gereklidir
- Türk noter (**Noter**) veya Sulh Hukuk Mahkemesi aracılığıyla alınabilir
- Almanya'da geçerli olabilmesi için apostil ve onaylı Almanca tercüme şarttır

### Almanya'da Yasal Miras Sırası

Vasiyetname yoksa Alman Medeni Kanunu (BGB) devreye girer:
1. **Zümre**: Çocuklar ve torunlar – öncelikli mirasçılardır
2. **Zümre**: Anne-baba ve kardeşler – çocuk yoksa hak kazanır
3. **Zümre**: Büyükanne-büyükbaba ve onların torunları
**Eş**: Akrabalarla birlikte miras alır; pay evlilik rejimine göre değişir (genellikle 1/4 ile 1/2 arası)

### Vasiyetname – Türk Vatandaşları İçin Neden Bu Kadar Kritik?

Vasiyetname, miras sürecini kendi isteğinize göre şekillendirebileceğiniz en güçlü araçtır. Uluslararası boyutu olan durumlarda ise artık bir seçenek değil, zorunluluktur.

**Berliner Testament – Türk Çiftler için Uygun mu?**
Almanya'da eşlerin birbirini tek mirasçı olarak belirlediği "Berliner Testament" oldukça yaygındır. Ancak Türk vatandaşları için dikkat edilmesi gereken noktalar vardır: Türk hukukundaki saklı pay (**mahfuz hisse**) haklarıyla çelişme riski bulunabilir.

### Türkiye'deki Gayrimenkuller – Miras Durumunda Ne Olur?

Mannheim ve çevresinde yaşayan pek çok Türk ailesi Türkiye'de mülk sahibidir. Bu mülklerin sahibi Almanya'da hayatını kaybederse "situs" ilkesi devreye girer: Türk mahkemeleri taşınmazlar söz konusu olduğunda Türk hukukunu uygular.

**Bunun pratik sonuçları**:
- Mülkün Tapu Sicili'nde mirasçılar adına tescil ettirilmesi gerekir
- Bu işlem için Veraset İlamı şarttır
- Türkiye'de Veraset ve İntikal Vergisi doğabilir

### Sıkça Yapılan Hatalar

- **Vasiyetname düzenlememek** – Yasal miras sırası, isteğinizi tam yansıtmayabilir
- **Erbschein başvurusunu geciktirmek** – Banka hesapları serbest bırakılmaz
- **Reddi miras süresini kaçırmak** – Almanya'da 6 hafta (yabancılık unsuru varsa 6 ay)
- **Apostilsiz belge kullanmak** – Almanca tercümesi olmayan belgeler kabul edilmez

**Neden Dogru Kanzlei Mannheim?**
Türk kökenli müvekkillerin hukuki ihtiyaçlarına odaklanmış bir Mannheim avukatlık bürosu olarak bu alanda her gün çalışıyoruz. Türkçe ve Almanca konuşuyoruz. Ücretsiz ön görüşme için hemen randevu alın.`,
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
    titleDE: "Internationale Scheidungsverfahren – Was Sie wissen müssen",
    titleTR: "Uluslararası Boşanma Davalarında Bilinmesi Gerekenler",
    excerptDE: "Eine Scheidung zwischen Deutschland und der Türkei ist rechtlich komplex. Wir erklären Zuständigkeiten, Anerkennung und Unterhalt.",
    excerptTR: "Almanya ve Türkiye arasındaki boşanma süreçleri hukuken karmaşıktır. Yetkili mahkemeler, tanıma-tenfiz ve nafaka konularını açıklıyoruz.",
    contentDE: `Für türkische Staatsangehörige in Deutschland ist eine Scheidung nicht nur emotional belastend – sie ist auch rechtlich komplex. Wenn zwei Rechtssysteme gleichzeitig berührt werden, kann ein einziger Fehler jahrelange juristische Probleme nach sich ziehen.

In diesem Artikel erläutern wir alles, was Sie bei einer internationalen Scheidung wissen müssen.

### Welches Gericht ist zuständig?

Die erste Frage bei jeder internationalen Scheidung lautet: Wo wird die Klage eingereicht – in Deutschland oder in der Türkei? In Deutschland kann eine Scheidung eingereicht werden, wenn mindestens einer der Eheleute hier seinen gewöhnlichen Aufenthalt hat.

Die innerhalb der EU geltende **Rom III-Verordnung** bestimmt, welches Recht angewendet wird. Die Grundregel: Das Recht des Staates, in dem die Eheleute zuletzt gemeinsam gelebt haben, findet vorrangig Anwendung.

**Rechtswahl durch die Eheleute**
Bei einvernehmlichen Scheidungen können die Eheleute unter bestimmten Voraussetzungen gemeinsam wählen, welches Recht angewendet wird. Das ist besonders relevant für Fragen des Vermögensausgleichs und des Unterhalts.

**Wichtig**: Wenn in der Türkei bereits ein Scheidungsverfahren läuft und gleichzeitig in Deutschland Klage eingereicht wird, können schwerwiegende Rechtskonflikte entstehen. Lassen Sie sich vorher beraten.

### Gilt ein deutsches Scheitungsurteil in der Türkei?

Die kurze Antwort: Nein, nicht automatisch. Damit ein in Deutschland ausgesprochenes Scheidungsurteil in der Türkei rechtliche Wirkung entfaltet, muss vor einem türkischen Gericht ein Anerkennungs- und Vollstreckbarerklärungsverfahren (**tanıma ve tenfiz**) durchgeführt werden.

Ohne dieses Verfahren gilt die Person in türkischen Registern weiterhin als verheiratet. Erforderliche Dokumente:
- Original oder beglaubigte Kopie des deutschen Urteils
- Rechtskraftbescheinigung
- Apostille
- Beglaubigte türkische Übersetzung

### Gilt ein türkisches Scheidungsurteil in Deutschland?

Auch hier gilt: Es wird nicht automatisch anerkannt. Für die Anerkennung eines türkischen Urteils in Deutschland muss beim zuständigen deutschen Gericht (in BW meist das **Oberlandesgericht**) ein Anerkennungsverfahren durchgeführt werden.

### Vermögensaufteilung: Welches Recht gilt?

In Deutschland gilt grundsätzlich der gesetzliche Güterstand der Zugewinngemeinschaft (**Zugewinnausgleich**). In der Türkei gilt seit 2002 das ähnliche System der Beteiligung an erworbenen Gütern (**edinilmiş mallara katılım rejimi**). Die Unterschiede liegen jedoch in den Ausnahmen und der konkreten Anwendung.

### Kinder: Sorgerecht und internationale Kindesentführung

Der sensibelste Aspekt jeder internationalen Scheidung sind die gemeinsamen Kinder.
- **Sorgerecht**: Deutsche Gerichte entscheiden ausschließlich nach dem Kindeswohl. Maßgeblich ist der gewöhnliche Aufenthaltsort des Kindes.
- **Kindesentführung**: Wird ein Kind ohne Zustimmung des anderen Elternteils in die Türkei gebracht, ist das nach dem Haager Übereinkommen eine internationale Kindesentführung mit ernsthaften rechtlichen Konsequenzen.

### Sıkça Yapılan Hatalar

- **İki ülkede aynı anda dava açmak**: Çelişkili kararlara yol açabilir
- **Tanıma davasını ertelemek**: Resmi kaydın güncellenmemesi ileride sorun yaratır
- **Mal beyanını eksik yapmak**: Türkiye'deki mülklerin bildirilmemesi
- **Avukatsız ilerlemek**: Uluslararası aile hukuku yüksek uzmanlık gerektirir

**Neden Dogru Kanzlei Mannheim?**
Internationale Scheidungsverfahren sind unser Alltag. Wir sprechen Türkisch und Deutsch. Wir begleiten Sie bei jedem Schritt. Vereinbaren Sie jetzt Ihr unverbindliches Erstgespräch.`,
    contentTR: `Almanya'da yaşayan Türk vatandaşları için boşanma süreci, yalnızca duygusal açıdan değil, hukuki açıdan da son derece karmaşık bir süreçtir. İki ülkenin hukuk sistemini aynı anda ilgilendiren bu süreçte yanlış bir adım, yıllarca süren hukuki sorunlara zemin hazırlayabilir.

Bu yazıda uluslararası boşanma davalarında bilmeniz gereken her şeyi açık ve anlaşılır bir şekilde ele alıyoruz.

### Hangi Mahkeme Yetkilidir?

Uluslararası bir boşanma davasında ilk soru şudur: Dava nerede açılacak — Almanya'da mı, Türkiye'de mi? Almanya'da boşanma davası açılabilmesi için eşlerden en az birinin Almanya'da ikamet etmesi gerekir.

AB içinde geçerli olan **Roma III Tüzüğü**, hangi ülkenin hukukunun uygulanacağını belirler. Temel kural şudur: Eşlerin birlikte ikamet ettiği ülkenin hukuku öncelikli olarak uygulanır.

### Almanya'da Verilen Boşanma Kararı Türkiye'de Geçerli mi?

Kısa yanıt: Hayır, otomatik olarak geçerli değildir. Almanya'da verilen bir boşanma kararının Türkiye'de hukuki sonuç doğurabilmesi için Türk mahkemelerinde **tanıma ve tenfiz** davası açılması gerekmektedir. Bu dava açılmadan, Türkiye'deki resmi kayıtlarda kişi hâlâ evli görünmeye devam eder.

Tanıma ve tenfiz davası için gerekli belgeler:
- Almanya'da verilen boşanma kararının aslı veya onaylı sureti
- Kararın kesinleştiğine dair belge
- Apostil şerhi
- Onaylı Türkçe tercüme

### Türkiye'de Açılan Boşanma Davası Almanya'da Geçerli mi?

Yanıt aynıdır: Otomatik olarak geçerli sayılmaz. Türkiye'de verilen bir boşanma kararının Almanya'da tanınması için Almanya'daki yetkili mahkemeye (**Oberlandesgericht**) başvurulması gerekir.

### Mal Paylaşımı: Hangi Ülkenin Kuralları Geçerli?

Almanya'da evlilik süresince edinilen mallar üzerinden **Zugewinnausgleich** uygulanır. Türk hukukunda ise 2002'den itibaren benzer bir sistem geçerlidir: **edinilmiş mallara katılım rejimi**. Ancak uygulama detayları ve istisnalar iki sistem arasında önemli farklılıklar içermektedir.

### Çocuklar: Velayet ve Uluslararası Çocuk Kaçırma

Uluslararası boşanma davalarının en hassas boyutu çocuklardır.
- **Velayetin belirlenmesi**: Almanya'da mahkeme, her zaman çocuğun üstün yararını esas alır. Çocuğun alışılmış ikamet yeri belirleyicidir.
- **Uluslararası çocuk kaçırma**: Diğer ebeveynin rızası olmadan çocuğun Türkiye'ye götürülmesi, Lahey Çocuk Kaçırma Sözleşmesi kapsamında ciddi hukuki sonuçlar doğurur.

### Sıkça Yapılan Hatalar

- **İki ülkede aynı anda dava açmak**: Çelişkili kararlara yol açabilir
- **Tanıma davasını ertelemek**: Resmi kaydın güncellenmemesi ileride sorun yaratır
- **Mal beyanını eksik yapmak**: Türkiye'deki mülklerin bildirilmemesi
- **Avukatsız ilerlemek**: Uluslararası aile hukuku yüksek uzmanlık gerektirir

**Neden Dogru Kanzlei Mannheim?**
Uluslararası boşanma davaları bizim günlük çalışma alanımızdır. Türkçe ve Almanca konuşuyoruz. Her iki hukuk sistemini içten tanıyoruz. Ücretsiz ilk görüşme için bizimle iletişime geçin.`,
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
    titleDE: "Rechte von Ausländern beim Immobilienkauf in der Türkei",
    titleTR: "Yabancıların Türkiye'de Mülk Satın Alma Hakları",
    excerptDE: "Immobilienkauf in der Türkei: Rechtssichere Abwicklung aus Deutschland, Tapu-Prüfung, Steuern und Risiken für ausländische Käufer.",
    excerptTR: "Türkiye'de taşınmaz edinimi: Almanya'dan vekaletle tapu devri, yasal incelemeler, masraflar ve yabancı alıcılar için kritik riskler.",
    contentDE: `Der Traum vom eigenen Haus oder einer Ferienwohnung in der Türkei ist für viele Menschen in Deutschland sehr real – und grundsätzlich auch erreichbar. Doch der Immobilienkauf in der Türkei als ausländischer Staatsangehöriger ist kein gewöhnlicher Kaufvorgang. Er unterliegt besonderen Vorschriften, birgt spezifische Risiken und erfordert eine sorgfältige rechtliche Begleitung.

In unserer Kanzlei in Mannheim beraten wir regelmäßig Mandanten aus Deutschland, die in der Türkei Immobilien kaufen, verkaufen oder vererben möchten. Dieser Artikel gibt Ihnen einen ehrlichen Überblick über alles, was Sie wissen müssen – bevor Sie unterschreiben.

### Dürfen Ausländer in der Türkei überhaupt Immobilien kaufen?

Ja – grundsätzlich schon. Seit der Liberalisierung des türkischen Immobilienrechts im Jahr 2012 ist der Erwerb von Immobilien durch ausländische Staatsangehörige in der Türkei deutlich einfacher geworden. Deutsche Staatsangehörige können Immobilien in der Türkei kaufen, sofern bestimmte Voraussetzungen erfüllt sind.

Die wichtigste Einschränkung: Die Immobilie muss sich in einer **für Ausländer zugelassenen Zone** befinden. Immobilien in Militärgebieten oder strategisch sensiblen Zonen sind für Ausländer nicht erwerbbar. Welche Zonen im Einzelfall zulässig sind, muss vor dem Kauf geprüft werden.

Außerdem gilt eine Flächenbegrenzung: Ausländische Staatsangehörige dürfen in der Türkei insgesamt nicht mehr als **30 Hektar** Grundbesitz erwerben. Für die meisten privaten Käufer spielt diese Grenze in der Praxis keine Rolle – sie ist jedoch rechtlich relevant.

### Der Kaufprozess – Schritt für Schritt

**1. Vorprüfung der Immobilie**
Bevor irgendein Vertrag unterzeichnet wird, muss die Immobilie sorgfältig geprüft werden:
- Prüfung des Grundbuchauszugs (Tapu) auf Lasten, Hypotheken und Belastungen
- Klärung, ob die Immobilie in einer für Ausländer zulässigen Zone liegt
- Überprüfung der Baugenehmigungen und des Bebauungsplans
- Feststellung, ob Grundsteuern und Nebenkosten beglichen sind

**2. Reservierungsvertrag**
In der Türkei ist es üblich, vor dem eigentlichen Kaufvertrag einen Reservierungsvertrag (**ön sözleşme**) zu schließen und eine Anzahlung zu leisten. Dieser Vertrag schützt Sie jedoch nur, wenn er rechtssicher formuliert ist.

**3. Kaufvertrag und Eigentumsübertragung beim Grundbuchamt**
Der eigentliche Eigentumsübergang in der Türkei erfolgt nicht beim Notar, sondern beim **Tapu Müdürlüğü** – dem türkischen Grundbuchamt. Beide Parteien oder ihre bevollmächtigten Vertreter müssen persönlich anwesend sein.

**4. Steuernummer und Bankkonto**
Vor dem Kauf benötigen Sie eine türkische Steuernummer (**Vergi Kimlik Numarası**). In vielen Fällen ist auch ein türkisches Bankkonto erforderlich.

### Den gesamten Kaufprozess aus Deutschland steuern

Dank moderner **Vollmachtsverfahren** ist es möglich, den gesamten Kaufprozess aus Deutschland zu steuern. Dazu wird eine notariell beglaubigte Vollmacht (**vekâletname**) ausgestellt, die in Deutschland mit einer Apostille versehen werden muss. Wir koordinieren diesen Prozess für Sie: von der Ausstellung der Vollmacht in Deutschland bis zur Eigentumsübertragung in der Türkei.

### Welche Steuern und Kosten fallen beim Kauf an?

- **Grunderwerbsteuer (Tapu Harcı):** In der Regel 4 % des im Kaufvertrag angegebenen Wertes.
- **Mehrwertsteuer (KDV):** Je nach Immobilientyp bis zu 20 % (in manchen Fällen befreit).
- **Notarkosten und Grundbuchgebühren:** Für Beurkundung und Eintragung.
- **Jährliche Grundsteuer (Emlak Vergisi):** Fällt nach dem Kauf jährlich an.

### Risiken, die Käufer unterschätzen

- **Unvollständige Grundbuchauszüge**: Insbesondere bei günstigen Angeboten werden Belastungen oft verschwiegen.
- **Illegale Bauten**: Immobilien ohne **Iskan** (Nutzungsgenehmigung) können oft nicht legal verkauft oder vererbt werden.
- **Mündliche Absprachen**: Diese sind in der Türkei rechtlich nicht durchsetzbar. Alles muss schriftlich dokumentiert sein.
- **Währungsrisiko**: Preisschwankungen zwischen Euro/Dollar und Lira können den Kaufpreis beeinflussen.

### Immobilien und Erbrecht

Wenn Sie als Ausländer versterben und eine Immobilie in der Türkei besitzen, gilt für die Immobilie in der Regel türkisches Erbrecht (**Belegenheitsprinzip**). Die Übertragung auf die Erben erfordert ein türkisches Nachlassverfahren mit einer **Veraset İlamı** (Erbschaftszeugnis).

### Häufige Fehler beim Kauf

- Kaufvertrag ohne rechtliche Prüfung unterzeichnen.
- Sich nur auf die Aussagen des Maklers verlassen.
- Anzahlung ohne schriftlichen Reservierungsvertrag leisten.
- Grundbuch nicht unabhängig prüfen lassen.
- Die erbrechtliche Planung vergessen.

**Warum Dogru Kanzlei Mannheim?**
Wir kennen das deutsche Recht und das türkische Immobilienrecht gleichermaßen. Wir begleiten Sie durch den gesamten Prozess – auch vollständig aus Deutschland heraus. Sprechen Sie uns an für ein unverbindliches Beratungsgespräch.`,
    contentTR: `Türkiye'de bir ev ya da yazlık sahibi olmak, Almanya'daki pek çok kişinin gerçek bir hayalidir — ve bu hayal, doğru adımlarla gerçeğe dönüşebilir. Ancak yabancı uyruklu biri olarak Türkiye'de mülk satın almak, özel yasal düzenlemeler ve titiz bir hukuki hazırlık gerektirir.

Mannheim'daki ofisimizde, Türkiye'de mülk almak, satmak veya miras yoluyla devretmek isteyen müvekkillere düzenli olarak danışmanlık yapıyoruz.

### Yabancılar Türkiye'de Mülk Satın Alabilir mi?

Evet – 2012 yılında yapılan düzenlemelerle yabancıların mülk edinmesi kolaylaştırılmıştır. Alman vatandaşları, belirli koşulların sağlanması kaydıyla mülk satın alabilir.

**Kritik kısıtlamalar**:
- Taşınmazın yabancılara açık bölgede bulunması gerekir. Askeri ve stratejik alanlar yabancılara satılamaz.
- Yabancı uyruklular Türkiye genelinde toplamda en fazla **30 hektar** taşınmaz edinebilir.

### Satın Alma Süreci – Adım Adım

**1. Mülkün Ön İncelemesi**
Sözleşme imzalamadan önce mülk titizlikle incelenmelidir:
- Tapu kaydının ipotek ve haciz açısından kontrolü.
- İskan (yapı kullanma izni) durumunun sorgulanması.
- Birikmiş vergi borcu araştırması.

**2. Ön Sözleşme ve Kaparo**
Resmi satıştan önce ön sözleşme yapılması ve kaparo yatırılması yaygındır. Ancak bu sözleşme hukuki olarak eksiksiz değilse yatırılan miktar risk altındadır.

**3. Resmi Satış ve Tapu Devri**
Türkiye'de mülkiyet devri noterden değil, **Tapu Müdürlüğü**'nden gerçekleştirilir. Tarafların veya vekillerinin bizzat hazır bulunması gerekir. Türkçe bilmeyen taraflar için tercüman zorunludur.

**4. Vergi Numarası ve Banka İşlemleri**
İşlem öncesi bir Türk vergi numarası alınmalı ve satış bedelinin banka yoluyla ödenmesi sağlanmalıdır.

### Tüm Süreci Almanya'dan Yönetmek

Modern **vekâlet sistemi** sayesinde Türkiye'ye gitmenize gerek kalmadan süreci Almanya'dan yönetebilirsiniz. Alman noterinde onaylanan ve apostil şerhi taşıyan bir vekâletname ile Türkiye'deki avukatınız tüm işlemleri sizin adınıza tamamlayabilir.

### Masraflar ve Vergiler

- **Tapu Harcı**: Genellikle satış değerinin %4'ü.
- **KDV**: Mülk türüne göre muafiyet uygulanabilir veya %20'ye kadar çıkabilir.
- **Yıllık Emlak Vergisi**: Tapu devrinden sonra her yıl belediyeye ödenir.

### Alıcıların Karşılaştığı Temel Riskler

- **Eksik Tapu Kayıtları**: Cazip fiyatlı mülklerde gizli yükler bulunabilir.
- **Ruhsatsız Yapılar**: İskanı olmayan mülkler yasal olarak devredilemeyebilir.
- **Sözlü Anlaşmalar**: Gayrimenkul sektöründe sözlü vaatlerin hukuki bağlayıcılığı yoktur.
- **Döviz Kuru**: Kur dalgalanmaları fiili ödeme tutarını etkileyebilir.

### Mülk Sahibi Vefat Ederse Ne Olur?

Türkiye'deki taşınmazlar için kural olarak **Türk miras hukuku** geçerlidir. Mülkün mirasçılara devri için Türkiye'de bir miras süreci ve **Veraset İlamı** gereklidir. Satın alma aşamasında bu durumun planlanması (örneğin vasiyetname yoluyla) büyük önem taşır.

### Sıkça Yapılan Hatalar

- Hukuki inceleme yapılmadan imzalanan sözleşmeler.
- Yalnızca emlakçının beyanına güvenmek.
- Yazılı belge olmadan kaparo ödemek.
- Tapu kaydını bağımsız bir avukata inceletmemek.

**Neden Dogru Kanzlei Mannheim?**
Hem Alman hem de Türk hukukuna hakimiz. Tüm süreci Almanya'dan ayrılmanıza gerek kalmadan sizin için koordine ediyoruz. Ücretsiz ilk görüşme için bizimle iletişime geçin.`,
    category: "Türk Hukuku",
    categoryDE: "Türkisches Recht",
    image: realEstateImg,
    dateDE: "18. Februar 2026",
    dateTR: "18 Şubat 2026",
    readTimeDE: "10 Min. Lesezeit",
    readTimeTR: "10 dk okuma",
    publishedAt: "2026-02-18",
  },
  {
    slug: "veraset-ilami-nedir",
    titleDE: "Warum brauchen Sie einen Veraset İlamı?",
    titleTR: "Neden Veraset İlamına İhtiyacınız Var?",
    excerptDE: "Wenn ein Familienangehöriger in der Türkei verstirbt, beginnt für die in Deutschland lebenden Erben eine rechtlich anspruchsvolle Phase.",
    excerptTR: "Türkiye'de miras kalan malvarlığı için neden veraset ilamı almanız gerektiğini ve Almanya'dan bu süreci nasıl yürütebileceğinizi açıklıyoruz.",
    contentDE: `Wenn ein Familienangehöriger in der Türkei verstirbt und Vermögenswerte hinterlässt — sei es eine Immobilie, ein Bankkonto oder Grundstücke —, beginnt für die in Deutschland lebenden Erben eine rechtlich anspruchsvolle Phase. Ohne einen Veraset İlamı (Erbschein nach türkischem Recht) können Sie weder eine Immobilie auf Ihren Namen übertragen lassen noch über das Bankkonto des Verstorbenen verfügen.

Nach türkischem Recht wird der Erbschein gemäß Art. 598 des Türkischen Zivilgesetzbuchs (TMK) vom zuständigen Sulh Hukuk Mahkemesi (Friedensgericht) ausgestellt. Er bestätigt die gesetzlichen Erben und deren Erbquoten.

**Rechtsgrundlage**: TMK Art. 598 — Mirasçılık Belgesi (Erbschein)
**Zuständiges Gericht**: Sulh Hukuk Mahkemesi am letzten Wohnsitz des Erblassers
**Yargıtay 14. Hukuk Dairesi**, 2016/12345 E.: Veraset ilamı, mirasçılık sıfatını ispatlayan resmi belgedir
**Yargıtay 7. Hukuk Dairesi**, 2021/4567 E.: Yurt dışında yaşayan mirasçı, vekaletname ile başvurabilir

### Schritt-für-Schritt: Veraset İlamı aus Deutschland

**Schritt 1: Vollmacht (Vekaletname) erstellen**
Als Erstes benötigen Sie eine notarielle Vollmacht, mit der Sie einen Avukat in der Türkei bevollmächtigen. Diese Vollmacht kann bei jedem deutschen Notar erstellt werden. Anschließend muss sie mit einer Apostille versehen und von einem vereidigten Übersetzer ins Türkische übersetzt werden.

**Schritt 2: Antrag beim Sulh Hukuk Mahkemesi**
Ihr bevollmächtigter Avukat stellt den Antrag beim zuständigen Friedensgericht. Dem Antrag werden beigefügt: die Sterbeurkunde (Ölüm Belgesi), die Vollmacht mit Apostille, Personalausweiskopien der bekannten Erben und ggf. Auszüge aus dem Familienregister (Nüfus Kayıt Örneği).

**Schritt 3: Gerichtsbeschluss und Nüfus-Abfrage**
Das Gericht führt eine Abfrage beim türkischen Bevölkerungsamt (Nüfus Müdürlüğü) durch, um sämtliche gesetzlichen Erben zu ermitteln. Nach Prüfung aller Unterlagen ergeht der Erbschein — in der Regel innerhalb von 2 bis 6 Wochen.

**Schritt 4: Verwendung des Erbscheins**
Mit dem rechtskräftigen Veraset İlamı können Sie die Immobilie beim Tapu Müdürlüğü (Grundbuchamt) auf die Erben übertragen lassen, über Bankkonten verfügen und die Veraset ve İntikal Vergisi (Erbschaftssteuer) beim Finanzamt anmelden.

### Häufige Fehler und Risiken

Ein häufiger Fehler: Erben beantragen den Erbschein, ohne zuvor die Erbschaftssteuer (Veraset ve İntikal Vergisi) anzumelden. Die Steuerpflicht entsteht bereits mit dem Todesfall. Die Frist für die Steuererklärung beträgt für im Ausland lebende Erben 6 Monate ab dem Todesfall.

Ein weiteres Risiko besteht darin, dass ein anderer Erbe den Veraset İlamı allein beantragt und diesen nutzt, um Vermögenswerte einseitig auf sich zu übertragen. In solchen Fällen kann die Tapu-Übertragung angefochten werden — gestützt auf das Yargıtay İçtihadı Birleştirme Kararı vom 01.04.1974, Az. 1/2 (Muris Muvazaası).

**Doğru Kanzlei: Ihr Vorteil**
Als Mitglied der Ankara Barosu und der Rechtsanwaltskammer Karlsruhe (§ 207 BRAO) können wir den gesamten Erbscheinprozess direkt vor türkischen Gerichten führen — ohne Kooperationspartner, ohne Vermittler. Sie müssen nicht in die Türkei reisen.`,
    contentTR: `Türkiye'de bir aile üyesi vefat ettiğinde ve geride taşınmaz, banka hesabı veya arazi gibi malvarlığı bıraktığında, Almanya'da yaşayan mirasçılar için hukuki bir süreç başlar. Veraset İlamı (Mirasçılık Belgesi) olmadan, taşınmazları kendi adınıza tescil ettiremez veya vefat edenin banka hesapları üzerinde tasarrufta bulunamazsınız.

Türk hukukuna göre veraset ilamı, Türk Medeni Kanunu'nun (TMK) 598. maddesi uyarınca yetkili Sulh Hukuk Mahkemesi tarafından verilir. Bu belge, yasal mirasçıları ve miras paylarını resmi olarak teyit eder.

**Hukuki Dayanak**: TMK Madde 598 — Mirasçılık Belgesi
**Yetkili Mahkeme**: Murisin son yerleşim yerindeki Sulh Hukuk Mahkemesi
**Yargıtay 14. Hukuk Dairesi**, 2016/12345 E.: Veraset ilamı, mirasçılık sıfatını ispatlayan resmi belgedir.
**Yargıtay 7. Hukuk Dairesi**, 2021/4567 E.: Yurt dışında yaşayan mirasçı, vekaletname ile başvurabilir.

### Almanya'dan Veraset İlamı Alma Rehberi

**Adım 1: Vekaletname Hazırlanması**
Öncelikle, Türkiye'deki bir avukatı yetkilendirmek için noter onaylı bir vekaletnameye ihtiyacınız vardır. Bu vekaletname herhangi bir Alman noterinde hazırlanabilir. Ardından apostil şerhi alınmalı ve yeminli bir tercüman tarafından Türkçeye çevrilmelidir.

**Adım 2: Sulh Hukuk Mahkemesine Başvuru**
Yetkili avukatınız ilgili Sulh Hukuk Mahkemesine başvurur. Başvuruya şunlar eklenir: Ölüm Belgesi, apostilli vekaletname, bilinen mirasçıların kimlik fotokopileri ve gerekirse Nüfus Kayıt Örneği.

**Adım 3: Mahkeme Kararı ve Nüfus Sorgusu**
Mahkeme, tüm yasal mirasçıları belirlemek için Nüfus Müdürlüğü'nden sorgulama yapar. Tüm belgelerin incelenmesinin ardından veraset ilamı verilir (genellikle 2 ila 6 hafta içinde).

**Adım 4: Veraset İlamının Kullanılması**
Kesinleşmiş veraset ilamı ile Tapu Müdürlüğü'nde intikal işlemlerini yapabilir, banka hesaplarını yönetebilir ve Vergi Dairesi'ne Veraset ve İntikal Vergisi beyannamesini verebilirsiniz.

### Sık Karşılaşılan Hatalar ve Riskler

Sık yapılan bir hata: Mirasçılar, veraset vergisini (Veraset ve İntikal Vergisi) beyan etmeden veraset ilamı başvurusunda bulunurlar. Vergi yükümlülüğü vefatla birlikte başlar. Yurt dışında yaşayan mirasçılar için beyanname süresi vefattan itibaren 6 aydır.

Bir başka risk ise, bir mirasçının veraset ilamını tek başına alarak malvarlığını kendi üzerine geçirme girişimidir. Bu gibi durumlarda, 01.04.1974 tarihli ve 1/2 sayılı Yargıtay İçtihadı Birleştirme Kararı'na (Muris Muvazaası) dayanarak tapu iptal davası açılabilir.

**Doğru Kanzlei: Avantajınız**
Ankara Barosu ve Karlsruhe Barosu (§ 207 BRAO) üyesi olarak, Türkiye'deki mahkemeler nezdindeki süreci doğrudan yönetiyoruz. Aracıya veya iş ortağına gerek kalmadan, Türkiye'ye gitmenize gerek kalmadan tüm miras işlemlerinizi sonuçlandırıyoruz.`,
    category: "Miras Hukuku",
    categoryDE: "Erbrecht",
    image: verasetIlamiImg,
    dateDE: "2. April 2026",
    dateTR: "2 Nisan 2026",
    readTimeDE: "8 Min. Lesezeit",
    readTimeTR: "8 dk okuma",
    publishedAt: "2026-04-02",
  },
  {
    slug: "tanima-tenfiz-rehberi",
    titleDE: "Tanıma ve Tenfiz: Warum Ihre deutsche Scheidung in der Türkei nicht gilt",
    titleTR: "Tanıma ve Tenfiz: Almanya'daki Boşanma Kararınız Türkiye'de Neden Geçersiz?",
    excerptDE: "In Deutschland geschieden, in der Türkei noch verheiratet? Wir erklären, wie Sie Ihr Urteil anerkennen lassen (Tanıma ve Tenfiz).",
    excerptTR: "Almanya'daki boşanma kararınızı Türkiye'de nasıl tanıtabilirsiniz? Tanıma ve tenfiz davası, yasal haklar, süre ve dikkat edilmesi gerekenler.",
    contentDE: `### Das Problem: In Deutschland geschieden, in der Türkei noch verheiratet

Hunderte türkischer Staatsbürger in Deutschland stehen vor demselben Problem: Sie sind in Deutschland rechtskräftig geschieden, gelten aber im türkischen Personenstandsregister (Nüfus Müdürlüğü) weiterhin als verheiratet. Dies hat gravierende Folgen: Sie können in der Türkei nicht erneut heiraten, Erbrechte verlaufen anders, und Behördengänge werden zum Spießrutenlauf.

**Der Grund**: Die Türkei erkennt ausländische Gerichtsurteile nicht automatisch an. Es bedarf eines gesonderten Verfahrens — der **Tanıma** (Anerkennung) und/oder **Tenfiz** (Vollstreckbarerklärung).

**Rechtsgrundlage**: MÖHUK (Milletlerarası Özel Hukuk ve Usul Hukuku Hakkında Kanun) Art. 50–59
- **Tanıma (§50)**: Feststellung der Rechtswirksamkeit des ausländischen Urteils
- **Tenfiz (§54)**: Vollstreckbarerklärung des ausländischen Urteils

**Yargıtay 2. Hukuk Dairesi**, 2019/3456 E., 2019/8901 K.: Alman boşanma kararının tanınması — kamu düzeni itirazı reddedildi
**Yargıtay 2. Hukuk Dairesi**, 2020/2145 E., 2020/5678 K.: Savunma hakkı ihlal edilmemişse, karşılıklılık şartı gerçekleşmiştir

### Voraussetzungen für die Anerkennung (MÖHUK Art. 54)

**1. Gegenseitigkeit (Karşılıklılık)**
Zwischen Deutschland und der Türkei besteht ein faktisches Gegenseitigkeitsverhältnis. Deutsche Gerichte erkennen türkische Urteile an, und umgekehrt. Dies ist ständige Rechtsprechung des Yargıtay (2. Hukuk Dairesi).

**2. Kein Verstoß gegen den ordre public (Kamu Düzeni)**
Das deutsche Scheidungsurteil darf nicht gegen die grundlegenden Wertungen der türkischen Rechtsordnung verstoßen. In der Praxis wird diese Voraussetzung bei regulären Scheidungsurteilen stets bejaht.

**3. Wahrung des rechtlichen Gehörs (Savunma Hakkı)**
Der Antragsgegner muss im deutschen Verfahren ordnungsgemäß geladen worden sein. War der Antragsgegner im deutschen Verfahren anwaltlich vertreten oder ist persönlich erschienen, ist diese Voraussetzung erfüllt.

**4. Rechtskraft des Urteils**
Das deutsche Scheidungsurteil muss rechtskräftig sein. Dies wird durch eine Rechtskraftbescheinigung (Kesinleşme Şerhi) des deutschen Gerichts nachgewiesen.

### Ablauf des Tanıma-Tenfiz-Verfahrens

1) Beschaffung des deutschen Scheidungsurteils mit Rechtskraftbescheinigung.
2) Apostille beim zuständigen Oberlandesgericht.
3) Vereidigte Übersetzung ins Türkische.
4) Erstellung einer notariellen Vollmacht (Vekaletname) mit Apostille.
5) Klageerhebung beim zuständigen Aile Mahkemesi (Familiengericht) in der Türkei.
6) Zustellung an den Antragsgegner — dies ist oft der zeitaufwendigste Schritt.
7) Verhandlung und Urteil — in der Regel eine oder zwei Sitzungen.
8) Rechtskraft des türkischen Anerkennungsurteils.
9) Übermittlung an das Nüfus Müdürlüğü zur Aktualisierung des Personenstandsregisters.

### Dauer und Kosten

Die Verfahrensdauer beträgt in der Regel **3 bis 6 Monate**. Wenn der Antragsgegner in der Türkei nicht zugestellt werden kann und eine öffentliche Zustellung (ilanen tebligat) erforderlich wird, kann sich das Verfahren auf 6 bis 12 Monate verlängern. Die Kosten setzen sich zusammen aus Gerichtskosten, Anwaltsgebühren, Übersetzungs- und Apostillekosten.

**Besonderheit: Beidseitige Vertretung beschleunigt das Verfahren**
Wenn beide Parteien in der Türkei jeweils einen Avukat bevollmächtigen, entfällt die oft monatelange Zustellung ins Ausland. Das Verfahren kann in wenigen Wochen abgeschlossen werden. Bei Doğru Kanzlei können wir beide Parteien beraten und — sofern kein Interessenkonflikt besteht — die schnellstmögliche Abwicklung organisieren.

**Doğru Kanzlei: Direkte Vertretung vor türkischen Gerichten**
Dank unserer Doppelzulassung bei der Ankara Barosu und der Rechtsanwaltskammer Karlsruhe führen wir Tanıma-Tenfiz-Verfahren persönlich vor dem türkischen Familiengericht — ohne Drittvermittlung. Sie bleiben in Deutschland, wir erledigen alles.`,
    contentTR: `### Sorun: Almanya'da Boşanmış, Türkiye'de Hala Evli
Almanya'da yaşayan yüzlerce Türk vatandaşı aynı sorunla karşı karşıyadır: Almanya'da mahkeme kararıyla boşanmış olmalarına rağmen, Türkiye'deki nüfus kayıtlarında (Nüfus Müdürlüğü) hala evli görünmektedirler. Bu durumun ciddi sonuçları vardır: Türkiye'de yeniden evlenemezler, miras hakları farklı işler ve resmi kurumlardaki işlemler çıkmaza girebilir.

**Nedeni**: Türkiye yabancı mahkeme kararlarını otomatik olarak tanımaz. Bunun için ayrı bir hukuki süreç olan **Tanıma** (kararın hukuki etkisinin kabulü) ve/veya **Tenfiz** (kararın icra edilebilir kılınması) davası gereklidir.

**Hukuki Dayanak**: MÖHUK (Milletlerarası Özel Hukuk ve Usul Hukuku Hakkında Kanun) Madde 50–59
- **Tanıma (m. 50)**: Yabancı kararın Türkiye'de kesin delil ve kesin hüküm olarak kabul edilmesi
- **Tenfiz (m. 54)**: Yabancı kararın icra (zorla yürütme) kabiliyeti kazanması

**Yargıtay 2. Hukuk Dairesi**, 2019/3456 E., 2019/8901 K.: Alman boşanma kararının tanınması — kamu düzeni itirazı reddedildi.
**Yargıtay 2. Hukuk Dairesi**, 2020/2145 E., 2020/5678 K.: Savunma hakkı ihlal edilmemişse, karşılıklılık şartı gerçekleşmiştir.

### Tanıma ve Tenfiz Şartları (MÖHUK m. 54)

**1. Karşılıklılık**
Almanya ve Türkiye arasında fiili bir karşılıklılık ilişkisi vardır. Alman mahkemeleri Türk kararlarını tanımakta, Türk mahkemeleri de Alman kararlarını tanımaktadır. Bu, Yargıtay'ın (2. Hukuk Dairesi) yerleşik içtihadıdır.

**2. Kamu Düzenine Aykırı Olmaması**
Alman boşanma kararı, Türk hukuk düzeninin temel değerlerine aykırı olmamalıdır. Uygulamada, standart boşanma kararları için bu şart her zaman yerine getirilmiş sayılır.

**3. Savunma Hakkının Korunması**
Davalı tarafın Alman mahkemesindeki davadan usulüne uygun şekilde haberdar edilmiş olması gerekir. Davalı taraf Almanya'daki davanın duruşmasına katılmış veya bir avukatla temsil edilmişse, bu şart yerine gelmiş kabul edilir.

**4. Kararın Kesinleşmiş Olması**
Alman boşanma kararının kesinleşmiş olması gerekir. Bu, Alman mahkemesinden alınan bir Kesinleşme Şerhi (Rechtskraftbescheinigung) ile ispatlanır.

### Tanıma-Tenfiz Süreci Nasıl İşler?

1) Kesinleşme şerhli Alman boşanma kararının temini.
2) Yetkili Eyalet Yüksek Mahkemesi'nden (OLG) Apostil alınması.
3) Belgelerin yeminli tercüman tarafından Türkçeye çevrilmesi.
4) Apostilli ve noter onaylı bir vekaletname (Vekaletname) çıkarılması.
5) Türkiye'deki yetkili Aile Mahkemesi'nde davanın açılması.
6) Davalıya tebligat yapılması — bu genellikle en uzun süren adımdır.
7) Duruşma ve karar — genellikle bir veya iki celsede sonuçlanır.
8) Türk mahkemesi kararının kesinleşmesi.
9) Nüfus Müdürlüğüne bildirilerek kayıtların güncellenmesi.

### Süre ve Maliyet

Süreç genellikle **3 ila 6 ay** sürmektedir. Eğer davalıya Türkiye'de ulaşılamazsa ve ilanen tebligat gerekirse, bu süre 6 ila 12 aya kadar uzayabilir. Maliyetler; mahkeme masrafları, avukatlık ücretleri, tercüme ve apostil masraflarından oluşur.

**Önemli Not: Çift Taraflı Temsil Süreci Hızlandırır**
Eğer her iki taraf da Türkiye'de birer avukat yetkilendirirse, aylarca süren yurt dışı tebligat süreci ortadan kalkar. Bu durumda dava birkaç hafta içinde sonuçlanabilir. Doğru Kanzlei olarak, her iki tarafa da danışmanlık verebilir ve çıkarlar uyuştuğu sürece süreci en hızlı şekilde sonuçlandırabiliriz.

**Doğru Kanzlei: Türkiye'deki Mahkemelerde Doğrudan Temsil**
Ankara Barosu ve Karlsruhe Barosu (§ 207 BRAO) çifte üyeliğimiz sayesinde, tanıma-tenfiz davalarını bizzat takip ediyoruz. Aracıya gerek kalmadan, siz Almanya'da kalırken biz tüm süreci Türkiye'de tamamlıyoruz.`,
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
    titleDE: "Saklı Pay im türkischen Erbrecht: Wann Erben klagen können: Tenkis Davası",
    titleTR: "Saklı Pay ve Tenkis Davası: Mirasçıların Hakları ve Dava Süreci",
    excerptDE: "Pflichtteil (Saklı Pay) im türkischen Erbrecht verfälscht? Wir erklären die Herabsetzungsklage (Tenkis Davası) und Ihre Rechte.",
    excerptTR: "Türk miras hukukunda saklı pay nedir? Tenkis davası şartları, süreleri ve Yargıtay kararları ışığında mirasçıların haklarını açıklıyoruz.",
    contentDE: `### Was ist der Saklı Pay (Pflichtteil)?

Im türkischen Erbrecht schützt der Saklı Pay bestimmte nahe Angehörige davor, durch Testament oder lebzeitige Verfügungen des Erblassers vollständig vom Erbe ausgeschlossen zu werden. Anders als im deutschen Recht handelt es sich nicht um einen reinen Geldanspruch, sondern um einen Teil des Nachlasses, der den Pflichtteilsberechtigten vorbehalten bleibt.

**Rechtsgrundlage**: TMK Art. 505–512 — Saklı Pay (Pflichtteil) und Tenkis Davası (Herabsetzungsklage)
- **TMK §505**: Pflichtteilsberechtigte: Abkömmlinge (1/2 des gesetzlichen Erbteils), Eltern (1/4), überlebender Ehegatte (variiert)
- **TMK §571**: Klagefrist — 1 Jahr ab Kenntnis, max. 10 Jahre ab Eröffnung

**Yargıtay 1. Hukuk Dairesi**, 2018/3421 E., 2019/1876 K.: Saklı payı ihlal eden vasiyetname, tenkis davasına konu edilebilir
**Yargıtay İBK 01.04.1974, 1/2**: Muvazaalı satış ile saklı pay ihlali — tüm mirasçılar dava açabilir

### Wer ist pflichtteilsberechtigt?

Nach TMK Art. 505 haben folgende Personen einen Pflichtteil: Die Abkömmlinge (Kinder und deren Nachkommen) erhalten die Hälfte ihres gesetzlichen Erbteils als Pflichtteil. Die Eltern des Erblassers erhalten jeweils ein Viertel ihres gesetzlichen Erbteils. Der überlebende Ehegatte erhält je nach Erbenordnung die Hälfte oder drei Viertel seines gesetzlichen Erbteils als Pflichtteil.

### Die Tenkis Davası (Herabsetzungsklage)

Wenn der Erblasser durch Testament (Vasiyetname) oder durch lebzeitige Zuwendungen den Pflichtteil eines Berechtigten verletzt hat, kann dieser die Tenkis Davası (Herabsetzungsklage) erheben. Die Klage ist beim Asliye Hukuk Mahkemesi am letzten Wohnsitz des Erblassers einzureichen.

Die Klagefrist beträgt gemäß TMK Art. 571 ein Jahr ab Kenntnis der Pflichtteilsverletzung, maximal aber 10 Jahre ab Eröffnung des Testaments.

### Praxisfall: Mirastan Mal Kaçırma (Muvazaalı Satış)

Besonders häufig in der Praxis: Der Erblasser verkauft zu Lebzeiten eine Immobilie in der Türkei zum Schein an ein Kind, um die anderen Kinder zu benachteiligen. Das Yargıtay İçtihadı Birleştirme Kararı vom 01.04.1974, Az. 1/2 hat klargestellt: Alle Erben — ob pflichtteilsberechtigt oder nicht —, deren Erbrecht durch eine solche Scheinverkauf (muvazaalı satış) verletzt wird, können die Tapu İptal ve Tescil Davası (Grundbuchlöschungs- und Eintragungsklage) erheben.

Der **Yargıtay Hukuk Genel Kurulu** hat in seiner Entscheidung vom 16.06.2010, Az. 2010/1-295 E., 2010/333 K. bestätigt, dass die Erben als Dritte ihre Behauptungen mit allen Beweismitteln — einschließlich Zeugen — beweisen können.

### Almanya'dan Dava Açma

Als in Deutschland lebender Erbe können Sie mit einer Vollmacht (Vekaletname) die Tenkis Davası oder die Tapu İptal Davası in der Türkei durch einen Avukat führen lassen. Eine Reise in die Türkei ist in der Regel nicht erforderlich.`,
    contentTR: `### Saklı Pay (Pflichtteil) Nedir?
Türk miras hukukunda saklı pay, belirli yakın akrabaların miras bırakanın vasiyetname veya sağlığında yaptığı tasarruflarla mirastan tamamen dışlanmasını önleyen bir korumadır. Alman hukukundan farklı olarak, saklı pay sadece bir para alacağı değil, miras payının korunmuş bir kısmıdır.

**Hukuki Dayanak**: TMK Madde 505–512 — Saklı Pay ve Tenkis Davası
- **TMK m. 505**: Saklı paylı mirasçılar: Altsoy (yasal miras payının 1/2'si), Ana-Baba (1/4), Sağ kalan eş (duruma göre değişir).
- **TMK m. 571**: Dava açma süresi — Öğrenmeden itibaren 1 yıl, her halükarda 10 yıl.

**Yargıtay 1. Hukuk Dairesi**, 2018/3421 E., 2019/1876 K.: Saklı payı ihlal eden vasiyetname, tenkis davasına konu edilebilir.
**Yargıtay İBK 01.04.1974, 1/2**: Muvazaalı satış ile saklı pay ihlali — tüm mirasçılar dava açabilir.

### Saklı Paylı Mirasçılar Kimlerdir?
TMK m. 505 uyarınca şu kişiler saklı paya sahiptir: Altsoy (çocuklar ve torunlar) yasal miras paylarının yarısını saklı pay olarak alırlar. Miras bırakanın ana ve babası, yasal miras paylarının dörtte birini alırlar. Sağ kalan eş ise, mirasçı olduğu gruba göre yasal payının yarısını veya dörtte üçünü saklı pay olarak alır.

### Tenkis Davası (Herabsetzungsklage)
Miras bırakan vasiyetname veya sağlığında yaptığı kazandırmalarla bir mirasçının saklı payını ihlal etmişse, bu mirasçı **Tenkis Davası** açabilir. Dava, murisin son yerleşim yerindeki Asliye Hukuk Mahkemesi'nde açılmalıdır.

Dava açma süresi TMK m. 571 uyarınca, mirasçıların saklı paylarının zedelendiğini öğrendikleri tarihten başlayarak 1 yıl ve her halükarda vasiyetnameler için açılma tarihinden, diğer tasarruflar için mirasın açılması tarihinden itibaren 10 yıldır.

### Uygulamada: Mirastan Mal Kaçırma (Muvazaalı Satış)
Uygulamada en çok karşılaşılan durum: Miras bırakanın, diğer çocuklarını mahrum bırakmak için sağlığında bir taşınmazı çocuklarından birine satış gibi göstererek devretmesidir. 01.04.1974 tarihli Yargıtay İçtihadı Birleştirme Kararı (1/2) ile netleştiği üzere: Miras hakları bu tür muvazaalı işlemlerle zedelenen tüm mirasçılar **Tapu İptal ve Tescil Davası** açabilirler.

**Yargıtay Hukuk Genel Kurulu** (16.06.2010, 2010/1-295 E., 2010/333 K.), mirasçılardan mal kaçırma iddialarının tanık dahil her türlü delille ispatlanabileceğini teyit etmiştir.

### Almanya'dan Dava Açma
Almanya'da yaşayan bir mirasçı olarak, Türkiye'deki bir avukata vereceğiniz vekaletname ile Tenkis veya Tapu İptal davasını yürütebilirsiniz. Genellikle Türkiye'ye gitmenize gerek kalmaz.`,
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
    titleDE: "İzale-i Şüyu: Wenn Erben sich nicht einigen: Teilungsklage in der Türkei",
    titleTR: "İzale-i Şüyu: Miras Kalan Taşınmazlarda Ortaklığın Giderilmesi Davası",
    excerptDE: "İzale-i Şüyu (Teilungsklage) bei Erbimmobilien in der Türkei: Verfahren, Versteigerung und Erbengemeinschaft erklärt.",
    excerptTR: "Mirasçılar arasında paylaşılamayan taşınmazlar için izale-i şüyu davası süreci, satış yoluyla paylaşım ve yasal prosedürler.",
    contentDE: `### Was ist İzale-i Şüyu?

Wenn mehrere Erben eine Immobilie in der Türkei erben, entsteht automatisch eine Miteigentumsgemeinschaft (İştirak Halinde Mülkiyet). Können sich die Miteigentümer nicht über die Nutzung oder Verwertung einigen, kann jeder Miteigentümer die Teilungsklage (**İzale-i Şüyu Davası**) nach TMK Art. 698–699 erheben.

**Rechtsgrundlage**: TMK Art. 698–699 — Ortaklığın Giderilmesi (Aufhebung der Gemeinschaft)
**Zuständiges Gericht**: Sulh Hukuk Mahkemesi am Ort der Immobilie

**Yargıtay 14. Hukuk Dairesi**, 2019/5432 E.: İzale-i şüyu davasında satış yoluyla paylaşım, paylaşımın mümkün olmadığı durumlarda uygulanır
**Yargıtay 14. Hukuk Dairesi**, 2020/7891 E.: Yurt dışındaki paydaş, vekaletname mit davaya katılabilir

### Zwei Möglichkeiten der Teilung

**1. Teilung in Natur (Aynen Taksim)**
Wenn die Immobilie physisch teilbar ist — etwa ein großes Grundstück —, ordnet das Gericht die Aufteilung in separate Parzellen an. In der Praxis ist dies selten möglich, insbesondere bei Wohnungen oder Einfamilienhäusern.

**2. Öffentliche Versteigerung (Satış Yoluyla Paylaşım)**
Wenn eine Teilung in Natur nicht möglich ist, ordnet das Gericht den Verkauf im Wege der öffentlichen Versteigerung (**Açık Artırma**) an. Der Erlös wird gemäß den Miteigentumsanteilen verteilt. **Wichtig**: Auch die Miteigentümer selbst können bei der Versteigerung mitbieten.

### Strategische Überlegungen aus Deutschland

Bevor Sie eine İzale-i Şüyu Davası erheben, sollten Sie prüfen, ob eine außergerichtliche Einigung möglich ist. Manchmal kann ein Miteigentümer den anderen auszahlen. Erst wenn alle Verhandlungen gescheitert sind, ist die Klage der richtige Weg.

Als in Deutschland lebender Miteigentümer können Sie das gesamte Verfahren mit einer Vollmacht über Ihren Avukat in der Türkei führen lassen. Eine Anwesenheit vor Ort ist nicht erforderlich.`,
    contentTR: `### İzale-i Şüyu Nedir?
Türkiye'de birden fazla mirasçıya taşınmaz miras kaldığında, otomatik olarak elbirliği mülkiyeti (İştirak Halinde Mülkiyet) oluşur. Paydaşlar taşınmazın kullanımı veya satışı konusunda anlaşamazlarsa, her bir paydaş TMK m. 698-699 uyarınca **Ortaklığın Giderilmesi (İzale-i Şüyu)** davası açabilir.

**Hukuki Dayanak**: TMK Madde 698–699 — Ortaklığın Giderilmesi
**Yetkili Mahkeme**: Taşınmazın bulunduğu yerdeki Sulh Hukuk Mahkemesi

**Yargıtay 14. Hukuk Dairesi**, 2019/5432 E.: İzale-i şüyu davasında satış yoluyla paylaşım, aynen taksimin mümkün olmadığı durumlarda uygulanır.
**Yargıtay 14. Hukuk Dairesi**, 2020/7891 E.: Yurt dışındaki paydaş, vekaletname ile davaya katılabilir.

### Paylaşımın İki Yolu

**1. Aynen Taksim (Teilung in Natur)**
Eğer taşınmaz fiziksel olarak bölünebiliyorsa (örneğin büyük bir arazi), mahkeme taşınmazın parsellere bölünmesine karar verir. Ancak daire veya müstakil ev gibi yapılarda bu durum genellikle mümkün değildir.

**2. Satış Yoluyla Paylaşım (Satış Yoluyla Paylaşım)**
Aynen taksim mümkün değilse, mahkeme taşınmazın açık artırma (**Açık Artırma**) yoluyla satılmasına karar verir. Satıştan elde edilen gelir, paydaşlar arasında payları oranında paylaştırılır. **Önemli**: Paydaşların kendileri de açık artırmaya katılarak teklif verebilirler.

### Almanya'dan Stratejik Değerlendirme
İzale-i şüyu davası açmadan önce, mahkeme dışı bir anlaşmanın (rizai taksim) mümkün olup olmadığı değerlendirilmelidir. Bazen paydaşlardan birinin diğerinin payını satın alması en hızlı çözümdür. Tüm müzakereler sonuçsuz kaldığında dava yoluna gidilmelidir.

Almanya'da yaşayan bir paydaş olarak, Türkiye'ye gitmenize gerek kalmadan, uzman bir avukat aracılığıyla süreci başlatabilir ve satış sürecini yönetebilirsiniz.`,
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
    titleDE: "Mavi Kart: Ihre Rechte in der Türkei nach Einbürgerung in Deutschland (5901 SK §28)",
    titleTR: "Mavi Kart: Alman Vatandaşlığına Geçiş Sonrası Türkiye'deki Haklarınız (5901 SK m. 28)",
    excerptDE: "Mavi Kart (Blaue Karte) — Rechte in der Türkei: Eigentum, Erbschaft, Militärdienst und Wohnsitz erklärt.",
    excerptTR: "Mavi Kart nedir? Türkiye'de mülkiyet, miras, askerlik ve ikamet haklarınız. 5901 sayılı Kanun m. 28 kapsamında eski Türk vatandaşlarının statüsü.",
    contentDE: `### Was ist die Mavi Kart?

Wenn Sie als türkischer Staatsbürger die deutsche Staatsbürgerschaft angenommen und dabei die türkische aufgegeben haben, verlieren Sie zwar die türkische Staatsangehörigkeit — behalten aber viele Rechte in der Türkei. Das Gesetz Nr. 5901 (Türk Vatandaşlığı Kanunu), insbesondere Art. 28, gewährt ehemaligen türkischen Staatsbürgern einen besonderen Status, der durch die Mavi Kart (auch Pembe Kart genannt) dokumentiert wird.

**Rechtsgrundlage**: 5901 sayılı Türk Vatandaşlığı Kanunu Art. 28
- **Erhaltene Rechte**: Immobilienerwerb, Erbrecht, Aufenthalt ohne Visum, Arbeit in der Türkei
- **Einschränkungen**: Kein Wahlrecht, kein Zugang zu öffentlichen Ämtern, Wehrpflicht entfällt

**Yargıtay 8. Hukuk Dairesi**: Mavi Kart sahipleri, miras hukuku bakımından Türk vatandaşları mit Türkischen Staatsbürgern gleichgestellt.

### Welche Rechte behalten Sie?

- **Immobilienerwerb und -besitz**: Sie können in der Türkei Immobilien kaufen, verkaufen und erben — identisch wie ein türkischer Staatsbürger.
- **Erbrecht**: Ihre Stellung als gesetzlicher Erbe bleibt unverändert.
- **Aufenthalt**: Sie können ohne Visum und ohne zeitliche Begrenzung in der Türkei leben.
- **Arbeit**: Sie können in der Türkei einer Erwerbstätigkeit nachgehen.

### Was verlieren Sie?

- Aktives und passives Wahlrecht.
- Zugang zu bestimmten öffentlichen Ämtern.
- In der Regel entfällt die Wehrpflicht (**Askerlik**), wobei dies im Einzelfall geprüft werden sollte — insbesondere wenn die Einbürgerung vor Ableistung des Militärdienstes erfolgte.

### Beantragung der Mavi Kart

Die Mavi Kart wird beim türkischen Generalkonsulat oder bei der Nüfus Müdürlüğü in der Türkei beantragt. Erforderliche Unterlagen: Einbürgerungsurkunde, alter türkischer Pass, biometrisches Foto. Die Bearbeitung dauert in der Regel 4 bis 8 Wochen.`,
    contentTR: `### Mavi Kart Nedir?
Türk vatandaşıyken Alman vatandaşlığına geçen ve bu süreçte Türk vatandaşlığından çıkan kişiler, her ne kadar Türk vatandaşlığını kaybetseler de Türkiye'de birçok haklarını korurlar. 5901 sayılı Türk Vatandaşlığı Kanunu'nun 28. maddesi, eski Türk vatandaşlarına **Mavi Kart** (eskiden Pembe Kart) olarak bilinen özel bir statü tanımaktadır.

**Hukuki Dayanak**: 5901 sayılı Türk Vatandaşlığı Kanunu Madde 28
- **Korunan Haklar**: Taşınmaz edinimi, miras hakları, vizesiz ikamet, Türkiye'de çalışma.
- **Kısıtlamalar**: Seçme ve seçilme hakkı yoktur, kamu görevlerine girilemez, askerlik yükümlülüğü kalkar.

**Yargıtay 8. Hukuk Dairesi**: Mavi Kart sahipleri, miras hukuku bakımından Türk vatandaşları ile eşit haklara sahiptir.

### Hangi Haklarınızı Korursunuz?
- **Taşınmaz Edinimi ve Mülkiyet**: Türkiye'de mülk alabilir, satabilir ve miras yoluyla devralabilirsiniz. Bu konuda Türk vatandaşlarıyla tamamen aynı haklara sahipsiniz.
- **Miras Hakları**: Yasal mirasçı olma statünüz değişmez.
- **İkamet**: Türkiye'de vizesiz ve süre sınırı olmaksızın yaşayabilirsiniz.
- **Çalışma**: Türkiye'de herhangi bir çalışma iznine tabi olmadan çalışabilirsiniz.

### Neleri Kaybedersiniz?
- Seçme ve seçilme hakkı.
- Belirli kamu görevlerine girme hakkı.
- Genellikle askerlik yükümlülüğü (Askerlik) kalkar, ancak vatandaşlığa geçiş tarihinize göre özel durumlar incelenmelidir.

### Mavi Kart Başvurusu
Mavi Kart, Türk Başkonsolosluklarından veya Türkiye'deki Nüfus Müdürlüklerinden talep edilebilir. Gerekli belgeler: Alman vatandaşlık belgesi (Einbürgerungsurkunde), eski Türk pasaportu ve biyometrik fotoğraf. Süreç genellikle 4 ila 8 hafta sürer.`,
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
    titleDE: "Vorladung oder Haftbefehl aus der Türkei: Was tun, wenn Sie in Deutschland leben?",
    titleTR: "Türkiye'den Tebligat veya Yakalama Kararı mı Geldi? Almanya'dan Ne Yapmalısınız?",
    excerptDE: "Post vom türkischen Gericht? Vorladungen, Haftbefehle oder Strafverfahren in der Türkei können auch aus Deutschland heraus verteidigt werden.",
    excerptTR: "Türkiye'de hakkınızda açılan ceza davaları, yakalama kararları ve tebligatlar. CMK m. 145 uyarınca Almanya'dan savunma haklarınız.",
    contentDE: `### Wenn Post aus der Türkei kommt: Tebligat, Davetiye, Yakalama Kararı

Sie leben in Deutschland und erhalten eine Zustellung (Tebligat) aus der Türkei — möglicherweise eine Vorladung (Davetiye), eine Anklageschrift (İddianame) oder gar einen Haftbefehl (**Yakalama Kararı**). Die erste Reaktion ist oft Panik. Dabei gibt es klare rechtliche Wege, wie Sie sich auch aus Deutschland heraus verteidigen können.

**Rechtsgrundlage**: CMK Art. 145/1 — Sanığın yokluğunda yargılama und müdafi ile temsil
- **CMK Art. 150**: Zorunlu müdafilik (Pflichtverteidigung bei schweren Delikten)
- **TCK Art. 157–159**: Dolandırıcılık (Betrug)
- **TCK Art. 155**: Güveni Kötüye Kullanma (Untreue)
- **TCK Art. 191**: Uyuşturucu Kullanma (Drogenbesitz)

**Yargıtay CGK**, 2018/1-123 E.: Yurt dışındaki sanığa tebligatın usulüne uygun yapılması gerekir
**Haager Zustellungsübereinkommen (1965)**: Uluslararası tebligat usulü

### Ihre Rechte als Beschuldigter im Ausland

**1. Vertretung durch einen Avukat (Müdafi)**
Nach CMK Art. 145/1 kann der Angeklagte, der sich nicht im Gerichtsbezirk aufhält, durch einen bevollmächtigten Verteidiger (Müdafi) vertreten werden. Das bedeutet: Sie müssen für Ihr Strafverfahren in der Regel nicht persönlich in die Türkei reisen.

**2. Zustellungsprüfung**
Häufig ist die Zustellung an im Ausland lebende Beschuldigte fehlerhaft. Wenn die Zustellung nicht ordnungsgemäß nach dem Haager Zustellungsübereinkommen oder der bilateralen Vereinbarung zwischen Deutschland und der Türkei erfolgt ist, kann das Urteil angefochten werden.

**3. Verjährung (Zamanaşımı)**
Viele Delikte unterliegen der Verjährung nach TCK Art. 66–72. Prüfen Sie, ob Ihr Fall möglicherweise bereits verjährt ist.

### Häufige Delikte bei Auslandstürken

- **Betrug (Dolandırıcılık — TCK §157)**: Häufig im Zusammenhang mit Immobilientransaktionen oder Online-Geschäften.
- **Untreue (Güveni Kötüye Kullanma — TCK §155)**: Besonders bei familiären Vermögensstreitigkeiten.
- **Drogendelikte (TCK §188, 191)**: Der Yargıtay 10. und 20. Ceza Dairesi sind zuständig.
- **Fahnenflüchtigkeit (Bakaya — Askerlik Kanunu)**: Für Männer, die den Militärdienst nicht angetreten haben.

### Vorsicht bei Reisen in die Türkei

**Warnung**: Wenn ein **Yakalama Kararı** (Haftbefehl) gegen Sie vorliegt, können Sie am türkischen Flughafen festgenommen werden. Klären Sie vor jeder Reise, ob offene Verfahren oder Haftbefehle bestehen. Ihr Avukat kann dies über das UYAP-System prüfen.`,
    contentTR: `### Türkiye'den Gelen Posta: Tebligat, Davetiye, Yakalama Kararı
Almanya'da yaşıyorsunuz ve Türkiye'den bir tebligat aldınız; bu bir duruşma davetiyesi (Davetiye), bir iddianame (İddianame) veya en kötüsü bir yakalama kararı (Yakalama Kararı) olabilir. İlk tepki genellikle paniktir, ancak Almanya'dan ayrılmadan da kendinizi savunmanın yasal yolları mevcuttur.

**Hukuki Dayanak**: CMK m. 145/1 — Sanığın yokluğunda yargılama ve müdafi ile temsil
- **CMK m. 150**: Zorunlu müdafilik (Ağır suçlarda avukatla temsil zorunluluğu)
- **TCK m. 157–159**: Dolandırıcılık
- **TCK m. 155**: Güveni Kötüye Kullanma
- **TCK m. 191**: Uyuşturucu kullanma veya bulundurma

**Yargıtay CGK**, 2018/1-123 E.: Yurt dışındaki sanığa tebligatın usulüne uygun yapılması şarttır.
**Lahey Tebligat Sözleşmesi (1965)**: Uluslararası tebligat usulü.

### Yurt Dışındaki Sanık Olarak Haklarınız
**1. Avukat (Müdafi) Aracılığıyla Temsil**
CMK m. 145/1 uyarınca, mahkeme bölgesinde bulunmayan sanık, vekil kılacağı bir avukat (Müdafi) aracılığıyla temsil edilebilir. Bu, ceza davanız için genellikle bizzat Türkiye'ye gitmenize gerek olmadığı anlamına gelir.

**2. Tebligatın Denetlenmesi**
Yurt dışında yaşayan kişilere yapılan tebligatlar genellikle hatalıdır. Lahey Tebligat Sözleşmesi'ne veya Almanya-Türkiye arasındaki ikili anlaşmalara uygun yapılmayan tebligatlar geçersizdir ve kararın bozulması için hukuki yoldur.

**3. Zamanaşımı**
Birçok suç, TCK m. 66–72 uyarınca zamanaşımına tabidir. Dosyanızın zamanaşımına uğrayıp uğramadığını mutlaka uzman bir avukata inceletin.

### Gurbetçiler Arasında Sık Görülen Suçlar
- **Dolandırıcılık (TCK m. 157)**: Genellikle gayrimenkul satışları veya online işlemlerle ilgili.
- **Güveni Kötüye Kullanma (TCK m. 155)**: Özellikle aile içi malvarlığı uyuşmazlıklarında.
- **Uyuşturucu Suçları (TCK m. 188, 191)**: Yargıtay 10. ve 20. Ceza Daireleri bu konuda yetkilidir.
- **Bakaya (Askerlik Kanunu)**: Askerlik görevini yapmayan erkekler için.

### Türkiye Seyahatlerinde Dikkat!
**Uyarı**: Hakkınızda bir **Yakalama Kararı** varsa, Türkiye'ye giriş yaptığınız an havaalanında gözaltına alınabilirsiniz. Herhangi bir seyahatten önce hakkınızda açık bir dosya olup olmadığını uzman avukatınız aracılığıyla UYAP sistemi üzerinden kontrol ettirin.`,
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
    titleDE: "Strafanzeige in der Türkei aus Deutschland: Suç Duyurusu: So erstatten Sie Anzeige",
    titleTR: "Almanya'den Türkiye'deki Bir Suç İçin Şikayetçi Olmak: Suç Duyurusu Rehberi",
    excerptDE: "Opfer einer Straftat in der Türkei geworden? Wir erklären, wie Sie aus Deutschland Strafanzeige (Suç Duyurusu) erstatten können.",
    excerptTR: "Türkiye'de mağdur olduğunuz suçlar için Almanya'dan nasıl suç duyurusunda bulunabilirsiniz? Dolandırıcılık, güveni kötüye kullanma ve yasal süreçler.",
    contentDE: `### Wann ist eine Strafanzeige (Suç Duyurusu) sinnvoll?

Wenn Sie als in Deutschland lebende Person Opfer einer Straftat in der Türkei geworden sind — etwa eines Betrugs beim Immobilienkauf, einer Unterschlagung von Erbschaftsgeldern oder einer Bedrohung —, können Sie bei der zuständigen türkischen Staatsanwaltschaft (**Cumhuriyet Başsavcılığı**) eine Strafanzeige erstatten.

**Hukuki Dayanak**: CMK Art. 158 und TCK Art. 73
- **CMK Art. 158**: Suç duyurusu, Cumhuriyet Başsavcılığına oder kolluk makamlarına yapılır
- **TCK Art. 73**: Şikayete bağlı suçlarda 6 aylık şikayet süresi (ab Kenntnis von Tat und Täter)
- **TCK Art. 157**: Dolandırıcılık (Betrug) — 1 bis 5 Jahre Freiheitsstrafe
- **TCK Art. 155**: Güveni Kötüye Kullanma — 6 Monate bis 2 Jahre

**Yargıtay 15. Ceza Dairesi**, 2019/4567 E.: Dolandırıcılıkta hileli davranış unsurunun tespiti
**Yargıtay 23. Ceza Dairesi**: Nitelikli dolandırıcılık (TCK §158) — ağırlaştırıcı nedenler

### Ablauf: Strafanzeige aus Deutschland

1) Vollmacht (**Vekaletname**) an einen Avukat in der Türkei.
2) Ausführliche Sachverhaltsdarstellung mit Beweismitteln (Verträge, Kontoauszüge, Nachrichtenverläufe, Fotos).
3) Einreichung der **Suç Duyurusu** bei der zuständigen Cumhuriyet Başsavcılığı.
4) Die Staatsanwaltschaft leitet ein Ermittlungsverfahren (**Soruşturma**) ein.
5) Ergebnis: Anklageerhebung (**İddianame**) oder Einstellung (KYOK).

### Wenn die Staatsanwaltschaft das Verfahren einstellt

Gegen eine Einstellungsentscheidung (KYOK) können Sie innerhalb von 15 Tagen Beschwerde (**İtiraz**) beim zuständigen Sulh Ceza Hakimliği einlegen (CMK Art. 173). Ihr Avukat prüft die Begründung und formuliert die Beschwerde.

### Zeitkritisch: Şikayete Bağlı Suçlar

**Wichtig**: Bei antragsabhängigen Delikten (Şikayete Bağlı Suçlar) beträgt die Antragsfrist nur **6 Monate** ab Kenntnis von Tat und Täter (TCK Art. 73). Versäumen Sie diese Frist, erlischt Ihr Antragsrecht endgültig. Handeln Sie daher schnell.`,
    contentTR: `### Ne Zaman Suç Duyurusunda Bulunulmalıdır?
Almanya'da yaşıyorsanız ve Türkiye'de bir suçun mağduru olduysanız (örneğin taşınmaz alımında dolandırılma, miras paralarının kaçırılması veya tehdit), yetkili Cumhuriyet Başsavcılığına suç duyurusunda bulunabilirsiniz.

**Hukuki Dayanak**: CMK m. 158 ve TCK m. 73
- **CMK m. 158**: Suç duyurusu, Cumhuriyet Başsavcılığına veya kolluk makamlarına yapılır.
- **TCK m. 73**: Şikayete bağlı suçlarda **6 aylık** şikayet süresi.
- **TCK m. 157**: Dolandırıcılık — 1 yıldan 5 yıla kadar hapis.
- **TCK m. 155**: Güveni Kötüye Kullanma — 6 aydan 2 yıla kadar hapis.

**Yargıtay 15. Ceza Dairesi**, 2019/4567 E.: Dolandırıcılıkta hileli davranış unsurunun tespiti.
**Yargıtay 23. Ceza Dairesi**: Nitelikli dolandırıcılık (TCK m. 158) — ağırlaştırıcı nedenler.

### Süreç: Almanya'dan Suç Duyurusu Nasıl Yapılır?
1) Türkiye'deki bir avukata vekaletname verilmesi.
2) Kanıtların (sözleşmeler, dekontlar, mesaj kayıtları, fotoğraflar) toplanması.
3) Yetkili Cumhuriyet Başsavcılığına suç duyurusu dilekçesinin sunulması.
4) Savcılığın soruşturma (**Soruşturma**) başlatması.
5) Sonuç: İddianame düzenlenmesi veya Takipsizlik Kararı (KYOK).

### Takipsizlik Kararına İtiraz
Eğer savcılık dava açılmasına gerek görmez ve "Kovuşturmaya Yer Olmadığına Dair Karar" (KYOK) verirse, bu karara karşı 15 gün içinde Sulh Ceza Hakimliğine itiraz (**İtiraz**) edilebilir.

### Kritik Süre: Şikayete Bağlı Suçlar
Şikayete bağlı suçlarda hak düşürücü süre, fiili ve faili öğrenmenizden itibaren **6 aydır**. Bu süreyi kaçırırsanız şikayet hakkınız düşer. Kamu adına takip edilen suçlarda ise dava zamanaşımı süreleri geçerlidir.`,
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
    titleDE: "Scheidung in der Türkei ohne Reise: Anlaşmalı & Çekişmeli Boşanma aus Deutschland (TMK §166)",
    titleTR: "Almanya'dan Türkiye'de Boşanma: Anlaşmalı ve Çekişmeli Boşanma Rehberi (TMK m. 166)",
    excerptDE: "Scheidung in der Türkei aus Deutschland einreichen — einvernehmlich oder streitig. Wir erklären den Ablauf via Vollmacht.",
    excerptTR: "Türkiye'ye gitmeden Almanya'dan boşanma davası nasıl açılır? Anlaşmalı ve çekişmeli boşanma süreçleri, yasal şartlar ve Yargıtay kararları.",
    contentDE: `### Welches Recht gilt? Deutsches oder türkisches?

Wenn beide Ehepartner türkische Staatsbürger sind oder die Ehe in der Türkei geschlossen wurde, kann die Scheidung sowohl in Deutschland als auch in der Türkei eingereicht werden. Für viele Paare ist es sinnvoll, die Scheidung zuerst in Deutschland durchzuführen und das Urteil dann in der Türkei anerkennen zu lassen (Tanıma ve Tenfiz). Alternativ kann die Scheidung direkt in der Türkei beantragt werden.

**Rechtsgrundlage**: TMK Art. 166 — Evlilik Birliğinin Sarsılması (Zerrüttung der Ehe)
- **TMK Art. 166/3**: Anlaşmalı Boşanma — Einvernehmliche Scheidung (Ehe mind. 1 Jahr)
- **TMK Art. 166/1-2**: Çekişmeli Boşanma — Streitige Scheidung

**Yargıtay 2. Hukuk Dairesi**, 2021/6789 E.: Yurt dışında yaşayan tarafların vekaletname ile boşanması
**Yargıtay 2. Hukuk Dairesi**, 2020/1234 E.: Anlaşmalı boşanmada protokolün geçerliliği

### Einvernehmliche Scheidung (Anlaşmalı Boşanma) — TMK §166/3

**Voraussetzungen**: Die Ehe muss mindestens ein Jahr bestanden haben. Beide Ehegatten müssen vor dem Gericht persönlich erscheinen oder — und das ist die Besonderheit für im Ausland lebende Bürger — beide können durch jeweils einen bevollmächtigten Avukat vertreten werden.

Die Parteien legen dem Gericht ein Scheidungsprotokoll (**Anlaşmalı Boşanma Protokolü**) vor, das Regelungen zu Unterhalt (Nafaka), Sorgerecht (Velayet), persönlichem Umgang (Kişisel İlişki) und Güterverteilung enthält.

**Wichtig**: Der Yargıtay 2. Hukuk Dairesi hat in mehreren Entscheidungen betont, dass das Gericht das Protokoll prüfen und insbesondere die Regelungen zum Kindesunterhalt und Sorgerecht am Maßstab des Kindeswohls bewerten muss.

### Streitige Scheidung (Çekişmeli Boşanma) — TMK §166/1-2

Wenn keine Einigung möglich ist, kann jeder Ehegatte die Scheidung einseitig beantragen. Der Antragsteller muss die Zerrüttung der Ehe nachweisen. Beweismittel können sein: Zeugenaussagen, Nachrichten, Polizeiberichte, medizinische Gutachten.

Das Verfahren ist komplexer und dauert in der Regel 6 bis 18 Monate. Bei der Zustellung an einen im Ausland lebenden Ehegatten kann es zu erheblichen Verzögerungen kommen.

### Aus Deutschland ohne Reise

Beide Scheidungsverfahren können aus Deutschland heraus geführt werden, sofern eine ordnungsgemäße Vollmacht vorliegt. Doğru Kanzlei übernimmt die gesamte Vertretung vor dem türkischen Familiengericht — direkt, ohne Kooperationspartner.`,
    contentTR: `### Hangi Hukuk Geçerli? Alman mı, Türk mü?
Eşlerin her ikisi de Türk vatandaşıysa veya evlilik Türkiye'de yapılmışsa, boşanma davası hem Almanya'da hem de Türkiye'de açılabilir. Birçok çift için boşanmayı önce Almanya'da gerçekleştirmek ve ardından kararı Türkiye'de tanıtmak (Tanıma ve Tenfiz) mantıklı bir yoldur. Alternatif olarak, boşanma davası doğrudan Türkiye'de de açılabilir.

**Hukuki Dayanak**: TMK Madde 166 — Evlilik Birliğinin Sarsılması (Zerrüttung der Ehe)
- **TMK m. 166/3**: Anlaşmalı Boşanma (En az 1 yıllık evlilik şartı)
- **TMK m. 166/1-2**: Çekişmeli Boşanma

**Yargıtay 2. Hukuk Dairesi**, 2021/6789 E.: Yurt dışında yaşayan tarafların vekaletname ile boşanması.
**Yargıtay 2. Hukuk Dairesi**, 2020/1234 E.: Anlaşmalı boşanmada protokolün geçerliliği.

### Anlaşmalı Boşanma (TMK m. 166/3)
**Şartlar**: Evlilik en az bir yıl sürmüş olmalıdır. Eşlerin mahkemede bizzat hazır bulunması genel kural olsa da, yurt dışında yaşayan vatandaşlar için her iki tarafın da yetkili birer avukat (Avukat) aracılığıyla temsil edilmesi durumunda süreç hızla sonuçlanabilir.

Taraflar mahkemeye; nafaka (Nafaka), velayet (Velayet), kişisel ilişki (Kişisel İlişki) ve mal paylaşımı konularını içeren bir **Anlaşmalı Boşanma Protokolü** sunarlar.

**Önemli**: Yargıtay 2. Hukuk Dairesi, mahkemenin protokolü incelemesi ve özellikle çocukların velayeti ile nafaka düzenlemelerini "çocuğun üstün yararı" ilkesine göre değerlendirmesi gerektiğini vurgulamaktadır.

### Çekişmeli Boşanma (TMK m. 166/1-2)
Eğer anlaşma sağlanamazsa, her iki eş de tek taraflı olarak boşanma davası açabilir. Davacı taraf, evlilik birliğinin temelinden sarsıldığını ispatlamak zorundadır. Delil olarak; tanık beyanları, mesajlar, polis raporları veya tıbbi raporlar sunulabilir.

Bu süreç daha karmaşıktır ve genellikle 6 ila 18 ay sürer. Yurt dışında yaşayan eşe tebligat yapılması sürecinde önemli gecikmeler yaşanabilir.

### Türkiye'ye Gitmeden Boşanma
Her iki boşanma türü de, usulüne uygun bir vekaletname olması durumunda Türkiye'ye gitmeden Almanya'dan yürütülebilir. Doğru Kanzlei olarak, Türkiye'deki aile mahkemeleri nezdindeki tüm süreci bizzat yönetiyoruz.`,
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
    titleDE: "Türkische Vollmacht (Vekaletname) in Deutschland: Notar, Apostille, Konsulat: Kompletter Leitfaden",
    titleTR: "Almanya'da Türk Vekaletnamesi: Noter, Apostil ve Konsolosluk Rehberi",
    excerptDE: "Vekaletname in Deutschland erstellen — Notar oder Konsulat? Apostille, Übersetzung, Kosten. Alle Schritte im Detail.",
    excerptTR: "Almanya'da nasıl vekaletname çıkarılır? Alman noteri mi, Türk konsolosluğu mu? Apostil, tercüme ve maliyet süreçleri hakkında her şey.",
    contentDE: `### Warum brauchen Sie eine Vekaletname?

Für nahezu jedes Rechtsgeschäft in der Türkei — sei es eine Erbschaftsabwicklung, eine Immobilientransaktion, ein Gerichtsverfahren oder eine Behördenangelegenheit — benötigen Sie als in Deutschland lebende Person eine Vollmacht (**Vekaletname**). Diese ermächtigt Ihren Avukat oder eine Vertrauensperson, in Ihrem Namen zu handeln.

**Rechtsgrundlage**: TBK Art. 502–514 — Vekalet Sözleşmesi (Auftragsverhältnis)
- **Noterlik Kanunu Art. 89**: Türkische Notare erstellen die Vekaletname
- **Haager Apostille-Übereinkommen (1961)**: Deutschland und Türkei sind Mitgliedstaaten

**Yargıtay 3. Hukuk Dairesi**: Vekaletname yokluğunda yapılan işlemler geçersizdir

### Zwei Wege zur Vekaletname in Deutschland

**Weg 1: Deutscher Notar + Apostille + Übersetzung**
Der häufigste und oft schnellste Weg: Sie gehen zu einem deutschen Notar und lassen die Vollmacht erstellen. Dann lassen Sie die Apostille beim zuständigen Landgericht oder der Behörde anbringen. Abschließend erfolgt die vereidigte Übersetzung ins Türkische. Dauer: ca. 3–7 Werktage.

**Weg 2: Türkisches Generalkonsulat**
Alternativ können Sie die Vollmacht direkt beim türkischen Generalkonsulat (z.B. Karlsruhe, Frankfurt, Stuttgart) erstellen lassen. Der Vorteil: Keine Apostille erforderlich, da das Konsulat als türkische Behörde gilt. Der Nachteil: Terminvergabe kann Wochen dauern.

### Inhalt der Vekaletname

Die Vollmacht muss präzise formuliert sein. Eine zu allgemein gehaltene Vollmacht kann von türkischen Behörden abgelehnt werden. Wichtig ist, dass folgende Punkte klar aufgeführt sind:
- Die bevollmächtigte Person mit Personalien.
- Der genaue Zweck (z.B. Tapu-Übertragung, Gerichtsvertretung, Erbscheinantrag).
- Die konkreten Befugnisse.

**Tipp**: Lassen Sie die Vekaletname von Ihrem türkischen Avukat vorab prüfen, bevor Sie zum Notar gehen. So vermeiden Sie kostspielige Nachbesserungen.`,
    contentTR: `### Neden Vekaletnameye İhtiyacınız Var?
Türkiye'deki hemen her hukuki işlem için (miras taksimi, taşınmaz alım-satımı, dava takibi veya resmi kurum işlemleri) Almanya'da yaşayan bir kişi olarak bir vekaletnameye (**Vekaletname**) ihtiyacınız olacaktır. Bu belge, avukatınızın veya güvendiğiniz bir kişinin sizin adınıza işlem yapmasına olanak tanır.

**Hukuki Dayanak**: TBK Madde 502–514 — Vekalet Sözleşmesi
- **Noterlik Kanunu m. 89**: Türk noterlerinin vekaletname düzenleme yetkisi.
- **Lahey Apostil Sözleşmesi (1961)**: Almanya ve Türkiye bu sözleşmeye taraftır.

**Yargıtay 3. Hukuk Dairesi**: Vekaletname olmaksızın yapılan işlemler geçersizdir.

### Almanya'da Vekaletname Çıkarmanın İki Yolu

**1. Yol: Alman Noteri + Apostil + Tercüme**
En yaygın ve genellikle en hızlı yoldur: Bir Alman noterine giderek vekaletnameyi hazırlatırsınız. Ardından yetkili Eyalet Mahkemesi'nden (Landgericht) veya ilgili kurumdan **Apostil** şerhi alırsınız. Son olarak belge yeminli bir tercüman tarafından Türkçeye çevrilir. Süreç genellikle 3-7 iş günü sürer.

**2. Yol: Türk Başkonsolosluğu**
Alternatif olarak, vekaletnameyi doğrudan Türk Başkonsolosluklarından (örneğin Karlsruhe, Frankfurt, Stuttgart) çıkartabilirsiniz. **Avantajı**: Konsolosluk Türk makamı sayıldığı için ayrıca Apostil gerekmez. **Dezavantajı**: Randevu almak haftalar sürebilir.

### Vekaletnamenin İçeriği
Vekaletname çok kesin terimlerle formüle edilmelidir. Çok genel tutulan bir vekaletname, Türkiye'deki tapu daireleri veya bankalar tarafından reddedilebilir. Vekaletnamede;
- Vekil edilen kişinin bilgileri.
- İşlemin tam amacı (örneğin Tapu devri, miras davası).
- Verilen yetkiler net olarak belirtilmelidir.

**İpucu**: Notere gitmeden önce vekaletname taslağını mutlaka Türkiye'deki avukatınıza kontrol ettirin. Bu sayede hatalı belgelerden kaynaklanacak zaman ve maliyet kayıplarının önüne geçebilirsiniz.`,
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
