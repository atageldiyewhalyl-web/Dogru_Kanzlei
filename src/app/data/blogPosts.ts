import realEstateImg from "@/assets/blog_real_estate.png";

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
    titleTR: "Almanya'da Yaşayan Türk Vatandaşları İçin Miras Hukuku Rehberi",
    excerptDE: "Wir behandeln häufig gestellte Fragen und richtige Ansätze an den Schnittstellen des türkischen und deutschen Erbrechts.",
    excerptTR: "Türk ve Alman miras hukukunun kesiştiği noktalarda sıkça karşılaşılan soruları ve doğru yaklaşımları ele alıyoruz.",
    contentDE: `Das Erbrecht für türkische Staatsangehörige in Deutschland ist ein komplexes Thema, das beide Rechtssysteme berührt. In diesem Artikel erläutern wir die wichtigsten Aspekte.

Wenn ein türkischer Staatsangehöriger in Deutschland verstirbt, stellt sich zunächst die Frage, welches Recht Anwendung findet. Nach der EU-Erbrechtsverordnung gilt grundsätzlich das Recht des letzten gewöhnlichen Aufenthaltsorts.

Besonders wichtig ist die Frage der Erbschaftsurkunde (Veraset İlamı) und deren Anerkennung in beiden Ländern. Wir beraten Sie umfassend zu allen Aspekten des internationalen Erbrechts.`,
    contentTR: `Almanya'da yaşayan Türk vatandaşları için miras hukuku, her iki hukuk sistemini de ilgilendiren karmaşık bir konudur. Bu makalede en önemli yönleri açıklıyoruz.

Bir Türk vatandaşı Almanya'da vefat ettiğinde, öncelikle hangi hukukun uygulanacağı sorusu gündeme gelir. AB Miras Hukuku Tüzüğü'ne göre, kural olarak son mutad mesken hukuku uygulanır.

Özellikle veraset ilamı ve bunun her iki ülkede tanınması konusu büyük önem taşımaktadır. Uluslararası miras hukukunun tüm yönleri hakkında kapsamlı danışmanlık sunuyoruz.`,
    category: "Miras Hukuku",
    categoryDE: "Erbrecht",
    image: "https://images.unsplash.com/photo-1769092992534-f2d0210162b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXclMjBsaWJyYXJ5JTIwYm9va3MlMjBsZWdhbHxlbnwxfHx8fDE3NzQ2OTc3NDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    dateDE: "15. März 2026",
    dateTR: "15 Mart 2026",
    readTimeDE: "8 Min. Lesezeit",
    readTimeTR: "8 dk okuma",
    publishedAt: "2026-03-15",
  },
  {
    slug: "uluslararasi-bosanma",
    titleDE: "Was Sie bei internationalen Scheidungsverfahren wissen müssen",
    titleTR: "Uluslararası Boşanma Davalarında Bilinmesi Gerekenler",
    excerptDE: "Welches Gericht ist zuständig, wenn das Recht beider Länder gleichzeitig gilt? Wie werden Unterhalt und Sorgerecht bestimmt?",
    excerptTR: "İki ülke hukukunun aynı anda geçerli olduğu boşanma davalarında hangi mahkeme yetkilidir? Nafaka ve velayet hakları nasıl belirlenir?",
    contentDE: `Internationale Scheidungsverfahren zwischen Deutschland und der Türkei werfen zahlreiche rechtliche Fragen auf. In diesem Artikel geben wir Ihnen einen Überblick.

Die Zuständigkeit des Gerichts richtet sich nach verschiedenen Faktoren, darunter der gewöhnliche Aufenthalt der Ehepartner. Es ist wichtig zu wissen, dass eine in Deutschland ausgesprochene Scheidung in der Türkei nicht automatisch anerkannt wird.

Für die Anerkennung ist ein sogenanntes Tanıma ve Tenfiz-Verfahren erforderlich. Wir begleiten Sie durch den gesamten Prozess in beiden Ländern.`,
    contentTR: `Almanya ve Türkiye arasındaki uluslararası boşanma davaları birçok hukuki soruyu beraberinde getirir. Bu makalede size genel bir bakış sunuyoruz.

Mahkemenin yetkisi, eşlerin mutad meskeni de dahil olmak üzere çeşitli faktörlere göre belirlenir. Almanya'da verilen boşanma kararının Türkiye'de otomatik olarak tanınmadığını bilmek önemlidir.

Tanınma için tanıma ve tenfiz davası açılması gerekmektedir. Her iki ülkedeki tüm süreçlerde size eşlik ediyoruz.`,
    category: "Aile Hukuku",
    categoryDE: "Familienrecht",
    image: "https://images.unsplash.com/photo-1763729805496-b5dbf7f00c79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250cmFjdCUyMHNpZ25pbmclMjBsZWdhbCUyMGRvY3VtZW50fGVufDF8fHx8MTc3NDYxNzAzNnww&ixlib=rb-4.1.0&q=80&w=1080",
    dateDE: "2. März 2026",
    dateTR: "2 Mart 2026",
    readTimeDE: "6 Min. Lesezeit",
    readTimeTR: "6 dk okuma",
    publishedAt: "2026-03-02",
  },
  {
    slug: "gayrimenkul-haklari",
    titleDE: "Rechte von Ausländern beim Immobilienkauf in der Türkei",
    titleTR: "Türkiye'de Gayrimenkul Alımında Yabancıların Hakları",
    excerptDE: "Schritt-für-Schritt-Anleitung zum rechtlichen Ablauf, Risiken und notariellen Anforderungen beim Immobilienkauf in der Türkei aus Deutschland.",
    excerptTR: "Almanya'dan Türkiye'de mülk satın almak isteyenler için adım adım yasal süreç, dikkat edilmesi gereken riskler ve noterde yapılması gerekenler.",
    contentDE: `Der Immobilienerwerb in der Türkei durch ausländische Staatsangehörige ist grundsätzlich möglich, unterliegt jedoch bestimmten Einschränkungen und erfordert sorgfältige rechtliche Planung.

Zunächst muss geprüft werden, ob die gewünschte Immobilie in einer für Ausländer zugelassenen Zone liegt. Die Eigentumsübertragung erfolgt beim Grundbuchamt (Tapu Müdürlüğü).

Dank moderner Vollmachtsverfahren ist es möglich, den gesamten Kaufprozess aus Deutschland zu steuern, ohne persönlich in die Türkei reisen zu müssen.`,
    contentTR: `Yabancı uyrukluların Türkiye'de gayrimenkul edinmesi prensip olarak mümkün olmakla birlikte, belirli kısıtlamalara tabidir ve dikkatli bir hukuki planlama gerektirir.

Öncelikle, istenen gayrimenkulün yabancılara izin verilen bölgede olup olmadığı kontrol edilmelidir. Mülkiyetin devri Tapu Müdürlüğü'nde gerçekleştirilir.

Modern vekaletname prosedürleri sayesinde, Türkiye'ye bizzat seyahat etmeye gerek kalmadan tüm satın alma sürecini Almanya'dan yönetmek mümkündür.`,
    category: "Türk Hukuku",
    categoryDE: "Türkisches Recht",
    image: realEstateImg,
    dateDE: "18. Februar 2026",
    dateTR: "18 Şubat 2026",
    readTimeDE: "10 Min. Lesezeit",
    readTimeTR: "10 dk okuma",
    publishedAt: "2026-02-18",
  },
];
