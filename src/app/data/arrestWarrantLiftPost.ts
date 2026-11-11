import criminalDefenseImg from "@/assets/criminal_defense_law.avif";
import type { BlogPost } from "./blogPosts";

// Client draft "Blog – Yakalama Kararının Kaldırılması (TR/DE)", 10.11.2026. Turkish and German only.
// Per the draft's own pre-publication checklist, the Yargıtay 4. CD 11.10.2006 citation was removed
// because it could not be verified. The two 2024 decisions stay anonymised (region + year only), and
// the text must not present them as the firm's own results. Turkish law only (§ 207 BRAO).
// FAQs live in the faq arrays — the body must not contain an FAQ heading.
export const arrestWarrantLiftPost: BlogPost = {
  slug: "yurt-disinda-yakalama-karari-kaldirma",
  slugDE: "haftbefehl-tuerkei-pass-aufhebung",
  slugTR: "yurt-disinda-yakalama-karari-kaldirma",
  slugEN: "",
  titleDE: "Haftbefehl in der Türkei: Kein Pass vom Konsulat – so wird der Vorführungshaftbefehl aufgehoben",
  titleTR: "Yakalama Kararı Yüzünden Pasaport Alamıyorum: Yurt Dışından Yakalama Kararı Nasıl Kaldırılır?",
  titleEN: "",
  excerptDE: "Das türkische Konsulat verlängert Ihren Pass nicht, weil eine Festnahmeanordnung (yakalama kararı) besteht? So lässt sie sich ohne Reise in die Türkei aufheben.",
  excerptTR: "Konsolosluk pasaportunuzu yenilemiyor ve hakkınızda yakalama kararı olduğunu öğrendiniz? Türkiye'ye gitmeden yakalama kararını kaldırmanın yolu ve dayanakları.",
  excerptEN: "",
  metaTitleDE: "Haftbefehl Türkei: Kein Pass vom Konsulat – Aufhebung",
  metaTitleTR: "Yakalama Kararı Yüzünden Pasaport Alamıyorum: Kaldırma",
  metaDescriptionDE: "Sie leben in Deutschland, das türkische Konsulat verlängert Ihren Pass nicht, weil in der Türkei eine Festnahmeanordnung (yakalama kararı) gegen Sie besteht? So lässt sich die Anordnung ohne Reise in die Türkei aufheben – Rechtsgrundlagen und Entscheidungen aus 2024.",
  metaDescriptionTR: "Almanya'da yaşıyorsunuz, konsolosluk pasaportunuzu yenilemiyor ve hakkınızda yakalama kararı olduğunu öğrendiniz. Türkiye'ye gitmeden yakalama kararını kaldırmanın yolu, dayanakları ve 2024 tarihli emsal kararlar.",
  keywordsDE: "haftbefehl türkei pass, türkisches konsulat pass verlängerung haftbefehl, yakalama kararı aufheben, festnahmeanordnung türkei aufheben, vorführungshaftbefehl türkei, haftbefehl türkei aufheben ohne einreise, rechtshilfe vernehmung türkei, sulh ceza hakimliği antrag",
  keywordsTR: "yakalama kararı pasaport, yakalama kararı yüzünden pasaport alamıyorum, yakalama kararı kaldırma, yurt dışında yakalama kararı, ifade için yakalama kararı, yakalama kararına itiraz, istinabe yoluyla ifade, konsolosluk pasaport yakalama kararı",
  articleAuthor: "Av. Hasan Doğru",
  articleSectionDE: "Türkisches Strafrecht",
  articleSectionTR: "Türk Ceza Hukuku",
  articleTagsDE: ["Haftbefehl Türkei", "Reisepass", "Aufhebung", "Rechtshilfe / İstinabe"],
  articleTagsTR: ["Yakalama Kararı", "Pasaport", "Yakalama Kararının Kaldırılması", "İstinabe"],
  exactHreflangs: true,
  schemaImage: "https://www.hasandogru.de/assets/criminal_defense_law-BDM0I72W.png",
  category: "Türk Ceza Hukuku",
  categoryDE: "Türkisches Strafrecht",
  categoryEN: "Turkish Criminal Law",
  image: criminalDefenseImg,
  dateDE: "11. November 2026",
  dateTR: "11 Kasım 2026",
  dateEN: "",
  readTimeDE: "5 Min. Lesezeit",
  readTimeTR: "5 dk okuma",
  readTimeEN: "",
  publishedAt: "2026-11-11",
  modifiedAt: "2026-11-11",
  publishedAtDE: "2026-11-11",
  publishedAtTR: "2026-11-11",
  modifiedAtDE: "2026-11-11",
  modifiedAtTR: "2026-11-11",
  contentTR: `> **Hukuki Bilgilendirme:** Bu makale yalnızca Türk hukukuna ilişkin genel bilgi amaçlıdır ve münferit hukuki danışmanlık yerine geçmez. Doğru Kanzlei, § 207 BRAO kapsamında yalnızca Türk hukuku konularında danışmanlık vermektedir.

## Konsoloslukta öğrenilen gerçek

Senaryo neredeyse hep aynı: Pasaportunuzu yenilemek için konsolosluğa gidersiniz, memur ekrana bakar ve "Hakkınızda yakalama kararı var, pasaport veremiyoruz" der. Çoğu kişi Türkiye'de hakkında bir soruşturma olduğunu o an öğrenir.

Ardından kısır döngü başlar. Yakalama kararının amacı ifadenizi almaktır. Pasaportunuz olmadan Türkiye'ye gidip ifade veremezsiniz. İfade vermediğiniz için karar kalkmaz. Bu sırada oturum izniniz, işiniz ve seyahat özgürlüğünüz risk altına girer.

Bu döngü kırılabilir ve çoğu durumda Türkiye'ye gitmeniz gerekmez.

## Hukuki dayanak: Yakalama bir ceza değil, bir araçtır

- **CMK m. 98/1:** Soruşturma aşamasında yakalama emri, çağrıya uymayan veya çağrı yapılamayan şüpheli için düzenlenir. Tek amacı savunmanın alınmasıdır.
- **Anayasa m. 13 ve 19:** Özgürlüğü sınırlayan her tedbir ölçülü olmak zorundadır. Amacına ulaşamayan tedbir ölçülü değildir.
- **CMK m. 145–146:** Kanun önce çağrıyı, sonra zorla getirmeyi öngörür.
- **CMK m. 94/2:** Kanun koyucu ifade amaçlı yakalamalarda "ifade verme taahhüdü" ile serbest bırakma imkânı getirerek, amacın kişiyi tutmak değil ifadesini almak olduğunu açıkça göstermiştir.
- **6706 sayılı Kanun ve 1959 tarihli Avrupa Adli Yardım Sözleşmesi:** Yurt dışındaki şüphelinin ifadesi istinabe yoluyla, bulunduğu ülkede alınabilir. Türkiye ve Almanya bu sözleşmenin tarafıdır.
- **CMK m. 267–268:** Yakalama kararına karşı kararı veren sulh ceza hâkimliğine başvurulur; itiraz süresi iki haftadır.

## Mahkemeler ne diyor? 2024'ten iki karar

Karadeniz bölgesindeki bir sulh ceza hâkimliği, Fransa'da yaşayan ve pasaport alamayan bir şüphelinin başvurusunu kabul etti. Gerekçesi şuydu: Savunmanın tespiti için çıkarılan yakalama emri mevcut durumda amacının zıttı yönünde sonuç doğurmaktadır; pasaport olmadan ülkeye giriş dahi yapılamayacağından yakalama sonuçsuz kalacaktır.

Marmara bölgesindeki bir sulh ceza hâkimliği ise yıllardır yurt dışında yaşayan bir şüphelinin noter onaylı yazılı savunmasını dosyaya sunması ve savcılığın da olumlu görüş bildirmesi üzerine yakalama kararını kaldırdı.

## Başvuruda sonucu belirleyen altı unsur

- Yurt dışındaki sabit adresin belgelenmesi (ikamet kaydı, oturum izni, iş sözleşmesi)
- Pasaportun yakalama kararı nedeniyle verilmediğinin ortaya konması
- Kaçma iradesinin olmadığının, ifade vermeye hazır olunduğunun gösterilmesi
- Noter veya konsolosluk onaylı yazılı savunmanın sunulması
- İfadenin istinabe yoluyla alınmasının talep edilmesi
- Dosyanın müdafi tarafından UYAP üzerinden takibi

## Şimdi ne yapmalısınız?

Beklemek durumu iyileştirmez; soruşturma ilerler ve dosya büyür. İlk adım, hakkınızdaki kararın türünü ve hangi dosyadan çıktığını öğrenmektir.

DOĞRU KANZLEİ, Mannheim ve Ankara bürolarıyla yurt dışında yaşayan şüphelilerin yakalama kararı dosyalarını Türkiye'de doğrudan takip eder. Dosyanızın ön değerlendirmesi için:

**WhatsApp / Tel:** +49 176 6122 1210 · **E-posta:** info@hasandogru.de

Hakkınızda bir karar olup olmadığını henüz bilmiyorsanız: [Türkiye'de hakkımda yakalama kararı var mı?](/tr/blog/turkiyede-hakkimda-yakalama-karari-var-mi)

---

Bu makaleyi Almanca olarak da yayımladık: [Haftbefehl in der Türkei: Kein Pass vom Konsulat](/de/blog/haftbefehl-tuerkei-pass-aufhebung)

> **Hukuki Bilgilendirme:** Bu yazı genel bilgilendirme amaçlıdır; her dosya kendi koşullarında değerlendirilir ve sonuç garanti edilemez. Av. Hasan Doğru yalnızca Türk hukuku alanında danışmanlık ve temsil hizmeti vermektedir (§ 207 BRAO).`,
  contentDE: `> **Rechtlicher Hinweis:** Dieser Artikel befasst sich ausschließlich mit dem türkischen Recht und dient der allgemeinen Information; er ersetzt keine Beratung im Einzelfall. Die Doğru Kanzlei berät gemäß § 207 BRAO ausschließlich im türkischen Recht.

## Die Überraschung am Konsulatsschalter

Der Ablauf ist fast immer derselbe: Sie beantragen beim türkischen Konsulat die Verlängerung Ihres Reisepasses, der Sachbearbeiter schaut in das System und teilt Ihnen mit, dass gegen Sie eine Festnahmeanordnung besteht und deshalb kein Pass ausgestellt werden kann. Viele Betroffene erfahren erst in diesem Moment, dass in der Türkei überhaupt ein Ermittlungsverfahren gegen sie läuft.

Damit beginnt ein Teufelskreis. Die Festnahmeanordnung soll allein Ihre Vernehmung sicherstellen. Ohne Pass können Sie nicht in die Türkei reisen, um auszusagen. Weil Sie nicht aussagen, bleibt die Anordnung bestehen. Währenddessen geraten Aufenthaltstitel, Arbeitsplatz und Reisefreiheit in Gefahr.

Dieser Kreis lässt sich durchbrechen, und in den meisten Fällen müssen Sie dafür nicht in die Türkei reisen.

## Die Rechtsgrundlagen: Die Festnahme ist keine Strafe, sondern ein Mittel

- **Art. 98 Abs. 1 der türkischen Strafprozessordnung (CMK):** Im Ermittlungsverfahren wird die Festnahmeanordnung gegen Beschuldigte erlassen, die einer Ladung nicht folgen oder nicht geladen werden können. Ihr einziger Zweck ist die Vernehmung.
- **Art. 13 und 19 der türkischen Verfassung:** Jede freiheitsbeschränkende Maßnahme muss verhältnismäßig sein. Eine Maßnahme, die ihren Zweck nicht erreichen kann, ist es nicht.
- **Art. 145, 146 CMK:** Das Gesetz sieht zuerst die Ladung und erst danach die zwangsweise Vorführung vor.
- **Art. 94 Abs. 2 CMK:** Bei Festnahmen zum Zweck der Vernehmung kann der Betroffene gegen die Zusage, zur Aussage zu erscheinen, freigelassen werden. Der Gesetzgeber zeigt damit, dass es um die Aussage geht und nicht um das Festhalten der Person.
- **Gesetz Nr. 6706 und Europäisches Übereinkommen über die Rechtshilfe in Strafsachen von 1959:** Ein Beschuldigter im Ausland kann im Wege der Rechtshilfe an seinem Wohnort vernommen werden. Die Türkei und Deutschland sind Vertragsstaaten.
- **Art. 267, 268 CMK:** Der Antrag auf Aufhebung wird bei dem Friedensstrafrichter (sulh ceza hâkimliği) gestellt, der die Anordnung erlassen hat; die Beschwerdefrist beträgt zwei Wochen.

## Was die Gerichte sagen: zwei Entscheidungen aus 2024

Ein Friedensstrafrichter in der Schwarzmeerregion gab dem Antrag eines in Frankreich lebenden Beschuldigten statt, der keinen Pass erhielt. Die Begründung: Die zur Sicherung der Vernehmung erlassene Festnahmeanordnung bewirkt in dieser Lage das Gegenteil ihres Zwecks; ohne Pass ist nicht einmal die Einreise möglich, sodass die Festnahme ins Leere geht.

Ein Friedensstrafrichter in der Marmararegion hob die Anordnung gegen einen seit Jahren im Ausland lebenden Beschuldigten auf, nachdem dieser eine notariell beglaubigte schriftliche Einlassung zur Akte gereicht und die Staatsanwaltschaft zugestimmt hatte.

## Sechs Punkte, die über den Antrag entscheiden

- Nachweis des festen Wohnsitzes im Ausland (Meldebescheinigung, Aufenthaltstitel, Arbeitsvertrag)
- Darlegung, dass der Pass wegen der Festnahmeanordnung verweigert wird
- Nachweis, dass keine Fluchtabsicht besteht und die Bereitschaft zur Aussage vorhanden ist
- Vorlage einer notariell oder konsularisch beglaubigten schriftlichen Einlassung
- Antrag auf Vernehmung im Wege der Rechtshilfe
- Laufende Verfolgung der Akte durch den Verteidiger über das Justizportal UYAP

## Der nächste Schritt

Abwarten verbessert die Lage nicht: Die Ermittlungen laufen weiter und die Akte wächst. Der erste Schritt ist zu klären, welche Art von Anordnung vorliegt und aus welchem Verfahren sie stammt.

DOĞRU KANZLEİ betreut mit Büros in Mannheim und Ankara Beschuldigte im Ausland und führt die Verfahren zur Aufhebung der Festnahmeanordnung unmittelbar in der Türkei. Für eine erste Einschätzung Ihrer Akte:

**WhatsApp / Tel.:** +49 176 6122 1210 · **E-Mail:** info@hasandogru.de

Sie wissen noch nicht, ob gegen Sie etwas vorliegt? [Haftbefehl in der Türkei? Risiko bei der Einreise](/de/blog/haftbefehl-tuerkei-einreise-risiko)

*Avukat Hasan Doğru (Türkei) – Ankara Barosu, Mitglied der Rechtsanwaltskammer Karlsruhe (§ 207 BRAO)*

---

Diesen Beitrag gibt es auch auf Türkisch: [Yakalama Kararı Yüzünden Pasaport Alamıyorum](/tr/blog/yurt-disinda-yakalama-karari-kaldirma)

> **Rechtlicher Hinweis:** Dieser Beitrag dient der allgemeinen Information. Jede Akte wird nach ihren eigenen Umständen beurteilt; ein bestimmtes Ergebnis kann nicht zugesagt werden. Av. Hasan Doğru berät und vertritt gemäß § 207 BRAO ausschließlich im türkischen Recht.`,
  contentEN: "",
  faqTR: [
    { question: "Türkiye'ye gitmem gerekiyor mu?", answer: "Çoğu dosyada hayır. Vekâletname ile dosya incelenir, başvuru yapılır." },
    { question: "Karar kalkınca dosya kapanır mı?", answer: "Hayır. Soruşturma devam eder; ifadenin usulüne uygun verilmesi gerekir." },
    { question: "Her yakalama kararı kaldırılabilir mi?", answer: "Hayır. Bu yol ifade ve savunma amaçlı yakalamalar içindir. Kesinleşmiş cezanın infazı için çıkarılan yakalama kararları farklı kurallara tabidir." },
    { question: "Ne kadar sürer?", answer: "Hâkimlikler genellikle birkaç gün ile birkaç hafta içinde karar verir; süre dosyaya göre değişir." },
  ],
  faqDE: [
    { question: "Muss ich in die Türkei reisen?", answer: "In den meisten Fällen nicht. Mit einer Vollmacht wird die Akte eingesehen und der Antrag gestellt." },
    { question: "Ist das Verfahren mit der Aufhebung beendet?", answer: "Nein. Das Ermittlungsverfahren läuft weiter; die Aussage muss ordnungsgemäß erfolgen." },
    { question: "Lässt sich jede Festnahmeanordnung aufheben?", answer: "Nein. Dieser Weg gilt für Anordnungen, die der Vernehmung dienen. Für Anordnungen zur Vollstreckung einer rechtskräftigen Strafe gelten andere Regeln." },
    { question: "Wie lange dauert es?", answer: "Die Gerichte entscheiden in der Regel innerhalb weniger Tage bis einiger Wochen; die Dauer hängt von der Akte ab." },
  ],
};
