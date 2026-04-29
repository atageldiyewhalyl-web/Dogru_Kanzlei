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
import blogPropertyDivisionImg from "@/assets/blog_property_division.png";
import inheritanceFraudImg from "@/assets/inheritance_fraud_law.png";
import jointCustodyImg from "@/assets/joint_custody_law.png";
import debtCollectionImg from "@/assets/debt_collection_law.png";
import criminalDefenseImg from "@/assets/criminal_defense_law.png";
import blueCardImg from "@/assets/blue_card_rights_law.png";

import criminalDefenseTurkeyImg from "@/assets/criminal_defense_turkey.png";
import inheritanceLawImg from "@/assets/inheritance_fraud_law.png";

export interface BlogPost {
  slug: string;
  slugDE: string;
  slugTR: string;
  slugEN: string;
  titleDE: string;
  titleTR: string;
  titleEN: string;
  excerptDE: string;
  excerptTR: string;
  excerptEN: string;
  contentDE: string;
  contentTR: string;
  contentEN: string;
  category: string;
  categoryDE: string;
  categoryEN: string;
  image: string;
  dateDE: string;
  dateTR: string;
  dateEN: string;
  readTimeDE: string;
  readTimeTR: string;
  readTimeEN: string;
  publishedAt: string; // ISO date for sitemap
  modifiedAt?: string; // ISO date for article schema
  publishedAtDE?: string;
  publishedAtTR?: string;
  publishedAtEN?: string;
  modifiedAtDE?: string;
  modifiedAtTR?: string;
  modifiedAtEN?: string;
  keywordsDE?: string;
  keywordsTR?: string;
  keywordsEN?: string;
  metaTitleDE?: string;
  metaTitleTR?: string;
  metaTitleEN?: string;
  metaDescriptionDE?: string;
  metaDescriptionTR?: string;
  metaDescriptionEN?: string;
  schemaHeadlineDE?: string;
  schemaHeadlineTR?: string;
  schemaHeadlineEN?: string;
  faqDE?: { question: string; answer: string }[];
  faqTR?: { question: string; answer: string }[];
  faqEN?: { question: string; answer: string }[];
  ctaTitleDE?: string;
  ctaTitleTR?: string;
  ctaTitleEN?: string;
  ctaDescriptionDE?: string;
  ctaDescriptionTR?: string;
  ctaDescriptionEN?: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "almanya-turkiye-miras-hukuku-rehberi",
    slugDE: "erbschaft-tuerkei-deutschland-ratgeber",
    slugTR: "almanya-turkiye-miras-hukuku-rehberi",
    slugEN: "turkish-inheritance-germany-guide",
    titleDE: "Erbschaft Türkei: Was Erben in Deutschland wirklich wissen müssen",
    titleTR: "Almanya'da Yaşarken Türkiye'de Miras Kaldı mı? Haklarınızı Kaybetmeden Bilmeniz Gereken Her Şey",
    titleEN: "Turkish Inheritance from Germany — The Complete Legal Guide 2026",
    excerptDE: "Von Nachlassspaltung und Erbschein über Doppelbesteuerung und Pflichtteilsklage bis zur verdeckten Vermögensverschiebung — der vollständige Leitfaden für deutsch-türkische Erbfälle 2026.",
    excerptTR: "Veraset ilamından muris muvazaasına, veraset vergisinden izale-i şuyuya — Almanya'dan Türkiye'deki mirası eksiksiz yönetme rehberi.",
    excerptEN: "From the split estate problem and Turkish probate certificate to inheritance tax, forced heirship claims, and fraudulent property transfers — everything you need to manage a Turkish inheritance from Germany without flying to Istanbul.",
    metaTitleDE: "Erbschaft Türkei: Vollständiger Leitfaden für Erben in Deutschland 2026",
    metaTitleTR: "Almanya'da Yaşarken Türkiye'de Miras: Eksiksiz Hukuki Rehber 2026",
    metaTitleEN: "Turkish Inheritance from Germany: The Complete Legal Guide 2026",
    metaDescriptionDE: "Immobilie in der Türkei geerbt? Erbschein, Erbschaftsteuer, Doppelbesteuerung, Nachlassspaltung, Erbausschlagung, Pflichtteilsklage und Muris Muvazaası — alles was Erben in Deutschland wissen müssen. Doğru Kanzlei.",
    metaDescriptionTR: "Almanya'dan Türkiye'deki mirası nasıl takip edersiniz? Veraset ilamı, tenkis davası, muris muvazaası, veraset vergisi, izale-i şuyu ve miras reddi — tüm süreçler adım adım. Doğru Kanzlei.",
    metaDescriptionEN: "Inherited property in Turkey while living in Germany? Learn about the split estate problem, Turkish probate certificate, inheritance tax, forced heirship claims, fraudulent transfers (Muris Muvazaası), and how to manage everything remotely. Doğru Kanzlei.",
    schemaHeadlineDE: "Erbschaft Türkei: Vollständiger Leitfaden für Erben in Deutschland 2026",
    schemaHeadlineTR: "Almanya'da Yaşarken Türkiye'de Miras: Eksiksiz Hukuki Rehber 2026",
    schemaHeadlineEN: "Turkish Inheritance from Germany: The Complete Legal Guide 2026",
    contentDE: `**RECHTLICHER HINWEIS:** Dieser Artikel befasst sich ausschließlich mit dem türkischen Recht. Die Doğru Kanzlei berät gemäß § 207 BRAO ausschließlich im türkischen Recht.

---

Ein typisches Szenario: Die Eltern sind aus der Türkei nach Deutschland gekommen, haben dort Jahrzehnte gelebt — und in der alten Heimat noch ein Haus oder ein Grundstück behalten. Wenn sie versterben, stehen die in Deutschland lebenden Kinder plötzlich vor einem komplexen Geflecht aus türkischem Erbrecht, deutschen Steuervorschriften und Behördenanforderungen auf beiden Seiten.

Was klingt wie eine administrative Formalität, ist in der Praxis oft ein jahrelanger Prozess — mit Fristen, die man nicht kennt, Dokumenten, die man nicht hat, und Steueranforderungen, die man nicht erwartet hat.

Dieser Leitfaden erklärt, was Sie wissen müssen — bevor die Fristen ablaufen.

---

## 1. Welches Recht gilt? Nachlassspaltung im deutsch-türkischen Erbfall

Die erste und wichtigste Frage bei jedem deutsch-türkischen Erbfall lautet: Welches Erbrecht gilt überhaupt?

Die Antwort ist komplexer als erwartet — und hängt davon ab, welche Art von Vermögen betroffen ist.

### Das Nachlassabkommen von 1929 — Vorrang vor der EU-Erbrechtsverordnung

Der deutsch-türkische Konsularvertrag vom 28. Mai 1929 und die als Anlage dazu abgeschlossene Nachlassvereinbarung regeln grenzüberschreitende Erbfälle zwischen beiden Ländern. Da die Türkei kein EU-Mitglied ist, geht dieses Abkommen der EU-Erbrechtsverordnung 650/2012 vor — und zwar mit einer klaren Unterscheidung:

**Beweglicher Nachlass (Bankkonten, Fahrzeuge, Schmuck, Wertpapiere):**
Das Erbrecht des Heimatstaats des Erblassers gilt. Für einen türkischen Staatsangehörigen mit Wohnsitz in Deutschland gilt somit türkisches Erbrecht für dessen Bankkonten — auch wenn diese in Deutschland geführt werden.

**Unbeweglicher Nachlass (Immobilien, Grundstücke):**
Es gilt das Recht des Belegenheitsortes — also das Recht des Landes, in dem die Immobilie liegt. Für ein Ferienhaus in Antalya gilt türkisches Erbrecht, auch wenn der Erblasser sein ganzes Leben in Deutschland gelebt hat.

Diese doppelte Anknüpfung führt zur **Nachlassspaltung**: Auf denselben Erbfall werden verschiedene Rechtsordnungen angewendet. Das OLG Köln (Beschluss vom 21.02.2014, Az. 2 Wx 30/14) und das OLG Hamm (Beschluss vom 21.03.2019, Az. 10 B 31/17) haben dies ausdrücklich bestätigt.

### Praktische Konsequenz: Unterschiedliche Erbquoten

Die Nachlassspaltung führt oft zu überraschenden Ergebnissen. Ein Beispiel:

Ein türkischer Staatsbürger lebt in Deutschland, hat kein Testament hinterlassen. Er hinterlässt eine Ehefrau, zwei Kinder sowie ein Bankkonto in Deutschland und ein Ferienhaus in der Türkei.

- **Bankkonto (bewegliches Vermögen):** Türkisches Erbrecht → Ehefrau 1/4, Kinder teilen sich 3/4
- **Ferienhaus Türkei (unbewegliches Vermögen):** Türkisches Erbrecht → gleiche Quoten (da Erblasser türkischer Staatsbürger)

Wäre der Erblasser hingegen deutscher Staatsbürger gewesen:
- **Bankkonto (bewegliches Vermögen):** Deutsches Erbrecht → Ehefrau 1/2, Kinder teilen sich 1/2
- **Ferienhaus Türkei (unbewegliches Vermögen):** Türkisches Erbrecht → Ehefrau 1/4, Kinder 3/4

Die Ehefrau steht beim deutschen Recht deutlich besser als beim türkischen. Das ist der praktische Grund, warum eine frühzeitige Testament-Gestaltung — die beide Rechtsordnungen berücksichtigt — so wichtig ist.

### Doppelstaater: Welches Recht gilt?

Bei deutschen Staatsangehörigen mit zusätzlich türkischer Staatsangehörigkeit (Doppelstaater) gilt nach Art. 5 EGBGB die effektive Staatsangehörigkeit — in der Praxis die des gewöhnlichen Aufenthalts. Für jemanden, der in Deutschland lebt, ist das typischerweise die deutsche Staatsangehörigkeit. Für Immobilien in der Türkei bleibt es dennoch beim türkischen Recht (Belegenheitsprinzip).

---

## 2. Türkisches Erbrecht: Die wesentlichen Grundsätze

Da für Immobilien in der Türkei stets türkisches Erbrecht gilt, müssen in Deutschland lebende Erben die Grundprinzipien kennen.

### Gesetzliche Erbquoten nach türkischem Recht (TMK Art. 495–502)

| Situation | Ehegattenanteil | Kinderanteil |
|---|---|---|
| Mit Kindern | 1/4 | 3/4 (gleichmäßig geteilt) |
| Ohne Kinder, mit Eltern | 1/2 | — (Eltern erhalten 1/2) |
| Ohne Kinder, ohne Eltern | 3/4 | — |
| Alleiniger Erbe | alles | — |

**Wichtig:** Türkisches Recht kennt **keine** Unterscheidung zwischen ehelichen und nichtehelichen Kindern — alle erben gleich. Ebenso gibt es keinen Unterschied zwischen Söhnen und Töchtern.

### Pflichtteil (Saklı Pay / Mahfuz Hisse)

Das türkische Recht schützt bestimmte Erben durch einen unentziehbaren Pflichtteil:

- **Abkömmlinge (Kinder, Enkel):** Jeweils die Hälfte des gesetzlichen Erbteils
- **Eltern:** Jeweils ein Viertel des gesetzlichen Erbteils
- **Ehegatte:** Immer der volle gesetzliche Erbteil (gilt als Pflichtteil)

Der Erblasser darf über diesen Pflichtteil hinaus frei verfügen. Verletzt ein Testament oder eine lebzeitige Übertragung den Pflichtteil, entsteht das Recht auf eine **Herabsetzungsklage (Tenkis Davası)** — das türkische Äquivalent der deutschen Pflichtteilsergänzungsklage.

### Testamentsformen im türkischen Recht

**Öffentliches Testament (Resmî Vasiyetname):** Errichtet vor einem Notar in Anwesenheit von zwei Zeugen. Sicherste Form.

**Eigenhändiges Testament (El Yazılı Vasiyetname):** Vollständig handgeschrieben, datiert und eigenhändig unterschrieben. Maschinenschrift oder Computer ungültig. Datum muss Tag, Monat und Jahr enthalten.

**Mündliches Testament:** Nur in Ausnahmesituationen mit unmittelbarer Todesgefahr gültig; erlischt nach einem Monat, wenn die Notsituation beendet ist.

**Gilt ein deutsches Testament in der Türkei?**

Für bewegliche Nachlassgegenstände kann ein deutsches Testament mit Apostille anerkannt werden. Für Immobilien in der Türkei gilt türkisches Recht — ein deutsches Testament ändert die anwendbaren Erbquoten nicht. Ein in Deutschland errichtetes Testament kann jedoch die **Rechtswahl** für das auf den beweglichen Nachlass anwendbare Erbrecht enthalten, sofern der Erblasser die Option nach der EU-Erbrechtsverordnung nutzt. Für türkische Immobilien bleibt es beim türkischen Erbrecht.

**Empfehlung:** Für Erblasser mit Vermögen in beiden Ländern empfiehlt sich ein sorgfältig abgestimmtes Testament, das die Anforderungen beider Rechtsordnungen berücksichtigt. Dies vermeidet Nachlassspaltungsprobleme und schützt den überlebenden Ehegatten.

---

## 3. Der türkische Erbschein (Veraset İlamı) — Warum der deutsche nicht reicht

Der türkische Erbschein ist das wichtigste Dokument im türkischen Nachlassverfahren. Ohne ihn ist keine Grundbuchumschreibung, keine Bankfreigabe und keine steuerliche Abwicklung möglich.

### Warum ein deutscher Erbschein nicht ausreicht

Türkische Grundbuchämter akzeptieren für Immobilien **ausnahmslos** den türkischen Erbschein. Selbst ein apostillierter und beglaubigt übersetzter deutscher Erbschein wird für Immobilienübertragungen nicht anerkannt. Dies ist durch ständige Praxis der türkischen Behörden und durch Rechtsprechung gefestigt.

Für bewegliches Vermögen (Bankkonten) kann ein türkischer Erbschein ausreichen, wenn er apostilliert oder durch die türkische Auslandsvertretung beglaubigt ist. In der Praxis verlangen türkische Banken jedoch häufig ebenfalls einen türkischen Erbschein.

**Konsequenz:** Wer in der Türkei geerbt hat — Immobilien oder bewegliches Vermögen — kommt am türkischen Erbschein in der Regel nicht vorbei.

### Wie wird der türkische Erbschein beantragt?

Der Antrag wird beim türkischen **Sulh Hukuk Mahkemesi** (Friedensgericht) am letzten Wohnsitz des Erblassers in der Türkei oder bei einem türkischen Notar gestellt. In Deutschland lebende Erben können dies über einen bevollmächtigten Anwalt erledigen — eine Reise in die Türkei ist nicht erforderlich.

**Besonderheit für Nicht-Türken:** Ausländische Staatsangehörige (z.B. rein deutsche Staatsbürger) können den türkischen Erbschein nicht über einen Notar erhalten, da türkische Notare nur auf die türkische Einwohnerdatei (MERNİS) zugreifen können. Sie müssen den Gerichtsweg nehmen.

### Erforderliche Dokumente

- Internationale Sterbeurkunde des Erblassers (mit Apostille)
- Nachweis der Familienverhältnisse (Geburtsurkunden, Heiratsurkunden — apostilliert und beglaubigt übersetzt)
- Reisepässe aller Erben
- Türkische Steuernummer (Vergi Kimlik Numarası) für jeden Erben
- Vollmacht für den Anwalt (vom türkischen Konsulat in Deutschland ausgestellt)

**Gut zu wissen:** Für türkische Staatsbürger als Erben ist die Steuernummer bereits über die TC-Identifikationsnummer vorhanden. Für Deutsche als Erben muss eine türkische Steuernummer eigens beantragt werden — dies kann der Anwalt erledigen.

---

## 4. Erbschaftsteuer in der Türkei — Was wirklich auf Sie zukommt

### Wer muss in der Türkei Erbschaftsteuer zahlen?

Die türkische Erbschaftsteuer (Veraset ve İntikal Vergisi) folgt dem Belegenheitsprinzip: Alle Vermögenswerte, die sich in der Türkei befinden, unterliegen der türkischen Erbschaftsteuer — unabhängig von der Staatsangehörigkeit des Erben. Erbt ein Deutscher eine Immobilie in Antalya, fällt türkische Erbschaftsteuer an.

Zusätzlich unterliegen türkische Staatsangehörige als Erben der türkischen Erbschaftsteuer auch für Auslandsvermögen — es sei denn, der Erblasser ist kein türkischer Staatsbürger und das Vermögen liegt nicht in der Türkei.

### Aktuelle Freibeträge und Steuersätze (2026)

Ab 1. Januar 2026 gelten folgende Freibeträge (57 Seri No'lu Genel Tebliğ vom 31.12.2025):

| Erbengruppe | Freibetrag 2026 |
|---|---|
| Abkömmlinge (Kinder, Enkel) und Ehegatte — je Person | 2.907.136 TL |
| Nur Ehegatte (keine Abkömmlinge) | 5.817.845 TL |
| Schenkungen und sonstige unentgeltliche Zuwendungen | 66.935 TL |

Auf den den Freibetrag übersteigenden Betrag werden folgende Steuersätze angewendet:

| Steuerpflichtiger Erwerb (Matrize) | Steuersatz |
|---|---|
| Erste Stufe | 1% |
| Zweite Stufe | 3% |
| Dritte Stufe | 5% |
| Vierte Stufe | 7% |
| Fünfte Stufe und darüber | 10% |

Die Türkei ist damit im internationalen Vergleich ein Niedrigsteuerland für Erbschaften. Der Spitzensteuersatz von 10% wird erst bei sehr hohen Beträgen erreicht.

### Fristen für die Steuererklärung

Die Abgabefrist für die türkische Erbschaftsteuererklärung hängt vom Aufenthaltsort der Beteiligten ab:

- Erblasser stirbt in der Türkei, Erbe lebt in der Türkei: **4 Monate**
- Erblasser stirbt in der Türkei, Erbe lebt in Deutschland: **6 Monate**
- Erblasser stirbt in Deutschland, Erbe lebt in der Türkei: **6 Monate**
- Erblasser stirbt in Deutschland, Erbe lebt in Deutschland: **8 Monate**

**Kritisch:** Erst nach Zahlung der Erbschaftsteuer stellt das türkische Finanzamt die **Unbedenklichkeitsbescheinigung (İlişik Yoktur Yazısı)** aus. Ohne dieses Dokument kann weder die Grundbuchumschreibung noch die Freigabe von Bankkonten erfolgen.

### Das Doppelbesteuerungsproblem — und der Weg heraus

Deutschland und die Türkei haben **kein spezielles Doppelbesteuerungsabkommen für die Erbschaftsteuer**. Das DBA von 2011 gilt ausschließlich für Einkommen- und Körperschaftsteuer — nicht für Erbschaftsteuer.

Dies bedeutet: Wer in Deutschland wohnhaft ist und in der Türkei erbt, kann sowohl in der Türkei als auch in Deutschland steuerpflichtig sein. Beide Länder haben unterschiedliche Anknüpfungspunkte:

- **Türkei:** Knüpft an die türkische Staatsangehörigkeit des Erben und die Belegenheit des Vermögens an
- **Deutschland:** Knüpft an den Wohnsitz des Erblassers oder des Erben an (§ 2 ErbStG)

**Der gesetzliche Ausweg: § 21 ErbStG**

Wenn keine Doppelbesteuerungsabkommen existieren, ermöglicht § 21 Erbschaftsteuergesetz die **Anrechnung** der in der Türkei gezahlten Erbschaftsteuer auf die deutsche Steuer. Diese Anrechnung erfolgt jedoch:
- nur auf ausdrücklichen **Antrag** — das Finanzamt rechnet nicht automatisch an
- nur bis zur Höhe der deutschen Steuer auf dasselbe Vermögen
- nur gegen **Nachweis** der tatsächlich gezahlten türkischen Steuer

**Praktische Maßnahmen:**
1. Alle türkischen Steuerbescheide und Zahlungsbelege sorgfältig aufbewahren
2. Diese Dokumente apostillieren und beglaubigt ins Deutsche übersetzen lassen
3. Bei der deutschen Erbschaftsteuererklärung ausdrücklich die Anrechnung nach § 21 ErbStG beantragen

Eine vollständige Doppelbesteuerung lässt sich auf diesem Weg zwar nicht in jedem Fall vermeiden, aber zumindest erheblich reduzieren.

---

## 5. Erbausschlagung — Wenn das Erbe mehr Schulden als Wert hat

Das türkische Recht kennt einen Grundsatz, den viele Erben nicht kennen: **Wer das Erbe nicht fristgerecht ausschlägt, hat es angenommen — einschließlich aller Schulden des Erblassers.**

### Die 3-Monats-Frist

Nach türkischem Recht (TMK Art. 605) beträgt die Frist zur Erbausschlagung **3 Monate** ab dem Zeitpunkt, zu dem der Erbe von der Erbschaft und seiner Erbenstellung Kenntnis erlangt. Diese Frist gilt auch für in Deutschland lebende Erben und wird in der Praxis nicht verlängert.

Die Ausschlagung muss beim zuständigen Sulh Hukuk Mahkemesi (Friedensgericht) erklärt werden. Ein bevollmächtigter Anwalt kann dies in Ihrem Namen erledigen.

### Warum die Ausschlagung wichtig sein kann

Falls der Erblasser in der Türkei Schulden hatte — Hypotheken, Steuerschulden, Verbindlichkeiten gegenüber Gläubigern — gehen diese auf die Erben über. Wer das Erbe annimmt, haftet mit seinem persönlichen Vermögen für diese Schulden.

**Vor einer Entscheidung sollten Sie prüfen lassen:**
- Hypotheken und Pfandrechte auf Immobilien (über Tapu-Abfrage)
- Bankverbindlichkeiten und Kredite
- Steuerschulden beim türkischen Finanzamt
- Offene Verbindlichkeiten gegenüber Dritten

Ergibt die Überprüfung, dass die Schulden den Nachlass übersteigen, empfiehlt sich die Erbausschlagung. Bei Unsicherheit kann ein Anwalt alternativ zunächst **ihtiyaten reddi miras** (vorläufige Ausschlagung unter Vorbehalt) beantragen, um Zeit für eine vollständige Prüfung zu gewinnen.

---

## 6. Pflichtteilsklage (Tenkis Davası) — Wenn Ihr Erbteil verletzt wurde

Eines der häufigsten Probleme bei deutsch-türkischen Erbfällen: Der Erblasser hat in seinen letzten Lebensjahren Immobilien in der Türkei an einzelne Erben oder Dritte übertragen — und die in Deutschland lebenden anderen Erben werden um ihren gesetzlichen Anteil gebracht.

Das türkische Erbrecht schützt dagegen durch die **Tenkis Davası** (Herabsetzungsklage / Pflichtteilsergänzungsklage).

### Was kann angefochten werden?

- Lebzeitige Übertragungen, die den Pflichtteil der anderen Erben verletzen
- Testamentarische Verfügungen, die pflichtteils-berechtigte Erben benachteiligen
- Schenkungen, die in den letzten Jahren vor dem Tod vorgenommen wurden

### Fristen — Achtung

Die Tenkis Davası muss erhoben werden:
- Innerhalb von **1 Jahr** ab Kenntnis von der Pflichtteilsverletzung
- In jedem Fall innerhalb von **10 Jahren** ab Eröffnung des Testaments oder Öffnung des Erbfalls

Diese Fristen sind Ausschlussfristen — nach Ablauf ist das Klagerecht unwiederbringlich verloren. Wenn Sie den Verdacht haben, dass Ihr Pflichtteil verletzt wurde, sollten Sie sofort handeln.

### Kann ich als Erbe in Deutschland klagen?

Ja. Durch eine beim türkischen Konsulat ausgestellte Sondervollmacht kann Ihr Anwalt die Klage in der Türkei für Sie einreichen und führen — ohne dass Sie in die Türkei reisen müssen. Die Klage wird beim Asliye Hukuk Mahkemesi (Zivilgericht) am letzten Wohnsitz des Erblassers in der Türkei eingereicht.

---

## 7. Muris Muvazaası — Wenn Vermögen vor dem Tod verschoben wurde

Dies ist das Thema, über das kaum jemand spricht — und das in der Praxis bei deutsch-türkischen Erbfällen sehr häufig vorkommt.

### Was bedeutet Muris Muvazaası?

**Muris Muvazaası** bezeichnet eine Sonderkonstellation des türkischen Erbrechts: Der Erblasser hat eine Immobilie oder andere Vermögenswerte zu Lebzeiten auf eine Person — häufig einen bestimmten Erben oder einen Dritten — übertragen, dabei jedoch eine tatsächlich gewollte **Schenkung** im Grundbuch als **Kauf** ausgewiesen. Ziel ist es, den übrigen Erben ihre Rechte zu entziehen und gleichzeitig die Pflichtteilsklage zu umgehen (die bei einer offen deklarierten Schenkung möglich wäre).

**Typische Fallkonstellationen:**
- Der Vater überträgt vor dem Tod alle Immobilien auf den Sohn — als „Kauf" eingetragen, tatsächlich ohne Gegenleistung
- Ein Elternteil überträgt Vermögen zugunsten der Kinder aus einer zweiten Ehe, zum Nachteil der Kinder aus erster Ehe
- Töchter werden durch Übertragungen auf Söhne benachteiligt

### Das entscheidende Merkmal: Keine Verjährung

Die Klage wegen Muris Muvazaası unterliegt **keiner Verjährungsfrist**. Sie kann nach dem Tod des Erblassers jederzeit erhoben werden — auch wenn die Übertragung 20 oder 30 Jahre zurückliegt. Dies unterscheidet sie von der Tenkis Davası, die an strenge Fristen gebunden ist.

Einzige Bedingung: Die Klage kann nur **nach** dem Tod des Erblassers erhoben werden.

### Wie wird die Klage geführt?

Die Klage auf Grundbuchberichtigung (Tapu İptali ve Tescil Davası) wird beim Asliye Hukuk Mahkemesi am Belegenheitsort der Immobilie eingereicht. Jeder betroffene Erbe kann die Klage **einzeln und unabhängig** von anderen Miterben führen.

**Beweisführung:** Die Beweislast liegt beim klagenden Erben. Typische Beweismittel:

- Der offensichtliche Missverhältnis zwischen dem im Grundbuch eingetragenen Kaufpreis und dem tatsächlichen Marktwert
- Fehlende Zahlungsfähigkeit des angeblichen Käufers
- Familieninterne Konstellationen (z.B. der Vater hatte keinen wirtschaftlichen Grund, sein Haus zu verkaufen)
- Zeugenaussagen
- Kontoauszüge und Bankunterlagen

**Einstweilige Verfügung (İhtiyati Tedbir):** Unbedingt gleichzeitig mit der Klage zu beantragen, um eine Weiterveräußerung der Immobilie an Dritte während des laufenden Verfahrens zu verhindern. Ohne diese Sicherungsmaßnahme kann ein bösgläubiger Dritter die Immobilie erwerben, was die Durchsetzung des Anspruchs erheblich erschwert.

**Aus Deutschland heraus klagen:** Mit einer speziellen Vollmacht — die ausdrücklich die Befugnis zur Klageerhebung, Prozessführung und Beantragung einstweiliger Verfügungen enthält — kann der Anwalt diese Klage vollständig in Ihrem Namen führen.

---

## 8. Erbengemeinschaft und Teilungsklage — Wenn Miterben nicht kooperieren

Wenn mehrere Erben vorhanden sind, entsteht automatisch eine **Erbengemeinschaft (Miras Ortaklığı)**. Das bedeutet: Alle Erben sind gemeinsam Eigentümer der Immobilie, können sie aber nur gemeinsam verwalten und verkaufen.

### Das Problem: Blockade durch einen Miterben

Für den Verkauf einer geerbten Immobilie in der Türkei ist die **Zustimmung aller Miterben** erforderlich. Verweigert nur einer seine Unterschrift, ist der Verkauf blockiert. In der Praxis betrifft dies häufig Konstellationen, bei denen ein Teil der Erben in der Türkei lebt und andere in Deutschland — mit unterschiedlichen Vorstellungen über Nutzung, Verkauf oder Aufteilung.

### Die Lösung: İzale-i Şuyu (Teilungsklage)

**Jeder einzelne Miterbe** kann eine İzale-i Şuyu-Klage (Aufhebung der Gemeinschaft) beim türkischen Gericht einreichen — ohne Zustimmung der anderen. Das Gericht entscheidet dann:

- Ist eine **physische Aufteilung** der Immobilie möglich? (Selten bei bebauten Grundstücken)
- Wenn nicht: Zwangsverkauf der Immobilie im Wege einer **öffentlichen Versteigerung** und anteilige Auszahlung des Erlöses

**Wichtig:** Auch diese Klage kann durch einen bevollmächtigten Anwalt aus Deutschland heraus geführt werden.

**Vor der Klage:** Es empfiehlt sich, die steuerliche Situation (Erbschaftsteuer bezahlt? Unbedenklichkeitsbescheinigung erteilt?) und die korrekte Grundbuchlage (alle Erben eingetragen?) zu prüfen, um Verzögerungen im Klageverfahren zu vermeiden.

---

## 9. Immobilie in der Türkei aus Deutschland verkaufen

Nach der Grundbuchumschreibung auf die Erben stellt sich häufig die Frage: Wie verkauft man eine Immobilie in der Türkei, ohne dorthin zu reisen?

### Vollmacht — Der Schlüssel

Der Verkauf ist über eine **türkische Kaufvollmacht (Vekaletname)** möglich, die beim türkischen Konsulat in Deutschland auf Türkisch erstellt wird. Diese Vollmacht ist sofort in der Türkei gültig — keine Apostille erforderlich. Mehr zu Form und Inhalt türkischer Vollmachten finden Sie im Beitrag [Vollmacht auf Türkisch](/de/blog/vollmacht-auf-tuerkisch).

**Achtung:** Eine beim deutschen Notar ausgestellte Vollmacht wird vom türkischen Grundbuchamt für Immobilientransaktionen in der Regel nicht akzeptiert. Die Vollmacht muss zwingend beim türkischen Konsulat erstellt werden.

Die Vollmacht muss ausdrücklich enthalten:
- Adresse und Tapu-Daten der Immobilie
- Vollmacht zum Verkauf und zur Eigentumsübertragung
- Vollmacht zum Empfang des Kaufpreises
- Vollmacht zur Vertretung gegenüber Finanzamt und Grundbuchamt

### Steuerliche Konsequenzen beim Verkauf

In der Türkei fällt Wertzuwachssteuer (Değer Artış Kazancı) an, wenn die Immobilie weniger als **5 Jahre** nach dem Erbgang verkauft wird. Die Fünf-Jahres-Frist beginnt mit dem Datum der Erbschaft, nicht mit dem Kaufdatum des Erblassers.

Auf den Verkaufserlös in Deutschland kann zusätzlich Einkommensteuer anfallen, wenn die Spekulationsfrist (10 Jahre ab Anschaffung) noch nicht abgelaufen ist. Da der Erbgang als Anschaffung gilt, ist dies bei kurzfristigen Verkäufen zu prüfen.

---

## 10. Schritt für Schritt: So gehen Sie bei einer türkischen Erbschaft vor

**Schritt 1 — Sofort nach dem Todesfall (innerhalb der ersten Wochen):**
- Bewerten Sie grob, ob Schulden den Nachlass übersteigen könnten
- Stellen Sie eine Fristüberwachung für die 3-Monats-Erbausschlagungsfrist sicher
- Erteilen Sie einem Anwalt eine Sondervollmacht beim türkischen Konsulat

**Schritt 2 — Erbschein beantragen:**
- Ihr Anwalt beantragt den türkischen Erbschein beim Sulh Hukuk Mahkemesi
- Alle ausländischen Dokumente (Sterbeurkunde, Familiendokumente) werden apostilliert und übersetzt

**Schritt 3 — Erbschaftsteuererklärung:**
- Fristgerechte Einreichung beim türkischen Finanzamt (4–8 Monate je nach Konstellation)
- Zahlung der Erbschaftsteuer
- Erhalt der Unbedenklichkeitsbescheinigung

**Schritt 4 — Grundbuchumschreibung:**
- Antrag über WEBTAPU (Online-System des türkischen Katasteramts)
- Alle Erben oder ihr bevollmächtigter Vertreter müssen handeln

**Schritt 5 — Prüfung auf Ansprüche:**
- Wurde Ihr Pflichtteil durch Vermögensübertragungen verletzt? → Tenkis Davası prüfen
- Verdacht auf verdeckte Schenkungen als Kauf getarnt? → Muris Muvazaası prüfen
- Miterben kooperieren nicht? → İzale-i Şuyu prüfen

**Schritt 6 — Deutsche Erbschaftsteuererklärung:**
- In Deutschland Erbschaftsteuer erklären (wenn in Deutschland unbeschränkt steuerpflichtig)
- Antrag auf Anrechnung der türkischen Steuer nach § 21 ErbStG stellen
- Türkische Steuerbescheide und Zahlungsbelege beifügen (apostilliert und übersetzt)

---

## Türkische Erbschaft aus Deutschland abwickeln — mit der Doğru Kanzlei

[Die Doğru Kanzlei](/de/leistungen/erbrecht) ist bei der **Anwaltskammer Ankara** und der **Rechtsanwaltskammer Karlsruhe** (§ 207 BRAO) zugelassen. Wir führen türkische Erbsachen direkt — kein Umweg über einen weiteren türkischen Anwalt, dem Sie blind vertrauen müssen.

Wir verwalten den Zugriff auf UYAP (türkisches Justizportal) über das Anwaltsportal, überwachen Fristen in Echtzeit und koordinieren alle Behördengänge in der Türkei von unserem Büro in Mannheim aus.

**Was wir für Sie übernehmen:**
- Beschaffung des türkischen Erbscheins (Sulh Hukuk Mahkemesi oder Notar)
- Erbschaftsteuererklärung und Kommunikation mit dem türkischen Finanzamt
- Grundbuchumschreibung (WEBTAPU-Verfahren)
- Tenkis Davası (Pflichtteilsklage) bei Pflichtteilsverletzung
- Muris Muvazaası-Klage bei verdeckten Schenkungen
- İzale-i Şuyu-Klage bei blockierten Erbengemeinschaften
- Immobilienverkauf durch Sondervollmacht
- Beratung zur Anrechnung türkischer Erbschaftsteuer nach § 21 ErbStG

---

> **RECHTLICHER HINWEIS:** Dieser Artikel dient allgemeinen Informationszwecken und ersetzt keine rechtliche Beratung. Für Ihren konkreten Fall wenden Sie sich an Av. Hasan Doğru bei der Doğru Kanzlei.`,
    contentTR: `**YASAL UYARI:** Bu makale yalnızca Türk hukukuna ilişkin genel bilgi amaçlıdır. Doğru Kanzlei, §207 BRAO kapsamında yalnızca Türk hukuku konularında danışmanlık vermektedir.

---

Almanya'da yaşayan Türk vatandaşları her yıl aynı ikilemle karşılaşıyor: Türkiye'deki bir akrabanın vefatının ardından miras süreci başlıyor, ancak ne yapmaları gerektiğini bilmiyorlar. Türkiye'ye gitmek zorunda mılar? Hangi belgeleri temin etmeleri gerekiyor? Haklarını nasıl koruyacaklar?

Bu rehber, Almanya'dan Türkiye'deki miras sürecini yönetmek isteyen herkes için hazırlandı. Hukuki çerçeveden somut adımlara, kritik sürelerden dava yollarına kadar bilmeniz gereken her şey burada. Miras işlemleri için vekaletname hazırlığı gerekiyorsa ayrıca [vekâletname nasıl çıkarılır](/tr/blog/turkce-vekaletname-nasil-cikarilir) rehberimizi de inceleyebilirsiniz.

---

## 1. Hangi Ülkenin Hukuku Geçerli? AB Miras Tüzüğü ve MÖHUK

Almanya-Türkiye mirası söz konusu olduğunda ilk ve en temel soru şudur: Hangi ülkenin hukuku uygulanır?

### AB Miras Tüzüğü 650/2012

17 Ağustos 2015'ten itibaren AB üyesi devletler arasında (Danimarka hariç) geçerli olan AB Miras Tüzüğü'ne göre, kural olarak kişinin **son alışılagelen ikametgâhının bulunduğu devletin hukuku** uygulanır. Almanya'da yaşayan bir Türk vatandaşının mirası varsayılan olarak **Alman miras hukukuna** tabidir.

Ancak Tüzük, **hukuk seçimi (Rechtswahl/Professio Iuris)** imkânı da tanır: Almanya'da yaşayan bir Türk vatandaşı, noter huzurunda düzenlenen vasiyetname veya ölüme bağlı tasarrufla Türk miras hukukunun uygulanmasını seçebilir. Bu seçim, özellikle Türkiye'de taşınmazı olan kişiler için büyük önem taşır.

### MÖHUK Kapsamında Türk Hukuku

Türkiye'nin uluslararası özel hukukunu düzenleyen MÖHUK (5718 sayılı Kanun) m.20'ye göre, miras işlemleri miras bırakanın ölüm anındaki millî hukukuna tabidir. Türk vatandaşları için bu Türk hukuku demektir.

Ancak kritik istisna şudur: **Türkiye'deki taşınmaz mallar için her zaman Türk hukuku uygulanır (lex rei sitae).** Bu kural, miras bırakanın Alman ya da Türk vatandaşı olmasından bağımsız geçerlidir. Dolayısıyla Türkiye'deki bir daire ya da arsa, miras bırakan kim olursa olsun, Türk miras hukukuna göre paylaşılır.

### Nachlassspaltung: Mirasın Bölünmesi Sorunu

Bu iki farklı hukuk sisteminin bir arada uygulanması, **miras bölünmesi (nachlassspaltung / tereke bölünmesi)** sorununu doğurur. Almanya'daki banka hesabı Alman hukukuna, Türkiye'deki taşınmaz Türk hukukuna göre paylaşılır. Bu durum özellikle eş ile çocuklar arasındaki paylaşım oranlarında çarpıcı farklara yol açabilir.

**Pratik öneri:** Her iki ülkede de taşınmazı olan kişiler için, her iki hukuk sisteminin gerekliliklerini karşılayan **çifte geçerli vasiyetname** hazırlatılması önerilir. Bu vasiyetnamenin hem Türk hem Alman noteri tarafından değil, her iki hukuku bilen bir avukat tarafından hazırlanması kritiktir.

---

## 2. Türk Miras Hukukunun Temel İlkeleri

Türk miras hukuku, 4721 sayılı Türk Medeni Kanunu'nun (TMK) 495–682. maddeleriyle düzenlenmektedir.

### Yasal Mirasçılar ve Miras Payları

**Birinci zümre:** Miras bırakanın altsoyu — çocuklar ve torunlar. Bunlar eşit paylarda miras alır. Sağ kalan eş, çocuklarla birlikte miras bırakanın payının **1/4'ünü** alır.

**İkinci zümre:** Miras bırakanın anne ve babası ile onların altsoyu. Altsoy yoksa sağ kalan eş, anne-babayla birlikte mirasın **1/2'sini** alır.

**Üçüncü zümre:** Büyükanne ve büyükbabalar ile onların altsoyu.

Altsoy ve üstsoy yoksa sağ kalan eş **mirası tamamen** alır.

### Saklı Pay (Mahfuz Hisse)

Türk hukuku, belirli mirasçıların payını koruma altına almıştır. Bu paya **saklı pay** denir:

- **Altsoy (çocuklar, torunlar):** Yasal miras payının **1/2'si**
- **Anne-baba:** Her biri için yasal payın **1/4'ü**
- **Sağ kalan eş:** Birlikte miras aldığı gruba göre değişir — her zaman yasal payının tamamı saklı pay kabul edilir

Miras bırakan, vasiyetname veya yaşarken yaptığı devirlerle bu saklı payları ihlal edemez. İhlal halinde mirasçıların **tenkis davası** açma hakkı doğar.

### Vasiyetname Türleri

**Resmî vasiyetname:** Notar, iki tanık ve miras bırakan huzurunda düzenlenir. En güvenli yöntemdir.

**El yazılı vasiyetname:** Başından sonuna kadar miras bırakanın el yazısıyla yazılmış ve imzalanmış olmalıdır. Bilgisayarla yazılan metinler geçersizdir. Tarih mutlaka yazılmalıdır.

**Sözlü vasiyetname:** Yalnızca yakın ölüm tehlikesi durumunda geçerlidir; bu tehlike ortadan kalktıktan sonra 1 ay içinde yazılı vasiyetname yapılmazsa geçersiz olur.

**Almanya'da yapılan vasiyetname Türkiye'de geçerli mi?** Taşınır mallar için evet; ancak Türkiye'deki taşınmazlar için her zaman Türk hukuku geçerlidir. Almanya'da düzenlenen vasiyetnamenin Türkiye'de kullanılabilmesi için **apostil ve yeminli Türkçe çeviri** şarttır.

---

## 3. Veraset İlamı: Mirasın Kapısını Açan Belge

Türkiye'deki miras sürecinde her şey bu belgeyle başlar.

### Veraset İlamı Nedir?

Veraset ilamı (mirasçılık belgesi), kimin hangi oranda mirasçı olduğunu gösteren ve tapu dairesi, bankalar ile vergi dairesi gibi tüm resmi kurumlar tarafından aranan belgedir. Tapu intikali, banka hesaplarının çözülmesi ve vergi beyannamesi verilmesi için bu belge zorunludur.

### Kimden Alınır?

- **Türkiye'deki Sulh Hukuk Mahkemesi veya herhangi bir noterden** alınabilir
- Almanya'da yaşayan mirasçılar **Türkiye'ye gitmeden**, avukat aracılığıyla veraset ilamı aldırabilir

### Alman Vatandaşları İçin Kritik Fark

Türk vatandaşı olmayan mirasçılar (örneğin Alman vatandaşları) noter üzerinden veraset ilamı alamaz. Türk noterleri yalnızca MERNİS (Türk nüfus kayıt sistemi) üzerinden aile bağını doğrulayabilir; Alman aile kayıtlarına erişimleri yoktur. Bu nedenle **tüm yabancı uyruklu mirasçılar mahkeme kanalıyla** veraset ilamı almak zorundadır.

### Gerekli Belgeler

- Miras bırakanın ölüm belgesi (apostilli, Türkçe yeminli çevirili)
- Mirasçıların kimlik belgeleri ve nüfus kayıtları
- Aile bağını gösteren resmi belgeler (doğum cüzdanı, evlilik cüzdanı vb.)
- Avukata verilecek özel yetkili vekâletname

### Alman Erbschein Türkiye'de Geçerli mi?

Hayır. Alman mahkemelerinin verdiği Erbschein (miras belgesi), Türkiye'deki taşınmazlar için **kesinlikle geçerli değildir**. Tapu müdürlüğü Alman belgelerini kabul etmez. Bu nedenle hem Almanya'da hem Türkiye'de miras varsa **her iki ülkede ayrı ayrı** mirasçılık belgesi alınması gerekir.

---

## 4. Veraset Vergisi: Türkiye'de Ne Kadar Ödersiniz?

### 2026 Yılı İstisna Tutarları

1 Ocak 2026 tarihinden itibaren geçerli olan güncel rakamlara göre (57 Seri No'lu Veraset ve İntikal Vergisi Kanunu Genel Tebliği):

| Mirasçı | 2026 İstisna Tutarı |
|---|---|
| Füruğ (çocuklar) ve eş — her biri için | 2.907.136 TL |
| Sadece eş (füruğ yoksa) | 5.817.845 TL |
| İvazsız intikaller (bağış vb.) | 66.935 TL |

Bu tutarların üzerindeki miras payları aşağıdaki kademeli tarifeye göre vergilendirilir:

| Matrah Dilimi | Vergi Oranı |
|---|---|
| İlk dilim | %1 |
| İkinci dilim | %3 |
| Üçüncü dilim | %5 |
| Dördüncü dilim | %7 |
| Beşinci dilim ve üzeri | %10 |

### Beyanname Süreleri

- **Ölüm Türkiye'de, mirasçılar Türkiye'de:** Ölüm tarihinden itibaren **4 ay**
- **Ölüm Türkiye'de, mirasçılar yurt dışında (Almanya gibi):** **6 ay**
- **Ölüm yurt dışında, mirasçılar Türkiye'de:** **6 ay**
- **Ölüm yurt dışında, mirasçılar da yurt dışında:** **8 ay**

Bu sürelerin kaçırılması para cezasına ve gecikme faizine yol açar. Tapu intikali, vergi ilişiksiz belgesi (İlişik Yoktur Yazısı) alınmadan gerçekleştirilemez.

### Çifte Vergilendirme Tehlikesi

Türkiye ile Almanya arasında **miras vergisi alanında çifte vergilendirmeyi önleme anlaşması bulunmamaktadır.** İki ülke arasındaki 2011 tarihli Çifte Vergilendirme Anlaşması yalnızca gelir ve kurumlar vergilerini kapsar; veraset vergisini kapsamaz.

Bu nedenle Almanya'da yaşayan mirasçılar Türkiye'deki miraslarının hem Türkiye'de hem de Almanya'da vergilendirilebileceğini bilmelidir. Türkiye'de ödenen vergi, Almanya'da mahsup talebinde bulunulabilir; ancak bu prosedür dikkatli takip gerektirmektedir.

**Pratik önlem:** Türkiye'deki miras vergisi ödeme makbuzlarını ve Türkçe vergi belgelerini apostilli ve yeminli çevirili olarak saklayın. Almanya'daki vergi dairesine mahsup talebi için bu belgeler zorunludur.

---

## 5. Miras Reddi: Borçlu Mirastan Nasıl Kaçınırsınız?

Türk hukukunda miras otomatik olarak kabul edilmiş sayılır. Reddetmek için aktif adım atılması gerekir.

### 3 Aylık Süre

TMK m.605 uyarınca, mirasçılar **ölümü ve mirasçı olduklarını öğrendikten itibaren 3 ay içinde** mirası reddedebilir. Bu süre geçirilirse miras — borçlar dahil — kabul edilmiş sayılır.

Bu 3 aylık süre, Almanya'da yaşayan mirasçılar için de aynı şekilde geçerlidir. Uzatılması son derece sınırlı koşullara bağlıdır.

### Nasıl Reddedilir?

Reddi miras, **miras bırakanın son yerleşim yerindeki Sulh Hukuk Mahkemesi'ne** yazılı dilekçeyle yapılır. Almanya'daki mirasçılar bu başvuruyu avukat aracılığıyla yapabilir. Ayrıca konsolosluk üzerinden Türkiye'deki mahkemeye iletim de mümkündür.

### Mirasın Borçlu Olup Olmadığı Nasıl Anlaşılır?

Miras bırakanın mal varlığı ve borçlarını öğrenmek için:
- Türkiye'deki tapu kayıtları sorgulanabilir (WEBTAPU)
- Bankalardan hesap bilgisi talep edilebilir
- Vergi dairesinden vergi borcu sorgulama yapılabilir
- Noterden tereke tespiti davası açılabilir

Bu araştırma 3 aylık süre dolmadan tamamlanmalıdır. Aksi halde **ihtiyaten reddi miras** başvurusunda bulunulup ardından araştırma sürdürülebilir.

---

## 6. Tenkis Davası: Saklı Payınız İhlal Edildiyse

Almanya'da yaşayan mirasçıların en sık karşılaştığı sorun şudur: Miras bırakan, hayatının son yıllarında Türkiye'deki taşınmazlarını belirli kişilere devretmiş — ve Almanya'daki diğer mirasçılar miras paylarının büyük bölümünden yoksun bırakılmıştır.

### Tenkis Davası Nedir?

TMK m.560 uyarınca, miras bırakanın saklı paylı mirasçıların zorunlu payını ihlal eden tasarruflarına karşı **tenkis davası** açılabilir. Bu dava ile fazla tasarrufun iptali ve saklı payın teslimi talep edilir.

Tenkis davası hem **yaşarken yapılan devirler** (tapuda satış veya bağış gösterilen işlemler) hem de **vasiyetname hükümleri** için geçerlidir.

### Süre Sınırı

Tenkis davası açma hakkı:
- Saklı payın ihlal edildiğini **öğrendiğiniz tarihten itibaren 1 yıl**
- Her hâlde vasiyetnamenin açıldığı tarihten veya diğer tasarruflarda mirasın açılmasından itibaren **10 yıl**

içinde kullanılmalıdır. Bu süreler hak düşürücü sürelerdir; aşılması durumunda dava hakkı tamamen ortadan kalkar.

### Almanya'dan Tenkis Davası Açılabilir mi?

Evet. Konsolosluktan düzenlenecek özel yetkili vekâletname ile avukatınız bu davayı Türkiye'de sizin adınıza açabilir ve takip edebilir. Türkiye'ye gitmenize gerek yoktur. Doğru Kanzlei olarak UYAP avukat portalı üzerinden dava dosyalarına Mannheim ofisimizden doğrudan erişiyor ve duruşmalara katılıyoruz.

---

## 7. Muris Muvazaası: Mirastan Mal Kaçırıldıysa

Bu dava, Almanya'daki Türk ailelerinin miras uyuşmazlıklarında en sık gündeme gelen konulardan biridir — ve maalesef en az bilinenidir.

### Muris Muvazaası Nedir?

Miras bırakanın, mirasçılarından mal kaçırmak amacıyla gerçekte **bağışlamak istediği** taşınmazı tapuda **satış** olarak göstermesidir. Görünürdeki işlem satış, gizli amaç ise bağıştır. Bu yolla hem tenkis davası hakkı engellenmekte hem de mirasçılar hak ettikleri paylardan yoksun bırakılmaktadır.

**Yaygın örnekler:**
- Babanın kız çocuklarından mal kaçırarak erkek çocuklara devretmesi
- Eski evlilikten olan çocuklardan mal kaçırarak yeni eşten olan çocuklara bırakması
- Taşınmazın sembolik bedelle üçüncü bir kişiye satış göstererek devredilmesi
- Ölünceye kadar bakma sözleşmesi kılığına büründürülen mal devirleri

### Muris Muvazaasının Özelliği: Zamanaşımı Yoktur

Bu dava, **herhangi bir zamanaşımı veya hak düşürücü süreye tabi değildir.** Miras bırakanın ölümünden sonra her zaman açılabilir. Devrin üzerinden 10, 20, hatta 30 yıl geçmiş olması davayı açmaya engel teşkil etmez.

Yalnızca miras bırakan hayatta iken dava açılamaz.

### İspat Yükü

İspat yükü davacı mirasçıdadır. Muvazaanın varlığını destekleyen unsurlar:
- Miras bırakanın satış yapmasını gerektirecek ekonomik bir ihtiyacının bulunmaması
- Alıcının satın alma gücüne sahip olmaması
- Devredilen taşınmazın rayiç değerinin çok altında gösterilmesi
- Tanık beyanları
- Tapu kayıtları ve aile içi yazışmalar

### Almanya'dan Bu Dava Açılabilir mi?

Evet. Konsolosluktan **"tapu iptali ve tescil davası açma, takip etme, ihtiyati tedbir talep etme"** yetkilerini açıkça içeren özel yetkili vekâletname düzenlenerek avukatınız bu davayı Türkiye'de açabilir. Dava, taşınmazın bulunduğu yerdeki **Asliye Hukuk Mahkemesi'nde** görülür.

**İhtiyati tedbir talebi kritik öneme sahiptir:** Dava süresince taşınmazın üçüncü kişilere devredilmesini engellemek için mahkemeden ihtiyati tedbir kararı alınmalıdır. Bu adım atılmadan açılan davalarda taşınmazın el değiştirmesi ciddi hak kayıplarına yol açabilir.

---

## 8. Miras Ortaklığı ve İzale-i Şuyu: Mirasçılar Anlaşamıyorsa

Türkiye'de taşınmaz mirası genellikle tek bir kişiye değil, birden fazla mirasçıya birlikte kalır. Bu durum **miras ortaklığı (miras iştirak halinde mülkiyet)** olarak adlandırılır.

### Miras Ortaklığında Ne Olur?

- Taşınmazı **satmak için tüm mirasçıların onayı** gerekir
- Birinin bile itirazı satışı engeller
- Kira sözleşmesi yapılması, tapu üzerinde işlem yapılması da tüm mirasçıların birlikteliğini gerektirir
- Anlaşmazlık çözülene kadar taşınmaz atıl kalabilir

Bu durum özellikle Almanya'daki ve Türkiye'deki mirasçılar arasında çok sık yaşanır.

### İzale-i Şuyu Davası

Mirasçılar anlaşamıyorsa herhangi bir mirasçı **izale-i şuyu (ortaklığın giderilmesi) davası** açabilir. Bu dava ile:

- Taşınmaz **ayni taksim** yoluyla fiziksel olarak bölünebilir (müstakil parsellere ayrılır)
- Bölünmesi mümkün değilse **açık artırmayla satılır** ve satış bedeli miras paylarına göre dağıtılır

**Önemli:** Bu davayı tek bir mirasçı diğerlerinin onayı olmadan açabilir. Almanya'daki bir mirasçı, avukat aracılığıyla Türkiye'ye gitmeden bu davayı başlatabilir.

### Taşınmaz Satılmadan Önce Ne Yapılmalı?

İzale-i şuyu davası başlamadan önce miras paylarının doğru belirlenmesi ve tapu kaydının güncel olması önemlidir. Tapu üzerindeki hatalar, miras paylarındaki anlaşmazlıklar ve birikmiş vergi borçları önceden tespit edilmeli ve çözülmelidir.

---

## 9. Türkiye'deki Taşınmazı Almanya'dan Satmak

Mirasta kalan taşınmazı satmak istiyorsunuz ama Türkiye'ye gidemiyorsunuz. Bu mümkün mü?

### Evet — Ancak Doğru Vekâletname Şarttır

Türkiye'deki tapu işlemleri için **tapu satış vekâletnamesi** gereklidir. Bu vekâletname Almanya'daki Türk konsolosluğundan Türkçe olarak düzenlenmelidir.

Dikkat: **Alman noter tarafından düzenlenen genel vekâletnameler** Türk tapu idaresi tarafından çoğunlukla kabul edilmez. Tapu işlemi için kullanılacak vekâletnamede şu unsurlar mutlaka yer almalıdır: taşınmazın tam adresi ve tapu bilgileri, satış ve devir yetkisi, bedel tahsil yetkisi, vergi dairesinde temsil yetkisi.

### Satışta Vergi Yükümlülüğü

Türkiye'de taşınmaz satışından elde edilen kazanç, taşınmazın **ediniminden itibaren 5 yıl geçmemişse** değer artış kazancı vergisine tabidir. Bu vergi, miras yoluyla edinilen taşınmazlarda **miras tarihinden** itibaren hesaplanır.

Türk Lirası cinsinden elde edilen satış bedeli Almanya'ya transfer edildiğinde, Almanya'da da kur farkına dayalı gelir vergisi yükümlülüğü doğabilir. Bu nedenle satış öncesinde her iki ülkedeki vergi sonuçlarının bir avukat tarafından değerlendirilmesi önerilir.

---

## 10. Almanya'dan Türkiye'deki Miras Süreci: Adım Adım

Tüm bu bilgileri pratik bir rehbere dönüştürürsek:

**Adım 1 — Ölümü öğrendikten sonra ilk 3 ay:**
- Miras bırakanın mal varlığını ve borçlarını araştırın
- Mirası kabul veya reddetme kararı verin
- Reddi miras yapacaksanız avukatınız aracılığıyla Sulh Hukuk Mahkemesi'ne başvurun
- Muris muvazaası veya saklı pay ihlali şüphesi varsa avukatınızı bilgilendirin

**Adım 2 — Konsolosluğa gidin:**
- Türkiye'deki en yakın konsolosluğa randevu alın
- Avukatınıza miras işlemleri için **özel yetkili vekâletname** düzenleyin
- Vekâletnamede tüm yetkilerin açıkça belirtilmesine dikkat edin

**Adım 3 — Veraset ilamı:**
- Avukatınız Sulh Hukuk Mahkemesi'nden veraset ilamı alır
- Alman vatandaşı mirasçılar için mahkeme yolu zorunludur

**Adım 4 — Veraset vergisi beyannamesi:**
- Ölümden itibaren 4–8 ay içinde (konumunuza göre değişir) vergi dairesine beyanname verilir
- Vergi ödendikten sonra **İlişik Yoktur Yazısı** alınır

**Adım 5 — Tapu intikali:**
- WEBTAPU üzerinden başvuru yapılır
- Belge tamamlanınca tapu müdürlüğünde intikal gerçekleştirilir
- Tüm bu işlemler avukat aracılığıyla uzaktan yürütülür

**Adım 6 — Anlaşmazlık varsa:**
- Tenkis davası (saklı pay ihlali)
- Muris muvazaası davası (mal kaçırma)
- İzale-i şuyu davası (mirasçılar arasında anlaşmazlık)
- Bu davalar Türkiye'ye gitmeden açılabilir

---

## 11. Doğru Kanzlei ile Türkiye'deki Mirasınızı Almanya'dan Yönetin

[Doğru Kanzlei](/tr/hizmetler/miras-hukuku) olarak, hem **Ankara Barosu** hem de **Karlsruhe Barosu** (§207 BRAO) üyesiyiz. Bu çift üyelik, Türkiye'deki miras davalarını aracı olmadan — doğrudan Mannheim ofisimizden — yürütmemizi sağlar.

UYAP avukat portalı üzerinden Türkiye'deki tüm dava dosyalarına gerçek zamanlı erişiyoruz. Duruşmalara katılıyor, tapu müdürlüğü ve vergi dairesi işlemlerini takip ediyor ve sizi her aşamada bilgilendiriyoruz. Türkiye'deki ceza dosyalarının miras sürecine etkisi gibi bağlantılı riskler için [Türkiye ceza davası Almanya savunma](/tr/blog/turkiye-ceza-davasi-almanya-savunma) yazımızı da okuyabilirsiniz.

**Müvekkillerimiz için üstlendiğimiz işler:**
- Veraset ilamı alınması (mahkeme veya noter kanalıyla)
- Tenkis davası açılması ve takibi
- Muris muvazaası davası açılması ve takibi
- İzale-i şuyu davası açılması ve takibi
- Veraset vergisi beyannamesi ve İlişik Yoktur Yazısı
- Tapu intikali
- Taşınmaz satışı için vekâletname ve süreç yönetimi
- Çifte vergilendirme değerlendirmesi

---

> **YASAL UYARI:** Bu makale genel bilgi amaçlıdır ve hukuki danışmanlık yerine geçmez. Bireysel durumunuz için Av. Hasan Doğru'ya danışmanızı öneririz.`,
    contentEN: `**LEGAL NOTICE:** This article addresses Turkish law exclusively. Doğru Kanzlei advises on Turkish law under § 207 BRAO and does not advise on German domestic law.

---

The scenario plays out in families across Germany every year. A parent who emigrated from Turkey decades ago passes away. The children — born or raised in Germany, working in Germany, living their lives in Germany — suddenly discover that their parent still owned an apartment in Istanbul or a plot of land in Antalya. What now?

What follows is rarely straightforward. Two legal systems collide. Documents must be apostilled and translated. Tax declarations must be filed in a country many of them have never worked in professionally. Family members in Turkey and Germany may have different ideas about what should happen to the property. And behind all of this, deadlines are running.

This guide explains what you need to know and — crucially — what you need to do.

---

## 1. The Split Estate Problem — Which Country's Law Applies?

The first thing to understand about a German-Turkish inheritance is that it almost always involves two different legal systems operating simultaneously.

### The Rule That Surprises Everyone

For any real estate located in Turkey, **Turkish law governs the inheritance** — regardless of the deceased's nationality, regardless of where they lived, and regardless of what any foreign will says. This is the **lex rei sitae** principle (the law of the place where the property is located), embedded in the 1929 German-Turkish Consular Convention (§§ 14(2), 18) and confirmed repeatedly by German courts, including the OLG Köln in 2014 and the OLG Hamm in 2019.

For movable assets — bank accounts, vehicles, investments — the law of the deceased's nationality applies. A Turkish national who lived in Germany: their bank accounts are governed by Turkish law. A German national who owned a holiday apartment in Antalya: that apartment is governed by Turkish law, even though everything else about the estate is German.

This creates what lawyers call a **split estate (Nachlassspaltung)**: the same inheritance is divided between two legal systems. The practical consequence is that the inheritance shares and procedures differ depending on what type of asset you are dealing with.

### Why This Matters in Practice

Consider a concrete example. A Turkish-born father lived in Germany for 30 years, holds Turkish nationality, and dies without a will. He leaves behind a wife, two adult children, a German bank account and a property in Turkey.

- **German bank account (movable, Turkish nationality):** Turkish law applies → wife receives 1/4, children share 3/4
- **Turkish property (immovable, located in Turkey):** Turkish law applies → same result

Now change the scenario: the father had already acquired German citizenship. Same family, same assets.

- **German bank account (movable, German nationality):** German law applies → wife receives 1/2, children share 1/2
- **Turkish property (immovable, located in Turkey):** Turkish law still applies → wife receives 1/4, children share 3/4

The wife's position changes dramatically depending on which asset is in question. This is the split estate problem in action — and it is the reason why thoughtful estate planning that accounts for both legal systems matters so much.

### The EU Succession Regulation Does Not Apply to Turkey

The EU Succession Regulation (No. 650/2012), which would generally apply the law of the deceased's last habitual residence to the entire estate, does not bind Turkey. Turkey is not an EU member state, and the bilateral 1929 Convention takes precedence. No choice-of-law clause in a European will or European Certificate of Succession changes the applicable law for Turkish real estate.

---

## 2. Turkish Inheritance Law — What You Need to Know

Since Turkish law governs all real estate in Turkey, heirs need to understand its core principles.

### Legal Heirs and Their Shares (Turkish Civil Code Art. 495–502)

| Situation | Spouse's share | Children's share |
|---|---|---|
| With children | 1/4 | 3/4 (equally divided) |
| No children, with parents | 1/2 | — (parents share 1/2) |
| No children, no parents | 3/4 | — |
| Sole heir | Everything | — |

Turkish law makes no distinction between sons and daughters — all children inherit equally. Children born outside of marriage have the same inheritance rights as those born within it.

### Forced Heirship (Saklı Pay / Reserved Shares)

Turkish inheritance law protects certain heirs with a reserved share (saklı pay) that cannot be taken away by will or lifetime gifts:

- **Descendants (children, grandchildren):** Half of their statutory share
- **Parents:** One quarter of their statutory share each
- **Surviving spouse:** Always the full statutory share

If a will or a lifetime transfer reduces a forced heir's share below this minimum, they have the right to bring a **forced heirship claim (Tenkis Davası)** to recover the shortfall.

### Wills in Turkey — Three Valid Forms

**Notarial will (Resmî Vasiyetname):** Executed before a Turkish notary with two witnesses. The most secure form.

**Holographic will (El Yazılı Vasiyetname):** Written entirely in the testator's own handwriting, signed and dated (day, month and year). Typed or computer-written text is invalid.

**Oral will:** Valid only in life-threatening emergencies; expires one month after the emergency ends if no written will is made.

### Does a German Will Work for Turkish Property?

Not for determining the applicable law. Turkish law governs Turkish real estate regardless of what any foreign will says. A German will cannot override Turkish forced heirship rules or change the distribution of Turkish property.

However, a foreign will can be **submitted as evidence** of the testator's wishes. For it to be considered by a Turkish court, it must be apostilled and officially translated into Turkish by a certified translator.

For anyone with assets in both countries, the recommended approach is a **dual-jurisdiction will** — one document that specifically addresses Turkish assets under Turkish law, and another (or the same document, appropriately drafted) addressing German assets. This is best prepared by a lawyer who understands both systems.

---

## 3. The Turkish Inheritance Certificate (Veraset İlamı) — Why a German Probate Document Is Not Enough

Everything in a Turkish inheritance process flows from this one document. Without it, nothing moves.

### What Is the Veraset İlamı?

The Veraset İlamı (also called Mirasçılık Belgesi — Certificate of Heirship) is an official document issued by a Turkish court or notary that identifies who the legal heirs are and in what proportions they inherit. It is required for:

- Title deed transfer at the Turkish Land Registry
- Release of bank accounts at Turkish banks
- Filing the inheritance tax declaration
- Initiating any court proceedings related to the estate

### Why a German Erbschein Does Not Work

For Turkish real estate, Turkish land registry offices accept **exclusively** the Turkish Veraset İlamı. A German Erbschein — even if apostilled and officially translated — is not accepted for property title transfers. This catches many families completely off guard.

For movable assets (bank accounts), a German Erbschein with apostille is theoretically sufficient under Article 14 of the 1929 Convention. In practice, however, Turkish banks frequently insist on the Turkish certificate as well. The safest approach is always to obtain the Turkish certificate.

### The Special Rule for Foreign Nationals as Heirs

Turkish nationals inheriting from Turkish nationals can sometimes obtain the Veraset İlamı directly from a notary. Foreign nationals — or cases involving foreign family records — cannot. Turkish notaries can only verify family relationships through the Turkish civil registry (MERNİS), which does not contain foreign records. **All foreign heirs must go through the Turkish court process** to obtain the Veraset İlamı.

### What Documents Are Required

- International death certificate (apostilled and officially translated into Turkish)
- Family relationship documents: birth certificates, marriage certificates (apostilled and officially translated)
- Valid passports of all heirs
- Turkish Tax ID Number (Vergi Kimlik Numarası) for every heir — obtainable by a lawyer on your behalf
- Power of Attorney granted to your lawyer at a Turkish consulate in Germany

If you need background on Turkish powers of attorney, our German-language guide to [Vollmacht auf Türkisch](/de/blog/vollmacht-auf-tuerkisch) explains the consular process in detail.

### How Long Does It Take?

Under normal circumstances, obtaining the Veraset İlamı takes between 4 and 12 weeks, depending on court backlog and the completeness of documentation submitted.

---

## 4. Turkish Inheritance Tax — What to Expect and When to Pay

### Who Pays Turkish Inheritance Tax?

Turkish inheritance tax (Veraset ve İntikal Vergisi) applies to all assets located in Turkey — regardless of the heir's nationality or country of residence. If you inherit a property in Antalya, Turkish inheritance tax applies whether you live in Germany, the UK or Australia.

For Turkish nationals as heirs, the tax also applies to assets inherited outside Turkey. Foreign nationals are liable only for assets located in Turkey.

### 2026 Tax Rates and Exemptions

The following figures are drawn from General Communiqué No. 57, published in the Official Gazette on 31 December 2025:

| Category | 2026 Exemption Amount |
|---|---|
| Spouse and each child | 2,907,136 TL |
| Surviving spouse (no descendants) | 5,817,845 TL |
| Gifts and other gratuitous transfers | 66,935 TL |

| Band | Rate |
|---|---|
| First band | 1% |
| Second band | 3% |
| Third band | 5% |
| Fourth band | 7% |
| Fifth band and above | 10% |

Turkey is a low-tax jurisdiction for inheritance by international standards — the maximum rate of 10% is reached only on very large estates. For most family inheritances, the effective tax rate is 1–3%.

### Filing Deadlines

| Situation | Deadline |
|---|---|
| Death in Turkey, heirs in Turkey | 4 months |
| Death in Turkey, heirs abroad (Germany) | 6 months |
| Death abroad, heirs in Turkey | 6 months |
| Death abroad, heirs also abroad | 8 months |

**Critical:** You cannot transfer the title deed or unfreeze bank accounts until the tax is paid and the tax authority issues a **clearance certificate (İlişik Yoktur Yazısı)**. This certificate is the gateway to completing the inheritance.

### The Double Taxation Risk — and How to Reduce It

Germany and Turkey have **no double taxation agreement for inheritance tax**. The bilateral DTA of 2011 covers income and corporate tax only — not inheritance. This means that if you are resident in Germany and inherit Turkish assets, both countries may tax the same inheritance.

Germany taxes heirs based on the residence of the heir or the deceased. Turkey taxes based on the location of the assets and the nationality of the heir. These criteria can overlap significantly.

**The practical solution under German law (§ 21 ErbStG):** The Turkish inheritance tax paid can be credited against the German inheritance tax — but only if:
- You make a specific application to the German tax office (it is not applied automatically)
- You can prove what you paid in Turkey (original tax assessments, payment receipts, apostilled and officially translated)
- The credit is capped at the German tax attributable to the same asset

Keep all Turkish tax documents — original assessments, payment receipts, and the clearance certificate — apostilled and officially translated. You will need them for the German inheritance tax return.

---

## 5. Rejecting an Inheritance — When the Debts Outweigh the Assets

A fact many heirs do not know: **under Turkish law, if you do not actively reject an inheritance, you have accepted it** — including all debts of the deceased.

### The 3-Month Deadline

Turkish Civil Code Article 605 gives heirs **3 months** from learning of the death and their status as heir to formally reject the inheritance. This applies equally to heirs living in Germany. The period is not automatically extended for people living abroad.

Once this deadline passes, the inheritance is deemed accepted. The heir becomes personally liable for the deceased's debts — including mortgages, tax liabilities, and private debts.

### Before You Decide: What to Investigate

Before the 3-month deadline, a thorough investigation of the estate's liabilities is essential:

- Outstanding mortgages and charges on the property (via land registry search — Tapu query)
- Bank loans and credit card debts
- Unpaid property tax (Emlak Vergisi)
- Outstanding Turkish income tax liabilities
- Debts to private creditors

If the liabilities clearly exceed the assets, rejection is the right course. If uncertain, your lawyer can apply for **provisional rejection under reservation** (ihtiyaten reddi miras), which buys time for a more thorough assessment.

### How to Reject

The rejection declaration must be filed with the Turkish Civil Court of Peace (Sulh Hukuk Mahkemesi) at the deceased's last place of residence in Turkey. Your lawyer can do this on your behalf — no travel required.

---

## 6. Forced Heirship Claims (Tenkis Davası) — When Your Share Has Been Reduced

One of the most common scenarios in German-Turkish inheritance cases: the deceased transferred Turkish property to one child or to a third party during their lifetime, leaving the other heirs with far less than they are legally entitled to.

### What the Law Protects

Turkish law guarantees that spouses, children and sometimes parents cannot be completely cut out of an inheritance. These reserved shares (saklı pay) are:

- **Each child:** Half of their statutory legal share
- **Each parent (where applicable):** One quarter of their statutory share
- **Surviving spouse:** The full statutory share

If lifetime transfers or testamentary dispositions reduce anyone's share below these minimums, the affected heirs can bring a **Tenkis Davası (Reduction / Forced Heirship Claim)** to restore their rightful portion.

### What Can Be Challenged

- Lifetime property transfers that were genuine gifts but registered as sales
- Testamentary dispositions that leave protected heirs below their reserved share
- Gifts made in the years before death that eroded the estate

### Strict Time Limits Apply

Unlike the fraudulent transfer claim described in the next section, the Tenkis Davası has firm deadlines:

- **1 year** from the date you learn that your forced share has been violated
- **10 years** from the date the will was opened (for testamentary dispositions) or from the death (for other dispositions) — whichever comes first

These are absolute cut-off dates. Missing them permanently extinguishes the right to bring the claim. If you suspect your forced share has been violated, act immediately.

### Managing This Claim from Germany

With a suitable power of attorney, your lawyer can file and conduct the Tenkis Davası in Turkey entirely on your behalf. The claim is filed at the civil court at the deceased's last place of residence in Turkey.

---

## 7. Muris Muvazaası — When Property Was Hidden Before Death

This is the issue that almost no English-language guide covers clearly — and yet it is one of the most common problems affecting Turkish diaspora families in Germany.

### What Is Muris Muvazaası?

Muris Muvazaası — often translated as **inheritance fraud** or **fraudulent conveyance** — refers to a situation where the deceased transferred property before their death to a favoured person (typically one child, a new spouse, or a third party), but disguised the transfer as a **sale** rather than a gift. The land registry shows a sale. No money actually changed hands, or the price was far below market value. The real intention was a gift — used to deprive the other heirs of their rights.

This is common in Turkish families where:
- One child is favoured over others — often a son over daughters
- Children from a first marriage are cut out in favour of children from a second marriage
- A property is transferred to avoid estate claims after death
- The "buyer" is a university student or otherwise clearly had no means to purchase

### The Most Important Feature: No Time Limit

Unlike the Tenkis Davası, a **Muris Muvazaası claim has no statute of limitations**. It can be brought at any time after the deceased's death — even if the transfer took place 20 or 30 years ago. The reasoning is that the underlying transfer is void from the beginning, so the right to challenge it does not expire.

The only condition: the claim can only be brought **after** the deceased has died.

### How the Claim Works

The claim is a **title deed cancellation and re-registration lawsuit (Tapu İptali ve Tescil Davası)**, filed at the civil court of first instance (Asliye Hukuk Mahkemesi) at the location of the property. Each heir can bring the claim independently — you do not need the co-operation of other heirs.

**Burden of proof** lies with the claimant heir. Key evidence includes:

- The discrepancy between the official sale price and actual market value (supported by an expert valuation)
- Evidence that the "buyer" had no realistic means to pay the stated price (bank records, income documents)
- Witness testimony about family relationships and the context of the transfer
- Comparison of the transfer with normal patterns of the area and family circumstances

**Injunctive relief (İhtiyati Tedbir) is essential:** File for a precautionary injunction at the same time as the main claim. This prevents the property from being transferred to a third party while the lawsuit is pending. If the property changes hands to a bona fide purchaser before you obtain the injunction, recovering it becomes significantly harder.

### Bringing This Claim from Germany

With a power of attorney that explicitly includes authority to file lawsuits, seek injunctive relief, and conduct legal proceedings, your lawyer can bring this claim entirely in Turkey on your behalf. You do not need to travel to Turkey.

---

## 8. The Co-Heir Problem — When Agreement Is Impossible

When a property is inherited by multiple heirs, a **joint ownership community (Miras Ortaklığı)** is automatically created. The property cannot be sold, mortgaged or significantly altered without the agreement of all heirs.

### Why This Creates Problems

Co-heir disputes are extremely common in German-Turkish families. Some heirs live in Germany and want to sell. Others live in Turkey and want to keep the property, use it for rental income, or have an emotional attachment to it. One person's refusal blocks everyone.

There is no automatic resolution mechanism — unless a court is involved.

### The Partition Lawsuit (İzale-i Şuyu)

**Any single co-heir** — acting alone, without the consent of the others — can file an İzale-i Şuyu (Dissolution of Partnership / Partition) lawsuit. The court then orders either:

1. **Physical division** of the property: possible only when the property can genuinely be divided into separate units without losing significant value (rare for flats and houses)
2. **Compulsory public auction**: the property is sold to the highest bidder, and the proceeds are divided proportionally among all heirs

The auction route is by far the most common outcome for urban apartments and houses.

**Filing from Germany:** Your lawyer can file and conduct the İzale-i Şuyu proceedings without you needing to appear in Turkey.

**Before filing:** Ensure the inheritance has been formally registered in the land registry (title deed transfer completed, inheritance tax paid) and that the shares of all heirs are correctly reflected. Filing a partition claim on an unregistered inheritance creates complications.

---

## 9. Selling an Inherited Turkish Property from Germany

Once the title deed transfer is complete, many heirs want to sell the property rather than maintain it from abroad. This is entirely possible without travelling to Turkey.

### The Power of Attorney Route

A **sale power of attorney (Tapu Satış Vekaletnamesi)** issued at a Turkish consulate in Germany authorises your lawyer or another trusted person to sell the property in your name. The consulate-issued document is valid in Turkey immediately — no apostille required.

**Important:** A power of attorney issued by a German notary is generally not accepted by Turkish land registry offices for property sales. The document must be issued at the Turkish consulate.

The power of attorney for a property sale must specifically include:
- Full address and title deed details (Tapu bilgileri) of the property
- Authority to sell, sign the sale agreement, and transfer title
- Authority to receive the sale proceeds
- Authority to represent the seller at the tax office and land registry

### Tax on the Sale

**Turkish capital gains tax** may apply if the property is sold within **5 years** of the inheritance (the date the title deed was transferred to the heir). If the 5-year period has passed, the sale is exempt.

If the property is sold within 5 years, the gain is calculated as the sale price minus the official declared value at the time of inheritance (which appears on the inheritance tax assessment). The applicable rates are the personal income tax brackets — currently ranging from 15% to 40%.

In Germany, the inherited property may also be subject to German capital gains tax under the Spekulationsfrist rules (10-year period). Since inheritance counts as acquisition, selling shortly after inheriting may generate a taxable gain in Germany as well. Both countries should be assessed before completing the sale.

---

## 10. Step by Step — Managing a Turkish Inheritance from Germany

**Step 1 — Immediately (within the first weeks):**
Investigate the estate. What properties exist? What debts? Request a land registry search (Tapu query). Start the 3-month countdown for potential inheritance rejection.

**Step 2 — Issue a Power of Attorney:**
Visit your nearest Turkish consulate in Germany. Consulates with notarial functions exist in Frankfurt, Berlin, Stuttgart, Munich, Cologne, Hamburg, Hanover, Karlsruhe, Münster and Nuremberg. Have a comprehensive power of attorney drawn up in Turkish, covering all estate proceedings including litigation authority.

**Step 3 — Obtain the Veraset İlamı:**
Your lawyer petitions the Turkish court. All foreign documents must be apostilled and officially translated into Turkish. Expect 4–12 weeks.

**Step 4 — File the inheritance tax declaration:**
Deadline: 4–8 months depending on your specific situation. Pay the tax and obtain the İlişik Yoktur Yazısı (clearance certificate).

**Step 5 — Transfer the title deed:**
Apply through WEBTAPU (online system of the Turkish Cadastral Office). The title deed is transferred to the heirs' names.

**Step 6 — Assess whether claims exist:**
- Was your forced share violated? → Tenkis Davası (1-year deadline from knowledge)
- Was property transferred as a disguised gift before death? → Muris Muvazaası (no time limit — but act before property changes hands again)
- Are co-heirs blocking the sale? → İzale-i Şuyu (partition lawsuit)

**Step 7 — German inheritance tax return:**
Declare the Turkish inheritance in Germany. Apply for credit of Turkish inheritance tax under § 21 ErbStG. Attach original Turkish tax documents, apostilled and translated.

---

## Handle Your Turkish Inheritance with Doğru Kanzlei

[Doğru Kanzlei](/en/services/erbrecht) holds dual bar membership with the **Ankara Bar Association** and the **Karlsruhe Bar Association** (§ 207 BRAO). We handle Turkish inheritance proceedings directly — without a relay through a third-party Turkish law firm you have never met.

We access UYAP (Turkey's Justice Portal) through the attorney portal, monitor all filing deadlines in real time, and manage every step of the process from our office in Mannheim. Attorney Hasan Doğru spent approximately a decade as a member of Turkey's Special Operations (Özel Harekat) unit before his legal career — giving our estate litigation work a perspective on how Turkish institutions operate that very few lawyers can match.

**What we handle for clients across Germany:**
- Turkish probate certificate (Veraset İlamı) — court and notary routes
- Inheritance tax declaration and clearance certificate (İlişik Yoktur Yazısı)
- Title deed transfer (WEBTAPU process)
- Forced heirship claims (Tenkis Davası)
- Fraudulent transfer claims (Muris Muvazaası — Tapu İptali ve Tescil Davası)
- Partition lawsuits (İzale-i Şuyu)
- Property sale power of attorney and transaction management
- Double taxation assessment and German § 21 ErbStG credit strategy

---

> **LEGAL NOTICE:** This article is for general information only and does not constitute legal advice. For your specific situation, contact Av. Hasan Doğru at Doğru Kanzlei.`,
    category: "Miras Hukuku",
    categoryDE: "Erbrecht",
    categoryEN: "Inheritance Law",
    image: inheritanceLawImg,
    dateDE: "24. April 2026",
    dateTR: "24 Nisan 2026",
    dateEN: "April 24, 2026",
    readTimeDE: "16 Min. Lesezeit",
    readTimeTR: "16 dk okuma",
    readTimeEN: "17 min read",
    publishedAt: "2026-04-20",
    modifiedAt: "2026-04-24",
    publishedAtDE: "2026-04-20",
    publishedAtTR: "2026-04-20",
    publishedAtEN: "2026-04-24",
    modifiedAtDE: "2026-04-24",
    modifiedAtTR: "2026-04-24",
    modifiedAtEN: "2026-04-24",
    keywordsDE: "Erbschaft Türkei Deutschland, Immobilie in der Türkei geerbt, türkisches Erbrecht, Erbschein Türkei, Erbschaftsteuer Türkei, Nachlassspaltung Türkei Deutschland, Erbausschlagung Türkei, Pflichtteil Türkei, erben in der Türkei als Deutscher, Tenkis Davası Deutschland, Muris Muvazaası Erklärung, Erbengemeinschaft Türkei aufteilen, türkisches Testament anerkennen, Doppelbesteuerung Erbschaft Türkei",
    keywordsTR: "almanya türkiye miras hukuku, türkiye'de miras kaldı almanya, veraset ilamı almanya, tenkis davası almanya'dan, muris muvazaası almanya, miras reddi türkiye süresi, türkiye'deki mülkü almanya'dan satmak, izale-i şuyu almanya, veraset vergisi türkiye 2026, almanya'dan türkiye miras avukatı, miras ortaklığı çözümü, saklı pay ihlali dava",
    keywordsEN: "Turkish inheritance Germany, inheriting property Turkey Germany, Turkish inheritance law foreigners, Veraset İlamı how to get, Turkish inheritance tax 2026, Turkish forced heirship, Muris Muvazaası English, split estate Turkey Germany, reject Turkish inheritance, Turkish inheritance dispute, Tenkis Davası English, Turkish will Germany valid, Turkish inheritance certificate abroad, Power of Attorney Turkey inheritance",
    faqDE: [
      {
        question: "Welches Erbrecht gilt für eine Immobilie in der Türkei?",
        answer: "Für Immobilien in der Türkei gilt immer türkisches Erbrecht — unabhängig davon, ob der Erblasser Türke oder Deutscher war. Dieses sogenannte Belegenheitsprinzip (lex rei sitae) ergibt sich aus §§ 14 Abs. 2, 18 des deutsch-türkischen Konsularvertrags von 1929 und ist durch OLG-Rechtsprechung bestätigt (OLG Köln, Beschluss vom 21.02.2014, Az. 2 Wx 30/14). Für bewegliches Vermögen (Bankkonten, Fahrzeuge) gilt dagegen das Erbrecht des Heimatstaats des Erblassers."
      },
      {
        question: "Gilt der deutsche Erbschein in der Türkei?",
        answer: "Für Immobilien in der Türkei gilt der deutsche Erbschein nicht. Türkische Grundbuchämter akzeptieren ausschließlich einen türkischen Erbschein (Veraset İlamı). Für bewegliches Vermögen (Bankkonten) kann ein deutscher Erbschein mit Apostille ausreichen, in der Praxis verlangen türkische Banken jedoch häufig ebenfalls einen türkischen Erbschein. Sowohl türkischer als auch deutscher Erbschein können beantragt werden — ein Anwalt kann beide Verfahren aus Deutschland heraus führen."
      },
      {
        question: "Muss ich als Erbe in Deutschland türkische Erbschaftsteuer zahlen?",
        answer: "Ja. Wenn sich der Nachlass (Immobilien, Bankkonten) in der Türkei befindet, fällt in der Türkei Erbschaftsteuer an — unabhängig von der Staatsangehörigkeit des Erben. Die Steuererklärung muss innerhalb von 4–6 Monaten nach dem Erbfall beim zuständigen türkischen Finanzamt eingereicht werden. Erst nach Zahlung der Steuer stellt das Finanzamt die Unbedenklichkeitsbescheinigung aus, die für die Grundbuchumschreibung erforderlich ist."
      },
      {
        question: "Droht Doppelbesteuerung bei einer Erbschaft aus der Türkei?",
        answer: "Ja, das Risiko besteht. Deutschland und die Türkei haben kein Doppelbesteuerungsabkommen speziell für die Erbschaftsteuer. Das bestehende DBA von 2011 gilt nur für Einkommen- und Körperschaftsteuer. Als Abhilfe kann die in der Türkei gezahlte Erbschaftsteuer nach § 21 ErbStG auf die deutsche Erbschaftsteuer angerechnet werden — aber nur auf Antrag und nur bis zur Höhe der deutschen Steuer. Wichtig: Alle türkischen Steuerbescheide und Zahlungsbelege müssen apostilliert und beglaubigt übersetzt aufbewahrt werden."
      },
      {
        question: "Was ist Muris Muvazaası und kann man dagegen klagen?",
        answer: "Muris Muvazaası bezeichnet den Fall, dass der Erblasser sein Vermögen vor dem Tod zu Gunsten einzelner Erben oder Dritter übertragen hat — dabei eine tatsächlich gewollte Schenkung im Grundbuch als Kauf ausgewiesen wurde, um die übrigen Erben zu benachteiligen. Diese Klage unterliegt keiner Verjährungsfrist und kann nach dem Tod des Erblassers jederzeit erhoben werden. In Deutschland lebende Erben können diese Klage durch einen bevollmächtigten Anwalt ohne Reise in die Türkei führen."
      },
      {
        question: "Wie lange habe ich Zeit, eine türkische Erbschaft auszuschlagen?",
        answer: "Nach türkischem Recht (TMK Art. 605) beträgt die Frist zur Erbausschlagung 3 Monate ab Kenntnis vom Tod des Erblassers und der eigenen Erbenstellung. Diese Frist gilt auch für in Deutschland lebende Erben und wird in der Regel nicht verlängert. Die Ausschlagung muss beim zuständigen türkischen Friedensgericht (Sulh Hukuk Mahkemesi) beantragt werden — dies kann über einen Bevollmächtigten ohne persönliche Reise in die Türkei erfolgen."
      },
      {
        question: "Was ist eine Erbengemeinschaft in der Türkei und wie löst man sie auf?",
        answer: "Wenn mehrere Erben vorhanden sind, entsteht automatisch eine Erbengemeinschaft (Miras Ortaklığı). Für den Verkauf einer Immobilie ist die Zustimmung aller Miterben erforderlich. Verweigert ein Miterbe seine Zustimmung, kann jeder einzelne Miterbe eine Teilungsklage (İzale-i Şuyu) einreichen. Das Gericht ordnet dann entweder die physische Aufteilung oder — häufiger — den Zwangsverkauf und die anteilige Auszahlung des Erlöses an. Diese Klage kann in Deutschland lebenden Erben durch einen bevollmächtigten Anwalt erhoben werden."
      },
      {
        question: "Kann ich die türkische Immobilie aus Deutschland verkaufen?",
        answer: "Ja — vorausgesetzt, Sie haben eine ordnungsgemäß erstellte türkische Kaufvollmacht (Vekaletname). Diese wird beim türkischen Konsulat in Deutschland auf Türkisch ausgestellt und ist ohne Apostille sofort in der Türkei verwendbar. Wichtig: Eine beim deutschen Notar erstellte Generalvollmacht wird vom türkischen Grundbuchamt in der Regel nicht akzeptiert. Für den Verkauf einer geerbten Immobilie muss zudem zuvor die Erbschaftsteuer bezahlt und die Grundbuchumschreibung durchgeführt worden sein."
      }
    ],
    faqTR: [
      {
        question: "Türkiye'deki mirası Almanya'dan takip edebilir miyim?",
        answer: "Evet. Almanya'daki Türk konsolosluğuna giderek avukatınıza özel yetkili vekâletname düzenleyebilirsiniz. Avukatınız veraset ilamı alınması, tapu intikali, vergi beyannamesi ve dava süreçleri dahil tüm işlemleri Türkiye'ye gitmeden sizin adınıza yürütebilir. Doğru Kanzlei olarak UYAP avukat portalı üzerinden Türkiye'deki miras dosyalarınıza Mannheim ofisimizden doğrudan erişiyoruz."
      },
      {
        question: "Veraset ilamı nedir ve nasıl alınır?",
        answer: "Veraset ilamı (mirasçılık belgesi), kimin hangi oranda mirasçı olduğunu gösteren resmi belgedir. Türkiye'deki Sulh Hukuk Mahkemesi veya noterden alınır. Almanya'da yaşayan mirasçılar bizzat Türkiye'ye gitmeden, avukat aracılığıyla bu belgeyi aldırabilir. Türk vatandaşı olmayan mirasçılar (Alman vatandaşları) noter üzerinden değil, mahkeme kanalıyla başvurmalıdır."
      },
      {
        question: "Muris muvazaası nedir ve Almanya'dan dava açılabilir mi?",
        answer: "Muris muvazaası, miras bırakanın mirasçılarından mal kaçırmak amacıyla gerçekte bağışlamak istediği taşınmazı tapuda satış olarak göstermesidir. Bu dava zamanaşımına tabi değildir — miras bırakanın ölümünden sonra her zaman açılabilir. Almanya'da yaşayan mirasçılar konsolosluktan özel yetkili vekâletname düzenleyerek Türkiye'ye gitmeden bu davayı açabilir ve takip edebilir."
      },
      {
        question: "Tenkis davası nedir ve süresi ne zaman dolar?",
        answer: "Tenkis davası, miras bırakanın yaşarken veya vasiyetname ile saklı paylı mirasçıların zorunlu payını ihlal eden tasarruflarına karşı açılan davadır. Saklı payın ihlal edildiğini öğrenen tarihten itibaren 1 yıl, her hâlde vasiyetnamenin açılması veya diğer tasarruflarda mirasın açılmasından itibaren 10 yıl içinde açılmalıdır. Almanya'dan avukat aracılığıyla takip edilebilir."
      },
      {
        question: "Türkiye'deki mirası reddetmezsem ne olur?",
        answer: "Türk hukukuna göre mirası reddedilmedikçe otomatik olarak kabul edilmiş sayılır. Bu, miras bırakanın borçlarını da devraldığınız anlamına gelir. Reddi miras için ölümü ve mirasçılığı öğrenmeden itibaren 3 ay içinde Sulh Hukuk Mahkemesi'ne başvurmanız gerekir. Bu süre kaçırılırsa borçlardan şahsen sorumlu olunabilir. Almanya'da yaşayan mirasçılar bu başvuruyu konsolosluk aracılığıyla da yapabilir."
      },
      {
        question: "Türkiye'de veraset vergisi ne kadar? Almanya ile çifte vergi ödenir mi?",
        answer: "Türkiye'de veraset vergisi %1 ile %10 arasında değişir. 2026 yılı için füruğ ve eşten her birine isabet eden miras hissesinde 2.907.136 TL istisna uygulanır. Kritik bilgi: Türkiye ile Almanya arasında miras vergisi alanında çifte vergilendirmeyi önleme anlaşması bulunmamaktadır. Bu nedenle aynı miras hem Türkiye'de hem Almanya'da vergilendirilebilir; ancak Türkiye'de ödenen vergi Almanya'da mahsup edilebilir."
      },
      {
        question: "Mirasçılar arasında anlaşmazlık varsa ne yapılır?",
        answer: "Mirasçılar arasında miras malı paylaşımında uzlaşı sağlanamazsa, izale-i şuyu davası (ortaklığın giderilmesi) açılabilir. Bu dava, taşınmazın mahkeme kararıyla satışa çıkarılmasını ve satış bedelinin mirasçılar arasında paylaştırılmasını sağlar. Almanya'da yaşayan mirasçılar bu davayı avukat aracılığıyla Türkiye'ye gitmeden açabilir ve takip edebilir."
      },
      {
        question: "Almanya'da yapılan vasiyetname Türkiye'de geçerli midir?",
        answer: "Türkiye'deki taşınmaz mallar söz konusu olduğunda, Almanya'da düzenlenen vasiyetname Türk hukukuna göre değerlendirilir. Türkiye'deki gayrimenkul için her zaman Türk miras hukuku uygulanır (lex rei sitae ilkesi). Almanya'daki vasiyetname Türkiye'de kullanılmak isteniyorsa apostil ve yeminli Türkçe çeviri gereklidir. Her iki ülkede geçerli olacak vasiyetname için her iki hukuk sistemini kapsayan bir vasiyetname hazırlanması önerilir."
      }
    ],
    faqEN: [
      {
        question: "Which country's law governs a property inherited in Turkey?",
        answer: "For real estate located in Turkey, Turkish law always applies — regardless of the deceased's nationality or where they lived. This is the lex rei sitae principle, confirmed by the 1929 German-Turkish Consular Convention and by German court decisions (OLG Köln, 21 February 2014). For movable assets (bank accounts, vehicles), the law of the deceased's nationality applies. This split creates what lawyers call a 'divided estate', where two different legal systems govern the same inheritance."
      },
      {
        question: "Does a German probate certificate (Erbschein) work in Turkey?",
        answer: "No — not for real estate. Turkish land registry offices exclusively accept a Turkish Certificate of Inheritance (Veraset İlamı) for property title transfers. For bank accounts, a German Erbschein with apostille may suffice in theory, but in practice Turkish banks frequently require the Turkish certificate as well. Foreign heirs — including German nationals — must go through the Turkish court process to obtain a Veraset İlamı, since Turkish notaries cannot verify foreign family records."
      },
      {
        question: "Do I have to travel to Turkey to handle an inheritance?",
        answer: "No. With a properly drafted Power of Attorney (Vekaletname), issued at the Turkish consulate in Germany, your lawyer can handle the entire process in Turkey on your behalf — including obtaining the inheritance certificate, filing tax declarations, transferring the title deed, and managing court proceedings. You do not need to travel to Turkey."
      },
      {
        question: "How much is Turkish inheritance tax and when must it be paid?",
        answer: "Turkish inheritance tax (Veraset ve İntikal Vergisi) is progressive, ranging from 1% to 10% for close relatives. For 2026, the exemption for spouses and each child is 2,907,136 TL per person. Tax declarations must be filed within 4–8 months of the death, depending on where the deceased and heirs are located. For heirs living in Germany and a death occurring abroad, the deadline is typically 8 months. The title deed transfer cannot proceed until the tax is paid and a clearance certificate is obtained."
      },
      {
        question: "What is Muris Muvazaası and can I challenge it?",
        answer: "Muris Muvazaası (inheritance fraud / fraudulent conveyance) refers to the practice where the deceased transferred property to a favoured heir or third party disguised as a sale — when in reality no money changed hands, or the price was far below market value. This is done to deprive other heirs of their inheritance rights. Unlike the forced heirship claim (Tenkis Davası), a Muris Muvazaası claim has no statute of limitations — it can be brought at any time after the deceased's death. Heirs living in Germany can pursue this through an authorised lawyer without travelling to Turkey."
      },
      {
        question: "How long do I have to reject a Turkish inheritance?",
        answer: "Under Turkish Civil Code Article 605, the period to reject an inheritance is 3 months from learning of the death and your entitlement as an heir. This applies equally to heirs living in Germany. If you fail to reject within this period, the inheritance — including all debts — is automatically accepted. The rejection must be filed with the Turkish Civil Court of Peace (Sulh Hukuk Mahkemesi) and can be done through a lawyer without you needing to travel to Turkey."
      },
      {
        question: "What happens if the co-heirs cannot agree on selling or dividing the Turkish property?",
        answer: "When multiple heirs inherit jointly, they form a co-heir community (Miras Ortaklığı). Selling the property requires all heirs to agree. If one heir blocks the sale, any single heir can file a partition lawsuit (İzale-i Şuyu). The court will then either order a physical division of the property — which is rare for built properties — or a forced sale at public auction, with proceeds divided proportionally. This lawsuit can be initiated by a lawyer in Turkey without any heir travelling there."
      },
      {
        question: "Is a will made in Germany valid for Turkish property?",
        answer: "For Turkish real estate, Turkish law always applies regardless of any foreign will. A German will cannot change the applicable law for property located in Turkey, nor can it override the forced heirship shares guaranteed by Turkish law. A foreign will may be relevant for identifying heirs and, once apostilled and translated, can be submitted to Turkish courts. However, for comprehensive estate planning covering assets in both countries, a dual-jurisdiction will drafted by a lawyer familiar with both systems is strongly recommended."
      }
    ],
    ctaTitleDE: "Ihre türkische Erbschaft — handeln Sie bevor Fristen ablaufen",
    ctaTitleTR: "Türkiye'deki Miras Haklarınız — Süreleri Kaçırmadan Harekete Geçin",
    ctaTitleEN: "Your Turkish Inheritance — Act Before Deadlines Expire",
    ctaDescriptionDE: "Ihr nächster Schritt mit der Doğru Kanzlei — Ihrem Türkisches Erbrecht Spezialisten aus Mannheim:",
    ctaDescriptionTR: "Doğru Kanzlei ile bir sonraki adımınız — Mannheim'daki Türk Miras Hukuku uzmanınız:",
    ctaDescriptionEN: "Your next step with Doğru Kanzlei — your Turkish Inheritance Law specialist from Mannheim:"
  },
  {
    slug: "turkiye-ceza-davasi-tutuklama-karari-almanya-savunma",
    slugDE: "strafverfahren-tuerkei-haftbefehl-verteidigung-deutschland",
    slugTR: "turkiye-ceza-davasi-tutuklama-karari-almanya-savunma",
    titleDE: "Haftbefehl oder Anklage in der Türkei | Können Sie sich aus Deutschland verteidigen?",
    titleTR: "Türkiye'de Ceza Davası veya Tutuklama Kararı Var mı? Almanya'dan Savunmanızı Yürütebilir misiniz?",
    excerptDE: "Haftbefehl oder Strafverfahren in der Türkei? Erfahren Sie, wie Sie Ihre Verteidigung von Deutschland aus führen können, ohne in die Türkei reisen zu müssen.",
    excerptTR: "Türkiye'de hakkınızda ceza davası veya tutuklama kararı mı var? Almanya'dan Türkiye'ye gitmeden nasıl savunma yapabileceğinizi öğrenin.",
    contentDE: `**RECHTLICHER HINWEIS:** Dieser Artikel befasst sich ausschließlich mit dem türkischen Recht. Eine Beratung zum deutschen Recht findet in unserer Kanzlei nicht statt.

---

Hunderttausende türkische Staatsangehörige, die in Deutschland leben, sehen sich mitunter mit strafrechtlichen Ermittlungen oder Strafverfolgungsmaßnahmen in der Türkei konfrontiert – oft völlig unvorbereitet. Manchmal wohnt jemand seit Jahren hier, geht seinem Alltag nach, und weiß nicht einmal, dass in der Türkei ein Verfahren gegen ihn läuft.

Das liegt häufig an Zustellungsproblemen, nicht aktualisierten Adressen in der Türkei oder schlicht daran, dass keine Verbindung zu den türkischen Behörden mehr besteht. Ob Sie in Mannheim, Frankfurt, Berlin oder einer anderen Stadt in Deutschland leben – ein Strafverfahren in der Türkei kann sowohl Ihren rechtlichen Status dort als auch Ihren Aufenthaltstitel, Ihre Niederlassungserlaubnis oder Ihre Einbürgerung in Deutschland direkt gefährden.

Als bei der Ankara Barosu und der Rechtsanwaltskammer Karlsruhe (§207 BRAO) zugelassener Anwalt berät und vertritt Hasan Doğru Mandanten sowohl im türkischen Recht als auch in allen deutsch-türkischen grenzüberschreitenden Rechtsfragen – einschließlich der aufenthalts- und staatsangehörigkeitsrechtlichen Folgen türkischer Strafverfahren.

→ Wenn Sie sich auch über strafrechtliche Risiken in Bezug auf Erbschaft oder Vermögen informieren möchten: Lesen Sie unseren [Ratgeber zum deutsch-türkischen Erbrecht](/de/blog/erbrecht-leitfaden-tuerkei).

## Grundlagen des türkischen Strafrechts

Das türkische Strafrecht ist im Türkischen Strafgesetzbuch (TCK), Gesetz Nr. 5237, geregelt, das 2005 in Kraft getreten ist. Die strafprozessuale Seite regelt die Strafprozessordnung (CMK), Gesetz Nr. 5271.

Das türkische Strafverfahren gliedert sich im Wesentlichen in drei Phasen. Die erste Phase ist das Ermittlungsverfahren: Es wird von der Staatsanwaltschaft geleitet und umfasst Beweiserhebung, Vernehmungen sowie Entscheidungen über Untersuchungshaft. In der zweiten Phase, dem Hauptverfahren, wird die Anklageschrift beim Gericht eingereicht und die Hauptverhandlung beginnt. In der dritten Phase ergeht das Urteil – Verurteilung, Freispruch oder Strafaussetzung sind möglich – und dagegen kann Berufung sowie Revision beim Yargıtay eingelegt werden.

## Strafverfahren in der Türkei aus Deutschland führen

Die erste Frage, die sich stellt, lautet: Muss ich in die Türkei reisen? Die Antwort hängt von der Art des Verfahrens, seinem aktuellen Stand und dem rechtlichen Status des Beschuldigten ab.

Im türkischen Strafverfahren ist grundsätzlich die persönliche Anwesenheit des Beschuldigten bei den Verhandlungen vorgeschrieben. Allerdings erlaubt § 196 CMK unter bestimmten Voraussetzungen, dass der Beschuldigte durch seinen Anwalt vertreten wird. In manchen Fällen ist auch eine Aussage per Video- und Tonübertragung über das sogenannte SEGBİS-System möglich.

Avukat Hasan Doğru von der Doğru Kanzlei verfolgt Verhandlungen in der Türkei, greift über das UYAP-System direkt auf Verfahrensakten zu und empfängt offizielle Zustellungen über UETS — und vertritt Ihre Interessen vollständig aus Mannheim heraus, ohne dass Sie persönlich erscheinen müssen.

## Häufige Straftatbestände bei in Deutschland lebenden türkischen Staatsangehörigen

**Beleidigung und Verleumdung (TCK Art. 125–131):** Verfahren wegen Social-Media-Beiträgen, Messenger-Nachrichten und Online-Inhalten haben in den letzten Jahren deutlich zugenommen.
**Betrug und schwerer Betrug (TCK Art. 157–158):** Häufig im Zusammenhang mit Streitigkeiten aus Geschäftsbeziehungen.
**Drogenkonsum und -handel (TCK Art. 188–191):** Ein Bereich mit erheblichen Strafandrohungen – betroffen sind Personen, die während eines Türkeibesuchs festgenommen wurden oder wegen einer früheren Anschuldigung verfolgt werden.
**Bedrohung und Erpressung (TCK Art. 106–107):** Entstehen häufig aus familiären oder geschäftlichen Konflikten.
**Steuerhinterziehung und Wirtschaftsdelikte:** Relevant für Personen mit unternehmerischer Tätigkeit in der Türkei.
**Cyberkriminalität (TCK Art. 243–245):** Hacking, unberechtigter Datenzugriff und ähnliche Handlungen fallen hierunter.
**Häusliche Gewalt (TCK Art. 86):** Kommt häufig bei Streitigkeiten mit früheren Ehepartnern oder Familienmitgliedern in der Türkei vor.

## Das Zustellungsproblem: Das Risiko, unwissentlich verurteilt zu werden

Eines der kritischsten Probleme für in Deutschland lebende türkische Staatsangehörige ist die Frage der Zustellung. Wenn in der Türkei ein Verfahren eingeleitet wird, ist die Benachrichtigung der betroffenen Person durch förmliche Zustellung gesetzlich vorgeschrieben. In der Praxis kommt es dabei jedoch zu erheblichen Problemen.

Zustellungen an eine alte Adresse in der Türkei können als wirksam gelten, selbst wenn die Person längst im Ausland lebt. Nach § 21 des türkischen Zustellungsgesetzes (Tebligat Kanunu, Gesetz Nr. 7201) kann, wenn die Person nicht erreichbar ist, die Zustellung beim Nachbarn hinterlassen oder über den Dorfvorsteher (Muhtar) bewirkt werden. Das gilt rechtlich als wirksam – auch dann, wenn die betroffene Person davon tatsächlich nie erfahren hat.

Als wichtige Verteidigungsstrategie gilt: Wer im Ausland lebt und aufgrund einer fehlerhaften Zustellung nichts von seinem Verfahren wusste, kann nach § 40 CMK einen Antrag auf Wiedereinsetzung in den vorigen Stand stellen. Dass der Verteidiger dabei sofort handelt, ist für die Wahrung dieses Rechts entscheidend.

## Reisepass und Grenzrisiko: Was passiert, wenn Sie in die Türkei einreisen?

Wenn gegen Sie in der Türkei ein Haftbefehl besteht oder Ihre Daten im nationalen Fahndungssystem (GBT) erfasst sind, werden Sie bei der Einreise an der Grenze oder am Flughafen sofort identifiziert und festgehalten. Das passiert unabhängig davon, ob Sie einen deutschen oder einen türkischen Pass verwenden — die türkischen Grenzbehörden gleichen beide Pässe mit dem GBT-System ab.

Bevor Sie die Türkei besuchen, sollte über das UYAP-System oder das e-Devlet-Portal geprüft werden, ob Verfahren gegen Sie vorliegen. Avukat Hasan Doğru kann diese Abfrage direkt aus Mannheim für Sie durchführen. Darüber hinaus kann ein bestehender Haftbefehl unter bestimmten Voraussetzungen durch Ihren Anwalt beim zuständigen türkischen Gericht angefochten oder ausgesetzt werden — noch bevor Sie die Türkei betreten.

## Interpol Red Notice: Was passiert, wenn der Haftbefehl international wird?

Wenn ein türkisches Gericht einen Haftbefehl erlässt und die Person im Ausland lebt, besteht das Risiko, dass die türkischen Behörden Interpol einschalten und eine Red Notice beantragen. Eine Interpol Red Notice ist kein internationaler Haftbefehl im rechtlichen Sinne — sie verpflichtet Mitgliedsstaaten nicht zur Festnahme — aber sie erzeugt erheblichen Druck und schränkt die Reisefreiheit massiv ein.

Interpol verfügt über eine unabhängige Kontrollkommission (CCF). Bei dieser Kommission können Betroffene einen Antrag auf Löschung oder Sperrung der Red Notice stellen — insbesondere dann, wenn das zugrundeliegende Verfahren politisch motiviert ist, die rechtsstaatlichen Mindeststandards nicht erfüllt oder die Zustellung nachweislich fehlerhaft war.

Als bei der Ankara Barosu und der Rechtsanwaltskammer Karlsruhe (§207 BRAO) zugelassener Anwalt kann Hasan Doğru diese Verfahren sowohl auf türkischer als auch auf internationaler Ebene koordinieren. Je früher Sie handeln, desto besser.

## Rechte des Beschuldigten: Die wichtigsten Garantien nach der CMK

**Das Schweigerecht** ist in § 147 CMK verankert. Aussagen können als Beweise gegen Sie verwendet werden. Deshalb sollten Sie ohne anwaltliche Beratung keinerlei Angaben machen.
**Das Recht auf einen Verteidiger** ist in §§ 149 und 150 CMK geregelt. Jeder Beschuldigte hat das Recht, von einem Anwalt seiner Wahl vertreten zu werden. Gespräche mit dem Anwalt unterliegen der Vertraulichkeit.
**Das Recht auf ein faires Verfahren** ist durch Art. 36 der türkischen Verfassung und Art. 6 der EMRK garantiert. Es umfasst das Recht auf Verhandlung innerhalb angemessener Frist, vor einem unabhängigen Gericht, auf Konfrontation mit Belastungszeugen sowie auf die Möglichkeit, entlastende Beweise vorzulegen.
**Das Recht auf einen Dolmetscher** ist nach § 202 CMK vorgeschrieben: Wer kein Türkisch spricht oder es nicht ausreichend versteht, hat Anspruch auf einen kostenlosen Dolmetscher.

## Aussetzung der Urteilsverkündung (HAGB) und Strafaussetzung zur Bewährung

Die Aussetzung der Urteilsverkündung (HAGB) ist in § 231 CMK geregelt. Liegen bestimmte Voraussetzungen vor, kann das Gericht die Verkündung des Urteils für fünf Jahre aussetzen. Hält der Beschuldigte die Auflagen ein, wird das Verfahren eingestellt. Das Strafregister bleibt sauber — was besonders wichtig ist, um Auswirkungen auf den Aufenthaltstitel, die Niederlassungserlaubnis oder die Einbürgerung in Deutschland zu vermeiden.

Die Strafaussetzung zur Bewährung nach § 51 TCK kann bei Verurteilungen zu Freiheitsstrafen von bis zu zwei Jahren angewendet werden und verhindert, dass die Strafe tatsächlich im Gefängnis verbüßt werden muss.

## Täter-Opfer-Ausgleich und Einstellung des Verfahrens

Das in § 253 CMK geregelte Ausgleichsverfahren ist bei bestimmten Straftatbeständen anwendbar. Einigen sich die Parteien, wird das Verfahren eingestellt. Zu den ausgleichsfähigen Straftaten zählen unter anderem Beleidigung, einfache Körperverletzung, fahrlässige Körperverletzung sowie bestimmte Eigentumsdelikte.

## Berufung und Revision beim Yargıtay

Das türkische Rechtsmittelsystem im Strafverfahren ist zweistufig aufgebaut. Gegen das Urteil des erstinstanzlichen Gerichts kann beim regionalen Berufungsgericht (BAM) Berufung eingelegt werden. Gegen Entscheidungen des BAM wiederum ist Revision beim Yargıtay möglich — allerdings nur wegen Rechtsverletzungen, nicht wegen des Sachverhalts.

## Fernzugang zu türkischen Gerichten über UYAP

Das Nationale Justiz-Informationsnetzwerk (UYAP) ermöglicht es Anwälten, Schriftsätze elektronisch bei türkischen Gerichten einzureichen, Verfahrensakten online einzusehen und Verhandlungstermine in Echtzeit zu verfolgen. Dank der Integration mit UETS und KEP kann die Doğru Kanzlei türkische Mandanten direkt aus dem Mannheimer Büro heraus vor türkischen Gerichten vertreten.

## Türkische Verurteilung und Ihr Aufenthaltsrecht in Deutschland

Das deutsche Aufenthaltsgesetz (AufenthG) sieht in §§ 54 und 55 klare Regelungen vor, wann eine Straftat — auch eine im Ausland begangene — aufenthaltsrechtliche Konsequenzen hat.

Eine Niederlassungserlaubnis kann nach § 51 Abs. 1 Nr. 5 AufenthG erlöschen, wenn Sie sich länger als sechs Monate außerhalb Deutschlands aufhalten — etwa weil Sie in der Türkei inhaftiert sind. Darüber hinaus kann die Ausländerbehörde die Niederlassungserlaubnis nach § 52 AufenthG widerrufen, wenn aufgrund einer Verurteilung im Ausland schwerwiegende Gründe der öffentlichen Sicherheit vorliegen.

Nach § 54 Abs. 1 AufenthG besteht ein zwingender Ausweisungsgrund, wenn jemand wegen einer vorsätzlichen Straftat zu einer Freiheitsstrafe von mindestens zwei Jahren — ohne Bewährung — verurteilt wurde. Bei bestimmten schweren Delikten gilt dasselbe bereits ab einem Jahr.

Wer die deutsche Staatsbürgerschaft beantragt, muss nachweisen, dass er nicht wegen einer Straftat verurteilt wurde. Nach § 10 StAG führen Verurteilungen zu mehr als 90 Tagessätzen Geldstrafe oder zu Freiheitsstrafen von mehr als drei Monaten auf Bewährung zum Ausschluss. Eine türkische Verurteilung, die in Deutschland anerkannt wird, kann einen laufenden Einbürgerungsantrag sofort zum Scheitern bringen.

---

**Holen Sie sich jetzt eine kostenlose Ersteinschätzung für Ihr Strafverfahren in der Türkei | Mannheim: +49 176 6122 1210 | Ankara: +90 533 237 59 18 | hasandogru.de**

Avukat Hasan Doğru | Doğru Kanzlei | Ankara Barosu (Sicil No: 47068) & Rechtsanwaltskammer Karlsruhe (§207 BRAO)

*Dieser Artikel dient ausschließlich der allgemeinen Information und stellt keine Rechtsberatung dar. Für eine auf Ihren individuellen Fall zugeschnittene Einschätzung nehmen Sie bitte Kontakt mit uns auf. Die Kanzlei berät ausschließlich im türkischen Recht gemäß §207 BRAO.*`,
    contentTR: `**YASAL UYARI:** Bu makale yalnızca Türk hukukuna ilişkindir. Büromuzda Alman hukuku konusunda danışmanlık verilmemektedir.

---

Almanya'da yaşayan yüz binlerce Türk vatandaşı, zaman zaman Türkiye'de başlatılan ceza soruşturmaları veya kovuşturmalarıyla karşı karşıya kalmaktadır. Ve çoğu zaman bunu yıllarca bilmez.

Almanya'da hayatını sürdüren, işine gücüne bakan biri, Türkiye'de aleyhine açılmış bir dava bulunduğundan habersiz olabilmektedir. Bu durum; tebligat sorunları, Türkiye'deki adres güncellemelerinin yapılmamış olması ya da dijital bir bağlantının kurulamamış olmasından kaynaklanmaktadır. Mannheim'da, Frankfurt'ta, Berlin'de ya da Almanya'nın herhangi bir şehrinde yaşıyor olmanız fark etmez — Türkiye'deki bir ceza davası hem oradaki hukuki konumunuzu hem de buradaki oturma izninizi, Niederlassungserlaubnis'inizi veya vatandaşlık sürecinizi doğrudan etkileyebilir.

Bu rehberde şunları ele alacağız: Türk ceza yargılamasının temel aşamaları, sanık olarak haklarınız, tebligat sorunlarının hukuki boyutu, Almanya'dan nasıl savunma yürütebileceğiniz, Interpol Red Notice durumunda ne yapmanız gerektiği — ve bu süreçte Ankara Barosu ve Rechtsanwaltskammer Karlsruhe'ye (§207 BRAO) kayıtlı, her iki hukuk sistemine hâkim bir avukattan neden destek almanız gerektiği.

→ Miras veya mal varlığı üzerindeki cezai riskleri de araştırıyorsanız: [Türkiye-Almanya Miras Hukuku rehberimize](/tr/blog/miras-hukuku-rehberi) göz atın.

## Türk Ceza Hukukuna Genel Bakış

Türkiye'de ceza hukuku, 2005 yılında yürürlüğe giren 5237 sayılı Türk Ceza Kanunu (TCK) çerçevesinde düzenlenmektedir. Ceza yargılamasının usul boyutu ise 5271 sayılı Ceza Muhakemesi Kanunu (CMK) ile düzenlenmektedir.

Türk ceza yargılaması üç temel aşamadan oluşur. İlk aşama olan soruşturma; Cumhuriyet Savcısı tarafından yürütülmekte, delil toplama, ifade alma ve tutukluluk kararları bu aşamada gerçekleşmektedir. İkinci aşama olan kovuşturmada iddianame mahkemeye sunulmakta ve duruşmalar başlamaktadır. Üçüncü aşama olan karar aşamasında mahkûmiyet, beraat veya ceza erteleme gibi sonuçlara ulaşılmakta; bu kararlara karşı istinaf ve Yargıtay nezdinde kanun yoluna başvurulabilmektedir.

## Türkiye'deki Ceza Davasını Almanya'dan Yönetmek

Almanya'da yaşayan bir Türk vatandaşı olarak Türkiye'de ceza davasıyla karşılaştığınızda aklınıza gelen ilk soru şudur: Türkiye'ye gitmek zorunda mıyım? Bu sorunun yanıtı; davanın türüne, bulunduğu aşamaya ve hukuki statünüze göre değişmektedir.

Türk ceza yargılamasında kural olarak sanığın duruşmalara bizzat katılması gerekmektedir. Ancak CMK'nın 196. maddesi, belirli koşullar altında sanığın avukatı aracılığıyla temsil edilmesine imkân tanımaktadır. Bunun yanı sıra bazı hallerde ses ve görüntü nakli yoluyla — yani SEGBİS sistemiyle — ifade alınması da mümkündür.

Ankara Barosu ve Rechtsanwaltskammer Karlsruhe'ye (§207 BRAO) kayıtlı avukat olarak Doğru Kanzlei, Türkiye'deki duruşmaları takip eder, UYAP sistemi üzerinden dava dosyasına doğrudan erişir ve UETS aracılığıyla resmi tebligatları alır — Mannheim ofisinden, siz Türkiye'ye adım atmadan. Bu hem Türk hukuku hem de Almanya-Türkiye sınır ötesi etkiler bakımından kapsamlı temsil ve danışmanlık imkânı sağlar.

## Almanya'daki Türklerin Türkiye'de En Sık Karşılaştığı Suç Tipleri

**Hakaret ve iftira (TCK m.125–131):** Sosyal medya paylaşımları, mesajlaşma uygulamaları ve çevrimiçi içerikler nedeniyle açılan davalar son yıllarda ciddi biçimde artmıştır.
**Dolandırıcılık ve nitelikli dolandırıcılık (TCK m.157–158):** Ticari ilişkilerden doğan anlaşmazlıklarda sıklıkla karşımıza çıkmaktadır.
**Uyuşturucu kullanımı ve ticareti (TCK m.188–191):** Türkiye ziyareti sırasında gözaltına alınan ya da geçmişteki bir suçlamadan yargılanan kişileri etkileyen, ağır yaptırımlar öngören bir alan.
**Tehdit ve şantaj (TCK m.106–107):** Genellikle aile içi ya da ticari anlaşmazlıklardan kaynaklanmaktadır.
**Vergi kaçakçılığı ve ekonomik suçlar:** Türkiye'de ticari faaliyeti olan kişileri doğrudan ilgilendirmektedir.
**Bilişim suçları (TCK m.243–245):** Hacking, izinsiz veri erişimi gibi eylemler bu kapsamda değerlendirilmektedir.
**Aile içi şiddet (TCK m.86):** Türkiye'deki eski eş ya da aile üyeleriyle yaşanan anlaşmazlıklarda sıkça gündeme gelmektedir.

## Tebligat Sorunu: Habersizce Mahkûm Olma Riski

Almanya'da yaşayan Türk vatandaşları için en kritik sorunların başında tebligat meselesi gelmektedir. Türkiye'de dava açıldığında, ilgili kişinin tebligatla haberdar edilmesi yasal bir zorunluluktur. Ancak uygulamada işler her zaman bu şekilde yürümez.

Türkiye'deki eski adrese yapılan tebligatlar, kişi yurt dışında ikamet etmesine karşın hukuken geçerli sayılabilmektedir. 7201 sayılı Tebligat Kanunu'nun 21. maddesi uyarınca, kişiye ulaşılamaması durumunda tebligat kapı komşusuna bırakılabilmekte ya da muhtar aracılığıyla yapılabilmektedir. Tebligat size gerçek anlamda ulaşmamış olsa bile bu, hukuken geçerli kabul edilebilmektedir.

Aynı kanunun 25. maddesi yurt dışı tebligata ilişkin özel hükümler içermektedir. Yurt dışındaki Türk vatandaşlarına tebligat, ilgili devletin yetkili makamları aracılığıyla yapılmalıdır. Ancak uygulamada bu kurallara her zaman titizlikle uyulmamaktadır.

Önemli bir savunma stratejisi: Yurt dışında ikamet edip usule aykırı tebligat nedeniyle davadan haberdar olmayan kişiler, CMK'nın 40. maddesi kapsamında eski hale getirme başvurusunda bulunabilir. Avukatın derhal harekete geçmesi, bu hakkın kullanılması için hayati önem taşımaktadır.

## Pasaport ve Sınır Riski: Türkiye'ye Girişte Ne Olur?

Doğru Kanzlei'ye en sık ulaşan sorulardan biri şudur: Türkiye'ye gidebilir miyim — yoksa havalimanında mı tutuklanırım?

Bu endişe son derece yerindedir. Türkiye'de hakkınızda bir tutuklama kararı varsa ya da verileriniz ulusal sorgu sistemine (GBT) işlenmişse, sınırda veya havalimanında giriş yapar yapmaz tespit edilir ve gözaltına alınırsınız. Bu durum ister Alman pasaportu ister Türk pasaportu kullanın fark etmez — Türk sınır yetkilileri her iki pasaportu da GBT sistemi üzerinden sorgular.

En tehlikeli senaryo, hakkında dava açıldığından haberi olmayan kişilerin başına gelir. Bir yakınının cenazesine ya da aile ziyaretine gitmek için uçağa binen biri, havalimanında tutuklandığında ne hazırlığı ne de hukuki desteği olmaz.

Türkiye'ye seyahat etmeden önce UYAP sistemi veya e-Devlet üzerinden hakkınızda aktif bir dava ya da tutuklama kararı bulunup bulunmadığını mutlaka kontrol ettirin. En güvenli yol, bu sorguyu UYAP erişimi olan kayıtlı bir avukat aracılığıyla yaptırmaktır. Avukat Hasan Doğru bu sorgulamayı doğrudan Mannheim ofisinden sizin adınıza gerçekleştirebilmektedir. Bunun yanı sıra mevcut bir tutuklama kararı belirli koşullar altında avukatınız tarafından ilgili Türk mahkemesinde itiraz yoluyla durdurulabilir ya da kaldırılabilir — siz Türkiye'ye adım atmadan önce.

## Interpol Red Notice: Tutuklama Kararı Uluslararası Boyut Kazanırsa Ne Olur?

Türkiye'de tutuklama kararı çıkarılan ve yurt dışında yaşayan bir kişi için Türk makamlarının Interpol'e başvurarak Red Notice talep etme riski her zaman mevcuttur. Interpol Red Notice hukuki anlamda uluslararası bir tutuklama müzekkeresi değildir — üye devletleri yasal olarak gözaltına almakla yükümlü kılmaz. Ancak pratikte sonuçları son derece ağır olabilmektedir.

Red Notice'in somut anlamı şudur: İsminiz, dünya genelinde sınır yetkililerinin erişebildiği Interpol veritabanına kaydedilir. Pek çok ülkeye — bazı AB ülkeleri dahil — girişte sorgulama, sorguya çekme veya geçici gözaltı yaşanabilir. Almanya'da Interpol Red Notice tek başına otomatik tutuklama sebebi oluşturmaz; zira Alman iade hukukunun kendi gereklilikleri vardır. Bununla birlikte Red Notice, ciddi bir baskı unsuru yaratır ve seyahat özgürlüğünü büyük ölçüde kısıtlar.

Interpol Red Notice'e nasıl itiraz edilir? Interpol'ün bağımsız bir denetim organı vardır: Dosyaların Kontrolü için Interpol Komisyonu (CCF). Bu komisyona başvurarak Red Notice'in silinmesi veya askıya alınması talep edilebilir. Özellikle şu durumlarda başvuru güçlüdür: altta yatan davanın siyasi motivasyonlu olması, hukuk devleti asgari standartlarını karşılamaması ya da tebligatın hatalı yapıldığının belgelenebilmesi.

CCF önündeki süreç teknik ve karmaşıktır; eksiksiz dava belgesiyle desteklenmiş, gerekçeli bir başvuru hazırlanmasını gerektirmektedir. Ankara Barosu ve Rechtsanwaltskammer Karlsruhe'ye (§207 BRAO) kayıtlı avukat olarak Hasan Doğru, bu süreçleri hem Türk hukuku hem de uluslararası düzeyde koordineli biçimde yürütebilmektedir. Ne kadar erken harekete geçerseniz sonuç o kadar iyi olur.

## Sanık Haklarınız: CMK Kapsamında Temel Güvenceler

**Susma hakkı** CMK'nın 147. maddesiyle güvence altına alınmıştır. Verilen her ifade aleyhte delil olarak kullanılabilir. Bu nedenle hukuki danışmanlık almadan herhangi bir beyanda bulunmamak büyük önem taşımaktadır.
**Müdafi hakkı** CMK'nın 149. ve 150. maddelerinde düzenlenmiştir. Her sanık, seçtiği bir avukat tarafından temsil edilme hakkına sahiptir.
**Adil yargılanma hakkı** Anayasa'nın 36. maddesi ve AİHS'in 6. maddesiyle güvence altına alınmıştır. Bu hak; makul sürede yargılanma, bağımsız bir mahkeme önünde yargılanma, aleyhte tanıklarla yüzleşme ve lehte delil sunabilme güvencelerini kapsamaktadır.
**Tercüman hakkı** CMK'nın 202. maddesi uyarınca, Türkçe bilmeyen ya da yeterince anlamayan sanığa ücretsiz tercüman sağlanması zorunludur.

## Hükmün Açıklanmasının Geri Bırakılması (HAGB) ve Erteleme

CMK'nın 231. maddesiyle düzenlenen HAGB, belirli koşulların bir arada bulunması halinde mahkemenin verdiği mahkûmiyet kararının açıklanmasını beş yıl süreyle erteleyen bir kurumdur. Sanık bu süre zarfında denetimli serbestlik altında kalır; süreyi ihlalsiz tamamlarsa dava düşer. Sabıka kaydı temiz kalır — bu da Almanya'daki oturma izninizi, Niederlassungserlaubnis'inizi ya da vatandaşlık başvurunuzu tehdit edecek süreçlerin önüne geçer.

TCK'nın 51. maddesiyle düzenlenen erteleme ise iki yıl veya daha az hapis cezasına mahkûm edilen sanıklara uygulanabilmekte ve cezanın fiilen cezaevinde çekilmesinin önüne geçmektedir.

## Uzlaşma ve Kovuşturmadan Vazgeçme

CMK'nın 253. maddesiyle düzenlenen uzlaşma prosedürü belirli suç tipleri için uygulanabilmektedir. Savcılık, suçun uzlaşmaya elverişli olduğunu değerlendirdiğinde tarafları uzlaşma görüşmesine davet eder. Uzlaşma sağlandığında dava düşmektedir. Hakaret, basit yaralama, taksirle yaralama ve bazı mülkiyet suçları bu kapsamda değerlendirilebilmektedir.

## Temyiz ve Yargıtay

Türk ceza yargılamasında kanun yolları iki aşamalıdır. İlk derece mahkemesi kararına karşı Bölge Adliye Mahkemesi (BAM) nezdinde istinaf yoluna başvurulabilmektedir. BAM kararlarına karşı ise yalnızca hukuka aykırılık gerekçesiyle Yargıtay'a temyiz başvurusunda bulunulabilmektedir.

## UYAP ile Uzaktan Dava Takibi

Ulusal Yargı Ağı Bilişim Sistemi (UYAP), avukatlara Türkiye'deki mahkemelere elektronik ortamda dilekçe sunma, dava dosyasına çevrimiçi erişim ve duruşma tarihlerini gerçek zamanlı takip etme imkânı sağlamaktadır. UETS ve KEP sistemiyle entegre çalışan UYAP sayesinde Doğru Kanzlei, Mannheim ofisinden Türkiye'deki davaları fiziksel varlık gerekmeksizin doğrudan yürütebilmektedir.

## Almanya'daki Hukuki Statünüzü Korumak

Almanya'nın yabancılar hukukunu düzenleyen AufenthG, §§ 54 ve 55 kapsamında yurt dışında işlenen suçların da oturma hakkını nasıl etkileyebileceğini net biçimde ortaya koymaktadır.

Niederlassungserlaubnis (süresiz oturma izni), AufenthG § 51 f.1 n.5 uyarınca Almanya dışında altı aydan fazla kalınması halinde — örneğin Türkiye'de tutuklu bulunulması nedeniyle — kendiligenden geçersiz hale gelebilmektedir.

Süreli oturma izni (Aufenthaltserlaubnis) açısından ise AufenthG § 54 f.1 uyarınca, kişi kasıtlı bir suç nedeniyle ertelemesiz en az iki yıl hapis cezasına çarptırılmışsa zorunlu sınır dışı etme gerekçesi oluşmaktadır.

Vatandaşlık başvurusu açısından ise StAG § 10 uyarınca, 90 günlük adli para cezasını veya ertelemeli üç aylık hapis cezasını aşan mahkûmiyetler başvuruyu engellemektedir. Almanya'da tanınan bir Türk mahkûmiyeti, devam eden bir vatandaşlık başvurusunu anında çökertebilir.

---

**Türkiye'deki ceza davanız için ücretsiz ön değerlendirme alın | Mannheim: +49 176 6122 1210 | Ankara: +90 533 237 59 18 | hasandogru.de**

Avukat Hasan Doğru | Doğru Kanzlei | Ankara Barosu (Sicil No: 47068) & Rechtsanwaltskammer Karlsruhe (§207 BRAO)

*Bu makale genel bilgi amaçlıdır ve hukuki danışmanlık niteliği taşımaz. Durumunuza özgü değerlendirme için lütfen bizimle iletişime geçin. Büromuzda yalnızca Türk hukuku alanında danışmanlık verilmektedir.*`,
    category: "Ceza Hukuku",
    categoryDE: "Strafrecht",
    image: criminalDefenseTurkeyImg,
    dateDE: "20. April 2026",
    dateTR: "20 Nisan 2026",
    readTimeDE: "10 Min. Lesezeit",
    readTimeTR: "10 dk okuma",
    publishedAt: "2026-04-20",
    keywordsDE: "Türkei Strafverfahren Deutschland, Haftbefehl Türkei Deutschland, Interpol Red Notice Türkei, Reisepass Türkei Risiko, AufenthG Verurteilung",
    keywordsTR: "Türkiye ceza davası Almanya, tutuklama kararı Türkiye, Almanya'dan savunma, Interpol Red Notice Türkiye, pasaport sınır riski Türkiye",
    faqDE: [
      {
        question: "Wie erfahre ich, ob in der Türkei ein Strafverfahren gegen mich läuft?",
        answer: "Sie können über das UYAP-Bürgerportal oder das e-Devlet-Portal nach Verfahren gegen Sie suchen. Der sicherste Weg ist jedoch, über die Doğru Kanzlei eine vollständige UYAP-Abfrage durchführen zu lassen — direkt aus Mannheim."
      },
      {
        question: "Kann ein Strafverfahren in der Türkei meinen Aufenthaltstitel in Deutschland gefährden?",
        answer: "Ja. Verurteilungen, die bestimmte Schwellen nach § 54 AufenthG überschreiten, können den Aufenthaltstitel gefährden oder zum zwingenden Ausweisungsgrund werden. Bereits bei einer Verurteilung zu einem Jahr Freiheitsstrafen ohne Bewährung ist das Aufenthaltsrecht ernsthaft gefährdet."
      },
      {
        question: "Was ist eine Interpol Red Notice und was soll ich tun, wenn eine gegen mich besteht?",
        answer: "Eine Interpol Red Notice ist eine weltweite Fahndungsausschreibung auf Antrag türkischer Behörden. Sie kann bei der Interpol CCF angefochten werden — insbesondere wenn das Verfahren rechtsstaatlichen Mindeststandards nicht entspricht. Wenden Sie sich sofort an einen Anwalt."
      },
      {
        question: "Muss ich in die Türkei reisen?",
        answer: "Nicht für jedes Verfahren. Ihr Anwalt kann Sie in den meisten Fällen nach § 196 CMK vertreten oder eine Aussage per SEGBİS aus Deutschland erwirken."
      },
      {
        question: "Werde ich am türkischen Flughafen festgehalten, wenn gegen mich ein Haftbefehl besteht?",
        answer: "Ja — wenn Ihre Daten im türkischen Fahndungssystem GBT erfasst sind, werden Sie bei der Einreise sofort identifiziert, unabhängig davon ob Sie mit einem deutschen oder türkischen Pass reisen."
      }
    ],
    faqTR: [
      {
        question: "Türkiye'de hakkımda dava açılıp açılmadığını nasıl öğrenebilirim?",
        answer: "UYAP Vatandaş Portalı veya e-Devlet üzerinden sorgulama yapabilirsiniz. Ancak en güvenli yol, Doğru Kanzlei aracılığıyla kapsamlı bir UYAP araması yaptırmaktır — doğrudan Mannheim ofisinden."
      },
      {
        question: "Türkiye'deki ceza davası Almanya'daki oturma iznimi etkiler mi?",
        answer: "Evet. AufenthG § 54 kapsamında belirli eşikleri aşan mahkûmiyetler oturma izninizi tehlikeye atabilir ya da zorunlu sınır dışı etme gerekçesi oluşturabilir. Ertelemesiz bir yıl hapis cezasında bile oturma hakkınız ciddi tehlike altına girer."
      },
      {
        question: "Interpol Red Notice nedir ve hakkımda varsa ne yapmalıyım?",
        answer: "Interpol Red Notice, Türk makamlarının talebiyle düzenlenen dünya genelinde bir arama kaydıdı. Davanın hukuk devleti standartlarını karşılamaması veya tebligatın hatalı yapıldığının kanıtlanması durumunda Interpol CCF'ye itiraz başvurusunda bulunulabilir. Hemen bir avukata başvurun."
      },
      {
        question: "Türkiye'ye gitmek zorunda mıyım?",
        answer: "Her dava için değil. Avukatınız çoğu durumda CMK m.196 kapsamında sizi temsil edebilir ya da SEGBİS aracılığıyla uzaktan ifade vermenizi sağlayabilir."
      },
      {
        question: "Türkiye'ye gidersem havalimanında tutuklanır mıyım?",
        answer: "Hakkınızda GBT sistemine işlenmiş bir tutuklama kararı varsa evet — ister Alman ister Türk pasaportu kullanın. Türkiye'ye seyahat etmeden önce mutlaka UYAP üzerinden bir avukat aracılığıyla kontrol ettirin."
      }
    ]
  },
  {
    slug: "almanya-bosanma-tanima-tenfiz-davasi-rehberi",
    slugDE: "deutschland-scheidung-anerkennung-tuerkei-tanima-tenfiz",
    slugTR: "almanya-bosanma-tanima-tenfiz-davasi-rehberi",
    titleDE: "In Deutschland geschieden – Was jetzt in der Türkei? Der vollständige Leitfaden zu Tanıma & Tenfiz (2026)",
    titleTR: "Almanya'da Boşandım, Türkiye'de Tanıma Tenfiz Davası Nasıl Açılır? (2026 Güncel Rehber)",
    excerptDE: "Anerkennung deutscher Scheidungsurteile in der Türkei (Tanıma ve Tenfiz). Ein umfassender Leitfaden zu Personenstand, Vermögensaufteilung, Sorgerecht und Unterhalt.",
    excerptTR: "Almanya'da boşanan Türk vatandaşları için Türkiye'de tanıma ve tenfiz davası rehberi. Nüfus kaydı, miras hakları, mal paylaşımı ve velayet süreçleri.",
    contentDE: `**RECHTLICHER HINWEIS:** Dieser Artikel befasst sich ausschließlich mit dem türkischen Recht. Eine Beratung zum deutschen Recht findet in unserer Kanzlei nicht statt.

---

Sie sind in Deutschland geschieden. Das Scheidungsurteil liegt vor, die Sache scheint erledigt. Dann, Monate später, stellen Sie bei einem Behördengang in der Türkei fest: **In der Türkei gelten Sie offiziell noch als verheiratet.**

Das ist kein Einzelfall. Hunderttausende türkischstämmige Menschen in Deutschland wissen nicht, dass ein deutsches Scheidungsurteil in der Türkei **nicht automatisch gilt**. Um Ihren Personenstandsstatus in der Türkei zu aktualisieren, erneut heiraten zu können, Vermögen zu regeln, Unterhaltsansprüche durchzusetzen oder Sorgerechtsfragen zu klären, ist ein gesondertes Anerkennungsverfahren vor einem türkischen Gericht erforderlich — das sogenannte **Tanıma ve Tenfiz**-Verfahren.

Dieser Leitfaden erklärt Ihnen als Person mit Wohnsitz in Deutschland umfassend, wie Sie dieses Verfahren vollständig von hier aus durchführen können — **ohne Reise in die Türkei** — und was bei Vermögensaufteilung, Sorgerecht und Unterhalt zu beachten ist.

---

## Tanıma vs. Tenfiz: Was ist der Unterschied?

Diese beiden Begriffe werden häufig verwechselt, und die falsche Einschätzung kann dazu führen, dass die falsche Klage erhoben wird — mit entsprechendem Rechtsverlust.

### Tanıma (Anerkennung)

Tanıma bedeutet, dass das deutsche Urteil in der Türkei als rechtskräftig anerkannt wird — es erlangt damit die gleiche Wirkung wie ein türkisches Gerichtsurteil. Wenn Ihr Scheidungsurteil **ausschließlich die Scheidung** ausspricht und keinerlei vollstreckbare Regelungen zu Sorgerecht, Unterhalt oder Schadensersatz enthält, ist ein Tanıma-Verfahren ausreichend. Das Ergebnis: Ihr Personenstand wird in der Türkei auf „geschieden" geändert.

### Tenfiz (Vollstreckbarerklärung)

Tenfiz geht einen Schritt weiter. Es ermöglicht, dass das ausländische Urteil in der Türkei **vollstreckt** werden kann. Wenn das deutsche Urteil neben der Scheidung auch Regelungen zu Unterhalt, Sorgerecht, Schadensersatz oder Vermögensaufteilung enthält, müssen diese Regelungen durch Tenfiz in der Türkei vollstreckbar gemacht werden.

Ohne Tenfiz kann ein Unterhaltsurteil in der Türkei nicht vollstreckt werden. Ein Sorgerechtsbeschluss wird türkischen Behörden gegenüber nicht anerkannt. Eine Vermögensregelung bleibt wirkungslos.

### Was passiert in der Praxis?

Die meisten deutschen Scheidungsurteile enthalten sowohl die Scheidung als auch Regelungen zu Unterhalt, Sorgerecht oder Vermögen. Ihr Anwalt wird daher in der Regel beide Verfahren gemeinsam beantragen. Welche Klage die richtige ist, hängt stets vom konkreten Inhalt Ihres Urteils ab und muss individuell bewertet werden.

---

## Was passiert, wenn Sie nichts unternehmen?

Die Konsequenzen können weit über eine formale Unannehmlichkeit hinausgehen:

**Personenstand:** In der Türkei gelten Sie weiterhin als verheiratet. Eine erneute Heirat ist nicht möglich. Wichtig: Das deutsche Standesamt kann bei einer erneuten Heirat eine türkische Ehefähigkeitsbescheinigung verlangen — wenn Sie in der Türkei noch als verheiratet geführt werden, erhalten Sie diese nicht.

**Erbrecht:** Ihr Ex-Partner bleibt in der Türkei gesetzlicher Erbberechtigter. Sollten Sie versterben, können Ihre Immobilien, Bankkonten und sonstigen Vermögenswerte in der Türkei an diese Person fallen. Es gibt dokumentierte Fälle, in denen Ex-Partner einen Erbschein (Veraset ilamı) erlangt und damit Vermögen übertragen haben.

**Vermögen in der Türkei:** Wenn Sie Immobilien, Grundstücke oder Bankkonten in der Türkei besitzen, kann Ihr Ex-Partner Ansprüche darauf geltend machen. Tapu Müdürlüğü (Grundbuchamt) und Banken akzeptieren ohne abgeschlossenes Tanıma-Tenfiz-Verfahren keine ausländischen Gerichtsurteile.

**Unterhalt und Sorgerecht:** Ein deutsches Unterhaltsurteil ist in der Türkei ohne Tenfiz nicht vollstreckbar. Sorgerechtsbeschlüsse werden von türkischen Behörden nicht anerkannt. Das bedeutet: Ihr Ex-Partner kann sich in der Türkei faktisch über das Urteil hinwegsetzen.

**Kinder:** Ohne anerkannten Sorgerechtsbeschluss kann es bei Reisepässen, Schulanmeldungen und Reisegenehmigungen für Ihre Kinder in der Türkei zu erheblichen bürokratischen Problemen kommen.

---

## Welche Dokumente werden benötigt?

Das ist die häufigste praktische Hürde für Menschen, die in Deutschland leben. Folgende Unterlagen aus Deutschland benötigt Ihr türkischer Anwalt:

### 1. Scheidungsurteil (Scheidungsbeschluss)

Das Original des Scheidungsurteils des zuständigen deutschen Familiengerichts, mit Stempel and Originalunterschrift. Eine Kopie oder ein Ausdruck aus dem Internet wird nicht akzeptiert. Sie müssen eine beglaubigte Ausfertigung beim Gericht anfordern.

### 2. Rechtskraftvermerk

Dies ist das wichtigste und am häufigsten übersehene Dokument — und für viele türkische Anwälte ohne Deutschland-Erfahrung unbekannt. Der Rechtskraftvermerk ist der amtliche Nachweis, dass das Urteil nicht mehr angefochten werden kann — also rechtskräftig ist. Türkische Gerichte akzeptieren das Scheidungsurteil ohne diesen Vermerk nicht, da sie die Rechtskraft als Verfahrensvoraussetzung prüfen müssen.

Den Rechtskraftvermerk erhalten Sie beim Familiengericht, das das Scheidungsurteil erlassen hat. Er wird in der Regel gegen eine Gebühr auf einer separaten Seite oder auf dem Urteil selbst ausgestellt.

### 3. Apostille

Da Deutschland dem Haager Übereinkommen zur Befreiung ausländischer öffentlicher Urkunden von der Legalisation angehört, können Dokumente mit einer Apostille versehen werden. Die Apostille bestätigt die Echtheit des Dokuments und ermöglicht seine offizielle Anerkennung in der Türkei.

In Baden-Württemberg — also wenn Sie in Mannheim oder Umgebung leben — wird die Apostille beim Oberlandesgericht Karlsruhe beantragt. In anderen Bundesländern ist die zuständige Behörde unterschiedlich (z. B. Regierungspräsidium oder Oberlandesgericht).

### 4. Beglaubigte türkische Übersetzung

Alle Dokumente müssen von einem in der Türkei zugelassenen, vereidigten Übersetzer ins Türkische übersetzt und notariell beglaubigt werden. Diese Übersetzung kann in der Türkei angefertigt werden; die Dokumente können postalisch oder digital übermittelt werden.

### 5. Vollmacht (Vekâletname)

Um das Verfahren ohne persönliche Anwesenheit in der Türkei führen zu können, erteilen Sie Ihrem Anwalt eine notarielle Vollmacht, die ausdrücklich die Befugnis zur Tanıma ve Tenfiz enthält. Diese Vollmacht kann bei einem deutschen Notar errichtet werden — zum Beispiel in Mannheim. Wichtig: Die Vollmacht muss explizit die Begriffe „Tanıma ve Tenfiz davası" enthalten; eine allgemeine Prozessvollmacht kann von einzelnen Gerichten als unzureichend betrachtet werden.

---

## Schritt für Schritt: So läuft das Verfahren ab

### Schritt 1 — Dokumente beschaffen

Sie fordern beim zuständigen deutschen Familiengericht das Scheidungsurteil (beglaubigte Ausfertigung) und den Rechtskraftvermerk an. Anschließend lassen Sie die Apostille beim zuständigen Oberlandesgericht anbringen. Dieser Schritt dauert je nach Gerichtsauslastung einige Wochen.

### Schritt 2 — Vollmacht beim deutschen Notar

Sie erteilen Ihrem türkischen Anwalt beim deutschen Notar eine Vollmacht. In Mannheim und Umgebung ist dies problemlos möglich. Eine Reise in die Türkei ist nicht erforderlich.

### Schritt 3 — Beglaubigte Übersetzung

Die Unterlagen werden durch einen in der Türkei zugelassenen vereidigten Übersetzer ins Türkische übersetzt und notariell beglaubigt.

### Schritt 4 — Klageerhebung

Ihr Anwalt erhebt beim zuständigen türkischen Familiengericht Klage auf Anerkennung (Tanıma) und/oder Vollstreckbarerklärung (Tenfiz). Haben Sie keinen festen Wohnsitz in der Türkei, kann die Klage bei den Familiengerichten in Istanbul, Ankara oder İzmir erhoben werden.

### Schritt 5 — Zustellungsphase

Die Zustellung an die Gegenseite ist die zeitaufwendigste Phase des Verfahrens. Ist die Adresse der Gegenseite bekannt und sind beide Parteien anwaltlich vertreten, kann diese Phase in wenigen Wochen abgeschlossen sein. Ist die Adresse unbekannt oder weigert sich die Gegenseite, die Zustellung anzunehmen, kann das Verfahren erheblich verlängert werden. Die korrekte Angabe der Zustelladresse ist daher von entscheidender Bedeutung.

### Schritt 6 — Verhandlung und Urteil

Ihr Anwalt nimmt an allen Verhandlungen für Sie teil. Eine persönliche Anwesenheit in der Türkei ist nicht erforderlich.

### Schritt 7 — Personenstandsänderung

Nach Rechtskraft des Urteils wird das Standesamt (Nüfus Müdürlüğü) in der Türkei informiert und Ihr Personenstand auf „geschieden" geändert.

**Durchschnittliche Dauer:** Bei vollständigen Unterlagen und anwaltlicher Vertretung beider Parteien in der Regel **3 bis 6 Monate.** Bei Zustellungsproblemen kann sich das Verfahren auf bis zu 12 Monate verlängern.

---

## Die Standesamt-Alternative: Geht es auch ohne Gericht?

Durch eine Gesetzesänderung im Jahr 2017 (Ergänzung des türkischen Personenstandsgesetzes Nr. 5490) ist es unter bestimmten Voraussetzungen möglich, die Anerkennung einer ausländischen Scheidung **ohne Gerichtsverfahren** direkt beim türkischen Standesamt (Nüfus Müdürlüğü) oder über das türkische Konsulat zu beantragen. Das ist eine wichtige Erleichterung, die viele nicht kennen.

### Wann ist dieser Weg möglich?

Dieser Weg steht offen, wenn **alle** folgenden Voraussetzungen erfüllt sind:

- Das ausländische Urteil enthält **ausschließlich die Scheidung** — keine vollstreckbaren Regelungen zu Unterhalt, Sorgerecht oder Schadensersatz
- **Beide Parteien beantragen gemeinsam** die Eintragung beim Standesamt
- Alle erforderlichen Dokumente (apostilliertes Scheidungsurteil, Rechtskraftvermerk, beglaubigte Übersetzung) liegen vollständig vor

### Wann funktioniert dieser Weg nicht?

In folgenden Fällen ist der Gerichtsweg zwingend:

- Die Gegenseite ist nicht kooperativ oder verweigert den gemeinsamen Antrag
- Das Urteil enthält Regelungen zu Unterhalt, Sorgerecht, Schadensersatz oder Vermögen
- Der Antrag beim Standesamt wird abgelehnt (dann bleibt nur der Klageweg)

### Antrag über das türkische Konsulat in Deutschland

Für in Deutschland lebende Personen besteht auch die Möglichkeit, den Antrag über das türkische Generalkonsulat (z. B. in Frankfurt, Stuttgart oder Köln) zu stellen, sofern alle Voraussetzungen erfüllt sind. Auch hierbei ist anwaltliche Begleitung empfehlenswert, um Fehler und Ablehnungen zu vermeiden.

---

## Vermögensaufteilung: Was passiert mit Immobilien in der Türkei?

Viele in Deutschland lebende Türken besitzen Immobilien, Grundstücke oder andere Vermögenswerte in der Türkei. Die Regelung dieser Vermögenswerte nach einer Scheidung ist eng mit dem Tanıma-Tenfiz-Verfahren verknüpft.

### Das deutsche Gericht hat eine Vermögensregelung getroffen

Hat das deutsche Familiengericht neben der Scheidung auch eine Vermögensaufteilung beschlossen, muss diese Regelung durch **Tenfiz** in der Türkei vollstreckbar gemacht werden. Ohne Tenfiz werden weder das Grundbuchamt (Tapu Müdürlüğü) noch Banken eine Übertragung oder sonstige Verfügung auf Basis des deutschen Urteils vornehmen. Selbst wenn das Urteil die Übertragung einer türkischen Immobilie anordnet, ist dies ohne Tenfiz in der Türkei nicht durchsetzbar.

### Das deutsche Gericht hat keine Vermögensregelung für die Türkei getroffen

Hat das deutsche Gericht nur die Scheidung ausgesprochen und keine Regelung für in der Türkei befindliche Vermögenswerte getroffen, ist in der Türkei ein separates **Güterrechtsverfahren** (Mal rejiminin tasfiyesi davası) erforderlich. Dieses setzt voraus, dass die Scheidung zunächst durch Tanıma in der Türkei anerkannt wurde.

Wichtiger Zeitpunkt: Bei der türkischen Vermögensaufteilung kommt es auf den **Zeitpunkt der Klageerhebung in Deutschland** an — also auf das Datum, an dem das deutsche Scheidungsverfahren eingeleitet wurde. Denn nur die bis zu diesem Datum erworbenen Vermögenswerte fallen in den Aufteilungsbereich. Je später Sie die Tanıma-Klage in der Türkei erheben, desto mehr kann dieser Zeitraum zu Ihrem Nachteil verschoben wirken.

### Einstweilige Verfügung: Kann Ihr Ex-Partner Immobilien in der Türkei verkaufen?

Wenn Sie befürchten, dass die Gegenseite türkische Immobilien veräußert, bevor das Verfahren abgeschlossen ist, können Sie beim türkischen Gericht eine **einstweilige Verfügung** (İhtiyati Tedbir) beantragen. Diese bewirkt, dass ein Verfügungsverbot im Grundbuch eingetragen wird, das Verkauf, Übertragung und Belastung der Immobilie verhindert. Gerade wenn die Gegenseite in der Türkei lebt, ist diese Sicherungsmaßnahme oft dringend geboten.

---

## Sorgerecht: Gilt der deutsche Sorgerechtsbeschluss in der Türkei?

Wenn Kinder im Spiel sind, gewinnt das Tanıma-Tenfiz-Verfahren eine besondere Dringlichkeit.

### Anerkennung des deutschen Sorgerechtsbeschlusses

Ein deutscher Sorgerechtsbeschluss — ob alleiniges oder gemeinsames Sorgerecht — gilt in der Türkei nicht automatisch. Ohne Tenfiz wird er von türkischen Behörden nicht berücksichtigt. Das hat konkrete Folgen:

- Reisepässe für das Kind können in der Türkei ohne Zustimmung beider Elternteile nicht ausgestellt werden
- Auslandsreisen des Kindes von der Türkei aus setzen die Einwilligung beider Eltern voraus
- Es besteht das Risiko, dass der andere Elternteil das Kind in der Türkei zurückhält

### Gemeinsames Sorgerecht

In Deutschland ist gemeinsames Sorgerecht die Regel. Auch ein solcher Beschluss kann durch Tenfiz in der Türkei wirksam gemacht werden, sodass die Rechte beider Elternteile bei türkischen Behörden geschützt sind.

### Internationale Kindesentführung

Wenn ein Elternteil das Kind ohne Zustimmung des anderen nach Deutschland bringt oder in der Türkei zurückhält, ist dies ein Fall von internationaler Kindesentführung. Sowohl Deutschland als auch die Türkei sind Vertragsstaaten des Haager Übereinkommens über die zivilrechtlichen Aspekte internationaler Kindesentführung (HKÜ). In solchen Fällen ist sofortiges anwaltliches Handeln erforderlich.

---

## Unterhalt: Deutsches Unterhaltsurteil in der Türkei vollstrecken

Hat das deutsche Gericht Unterhaltszahlungen angeordnet und hat Ihr Ex-Partner Vermögen oder Einkommen in der Türkei, können Sie dieses Urteil in der Türkei vollstrecken — aber **nur nach Tenfiz.**

### Welche Unterhaltsformen können vollstreckt werden?

- **Ehegattenunterhalt** (Yoksulluk nafakası): Unterhalt, der dem geschiedenen Ehegatten zugesprochen wurde
- **Kindesunterhalt** (İştirak nafakası): Unterhalt für minderjährige Kinder

Der **vorläufige Unterhalt** während des laufenden Scheidungsverfahrens (Tedbir nafakası) kann hingegen nicht Gegenstand des Tenfiz sein, da er nur während des schwebenden Verfahrens gilt und nicht nach Rechtskraft der Scheidung.

### Was passiert bei Nichtzahlung nach Tenfiz?

Nach Erlangung des Tenfiz-Urteils kann über ein türkisches Vollstreckungsgericht (İcra Müdürlüğü) die Zwangsvollstreckung beantragt werden. Verfügt Ihr Ex-Partner über türkische Bankkonten, ein Gehalt oder Immobilien, können diese gepfändet werden. Das türkische Recht sieht bei beharrlicher Nichtzahlung von Unterhalt auch **Beugehaft** (Tazyik hapsi) vor — ein ernstzunehmendes Druckmittel.

### Ex-Partner ist nach Türkei gezogen oder geflohen

Dies ist eine häufige Konstellation unter in Deutschland lebenden Türken. Wenn Ihr Ex-Partner nach der Scheidung in die Türkei gezogen ist oder das Land verlassen hat, ist der Weg über Tenfiz und anschließende Zwangsvollstreckung in der Türkei der richtige. Handeln Sie in diesen Fällen zügig: Je früher die Tenfiz-Klage erhoben und eine einstweilige Verfügung beantragt wird, desto geringer das Risiko eines Vermögensentzugs.

---

## Müssen Sie für dieses Verfahren in die Türkei reisen?

**Nein.** Das ist einer der größten Vorteile, wenn Sie in Deutschland leben.

Mit einer Vollmacht, die Sie beim deutschen Notar erteilen, kann Ihr türkischer Anwalt das gesamte Verfahren in Ihrem Namen führen. Sie müssen an keiner Verhandlung persönlich teilnehmen.

Wir sind als im UYAP-System registrierte Anwälte in der Lage, Ihre türkischen Gerichtsverfahren in Echtzeit aus Deutschland zu überwachen. Verhandlungstermine, Dokumentenstatus, Zustellungsfortschritt — all das beobachten wir laufend, während Sie in Mannheim oder anderswo in Deutschland Ihrem Alltag nachgehen.

---

## Was uns von türkischen Kanzleien unterscheidet

Wenn Sie eine Kanzlei beauftragen, die ausschließlich in der Türkei tätig ist, können folgende Probleme auftreten:

- Mangelnde Kenntnis des deutschen Dokumentensystems: Was ist der Rechtskraftvermerk? Wie beantragt man die Apostille in Baden-Württemberg? Wie wird eine Vollmacht beim deutschen Notar korrekt errichtet? Diese praktischen Details sind von der Türkei aus schwer zu überblicken.
- Kommunikationsbarrieren: Türkischsprachige Korrespondenz, Zeitverschiebung, verzögerte Rückmeldungen, erschwerte Rückfragen.
- Fehlende oder falsche Dokumente führen zur Verlängerung oder Abweisung der Klage.

**Unser Büro in Mannheim bedeutet:**

- **Wir begleiten den deutschen Dokumentenprozess aktiv.** Welche Unterlagen von welchem Gericht, wo die Apostille beantragt wird, wie die Vollmacht beim deutschen Notar korrekt formuliert wird — das klären wir gemeinsam, auf Deutsch oder Türkisch.
- **Doppelte Zulassung.** Wir sind Mitglied der Rechtsanwaltskammer Karlsruhe (§207 BRAO) sowie der Anwaltskammer Ankara. Wir vertreten Sie direkt vor türkischen Gerichten — ohne Zwischenhändler, ohne Mehrkosten durch Kooperationspartner.
- **UYAP-Zugang in Echtzeit.** Wir überwachen den Stand Ihrer türkischen Gerichtsverfahren direkt aus Deutschland — Verhandlungstermine, Zustellungsstatus, Entscheidungen.
- **Deutsch und Türkisch.** Wir kommunizieren fließend in beiden Sprachen. Kein Übersetzungsaufwand, keine Missverständnisse.
- **Über 70 Google-Bewertungen, 5,0 Sterne.** Die Erfahrungen unserer Mandanten sprechen für sich.

---

## Häufig gestellte Fragen

**Ich bin in Deutschland geschieden, gelte aber in der Türkei noch als verheiratet. Was muss ich tun?**
Sie müssen beim türkischen Familiengericht eine Tanıma-Klage erheben. Das ist kein neues Scheidungsverfahren, sondern ein eigenständiges Verfahren zur Anerkennung des deutschen Urteils. Eine Reise in die Türkei ist nicht erforderlich — eine notarielle Vollmacht genügt.

**Muss mein Ex-Partner am Verfahren teilnehmen?**
Nein. Das Verfahren kann einseitig eingeleitet werden. Die Gegenseite wird zugestellt; aktive Mitwirkung ist nicht erforderlich. Sind beide Parteien einverstanden und enthält das Urteil nur die Scheidung, kann alternativ der Standesamt-Weg geprüft werden.

**Wie lange dauert das Verfahren?**
Bei vollständigen Unterlagen und anwaltlicher Vertretung beider Parteien durchschnittlich 3–6 Monate. Zustellungsproblemen kann das Verfahren auf bis zu 12 Monate verlängern.

**Wo erhalte ich den Rechtskraftvermerk?**
Beim Familiengericht, das das Scheidungsurteil erlassen hat. Sie beantragen ihn schriftlich, in der Regel gegen eine geringe Gebühr. Teilen Sie dem Gericht mit, dass der Vermerk für ein internationales Anerkennungsverfahren in der Türkei benötigt wird — dann wird die Apostille in der Regel direkt miterstellt oder empfohlen.

**Kann ich die Anerkennung über das Standesamt ohne Gericht erledigen?**
In bestimmten Fällen ja — wenn das Urteil ausschließlich die Scheidung ausspricht und beide Parteien gemeinsam beantragen. Enthält das Urteil Regelungen zu Unterhalt, Sorgerecht oder Vermögen, oder ist die Gegenseite nicht kooperativ, ist der Gerichtsweg zwingend.

**Mein Ex-Partner lebt in der Türkei und zahlt keinen Unterhalt. Was kann ich tun?**
Sie benötigen zunächst ein Tenfiz-Urteil in der Türkei. Danach kann über das türkische Vollstreckungsgericht die Zwangsvollstreckung beantragt werden — Pfändung von Bankkonten, Gehalt oder Immobilien. Bei beharrlicher Zahlungsverweigerung droht nach türkischem Recht Beugehaft.

**Ich war mit einem deutschen Staatsbürger verheiratet. Gilt das auch für mich?**
Ja, wenn Sie die türkische Staatsangehörigkeit besitzen oder Inhaber eines Mavi Kart sind. Wenn Sie in Deutschland erneut heiraten möchten, kann das Standesamt eine türkische Ehefähigkeitsbescheinigung verlangen — und dafür müssen Sie in der Türkei als geschieden eingetragen sein.

**Mein Ex-Partner könnte die Immobilie in der Türkei verkaufen. Was kann ich tun?**
Beantragen Sie beim türkischen Gericht eine einstweilige Verfügung (İhtiyati Tedbir). Diese bewirkt ein Verfügungsverbot im Grundbuch und verhindert Verkauf oder Belastung der Immobilie, solange das Verfahren läuft.

**Ich bin Mavi Kart-Inhaber, aber kein türkischer Staatsangehöriger mehr. Gilt das für mich?**
Ja. Das Tanıma-Tenfiz-Verfahren ist auch für Mavi Kart-Inhaber relevant, insbesondere wenn Sie wieder heiraten möchten oder Vermögen in der Türkei haben.

---

## Ihr nächster Schritt

Sie müssen nicht in die Türkei fliegen, keinen Urlaub nehmen und keine Monate auf Rückmeldungen warten.

Stellen Sie die Unterlagen zusammen, kontaktieren Sie uns — den Rest erledigen wir.

**Avukat Hasan Doğru | Doğru Kanzlei**
📍 R1 2-3, 68161 Mannheim
📞 +49 176 612 21210
✉️ info@hasandogru.de
💬 Auch per WhatsApp erreichbar

*Mo–Sa: 09:00–18:00 | Beratung auf Deutsch und Türkisch*

---

*Dieser Artikel dient ausschließlich der allgemeinen Information und stellt keine Rechtsberatung dar. Für eine auf Ihren individuellen Fall zugeschnittene Einschätzung nehmen Sie bitte Kontakt mit uns auf. Die Kanzlei berät ausschließlich im türkischen Recht gemäß §207 BRAO.*`,
    contentTR: `**YASAL UYARI:** Bu makale yalnızca Türk hukukuna ilişkindir. Büromuzda Alman hukuku konusunda danışmanlık verilmemektedir.

---

Almanya'da boşandınız. Mahkeme kararını elinize aldınız, rahatladınız. Ama birkaç ay sonra Türkiye'deki bir işlem sırasında şok edici bir gerçekle yüzleştiniz: **Türkiye'de hâlâ evli görünüyorsunuz.**

Bu, Almanya'da yaşayan yüz binlerce Türk vatandaşının bilmeden düştüğü hukuki bir tuzaktır. Alman mahkemesinin verdiği boşanma kararı, Türkiye'de otomatik olarak geçerli olmaz. Türkiye'de nüfus kaydınızın güncellenmesi, yeniden evlenebilmeniz, mal paylaşımı yapabilmeniz, nafaka ve velayet kararlarını Türkiye'de uygulayabilmeniz için ayrı bir hukuki adım atmanız zorunludur: **tanıma ve tenfiz davası.**

Bu rehberde, Almanya'da yaşayan biri olarak bu süreci Türkiye'ye adım atmadan nasıl tamamlayabileceğinizi, hangi belgelere ihtiyaç duyduğunuzu, alternatif yolları ve mal paylaşımı, velayet, nafaka gibi bağlantılı konuları kapsamlı biçimde ele alıyoruz.

---

## Tanıma mı, Tenfiz mi? İkisi Arasındaki Kritik Fark

Bu iki kavram sıkça birbirine karıştırılır ve yanlış anlaşılması davanın yanlış türde açılmasına — dolayısıyla hak kayıplarına — yol açabilir.

### Tanıma Davası

Tanıma davası, yabancı bir mahkeme tarafından verilen kararın Türkiye'de **kesin hüküm** olarak kabul edilmesini sağlar. Yani Alman mahkemesinin verdiği boşanma kararı, tanıma davası sonucunda Türk mahkemesinin kararı ile eşdeğer hale gelir.

Almanya'daki boşanma kararı **yalnızca boşanmayı** içeriyorsa — velayet, nafaka, tazminat veya mal paylaşımı gibi icrai nitelikte ek hükümler yoksa — tanıma davası açmak yeterlidir. Tanıma kararı kesinleştikten sonra nüfus müdürlüğüne bildirim yapılır ve medeni haliniz "evli"den "boşanmış"a güncellenir.

### Tenfiz Davası

Tenfiz davası ise kararın yalnızca tanınmasından bir adım öteye geçer. Yabancı mahkeme kararının Türkiye'de **icra edilebilir** hale gelmesini sağlar. Almanya mahkemesi boşanmanın yanı sıra nafakaya, velayete, tazminata veya mal paylaşımına da hükmetmişse bu kararların Türkiye'de uygulanabilmesi için tenfiz zorunludur.

Tenfiz olmadan nafaka kararı Türkiye'de icraya konulamaz. Velayet kararı tanınmaz. Mal paylaşımı hükmü tapu müdürlüklerince işleme konulmaz.

### Uygulamada Ne Olur?

Almanya'daki boşanma kararlarının büyük çoğunluğu hem boşanma hükmünü hem de ek düzenlemeleri (nafaka, velayet vb.) birlikte içerir. Bu nedenle avukatınız genellikle her iki davayı da birlikte açar. Hangi davanın açılacağı tamamen kararın içeriğine bağlıdır ve her dosya ayrı değerlendirilmelidir.

---

## Tanıma ve Tenfiz Yapmazsanız Ne Olur?

Bu adımı ertelemek ya da atlamak, yıllar sonra ortaya çıkabilecek ciddi ve çoğu zaman telafisi güç sonuçlar doğurabilir:

**Medeni hal sorunu:** Türkiye nüfus kayıtlarında hâlâ evli görünürsünüz. Bu durum yeniden evlenmenizi engeller. Üstelik Almanya'daki Standesamt bile bazen yeniden evlenme başvurusunda Türk makamlarından evlenme ehliyet belgesi talep edebilir — bu belgede Türkiye'de boşanmış görünmüyorsanız evlenemezsiniz.

**Miras riski:** Boşandığınız eş, Türkiye'de yasal mirasçınız olmaya devam eder. Türkiye'de vefat etmeniz durumunda mülkleriniz, banka hesaplarınız ve diğer varlıklarınız bu kişiye intikal edebilir. Üstelik bu durumu kötüye kullanan ve veraset ilamı çıkartan vakalar mevcuttur.

**Mal ve mülk sorunları:** Türkiye'de gayrimenkulünüz, araziniz veya banka hesabınız varsa eski eşiniz bunlar üzerinde hak iddiasında bulunabilir. Tapu müdürlükleri ve bankalar, yabancı mahkeme kararını tanıma-tenfiz işlemi yapılmadan dikkate almaz.

**Nafaka ve velayet sorunları:** Almanya'da nafakaya veya velayete ilişkin mahkeme kararı aldıysanız bu kararlar Türkiye'de tenfiz edilmeden uygulanamaz. Eski eşinizin Türkiye'de malvarlığı varsa nafaka borcu bu yolla tahsil edilemez.

**Çocuklarla ilgili sorunlar:** Velayet kararı tenfiz edilmemişse çocuğunuzun Türkiye'deki pasaport başvurusu, seyahat izni ve okul kayıt işlemlerinde ciddi bürokratik engeller çıkabilir.

---

## Almanya'ya Özgü: Hangi Belgeler Gerekiyor?

Türkiye'deki avukatınızın mahkemeye sunması için Almanya'dan temin etmeniz gereken belgeler şunlardır. Bu belgelerin her birinin nasıl temin edileceği, Almanya'daki pek çok kişi için en büyük pratik sorundur.

### 1. Scheidungsurteil / Scheidungsbeschluss (Boşanma Kararı)

Almanya aile mahkemesinin verdiği boşanma kararının aslı. Karar, mühürlü ve ıslak imzalı olmalıdır. Kararın fotokopisi veya dijital baskısı kabul edilmez; ilgili aile mahkemesinden resmi suret talep etmeniz gerekir.

### 2. Rechtskraftvermerk (Kesinleşme Şerhi)

Bu, Almanya'ya özgü en kritik belge olup Türkiye'deki pek çok avukat tarafından yeteri kadar bilinmez. Kesinleşme şerhi, boşanma kararının artık itiraz edilemez hale geldiğini — yani kesinleştiğini — belgeleyen resmi nottur. Türk mahkemeleri bu şerh olmadan davayı kabul etmez, zira kesinleşmemiş bir karara dayanarak tanıma veya tenfiz kararı veremezler.

Rechtskraftvermerk'i boşanma kararını veren aile mahkemesinden talep edebilirsiniz. Mahkeme bu şerhi kararın arkasına ayrı bir sayfayla ekler.

### 3. Apostil Şerhi

Almanya, Lahey Apostil Sözleşmesi'ne taraf olduğundan belgelerinize apostil şerhi ekletmeniz mümkündür. Apostil, belgenin uluslararası düzeyde geçerliliğini onaylar ve Türkiye'de resmi olarak kabul edilmesini sağlar.

Apostil işlemi Almanya'da her eyaletin yetkili makamında (genellikle Oberlandesgericht veya Regierungspräsidium) yapılır. Baden-Württemberg'de, yani Mannheim'da yaşıyorsanız apostil işlemini Karlsruhe'deki Oberlandesgericht'ten yaptırabilirsiniz.

### 4. Yeminli Türkçe Tercüme

Tüm belgelerin Türkiye'de yetkilendirilmiş yeminli tercüman tarafından Türkçeye çevrilmesi ve noterce onaylanması zorunludur. Bu tercümeyi Almanya'dan Türkiye'deki tercümana göndermek mümkündür; tercüman noter kanalıyla onay alır.

### 5. Vekâletname

Türkiye'ye gitmeden davayı sürdürebilmek için avukatınıza **tanıma ve tenfiz** yetkisini açıkça içeren bir vekâletname vermeniz gerekir. Bu vekâletnameyi Almanya'daki herhangi bir noterde düzenlettirmeniz mümkündür. Vekâletnamede "tanıma ve tenfiz davası açma ve takip etme" yetkisinin açıkça belirtilmesi şarttır; genel yetkili vekâletname bazı mahkemeler tarafından yeterli kabul edilmeyebilir.

---

## Süreç Nasıl İşler? Adım Adım

### Adım 1 — Belgelerin Toplanması

Almanya'daki aile mahkemesinden Scheidungsurteil ve Rechtskraftvermerk belgelerini talep edersiniz. Belgelere apostil şerhi ekletirsiniz. Bu aşamada mahkeme bürokrasisi zaman alabilir; özellikle yoğun dönemlerde mahkemeden yanıt birkaç haftayı bulabilir.

### Adım 2 — Almanya'dan Vekâletname

Mannheim'daki veya bulunduğunuz şehirdeki Alman noterinde avukatınıza vekâletname düzenlenir. Türkiye've gitmenize gerek yoktur. Vekâletnameye tercüme ekletmeniz gerekip gerekmediğini noterden öğrenin; bazı Türk mahkemeleri apostilli Alman vekâletnamelerini doğrudan kabul ederken bazıları apostilli Türkçe çeviri de isteyebilir.

### Adım 3 — Yeminli Türkçe Tercüme

Scheidungsurteil, Rechtskraftvermerk ve diğer belgelerin tamamı Türkiye'de geçerli yeminli tercüman aracılığıyla Türkçeye çevrilir.

### Adım 4 — Dava Açılması

Avukatınız yetkili Türk aile mahkemesine tanıma ve/veya tenfiz davası açar. Yetkili mahkeme, davacının Türkiye'deki ikametine göre belirlenir. Türkiye'de sabit ikamet adresiniz yoksa dava İstanbul, Ankara veya İzmir mahkemelerinde açılabilir.

### Adım 5 — Tebligat Süreci

Davanın en uzun ve en belirsiz aşamasıdır. Mahkeme, karşı tarafa tebligat yapılmasını bekler. Karşı tarafın adresi biliniyorsa ve her iki taraf da avukatla temsil ediliyorsa bu aşama birkaç haftada tamamlanabilir. Karşı tarafın adresi bilinmiyorsa, yurt dışında yaşıyorsa veya tebligatı kasıtlı olarak almıyorsa süreç aylar hatta yıllar sürebilir. Bu nedenle tebligat adresinin doğru bildirilmesi kritik önem taşır.

### Adım 6 — Mahkeme Duruşmaları

Türkiye'ye gitmenize gerek yoktur; avukatınız tüm duruşmalara sizin adınıza katılır.

### Adım 7 — Karar ve Nüfus Kaydı

Mahkeme tanıma ve/veya tenfiz kararını verdikten sonra bu karar kesinleşir ve ilgili nüfus müdürlüğüne bildirim yapılır. Medeni haliniz "boşanmış" olarak güncellenir.

**Ortalama Süre:** Belgelerin eksiksiz olması ve her iki tarafın avukatla temsil edilmesi durumunda **3 ila 6 ay.** Tebligat sorunu yaşanırsa bu süre 12 aya kadar uzayabilir.

---

## Nüfus Müdürlüğü Yolu: Mahkemeye Gitmeden Tanıma Mümkün mü?

2017 yılında 5490 sayılı Nüfus Hizmetleri Kanunu'na eklenen maddeyle birlikte belirli koşullarda tanıma işlemi mahkeme kararına gerek olmaksızın nüfus müdürlüğü aracılığıyla da yapılabilir hale geldi. Bu önemli bir kolaylıktır ve pek çok kişi bu yolun farkında değildir.

### Nüfus Müdürlüğü Yolu Ne Zaman Geçerli?

Bu yol yalnızca aşağıdaki koşulların **tamamının** sağlanması durumunda mümkündür:

- Yabancı mahkeme kararı **yalnızca boşanmayı** içermelidir (nafaka, velayet veya tazminat gibi ek hükümler bulunmamalıdır)
- **Her iki taraf birlikte** nüfus müdürlüğüne başvurmalıdır
- Gerekli belgeler eksiksiz sunulmalıdır (apostilli boşanma kararı, kesinleşme şerhi, yeminli Türkçe tercüme)

### Nüfus Müdürlüğü Yolu Ne Zaman İşe Yaramaz?

Aşağıdaki durumlarda bu yol kapalıdır ve mahkeme davası zorunludur:

- Eski eşiniz birlikte başvurmak istemiyorsa
- Karar nafaka, velayet, tazminat veya mal paylaşımı hükmü içeriyorsa
- Nüfus müdürlüğü başvurunuzu reddettiyse (bu durumda yine mahkeme yoluna gidilir)

### Almanya'dan Nüfus Müdürlüğü Başvurusu

Türkiye'deki Türk konsolosluğu üzerinden de başvuru yapılabilmektedir. Ancak eski eşinizin koşullara uyması ve belgelerinizin eksiksiz olması gerektiğini unutmayın. Bu süreçte de bir avukattan destek almak, başvurunun reddedilmesi riskini azaltır.

---

## Mal Paylaşımı: Almanya'da Boşanma Sonrası Türkiye'deki Mülkler Ne Olur?

Almanya'da boşanan pek çok çiftin Türkiye'de gayrimenkulü, arazisi veya diğer varlıkları bulunmaktadır. Bu varlıkların paylaşımı, tanıma-tenfiz davasıyla doğrudan bağlantılıdır ve dikkatli yönetilmezse ciddi hak kayıplarına yol açabilir.

### Almanya Mahkemesi Mal Paylaşımına Karar Verdiyse

Alman mahkemesi boşanmayla birlikte mal paylaşımına da hükmettiyse bu kararın Türkiye'de uygulanabilmesi için **tenfiz davası** açılması zorunludur. Tenfiz kararı olmadan tapu müdürlükleri ve bankalar yabancı mahkeme kararını dikkate almaz. Türkiye'deki bir taşınmazın devri için dahi tenfiz şarttır.

### Almanya Mahkemesi Mal Paylaşımına Karar Vermediyse

Alman mahkemesi yalnızca boşanmaya hükmetmiş, Türkiye'deki mallara ilişkin bir düzenleme yapmamışsa durum farklıdır. Bu durumda Türkiye'de ayrı bir **mal rejiminin tasfiyesi davası** açılması gerekir. Ancak bu dava, boşanmanın önce Türkiye'de tanınmasını gerektirir.

Kritik bir zaman detayı: Türkiye'deki mal paylaşımında esas alınan tarih, Almanya'da **boşanma davasının açıldığı tarihtir.** Bu tarihten sonra edinilen mallar kapsam dışında kalır. Dolayısıyla tanıma davası ne kadar geç açılırsa mal paylaşımı kapsamı o kadar daralabilir.

### İhtiyati Tedbir: Eski Eşiniz Türkiye'deki Malları Satabilir mi?

Boşanma sürecinde ya da sonrasında Türkiye'deki mal varlıklarını korumak istiyorsanız **ihtiyati tedbir** kararı talep edebilirsiniz. Tanıma veya mal paylaşımı davası açıldığında mahkemeden taşınmazların tapu kaydına tedbir konulmasını talep edebilirsiniz. Bu tedbir, taşınmazın satışını, devrini ve üzerinde işlem yapılmasını engeller. Bu önlem özellikle eski eşin Türkiye'de yaşadığı durumlarda kritik önem taşır.

---

## Velayet: Almanya'daki Karar Türkiye'de Geçerli mi?

Çocuklarınız söz konusu olduğunda tanıma ve tenfiz meselesi çok daha hassas ve acil bir hal alır.

### Alman Mahkemesinin Velayet Kararı

Almanya'da aile mahkemesi velayeti ebeveynlerden birine ya da her ikisine birlikte vermişse bu karar Türkiye'de tenfiz edilmeden Türk makamlarınca tanınmaz. Tenfiz edilmemişse:

- Çocuğun Türkiye'deki pasaport başvurusu, diğer ebeveynin onayı olmadan yapılamaz
- Çocuğun Türkiye'ye seyahati için her iki ebeveynin de rızası aranır
- Yurt dışına çıkış yasağı veya çocuğun alıkonulması gibi durumlarla karşılaşılabilir

### Ortak Velayet

Almanya'da yaygın bir düzenleme olan ortak velayet kararı da Türkiye'de tenfiz yoluyla geçerli kılınabilir. Bu sayede her iki ebeveynin de Türkiye'deki işlemlerde hakkı korunmuş olur.

### Uluslararası Çocuk Kaçırma

Velayete sahip ebeveynin izni olmadan çocuğun Türkiye'ye götürülmesi, Türkiye ve Almanya'nın her ikisinin de taraf olduğu Lahey Sözleşmesi kapsamında uluslararası çocuk kaçırma sayılır. Bu durumlarda acil hukuki müdahale gereklidir.

---

## Nafaka: Almanya'daki Nafaka Kararını Türkiye'de Uygulayabilir misiniz?

Alman mahkemesi boşanmayla birlikte nafakaya hükmettiyse ve eski eşinizin Türkiye'de malvarlığı ya da geliri varsa, bu nafaka kararını Türkiye'de icra edebilirsiniz — **ancak tenfiz kararı almış olmanız şartıyla.**

### Hangi Nafaka Türleri Tenfize Konu Olur?

- **Yoksulluk nafakası:** Boşanan eşe bağlanan nafaka
- **İştirak nafakası:** Çocuk için bağlanan nafaka

Tenfiz davası açılırken boşanmanın kesinleşmemiş olduğu dönemde bağlanan tedbir nafakası tenfize konu edilemez; zira bu nafaka boşanma kesinleşmeden önce geçici olarak hüküm ifade eder.

### Nafaka Ödenmezse Ne Olur?

Tenfiz kararı aldıktan sonra nafaka icra dairesine başvurularak tahsil edilebilir. Eski eşinizin Türkiye'de banka hesabı, maaşı veya gayrimenkulü varsa bunlara haciz uygulanabilir. Türk hukukunda nafaka borcunu ödememeye **tazyik hapsi** uygulanabilir — bu, ciddi bir yaptırımdır.

### Eski Eş Türkiye'ye Kaçtıysa?

Bu, özellikle Almanya'da yaşayan kişilerin karşılaştığı bir senaryodur. Eski eşiniz Türkiye'ye taşındıysa veya kaçtıysa nafaka ve tazminat alacaklarınızı Türkiye'deki tenfiz davası ve ardından icra takibiyle takip etmeniz mümkündür. Bunun için yetkili bir avukat aracılığıyla ihtiyati tedbir talep etmek ve tenfiz davasını geciktirmeden açmak büyük önem taşır.

---

## Türkiye've Gitmeden Bu Davayı Açabilir misiniz?

**Evet.** Ve bu, Almanya'da yaşamanın sağladığı en büyük pratik avantajdır.

Türkiye'deki avukatınıza Almanya'daki noter aracılığıyla vekâletname verirseniz, dava süreci boyunca hiçbir duruşmaya bizzat katılmanız gerekmez. Avukatınız tüm işlemleri sizin adınıza yürütür.

Biz, UYAP sistemine kayıtlı avukat olarak dava dosyalarını gerçek zamanlı olarak Almanya'dan takip ediyoruz. Mahkeme günleri, belge durumu, tebligat aşaması — hepsini siz Mannheim'daki hayatınıza devam ederken biz Türkiye'deki mahkemelerde yönetiyoruz.

---

## Almanya'da Bir Avukattan Hizmet Almanın Farkı

Türkiye'deki bir hukuk bürosundan hizmet aldığınızda karşılaşabileceğiniz sorunlar:

- Almanya'daki belge süreçlerini tam bilmiyorlar. Rechtskraftvermerk nedir, Baden-Württemberg'de apostil nerede yaptırılır, Alman noterde vekâletname nasıl düzenlenir — bunlar Türkiye'den bilmesi güç pratik detaylardır.
- İletişim farkı: Türkçe yazışma, saat farkı, geri dönüş gecikmesi ve süreci takip edememe.
- Belge eksikliği nedeniyle dava uzar veya reddedilir.

**Mannheim'da bulunmamız şu anlama gelir:**

- Almanya'daki belge süreçlerini birlikte yürütürüz. Hangi mahkemeden ne alacaksınız, apostili nerede yaptırırsınız, Alman noterde vekâletname nasıl düzenlenir — hepsini sizinle adım adım çözüyoruz.
- **Çift baro üyeliğimiz var.** Ankara Barosu ve Karlsruhe Barosu'na (§207 BRAO) kayıtlıyız. Türkiye'deki mahkemelerde bizzat temsil ediyoruz; hiçbir aracı yok.
- **UYAP erişimimiz var.** Türk mahkemelerini Almanya'dan gerçek zamanlı takip ediyoruz. Duruşma tarihleri, tebligat durumu, karar aşaması — hepsini anlık görüyoruz.
- **Türkçe ve Almanca iletişim.** İki dilde de akıcı hizmet veriyoruz. Türkçe bilmiyorsanız ya da Almanca yazışmayı tercih ediyorsanız her iki şekilde de çalışıyoruz.
- **70+ Google değerlendirmesi, 5,0 yıldız.** Müvekkil memnuniyeti en iyi referansımızdır.

---

## Bir Sonraki Adımınız

Almanya'dan Türkiye'deki boşanma kararınızı tanıtmak için Türkiye'ye gitmenize, izin almanıza ya da yıllarca beklemenize gerek yok.

Belgelerinizi toparlayın, bize ulaşın — gerisini biz halledelim.

**Avukat Hasan Doğru | Doğru Kanzlei**
📍 R1 2-3, 68161 Mannheim
📞 +49 176 612 21210
✉️ info@hasandogru.de
💬 WhatsApp üzerinden de ulaşabilirsiniz.

*Mo–Sa: 09:00–18:00 | Türkçe ve Almanca hizmet*

---

*Bu makale genel bilgi amaçlıdır ve hukuki danışmanlık niteliği taşımaz. Durumunuza özgü değerlendirme için lütfen bizimle iletişime geçin. Büromuzda yalnızca Türk hukuku alanında danışmanlık verilmektedir.*`,
    category: "Tanıma ve Tenfiz",
    categoryDE: "Scheidungsanerkennung",
    image: tanimaTenfizImg,
    dateDE: "11. April 2026",
    dateTR: "11 Nisan 2026",
    readTimeDE: "8 Min. Lesezeit",
    readTimeTR: "8 dk okuma",
    publishedAt: "2026-04-11",
    keywordsDE: "Scheidung in Deutschland Anerkennung Türkei, Tanıma Tenfiz davası belgeler, Türkisches Recht Mannheim, Unterhalt vollstrecken Türkei, Sorgerecht Türkei Anerkennung",
    keywordsTR: "Almanya boşanma tanıma tenfiz, kesinleşme şerhi nedir, tanıma tenfiz davası ne kadar sürer, yurt dışı boşanma nüfus kaydı, tanıma tenfiz avukatı ankara",
    faqDE: [
      {
        question: "Ich bin in Deutschland geschieden, gelte aber in der Türkei noch als verheiratet. Was muss ich tun?",
        answer: "Sie müssen beim türkischen Familiengericht eine Tanıma-Klage erheben. Dies ist kein neues Scheidungsverfahren, sondern ein eigenständiges Verfahren zur Anerkennung des deutschen Urteils. Eine Reise in die Türkei ist nicht erforderlich; der Prozess kann vollständig über eine Anwaltsvollmacht abgewickelt werden."
      },
      {
        question: "Kann ich die Klage alleine einreichen? Benötige ich die Zustimmung meines Ex-Partners?",
        answer: "Nein, die Mitwirkung des Ex-Partners ist nicht zwingend erforderlich. Die Klage kann einseitig eingereicht werden. Dem Ex-Partner wird die Klage zugestellt, er muss jedoch nicht am Verfahren teilnehmen. Wenn beide Parteien einverstanden sind und das Urteil nur die Scheidung betrifft, kann alternativ der Weg über das Standesamt geprüft werden."
      },
      {
        question: "Wie lange dauert ein Tanıma ve Tenfiz Verfahren?",
        answer: "Bei vollständigen Unterlagen und wenn beide Seiten anwaltlich vertreten sind, dauert es durchschnittlich 3-6 Monate. Wenn die Adresse der Gegenseite unbekannt ist oder Zustellungsprobleme auftreten, kann sich der Zeitraum auf bis zu 12 Monate verlängern."
      },
      {
        question: "Woher bekomme ich den Rechtskraftvermerk?",
        answer: "Diesen beantragen Sie schriftlich bei dem deutschen Familiengericht, das das Scheidungsurteil erlassen hat. Das Gericht stellt diesen Vermerk gegen eine Gebühr aus. Geben Sie unbedingt an, dass das Dokument mit einer Apostille versehen sein muss."
      },
      {
        question: "Kann ich mich aufgrund der Gesetzesänderung von 2017 an das Standesamt wenden?",
        answer: "Ja, wenn Sie nur ein Scheidungsurteil haben und beide Parteien den Antrag gemeinsam stellen können. Wenn jedoch zusätzliche Regelungen wie Sorgerecht, Unterhalt oder Entschädigung vorliegen oder der Ex-Partner nicht gemeinsam beantragen möchte, ist das gerichtliche Verfahren zwingend erforderlich."
      },
      {
        question: "Ich habe Immobilien in der Türkei, kann mein Ex-Partner diese verkaufen?",
        answer: "Vor Einleitung des Tanıma-Tenfiz-Verfahrens können Sie beim Gericht eine einstweilige Verfügung beantragen. Diese sorgt dafür, dass ein Sperrvermerk im Grundbuch eingetragen wird, der Verkauf, Übertragung und ähnliche Transaktionen verhindert."
      },
      {
        question: "Ich habe einen deutschen Staatsbürger in Deutschland geheiratet und mich vor einem deutschen Gericht scheiden lassen. Muss ich dieses Verfahren auch durchführen?",
        answer: "Ja. Wenn Sie die türkische Staatsangehörigkeit besitzen oder Inhaber der Blaue Karte (Mavi Kart) sind, gilt dies auch für Sie. Wenn Sie in Deutschland erneut heiraten möchten, kann das Standesamt eine türkische Ehefähigkeitsbescheinigung verlangen; wenn Sie in der Türkei nicht als geschieden geführt werden, können Sie nicht erneut heiraten."
      },
      {
        question: "Ich habe ein Unterhaltsurteil, aber mein Ex-Partner lebt in der Türkei und möchte nicht zahlen. Was kann ich tun?",
        answer: "Zunächst müssen Sie in der Türkei ein Tenfiz-Verfahren einleiten und anschließend das Vollstreckungsverfahren starten. Bankkonten, Gehalt oder Immobilien des Ex-Partners in der Türkei können gepfändet werden. Zudem kann bei Nichtzahlung von Unterhalt eine Beugehaft drohen."
      }
    ],
    faqTR: [
      {
        question: "Almanya'da boşandım ama Türkiye'de evli görünüyorum. Ne yapmalıyım?",
        answer: "Türk aile mahkemesinde tanıma davası açmanız gerekiyor. Bu dava yeni bir boşanma davası değildir; Almanya'daki kararı Türkiye'de geçerli kılmak için açılan ayrı bir davadır. Türkiye'ye gitmenize gerek yok, avukat vekâletnamesiyle tüm süreç yürütülür."
      },
      {
        question: "Davayı tek başıma açabilir miyim? Eski eşimin onayı gerekiyor mu?",
        answer: "Hayır, eski eşinizin katılımı zorunlu değildir. Dava tek taraflı açılabilir. Eski eşinize tebligat yapılır ancak katılmak zorunda değildir. Eğer her iki taraf da anlaşmalıysa ve karar yalnızca boşanmayı içeriyorsa, mahkeme yerine nüfus müdürlüğü yolunu da değerlendirebilirsiniz."
      },
      {
        question: "Tanıma ve tenfiz davası ne kadar sürer?",
        answer: "Belgelerin eksiksiz olması ve her iki tarafın avukatla temsil edilmesi durumunda ortalama 3-6 ay sürer. Karşı tarafın adresi bilinmiyorsa ya da tebligat sorunları yaşanırsa bu süre 12 aya kadar uzayabilir."
      },
      {
        question: "Rechtskraftvermerk'i nereden alırım?",
        answer: "Boşanma kararını veren Alman aile mahkemesine yazılı olarak başvurarak talep edersiniz. Mahkeme bu şerhi ücret karşılığında düzenler. Alacağınız belgenin apostil şerhli olması gerektiğini de belirtin."
      },
      {
        question: "2017'de yapılan değişiklikle nüfus müdürlüğüne başvurabilir miyim?",
        answer: "Yalnızca boşanma kararı aldıysanız ve her iki taraf birlikte başvurabiliyorsa evet, nüfus müdürlüğü üzerinden işlem yapılabilir. Ancak velayet, nafaka veya tazminat gibi ek hükümler varsa ya da eski eşiniz birlikte başvurmak istemiyorsa mahkeme davası zorunludur."
      },
      {
        question: "Türkiye'de mülküm var, eski eşim satabilir mi?",
        answer: "Tanıma-tenfiz davası açılmadan önce mahkemeden ihtiyati tedbir kararı talep edebilirsiniz. Bu karar, taşınmazın tapu kaydına şerh düşülmesini sağlar ve satış, devir gibi işlemleri engeller."
      },
      {
        question: "Almanya'da bir Alman vatandaşıyla evlendim ve Alman mahkemesinde boşandım. Ben de bu davayı açmak zorunda mıyım?",
        answer: "Evet. Türk vatandaşlığınız varsa ya da Mavi Kart (eski Türk vatandaşı) sahibiyseniz bu işlem sizin için de geçerlidir. Almanya'da yeniden evlenmek istediğinizde Standesamt, Türk makamlarından evlenme ehliyet belgesi isteyebilir; bu belgede Türkiye'de boşanmış görünmüyorsanız evlenemezsiniz."
      },
      {
        question: "Nafaka kararım var ama eski eşim Türkiye'de yaşıyor ve ödemek istemiyor. Ne yapabilirim?",
        answer: "Önce Türkiye'de tenfiz davası açmanız, ardından icra takibi başlatmanız gerekir. Eski eşinizin Türkiye'deki banka hesaplarına, maaşına veya taşınmazlarına haciz uygulanabilir. Aynı zamanda nafaka borcunu ödememe halinde tazyik hapsi de söz konusu olabilir."
      }
    ]
  },
  {
    slug: "veraset-ilami-nedir-nasil-alinir",
    slugDE: "erbschein-tuerkei-deutschland-beantragen",
    slugTR: "veraset-ilami-nedir-nasil-alinir",
    slugEN: "turkish-inheritance-certificate-germany-guide",
    titleDE: "Türkischen Erbschein (Veraset İlamı) aus Deutschland beantragen — Vollständiger Leitfaden 2026",
    titleTR: "Veraset İlamı (Mirasçılık Belgesi) Nedir, Nasıl Alınır? Almanya'dan Eksiksiz Rehber 2026",
    titleEN: "Turkish Certificate of Inheritance (Veraset İlamı) from Germany — Complete Guide 2026",
    excerptDE: "Notar oder Gericht, Mavi-Kart-Inhaber, Apostille, Vollmacht vom Konsulat, Kosten und Dauer — und warum der deutsche Erbschein für türkische Immobilien nicht ausreicht.",
    excerptTR: "Noter mi, mahkeme mi? Mavi kartlılar nasıl başvurur? Alman Erbschein Türkiye'de geçerli mi? Almanya'dan veraset ilamı hakkında bilmeniz gereken her şey.",
    excerptEN: "Notary or court, Blue Card holders, whether a German Erbschein works in Turkey, the European Certificate of Succession gap, apostille, power of attorney, costs and timeline — everything you need to manage the Turkish probate process from Germany.",
    metaTitleDE: "Erbschein Türkei aus Deutschland beantragen: Vollständiger Leitfaden 2026",
    metaDescriptionDE: "Türkischer Erbschein (Veraset İlamı) aus Deutschland beantragen: Notar oder Gericht, Mavi-Kart-Inhaber, gilt der deutsche Erbschein in der Türkei, Apostille, Vollmacht, Kosten und Dauer — der vollständige Leitfaden. Doğru Kanzlei.",
    schemaHeadlineDE: "Erbschein Türkei aus Deutschland beantragen: Vollständiger Leitfaden 2026",
    metaTitleTR: "Veraset İlamı (Mirasçılık Belgesi): Almanya'dan Eksiksiz Rehber 2026",
    metaTitleEN: "Turkish Certificate of Inheritance (Veraset İlamı) from Germany: Complete Guide 2026",
    metaDescriptionTR: "Veraset ilamı nedir, noter mi mahkeme mi, mavi kartlılar nasıl alır, Alman Erbschein Türkiye'de geçerli mi? Almanya'dan adım adım veraset ilamı rehberi. Doğru Kanzlei.",
    metaDescriptionEN: "How to get a Turkish Certificate of Inheritance (Veraset İlamı) from Germany: notary vs court, Blue Card holders, does a German Erbschein work in Turkey, power of attorney, documents, costs and timeline — complete guide by Doğru Kanzlei.",
    schemaHeadlineTR: "Veraset İlamı (Mirasçılık Belgesi): Almanya'dan Eksiksiz Rehber 2026",
    schemaHeadlineEN: "Turkish Certificate of Inheritance (Veraset İlamı) from Germany: Complete Guide 2026",
    contentDE: `**RECHTLICHER HINWEIS:** Dieser Artikel befasst sich ausschließlich mit dem türkischen Recht. Die Doğru Kanzlei berät gemäß § 207 BRAO ausschließlich im türkischen Recht.

---

Ein Familienmitglied verstirbt in der Türkei oder hinterlässt dort Vermögen. Die Erben in Deutschland wissen, dass irgendetwas mit dem türkischen Grundbuch und den Bankkonten geregelt werden muss. Beim Grundbuchamt in der Türkei erfahren sie dann: Ohne türkischen Erbschein läuft gar nichts.

Der türkische Erbschein — auf Türkisch Veraset İlamı oder Mirasçılık Belgesi — ist das zentrale Dokument jeder türkischen Nachlassabwicklung. Ohne ihn öffnen türkische Banken keine Konten, türkische Grundbuchämter nehmen keine Umschreibungen vor, und das Finanzamt nimmt keine Erbschaftsteuererklärung entgegen.

Dieser Leitfaden erklärt, wie Sie den türkischen Erbschein aus Deutschland beantragen — ohne in die Türkei reisen zu müssen, und ohne sich durch eine deutsche Behörde leiten zu lassen, die das türkische System nicht kennt.

---

## 1. Was ist der türkische Erbschein (Veraset İlamı)?

Der türkische Erbschein — Veraset İlamı (wörtlich: Erbschaftsurteil) oder Mirasçılık Belgesi (Erbschaftszeugnis) — ist das amtliche Dokument, das festhält, wer nach türkischem Erbrecht Erbe ist und welchen Anteil jeder Erbe erhält.

Rechtsgrundlage ist Art. 598 des türkischen Zivilgesetzbuches (Türk Medeni Kanunu — TMK). Zuständig für die Ausstellung sind das türkische Friedensgericht (Sulh Hukuk Mahkemesi) oder — unter bestimmten Voraussetzungen — ein türkischer Notar.

### Wofür wird der Erbschein benötigt?

Ohne türkischen Erbschein ist in der Türkei Folgendes nicht möglich:

- **Grundbuchumschreibung (Tapu Intikali):** Eintragung der Erben im Grundbuch für geerbte Immobilien
- **Bankkonten:** Freigabe eingefrorener Konten oder Übertragung auf die Erben
- **Erbschaftsteuererklärung:** Das Finanzamt verlangt den Erbschein vor Bearbeitung
- **Fahrzeugummeldung:** Ummeldung geerbter Fahrzeuge beim Straßenverkehrsamt
- **Gerichtsverfahren:** Nachweis der Erbenstellung in Nachlassstreitigkeiten (Tenkis, Muris Muvazaası, İzale-i Şuyu)

### Declaratorische, nicht konstitutive Wirkung

Wie im deutschen Recht hat der türkische Erbschein deklaratorische (feststellende), keine konstitutive (begründende) Wirkung. Das Erbrecht entsteht mit dem Tod des Erblassers — der Erbschein macht es nur gegenüber Dritten nachweisbar. Er kann — ebenfalls wie der deutsche Erbschein — jederzeit angefochten und korrigiert werden (Anfechtungsverfahren: Veraset İlamının İptali Davası).

---

## 2. Notar oder Friedensgericht — Welcher Weg führt zum türkischen Erbschein?

Seit 2011 können türkische Erbscheine sowohl vom Friedensgericht als auch vom Notar ausgestellt werden. Welcher Weg für Sie gilt, hängt entscheidend von den Beteiligten ab.

### Weg A: Türkischer Notar (Schnellweg — nur unter bestimmten Voraussetzungen)

Beim Notar dauert das Verfahren meist **wenige Minuten bis einen Werktag**. Der Notar greift direkt auf das türkische Personenstandsregister (MERNİS) zu und stellt den Erbschein auf der Basis dieser Daten aus.

**Voraussetzungen für den Notarweg:**
- Alle Erben sind **türkische Staatsangehörige**
- Der Erblasser war **türkischer Staatsangehöriger**
- Die Personenstandsregister sind **eindeutig und vollständig**
- Es liegt **kein Testament** vor

> ⚠️ **Kritisch für Erben in Deutschland:** Sobald auch **nur ein** Beteiligter — Erblasser oder Erbe — eine ausländische Staatsangehörigkeit hat (inkl. deutsche Staatsangehörigkeit), entfällt die Zuständigkeit des türkischen Notars vollständig. Rechtsgrundlage: Art. 71/B Abs. 3 Notariatsgesetz (Noterlik Kanunu). Der Notar darf in diesem Fall den Erbschein nicht ausstellen — unabhängig davon, wie überschaubar der Fall erscheint.

### Weg B: Türkisches Friedensgericht (Sulh Hukuk Mahkemesi — für die meisten Fälle mit Deutschlandbezug)

Das Friedensgericht ist zuständig, wenn:
- Ein Erbe oder der Erblasser **Ausländer** ist (dt. Staatsangehörigkeit, Mavi-Kart-Inhaber, Doppelstaater)
- Die Personenstandsregister **Unklarheiten** aufweisen
- Ein **Testament** vorhanden ist
- Die Erbenstellung **streitig** ist

**Zuständiges Gericht:** Jedes türkische Friedensgericht ist örtlich zuständig — des letzten Wohnsitzes des Erblassers, des Wohnsitzes eines der Erben oder des Belegenheitsortes des Grundstücks. Das ermöglicht eine flexible Wahl.

**Verfahrensdauer:**
- Einfache Fälle (alle Beteiligten bekannt, Unterlagen vollständig): 2–6 Wochen
- Fälle mit ausländischen Erben, Zustellungserfordernissen oder Registerunklarheiten: 2–4 Monate

### Kostenvergleich 2026

| Ausstellungsstelle | Kosten (ca.) | Dauer |
|---|---|---|
| Türkischer Notar | ~3.000 TL | Gleicher Tag (nur bei rein türk. Beteiligten) |
| Friedensgericht | ~3.500–4.000 TL | 2 Wochen – 4 Monate |

Hinzu kommen in Deutschland: Konsulatsgebühren für die Vollmacht, Apostille-Gebühren und beglaubigte Übersetzungskosten (zusammen ca. 200–500 €).

---

## 3. Die besondere Situation: Mavi-Kart-Inhaber und deutsche Staatsangehörige

Dieser Abschnitt ist für die meisten Leser dieses Artikels der wichtigste — und wird in den meisten Leitfäden unzureichend erklärt.

### Mavi-Kart-Inhaber (Ehemalige türkische Staatsangehörige)

Mavi-Kart-Inhaber haben die türkische Staatsangehörigkeit aufgegeben, behalten aber bestimmte Rechte (z.B. Eigentumsrecht an türkischen Immobilien). Für die Erbscheinsausstellung gilt jedoch:

**Mavi-Kart-Inhaber können den türkischen Erbschein nicht beim Notar beantragen.** Der Grund ist doppelt:

1. **Rechtlich:** Art. 71/B Abs. 3 Notariatsgesetz schließt Ausländer — und Mavi-Kart-Inhaber sind rechtlich Ausländer — vom Notarweg aus.
2. **Technisch:** Bei der Aufgabe der türkischen Staatsangehörigkeit wird der Eintrag im Personenstandsregister (Nüfus) geschlossen. Der Notar kann über MERNİS die Verwandtschaftsverhältnisse nicht mehr feststellen.

**Konsequenz:** Mavi-Kart-Inhaber müssen zwingend beim Friedensgericht beantragen. Von dort aus kann der Prozess vollständig über einen bevollmächtigten Anwalt geführt werden.

### Reine deutsche Staatsangehörige (ohne türkischen Hintergrund)

Für Erben ohne jede türkische Staatsangehörigkeit gilt dasselbe: Der Notarweg ist ausgeschlossen. Das Friedensgericht ist zwingend zuständig.

**Zusätzlich erforderliche Unterlagen für ausländische Erben:**

| Dokument | Apostille erforderlich? | Beglaubigte Übersetzung ins Türkische? |
|---|---|---|
| Deutsche Sterbeurkunde | Ja | Ja (vereidigter Übersetzer) |
| Deutscher Reisepass / Personalausweis | Nein | Nein |
| Geburtsurkunde (dt. ausgestellt) | Ja | Ja |
| Heiratsurkunde (dt. ausgestellt) | Ja | Ja |
| Wohnsitznachweis (Anmeldebescheinigung) | Ggf. | Ggf. |
| Türkischer Nüfus-Registerauszug (falls vorhanden) | Nein | Nein |

**Wichtig:** In der Praxis entstehen die meisten Verzögerungen nicht durch das Gerichtsverfahren selbst, sondern durch fehlende oder fehlerhafte Apostillen und Übersetzungen. Diese Dokumente sollten vor Antragstellung vollständig vorbereitet sein.

### Türkische Steuernummer für ausländische Erben

Ausländische Erben (einschließlich Mavi-Kart-Inhaber) benötigen für alle Behördenverfahren in der Türkei eine türkische Steuernummer (Vergi Kimlik Numarası). Diese kann Ihr Anwalt in der Türkei auf der Basis Ihres Reisepasses für Sie beantragen — ein persönliches Erscheinen in der Türkei ist dafür nicht erforderlich.

---

## 4. Gilt der deutsche Erbschein in der Türkei?

Dies ist die am häufigsten gestellte Frage von Erben in Deutschland — und die Antwort ist differenzierter als erwartet.

### Rechtsrahmen: Das Nachlassabkommen von 1929

Das Rechtsverhältnis zwischen Deutschland und der Türkei in Nachlasssachen wird durch die Anlage zu Art. 20 des deutsch-türkischen Konsularvertrags vom 28. Mai 1929 geregelt — das sogenannte Nachlassabkommen. Dieses Abkommen gilt bis heute und geht der EU-Erbrechtsverordnung (Nr. 650/2012) vor, da die Türkei kein EU-Mitglied ist.

### Entscheidungsmatrix: Welcher Erbschein wofür?

| Situation | Nachlassart | Welcher Erbschein wird benötigt? |
|---|---|---|
| Türkischer Erblasser, Nachlass in Türkei | Immobilien (Tapu) | Türkischer Erbschein — zwingend |
| Türkischer Erblasser, Nachlass in Türkei | Bankkonten | Türkischer Erbschein — praktisch immer |
| Türkischer Erblasser, Nachlass in Deutschland | Bankkonten | Türkischer Erbschein (§ 14 NA) reicht aus, wenn apostilliert/beglaubigt |
| Türkischer Erblasser, Nachlass in Deutschland | Immobilien | Deutscher Erbschein (§ 14 II i.V.m. § 17 NA) — Fremdrechtserbschein nach § 2369 BGB |
| Deutscher Erblasser, Nachlass in Türkei | Immobilien | Türkischer Erbschein — zwingend |
| Deutscher Erblasser, Nachlass in Türkei | Bankkonten | Dt. Erbschein mit Apostille nach § 17 NA reicht theoretisch; Banken verlangen oft trotzdem türkischen |
| Deutscher Erblasser, Nachlass in Deutschland | Alle | Deutscher Erbschein |

### Für Immobilien in der Türkei: Immer türkischer Erbschein

Das ist die entscheidende Aussage dieses Abschnitts: **Türkische Grundbuchämter akzeptieren für Immobilientransaktionen ausschließlich den türkischen Erbschein.** Ein apostillierter und übersetzter deutscher Erbschein, ein Europäisches Nachlasszeugnis oder eine notarielle Bestätigung aus Deutschland reichen nicht aus. Grundlage: Türkisches Recht wendet für Immobilien stets das Belegenheitsprinzip (lex rei sitae) an.

### Der Fremdrechtserbschein (§ 2369 BGB) — Was steckt dahinter?

Deutsche Nachlassgerichte können Erbscheine nach türkischem Recht ausstellen — sogenannte Fremdrechtserbscheine gemäß § 2369 BGB. Dies ist sinnvoll, wenn der Erblasser türkischer Staatsangehöriger war und in Deutschland bewegliches Vermögen (Bankkonten) hinterlassen hat.

Dieser Fremdrechtserbschein ist jedoch:
- Gegenständlich beschränkt: gilt nur für in Deutschland befindliche Nachlasswerte
- Territorial beschränkt: entfaltet in der Türkei keine unmittelbare Wirkung für dort befindliches Vermögen

Türkische Friedensgerichte richten sich bei der Ausstellung des türkischen Erbscheins **häufig nach dem deutschen Fremdrechtserbschein** als Orientierung — aber das Gericht stellt dann eigenständig einen türkischen Erbschein aus. Der Fremdrechtserbschein selbst gilt nicht in der Türkei.

---

## 5. Schritt für Schritt: Türkischen Erbschein aus Deutschland beantragen

### Schritt 1 — Konstellation prüfen

Klären Sie zunächst: Welche Staatsangehörigkeiten haben alle Beteiligten? Was befindet sich im Nachlass — Immobilien, Bankkonten, Fahrzeuge? Gibt es ein Testament? Gibt es Registerunklarheiten? Die Antworten bestimmen, welchen Weg (Notar oder Gericht) Ihr Anwalt einschlagen muss.

### Schritt 2 — Vollmacht beim türkischen Konsulat ausstellen lassen

Gehen Sie zum nächsten türkischen Konsulat. In Deutschland befinden sich türkische Konsulate in: Frankfurt, Berlin, Stuttgart, München, Köln, Hamburg, Hannover, Karlsruhe, Münster und Nürnberg.

Bringen Sie Ihren Reisepass mit. Lassen Sie eine **Sondervollmacht (Vekaletname) auf Türkisch** ausstellen. Diese ist ohne Apostille sofort in der Türkei verwendbar. Mehr dazu finden Sie in unserem Beitrag zur [Vollmacht auf Türkisch](/de/blog/vollmacht-auf-tuerkisch).

Die Vollmacht muss ausdrücklich folgende Befugnisse enthalten:

- Beantragung des Erbscheins beim Notar oder Gericht
- Akteneinsicht und Prozessführung
- Vertretung beim Finanzamt (Erbschaftsteuererklärung)
- WEBTAPU-Antrag und Grundbuchumschreibung
- Bankkorrespondenz und Kontofreigabe
- Ggf. Beantragung einstweiliger Verfügungen

> ⚠️ **Häufigster Fehler:** Eine allgemeine Vollmacht reicht für das türkische Erbscheinsverfahren nicht aus. Lassen Sie Ihren Anwalt den Vollmachtstext vorab prüfen und ggf. anpassen.

### Schritt 3 — Deutsche Dokumente vorbereiten

Alle deutschen Urkunden müssen **apostilliert** und durch einen **vereidigten Übersetzer** ins Türkische übersetzt werden. Beides muss vorliegen, bevor Ihr Anwalt in der Türkei aktiv werden kann.

**Apostille beantragen:** Beim Regierungspräsidium des jeweiligen Bundeslandes (je nach Art des Dokuments). Sterbeurkunden: beim zuständigen Standesamt mit anschließender Apostille beim Regierungspräsidium.

**Vereidigter Übersetzer:** Achten Sie darauf, dass der Übersetzer staatlich vereidigt ist (in Deutschland: allgemein beeidigt für die türkische Sprache). Nicht jede Übersetzungsagentur erfüllt diese Anforderung.

### Schritt 4 — Ihr Anwalt stellt den Antrag in der Türkei

Mit Vollmacht und Unterlagen stellt Ihr Anwalt beim zuständigen Friedensgericht (oder bei entsprechenden Voraussetzungen beim Notar) den Erbscheinsantrag. Bei ausländischen Beteiligten muss das Gericht eine Zustellung an diese Personen veranlassen — das verlängert das Verfahren, ist aber bei bevollmächtigtem Anwalt meist unproblematisch.

Nach Erteilung des Erbscheins gilt er unbefristet — es gibt keine Verfallsfrist.

### Schritt 5 — Folgeschritte nach dem Erbschein

Der Erbschein ist der Schlüssel, nicht das Ende. Was folgt:

**Erbschaftsteuererklärung:** Beim türkischen Finanzamt am letzten Wohnsitz des Erblassers. Frist für Erben in Deutschland: 6 Monate ab Todesfall (wenn sowohl Erblasser als auch Erben im Ausland: 8 Monate).

**Unbedenklichkeitsbescheinigung (İlişik Yoktur Yazısı):** Nach Zahlung der Erbschaftsteuer stellt das Finanzamt dieses Dokument aus. Ohne es ist keine Grundbuchumschreibung möglich.

**Grundbuchumschreibung (WEBTAPU):** Online-Antrag über das türkische Kadasterwesen-Portal. Ihr Anwalt führt diesen Schritt mit der Vollmacht durch.

**Bankkonten:** Jede Bank hat eigene interne Verfahren. In der Regel werden Erbschein, Steuerbescheid und Unbedenklichkeitsbescheinigung verlangt.

---

## 6. Der Fremdrechtserbschein in Deutschland — Wann lohnt er sich?

Wenn der Erblasser türkischer Staatsangehöriger war und in Deutschland Bankkonten oder anderes bewegliches Vermögen hinterlassen hat, können die Erben beim deutschen Nachlassgericht (Amtsgericht) einen Erbschein nach **türkischem Recht** beantragen — den Fremdrechtserbschein gemäß § 2369 BGB.

**Wann ist das sinnvoll?**
- Bankkonten in Deutschland stehen im Vordergrund
- Der türkische Erbschein für Türkei-Vermögen läuft parallel

**Was kostet der Fremdrechtserbschein?**
Die Gebühren richten sich nach dem Gegenstandswert (Nachlasswert in Deutschland). Bei deutschen Nachlassgerichten entstehen typischerweise Gerichtsgebühren nach GNotKG.

**Wichtig:** Der Fremdrechtserbschein gilt nur für das in Deutschland befindliche bewegliche Vermögen — nicht für türkische Nachlasswerte. Er kann aber als Beweisstück bei türkischen Friedensgerichten eingereicht werden, die sich häufig an seinen Quoten orientieren.

---

## 7. Häufige Fehler — und wie Sie sie vermeiden

**Fehler 1: Beim Notar antragen, obwohl ein Erbe Ausländer ist**
Türkische Notare lehnen in diesen Fällen ab. Wertvolle Zeit geht verloren. Klären Sie die Beteiligtenstruktur vorab mit einem Anwalt.

**Fehler 2: Deutschen Erbschein beim türkischen Grundbuchamt vorlegen**
Das Grundbuchamt lehnt ab. Die einzige Lösung ist der türkische Erbschein — kein Apostillieren, kein Übersetzen des deutschen Dokuments hilft.

**Fehler 3: Apostille und Übersetzung nicht vorab vorbereiten**
Das sind die häufigsten Verzögerungsursachen. Ein Anwalt in der Türkei kann ohne vollständige apostillierte und übersetzte Unterlagen nicht handeln.

**Fehler 4: Vollmacht ohne ausreichende Spezifizierung**
Eine allgemeine „Generalvollmacht" vom deutschen Notar, die nicht beim türkischen Konsulat erstellt wurde, wird vom türkischen Friedensgericht in der Regel nicht akzeptiert. Die Vollmacht muss konsularisch und auf Türkisch sein.

**Fehler 5: Erbschaftsteuerfristen nicht beachten**
Die Steuerfrist läuft ab dem Todestag — unabhängig davon, wann der Erbschein ausgestellt wurde. Ein verspäteter Antrag schützt nicht vor Säumniszuschlägen.

**Fehler 6: Türkische Steuernummer vergessen**
Ausländische Erben brauchen eine türkische Steuernummer für Steuererklärung, Grundbuchumschreibung und Banken. Ohne sie stockt jeder Folgeschritt.

---

## 8. Fünf typische Konstellationen — und was in jedem Fall zu tun ist

### Konstellation A: Türkischer Erblasser, alle Erben türkische Staatsbürger
→ Notarweg möglich (wenn keine Testamente, keine Registerprobleme). Anwalt holt mit einfacher konsularischer Vollmacht den Erbschein am selben Tag.

### Konstellation B: Türkischer Erblasser, ein Erbe ist Mavi-Kart-Inhaber
→ Notarweg ausgeschlossen. Friedensgericht zwingend. Mavi-Kart-Inhaber benötigt apostillierte Dokumente. Dauer: 4–10 Wochen bei vollständigen Unterlagen.

### Konstellation C: Türkischer Erblasser, ein Erbe ist rein deutsch
→ Notarweg ausgeschlossen. Friedensgericht. Zusätzlich: Deutscher Erbe braucht türkische Steuernummer, apostillierte deutsche Urkunden und ggf. einen deutschen Fremdrechtserbschein für die deutschen Bankkonten parallel.

### Konstellation D: Deutscher Erblasser, Immobilie in der Türkei
→ Türkischer Erbschein beim Friedensgericht zwingend. Gleichzeitig: Für deutsche Vermögenswerte normaler deutscher Erbschein beim Nachlassgericht. Für das türkische Bankkonto kann der apostillierte deutsche Erbschein gem. § 14 Nachlassabkommen ausreichen — in der Praxis aber oft nicht.

### Konstellation E: Alle Beteiligten in Deutschland, Erblasser in Türkei verstorben
→ Türkischer Erbschein beim Friedensgericht. Deutsche Sterbeurkunde (falls in Deutschland ausgestellt) oder türkische Sterbeurkunde. Vollmacht über Konsulat. Vollständige Abwicklung aus Deutschland ohne Türkeireise möglich.

---

## 9. Türkischen Erbschein aus Deutschland — mit der Doğru Kanzlei

[Die Doğru Kanzlei](https://www.hasandogru.de/de/leistungen/erbrecht) ist bei der **Anwaltskammer Ankara** und der **Rechtsanwaltskammer Karlsruhe** (§ 207 BRAO) zugelassen — mit direktem Zugang zum türkischen UYAP-Anwaltsportal. Wir führen das türkische Erbscheinsverfahren von unserem Büro in Mannheim aus — ohne Umweg über einen weiteren Anwalt in der Türkei, dem Sie vertrauen müssen.

Für den Gesamtzusammenhang einer türkischen Erbschaft aus Deutschland lesen Sie auch unseren [Erbschaft Türkei Gesamtleitfaden](/de/blog/erbschaft-tuerkei-deutschland-ratgeber).

**Was wir für Sie übernehmen:**
- Prüfung der Konstellation (Notar oder Gericht, welche Dokumente werden benötigt)
- Vorbereitung und Prüfung des Vollmachtstexts für das Konsulat
- Koordination von Apostille und vereidigter Übersetzung
- Beantragung des türkischen Erbscheins beim Friedensgericht oder Notar
- Türkische Steuernummer für ausländische Erben
- Erbschaftsteuererklärung und Unbedenklichkeitsbescheinigung
- Grundbuchumschreibung über WEBTAPU
- Bankkorrespondenz und Kontofreigabe
- Parallelkoordination mit deutschen Stellen bei Bedarf (Fremdrechtserbschein, Nachlassgericht)


Diesen Leitfaden haben wir auch auf Türkisch veröffentlicht:
[Veraset İlamı Nedir, Nasıl Alınır? Almanya'dan Eksiksiz Rehber →](https://www.hasandogru.de/tr/blog/veraset-ilami-nedir-nasil-alinir)

---

## Häufig gestellte Fragen

**Was ist der türkische Erbschein und wofür brauche ich ihn?**
Der Veraset İlamı ist der amtliche Nachweis der Erbenstellung in der Türkei. Ohne ihn sind Grundbuchumschreibung, Bankkontofreigabe und Erbschaftsteuererklärung in der Türkei nicht möglich.

**Gilt der deutsche Erbschein in der Türkei?**
Für Immobilien: Nein. Türkische Grundbuchämter verlangen zwingend den türkischen Erbschein. Für Bankkonten: theoretisch möglich (gem. § 14 Nachlassabkommen), in der Praxis aber oft nicht akzeptiert.

**Muss ich für den türkischen Erbschein in die Türkei reisen?**
Nein. Mit einer konsularischen Vollmacht führt Ihr Anwalt den gesamten Prozess in der Türkei für Sie.

**Kann der türkische Notar den Erbschein ausstellen, wenn ein Erbe Deutscher ist?**
Nein. Art. 71/B Abs. 3 Notariatsgesetz schließt den Notarweg bei ausländischer Beteiligung aus. Das Friedensgericht ist zuständig. Gleiches gilt für Mavi-Kart-Inhaber.

**Was ist der Unterschied zwischen türkischem und deutschem Erbschein?**
Beide weisen die Erbenstellung nach — aber jeder nur im eigenen Land. Für türkisches Vermögen ist der türkische Erbschein erforderlich; für deutsches Vermögen der deutsche. Bei türkischem Erblasser mit Bankkonten in Deutschland kann der apostillierte türkische Erbschein genügen.

**Wie lange dauert das Verfahren?**
Beim Notar (nur rein türkische Beteiligte): gleicher Tag. Beim Friedensgericht: 2–6 Wochen in einfachen Fällen; 2–4 Monate bei ausländischen Erben oder Registerunklarheiten.

**Was kostet der türkische Erbschein 2026?**
Notar: ca. 3.000 TL. Gericht: ca. 3.500–4.000 TL. Hinzu kommen Apostille, Übersetzung und Konsulatsgebühren (ca. 200–500 €).

**Was passiert nach dem Erbschein?**
Erbschaftsteuererklärung → Unbedenklichkeitsbescheinigung → Grundbuchumschreibung (WEBTAPU) → Bankkonten → Fahrzeugummeldung. Alle Schritte führt Ihr Anwalt mit der Vollmacht.

---

*Dieser Artikel dient allgemeinen Informationszwecken und ersetzt keine rechtliche Beratung. Für Ihren konkreten Fall wenden Sie sich an Av. Hasan Doğru bei der Doğru Kanzlei.*`,
    contentTR: `**YASAL UYARI:** Bu makale yalnızca Türk hukukuna ilişkin genel bilgi amaçlıdır. Doğru Kanzlei, §207 BRAO kapsamında yalnızca Türk hukuku konularında danışmanlık vermektedir.

---

Almanya'da yaşarken Türkiye'de bir yakınınızı kaybettiğinizde, keder bir yana, bir de karşınıza karmaşık görünen hukuki süreçler çıkar. Bankalar hesaplara erişim istemiyor. Tapu müdürlüğü işlem yapmıyor. Vergi dairesi beyanname bekliyor. Ve herkes size aynı şeyi söylüyor: "Önce veraset ilamı lazım."

Peki bu belge tam olarak nedir? Nasıl alınır? Türkiye'ye gitmek zorunda mısınız? Mavi kartlı olduğunuz için noter sizi geri mi çeviriyor? Almanya'da aldığınız Erbschein işe yarar mı?

Bu rehber, tüm bu soruların yanıtlarını veriyor.

---

## 1. Veraset İlamı (Mirasçılık Belgesi) Nedir?

Veraset ilamı — halk arasında hâlâ bu eski adıyla anılır, resmi adı artık **mirasçılık belgesi**dir — bir kişinin vefatının ardından kimlerin yasal mirasçı olduğunu ve her mirasçının mirastan aldığı payı gösteren resmi belgedir.

Türk Medeni Kanunu m.598 uyarınca sulh hukuk mahkemesi veya noterlikçe düzenlenir. Belgenin hukuki niteliği önemli bir ayrım taşır: veraset ilamı **bildirici** bir belgedir, **kurucu** değil. Yani miras hakkınız miras bırakanın ölümüyle zaten doğar — veraset ilamı bu hakkı üçüncü kişilere karşı kanıtlamanızı sağlar.

### Veraset İlamı Ne İçin Gereklidir?

Bu belge olmadan şu işlemlerin hiçbirini yapamazsınız:

- **Tapu intikali:** Miras kalan taşınmazları adınıza tescil ettirmek
- **Banka hesapları:** Vefat edenin hesaplarına erişim veya devir
- **Araç devri:** Miras kalan araçların trafik tescil işlemleri
- **Veraset vergisi beyannamesi:** Vergi dairesine zorunlu bildirim
- **Dava süreçleri:** Tenkis, muris muvazaası veya izale-i şuyu gibi davalarda mirasçılık sıfatının ispatı

### "Eski" ve "Yeni" İsim Karışıklığı

2002'de yürürlüğe giren Türk Medeni Kanunu ile belgenin resmi adı "mirasçılık belgesi" olarak değişti. Ancak uygulamada avukatlar, mahkemeler ve halk hâlâ "veraset ilamı" terimini kullanmaya devam etmektedir. Her iki isim de aynı belgeye işaret eder.

---

## 2. Veraset İlamı Nereden Alınır? Noter mi, Mahkeme mi?

Bu sorunun cevabı sizin durumunuza göre değişir. İki yol var — ve birini seçemeyebilirsiniz.

### Yol A: Noterden (Hızlı Yol)

Tüm koşullar uygunsa noter işlemi **aynı gün, 15–30 dakika içinde** tamamlanır. Türkiye'deki herhangi bir noter başvuruyu kabul edebilir — miras bırakanın son ikametgahına gitmenize gerek yoktur.

**Noterden başvuru için ön koşullar:**
- Tüm mirasçılar Türk vatandaşı (ya da T.C. vatandaşlığını sürdüren çifte vatandaş)
- Miras bırakan da Türk vatandaşı
- Nüfus kayıtları (MERNİS) eksiksiz ve açık
- Vasiyetname yok

**İstenen belgeler (noterden):**
- Başvuranın T.C. kimlik kartı (ya da pasaportu)
- Miras bırakanın T.C. kimlik numarası

Belgeler tam olduğunda noter MERNİS sistemine bağlanarak nüfus kayıtlarını sorgular, soybağını tespit eder ve mirasçılık belgesini aynı anda düzenler.

### Yol B: Sulh Hukuk Mahkemesinden (Zorunlu Yol)

Aşağıdaki durumların **herhangi biri** geçerliyse noter işlem yapamaz ve mahkemeye başvurmanız zorunludur (Noterlik Kanunu m.71/B-4):

| Durum | Neden noter yapamaz? |
|---|---|
| Mirasçılardan biri yabancı uyruklu | MERNİS yabancı kayıtlara erişemez |
| Mavi kartlı mirasçı | Nüfus kaydı kapatılmış, yabancılık unsuru var |
| Çifte vatandaş mirasçı | Yabancılık unsuru taşır |
| Nüfus kayıtlarında belirsizlik | Soybağı tespit edilemiyor |
| Vasiyetname mevcut | Kanun gereği mahkeme yetkisi |
| Muris veya mirasçı evlatlık | Özel hukuki durum |
| Muris 04.04.1926 öncesi vefat etmiş | TMK öncesi kayıtlar |

Mahkeme başvurusu birkaç hafta ile birkaç ay arasında sürebilir. Yetkili mahkeme esnektir: murisin son yerleşim yeri veya mirasçılardan herhangi birinin yerleşim yeri sulh hukuk mahkemesi yetkilidir. Yani Türkiye'nin herhangi bir ilindeki sulh hukuk mahkemesine başvurabilirsiniz.

### 2026 Yılı Ücretleri

| Başvuru Yeri | Ücret (2026) | Süre |
|---|---|---|
| Noterden | ~3.000 TL | Aynı gün (15–30 dakika) |
| Sulh Hukuk Mahkemesinden | ~3.500–4.000 TL | 2 hafta – 4 ay |

Bu ücretler sabit olup mirasın değerine göre değişmez. Avukatlık ücreti ve vekâletname masrafları ayrıdır.

---

## 3. Mavi Kartlılar ve Yabancı Uyruklu Mirasçılar İçin Özel Durum

Bu bölüm, Almanya'daki Türk topluluğunu en çok etkileyen konulardan biridir ve çoğu rehberde yeterince açıklanmaz.

### Mavi Kart Nedir?

Mavi kart, doğumla Türk vatandaşı olup sonradan izin alarak Türk vatandaşlığından çıkan kişilere verilen belgedir. Mavi kart sahipleri çoğu Türk vatandaşı hakkına sahip olmaya devam eder — ancak hukuki açıdan Türk vatandaşı sayılmazlar.

### Mavi Kartlılar Noterden Veraset İlamı Alabilir mi?

**Hayır, genel olarak alamazlar.** İki temel nedeni var:

1. **Hukuki engel:** Noterlik Kanunu m.71/B-4 uyarınca, başvuranın yabancılık unsuru taşıması durumunda noter yetkisiz kalır. Mavi kart sahipleri T.C. vatandaşı olmadığından bu kapsama girer.

2. **Teknik engel:** Türk vatandaşlığından çıkıldığında nüfus aile kütüğündeki kayıt kapatılır. Noter MERNİS sisteminde bu kişinin soybağını artık göremez — dolayısıyla mirasçılık belgesi düzenleyemez.

Bazı noterlerin mavi kartlılara belge düzenlediğine dair vakalar bildirilmiş olsa da bu durum istisnaidir ve hukuki açıdan tartışmalıdır. **Güvenli yol her zaman Sulh Hukuk Mahkemesi'ne başvurmaktır.**

### Alman Vatandaşı Mirasçılar

Mirasçılar arasında Türk vatandaşlığı taşımayan bir Alman vatandaşı varsa durum nettir: **noter bu durumda mirasçılık belgesi düzenleyemez.** Almanya'da doğmuş, hiç Türk vatandaşlığı olmamış bir kişi için mahkeme zorunludur.

Bu kişilerin başvuruda sunması gereken ek belgeler:
- Pasaport fotokopisi (konsolosça onaylı)
- Nüfus ve ikametgah belgesi (Anmeldebescheinigung — apostilli)
- Soybağını kanıtlayan belgeler (doğum belgesi, evlilik belgesi — apostilli ve yeminli Türkçe çevirili)

---

## 4. Almanya'dan Veraset İlamı: Türkiye'ye Gitmek Zorunda mısınız?

**Hayır.** Almanya'dan, Türkiye'ye gitmeden veraset ilamı almak tamamen mümkündür.

### Adım Adım: Almanya'dan Veraset İlamı Süreci

**Adım 1 — Konsolosluğa gidin ve vekâletname düzenleyin**

Almanya'daki Türk konsolosluklarından birine gidin (Frankfurt, Berlin, Stuttgart, Münih, Köln, Hamburg, Hannover, Karlsruhe, Münster veya Nürnberg). Yanınızda pasaportunuz olmalı.

Avukatınıza düzenleyeceğiniz vekâletnamede şu yetkilerin **açıkça belirtilmesi** kritiktir:
- Veraset ilamı (mirasçılık belgesi) çıkarma
- Sulh hukuk mahkemesinde dava açma ve takip etme
- Tapuda intikal işlemi yapma
- Vergi dairesinde beyanname verme
- Banka işlemlerini yürütme
- İhtiyati tedbir talep etme

Genel bir vekâletname yeterli değildir. Her yetkinin tek tek sayılması gerekir. Vekâletname süreci için ayrıca [Türkçe vekâletname nasıl çıkarılır](/tr/blog/turkce-vekaletname-nasil-cikarilir) rehberimize bakabilirsiniz.

**Adım 2 — Gerekli belgeleri hazırlayın**

Almanya'da düzenlenen belgeler Türkiye'de kullanılabilmesi için **apostil şerhi** almalı ve **yeminli tercüman** tarafından Türkçeye çevrilmelidir.

| Belge | Apostil Gerekli mi? | Türkçe Çeviri Gerekli mi? |
|---|---|---|
| Ölüm belgesi (Almanya'dan) | Evet | Evet (yeminli) |
| Nüfus kayıt örneği (Türkiye'den) | Hayır | Hayır |
| Pasaport fotokopisi | Hayır | Hayır |
| Doğum belgesi (Almanya'dan) | Evet | Evet (yeminli) |
| Evlilik belgesi (Almanya'dan) | Evet | Evet (yeminli) |
| Alman Erbschein (taşınırlar için) | Evet | Evet (yeminli) |

**Adım 3 — Avukatınız başvuruyu yapar**

Vekâletname ve belgeler avukatınıza iletildikten sonra, avukatınız Türkiye'deki ilgili notere veya sulh hukuk mahkemesine başvurur. Durum uygunsa noterden aynı gün belge alınabilir. Mahkeme gerektiren durumlarda süreç birkaç haftaya uzayabilir.

**Adım 4 — Belgeyi alın ve sonraki işlemlere geçin**

Veraset ilamı alındıktan sonra avukatınız süreci devam ettirir: vergi beyannamesi, tapu intikali, banka işlemleri. Türkiye'deki miras sürecinin tamamı için [Almanya'da yaşarken Türkiye'de miras rehberimizi](/tr/blog/almanya-turkiye-miras-hukuku-rehberi) okuyabilirsiniz.

> ⚠️ **Önemli:** Vekâletnamede yetki eksikliği, Türkiye'deki miras sürecinde en sık karşılaşılan gecikme nedenidir. Konsoloslukta düzenlenen vekâletname onaylanmadan önce avukatınıza danışarak gerekli yetkilerin tamamının metne girdiğini teyit edin.

---

## 5. Alman Erbschein Türkiye'de Geçerli mi?

Bu, Almanya'daki Türk ailelerinin en sık sorduğu sorulardan biridir — ve cevap çoğunlukla beklediklerinden farklıdır.

### Taşınmaz Mallar (Tapu) İçin: Hayır

Türk tapu müdürlükleri taşınmaz devri için **yalnızca Türkiye'de düzenlenmiş mirasçılık belgesini** kabul eder. Apostilli ve yeminli çevirili Alman Erbschein tapu işlemi için geçerli değildir. Bu uygulama Türk Konsolosluk Sözleşmesi'nden (1929) kaynaklanmakta olup Türk mahkeme içtihatlarıyla da sabittir.

### Taşınır Mallar (Banka Hesabı) İçin: Teoride Evet, Pratikte Değişken

1929 tarihli Türk-Alman Konsolosluk Anlaşması'nın 14. maddesi uyarınca, miras bırakan Türk vatandaşıysa ve Almanya'da yalnızca taşınır mal (banka hesabı) bırakmışsa, apostilli Türk veraset ilamı Almanya'da bu hesaplar için kullanılabilir. Tersine, Türkiye'deki taşınır mallar için apostilli Alman Erbschein teorik olarak kabul edilebilir.

Ancak Türk bankalar pratikte yine de Türkiye'de düzenlenmiş mirasçılık belgesi istemektedir. **En güvenli ve evrensel çözüm her zaman Türkiye'de veraset ilamı almaktır.**

### E-Devlet Üzerinden Veraset İlamı Sorgulama

2026 itibarıyla e-Devlet portalı (e-devlet.gov.tr) üzerinden mevcut veraset ilamlarınızı sorgulamak ve dijital kopyasını görüntülemek mümkündür. Ancak bu dijital görüntüleme tapu tescili gibi resmi işlemler için yeterli değildir — fiziki veya onaylı örnek gerekmektedir.

---

## 6. Veraset İlamı Alındıktan Sonra Ne Yapılır?

Veraset ilamı almak tek başına miras mallarının size geçmesini sağlamaz. Sonraki adımlar sırasıyla şöyle işler:

### Adım 1: Veraset ve İntikal Vergisi Beyannamesi

**Süre sınırı kritiktir:** Murisin ölümünden itibaren yurt dışındaki mirasçılar için **6 ay** (hem ölüm hem mirasçılar yurt dışındaysa **8 ay**) içinde vergi dairesine beyanname verilmelidir. Bu süre kaçırılırsa para cezası ve gecikme faizi uygulanır.

Verginin ödenmesi ardından vergi dairesi **İlişik Yoktur Yazısı** (vergi ilişiği kesme belgesi) düzenler. Bu belge olmadan tapu intikali yapılamaz.

### Adım 2: Tapu İntikali (WEBTAPU)

WEBTAPU (webtapu.tkgm.gov.tr) üzerinden online başvuru yapılabilir. Avukatınız vekâletname kapsamında bu işlemi de sizin adınıza yürütebilir.

Tapu intikalinden sonra taşınmaz mirasçılar adına "elbirliği mülkiyeti" olarak tescil edilir. Satış için tüm mirasçıların katılımı gerekirken tapu tescili için tek mirasçının başvurusu yeterlidir.

### Adım 3: Banka Hesapları

Her banka kendi prosedürüne sahiptir. Genel olarak:
- Veraset ilamı (mirasçılık belgesi)
- Vergi ilişiği kesme belgesi
- Tüm mirasçıların birlikte başvurusu

gerekmektedir. Birden fazla mirasçı varsa ve anlaşmazlık çıkıyorsa, ayrı hesaplar için ayrı avukat aracılığıyla işlem yapılabilir.

### Adım 4: Araç Devri

Miras kalan araç için veraset ilamı ve vergi ilişiği kesme belgesiyle trafik tescil müdürlüğüne başvurulur. Avukat vekâletname kapsamında bu işlemi de yürütebilir.

---

## 7. Veraset İlamının İptali: Ne Zaman Geçersiz Olur?

Veraset ilamı kesin hüküm niteliği taşımaz. TMK m.598/3 uyarınca mirasçılık belgesinin geçersizliği her zaman ileri sürülebilir.

### Hangi Hallerde İptal Edilebilir?

- Belgede yer almayan ancak gerçekte mirasçı olan kişilerin bulunması
- Belgede gösterilen mirasçılardan birinin gerçekte mirasçı olmaması
- Soybağı tespitinde hata veya eksik kayıt
- Vasiyetnamenin sonradan ortaya çıkması

### İptal Davası Nerede Açılır?

Veraset ilamı iptali davası, herhangi bir mirasçının yerleşim yerindeki **Asliye Hukuk Mahkemesi'nde** açılır. Davalı olarak diğer tüm mirasçılar gösterilir. Dava sonucunda hem hatalı belge iptal edilir hem de yeni mirasçılık belgesi düzenlenmesi talep edilir.

---

## 8. Yaygın Hatalar ve Kaçınma Yolları

Almanya'dan veraset ilamı sürecini yürütenlerin en sık yaptığı hatalar şunlardır:

**1. Vekâletname yetkilerini eksik yazmak**
Konsoloslukta "genel vekâletname" düzenletmek yeterli değildir. Tapu, banka, mahkeme ve vergi yetkilerinin tek tek belirtilmesi şarttır.

**2. Apostil ve çeviri işlemlerini atlayıp Almanya'dan belge göndermek**
Türkiye'deki mahkeme veya noter, apostilsiz ve yeminli çevirisiz belgeler üzerinde işlem yapamaz. Her yabancı belge için bu iki adım zorunludur.

**3. Mavi kartlı olarak notere gidip geri çevrilmek ve süreci kaybetmek**
Mavi kartlıların doğrudan mahkemeye gitmesi gerektiğini bilmeden notere gidip vakit kaybetmesi çok yaygın bir hatadır. Avukat yönlendirmesiyle bu süreci baştan doğru yönetebilirsiniz.

**4. Vergi beyanname süresini kaçırmak**
Veraset ilamı alındıktan sonra "zaten belge var, acele yok" düşüncesiyle vergi süresini kaçırmak ciddi cezalara yol açar. Beyanname süresi veraset ilamından değil, **murisin ölümünden** itibaren işler.

**5. Alman Erbschein'ı tapuya götürmek**
Türk tapu müdürlükleri Alman Erbschein kabul etmez. Bu belgeyle giden mirasçılar ellerini boş döner ve süreci sıfırlamak zorunda kalır.

---

## 9. Veraset İlamı ve Sonrasındaki Süreç İçin Sıkça Karşılaşılan Senaryolar

### Senaryo A: Tüm mirasçılar Türk vatandaşı, vasiyetname yok, nüfus kayıtları eksiksiz
→ En basit durum. Avukatınız herhangi bir noterden aynı gün belgeni alır.

### Senaryo B: Mirasçılardan biri Almanya doğumlu Alman vatandaşı
→ Mahkeme zorunludur. Alman mirasçının apostilli belgeleri (pasaport, doğum belgesi, ikametgah belgesi) yeminli Türkçe çeviriyle mahkemeye sunulur. Süre 4–12 hafta.

### Senaryo C: Miras bırakan Almanya'da vefat etti, Türkiye'de taşınmazı var
→ Almanya'daki ölüm belgesi apostilli ve yeminli çevirili olarak Türkiye'ye gönderilir. Hem Türk hem Alman veraset ilamı alınması gerekebilir (taşınır/taşınmaz ayrımına göre). Avukat her iki ülkedeki süreci koordineli yönetmeli.

### Senaryo D: Miras bırakan mavi kartlı, mirasçılar Türk vatandaşı
→ Miras bırakanın Türk vatandaşlığından çıkması durumu karmaşıklaştırır. Hangi ülke hukukunun uygulanacağı mal varlığının niteliğine göre belirlenir. Uzman avukat değerlendirmesi zorunludur.

### Senaryo E: Mirasçılar arasında anlaşmazlık var
→ Veraset ilamı yine de alınabilir — tek bir mirasçının başvurusu yeterlidir. Paylaşım anlaşmazlığı ayrı bir dava konusudur (izale-i şuyu veya tenkis).

---

## 10. Doğru Kanzlei ile Almanya'dan Veraset İlamı Sürecinizi Yönetin

[Doğru Kanzlei](https://www.hasandogru.de/tr/hizmetler/miras-hukuku) olarak, hem **Ankara Barosu** hem de **Karlsruhe Barosu** (§207 BRAO) üyesiyiz. Bu çift üyelik sayesinde Türkiye'deki miras süreçlerini herhangi bir aracı olmadan, UYAP avukat portalı üzerinden Mannheim ofisimizden doğrudan yönetiyoruz.

Almanya'daki konsolosluklarda tüm şehirlerde müvekkillerimize vekâletname sürecinde rehberlik ediyoruz. Belgelerin apostil ve çeviri aşamasından sulh hukuk mahkemesi başvurusuna, vergi beyannamesinden tapu intikaline kadar tüm adımları sizin adınıza takip ediyoruz.

**Almanya'dan yönettiğimiz veraset ilamı süreçleri:**
- Noterden veya mahkemeden mirasçılık belgesi alınması
- Mavi kartlı ve yabancı uyruklu mirasçılar için özel başvuru
- Apostil ve yeminli çeviri koordinasyonu
- Veraset ve intikal vergisi beyannamesi
- İlişik yoktur yazısı temini
- WEBTAPU üzerinden tapu intikali
- Banka ve araç devir işlemleri


---

## Sıkça Sorulan Sorular

**Veraset ilamı nedir ve ne işe yarar?**
Kimin ne oranda mirasçı olduğunu gösteren resmi belgedir. Tapu intikali, banka hesabı devri, araç tescili ve veraset vergisi beyannamesi için zorunludur.

**Veraset ilamını noterden mi yoksa mahkemeden mi almalıyım?**
Tüm mirasçılar Türk vatandaşıysa ve nüfus kayıtları açıksa noter tercih edilir — aynı gün, ~3.000 TL. Mavi kartlı, yabancı uyruklu veya çifte vatandaş mirasçı varsa mahkeme zorunludur — birkaç hafta, ~3.500–4.000 TL.

**Mavi kartlı mirasçı veraset ilamını nereden alır?**
Doğrudan Sulh Hukuk Mahkemesinden. Noterlik Kanunu m.71/B-4 uyarınca mavi kartlılar için noter yetkisiz kalır. Almanya'dan konsolosluk vekâletnamesiyle avukat aracılığıyla başvuru yapılabilir.

**Almanya'dan Türkiye'ye gitmeden veraset ilamı alınabilir mi?**
Evet. Konsolosluktan özel yetkili vekâletname düzenleyerek avukatınız tüm süreci sizin adınıza yürütür.

**Alman Erbschein Türkiye'de geçerli midir?**
Tapu işlemleri için hayır. Türk tapu müdürlükleri yalnızca Türkiye'de düzenlenmiş mirasçılık belgesini kabul eder. Banka hesapları için teorik olarak kabul edilebilir ancak pratikte Türk bankalar yine de Türk belgesi ister.

**Veraset ilamı almak için tüm mirasçıların başvurması gerekir mi?**
Hayır. Tek bir mirasçının başvurusu yeterlidir. Belgede tüm mirasçılar ve payları gösterilir.

**Veraset ilamı 2026 yılında ne kadara mal olur?**
Noterden ~3.000 TL (aynı gün). Sulh Hukuk Mahkemesinden ~3.500–4.000 TL (birkaç hafta–ay). Avukatlık ve apostil masrafları ayrıdır.

**Veraset ilamı alındıktan sonra ne yapılır?**
Sırasıyla: Vergi beyannamesi (6–8 ay içinde) → İlişik Yoktur Yazısı → Tapu intikali (WEBTAPU) → Banka işlemleri → Araç devri.

**Veraset ilamı iptal edilebilir mi?**
Evet. TMK m.598/3 uyarınca geçersizliği her zaman ileri sürülebilir. İptal davası Asliye Hukuk Mahkemesinde açılır.

---

*Bu makale genel bilgi amaçlıdır ve hukuki danışmanlık yerine geçmez. Kendi durumunuz için Av. Hasan Doğru'ya danışmanızı öneririz.*`,
    contentEN: `**LEGAL NOTICE:** This article addresses Turkish law exclusively. Doğru Kanzlei advises on Turkish law under § 207 BRAO and does not advise on German domestic law.

---

Someone in your family has passed away in Turkey, or left assets there. You are sitting in Germany trying to figure out what comes next. You have heard the phrase "Veraset İlamı" mentioned by a relative, by a bank, or by the land registry office. You are not sure what it is, who issues it, whether you have to fly to Turkey to get it, or whether the probate certificate you already have from Germany is enough.

It is probably not enough. This guide explains why — and exactly what you need to do instead.

---

## 1. What Is the Turkish Certificate of Inheritance?

The Turkish Certificate of Inheritance — Veraset İlamı in Turkish, also called Mirasçılık Belgesi (Certificate of Heirship) — is the official document that formally identifies who the legal heirs of the deceased are and what share of the estate each heir is entitled to receive.

It is issued under Article 598 of the Turkish Civil Code (Türk Medeni Kanunu) by either the Turkish Civil Court of Peace (Sulh Hukuk Mahkemesi) or, in straightforward cases involving only Turkish nationals, by a Turkish notary.

### Why Is It Required?

Without the Turkish Certificate of Inheritance, none of the following is possible in Turkey:

- **Property title transfer (Tapu intikali):** Registering inherited real estate in the heirs' names
- **Bank accounts:** Accessing frozen accounts or transferring funds belonging to the deceased
- **Inheritance tax declaration:** The tax office requires this certificate before processing declarations
- **Vehicle re-registration:** Transferring inherited vehicles at the traffic registry
- **Legal proceedings:** Proving heirship in estate disputes (forced heirship claims, fraudulent transfer lawsuits, partition proceedings)

### What the Certificate Is and Is Not

The certificate is **declaratory** — it declares who is already an heir (heirship arises automatically on death), it does not create heirship. This matters for one important reason: obtaining the certificate does not mean you have accepted the inheritance. You can still reject it within the three-month rejection window after you become aware of your status as heir and the death. Neither obtaining the certificate nor filing a tax declaration constitutes acceptance.

The certificate is also **not final** — it can be challenged and corrected at any time through an annulment lawsuit (Veraset İlamının İptali Davası) before the Court of First Instance (Asliye Hukuk Mahkemesi).

---

## 2. Notary or Court — Which Route Do You Take?

Since 2011, the Turkish Certificate of Inheritance can be issued either by a Turkish notary or by the Civil Court of Peace. Which route applies to you depends on who is involved in the inheritance.

### Route A: Turkish Notary (Fast track — available only under specific conditions)

When all conditions are met, the notary can issue the certificate on the **same day in 15–30 minutes**. The notary accesses the Turkish civil registry (MERNİS) electronically to verify the family tree and calculates the legal shares accordingly.

**Conditions for the notary route — all must apply:**
- All heirs hold Turkish nationality
- The deceased held Turkish nationality
- The civil registry records are complete and unambiguous
- No will exists

> ⚠️ **Critical for anyone reading this from Germany:** The moment **even a single** party involved — whether the deceased or any heir — holds a foreign nationality (including German nationality), holds a Blue Card (Mavi Kart), or is a dual national, the Turkish notary **loses jurisdiction entirely**. This is not discretionary. Article 71/B(3) of the Turkish Notaries Act (Noterlik Kanunu) makes this an absolute rule. The notary cannot issue the certificate in these cases even if everything else is straightforward.

### Route B: Civil Court of Peace (Sulh Hukuk Mahkemesi — required in most cases with a Germany connection)

The court route is mandatory when:
- Any heir or the deceased holds a foreign nationality (German, British, Dutch, etc.)
- Any heir is a Blue Card (Mavi Kart) holder
- Any heir is a dual national (Turkish + German)
- Civil registry records are unclear or incomplete
- A will exists
- The heirship is disputed

**Which court?** Any Turkish Civil Court of Peace has jurisdiction — at the deceased's last place of residence, at any heir's place of residence, or at the location of inherited property. This flexibility is useful: your lawyer can file in whichever city is most practical.

**Timeline:**
- Straightforward cases with all documents ready: 2–6 weeks
- Cases with foreign heirs, service of process requirements, or registry complications: 2–4 months

### Cost Comparison 2026

| Route | Approximate Cost | Timeline |
|---|---|---|
| Turkish notary | ~3,000 TL | Same day (only Turkish nationals) |
| Civil Court of Peace | ~3,500–4,000 TL | 2 weeks to 4 months |

These fees are fixed — they do not scale with the value of the estate. Additional costs from Germany include: Turkish consulate fees for the power of attorney, apostille fees, and certified translation costs (combined typically €200–500).

---

## 3. Blue Card (Mavi Kart) Holders — A Special Situation Rarely Explained

If you or anyone else involved in the inheritance holds a Blue Card, this section is the most important one for you. Almost no English-language guide addresses this clearly.

### What Is a Blue Card (Mavi Kart)?

The Blue Card is an official identity document issued to former Turkish citizens — people who were Turkish nationals by birth but renounced their Turkish citizenship with government permission. It is also issued to their descendants up to the third degree.

Blue Card holders retain most of the rights of Turkish citizens — they can live, work, and own property in Turkey. But they are legally classified as foreign nationals. They are not Turkish citizens.

### The Inheritance Certificate Problem for Blue Card Holders

**Blue Card holders cannot obtain the Turkish Certificate of Inheritance from a notary.** There are two reasons for this:

**Legal reason:** Article 71/B(3) of the Notaries Act excludes anyone with a foreign status — and Blue Card holders are legally foreign nationals — from the notary route.

**Technical reason:** When someone renounces Turkish citizenship, their record in the civil registry (Nüfus) is closed. The notary accesses the MERNİS database to trace family relationships — but for Blue Card holders, that record no longer exists in the active registry. The notary physically cannot verify the family connection.

**Consequence:** Blue Card holders must go through the Civil Court of Peace. The good news: this can be done entirely through a lawyer with a power of attorney from Germany. No travel to Turkey required.

### What Blue Card Holders Need to Bring

Unlike Turkish nationals, Blue Card holders must provide additional documentation to the court that proves family relationships through other means:

- Blue Card itself
- Foreign passport (apostilled copy)
- Birth certificate (apostilled and certified translated into Turkish)
- Marriage certificate if applicable (apostilled and certified translated)
- Any document linking the Blue Card holder to the deceased

---

## 4. Does a German Erbschein (Probate Certificate) Work in Turkey?

This is the question asked most often — and the answer is more nuanced than most people expect.

### The Legal Framework: The 1929 Convention

The relationship between Germany and Turkey on estate matters is governed by the Annex to Article 20 of the German-Turkish Consular Convention of 28 May 1929 — the so-called Nachlassabkommen (Estate Agreement). This agreement remains in force today and takes precedence over the EU Succession Regulation, since Turkey is not an EU member state.

### The Decision Matrix: Which Certificate for What?

| Situation | Asset Type | What Is Needed? |
|---|---|---|
| Turkish deceased, assets in Turkey | Real estate (Tapu) | Turkish certificate — always required |
| Turkish deceased, assets in Turkey | Bank accounts | Turkish certificate — almost always required in practice |
| Turkish deceased, assets in Germany | Bank accounts | Turkish certificate (apostilled) may suffice under § 14 of the Convention |
| Turkish deceased, assets in Germany | Real estate | German Erbschein (foreign-law certificate under § 2369 BGB) |
| German deceased, assets in Turkey | Real estate | Turkish certificate — always required |
| German deceased, assets in Turkey | Bank accounts | Apostilled German Erbschein may suffice under § 14; in practice Turkish banks often demand the Turkish certificate |
| German deceased, assets in Germany | All | German Erbschein |

### For Turkish Real Estate: Always the Turkish Certificate

This is the critical point: **Turkish land registries will not accept a German Erbschein, an apostilled and translated German probate document, or a European Certificate of Succession for property title transfers.** The only document that works is the Turkish Certificate of Inheritance. This is confirmed by consistent practice of Turkish land registries and is grounded in the lex rei sitae principle — Turkish property is always governed by Turkish law.

### The European Certificate of Succession Gap

Many EU citizens in Germany are unaware of this: the **EU Succession Regulation (No. 650/2012)** does not apply in Turkey. Turkey is not an EU member state and the Regulation has no binding effect there. This means:

- A European Certificate of Succession is not recognised by Turkish authorities
- A choice-of-law clause in a German will selecting German law to govern the estate does NOT affect Turkish real estate — Turkish law applies regardless
- EU succession planning that works within Germany may fail entirely when Turkish assets are involved

If you are an EU citizen with assets in both Germany and Turkey, you need to plan for both legal systems separately. A Turkish will or an internationally coordinated estate plan is far more effective than a single German will.

---

## 5. Step by Step: Getting the Turkish Certificate of Inheritance from Germany

### Step 1 — Assess Your Situation

Before doing anything else, establish: What nationalities do all involved parties hold? What is in the Turkish estate — real estate, bank accounts, vehicles, company shares? Is there a will? Are there any civil registry complications (name discrepancies, children from different marriages, adoptions)?

The answers determine whether a notary or court is needed, and what documents must be prepared. A brief consultation with a lawyer before you start saves significant time.

### Step 2 — Issue a Power of Attorney at the Turkish Consulate

Go to the nearest Turkish consulate in Germany. Consulates with notarial functions are located in Frankfurt, Berlin, Stuttgart, Munich, Cologne, Hamburg, Hanover, Karlsruhe, Münster and Nuremberg.

Bring your valid passport. Have a **Sondervollmacht (special power of attorney) drawn up in Turkish**. This document is immediately valid in Turkey without an apostille — it is one of the few documents that does not require further certification. For German-language background on the document itself, see our [power of attorney guide](/de/blog/vollmacht-auf-tuerkisch).

The power of attorney must explicitly authorise the following:

- Filing the application for the Certificate of Inheritance at notary or court
- Reviewing and accessing the case file
- Representing you before the tax office (inheritance tax declaration)
- Filing the WEBTAPU application and completing the title deed transfer
- Bank correspondence and account release
- Initiating court proceedings if necessary (forced heirship, fraudulent transfer, partition)

> ⚠️ **Common mistake:** A general power of attorney — even one notarised in Germany — is not sufficient for Turkish court and land registry proceedings. The document must be issued at the Turkish consulate, in Turkish. Your lawyer should review the text before you go.

### Step 3 — Prepare Your Documents

All foreign documents (issued outside Turkey) must be **apostilled** and **certified translated into Turkish** by a sworn translator before they can be used in Turkish legal proceedings.

| Document | Apostille Required? | Certified Turkish Translation Required? |
|---|---|---|
| Death certificate (issued abroad) | Yes | Yes |
| Passport copy | No | No |
| Birth certificate (issued abroad) | Yes | Yes |
| Marriage certificate (issued abroad) | Yes | Yes |
| German Erbschein (if relevant) | Yes | Yes |
| Turkish civil registry extract (Nüfus) | No | No |

**How to get an apostille in Germany:** Contact the relevant Regierungspräsidium (regional government authority) for the type of document. Death certificates from civil registry offices (Standesamt) need the apostille from the responsible Regierungspräsidium.

**Sworn translator:** Ensure the translator is state-certified (in Germany: "allgemein beeidigt" for Turkish). Not every translation agency meets this standard. Ask your lawyer which translators they work with.

### Step 4 — Your Lawyer Files in Turkey

With the power of attorney and documents in hand, your lawyer in Turkey files the application. For court cases involving foreign heirs, the court must formally serve notice on the parties — your lawyer handles this. Once the certificate is issued, it has no expiry date — it remains valid indefinitely unless successfully challenged.

### Step 5 — What Follows the Certificate

The certificate is the key that unlocks everything else — but it is not the end of the process.

**Inheritance tax declaration:** Must be filed at the Turkish tax office at the deceased's last place of residence. Deadline for heirs living abroad: 6 months from the date of death (8 months if both the deceased and all heirs were abroad). File even if the court process is still ongoing — the deadline runs from the death, not from the certificate.

**Tax clearance certificate (İlişik Yoktur Yazısı / İlişik Kesme Belgesi):** Issued by the tax office after the inheritance tax is paid. Without it, no title deed transfer can proceed.

**Title deed transfer (WEBTAPU):** Online application through Turkey's land cadastre system. Your lawyer manages this with the power of attorney.

**Bank accounts:** Each bank has its own internal procedure. Generally: the certificate, tax declaration and clearance certificate are required. All heirs may need to participate if there are multiple.

**Vehicles:** Re-registration at the traffic registry office.

---

## 6. Common Mistakes — and How to Avoid Them

**Mistake 1: Going to a Turkish notary as a foreign national or Blue Card holder**
The notary will turn you away. This is a very common experience that wastes weeks of time. Always assess nationality first.

**Mistake 2: Presenting a German Erbschein to a Turkish land registry**
It will not be accepted for property transfers. The only solution is the Turkish certificate — no amount of apostilling, translating or notarising the German document changes this.

**Mistake 3: Assuming the European Certificate of Succession works in Turkey**
It does not. Turkey is not bound by the EU Succession Regulation. Turkish real estate is always governed by Turkish law.

**Mistake 4: Getting a general power of attorney from a German notary**
Turkish courts and land registries generally do not accept a general German notarial power of attorney. The document must be issued at the Turkish consulate in Turkish.

**Mistake 5: Missing the inheritance tax deadline**
The deadline runs from the date of death — not from when the certificate is issued. Filing late results in penalties and interest. File the tax declaration even if the court process is still in progress.

**Mistake 6: Forgetting the Turkish Tax ID Number**
Foreign heirs need a Turkish Tax ID Number (Vergi Kimlik Numarası) for every step of the process — tax declaration, title deed transfer, bank access. Your lawyer can obtain this on your behalf without you needing to appear in Turkey.

**Mistake 7: Not getting an injunctive order when a dispute is possible**
If you suspect a family member may attempt to sell or transfer an asset before the estate is properly settled, ask your lawyer to apply for a precautionary injunction (ihtiyati tedbir) at the same time as the Certificate of Inheritance application. This prevents the asset from changing hands during the proceedings.

---

## 7. Five Common Scenarios — What to Do in Each Case

### Scenario A: All heirs are Turkish nationals, estate is in Turkey, no will
→ Notary route is available. Lawyer obtains the certificate on the same day with a consular power of attorney. Fastest and simplest.

### Scenario B: One heir is a German national (never held Turkish citizenship)
→ Court route mandatory. Apostilled German documents required. Your lawyer files at any Civil Court of Peace in Turkey. Timeline: 4–10 weeks with complete documents.

### Scenario C: You are a Blue Card (Mavi Kart) holder
→ Court route mandatory — notary cannot access your closed registry. Apostilled documents proving family relationships needed. Manageable from Germany through a lawyer. Timeline: 4–12 weeks.

### Scenario D: The deceased was a German national who owned a flat in Istanbul
→ Turkish certificate from the court — mandatory for the Tapu transfer. For German assets, a German Erbschein from the German Nachlassgericht. Two parallel processes. Both can be managed through lawyers in their respective countries.

### Scenario E: The deceased lived in Germany but was Turkish national, estate split between both countries
→ Turkish certificate needed for Turkish assets. For German bank accounts, an apostilled Turkish certificate may suffice under the 1929 Convention. For German real estate, a German Erbschein. Coordinate both processes through lawyers in both jurisdictions to avoid missing any deadlines.

---

## 8. Handle the Turkish Certificate of Inheritance with Doğru Kanzlei

[Doğru Kanzlei](https://www.hasandogru.de/en/services/erbrecht) holds dual bar membership with the **Ankara Bar Association** and the **Karlsruhe Bar Association** (§ 207 BRAO). We access Turkey's UYAP attorney portal directly from our Mannheim office — no third-party relay through a separate Turkish law firm.

Founding attorney **Av. Hasan Doğru** spent approximately a decade as a member of Turkey's Special Operations unit (Özel Harekat) before his legal career — giving our estate work a practical understanding of Turkish institutional processes that purely academic training does not provide.

For the broader inheritance process, see our [Turkish inheritance general guide](/en/blog/turkish-inheritance-germany-guide).

**What we manage for clients across Germany and beyond:**
- Situation assessment: notary or court route, document checklist
- Power of attorney text review and consulate preparation
- Apostille coordination and certified translation sourcing
- Turkish Certificate of Inheritance application — notary or Civil Court of Peace
- Turkish Tax ID Number for foreign heirs
- Inheritance tax declaration and tax clearance certificate
- WEBTAPU title deed transfer
- Bank account release
- Parallel coordination with German lawyers or tax advisers where needed

---

## Frequently Asked Questions

**What is the Turkish Certificate of Inheritance?**
It is the official document identifying who the legal heirs are and their shares. Without it, no Tapu transfer, bank access or tax filing is possible in Turkey. Issued by a Turkish notary or Civil Court of Peace.

**Can a Turkish notary issue the certificate if one heir is German?**
No. Under Article 71/B(3) of the Turkish Notaries Act, the notary loses jurisdiction whenever any party holds a foreign nationality. The court is mandatory.

**Do I have to travel to Turkey?**
No. A power of attorney from the Turkish consulate in Germany allows your lawyer to manage everything in Turkey.

**Does my German Erbschein work in Turkey?**
For real estate: No — Turkish land registries only accept the Turkish certificate. For bank accounts: possibly, under the 1929 Convention, but in practice Turkish banks often require the Turkish certificate anyway.

**Does the European Certificate of Succession work in Turkey?**
No. Turkey is not bound by the EU Succession Regulation. Turkish real estate is always governed by Turkish law regardless.

**I have a Blue Card (Mavi Kart). Can I use a notary?**
No. Blue Card holders must use the Civil Court of Peace — the notary cannot access your closed civil registry records. Your lawyer can manage this from Germany.

**How long does it take?**
Via notary (Turkish nationals only): same day. Via court: 2–6 weeks in straightforward cases; 2–4 months with foreign heirs.

**What does it cost?**
Notary: ~3,000 TL. Court: ~3,500–4,000 TL. Plus Germany-side costs: consulate, apostille, certified translation (approx. €200–500).

**What happens after the certificate?**
Inheritance tax declaration (6–8 month deadline from death) → Tax clearance certificate → Tapu transfer (WEBTAPU) → Bank accounts → Vehicles. All managed by your lawyer with the power of attorney.

---

*This article is for general information only and does not constitute legal advice. For your specific situation, contact Av. Hasan Doğru at Doğru Kanzlei.*`,
    category: "Miras Hukuku",
    categoryDE: "Erbrecht",
    categoryEN: "Inheritance Law",
    image: verasetIlamiImg,
    dateDE: "24. April 2026",
    dateTR: "24 Nisan 2026",
    dateEN: "24 April 2026",
    readTimeDE: "17 Min. Lesezeit",
    readTimeTR: "17 dk okuma",
    readTimeEN: "17 min read",
    publishedAt: "2026-04-11",
    publishedAtDE: "2026-04-24",
    publishedAtEN: "2026-04-24",
    modifiedAtDE: "2026-04-24",
    modifiedAtEN: "2026-04-24",
    modifiedAtTR: "2026-04-24",
    keywordsDE: "Erbschein Türkei beantragen, türkischer Erbschein Deutschland, Veraset İlamı Deutschland, Erbschein Türkei Notar oder Gericht, Mavi Kart Erbschein, gilt deutscher Erbschein in Türkei, Erbschein Türkei Apostille, Erbschein Türkei Vollmacht Konsulat, Erbschein Türkei Kosten 2026, türkischer Erbschein Ausländer, Erbschein Türkei Dauer, Fremdrechtserbschein Türkei",
    keywordsTR: "veraset ilamı nedir nasıl alınır, mirasçılık belgesi almanya, veraset ilamı almanya'dan nasıl alınır, veraset ilamı noter mi mahkeme mi, mavi kartlı veraset ilamı, alman erbschein türkiye'de geçerli mi, yurt dışından veraset ilamı, veraset ilamı iptali, e-devlet veraset ilamı, veraset ilamı ücreti 2026, yabancı uyruklu mirasçı veraset ilamı, veraset ilamı ne kadar sürer",
    keywordsEN: "Turkish certificate of inheritance Germany, Veraset İlamı how to get from Germany, Turkish inheritance certificate foreigners, Turkish probate certificate abroad, Blue Card Mavi Kart inheritance certificate, does German Erbschein work Turkey, Turkish inheritance certificate notary or court, Veraset İlamı power of attorney Germany, Turkish inheritance certificate cost 2026, Turkish inheritance certificate timeline, European Certificate of Succession Turkey",
    faqDE: [
      {
        question: "Was ist der türkische Erbschein (Veraset İlamı) und wofür wird er benötigt?",
        answer: "Der türkische Erbschein (Veraset İlamı, auch Mirasçılık Belgesi) ist das amtliche Dokument, das nachweist, wer nach türkischem Erbrecht Erbe ist und welchen Anteil jeder Erbe erhält. Er wird vom türkischen Friedensgericht (Sulh Hukuk Mahkemesi) oder — in einfachen Fällen — vom türkischen Notar ausgestellt. Ohne dieses Dokument ist keine Grundbuchumschreibung (Tapu), keine Bankkontofreigabe und keine Erbschaftsteuererklärung in der Türkei möglich."
      },
      {
        question: "Gilt der deutsche Erbschein in der Türkei?",
        answer: "Für Immobilien (Tapu) in der Türkei: Nein. Türkische Grundbuchämter akzeptieren ausschließlich den türkischen Erbschein. Für bewegliches Vermögen (Bankkonten) in der Türkei: Theoretisch ja — gemäß § 14 des deutsch-türkischen Nachlassabkommens von 1929 kann ein apostillierter oder konsularisch beglaubigter deutscher Erbschein für bewegliche Nachlassgegenstände ausreichen. In der Praxis verlangen türkische Banken aber häufig dennoch den türkischen Erbschein. Empfehlung: Immer den türkischen Erbschein beantragen."
      },
      {
        question: "Muss ich als Erbe in Deutschland für den türkischen Erbschein in die Türkei reisen?",
        answer: "Nein. Mit einer beim türkischen Konsulat in Deutschland ausgestellten Sondervollmacht (Vekaletname) kann Ihr Anwalt den gesamten Prozess in der Türkei für Sie führen — einschließlich Erbscheinsantrag, Steuererklärung, Grundbuchumschreibung und Bankverfahren. Eine Reise in die Türkei ist in den meisten Fällen nicht erforderlich."
      },
      {
        question: "Kann ein türkischer Notar den Erbschein ausstellen, wenn ein Erbe Deutscher ist?",
        answer: "Nein. Gemäß Art. 71/B Abs. 3 türkisches Notariatsgesetz (Noterlik Kanunu) sind türkische Notare für die Erbscheinsausstellung nicht zuständig, sobald am Erbfall ein Ausländer beteiligt ist — egal ob als Erblasser oder als Erbe. In diesem Fall muss der Erbschein zwingend beim türkischen Friedensgericht (Sulh Hukuk Mahkemesi) beantragt werden. Gleiches gilt für Mavi-Kart-Inhaber."
      },
      {
        question: "Was ist der Unterschied zwischen türkischem Erbschein und deutschem Erbschein in einem deutsch-türkischen Erbfall?",
        answer: "Im deutsch-türkischen Erbfall können beide Erbscheine erforderlich sein: Der türkische Erbschein (Veraset İlamı) wird für alle Nachlasswerte in der Türkei benötigt — Immobilien und Bankkonten. Der deutsche Erbschein ist für Nachlasswerte in Deutschland erforderlich. Bei türkischem Erblasser mit Bankkonten in Deutschland kann ein apostillierter türkischer Erbschein gem. § 14 Nachlassabkommen ausreichen. Bei türkischem Erblasser mit Immobilien in Deutschland wird ein deutscher Erbschein benötigt (sog. Fremdrechtserbschein nach § 2369 BGB)."
      },
      {
        question: "Wie lange dauert es, einen türkischen Erbschein aus Deutschland zu beantragen?",
        answer: "Beim Notar (nur bei rein türkischen Beteiligten): am selben Tag, 15–30 Minuten. Beim Friedensgericht (Sulh Hukuk Mahkemesi): in einfachen Fällen 2–6 Wochen. Bei Beteiligung ausländischer Erben, unklaren Nüfusregistern oder Zustellungsproblemen: 2–4 Monate. Die häufigsten Verzögerungsursachen aus Deutschland heraus sind: fehlende Apostillen, unvollständige Übersetzungen und Registerabweichungen (Namensschreibung, Geburtsort)."
      },
      {
        question: "Welche Vollmacht brauche ich für den türkischen Erbschein aus Deutschland?",
        answer: "Eine Sondervollmacht (Vekaletname) in türkischer Sprache, ausgestellt beim türkischen Konsulat in Deutschland — ohne Apostille, direkt in der Türkei verwendbar. Die Vollmacht muss explizit folgende Befugnisse enthalten: Erbscheinsantrag beim Notar oder Gericht, Akteneinsicht, Vertretung vor Behörden, Erbschaftsteuererklärung, Tapu-Umschreibung, Bankverfahren und — falls nötig — Einleitung von Gerichtsverfahren. Eine allgemeine Vollmacht reicht nicht aus."
      },
      {
        question: "Was kostet ein türkischer Erbschein 2026?",
        answer: "Beim türkischen Notar: ca. 3.000 TL (Festbetrag, unabhängig vom Nachlasswert) — nur bei rein türkischen Beteiligten möglich. Beim Friedensgericht: ca. 3.500–4.000 TL inklusive Gerichtsgebühren und Auslagenvorschuss. Hinzu kommen in Deutschland: Konsulatsgebühren für die Vollmacht, Apostille-Gebühren und Kosten für beglaubigte Übersetzungen. Diese Nebenkosten können 200–500 € betragen."
      },
      {
        question: "Was passiert nach der Ausstellung des türkischen Erbscheins?",
        answer: "Nach dem Erbschein folgen: 1) Erbschaftsteuererklärung beim türkischen Finanzamt (für Erben in Deutschland: Frist 6–8 Monate ab Todesfall), 2) Zahlung der Erbschaftsteuer und Erhalt der Unbedenklichkeitsbescheinigung (İlişik Yoktur Yazısı), 3) Grundbuchumschreibung (Intikal) über WEBTAPU, 4) Freigabe der Bankkonten, 5) Fahrzeugummeldung beim Straßenverkehrsamt. Alle Schritte können durch einen bevollmächtigten Anwalt aus Deutschland heraus geführt werden."
      }
    ],
    faqTR: [
      {
        question: "Veraset ilamı nedir ve ne işe yarar?",
        answer: "Veraset ilamı (mirasçılık belgesi), bir kişinin vefatından sonra kimlerin yasal mirasçı olduğunu ve miras paylarının ne olduğunu gösteren resmi belgedir. Türk Medeni Kanunu m.598'e göre sulh hukuk mahkemesi veya noterlikçe düzenlenir. Bu belge olmadan tapu intikali, banka hesaplarına erişim, araç devri ve veraset vergisi beyannamesi yapılamaz."
      },
      {
        question: "Veraset ilamını noterden mi yoksa mahkemeden mi almalıyım?",
        answer: "Her iki yol da mümkündür ancak durum bazında farklılık gösterir. Noterden: Tüm mirasçılar Türk vatandaşıysa, nüfus kayıtları açık ve eksiksizse, vasiyetname yoksa — işlem aynı gün, yaklaşık 3.000 TL. Mahkemeden (Sulh Hukuk Mahkemesi): Mavi kartlı, yabancı uyruklu veya çifte vatandaş mirasçılar varsa, nüfus kayıtlarında belirsizlik varsa veya vasiyetname mevcutsa — birkaç hafta ile birkaç ay, yaklaşık 3.500–4.000 TL."
      },
      {
        question: "Mavi kartlı (Türk vatandaşlığından çıkmış) kişi veraset ilamını nereden alır?",
        answer: "Mavi kartlı kişiler noterden veraset ilamı alamaz. Noterlik Kanunu m.71/B-4 uyarınca, başvuranın yabancılık unsuru taşıması durumunda noter yetkisiz kalır. Mavi kart sahiplerinin nüfus kayıtları da kapatıldığından noter MERNİS üzerinden soybağını tespit edemez. Bu kişilerin Sulh Hukuk Mahkemesine başvurması zorunludur. Almanya'daki konsolosluğundan vekâletname düzenleyerek avukat aracılığıyla bu işlemi Türkiye'ye gitmeden gerçekleştirebilirler."
      },
      {
        question: "Almanya'dan Türkiye'ye gitmeden veraset ilamı alınabilir mi?",
        answer: "Evet. Almanya'daki Türk konsolosluğundan avukata özel yetkili vekâletname düzenleyerek tüm süreci Türkiye'ye gitmeden yürütebilirsiniz. Vekâletnamede 'mirasçılık belgesi çıkarma, tapuda intikal, vergi beyannamesi ve dava açma' yetkilerinin açıkça belirtilmesi önemlidir. Doğru Kanzlei olarak UYAP avukat portalı üzerinden bu süreçleri Mannheim ofisimizden doğrudan yönetiyoruz."
      },
      {
        question: "Alman Erbschein (veraset ilamı) Türkiye'de geçerli midir?",
        answer: "Taşınmaz mallar (tapu) için hayır — Türk tapu müdürlükleri yalnızca Türkiye'de düzenlenmiş veraset ilamını (mirasçılık belgesini) kabul eder. Taşınır mallar (banka hesabı) için Türk-Alman Konsolosluk Anlaşması'nın 14. maddesi uyarınca apostilli Alman veraset ilamı teorik olarak yeterli olabilir; ancak Türk bankalar pratikte yine de Türk mirasçılık belgesini talep etmektedir. En güvenli yol her zaman Türkiye'de veraset ilamı almaktır."
      },
      {
        question: "Veraset ilamı almak için tüm mirasçıların birlikte başvurması gerekir mi?",
        answer: "Hayır. Mirasçılardan herhangi biri, diğerlerinin onayını almadan tek başına veraset ilamı için başvurabilir. Alınan belgede tüm yasal mirasçıların isimleri ve payları gösterilir. Bu özellik özellikle Almanya'da yaşayanlar için büyük kolaylık sağlar — diğer mirasçıların koordinasyonunu beklemeden süreci başlatabilirsiniz."
      },
      {
        question: "Veraset ilamı ne kadar sürer?",
        answer: "Noterden: Belgeler tam olduğunda aynı gün, 15–30 dakika içinde. Sulh Hukuk Mahkemesinden: Basit davalarda 2–4 hafta; yabancı uyruklu mirasçı tebligatı veya nüfus kayıt karmaşıklığı varsa 2–4 aya kadar uzayabilir. Yurt dışından avukat aracılığıyla başvurulduğunda, belgelerin eksiksiz hazırlanması ve apostil işlemlerinin önceden tamamlanması süreci önemli ölçüde kısaltır."
      },
      {
        question: "Veraset ilamı 2026 yılında ne kadar ücretlidir?",
        answer: "Noterden: Yaklaşık 3.000 TL (sabit ücret, mirasın değerine göre değişmez). Sulh Hukuk Mahkemesinden: Harç ve gider avansı dahil 3.500–4.000 TL civarında; süreç daha uzun ama belge hukuki açıdan daha güçlüdür. Bu ücretlere avukatlık vekâletnamesi ve apostil masrafları dahil değildir."
      },
      {
        question: "Veraset ilamı alındıktan sonra ne yapılması gerekir?",
        answer: "Sırasıyla: 1) Veraset ve intikal vergisi beyannamesi (ölümden itibaren yurt dışındaki mirasçılar için 6–8 ay içinde vergi dairesine), 2) Vergi ödendikten sonra İlişik Yoktur Yazısı (vergi ilişiği kesme belgesi) alınması, 3) WEBTAPU üzerinden tapu intikali başvurusu, 4) Banka hesapları için ilgili bankalara başvuru. Araç intikali için trafik tescil müdürlüğüne ayrıca başvurulur."
      }
    ],
    faqEN: [
      {
        question: "What is the Turkish Certificate of Inheritance (Veraset İlamı)?",
        answer: "The Turkish Certificate of Inheritance — Veraset İlamı or Mirasçılık Belgesi — is the official document that identifies who the legal heirs are and what share of the estate each heir receives. It is issued by a Turkish Civil Court of Peace (Sulh Hukuk Mahkemesi) or, in simpler cases involving only Turkish nationals, by a Turkish notary. Without this certificate, no property title transfer, bank account access, or inheritance tax filing can take place in Turkey."
      },
      {
        question: "Can a Turkish notary issue the Certificate of Inheritance if one heir is German?",
        answer: "No. Under Article 71/B(3) of the Turkish Notaries Act (Noterlik Kanunu), Turkish notaries lose jurisdiction to issue the Certificate of Inheritance as soon as any party involved — whether the deceased or any heir — holds a foreign nationality. This applies to German nationals, Blue Card (Mavi Kart) holders, and dual nationals. In all such cases, the certificate must be obtained through the Turkish Civil Court of Peace."
      },
      {
        question: "Do I have to travel to Turkey to get the Turkish Certificate of Inheritance?",
        answer: "No. With a power of attorney (Vekaletname) issued at a Turkish consulate in Germany — in Turkish, without apostille — your lawyer can manage the entire process in Turkey on your behalf. This includes filing the court application, obtaining the certificate, submitting the inheritance tax declaration, and completing the title deed transfer. You do not need to travel to Turkey."
      },
      {
        question: "Does the German Erbschein (probate certificate) work in Turkey?",
        answer: "For property (real estate / Tapu): No. Turkish land registries accept only the Turkish Certificate of Inheritance for title transfers. For bank accounts (movable assets): under the 1929 German-Turkish Consular Convention (§ 14), an apostilled German Erbschein may theoretically suffice. In practice, Turkish banks often still require the Turkish certificate. The safest approach is always to obtain the Turkish certificate — it works everywhere."
      },
      {
        question: "Does the European Certificate of Succession work in Turkey?",
        answer: "No. The EU Succession Regulation (No. 650/2012) does not bind Turkey, which is not an EU member state. Turkish land registries do not accept European Certificates of Succession for property transfers. Turkish real estate is always governed exclusively by Turkish law, regardless of any European succession document or choice-of-law provision in a foreign will."
      },
      {
        question: "What is a Blue Card (Mavi Kart) holder and how does it affect the Turkish inheritance certificate?",
        answer: "A Blue Card (Mavi Kart) is held by former Turkish citizens who renounced their Turkish nationality with government permission. They retain most rights of Turkish citizens but are legally classified as foreign nationals. For inheritance certificate purposes, Blue Card holders cannot use a Turkish notary — their civil registry records were closed when they gave up citizenship, so the notary cannot verify family ties through MERNİS. They must apply through the Civil Court of Peace, which can be done through an authorised lawyer without travelling to Turkey."
      },
      {
        question: "How long does it take to get the Turkish Certificate of Inheritance from Germany?",
        answer: "Via notary (only for all-Turkish-national cases): same day, 15–30 minutes. Via Civil Court of Peace: 2–6 weeks in straightforward cases. With foreign heirs, unclear registries, or service of process issues: 2–4 months. The most common cause of delay from Germany is incomplete apostille chains or missing certified translations — not the court process itself."
      },
      {
        question: "What documents do I need for the Turkish Certificate of Inheritance from Germany?",
        answer: "Required documents typically include: death certificate (apostilled and certified translated into Turkish if issued abroad), proof of kinship — birth and marriage certificates (apostilled and certified translated), passport copies of all heirs, Turkish Tax ID Number for each heir (obtainable by your lawyer), and a power of attorney issued at the Turkish consulate. Exact requirements vary by case — a lawyer should review your specific constellation before you prepare documents."
      },
      {
        question: "What happens after I get the Turkish Certificate of Inheritance?",
        answer: "After obtaining the certificate, the process continues: inheritance tax declaration filed at the Turkish tax office (deadline: 6–8 months from the date of death depending on where the deceased and heirs were located), payment of inheritance tax, obtaining the tax clearance certificate (İlişik Yoktur Yazısı), title deed transfer through WEBTAPU (Turkish Land Registry online system), bank account release, and vehicle re-registration if applicable. All steps can be managed by your lawyer using the power of attorney."
      }
    ],
  },
  {
    slug: "mavi-kart-turkiye-miras-tasinmaz-haklari",
    slugDE: "blaue-karte-tuerkei-erbrecht-immobilien",
    slugTR: "mavi-kart-turkiye-miras-tasinmaz-haklari",
    titleDE: "Erbrecht und Immobilienrechte von Inhabern der Blauen Karte in der Türkei | Update 2026",
    titleTR: "Mavi Kart Sahiplerinin Türkiye'deki Miras ve Taşınmaz Hakları | 2026 Güncel",
    excerptDE: "Haben Sie die deutsche Staatsbürgerschaft angenommen, besitzen aber eine Blaue Karte (Mavi Kart)? Ihre Rechte auf Erbe und Immobilien in der Türkei bleiben gewahrt. Wir erklären Ihnen die Details.",
    excerptTR: "Alman vatandaşlığına geçtiniz ama mavi kartınız var mı? Türkiye'deki miras, tapu ve velayet haklarınız korunuyor. Yargıtay kararlarıyla açıklıyoruz.",
    contentDE: `**RECHTLICHER HINWEIS:** Dieser Artikel befasst sich ausschließlich mit dem türkischen Recht. Eine Beratung zum deutschen Recht findet in unserer Kanzlei nicht statt.

# Erbrecht und Immobilienrechte von Inhabern der Blauen Karte in der Türkei

### Einleitung: Ihre Rechte sind sicher
Die größte Sorge vieler Mitbürger, die die deutsche Staatsbürgerschaft angenommen haben und Inhaber einer Blauen Karte (Mavi Kart) sind, ist, ob ihre Erbrechte und die Befugnis zum Immobilienerwerb in der Türkei fortbestehen. In diesem Leitfaden klären wir die Situation auf Basis des türkischen Staatsbürgerschaftsgesetzes Nr. 5901.

---

### 1. Was ist die Blaue Karte? Rechtlicher Status
Die Blaue Karte ist ein Dokument für Personen, die mit staatlicher Genehmigung aus der türkischen Staatsbürgerschaft ausgeschieden sind. Inhaber der Blauen Karte können in der Türkei:
- Immobilien erwerben (auch durch Erbe)
- Erbrechte vollumfänglich wahrnehmen
- Gewerblich tätig sein und das Arbeitsrecht nutzen.

Ausgenommen sind politische Rechte wie das Wahlrecht oder der Dienst im Staatsdienst.

---

### 2. Das Erbrecht: Voller Schutz
Inhaber einer Blauen Karte genießen in der Türkei exakt dieselben Erbrechte wie türkische Staatsbürger. Sie können Erbscheine beantragen und Klagen auf Erbteilung erheben. Es gibt hierbei keinerlei Beschränkungen.

---

### 3. Immobilienerwerb und Ausnahmen
Während der Landerwerb durch Ausländer nach Art. 35 des Grundbuchgesetzes beschränkt ist, sind **Inhaber der Blauen Karte von diesen Beschränkungen befreit**. Hindernisse wie das Gegenseitigkeitsprinzip oder Einschränkungen in militärischen Sperrzonen gelten für sie nicht.

---

### 4. Erbschafts- und Schenkungssteuer (2026)
Auch Inhaber der Blauen Karte unterliegen der Erbschaftssteuer. Personen mit Wohnsitz im Ausland müssen die Steuererklärung innerhalb von 6 Monaten nach dem Tod des Erblassers abgeben.

> **Aktuelles Update 2026:**
> Erbschaften an Ehegatten und Kinder sind bis zu einem Betrag von ca. **2.316.628 TL** steuerfrei. Für darüber hinausgehende Beträge fällt eine gestaffelte Steuer (1-10 %) an.

---

### 5. Häufig gestellte Fragen (FAQ)

**Ich habe eine Blaue Karte, werde aber bei E-Devlet als Ausländer geführt. Was soll ich tun?**
Dies liegt meist an einem veralteten Personenstandsregister. Sie müssen bei einem Standesamt in der Türkei beantragen, dass Ihre Daten in das "Register für Inhaber der Blauen Karte" übernommen werden.

**Verliere ich mein Erbe, wenn ich die deutsche Staatsbürgerschaft annehme?**
Nein. Solange Sie eine Blaue Karte besitzen, hat die Staatsbürgerschaft zum Zeitpunkt des Todes des Erblassers keinen Einfluss auf Ihre gesetzlichen Ansprüche.

**Können Inhaber der Blauen Karte Konten in der Türkei eröffnen?**
Ja. Die Blaue Karte wird von allen türkischen Banken als offizieller Identitätsnachweis akzeptiert.

---

### 6. Verteidigen Sie Ihre Rechte professionell
Obwohl die Blaue Karte Ihre Rechte weitgehend schützt, erfordern die praktische Umsetzung bei Grundbuchämtern und die Steuererklärungen Fachwissen. Die Doğru Kanzlei verwaltet diesen Prozess transparent mit Anwälten, die sowohl in Deutschland als auch in der Türkei zugelassen sind.`,
    contentTR: `**YASAL UYARI:** Bu makale yalnızca Türk hukukuna ilişkindir. Büromuzda Alman hukuku konusunda danışmanlık verilmemektedir.

# Mavi Kart Sahiplerinin Türkiye'deki Miras ve Taşınmaz Hakları

### Giriş: Haklarınız Koruma Altında
Alman vatandaşlığına geçen ancak mavi kart (eski pembe kart) sahibi olan vatandaşlarımızın en büyük endişesi, Türkiye'deki miras haklarının ve taşınmaz edinme yetkilerinin devam edip etmediğidir. Bu rehberde, 5901 sayılı Türk Vatandaşlığı Kanunu çerçevesinde konuyu netleştiriyoruz.

---

### 1. Mavi Kart Nedir? Hukuki Statüsü
Mavi kart, çıkma izni alarak Türk vatandaşlığını kaybeden kişilere verilen ve belirli hakları saklı tutan bir belgedir. Mavi kart sahipleri, Türkiye'de:
- Taşınmaz mal edinebilir (miras dahil)
- Miras hakkından yararlanabilir
- Ticari faaliyette bulunabilir ve çalışma hakkından yararlanabilir.

Seçme-seçilme ve kamu görevi gibi haklar ise kapsam dışıdır.

---

### 2. Miras Hakkı: Tam Koruma
Mavi kart sahibi kişiler, Türkiye'deki miras haklarını aynen Türk vatandaşları gibi kullanabilirler. Veraset ilamı çıkarabilir ve miras paylaşımı davası açabilirler. Bu konuda herhangi bir kısıtlama yoktur.

---

### 3. Taşınmaz Edinme ve Muafiyetler
Yabancı gerçek kişilerin Türkiye'de taşınmaz edinmesi Tapu Kanunu m.35 ile sınırlandırılmış olsa da, **mavi kart sahipleri bu kısıtlamalardan muaftır**. Mütekabiliyet (karşılıklılık) veya askeri yasak bölge gibi yabancılara uygulanan engeller mavi kartlılara uygulanmaz.

---

### 4. Veraset ve İntikal Vergisi (2026)
Mavi kart sahipleri de miras vergisine tabidir. Murisin vefatından itibaren yurt dışında ikamet edenler için 6 ay içinde beyanname verilmelidir. 

> **2026 Güncel Bilgi:**
> Eş ve çocuklara intikal eden mirasın yaklaşık **2.316.628 TL**'sine kadar olan kısmı vergiden muaftır. Bu sınırı aşan kısım için kademeli vergi (%1-10) uygulanır.

---

### 5. Sıkça Sorulan Sorular

**Mavi kartım var ama e-devlette yabancı görünüyorum, ne yapmalıyım?**
Bu durum genellikle nüfus kaydınızın güncellenmemesinden kaynaklanır. Türkiye'deki nüfus müdürlüğüne başvurarak kaydınızı "mavi kartlılar kütüğüne" aldırmanız gerekmektedir.

**Alman vatandaşı olduktan sonra kalan mirasım için hak kaybım olur mu?**
Hayır. Mavi kartınız olduğu sürece, miras bırakanın vefat tarihinde Türk vatandaşı olup olmamanız haklarınızı etkilemez.

**Mavi kart sahipleri Türkiye'de banka hesabı açabilir mi?**
Evet. Mavi kart, Türkiye'deki tüm bankalarda resmi kimlik belgesi olarak kabul edilmektedir.

---

### 6. Haklarınızı Profesyonelce Savunun
Mavi kart sahipliği haklarınızı büyük ölçüde korusa da, tapu müdürlüklerindeki pratik uygulamalar ve vergi beyannameleri uzmanlık gerektirir. Doğru Kanzlei olarak, hem Almanya hem de Türkiye barosuna kayıtlı avukatlarımızla tüm süreci şeffafça yönetiyoruz.`,
    category: "Miras Hukuku",
    categoryDE: "Erbrecht",
    image: blueCardImg,
    dateDE: "10. April 2026",
    dateTR: "10 Nisan 2026",
    readTimeDE: "6 Min. Lesezeit",
    readTimeTR: "6 dk okuma",
    publishedAt: "2026-04-10",
    keywordsDE: "Mavi Kart Erbrecht, Blaue Karte Immobilienübertragung, deutscher Staatsbürger Erbe Türkei, Rechte Blaue Karte Türkei 2026, türkischer Anwalt Mannheim",
    keywordsTR: "mavi kart miras hakkı, mavi kart tapu devri, Alman vatandaşı Türkiye miras, mavi kart Türkiye hakları 2026, Mannheim Türk avukat",
    faqDE: [
      {
        question: "Was ist die Mavi Kart und welche Rechte gewährt sie in der Türkei?",
        answer: "Die Mavi Kart (früher Pembe Kart) ist ein Dokument für Personen, die die türkische Staatsbürgerschaft mit Genehmigung aufgegeben haben. Sie sichert bestimmte Rechte in der Türkei: Immobilienerwerb (einschließlich Erbschaft), Erbrechte, gewerbliche Tätigkeit und Beschäftigung. Ausgeschlossen sind politische Rechte wie Wahlrecht und öffentliche Ämter."
      },
      {
        question: "Haben Mavi-Kart-Inhaber in der Türkei volle Erbrechte?",
        answer: "Ja, vollständig. Mavi-Kart-Inhaber können Erbrechte in der Türkei genauso geltend machen wie türkische Staatsangehörige. Sie können einen Erbschein (veraset ilamı) ausstellen lassen und Erbschaftsstreitigkeiten gerichtlich klären — ohne jede Einschränkung aufgrund der aufgegebenen Staatsbürgerschaft."
      },
      {
        question: "Können Mavi-Kart-Inhaber in der Türkei Immobilien erwerben?",
        answer: "Ja. Obwohl der Immobilienerwerb für Ausländer in der Türkei durch Art. 35 des Grundbuchgesetzes eingeschränkt ist, sind Mavi-Kart-Inhaber von diesen Beschränkungen ausgenommen. Für sie gelten weder das Gegenseitigkeitsprinzip noch die Verbotszonen für Ausländer."
      },
      {
        question: "Verliere ich meine Erbrechte in der Türkei, wenn ich die deutsche Staatsbürgerschaft angenommen habe?",
        answer: "Nein — sofern Sie eine Mavi Kart besitzen. Der Zeitpunkt des Staatsangehörigkeitswechsels spielt keine Rolle. Solange Ihre Mavi Kart gültig ist, bleiben Ihre Erbrechte in der Türkei vollständig erhalten, unabhängig davon, ob Sie zum Zeitpunkt des Todes des Erblassers türkischer Staatsbürger waren oder nicht."
      },
      {
        question: "Welche Erbschaftssteuer gilt 2026 für Mavi-Kart-Inhaber in der Türkei?",
        answer: "Mavi-Kart-Inhaber unterliegen der türkischen Erbschaft- und Schenkungsteuer. Für im Ausland ansässige Erben gilt eine Erklärungsfrist von 6 Monaten ab dem Todestag des Erblassers. Im Jahr 2026 sind Erbschaften an Ehegatten und Kinder bis zu einem Betrag von ca. 2.316.628 TL steuerfrei. Darüber hinausgehende Beträge werden progressiv mit 1 bis 10 % besteuert."
      },
      {
        question: "Was ist zu tun, wenn ich im türkischen E-Devlet-Portal als Ausländer geführt werde, obwohl ich eine Mavi Kart habe?",
        answer: "Das liegt in der Regel daran, dass Ihre Meldedaten nicht aktualisiert wurden. Sie müssen sich beim zuständigen Standesamt in der Türkei (nüfus müdürlüğü) melden und Ihre Eintragung in das Mavi-Kart-Register beantragen. Ohne diese Korrektur können praktische Schwierigkeiten beim Zugang zu Behördenportalen und bei Immobilientransaktionen entstehen."
      },
      {
        question: "Können Mavi-Kart-Inhaber in der Türkei ein Bankkonto eröffnen?",
        answer: "Ja. Die Mavi Kart wird von allen Banken in der Türkei als offizielles Ausweisdokument anerkannt und berechtigt zur Eröffnung eines Bankkontos."
      }
    ],
    faqTR: [
      {
        question: "Mavi Kart nedir ve Türkiye'de hangi hakları sağlar?",
        answer: "Mavi Kart, Türk vatandaşlığından izinle ayrılanlara verilen bir belgedir. Türkiye'de taşınmaz edinme (miras dahil), miras hakları, ticari faaliyet ve çalışma hakkı gibi hakları saklı tutar. Siyasi haklar (seçme-seçilme) kapsam dışıdır."
      },
      {
        question: "Mavi Kart sahiplerinin tam miras hakkı var mıdır?",
        answer: "Evet. Mavi Kart sahipleri Türkiye'deki miras haklarını aynen Türk vatandaşları gibi kullanabilirler. Veraset ilamı çıkarabilir ve miras paylaşımı yapabilirler."
      },
      {
        question: "Mavi Kart sahipleri Türkiye'de gayrimenkul alabilir mi?",
        answer: "Evet. Yabancılara uygulanan kısıtlamalardan (mütekabiliyet, yasak bölgeler vb.) muaftırlar ve diledikleri gibi taşınmaz edinebilirler."
      },
      {
        question: "Alman vatandaşı olursam Türkiye'deki miras haklarım kaybolur mu?",
        answer: "Hayır. Mavi Kartınız olduğu sürece miras haklarınız tam olarak korunur. Vefat tarihinde Türk vatandaşı olup olmamanız haklarınızı etkilemez."
      },
      {
        question: "2026 yılında Mavi Kartlılar için miras vergisi nasıldır?",
        answer: "Mavi Kartlılar da vergiye tabidir. 2026 yılı için eş ve çocuklara kalan mirasın yaklaşık 2.316.628 TL'si muaftır. Aşan kısım ise %1-%10 arası kademeli vergilendirilir."
      },
      {
        question: "E-devlette yabancı görünüyorum, ne yapmalıyım?",
        answer: "Bu durum kayıtlarınızın güncel olmadığını gösterir. Türkiye'deki nüfus müdürlüğüne başvurarak 'Mavi Kartlılar Kütüğü'ne kaydınızı yaptırmanız gerekir."
      },
      {
        question: "Mavi Kart ile Türkiye'de banka hesabı açılabilir mi?",
        answer: "Evet. Mavi Kart, Türkiye'deki tüm bankalarca resmi kimlik belgesi olarak kabul edilmektedir."
      }
    ]
  },
  {
    slug: "turkiye-ceza-davasi-almanya-savunma",
    slugDE: "strafverfahren-tuerkei-verteidigung-deutschland",
    slugTR: "turkiye-ceza-davasi-almanya-savunma",
    titleDE: "Strafverfahren in der Türkei eröffnet? Verteidigungsratgeber aus Deutschland",
    titleTR: "Türkiye'de Hakkınızda Ceza Davası mı Açıldı? Almanya'dan Savunma Rehberi",
    excerptDE: "Wurde in der Türkei ein Strafverfahren gegen Sie eingeleitet? Erfahren Sie alles über Ihre Verteidigungsrechte, die Vertretung ohne Anwesenheit und Interpol-Red-Notice-Verfahren. Direkte Hilfe aus Mannheim.",
    excerptTR: "Almanya'dayken Türkiye'de hakkınızda ceza davası açıldı mı? Savunma haklarınız, duruşmaya katılmadan müdafaa ve Interpol red notice süreci. Yargıtay kararlarıyla.",
    contentDE: `**RECHTLICHER HINWEIS:** Dieser Artikel befasst sich ausschließlich mit dem türkischen Recht. Eine Beratung zum deutschen Recht findet in unserer Kanzlei nicht statt.

# Strafverfahren in der Türkei eröffnet? Verteidigungsratgeber aus Deutschland

### Einleitung: Wenn Sie in Deutschland Post von türkischen Behörden erhalten
Nicht selten entdecken in Deutschland lebende türkische Staatsbürger erst bei einer Reise in die Türkei oder über das Online-Portal UYAP, dass gegen sie ein Strafverfahren eingeleitet wurde. In diesem Leitfaden erklären wir, wie Sie Ihr Strafverfahren in der Türkei von Deutschland aus steuern können und welche Verteidigungsrechte Sie haben.

---

### 1. Das Zustellungsproblem: Verfahren ohne Ihr Wissen
Nach der türkischen Strafprozessordnung (CMK) müssen Zustellungen an im Ausland lebende Personen auf diplomatischem Weg erfolgen. Dennoch führen viele Gerichte Verfahren fort, ohne die korrekte Auslandszustellung abzuwarten.

> **Yargıtay 4. Ceza Dairesi, 2021/17832 E.:**
> "Obwohl bekannt war, dass der Angeklagte im Ausland lebt, stellt die Fortsetzung des Verfahrens ohne ordnungsgemäße Auslandszustellung eine Verletzung des Verteidigungsrechts dar und ist ein absoluter Revisionsgrund."

---

### 2. Verteidigung aus Deutschland: Vertretung ohne persönliche Anwesenheit
Im türkischen Strafrecht kann bei Straftaten mit einer Mindeststrafe von unter 5 Jahren auf Antrag des Angeklagten das Verfahren ohne dessen persönliche Anwesenheit durchgeführt werden. In schwerwiegenderen Fällen kann eine Aussage per Videokonferenz (SEGBİS) aus Deutschland beantragt werden.

---

### 3. Interpol-Red-Notice: Das Risiko internationaler Fahndung
Wurde ein Haftbefehl erlassen, besteht das Risiko, dass dieser über Interpol zur internationalen Fahndung (Red Notice) ausgeschrieben wird. Gegen politisch motivierte oder rechtlich mangelhafte Ersuche gibt es Einspruchsmöglichkeiten bei der Interpol CCF (Commission for the Control of Files).

---

### 4. Verjährung und Verfahrenseinstellung
Nach dem türkischen Strafgesetzbuch (TCK) führt der Ablauf der Verjährungsfrist zur Einstellung des Verfahrens. Für im Ausland lebende Angeklagte ist es entscheidend, dass ihr Anwalt die Verjährungsfristen kontinuierlich überwacht und bei Ablauf sofort die Einstellung beantragt.

---

### 5. Häufig gestellte Fragen (FAQ)

**Muss ich zur Verteidigung in die Türkei reisen?**
In vielen Fällen reicht eine Verteidigung durch Ihren Anwalt aus. Falls eine persönliche Aussage erforderlich ist, kann diese oft per Videokonferenz (SEGBİS) aus Deutschland erfolgen.

**Wie erfahre ich, ob gegen mich ein Haftbefehl vorliegt?**
Dies kann über das UYAP-Portal veya durch eine Akteneinsicht Ihres bevollmächtigten Anwalts in der Türkei geklärt werden.

**Kann ein vor Jahren abgeschlossenes Verfahren wieder aufgenommen werden?**
Wenn eine Verurteilung ohne Ihr Wissen (in Abwesenheit) erfolgt ist, gibt es Möglichkeiten der "Wiedereinsetzung in den vorherigen Stand" und der Wiederaufnahme des Verfahrens.

---

### 6. Die Expertise der Doğru Kanzlei im Strafrecht
Unser Kanzleigründer **Hasan Doğru** war vor seiner juristischen Karriere rund 10 Jahre lang als Mitglied einer **Spezialeinheit** (Özel Harekat) im türkischen Generaldirektorat für Sicherheit tätig. Diese praktische Erfahrung bietet uns tiefgreifende Einblicke in polizeiliche Ermittlungstechniken und behördliche Abläufe, was uns ermöglicht, hocheffektive Verteidigungsstrategien zu entwickeln.

Durch unsere Zulassungen bei der Anwaltskamer Ankara und der Rechtsanwaltskammer Karlsruhe (§207 BRAO) verfolgen wir Ihre Strafverfahren in der Türkei direkt und ohne Zwischenschaltung Dritter.`,
    contentTR: `**YASAL UYARI:** Bu makale yalnızca Türk hukukuna ilişkindir. Büromuzda Alman hukuku konusunda danışmanlık verilmemektedir.

# Türkiye'de Hakkınızda Ceza Davası Açıldı mı? Almanya'dan Savunma Rehberi

### Giriş: Almanya'da Yaşarken Türkiye'den Gelen Tebligat
Almanya'da yaşayan Türk vatandaşlarının bir kısmı, Türkiye'ye seyahat ettiklerinde veya UYAP portalından yaptıkları sorgulamada, haklarında açılmış bir ceza davası olduğunu keşfeder. Bu rehberde, Almanya'dan Türkiye'deki ceza davanızı nasıl takip edebileceğinizi ve savunma haklarınızı açıklıyoruz.

---

### 1. Tebligat Sorunu: Davayı Hiç Bilmeyebilirsiniz
CMK m.145 uyarınca, yurt dışında yaşayan sanıklara tebligat diplomatik yoldan yapılmalıdır. Ancak birçok mahkeme usulüne uygun tebligat yapmadan yargılamaya devam edebilmektedir.

> **Yargıtay 4. Ceza Dairesi, 2021/17832 E.:**
> "Sanığın yurt dışında ikamet ettiği bilinmesine rağmen, usulüne uygun yurt dışı tebligatı yapılmadan yargılamaya devam edilmesi, savunma hakkının ihlalidir ve mutlak bozma sebebidir."

---

### 2. Almanya'dan Müdafii Tayin Etme
Türk ceza yargılamasında, alt sınırı 5 yıldan az hapis cezasını gerektiren suçlarda, sanığın talebi üzerine duruşmaya bizzat katılmadan avukat aracılığıyla savunma yapılabilir. Ağır ceza davaları içinse SEGBİS ile uzaktan katılım talep edilebilir.

---

### 3. Interpol Kırmızı Bülten Riski
Hakkınızda yakalama kararı çıkarıldıysa, bu kararın Interpol aracılığıyla uluslararası aranmaya (Kırmızı Bülten) dönüşme riski vardır. Siyasi motivasyonlu veya hukuki standartlara uymayan taleplere karşı Interpol CCF nezdinde itiraz mekanizması mevcuttur.

---

### 4. Zamanaşımı ve Düşme Kararı
Dava zamanaşımı süresinin dolması halinde mahkeme düşme kararı verir. Almanya'da yaşayan sanıklar için avukatlarının zamanaşımını sürekli takip etmesi hayati önem taşır.

---

### 5. Sıkça Sorulan Sorular

**Davadan kurtulmak için Türkiye'ye gitmem şart mı?**
Birçok suç türünde avukatınız aracılığıyla sunacağınız savunma yeterli olmaktadır. Bizzat katılımın şart olduğu hallerde ise SEGBİS (video konferans) ile Almanya'dan ifade verebilirsiniz.

**Hakkımda yakalama kararı olup olmadığını nasıl öğrenirim?**
UYAP Vatandaş Portal üzerinden veya vekalet vereceğiniz bir avukat aracılığıyla dosya sorgulaması yapılarak öğrenilebilir.

**Yıllar önce kapanmış bir dava yeniden açılabilir mi?**
Gıyabınızda (habersizce) verilen bir mahkumiyet kararı varsa, "eski hale getirme" ve "yargılamanın yenilenmesi" yollarıyla dava yeniden görülebilir.

---

### 6. Doğru Kanzlei'nin Ceza Hukuku Deneyimi
Kurucu avukatımız **Hasan Doğru**, hukuk kariyeri öncesinde yaklaşık 10 yıl boyunca Türk Emniyet Genel Müdürlüğü bünyesinde **Özel Harekat** birimi mensubu olarak görev yapmıştır. Bu deneyim, kolluk uygulamaları ve soruşturma tekniklerine dair derinlemesine bilgi sağlayarak savunma stratejilerimize eşsiz bir güç katmaktadır.

Ankara Barosu üyeliğimiz ve Karlsruhe Barosu kaydımız sayesinde Türkiye'deki ceza davalarınızı bizzat takip ediyoruz.`,
    category: "Ceza Hukuku",
    categoryDE: "Strafrecht",
    image: criminalDefenseImg,
    dateDE: "10. April 2026",
    dateTR: "10 Nisan 2026",
    readTimeDE: "9 Min. Lesezeit",
    readTimeTR: "9 dk okuma",
    publishedAt: "2026-04-10",
    keywordsDE: "Strafrecht Türkei Deutschland, Verteidigung aus Deutschland, Interpol Roteckene, Türkisches Strafrecht Mannheim, Anwalt Strafrecht Deutschland",
    keywordsTR: "Türkiye ceza davası Almanya, Almanya'dan Türkiye savunma, Interpol kırmızı bülten, Türk ceza hukuku Mannheim, ceza davası avukat Almanya",
    faqDE: [
      {
        question: "Muss ich für mein Strafverfahren in der Türkei persönlich erscheinen?",
        answer: "In vielen Fällen nicht. Bei Straftaten mit einem Strafrahmen unter 5 Jahren Freiheitsstrafe kann die Verteidigung auf Antrag vollständig durch einen Anwalt geführt werden, ohne dass der Angeklagte persönlich erscheinen muss. Bei schwerwiegenderen Verfahren besteht die Möglichkeit, per SEGBİS (Videokonferenz) aus Deutschland an der Verhandlung teilzunehmen."
      },
      {
        question: "Wie erfahre ich, ob in der Türkei ein Strafverfahren gegen mich läuft?",
        answer: "Sie können den Stand Ihrer Akte über das UYAP-Bürgerportal abfragen oder einen Anwalt bevollmächtigen, der die Abfrage in Ihrem Namen durchführt. Viele in Deutschland lebende türkische Staatsangehörige erfahren von einem Verfahren erst bei der Einreise in die Türkei oder bei einer routinemäßigen Abfrage."
      },
      {
        question: "Was passiert, wenn ich nie über mein türkisches Strafverfahren informiert wurde?",
        answer: "Nach CMK Art. 145 muss die Zustellung an im Ausland lebende Angeklagte auf diplomatischem Weg erfolgen. Laut Yargıtay (4. Strafkammer, 2021/17832 E.) stellt eine Fortsetzung des Verfahrens ohne ordnungsgemäße Auslandszustellung eine Verletzung des Rechts auf Verteidigung dar und ist ein absoluter Revisionsgrund. Ein ergangenes Urteil kann daher angefochten werden."
      },
      {
        question: "Besteht das Risiko einer Interpol-Fahndung, wenn gegen mich ein türkischer Haftbefehl vorliegt?",
        answer: "Ja. Ein türkischer Haftbefehl kann in eine internationale Fahndung über Interpol (Red Notice) umgewandelt werden. Bei politisch motivierten oder rechtsstaatswidrigen Ersuchen besteht jedoch die Möglichkeit, beim Interpol-Kontrollgremium (CCF) Beschwerde einzulegen und die Löschung der Red Notice zu beantragen."
      },
      {
        question: "Kann ein abgeschlossenes türkisches Strafverfahren wieder aufgerollt werden?",
        answer: "Ja. Wurde ein Urteil in Abwesenheit des Angeklagten (gıyabi) gefällt, kann das Verfahren über die Rechtsinstitute der Wiedereinsetzung in den vorigen Stand (eski hale getirme) und der Wiederaufnahme des Verfahrens (yargılamanın yenilenmesi) neu aufgerollt werden."
      },
      {
        question: "Was passiert, wenn die Verjährungsfrist für mein türkisches Strafverfahren abläuft?",
        answer: "Läuft die Verjährungsfrist ab, muss das Gericht die Einstellung des Verfahrens beschließen (düşme kararı). Für in Deutschland lebende Angeklagte ist es daher wichtig, dass ihr Anwalt die Verjährungsfristen kontinuierlich überwacht — insbesondere wenn das Verfahren über Jahre hinweg ruhend geführt wird."
      },
      {
        question: "Welchen Vorteil bietet ein Anwalt mit Strafverfolgungserfahrung bei türkischen Strafverfahren?",
        answer: "Gründer Hasan Doğru war vor seiner Anwaltskarriere rund 10 Jahre Mitglied der Spezialeinheit (Özel Harekat) der türkischen Nationalpolizei. Dieses Hintergrundwissen über Ermittlungsmethoden und Strafverfolgungspraxis verleiht der Verteidigungsstrategie eine einzigartige Tiefe, die rein akademisch ausgebildeten Anwälten fehlt."
      }
    ],
    faqTR: [
      {
        question: "Türkiye'deki ceza davam için duruşmaya bizzat gitmem gerekir mi?",
        answer: "Çoğu durumda hayır. 5 yılın altındaki suçlarda savunma tamamen avukat aracılığıyla yürütülebilir. Daha ağır dosyalarda ise SEGBİS ile duruşmaya katılma imkanı vardır."
      },
      {
        question: "Türkiye'de hakkımda dava olup olmadığını nasıl öğrenirim?",
        answer: "Dosyayı UYAP üzerinden sorgulayabilir veya avukatınıza sorgulama yetkisi verebilirisiniz. Gurbetçiler genellikle davayı tesadüfen öğrenirler."
      },
      {
        question: "Davadan hiç haberim olmazsa ne olur?",
        answer: "CMK m.145 uyarınca yurt dışı tebligatı diplomatik yolla yapılmalıdır. Usulüne uygun tebligat yapılmaması durumunda davanın devam etmesi savunma hakkının ihlalidir ve bozma nedenidir."
      },
      {
        question: "Türkiye'deki yakalama kararı Interpol aramasına dönüşür mü?",
        answer: "Evet. Kırmızı Bülten çıkarılabilir. Ancak hukuka aykırı bültenler için Interpol (CCF) nezdinde itiraz edilerek bültenin silinmesi mümkündür."
      },
      {
        question: "Bitmiş bir ceza davası tekrar açılabilir mi?",
        answer: "Evet. Sanığın haberi olmadan verilen mahkumiyet kararları durumunda 'eski hale getirme' ve 'yargılamanın yenilenmesi' yollarıyla dava yeniden görülebilir."
      },
      {
        question: "Ceza davasında zamanaşımı dolarsa ne olur?",
        answer: "Dava düşer. Avukatınızın zamanaşımı sürelerini titizlikle takip etmesi, özellikle yıllardır devam eden dosyalar için hayatidir."
      },
      {
        question: "Polislik geçmişi olan bir avukatla çalışmanın avantajı nedir?",
        answer: "Hasan Doğru'nun 10 yıllık Özel Harekat polisliği geçmişi, soruşturma yöntemleri hakkında derin bir bilgi sağlayarak savunma stratejilerimize eşsiz bir güç katar."
      }
    ]
  },
  {
    slug: "almanya-turkiye-alacak-tahsili-icra",
    slugDE: "deutschland-tuerkei-forderungseinzug-zwangsvollstreckung",
    slugTR: "almanya-turkiye-alacak-tahsili-icra",
    slugEN: "debt-collection-turkey-from-germany",
    titleDE: "Forderungseinzug & Zwangsvollstreckung in der Türkei: Vollständiger Leitfaden für Gläubiger aus Deutschland 2026",
    titleTR: "Almanya'dan Türkiye'de Alacak Tahsili ve İcra Takibi: Eksiksiz Hukuki Rehber 2026",
    titleEN: "Debt Collection in Turkey from Germany: Complete Legal Guide 2026",
    metaTitleDE: "Forderungseinzug Türkei aus Deutschland: Vollständiger Leitfaden 2026",
    metaTitleTR: "Almanya'dan Türkiye'de Alacak Tahsili: Eksiksiz Hukuki Rehber 2026",
    metaTitleEN: "Debt Collection in Turkey from Germany: Legal Guide 2026",
    metaDescriptionDE: "Offene Forderung in der Türkei? So vollstrecken Sie als Gläubiger in Deutschland: Mahnverfahren, UYAP-Vermögensabfrage, Arrest und Euro-Kurssicherung. Doğru Kanzlei.",
    metaDescriptionTR: "Almanya'dan Türkiye'deki alacağınızı nasıl tahsil edersiniz? İlamsız icra, ihtiyati haciz, UYAP varlık sorgusu ve Euro alacağında kur farkı hakkı. Doğru Kanzlei.",
    metaDescriptionEN: "Creditor based in Germany with a debtor in Turkey? How to enforce without a court judgment, freeze assets via UYAP, and protect your Euro claim. Doğru Kanzlei.",
    excerptDE: "Was tun, wenn Ihr Schuldner in der Türkei sitzt? Vollstreckung ohne Gerichtstitel, UYAP-Vermögensabfrage, dinglicher Arrest und Euro-Kurssicherung — alles aus Deutschland, ohne Anreise.",
    excerptTR: "Euro alacağınızı nasıl korursunuz, borçlunun varlıklarını UYAP ile nasıl tespit edersiniz ve Almanya'dan Türkiye'de icra takibini adım adım nasıl başlatırsınız — mahkeme kararı olmadan.",
    excerptEN: "Your debtor is in Turkey. Their assets are in Turkey. Here is how you recover what you are owed — without a court judgment, without travelling, and without losing your Euro claim to currency depreciation.",
    contentDE: `**RECHTLICHER HINWEIS:** Dieser Artikel befasst sich ausschließlich mit dem türkischen Recht. Die Doğru Kanzlei berät gemäß § 207 BRAO ausschließlich im türkischen Recht. Eine Beratung oder Vertretung im deutschen Recht findet nicht statt.

---

Ein Mannheimer Unternehmer hatte einem türkischen Geschäftspartner 30.000 Euro für eine gemeinsame Immobilientransaktion übergeben. Schriftlicher Vertrag, Überweisungsbelege, WhatsApp-Nachrichten — alles vorhanden. Als der Partner nicht zahlte, wandte er sich an einen deutschen Anwalt. Der Rat: Mahnverfahren einleiten, Vollstreckungsbescheid erwirken. Drei Monate später stellte sich heraus, dass dieser Vollstreckungsbescheid in der Türkei nicht vollstreckbar war. Die türkischen Gerichte lehnten die Anerkennung ab — zu Recht, wie wir erklären werden.

Viele in Deutschland lebende Menschen — ob türkischstämmig oder deutsche Staatsangehörige mit Geschäftsbeziehungen in die Türkei — stehen vor demselben Problem: Der Schuldner sitzt in der Türkei, hat dort Immobilien, Bankkonten und Fahrzeuge, und dennoch kommt das Geld nicht. Der Instinkt, in Deutschland zu klagen, ist verständlich. Er führt aber oft in eine Sackgasse.

Dieser Leitfaden erklärt, wie das türkische Vollstreckungsrecht tatsächlich funktioniert, welche Instrumente Ihnen als in Deutschland ansässigem Gläubiger zur Verfügung stehen — und welche Fehler Sie unbedingt vermeiden sollten. Alle Angaben beziehen sich auf den Stand des türkischen Rechts im Jahr 2026. Wer zugleich Vermögen, Erbfälle oder Immobilien in der Türkei einordnen muss, findet ergänzend unseren Beitrag zum [türkisches Erbrecht aus Deutschland](/de/blog/erbschaft-tuerkei-deutschland-ratgeber).

---

## Das türkische Vollstreckungsrecht: Grundbegriffe für deutsche Gläubiger

Das türkische Vollstreckungssystem ist im Vollstreckungs- und Konkursgesetz (İcra ve İflas Kanunu, kurz İİK) geregelt und unterscheidet sich grundlegend vom deutschen Recht. Das wichtigste Unterscheidungsmerkmal: In der Türkei ist es möglich, ein Vollstreckungsverfahren einzuleiten, **ohne zuvor ein Gerichtsurteil zu erwirken**. Dieses Instrument heißt İlamsız İcra Takibi — Vollstreckung ohne Gerichtstitel.

Daneben gibt es die İlamlı İcra Takibi, die Vollstreckung auf Grundlage eines bereits vorliegenden Gerichtstitels. Diese greift, wenn Sie bereits ein anerkennungsfähiges ausländisches Urteil oder ein türkisches Gerichtsurteil haben.

Für die meisten in Deutschland ansässigen Gläubiger ist die **Vollstreckung ohne Gerichtstitel der schnellste und effizienteste Einstieg** — insbesondere dann, wenn kein deutsches Urteil vorliegt oder wenn der vorhandene deutsche Titel (z. B. ein Vollstreckungsbescheid) in der Türkei nicht anerkennungsfähig ist.

> ⚠️ **Wichtig:** Ein Vollstreckungsbescheid aus dem deutschen Mahnverfahren ist in der Türkei **nicht** anerkennungsfähig und kann nicht als Grundlage für eine Vollstreckungsklage (Tenfiz Davası) dienen. Der türkische Kassationshof (Yargıtay) hat dies mehrfach und eindeutig bestätigt, weil das Mahnverfahren kein streitiges Verfahren darstellt. Wer diesen Weg versucht, verliert wertvolle Zeit.

---

## Vollstreckung ohne Gerichtstitel (İlamsız İcra Takibi): So funktioniert es

Das Vollstreckungsverfahren ohne Gerichtstitel ist das Herzstück des türkischen Forderungseinzugs für ausländische Gläubiger. Es funktioniert wie folgt:

**Schritt 1 — Vollmacht (Vekaletname):** Sie lassen bei einem deutschen Notar oder beim türkischen Generalkonsulat eine notarielle Vollmacht ausstellen, die Ihren türkischen Anwalt zur Einleitung von Vollstreckungsverfahren bevollmächtigt. Das Dokument muss ins Türkische übersetzt und mit einer Apostille nach dem Haager Apostilleübereinkommen versehen sein. Weitere Informationen zur Vollmacht finden Sie in unserem Beitrag [Vollmacht auf Türkisch ausstellen](/de/blog/vollmacht-auf-tuerkisch).

**Schritt 2 — Vollstreckungsantrag:** Ihr Anwalt stellt beim zuständigen türkischen Vollstreckungsamt (İcra Dairesi) — am Wohnsitz des Schuldners oder am Ort der Vertragserfüllung — einen Vollstreckungsantrag. Bei Euro-Forderungen wird gemäß Art. 58 Abs. 3 İİK der türkische Lira-Gegenwert angegeben, verbunden mit dem ausdrücklichen Vermerk „Kurs am tatsächlichen Zahlungstag" (fiili ödeme tarihindeki kur).

**Schritt 3 — Zahlungsbefehl (Ödeme Emri):** Das Vollstreckungsamt stellt dem Schuldner einen Zahlungsbefehl zu. Der Schuldner hat 7 Tage Zeit, Widerspruch einzulegen.

**Schritt 4 — Keine Einspruch:** Legt der Schuldner keinen Widerspruch ein, wird der Zahlungsbefehl rechtskräftig. Ihr Anwalt leitet sofort die UYAP-Vermögensabfrage ein und beantragt die Pfändung aller festgestellten Vermögenswerte.

**Schritt 5 — Pfändung und Verwertung:** Bankkonten werden eingefroren, Immobilien mit einer Pfändungsnotiz im Grundbuch versehen, Fahrzeuge gesperrt. Zahlt der Schuldner weiterhin nicht, werden die gepfändeten Vermögenswerte öffentlich versteigert.

---

## UYAP: Die digitale Vermögensermittlung in der Türkei

Eines der stärksten Instrumente im türkischen Vollstreckungsrecht ist das **UYAP-System** (Ulusal Yargı Ağı Bilişim Sistemi — Nationales Justizinformationsnetz). Über UYAP kann Ihr Anwalt unmittelbar nach Einleitung des Verfahrens sämtliche Vermögenswerte des Schuldners digital abfragen — ohne separaten Gerichtsbeschluss.

| Vermögensart | Quelldatenbank | Typische Pfändungsdauer |
|---|---|---|
| Immobilien (Haus, Grundstück, Gewerbe) | TAKPAS (Grundbuchamt) | 1–3 Werktage |
| Bankkonten (alle türkischen Banken) | BDDK-Schnittstelle | 1–2 Werktage |
| Fahrzeuge (Pkw, Lkw, Motorrad) | Verkehrsregistrierung | 2–3 Werktage |
| Rentenansprüche / Gehalt | SGK-Datenbank | 3–5 Werktage |
| Unternehmensanteile | Handelsregistrierung | 5–7 Werktage |

Diese Abfragen sind digital und zentral — ein erheblicher Vorteil gegenüber Deutschland, wo Gläubiger in der Regel aufwändig recherchieren müssen, bei welchem Institut der Schuldner Konten führt. In der Türkei läuft alles über eine einzige Schnittstelle.

> ⚠️ **Wichtig:** Besteht die Gefahr, dass der Schuldner Vermögen auf Dritte überträgt — etwa auf Familienangehörige oder verbundene Unternehmen — sollten Sie **vor** der formellen Einleitung des Vollstreckungsverfahrens einen dinglichen Arrest (İhtiyati Haciz) beantragen. Einmal rechtswirksam übertragenes Immobilienvermögen ist kaum zurückzuerlangen.

---

## Der dingliche Arrest (İhtiyati Haciz): Vermögen sichern bevor es zu spät ist

Der dingliche Arrest ist das türkische Äquivalent zum deutschen einstweiligen Verfügungsarrest. Er ermöglicht es, die Vermögenswerte des Schuldners vorläufig einzufrieren, bevor das Hauptverfahren abgeschlossen ist. Geregelt in Art. 257 ff. İİK, ist er ein zentrales Instrument für grenzüberschreitende Forderungen.

**Voraussetzungen für den dinglichen Arrest:**

- Die Forderung muss fällig und belegt sein (Vertrag, Rechnung, Schuldschein, Überweisungsbeleg).
- Es muss ein Arrestgrund vorliegen. Für ausländische Gläubiger besonders relevant: **Hat der Schuldner keinen festen Wohnsitz in der Türkei, gilt dies allein als Arrestgrund** (Art. 257 Abs. 2 İİK). Das betrifft also jeden Fall, in dem der Schuldner zwar Vermögen in der Türkei hat, aber offiziell im Ausland gemeldet ist.
- Der Gläubiger muss in der Regel eine Sicherheitsleistung von 10–15 % der Forderungssumme hinterlegen.

Nach Erlass des Arrestbeschlusses werden die festgestellten Vermögenswerte sofort gesperrt. Der Schuldner kann bis zur Entscheidung in der Hauptsache nicht mehr über sie verfügen.

**Kombination mit dem Vollstreckungsverfahren:** In der Praxis empfiehlt es sich, den Arrestantrag und den Vollstreckungsantrag gleichzeitig zu stellen. So werden Vermögenswerte bereits in den ersten Tagen gesichert, während das formelle Verfahren läuft.

---

## Widerspruch des Schuldners: Klage auf Aufhebung des Widerspruchs und 20 % Entschädigung

Legt der Schuldner innerhalb der 7-tägigen Frist Widerspruch gegen den Zahlungsbefehl ein, ruht das Vollstreckungsverfahren. Der Gläubiger hat dann zwei Möglichkeiten:

**Option 1 — Aufhebung des Widerspruchs (İtirazın Kaldırılması):** Liegt ein unterschriebener Schuldschein, ein Wechsel oder ein notariell beglaubigtes Schuldanerkenntnis vor, kann der Anwalt beim Vollstreckungsgericht beantragen, den Widerspruch in einem vereinfachten Verfahren aufzuheben. Dies ist schneller als eine ordentliche Klage.

**Option 2 — Klage auf Aufhebung des Widerspruchs (İtirazın İptali Davası):** Fehlen die für Option 1 erforderlichen Dokumente, wird vor dem zuständigen Zivilgericht Klage erhoben. Stellt das Gericht fest, dass der Widerspruch unbegründet war, hat dies zwei Konsequenzen:

- Das Vollstreckungsverfahren wird fortgesetzt.
- Der Schuldner wird zur Zahlung einer **Vollstreckungsentschädigung von mindestens 20 % der Forderungssumme** verurteilt — zusätzlich zur Hauptforderung.

> **Yargıtay 19. Hukuk Dairesi, 2019/4412 E.:** „Ist die Forderung bestimmt und belegt, muss bei unberechtigtem Widerspruch gegen den Schuldner eine Vollstreckungsentschädigung in Höhe von 20 % verhängt werden."

Diese 20-%-Regelung ist kein Strafschadensersatz im angelsächsischen Sinne — sie ist eine gesetzlich vorgeschriebene Mindestentschädigung, die das türkische Recht bewusst eingesetzt hat, um unbegründete Widersprüche zu sanktionieren. Bei einer Forderung von 50.000 Euro bedeutet das eine zusätzliche Verurteilung von mindestens 10.000 Euro — allein wegen des haltlosen Widerspruchs.

---

## Vollstreckung eines deutschen Gerichtsurteils in der Türkei: Tenfiz Davası

Haben Sie bereits ein rechtskräftiges deutsches Gerichtsurteil — also ein Urteil aus einem streitigen Verfahren, nicht einen Vollstreckungsbescheid — kann dieses in der Türkei anerkannt und vollstreckt werden. Das Verfahren heißt **Tenfiz Davası** (Anerkennungs- und Vollstreckungsklage) und ist in Art. 50 ff. MÖHUK (Milletlerarası Özel Hukuk ve Usul Hukuku Hakkında Kanun, Gesetz Nr. 5718) geregelt.

**Voraussetzungen für die Anerkennung:**

1. Das Urteil muss rechtskräftig sein (Rechtskraftvermerk erforderlich).
2. Es muss mit einer Apostille versehen und ins Türkische übersetzt sein.
3. Zwischen Deutschland und der Türkei muss faktische Gegenseitigkeit bestehen (das ist der Fall).
4. Das Urteil darf nicht gegen den türkischen ordre public verstoßen.
5. Der Beklagte muss ordnungsgemäß geladen worden sein.

Das türkische Gericht überprüft dabei **nicht** die inhaltliche Richtigkeit des deutschen Urteils — es prüft ausschließlich diese formellen Voraussetzungen.

| Vollstreckungsweg | Voraussetzung | Dauer | Empfehlung |
|---|---|---|---|
| Direkte İlamsız İcra (ohne Titel) | Schriftlicher Vertrag / Beleg | 1–4 Wochen (wenn kein Widerspruch) | Erster Schritt für die meisten Fälle |
| Tenfiz eines deutschen Urteils | Rechtskräftiges Urteil + Apostille | 6–18 Monate | Wenn ein streitiges Urteil vorliegt |
| Vollstreckungsbescheid aus Mahnverfahren | Nicht anwendbar | — | Nicht geeignet — Yargıtay lehnt ab |
| İhtiyati Haciz (Arrest) | Fälligkeit + Arrestgrund | Tage | Parallel zum Hauptverfahren |

---

## Euro-Forderungen und Wechselkursschutz: Art. 99 türk. OR

Haben Sie Ihrem Schuldner einen Betrag in Euro geliehen oder in Euro fakturiert, schützt Sie das türkische Recht vor dem Kursverlust der türkischen Lira — wenn Sie diesen Schutz korrekt geltend machen.

**Art. 99 des türkischen Obligationenrechts (Türk Borçlar Kanunu)** bestimmt: Ist eine Geldschuld in ausländischer Währung vereinbart, kann der Gläubiger bei Zahlungsverzug den Wechselkurs **zum Zeitpunkt der tatsächlichen Zahlung** verlangen — nicht den Kurs bei Fälligkeit.

Was das in der Praxis bedeutet, zeigt folgendes Rechenbeispiel:

| Zeitpunkt | Betrag (Euro) | EUR/TRY-Kurs | TL-Gegenwert |
|---|---|---|---|
| Darlehensauszahlung 2022 | 25.000 € | 18,00 | 450.000 TL |
| Tatsächliche Zahlung 2026 | 25.000 € | 38,00 | 950.000 TL |
| **Kursgewinn zugunsten Gläubiger** | — | — | **+ 500.000 TL** |

Damit dieser Schutz greift, **muss** in der Vollstreckungsanforderung (Takip Talebi) ausdrücklich vermerkt werden: „fiili ödeme tarihindeki kur" (Kurs am tatsächlichen Zahlungstag). Fehlt dieser Vermerk, rechnet das Vollstreckungsamt automatisch mit dem Kurs vom Einleitungsdatum — ein teurer Fehler, der im Nachhinein nicht korrigiert werden kann.

> ⚠️ **Wichtig:** Gleichzeitig ist zu beachten, dass der Zahlungsbefehl selbst in türkischer Lira ausgestellt werden muss. Der Lira-Gegenwert der Euro-Forderung ist im Vollstreckungsantrag anzugeben. Wird der Zahlungsbefehl fälschlicherweise in Euro ausgestellt, ist er nichtig und kann auf Antrag des Schuldners aufgehoben werden (Art. 58 Abs. 3 İİK). Diese technische Anforderung ist einer der häufigsten Fehler bei der Eigenregie.

---

## Schritt für Schritt: Forderungseinzug aus Deutschland ohne Anreise

Das gesamte Verfahren kann von Deutschland aus geführt werden. Hier ist der vollständige Ablauf:

**1. Vollmacht ausstellen lassen**
Gehen Sie zu einem deutschen Notar oder zum türkischen Generalkonsulat (in Frankfurt, Berlin, Hamburg, Köln, München, Stuttgart oder Düsseldorf). Die Vollmacht muss die Befugnis zur Einleitung von Vollstreckungsverfahren, zum Abschluss von Vergleichen und zur Beantragung von Arresten enthalten. Anschließend Apostille besorgen und ins Türkische übersetzen lassen.

**2. Unterlagen zusammenstellen**
Sämtliche Beweise für die Forderung: Verträge, Rechnungen, Überweisungsbelege, E-Mails, WhatsApp-Nachrichten (soweit relevant). Deutsche Dokumente müssen von einem beeidigten Übersetzer ins Türkische übersetzt werden.

**3. UYAP-Vorabrecherche und Arrestentscheidung**
Ihr Anwalt prüft anhand der verfügbaren Informationen, welche Vermögenswerte der Schuldner in der Türkei voraussichtlich hat. Bei Verdacht auf Vermögenstransfer: Arrestantrag vor Vollstreckungseinleitung.

**4. Vollstreckungsantrag einreichen**
Ihr Anwalt stellt den Antrag beim zuständigen İcra Dairesi. Der Zahlungsbefehl wird dem Schuldner zugestellt.

**5. Sieben-Tage-Frist und Reaktion**
Kein Widerspruch → sofortige Pfändung. Widerspruch → Klage auf Aufhebung mit 20-%-Entschädigungsrisiko für den Schuldner.

**6. Pfändung und Verwertung**
Pfändung von Bankkonten, Immobilien und Fahrzeugen per UYAP. Bei Zahlungsunfähigkeit: Versteigerung der gepfändeten Güter.

**7. Laufende Information**
Die Doğru Kanzlei informiert Sie in jeder Phase auf Deutsch — per E-Mail, Telefon oder WhatsApp.

---

## Die Doğru Kanzlei: Doppelzulassung, ein Verfahren, keine Umwege

Das Kernproblem bei der Vollstreckung in der Türkei aus Deutschland ist strukturell: Sie brauchen einen Anwalt, der beide Rechtssysteme kennt, in beiden Ländern präsent ist und keine Zeit mit Zwischenkommunikation verliert.

Die Doğru Kanzlei ist sowohl bei der **Ankara Barosu** (Anwaltskammer Ankara, Reg.-Nr. 47068) als auch bei der **Rechtsanwaltskammer Karlsruhe** gemäß **§ 207 BRAO** zugelassen. Das bedeutet:

- Direktvertretung vor türkischen Vollstreckungsämtern und Gerichten — ohne Zwischenschaltung eines lokalen Partneranwalts.
- Kommunikation und Aktenführung vollständig auf Deutsch.
- Mannheimer Büro für persönliche Beratung, Ankaraner Büro für die operative Vollstreckung.
- Ein Ansprechpartner. Eine Akte. Keine Informationsverluste.

Av. Hasan Doğru verfügt zudem über rund 10 Jahre Erfahrung als Angehöriger der türkischen Özel Harekat (Sonderoperationseinheit der Nationalpolizei). Dieses institutionelle Wissen — über Behördenstrukturen, Zustellungswege und Vermögensermittlung — ist ein praktischer Vorteil, der in keiner Gesetzessammlung steht.

Mehr zur Struktur unserer Arbeit finden Sie auf [unsere Leistungen](/de/leistungen); Informationen zur Doppelzulassung und zum Team stehen unter [Über die Doğru Kanzlei](/de/ueber-uns).

---

> **RECHTLICHER HINWEIS:** Dieser Artikel dient ausschließlich der allgemeinen Information über das türkische Recht und stellt keine Rechtsberatung dar. Die Doğru Kanzlei berät gemäß § 207 BRAO ausschließlich im türkischen Recht. Jeder Fall ist individuell — für eine auf Ihre Situation zugeschnittene Einschätzung wenden Sie sich bitte an einen zugelassenen Anwalt.`,
    contentEN: `**Legal Notice:** This article addresses Turkish law exclusively. Doğru Kanzlei advises on Turkish law under § 207 BRAO and does not advise on German domestic law.

---

A business owner in Frankfurt lent €40,000 to a Turkish supplier for upfront production costs. The agreement was in writing. Bank transfers were documented. When the goods never arrived and the supplier stopped responding, the business owner did what seemed obvious: he started a German court process. After seven months, he had a Vollstreckungsbescheid — the German equivalent of a default judgment obtained through the postal court process. He then discovered that this document was worthless in Turkey. Turkish courts refused to recognise it. He had spent seven months and several thousand euros going in entirely the wrong direction.

This is not an unusual story. Thousands of people in Germany — Turkish-German diaspora members, German nationals with business ties to Turkey, Dutch and Scandinavian creditors with Turkish debtors — face this situation every year. The instinct to act within the German system is understandable. But when the debtor and their assets are in Turkey, the German legal system ends at the border.

This guide explains how the Turkish enforcement system actually works, what tools are available to you as a creditor based abroad, and how to move efficiently — protecting your claim from the day you decide to act. If your Turkish legal matter also involves inherited assets or family property, our [Turkish inheritance law guide](/en/blog/turkish-inheritance-germany-guide) gives useful background on related asset and power-of-attorney issues.

---

## How Turkish Enforcement Law Works: The Basics

Turkish enforcement law is governed primarily by the İcra ve İflas Kanunu — the Enforcement and Bankruptcy Act (referred to here as the EBA). The most important thing to understand upfront is something that does not exist in German or most Western European legal systems: **the ability to begin enforcement proceedings without any court judgment at all**.

This procedure is called **İlamsız İcra Takibi** — literally "non-titled enforcement." You do not need a Turkish court ruling, a German court ruling, or any other judicial decision to initiate it. You file a request with the Turkish enforcement office (İcra Dairesi), the enforcement office issues a payment order to the debtor, and if the debtor does not object within 7 days, seizure of assets begins.

The second type of enforcement is **İlamlı İcra Takibi** — "titled enforcement" — which is used when you already have a court judgment: either a Turkish one, or a foreign judgment that has been formally recognised in Turkey through a recognition and enforcement action (Tenfiz Davası, explained below).

For most creditors based in Germany, İlamsız İcra — enforcement without a prior judgment — is the fastest starting point. The one important caveat is that the debtor has the right to object within 7 days, which pauses the process. We explain what happens then — including a significant financial penalty for unfounded objections — in the section below.

> ⚠️ **Important:** A German Vollstreckungsbescheid (payment order from the Mahnverfahren postal court process) is **not** a litigated judgment and cannot be recognised in Turkey. The Turkish Court of Cassation (Yargıtay) has ruled on this repeatedly and consistently. If you are considering this route, stop — it will cost you time and money with no result in Turkey. Starting fresh with İlamsız İcra in Turkey is almost always faster.

---

## Non-Titled Enforcement (İlamsız İcra Takibi): Step by Step

Here is exactly what happens when enforcement proceedings are initiated in Turkey on your behalf:

**Step 1 — Power of Attorney (Vekaletname)**
You visit a German notary or the Turkish Consulate General in your city (in Germany: Frankfurt, Berlin, Hamburg, Cologne, Munich, Stuttgart, or Düsseldorf) and have a notarised power of attorney drawn up, authorising your Turkish lawyer to initiate enforcement proceedings, apply for precautionary attachments, and enter into settlements. The document must be translated into Turkish and apostilled under the Hague Apostille Convention.

**Step 2 — Enforcement Request**
Your lawyer files the enforcement request (Takip Talebi) with the İcra Dairesi at the debtor's registered place of residence or the place where the contract was to be performed. For Euro-denominated claims, the Turkish Lira equivalent is stated, along with the explicit notation that payment is to be made at "the exchange rate on the date of actual payment" (fiili ödeme tarihindeki kur) — a critical phrase that protects your claim against currency loss. We explain this in detail below.

**Step 3 — Payment Order (Ödeme Emri)**
The enforcement office sends the payment order to the debtor. The debtor has exactly 7 days from the date of service to object. If service cannot be effected at the known address, your lawyer can request alternative service methods.

**Step 4 — No Objection: Enforcement Becomes Final**
If 7 days pass without objection, the payment order becomes final (kesinleşme). Your lawyer immediately initiates a UYAP asset query (see next section) and applies for the seizure of all identified assets.

**Step 5 — Seizure**
Bank accounts are frozen, a charge is registered against any real estate in the land registry, and vehicles are blocked. These actions happen digitally through UYAP — typically within a few working days of the enforcement becoming final.

**Step 6 — Realisation**
If the debtor still does not pay voluntarily, seized assets are sold at public auction. The proceeds are used to satisfy the debt, with enforcement costs and interest recovered first.

---

## UYAP: Turkey's Digital Asset Discovery System

One of the most powerful — and least understood — features of the Turkish enforcement system is UYAP (Ulusal Yargı Ağı Bilişim Sistemi — National Judicial Information Network). Once enforcement proceedings are initiated, your lawyer gains electronic access to a comprehensive cross-database query covering every registered asset in the debtor's name across Turkey.

This is structurally different from Germany, where creditors must typically guess which banks the debtor uses and write to each separately. In Turkey, a single UYAP query covers everything:

| Asset Type | Source Database | Typical Freeze Timeline |
|---|---|---|
| Real estate (flats, land, commercial) | TAKPAS (land registry) | 1–3 working days |
| Bank accounts (all Turkish banks) | BDDK banking interface | 1–2 working days |
| Vehicles (cars, trucks, motorbikes) | Traffic registration | 2–3 working days |
| Salary / pension entitlements | SGK social security system | 3–5 working days |
| Company shares | Trade registry | 5–7 working days |

No separate court order is needed for these queries — they flow automatically from the initiation of enforcement proceedings. The speed and comprehensiveness of this system is a significant advantage over debt recovery in most Western European jurisdictions.

> ⚠️ **Important:** If you have reason to believe the debtor may transfer assets to family members or associated companies before enforcement is finalised, apply for a precautionary attachment (İhtiyati Haciz — explained in the next section) **before** or **simultaneously with** the main enforcement request. Once real estate has been transferred to a good-faith third party, recovering it becomes extremely difficult.

---

## Precautionary Attachment (İhtiyati Haciz): Freezing Assets Before It Is Too Late

A precautionary attachment — İhtiyati Haciz in Turkish — is a provisional court order that freezes the debtor's assets while the main proceedings are ongoing. Think of it as the Turkish equivalent of a Mareva injunction (freezing order) in English law, or a saisie conservatoire in French law. It is governed by Arts. 257–268 of the Turkish EBA.

**When can you apply for one?**

The grounds for a precautionary attachment are:

- Your claim is due and supported by documentation (contract, invoice, bank transfer confirmation, promissory note).
- There is a specific risk that the debtor will conceal or transfer assets — or the debtor has no permanent registered address in Turkey.

That last point is critically important for creditors based abroad. **Under Art. 257(2) of the EBA, a debtor having no permanent place of residence in Turkey is alone sufficient grounds for a precautionary attachment** — no additional evidence of asset flight is needed. Many creditors in Germany do not know this. If your Turkish debtor is living and working in Turkey but is not permanently registered there, or if you simply cannot confirm their address, this provision may apply immediately.

**What does it cover?**

A precautionary attachment can be placed on real estate (recorded in the land registry, preventing sale or mortgage), bank accounts (frozen for the amount of the claim), and vehicles (blocked from transfer). The attachment remains in place until the main proceedings conclude.

**What does it cost?**

The applicant typically provides a security deposit of around 10–15% of the claim value. This is returned at the end of proceedings if the attachment is upheld.

**When to apply:**

In most cases, the precautionary attachment should be requested at the same time as the main enforcement request — or earlier if the risk of asset transfer is acute. Once assets are gone, the strongest legal position in the world does not help you recover them.

---

## If the Debtor Objects: The 20% Penalty Mechanism

If the debtor objects to the payment order within 7 days, the enforcement proceedings pause (but any precautionary attachment already granted remains in place). You then have two options:

**Option 1 — Summary Objection Removal (İtirazın Kaldırılması)**
If you hold a signed promissory note, a notarised acknowledgement of debt, or a commercial bill of exchange, your lawyer can apply to the enforcement court to remove the objection in a summary (non-full-trial) hearing. This is faster than a full civil action.

**Option 2 — Civil Action to Annul the Objection (İtirazın İptali Davası)**
If Option 1 is not available — because the debt is based on a contract, invoice or bank transfer rather than a negotiable instrument — your lawyer files a civil claim in the general courts. If the court finds the debtor's objection was unfounded, two things happen:

- The enforcement proceedings resume from where they stopped.
- The debtor is ordered to pay a **statutory enforcement penalty of at least 20% of the principal claim** — on top of the full debt, interest, and costs.

This 20% penalty is not a punitive damages award in the common law sense. It is a mandatory minimum prescribed directly by Turkish law, and it cannot be reduced by the court below that threshold. The purpose is explicit: to deter debtors from filing objections as a delay tactic.

On a €30,000 claim, that is an additional €6,000 minimum. On a €100,000 claim, €20,000 minimum. In practice, this mechanism means that a debtor who has no real defence is financially better off not objecting at all.

> **Yargıtay (Court of Cassation) 19th Civil Division, 2019/4412 E.:** Where the claim is liquidated and documented, an unfounded objection must result in an enforcement penalty of no less than 20% of the claim amount — awarded as a matter of law, not discretion.

---

## Enforcing a German Court Judgment in Turkey: The Recognition Process

If you already have a German court judgment — obtained through full adversarial proceedings, not the Mahnverfahren postal process — you can have it recognised and enforced in Turkey. The procedure is called **Tenfiz Davası** (recognition and enforcement action) and is governed by Arts. 50–59 of Turkish Private International Law Act No. 5718 (MÖHUK).

**What the Turkish court checks:**

1. The judgment is final and enforceable in Germany (you will need a Rechtskraftvermerk — certificate of finality — and an Apostille).
2. It is translated into Turkish by a sworn translator.
3. Factual reciprocity exists between Germany and Turkey (it does).
4. The judgment does not violate Turkish public policy (ordre public).
5. The defendant was properly served and had the opportunity to defend.

The Turkish court does **not** re-examine the merits of the German decision. It is a formal procedural check only.

**The critical distinction — again:**

| German document | Enforceable in Turkey via Tenfiz? |
|---|---|
| Litigated judgment (Urteil) with Rechtskraftvermerk + Apostille | Yes |
| Vollstreckungsbescheid from Mahnverfahren | No — not a litigated judgment |
| Settlement agreement approved by court (Prozessvergleich) | Potentially yes — depends on form |

**Strategic recommendation:** If you do not yet have a German judgment, starting İlamsız İcra in Turkey directly is almost always faster than obtaining a German judgment and then pursuing Tenfiz. The Tenfiz route adds 6–18 months to the process and requires additional costs. Use it only if you already have a German litigated judgment in hand.

---

## Euro Claims and Currency Protection: Art. 99 Turkish Code of Obligations

If your claim is denominated in Euros — a loan, a contract price, an invoice — Turkish law gives you a mechanism to ensure the debtor bears the full cost of Turkish Lira depreciation between the date of default and the date of actual payment.

**Art. 99 of the Turkish Code of Obligations (Türk Borçlar Kanunu)** provides: where a monetary obligation is expressed in foreign currency, a debtor in default must satisfy the claim at the exchange rate prevailing on the **date of actual payment** — not the rate at the original due date.

In practice this means the longer the debtor delays, the more they owe in Lira terms. The Lira exchange rate risk is transferred entirely to the debtor once they enter default.

| Event | Amount | EUR/TRY Rate | TRY Equivalent |
|---|---|---|---|
| Loan disbursed (2022) | €25,000 | 18.00 | 450,000 TL |
| Actual payment ordered (2026) | €25,000 | 38.00 | 950,000 TL |
| **Currency difference borne by debtor** | — | — | **+500,000 TL** |

**How to activate this protection:**

The enforcement request (Takip Talebi) filed with the İcra Dairesi must explicitly state the phrase **"fiili ödeme tarihindeki kur"** — "the exchange rate on the date of actual payment." Without this phrase, the enforcement office automatically applies the exchange rate on the date the proceedings were filed. This omission cannot be corrected after the fact, and on large Euro claims it can represent a loss of tens of thousands of Euros.

This is one of several technical requirements in the Turkish enforcement request that, if missed, cannot be remedied later. It is among the most compelling reasons to use a lawyer with specific expertise in Turkish enforcement law rather than a general practitioner.

---

## Step-by-Step: How to Start Debt Collection in Turkey from Germany

Here is the complete process from your first decision to act through to receiving payment — entirely manageable from Germany without a single trip to Turkey.

**Step 1 — Gather your evidence**
Collect every document relating to the debt: signed contracts, invoices, bank transfer confirmations, email chains, WhatsApp messages (screenshots with metadata). German-language documents will need to be translated into Turkish by a sworn translator. Apostilles are required for officially certified German documents.

**Step 2 — Assess the asset situation**
Before initiating proceedings, consider whether you have any information about the debtor's assets in Turkey. Even a rough sense — "I know they own a flat in Ankara" — helps your lawyer decide whether to apply for a precautionary attachment simultaneously. If you have no information, UYAP will provide a full picture once proceedings begin.

**Step 3 — Issue the power of attorney (Vekaletname)**
Visit a German notary or Turkish Consulate General. The Vekaletname must specifically authorise enforcement proceedings, precautionary attachments, and settlements. It must be apostilled and translated into Turkish. Your lawyer can provide the exact wording required.

**Step 4 — File the enforcement request**
Your lawyer files the Takip Talebi with the İcra Dairesi. The Euro claim is expressed in Turkish Lira at the current rate, with the "actual payment date rate" notation. If precautionary attachment is warranted, that application is filed simultaneously.

**Step 5 — Payment order issued and 7-day window**
The İcra Dairesi serves the Ödeme Emri on the debtor. If no objection is filed within 7 days, enforcement becomes final and seizure begins. If the debtor objects, your lawyer proceeds with İtirazın İptali Davası — with the 20% penalty exposure for the debtor.

**Step 6 — UYAP asset query and seizure**
Your lawyer runs the UYAP query across all asset categories. Freeze orders are placed on bank accounts, real estate charges registered, and vehicles blocked — typically within a few working days.

**Step 7 — Recovery**
Frozen bank funds are transferred directly to the enforcement file. Real estate and vehicles are sold at public auction if the debtor does not pay voluntarily from other sources. Enforcement costs and legal fees are recovered from the debtor on top of the principal.

**Step 8 — Updates throughout**
You receive regular updates in English or German at every key stage — service of the payment order, debtor's response, seizure confirmations, auction dates, and final transfer of funds.

---

## Doğru Kanzlei: Dual Bar Membership, One File, No Relay

The structural problem with cross-border enforcement is almost always the same: creditors end up dealing with two separate lawyers who do not communicate well with each other — one in their home country who does not know Turkish law, and one in Turkey who cannot communicate in the creditor's language. Documents get lost between them. Instructions are misunderstood. Deadlines are missed.

Doğru Kanzlei is built to eliminate this problem. Av. Hasan Doğru holds dual bar membership with the **Ankara Bar Association** (registration no. 47068) and the **Karlsruhe Bar Association** under **§ 207 BRAO** as a registered foreign lawyer in Germany. This means:

- Direct representation before Turkish İcra Daireleri (enforcement offices) and civil courts — no relay through a separate Turkish law firm.
- All client communication in English and German — no translation losses, no misunderstood instructions.
- Mannheim office for in-person consultations; Ankara office for on-the-ground enforcement.
- One file. One lawyer. One point of contact throughout the entire process.

Av. Hasan Doğru spent approximately 10 years as a member of the Turkish National Police's Özel Harekat (Special Operations) unit before entering legal practice. That institutional experience — understanding how Turkish authorities operate, how assets are registered, how enforcement offices work in practice — provides a practical depth that is not found in textbooks and is rarely available through a standard referral to a Turkish lawyer.

Learn more about the firm's cross-border work on [our services](/en/services), or read more [About Doğru Kanzlei](/en/about).

---

> **Legal Notice:** This article addresses Turkish law exclusively and is intended for general information purposes only. It does not constitute legal advice. Doğru Kanzlei advises on Turkish law under § 207 BRAO and does not advise on German domestic law. Every case is different — please consult a qualified lawyer for advice specific to your situation.`,
    contentTR: `**YASAL UYARI:** Bu makale yalnızca Türk hukukuna ilişkin genel bilgi amaçlıdır. Doğru Kanzlei, §207 BRAO kapsamında yalnızca Türk hukuku konularında danışmanlık vermektedir. Alman hukuku konusunda danışmanlık verilmemektedir.

---

Mannheim'da oturan Mehmet Bey, dört yıl önce Ankara'daki eski ortağına 25.000 Euro borç vermişti. Hem yazılı sözleşme vardı hem de havale dekontları. Ama para bir türlü gelmedi. Önce bahaneler, sonra sessizlik. Avukata gittiğinde aldığı ilk cevap şu oldu: "Almanya'da dava açabilirsiniz." Ancak borçlu Türkiye'de, taşınmazları Türkiye'de ve parası Türkiye'de. Almanya'da kazanılan bir karar, Türkiye'de otomatik olarak icra edilmiyordu.

Almanya'da yaşayan on binlerce vatandaşımız bu durumla karşılaşıyor. Türkiye'deki bir yakınına borç veriyor, gayrimenkul satıyor ya da ticari ilişki kuruyor. Ancak iş alacağı tahsil etmeye geldiğinde, iki ülke arasındaki hukuki boşluk devreye giriyor. Almanya'dan açılan dava Türkiye'de geçerli mi? Türkiye'de avukat tutmak için Türkiye'ye gitmek gerekiyor mu? Borçlunun orada malı var mı, nasıl öğrenilir?

Bu rehberde bu soruların tamamını yanıtlıyoruz. Türk hukukunun size sunduğu araçları, Yargıtay kararlarını ve adım adım izlemeniz gereken süreci düz bir dille anlatıyoruz. Türkiye'deki malvarlığı ve miras süreçleriyle bağlantılı konular için ayrıca [Türkiye miras hukuku rehberi](/tr/blog/almanya-turkiye-miras-hukuku-rehberi) yazımıza da göz atabilirsiniz. Okuyun, haklarınızı öğrenin ve karar verin.

---

## Türkiye'de İcra Hukuku Nasıl İşler? Temel Kavramlar

Türkiye'de bir alacağı tahsil etmek için iki ana yol vardır: mahkeme kararına dayanan ilamlı icra ve mahkeme kararı olmaksızın başlatılan ilamsız icra. Almanya'dan alacak tahsili yapmak isteyenler için bu ikinci yol — ilamsız icra — genellikle çok daha hızlı ve etkili bir başlangıç noktasıdır.

**İlamlı icra** (ilamlı icra takibi): Elinizdeki bir mahkeme kararını (Türkiye'de veya yurt dışında verilmiş, ancak tenfiz edilmiş) icra dairesine sunarak doğrudan haciz işlemi başlatılmasıdır. Bunun için önce mahkeme kararı gerekir.

**İlamsız icra** (ilamsız icra takibi): Elinizdeki herhangi bir belgeye (sözleşme, senet, havale dekontu) dayanarak — hatta bazen belgesiz olarak — doğrudan icra dairesine başvurularak borçluya ödeme emri gönderilmesidir. Mahkeme kararı gerekmez.

Bu ayrım çok önemlidir. Almanya'da uzun yıllar uğraşarak elde etmeye çalıştığınız bir Vollstreckungsbescheid (icra emri), Türk hukukunda doğrudan icraya konulamaz çünkü Alman Mahnverfahren süreci çekişmeli bir yargılama değildir — Yargıtay bu kararların tenfizine elverişli olmadığına defalarca hükmetmiştir. Oysa Türkiye'de sıfırdan başlatacağınız ilamsız icra takibi, çoğu zaman çok daha kısa sürede sonuç verir.

---

## İlamsız İcra Takibi: Mahkeme Kararı Olmadan Türkiye'de Haciz

İlamsız icra takibi, İcra ve İflas Kanunu'nun (İİK) 42. ve devamı maddelerinde düzenlenmiştir. Süreç şu şekilde işler:

**1. Vekâletname:** Almanya'daki bir notere veya Türk Konsolosluğuna giderek Türkiye'deki avukatınıza özel vekâletname düzenlenir. Bu belgede icra takibi için gereken yetkiler açıkça yazılı olmalıdır.

**2. Takip Talebi:** Avukatınız, borçlunun yerleşim yeri veya sözleşmenin yapıldığı yerdeki icra dairesine takip talebi sunar. Euro alacaklarında, İİK m.58/3 uyarınca alacağın Türk lirası karşılığı ve "fiili ödeme tarihindeki kur" kaydı belirtilir.

**3. Ödeme Emri:** İcra dairesi, borçluya bir ödeme emri (ödeme emri) gönderir. Borçlunun bu emre 7 gün içinde itiraz etme hakkı vardır.

**4. İtiraz Yoksa:** 7 gün dolup borçlu itiraz etmezse, takip kesinleşir. Avukatınız, UYAP sistemi üzerinden borçlunun tüm mal varlığını sorgular ve haciz işlemi başlar: banka hesapları, taşınmazlar, araçlar.

**5. Haciz:** Banka hesapları ve taşınmazlar üzerindeki elektronik haciz işlemleri, UYAP entegrasyonu sayesinde genellikle birkaç gün içinde tamamlanır. Borçlunun maaşına, kira gelirlerine ve aracına da haciz konulabilir.

> ⚠️ **Önemli:** Euro veya başka bir döviz cinsinden olan alacaklarda, ödeme emri TL karşılığıyla düzenlenmelidir. Bunun unutulması durumunda ödeme emri kamu düzenine aykırılık gerekçesiyle iptal edilebilir (Yargıtay HGK, 2024). Bu teknik detayı doğru yapılandırmak kritik önem taşır.

---

## Borçlu İtiraz Ederse: İtirazın İptali Davası ve %20 Tazminat

Borçlu ödeme emrine 7 gün içinde itiraz ederse, ilamsız icra takibi otomatik olarak durur. Bu noktada iki seçeneğiniz vardır:

**Seçenek 1 — İtirazın Kaldırılması:** Elinizde noter onaylı senet, imzalı sözleşme veya borçlunun borcunu kabul ettiğini gösteren bir belge varsa, icra mahkemesine başvurarak itirazın kaldırılmasını talep edebilirsiniz. Bu, daha hızlı bir süreçtir.

**Seçenek 2 — İtirazın İptali Davası:** Belirtilen belgeler yoksa veya itirazın kaldırılması reddedilirse, genel mahkemede itirazın iptali davası açılır. Bu dava, alacaklı açısından son derece güçlü bir araçtır. Mahkeme borçlunun haksız itiraz ettiğine karar verirse:

- İcra takibi kaldığı yerden devam eder.
- Borçlu, alacak miktarının **%20'sinden az olmamak üzere** icra inkar tazminatına (cezai yaptırım) mahkûm edilir.

> **Yargıtay 19. Hukuk Dairesi, 2019/4412 E.:** "İtirazın iptali davasında alacağın likit (belirli) olması halinde, haksız itiraz eden borçlu aleyhine %20 oranında icra inkar tazminatına hükmedilmesi gerekir."

Bu tazminat, borçluyu gereksiz itiraz etmekten caydıran en etkili yasal araçlardan biridir. Özellikle büyük miktarlı Euro alacaklarında bu fark onlarca bin Euro'ya ulaşabilmektedir.

---

## UYAP ile Borçlunun Varlıklarını Tespit Etmek

Türkiye'deki en büyük sorunlardan biri şudur: borçlunun Türkiye'de mal varlığı olup olmadığını bilmiyorsunuz. Oysa bu artık çözülmüş bir problem.

Türk avukatınız, **UYAP** (Ulusal Yargı Ağı Bilişim Sistemi) üzerinden borçlunun adına kayıtlı şu bilgilere erişebilir:

| Varlık Türü | Kaynak Sistem | Haciz Süresi |
|---|---|---|
| Tapu (ev, arsa, dükkan) | TAKPAS | 1–3 iş günü |
| Banka hesapları | BDDK entegrasyonu | 1–2 iş günü |
| Araçlar | Trafik Müdürlüğü kaydı | 2–3 iş günü |
| SGK / maaş | SGK sistemi | 3–5 iş günü |
| Şirket hisseleri | Ticaret Sicili sorgusu | 5–7 iş günü |

Bu sorgular için mahkeme kararı gerekmez; icra takibi başlatılınca avukat doğrudan erişim sağlar. Tespitle eş zamanlı olarak ihtiyati haciz (aşağıda açıklanmıştır) talep edilebilir.

> ⚠️ **Önemli:** Borçlunun varlıklarını başkasına devredebileceğinden şüpheleniyorsanız, icra takibinden **önce** ihtiyati haciz başvurusunda bulunmanız önerilir. Bir kez devredilen taşınmaz, iyi niyetli alıcı koruması nedeniyle geri almak son derece güçleşir.

---

## İhtiyati Haciz: Borçlunun Malını Kaçırmasını Önleme

**İhtiyati haciz**, bir dava veya icra takibi sürerken borçlunun malvarlığını gizlemesini, satmasını ya da devretmesini engellemek için mahkemeden alınan geçici bir tedbir kararıdır. İİK m.257 ve devamı maddelerinde düzenlenmiştir.

İhtiyati haciz kararı alınabilmesi için:
- Alacağın likit (belirli bir rakama ulaşmış) veya yakın zamanda belirlenebilir olması,
- Borçlunun mallarını kaçırabileceğine dair somut bir şüphe bulunması veya borçlunun Türkiye'de yerleşim yerinin olmaması gerekir.

Yurt dışında yaşayan alacaklılar için özellikle önemli bir avantaj şudur: **borçlunun Türkiye'de yerleşim yeri olmaması tek başına ihtiyati haciz için gerekçe oluşturabilir.** Bu, Almanya'da oturan alacaklıların çoğu zaman görmezden geldiği kritik bir hukuki araçtır.

Haciz uygulanan varlıklar — taşınmazlar, banka hesapları, araçlar — dava sonuçlanana veya icra takibi kesinleşene kadar dondurulur. Bu süreçte borçlu bu varlıklar üzerinde tasarruf edemez.

---

## Almanya'da Alınan Mahkeme Kararının Türkiye'de İcrası: Tenfiz Davası

Almanya'da bir mahkeme kararı (esas yargılama sonucunda verilen gerekçeli karar) aldıysanız, bunu Türkiye'de de icra ettirebilirsiniz — ancak bunun için önce **tenfiz davası** açılması zorunludur.

Tenfiz davası, 5718 sayılı Milletlerarası Özel Hukuk ve Usul Hukuku Hakkında Kanun'un (MÖHUK) 50. maddesi kapsamında yürütülür. Mahkeme, yabancı kararın usul şartlarını (karşılıklılık, kamu düzenine aykırılık olmaması, kesinleşme, tebligat) denetler.

**Almanya ile ilgili kritik not:** Alman mahkemelerinin esas yargılama sonucunda verdiği kararlar (Urteil) tenfize uygundur. Ancak Mahnverfahren sürecinde çıkan Vollstreckungsbescheid (ödeme emri/icra emri) çekişmeli değildir ve Yargıtay bu kararların tenfizini defalarca reddetmiştir. Bu yüzden Vollstreckungsbescheid ile Türkiye'ye gitmek zaman kaybıdır.

**En pratik strateji:** Eğer elinizde henüz Alman mahkemesi kararı yoksa, Türkiye'de doğrudan ilamsız icra takibi başlatmak çoğu zaman 6–12 ay kazandırır.

| Yol | Süre | Türkiye'ye Gitmek Gerekiyor mu? | Notlar |
|---|---|---|---|
| Almanya'da dava → tenfiz → Türkiye'de icra | 2–4 yıl | Hayır | Vollstreckungsbescheid işe yaramaz |
| Türkiye'de doğrudan ilamsız icra | 1–3 ay (itiraz yoksa) | Hayır | En hızlı yol |
| Türkiye'de itirazın iptali davası | 1–2 yıl | Hayır | İtiraz halinde, +%20 tazminat hakkı |
| İhtiyati haciz + ilamsız icra | Hemen + 1–3 ay | Hayır | Varlık kaçırma riski varsa önerilen |

---

## Euro Alacağında Kur Farkı Hakkı: TBK Madde 99

Borçluya Euro cinsinden borç verdiyseniz veya Euro üzerinden anlaştıysanız, Türkiye'de icra takibi başlatırken önemli bir hakkınız bulunmaktadır.

Türk Borçlar Kanunu'nun 99. maddesi şunu söyler: Ülke parası dışında bir para birimiyle belirlenen borç, eğer sözleşmede "aynen ödeme" kaydı yoksa borçlu ödeme günündeki kura göre TL olarak da ödeyebilir. Ancak borçlu gecikirse, alacaklı **fiili ödeme tarihindeki kuru** talep etme hakkına sahiptir.

Bu, son yıllarda Türk lirasının Euro karşısında ciddi değer kayıpları yaşadığı göz önüne alındığında alacaklılar için son derece önemli bir koruma mekanizmasıdır. Örnek verelim:

- 2022'de 25.000 Euro borç verdiydiniz, o günün kuru 18 TL/Euro idi: 450.000 TL.
- 2026'da tahsilat anında kur 38 TL/Euro ise: 950.000 TL.
- Fark: 500.000 TL — bu farkın tamamı TBK m.99 kapsamında talep edilebilir.

Bu hakkın kullanılabilmesi için icra takip talebine "fiili ödeme tarihindeki kur üzerinden" ibaresi açıkça yazılmalıdır. Aksi halde icra dairesi bu kaydı kendiliğinden uygulamaz.

---

## Türkiye'ye Gitmeden İcra Nasıl Başlatılır? Adım Adım

Almanya'dan Türkiye'de icra başlatmak için fiziksel olarak Türkiye'ye gitmenize gerek yoktur. Süreç şu şekilde ilerler:

**1. Adım — Vekâletname Düzenleyin**
Mannheim'daki veya herhangi bir Alman şehirdeki Türk Konsolosluğuna ya da bir notere gidin. İcra takibi için gerekli yetkileri içeren özel bir vekâletname düzenleyin. Bu belgenin Türkçe olması ve apostil şerhi taşıması gerekir. Vekâletname hakkında daha fazla bilgi için [vekâletname nasıl çıkarılır](/tr/blog/turkce-vekaletname-nasil-cikarilir) başlıklı rehberimizi okuyun.

**2. Adım — Belgeleri Hazırlayın**
Elinizdeki Almanca belgeler (sözleşmeler, havale dekontları, WhatsApp yazışmaları dahil) yeminli tercüman tarafından Türkçeye çevrilir. Resmi belgeler için apostil alınır.

**3. Adım — İcra Takibini Başlatın**
Avukatınız, icra dairesine takip talebi sunar. Takip talebi ile birlikte — şartlar uygunsa — ihtiyati haciz de talep edilir.

**4. Adım — UYAP Sorgusu ve Haciz**
Ödeme emri tebliği ardından borçlu itiraz etmezse, avukatınız UYAP üzerinden varlık sorgusu yapar ve haciz kararları çıkarır. Banka hesapları, taşınmazlar ve araçlar dondurulur.

**5. Adım — Paraya Çevirme**
Haciz konulan mallar satışa çıkarılır ve satış bedelinden alacağınız ödenir. Banka hesaplarındaki hacizde ise para doğrudan icra dosyasına aktarılır.

**6. Adım — Sizi Bilgilendiririz**
Tüm bu süreç boyunca avukatınız sizi e-posta veya WhatsApp üzerinden bilgilendirir. Türkiye'ye gitmenizi gerektiren bir adım yoktur.

---

## Doğru Kanzlei Farkı: İki Baroya Kayıtlı, Tek Büro

Almanya'da yaşayan vatandaşlarımızın Türkiye'deki hukuki süreçlerde karşılaştığı en büyük sorun, iki farklı sistemin arasında sıkışıp kalmaktır. Türkiye'de bir avukat tutuyorsunuz, ama bu avukat sizi Almanya'dan takip edemiyor. Mannheim'da bir avukata gidiyorsunuz, ama bu avukat Türk icra hukukunu bilmiyor.

[Doğru Kanzlei](https://www.hasandogru.de/tr/hizmetler), bu sorunu yapısal olarak çözmektedir. Mannheim ofisimiz ve Ankara ofisimiz tek bir bürodur. Av. Hasan Doğru, hem **Ankara Barosu** (Sicil No: 47068) hem de **Karlsruhe Rechtsanwaltskammer** bünyesinde §207 BRAO kapsamında kayıtlıdır. Bu çift baro üyeliği sayesinde:

- Aracı avukata gerek kalmaz.
- Vekâletnamenizi Mannheim ofisimize getirirsiniz, icra işlemi Ankara'dan yürütülür.
- Tüm süreç Türkçe ve Almanca iletişimle şeffaf biçimde takip edilir.
- Bilgi kopukluğu yaşanmaz, dosyanız tek elden yönetilir.

Av. Hasan Doğru'nun Türk Emniyet Genel Müdürlüğü bünyesindeki Özel Harekat biriminde yaklaşık 10 yıl geçirmesi, kurumsal yapıları ve hukuki süreçlerin pratiğini yakından tanımasını sağlamıştır. Bu deneyim, özellikle borçlunun varlıklarını gizlemeye çalıştığı veya tebligatı engellemek istediği durumlarda stratejik avantaj yaratmaktadır.

Alacak tahsili ve icra alanındaki çalışma kapsamımız için [hizmet sayfamız](/tr/hizmetler) üzerinden bilgi alabilir; ekibimizin yapısı ve çift baro kaydı hakkında [Doğru Kanzlei hakkında](/tr/hakkimizda) sayfasını inceleyebilirsiniz.

---

> **YASAL UYARI:** Bu makale yalnızca Türk hukukuna ilişkin genel bilgi amaçlıdır ve hukuki danışmanlık yerine geçmez. Doğru Kanzlei, §207 BRAO kapsamında yalnızca Türk hukuku konularında danışmanlık vermektedir. Her davanın koşulları farklıdır; kendi durumunuza uygun hukuki tavsiye almak için lütfen bir avukata başvurun.`,
    category: "İcra ve İflas Hukuku",
    categoryDE: "Zwangsvollstreckungsrecht",
    categoryEN: "Enforcement & Debt Recovery Law",
    image: debtCollectionImg,
    dateDE: "24. April 2026",
    dateTR: "24 Nisan 2026",
    dateEN: "24 April 2026",
    readTimeDE: "8 Min. Lesezeit",
    readTimeTR: "8 dk okuma",
    readTimeEN: "8 min read",
    publishedAt: "2026-04-24",
    keywordsDE: "forderungseinzug türkei, zwangsvollstreckung türkei deutschland, inkasso türkei anwalt, deutschen vollstreckungsbescheid türkei, schuldner türkei vermögen pfänden, tenfiz davası türkei, mahnverfahren türkei, deutschsprachiger anwalt türkisches recht, fremdwährungsforderung euro türkei",
    keywordsTR: "almanya türkiye alacak tahsili, türkiye icra takibi avukat, ilamsız icra takibi almanya, itirazın iptali davası, ihtiyati haciz, uyap haciz sorgulama, euro alacağı kur farkı, tenfiz davası almanya, yurt dışından türkiye icra",
    keywordsEN: "debt collection turkey from germany, enforce judgment turkey, turkish debt collection lawyer, ilamsız icra takibi foreign creditor, recognition enforcement foreign judgment turkey möhuk, uyap asset search turkey debtor, turkish enforcement law 2026, precautionary attachment turkey ihtiyati haciz, euro claim turkey exchange rate tbk 99, dual bar german turkish lawyer",
    faqDE: [
      {
        question: "Ist ein deutscher Vollstreckungsbescheid in der Türkei vollstreckbar?",
        answer: "Nein. Ein Vollstreckungsbescheid aus dem deutschen Mahnverfahren ist in der Türkei nicht anerkennungsfähig, weil er auf keinem streitigen Verfahren basiert. Der türkische Kassationshof (Yargıtay) hat dies in mehreren Entscheidungen bestätigt. Effektiver ist es, in der Türkei direkt ein Vollstreckungsverfahren ohne Gerichtstitel (İlamsız İcra Takibi) einzuleiten — ohne vorherige Klage in Deutschland."
      },
      {
        question: "Wie kann ich eine Forderung in der Türkei einziehen, wenn ich in Deutschland wohne?",
        answer: "Sie können in der Türkei ein Vollstreckungsverfahren ohne Gerichtstitel (İlamsız İcra Takibi) einleiten, ohne nach Deutschland oder in die Türkei reisen zu müssen. Dafür genügt eine notarielle Vollmacht (Vekaletname), die Sie in Deutschland bei einem Notar oder türkischen Konsulat ausstellen lassen. Die Doğru Kanzlei, mit Büros in Mannheim und Ankara, übernimmt das gesamte Verfahren direkt — ohne Zwischenschaltung eines weiteren Anwalts in der Türkei."
      },
      {
        question: "Wie finde ich heraus, ob mein Schuldner Vermögen in der Türkei hat?",
        answer: "Über das türkische elektronische Justizsystem UYAP (Ulusal Yargı Ağı Bilişim Sistemi) kann Ihr Anwalt in der Türkei sämtliche Immobilien, Bankkonten, Fahrzeuge und Rentenregistrierungen des Schuldners abfragen — alles digital, ohne dass ein Gerichtsbeschluss vorab erforderlich ist. Sobald das Vollstreckungsverfahren eingeleitet ist, kann gleichzeitig ein dinglicher Arrest (İhtiyati Haciz) auf alle festgestellten Vermögenswerte beantragt werden."
      },
      {
        question: "Was passiert, wenn der Schuldner gegen den Zahlungsbefehl Widerspruch einlegt?",
        answer: "Legt der Schuldner innerhalb von 7 Tagen Widerspruch ein, ruht das Vollstreckungsverfahren. Der Gläubiger muss dann eine Klage auf Aufhebung des Widerspruchs (İtirazın İptali Davası) einreichen. Stellt das Gericht fest, dass der Widerspruch unbegründet war, wird der Schuldner zur Zahlung einer Vollstreckungsentschädigung in Höhe von mindestens 20 % der Forderung verurteilt — zusätzlich zur Hauptforderung (Yargıtay 19. HD, 2019/4412 E.)."
      },
      {
        question: "Kann ich ein rechtskräftiges deutsches Gerichtsurteil in der Türkei vollstrecken?",
        answer: "Ja, aber nicht direkt. Ein in Deutschland durch streitiges Verfahren ergangenes, rechtskräftiges Urteil (Urteil mit Rechtskraftvermerk und Apostille) muss zunächst in der Türkei durch eine Anerkennungs- und Vollstreckungsklage (Tenfiz Davası) nach Art. 50 ff. MÖHUK anerkannt werden. Erst danach ist es in der Türkei vollstreckungsfähig. Wichtig: Ein Vollstreckungsbescheid aus dem Mahnverfahren erfüllt diese Voraussetzungen nicht."
      },
      {
        question: "Was ist ein dinglicher Arrest (İhtiyati Haciz) und wann sollte ich ihn beantragen?",
        answer: "Der dingliche Arrest (İhtiyati Haciz) ist eine vorläufige Sicherungsmaßnahme, mit der das Gericht die Vermögenswerte des Schuldners — Immobilien, Konten, Fahrzeuge — einfriert, bevor das Verfahren abgeschlossen ist. Er verhindert, dass der Schuldner Vermögen auf Dritte überträgt. Besonders relevant: Hat der Schuldner keinen festen Wohnsitz in der Türkei, reicht das allein als Arrestgrund aus. Ein Anwalt sollte diesen Antrag so früh wie möglich stellen."
      },
      {
        question: "Wie schütze ich meine Euro-Forderung vor dem Kursverlust der türkischen Lira?",
        answer: "Nach Art. 99 des türkischen Obligationenrechts (Türk Borçlar Kanunu) haben Sie als Gläubiger das Recht, den Wechselkurs zum Zeitpunkt der tatsächlichen Zahlung zu verlangen — nicht den Kurs bei Fälligkeit. Verzögert der Schuldner die Zahlung, trägt er das gesamte Währungsrisiko. Damit dies gilt, muss in der Vollstreckungsanforderung ausdrücklich der 'Kurs am tatsächlichen Zahlungstag' angegeben werden. Ohne diesen Vermerk rechnet das Vollstreckungsamt automatisch den Kurs vom Einleitungsdatum."
      },
      {
        question: "Muss ich für die Vollstreckung in die Türkei reisen?",
        answer: "Nein. Das gesamte Vollstreckungsverfahren in der Türkei kann aus Deutschland heraus geführt werden. Sie benötigen lediglich eine notarielle Vollmacht (Vekaletname), die Sie bei einem deutschen Notar oder türkischen Konsulat ausstellen lassen. Die Doğru Kanzlei ist sowohl bei der Ankara Barosu als auch bei der Rechtsanwaltskammer Karlsruhe (§ 207 BRAO) zugelassen und vertritt Sie direkt vor türkischen Vollstreckungsämtern — ohne Zwischenanwalt."
      },
      {
        question: "Wie lange dauert das Vollstreckungsverfahren in der Türkei?",
        answer: "Legt der Schuldner keinen Widerspruch ein, wird der Zahlungsbefehl nach 7 Tagen rechtskräftig. Die Pfändung von Bankkonten und Immobilien erfolgt danach in der Regel innerhalb weniger Werktage über UYAP. Wird Widerspruch eingelegt und muss eine Klage erhoben werden, kann das Verfahren je nach Arbeitsbelastung des Gerichts 1 bis 2 Jahre dauern. Der dingliche Arrest kann jedoch sofort beantragt werden, um Vermögen bereits während des Verfahrens zu sichern."
      }
    ],
    faqTR: [
      {
        question: "Almanya'da yaşıyorum, Türkiye'deki alacağımı nasıl tahsil edebilirim?",
        answer: "Türkiye'deki borçluya karşı Türk İcra ve İflas Kanunu kapsamında ilamsız icra takibi başlatabilirsiniz. Bunun için Türkiye'de kayıtlı bir avukata vekâletname vermeniz yeterlidir; Almanya'ya mahkeme kararı almak için gitmenize gerek yoktur. Mannheim ve Ankara'da ofisi bulunan Doğru Kanzlei, bu süreci Almanya'dan başlatmanızı sağlar."
      },
      {
        question: "Almanya'da aldığım Vollstreckungsbescheid (icra emri) Türkiye'de geçerli mi?",
        answer: "Hayır, Alman Mahnverfahren süreciyle alınan Vollstreckungsbescheid, Türkiye'de doğrudan icraya konulamaz. Yargıtay kararları, bu tür kararların tenfize elverişli olmadığını açıkça ortaya koymaktadır. Çünkü Mahnverfahren çekişmeli bir yargılama değildir. Bu nedenle Türkiye'de sıfırdan ilamsız icra takibi başlatmak çoğu zaman hem daha hızlı hem de daha etkili bir yoldur."
      },
      {
        question: "Borçlunun Türkiye'de mal varlığı olup olmadığını nasıl öğrenebilirim?",
        answer: "Türkiye'deki avukatınız, UYAP (Ulusal Yargı Ağı Bilişim Sistemi) üzerinden borçlunun tüm taşınmaz mülklerini (TAKPAS sorgusu), banka hesaplarını, araçlarını ve SGK kayıtlarını elektronik olarak sorgulayabilir. Takip başlar başlamaz bu varlıklara ihtiyati haciz (geçici el koyma) konulabilir, böylece borçlunun malları üçüncü kişilere devretmesi önlenebilir."
      },
      {
        question: "Türkiye'de icra takibinde borçlu itiraz ederse ne olur?",
        answer: "Borçlu ödeme emrini tebliğ aldıktan sonra 7 gün içinde itiraz edebilir. İtiraz edilmesi halinde itirazın iptali davası açmanız gerekir. Bu davanın en önemli avantajı, mahkemenin borçlunun haksız itiraz ettiğini tespit etmesi durumunda alacağın %20'sinden az olmamak üzere icra inkar tazminatına hükmedilmesidir (Yargıtay 19. HD, 2019/4412 E.)."
      },
      {
        question: "Euro cinsinden alacağımı Türkiye'de Euro olarak tahsil edebilir miyim?",
        answer: "Türk İcra ve İflas Kanunu'nun 58. maddesi uyarınca, ilamsız icra takibinde ödeme emri yalnızca Türk lirası cinsinden düzenlenebilir; ancak takip talebinde 'fiili ödeme tarihindeki kur' kaydı düşüldüğünde, Türk Borçlar Kanunu m.99 çerçevesinde kur artışından doğan fark da tahsil edilir. Bu, Euro alacaklarında Türk lirasının değer kaybına karşı önemli bir güvencedir."
      },
      {
        question: "İcra takibi ne kadar sürer?",
        answer: "Borçlu itiraz etmezse, ödeme emrinin tebliğinden itibaren 7 gün içinde takip kesinleşir ve haciz işlemlerine geçilebilir. Banka hesaplarına ve taşınmazlara elektronik haciz genellikle birkaç gün içinde tamamlanır. Borçlunun itiraz etmesi durumunda açılacak itirazın iptali davası, mahkeme iş yüküne bağlı olarak 1 ila 2 yıl sürebilir."
      },
      {
        question: "Almanca belgelerimi Türkiye'de icra takibinde kullanabilir miyim?",
        answer: "Evet. Ancak Alman mahkemesi kararları, sözleşmeler ve diğer resmi belgeler yeminli tercüman tarafından Türkçeye çevrilmeli ve apostil şerhi ile onaylanmalıdır. Apostil, Lahey Sözleşmesi kapsamında Almanya'da noterden veya yetkili makamdan alınmaktadır."
      },
      {
        question: "İhtiyati haciz (geçici el koyma) nedir ve ne zaman başvurulur?",
        answer: "İhtiyati haciz, borçlunun dava veya icra takibi sürerken mallarını gizlemesini ya da devretmesini önlemek amacıyla mahkemeden alınan geçici bir tedbir kararıdır. Özellikle borçlunun varlıklarını başkasına devredeceğine dair ciddi şüphe varsa, icra takibine başlamadan önce bu yola başvurulabilir. Uygulama; taşınmazlar, banka hesapları ve araçlar üzerinde yapılabilmektedir."
      },
      {
        question: "Türkiye'de icra takibi başlatmak için Türkiye'ye gitmem gerekiyor mu?",
        answer: "Hayır. Almanya'dan notere giderek düzenleyeceğiniz vekâletname ile avukatınıza yetki vermeniz yeterlidir. Doğru Kanzlei, hem Ankara Barosu hem de Karlsruhe Barosu'na kayıtlı olduğundan (§207 BRAO), tüm icra işlemlerini siz Almanya'dayken doğrudan Türk icra dairelerinden yürütebilmektedir."
      }
    ],
    faqEN: [
      {
        question: "How do I collect a debt from someone in Turkey when I live in Germany?",
        answer: "You can initiate enforcement proceedings in Turkey without a court judgment — a procedure called İlamsız İcra Takibi (non-titled enforcement). All you need is a notarised power of attorney (Vekaletname) authorising a Turkish lawyer to act on your behalf. You do not need to travel to Turkey. Doğru Kanzlei, with offices in Mannheim and Ankara, manages the entire process directly from Germany."
      },
      {
        question: "Can I enforce a German court order in Turkey?",
        answer: "It depends on the type of order. A German payment order (Vollstreckungsbescheid) obtained through the Mahnverfahren process is NOT enforceable in Turkey — the Turkish Court of Cassation (Yargıtay) has ruled repeatedly that these non-litigated orders do not meet recognition requirements. However, a fully litigated German court judgment (Urteil) can be recognised and enforced in Turkey through a recognition and enforcement action (Tenfiz Davası) under Art. 50 of Turkish Private International Law (MÖHUK)."
      },
      {
        question: "How can I find out if my debtor has assets in Turkey?",
        answer: "Once enforcement proceedings are initiated, your lawyer can query all of the debtor's registered assets — real estate, bank accounts at every Turkish bank, vehicles, and pension records — through UYAP (Ulusal Yargı Ağı Bilişim Sistemi), Turkey's national digital court system. No separate court order is needed for this search. Results typically come back within hours, and assets can be frozen immediately via a precautionary attachment (İhtiyati Haciz)."
      },
      {
        question: "What is İlamsız İcra Takibi?",
        answer: "İlamsız İcra Takibi is a Turkish enforcement procedure that allows a creditor to initiate asset seizure proceedings without first obtaining a court judgment — similar in concept to pre-judgment attachment in some common law systems, but broader. Your lawyer files a request with the Turkish enforcement office (İcra Dairesi), which issues a payment order (Ödeme Emri) to the debtor. If the debtor does not object within 7 days, the order becomes final and enforcement — including bank account freezes and real estate charges — begins immediately."
      },
      {
        question: "What happens if the debtor objects to the payment order?",
        answer: "If the debtor objects within 7 days, the enforcement proceedings pause. You then need to file an action to annul the objection (İtirazın İptali Davası) in civil court. If the court finds the objection was unfounded, the debtor is ordered to pay a statutory penalty of at least 20% of the original claim — on top of the full debt. This penalty is designed to deter frivolous objections and is awarded as a matter of law, not judicial discretion."
      },
      {
        question: "What is a precautionary attachment (İhtiyati Haciz) and do I need one?",
        answer: "A precautionary attachment (İhtiyati Haciz) is a provisional court order that freezes the debtor's assets — real estate, bank accounts, vehicles — before the main proceedings conclude. It prevents the debtor from transferring property to third parties while the case is ongoing. Crucially, under Art. 257(2) of the Turkish Enforcement and Bankruptcy Act, a debtor having no permanent residence in Turkey is itself sufficient grounds for a precautionary attachment. If you suspect the debtor may move assets, apply for the attachment before or simultaneously with the main enforcement request."
      },
      {
        question: "My claim is in Euros. Will I lose money due to Turkish Lira depreciation?",
        answer: "Not necessarily. Under Art. 99 of the Turkish Code of Obligations (Türk Borçlar Kanunu), if a debt is denominated in foreign currency and the debtor is in default, you are entitled to claim the exchange rate at the date of actual payment — not the rate when the debt fell due. This means the full currency depreciation between the default date and the payment date falls on the debtor, not you. To activate this protection, your lawyer must explicitly state 'the exchange rate at the date of actual payment' (fiili ödeme tarihindeki kur) in the enforcement request. If this phrase is omitted, the enforcement office will apply the rate at the date of filing — potentially costing you tens of thousands of Euros on a large claim."
      },
      {
        question: "Do I need to travel to Turkey to start enforcement proceedings?",
        answer: "No. A notarised power of attorney (Vekaletname) — issued at a German notary or Turkish consulate in Germany — is all that is needed to authorise your Turkish lawyer. Doğru Kanzlei holds dual bar membership with the Ankara Bar Association and the Karlsruhe Bar Association (§ 207 BRAO), enabling direct representation before Turkish enforcement offices without any relay through a secondary Turkish lawyer. The entire process is managed remotely, with updates provided in English and German."
      },
      {
        question: "How long does debt collection in Turkey take?",
        answer: "If the debtor does not object, enforcement becomes final 7 days after the payment order is served. Bank account and real estate freezes via UYAP typically follow within a few working days. If the debtor objects and court proceedings are needed, the process can take 1 to 2 years depending on the court's caseload. A precautionary attachment can be obtained in days regardless of the main proceedings, ensuring assets are secured throughout."
      }
    ],
    ctaTitleDE: "Haben Sie offene Forderungen in der Türkei?",
    ctaTitleTR: "Türkiye'deki Alacaklarınız İçin Harekete Geçin",
    ctaTitleEN: "Do you have a debtor in Turkey?",
    ctaDescriptionDE: "Wir unterstützen Sie beim Forderungseinzug direkt aus Mannheim – schnell, digital und rechtssicher.",
    ctaDescriptionTR: "Türkiye'deki alacaklarınızı Euro bazında koruyarak tahsil etmek için profesyonel destek sunuyoruz.",
    ctaDescriptionEN: "We handle Turkish enforcement proceedings from Mannheim and Ankara, with direct representation and clear English communication."
  },
  {
    slug: "almanya-ortak-velayet-turkiye-tenfiz",
    slugDE: "deutschland-gemeinsames-sorgerecht-tuerkei-anerkennung",
    slugTR: "almanya-ortak-velayet-turkiye-tenfiz",
    titleDE: "Gemeinsames Sorgerecht aus Deutschland | Anerkennung in der Türkei",
    titleTR: "Almanya'dan Verilen Ortak Velayet Kararı Türkiye'de Tenfiz Edilir mi?",
    excerptDE: "Sie haben das gemeinsame Sorgerecht in Deutschland erhalten, aber erkennt die Türkei dies an? Wir erklären die geänderte BGH-Rechtsprechung nach 2016. Vertretung aus Mannheim.",
    excerptTR: "Almanya'da ortak velayet kararı aldınız ama Türkiye tenfiz ediyor mu? 2016 sonrası değişen Yargıtay içtihadını açıklıyoruz. Mannheim'dan doğrudan temsil.",
    contentDE: `**RECHTLICHER HINWEIS:** Dieser Artikel befasst sich ausschließlich mit dem türkischen Recht. Eine Beratung zum deutschen Recht findet in unserer Kanzlei nicht statt.

# Gilt das gemeinsame Sorgerecht (Gemeinsames Sorgerecht) aus Deutschland in der Türkei?

### Einleitung: Zwei Rechtssysteme, zwei unterschiedliche Ansätze zum Sorgerecht
Eines der komplexesten Probleme für in Deutschland geschiedene türkische Familien ist die Frage, ob die Entscheidung der deutschen Gerichte über das gemeinsame Sorgerecht (Gemeinsames Sorgerecht) in der Türkei anerkannt wird. Bis 2016 gab es hierbei ernsthafte rechtliche Hürden: Da das türkische Recht das Konzept des gemeinsamen Sorgerechts nicht kannte, wurden deutsche Entscheidungen oft wegen "Verstoßes gegen die öffentliche Ordnung" (Ordre Public) abgelehnt.

Seit 2016 hat sich jedoch eine bedeutende Änderung in der Rechtsprechung vollzogen. In diesem Artikel untersuchen wir das Thema im Lichte aktueller Urteile des türkischen Kassationshofs.

---

### 1. Vor 2016: Strikt abgelehnt
Vor 2016 lehnte der 2. Zivilsenat des türkischen Kassationshofs die Anerkennung des gemeinsamen Sorgerechts konsequent ab. Die Begründung war, dass nach dem türkischen Zivilgesetzbuch (TMK Art. 336) das Sorgerecht im Falle einer Scheidung nur einem Elternteil übertragen werden könne.

---

### 2. Der Wendepunkt: Gesetz Nr. 6684 und Rechtsprechungsänderung
Mit dem Gesetz Nr. 6684, veröffentlicht im Jahr 2016, hat die Türkei das Zusatzprotokoll zum "Europäischen Übereinkommen über den persönlichen Umgang mit Kindern" ratifiziert. Dieses Protokoll führte das Konzept des gemeinsamen Sorgerechts indirekt in das türkische Rechtssystem ein.

Daraufhin änderte der 2. Zivilsenat des Kassationshofs seine Rechtsprechung:

> **Yargıtay 2. HD, 2016/15771 E.:**
> "Entscheidungen ausländischer Gerichte zum gemeinsamen Sorgerecht können nicht mehr pauschal als Verstoß gegen die öffentliche Ordnung gewertet werden. Jeder Einzelfall muss im Hinblick auf das Kindeswohl beurteilt werden."

---

### 3. Probleme in der Praxis
- **Aufenthaltsbestimmungsrecht**: Im deutschen Recht wird neben dem gemeinsamen Sorgerecht oft das "Aufenthaltsbestimmungsrecht" einem Elternteil übertragen. Türkische Gerichte müssen diese Unterscheidung bei der Anerkennung berücksichtigen.
- **Umgangsrecht**: Deutsche Gerichte legen oft umfangreichere Besuchszeiten fest als türkische Gerichte. Die Balance zu finden, ist eine Herausforderung im Anerkennungsverfahren.
- **Kindesentziehung (HKÜ)**: Trotz gemeinsamen Sorgerechts kann das Verbringen des Kindes in die Türkei ohne Zustimmung des anderen Elternteils eine Straftat nach dem Haager Kindesentführungsübereinkommen darstellen.

---

### 4. Die richtige Anerkennungsstrategie
Wenn Sie in Deutschland ein gemeinsames Sorgerecht erhalten haben, müssen im Anerkennungsantrag die deutschen Begriffe detailliert erläutert und an das türkische Recht angepasst werden. Ohne korrekte rechtliche Bezugnahme auf die neue Rechtsprechung besteht das Risiko einer Ablehnung.

Die Doğru Kanzlei betreut diese Verfahren direkt vor türkischen Gerichten und gewährleistet eine fachgerechte Übersetzung und Argumentation.

---

### 5. Sıkça Sorulan Sorular

**Ist das deutsche Sorgerechtsurteil in der Türkei automatisch gültig?**
Nein. Damit das Urteil in der Türkei Rechtswirkung entfaltet, muss eine Klage auf Anerkennung und Vollstreckung (Tenfiz) vor einem türkischen Gericht erhoben werden.

**Kann das Kind nach der Anerkennung des gemeinsamen Sorgerechts dauerhaft in die Türkei gebracht werden?**
Nein. Gemeinsames Sorgerecht bedeutet, dass beide Elternteile Mitspracherecht haben. Eine Änderung des Aufenthaltsorts des Kindes erfordert die Zustimmung beider Eltern oder eine gerichtliche Entscheidung.

**Wie lange dauert das Anerkennungsverfahren?**
Abhängig von der Zustellung der Dokumente dauert das Verfahren mit der richtigen Strategie in der Regel zwischen 6 und 12 Monaten.`,
    contentTR: `**YASAL UYARI:** Bu makale yalnızca Türk hukukuna ilişkindir. Büromuzda Alman hukuku konusunda danışmanlık verilmemektedir.

# Almanya'daki Ortak Velayet (Gemeinsames Sorgerecht) Kararı Türkiye'de Geçerli mi?

### Giriş: İki Hukuk Sistemi, İki Farklı Velayet Anlayışı
Almanya'da boşanan Türk ailelerin en karmaşık sorunlarından biri, Alman mahkemelerinin verdiği ortak velayet (gemeinsames Sorgerecht) kararının Türkiye'de tanınıp tanınmayacağıdır. Bu konu, 2016 yılına kadar Türk yargısında ciddi bir engelle karşılaşıyordu: Türk hukukunda ortak velayet müessesesi bulunmadığından, Alman mahkemelerinin ortak velayet kararları "kamu düzenine aykırılık" gerekçesiyle reddediliyordu.

Ancak 2016 sonrasında önemli bir içtihat değişikliği yaşanmıştır. Bu yazıda, güncel Yargıtay kararları ışığında konuyu detaylı olarak ele alıyoruz.

---

### 1. 2016 Öncesi: Kesin Red
Yargıtay 2. Hukuk Dairesi, 2016 öncesi kararlarında tutarlı bir şekilde ortak velayet kararlarının tenfizini reddetmiştir. Gerekçe, TMK m.336'ya göre boşanma halinde velayetin yalnızca anne veya babadan birine verilebileceği ve ortak velayetin Türk kamu düzenine aykırı olduğu idi.

---

### 2. Dönüm Noktası: 6684 Sayılı Kanun ve Yargıtay İçtihat Değişikliği
25 Mart 2016 tarihli Resmi Gazete'de yayımlanan 6684 sayılı Kanun ile Türkiye, "Çocuklarla Kişisel İlişki Kurulmasına Dair Avrupa Sözleşmesi"nin Ek Protokolü'nü onaylamıştır. Bu protokol, ortak velayet kavramını dolaylı olarak Türk hukuk sistemine tanıtmıştır.

Bunun ardından Yargıtay 2. Hukuk Dairesi, içtihat değişikliğine gitmiştir:

> **Yargıtay 2. HD, 2016/15771 E., 2017/1737 K.:**
> "Yabancı mahkemelerin verdiği ortak velayet kararları artık doğrudan kamu düzenine aykırı sayılamaz. Her somut olay çocuğun üstün yararı çerçevesinde değerlendirilmelidir."

---

### 3. Pratikte Karşılaşılan Sorunlar
- **Aufenthaltsbestimmungsrecht Ayrımı**: Alman hukukunda ortak velayet yanında "Aufenthaltsbestimmungsrecht" (çocuğun ikametgahını belirleme hakkı) genellikle ebeveynlerden birine verilir. Türk mahkemesi tenfiz kararı verirken bu ayrımı dikkate almalıdır.
- **Umgangsrecht vs. Kişisel İlişki**: Alman mahkemeleri genellikle daha geniş kapsamlı görüşme süreleri belirlerken, Türk mahkemeleri daha kısıtlı süreler öngörür.
- **Uluslararası Çocuk Kaçırma (HKÜ)**: Ortak velayet kararı olsa bile, çocuğun rıza dışı Türkiye'ye götürülmesi Lahey Sözleşmesi kapsamında suç oluşturabilir.

---

### 4. Doğru Tenfiz Stratejisi
Almanya'da ortak velayet kararı aldıysanız, tenfiz dilekçesinde Alman hukukundaki velayet kavramlarının Türk hukukundaki karşılıkları detaylı şekilde açıklanmalı ve güncel içtihatlara atıf yapılmalıdır. 

Doğru Kanzlei olarak, hem Alman aile hukuku kavramlarını hem de Türk hukukundaki karşılıklarını bilen bir kadroyla bu süreçleri yönetiyoruz.

---

### 5. Sıkça Sorulan Sorular

**Alman mahkemesinin ortak velayet kararı Türkiye'de doğrudan geçerli mi?**
Hayır. Bu kararın Türkiye'de hüküm doğurması için Türk mahkemelerinde "tenfiz" (icra edilebilirlik) davası açılması zorunludur.

**Ortak velayet tenfiz edilince çocuk Türkiye'ye kalıcı olarak götürülebilir mi?**
Hayır. Ortak velayet, her iki ebeveynin de çocuk üzerinde söz hakkı olması demektir. Çocuğun yerleşim yerinin değişmesi için her iki tarafın rızası veya mahkeme kararı gerekir.

**Tenfiz davası ne kadar sürer?**
Tebligat süreçlerine bağlı olmakla birlikte, doğru hukuki strateji ile genellikle 6-12 ay arasında sonuçlanmaktadır.`,
    category: "Aile Hukuku",
    categoryDE: "Familienrecht",
    image: jointCustodyImg,
    dateDE: "10. April 2026",
    dateTR: "10 Nisan 2026",
    readTimeDE: "6 Min. Lesezeit",
    readTimeTR: "6 dk okuma",
    publishedAt: "2026-04-10",
    keywordsDE: "Gemeinsames Sorgerecht Deutschland Türkei, Sorgerechtsanerkennung, Sorgerechtstenfiz, internationales Sorgerecht",
    keywordsTR: "Almanya ortak velayet Türkiye, gemeinsames Sorgerecht Türkei Anerkennung, velayet tenfizi, uluslararası velayet Almanya Türkiye",
  },
  {
    slug: "almanya-muris-muvazaasi-tapu-iptali",
    slugDE: "deutschland-muris-muvazaasi-tapu-annullierung",
    slugTR: "almanya-muris-muvazaasi-tapu-iptali",
    titleDE: "Muris Muvazaası-Klage aus Deutschland | Erbschleicherei in der Türkei",
    titleTR: "Almanya'dan Türkiye'de Muris Muvazaası Davası | Mirastan Mal Kaçırma",
    excerptDE: "Haben Verwandte in der Türkei geerbte Immobilien übertragen? Erheben Sie eine Muris Muvazaası-Klage aus Deutschland, um die Eigentumsurkunde zurückzuerhalten. Wir erklären es anhand von BGH-Urteilen.",
    excerptTR: "Türkiye'de miras kalan taşınmazı akrabalarınız mı devretti? Almanya'dan muris muvazaası davası açarak tapuyu geri alabilirsiniz. Yargıtay kararlarıyla anlatıyoruz.",
    contentDE: `**RECHTLICHER HINWEIS:** Dieser Artikel befasst sich ausschließlich mit dem türkischen Recht. Eine Beratung zum deutschen Recht findet in unserer Kanzlei nicht statt.

# Muris Muvazaası-Klage aus Deutschland: Wie man Erbschleicherei verhindert

### Einleitung: Das häufigste Erbrechtsproblem für Türken in Deutschland
Wenn Verwandte von in Deutschland lebenden türkischen Staatsbürgern in der Türkei versterben, ist eines der häufigsten rechtlichen Probleme, dass der Erblasser seine Immobilien bereits zu Lebzeiten auf bestimmte Erben oder Dritte übertragen hat. Besonders bei Familienältesten, die in Dörfern oder Kleinstädten leben, kommt es häufig vor, dass sie eine "Schenkung" als "Verkauf" tarnen, um andere Erben von ihrem rechtmäßigen Erbe auszuschließen.

Dieser Vorgang wird im türkischen Recht als "Muris Muvazaası" (Erbschleicherei durch Scheingeschäft) bezeichnet. Was können Sie als in Deutschland lebender Erbe in dieser Situation tun?

---

### 1. Was ist Muris Muvazaası?
Muris Muvazaası liegt vor, wenn der Erblasser eigentlich eine Schenkung beabsichtigt, dies aber im Grundbuch als "Verkauf" deklariert. Ziel ist es, pflichtteilsberechtigte Erben (Ehegatten, Kinder) von ihrem Erbe auszuschließen. Das Grundsatzurteil des türkischen Kassationshofs vom 01.04.1974 (1/2) bildet hierfür die rechtliche Basis:

> **Yargıtay İBK 01.04.1974, 1/2:**
> "Wird festgestellt, dass eine Person eine Immobilie als Verkauf getarnt hat, um einen Erben zu benachteiligen, ist dieser Vertrag wegen Simulation (Muvazaa) ungültig. Jeder benachteiligte Erbe kann die Annullierung der Eintragung verlangen."

---

### 2. Wie wird es aus Deutschland festgestellt?
- **a) Grundbucheinsicht**: Über E-Devlet oder Ihren Anwalt kann eine TAKPAS-Abfrage erfolgen, um alle Übertragungen vor dem Tod des Erblassers zu prüfen.
- **b) Bankfluss**: Es wird geprüft, ob der angebliche Kaufpreis tatsächlich über Banken geflossen ist. Ein zu niedriger Preis gilt als starkes Indiz für eine Simulation.
- **c) Zeugenaussagen**: Aussagen von Nachbarn, Dorfältesten und Verwandten spielen eine entscheidende Rolle, um die wahre Absicht des Erblassers zu beweisen.

---

### 3. Prozess und Verjährung
In Deutschland lebende Erben haben einen großen Vorteil: Diese Klage kann auch noch Jahre nach dem Tod erhoben werden, da sie **keiner Verjährungsfrist** unterliegt.

> **Yargıtay 1. HD, 2019/2547 E.:**
> "Der Antrag auf Löschung und Neuregistrierung aufgrund von Muris Muvazaası basiert auf dem Eigentumsrecht und unterliegt daher weder der Verjährung noch einer Ausschlussfrist."

---

### 4. Praktischer Ablauf der Klage aus Deutschland
Über das türkische Konsulat in Deutschland oder einen deutschen Notar wird eine spezialisierte Vollmacht ausgestellt. Diese muss explizit die Befugnis zur "Klage auf Aufhebung der Eigentumsurkunde" enthalten.

Als Doğru Kanzlei leiten wir den Vollmachtsprozess in unserem Büro in Mannheim ein und erheben die Klage direkt über unser Büro in Ankara. Unsere Mandanten müssen hierfür nicht in die Türkei reisen.

---

### 5. Häufig gestellte Fragen (FAQ)

**Muss ich für die Klage in die Türkei reisen?**
Nein. Mit einer speziellen Vollmacht, die Sie über das Konsulat erteilen, wird der gesamte Prozess von unseren Fachanwälten gesteuert.

**Wie lange nach dem Tod des Erblassers kann ich klagen?**
Bei dieser Klageart gibt es keine Verjährung. Auch wenn der Vorfall 10 oder 20 Jahre zurückliegt, ist eine Klage möglich.

**Kann ich sadece für meinen Pflichtteil klagen?**
Nein, bei Muris Muvazaası kann ein Erbe die Annullierung für seinen gesamten gesetzlichen Erbanteil verlangen, nicht nur für den Pflichtteil.`,
    contentTR: `**YASAL UYARI:** Bu makale yalnızca Türk hukukuna ilişkindir. Büromuzda Alman hukuku konusunda danışmanlık verilmemektedir.

# Almanya'dan Türkiye'de Muris Muvazaası Davası: Mirastan Mal Kaçırma Nasıl Engellenir?

### Giriş: Almanya'daki Türklerin En Sık Karşılaştığı Miras Sorunu
Almanya'da yaşayan Türk vatandaşlarının Türkiye'deki yakınları vefat ettiğinde, en çok karşılaşılan hukuki sorunlardan biri, miras bırakanın sağlığında mallarını belirli mirasçılara veya üçüncü kişilere devretmiş olmasıdır. Özellikle köyde veya kasabada yaşayan aile büyüklerinin, "satış" göstererek aslında bağışlama yaptığı ve diğer mirasçıları miras haklarından mahrum bıraktığı durumlar son derece yaygındır.

Bu hukuki işlem, Türk hukukunda "muris muvazaası" olarak adlandırılır ve Yargıtay'ın onlarca yıllık yerleşik içtihadıyla şekillenmiş özel bir dava türüdür. Peki, Almanya'da yaşayan bir mirasçı olarak bu durumda ne yapabilirsiniz?

---

### 1. Muris Muvazaası Nedir?
Muris muvazaası, miras bırakanın (murisin) gerçekte bağışlama yapmak istediği halde, tapuda "satış" olarak gösterdiği işlemdir. Amaç, saklı paylı mirasçıları (eş, çocuklar) miras haklarından yoksun bırakmaktır. Yargıtay İçtihadı Birleştirme Büyük Genel Kurulu'nun 01.04.1974 tarihli ve 1/2 sayılı kararı, bu alanda temel içtihat niteliğindedir:

> **Yargıtay İBK 01.04.1974, 1/2:**
> "Bu karara göre, bir kimsenin mirasçısını miras hakkından yoksun bırakmak amacıyla tapulu taşınmazını gerçekte bağışladığı halde satış olarak gösterdiği saptanırsa, bu sözleşme muvazaalı olduğundan geçersizdir ve miras hakkı zarar gören her mirasçı dava açarak tapu iptalini ve kendi adına tescilini talep edebilir."

---

### 2. Almanya'dan Nasıl Tespit Edilir?
- **a) Tapu Kaydı Sorgulama**: E-Devlet üzerinden veya avukatınız aracılığıyla TAKPAS (Tapu Kadastro Paylaşım Sistemi) sorgulaması yapılabilir.
- **b) Banka Hesapları ve Para Akışı**: Satış bedeli iddia edilen paranın banka kanalıyla ödenip ödenmediği araştırılmalıdır. Yargıtay, bedelin düşük olmasını güçlü muvazaa delili kabul eder.
- **c) Tanık Beyanları**: Köy halkı, komşular ve akrabaların beyanları miras bırakanın gerçek iradesini ortaya koymada kritik rol oynar.

---

### 3. Dava Süreci ve Zamanaşımı
Muris muvazaası davası, miras bırakanın ölümünden sonra açılabilir ve **herhangi bir zamanaşımı süresine tabi değildir**.

> **Yargıtay 1. HD, 2019/2547 E.:**
> "Muris muvazaasına dayalı tapu iptali ve tescil isteği, mülkiyet hakkına dayandığından zamanaşımı ve hak düşürücü süreye tabi değildir."

---

### 4. Almanya'dan Dava Açma Pratik Süreci
Almanya'daki Türk Konsolosluğundan veya Alman noterinden özel vekâletname çıkarılır. Vekâletnamede "tapu iptali ve tescil davası açma" yetkisinin açıkça yer alması şarttır. 

Doğru Kanzlei olarak Mannheim ofisimizden vekâletname sürecini başlatır, Ankara ofisimiz aracılığıyla davayı bizzat açarız. Müvekkillerimizin Türkiye'ye seyahat etmesine gerek kalmaz.

---

### 5. Sıkça Sorulan Sorular

**Davayı açmak için Türkiye'ye gelmem gerekiyor mu?**
Hayır. Konsolosluk aracılığıyla vereceğiniz özel vekaletname ile tüm süreç uzman avukatlarımız tarafından takip edilir.

**Miras bırakan öldükten ne kadar süre sonra dava açabilirim?**
Bu dava türünde zamanaşımı yoktur. Olayın üzerinden 10-20 yıl geçmiş olsa bile dava açma hakkınız mevcuttur.

**Sadece saklı payım için mi dava açabilirim?**
Hayır, muris muvazaası davasında mirasçı, saklı payı ile sınırlı olmaksızın kendi yasal miras payının tamamı için iptal isteyebilir.`,
    category: "Miras Hukuku",
    categoryDE: "Erbrecht",
    image: inheritanceFraudImg,
    dateDE: "10. April 2026",
    dateTR: "10 Nisan 2026",
    readTimeDE: "8 Min. Lesezeit",
    readTimeTR: "8 dk okuma",
    publishedAt: "2026-04-10",
    keywordsDE: "Muris Muvazaası Deutschland, Erbschleicherei Türkei, Klage auf Aufhebung und Registrierung der Eigentumsurkunde, Erbrechtsfall aus Deutschland, Erbrecht Anwalt Türkei Mannheim",
    keywordsTR: "muris muvazaası Almanya, mirastan mal kaçırma Türkiye, tapu iptali ve tescil davası, Almanya'dan miras davası, Türkiye miras avukatı Mannheim",
    faqDE: [
      {
        question: "Was ist Muris Muvazaası (Erbschaftsbetrug durch Scheinverkauf)?",
        answer: "Muris Muvazaası bezeichnet einen Fall, in dem der Erblasser eine Immobilie im Grundbuch als 'Verkauf' einträgt, obwohl es sich tatsächlich um eine Schenkung handelt — mit dem Ziel, pflichtteilsberechtigte Erben (Ehegatten, Kinder) um ihr Erbrecht zu bringen. Laut dem Grundsatzurteil des Yargıtay (01.04.1974, 1/2) ist ein solches Rechtsgeschäft nichtig, und jeder betroffene Erbe kann Grundbuchberichtigung und Umschreibung auf seinen Namen verlangen."
      },
      {
        question: "Muss ich nach der Türkei reisen, um eine Muris-Muvazaası-Klage einzureichen?",
        answer: "Nein. Mit einer speziellen Vollmacht, die über das türkische Konsulat in Deutschland oder einen deutschen Notar ausgestellt wird, kann der gesamte Prozess von spezialisierten Anwälten geführt werden. Die Vollmacht muss ausdrücklich die Befugnis zur 'Klage auf Grundbuchberichtigung und Umschreibung' enthalten."
      },
      {
        question: "Gibt es eine Verjährungsfrist für Muris-Muvazaası-Klagen?",
        answer: "Nein. Da die Klage auf dem Eigentumsrecht basiert, unterliegt sie laut Yargıtay (1. Zivilkammer, 2019/2547 E.) weder einer Verjährungsfrist noch einer Ausschlussfrist. Selbst wenn seit dem Todesfall 10 bis 20 Jahre vergangen sind, bleibt das Klagerecht bestehen."
      },
      {
        question: "Wie kann ich von Deutschland aus feststellen, ob Immobilien muvazaalı übertragen wurden?",
        answer: "Es gibt drei Wege: Erstens eine Grundbuchabfrage über E-Devlet oder das TAKPAS-System durch Ihren Anwalt. Zweitens die Überprüfung von Banktransaktionen, ob der angebliche Kaufpreis tatsächlich überwiesen wurde — ein auffällig niedriger Preis gilt dem Yargıtay als starkes Indiz für Muvazaa. Drittens Zeugenbefragungen aus dem Dorf oder der Nachbarschaft zur Ermittlung des wahren Willens des Erblassers."
      },
      {
        question: "Kann ich nur meinen Pflichtteil oder meinen gesamten Erbanteil einklagen?",
        answer: "Bei einer Muris-Muvazaası-Klage ist der Anspruch nicht auf den Pflichtteil beschränkt. Der Erbe kann die Aufhebung der Übertragung für seinen gesamten gesetzlichen Erbanteil verlangen — nicht nur für den Mindestpflichtteil."
      },
      {
        question: "Wie lange nach dem Tod des Erblassers kann ich eine Klage einreichen?",
        answer: "Es gibt keine Frist. Da diese Klageart keiner Verjährung unterliegt, kann sie unabhängig davon eingereicht werden, wie viel Zeit seit dem Tod des Erblassers vergangen ist."
      }
    ],
    faqTR: [
      {
        question: "Muris Muvazaası (Mirasçıdan Mal Kaçırma) nedir?",
        answer: "Muris Muvazaası, miras bırakanın taşınmazını tapuda 'satış' gibi gösterip aslında bağışlaması durumudur. Amaç, çocukların veya eşin saklı pay miras haklarını engellemektir. Yargıtay'ın 1974 tarihli içtihadı uyarınca bu işlem geçersizdir ve her mirasçı kendi payı oranında dava açabilir."
      },
      {
        question: "Muris muvazaası davası açmak için Türkiye'ye gitmem gerekir mi?",
        answer: "Hayır. Almanya'daki Türk konsolosluğundan veya Alman noterinden çıkarılacak, 'Tapu İptali ve Tescili' yetkisini içeren özel bir vekaletname ile tüm süreç uzman avukatlarca yürütülebilir."
      },
      {
        question: "Dava açmak için bir zamanaşımı süresi var mıdır?",
        answer: "Hayır. Yargıtay kararlarına göre bu dava ayni hakka dayandığı için zamanaşımı veya hak düşürücü süreye tabi değildir. Vefatın üzerinden ne kadar zaman geçerse geçsin dava açılabilir."
      },
      {
        question: "Malların muvazaalı devredildiğini Almanya'dan nasıl anlarım?",
        answer: "Avukatınız aracılığıyla TAKPAS üzerinden tapu sorgulaması yapılabilir. Ayrıca satış bedelinin ödenip ödenmediği banka kayıtlarından kontrol edilir; piyasa değerinin çok altındaki bedel güçlü bir delildir."
      },
      {
        question: "Sadece saklı payımı mı yoksa tüm miras payımı mı alabilirim?",
        answer: "Muris muvazaası davasında hak talebiniz saklı payla sınırlı değildir. Mirasçı, işlemin iptalini yasal miras payının tamamı için talep edebilir."
      },
      {
        question: "Miras bırakanın ölümünden ne kadar süre sonra dava açılabilir?",
        answer: "Bu dava türü zamanaşımına tabi olmadığından, miras bırakanın ölümünden sonra herhangi bir zaman diliminde açılabilir."
      }
    ]
  },
  {
    slug: "almanya-bosanma-turkiye-mal-paylasimi",
    slugDE: "almanya-scheidung-tuerkei-vermoegensaufteilung",
    slugTR: "almanya-bosanma-turkiye-mal-paylasimi",
    titleDE: "In Deutschland geschieden: Wie teile ich das Vermögen in der Türkei auf? (Die Verjährungsfalle)",
    titleTR: "Almanya’da Boşandım, Türkiye’deki Malları Nasıl Paylaştırırım? (Zamanaşımı Tuzağı)",
    excerptDE: "Möchten Sie nach einer Scheidung in Deutschland das Vermögen in der Türkei aufteilen? Die Verjährung beginnt nicht vor der Anerkennung. Wir erklären es Ihnen praxisnah.",
    excerptTR: "Almanya'da boşanıp Türkiye'deki malları paylaştırmak mı istiyorsunuz? Tanıma tenfiz öncesi zamanaşımı başlamaz. Yargıtay kararlarıyla açıklıyoruz.",
    contentDE: `**RECHTLICHER HINWEIS:** Dieser Artikel befasst sich ausschließlich mit dem türkischen Recht. Eine Beratung zum deutschen Recht (z.B. deutsches Erbrecht, Familienrecht nach BGB oder deutsches Migrationsrecht) findet in unserer Kanzlei nicht statt.

Die große Mehrheit der in Deutschland lebenden türkischen Staatsbürger glaubt, dass nach einem Scheidungsurteil vor deutschen Gerichten die Immobilien und Bankkonten in der Türkei automatisch aufgeteilt werden. Dies ist rechtlich gesehen eine völlig falsche Annahme. Das Scheidungsurteil des deutschen Gerichts ist nur innerhalb des deutschen Rechtssystems gültig; es hat keine direkte Wirkung auf das Vermögen in der Türkei.

Noch gefährlicher ist, dass viele unserer Mitbürger die Anerkennungs- und Vollstreckbarerklärungsverfahren (Tanıma ve Tenfiz) jahrelang hinauszögern und damit faktisch riskieren, ihre Rechte auf Vermögensaufteilung in der Türkei zu verlieren. In diesem Artikel werden wir den kritischen rechtlichen Prozess, den in Deutschland geschiedene Personen mit Immobilien oder Bankguthaben in der Türkei kennen sollten, im Lichte von Urteilen des türkischen Kassationshofs (Yargıtay) und der in der Praxis auftretenden Probleme erläutern.

### 1. Grundregel: Das deutsche Scheidungsverfahren gilt in der Türkei nicht automatisch
Gemäß den Bestimmungen des Gesetzes über das internationale Privat- und Zivilprozessrecht (MÖHUK) Nr. 5718 Art. 50 ff. muss ein ausländisches Gerichtsurteil von türkischen Gerichten anerkannt oder für vollstreckbar erklärt werden, damit es in der Türkei rechtliche Wirkungen entfaltet. Ein vom deutschen Familiengericht erlassener Beschluss wird vom türkischen Standesamt nicht bearbeitet und führt zu keiner Änderung im türkischen Grundbuch.

Daher gelten Sie im türkischen Personenstandsregister weiterhin als "verheiratet", auch wenn Sie in Deutschland geschieden sind. Diese Situation führt zu ernsthaften Rechtsverlusten wie dem Hindernis für eine Wiederverheiratung, Erbrechtsproblemen und der Unmöglichkeit, eine Vermögensaufteilung zu fordern.

### 2. Wann beginnt die Verjährung? Die kritische Rechtsprechung des Yargıtay
Die Verjährungsfrist für Klagen auf Liquidation des Güterstands beträgt gemäß Art. 178 TMK 10 Jahre ab Rechtskraft des Scheidungsurteils. Hier gibt es jedoch eine äußerst wichtige Nuance für in Deutschland Geschiedene:

**Yargıtay 8. Zivilkammer, 2015/3525 E., 2015/8509 K.:**
> "Solange über das von ausländischen Gerichten erlassene und rechtskräftig gewordene Scheidungsurteil keine Anerkennung oder Vollstreckbarerklärung durch türkische Gerichte erfolgt ist, gelten die Ehegatten nach türkischem Recht nicht als geschieden. Daher besteht in der Zwischenzeit keine Möglichkeit, bestimmte mit der Scheidung verbundene Klagerechte wie Schadensersatz, Unterhalt und Liquidation des Güterstands in der Türkei auszuüben. In dieser Hinsicht muss die Verjährungsfrist für Forderungsklagen auf Liquidation des Güterstands ab dem Datum der Rechtskraft der Anerkennungs-/Vollstreckungsentscheidung beginnen, an dem die scheidungsabhängigen Klagerechte ausübbar werden."

Dieses Urteil bedeutet in der Praxis: Wenn Sie sich 2015 in Deutschland haben scheiden lassen und noch keine Anerkennungsklage in der Türkei eingereicht haben, hat die Verjährungsfrist noch nicht begonnen. Dies bedeutet jedoch nicht, dass Sie das Recht haben, ewig zu warten.

### 3. Die verborgenen Gefahren des Wartens

**a) Die Gegenseite kann Vermögenswerte übertragen**
Obwohl Sie im Personenstandsregister in der Türkei immer noch als "verheiratet" erscheinen, kann Ihr Ex-Ehegatte die Immobilien im Grundbuch an Dritte verkaufen oder übertragen. In diesem Fall müssen Sie eine Klage auf Grundbuchberichtigung und Eintragung einreichen, wobei der Schutz des gutgläubigen Dritten (Art. 1023 TMK) ins Spiel kommen kann und Ihr Rechtsverlust irreparabel werden könnte.

**b) Risiko des Scheingeschäfts (Muris Muvazaası)**
Ihr Ex-Ehegatte kann die Immobilie im Grundbuch an Verwandte als "Verkauf" übertragen, obwohl in Wirklichkeit eine Schenkungsabsicht besteht. Nach der ständigen Rechtsprechung der 1. Zivilkammer des Yargıtay ist die Aufhebung solcher kollusiven Geschäfte zwar möglich, die Beweislast ist jedoch hoch und Beweise können verloren gehen, wenn sich der Prozess in die Länge zieht.

**c) Zustellungsproblem**
Wenn die Anerkennungsklage zu spät eingereicht wird, kann sich die Adresse des Ex-Ehegatten geändert haben, er kann die Staatsangehörigkeit gewechselt haben oder der Kontakt kann vollständig abgebrochen sein. In diesem Fall kann die diplomatische Zustellung nach Deutschland 6-8 Monate dauern. Wenn der Ex-Ehegatte die deutsche Staatsangehörigkeit angenommen hat, ist es zudem zwingend erforderlich, alle Zustellungsunterlagen ins Deutsche zu übersetzen.

### 4. Die richtige Strategie: Gleichzeitige Klageerhebung
In der Praxis ist es die gesündeste Methode, die Anerkennungs- und Vollstreckungsklage gleichzeitig mit der Klage auf Liquidation des Güterstands einzureichen und die Güterstandsklage bis zur Rechtskraft der Anerkennungsentscheidung auszusetzen. So wird sowohl das Verjährungsrisiko eliminiert als auch die Gesamtdauer des Verfahrens verkürzt, indem die Prozesse parallel geführt werden.

Darüber hinaus verhindert der Antrag auf eine einstweilige Verfügung gemäß Art. 389 ff. HMK zum Schutz der Immobilien in der Türkei, dass die Gegenseite die Vermögenswerte überträgt. Diese Verfügung kann sogar schon beantragt werden, bevor die Anerkennungsklage abgeschlossen ist.

### 5. Prozessmanagement aus Deutschland: Vorteil von UYAP und digitalem Zugang
Als Doğru Kanzlei verfolgen wir alle Gerichtsprozesse in der Türkei im Namen unserer Mandanten in Deutschland über das UYAP-System in Echtzeit. Über unsere Büros in Ankara und Mannheim führen wir sowohl die Vollmachtsgeschäfte vor deutschen Notaren/Konsulaten als auch die Verhandlungen vor türkischen Gerichten persönlich durch.

Dank unserer doppelten Zulassung bei der Anwaltskammer Ankara (Mitgliedsnr: 47068) und der Rechtsanwaltskammer Karlsruhe (§207 BRAO) müssen Sie keinen separaten Anwalt für Ihre Klagen in der Türkei beauftragen. Dies ist ein entscheidender Vorteil, sowohl in Bezug auf Kostenersparnis als auch zur Vermeidung von Informationsverlusten.

### 6. Häufig gestellte Fragen

**Gilt die Zugewinnausgleich-Entscheidung aus Deutschland in der Türkei?**
Nein. Die Entscheidung über den Zugewinnausgleich nach deutschem Recht umfasst nicht die Immobilien in der Türkei. Für Immobilien in der Türkei muss zusätzlich eine Klage auf Liquidation des Güterstands nach türkischem Recht erhoben werden. Das anzuwendende Recht richtet sich nach dem Eheschließungsdatum: Bei Ehen vor dem 01.01.2002 gilt der Güterstand der Gütertrennung, danach der Güterstand der Beteiligung an erworbenen Gütern.

**Kann ich eine Klage einreichen, ohne in die Türkei zu reisen?**
Ja. Mit einer Vollmacht, die beim türkischen Konsulat in Deutschland oder bei einem deutschen Notar ausgestellt wird, kann der gesamte Prozess von Ihrem Anwalt durchgeführt werden. Sie müssen nicht an den Verhandlungen teilnehmen.

**Mein Ex-Ehegatte stimmt der Klageerhebung nicht zu, was kann ich tun?**
Die Anerkennungs- und Vollstreckungsklage kann einseitig erhoben werden; die Zustimmung der Gegenseite ist nicht erforderlich. Der Prozess wird durch Einreichung des rechtskräftigen deutschen Gerichtsurteils (Rechtskraftvermerk) zusammen mit der Klageschrift, der Apostille und der beglaubigten türkischen Übersetzung eingeleitet.

### 7. Fazit
Wenn Sie ein Scheidungsurteil in Deutschland erhalten haben und in der Türkei Immobilien, Bankkonten oder sonstige Vermögenswerte besitzen, ist es von großer Bedeutung, das Anerkennungs- und Liquidationverfahren unverzüglich einzuleiten. Obwohl die Verjährung nach der Rechtsprechung des Yargıtay erst ab der Rechtskraft der Anerkennung beginnt, steigt das Risiko, dass die Gegenseite die Vermögenswerte überträgt, mit jedem Tag.

Detaylı bilgi ve hukuki danışmanlık için Mannheim ofisimizden (+49 176 6122 1210) veya Ankara ofisimizden (+90 533 237 59 18) bize ulaşabilirsiniz.`,
    contentTR: `**YASAL UYARI:** Bu makale yalnızca Türk hukuku ile ilgilidir. Büromuzda Alman hukuku (örneğin Alman miras hukuku, BGB uyarınca aile hukuku veya Alman göç hukuku) konusunda danışmanlık verilmemektedir.

Almanya'da yaşayan Türk vatandaşlarının büyük çoğunluğu, Alman mahkemelerinde boşanma kararı aldıktan sonra Türkiye'deki gayrimenkul ve banka hesaplarının otomatik olarak paylaşılacağını düşünür. Bu, hukuki açıdan tamamen yanlış bir varsayımdır. Alman mahkemesinin boşanma kararı, yalnızca Alman hukuk sistemi içinde geçerlidir; Türkiye'deki malvarlığı üzerinde hiçbir doğrudan hüküm ifade etmez.

Daha da tehlikelisi, birçok vatandaşımız tanıma ve tenfiz davasını yıllarca erteleyerek Türkiye'deki mal paylaşımı haklarını fiilen kaybetme riski ile karşı karşıya kalmaktadır. Bu yazıda, Almanya'da boşanmış olup Türkiye'de gayrimenkulü veya bankada parası bulunan vatandaşlarımızın bilmesi gereken kritik hukuki süreci, Yargıtay kararları ışığında ve pratikte yaşanan sorunlarla birlikte ele alacağız.

### 1. Temel Kural: Alman Boşanma Kararı Türkiye'de Geçerli Değildir
5718 sayılı Milletlerarası Özel Hukuk ve Usul Hukuku Hakkında Kanun (MÖHUK) m.50 ve devamı hükümleri uyarınca, yabancı bir mahkeme kararının Türkiye'de hüküm ve sonuç doğurabilmesi için o kararın Türk mahkemelerince tanınması veya tenfiz edilmesi zorunludur. Almanya Familiengericht tarafından verilen bir Beschluss, Türkiye nüfus müdürlüğü tarafından işleme alınmaz ve Türk tapu sicilinde herhangi bir değişikliğe yol açmaz.

Dolayısıyla Almanya'da boşanmış olsanız bile, Türkiye'deki nüfus kaydınızda "evli" olarak görünmeye devam edersiniz. Bu durum, yeniden evlenme engeli, miras hakkı sorunları ve mal paylaşımı talep edememe gibi ciddi hak kayıplarına yol açar.

### 2. Zamanaşımı Ne Zaman Başlar? Yargıtay'ın Kritik İçtihadı
Mal rejiminin tasfiyesine ilişkin davalarda zamanaşımı süresi, TMK m.178 gereğince boşanma kararının kesinleşmesinden itibaren 10 yıldır. Ancak burada Almanya'da boşananlar için son derece önemli bir nüans vardır:

**Yargıtay 8. Hukuk Dairesi, 2015/3525 E., 2015/8509 K.:**
> "Yabancı mahkemelerce verilmiş ve kesinleşmiş boşanma ilamı hakkında, Türk mahkemelerince tanıma tenfiz kararı verilmedikçe eşler Türk kanunlarına göre boşanmış sayılmayacaklarından, ara dönemde boşanmaya bağlı olarak Türkiye'de açılacak tazminat, nafaka ve mal rejiminin tasfiyesi gibi bazı dava haklarının kullanılması imkanı olmayacaktır. Bu bakımdan; mal rejiminin tasfiyesine ilişkin alacak davalarında zamanaşımı süresinin, boşanmaya bağlı dava haklarının kullanılabilir hale geldiği, tanıma/tenfiz kararının kesinleşmesi tarihinden başlatılması gerekir."

Bu karar, pratikte şu anlama gelir: Almanya'da 2015'te boşandıysanız ve henüz Türkiye'de tanıma tenfiz davası açmadıysanız, zamanaşımı süresi henüz başlamamıştır. Ancak bu, sonsuza kadar bekleme hakkınız olduğu anlamına gelmez.

### 3. Beklemenin Gizli Tehlikeleri

**a) Karşı Taraf Malları Devredebilir**
Türkiye'deki nüfus kaydında hâlâ "evli" görünseniz de, eski eşiniz tapudaki gayrimenkulleri üçüncü kişilere satabilir veya devredebilir. Bu durumda tapu iptali ve tescil davası açmanız gerekecek olup, iyi niyetli üçüncü kişi koruması (TMK m.1023) devreye geri girebilir ve hak kaybınız telafi edilemez hale gelebilir.

**b) Muris Muvazaası Riski**
Eski eşiniz, tapudaki gayrimenkulü gerçekte bağışlama niyetiyle akrabalarına "satış" olarak göstererek devredebilir. Yargıtay 1. Hukuk Dairesi'nin yerleşik içtihadına göre, bu tür muvazaalı işlemlerin iptali mümkün olmakla birlikte, ispat yükü ağırdır ve sürecin uzaması halinde deliller kaybolabilir.

**c) Tebligat Sorunu**
Tanıma tenfiz davası geç açıldığında, eski eşin adresi değişmiş, vatandaşlık değiştirmiş veya irtibat tamamen kopmuş olabilir. Bu durumda Almanya'ya yapılacak diplomatik yoldan tebligat 6-8 ay sürebilmektedir. Eski eş Alman vatandaşlığına geçmişse, tebligat evraklarının tamamının Almanca'ya tercüme edilmesi de zorunludur.

### 4. Doğru Strateji: Eş Zamanlı Dava Açmak
Pratikte en sağlıklı yöntem, tanıma ve tenfiz davası ile mal rejiminin tasfiyesi davasını eş zamanlı olarak açmak ve mal rejimi davasını tanıma tenfiz kararının kesinleşmesini bekletici mesele yapmaktır. Böylece hem zamanaşımı riski ortadan kalkar, hem de süreç paralel yürütülerek toplam dava süresi kısalır.

Ayrıca, Türkiye'deki gayrimenkullerin korunması için HMK m.389 vd. uyarınca ihtiyati tedbir talebinde bulunulması, karşı tarafın malları devretmesini engeller. Bu tedbir, tanıma tenfiz davası henüz sonuçlanmadan bile talep edilebilir.

### 5. Almanya'dan Sürecin Yönetimi: UYAP ve Dijital Erişim Avantajı
Doğru Kanzlei olarak Almanya'daki müvekkillerimiz adına Türkiye'deki tüm dava süreçlerini UYAP sistemi üzerinden anlık takip ediyoruz. Ankara ve Mannheim'daki ofislerimiz aracılığıyla hem Alman noterleri/konsoloslukları nezdinde vekâletname işlemlerini hem de Türk mahkemelerindeki duruşmaları bizzat yürütüyoruz.

Ankara Barosu (Sicil No: 47068) ve Rechtsanwaltskammer Karlsruhe (§207 BRAO) çift kaydımız sayesinde, Türkiye'deki davalarınız için ayrı bir avukat tutmanıza gerek kalmaz. Bu, hem maliyet tasarrufu hem de iletişim kaybının önlenmesi açısından kritik bir avantajdır.

### 6. Sıkça Sorulan Sorular

**Almanya'daki Zugewinnausgleich kararı Türkiye'de geçerli mi?**
Hayır. Alman hukukundaki Zugewinnausgleich (edinilmiş mallara katılım paylaşımı) kararı, Türkiye'deki taşınmazları kapsamaz. Türkiye'deki gayrimenkuller için ayrıca Türk hukukuna göre mal rejiminin tasfiyesi davası açılmalıdır. Uygulanacak hukuk, evlenme tarihine göre belirlenir: 01.01.2002 öncesi evliliklerde mal ayrılığı rejimi, sonrasında edinilmiş mallara katılma rejimi uygulanır.

**Türkiye'ye gitmeden dava açabilir miyim?**
Evet. Almanya'daki Türk Konsolosluğu veya Alman noterinden çıkarılacak vekâletname ile tüm süreç avukatınız tarafından yürütülebilir. Duruşmalara katılmanız gerekmez.

**Eski eşim dava açılmasına rıza göstermiyor, ne yapabilirim?**
Tanıma ve tenfiz davası tek taraflı açılabilir; karşı tarafın rızası aranmaz. Dava dilekçesi ile birlikte kesinleşmiş Alman mahkeme kararı (Rechtskraftvermerk), apostil şerhi ve onaylı Türkçe tercümesi sunularak süreç başlatılır.

### 7. Sonuç
Almanya'da boşanma kararı aldıysanız ve Türkiye'de gayrimenkul, banka hesabı veya herhangi bir malvarlığınız varsa, tanıma tenfiz ve mal rejimi tasfiyesi sürecini vakit kaybetmeden başlatmanız büyük önem taşımaktadır. Yargıtay içtihadı ile zamanaşımı tanıma tenfiz kesinleşmesinden itibaren başlıyor olsa da, karşı tarafın malları devretme riski her geçen gün artmaktadır.

Detaylı bilgi ve hukuki danışmanlık için Mannheim ofisimizden (+49 176 6122 1210) veya Ankara ofisimizden (+90 533 237 59 18) bize ulaşabilirsiniz.`,
    category: "Aile Hukuku",
    categoryDE: "Familienrecht",
    image: blogPropertyDivisionImg,
    dateDE: "9. April 2026",
    dateTR: "9 Nisan 2026",
    readTimeDE: "10 Min. Lesezeit",
    readTimeTR: "10 dk okuma",
    publishedAt: "2026-04-09",
    keywordsDE: "Scheidung Deutschland Vermögensaufteilung, Türkei Liquidation Güterstand, Anerkennung Verjährung, Klage Türkei aus Deutschland, Türkischer Anwalt Mannheim",
    keywordsTR: "Almanya boşanma mal paylaşımı, Türkiye mal rejimi tasfiyesi, tanıma tenfiz zamanaşımı, Almanya'dan Türkiye'de dava, Mannheim Türk avukat",
    faqDE: [
      {
        question: "Ist ein deutsches Scheidungsurteil in der Türkei gültig?",
        answer: "Nein. Ein deutsches Scheidungsurteil gilt nur im deutschen Rechtssystem. Damit es in der Türkei wirksam wird, muss es von einem türkischen Gericht anerkannt und vollstreckt werden (Tanıma & Tenfiz). Ohne dieses Verfahren bleibt man im türkischen Personenstandsregister weiterhin als verheiratet eingetragen."
      },
      {
        question: "Was passiert mit Immobilien und Bankkonten in der Türkei nach einer Scheidung in Deutschland?",
        answer: "Das deutsche Scheidungsurteil hat keinerlei direkte Wirkung auf Vermögen in der Türkei. Für türkische Immobilien und Bankkonten muss separat eine Klage zur Auflösung des Güterrechts nach türkischem Recht eingereicht werden."
      },
      {
        question: "Wann beginnt die Verjährungsfrist für die Güterrechtsauflösung in der Türkei?",
        answer: "Laut einem Urteil des Yargıtay (8. Zivilkammer, 2015/3525 E.) beginnt die 10-jährige Verjährungsfrist nicht mit dem deutschen Scheidungsurteil, sondern erst mit der Rechtskraft des türkischen Anerkennungsurteils. Wer also noch kein Tanıma-Tenfiz-Verfahren eingeleitet hat, bei dem hat die Frist noch nicht begonnen."
      },
      {
        question: "Kann der Ex-Partner türkische Immobilien verkaufen, bevor das Verfahren abgeschlossen ist?",
        answer: "Ja, das ist möglich und ein reales Risiko. Da man im türkischen Grundbuch noch als verheiratet gilt, kann der Ex-Partner Immobilien an Dritte verkaufen oder übertragen. Zum Schutz kann beim türkischen Gericht ein einstweiliger Rechtsschutz (ihtiyati tedbir) beantragt werden, noch bevor das Anerkennungsverfahren abgeschlossen ist."
      },
      {
        question: "Gilt der deutsche Zugewinnausgleich auch für Vermögen in der Türkei?",
        answer: "Nein. Der Zugewinnausgleich nach deutschem Recht erfasst keine türkischen Immobilien. Für in der Türkei belegenes Vermögen muss eine eigenständige Klage zur Güterrechtsauflösung nach türkischem Recht eingereicht werden. Welches Güterrecht gilt, hängt vom Heiratsdatum ab: Vor dem 01.01.2002 gilt Gütertrennung, danach das Modell der Zugewinngemeinschaft nach türkischem Recht."
      },
      {
        question: "Kann ich das Verfahren führen, ohne in die Türkei zu reisen?",
        answer: "Ja. Mit einer Vollmacht, die beim deutschen Notar oder türkischen Konsulat in Deutschland ausgestellt wird, kann ein Anwalt das gesamte Verfahren in der Türkei stellvertretend führen. Eine persönliche Anwesenheit bei Gerichtsterminen ist nicht erforderlich."
      },
      {
        question: "Was ist, wenn der Ex-Partner dem Verfahren nicht zustimmt?",
        answer: "Das Tanıma-Tenfiz-Verfahren kann einseitig eingeleitet werden, ohne Zustimmung des Ex-Partners. Erforderlich sind das rechtskräftige deutsche Gerichtsurteil (mit Rechtskraftvermerk), eine Apostille sowie eine beglaubigte türkische Übersetzung."
      },
      {
        question: "Wie lange dauert das Tanıma-Tenfiz-Verfahren aus Deutschland?",
        answer: "Die Dauer variiert, kann sich aber erheblich verlängern, wenn der Ex-Partner schwer erreichbar ist. Eine Zustellung auf diplomatischem Weg nach Deutschland kann 6–8 Monate in Anspruch nehmen. Wurde der Ex-Partner zwischenzeitlich deutscher Staatsbürger, müssen alle Zustellungsunterlagen zusätzlich ins Deutsche übersetzt werden."
      }
    ],
    faqTR: [
      {
        question: "Alman boşanma kararı Türkiye'de geçerli mi?",
        answer: "Hayır. Alman boşanma kararı sadece Alman hukuk sisteminde geçerlidir. Türkiye'de etkili olabilmesi için bir Türk mahkemesi tarafından tanınması ve tenfizi (Tanıma & Tenfiz) gerekir. Bu prosedür olmadan Türk nüfus kaydında hâlâ evli görünürsünüz."
      },
      {
        question: "Almanya'da boşandıktan sonra Türkiye'deki mal varlığına ne olur?",
        answer: "Alman boşanma kararının Türkiye'deki varlıklar üzerinde doğrudan bir etkisi yoktur. Türkiye'deki taşınmazlar ve banka hesapları için Türk hukukuna göre ayrıca bir mal rejimi tasfiyesi davası açılması gerekmektedir."
      },
      {
        question: "Türkiye'de mal rejimi tasfiyesi davası için zamanaşımı ne zaman başlar?",
        answer: "Yargıtay kararına göre, 10 yıllık zamanaşımı süresi Alman boşanma kararıyla değil, Türk tanıma kararının kesinleşmesiyle başlar. Dolayısıyla henüz tanıma-tenfiz davası açmamış olanlar için süre henüz işlemeye başlamamıştır."
      },
      {
        question: "Dava bitmeden eski eş Türkiye'deki malları satabilir mi?",
        answer: "Evet, bu mümkün ve gerçek bir risktir. Türkiye'deki tapu sicilinde hâlâ evli göründüğünüz için, eski eş taşınmazları üçüncü kişilere satabilir. Korunma amacıyla, tanıma davası sonuçlanmadan önce mahkemeden ihtiyati tedbir talep edilebilir."
      },
      {
        question: "Almanya'daki mal paylaşımı Türkiye'deki malları kapsar mı?",
        answer: "Hayır. Alman hukukuna göre yapılan mal rejimi tasfiyesi Türkiye'deki taşınmazları kapsamaz. Türkiye'de bulunan varlıklar için Türk hukukuna göre bağımsız bir mal rejimi tasfiyesi davası açılmalıdır."
      },
      {
        question: "Türkiye'ye gitmeden davayı yürütebilir miyim?",
        answer: "Evet. Almanya'dan çıkarılacak bir vekaletname ile bir avukat Türkiye'deki tüm süreci adınıza yürütebilir. Duruşmalara bizzat katılmanız gerekmez."
      },
      {
        question: "Eski eş boşanmanın tanınmasına onay vermezse ne olur?",
        answer: "Tanıma-tenfiz davası, eski eşin onayı olmadan tek taraflı olarak açılabilir. Kesinleşmiş Alman mahkeme kararı, apostil ve Türkçe tercüme yeterlidir."
      },
      {
        question: "Tanıma-tenfiz davası ne kadar sürer?",
        answer: "Süre değişebilir ancak eski eşe ulaşılamıyorsa önemli ölçüde uzayabilir. Almanya'ya diplomatik yolla tebligat yapılması 6-8 ay sürebilir."
      }
    ]
  },
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

Geçen ay ofisimize gelen bir müvekkili hiç unutmayacağım. Mannheim'da 30 yıldır yaşayan, emekli bir tekstil işçisi. Babası Konya'da vefat etmiş, geride bir tarla ve küçük bir dükkan bırakmış. Adam bana şunu dedi:

> **"Avukat bey, kardeşlerim Türkiye'de halleder dediler, ben de bekledim. Üç yıl geçti, hâlâ hiçbir şey çözülmedi. Şimdi ne yapacağım?"**

Bu hikâyeyi neden anlattım? Çünkü bu, bize gelen vakaların büyük çoğunluğunun tam olarak nasıl başladığını gösteriyor. Yurt dışında yaşayan Türk vatandaşları, Türkiye'deki miras meselelerinde ya çok geç harekete geçiyor, ya yanlış kişilere güveniyor, ya da hangi hukukun geçerli olduğunu bile bilmiyor.

**Bu yazıyı okuyorsanız, muhtemelen benzer bir durumdasınız ya da ileride böyle bir durumla karşılaşmaktan endişeleniyorsunuz. Her iki durumda da doğru yerdesiniz.**

---

## Önce Şunu Anlayalım: Hangi Hukuk Geçerli?

Almanya'da yaşayan bir Türk vatandaşı olarak Türkiye'de miras bıraktığınızda — ya da miras aldığınızda — karşınıza hemen ilk soru şu çıkıyor: **Türk hukuku mu geçerli, Alman hukuku mu?**

Cevap: **Her ikisi de, ama farklı konular için.**

2015 yılından itibaren Avrupa Birliği'nde uygulanan **AB Miras Tüzüğü (EU Erbrechtsverordnung 650/2012)** sayesinde bu mesele artık eskiye göre daha net. Tüzüğe göre kural şu: Kişinin hayatının son dönemini geçirdiği ülkenin hukuku esas alınır.

Yani Almanya'da ikamet eden bir Türk vatandaşı vefat ederse, prensipte **Alman miras hukuku** geçerli olur. Ama — ve bu önemli bir "ama" — kişi yaşarken bir **"hukuk seçimi"** yaparak kendi vatandaşlık hukukunun, yani Türk hukukunun uygulanmasını talep edebilir.

---

### Türkiye'deki Taşınmazlar
**Türkiye'deki taşınmazlar söz konusu olduğunda ise tablo tamamen değişiyor.** Türkiye AB üyesi olmadığından, Türkiye'deki gayrimenkullerin mirası için **Türk hukuku** uygulanıyor. Nokta.

Bize sıkça sorulan şu: *"Almanya'da vasiyetname yaptım, Türkiye'deki evim için geçerli mi?"* **Maalesef hayır** — Türkiye'deki taşınmazlar için ayrıca Türk mahkemelerinde veya noterde işlem yapılması gerekiyor.

---

## Türkiye'deki Mirasta Süreç Nasıl İşliyor?

Türkiye'de miras, kendiliğinden el değiştirmiyor. Bir yakınınız vefat ettiğinde, yasal süreçleri aktif olarak başlatmanız gerekiyor.

### 1. Veraset İlamı (Mirasçılık Belgesi) Almak
İlk adım bu. Veraset ilamı, kimin mirasçı olduğunu resmi olarak belgeleyen bir mahkeme kararı ya da noter belgesi. **Bu belge olmadan Türkiye'deki hiçbir mülke, bankadaki paraya ya da araç gibi menkul değerlere ulaşamazsınız.**

Almanya'da yaşıyorsanız bu belgeyi iki farklı yoldan alabilirsiniz:
- **Türk Konsolosluğu aracılığıyla:** Bazı konsolosluklar veraset ilamı düzenleyebiliyor, ancak bu evraklarla Türkiye'deki her kurumun çalışmadığını görüyoruz.
- **Türkiye'deki Mahkeme veya Noter aracılığıyla:** Daha güvenli ve evrensel geçerliliği olan yol. **Vekâletname vererek bu işi bir avukata yaptırabilirsiniz.**

### 2. Tapu Devri
Türkiye'de taşınmaz miras alındığında, tapu müdürlüğünde mirasçılar adına tescil yapılması gerekiyor. Bu işlem için veraset ilamı, kimlik belgeleri ve bazı durumlarda tapu harçlarının ödenmesi şart.

**Kritik Uyarı:** Eğer birden fazla mirasçı varsa ve hepsi anlaşamıyorsa, taşınmaz "müşterek mülkiyet" olarak kalıyor. Bu da ilerleyen süreçte ciddi sorunlara yol açabiliyor — özellikle birisi satmak isteyip diğerleri istemediğinde.

### 3. Bankadaki Varlıklar
Türkiye'deki bir bankada vefat eden kişinin parası varsa, mirasçıların veraset ilamıyla ilgili şubeye başvurması gerekiyor. Bankaların bir kısmı ek belge isteyebiliyor; bunları önceden öğrenmek, gereksiz yolculukların önüne geçiyor.

---

## Almanya'daki Varlıklar Ne Olacak?

Diyelim ki vefat eden kişi hem Türkiye'de hem Almanya'da mal bıraktı. Bu durumda iki ayrı ülkedeki süreci eş zamanlı yürütmek gerekiyor.

Almanya'da **Erbschein** denen miras belgesi, Türkiye'deki veraset ilamının muadili. Nachlassgericht'e başvurularak alınıyor. **Bu belge olmadan Almanya'daki banka hesaplarına, gayrimenkule veya araçlara ulaşmak mümkün değil.**

**Önemli bir detay:** Almanya'daki **miras vergisi (Erbschaftsteuer)** Türkiye'dekinden çok farklı işliyor. Eşler ve çocuklar için muafiyet sınırları var, ancak bu sınırların üzerindeki miktarlar vergilendiriliyor. 

---

## Gerçek Bir Senaryo: İki Ülkede Mülk, Üç Kardeş

Ahmet Bey, 1978'de Almanya'ya gelmiş, Duisburg'a yerleşmiş. Yıllar içinde hem Almanya'da bir daire hem de İzmir'de babadan kalma bir arsa edinmiş. 2024'te vefat ediyor; geride eşi ve üç çocuğu kalıyor. İki çocuk Almanya'da, biri Türkiye'de yaşıyor.

**Almanya tarafı:** Ahmet Bey için Alman miras hukuku devreye giriyor. Eş ve çocuklar yasal mirasçı. Erbschein için Nachlassgericht'e başvurulması gerekiyor.

**Türkiye tarafı:** İzmir'deki arsa için Türk hukuku geçerli. Türk Medeni Kanunu'na göre eş ve çocukların saklı payları var. **Türkiye'deki kardeş belki "ben buradayım, ben hallederim" dedi — ama vekâletname olmadan tek başına hiçbir şey yapamaz.**

*Sorun nerede çıkıyor?* Türkiye'deki arsa üç kardeşin ortak mülkü oluyor. Uzlaşamazlarsa mahkeme yolu açılıyor — bu da yıllarca sürebilir.

---

## En Sık Yapılan 5 Hata (ve Nasıl Önlenir)

Aynı hataları tekrar tekrar görüyoruz. Samimi olmak gerekirse, bu hatalar çoğunlukla kötü niyetten değil, bilgisizlikten kaynaklanıyor.

### Hata 1: "Türkiye'deki akrabalar halleder"
Bu en yaygın yanılgı. Yasal olarak ancak **noterden onaylı vekâletname** ile işlem yapılabilir. Vekâletname yoksa, ne kadar iyi niyetli olursa olsun, yasal olarak hiçbir şey yapılamaz.

### Hata 2: Miras Vergisini Geç Öğrenmek
Türkiye'de veraset ve intikal vergisi var. Süre geçirilirse ceza ve gecikme faizi işliyor. Almanya tarafında da Erbschaftsteuer için katı süreler mevcut.

### Hata 3: Vasiyetnameyi Her Yerde Geçerli Sanmak
**Türk hukukunda çocukların belirli bir payı garanti altında (Saklı Pay)** — baba istese de bu payı sıfıra indiremez. Almanya'daki vasiyetname her zaman Türkiye'deki taşınmazı kapsamaz.

### Hata 4: Mirası Reddetmeyi Düşünmemek
Vefat eden kişi borçlu olabiliyor. **Hem Alman hem Türk hukukunda borçlar da mirasın bir parçasıdır.** Gerektiğinde "mirasın reddi" hakkınızı kullanın — ama sürelerine dikkat!

### Hata 5: Ortak Mülkiyetle Bırakmak
"Şimdilik böyle kalsın" denilip yıllarca tapusu devredilmeyen mülkler zamanla yönetilmez hale geliyor. Mirasçı sayısı arttıkça (çocuklar, torunlar) süreç çıkmaza giriyor.

---

## Miras Planlaması: Ölümden Önce Yapılabilecekler

Asıl güçlü adım, bu süreçleri kendi hayatınızda planlamak.
- **Vasiyetname düzenleyin:** İki ülkenin hukukunu bilen bir avukattan destek alın.
- **Hukuk seçimi yapın:** Türk vatandaşı olarak Türk hukukunun uygulanmasını tercih edebilirsiniz.
- **Aile içi konuşmayı ertelemeyin:** Bu konuşmalar yapılmadığında, geride kalanlar hem yas hem de çözümsüz hukuki meselelerle baş başa kalıyor.
- **Varlık envanteri çıkartın:** Tapu belgeleri ve banka bilgilerini bir araya toplayın.

---

## Son Söz

Miras meselesi, çoğu aile için yalnızca hukuki değil aynı zamanda duygusal bir süreç. Bir kaybın hemen ardından hem yas tutmak hem de hukuki işlemlerle uğraşmak gerçekten ağır.

Bu yüzden mümkünse bu hazırlıkları önceden yapın. Vasiyetnamenizi düzenleyin, yakınlarınızla konuşun, belgelerinizi bir araya toplayın. Bu adımlar hem size hem de geride kalacaklara büyük bir rahatlama sağlıyor.

Bize gelen vakaların büyük çoğunluğu erken müdahaleyle çok daha kolay çözülebilecek meselelerdi. Yıllar geçtikten sonra, üstüne yeni vefatlar ve yeni mirasçılar eklenince, çözüm giderek zorlaşıyor.

Türkiye'de ya da Almanya'da miras konusunda bir sorunuz varsa, ilk görüşmeyi ücretsiz yapıyoruz. Her vakanın kendine özgü olduğunu biliyoruz — dolayısıyla genel bilginin ötesinde, size özel değerlendirme yapabilmek için durumunuzu dinlemekten memnuniyet duyarız.

*Bu yazı genel bilgilendirme amaçlıdır ve hukuki danışmanlık yerine geçmez. Her vakanın kendine özgü koşulları olduğundan, somut bir hukuki sorun için mutlaka bir avukana başvurmanızı öneririz.*`,
    category: "Miras Hukuku",
    categoryDE: "Erbrecht",
    image: "https://images.unsplash.com/photo-1769092992534-f2d0210162b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXclMjBsaWJyYXJ5JTIwYm9va3MlMjBsZWdhbHxlbnwxfHx8fDE3NzQ2OTc3NDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    dateDE: "15. März 2026",
    dateTR: "15 Mart 2026",
    readTimeDE: "12 Min. Lesezeit",
    readTimeTR: "13 dk okuma",
    publishedAt: "2026-03-15",
    keywordsDE: "Erbrecht Türkei Deutschland, Veraset İlamı beantragen, Erbschein Türkei, Erbschaftsteuer Türkei Fristen, Türkisches Erbrecht Beratung Mannheim",
    keywordsTR: "Türkiye miras hukuku Almanya, veraset ilamı nasıl alınır, miras vergisi Türkiye süreler, Almanya'dan miras davası, Türk miras avukatı",
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
    keywordsDE: "Internationale Scheidung Türkei, Tanıma Tenfiz davası, Anerkennung Scheidung Ausland, Scheidungsrecht Türkei, Avukat Hasan Doğru Mannheim",
    keywordsTR: "Uluslararası boşanma Türkiye, tanıma tenfiz davası nasıl açılır, Almanya boşanma Türkiye geçerlilik, Türk aile hukuku, boşanma avukatı Mannheim",
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
    keywordsDE: "Immobilienkauf Türkei Rechte, Tapu Prüfung Türkei, Grunderwerbsteuer Türkei, Vollmacht Immobilien Türkei, Immobilienrecht Anwalt Türkei",
    keywordsTR: "Türkiye'de taşınmaz edinimi yabancılar, tapu sorgulama nasıl yapılır, emlak vergisi Türkiye, vekaletle tapu devri, gayrimenkul avukatı",
  },
  {
    slug: "tanima-tenfiz-rehberi",
    slugDE: "anerkennung-scheidung-tuerkei-deutschland",
    slugTR: "tanima-tenfiz-rehberi",
    slugEN: "recognition-german-divorce-turkey-guide",
    titleDE: "In Deutschland geschieden — in der Türkei noch verheiratet? Das Tanıma Tenfiz-Verfahren 2026",
    titleTR: "Almanya'da Boşandınız, Türkiye'de Hala Evli mi Görünüyorsunuz? Tanıma ve Tenfiz Rehberi 2026",
    titleEN: "",
    excerptDE: "Warum das deutsche Scheidungsurteil in der Türkei nicht gilt, welche zwei Wege zur Anerkennung führen, was mit Unterhalt und Sorgerecht passiert — und was auf dem Spiel steht, wenn Sie nichts tun.",
    excerptTR: "Tanıma ile tenfiz arasındaki fark, dava açmadan konsolosluk yolu, MÖHUK şartları, nafaka ve velayet tenfizi — Almanya'dan Türkiye'ye gitmeden nasıl yapılır?",
    excerptEN: "",
    metaTitleDE: "Scheidung Türkei anerkennen Anwalt: Vollständiger Leitfaden 2026",
    metaTitleTR: "Tanıma ve Tenfiz: Almanya Boşanma Kararı Türkiye'de Nasıl Geçerli Olur? (2026)",
    metaTitleEN: "",
    metaDescriptionDE: "Scheidung Türkei anerkennen Anwalt und Tanıma Tenfiz Anwalt Deutschland: Unterlagen, Verwaltungsweg ohne Gericht, Unterhalt und Sorgerecht — alles was Sie wissen müssen.",
    metaDescriptionTR: "Almanya'da boşandınız, Türkiye'de hala evli mi görünüyorsunuz? Tanıma ve tenfiz davası nedir, şartları nelerdir, dava açmadan konsolosluktan nasıl yapılır, nafaka ve velayet tenfizi — adım adım rehber. Doğru Kanzlei.",
    metaDescriptionEN: "",
    schemaHeadlineDE: "Scheidung Türkei anerkennen Anwalt: Vollständiger Leitfaden 2026",
    schemaHeadlineTR: "Tanıma ve Tenfiz: Almanya Boşanma Kararı Türkiye'de Nasıl Geçerli Olur? (2026)",
    schemaHeadlineEN: "",
    contentDE: "**RECHTLICHER HINWEIS:** Dieser Artikel befasst sich ausschließlich mit dem türkischen Recht. Die Doğru Kanzlei berät gemäß § 207 BRAO ausschließlich im türkischen Recht.\n\n---\n\nDie Scheidung in Deutschland ist durch. Das Gericht hat entschieden, das Urteil ist rechtskräftig, das Leben geht weiter. Dann, oft Jahre später, stellt sich jemand vor dem türkischen Standesamt vor oder checkt die eigenen Nüfus-Daten — und sieht: verheiratet. Immer noch verheiratet.\n\nIn Deutschland ist man geschieden. In der Türkei ist man verheiratet. Beide Aussagen sind zur gleichen Zeit wahr. Die Rechtswissenschaft nennt das „hinkende Ehe\" (türkisch: topal evlilik). Hinkend, weil das Rechtsverhältnis in zwei Ländern unterschiedlich beurteilt wird. Und hinken kann man damit lange, wenn man nichts unternimmt.\n\nDieser Leitfaden erklärt, was zu tun ist.\n\n---\n\n## 1. Warum gilt das deutsche Scheidungsurteil nicht automatisch in der Türkei?\n\nDas Prinzip ist so alt wie das Völkerrecht selbst: Gerichtsentscheidungen eines Staates entfalten unmittelbare Rechtswirkung nur im Hoheitsgebiet dieses Staates. Das deutsche Amtsgericht hat die Ehe nach deutschem Recht aufgelöst — und das gilt in Deutschland. Für türkische Behörden, Standesämter und Register existiert diese Entscheidung nicht, bis sie förmlich anerkannt wurde.\n\nDas ist kein Versehen des Systems. Es ist Absicht: Jeder Staat entscheidet selbst, welche ausländischen Hoheitsakte er auf seinem Territorium anerkennt und unter welchen Bedingungen.\n\nDie Konsequenz für türkische Staatsangehörige in Deutschland: Auch nach Jahren einer rechtskräftigen deutschen Scheidung steht im türkischen Nüfus (Personenstandsregister) weiterhin „verheiratet\". Diese Diskrepanz ist kein bloßer Verwaltungsfehler — sie hat handfeste rechtliche Folgen, die teuer werden können.\n\n### Was auf dem Spiel steht, wenn Sie nichts tun\n\n**Wieder heiraten geht nicht:** Nach türkischem Zivilrecht kann eine bestehende Ehe nicht erneut eingegangen werden. Wer in der Türkei standesamtlich heiraten will — oder wer in Deutschland heiraten will und dafür ein türkisches Ehefähigkeitszeugnis benötigt — wird auf die fehlende Anerkennung stoßen.\n\n**Der frühere Ehegatte bleibt gesetzlicher Erbe in der Türkei:** Solange die Scheidung im Nüfus nicht eingetragen ist, besteht das gesetzliche Erbrecht des früheren Ehegatten für in der Türkei belegene Vermögenswerte fort. Der frühere Ehepartner könnte sich nach Ihrem Tod als Erbe ausgeben und — solange keine Anerkennung vorliegt — formal recht behalten.\n\n**Kinder bekommen möglicherweise den falschen Namen:** Ein Kind, das nach der deutschen Scheidung mit einem neuen Partner geboren wird, kann im türkischen Register unter Umständen dem früheren Ehepartner zugeordnet werden. Das führt zu langwierigen Abstammungsklagen.\n\n**Deutsches Unterhaltsurteil ist in der Türkei nicht vollstreckbar:** Wer auf türkischen Vermögen des unterhaltspflichtigen Ex-Partners zugreifen will, braucht Tenfiz — die Vollstreckbarerklärung. Ohne sie: keine Pfändung, kein Zugriff.\n\n---\n\n## 2. Tanıma und Tenfiz — Zwei Begriffe, die Sie kennen müssen\n\nDas türkische Anerkennungsrecht unterscheidet zwischen zwei Verfahren. Welches in Ihrem Fall nötig ist, hängt vom Inhalt des deutschen Urteils ab.\n\n### Tanıma — Anerkennung (MÖHUK Art. 58)\n\nTanıma bedeutet, dass das türkische Gericht dem deutschen Urteil in der Türkei Rechtskraft zuerkennt — also feststellt, dass es dort gilt. Das Urteil wird damit zur kesin hüküm (rechtskräftigen Entscheidung) für türkische Zwecke.\n\nFür die bloße Eintragung der Scheidung im türkischen Nüfus-Register (Personenstandsregister) genügt in den meisten Fällen Tanıma. Denn es geht nur darum, den Familienstand zu ändern — keine Zwangsvollstreckung, kein Geldzugriff.\n\nEin wesentlicher Unterschied zur Tenfiz: Bei Tanıma wird das Gegenseitigkeitserfordernis (Mütekabiliyet) **nicht** geprüft.\n\n### Tenfiz — Vollstreckbarerklärung (MÖHUK Art. 50-57)\n\nTenfiz macht das deutsche Urteil in der Türkei vollstreckbar — als ob es ein türkisches Urteil wäre. Nötig ist das überall dort, wo das Urteil eine Leistung anordnet, die in der Türkei durchgesetzt werden soll.\n\n**Wann ist Tenfiz erforderlich?**\n- Deutsches Unterhaltsurteil, Vollstreckung in der Türkei gewünscht\n- Schadensersatz- oder Schmerzensgeldurteil aus dem Scheidungsverfahren\n- Güterrechtliche Auseinandersetzung mit Bezug auf Türkei-Vermögen\n- Sorgerechtsentscheidung (mit Einschränkungen — dazu später)\n\nBei Tenfiz wird das Gegenseitigkeitserfordernis geprüft. Deutschland und die Türkei stehen in einem Verhältnis der faktischen Gegenseitigkeit — dieses Erfordernis ist daher in der Praxis kein Hindernis.\n\n### Entscheidungstabelle: Was brauchen Sie?\n\n| Was steht im deutschen Urteil? | Was brauchen Sie? |\n|---|---|\n| Nur Scheidungsausspruch | Tanıma reicht |\n| Scheidung + Unterhalt | Tanıma + Tenfiz |\n| Scheidung + Sorgerecht | Tanıma + Tenfiz (mit Einschränkungen) |\n| Scheidung + Schadensersatz | Tanıma + Tenfiz |\n| Scheidung + Güterregelung | Tanıma + Tenfiz |\n\n> ⚠️ **Wichtig:** Ein Tenfiz-Beschluss enthält die Tanıma bereits. Sie müssen nicht zwei getrennte Verfahren führen. Ein einheitlicher Tanıma-Tenfiz-Antrag deckt beides ab.\n\n---\n\n## 3. Zwei Wege zur Anerkennung: Verwaltung oder Gericht?\n\n### Weg A: Verwaltungsweg (Art. 27/A NHK) — Ohne Gericht\n\nSeit 2017 sieht das türkische Einwohnermeldegesetz (NHK Art. 27/A) vor, dass ausländische Scheidungsurteile unter bestimmten Voraussetzungen **ohne Gerichtsverfahren** im Nüfus-Register eingetragen werden können.\n\n**Wer kann diesen Weg nutzen?**\n\nBeide früheren Ehegatten müssen gemeinsam — persönlich oder durch einen bevollmächtigten Anwalt — beim **türkischen Konsulat** (Ausland) oder der **zuständigen Nüfus Müdürlüğü** (in der Türkei) vorstellig werden.\n\nVereinfachung seit 2020: Ein Ehegatte kann auch allein vorsprechen, wenn der andere verstorben oder ausländischer Staatsangehöriger ist.\n\n**Voraussetzungen für den Verwaltungsweg:**\n- Ausländisches Urteil ist rechtskräftig\n- Apostille liegt vor\n- Beglaubigte türkische Übersetzung liegt vor\n- Das Urteil enthält **keine** vollstreckungsbedürftigen Regelungen zu Unterhalt, Sorgerecht oder Gütertrennung — oder diese werden nicht geltend gemacht\n- Beide Parteien sind bereit zu kooperieren\n\n**Was dieser Weg nicht kann:**\n- Unterhaltsregelungen vollstreckbar machen\n- Sorgerechtsentscheidungen für die Türkei verbindlich machen\n- Güterrechtliche Ansprüche in der Türkei durchsetzen\n\n**Praxis:** Der Verwaltungsweg ist oft deutlich schneller (Wochen statt Monate). Er ist jedoch nur das richtige Instrument, wenn es ausschließlich um die Statusänderung im Nüfus geht — nicht um Vollstreckung.\n\n### Weg B: Gerichtsverfahren (Tanıma Tenfiz Davası) vor dem Familiengericht\n\nWenn der Verwaltungsweg nicht möglich ist — weil der Ex-Partner nicht kooperiert oder weil Unterhalts-/Sorgerechts-/Güterregelungen durchgesetzt werden sollen — muss das türkische Familiengericht angerufen werden.\n\n**Zuständiges Gericht (MÖHUK Art. 51):**\n- Familiengericht am Wohnsitz des Beklagten in der Türkei\n- Kein türkischer Wohnsitz des Beklagten: wahlweise Ankara, İstanbul oder İzmir Familiengericht\n\nDas Verfahren läuft im vereinfachten Verfahren (Basit Yargılama Usulü). Das Gericht prüft **nicht** die inhaltliche Richtigkeit des deutschen Urteils (Revisionsprüfungsverbot). Es prüft nur, ob die Anerkennungsvoraussetzungen erfüllt sind.\n\n---\n\n## 4. Anerkennungsvoraussetzungen im türkischen Recht (MÖHUK Art. 54)\n\nDas türkische Gericht prüft folgende Punkte. Sind sie erfüllt, muss es anerkennen.\n\n### 1. Rechtskraft des deutschen Urteils (Voraussetzung — MÖHUK Art. 50)\n\nDas Scheidungsurteil muss in Deutschland rechtskräftig sein. Der Rechtskraftvermerk (Scheidungsbeschluss mit „Rechtskräftig seit...\" oder separater Rechtskraftbescheinigung) ist das entscheidende Dokument. Fehlt er, scheitert der Antrag formell.\n\n### 2. Gegenseitigkeit / Mütekabiliyet (nur für Tenfiz — MÖHUK Art. 54/a)\n\nNur bei der Tenfiz erforderlich. Deutschland und die Türkei stehen in faktischer Gegenseitigkeit — dieses Erfordernis ist in der Praxis kein Hindernis. Bei reiner Tanıma (Statusänderung) wird Gegenseitigkeit nicht geprüft.\n\n### 3. Keine Verletzung türkischer Ausschließlichkeitszuständigkeit (MÖHUK Art. 54/b)\n\nDas deutsche Gericht darf keine Angelegenheit entschieden haben, für die ausschließlich türkische Gerichte zuständig sind. Für Scheidungssachen ist das kein Problem. Immobilienrechtliche Anordnungen über in der Türkei belegene Grundstücke könnten problematisch sein.\n\n### 4. Kein Verstoß gegen den türkischen ordre public (MÖHUK Art. 54/c)\n\nDas Urteil und seine Wirkungen dürfen den türkischen Grundwerten nicht widersprechen. Standardmäßige deutsche Scheidungsurteile scheitern hier nicht. Extreme Einzelfälle könnten schwierig sein.\n\nDas Gericht kann einen ordre-public-widrigen Teil ablehnen, den Rest aber anerkennen.\n\n### 5. Gewährung rechtlichen Gehörs (MÖHUK Art. 54/ç)\n\nDer Beklagte muss vor dem deutschen Gericht ordnungsgemäß geladen oder vertreten worden sein. Wer ohne Kenntnis in seiner Abwesenheit geschieden wurde und dies rügen möchte, kann das im türkischen Verfahren geltend machen — aber nur wenn er es aktiv einwendet. Das Gericht prüft es nicht von Amts wegen.\n\n---\n\n## 5. Das doppelte Anerkennungsproblem: Türkei und Deutschland\n\nHier liegt ein Aspekt, der in der deutschen Praxis häufig übersehen wird: Die Anerkennung läuft in **beide Richtungen** — und jede muss separat beantragt werden.\n\n### Deutsche Scheidung → Türkei anerkennen (Tanıma Tenfiz)\n\nDas ist der Hauptgegenstand dieses Artikels. Ein in Deutschland rechtskräftiges Scheidungsurteil muss im türkischen Tanıma Tenfiz-Verfahren anerkannt werden, um in der Türkei Wirkung zu entfalten.\n\n### Türkische Scheidung → Deutschland anerkennen (§ 107 FamFG)\n\nDer umgekehrte Fall ist ebenfalls häufig: Wer in der Türkei geschieden wurde, ist damit automatisch in Deutschland noch nicht geschieden.\n\nTürkische Scheidungsurteile müssen in Deutschland gemäß **§ 107 FamFG** anerkannt werden. Zuständig ist die **Landesjustizverwaltung** — in den meisten Bundesländern in der Praxis der Präsident des **Oberlandesgerichts** (OLG).\n\n**Ausnahme Heimatstaatenentscheidung (§ 107 Abs. 1 S. 2 FamFG):** Wenn beide Ehegatten zum Zeitpunkt der Entscheidung **ausschließlich** türkische Staatsangehörige waren und die Scheidung in der Türkei erfolgt ist, ist keine förmliche Anerkennung nach § 107 FamFG erforderlich. Bestehen Zweifel (z.B. bei Doppelstaatern), empfiehlt sich gleichwohl ein Anerkennungsantrag.\n\n**Kosten des § 107 FamFG-Verfahrens:** Je nach Einkommen 10 bis 305 Euro (nach JVKostG).\n\n**Was § 107 FamFG nicht abdeckt:** Wie das türkische Verfahren erstreckt sich die deutsche Anerkennung nach § 107 FamFG ausschließlich auf den Scheidungsausspruch. Unterhalt, Sorgerecht und Versorgungsausgleich aus dem türkischen Urteil müssen in Deutschland separat vor dem Familiengericht geltend gemacht werden.\n\n---\n\n## 6. Erforderliche Unterlagen im Überblick\n\n### Aus Deutschland beschaffen\n\n| Dokument | Bezeichnung | Woher? |\n|---|---|---|\n| Scheidungsurteil im Original | Scheidungsbeschluss | Amtsgericht, das die Scheidung ausgesprochen hat |\n| Rechtskraftvermerk | Rechtskraftbescheinigung / Rechtskräftig seit... | Auf dem Beschluss selbst oder als gesondertes Schreiben des Gerichts |\n| Apostille | Apostille nach Haager Übereinkommen | Je nach Bundesland: Regierungspräsidium, Landgericht, OLG oder Justizministerium |\n| Beglaubigte türkische Übersetzung | Türkçe onaylı tercüme | Vereidigter Übersetzer (in Deutschland oder der Türkei zugelassen) |\n\n> ⚠️ **Kritischer Fehler, den viele machen:** Apostille und Rechtskraftvermerk sind zwei verschiedene Dokumente. Die Apostille beglaubigt die Echtheit des Dokuments international. Der Rechtskraftvermerk bestätigt, dass das Urteil rechtskräftig ist. Beide müssen vorliegen — fehlt eines, scheitert der Antrag.\n\n### Für das Gerichtsverfahren zusätzlich\n\n- Türkische Nüfus-Kayıt-Auszüge beider Parteien (aus der Türkei oder über e-Devlet)\n- Reisepasskopien beider Parteien\n- **Fotobeglaubigte Sondervollmacht (Vekaletname)** — beim türkischen Konsulat in Deutschland ausgestellt, auf Türkisch, enthält ausdrücklich: Befugnis zur Tanıma Tenfiz-Klage, Entgegennahme von Zustellungen, Vertretung vor allen türkischen Behörden\n\n---\n\n## 7. Ohne Türkeireise: Der Vollmachtsweg aus Deutschland\n\nDas gesamte türkische Anerkennungsverfahren kann aus Deutschland heraus geführt werden — ohne persönliche Anwesenheit in der Türkei.\n\n**Schritt 1: Vollmacht beim türkischen Konsulat ausstellen lassen**\n\nGehen Sie zu einem türkischen Konsulat in Deutschland (Frankfurt, Berlin, Stuttgart, München, Köln, Hamburg, Hannover, Karlsruhe, Münster oder Nürnberg). Mit Ihrem Reisepass lassen Sie dort eine **Sondervollmacht auf Türkisch** ausstellen.\n\nDiese Vollmacht muss folgende Befugnisse ausdrücklich enthalten:\n- Einreichung der Tanıma Tenfiz-Klage und Verfahrensführung\n- Entgegennahme von gerichtlichen Zustellungen\n- Vertretung vor türkischen Gerichten, Einwohnermeldebehörden und dem Konsulat\n- Ggf.: Beantragung einstweiliger Maßnahmen (ihtiyati tedbir)\n\nDiese Vollmacht ist in der Türkei ohne Apostille sofort verwendbar.\n\n**Schritt 2: Unterlagen vorbereiten**\n\nApostille + Rechtskraftvermerk + beglaubigte türkische Übersetzung + Nüfus-Auszüge.\n\n**Schritt 3: Anwalt reicht Klage in der Türkei ein**\n\nIhr Anwalt wählt das zuständige türkische Familiengericht und stellt den Antrag. Bei kooperativem Ex-Partner: 1-3 Monate. Bei Zustellungserfordernissen ins Ausland: 6-12+ Monate.\n\n---\n\n## 8. Unterhalt, Sorgerecht, Gütertrennung — Die Besonderheiten\n\n### Unterhalt\n\nEin deutsches Unterhaltsurteil kann in der Türkei nach erfolgter Tenfiz zwangsweise durchgesetzt werden. Die Instrumente der türkischen Zwangsvollstreckung:\n\n- **E-Haciz** (elektronische Pfändung): Alle türkischen Bankkonten des Schuldners werden online gesperrt\n- **Tapu-Pfändung**: Grundbucheinträge auf Immobilien\n- **Lohnpfändung**: Bis zu einem Viertel des Nettogehalts, bei Unterhaltsschulden höhere Anteile möglich\n\nDer in Euro oder einer anderen Fremdwährung lautende Unterhalt kann in der Türkei entweder in der Originalwährung oder zum TCMB-Tageskurs in Lira vollstreckt werden. Unterhaltsansprüche aus einem Urteil verjähren in der Türkei nach 10 Jahren.\n\n### Sorgerecht\n\nDas Sorgerecht ist der heikelste Bereich. Türkische Gerichte sind **nicht verpflichtet**, ausländische Sorgerechtsentscheidungen ohne weitere Prüfung anzuerkennen. Das Wohlergehen des Kindes (çocuğun üstün yararı) ist der absolute Vorrang — und das türkische Gericht kann die Sorgerechtsfrage bei Einwendung einer Partei **neu beurteilen**.\n\nDas bedeutet konkret: Eine in Deutschland gerichtlich festgelegte Sorgerechtsregelung kann in der Türkei bestätigt, aber auch abgeändert werden. Wer das Sorgerecht in der Türkei durchsetzen will, muss mit einer inhaltlichen Überprüfung rechnen.\n\nPraktische Folgen einer fehlenden Anerkennung: Ohne Sorgerechtsanerkennung in der Türkei kann der Ex-Partner Probleme bei Reisepässen, Schulanmeldungen und Auslandsreisen des Kindes verursachen.\n\n### Güterregelung und Vermögensauseinandersetzung\n\nEnthält das deutsche Urteil Regelungen zur Aufteilung in der Türkei belegener Immobilien oder sonstiger Vermögenswerte, muss dieser Teil Tenfiz-Gegenstand sein. Türkische Grundbuchämter (Tapu) akzeptieren ausländische Urteile für Immobilientransaktionen nur nach Tenfiz.\n\n**Kritische Timing-Frage:** Das türkische Güterrecht berechnet die „ehelich erworbenen Güter\" (edinilmiş mallar) bis zum Zeitpunkt des deutschen Scheidungsantrags. Wer erst Jahre nach der deutschen Scheidung in der Türkei Tanıma beantragt und dann zusätzlich Güterrechtsforderungen erheben will, riskiert, dass zwischenzeitlich erworbenes Vermögen des Ex-Partners noch als eheliches Gut gilt. Die Tanıma-Klage und eine eventuelle Güterrechtklage sollten deshalb zeitnah und koordiniert geführt werden.\n\n---\n\n## 9. Häufige Fehler — und wie man sie vermeidet\n\n**Fehler 1: Kein Rechtskraftvermerk besorgt**\nDas ist der häufigste Fehler. Das Scheidungsurteil allein reicht nicht — der Rechtskraftvermerk ist ein eigenständiges Dokument oder ein Stempel auf dem Beschluss, der bescheinigt, dass keine Rechtsmittel mehr eingelegt werden können.\n\n**Fehler 2: Apostille fehlt oder ist für das falsche Dokument beantragt**\nDie Apostille muss auf dem Dokument angebracht sein, das in der Türkei vorgelegt wird — also auf dem Scheidungsbeschluss mit Rechtskraftvermerk. Eine Apostille auf einem anderen Dokument hilft nicht.\n\n**Fehler 3: Übersetzung nicht durch vereidigten Übersetzer**\nTürkische Gerichte und Konsulate akzeptieren keine Übersetzungen von normalen Agenturen. Es muss ein staatlich beeidigter / vereidigter Übersetzer sein (in Deutschland: allgemein beeidigt für Türkisch).\n\n**Fehler 4: Allgemeine Vollmacht statt Sondervollmacht**\nEine allgemeine Generalvollmacht reicht für das Tanıma Tenfiz-Verfahren nicht aus. Die Vollmacht muss explizit die Befugnis zur Klageerhebung, Entgegennahme von Zustellungen und Vertretung vor türkischen Gerichten enthalten.\n\n**Fehler 5: Zu lange warten**\nJe länger Sie warten, desto mehr Probleme können entstehen: Der Ex-Partner könnte türkische Vermögenswerte veräußern, Heirats- und Erbschaftsfragen eskalieren. Es gibt keine absolute Ausschlussfrist, aber die praktischen Risiken wachsen mit der Zeit.\n\n**Fehler 6: Türkische Scheidung in Deutschland nicht nach § 107 FamFG anerkennen lassen**\nWer in der Türkei geschieden wurde, muss das türkische Urteil in Deutschland beim OLG nach § 107 FamFG anerkennen lassen — wenn nicht die Heimatstaatenausnahme greift (beide ausschließlich türkische Staatsangehörige). Ohne Anerkennung gilt man in Deutschland weiterhin als verheiratet.\n\n---\n\n## 10. Ihre Scheidungsanerkennung — mit der Doğru Kanzlei aus Deutschland\n\n[Die Doğru Kanzlei](https://www.hasandogru.de/de/leistungen/familienrecht) ist bei der **Anwaltskammer Ankara** und der **Rechtsanwaltskammer Karlsruhe** (§ 207 BRAO) zugelassen. Tanıma Tenfiz-Verfahren führen wir direkt über das UYAP-Anwaltsportal von unserem Mannheimer Büro aus — ohne Umweg über einen weiteren türkischen Anwalt.\n\n**Was wir für Sie übernehmen:**\n- Prüfung: Verwaltungsweg (Art. 27/A NHK) oder Gericht?\n- Sondervollmacht: Vollmachtstext für das Konsulat vorbereiten und prüfen\n- Unterlagenkoordination: Apostille, Rechtskraftvermerk, Übersetzung\n- Tanıma Tenfiz-Klage einreichen und vor türkischem Familiengericht führen\n- Unterhalt: Tenfiz-Antrag und anschließende Vollstreckung in der Türkei\n- Sorgerecht: Tenfiz-Antrag mit Strategie zur Minimierung türkischer Neubeurteilung\n- Güterrecht: Koordinierung mit Güterrechtklage, falls nötig\n- Türkische Scheidung in Deutschland: Begleitung des § 107 FamFG-Verfahrens beim OLG\n\nDiesen Leitfaden haben wir auch auf Türkisch veröffentlicht:\n[Tanıma ve Tenfiz Rehberi →](https://www.hasandogru.de/tr/blog/tanima-tenfiz-rehberi)\n\n---\n\n## Häufig gestellte Fragen\n\n**Warum gilt meine deutsche Scheidung nicht in der Türkei?**\nGerichtsentscheidungen gelten nur im eigenen Hoheitsgebiet. Das deutsche Urteil muss im türkischen Tanıma Tenfiz-Verfahren anerkannt werden.\n\n**Was ist der Unterschied zwischen Tanıma und Tenfiz?**\nTanıma: Anerkennung der Rechtskraft — reicht für die Nüfus-Eintragung. Tenfiz: Vollstreckbarerklärung — nötig für Unterhalt, Schadensersatz und Gütertrennung.\n\n**Kann die Anerkennung ohne Gericht erfolgen?**\nJa, auf dem Verwaltungsweg nach Art. 27/A NHK — aber nur wenn beide Parteien kooperieren und keine vollstreckungsbedürftigen Regelungen durchgesetzt werden sollen.\n\n**Welche Unterlagen brauche ich?**\nScheidungsbeschluss + Rechtskraftvermerk + Apostille + beglaubigte türkische Übersetzung + Nüfus-Auszüge + fotobeglaubigte Sondervollmacht vom Konsulat.\n\n**Wie lange dauert das Verfahren?**\nVerwaltungsweg: Wochen. Beide anwaltlich vertreten: 1-3 Monate. Auslandszustellung nötig: 6-12+ Monate.\n\n**Muss ich in die Türkei reisen?**\nNein. Mit einer Konsulats-Sondervollmacht führt Ihr Anwalt alles in der Türkei.\n\n**Was passiert mit dem deutschen Unterhaltsurteil?**\nOhne Tenfiz kann es in der Türkei nicht vollstreckt werden. Nach Tenfiz: E-Haciz, Immobilien- und Lohnpfändung möglich.\n\n**Was passiert mit dem Sorgerecht?**\nNach Tenfiz kann es in der Türkei durchgesetzt werden — aber das türkische Gericht kann es bei Einwendungen einer Partei inhaltlich neu beurteilen.\n\n**Was ist, wenn ich in der Türkei geschieden wurde — gilt das in Deutschland?**\nNein, nicht automatisch. Türkische Scheidungsurteile müssen in Deutschland nach § 107 FamFG beim OLG anerkannt werden (Ausnahme: beide Parteien waren ausschließlich türkische Staatsangehörige).\n\n**Was sind die Folgen, wenn ich gar nichts tue?**\nIn der Türkei gelten Sie weiterhin als verheiratet: kein Wiederheirat, Ex-Partner bleibt Erbe, deutsches Unterhaltsurteil ist nicht vollstreckbar.\n\n---\n\n*Dieser Artikel dient allgemeinen Informationszwecken und ersetzt keine rechtliche Beratung. Für Ihren konkreten Fall wenden Sie sich an Av. Hasan Doğru bei der Doğru Kanzlei.*",
    contentTR: "**YASAL UYARI:** Bu makale yalnızca Türk hukukuna ilişkin genel bilgi amaçlıdır. Doğru Kanzlei, §207 BRAO kapsamında yalnızca Türk hukuku konularında danışmanlık vermektedir.\n\n---\n\nAlmanya'da yıllarca süren bir dava sonucunda boşanma kararını aldınız. Artık hukuken özgür olduğunuzu düşünerek ileriye bakıyorsunuz. Sonra Türkiye'de bir işlem yapmak istiyorsunuz — belki yeniden evlenmek, belki miras işlemi, belki mal paylaşımı — ve bir anda gerçekle yüz yüze geliyorsunuz: Türkiye'deki nüfus kayıtlarında hâlâ \"evli\" görünüyorsunuz.\n\nBu durum bir \"kayıt hatası\" değil. Uluslararası özel hukuk literatüründe **\"topal evlilik\" (limping marriage)** olarak adlandırılan bu olgu, iki farklı ülke hukuk sisteminin birbirini tanımamasından kaynaklanır ve zincirleme hukuki sorunların başlangıç noktasıdır.\n\nÇözüm: Tanıma ve Tenfiz davası — ya da belirli koşullarda daha hızlı bir yol.\n\n---\n\n## 1. Neden Almanya'daki Boşanma Kararı Türkiye'de Otomatik Geçerli Değil?\n\nHer devlet mahkemesinin kararı yalnızca o devletin egemenlik alanında hüküm ifade eder. Alman Aile Mahkemesi'nin (Amtsgericht) verdiği boşanma kararı, Almanya sınırları içinde kesin ve bağlayıcıdır; ancak Türkiye'ye hiçbir etkisi yoktur — ta ki Türk mahkemelerince veya yetkili idari makamca tanınana kadar.\n\nTürkiye'de nüfus müdürlüğü, bu yabancı kararı görmezden gelir. Medeni durum \"evli\" olarak kalmaya devam eder. Bu \"kayıt hatası\" görünümü aslında ciddi hukuki sonuçlar doğurur:\n\n- **Yeniden evlenemezsiniz:** Türk Medeni Kanunu'na göre geçerli bir evlilik hukuken sona ermeden ikinci evlilik yapılamaz\n- **Eski eşiniz mirasçınız olmaya devam eder:** Nüfus kaydı güncellenmediği sürece eski eşiniz Türkiye'deki varlıklarınız üzerinde mirasçı sıfatını korur\n- **Çocuk sorunları:** Boşanmadan sonra başka bir eşten olan çocuğunuz, nüfus kaydında eski eşinizin çocuğu olarak görünebilir; bu durum soybağının reddi ve babalık davası süreçlerine yol açar\n- **Almanya'daki nafaka-tazminat kararları Türkiye'de icra edilemez:** Tenfiz yapılmadan Türkiye'deki borçlunun mal varlıklarına haciz konamaz\n\n---\n\n## 2. Tanıma ve Tenfiz: İki Farklı Kavram, İki Farklı Sonuç\n\nBu iki kavram sıkça birbirine karıştırılır. Aralarındaki farkı anlamak, hangi hukuki yola başvurmanız gerektiğini belirler.\n\n### Tanıma (MÖHUK m.58)\n\nTanıma, yabancı mahkeme kararının **kesin hüküm** ve **kesin delil** etkisinin Türkiye'de kabul edilmesidir. Karar icra gerektirmeyen bir sonuç içeriyorsa — yani bir şeyin *yapılmasını* emretmiyorsa — tanıma yeterlidir.\n\nBoşanma olgusunun Türkiye'de geçerli sayılması ve nüfus kaydının \"boşanmış\" olarak güncellenmesi için **çoğu zaman tanıma yeterlidir.**\n\nTanımada karşılıklılık (mütekabiliyet) şartı **aranmaz.**\n\n### Tenfiz (MÖHUK m.50-57)\n\nTenfiz, yabancı mahkeme kararına **icra edilebilirlik** vasfı kazandırılmasıdır. Karar bir şeyin yapılmasını emrediyorsa — nafaka ödemesi, tazminat, mal devri — Türkiye'de icra edilebilmesi için tenfiz zorunludur.\n\nTenfizde karşılıklılık (mütekabiliyet) şartı **aranır.** Almanya, Lahey Sözleşmesi'ne ve çeşitli adli yardımlaşma anlaşmalarına taraf olduğundan, Almanya'da verilen kararların Türkiye'de tenfizinde bu şart pratikte sorun teşkil etmez.\n\n### Hangi Durum Neyi Gerektirir?\n\n| Almanya'daki Kararda Ne Var? | Gereken |\n|---|---|\n| Yalnızca boşanma hükmü | Tanıma yeterli |\n| Boşanma + nafaka | Tanıma + tenfiz |\n| Boşanma + velayet | Tanıma + tenfiz |\n| Boşanma + maddi/manevi tazminat | Tanıma + tenfiz |\n| Boşanma + mal paylaşımı | Tanıma + tenfiz |\n| Boşanma + tüm bunlar | Tanıma + tenfiz (birleşik dava) |\n\n> ⚠️ **Önemli:** Tenfiz kararı verildiğinde, tanıma kararını da kapsayacak şekilde hüküm ifade eder. Dolayısıyla nafaka veya tazminat da içeren kararlarda ayrı ayrı iki dava açmak gerekmez; birleşik tanıma-tenfiz davası açılır.\n\n---\n\n## 3. İki Yol: Dava mı, Konsolosluk/Nüfus Müdürlüğü mü?\n\n2017 yılında Nüfus Hizmetleri Kanunu'na eklenen **m.27/A** ile yabancı boşanma kararlarının dava açılmaksızın idari yoldan Türkiye'de tescil ettirilebilmesinin önü açıldı. Bu yol, bazı durumlarda çok daha hızlı ve maliyetsizdir.\n\n### Yol A: İdari Tescil (Konsolosluk / Nüfus Müdürlüğü)\n\n**Kimler başvurabilir?**\n- Her iki taraf da birlikte başvurursa (bizzat veya vekilleri aracılığıyla)\n- Bir taraf yabancı uyruklu ise Türk vatandaşı olan taraf tek başına başvurabilir\n- Bir taraf vefat etmişse sağ kalan taraf tek başına başvurabilir\n\n**Nereye başvurulur?**\n- Almanya'daki Türk konsolosluğu (yurt dışında)\n- Taraflardan birinin yerleşim yeri il nüfus müdürlüğü (Türkiye'de)\n- Ankara, İstanbul, İzmir, Bursa, Antalya vb. büyük illerin nüfus müdürlükleri\n\n**Şartlar:**\n- Yabancı karar kesinleşmiş olmalı\n- Apostil şerhi alınmış olmalı\n- Kararın noter veya konsolosluk onaylı yeminli Türkçe çevirisi hazır olmalı\n- Başvuru bizzat veya avukat vekâletnamesiyle yapılmalı\n\n**Bu yolun sınırları:**\n- Yalnızca boşanma olgusunu tescil eder\n- Nafaka, velayet, tazminat, mal paylaşımı gibi hükümler bu yolla icra edilebilir hale gelmez\n- Eski eş birlikte başvurmayı reddederse bu yol kapanır — dava zorunlu olur\n\n### Yol B: Tanıma-Tenfiz Davası (Aile Mahkemesi)\n\nEski eş birlikte başvurmuyorsa, ya da nafaka/velayet/tazminat gibi icra gerektiren hükümlerin de geçerliliği sağlanmak isteniyorsa, **Aile Mahkemesi'nde dava açmak** gerekir.\n\nDavanın açılacağı yetkili mahkeme (MÖHUK m.51):\n- Davalının Türkiye'deki yerleşim yeri Aile Mahkemesi\n- Davalının Türkiye'de yerleşim yeri yoksa Ankara, İstanbul veya İzmir Aile Mahkemelerinden biri (davacının seçimine göre)\n\nDava basit yargılama usulüne tabidir. Türk mahkemesi, yabancı kararın **esasına girmez** (revizyon yasağı — MÖHUK m.54). Yalnızca aşağıdaki şartların sağlanıp sağlanmadığını denetler.\n\n---\n\n## 4. Tanıma-Tenfiz Şartları (MÖHUK m.54)\n\nTürk mahkemesi tanıma-tenfiz kararı verebilmesi için şu koşulların sağlandığını tespit etmek zorundadır:\n\n### 1. Kararın Kesinleşmiş Olması (Ön Koşul — MÖHUK m.50)\n\nAlman mahkemesinin boşanma kararının kesinleşmiş olması zorunludur. Temyiz aşamasındaki veya henüz kesinleşmemiş kararlar tanıma-tenfize konu olamaz.\n\nAlmanya'da \"Rechtskraftvermerk\" (kesinleşme şerhi) kararın üzerinde veya ayrı bir belgede yer alır. Bu belge olmadan Türk mahkemesi dava şartı eksikliği nedeniyle davayı usulden reddedebilir.\n\n### 2. Karşılıklılık (Mütekabiliyet) — Yalnızca Tenfiz İçin (MÖHUK m.54/a)\n\nAlmanya, Türk mahkeme kararlarının tenfizini mümkün kılan uygulamaya sahip bir devlettir. Bu şart, Almanya-Türkiye hattında pratikte sorun teşkil etmez.\n\nDikkat: Karşılıklılık şartı **yalnızca tenfiz için aranır.** Sadece tanıma talep ediliyorsa bu şart aranmaz (MÖHUK m.58).\n\n### 3. Münhasır Yetki İhlali Olmaması (MÖHUK m.54/b)\n\nAlman mahkemesinin verdiği karar, Türk mahkemelerinin münhasır yetkisine giren bir konuyu kapsamamalıdır.\n\nBoşanma davaları açısından bu şart genellikle sorun yaratmaz. Ancak Türkiye'deki bir taşınmaz üzerindeki aynî haklara ilişkin kararlar (örneğin tapu devri hükmü) münhasır yetki kapsamında sorun yaratabilir.\n\n### 4. Kamu Düzenine Aykırı Olmaması (MÖHUK m.54/c)\n\nKararın Türkiye'de uygulanmasının Türk kamu düzenine açıkça aykırı sonuçlar doğurmaması gerekir.\n\nAlmanya'da verilen standart boşanma kararları bu engele takılmaz. Ancak Türk hukukunun temel ilkeleriyle bağdaşmayan bazı düzenlemeler kamu düzeni gerekçesiyle reddedilebilir.\n\nÖnemli not: Türk mahkemesi kamu düzenine aykırılık gerekçesiyle kararın tamamını değil, yalnızca aykırı bulunan kısmını reddedebilir; kalan kısımlar için tanıma-tenfiz kararı verebilir.\n\n### 5. Savunma Hakkına Riayet Edilmiş Olması (MÖHUK m.54/ç)\n\nAleyhine tenfiz istenen taraf, Alman mahkemesinde usulüne uygun şekilde davet edilmiş veya temsil edilmiş olmalıdır. Gıyabi karar verilmişse, o ülke kanunlarına göre savunma hakkı güvencelerinin sağlanmış olması gerekir.\n\nBu şart **davalının itirazına bağlıdır.** Davalı Türk mahkemesinde bu itirazı ileri sürmezse, mahkeme kendiliğinden araştırıp reddetmez.\n\n---\n\n## 5. Gerekli Belgeler: Almanya'dan Temin Edilecekler\n\nTanıma-tenfiz davası veya idari tescil için Almanya'dan şu belgeler temin edilmelidir:\n\n### Almanya'dan Alınacak Belgeler\n\n| Belge | Almancası | Nasıl Alınır? |\n|---|---|---|\n| Boşanma kararı aslı | Scheidungsbeschluss | Kararı veren Amtsgericht'ten |\n| Kesinleşme şerhi | Rechtskraftvermerk | Kararın üstünde veya ayrı belgede |\n| Apostil | Apostille | İlgili Regierungspräsidium'dan |\n| Yeminli Türkçe çeviri | Beglaubigte Übersetzung | Türkiye'de tanınan yeminli tercüman |\n\n> ⚠️ **Kritik Detay:** Apostil, belgenin Almanya'daki resmi makamca onaylandığını uluslararası düzeyde kabul ettiren şerhtir. Apostil almadan gönderilen belgeler Türk mahkemesince kabul edilmez. Apostil için doğru makam mahkemenin bulunduğu eyalete göre değişir (Regierungspräsidium, Oberlandesgericht vb.).\n\n### Dava İçin Ek Belgeler\n\n- Tarafların nüfus kayıt örnekleri (e-Devlet'ten veya Türkiye'deki nüfus müdürlüğünden)\n- Pasaport/kimlik fotokopisi\n- **Fotoğraflı özel vekaletname** — içinde açıkça şu yetkilerin bulunması şarttır: \"tanıma ve tenfiz davası açmak, takip etmek, kabul etmek veya feragat etmek\"\n\n---\n\n## 6. Almanya'dan Türkiye'ye Gitmeden Tanıma-Tenfiz\n\nBu sürecin tamamı Türkiye'ye gitmeden yönetilebilir.\n\n### Konsolosluktan Vekâletname\n\nAlmanya'daki Türk konsolosluğuna gidin (Frankfurt, Berlin, Stuttgart, Münih, Köln, Hamburg, Hannover, Karlsruhe, Münster veya Nürnberg). Pasaportunuzla birlikte, avukatınıza **\"tanıma ve tenfiz davası açma, takip etme ve sonuçlandırma\"** yetkisini içeren fotoğraflı özel vekâletname düzenleyin.\n\nBu vekâletname Türkiye'de apostile gerek kalmadan doğrudan kullanılabilir.\n\n### Davanın Hızını Belirleyen Faktör: Tebligat\n\nTanıma-tenfiz davalarında en uzun süreyi genellikle yurt içi veya yurt dışı tebligat belirler:\n\n| Tebligat Durumu | Tahmini Süre |\n|---|---|\n| Her iki taraf da Türkiye'de avukatla temsil ediliyorsa | 1-2 ay |\n| Davacı temsil ediliyor, davalı yurt içinde adresli | 3-6 ay |\n| Davalı Almanya'daysa (yurt dışı tebligat) | 6-12+ ay |\n| Davalının adresi bilinmiyorsa (ilanen tebligat) | 12+ ay |\n\n**Pratik çözüm:** Eski eşinizin de bir avukata vekâlet verip davayı kabul etmesi, süreci dramatik biçimde kısaltır (1-2 aya iner). Bu konuyu eski eşinizle görüşmek zaman kazandırır.\n\n---\n\n## 7. Nafaka, Velayet ve Tazminat: Özel Durumlar\n\n### Almanya'daki Nafaka Kararının Türkiye'de Tahsili\n\nAlmanya'da hükmedilen nafaka, Türkiye'de tenfiz edilmeden **icraya konulamaz.** Tenfiz kararı alındıktan sonra:\n\n- Borçlunun Türkiye'deki **banka hesaplarına e-haciz** konulabilir\n- **Taşınmaz ve araçlar** üzerine haciz işletilebilir\n- Borçlu Türkiye'de çalışıyorsa **maaşının 1/4'üne** haciz uygulanabilir\n\nTenfiz edilen nafaka alacağı 10 yıllık zamanaşımına tabidir.\n\n### Velayet Kararı: En Karmaşık Kısım\n\nAlmanya'da verilen velayet kararları Türkiye'de tenfiz yoluyla geçerli hale getirilebilir; ancak önemli bir sınır var: **Türk mahkemesi velayet kararını doğrudan tanımak zorunda değildir.**\n\nMÖHUK gereği çocuğun menfaatini ilgilendiren kararlar kamu düzeni kapsamında değerlendirilir. Taraflardan birinin itirazı halinde mahkeme, çocuğun üstün yararı ilkesi çerçevesinde velayeti **yeniden** inceleyebilir ve Almanya'daki karardan farklı bir karar verebilir.\n\nPratik sonuçlar: Velayet kararı tenfiz edilmeden;\n- Çocuk pasaport işlemlerinde her iki ebeveyn de imza gerekebilir\n- Çocuğun yurt dışına çıkışında sorunlar yaşanabilir\n- Okul kaydı gibi resmi işlemlerde anlaşmazlıklar ortaya çıkabilir\n\n### Maddi ve Manevi Tazminat\n\nAlmanya'da hükmedilen tazminatlar da tenfiz gerektiren kararlardandır. Tenfiz kararı alındıktan sonra aynı icra prosedürleri uygulanır.\n\nEuro cinsinden tazminat Türkiye'de nasıl tahsil edilir? İcra takibinde \"aynen Euro olarak\" talep edilebilir; ya da takip tarihindeki TCMB efektif satış kuru üzerinden Türk Lirası karşılığı istenebilir.\n\n---\n\n## 8. Mal Paylaşımı ile Tanıma-Tenfizin İlişkisi\n\nBu ilişki pratikte çok önemli bir zamanlama meselesine yol açar.\n\n### Mal Paylaşımında Kritik Tarih: Boşanma Davasının Açıldığı Gün\n\nTürkiye'de mal paylaşımı davası açıldığında, mahkeme Alman mahkemesinde boşanma davasının **açıldığı tarihe** bakar — bu tarih, Türkiye'deki \"edinilmiş mallara katılma\" döneminin sona erdiği gün sayılır.\n\nYani Almanya'da boşanmadan yıllar sonra Türkiye'de tanıma-tenfiz yapıp ardından mal paylaşımı davası açmak istiyorsanız, aradan geçen sürede elde edilen mallar \"edinilmiş mal\" kapsamına girmeye devam ediyor olabilir — bu da hak kaybına yol açabilir.\n\n> ⚠️ **Kritik Uyarı:** Türkiye'de Türkiye'ye ait taşınmazlar veya diğer varlıklar üzerinde mal paylaşımı davası açmak istiyorsanız, tanıma-tenfiz davası ile mal paylaşımı davasını **eş zamanlı** açmayı değerlendirin. Süreçlerin farklı zamanlarda açılması ciddi hak kayıplarına yol açabilir.\n\n---\n\n## 9. Kadınlar İçin İddet Müddeti\n\nTürk Medeni Kanunu m.132 uyarınca, boşanan kadın için **300 günlük bekleme süresi** (iddet müddeti) uygulanır. Bu süre, yabancı mahkeme kararının kesinleştiği tarihten itibaren başlar — tanıma kararından değil.\n\nTanıma davası açılmadan önce 300 gün zaten geçmişse sorun yoktur. Geçmemişse, evlenmeden önce \"İddet Müddetinin Kaldırılması\" davası açılması ya da bu sürenin dolmasını beklemeniz gerekir.\n\nErkekler için herhangi bir bekleme süresi öngörülmemektedir.\n\n---\n\n## 10. Almanya'dan Tanıma-Tenfiz: Doğru Kanzlei ile\n\n[Doğru Kanzlei](https://www.hasandogru.de/tr/hizmetler/aile-hukuku) olarak, hem **Ankara Barosu** hem de **Karlsruhe Barosu** (§207 BRAO) üyesiyiz. Bu çift üyelik, Türkiye'deki tanıma-tenfiz davalarını UYAP avukat portalı üzerinden Mannheim ofisimizden doğrudan yönetmemizi sağlar. Hiçbir aracı Türk hukuk bürosuna ihtiyaç duymadan.\n\n**Almanya'dan yönettiğimiz tanıma-tenfiz süreçleri:**\n- Almanya'dan alınacak belgelerin (apostil, kesinleşme şerhi) temin sürecinde yönlendirme\n- Konsolosluktan fotoğraflı özel vekâletname düzenlenmesine rehberlik\n- İdari tescil (27/A) mi, yoksa dava mı açılacağının değerlendirilmesi\n- Tanıma ve/veya tenfiz davasının Türkiye'de açılması ve takibi\n- Nafaka, tazminat ve velayet kararlarının tenfizi\n- Mal paylaşımı davası ile eş zamanlı tanıma-tenfiz koordinasyonu\n- İddet müddeti değerlendirmesi\n\nBu makaleyi Almanca okuyanlar için:\n[Anerkennung der deutschen Scheidung in der Türkei →](https://www.hasandogru.de/de/blog/anerkennung-scheidung-tuerkei-deutschland)\n\n---\n\n## Sıkça Sorulan Sorular\n\n**Almanya'da boşandım, Türkiye'de neden hala evli görünüyorum?**\nAlman mahkeme kararı Türkiye'de kendiliğinden hüküm doğurmaz. Nüfus kaydının güncellenmesi için tanıma-tenfiz davası veya 27/A kapsamında idari başvuru gerekir.\n\n**Tanıma ile tenfiz arasındaki fark nedir?**\nTanıma: Boşanmanın nüfus kayıtlarına işlenmesi için yeterli. Tenfiz: Nafaka, velayet, tazminat gibi icra gerektiren hükümler için şart.\n\n**Dava açmadan konsolosluktan yapılabilir mi?**\nEvet — iki tarafın birlikte başvurması koşuluyla. Eski eş reddederse veya nafaka/velayet de söz konusuysa dava zorunludur.\n\n**Hangi belgeler gerekli?**\nBoşanma kararı aslı + kesinleşme şerhi + apostil + yeminli Türkçe çeviri + nüfus kayıt örnekleri + fotoğraflı özel vekâletname.\n\n**Tanıma-tenfiz davası ne kadar sürer?**\nHer iki taraf avukatla temsil edilirse 1-2 ay. Yurt dışı tebligat gerekirse 6-12 ay veya daha uzun.\n\n**Almanya'daki nafaka Türkiye'de geçerli olur mu?**\nTenfiz kararı olmadan hayır. Tenfizden sonra Türkiye'de icra takibi başlatılabilir.\n\n**Almanya'daki velayet kararı Türkiye'de otomatik geçerli mi?**\nHayır. Tenfiz edilmesi gerekir; ancak Türk mahkemesi çocuğun üstün yararı çerçevesinde bağımsız değerlendirme yapabilir.\n\n**Tanıma-tenfiz yapılmazsa ne olur?**\nTürkiye'de evli görünürsünüz, yeniden evlenemezsiniz, eski eş mirasçı olmaya devam eder, nafaka-tazminat Türkiye'de icra edilemez.\n\n**Türkiye'ye gitmeden dava açılabilir mi?**\nEvet. Konsolosluktan alınan fotoğraflı özel vekâletname ile avukatınız tüm süreci yönetir.\n\n---\n\n*Bu makale genel bilgi amaçlıdır ve hukuki danışmanlık yerine geçmez. Bireysel durumunuz için Av. Hasan Doğru'ya danışmanızı öneririz.*",
    contentEN: "",
    category: "Aile Hukuku",
    categoryDE: "Familienrecht",
    categoryEN: "Family Law",
    image: tanimaTenfizImg,
    dateDE: "24. April 2026",
    dateTR: "24 Nisan 2026",
    dateEN: "",
    readTimeDE: "17 Min. Lesezeit",
    readTimeTR: "17 dk okuma",
    readTimeEN: "",
    publishedAt: "2026-04-02",
    publishedAtDE: "2026-04-24",
    publishedAtTR: "2026-04-02",
    modifiedAtDE: "2026-04-24",
    modifiedAtTR: "2026-04-24",
    keywordsDE: "Scheidung Türkei anerkennen Anwalt, Tanıma Tenfiz Anwalt Deutschland, deutsche Scheidung Türkei anerkennen, Anerkennung Scheidung Türkei Deutschland, Tanıma Tenfiz Deutschland, Scheidungsurteil Türkei anerkennen, türkische Scheidung Deutschland anerkennen § 107 FamFG, hinkende Ehe Türkei, Anerkennung Scheidung Türkei ohne Gericht, Unterhalt Türkei vollstrecken, Sorgerecht Türkei anerkennen, Apostille Scheidungsurteil Türkei, Scheidung Türkei nüfus, türkisches Personenstandsregister Scheidung",
    keywordsTR: "tanıma tenfiz almanya boşanma, almanya boşanma kararı türkiye geçerli, tanıma tenfiz davası nasıl açılır, tanıma tenfiz şartları 2026, tanıma tenfiz belgeleri, tanıma tenfiz dava açmadan konsolosluk, tanıma tenfiz nafaka velayet, almanya'da boşandım türkiye'de evliyim, topal evlilik türkiye, tanıma tenfiz süre ne kadar, tanıma tenfiz mal paylaşımı, iddet müddeti tanıma tenfiz, MÖHUK 54 tanıma tenfiz",
    keywordsEN: "",
    faqDE: [
      {
            "question": "Warum gilt meine deutsche Scheidung nicht automatisch in der Türkei?",
            "answer": "Gerichtsurteile entfalten unmittelbare Rechtswirkungen grundsätzlich nur im Hoheitsgebiet des Staates, in dem sie erlassen wurden. Ein rechtskräftiges deutsches Scheidungsurteil aktualisiert das türkische Nüfus-Register nicht automatisch; dafür ist ein türkisches Anerkennungsverfahren erforderlich."
      },
      {
            "question": "Was ist der Unterschied zwischen Tanıma (Anerkennung) und Tenfiz (Vollstreckbarerklärung)?",
            "answer": "Tanıma erkennt die Rechtskraft des deutschen Urteils in der Türkei an und reicht meist für die Eintragung der Scheidung im Nüfus-Register. Tenfiz erklärt das Urteil zusätzlich für vollstreckbar und ist erforderlich, wenn Unterhalt, Schadensersatz oder güterrechtliche Regelungen in der Türkei durchgesetzt werden sollen."
      },
      {
            "question": "Kann die Anerkennung ohne Gericht erfolgen?",
            "answer": "Ja, unter bestimmten Voraussetzungen. Nach Art. 27/A des türkischen Einwohnermeldegesetzes können ausländische Scheidungsurteile ohne Gerichtsverfahren eingetragen werden, wenn beide Parteien gemeinsam beim türkischen Konsulat oder der zuständigen Einwohnermeldebehörde erscheinen oder vertreten werden."
      },
      {
            "question": "Welche Unterlagen benötige ich für die Anerkennung in der Türkei?",
            "answer": "Benötigt werden der Scheidungsbeschluss mit Rechtskraftvermerk im Original, Apostille, beglaubigte türkische Übersetzung, türkische Personenstandsregisterauszüge, Reisepasskopien und für das Gerichtsverfahren eine fotobeglaubigte Sondervollmacht vom türkischen Konsulat."
      },
      {
            "question": "Wie lange dauert das Anerkennungsverfahren in der Türkei?",
            "answer": "Der Verwaltungsweg dauert bei Kooperation beider Parteien meist einige Wochen. Ein Gerichtsverfahren mit beidseitiger anwaltlicher Vertretung dauert häufig 1-3 Monate. Bei internationaler Zustellung an eine im Ausland lebende Partei kann das Verfahren 6-12 Monate oder länger dauern."
      },
      {
            "question": "Muss ich für das türkische Anerkennungsverfahren in die Türkei reisen?",
            "answer": "Nein. Mit einer beim türkischen Konsulat in Deutschland ausgestellten Sondervollmacht kann Ihr Anwalt das gesamte Verfahren in der Türkei für Sie durchführen."
      },
      {
            "question": "Gilt mein in der Türkei anerkanntes deutsches Scheidungsurteil auch für Deutschland — und umgekehrt?",
            "answer": "Nein, nicht automatisch. Für die Türkei muss ein deutsches Scheidungsurteil im Tanıma-Tenfiz-Verfahren anerkannt werden. Umgekehrt müssen türkische Scheidungsurteile in Deutschland regelmäßig nach § 107 FamFG bei der Landesjustizverwaltung beziehungsweise dem OLG anerkannt werden."
      },
      {
            "question": "Was passiert mit dem deutschen Unterhaltsurteil in der Türkei?",
            "answer": "Ein deutsches Unterhaltsurteil entfaltet in der Türkei ohne Tenfiz keine Vollstreckungswirkung. Nach erfolgreicher Tenfiz kann der Unterhalt in der Türkei durch Pfändung von Bankkonten, Immobilien, Fahrzeugen oder Lohn vollstreckt werden."
      },
      {
            "question": "Was sind die Folgen, wenn ich die Anerkennung in der Türkei unterlasse?",
            "answer": "Sie gelten in der Türkei weiterhin als verheiratet. Dadurch können Wiederheirat, Erbrecht, Kinderregistrierung und Vollstreckung von Unterhalts- oder Scheidungsfolgeentscheidungen erhebliche Probleme verursachen."
      }
],
    faqTR: [
      {
            "question": "Almanya'da boşandım, Türkiye'de neden hala evli görünüyorum?",
            "answer": "Her ülkenin mahkeme kararı yalnızca o ülkenin hukuk sistemi içinde geçerlidir. Alman mahkemesinin boşanma kararı Türkiye'de kendiliğinden sonuç doğurmaz. Türkiye'de nüfus kayıtlarının güncellenmesi ve boşanmanın hukuken geçerli sayılması için ya Tanıma-Tenfiz davası açılması ya da Nüfus Hizmetleri Kanunu m.27/A kapsamında konsolosluk veya nüfus müdürlüğüne başvurulması gerekir."
      },
      {
            "question": "Tanıma ve tenfiz arasındaki fark nedir?",
            "answer": "Tanıma: Yabancı mahkeme kararının Türkiye'de geçerli sayılması, kesin hüküm kuvveti kazanmasıdır. Boşanmanın nüfus kayıtlarına işlenmesi için çoğunlukla tanıma yeterlidir. Tenfiz: Yabancı mahkeme kararının Türkiye'de icra edilebilir hale getirilmesidir. Nafaka, tazminat veya mal paylaşımı gibi icra gerektiren hükümler için tenfiz zorunludur."
      },
      {
            "question": "Almanya boşanmasını dava açmadan Türkiye'de geçerli kılmak mümkün mü?",
            "answer": "Evet, belirli koşullarda. Nüfus Hizmetleri Kanunu m.27/A uyarınca, her iki tarafın da birlikte başvurması halinde konsolosluğa veya Türkiye'deki nüfus müdürlüğüne başvurarak dava açmadan boşanmayı tescil ettirmek mümkündür. Eski eş birlikte başvurmayı reddederse veya kararında nafaka, velayet ya da tazminat gibi icra gerektiren hükümler varsa dava açmak zorunlu olur."
      },
      {
            "question": "Tanıma-tenfiz davası için hangi belgeler gerekli?",
            "answer": "Almanya'dan alınacak belgeler: boşanma kararı aslı (Scheidungsbeschluss), kesinleşme şerhi (Rechtskraftvermerk), apostil şerhi ve tüm belgelerin yeminli Türkçe çevirisi. Dava için ayrıca tarafların nüfus kayıt örnekleri, kimlik belgeleri ve tanıma-tenfiz davası açma yetkisini içeren fotoğraflı özel vekaletname gerekir."
      },
      {
            "question": "Tanıma-tenfiz davası ne kadar sürer?",
            "answer": "Her iki taraf da Türkiye'deki davada temsil edilirse süreç genellikle 1-2 ayda tamamlanabilir. Yalnızca bir taraf başvurursa ve diğer taraf Almanya'daysa yurt dışı tebligat nedeniyle 6-12 ay veya daha uzun sürebilir. Konsolosluk/nüfus müdürlüğü yoluyla idari tescil ise iki tarafın birlikte başvurması halinde birkaç hafta sürebilir."
      },
      {
            "question": "Almanya'daki nafaka kararı Türkiye'de geçerli midir?",
            "answer": "Hayır, kendiliğinden değil. Almanya'da hükmedilen iştirak nafakası, yoksulluk nafakası veya çocuk nafakası Türkiye'de tenfiz edilmeden icra edilemez. Tenfiz davası kazanılırsa nafaka Türkiye'de icraya konulabilir."
      },
      {
            "question": "Almanya'daki velayet kararı Türkiye'de geçerli olur mu?",
            "answer": "Tenfiz davası ile geçerli hale getirilebilir; ancak Türk mahkemesi velayet kararını doğrudan tanımak zorunda değildir. Taraflardan birinin itirazı halinde mahkeme, çocuğun üstün yararı ilkesi çerçevesinde velayeti yeniden değerlendirebilir."
      },
      {
            "question": "Tanıma-tenfiz yapılmazsa ne olur?",
            "answer": "Türkiye'de hala evli görünürsünüz ve yeniden evlenemezsiniz. Eski eşiniz Türkiye'deki mal varlığınız üzerinde mirasçı sıfatını ileri sürebilir. Almanya'daki nafaka ve tazminat kararları Türkiye'de icraya konulamaz."
      },
      {
            "question": "Almanya'dan Türkiye'ye gitmeden tanıma-tenfiz davası açılabilir mi?",
            "answer": "Evet. Almanya'daki Türk konsolosluğunda tanıma ve tenfiz davası açma ve takip etme yetkisini içeren fotoğraflı özel vekaletname düzenleyebilirsiniz. Avukatınız bu vekaletname ile Türkiye'ye gitmeden davayı açar, takip eder ve sonuçlandırır."
      }
],
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
    keywordsDE: "Saklı Pay Erbrecht Türkei, Pflichtteil verletzen Türkei, Tenkis Davası Klage, Herabsetzungsklage Türkei, Erbrecht Anwalt Mannheim Ankara",
    keywordsTR: "Saklı pay nedir Türk hukuku, tenkis davası şartları, miras payı ihlali dava, miras hukuku uzmanı, tenkis davası ne kadar sürer",
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
    keywordsDE: "Ortaklığın Giderilmesi davası, İzale-i Şüyu Klage Türkei, Teilungsklage Immobilien Türkei, Versteigerung Haus Türkei Erbe, Miteigentum auflösen Türkei",
    keywordsTR: "İzale-i şüyu davası nedir, ortaklığın giderilmesi davası süreci, miras kalan evin satışı mahkeme, izale-i şuyu davası ne kadar sürer, satış yoluyla ortaklığın giderilmesi",
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
    keywordsDE: "Mavi Kart Rechte Türkei, 5901 TVK Madde 28, Erbrecht Mavi Kart Inhaber, Immobilienkauf Mavi Kart, Staatsangehörigkeit Türkei Mavi Kart",
    keywordsTR: "Mavi kartlıların hakları Türkiye, mavi kart miras hakkı, mavi kart gayrimenkul alımı, TVK madde 28 haklar, mavi kartlıların vatandaşlık hakları",
  },
  {
    slug: "vekaletname-rehberi-almanya",
    slugDE: "tuerkische-vekaletname-deutschland",
    slugTR: "almanya-da-vekaletname-cikarma-rehberi",
    titleDE: "Türkische Vollmacht aus Deutschland: Notar, Apostille und Konsulat – Der vollständige Leitfaden (2026)",
    titleTR: "Almanya'da Türk Vekaletnamesi: Noter, Apostil ve Konsolosluk Rehberi (2026)",
    excerptDE: "Ihr umfassender Leitfaden zur Erstellung einer rechtssicheren türkischen Vollmacht in Deutschland. Konsulatsweg vs. deutscher Notar, Apostille-Verfahren und Fehlervermeidung.",
    excerptTR: "Almanya'da Türkiye için geçerli vekaletname çıkarma rehberi. Konsolosluk ve Alman noteri yolları, apostil süreci, gerekli belgeler ve dikkat edilmesi gerekenler.",
    contentDE: `**RECHTLICHER HINWEIS:** Dieser Artikel befasst sich ausschließlich mit dem türkischen Recht. Eine Beratung zum deutschen Recht (z.B. deutsches Erbrecht, Familienrecht nach BGB oder deutsches Migrationsrecht) findet in unserer Kanzlei nicht statt.

---

Sie leben in Deutschland und müssen in der Türkei eine rechtliche Angelegenheit regeln — ohne selbst hinzureisen. Ob Grundbuchübertragung, Erbschaft, Scheidungsklage, Tanıma-Tenfiz-Verfahren oder Bankgeschäfte: In allen diesen Fällen brauchen Sie zunächst dasselbe Dokument: eine **türkisch rechtsgültige Vollmacht (Vekâletname).**

Aber wie stellt man in Deutschland eine Vollmacht aus, die in der Türkei tatsächlich akzeptiert wird? Muss man zum türkischen Konsulat? Reicht ein deutscher Notar? Was ist eine Apostille, und wo bekommt man sie? Und was muss im Vollmachtstext stehen, damit die Türkei das Dokument nicht zurückweist?

Dieser Leitfaden beantwortet alle diese Fragen Schritt für Schritt — für türkischstämmige Menschen in Deutschland, die türkische Rechtsgeschäfte von hier aus erledigen möchten.

---

## Was ist eine Vekâletname und warum ist sie so wichtig?

Eine Vekâletname ist eine notarielle Vollmacht, mit der eine Person (Vollmachtgeber / Müvekkil) eine andere Person (Bevollmächtigter / Vekil) ermächtigt, in ihrem Namen bestimmte rechtliche Handlungen vorzunehmen. Im türkischen Recht ist für viele Vorgänge keine persönliche Anwesenheit erforderlich — vorausgesetzt, es liegt eine ordnungsgemäße Vollmacht vor.

Für in Deutschland lebende Türken ist die Vekâletname insbesondere in folgenden Situationen unverzichtbar:

- **Tanıma-ve-Tenfiz-Verfahren** (Anerkennung einer deutschen Scheidung in der Türkei ohne Reise)
- **Grundbuchgeschäfte** (Verkauf, Übertragung oder Belastung türkischer Immobilien)
- **Erbschaftsangelegenheiten** (Erbschein, Nachlassaufteilung, Immobilienübertragung)
- **Scheidungsklage** (Beauftragung eines Anwalts für ein Scheidungsverfahren in der Türkei)
- **Bankgeschäfte** (Verfügungen über türkische Konten)
- **Gesellschaftsrechtliche Vorgänge** (Unterzeichnungsvollmacht, Anteilsübertragung)
- **Fahrzeugkauf oder -verkauf**
- **Allgemeine Anwaltsvollmacht** (für sämtliche rechtliche Vorgänge in der Türkei)

Eine fehlerhafte oder unvollständige Vollmacht führt in der Praxis dazu, dass türkische Gerichte, Grundbuchämter oder Behörden die Vollmacht zurückweisen — mit erheblichem Zeit- und Kostenaufwand als Folge.

---

## Die zwei Wege zur türkisch gültigen Vollmacht in Deutschland

In Deutschland gibt es zwei Möglichkeiten, eine in der Türkei rechtsgültige Vollmacht auszustellen: **über das türkische Konsulat** oder **über einen deutschen Notar mit Apostille.** Beide Wege sind rechtlich anerkannt, unterscheiden sich aber in Aufwand, Kosten und Eignung je nach Situation.

---

## Weg 1: Türkisches Konsulat

### Warum ist dies der sicherste Weg?

Vollmachten, die bei türkischen Konsulaten ausgestellt werden, werden direkt nach türkischem Notarrecht erstellt und im Datenbanksystem der türkischen Notarkammer (Türkiye Noterler Birliği) erfasst. Das bedeutet:

- **Keine zusätzliche Apostille erforderlich**
- **Keine beglaubigte Übersetzung ins Türkische erforderlich**
- Das Dokument wird von türkischen Gerichten, Notaren und Behörden **direkt akzeptiert**
- Das Verfahren ist **zuverlässig und vorhersehbar**

Für rechtlich sensible Vorgänge wie Grundstücksübertragungen, Scheidungsklagen, Tanıma-Tenfiz und Erbschaftsangelegenheiten ist der Konsulatsweg daher **grundsätzlich zu bevorzugen.**

### Türkische Konsulate in Deutschland

Die Republik Türkei unterhält in Deutschland Konsulate in 13 Städten:

Berlin, Düsseldorf, Köln, Essen, Frankfurt, Hamburg, Stuttgart, Hannover, Karlsruhe, Mainz, München, Münster, Nürnberg

Wenn Sie in Mannheim oder der Metropolregion Rhein-Neckar leben, sind das Konsulat **Karlsruhe** oder **Stuttgart** Ihre nächstgelegenen Anlaufstellen.

### Termin und Ablauf

1. **Termin vereinbaren:** Online über die Konsulatswebsite oder über konsolosluk.gov.tr. In Stoßzeiten können Termine mehrere Wochen im Voraus vergeben sein — planen Sie ausreichend Vorlauf ein.

2. **Was Sie mitbringen müssen:**
   - Gültiger türkischer Personalausweis (T.C. Kimlik Kartı) oder Mavi Kart (bevorzugt) bzw. türkischer Reisepass
   - Name, Nachname und **türkische Identifikationsnummer (T.C. Kimlik No)** des Bevollmächtigten — bei Anwaltsvollmacht: Name des Anwalts, zugehörige Anwaltskammer (Baro) und **Kammernummer (Baro Sicil No)**
   - Informationen über den Gegenstand der Vollmacht (welche Immobilie, welches Verfahren, welche Bank)
   - Lichtbild: Bei Grundbuch-, Fahrzeug-, Scheidungs- und Tanıma-Tenfiz-Vollmachten sind **2 aktuelle Passfotos** Pflicht

3. **Vollmachtstext:** Die Konsulate verfügen über Standardformulare. Für rechtlich anspruchsvolle Verfahren (Tanıma-Tenfiz, Güterrecht, spezielle Bankgeschäfte) empfehlen wir dringend, den Vollmachtstext **vorab mit Ihrem Anwalt zu erarbeiten** und fertig ausformuliert mitzubringen. Ein unvollständiger Text führt zur Zurückweisung in der Türkei.

4. **Form der Beurkundung:** Das türkische Recht unterscheidet zwischen Vollmachten in „Beurkundungsform" (*düzenleme şekli*) und solchen in „Beglaubigungsform" (*onaylama şekli*). Vollmachten für Grundstücksgeschäfte müssen in Beurkundungsform und auf Deutsch abgefasst sein. Das Konsulat informiert Sie über die jeweils erforderliche Form.

---

## Weg 2: Deutscher Notar + Apostille

### Wann kommt dieser Weg in Frage?

- Wenn der nächste Konsulatsterm zu weit entfernt ist und die Angelegenheit dringend ist
- Wenn Sie keinen einfachen Zugang zum türkischen Konsulat haben
- Wenn Ihr Anwalt oder Ihr Rechtsbüro diesen Weg empfohlen hat

### Reicht ein deutscher Notar allein?

**Nein.** Eine beim deutschen Notar erstellte Vollmacht ist in der Türkei ohne Apostille **nicht gültig.** Das ist ein häufiger Fehler, der zur Ablehnung des Dokuments in der Türkei führt.

Nach Anbringung der Apostille ist das Dokument in der Türkei grundsätzlich anerkannt — erfordert aber noch einen weiteren Schritt: eine **beglaubigte türkische Übersetzung.**

### Schritt für Schritt: Deutscher Notar + Apostille

**Schritt 1 — Vollmachtstext vorbereiten**

Deutsche Notare verfügen über keine türkischen Vollmachtsvorlagen. Sie müssen den Vollmachtstext **selbst vorbereiten und dem Notar mitbringen.** Dieser Text muss nach türkischem Recht formuliert sein. Verwenden Sie dabei nicht einfach Standardformulierungen — ein zu allgemein gehaltener Text kann in der Türkei als unzureichend zurückgewiesen werden.

Besonders wichtige Formulierungen:

- Bei Anwaltsvollmacht: *„Klage zu erheben und zu verfolgen, Rechtsmittel einzulegen, auf Ansprüche zu verzichten, Vergleiche zu schließen"* — türkisches Äquivalent muss entsprechend präzise sein
- Bei Tanıma-Tenfiz: *„Tanıma ve tenfiz davası açmaya ve takip etmeye"* muss ausdrücklich enthalten sein
- Bei Grundstücksgeschäften: Katastraldaten der Immobilie (Ada, Parsel, İl, İlçe) im Text angeben

**Schritt 2 — Beurkundung beim deutschen Notar**

Sie müssen persönlich erscheinen und einen gültigen Ausweis mitbringen. Eine Vollmacht kann nicht per Post oder online unterzeichnet werden. Die bevollmächtigte Person muss nicht anwesend sein.

Für bestimmte Vorgänge (Grundstücke, Scheidung) ist eine **Beurkundung auf Deutsch** erforderlich, und es können Passfotos verlangt werden. Klären Sie diese Details vorab mit dem Notar.

**Schritt 3 — Apostille beantragen**

Die vom deutschen Notar erstellte Vollmacht muss mit einer Apostille versehen werden. In Deutschland wird die Apostille für Notarurkunden beim zuständigen **Oberlandesgericht** beantragt.

In Baden-Württemberg — also für Menschen in Mannheim, Karlsruhe, Heidelberg und Umgebung — ist das **Oberlandesgericht Karlsruhe** zuständig.

In anderen Bundesländern kann die zuständige Stelle variieren (z. B. Oberlandesgericht, Landgericht oder zuständiges Ministerium). Der Notar informiert Sie über die richtige Stelle.

**Für den Apostille-Antrag benötigen Sie in der Regel:**
- Das Original der zu beglaubigenden Urkunde
- Ein Antragsformular (auf der Website des OLG verfügbar)
- Die anfallende Bearbeitungsgebühr

Die Bearbeitungszeit beträgt je nach Auslastung wenige Tage bis mehrere Wochen.

**Schritt 4 — Beglaubigte türkische Übersetzung**

Die apostillierte Vollmacht muss in der Türkei von einem zugelassenen vereidigten Übersetzer ins Türkische übersetzt und notariell beglaubigt werden. Dies kann Ihr türkischer Anwalt koordinieren. Die Dokumente werden per Post oder Kurier übermittelt.

---

## Konsulat oder Notar — Was ist besser?

| | **Türkisches Konsulat** | **Deutscher Notar + Apostille** |
|---|---|---|
| Apostille erforderlich? | Nein | Ja |
| Türkische Übersetzung erforderlich? | Nein | Ja |
| Termindauer | Oft 2–4 Wochen Vorlauf | In der Regel 1–2 Wochen |
| Zuverlässigkeit | Sehr hoch | Hoch (mit Apostille + Übersetzung) |
| Passfoto erforderlich? | Bei bestimmten Vollmachtstypen | Bei bestimmten Vollmachtstypen |
| Empfohlen für | Grundbuch, Scheidung, Tanıma-Tenfiz | Wenn Konsulat nicht erreichbar / dringend |

**Empfehlung:** Wenn die Zeit es erlaubt, wählen Sie den Konsulatsweg. Falls dringend oder das Konsulat schwer erreichbar ist, ist der Weg über deutschen Notar + Apostille ebenfalls sicher — vorausgesetzt, der Vollmachtstext ist korrekt formuliert.

---

## Besondere Anforderungen je nach Vollmachtstyp

### Vollmacht für Tanıma-Tenfiz-Verfahren

Dies ist eine der häufigsten Vollmachtsarten für in Deutschland lebende Türken. Damit ein Anwalt in der Türkei ein Anerkennungsverfahren für eine deutsche Scheidung einleiten kann, muss die Vollmacht **ausdrücklich** folgende Befugnisse enthalten:

- Klage auf Tanıma ve Tenfiz zu erheben
- Das Verfahren in allen Instanzen zu verfolgen
- An Verhandlungen teilzunehmen
- Verzicht, Anerkennung und Vergleich zu erklären

Fehlt auch nur eine dieser Befugnisse, kann das Gericht die Vollmacht als unzureichend zurückweisen. Passfotos are bei dieser Vollmachtsart Pflicht.

### Vollmacht für Grundbuchgeschäfte (Tapu)

Für den Verkauf, die Übertragung oder Belastung türkischer Immobilien:

- Die **Katastraldaten** der Immobilie (Ada, Parsel, İl, İlçe) müssen im Vollmachtstext genannt sein
- Die Vollmacht muss in **Beurkundungsform** und auf **Deutsch** erstellt werden
- 2 aktuelle **Passfotos** sind Pflicht
- Der Konsulatsweg wird **dringend empfohlen**

### Erbschaftsvollmacht

Für Erbschaftsverfahren in der Türkei (Erbschein, Nachlassaufteilung, Grundbuchübertragung):

- Die Vollmacht muss ausdrücklich die Befugnis zur Ausstellung eines Erbscheins (Veraset İlamı) enthalten
- Befugnisse zur Nachlassaufteilung und Immobilienübertragung sind separat aufzuführen
- Bei mehreren Erben muss jeder eine eigene Vollmacht ausstellen

### Scheidungsvollmacht

Für eine Scheidungsklage in der Türkei über einen Anwalt:

- Name, Nachname, Anwaltskammer und **Kammernummer** des Anwalts sind Pflichtangaben
- Der Vollmachtsinhalt unterscheidet sich je nach einvernehmlicher oder streitiger Scheidung
- 2 aktuelle Passfotos sind Pflicht
- Der Konsulatsweg wird empfohlen

### Bank- und allgemeine Geschäftsvollmacht

Für Verfügungen über türkische Bankkonten:

- Name der Bank und Kontonummer sollten nach Möglichkeit angegeben werden
- Einige Banken verlangen ein eigenes Vollmachtsformular — fragen Sie vorab bei der zuständigen Filiale nach

---

## Wann verliert eine Vollmacht ihre Gültigkeit?

Eine Vekâletname endet in folgenden Fällen:

- **Widerruf (Azil):** Der Vollmachtgeber kann die Vollmacht jederzeit durch eine Widerrufserklärung (Azilname) widerrufen. Dies kann beim Konsulat oder bei jedem türkischen Notar erfolgen.
- **Rücktritt (İstifa):** Der Bevollmächtigte kann die Vollmacht durch schriftliche Erklärung an das Gericht oder die zuständige Stelle zurückgeben.
- **Tod:** Der Tod von Vollmachtgeber oder Bevollmächtigtem beendet die Vollmacht automatisch.

Zur **Gültigkeitsdauer:** Türkische Vollmachten sind grundsätzlich zeitlich unbegrenzt. Allerdings akzeptieren manche Stellen (insbesondere Grundbuchämter und Banken) nur Vollmachten, die nicht älter als ein bestimmtes Datum sind. Fragen Sie vorab bei der zuständigen Stelle nach.

---

## Wie übermitteln Sie die Vollmacht nach Deutschland?

Sie müssen die Vollmacht nicht persönlich nach Deutschland bringen. Folgende Übermittlungswege sind möglich:

- **Kurier (DHL, UPS usw.):** Die sicherste und zuverlässigste Methode. Das Original wird direkt an Ihren Anwalt übermittelt.
- **Einschreiben:** Einschreiben per Post ist möglich, birgt jedoch ein Verlustrisiko.
- **Digitale Vorabkopie:** Für vorbereitende Schritte kann eine eingescannte Kopie ausreichen — das Original muss jedoch spätestens zur Einreichung beim Gericht oder der Behörde vorliegen. Klären Sie das mit Ihrem Anwalt im Voraus.

---

---

## Unser Service: Vollmachtstext gemeinsam erarbeiten

Das häufigste Problem bei Vollmachten aus Deutschland ist ein fehlerhafter oder unvollständiger Text. Eine abgewiesene Vollmacht bedeutet Neuanfang — Zeit- und Kostenaufwand inklusive.

Als Kanzlei in Mannheim mit Kenntnissen beider Rechtssysteme:

- **Erarbeiten wir den Vollmachtstext gemeinsam** — passend für Ihr konkretes Anliegen
- **Informieren wir Sie genau**, welche Unterlagen Sie zum Konsulat oder deutschen Notar mitbringen müssen
- **Koordinieren wir Apostille und Übersetzung**
- **Vertreten wir Sie in der Türkei** — mit der Vollmacht, die wir gemeinsam erarbeitet haben

**Avukat Hasan Doğru | Doğru Kanzlei**
📍 R1 2-3, 68161 Mannheim
📞 +49 176 612 21210
✉️ info@hasandogru.de
💬 Auch per WhatsApp erreichbar

*Mo–Sa: 09:00–18:00 | Beratung auf Deutsch und Türkisch*

---

*Dieser Artikel dient ausschließlich der allgemeinen Information und stellt keine Rechtsberatung dar. Für eine auf Ihren individuellen Fall zugeschnittene Einschätzung nehmen Sie bitte Kontakt mit uns auf. Die Kanzlei berät ausschließlich im türkischen Recht gemäß §207 BRAO.*`,
    contentTR: `**YASAL UYARI:** Bu makale yalnızca Türk hukuku ile ilgilidir. Büromuzda Alman hukuku (örneğin Alman miras hukuku, BGB uyarınca aile hukuku veya Alman göç hukuku) konusunda danışmanlık verilmemektedir.

---

Almanya'da yaşıyorsunuz ve Türkiye'de bir hukuki işlem yaptırmanız gerekiyor. Tapu devri, miras, boşanma davası, tanıma-tenfiz, banka işlemleri, şirket işlemleri... Bunların hepsinde ortak bir ilk adım var: **vekâletname.**

Peki Almanya'da Türkiye için geçerli bir vekâletname nasıl çıkartılır? Türk konsolosluğuna mı gitmeniz gerekiyor? Alman noteri de yeterli mi? Apostil ne demek ve nerede yaptırılır? Vekâletname metni nasıl hazırlanmalı ki Türkiye'de geçersiz sayılmasın?

Bu rehberde tüm bu soruları adım adım yanıtlıyoruz. Almanya'da yaşayan Türk vatandaşları için hem konsolosluk yolu hem de Alman noter yolu ayrıntılı biçimde ele alınmaktadır.

---

## Vekâletname Nedir ve Neden Bu Kadar Önemlidir?

Vekâletname, bir kişinin (vekâlet veren / müvekkil) başka bir kişiyi (vekil) belirli hukuki işlemleri yapması için yetkilendirdiği resmi belgedir. Türk hukukunda pek çok işlem, tarafın bizzat bulunmasını gerektirmez — ancak bu durumda yetkili bir vekâletname zorunludur.

Almanya'da yaşayan Türk vatandaşları için vekâletname özellikle şu durumlarda kritik önem taşır:

- **Tanıma ve tenfiz davası** açılması (Türkiye'ye gitmeden Almanya'daki boşanmayı Türkiye'de geçerli kılmak)
- **Tapu işlemleri** (Türkiye'deki gayrimenkulün satışı, devri, ipotek işlemleri)
- **Miras işlemleri** (veraset ilamı çıkarılması, miras paylaşımı, taşınmaz devri)
- **Boşanma davası** (Türkiye'de avukat aracılığıyla boşanma)
- **Banka işlemleri** (Türkiye'deki banka hesaplarına ilişkin işlemler)
- **Şirket işlemleri** (Türkiye'deki şirkete yönelik imza, devir, temsil yetkileri)
- **Araç alım-satımı**
- **Genel avukatlık vekâleti** (Türkiye'deki her türlü hukuki işlem için avukata yetki)

Vekâletnamenin eksik veya hatalı düzenlenmesi, Türkiye'deki mahkeme veya kurumun işlemi reddetmesine — dolayısıyla ciddi zaman ve maliyet kayıplarına — yol açabilir.

---

## Almanya'da Vekâletname Çıkarmanın İki Yolu

Almanya'da Türkiye için geçerli bir vekâletname çıkartmanın iki temel yolu vardır: **Türk konsolosluğu** ve **Alman noter.** Her ikisinin de avantajları, dezavantajları ve dikkat edilmesi gereken farklı noktaları vardır.

---

## 1. Yol: Türk Konsolosluğu Üzerinden Vekâletname

### Neden En Güvenli Yoldur?

Türk konsolosluklarında düzenlenen vekâletnameler doğrudan Türk noterlik hukuku çerçevesinde düzenlenir ve Türkiye Noterler Birliği veri tabanına kaydedilir. Bu nedenle:

- Türkiye'de **ekstra apostil veya tercüme işlemine gerek yoktur**
- Belge Türkiye'deki tüm mahkeme, noter ve resmi kurumlarca **doğrudan kabul edilir**
- İşlem süreci daha **öngörülebilirdir**

Bu nedenle, özellikle boşanma davası, tapu işlemleri ve tanıma-tenfiz gibi hassas hukuki işlemler için **konsolosluk yolu her zaman öncelikli tercih** olmalıdır.

### Almanya'daki Türk Konsoloslukları

Türkiye Cumhuriyeti'nin Almanya'da 13 şehirde konsolosluğu bulunmaktadır:

Berlin, Düsseldorf, Köln, Essen, Frankfurt, Hamburg, Stuttgart, Hannover, Karlsruhe, Mainz, Münih, Münster, Nürnberg

Mannheim'da yaşıyorsanız size en yakın konsolosluk **Karlsruhe** veya **Stuttgart** konsolosluğudur.

### Konsoloslukta Randevu ve Süreç

1. **Randevu alın:** Konsolosluğun web sitesinden veya konsolosluk.gov.tr üzerinden online randevu alınır. Yoğun dönemlerde randevu tarihleri birkaç haftayı bulabilir; erken randevu almanızı öneririz.

2. **Hazırlamanız gerekenler:**
   - Geçerli T.C. kimlik kartı veya Mavi Kart (pasaport da kabul edilir, ancak T.C. kimlik kartı tercih edilir)
   - Vekilin adı, soyadı ve **T.C. kimlik numarası** (avukata vekâlet verilecekse: avukatın baro adı ve **baro sicil numarası**)
   - Yapılacak işlemin türüne ilişkin bilgiler (hangi taşınmaz, hangi dava, hangi banka vb.)
   - Fotoğraf: Tapu işlemleri, araç alım-satımı, boşanma ve tanıma-tenfiz vekâletnamelerinde **2 adet güncel vesikalık fotoğraf** zorunludur

3. **Vekâletname metni:** Konsolosluklarda matbu (hazır) vekâletname metinleri bulunmaktadır. Ancak özel yetkiler gerektiren işlemler için (örneğin tanıma-tenfiz, mal paylaşımı, özel banka işlemleri) **kendi hazırladığınız metni avukatınızla birlikte önceden düzenlemeniz** çok daha güvenlidir. Eksik yetki, Türkiye'de işlemin reddedilmesine yol açabilir.

4. **Düzenleme ve onay şekli:** Türk hukukuna göre bazı vekâletnameler "düzenleme şeklinde" (Alman noter dilinde: *Beurkundung*), bazıları ise "onaylama şeklinde" (*Beglaubigung*) düzenlenir. Tapu işlemlerine ilişkin vekâletnameler mutlaka düzenleme şeklinde olmalıdır ve bu durumda vekâletnamenin Almanca düzenlenmesi gerekmektedir.

---

## 2. Yol: Alman Noteri Üzerinden Vekâletname + Apostil

### Ne Zaman Bu Yola Başvurulur?

- Konsolosluk randevusu çok ilerideyse ve işleminiz acilse
- Konsolosluğa ulaşmakta güçlük çekiyorsanız
- Avukatınız veya hukuk büronuz bu yönde tavsiye verdiyse

### Alman Noteri Yeterli mi?

Alman noterinde düzenlenen vekâletname, **apostil şerhi eklenmeden Türkiye'de geçerli olmaz.** Bu kritik bir ayrıntıdır ve pek çok kişi apostil adımını atlayarak belgesinin Türkiye'de reddedilmesiyle karşılaşır.

Apostil eklendikten sonra ise belge Türkiye'de geçerlilik kazanır — ancak ek bir adım daha gereklidir: **Türkçe yeminli tercüme.**

### Adım Adım: Alman Noter + Apostil Süreci

**Adım 1 — Vekâletname metnini hazırlayın**

Alman noterin elinde Türkçe vekâletname örneği bulunmaz. Bu nedenle vekâletname metnini **siz hazırlayıp notere götürmeniz** gerekir. Bu metin Türk hukukuna uygun biçimde kaleme alınmış olmalıdır; aksi takdirde Türkiye'de eksik yetki nedeniyle işlem reddedilebilir.

Özellikle dikkat edilmesi gereken ifadeler:

- Avukatlık vekâletnamelerinde: *"davayı açmaya ve takip etmeye, Yargıtay'da temyize gitmeye, feragat etmeye, kabul etmeye, sulh olmaya"* gibi özel yetkilerin açıkça yazılması
- Tanıma-tenfiz vekâletnamesinde: *"tanıma ve tenfiz davası açmaya ve takip etmeye"* ifadesinin açıkça yer alması
- Tapu işlemlerinde: taşınmazın tapu bilgilerinin (ada, parsel, il, ilçe) vekâletname metninde belirtilmesi

**Adım 2 — Alman noterinde imzalatın**

Notere bizzat gitmeniz ve kimliğinizi (T.C. kimlik kartı veya pasaport) ibraz etmeniz zorunludur. Vekâletname posta yoluyla veya çevrimiçi imzalanamaz. Vekile ait kişinin noterde bulunmasına gerek yoktur.

Bazı işlemler için (tapu, boşanma vb.) noterin **Almanca düzenleme** yapması gerektiğini ve bazı durumlarda **fotoğraf** eklenmesi gerekebileceğini unutmayın. Bu detayları notere önceden sorun.

**Adım 3 — Apostil şerhi alın**

Alman noterin imzaladığı belgeye apostil şerhi eklenmesi gerekir. Almanya'da apostil işlemi, belgeyi düzenleyen noterin bağlı olduğu **Oberlandesgericht (bölge mahkemesi)** tarafından yapılır.

Baden-Württemberg'de — yani Mannheim, Karlsruhe, Heidelberg ve çevresinde — apostil işlemi **Oberlandesgericht Karlsruhe**'dan yaptırılır.

Bazı eyaletlerde ise bu yetki Landgericht veya yetkili bakanlıkta olabilir. Hangi makama başvuracağınızı notere sorun.

**Apostil işlemi için genellikle şunlar gerekir:**
- Apostil yaptırılacak belgenin aslı
- Başvuru formu (mahkemenin web sitesinden temin edilebilir)
- İşlem ücreti (eyalete ve belge türüne göre değişir)

Apostil süresi birkaç gün ile birkaç hafta arasında değişebilir.

**Adım 4 — Türkçe yeminli tercüme**

Apostil eklenen belge Türkiye'de Türkçeye çevrilmeli ve noter onayından geçmelidir. Bu işlemi Türkiye'deki avukatınız veya yeminli tercüman yaptırır. Belgeyi ona posta veya kurye ile gönderebilirsiniz.

---

## Konsolosluk mu, Alman Noteri mi? Hangisi Daha İyi?

| | **Konsolosluk** | **Alman Noteri + Apostil** |
|---|---|---|
| Türkiye'de ek işlem gerekir mi? | Hayır | Evet (tercüme + noter onayı) |
| Apostil şerhi gerekir mi? | Hayır | Evet |
| Randevu süresi | Uzun olabilir (2-4 hafta) | Genellikle 1-2 hafta |
| Güvenilirlik | Çok yüksek | Yüksek (apostil + tercüme ile) |
| Fotoğraf gereksinimi | Bazı vekâletnamelerde zorunlu | Bazı vekâletnamelerde zorunlu |
| Tavsiye edilen durumlar | Tapu, boşanma, tanıma-tenfiz | Acil durumlarda veya konsolosluğa erişim zorsa |

**Genel tavsiye:** Zaman baskısı yoksa konsolosluk yolunu tercih edin. Acilse veya konsolosluğa erişim güçse, Alman noter + apostil yolu da geçerli ve güvenilirdir — ancak vekâletname metninin doğru hazırlanması kritiktir.

---

## Vekâletname Türlerine Göre Özel Dikkat Edilmesi Gerekenler

### Tanıma ve Tenfiz Vekâletnamesi

Bu, Almanya'da yaşayan kişilerin en sık ihtiyaç duyduğu vekâletname türlerinden biridir. Almanya'da boşananların Türkiye'de tanıma ve tenfiz davası açtırabilmesi için avukata verecekleri vekâletnamede şu yetkiler **açıkça** bulunmalıdır:

- Tanıma ve tenfiz davası açmaya
- Davayı her aşamada takip etmeye
- Duruşmalara katılmaya
- Feragat, kabul ve sulh yetkisi

Bu yetkilerin eksik olması durumunda mahkeme vekâletnameyi yetersiz bulabilir ve davayı ilerletmeyebilir. Fotoğraf eklenmesi de bu vekâletname türünde zorunludur.

### Tapu İşlemleri Vekâletnamesi

Türkiye'deki gayrimenkulün satışı, devri veya ipotek işlemleri için verilen vekâletnamelerde:

- Taşınmazın **tapu bilgileri** (ada, parsel, il, ilçe) vekâletname metninde yer almalıdır
- Vekâletname **düzenleme şeklinde** düzenlenmeli, Almanca hazırlanmalıdır
- 2 adet **güncel vesikalık fotoğraf** zorunludur
- Konsolosluk yoluyla alınması **şiddetle tavsiye edilir**

### Miras Vekâletnamesi

Türkiye'de miras işlemleri yürütülecekse (veraset ilamı, intikal, paylaşım):

- Vekile mirasçılık belgesi çıkarma yetkisi açıkça verilmelidir
- Miras paylaşımı ve taşınmaz devri yetkileri ayrıca belirtilmelidir
- Birden fazla mirasçı varsa her birinin ayrı vekâletname düzenlemesi gerekebilir

### Boşanma Vekâletnamesi

Türkiye'de avukat aracılığıyla boşanma davası açılacaksa:

- Avukatın adı, soyadı, baro adı ve **baro sicil numarası** zorunludur
- Boşanma, anlaşmalı veya çekişmeli olmasına göre vekâletname içeriği farklılaşır
- 2 adet güncel fotoğraf zorunludur
- Konsolosluk yolu tercih edilmelidir

### Banka ve Genel İşlem Vekâletnamesi

Türkiye'deki banka hesabına ilişkin (para çekme, transfer, hesap kapatma) işlemler için:

- İlgili bankanın adı ve hesap bilgileri mümkünse belirtilmelidir
- Bazı bankalar kendi özel vekâletname formatlarını talep edebilir; işlem öncesinde ilgili banka şubesini arayarak bilgi alın

---

## Vekâletname Geçerliliğini Kaybeder mi?

Vekâletname, aşağıdaki durumlarda sona erer:

- **Azil:** Vekâlet veren, avukata ya da vekile azilname (iptal belgesi) göndererek vekâleti geri alabilir. Azilname konsolosluğa veya Türkiye'deki herhangi bir notere başvurularak düzenlenir.
- **İstifa:** Vekil, görevi kabul etmemek ya da devam etmemek isterse mahkeme veya ilgili kuruma yazılı bildirimle vekâletten çekilebilir.
- **Ölüm:** Vekâlet veren veya vekilin ölümü vekâlet ilişkisini kendiliğinden sona erdirir.

Vekâletnamenin **süresi** konusunda önemli bir nokta: Türk hukukunda vekâletnameler kural olarak süresizdir, ancak bazı kurumlar (özellikle bankalar ve tapu müdürlükleri) belirli bir süreden eski vekâletnameleri kabul etmeyebilir. İşlem yapmadan önce ilgili kuruma güncel vekâletname gerekip gerekmediğini sorun.

---

## Vekâletnameyi Türkiye'ye Nasıl Gönderirsiniz?

Vekâletnameyi bizzat götürmek zorunda değilsiniz. Aşağıdaki yöntemlerle gönderebilirsiniz:

- **Kurye (DHL, UPS vb.):** En yaygın ve güvenilir yol. Orijinal belgeler zarfla avukatınıza gönderilir.
- **Posta:** Taahhütlü posta da kabul edilir, ancak kayıp riski nedeniyle kurye önerilir.
- **Avukatın Almanya'ya gelmesi:** Bazı durumlarda avukat veya büro temsilcisi belgeyi bizzat teslim alabilir.

Vekâletnamenin dijital (taranmış) kopyasıyla işlem başlatılabilir mi? Bazı mahkemeler ön işlemlerde dijital kopyayı kabul eder, ancak orijinal belge nihayetinde sunulmalıdır. Bu konuyu avukatınızla önceden netleştirin.

---

---

## Bize Ulaşın: Vekâletname Metnini Birlikte Hazırlayalım

Almanya'da Türkiye için vekâletname çıkartmanın en sık karşılaşılan sorunu, metni yanlış veya eksik hazırlamaktır. Yanlış hazırlanan bir vekâletname Türkiye'de reddedilir; yeniden başlamak hem zaman hem de para kaybettirir.

Mannheim'da Türk ve Alman hukukunu bilen bir büro olarak:

- Durumunuza uygun **vekâletname metnini birlikte hazırlarız**
- Konsolosluğa veya Alman notere hangi bilgileri götürmeniz gerektiğini net biçimde bildiririz
- Apostil ve tercüme sürecini koordine ederiz
- Türkiye'deki işlemleri, gönderilen vekâletname ile bizzat takip ederiz

**Avukat Hasan Doğru | Doğru Kanzlei**
📍 R1 2-3, 68161 Mannheim
📞 +49 176 612 21210
✉️ info@hasandogru.de
💬 WhatsApp üzerinden de ulaşabilirsiniz

*Mo–Sa: 09:00–18:00 | Türkçe ve Almanca hizmet*

---

*Bu makale genel bilgi amaçlıdır ve hukuki danışmanlık niteliği taşımaz. Durumunuza özgü değerlendirme için lütfen bizimle iletişime geçin. Büromuz yalnızca Türk hukuku alanında danışmanlık vermektedir.*`,
    category: "Vekâletname · Apostil · Türk Hukuku",
    categoryDE: "Vollmacht · Apostille · Türkisches Recht",
    image: vekaletnameImg,
    dateDE: "Nisan 2026",
    dateTR: "Nisan 2026",
    readTimeDE: "20 Min. Lesezeit",
    readTimeTR: "20 dk okuma",
    publishedAt: "2026-04-12",
    keywordsDE: "Türkische Vekaletname Deutschland, Vollmacht Konsulat Türkei, Notar Vollmacht Türkei Apostille, Vollmacht Muster Türkei, Anwaltsvollmacht Türkei Mannheim, Tanıma Tenfiz Vekaleti",
    keywordsTR: "Almanya'da vekaletname çıkarma, konsolosluk vekaletname randevu, Alman noterinden vekalet apostil, vekaletname örneği Türkiye, avukat vekaletnamesi nasıl verilir, tanıma tenfiz vekaleti",
    faqTR: [
      {
        question: "Konsolosluk vekâletnamesi için Türkiye'ye gitmem gerekir mi?",
        answer: "Hayır. Almanya'daki herhangi bir Türk konsolosluğuna bizzat giderek vekâletname düzenletebilirsiniz. Bu vekâletname, ayrıca apostil veya tercüme gereksiz olmaksızın Türkiye'de doğrudan geçerlidir."
      },
      {
        question: "Alman noterinden aldığım vekâletname Türkiye'de geçerli mi?",
        answer: "Apostil şerhi eklenmesi ve Türkçeye yeminli tercümesi yapılması koşuluyla evet, geçerlidir. Apostilsiz Alman noter vekâletnamesi Türkiye'de kabul edilmez."
      },
      {
        question: "Almanya'da apostil işlemini nerede yaptırabilirim?",
        answer: "Baden-Württemberg'de (Mannheim, Karlsruhe, Heidelberg bölgesi) apostil işlemi Oberlandesgericht Karlsruhe'dan yapılır. Diğer eyaletlerde yetkili makam farklı olabilir; notere sorun."
      },
      {
        question: "Vekâletname metnini kim hazırlamalı?",
        answer: "İdeal olarak Türk hukukunu bilen bir avukat hazırlamalıdır. Hazır (matbu) metinler konsoloslukta mevcuttur, ancak özel hukuki işlemler için (tapu, dava, miras) avukat tarafından hazırlanmış metin daha güvenlidir. Eksik yetki, Türkiye'de işlemin reddedilmesine neden olabilir."
      },
      {
        question: "Vekâletname için fotoğraf şart mı?",
        answer: "Her vekâletname türü için değil, ancak tapu işlemleri, araç alım-satımı, boşanma ve tanıma-tenfiz vekâletnamelerinde fotoğraf zorunludur. Emin olmak için önceden konsolosluğa veya avukatınıza sorun."
      },
      {
        question: "Vekâletnameyi posta ile Türkiye'ye gönderebilir miyim?",
        answer: "Evet, taahhütlü posta veya kurye ile gönderebilirsiniz. Kurye daha güvenlidir."
      },
      {
        question: "Vekâletname ne kadar sürede çıkar?",
        answer: "Konsoloslukta randevu günü genellikle aynı gün düzenlenir. Alman noteri yoluyla ise noter işlemi birkaç gün içinde tamamlanabilir, apostil ise birkaç gün ile birkaç hafta arasında sürer."
      },
      {
        question: "Avukata genel vekâletname mi, özel vekâletname mi vermeli?",
        answer: "Mümkün olduğunca işleme özel vekâletname verin. Genel vekâletname bazı kurumlarca (özellikle tapu müdürlükleri) kabul edilmez. Avukatınızla hangi yetkilerin vekâletnamede yer alması gerektiğini önceden netleştirin."
      }
    ],
    faqDE: [
      {
        question: "Muss ich für die Konsulats-Vollmacht in die Türkei reisen?",
        answer: "Nein. Sie gehen zum türkischen Konsulat in Deutschland (z. B. Karlsruhe oder Stuttgart), und die dort erstellte Vollmacht ist in der Türkei ohne weitere Schritte gültig."
      },
      {
        question: "Ist eine Vollmacht vom deutschen Notar in der Türkei gültig?",
        answer: "Ja, aber nur mit Apostille und beglaubigter türkischer Übersetzung. Ohne Apostille wird das Dokument in der Türkei nicht akzeptiert."
      },
      {
        question: "Wo beantrage ich die Apostille in Baden-Württemberg?",
        answer: "Beim Oberlandesgericht Karlsruhe. In anderen Bundesländern variiert die zuständige Stelle — Ihr Notar informiert Sie."
      },
      {
        question: "Wer sollte den Vollmachtstext verfassen?",
        answer: "Idealerweise ein Anwalt mit Kenntnissen im türkischen Recht. Standardformulare sind beim Konsulat erhältlich, aber für rechtlich anspruchsvolle Vorgänge (Grundbuch, Klage, Erbschaft) ist ein anwaltlich formulierter Text deutlich sicherer."
      },
      {
        question: "Sind Passfotos Pflicht?",
        answer: "Nicht bei jeder Vollmacht. Bei Grundbuch-, Fahrzeug-, Scheidungs- und Tanıma-Tenfiz-Vollmachten sind 2 aktuelle Passfotos Pflicht. Fragen Sie vorab beim Konsulat oder Ihrem Anwalt nach."
      },
      {
        question: "Wie lange dauert es bis die Vollmacht ausgestellt wird?",
        answer: "Beim Konsulat am Termintag meist noch am selben Tag. Beim deutschen Notar: wenige Tage für die Beurkundung, weitere Tage bis Wochen für die Apostille."
      },
      {
        question: "Soll ich eine allgemeine oder eine spezifische Vollmacht ausstellen?",
        answer: "Möglichst eine auf den konkreten Vorgang zugeschnittene Vollmacht. Allgemeine Vollmachten werden von manchen Stellen (insbesondere Grundbuchämtern) nicht akzeptiert."
      },
      {
        question: "Kann ich die Vollmacht per Post in die Türkei schicken?",
        answer: "Ja — per Einschreiben oder Kurier (empfohlen) an Ihren Anwalt in der Türkei."
      }
    ]
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
    keywordsDE: "Strafrecht Türkei Anwalt Deutschland, Yakalama Kararı Türkei, Haftbefehl Türkei was tun, Strafverfahren Türkei Verteidigung, Strafrecht Anwalt Türkei Mannheim, Vorladung Türkei Post",
    keywordsTR: "Türkiye yakalama kararı sorgulama, hakkımda dava var mı Türkiye, Almanya'dan ceza davası savunma, ceza avukatı Mannheim Ankara, yakalama kararı nasıl kaldırılır",
  },
  {
    slug: "suc-duyurusu-tuerkei-rehberi",
    slugDE: "strafanzeige-tuerkei-rehber",
    slugTR: "turkiye-de-suc-duyurusu-rehberi",
    titleDE: "Strafanzeige in der Türkei aus Deutschland stellen: Der vollständige Leitfaden (2026)",
    titleTR: "Almanya'dan Türkiye'deki Bir Suç İçin Şikayetçi Olmak: Suç Duyurusu Rehberi (2026)",
    excerptDE: "Vollständiger Leitfaden zur Strafanzeige in der Türkei aus Deutschland. Verfahren, Fristen (6 Monate) und Beweissicherung nach türkischem Recht.",
    excerptTR: "Almanya'dan Türkiye'de suç duyurusu nasıl yapılır? Şikayet süreleri, konsolosluk işlemleri ve savcılık süreci hakkında 2026 güncel rehber.",
    contentDE: `**RECHTLICHER HINWEIS:** Dieser Artikel befasst sich ausschließlich mit dem türkischen Recht. Eine Beratung zum deutschen Recht (z.B. deutsches Erbrecht, Familienrecht nach BGB oder deutsches Migrationsrecht) findet in unserer Kanzlei nicht statt.

In der Türkei wurde eine Straftat gegen Sie begangen. Vielleicht hat ein Verwandter Erbschaftsbetrug begangen. Vielleicht hat ein Geschäftspartner Sie um Ihr Geld gebracht. Vielleicht wurden Sie in sozialen Medien beleidigt oder bedroht. Vielleicht hat jemand Ihre türkische Immobilie ohne Ihre Zustimmung übertragen.

Sie leben in Deutschland. Sie können oder wollen nicht in die Türkei reisen. Was können Sie tun?

Dieser Leitfaden richtet sich an in Deutschland lebende Menschen, die wegen einer in der Türkei gegen sie begangenen Straftat rechtlich vorgehen möchten. Was ist eine Strafanzeige im türkischen Recht, wie wird sie aus Deutschland gestellt, welche Unterlagen sind erforderlich, welche Fristen gelten — und wie läuft das Verfahren danach ab? All das erklären wir Schritt für Schritt.

---

## Strafanzeige und Strafantrag: Was ist der Unterschied?

Im türkischen Strafrecht gibt es eine wichtige Unterscheidung zwischen **Suç Duyurusu** (allgemeine Strafanzeige) und **Şikayet** (Strafantrag).

### Suç Duyurusu (Strafanzeige / Anzeige)
Eine Strafanzeige kann von jeder Person erstattet werden, die Kenntnis von einer Straftat hat — auch ohne selbst Opfer zu sein. Die Staatsanwaltschaft entscheidet dann, ob sie von Amts wegen ermittelt.

### Şikayet (Strafantrag)
Der Strafantrag ist das Recht des unmittelbaren Opfers. Bei bestimmten Delikten — sogenannten **antragspflichtigen Straftaten** — kann die Staatsanwaltschaft ohne Strafantrag des Opfers nicht ermitteln.

**Beispiele:** Beleidigung, einfache Bedrohung, fahrlässige Körperverletzung, Hausfriedensbruch.

---

## Fristen: Der wichtigste Punkt überhaupt

**Bei antragspflichtigen Straftaten beträgt die Antragsfrist 6 Monate ab Kenntnis der Tat oder des Täters.** Nach Ablauf dieser Frist verfällt das Antragsrecht — die Staatsanwaltschaft kann das Verfahren nicht mehr einleiten.

**Önemli:** Sichern Sie Beweise mit Zeitstempel (Screenshots, E-Mails, Dokumente). Das hilft, den Beginn der Antragsfrist zu belegen.

---

## Wie stellt man aus Deutschland eine Strafanzeige in der Türkei?

1. **Über das türkische Konsulat**: Sie reichen Ihre Antragsschrift beim Konsulat ein, welches diese an die zuständige Staatsanwaltschaft weiterleitet.
2. **Über einen türkischen Anwalt**: Mit einer Vollmacht kann Ihr Anwalt die Anzeige direkt bei der Staatsanwaltschaft einreichen. Dies ist der schnellste Weg.
3. **Per Post**: Die Antragsschrift kann schriftlich gesendet werden, birgt aber Zustellungsrisiken.

---

## Was muss die Antragsschrift enthalten?

- **Adressat**: Die zuständige Staatsanwaltschaft (Cumhuriyet Başsavcılığı).
- **Angaben zum Antragsteller**: Name, T.C. Kimlik No, Adresse.
- **Angaben zum Beschuldigten**: Name, Adresse (falls bekannt).
- **Sachverhaltsschilderung**: Chronologische Darstellung der Ereignisse.
- **Beweise**: Liste der beigefügten Beweismittel.

---

## Häufige Deliktsbereiche

### Betrug (TCK Art. 157–158)
Gelderschleichung durch fingierte Immobiliengeschäfte, Identitätstäuschung oder Internetbetrug.
### Beleidigung und Bedrohung (TCK Art. 125, 106)
Straftaten über WhatsApp, Telefon oder soziale Medien.
### Erbschafts- und Grundbuchbetrug
Übertragung von Immobilien mit gefälschten Dokumenten durch Verwandte oder Bekannte.

---

## Wie läuft das Verfahren in der Türkei ab?

1. **Ermittlungsphase**: Die Staatsanwaltschaft prüft den Verdacht. Bei Ablehnung ergeht ein Einstellungsbescheid (KYOK).
2. **Rechte als Antragsteller (Müşteki)**: Akteneinsicht, Vorlage von Beweisen und Beschwerderecht.
3. **Müssen Sie in die Türkei reisen?**: Nein. Aussagen können über das türkische Konsulat im Rechtshilfeweg aufgenommen werden.
4. **Schlichtungsverfahren (Uzlaştırma)**: Bei bestimmten Delikten wird ein Schlichtungsversuch unternommen.

---

## Ihr nächster Schritt

In der Türkei wurde eine Straftat gegen Sie begangen — und Sie sind in Deutschland. Das Wichtigste, was Sie jetzt tun können: **Zeitverlust vermeiden und einen Anwalt konsultieren, bevor die 6-Monats-Frist abläuft.**

**Avukat Hasan Doğru | Doğru Kanzlei**
📍 R1 2-3, 68161 Mannheim
📞 +49 176 612 21210
✉️ info@hasandogru.de
💬 Auch per WhatsApp erreichbar

*Mo–Sa: 09:00–18:00 | Beratung auf Deutsch und Türkisch*

---

*Dieser Artikel dient ausschließlich der allgemeinen Information und stellt keine Rechtsberatung dar. Die Kanzlei berät ausschließlich im türkischen Recht gemäß §207 BRAO.*`,
    contentTR: `**YASAL UYARI:** Bu makale yalnızca Türk hukuku ile ilgilidir. Büromuzda Alman hukuku (örneğin Alman miras hukuku, BGB uyarınca aile hukuku veya Alman göç hukuku) konusunda danışmanlık verilmemektedir.

Türkiye'de size karşı bir suç işlendi. Belki Türkiye'deki bir akrabanız miras dolandırıcılığı yaptı. Belki bir iş ortağınız sizi dolandırdı. Belki sosyal medyada size hakaret edildi ya da tehdit edildildiniz. Belki Türkiye'deki bir kişi size ait taşınmazı haksız biçimde devretti.

Siz Almanya'dasınız. Türkiye'ye gidemiyorsunuz ya da gitmek istemiyorsunuz. Peki ne yapabilirsiniz?

Bu rehber, Almanya'da yaşayan ve Türkiye'de kendilerine karşı işlenen bir suç nedeniyle hukuki yollara başvurmak isteyen kişiler için hazırlandı. Suç duyurusu nedir, Almanya'dan nasıl yapılır, hangi belgeler gereklidir, şikayet süreleri nelerdir ve sonrasında süreç nasıl işler — hepsini adım adım açıklıyoruz.

---

## Suç Duyurusu ve Şikayet: Fark Nedir?

### Suç Duyurusu (İhbar)
Suç duyurusu, suçun işlendiğinden haberdar olan kişilerin bunu yetkili makamlara bildirmesidir. Savcılık re'sen soruşturma başlatıp başlatmamaya karar verir.

### Şikayet
Şikayet, suçun doğrudan mağdurunun yetkili makamlara başvurmasıdır. Bazı suçlar yalnızca şikayet üzerine soruşturulur.

**Şikayete bağlı suçlar:** Hakaret, tehdit (basit hal), taksirle yaralama, konut dokunulmazlığının ihlali.
**Re'sen soruşturulan suçlar:** Dolandırıcılık, ağır yaralama, resmi belgede sahtecilik.

---

## Şikayet Süreleri: Dikkat Etmeniz Gereken En Kritik Nokta

**Şikayete bağlı suçlarda şikayet süresi, suçun veya failin öğrenildiği tarihten itibaren 6 aydır.** Bu süre geçtikten sonra şikayet hakkı düşer. Re'sen soruşturulan suçlarda (dolandırıcılık vb.) genel zamanaşımı süreleri (8-15 yıl) geçerlidir.

---

## Almanya'dan Türkiye'de Şikayet: Hangi Yollar Var?

1. **Türk Konsolosluğu Üzerinden Şikayet**: Şikayet dilekçenizi konsolosluğa sunarak ilgili savcılığa iletilmesini sağlayabilirsiniz.
2. **Avukat Aracılığıyla Doğrudan Savcılığa Başvuru**: Türkiye'ye gitmeksizin avukatınız aracılığıyla en hızlı ve doğrudan şikayet yoludur.
3. **Posta Yoluyla Başvuru**: Dilekçe savcılığa posta ile gönderilebilir (riskleri mevcuttur).

---

## Suç Duyurusu Dilekçesi Nasıl Hazırlanır?

Dilekçede şunlar bulunmalıdır:
- **Başlık**: İlgili Cumhuriyet Başsavcılığı'na hitaben.
- **Kimlik Bilgileri**: Şikayetçi ve biliniyorsa şüpheli bilgileri.
- **Olayın Anlatımı**: Tarih, yer ve eylem ayrıntıları.
- **Deliller**: Yazışmalar, dekontlar, ekran görüntüleri vb.
- **Talep**: Soruşturma açılması talebi.

---

## Şikayet Sonrasında Süreç Nasıl İşler?

1. **Soruşturma Aşaması**: Savcılık delilleri toplar. Kovuşturmaya yer olmadığına dair karar (KYOK) verilirse 15 gün içinde itiraz edilebilir.
2. **Müşteki Sıfatı**: Dosyaya erişim ve ek delil sunma hakkı kazanılır.
3. **İfade Verme**: Türkiye'ye gitmeden konsolosluk aracılığıyla istinabe yoluyla ifade verilebilir.
4. **Uzlaştırma**: Bazı suçlarda savcılık dosyayı uzlaştırma bürosuna gönderir.

---

## Bir Sonraki Adımınız

Türkiye'de size karşı bir suç işlendi ve Almanya'dasınız. Yapmanız gereken ilk şey, 6 aylık şikayet süresini aklınızda tutarak **vakit kaybetmeden bir avukattan değerlendirme almaktır.**

**Avukat Hasan Doğru | Doğru Kanzlei**
📍 R1 2-3, 68161 Mannheim
📞 +49 176 612 21210
✉️ info@hasandogru.de
💬 WhatsApp üzerinden de ulaşabilirsiniz

*Mo–Sa: 09:00–18:00 | Türkçe ve Almanca hizmet*

---

*Bu makale genel bilgi amaçlıdır ve hukuki danışmanlık niteliği taşımaz. Büromuz yalnızca Türk hukuku alanında danışmanlık vermektedir.*`,
    category: "Ceza Hukuku · Suç Duyurusu · Türk Hukuku",
    categoryDE: "Strafrecht · Strafanzeige · Türkisches Recht",
    image: criminalComplaintImg,
    dateDE: "Nisan 2026",
    dateTR: "Nisan 2026",
    readTimeDE: "18 Min. Lesezeit",
    readTimeTR: "18 dk okuma",
    publishedAt: "2026-04-12",
    keywordsDE: "Suç Duyurusu Türkei aus Deutschland, Strafanzeige Türkei Betrug, Ermittlungsverfahren Türkei Anwalt, Strafrecht Türkei Anzeige, Opferrechte Türkei",
    keywordsTR: "Türkiye'de suç duyurusu nasıl yapılır, Almanya'dan şikayetçi olmak, dolandırıcılık suç duyurusu Türkiye, ceza soruşturması takibi avukat, şikayet dilekçesi örneği",
    faqTR: [
      {
        question: "Almanya'dan Türkiye'deki bir kişi hakkında şikayetçi olabilir miyim?",
        answer: "Evet. Türk vatandaşı olup olmamanızdan bağımsız olarak, Türkiye'de size karşı işlenen suçlar için Türk savcılığına şikayetçi olabilirsiniz. Almanya'dan avukat aracılığıyla bu işlemi yapmanız mümkündür."
      },
      {
        question: "Türkiye'ye gitmem gerekiyor mu?",
        answer: "Hayır. Avukatınıza vekâletname vererek şikayet dilekçesini sundurup süreci takip ettirebilirsiniz. İfadeniz gerekirse Almanya'daki konsolosluk aracılığıyla istinabe yoluyla alınabilir."
      },
      {
        question: "Şikayet süresi ne kadardır?",
        answer: "Şikayete bağlı suçlarda suçu veya faili öğrendiğiniz tarihten itibaren 6 ay. Re'sen soruşturulan suçlarda (dolandırıcılık, sahtecilik vb.) genel zamanaşımı süreleri geçerlidir (8-15 yıl)."
      },
      {
        question: "Şikayetimi konsolosluktan yapabilir miyim?",
        answer: "Evet. Almanya'daki Türk konsolosluğuna şikayet dilekçenizi sunabilirsiniz; konsolosluk bunu ilgili savcılığa iletir."
      },
      {
        question: "Whatsapp veya sosyal medya üzerinden gelen tehdit veya hakaret şikayet konusu olabilir mi?",
        answer: "Evet. Ekran görüntüleri, tarih ve gönderici bilgisiyle birlikte delil olarak sunulabilir. Ancak hakaret suçu şikayete bağlı olduğundan 6 aylık süreyi kaçırmayın."
      },
      {
        question: "Maddi zararımı nasıl talep ederim?",
        answer: "Ceza davasına katılan sıfatıyla tazminat talebinde bulunabilirsiniz. Ayrıca Türkiye'de ayrı bir hukuk (tazminat) davası açmak da mümkündür."
      },
      {
        question: "Savcılık soruşturmaya yer olmadığına karar verirse ne olur?",
        answer: "KYOK kararına karşı 15 gün içinde sulh ceza hâkimliğine itiraz edebilirsiniz. İtiraz avukatınız aracılığıyla yapılır."
      }
    ],
    faqDE: [
      {
        question: "Kann ich aus Deutschland eine Strafanzeige gegen jemanden in der Türkei stellen?",
        answer: "Ja. Als Opfer einer in der Türkei begangenen Straftat können Sie — unabhängig von Ihrer Staatsangehörigkeit — bei der türkischen Staatsanwaltschaft Anzeige erstatten. Das geht aus Deutschland über einen Anwalt mit Vollmacht."
      },
      {
        question: "Muss ich dafür in die Türkei reisen?",
        answer: "Nein. Mit einer Vollmacht kann Ihr Anwalt die Antragsschrift einreichen und das Verfahren vollständig führen. Sollte eine Aussage nötig sein, ist diese über das türkische Konsulat in Deutschland im Rechtshilfeweg möglich."
      },
      {
        question: "Wie lange dauert das Ermittlungsverfahren?",
        answer: "Das ist stark fallabhängig. Einfache Fälle können in wenigen Monaten abgeschlossen werden; komplexe Fälle dauern oft ein bis mehrere Jahre."
      },
      {
        question: "Was ist, wenn die Staatsanwaltschaft das Verfahren einstellt?",
        answer: "Sie können innerhalb von 15 Tagen Beschwerde beim Sulh Ceza Hâkimliği einlegen. Ihr Anwalt prüft, ob eine Beschwerde erfolgversprechend ist."
      },
      {
        question: "Kann ich Schadensersatz fordern?",
        answer: "Ja — als Nebenkläger im Strafverfahren oder durch eine separate Zivilklage in der Türkei. Wenn der Täter Vermögenswerte in der Türkei hat, ist die dortige Vollstreckung effektiver."
      },
      {
        question: "Was ist die 6-Monats-Frist genau?",
        answer: "Sie gilt für antragspflichtige Straftaten und beginnt ab dem Zeitpunkt, an dem Sie die Tat und den Täter kennen. Bei Unkenntnis des Täters beginnt die Frist erst mit dessen Identifizierung."
      },
      {
        question: "Kann mich der Beschuldigte auch gegen mich anzeigen?",
        answer: "Theoretisch ist das möglich. In der Praxis werden unbegründete Gegenanzeigen von der Staatsanwaltschaft meist schnell abgetrennt. Ihr Anwalt kann dieses Risiko im Vorfeld bewerten."
      }
    ]
  },

  {
    slug: "bosanma-rehberi-tuerkiye",
    slugDE: "scheidung-tuerkei-ohne-reise",
    slugTR: "turkiye-de-bosanma-rehberi",
    titleDE: "Scheidung in der Türkei aus Deutschland: Einvernehmlich oder streitig – Der vollständige Leitfaden (2026)",
    titleTR: "Almanya'dan Türkiye'de Boşanma: Anlaşmalı ve Çekişmeli Boşanma Rehberi (2026)",
    excerptDE: "Vollständiger Leitfaden zur Scheidung in der Türkei für in Deutschland lebende Türken. Einvernehmliche vs. streitige Scheidung, Kosten und Ablauf.",
    excerptTR: "Almanya'da yaşayanlar için Türkiye'de boşanma rehberi. Anlaşmalı ve çekişmeli boşanma farkları, SEGBİS ile duruşmaya katılım ve mal paylaşımı.",
    contentDE: `**RECHTLICHER HINWEIS:** Dieser Artikel befasst sich ausschließlich mit dem türkischen Recht. Eine Beratung zum deutschen Recht (z.B. deutsches Erbrecht, Familienrecht nach BGB oder deutsches Migrationsrecht) findet in unserer Kanzlei nicht statt.

Sie leben in Deutschland. Die Entscheidung, Ihre Ehe zu beenden, ist gefallen. Aber vor Ihnen stehen mehrere Fragen — und keine einfache Antwort:

Sollen Sie sich in Deutschland oder in der Türkei scheiden lassen? Müssen Sie dafür in die Türkei reisen? Was passiert, wenn Sie und Ihr Partner sich einig sind — und was, wenn nicht? Wie werden Sorgerecht, Unterhalt und Vermögensaufteilung nach türkischem Recht geregelt?

Dieser Leitfaden richtet sich an in Deutschland lebende Türken, die eine Scheidung nach türkischem Recht in Betracht ziehen. Er erklärt die Unterschiede zwischen einvernehmlicher und streitiger Scheidung, wie das Verfahren aus Deutschland geführt werden kann und welche kritischen Fehler Sie vermeiden sollten.

---

## Die Grundsatzfrage: Deutschland oder Türkei — wo sollten Sie sich scheiden lassen?

Das ist die erste Frage, die fast jeder stellt — und die Antwort hängt vollständig von Ihrer persönlichen Situation ab.

### Scheidung in Deutschland

Bei einer Scheidung vor einem deutschen Familiengericht gilt deutsches Recht. In Deutschland ist in der Regel:

- Anwaltspflicht für beide Parteien
- Das Trennungsjahr Voraussetzung (auch bei einvernehmlicher Scheidung meist erforderlich)
- Die Verfahrensdauer 6 Monate bis 1,5 Jahre
- Das deutsche Urteil in der Türkei **nicht automatisch gültig** — ein separates Tanıma-Tenfiz-Verfahren ist erforderlich

### Scheidung in der Türkei

Auch wenn Sie in Deutschland leben, können Sie in der Türkei klagen. Türkisches Recht wird angewendet. Vorteile:

- Bei einvernehmlicher Scheidung sehr kurze Verfahrensdauer (1–3 Monate)
- Das türkische Urteil wird direkt im Personenstandsregister eingetragen — kein Tanıma-Tenfiz erforderlich
- Sorgerecht, Unterhalt und Vermögensaufteilung werden nach türkischem Recht geregelt
- Das Verfahren kann per Vollmacht geführt werden — ohne Reise in die Türkei (insbesondere bei streitiger Scheidung)

### Was ist in Ihrer Situation sinnvoll?

| | **Situation** | **Empfehlung** |
|---|---|---|
| 1 | Beide türkische Staatsbürger, Einigkeit über alle Punkte | Einvernehmliche Scheidung in der Türkei — schnell und übersichtlich |
| 2 | Trennungsverfahren in Deutschland bereits eingeleitet | Scheidung in Deutschland, danach Tanıma-Tenfiz |
| 3 | Immobilien in der Türkei, Vermögensaufteilung nötig | Scheidung oder Güterrechtsklage in der Türkei |
| 4 | Partner lebt in der Türkei, kein Einvernehmen | Streitige Klage in der Türkei |
| 5 | Beide in Deutschland, kein Einvernehmen | Deutschland oder Türkei — anwaltliche Einzelfallbewertung notwendig |

Als Faustregel: **Wenn beide Parteien sich einig sind, ist eine einvernehmliche Scheidung in der Türkei meist der schnellste und günstigste Weg.**

---

## Einvernehmliche Scheidung nach türkischem Recht (ZGB Art. 166/3)

Die einvernehmliche Scheidung setzt voraus, dass sich die Parteien über die Scheidung selbst und über alle Scheidungsfolgen geeinigt haben. Das türkische Zivilgesetzbuch (TMK) regelt dies in Art. 166 Abs. 3.

### Voraussetzungen

**1. Die Ehe muss mindestens 1 Jahr bestanden haben.**
Bei einer Ehe unter einem Jahr ist der Weg zur einvernehmlichen Scheidung gesperrt. Die Parteien können sich zwar einigen, müssen das Verfahren aber technisch als streitige Scheidung einleiten. Das Gericht kann die Einigung jedoch berücksichtigen und zügig entscheiden.

**2. Einigkeit über alle Scheidungsfolgen.**
Es reicht nicht, gemeinsam „Ja" zur Scheidung zu sagen. Es muss auch Einigkeit über Sorgerecht, Unterhalt, Vermögensaufteilung, Schadensersatz und alle weiteren Punkte bestehen. Diese Einigung muss schriftlich in einem **Scheidungsprotokoll (Boşanma Protokolü)** festgehalten werden.

**3. Das Gericht muss beide Parteien persönlich anhören.**
Das ist die wichtigste praktische Hürde bei der einvernehmlichen Scheidung aus Deutschland. Das türkische Zivilgesetzbuch verpflichtet den Richter, beide Parteien persönlich zu hören. Das bedeutet: Bei der einvernehmlichen Scheidung ist **mindestens eine Teilnahme an der Verhandlung** erforderlich.

### Muss ich für eine einvernehmliche Scheidung in die Türkei reisen?

Die ehrliche Antwort lautet: **teilweise** — aber es gibt Wege, das zu umgehen.

- **SEGBİS (Video-Anhörungssystem):** Türkische Familiengerichte können die Parteien über SEGBİS per Videokonferenz anhören. Dieses System wird zunehmend von Gerichten akzeptiert.
- **Rechtshilfe über das Konsulat (İstinabe):** Wenn Sie nicht reisen können, kann Ihre Aussage über das türkische Generalkonsulat in Deutschland aufgenommen werden. Dieses Verfahren dauert länger, ist aber möglich.
- **Streitige Klage mit einvernehmlichem Hintergrund:** Manche Anwälte führen eine Scheidung, bei der sich die Parteien einig sind, technisch als streitige Klage mit dem Klagegrund „schwerwiegende Zerrüttung der ehelichen Lebensgemeinschaft". Dies ermöglicht eine Scheidung ohne Reise in die Türkei.

### Das Scheidungsprotokoll — warum es so entscheidend ist

Das Scheidungsprotokoll (Boşanma Protokolü) ist das Herzstück der einvernehmlichen Scheidung. Es legt alle Scheidungsfolgen schriftlich fest. Folgende Punkte müssen geregelt sein:

- **Sorgerecht (Velayet):** Wer erhält das Sorgerecht für gemeinsame Kinder?
- **Umgangsrecht (Kişisel İlişki):** Wann und wie oft hat der nicht sorgeberechtigte Elternteil Kontakt?
- **Kindesunterhalt (İştirak Nafakası):** Wie hoch ist der monatliche Unterhalt?
- **Ehegattenunterhalt (Yoksulluk Nafakası):** Wird einem der Ehegatten Unterhalt gewährt?
- **Vermögensaufteilung (Mal Paylaşımı):** Wie werden Immobilien und Konten in der Türkei aufgeteilt?

Ein fehlerhaft oder unvollständig erstelltes Protokoll wird vom Richter abgelehnt. Das Protokoll muss daher von einem Anwalt mit Kenntnissen im türkischen Familienrecht erstellt werden.

---

## Streitige Scheidung nach türkischem Recht

Eine streitige Scheidung wird eingeleitet, wenn die Parteien sich weder über die Scheidung selbst noch über deren Folgen einigen können.

### Scheidungsgründe

- **Ehebruch (TMK Art. 161)**
- **Lebensgefährdung, grobe Misshandlung oder schwere Ehrverletzung (TMK Art. 162)**
- **Straftat und ehrloses Leben (TMK Art. 163)**
- **Verlassen (TMK Art. 164)**
- **Geisteskrankheit (TMK Art. 165)**
- **Schwerwiegende Zerrüttung der ehelichen Lebensgemeinschaft (TMK Art. 166/1-2)** (Der häufigste Grund)

### Streitige Scheidung aus Deutschland — Muss ich in die Türkei?

**Bei streitigen Verfahren gilt grundsätzlich: Ihr Anwalt vertritt Sie — eine persönliche Anwesenheit ist nicht erforderlich.** Ihr Anwalt nimmt an allen Verhandlungen teil, präsentiert die Beweise und übermittelt Ihre Erklärungen. Sie verfolgen das Verfahren aus Deutschland.

---

## Zuständiges Gericht: Wo wird in der Türkei geklagt?

**Bei streitiger Scheidung** ist das Familiengericht am Wohnort eines der Ehegatten veya am letzten gemeinsamen Wohnsitz zuständig. **Bei einvernehmlicher Scheidung** können die Parteien das Familiengericht frei wählen.

---

## Scheidungsfolgen: Sorgerecht, Unterhalt, Vermögen

### Sorgerecht (Velayet)
Türkische Gerichte entscheiden über das Sorgerecht nach dem **Kindeswohl-Prinzip.** Ihr Wohnsitz in Deutschland wirkt sich nicht grundsätzlich negativ auf Ihren Sorgerechtswunsch aus.

### Unterhalt (Nafaka)
- **Kindesunterhalt (İştirak Nafakası)**
- **Ehegattenunterhalt (Yoksulluk Nafakası)**
- **Vorläufiger Unterhalt (Tedbir Nafakası)** (Während des laufenden Verfahrens)

### Vermögensaufteilung (Mal Paylaşımı)
Seit 2002 gilt in der Türkei das gesetzliche Güterrecht der **Errungemschaftsgemeinschaft.** Immobilien in der Türkei müssen zwingend vor türkischen Gerichten aufgeteilt werden.

---

## Die häufigsten Fehler von in Deutschland lebenden Türken

1. **In Deutschland klagen, ohne die türkischen Konsequenzen zu bedenken.**
2. **Scheidungsprotokoll ohne Anwalt erstellen.**
3. **Vollmacht mit unzureichendem Inhalt.**
4. **Vermögensaufteilung vertagen.**

---

## Ihr nächster Schritt

Eine Scheidung aus Deutschland ist rechtlich möglich, ohne in die Türkei zu reisen. Der entscheidende Faktor ist die richtige rechtliche Begleitung von Anfang an.

**Avukat Hasan Doğru | Doğru Kanzlei**
📍 R1 2-3, 68161 Mannheim
📞 +49 176 612 21210
✉️ info@hasandogru.de
💬 Auch per WhatsApp erreichbar

*Mo–Sa: 09:00–18:00 | Beratung auf Deutsch und Türkisch*

---

*Dieser Artikel dient ausschließlich der allgemeinen Information und stellt keine Rechtsberatung dar. Die Kanzlei berät ausschließlich im türkischen Recht gemäß §207 BRAO.*`,
    contentTR: `**YASAL UYARI:** Bu makale yalnızca Türk hukuku ile ilgilidir. Büromuzda Alman hukuku (örneğin Alman miras hukuku, BGB uyarınca aile hukuku veya Alman göç hukuku) konusunda danışmanlık verilmemektedir.

Almanya'da yaşıyorsunuz. Evliliğinizi bitirme kararı verdiniz. Ama önünüzde birden fazla seçenek var ve hangisinin sizin için doğru olduğunu bilmiyorsunuz:

Almanya'da mı boşanmalısınız, yoksa Türkiye'de mi? Türkiye'de boşanmak için Türkiye'ye gitmek zorunda mısınız? Eşinizle anlaşabiliyorsanız süreç nasıl işliyor? Anlaşamıyorsanız ne olacak? Velayet, nafaka, mal paylaşımı — bunlar Türkiye'de nasıl karara bağlanıyor?

Bu rehber, Almanya'da yaşayan ve Türkiye'de boşanmayı düşünen kişiler için hazırlandı. Türk hukukuna göre anlaşmalı ve çekişmeli boşanma arasındaki farkları, Almanya'dan bu sürecin nasıl yürütüleceğini ve dikkat etmeniz gereken kritik noktaları kapsamlı biçimde ele alıyoruz.

---

## Önce Temel Soru: Almanya'da mı, Türkiye'de mi Boşanmalısınız?

Bu soru, Almanya'da yaşayan pek çok kişinin ilk sorduğu sorudur — ve doğru cevap tamamen kişisel koşullarınıza bağlıdır.

### Almanya'da Boşanmak

Almanya'da bir aile mahkemesinde (Familiengericht) boşanırsanız, Alman hukuku uygulanır. Almanya'da boşanma süreci genellikle:

- Her iki tarafın da avukatla temsil edilmesini zorunlu kılar
- Trennjahr (1 yıl ayrı yaşama) şartını arar
- Ortalama 6 ay ile 1,5 yıl sürer
- Kararın Türkiye'de geçerli sayılması için **ayrıca tanıma ve tenfiz davası** gerekir

### Türkiye'de Boşanmak

Almanya'da yaşasanız dahi Türkiye'de boşanma davası açabilirsiniz. Türk hukuku uygulanır. Avantajlar:

- Anlaşmalı davada süreç çok daha hızlıdır (1-3 ay)
- Türkiye'de kesinleşen karar doğrudan nüfus kaydına işlenir; tanıma-tenfiz gerekmez
- Velayet, nafaka ve mal paylaşımı Türk hukukuna göre karara bağlanır
- Türkiye'ye gitmeden, vekâletname ile süreç yürütülebilir

### Peki Hangisi Sizin İçin Daha Uygun?

| | **Durum** | **Öneri** |
|---|---|---|
| 1 | Her iki taraf da Türk vatandaşı, anlaşabiliyorsunuz | Türkiye'de anlaşmalı boşanma — hızlı ve temiz |
| 2 | Almanya'da zaten ayrılık süreci başladı | Almanya'da boşanıp ardından tanıma-tenfiz |
| 3 | Türkiye'de mülkünüz var, mal paylaşımı lazım | Türkiye'de boşanma veya eş zamanlı dava |
| 4 | Eşiniz Türkiye'de yaşıyor, anlaşamıyorsunuz | Türkiye'de çekişmeli dava |
| 5 | Eşiniz Almanya'da, anlaşamıyorsunuz | Almanya veya Türkiye — avukattan değerlendirme şart |

Genel bir kural olarak: **taraflar anlaşabiliyorsa Türkiye'de anlaşmalı boşanma çoğu zaman en hızlı ve en az maliyetli yoldur.**

---

## Türk Hukukunda Anlaşmalı Boşanma (TMK Madde 166/3)

Anlaşmalı boşanma, tarafların boşanma kararı ve boşanmanın tüm sonuçları üzerinde mutabık kaldığı boşanma türüdür.

### Anlaşmalı Boşanmanın Koşulları

1. **Evlilik en az 1 yıl sürmüş olmalıdır.**
2. **Taraflar boşanmanın tüm sonuçlarında anlaşmış olmalıdır.** (Velayet, nafaka, mal paylaşımı vb.)
3. **Hâkim her iki tarafı bizzat dinlemelidir.**

### Almanya'dan Anlaşmalı Boşanma: Türkiye'ye Gitmek Zorunda mısınız?

- **SEGBİS (Ses ve Görüntü Bilişim Sistemi):** Türkiye'deki aile mahkemeleri, SEGBİS aracılığıyla tarafları Almanya'dan video bağlantısıyla dinleyebilir.
- **İstinabe yolu:** Almanya'daki Türk konsolosluğu aracılığıyla ifadeniz alınabilir.
- **Çekişmeli yoldan anlaşmalı boşanma:** Dava çekişmeli olarak açılır ama protokol sunulur. Bu yol Türkiye'ye gitmeksizin boşanmayı mümkün kılabilir.

### Boşanma Protokolü Nedir ve Neden Bu Kadar Önemlidir?

Boşanma protokolü, tarafların boşanmanın tüm sonuçlarını yazılı olarak düzenlediği belgedir. Müşterek çocukların velayeti, nafakalar ve mal paylaşımı detayları burada yer alır. Protokolün mutlaka Türk aile hukukunu bilen bir avukat tarafından hazırlanması gerekir.

---

## Türk Hukukunda Çekişmeli Boşanma

Çekişmeli boşanma, tarafların boşanma ya da boşanmanın sonuçları konusunda anlaşamadığı durumlarda açılan davadır.

### Çekişmeli Boşanma Sebepleri

- **Zina (TMK m. 161)**
- **Hayata kast, pek kötü muamele (TMK m. 162)**
- **Suç işleme ve haysiyetsiz hayat sürme (TMK m. 163)**
- **Terk (TMK m. 164)**
- **Akıl hastalığı (TMK m. 165)**
- **Evlilik birliğinin temelinden sarsılması (TMK m. 166/1-2)** (Genel sebep)

### Almanya'dan Çekişmeli Boşanma: Türkiye'ye Gitmeden Mümkün mü?

**Çekişmeli davalarda kural olarak avukat sizi temsil edebilir; bizzat duruşmaya katılmanıza gerek yoktur.** Siz Almanya'dan süreci takip edersiniz; avukatınız tüm duruşmalara katılır ve delilleri sunar.

---

## Boşanmanın Hukuki Sonuçları: Velayet, Nafaka, Mal Paylaşımı

### Velayet
Türk mahkemeleri velayet kararını **çocuğun üstün yararı** ilkesine göre verir. Almanya'da yaşamanız velayet talebinizi olumsuz etkilemez.

### Nafaka
- **İştirak nafakası:** Çocuk için ödenen nafaka.
- **Yoksulluk nafakası:** Eşlerden birine bağlanan nafaka.
- **Tedbir nafakası:** Dava süresince ödenen geçici nafaka.

### Mal Paylaşımı
Türkiye'de 2002 yılından itibaren yasal mal rejimi **edinilmiş mallara katılma** rejimidir. Türkiye'deki taşınmazların paylaşımı mutlaka Türk mahkemelerinde görülür.

---

## Almanya'da Yaşayanların En Sık Yaptığı Hatalar

1. **Türkiye'ye sormadan Almanya'da davayı açmak.**
2. **Protokolü avukatsız hazırlamak.**
3. **Vekâletname metnini eksik bırakmak.**
4. **Mal paylaşımını ertelemek.**

---

## Bir Sonraki Adımınız

Sürecin en kritik adımı doğru hukuki danışmanlık almaktır. Mannheim'da Türk hukukunu bilen bir büro olarak tüm süreci sizin adınıza yönetiyoruz.

**Avukat Hasan Doğru | Doğru Kanzlei**
📍 R1 2-3, 68161 Mannheim
📞 +49 176 612 21210
✉️ info@hasandogru.de
💬 WhatsApp üzerinden de ulaşabilirsiniz

*Mo–Sa: 09:00–18:00 | Türkçe ve Almanca hizmet*

---

*Bu makale genel bilgi amaçlıdır ve hukuki danışmanlık niteliği taşımaz. Büromuz yalnızca Türk hukuku alanında danışmanlık vermektedir.*`,
    category: "Boşanma · Aile Hukuku · Türk Hukuku",
    categoryDE: "Scheidung · Familienrecht · Türkisches Recht",
    image: divorceImg,
    dateDE: "Nisan 2026",
    dateTR: "Nisan 2026",
    readTimeDE: "22 Min. Lesezeit",
    readTimeTR: "22 dk okuma",
    publishedAt: "2026-04-12",
    keywordsDE: "Scheidung Türkei ohne Reise, Einvernehmliche Scheidung Türkei, Anlaşmalı Boşanma Protokoll, Scheidungsanwalt Türkei Mannheim, Boşanma davası vekalet",
    keywordsTR: "Türkiye'ye gitmeden boşanma davası, Almanya'dan anlaşmalı boşanma, boşanma protokolü nasıl hazırlanır, çekişmeli boşanma süreci, boşanma avukatı ücretleri",
    faqTR: [
      {
        question: "Almanya'da yaşıyorum, Türkiye'de boşanma davası açabilir miyim?",
        answer: "Evet. Türk vatandaşı olmanız yeterlidir. Avukatınıza vekâletname verirseniz Türkiye'ye gitmeden dava açılabilir."
      },
      {
        question: "Anlaşmalı boşanmada kesinlikle Türkiye'ye gitmem gerekiyor mu?",
        answer: "Hukuki olarak hâkimin tarafları bizzat dinlemesi zorunludur. Ancak SEGBİS sistemi veya konsolosluk istinabesi yoluyla bu zorunluluk bazı mahkemelerde aşılabilir. Avukatınızla birlikte değerlendirin. Türkiye'ye gidemiyorsanız çekişmeli yoldan anlaşmalı boşanma da bir seçenektir."
      },
      {
        question: "Çekişmeli boşanmada avukatım beni temsil edebilir mi?",
        answer: "Evet. Çekişmeli davalarda avukat temsili yeterlidir. Mahkemenin sizi bizzat dinlemesine karar verdiği durumlarda SEGBİS veya istinabe yoluna başvurulabilir."
      },
      {
        question: "Türkiye'de boşanırsam kararı Almanya'da tanıtmam gerekiyor mu?",
        answer: "Evet, Almanya'da yeniden evlenmek istiyorsanız Türk boşanma kararının Almanya'da tanınması gerekebilir. Bu işlem FamFG § 107 kapsamında eyalet adalet makamlarınca yürütülür."
      },
      {
        question: "Eşim Türkiye'de yaşıyor, ben Almanya'dayım. Türkiye'de çekişmeli boşanma açsam tebligat nasıl yapılır?",
        answer: "Tebligat Türkiye'deki eşinizin adresine yapılır. Türkiye'de yaşayan kişiye iç tebligat yapıldığı için bu süreç görece hızlıdır. Avukatla temsil ediliyorsa daha da hızlanır."
      },
      {
        question: "Boşanma protokolü hazırlamamız ne kadar sürer?",
        answer: "Taraflar temel konularda anlaşıyorsa avukatın yönlendirmesiyle protokol 1-2 hafta içinde hazırlanabilir. Mal paylaşımı detayları karmaşıksa daha uzun sürebilir."
      },
      {
        question: "Türkiye'deki taşınmazımı mal paylaşımına dahil edebilir miyim?",
        answer: "Evet. Evlilik süresince edinilmiş taşınmazlar kural olarak mal paylaşımına dahildir. Tapu müdürlüğü nezdinde işlem yapılabilmesi için ya boşanma protokolüne yazılmalı ya da ayrı bir mal paylaşımı davası açılmalıdır."
      },
      {
        question: "Her iki taraf da Almanya'da yaşıyorsa hangi ülkede boşanmak daha mantıklı?",
        answer: "Bu durumda her iki seçenek de mümkündür. Almanya'da boşanıp tanıma-tenfiz açmak ile Türkiye'de avukat aracılığıyla boşanmak arasındaki tercih; süre, maliyet, Türkiye'deki mal varlığı ve tarafların koşullarına göre değişir. Avukatınızla somut durumunuzu değerlendirin."
      }
    ],
    faqDE: [
      {
        question: "Ich lebe in Deutschland. Kann ich in der Türkei eine Scheidungsklage einreichen?",
        answer: "Ja. Als türkischer Staatsangehöriger können Sie in der Türkei klagen. Mit einer Vollmacht kann Ihr Anwalt das Verfahren vollständig in Ihrem Namen führen."
      },
      {
        question: "Muss ich für eine einvernehmliche Scheidung zwingend in die Türkei reisen?",
        answer: "Rechtlich gesehen muss der Richter beide Parteien persönlich anhören. Über SEGBİS (Video) oder Rechtshilfe über das Konsulat kann diese Pflicht aber in vielen Fällen ohne Reise erfüllt werden. Fragen Sie Ihren Anwalt nach der Praxis des zuständigen Gerichts."
      },
      {
        question: "Kann mein Anwalt mich bei einer streitigen Scheidung vollständig vertreten?",
        answer: "Ja. Bei streitigen Verfahren ist die anwaltliche Vertretung grundsätzlich ausreichend. In Ausnahmefällen, in denen das Gericht eine persönliche Anhörung anordnet, ist SEGBİS oder Rechtshilfe über das Konsulat möglich."
      },
      {
        question: "Muss ein türkisches Scheidungsurteil in Deutschland anerkannt werden?",
        answer: "Ja, wenn Sie in Deutschland erneut heiraten möchten oder der Personenstand in Deutschland geändert werden soll, ist ein Anerkennungsverfahren nach § 107 FamFG bei der zuständigen Landesjustizverwaltung erforderlich."
      },
      {
        question: "Mein Partner lebt in der Türkei und zahlt keinen Unterhalt. Was kann ich tun?",
        answer: "Zunächst benötigen Sie ein Tenfiz-Urteil in der Türkei, falls das Unterhaltsurteil aus Deutschland stammt. Bei einem türkischen Unterhaltsurteil kann direkt die Zwangsvollstreckung in der Türkei beantragt werden — Pfändung von Bankkonten, Gehalt oder Immobilien. Bei beharrlicher Verweigerung droht nach türkischem Recht Beugehaft."
      },
      {
        question: "Wie lange dauert das Scheidungsprotokoll zu erstellen?",
        answer: "Wenn die Parteien grundsätzlich einig sind, kann ein Anwalt das Protokoll in 1–2 Wochen ausarbeiten. Bei komplexen Vermögensverhältnissen kann es länger dauern."
      },
      {
        question: "Wir besitzen beide Immobilien in der Türkei. Wie regeln wir das?",
        answer: "Diese Frage ist Teil der Vermögensaufteilung. Wenn das Protokoll die Immobilien regelt und der Richter genehmigt, kann die Übertragung direkt beim türkischen Grundbuchamt (Tapu Müdürlüğü) beantragt werden. Ist das nicht der Fall, ist eine separate Güterrechtsklage erforderlich."
      }
    ]
  },

  // ─── POST 1: Scheidungsanwalt Mannheim ────────────────────────────────────
  {
    slug: "scheidungsanwalt-mannheim",
    slugDE: "scheidungsanwalt-mannheim",
    slugTR: "mannheim-bosanma-avukati",
    titleDE: "Scheidungsanwalt Mannheim: Ablauf, Kosten und türkisch-deutsche Besonderheiten",
    titleTR: "Mannheim'da Boşanma Avukatı: Süreç, Masraflar ve Türk-Alman Özellikleri",
    excerptDE: "Sie suchen einen Scheidungsanwalt in Mannheim? Hier erfahren Sie, wie eine Scheidung abläuft, was sie kostet — und was bei türkisch-deutschen Ehen zusätzlich gilt.",
    excerptTR: "Mannheim'da boşanma avukatı mı arıyorsunuz? Sürecin nasıl işlediğini, maliyetleri ve Türk-Alman evliliklerinde geçerli olan ek kuralları öğrenin.",
    contentDE: `Sie haben sich getrennt und fragen sich, wie das jetzt weitergehen soll. Welche Schritte müssen Sie wann einleiten? Was kostet eine Scheidung in Mannheim ungefähr? Und wenn Sie oder Ihr Partner türkische Staatsbürger sind: Was ist dann anders?

Ich erkläre Ihnen den Ablauf ohne Umwege.

## Kein Anwalt, keine Scheidung — so funktioniert es in Deutschland

Eine Scheidung läuft in Deutschland immer über das Familiengericht. Das bedeutet: Mindestens ein Ehepartner braucht einen Rechtsanwalt, der den Scheidungsantrag stellt. Der andere kann ohne Anwalt erscheinen — er kann aber keinen eigenen Antrag stellen.

Das Zuständige Gericht in Mannheim ist das Amtsgericht Mannheim, Familienabteilung.

## Schritt für Schritt: So läuft eine Scheidung ab

**Das Trennungsjahr.** Bevor ein Gericht die Scheidung ausspricht, müssen Sie mindestens ein Jahr getrennt gelebt haben. "Getrennt" heißt nicht zwingend, dass jemand ausgezogen ist. Es reicht, wenn die Ehe faktisch beendet ist: kein gemeinsames Wirtschaften, keine eheliche Gemeinschaft. Manche Paare trennen sich in derselben Wohnung — das ist möglich, aber oft schwierig zu beweisen.

**Scheidungsantrag.** Nach dem Trennungsjahr reicht ein Anwalt beim Familiengericht Mannheim den Scheidungsantrag ein. Der andere Partner bekommt ihn zugestellt.

**Versorgungsausgleich.** Das Gericht teilt automatisch die Rentenansprüche auf, die während der Ehe erworben wurden. Das klingt einfacher als es ist — besonders wenn einer der Partner in der Türkei Rentenansprüche aufgebaut hat. Dort gibt es eine eigene Rentenversicherung (SGK), und die Abstimmung zwischen deutschem und türkischem System dauert.

**Gerichtstermin.** Wenn nichts mehr strittig ist, dauert der Termin selbst oft unter 30 Minuten. Das Gericht prüft, ob das Trennungsjahr vorliegt, und spricht die Scheidung aus.

## Was eine Scheidung in Mannheim kostet

Die Kosten hängen vom Streitwert ab. Der Streitwert ergibt sich aus dem gemeinsamen Monatsnettoeinkommen. Grobe Orientierung:

- Einvernehmliche Scheidung, ein Anwalt: 1.500 bis 2.500 Euro
- Streitige Scheidung mit Unterhalt, Sorgerecht oder Zugewinnausgleich: 3.000 Euro aufwärts — manchmal deutlich mehr

Wer wenig verdient, kann Verfahrenskostenhilfe beantragen. Das Gericht übernimmt dann die Kosten und stellt einen Anwalt.

## Türkisch-deutsche Ehen: Drei Dinge, die anders laufen

**Welches Scheidungsrecht gilt?** Nach der EU-Verordnung Rom III gilt grundsätzlich das Recht des Landes, in dem Sie leben. Für in Deutschland lebende Paare also deutsches Recht — außer Sie haben vorher ausdrücklich eine andere Rechtswahl getroffen.

**Das Scheidungsurteil in der Türkei anerkennen lassen.** Wenn Sie nach der deutschen Scheidung in der Türkei erneut heiraten oder Ihren Personenstand im türkischen Register ändern möchten, brauchen Sie ein Anerkennungsverfahren in der Türkei — ein sogenanntes Tanıma-Tenfiz-Verfahren vor einem türkischen Gericht.

**Türkische Immobilien.** Wenn einer der Partner Grundbesitz in der Türkei hat, wird die Vermögensaufteilung komplizierter. Türkisches und deutsches Güterrecht unterscheiden sich erheblich. Das sollte früh besprochen werden.

## Warum manche Scheidungen ewig dauern

Meistens liegt es am Versorgungsausgleich — besonders wenn ausländische Rentenansprüche im Spiel sind. Der Austausch mit türkischen Behörden läuft oft langsam. Dazu kommen Streitigkeiten über Unterhalt oder Sorgerecht, die das Verfahren aufblähen können.

Eine einvernehmliche Scheidung mit einer vorab unterschriebenen Scheidungsfolgenvereinbarung ist deutlich schneller. Wenn beide Seiten die wesentlichen Punkte — Unterhalt, Kinder, Wohnung, Vermögen — vorab klar regeln, kann die Scheidung in 3 bis 6 Monaten durch sein.

## Wie die Doğru Kanzlei helfen kann

Rechtsanwalt Hasan Doğru ist sowohl bei der Ankara Barosu als auch bei der Rechtsanwaltskammer Karlsruhe (§207 BRAO) zugelassen. Er kennt beide Rechtssysteme und berät auf Deutsch und Türkisch — auch zu Fragen rund um Tanıma-Tenfiz, türkische Immobilien und grenzüberschreitende Unterhaltsansprüche.`,
    contentTR: `Ayrıldınız ve bundan sonra ne yapmanız gerektiğini merak ediyorsunuz. Hangi adımları ne zaman atmalısınız? Mannheim'da bir boşanma yaklaşık ne kadar tutar? Siz ya da eşiniz Türk vatandaşıysanız ne değişir?

Süreci doğrudan açıklıyorum.

## Avukatsız Boşanma Olmaz — Almanya'da Böyle İşliyor

Almanya'da boşanma her zaman mahkeme yoluyla gerçekleşir. En az bir eşin avukat tutup boşanma dilekçesi sunması şarttır. Diğer taraf avukatsız katılabilir, ancak kendi talebini sunamaz.

Mannheim'da yetkili mahkeme Amtsgericht Mannheim Aile Hukuku Dairesidir.

## Adım Adım Boşanma Süreci

**Ayrılık yılı.** Mahkeme boşanma kararı vermeden önce çiftlerin en az bir yıl ayrı yaşamış olması gerekir. "Ayrı yaşamak" birinin mutlaka taşınması anlamına gelmez. Fiilen evlilik sona ermişse — ortak ev yönetimi yok, evlilik birlikteliği yok — yeter. Bazı çiftler aynı evde ayrı yaşar; bu mümkün ama ispat açısından zordur.

**Boşanma dilekçesi.** Ayrılık yılının ardından avukat, Mannheim Aile Mahkemesi'ne boşanma dilekçesini sunar. Diğer tarafa tebligat yapılır.

**Emeklilik hakları paylaşımı (Versorgungsausgleich).** Mahkeme, evlilik süresince biriktirilen emeklilik haklarını otomatik olarak paylaştırır. Türkiye'deki SGK primleri de devreye girince Alman ve Türk sistemleri arasındaki koordinasyon zaman alabilir.

**Duruşma.** Tartışmalı nokta yoksa duruşma genellikle 30 dakikadan kısa sürer. Mahkeme ayrılık yılını teyit eder ve boşanma kararını verir.

## Mannheim'da Boşanmanın Maliyeti

Masraflar dava değerine göre belirlenir; dava değeri ise çiftin ortak aylık net gelirine göre hesaplanır. Genel bir tablo:

- Anlaşmalı boşanma, bir avukat: 1.500–2.500 Euro
- Nafaka, velayet veya mal paylaşımı konusunda çekişmeli boşanma: 3.000 Euro ve üzeri

Düşük gelirli kişiler Verfahrenskostenhilfe (dava yardımı) başvurabilir.

## Türk-Alman Evliliklerinde Üç Farklı Durum

**Hangi hukuk uygulanır?** AB Roma III Tüzüğü uyarınca, Almanya'da yaşayan çiftlere kural olarak Alman hukuku uygulanır; önceden başka bir hukuku seçmedilerse.

**Türkiye'de tanıma davası.** Alman boşanmasının ardından Türkiye'de yeniden evlenmek ya da Türk nüfus kaydını güncellemek istiyorsanız, Türk mahkemesinde Tanıma-Tenfiz davası açmanız gerekir.

**Türk gayrimenkulleri.** Taraflardan birinin Türkiye'de mülkü varsa mal paylaşımı karmaşıklaşır. Türk ve Alman mal rejimi hukuku arasındaki fark büyüktür; bu konuyu erken ele almak önemlidir.

## Doğru Kanzlei Nasıl Yardımcı Olur

Avukat Hasan Doğru, hem Ankara Barosu hem de Karlsruhe Barosu'na (§207 BRAO) kayıtlıdır. Her iki hukuk sistemini bilen Hasan Doğru, Tanıma-Tenfiz, Türk mülkleri ve sınır ötesi nafaka konularında da danışmanlık sunmaktadır.`,
    category: "family-law",
    categoryDE: "Familienrecht",
    image: divorceImg,
    dateDE: "19. April 2026",
    dateTR: "19 Nisan 2026",
    readTimeDE: "7 Min. Lesezeit",
    readTimeTR: "7 dk okuma",
    publishedAt: "2026-04-19",
    keywordsDE: "scheidungsanwalt mannheim, scheidung mannheim, scheidungskosten mannheim, türkisch deutsche scheidung, scheidungsverfahren deutschland",
    keywordsTR: "mannheim boşanma avukatı, almanya boşanma süreci, türk alman boşanma, boşanma masrafları almanya",
    faqDE: [
      {
        question: "Brauche ich einen Scheidungsanwalt in Mannheim, wenn wir uns einig sind?",
        answer: "Ja, mindestens einer der Partner braucht einen Anwalt, um den Scheidungsantrag beim Familiengericht Mannheim einzureichen. Der andere kann ohne Anwalt erscheinen, kann aber keinen eigenen Antrag stellen."
      },
      {
        question: "Wie lange dauert eine Scheidung in Mannheim?",
        answer: "Bei einer einvernehmlichen Scheidung ohne offene Streitpunkte rechnen Sie ab Antragseinreichung mit 3 bis 6 Monaten. Gibt es Auseinandersetzungen über Unterhalt, Sorgerecht oder Vermögen, kann es 1 bis 3 Jahre dauern."
      },
      {
        question: "Muss ich beim Scheidungstermin persönlich erscheinen?",
        answer: "Grundsätzlich ja. In Ausnahmefällen — etwa bei Aufenthalt im Ausland — kann das Gericht eine Ausnahme genehmigen oder die Anhörung per Video durchführen."
      },
      {
        question: "Wir haben in der Türkei geheiratet. Zählt das in Deutschland?",
        answer: "Ja. Eine in der Türkei wirksam geschlossene Ehe wird in Deutschland anerkannt. Sie können die Scheidung dann beim deutschen Familiengericht beantragen."
      },
      {
        question: "Was passiert mit meiner Rente in der Türkei bei der Scheidung?",
        answer: "Türkische SGK-Rentenansprüche fließen in den deutschen Versorgungsausgleich ein. Das erfordert Abstimmung mit türkischen Behörden, was das Verfahren verlängern kann. Sprechen Sie Ihren Anwalt früh darauf an."
      }
    ],
    faqTR: [
      {
        question: "Anlaşmalı boşanmada Mannheim'da avukat tutmam gerekiyor mu?",
        answer: "Evet, en az bir tarafın avukat tutması zorunludur. Diğer taraf avukatsız duruşmaya katılabilir ancak kendi talebini sunamaz."
      },
      {
        question: "Mannheim'da boşanma ne kadar sürer?",
        answer: "Tartışmasız, anlaşmalı bir boşanma dilekçenin sunulmasından itibaren genellikle 3–6 ay içinde sonuçlanır. Nafaka, velayet veya mülk anlaşmazlığı varsa 1–3 yıl sürebilir."
      },
      {
        question: "Türkiye'de evlendik. Bu evlilik Almanya'da geçerli mi?",
        answer: "Evet. Türk hukukuna göre geçerli şekilde Türkiye'de yapılan bir evlilik Almanya'da tanınır ve boşanma Alman mahkemesinde talep edilebilir."
      }
    ],
    ctaTitleDE: "Scheidungsberatung in Mannheim",
    ctaTitleTR: "Mannheim'da Boşanma Danışmanlığı",
    ctaDescriptionDE: "Fragen zur Scheidung — besonders bei türkisch-deutschen Sachverhalten? Wir beraten auf Deutsch und Türkisch.",
    ctaDescriptionTR: "Boşanma konusunda sorularınız mı var? Almanca ve Türkçe danışmanlık sunuyoruz."
  },

  // ─── POST 2: Familienrecht Beratung Mannheim ───────────────────────────────
  {
    slug: "familienrecht-beratung-mannheim",
    slugDE: "familienrecht-beratung-mannheim",
    slugTR: "mannheim-aile-hukuku-danismanligi",
    titleDE: "Familienrecht Beratung Mannheim: Was kostet eine Erstberatung und wann lohnt sie sich?",
    titleTR: "Mannheim'da Aile Hukuku Danışmanlığı: İlk Görüşme Ne Kadar Tutar ve Ne Zaman Gereklidir?",
    excerptDE: "Familienrecht Beratung in Mannheim: Was kostet eine Erstberatung, welche Themen deckt sie ab, und was ist bei türkisch-deutschen Familien anders?",
    excerptTR: "Mannheim'da aile hukuku danışmanlığı: ilk görüşme ne kadar tutar, hangi konuları kapsar ve Türk-Alman ailelerde ne farklıdır?",
    contentDE: `Familienrechtliche Probleme tauchen meistens dann auf, wenn man sie am wenigsten gebrauchen kann. Trennung, Streit ums Kind, ausbleibender Unterhalt — und dann weiß man nicht, wo man anfangen soll.

Eine anwaltliche Erstberatung ist der einfachste erste Schritt. Sie dauert meist eine Stunde und beantwortet die Frage, die die meisten am meisten beschäftigt: Was kann ich überhaupt tun?

## Was eine Erstberatung im Familienrecht bringt

Nach einem Gespräch mit einem Familienrechtler wissen Sie drei Dinge, die Sie vorher nicht wussten:

Erstens, welches Recht auf Ihre Situation anwendbar ist. Bei Familien mit Bezug zur Türkei ist das nicht immer klar. Deutsches oder türkisches Recht? Welches Gericht ist zuständig? Das hängt davon ab, wo die Beteiligten leben, wo geheiratet wurde, wo die Kinder sind.

Zweitens, welche konkreten Ansprüche Sie haben — oder gegen Sie bestehen könnten.

Drittens, ob eine außergerichtliche Einigung möglich ist. Die meisten Familienrechtler sagen Ihnen ehrlich, ob ein Anruf beim Anwalt der Gegenseite mehr bringt als ein Gerichtsverfahren.

## Was kostet eine Familienrecht-Beratung in Mannheim?

Das Rechtsanwaltsvergütungsgesetz (RVG) begrenzt die Erstberatungsgebühr auf maximal 190 Euro zuzüglich Mehrwertsteuer. Viele Anwälte verlangen weniger. Es lohnt sich, vorher anzurufen und zu fragen.

Wenn Sie wenig verdienen, haben Sie möglicherweise Anspruch auf Beratungshilfe. Mit einem Beratungshilfeschein — ausgestellt vom Amtsgericht Mannheim — zahlen Sie beim Anwalt nur 15 Euro. Voraussetzung ist, dass Ihr Einkommen unter einer bestimmten Grenze liegt und Sie keine Rechtsschutzversicherung haben, die die Kosten deckt.

Haben Sie eine Rechtsschutzversicherung, rufen Sie vor dem Anwalttermin bei Ihrer Versicherung an. Erstberatungskosten sind häufig inbegriffen.

## Die häufigsten Familienrechtsthemen in Mannheim

**Scheidung und Trennung.** Das klassische Thema. Wichtig dabei: die Scheidung selbst ist oft der unkompliziertere Teil. Was die meisten Paare länger beschäftigt, sind die Folgen — Unterhalt, Wohnung, Vermögen, Kinder.

**Kindesunterhalt.** Der Kindesunterhalt richtet sich nach der Düsseldorfer Tabelle. Das klingt einfach, wird aber schwierig, wenn der zahlungspflichtige Elternteil in der Türkei lebt oder wechselnde Einkommen hat.

**Sorgerecht und Umgang.** Nach der Trennung behalten verheiratete Eltern grundsätzlich das gemeinsame Sorgerecht. Probleme entstehen, wenn die Kommunikation nicht mehr funktioniert oder ein Elternteil mit dem Kind ins Ausland ziehen möchte.

**Ehegattenunterhalt.** Nicht automatisch. Ob und wie viel Unterhalt nach der Scheidung gezahlt werden muss, hängt von Ehedauer, Erwerbstätigkeit und gemeinsamen Kindern ab.

## Was bei türkisch-deutschen Familien oft anders ist

Das ist ein Punkt, der in vielen allgemeinen Ratgebern untergeht. Wenn Ihre Familie einen Bezug zur Türkei hat — Staatsangehörigkeit, Wohnort, Immobilien, Rentenpunkte — können sich die Fragen deutlich verschieben.

Typische Konstellationen, die uns in der Kanzlei oft begegnen:

Ein Partner lebt in der Türkei und zahlt keinen Unterhalt. Was hilft dann: ein deutsches Urteil plus Tenfiz-Verfahren in der Türkei, oder direkt eine Klage in der Türkei? Beides hat Vor- und Nachteile.

Die Scheidung ist in Deutschland durch, aber in der Türkei gilt man noch als verheiratet. Das Tanıma-Tenfiz-Verfahren löst das — aber es kostet Zeit und Geld.

Ein Elternteil will mit dem Kind in die Türkei. Bei gemeinsamem Sorgerecht ist das ohne Zustimmung des anderen nicht erlaubt. Was passiert, wenn er oder sie trotzdem geht? Dann wird es schnell zu einem Fall nach dem Haager Kindesentführungsübereinkommen.

## Wann man nicht warten sollte

Es gibt Situationen, in denen jede Woche zählt. Wenn der andere Elternteil mit dem Kind verreisen will. Wenn Sie seit Monaten keinen Unterhalt bekommen und über Rückforderungen nachdenken. Wenn Sie eine Kündigung der Ehewohnung bekommen haben und nicht sicher sind, ob die rechtmäßig ist.

Eine Erstberatung schafft Klarheit. Das hilft — auch wenn danach kein Gerichtsverfahren folgt.`,
    contentTR: `Aile hukuku sorunları genellikle en az ihtiyaç duyduğunuz anda ortaya çıkar. Ayrılık, çocuk meselesi, ödenmeyen nafaka — ve nereden başlayacağınızı bilmiyorsunuzdur.

Bir avukatla ilk görüşme, en basit ilk adımdır. Genellikle bir saat sürer ve çoğu kişinin en çok merak ettiği soruyu yanıtlar: Ne yapabilirim?

## İlk Görüşme Ne İşe Yarar?

Bir aile hukukçusuyla görüştükten sonra üç şeyi bilirsiniz:

Birincisi, durumunuza hangi hukukun uygulanacağını. Türkiye bağlantılı ailelerde bu her zaman açık değildir. Alman mı Türk hukuku mu? Hangi mahkeme yetkili? Bu, tarafların nerede yaşadığına, nerede evlenildiğine ve çocukların nerede olduğuna bağlıdır.

İkincisi, sahip olduğunuz — ya da size karşı ileri sürülebilecek — somut hakları.

Üçüncüsü, mahkeme dışı uzlaşmanın mümkün olup olmadığını. Deneyimli bir aile hukukçusu, dava açmadan bir çözüme ulaşıp ulaşılamayacağını size dürüstçe söyler.

## Mannheim'da Aile Hukuku Danışması Ne Kadar Tutar?

Alman Avukatlık Ücret Kanunu (RVG) ilk danışma ücretini maksimum 190 Euro + KDV ile sınırlar. Birçok avukat daha az alır; önceden sormak mantıklıdır.

Düşük gelirli iseniz Beratungshilfe hakkından yararlanabilirsiniz. Mannheim Asliye Mahkemesi'nden alınan belgeyle avukatta yalnızca 15 Euro ödersiniz.

## Türk-Alman Ailelerde Sıkça Karşılaşılan Durumlar

Türkiye ile bağlantılı ailelerde tablo farklılaşır. Büromuzda sık karşılaştığımız durumlar:

Eş Türkiye'de yaşıyor ve nafaka ödemiyor. Ne işe yarar: Alman kararı + Türkiye'de Tenfiz davası mı, yoksa doğrudan Türkiye'de dava mı? Her ikisinin avantaj ve dezavantajları var.

Almanya'da boşanma tamamlandı ama Türkiye'de hâlâ evli görünüyorsunuz. Tanıma-Tenfiz davası bu sorunu çözer ancak zaman ve masraf gerektirir.

Bir ebeveyn çocukla Türkiye'ye gitmek istiyor. Müşterek velayette diğer ebeveynin onayı olmadan bu mümkün değildir. Yine de gidilirse, Lahey Sözleşmesi kapsamında bir dava söz konusu olabilir.

## Ne Zaman Beklememelisiniz?

Bazı durumlarda her hafta önemlidir. Diğer ebeveyn çocukla yurt dışına çıkmak istiyorsa. Aylardır nafaka almıyorsanız. Evlilik konutu konusunda belirsizlik varsa.

Bir görüşme netlik sağlar — hatta ardından dava açılmasa bile.`,
    category: "family-law",
    categoryDE: "Familienrecht",
    image: criminalDefenseTurkeyImg,
    dateDE: "19. April 2026",
    dateTR: "19 Nisan 2026",
    readTimeDE: "6 Min. Lesezeit",
    readTimeTR: "6 dk okuma",
    publishedAt: "2026-04-19",
    keywordsDE: "familienrecht beratung mannheim, familienanwalt mannheim, erstberatung familienrecht mannheim, familienrecht mannheim kosten, türkisches familienrecht",
    keywordsTR: "mannheim aile hukuku danışmanlığı, aile avukatı mannheim, türk alman aile hukuku, ilk görüşme aile hukuku",
    faqDE: [
      {
        question: "Was kostet eine Erstberatung im Familienrecht in Mannheim?",
        answer: "Maximal 190 Euro plus Mehrwertsteuer nach dem RVG. Mit Beratungshilfeschein (beim Amtsgericht Mannheim erhältlich) zahlen Sie nur 15 Euro. Viele Anwälte verlangen weniger als den Höchstsatz."
      },
      {
        question: "Muss ich beim Familiengericht Mannheim einen Anwalt haben?",
        answer: "Für Anträge und Verhandlungen gilt Anwaltszwang. Für eine einfache Beratung können Sie ohne Anwalt kommen — aber dann gibt es keinen Anwalt, der für Sie spricht."
      },
      {
        question: "Mein Ex-Partner lebt in der Türkei und zahlt keinen Unterhalt. Was sind meine Optionen?",
        answer: "Sie können in Deutschland klagen und das Urteil dann per Tenfiz-Verfahren in der Türkei vollstrecken lassen. Alternativ klagen Sie direkt in der Türkei. Welcher Weg schneller geht, hängt von der konkreten Situation ab."
      },
      {
        question: "Wie läuft eine Familienrecht-Beratung ab?",
        answer: "Sie schildern Ihre Situation, der Anwalt erklärt die Rechtslage, zeigt Optionen auf und schätzt ein, was realistisch ist. Am Ende wissen Sie, ob und wie Sie weiter vorgehen sollten."
      }
    ],
    faqTR: [
      {
        question: "Mannheim'da aile hukuku ilk görüşmesi ne kadar tutar?",
        answer: "RVG'ye göre maksimum 190 Euro + KDV. Beratungshilfe belgesiyle yalnızca 15 Euro. Birçok avukat tavan ücretten daha az alır."
      },
      {
        question: "Türkiye'deki eski eşim nafaka ödemiyor, seçeneklerim neler?",
        answer: "Almanya'da dava açıp kararı Türkiye'de Tenfiz davası yoluyla icra ettirebilirsiniz. Ya da doğrudan Türkiye'de dava açabilirsiniz. Hangisinin daha hızlı sonuç vereceği somut duruma bağlıdır."
      }
    ],
    ctaTitleDE: "Familienrecht-Erstberatung in Mannheim",
    ctaTitleTR: "Mannheim'da Aile Hukuku Danışmanlığı",
    ctaDescriptionDE: "Sie haben eine Frage zum Familienrecht — besonders mit türkischem Bezug? Wir beraten auf Deutsch und Türkisch.",
    ctaDescriptionTR: "Aile hukukuyla ilgili sorularınız mı var? Almanca ve Türkçe danışmanlık sunuyoruz."
  },

  // ─── POST 3: Sorgerecht Anwalt Mannheim ────────────────────────────────────
  {
    slug: "sorgerecht-anwalt-mannheim",
    slugDE: "sorgerecht-anwalt-mannheim",
    slugTR: "mannheim-velayet-avukati",
    titleDE: "Sorgerecht Anwalt Mannheim: Alleinsorge, Umgang und Auslandsreisen mit dem Kind",
    titleTR: "Mannheim'da Velayet Avukatı: Tek Velayet, Ziyaret Hakkı ve Çocukla Yurt Dışı Seyahati",
    excerptDE: "Streit ums Sorgerecht in Mannheim? Wann gibt es Alleinsorge, wie wird der Umgang geregelt, und was passiert, wenn ein Elternteil mit dem Kind ins Ausland reisen will?",
    excerptTR: "Mannheim'da velayet uyuşmazlığı mı? Mahkeme ne zaman tek velayet verir, ziyaret hakkı nasıl düzenlenir ve bir ebeveyn çocukla yurt dışına gitmek isterse ne olur?",
    contentDE: `Das Sorgerecht ist das Thema, bei dem Eltern sich am häufigsten uneinig sind — und bei dem die rechtliche Lage am häufigsten missverstanden wird.

Manche glauben, die Mutter bekommt automatisch das alleinige Sorgerecht. Andere denken, man kann als Vater nichts ausrichten. Beides stimmt nicht.

## Was gemeinsames Sorgerecht in der Praxis bedeutet

Bei verheirateten Eltern gilt das gemeinsame Sorgerecht automatisch. Es bleibt auch nach der Scheidung bestehen — das ist der gesetzliche Regelfall in Deutschland.

Das gemeinsame Sorgerecht bedeutet: Beide Elternteile müssen bei allen wesentlichen Entscheidungen zustimmen. Schulwahl, medizinische Eingriffe, Umzug ins Ausland, Religionszugehörigkeit, Reisepässe. Bei kleineren Alltagsentscheidungen entscheidet der Elternteil, bei dem das Kind gerade ist.

Das funktioniert gut, wenn die Kommunikation noch halbwegs klappt. Es funktioniert schlecht, wenn Eltern sich über jeden Schritt streiten.

## Wann bekommt ein Elternteil das alleinige Sorgerecht?

Das Familiengericht überträgt das alleinige Sorgerecht nur, wenn das Kindeswohl es erfordert. Beispiele, die das Gericht ernst nimmt:

Das Kind ist häuslicher Gewalt ausgesetzt. Ein Elternteil ist aus psychischen oder suchtbedingten Gründen dauerhaft nicht erziehungsfähig. Die Kommunikation ist so zerrüttet, dass jede gemeinsame Entscheidung dem Kind schadet.

Was nicht reicht: Der Elternteil ist mir unsympathisch. Wir streiten uns viel. Er zahlt keinen Unterhalt. All das ist unangenehm, aber keine Grundlage für das alleinige Sorgerecht.

## Das Umgangsrecht: Recht des Kindes, nicht Druckmittel

Das Umgangsrecht gehört dem Kind, nicht dem Elternteil. Das klingt nach Sprachregelung, hat aber praktische Konsequenzen. Selbst wenn ein Elternteil den Unterhalt nicht zahlt, darf der andere den Umgang nicht einfach verweigern. Unterhalt und Umgang sind rechtlich unabhängig voneinander.

Der Umgang wird entweder einvernehmlich geregelt oder per Gerichtsbeschluss. Wenn sich die Eltern nicht einigen können, legt das Familiengericht Zeiten, Abhol- und Rückgabeorte und Ferienregelungen fest.

## Auslandsreise mit dem Kind: Wann brauchen Sie eine Erlaubnis?

Das ist der Punkt, an dem es in türkisch-deutschen Familien am häufigsten eskaliert.

Bei gemeinsamem Sorgerecht darf kein Elternteil das Kind ohne Zustimmung des anderen dauerhaft ins Ausland mitnehmen. Für Urlaubsreisen ins Ausland gilt: Bei kürzeren Reisen (weniger als 6 Wochen) ohne Rückkehrabsicht reicht in der Praxis die Zustimmung des anderen Elternteils — am besten schriftlich. Für einen dauerhaften Umzug mit dem Kind brauchen Sie die Zustimmung des anderen Elternteils oder einen Gerichtsbeschluss.

Reist ein Elternteil ohne Zustimmung mit dem Kind aus, ist das rechtlich eine internationale Kindesentführung — auch wenn es sich um einen leiblichen Elternteil handelt. Die Türkei hat das Haager Kindesentführungsübereinkommen unterzeichnet, was grundsätzlich Rückführungsanträge ermöglicht.

Wenn Sie in einer solchen Situation sind oder sie befürchten: Holen Sie sofort anwaltliche Hilfe. Je länger das Kind im Ausland ist, desto schwieriger wird die Rückführung.

## Türkisch-deutsches Sorgerecht: Was noch dazu kommt

Ein türkisches Sorgerechtsurteil gilt in Deutschland nicht automatisch. Es muss in einem eigenen Verfahren anerkannt werden. Dasselbe gilt umgekehrt: Ein deutsches Sorgerechtsurteil braucht in der Türkei ein Tenfiz-Verfahren, bevor es vollstreckbar ist.

Das bedeutet in der Praxis: Wenn Sie in Deutschland ein Sorgerechtsurteil erstreiten, hat das in der Türkei zunächst keine direkte Wirkung. Das muss separat beantragt werden. Die Doğru Kanzlei übernimmt diese Verfahren auf beiden Seiten.

## Was ein Sorgerechtsverfahren kostet

Das Gericht setzt den Verfahrenswert oft auf 3.000 bis 4.000 Euro fest. Anwalts- und Gerichtsgebühren zusammen ergeben bei einem unkomplizierten Fall ohne Sachverständigengutachten oft 800 bis 1.500 Euro. Mit Gutachten mehr.

Bei geringem Einkommen ist Verfahrenskostenhilfe möglich.`,
    contentTR: `Velayet, ebeveynlerin en sık anlaşmazlığa düştüğü konudur — ve hukuki durumun en çok yanlış anlaşıldığı alandır.

Kimileri annenin otomatik olarak tek velayeti aldığını sanır. Kimileri ise babanın hiçbir hakkının olmadığını düşünür. İkisi de doğru değildir.

## Müşterek Velayet Pratikte Ne Anlama Gelir?

Evli ebeveynlerde müşterek velayet otomatik olarak geçerlidir. Boşanmanın ardından da kural olarak devam eder — Almanya'da yasal standart budur.

Müşterek velayet şu demektir: Tüm önemli kararlar için her iki ebeveynin onayı gerekir. Okul seçimi, tıbbi müdahaleler, yurt dışına taşınma, din eğitimi, pasaport. Günlük küçük kararları ise o anda çocukla birlikte olan ebeveyn verir.

İletişim işe yarıyorsa bu düzen çalışır. Her adımda tartışma varsa çalışmaz.

## Mahkeme Ne Zaman Tek Velayeti Verir?

Aile mahkemesi, tek velayeti yalnızca çocuğun yararını gerektirdiği durumlarda devreder:

Çocuk aile içi şiddete maruz kalıyor. Bir ebeveyn psikolojik veya bağımlılık nedenlerinden kalıcı olarak ebeveynlik yapamıyor. İletişim çökmüş, her ortak karar çocuğa zarar veriyor.

Yeterli olmayan gerekçeler: Eski eşimi sevmiyorum. Çok kavga ediyoruz. Nafaka ödemiyor. Bunlar rahatsız edici ama tek velayet için yeterli değildir.

## Ziyaret Hakkı: Çocuğun Hakkı, Baskı Aracı Değil

Ziyaret hakkı çocuğa aittir, ebeveyne değil. Pratikte şu anlama gelir: Nafaka ödenmiyor olsa bile diğer ebeveyn ziyaret hakkını bloke edemez. Nafaka ve ziyaret hakkı hukuken birbirinden bağımsızdır.

Ziyaret ya anlaşmayla ya da mahkeme kararıyla düzenlenir.

## Çocukla Yurt Dışına Seyahat: Ne Zaman İzin Gerekir?

Türk-Alman ailelerde en sık kriz yaratan noktadır.

Müşterek velayette, hiçbir ebeveyn diğerinin onayı olmadan çocuğu kalıcı olarak yurt dışına götüremez. Kısa tatiller için diğer ebeveynin yazılı onayı pratik açıdan yeterlidir. Kalıcı taşınma için diğer ebeveynin onayı ya da mahkeme kararı şarttır.

Onay alınmadan çocuğun yurt dışına çıkarılması, biyolojik ebeveyn olsa bile uluslararası çocuk kaçırma sayılır. Türkiye Lahey Sözleşmesi'ni imzalamıştır — bu teorik olarak iade taleplerini mümkün kılar.

Böyle bir durumla karşı karşıyaysanız: hemen hukuki yardım alın. Çocuk ne kadar uzun süre yurt dışında kalırsa iade o kadar zorlaşır.

## Doğru Kanzlei'nin Rolü

Türk mahkemesindeki bir velayet kararı Almanya'da otomatik olarak geçerli değildir. Tanıma davası açılması gerekir. Aynısı tersi için de geçerlidir: Alman kararı, Türkiye'de Tenfiz davası olmadan icra edilemez. Doğru Kanzlei her iki taraftaki bu süreçleri yürütmektedir.`,
    category: "family-law",
    categoryDE: "Familienrecht",
    image: jointCustodyImg,
    dateDE: "19. April 2026",
    dateTR: "19 Nisan 2026",
    readTimeDE: "8 Min. Lesezeit",
    readTimeTR: "8 dk okuma",
    publishedAt: "2026-04-19",
    keywordsDE: "sorgerecht anwalt mannheim, sorgerecht mannheim, alleinsorge beantragen, umgangsrecht mannheim, türkisches sorgerecht, kind ausland mitnehmen",
    keywordsTR: "mannheim velayet avukatı, tek velayet almanya, ziyaret hakkı mannheim, türk alman velayet, çocuk yurt dışı izin",
    faqDE: [
      {
        question: "Bekommt die Mutter automatisch das Sorgerecht nach der Scheidung?",
        answer: "Nein. Bei verheirateten Eltern bleibt das gemeinsame Sorgerecht nach der Scheidung bestehen. Das alleinige Sorgerecht gibt es nur, wenn ein Gericht es ausdrücklich überträgt — und dafür braucht es mehr als nur den Wunsch eines Elternteils."
      },
      {
        question: "Kann ich den Umgang verweigern, weil mein Ex keinen Unterhalt zahlt?",
        answer: "Nein. Umgangsrecht und Unterhaltsrecht sind voneinander unabhängig. Wenn Sie den Umgang verweigern, kann das gerichtliche Konsequenzen für Sie haben. Gegen ausbleibenden Unterhalt müssen Sie separat vorgehen."
      },
      {
        question: "Mein Kind hat die türkische Staatsbürgerschaft. Welches Recht gilt beim Sorgerecht?",
        answer: "Maßgeblich ist der gewöhnliche Aufenthaltsort des Kindes. Lebt das Kind in Deutschland, gilt deutsches Recht — unabhängig von der Staatsbürgerschaft."
      },
      {
        question: "Darf ich mit meinem Kind in die Türkei fliegen, ohne den Ex zu fragen?",
        answer: "Für Urlaubsreisen empfiehlt sich die schriftliche Zustimmung. Bei einem dauerhaften Umzug ist die Zustimmung des anderen Elternteils oder ein Gerichtsbeschluss notwendig. Ohne beides kann das als Kindesentführung gewertet werden."
      }
    ],
    faqTR: [
      {
        question: "Boşanmanın ardından anne otomatik olarak velayeti mi alır?",
        answer: "Hayır. Evli ebeveynlerde müşterek velayet boşanmadan sonra da devam eder. Tek velayet, yalnızca mahkeme tarafından açıkça devredilirse mümkündür — ve bunun için bir ebeveynin isteği yetmez."
      },
      {
        question: "Eski eşim nafaka ödemediği için ziyaret hakkını reddedebilir miyim?",
        answer: "Hayır. Ziyaret hakkı ve nafaka hukuken birbirinden bağımsızdır. Ziyareti engellerseniz hukuki sonuçlar doğabilir. Ödenmeyen nafaka için ayrı işlem başlatmanız gerekir."
      },
      {
        question: "Sormadan çocukla Türkiye'ye gidebilir miyim?",
        answer: "Tatil amaçlı kısa seyahatler için yazılı onay almanız tavsiye edilir. Kalıcı taşınma için diğer ebeveynin onayı ya da mahkeme kararı şarttır. Bu olmadan çocuk kaçırma kapsamında değerlendirilebilir."
      }
    ],
    ctaTitleDE: "Sorgerechtsberatung in Mannheim",
    ctaTitleTR: "Mannheim'da Velayet Danışmanlığı",
    ctaDescriptionDE: "Sorgerechtsstreit — besonders mit Bezug zur Türkei? Wir kennen beide Systeme und beraten auf Deutsch und Türkisch.",
    ctaDescriptionTR: "Velayet uyuşmazlığı mı var? Her iki hukuk sistemini bilen ekibimiz Almanca ve Türkçe danışmanlık sunuyor."
  },

  // ─── POST 4: Vollmacht auf Türkisch ────────────────────────────────────────
  {
    slug: "vollmacht-auf-tuerkisch",
    slugDE: "vollmacht-auf-tuerkisch",
    slugTR: "turkce-vekaletname-nasil-cikarilir",
    titleDE: "Vollmacht auf Türkisch: Was Sie wirklich brauchen und welche Fehler teuer werden",
    titleTR: "Türkçe Vekaletname: Gerçekten Neye İhtiyacınız Var ve Hangi Hatalar Pahalıya Mal Olur?",
    excerptDE: "Vollmacht auf Türkisch ausstellen: Konsulat oder deutscher Notar? Was muss im Text stehen? Und welche häufigen Fehler führen dazu, dass türkische Behörden das Dokument ablehnen?",
    excerptTR: "Türkçe vekaletname çıkarma: konsolosluk mu, Alman noteri mi? Metinde ne yazmalı? Türk kurumlarının belgeyi reddetmesine yol açan yaygın hatalar neler?",
    contentDE: `Wer in Deutschland lebt und in der Türkei etwas regeln muss — Immobilienverkauf, Erbschaft, Gerichtsverfahren, Bankgeschäfte — kommt meistens nicht drum herum: Er braucht eine türkische Vollmacht, die sogenannte Vekâletname.

Das Problem dabei ist nicht, dass man eine Vollmacht braucht. Das Problem ist, dass viele Vollmachten falsch sind. Und das merkt man oft erst dann, wenn der türkische Notar oder die Behörde das Dokument zurückweist.

Hier erkläre ich, was wirklich funktioniert.

## Was eine Vollmacht auf Türkisch von einer deutschen unterscheidet

In Deutschland reicht für viele Vollmachten ein schriftliches Dokument mit Unterschrift. In der Türkei ist das anders. Für die meisten rechtlich relevanten Vorgänge brauchen Sie eine **notariell beurkundete Vekâletname** — entweder ausgestellt vom türkischen Konsulat oder durch einen deutschen Notar plus Apostille plus beglaubigte Übersetzung.

Das ist kein bürokratischer Zufall. Die Türkei schützt sich damit vor gefälschten Vollmachten, besonders bei Immobilien- und Erbschaftsgeschäften.

## Wann brauchen Sie eine türkische Vollmacht?

Immer dann, wenn Sie von Deutschland aus jemanden in der Türkei bevollmächtigen möchten, um in Ihrem Namen zu handeln. Häufige Anlässe:

- Immobilienverkauf oder -übertragung in der Türkei (Tapu Devri)
- Erbschaftsangelegenheiten — Veraset ilamı, Aufteilung, Übertragung
- Einreichung einer Scheidungsklage in der Türkei durch einen türkischen Anwalt
- Tanıma-Tenfiz-Verfahren — Anerkennung eines deutschen Urteils in der Türkei
- Bankgeschäfte auf türkischen Konten
- An- oder Abmeldung eines Fahrzeugs in der Türkei

## Konsulat oder deutscher Notar — was ist besser?

**Türkisches Konsulat.** Das ist der einfachere Weg. Die Konsulate in Frankfurt, Berlin, Stuttgart, München und anderen Städten können Vekâletnamen direkt auf Türkisch ausstellen. Das Ergebnis ist in der Türkei ohne Apostille oder Übersetzung sofort gültig.

Der Nachteil: Termine sind oft Monate im Voraus ausgebucht, und Sie müssen persönlich erscheinen.

**Deutscher Notar.** Möglich, aber aufwendiger. Der Notar beurkundet auf Deutsch, dann brauchen Sie eine Apostille beim Landgericht oder der Bezirksregierung und eine beglaubigte Übersetzung ins Türkische durch einen staatlich vereidigten Dolmetscher. Erst das komplette Paket (Original + Apostille + Übersetzung) gilt in der Türkei.

Der Nachteil: Teurer, zeitintensiver und fehleranfälliger — weil bei jedem Schritt etwas schiefgehen kann.

## Was in der Vollmacht stehen muss

Das ist der entscheidende Punkt. In der Türkei gilt: Nur was in der Vollmacht ausdrücklich steht, darf der Bevollmächtigte tun. Keine pauschalen Formulierungen wie "alle Angelegenheiten in der Türkei regeln".

Wenn die Vollmacht für einen Immobilienverkauf ist, muss sie explizit Folgendes enthalten: Befugnis zum Verkauf der konkreten Immobilie (mit Adresse und Tapu-Nummer), Befugnis zur Unterzeichnung aller notwendigen Dokumente beim Tapu-Amt und Befugnis, den Verkaufspreis zu empfangen.

Fehlt auch nur einer dieser Punkte, kann der türkische Notar oder das Grundbuchamt die Vollmacht ablehnen.

## Die häufigsten Fehler

**Zu vage formuliert.** "Alle Angelegenheiten vertreten" reicht nicht. Türkische Behörden verlangen Spezifität.

**Falscher Übersetzer.** Für die Apostille-Variante brauchen Sie einen staatlich vereidigten Übersetzer (in Deutschland: staatlich geprüfter und beeidigter Übersetzer). Eine normale Übersetzungsfirma reicht nicht.

**Vergessene Identitätsnachweise.** Die Vollmacht muss in der Türkei dem Handelsregister oder Grundbuchamt vorgelegt werden, oft zusammen mit dem türkischen Nüfus-Dokument oder Reisepass des Vollmachtgebers.

**Verjährte Vollmacht.** Immobilienvollmachten verlieren in der Türkei nach einigen Jahren ihre Gültigkeit (je nach Behörde unterschiedlich). Prüfen Sie vor einem Immobiliengeschäft, ob eine alte Vollmacht noch anerkannt wird.

## Wer formuliert den Text?

Das ist die Stelle, an der ein Anwalt mit Kenntnissen des türkischen Rechts hilft. Kein Textbaustein aus dem Internet. Keine Übersetzung einer deutschen Vollmacht. Der Text muss nach türkischem Recht formuliert sein — passgenau für den konkreten Zweck.

In der Doğru Kanzlei formulieren wir Vekâletname-Texte auf Türkisch, die türkische Notare und Behörden tatsächlich akzeptieren.`,
    contentTR: `Almanya'da yaşayıp Türkiye'de bir şeyler halletmeniz gerekiyorsa — gayrimenkul satışı, miras, dava, bankacılık — çoğunlukla kaçış yoktur: Türk hukukuna uygun bir vekaletname, yani Vekâletname gerekir.

Sorun vekaletname gerektirmesi değildir. Sorun, pek çok vekaleetnamenin hatalı olmasıdır. Bunu çoğu zaman Türk noteri ya da kurum belgeyi reddettiğinde anlarsınız.

Bu yazıda gerçekten ne işe yaradığını açıklıyorum.

## Türk Vekaletnamesi Neden Farklı?

Almanya'da pek çok yetki belgesi için imzalı yazılı bir belge yeterlidir. Türkiye'de durum farklıdır. Çoğu hukuki işlem için noter onaylı Vekâletname şarttır — ya Türk konsolosluğu tarafından düzenlenmiş ya da Alman noteri + apostil + yeminli çeviri şeklinde hazırlanmış.

Bu bir tesadüf değil. Türkiye, özellikle gayrimenkul ve miras işlemlerinde sahte vekaletnamelere karşı önlem alıyor.

## Ne Zaman Türkçe Vekaletname Gerekir?

Almanya'dan Türkiye'de biri adına işlem yaptırmak istediğinizde. Yaygın durumlar:

- Türkiye'deki gayrimenkul satışı veya devri (Tapu Devri)
- Miras işlemleri — veraset ilamı, taksim, devir
- Türkiye'de boşanma davası açtırmak için Türk avukata yetki vermek
- Tanıma-Tenfiz davası — Alman mahkeme kararının Türkiye'de tanınması
- Türk banka hesapları üzerinde işlem yaptırmak
- Türkiye'de araç tescil veya silme işlemi

## Konsolosluk mu, Alman Noteri mi?

**Türk Konsolosluğu.** Daha kolay yoldur. Frankfurt, Berlin, Stuttgart, Münih ve diğer şehirlerdeki konsolosluklar doğrudan Türkçe Vekâletname düzenleyebilir. Sonuç, apostil veya çeviri gerektirmeksizin Türkiye'de anında geçerlidir.

Dezavantaj: Randevular çoğu zaman aylarca önceden dolmaktadır ve bizzat gitmeniz gerekir.

**Alman Noteri.** Mümkündür ancak daha zahmetlidir. Noter Almanca düzenleme yapar; ardından Landgericht veya Bezirksregierung'dan apostil alınır ve devlet yeminli bir tercüman tarafından Türkçe'ye çevrilir. Türkiye'de geçerli olması için tüm paketin (asıl + apostil + çeviri) tam olması gerekir.

Dezavantaj: Daha pahalı, daha zaman alıcı ve her adımda hata riski daha yüksektir.

## Vekaletnamede Ne Yazmalı?

Bu kritik noktadır. Türkiye'de kural şudur: Vekaletnamede açıkça yazılan şeyleri vekil yapabilir. "Türkiye'deki tüm işleri halletmek" gibi genel ifadeler kabul edilmez.

Gayrimenkul satışı için vekaletname şunları açıkça içermelidir: Söz konusu taşınmazı satma yetkisi (adres ve tapu numarasıyla birlikte), tapu dairesinde gerekli belgeleri imzalama yetkisi, satış bedelini tahsil etme yetkisi.

Bu maddelerden biri eksikse Türk noteri veya tapu müdürlüğü belgeyi reddedebilir.

## En Sık Yapılan Hatalar

**Muğlak ifadeler.** "Tüm işleri temsil etmek" yetmez. Türk kurumları özgüllük ister.

**Yanlış tercüman.** Apostil yolunu seçtiyseniz devlet yeminli tercüman gerekir. Sıradan çeviri bürosu yetmez.

**Eski vekaletname.** Gayrimenkul vekaletnameleri Türkiye'de belirli bir süre sonra geçerliliğini yitirebilir. İşlem öncesinde eski vekaletnamenin hâlâ kabul edilip edilmeyeceğini kontrol edin.

## Metni Kim Yazmalı?

İşte burada Türk hukukunu bilen bir avukat devreye girer. İnternetten bulunan hazır şablonlar değil. Alman vekaletnamelerinin çevirisi değil. Metin, Türk hukukuna göre — somut amaca özel olarak — kaleme alınmalıdır.

Doğru Kanzlei olarak, Türk noterler ve kurumların gerçekten kabul ettiği Vekâletname metinleri hazırlıyoruz.`,
    category: "legal-documents",
    categoryDE: "Rechtsdokumente",
    image: vekaletnameImg,
    dateDE: "19. April 2026",
    dateTR: "19 Nisan 2026",
    readTimeDE: "7 Min. Lesezeit",
    readTimeTR: "7 dk okuma",
    publishedAt: "2026-04-19",
    keywordsDE: "vollmacht auf türkisch, türkische vollmacht, vekâletname deutschland, vollmacht türkei konsulat, türkische vollmacht apostille, vekâletname text",
    keywordsTR: "türkçe vekaletname, almanya vekaletname nasıl çıkarılır, konsolosluk vekaletname, apostil türkiye, vekâletname metin örneği",
    faqDE: [
      {
        question: "Kann ich eine Vollmacht auf Türkisch einfach selbst übersetzen?",
        answer: "Nein. Eine selbst übersetzte Vollmacht wird von türkischen Behörden nicht anerkannt. Sie brauchen entweder eine Beurkundung durch das türkische Konsulat oder eine beglaubigte Übersetzung durch einen staatlich vereidigten Dolmetscher."
      },
      {
        question: "Wie lange ist eine türkische Vollmacht gültig?",
        answer: "Das hängt vom Verwendungszweck und der Behörde ab. Bei Immobiliengeschäften gibt es in der Praxis oft eine Grenze von 3 bis 5 Jahren. Prüfen Sie vor einem Geschäft, ob eine ältere Vollmacht noch anerkannt wird."
      },
      {
        question: "Welche türkischen Konsulate in Deutschland können Vollmachten ausstellen?",
        answer: "Alle türkischen Generalkonsulate: Frankfurt, Berlin, Hamburg, München, Stuttgart, Karlsruhe, Mainz, Hannover, Düsseldorf, Köln, Nürnberg und das Konsulat in Münster."
      },
      {
        question: "Was kostet eine Vekâletname beim türkischen Konsulat?",
        answer: "Die Konsulatsgebühr liegt je nach Umfang bei etwa 30 bis 80 Euro. Dazu kommen mögliche Kosten für Dolmetscher oder notwendige Unterlagen."
      },
      {
        question: "Ich bin in Deutschland und kann nicht persönlich zum Konsulat. Was sind meine Optionen?",
        answer: "Sie können den Weg über den deutschen Notar wählen: Beurkundung auf Deutsch, dann Apostille und beglaubigte Übersetzung. Das ist aufwendiger, funktioniert aber ohne Konsulatsbesuch. Sprechen Sie uns an, wir begleiten Sie durch den Prozess."
      }
    ],
    faqTR: [
      {
        question: "Türkçe vekaletnameyi kendim tercüme edebilir miyim?",
        answer: "Hayır. Öz çeviri Türk kurumları tarafından kabul edilmez. Ya Türk konsolosluğunda düzenleme yaptırmalısınız ya da devlet yeminli tercüman onaylı çeviri kullanmalısınız."
      },
      {
        question: "Türkçe vekaletname ne kadar süre geçerlidir?",
        answer: "Kullanım amacına ve kuruma göre değişir. Gayrimenkul işlemlerinde pratikte genellikle 3–5 yıllık sınır uygulanır. İşlem öncesinde eski bir vekaleetnamenin kabul edilip edilmeyeceğini kontrol edin."
      },
      {
        question: "Almanya'da hangi konsolosluklar vekaletname düzenleyebilir?",
        answer: "Tüm Türk Başkonsoloslukları: Frankfurt, Berlin, Hamburg, Münih, Stuttgart, Karlsruhe, Mainz, Hannover, Düsseldorf, Köln, Nürnberg ve Münster."
      },
      {
        question: "Konsolosluğa bizzat gidemiyorum. Ne yapabilirim?",
        answer: "Alman noteri yolunu seçebilirsiniz: Almanca düzenleme, ardından apostil ve yeminli çeviri. Daha zahmetlidir ama konsolosluk ziyareti gerektirmez. Süreç için bize danışabilirsiniz."
      }
    ],
    ctaTitleDE: "Vollmacht auf Türkisch richtig aufsetzen",
    ctaTitleTR: "Türkçe Vekaletnameyi Doğru Hazırlayın",
    ctaDescriptionDE: "Wir formulieren Ihre Vekâletname auf Türkisch — zweckgebunden, rechtssicher und von türkischen Behörden anerkannt.",
    ctaDescriptionTR: "Amacınıza özel, Türk kurumlarınca kabul edilen Vekâletname metnini sizin için hazırlıyoruz."
  },

  // ─── POST 5: Mietrecht Mannheim ────────────────────────────────────────────
  {
    slug: "mietrecht-mannheim",
    slugDE: "mietrecht-mannheim",
    slugTR: "mannheim-kira-hukuku",
    titleDE: "Mietrecht Mannheim: Kündigung, Kaution und was Mieter wirklich wissen müssen",
    titleTR: "Mannheim'da Kira Hukuku: Fesih, Depozito ve Kiracıların Gerçekten Bilmesi Gerekenler",
    excerptDE: "Mietrecht in Mannheim: Wann ist eine Kündigung des Vermieters wirksam? Wie bekommen Sie Ihre Kaution zurück? Und welche Renovierungsklauseln müssen Mieter nicht erfüllen?",
    excerptTR: "Mannheim'da kira hukuku: Ev sahibinin feshi ne zaman geçerlidir? Depozitonuzu nasıl geri alırsınız? Hangi tamirat hükümleri kiracılar için bağlayıcı değildir?",
    contentDE: `Mietrecht ist das Rechtsgebiet, bei dem die meisten Menschen irgendwann einmal landen — ob als Mieter oder als Vermieter. In Mannheim, wo die Wohnungsnachfrage hoch ist, kommt es besonders häufig zu Streitigkeiten über Kündigungen, Kautionseinbehalte und Nebenkostenabrechnungen.

Ich erkläre Ihnen die wichtigsten Punkte ohne den üblichen Fachjargon.

## Kündigung durch den Vermieter: Was gilt?

Der Vermieter kann ein unbefristetes Mietverhältnis nicht einfach so kündigen. Er braucht immer einen gesetzlich anerkannten Grund.

**Eigenbedarf.** Der häufigste Kündigungsgrund. Der Vermieter oder ein naher Familienangehöriger möchte die Wohnung selbst nutzen. Die Kündigung muss schriftlich sein und den Eigenbedarf konkret benennen — wer zieht ein, aus welchem Grund. Pauschale Formulierungen reichen nicht.

**Erhebliche Pflichtverletzung.** Gemeint sind Dinge wie dauerhafter Mietrückstand von mehr als zwei Monatsmieten, schwere Ruhestörungen oder absichtliche Beschädigungen der Wohnung.

**Wirtschaftliche Verwertung.** Dieser Grund ist rechtlich komplex und in der Praxis selten erfolgreich. Der Vermieter muss nachweisen, dass er ohne Kündigung erhebliche wirtschaftliche Nachteile erleidet.

Ohne einen dieser Gründe ist die Kündigung unwirksam — auch wenn sie schriftlich ist.

### Kündigungsfristen in Mannheim

Die Kündigungsfrist richtet sich nach der Wohndauer:

- Bis zu 5 Jahren in der Wohnung: 3 Monate
- 5 bis 8 Jahre: 6 Monate
- Mehr als 8 Jahre: 9 Monate

Die Kündigung muss schriftlich beim Mieter ankommen — und zwar bis zum dritten Werktag des Monats, damit dieser Monat bei der Fristberechnung zählt.

### Widerspruch gegen die Kündigung

Wenn Ihnen die Kündigung zugestellt wurde, haben Sie in bestimmten Fällen das Recht auf Widerspruch — zum Beispiel wenn ein Umzug für Sie oder Familienangehörige aus gesundheitlichen Gründen unzumutbar ist, Sie keinen angemessenen Ersatzwohnraum in Mannheim finden oder Sie schon sehr lange in der Wohnung wohnen. Der Widerspruch muss schriftlich und spätestens 2 Monate vor Ablauf der Kündigungsfrist eingelegt werden.

## Die Kaution: Was der Vermieter darf und was nicht

Die Kaution darf höchstens drei Monatsnettokaltmieten betragen. Der Vermieter muss das Geld getrennt von seinem eigenen Vermögen anlegen — auf einem Treuhandkonto oder als gesondertes Sparbuch.

Nach dem Auszug hat er in der Regel bis zu sechs Monate Zeit, die Kaution abzurechnen und zurückzuzahlen. Er darf Teile einbehalten, wenn er konkrete, nachweisbare Ansprüche hat — etwa für tatsächliche Schäden (die über normale Abnutzung hinausgehen), offene Mietzahlungen oder ausstehende Betriebskostenposten.

**Normale Abnutzung** muss er hinnehmen. Das sind Dinge wie vergilbte Wände nach Jahren normalen Wohnens, leichte Kratzer im Parkett oder minimale Schäden, die beim gewöhnlichen Gebrauch entstehen.

Wenn die sechs Monate vergangen sind und keine Abrechnung kommt, können Sie auf Rückzahlung der gesamten Kaution klagen.

## Schönheitsreparaturen: Die meisten Klauseln sind unwirksam

Das überrascht viele Mieter. Sie glauben, am Ende der Mietzeit renovieren zu müssen — weil es im Vertrag steht. Aber der Bundesgerichtshof hat in einer Reihe von Entscheidungen festgelegt, dass viele solcher Klauseln unwirksam sind.

Unwirksam sind insbesondere:

Starre Renovierungsfristen. Wenn der Vertrag sagt "Die Küche ist alle 3 Jahre zu streichen", ist das ohne Rücksicht auf den tatsächlichen Zustand der Wohnung. Solche Klauseln sind nach der BGH-Rechtsprechung regelmäßig unwirksam.

Renovierungspflicht bei unrenovierten Wohnungen. Wer eine unrenovierte Wohnung bezogen hat, muss bei Auszug grundsätzlich nicht renovieren — egal was der Vertrag sagt.

Farbvorgaben. Klauseln, die bestimmte Farben oder Materialien vorschreiben, sind häufig unwirksam.

Was folgt daraus: Wenn Ihr Vertrag eine dieser Klauseln enthält, sollten Sie vor dem Auszug prüfen lassen, ob sie überhaupt gilt — bevor Sie Geld für eine Renovierung ausgeben, die Sie rechtlich nicht schulden.

## Nebenkostenabrechnung: Was der Vermieter verlangen darf

Die Nebenkostenabrechnung muss innerhalb von 12 Monaten nach Ende des Abrechnungszeitraums vorliegen. Kommt sie zu spät, verliert der Vermieter seinen Anspruch auf Nachzahlungen — auch wenn Sie tatsächlich zu wenig gezahlt hätten.

Welche Kosten umgelegt werden dürfen, ist in der Betriebskostenverordnung (BetrKV) abschließend geregelt. Was dort nicht steht — Verwaltungskosten, Instandhaltung, Reparaturen — darf nicht auf den Mieter umgelegt werden.

Als Mieter haben Sie das Recht, die Originalbelege zur Abrechnung einzusehen. Fragen Sie danach, wenn Ihnen etwas unklar ist.

## Mieterhöhung in Mannheim: Was ist erlaubt?

Der Vermieter kann die Miete nur bis zur ortsüblichen Vergleichsmiete erhöhen. In Mannheim ist das im Mannheimer Mietspiegel dokumentiert, den Sie online oder beim Amt für Stadtentwicklung abrufen können.

Dazu kommt die Kappungsgrenze: Innerhalb von drei Jahren darf die Miete maximal um 15 Prozent steigen. Mannheim gilt als Gebiet mit angespanntem Wohnungsmarkt, weshalb diese Grenze gilt.

Eine Mieterhöhung muss schriftlich begründet werden — mit Verweis auf den Mietspiegel oder Vergleichswohnungen. Ohne diese Begründung sind Sie nicht verpflichtet, die höhere Miete zu zahlen.

## Rechtsschutzversicherung oder Mieterverein?

Wenn Sie eine Rechtsschutzversicherung haben, sind viele mietrechtliche Streitigkeiten abgedeckt. Fragen Sie vorher bei Ihrer Versicherung an.

Der Mieterverein Mannheim bietet Mitgliedern Beratung zu einem Jahresbeitrag. Für einfache Fragen ist das eine günstige Option.

Wenn die Sache komplizierter ist — Eigenbedarfskündigung, einbehaltene Kaution, Diskriminierung — empfiehlt sich ein Rechtsanwalt für Mietrecht.`,
    contentTR: `Kira hukuku, er ya da geç herkesin karşılaştığı hukuk alanıdır — ister kiracı ister ev sahibi olsun. Konut talebinin yüksek olduğu Mannheim'da, fesih, depozito kesintileri ve yan gider hesaplamaları konularında çok sık anlaşmazlık yaşanıyor.

En önemli noktaları teknik jargon olmadan açıklıyorum.

## Ev Sahibinin Feshi: Hangi Kurallar Geçerli?

Ev sahibi, süresiz bir kira sözleşmesini gerekçesiz feshedemez. Her zaman yasal olarak tanınan bir gerekçeye ihtiyacı vardır.

**Kendi ihtiyacı (Eigenbedarf).** En yaygın fesih gerekçesi. Ev sahibi ya da bir yakın aile üyesi daireyi bizzat kullanmak istiyor. Fesih yazılı olmalı ve kimin neden taşınacağını somut biçimde belirtmelidir.

**Ağır yükümlülük ihlali.** İki aylık kirayı aşan süregelen borç, ciddi gürültü şikâyetleri ya da bilinçli zarar verme gibi durumlar.

Bu gerekçeler olmadan fesih, yazılı olsa bile geçersizdir.

### Mannheim'da Fesih Süreleri

Kirada kalma süresine göre:

- 5 yıla kadar: 3 ay
- 5–8 yıl: 6 ay
- 8 yıldan fazla: 9 ay

Fesih, ayın üçüncü iş günü akşamına kadar kiracıya ulaşmalıdır.

### Feshe İtiraz Hakkı

Bazı durumlarda feshe itiraz edebilirsiniz — sağlık sorunları nedeniyle taşınma olanaksız olduğunda, Mannheim'da makul alternatif konut bulamadığınızda ya da çok uzun süredir aynı dairede oturduğunuzda. İtiraz yazılı yapılmalı ve fesih süresinin bitmesinden en geç 2 ay önce ev sahibine iletilmelidir.

## Depozito: Ne Kadar, Ne Zaman Geri Alınır?

Depozito, aylık net kira bedelinin en fazla üç katı olabilir. Ev sahibi bu parayı kendi parasından ayrı tutmakla yükümlüdür.

Çıkıştan sonra ev sahibinin genellikle altı aya kadar depozitoyu hesaplayıp geri ödemesi gerekir. Somut, kanıtlanabilir talepleri varsa — gerçek hasar, açık kira borcu veya ek gider alacakları — bir kısmını mahsup edebilir.

**Normal yıpranmayı** kabul etmek zorundadır. Yıllarca normal yaşamadan kaynaklanan sararmış duvarlar, parkedeki hafif çizikler — bunlar kiracıya yüklenemez.

Altı ay geçip hesaplama gelmediyse, tüm depozito için geri ödeme davası açabilirsiniz.

## Kozmetik Tamirat: Sözleşmede Yazsa Bile Çoğu Hüküm Geçersiz

Bu pek çok kiracıyı şaşırtıyor. Sözleşmede yazıyor diye çıkarken zorunlu tamirat yapacaklarını sanıyorlar. Ancak Alman Federal Mahkemesi (BGH) pek çok kararında bu tür hükümlerin büyük çoğunluğunun geçersiz olduğunu hükme bağlamıştır.

Özellikle geçersiz olanlar:

Sabit tamirat süreleri. Sözleşme "mutfak her 3 yılda bir boyanacak" diyorsa, bu dairenin gerçek durumuna bakılmaksızın bir yükümlülük dayatmaktır — BGH içtihadına göre kural olarak geçersizdir.

Tadilatsız teslim alınan dairelerde çıkış tamiratı zorunluluğu. Tadilatsız bir daireyi devraldıysanız, sözleşme ne derse desin çıkışta tamirat yapmak zorunda değilsiniz.

Sonuç: Sözleşmenizde bu hükümler varsa, para harcamadan önce gerçekten bağlayıcı olup olmadığını bir avukata inceletin.

## Kira Artışı Mannheim'da Ne Kadar Olabilir?

Ev sahibi, kirayı yalnızca piyasa emsal kira bedeline kadar artırabilir. Mannheim'da bu rakam Mannheimer Mietspiegel'de belgelenmiştir.

Ayrıca üç yıllık dönemde kira artışı maksimum yüzde on beşle sınırlıdır. Mannheim, konut piyasasının gerilim altında olduğu bir bölge olarak bu sınıra tabidir.

Kira artışı talebi gerekçeli ve yazılı olmalıdır. Gerekçe yoksa artırılan kira bedelini ödemek zorunda değilsiniz.`,
    category: "tenant-law",
    categoryDE: "Mietrecht",
    image: realEstateImg,
    dateDE: "19. April 2026",
    dateTR: "19 Nisan 2026",
    readTimeDE: "9 Min. Lesezeit",
    readTimeTR: "9 dk okuma",
    publishedAt: "2026-04-19",
    keywordsDE: "mietrecht mannheim, kündigung mietrecht mannheim, kaution zurückfordern, schönheitsreparaturen unwirksam, mieterhöhung mannheim, eigenbedarfskündigung mannheim",
    keywordsTR: "mannheim kira hukuku, kiracı hakları almanya, depozito geri alma, fesih hakkı ev sahibi, kira artışı mannheim, tamirat zorunluluğu kira",
    faqDE: [
      {
        question: "Darf mein Vermieter mir kündigen, weil er die Wohnung verkaufen will?",
        answer: "Nicht direkt. Ein geplanter Verkauf ist kein eigenständiger Kündigungsgrund. Wenn der Käufer jedoch Eigenbedarf anmeldet, kann nach dem Kauf eine Eigenbedarfskündigung ausgesprochen werden — mit den gesetzlichen Fristen."
      },
      {
        question: "Mein Vermieter behält meine Kaution ohne Begründung ein. Was kann ich tun?",
        answer: "Fordern Sie schriftlich eine detaillierte Abrechnung. Gibt er keine oder eine unzureichende Begründung, können Sie auf Rückzahlung klagen. Die Beweislast für berechtigte Einbehalte liegt beim Vermieter."
      },
      {
        question: "Muss ich die Wohnung streichen, wenn ich ausziehe?",
        answer: "Nur wenn Ihr Mietvertrag eine wirksame Renovierungsklausel enthält. Viele Klauseln sind nach der BGH-Rechtsprechung unwirksam. Lassen Sie den Vertrag prüfen, bevor Sie investieren."
      },
      {
        question: "Was ist der Mannheimer Mietspiegel?",
        answer: "Der Mannheimer Mietspiegel ist eine Übersicht der ortsüblichen Vergleichsmieten in Mannheim, unterteilt nach Lage, Baujahr und Ausstattung. Er ist die Grundlage für Mieterhöhungsverlangen und kann beim Amt für Stadtentwicklung oder online abgerufen werden."
      },
      {
        question: "Wie lange habe ich nach dem Auszug Zeit, die Kaution zurückzufordern?",
        answer: "Die Verjährungsfrist für Kautionsrückforderungen beträgt in der Regel 3 Jahre, beginnend ab Ende des Jahres, in dem der Anspruch entstanden ist. Warten Sie aber nicht so lange — je früher Sie handeln, desto besser."
      }
    ],
    faqTR: [
      {
        question: "Ev sahibim satmak istediği için beni çıkarabilir mi?",
        answer: "Doğrudan değil. Satış planı başlı başına bir fesih gerekçesi değildir. Ancak yeni alıcı kendi ihtiyacını ileri sürerse, satışın ardından yasal süreler dahilinde fesih bildirimi yapılabilir."
      },
      {
        question: "Ev sahibim gerekçe belirtmeden depozitoyu kesiyor. Ne yapabilirim?",
        answer: "Yazılı olarak ayrıntılı hesaplama talep edin. Yeterli gerekçe sunmazsa geri ödeme davası açabilirsiniz. Kesintilerin haklılığını ispat yükü ev sahibine aittir."
      },
      {
        question: "Çıkarken daireyi boyatmak zorunda mıyım?",
        answer: "Yalnızca sözleşmenizde geçerli bir tamirat hükmü varsa. Birçok hüküm BGH içtihadına göre geçersizdir. Harcama yapmadan önce sözleşmenizi inceletin."
      },
      {
        question: "Mannheimer Mietspiegel nedir?",
        answer: "Mannheim'daki piyasa emsal kira bedellerini konum, yapım yılı ve donanım kategorisine göre gösteren bir kılavuzdur. Kira artışı taleplerinin dayanağıdır ve çevrimiçi ya da Stadtentwicklung ofisinden temin edilebilir."
      }
    ],
    ctaTitleDE: "Mietrechtliche Beratung in Mannheim",
    ctaTitleTR: "Mannheim'da Kira Hukuku Danışmanlığı",
    ctaDescriptionDE: "Kündigung bekommen? Kaution einbehalten? Renovierungsklausel im Vertrag? Wir prüfen Ihren Fall und erklären Ihre Rechte.",
    ctaDescriptionTR: "Fesih mi aldınız? Depozitonuz mu kesiliyor? Sözleşmede tamirat hükmü mü var? Durumunuzu inceler, haklarınızı açıklarız."
  },

  // ─── POST 6: Kind Türkei mitnehmen ────────────────────────────────────────
  {
    slug: "kind-tuerkei-mitnehmen-sorgerecht",
    slugDE: "kind-tuerkei-mitnehmen-sorgerecht",
    slugTR: "cocukla-turkiyeye-gitmek-velayet",
    titleDE: "Kann mein Kind alleine in die Türkei fliegen? Was Eltern mit Sorgerecht wissen müssen",
    titleTR: "Çocuğum Türkiye'ye Yalnız Uçabilir mi? Velayeti Olan Ebeveynlerin Bilmesi Gerekenler",
    excerptDE: "Kind in die Türkei mitnehmen mit Sorgerecht: Welche Dokumente braucht ein Kind, wann darf ein Elternteil allein reisen, und was passiert bei fehlenden Papieren am Flughafen?",
    excerptTR: "Velayetle çocuğu Türkiye'ye götürmek: Çocuğun hangi belgelere ihtiyacı var, hangi ebeveyn tek başına seyahat edebilir ve havalimanında eksik evrak olursa ne olur?",
    contentDE: `Istanbul, Flughafen Antalya, Sommer. Eine Mutter steht am Schalter mit ihrem siebenjährigen Sohn. Der Vater lebt in Deutschland, gemeinsames Sorgerecht. Sie hat kein schriftliches Einverständnis dabei. Der Beamte schlägt die Akte auf und erklärt ihr, dass das Kind so nicht einreisen kann.

Das ist kein Einzelfall. Es passiert jedes Jahr mehrfach — und meistens hätte man es mit einem Blatt Papier verhindern können.

## Was türkische Behörden bei Kindern verlangen

Die Türkei hat seit einigen Jahren strengere Kontrollen bei der Einreise von Kindern eingeführt, besonders wenn nur ein Elternteil dabei ist. Was konkret verlangt wird, variiert je nach Grenzbeamten und Flughafen — aber das sind die Unterlagen, die Sie vorbereiten sollten:

Wenn nur ein Elternteil reist: eine notariell beglaubigte Einverständniserklärung des anderen Elternteils, übersetzt ins Türkische. Der Reisepass des Kindes. Im besten Fall auch eine Kopie des Sorgerechtsurteils oder der Sorgerechtsurkunde.

Wenn das Kind alleine reist (zum Beispiel zu den Großeltern): Dann gelten noch strengere Regeln. Die Fluggesellschaft hat eigene Anforderungen (sogenanntes "Unaccompanied Minor"-Protokoll), und am türkischen Flughafen erwartet Sie in der Regel eine Person, die vorab offiziell angemeldet wurde.

## Reist das Kind mit beiden Elternteilen — kein Problem

Wenn Vater und Mutter gemeinsam reisen, gibt es in der Regel keine Schwierigkeiten. Türkische Grenzbehörden prüfen die Familienzugehörigkeit in solchen Fällen selten.

## Was "gemeinsames Sorgerecht" bei einer Türkeireise bedeutet

Das ist der Punkt, der viele Eltern überrascht. Wenn in Deutschland gemeinsames Sorgerecht gilt, bedeutet das: Beide Elternteile müssen einer Auslandsreise des Kindes grundsätzlich zustimmen. Das steht nicht explizit im Gesetz — aber es folgt daraus, dass eine längere Auslandsreise eine "wesentliche Angelegenheit" des Kindes ist.

Für kurze Urlaubsreisen (ein paar Wochen) wird das in Deutschland in der Praxis nicht so streng gehandhabt. Aber türkische Behörden schauen auf türkisches Recht — und die sind strenger.

**Was Sie konkret tun sollten:** Holen Sie vor jeder Reise in die Türkei die schriftliche Zustimmung des anderen Elternteils. Lassen Sie diese beim Notar beglaubigen und ins Türkische übersetzen. Das klingt aufwendig, ist aber ein Nachmittag Arbeit — und erspart Ihnen eine Situation wie die am Antalya-Flughafen.

## Was wenn der andere Elternteil die Zustimmung verweigert?

Das ist leider kein seltenes Szenario. Der andere Elternteil verweigert die Unterschrift, obwohl die Reise völlig harmlos ist — Sommerferien bei den Großeltern, Familientreffen.

In diesem Fall können Sie beim Familiengericht eine einstweilige Verfügung beantragen, mit der das Gericht die fehlende Zustimmung ersetzt. Das geht schneller als viele denken — in dringenden Fällen auch ohne langen Prozess.

## Was, wenn ein Elternteil das Kind ohne Zustimmung in die Türkei bringt?

Dann wird die Situation juristisch ernst.

Wenn ein Elternteil das Kind ohne Wissen oder Zustimmung des anderen in die Türkei bringt und es dort behält, ist das nach deutschem und türkischem Recht eine internationale Kindesentführung — auch wenn es sich um den leiblichen Vater oder die leibliche Mutter handelt.

Das Haager Kindesentführungsübereinkommen (HKÜ) regelt die Rückführung zwischen Deutschland und der Türkei. Beide Länder haben es unterzeichnet. Die Praxis ist aber nicht einfach: Türkische Gerichte müssen der Rückführung zustimmen, und das kann dauern.

Wenn Sie in dieser Situation sind: Handeln Sie sofort. Jede Woche, die vergeht, macht die Rückführung schwieriger — weil Gerichte nach längerer Zeit stärker das "Wohlbefinden des Kindes in der aktuellen Umgebung" gewichten.

## Kann ein Kind alleine in die Türkei fliegen?

Ja — aber mit klaren Rahmenbedingungen.

Fluggesellschaften haben eigene "Unaccompanied Minor"-Protokolle (UM-Protokoll). Bei den meisten Airlines können Kinder ab 5 oder 6 Jahren alleine fliegen, wenn sie als begleitetes Einzelkind angemeldet werden. Das kostet meistens eine zusätzliche Gebühr, und das Kind wird vom Personal betreut.

Am türkischen Zielflughafen muss jemand das Kind abholen — und diese Person muss vorab namentlich bekannt sein. Türkische Behörden prüfen das in der Regel streng.

Beide Elternteile müssen bei gemeinsamem Sorgerecht zustimmen, dass das Kind alleine fliegt. Das ist keine formale Frage — es ist eine echte Anforderung.

## Was wenn das Kind nur die türkische Staatsangehörigkeit hat?

Türkische Staatsangehörige können mit türkischem Pass in die Türkei einreisen. Aber auch hier gelten die Regeln: Ein Kind alleine oder mit nur einem Elternteil braucht — je nach Konstellation — die Nachweise über Sorgerecht und Einverständnis des anderen Elternteils.`,
    contentTR: `İstanbul, Antalya Havalimanı, yaz. Bir anne yedi yaşındaki oğluyla gişede bekliyor. Baba Almanya'da, müşterek velayet var. Annenin yanında yazılı bir izin yok. Görevli dosyasına bakıyor ve çocuğun bu şekilde giriş yapamayacağını söylüyor.

Bu münferit bir vaka değil. Her yıl birkaç kez yaşanıyor — ve çoğu zaman tek bir sayfa kağıt yeterli olurdu.

## Türk Makamları Çocuklardan Ne İstiyor?

Türkiye, özellikle yalnızca bir ebeveynin refakat ettiği durumlarda çocukların girişinde son yıllarda denetimleri sıkılaştırdı. Tam olarak ne istendiği sınır görevlisine ve havalimanına göre değişebilir — ancak şu belgeleri hazır bulundurmalısınız:

Yalnızca bir ebeveyn seyahat ediyorsa: Diğer ebeveynin noter onaylı, Türkçe tercüme edilmiş muvafakatname belgesi. Çocuğun pasaportu. Mümkünse velayet kararının bir kopyası.

Çocuk tek başına seyahat ediyorsa: Kurallar daha da sıkıdır. Havayolunun kendi "Refakatsiz Küçük" protokolü (Unaccompanied Minor) geçerlidir; Türk havalimanında önceden resmi olarak bildirilen bir kişi çocuğu karşılamak zorundadır.

## Müşterek Velayet Türkiye Seyahatinde Ne Anlama Gelir?

Bu, pek çok ebeveyni şaşırtan noktadır. Almanya'da müşterek velayet geçerliyse her iki ebeveynin çocuğun yurt dışı seyahatine onay vermesi gerekir. Türk makamları Türk hukukuna göre değerlendirir — ve bu konuda daha katıdır.

**Pratik tavsiye:** Her Türkiye seyahatinden önce diğer ebeveynin yazılı onayını alın. Noterde onaylayıp Türkçeye çevirin. Kulağa zahmetli geliyor ama bir öğleden sonralık iş — ve Antalya Havalimanı'ndaki durumu yaşamamanızı sağlar.

## Diğer Ebeveyn Onay Vermiyorsa Ne Olur?

Ne yazık ki nadir değil. Aile mahkemesinden ihtiyati tedbir talep edebilirsiniz; mahkeme eksik onayın yerine geçen kararı verebilir. Acil durumlarda uzun bir dava beklemek gerekmez.

## Bir Ebeveyn Çocuğu İzinsiz Türkiye'ye Götürürse Ne Olur?

Hukuki açıdan ciddi bir duruma girilir. Diğer ebeveynin haberi veya onayı olmadan çocuğun Türkiye'ye götürülmesi ve orada tutulması — biyolojik ebeveyn olsa bile — Alman ve Türk hukukuna göre uluslararası çocuk kaçırma sayılır.

Lahey Sözleşmesi Almanya ve Türkiye arasında iade sürecini düzenler. Her iki ülke de sözleşmeyi imzalamıştır. Ancak pratikte: Türk mahkemelerinin iade onaylaması zaman alabilir ve ne kadar uzun beklenir se o kadar zorlaşır.

## Çocuk Tek Başına Türkiye'ye Uçabilir mi?

Evet — ancak net çerçeveler dahilinde.

Havayollarının kendi "Refakatsiz Küçük" protokolleri vardır. Çoğu havayolunda 5 veya 6 yaşından itibaren çocuklar kayıtlı refakatsiz yolcu olarak uçabilir; personel gözetim altında tutar.

Türk varış havalimanında birinin çocuğu karşılaması şarttır — ve bu kişinin önceden bildirilmesi gerekir.

Müşterek velayette her iki ebeveyn de çocuğun tek başına uçmasına onay vermelidir.`,
    category: "family-law",
    categoryDE: "Familienrecht",
    image: jointCustodyImg,
    dateDE: "19. April 2026",
    dateTR: "19 Nisan 2026",
    readTimeDE: "8 Min. Lesezeit",
    readTimeTR: "8 dk okuma",
    publishedAt: "2026-04-19",
    keywordsDE: "kind türkei mitnehmen, sorgerecht türkei reise, kind alleine türkei fliegen, einverständniserklärung türkei kind, kindesentführung türkei sorgerecht",
    keywordsTR: "cocuk turkiyeye gotürmek velayet, turkiye seyahat velayet izin, refakatsiz küçük uçuş, çocuk kaçırma türkiye almanya",
    faqDE: [
      {
        question: "Was brauche ich, wenn ich mit meinem Kind alleine in die Türkei fliege?",
        answer: "Eine notariell beglaubigte Einverständniserklärung des anderen Elternteils, übersetzt ins Türkische, dazu der Reisepass des Kindes. Im besten Fall auch eine Kopie des Sorgerechtsurteils. Was genau am Flughafen verlangt wird, variiert — aber mit diesen Dokumenten sind Sie auf der sicheren Seite."
      },
      {
        question: "Mein Ex verweigert die Zustimmung zur Türkeireise. Was kann ich tun?",
        answer: "Sie können beim Familiengericht beantragen, dass das Gericht die fehlende Zustimmung ersetzt. Das geht in dringenden Fällen auch mit einer einstweiligen Verfügung, ohne langes Verfahren."
      },
      {
        question: "Was gilt, wenn das Kind nur die türkische Staatsangehörigkeit hat?",
        answer: "Das Kind kann mit türkischem Pass einreisen. Die Regeln zu Sorgerecht und Einverständnis des anderen Elternteils gelten trotzdem — Staatsangehörigkeit ändert nichts an den Anforderungen der Grenzbehörden."
      },
      {
        question: "Meine Ex-Frau hat das Kind in die Türkei mitgenommen und kommt nicht zurück. Was tue ich?",
        answer: "Handeln Sie sofort. Kontaktieren Sie einen Anwalt und stellen Sie über das Bundesamt für Justiz einen Rückführungsantrag nach dem Haager Kindesentführungsübereinkommen. Je schneller, desto besser — türkische Gerichte gewichten nach längerer Zeit die aktuelle Lebenssituation des Kindes stärker."
      }
    ],
    faqTR: [
      {
        question: "Çocuğumla tek başıma Türkiye'ye uçarken ne gerekiyor?",
        answer: "Diğer ebeveynin noter onaylı, Türkçe çevrilmiş muvafakatnamesi ve çocuğun pasaportu. Mümkünse velayet kararının kopyası. Tam olarak ne istendiği havalimanına göre değişebilir ancak bu belgelerle güvende olursunuz."
      },
      {
        question: "Eski eşim Türkiye seyahatine onay vermiyor. Ne yapabilirim?",
        answer: "Aile mahkemesinden eksik onayın yerine geçen karar talep edebilirsiniz. Acil durumlarda uzun dava beklemeksizin ihtiyati tedbir mümkündür."
      },
      {
        question: "Eski eşim çocuğu Türkiye'ye götürdü ve geri dönmüyor. Ne yapmalıyım?",
        answer: "Derhal harekete geçin. Bir avukata danışın ve Federal Adalet Dairesi aracılığıyla Lahey Sözleşmesi kapsamında iade talebi başlatın. Ne kadar hızlı olursanız o kadar iyi — Türk mahkemeleri zaman geçtikçe çocuğun mevcut yaşam ortamına daha fazla ağırlık verir."
      }
    ],
    ctaTitleDE: "Fragen zur Türkeireise mit Kind",
    ctaTitleTR: "Çocukla Türkiye Seyahati Hakkında Sorularınız mı Var?",
    ctaDescriptionDE: "Einverständniserklärung, Sorgerecht, Rückführungsantrag — wir kennen beide Rechtssysteme und helfen auf Deutsch und Türkisch.",
    ctaDescriptionTR: "Muvafakatname, velayet, iade talebi — her iki hukuk sistemini bilen ekibimiz Almanca ve Türkçe yardımcı olmaktadır."
  },

  // ─── POST 7: Was kostet ein Anwalt für türkisches Recht ────────────────────
  {
    slug: "was-kostet-anwalt-tuerkisches-recht",
    slugDE: "was-kostet-anwalt-tuerkisches-recht",
    slugTR: "turk-hukuku-avukat-ucretleri",
    titleDE: "Was kostet ein Anwalt für türkisches Recht? Die ehrliche Antwort",
    titleTR: "Türk Hukuku için Avukat Ücreti Ne Kadar? Dürüst Yanıt",
    excerptDE: "Was kostet ein Anwalt für türkisches Recht wirklich? Stundensatz, Pauschalgebühren, Prozesskostenhilfe — niemand veröffentlicht das. Wir tun es.",
    excerptTR: "Türk hukuku için avukat gerçekten ne kadar tutar? Saatlik ücret, sabit ücretler, dava yardımı — kimse bunu yayımlamıyor. Biz yapıyoruz.",
    contentDE: `Die meisten Menschen googeln das privat und finden: nichts Konkretes. Anwaltskanzleien veröffentlichen keine Preislisten. Ratgeberseiten weichen aus. Also fragt man nicht — und geht vielleicht gar nicht erst zum Anwalt, weil man nicht weiß, ob man es sich leisten kann.

Das ist schade. Denn die Antwort ist nicht so komplex, wie viele denken.

## Wie Anwaltsgebühren in Deutschland funktionieren

Anwälte in Deutschland berechnen ihre Gebühren entweder nach dem Rechtsanwaltsvergütungsgesetz (RVG) oder nach Zeitaufwand oder einer Vereinbarung über Pauschalgebühren.

Das RVG gibt es seit Jahrzehnten. Es legt fest, wie viel ein Anwalt für bestimmte Tätigkeiten berechnen darf — abhängig vom Streit- oder Gegenstandswert. Bei einer Scheidung mit einem Gegenstandswert von 20.000 Euro ergibt sich daraus ein bestimmter Betrag. Bei einer Erbschaftsangelegenheit mit einem Nachlass von 80.000 Euro ein anderer.

Der Vorteil des RVG: Gebühren sind vorhersehbar. Der Nachteil: Bei kleinen Streitwerten kann das RVG für den Anwalt zu wenig ergeben — weshalb viele lieber Stundensätze vereinbaren.

## Was kostet eine Erstberatung zu türkischem Recht?

Die Erstberatungsgebühr ist gesetzlich auf maximal 190 Euro zuzüglich Mehrwertsteuer begrenzt. Das gilt unabhängig davon, ob es um deutsches oder türkisches Recht geht.

In der Praxis verlangen viele Anwälte weniger — 80 bis 150 Euro für ein einstündiges Gespräch ist ein realistischer Bereich. Manche bieten eine kostenlose Kurzberatung von 15 bis 20 Minuten an.

Mit Beratungshilfe (wenn Ihr Einkommen unter einer bestimmten Grenze liegt) zahlen Sie nur 15 Euro — für Erstberatungen zu türkischem Recht wie zu jedem anderen Rechtsgebiet.

## Was kosten konkrete Leistungen? Eine ehrliche Übersicht

**Vollmacht auf Türkisch formulieren lassen:** Für einen Anwalt, der den türkischen Text der Vekâletname nach türkischem Recht verfasst, liegen die Kosten typischerweise zwischen 100 und 300 Euro — je nach Umfang und Komplexität.

**Tanıma-Tenfiz-Verfahren begleiten (Anerkennung eines deutschen Urteils in der Türkei):** Das ist ein mehrstufiger Prozess — Antrag beim türkischen Gericht, Koordination mit türkischen Kollegen, Übersetzungen. Realistisch: 500 bis 1.500 Euro für die anwaltliche Begleitung in Deutschland, dazu kommen türkische Anwalts- und Gerichtskosten.

**Erbschaftsangelegenheit in der Türkei (Veraset ilamı, Grundbuchübertragung):** Kommt stark auf die Größe des Nachlasses und die Anzahl der Erben an. Für eine einfache Erbschaftsabwicklung ohne Streit: 400 bis 800 Euro für die anwaltliche Beratung in Deutschland. Hinzu kommen die türkischen Notarkosten und Grundbuchgebühren.

**Scheidungsverfahren mit türkischem Bezug:** Eine Scheidung in Deutschland mit anschließendem Tanıma-Tenfiz-Verfahren in der Türkei kostet mehr als eine rein deutsche Scheidung. RVG-Gebühren für die deutsche Scheidung: 1.500 bis 3.000 Euro (je nach Streitwert). Das türkische Verfahren kommt separat dazu.

**Sorgerechtsstreit mit Türkeibezug:** Das ist einer der teuersten Bereiche — weil er oft eskaliert, Gutachten erfordert und sich über lange Zeit zieht. Reine Anwaltskosten in Deutschland können schnell 3.000 bis 8.000 Euro erreichen, bei streitigen Verfahren auch mehr.

## Wann zahlt die Rechtsschutzversicherung?

Wenn Sie eine Rechtsschutzversicherung haben, deckt sie in der Regel Familienrechts- und Mietrechtssachen — aber nicht immer. Prüfen Sie Ihren Vertrag: Manche Policen schließen Scheidungsverfahren explizit aus. Und internationale Sachverhalte (türkisches Recht) sind manchmal ausgenommen oder erfordern eine separate Deckungsanfrage.

Rufen Sie vor dem Anwalttermin bei Ihrer Versicherung an und lassen Sie sich die Deckung schriftlich bestätigen.

## Wann gibt es Prozesskostenhilfe?

Wenn Ihr Einkommen und Vermögen unterhalb bestimmter Grenzen liegt, können Sie beim Gericht Prozesskostenhilfe beantragen. Das Gericht übernimmt dann die Gerichts- und Anwaltskosten ganz oder teilweise. Die Prozesskostenhilfe gilt auch für Verfahren mit Bezug zu türkischem Recht — solange das Verfahren in Deutschland stattfindet.

## Die ehrlichste Antwort

Was ein Anwalt für türkisches Recht kostet, hängt davon ab, was Sie brauchen. Für eine einfache Beratung oder die Formulierung einer Vollmacht zahlen Sie wenig — 100 bis 300 Euro. Für ein langes Gerichtsverfahren mit türkischem Bezug können es mehrere tausend Euro werden.

Was keine Kanzlei vorab sagen kann: wie komplex Ihr Fall wird. Manche Erbschaftssachen sind in zwei Beratungsgesprächen erledigt. Andere enden im Streit zwischen mehreren Erben und dauern Jahre.

Am besten: Vereinbaren Sie eine Erstberatung, schildern Sie Ihren Fall und fragen Sie direkt nach den zu erwartenden Kosten. Ein seriöser Anwalt gibt Ihnen eine ehrliche Einschätzung.`,
    contentTR: `Çoğu insan bunu özel olarak araştırır ve şunu bulur: somut hiçbir şey. Hukuk büroları fiyat listesi yayımlamaz. Rehber siteler yanıt vermekten kaçınır. Sonunda sormaktan vazgeçilir — ve belki hiç avukata gidilmez, çünkü karşılanıp karşılanamayacağı bilinmez.

Bu üzücü. Çünkü yanıt, çoğunun düşündüğü kadar karmaşık değil.

## Almanya'da Avukat Ücretleri Nasıl Hesaplanır?

Almanya'daki avukatlar ücretlerini ya Avukatlık Ücret Kanunu'na (RVG) ya saatlik hesaba ya da sabit ücret anlaşmasına göre belirler.

RVG on yıllardır geçerlidir. Belirli işlemler için avukatın talep edebileceği tutarı — dava değerine bağlı olarak — belirler. 20.000 Euro değerindeki bir boşanma davası belirli bir ücret doğurur. 80.000 Euro'luk bir miras için farklı bir ücret.

## Türk Hukukuyla İlgili İlk Danışma Ne Kadar Tutar?

İlk danışma ücreti yasal olarak maksimum 190 Euro + KDV ile sınırlıdır. Bu, Türk ya da Alman hukuku fark etmeksizin geçerlidir.

Pratikte birçok avukat daha az alır — saatlik bir görüşme için 80 ile 150 Euro arası gerçekçi bir aralıktır. Beratungshilfe belgeniz varsa yalnızca 15 Euro ödersiniz.

## Somut Hizmetler Ne Kadar Tutar? Dürüst Bir Genel Bakış

**Türkçe vekaletname metni hazırlatmak:** Türk hukukuna göre Vekâletname metni hazırlayan bir avukat için genellikle 100 ile 300 Euro arasında ücret ödenir — kapsamına ve karmaşıklığına bağlı olarak.

**Tanıma-Tenfiz sürecini yönetmek:** Çok aşamalı bir süreçtir. Almanya'daki avukatlık danışmanlığı için gerçekçi beklenti: 500 ile 1.500 Euro. Türkiye'deki avukat ve mahkeme masrafları ayrıca eklenir.

**Türkiye'deki miras işlemleri:** Mirasın büyüklüğüne ve mirasçı sayısına göre önemli ölçüde değişir. Çekişmesiz basit bir miras için Almanya'daki danışmanlık: 400 ile 800 Euro. Türk noter ve tapu ücretleri ayrıca hesaba katılmalıdır.

**Türkiye bağlantılı boşanma:** RVG'ye göre Almanya'daki boşanma: 1.500 ile 3.000 Euro (dava değerine bağlı). Türkiye'deki Tanıma-Tenfiz davası ayrıca eklenir.

**Türkiye bağlantılı velayet uyuşmazlığı:** En pahalı alanlardan biridir. Türkiye bağlantılı çekişmeli davalarda Almanya'daki avukatlık masrafları hızla 3.000 ile 8.000 Euro'ya, hatta üzerine çıkabilir.

## Dürüst Yanıt

Türk hukuku için avukat ücreti neye ihtiyacınız olduğuna bağlıdır. Basit bir danışma veya vekaletname için az ödersiniz — 100 ile 300 Euro. Türkiye bağlantılı uzun bir dava süreci birkaç bin Euro'ya ulaşabilir.

En iyi yol: İlk görüşmeyi ayarlayın, durumunuzu anlatın ve beklenen masrafları doğrudan sorun. Ciddi bir avukat dürüst bir değerlendirme yapar.`,
    category: "legal-info",
    categoryDE: "Rechtsinformationen",
    image: criminalDefenseImg,
    dateDE: "19. April 2026",
    dateTR: "19 Nisan 2026",
    readTimeDE: "7 Min. Lesezeit",
    readTimeTR: "7 dk okuma",
    publishedAt: "2026-04-19",
    keywordsDE: "türkischer anwalt kosten, was kostet anwalt türkisches recht, anwaltskosten türkisches recht, erstberatung türkisches recht kosten, türkisches recht anwalt preis",
    keywordsTR: "türk hukuku avukat ücreti, avukat masrafları türk hukuku, ilk danışma ücreti türk avukat, vekâletname avukat ücret",
    faqDE: [
      {
        question: "Was kostet eine Erstberatung zu türkischem Recht?",
        answer: "Maximal 190 Euro plus Mehrwertsteuer — das ist der gesetzliche Höchstsatz nach dem RVG. Viele Anwälte verlangen weniger. Mit Beratungshilfeschein zahlen Sie nur 15 Euro."
      },
      {
        question: "Übernimmt die Rechtsschutzversicherung Kosten für türkisches Recht?",
        answer: "Das hängt von Ihrer Police ab. Manche decken internationale Sachverhalte, andere nicht. Rufen Sie vor dem Anwalttermin bei Ihrer Versicherung an und lassen Sie sich die Deckung schriftlich bestätigen."
      },
      {
        question: "Gibt es Prozesskostenhilfe für Verfahren mit türkischem Recht?",
        answer: "Ja, wenn das Verfahren in Deutschland stattfindet und Ihr Einkommen und Vermögen unter den gesetzlichen Grenzen liegt. Das gilt für alle Rechtsgebiete, auch wenn türkisches Recht eine Rolle spielt."
      },
      {
        question: "Warum veröffentlichen Anwälte keine Preislisten?",
        answer: "Weil die Kosten stark vom Einzelfall abhängen. Ein Anwalt kann vorab sagen, was eine Erstberatung kostet — aber nicht, wie komplex Ihr Fall wird. Fragen Sie direkt und lassen Sie sich eine ehrliche Einschätzung geben."
      }
    ],
    faqTR: [
      {
        question: "Türk hukukuyla ilgili ilk danışma ne kadar tutar?",
        answer: "RVG'ye göre yasal tavan 190 Euro + KDV'dir. Birçok avukat daha az alır. Beratungshilfe belgesiyle yalnızca 15 Euro ödersiniz."
      },
      {
        question: "Hukuki koruma sigortası Türk hukuku masraflarını karşılar mı?",
        answer: "Poliçenize bağlıdır. Bazıları uluslararası durumları kapsar, bazıları kapsamaz. Avukat randevusundan önce sigortanızı arayın ve kapsamı yazılı olarak teyit ettirin."
      },
      {
        question: "Avukatlar neden fiyat listesi yayımlamıyor?",
        answer: "Çünkü masraflar büyük ölçüde davaya özgüdür. Bir avukat ilk danışma ücretini önceden söyleyebilir — ancak davanızın ne kadar karmaşık olacağını bilemez. Doğrudan sorun ve dürüst bir değerlendirme isteyin."
      }
    ],
    ctaTitleDE: "Was kostet Ihr Fall? Fragen Sie uns.",
    ctaTitleTR: "Davanız Ne Kadar Tutar? Bize Sorun.",
    ctaDescriptionDE: "Wir sagen Ihnen beim ersten Gespräch ehrlich, was Sie für Ihren konkreten Fall erwarten können — ohne Überraschungen.",
    ctaDescriptionTR: "İlk görüşmede somut davanız için dürüstçe ne beklemeniz gerektiğini söylüyoruz — sürpriz yok."
  },

  // ─── POST 8: Türkisches Testament in Deutschland ───────────────────────────
  {
    slug: "tuerkisches-testament-deutschland",
    slugDE: "tuerkisches-testament-deutschland",
    slugTR: "turk-vasiyetnamesi-almanya",
    titleDE: "Mein Vater hat ein türkisches Testament gemacht. Gilt das auch in Deutschland?",
    titleTR: "Babam Türkçe Vasiyetname Yazdı. Bu Almanya'da da Geçerli mi?",
    excerptDE: "Türkisches Testament in Deutschland: Wann ist es gültig, wann nicht, und was müssen Erben in Deutschland sofort tun, wenn sie ein handgeschriebenes türkisches Dokument finden?",
    excerptTR: "Türk vasiyetnamesi Almanya'da: Ne zaman geçerli, ne zaman değil ve Almanya'daki mirasçılar el yazılı bir Türk belgesi bulduğunda hemen ne yapmalı?",
    contentDE: `Sie rufen in der Kanzlei an. Ihr Vater ist gestorben — in der Türkei oder in Deutschland, das variiert. Beim Durchsehen seiner Sachen finden Sie ein handgeschriebenes Dokument auf Türkisch. "Mein letzter Wille", steht oben. Darunter Namen, Immobilien, Konten, eine Unterschrift.

Ist das ein gültiges Testament? Gilt es in Deutschland? Was müssen Sie jetzt tun?

Das sind echte Fragen — und sie kommen häufig.

## Testamentsformen in der Türkei

Das türkische Recht kennt drei Testamentsformen:

Das notarielle Testament wird vor einem türkischen Notar in Anwesenheit von zwei Zeugen errichtet. Es ist die sicherste Form — weil der Notar die Identität des Erblassers prüft, den Text verliest und alles dokumentiert.

Das eigenhändige Testament — der türkische Begriff ist el yazılı vasiyetname — muss vollständig handgeschrieben, datiert und eigenhändig unterschrieben sein. Kein gedruckter Text, kein Computer. Ist auch nur ein Teil maschinell geschrieben, ist das gesamte Testament ungültig.

Das mündliche Testament gilt nur in echten Ausnahmesituationen: unmittelbare Todesgefahr, kein Notar erreichbar. Es erlischt automatisch, sobald die Gefahrensituation endet.

## Wann gilt ein türkisches Testament in Deutschland?

Das hängt davon ab, welches Erbrecht anwendbar ist — und das ist die erste Frage, die ein Anwalt stellt.

Seit 2015 gilt in Europa die EU-Erbrechtsverordnung Nr. 650/2012. Grundregel: Das Recht des Landes gilt, in dem der Erblasser zuletzt seinen gewöhnlichen Aufenthalt hatte.

Hat Ihr Vater zuletzt in Deutschland gelebt: deutsches Erbrecht gilt — sowohl für Vermögen in Deutschland als auch für Vermögen in der Türkei (mit Einschränkungen).

Hat er zuletzt in der Türkei gelebt: türkisches Erbrecht gilt.

Hat er ein eigenhändiges Testament nach türkischem Recht errichtet, das den Formanforderungen entspricht — vollständig handgeschrieben, datiert, unterschrieben — ist es grundsätzlich gültig. Ob ein deutsches Gericht oder Nachlassgericht es anerkennt, hängt dann davon ab, ob die Formalien stimmen.

## Was "gilt" konkret bedeutet

Selbst wenn das türkische Testament formal gültig ist, bedeutet das nicht, dass Sie in Deutschland damit direkt handeln können. Sie brauchen in der Regel:

Für Erbschaftsangelegenheiten in Deutschland einen deutschen Erbschein oder ein europäisches Nachlasszeugnis. Das türkische Testament alleine reicht dem deutschen Nachlassgericht meistens nicht.

Für Erbschaftsangelegenheiten in der Türkei einen türkischen Erbschein (Veraset ilamı). Das ist ein türkisches Gerichtsverfahren — und dafür brauchen Sie entweder selbst in der Türkei aktiv zu werden oder dort einen Anwalt zu bevollmächtigen.

## Was wenn das Testament Geschwister oder andere Erben benachteiligt?

Das ist ein heikler Punkt — und in türkisch-deutschen Familien häufig.

Im türkischen Erbrecht gibt es wie im deutschen einen gesetzlichen Pflichtteil (türkisch: saklı pay). Kinder haben Anspruch auf die Hälfte ihres gesetzlichen Erbteils, auch wenn das Testament ihnen weniger oder nichts zuweist.

Wenn ein türkisches Testament den Pflichtteil unterschreitet, können die übergangenen Erben eine Pflichtteilsergänzungsklage (tenkis davası) vor einem türkischen Gericht erheben. Diese Klage muss innerhalb bestimmter Fristen eingereicht werden — verstreicht die Frist, verfällt der Anspruch.

## Was tun Sie jetzt mit dem handgeschriebenen Dokument?

Lassen Sie es nicht liegen. Auch wenn Sie im Moment nicht wissen, was es bedeutet.

Erstens: Fotografieren Sie das Dokument und sichern Sie das Original.

Zweitens: Prüfen Sie, ob die Formerfordernisse erfüllt sind — vollständig handgeschrieben? Datiert? Unterschrieben? Wenn auch nur ein Teil gedruckt ist, ist das türkische Testament nach türkischem Recht ungültig.

Drittens: Sprechen Sie mit einem Anwalt, der türkisches Erbrecht kennt. Nicht weil Sie unbedingt streiten wollen — sondern weil Fristen laufen. Im türkischen Erbrecht gibt es Fristen für die Ausschlagung der Erbschaft, Fristen für die Anfechtung von Verfügungen und Fristen für Pflichtteilsklagen. Wer zu lange wartet, verliert Ansprüche, die er rechtlich hätte.

## Ein häufiges Missverständnis

Viele glauben: "Ein türkisches Testament regelt nur das Vermögen in der Türkei." Das stimmt nicht. Ein gültiges Testament kann grundsätzlich den gesamten Nachlass regeln — in der Türkei und in Deutschland — sofern das Erbrecht des richtigen Landes angewendet wird.

Das macht Nachlässe mit Bezug zu beiden Ländern komplex. Aber es bedeutet auch: Ein gut gemachtes Testament kann viel Streit verhindern.`,
    contentTR: `Büroyu arıyorsunuz. Babanız vefat etti — Türkiye'de mi Almanya'da mı, bu değişiyor. Eşyalarını incelerken Türkçe el yazılı bir belge buluyorsunuz. Üstte "Son irade ve vasiyetim" yazıyor. Altında isimler, taşınmazlar, hesaplar, bir imza.

Bu geçerli bir vasiyetname mi? Almanya'da geçerli mi? Şimdi ne yapmanız gerekiyor?

Bunlar gerçek sorular — ve sık soruluyorlar.

## Türkiye'de Vasiyetname Biçimleri

Türk hukuku üç vasiyetname biçimini tanır:

Resmi vasiyetname, Türk noterin huzurunda iki tanık eşliğinde düzenlenir. En güvenli biçimdir — noter kimliği doğrular, metni okur, her şeyi belgeler.

El yazılı vasiyetname — Türkçesi el yazılı vasiyetname — başından sonuna kadar tamamen el yazısıyla yazılmış, tarihli ve bizzat imzalı olmak zorundadır. Hiçbir basılı metin, hiçbir bilgisayar kabul edilmez. Tek bir bölüm bile makineyle yazılmışsa vasiyetin tamamı geçersizdir.

Sözlü vasiyetname yalnızca gerçek istisnai durumlarda geçerlidir: ölüm tehlikesi, noter ulaşılamıyor. Tehlike ortadan kalktığında otomatik olarak hükmünü yitirir.

## Türk Vasiyetnamesi Almanya'da Ne Zaman Geçerlidir?

Bu, hangi miras hukukunun uygulanacağına bağlıdır — bir avukatın sorduğu ilk soru budur.

2015'ten itibaren Avrupa'da AB Miras Tüzüğü No. 650/2012 geçerlidir. Temel kural: Miras bırakanın en son ikamet ettiği ülkenin hukuku uygulanır.

Babanız en son Almanya'da yaşıyorsa: Alman hukuku geçerlidir — hem Almanya'daki hem de Türkiye'deki mal varlığı için (bazı kısıtlamalarla).

Babanız en son Türkiye'de yaşıyorsa: Türk hukuku geçerlidir.

Türk hukukuna göre el yazılı vasiyetnamenin biçimsel gerekliliklerini karşılıyorsa — tamamen el yazısıyla yazılmış, tarihli, imzalı — prensipte geçerlidir.

## "Geçerli" Somut Olarak Ne Anlama Gelir?

Türk vasiyetnamesi biçimsel açıdan geçerli olsa bile Almanya'da bununla doğrudan işlem yapamazsınız. Genellikle şunlara ihtiyacınız olur:

Almanya'daki miras işlemleri için Alman miras belgesi (Erbschein) veya Avrupa Miras Sertifikası. Türk vasiyetnamesi tek başına Alman veraset mahkemesine genellikle yetmez.

Türkiye'deki miras işlemleri için Türk veraset ilamı. Bu bir Türk mahkeme sürecidir — ya bizzat Türkiye'de bulunmanız ya da orada bir avukatı yetkilendirmeniz gerekir.

## Vasiyetname Diğer Mirasçıları Mağdur Ediyorsa Ne Olur?

Bu hassas bir noktadır — ve Türk-Alman ailelerde sıkça karşılaşılır.

Türk miras hukukunda da Alman hukukunda olduğu gibi yasal saklı pay (saklı pay) vardır. Çocukların yasal miras payının yarısına hakkı vardır; vasiyetname onlara daha azını ya da hiçbir şey bırakmasa bile.

Türk vasiyetnamesi saklı payı ihlal ediyorsa, atlanan mirasçılar Türk mahkemesinde tenkis davası açabilir. Bu dava belirli süreler içinde açılmalıdır — süre geçerse hak düşer.

## El Yazılı Belgeyle Şimdi Ne Yapmalısınız?

Bırakmayın. Şu an ne anlama geldiğini bilmeseniz bile.

Birincisi: Belgeyi fotoğraflayın ve aslını saklayın.

İkincisi: Biçimsel gerekliliklerin karşılanıp karşılanmadığını kontrol edin — tamamen el yazısıyla mı? Tarihli mi? İmzalı mı? Tek bir bölüm bile yazıcıdan çıkmışsa Türk hukukuna göre geçersizdir.

Üçüncüsü: Türk miras hukukunu bilen bir avukatla görüşün. Mutlaka anlaşmazlık çıkacak diye değil — çünkü süreler işliyor. Mirası reddetmek için süreler var. Tasarruflara itiraz etmek için süreler var. Tenkis davası açmak için süreler var. Çok bekleyenler hukuken sahip oldukları hakları kaybeder.`,
    category: "inheritance-law",
    categoryDE: "Erbrecht",
    image: inheritanceLawImg,
    dateDE: "19. April 2026",
    dateTR: "19 Nisan 2026",
    readTimeDE: "8 Min. Lesezeit",
    readTimeTR: "8 dk okuma",
    publishedAt: "2026-04-19",
    keywordsDE: "türkisches testament deutschland, türkisches erbrecht deutschland, testament türkei gültig, el yazılı vasiyetname almanya, türkisches testament anerkennen",
    keywordsTR: "türk vasiyetnamesi almanya, el yazılı vasiyetname geçerli mi, türkiye almanya miras, tenkis davası almanya, türk miras hukuku",
    faqDE: [
      {
        question: "Gilt ein handgeschriebenes türkisches Testament automatisch in Deutschland?",
        answer: "Nicht automatisch. Es hängt davon ab, welches Erbrecht anwendbar ist, ob das Testament die Formerfordernisse erfüllt und ob ein deutsches Nachlassgericht es anerkennt. In der Regel brauchen Sie zusätzlich einen deutschen Erbschein oder ein europäisches Nachlasszeugnis."
      },
      {
        question: "Was passiert, wenn mein Vater in Deutschland lebte, aber ein türkisches Testament hinterlassen hat?",
        answer: "Wenn er zuletzt in Deutschland lebte, gilt nach der EU-Erbrechtsverordnung grundsätzlich deutsches Erbrecht. Das türkische Testament muss dann nach deutschen Maßstäben beurteilt werden — Form, Inhalt, Pflichtteilsrechte."
      },
      {
        question: "Mein Vater hat mir im Testament alles hinterlassen, mein Bruder geht leer aus. Ist das rechtens?",
        answer: "Nicht unbedingt. Sowohl das türkische als auch das deutsche Erbrecht kennen einen Pflichtteil. Ihr Bruder könnte Ansprüche haben, selbst wenn das Testament ihn nicht erwähnt. Dafür gibt es Fristen — handeln Sie schnell."
      },
      {
        question: "Wo reiche ich ein türkisches Testament in Deutschland ein?",
        answer: "Bei dem für den letzten Wohnsitz des Erblassers zuständigen Nachlassgericht (in der Regel das Amtsgericht). Das Gericht eröffnet das Testament und benachrichtigt die Erben."
      }
    ],
    faqTR: [
      {
        question: "El yazılı Türk vasiyetnamesi Almanya'da otomatik olarak geçerli midir?",
        answer: "Otomatik olarak geçerli değil. Hangi miras hukukunun uygulanacağına, vasiyetnamenin biçimsel gereklilikleri karşılayıp karşılamadığına ve Alman veraset mahkemesinin onu tanıyıp tanımayacağına bağlıdır. Genellikle ek olarak Alman miras belgesi (Erbschein) veya Avrupa Miras Sertifikası gerekir."
      },
      {
        question: "Babam bana her şeyi bıraktı, kardeşim vasiyette yok. Bu hukuka uygun mu?",
        answer: "Mutlaka değil. Hem Türk hem Alman hukuku saklı pay tanır. Kardeşinizin, vasiyetnamenin onu anmasa bile hakları olabilir. Bunun için süreler vardır — hızlı hareket edin."
      },
      {
        question: "Türk vasiyetnamesini Almanya'da nereye teslim etmem gerekiyor?",
        answer: "Miras bırakanın son ikametgahının bağlı olduğu veraset mahkemesine (genellikle Amtsgericht). Mahkeme vasiyetnameyi açar ve mirasçılara bildirir."
      }
    ],
    ctaTitleDE: "Türkisches Testament gefunden? Wir helfen.",
    ctaTitleTR: "Türk Vasiyetnamesi mi Buldunuz? Yardımcı Oluyoruz.",
    ctaDescriptionDE: "Türkisches Erbrecht in Deutschland — ein komplexes Thema mit echten Fristen. Sprechen Sie uns an, bevor Ansprüche verfallen.",
    ctaDescriptionTR: "Almanya'da Türk miras hukuku — gerçek süreleri olan karmaşık bir konu. Haklar düşmeden önce bize ulaşın."
  },

  // ─── POST 9: Scheidung Türkei Dauer und Kosten ─────────────────────────────
  {
    slug: "scheidung-tuerkei-dauer-kosten",
    slugDE: "scheidung-tuerkei-dauer-kosten",
    slugTR: "turkiyede-bosanma-suresi-maliyeti",
    titleDE: "Scheidung in der Türkei: Wie lange dauert es wirklich, und was kostet es?",
    titleTR: "Türkiye'de Boşanma: Gerçekte Ne Kadar Sürer ve Ne Kadar Tutar?",
    excerptDE: "Scheidung in der Türkei: 3 Monate oder 3 Jahre? Was kostet ein türkischer Anwalt, was das Gericht? Die direkte Antwort ohne Umschweife.",
    excerptTR: "Türkiye'de boşanma: 3 ay mı 3 yıl mı? Türk avukat ne kadar tutar, mahkeme ne kadar? Doğrudan yanıt.",
    contentDE: `Drei Monate bei einer einvernehmlichen Scheidung. Bis zu drei Jahre, wenn einer der Partner nicht kooperiert oder der Fall kompliziert ist.

Das ist die kurze Antwort auf die Frage nach der Dauer. Jetzt die längere.

## Wie eine Scheidung in der Türkei abläuft

Das türkische Familienrecht unterscheidet zwei Arten der Scheidung:

**Anlaşmalı boşanma — die einvernehmliche Scheidung.** Voraussetzung ist, dass die Ehe mindestens ein Jahr gedauert hat. Beide Partner müssen persönlich vor Gericht erscheinen — oder durch einen bevollmächtigten Anwalt vertreten sein — und einem gemeinsam ausgearbeiteten Scheidungsprotokoll (protokol) zustimmen. Darin stehen: Unterhalt, Sorgerecht, Umgang, Vermögensaufteilung.

Wenn das Protokoll vollständig ist und beide zustimmen, spricht der Richter die Scheidung in der Regel bei einem einzigen Termin aus. Gesamtdauer ab Einreichung: typischerweise 2 bis 4 Monate.

**Çekişmeli boşanma — die streitige Scheidung.** Wenn ein Partner die Scheidung ablehnt oder die Folgesachen nicht geregelt sind, wird es ein Gerichtsverfahren mit mehreren Terminen, oft Gutachten und manchmal Jahren Warterei. 1 bis 3 Jahre sind realistisch, in besonders streitigen Fällen auch länger.

## Was eine Scheidung in der Türkei kostet

Das ist die Frage, die viele stellen und auf die sie selten eine klare Antwort bekommen.

**Türkischer Anwalt.** Die türkische Anwaltskammer (Türkiye Barolar Birliği) gibt jährlich Mindestgebührentabellen heraus. Für eine einvernehmliche Scheidung liegen die Anwaltsgebühren in der Türkei typischerweise zwischen 5.000 und 15.000 türkischer Lira — je nach Anwalt, Kanzlei und Stadt. Das entspricht aktuell grob 130 bis 400 Euro (Stand 2026, Kurs kann variieren).

Für streitige Scheidungen steigen die Kosten erheblich — je nach Komplexität und Dauer des Verfahrens.

**Gerichtskosten.** Die türkischen Gerichtskosten für Scheidungen sind relativ niedrig — typischerweise unter 1.000 Lira für einfache Verfahren. Dazu kommen eventuell Kosten für Übersetzungen, Sachverständige oder Vollstreckungsmaßnahmen.

**Was in Deutschland dazukommt.** Wenn Sie in Deutschland leben und die Scheidung in der Türkei durchführen lassen, fallen in Deutschland Kosten für die Koordination mit dem türkischen Anwalt, die Übersetzung von Dokumenten und — falls nötig — ein Tanıma-Verfahren zur Anerkennung der türkischen Scheidung in Deutschland an. Das ist ein separates Verfahren vor einem deutschen Gericht, das in der Regel 300 bis 800 Euro kostet.

## Muss ich persönlich in die Türkei reisen?

Bei der einvernehmlichen Scheidung in der Regel nicht — wenn Sie einen türkischen Anwalt mit einer Vekâletname (Vollmacht) bevollmächtigen. Der Anwalt erscheint dann für Sie vor Gericht.

Bei der streitigen Scheidung kann das Gericht eine persönliche Anhörung anordnen. Ob das in Ihrem Fall nötig ist, hängt von den konkreten Umständen ab.

## Scheidung in der Türkei oder in Deutschland — was ist besser?

Das ist keine allgemeine Frage mit einer allgemeinen Antwort. Es hängt davon ab, wo Sie und Ihr Partner leben, wo Ihre Kinder sind, wo Ihr Vermögen ist und welche rechtlichen Konsequenzen die Scheidung haben soll.

Wenn Sie in Deutschland leben: Eine Scheidung in Deutschland ist in vielen Fällen einfacher, weil sie direkt in das deutsche System eingebettet ist. Die Anerkennung in der Türkei (Tanıma-Tenfiz) ist dann ein zusätzlicher Schritt.

Wenn Sie oder Ihr Partner in der Türkei leben: Eine Scheidung in der Türkei kann sinnvoller sein — weil das Urteil dort sofort vollstreckbar ist und keine separates Tanıma-Verfahren braucht.

Oft ist der entscheidende Faktor: Wo lebt das Kind? Das Gericht dort hat in der Regel die bessere Möglichkeit, Sorgerecht und Unterhalt zu regeln.

## Was mit einem türkischen Scheidungsurteil in Deutschland passiert

Ein türkisches Scheidungsurteil gilt in Deutschland nicht automatisch. Es muss in einem Anerkennungsverfahren nach § 107 FamFG von der zuständigen Landesjustizverwaltung anerkannt werden.

Das Verfahren ist bürokratisch, aber in der Regel nicht schwierig — wenn das türkische Urteil formal korrekt ist. Es dauert typischerweise 3 bis 6 Monate.

Ohne diese Anerkennung gilt man in Deutschland noch als verheiratet — auch wenn man in der Türkei rechtskräftig geschieden ist.`,
    contentTR: `Anlaşmalı boşanmada üç ay. Taraflardan biri işbirliği yapmıyorsa ya da dava karmaşıksa üç yıla kadar.

Süre sorusunun kısa yanıtı bu. Şimdi uzun yanıtı.

## Türkiye'de Boşanma Nasıl İşler?

Türk aile hukuku iki tür boşanmayı ayırt eder:

**Anlaşmalı boşanma.** Evliliğin en az bir yıl sürmüş olması gerekir. Her iki taraf mahkemede bizzat ya da vekâletname ile yetkilendirilen avukat aracılığıyla hazırlanan boşanma protokolünü onaylamalıdır. Protokolde nafaka, velayet, ziyaret hakkı ve mal paylaşımı yer alır.

Protokol eksiksiz ve her iki tarafın onayı mevcutsa, hâkim genellikle tek celsede boşanmayı hükme bağlar. Dilekçenin sunulmasından itibaren toplam süre: genellikle 2 ile 4 ay.

**Çekişmeli boşanma.** Taraflardan biri boşanmayı reddediyorsa ya da sonuçlar konusunda anlaşmazlık varsa, birden fazla duruşmalı, çoğu kez bilirkişi gerektiren ve bazen yıllara uzayan bir yargılama söz konusu olur. 1 ile 3 yıl gerçekçidir; özellikle çekişmeli davalarda daha uzun da sürebilir.

## Türkiye'de Boşanma Ne Kadar Tutar?

Pek çok kişinin sorduğu ve nadiren net yanıt aldığı soru budur.

**Türk avukatı.** Türkiye Barolar Birliği her yıl asgari ücret tarifesi yayımlar. Anlaşmalı boşanma için Türkiye'deki avukatlık ücretleri genellikle 5.000 ile 15.000 Türk Lirası arasında değişir — avukata, bürosu ve şehre göre. Bu, 2026 itibarıyla yaklaşık 130 ile 400 Euro'ya denk düşüyor (kur değişkendir).

Çekişmeli boşanmalarda masraflar karmaşıklığa ve süreye bağlı olarak önemli ölçüde artar.

**Mahkeme masrafları.** Türk mahkeme masrafları boşanma davaları için görece düşüktür — basit davalar için genellikle 1.000 Lira'nın altında. Buna çeviri, bilirkişi veya icra masrafları eklenebilir.

**Almanya'dan eklenecekler.** Almanya'da yaşıyorsanız ve boşanmayı Türkiye'de yaptırıyorsanız, Türk avukatıyla koordinasyon, belge çevirisi ve — gerekirse — Türk boşanma kararının Almanya'da tanınması için Tanıma davası masrafları eklenir. Bu ayrı bir Alman mahkeme sürecidir ve genellikle 300 ile 800 Euro tutar.

## Kişisel Olarak Türkiye'ye Gitmem Gerekiyor mu?

Anlaşmalı boşanmada genellikle gerekmiyor — Vekâletname ile bir Türk avukatı yetkilendirirseniz avukat mahkemede sizi temsil eder.

Çekişmeli boşanmada mahkeme bizzat dinleme isteyebilir. Bu somut koşullara bağlıdır.

## Türkiye'deki Boşanma Kararı Almanya'da Ne Anlama Gelir?

Türk boşanma kararı Almanya'da otomatik olarak geçerli değildir. § 107 FamFG kapsamında ilgili Eyalet Adalet İdaresi tarafından tanınması gerekir.

Süreç bürokratiktir ama Türk kararı biçimsel açıdan doğruysa genellikle güç değildir. Tipik olarak 3 ile 6 ay sürer.

Bu tanıma olmadan Türkiye'de kesinleşmiş boşanma kararı olsa bile Almanya'da hâlâ evli sayılırsınız.`,
    category: "family-law",
    categoryDE: "Familienrecht",
    image: divorceImg,
    dateDE: "19. April 2026",
    dateTR: "19 Nisan 2026",
    readTimeDE: "7 Min. Lesezeit",
    readTimeTR: "7 dk okuma",
    publishedAt: "2026-04-19",
    keywordsDE: "scheidung türkei dauer, scheidung türkei kosten, scheidung türkei wie lange, türkische scheidung anerkennung deutschland, anwalt scheidung türkei",
    keywordsTR: "türkiyede bosanma suresi, türkiyede bosanma masraflari, anlaşmalı boşanma türkiye, türk boşanma kararı almanya tanıma",
    faqDE: [
      {
        question: "Wie lange dauert eine einvernehmliche Scheidung in der Türkei?",
        answer: "Typischerweise 2 bis 4 Monate ab Einreichung des Antrags beim türkischen Familiengericht — vorausgesetzt, das Scheidungsprotokoll ist vollständig und beide Partner stimmen zu."
      },
      {
        question: "Muss ich für eine Scheidung in der Türkei persönlich dort erscheinen?",
        answer: "Bei einer einvernehmlichen Scheidung nicht zwingend — wenn Sie einen türkischen Anwalt per Vekâletname bevollmächtigen. Bei einer streitigen Scheidung kann das Gericht eine persönliche Anhörung anordnen."
      },
      {
        question: "Wie viel kostet ein türkischer Anwalt für eine Scheidung?",
        answer: "Für eine einvernehmliche Scheidung in der Türkei typischerweise 5.000 bis 15.000 türkische Lira — aktuell grob 130 bis 400 Euro. Für streitige Verfahren steigen die Kosten erheblich."
      },
      {
        question: "Gilt meine türkische Scheidung automatisch in Deutschland?",
        answer: "Nein. Ein türkisches Scheidungsurteil muss in Deutschland nach § 107 FamFG anerkannt werden. Das dauert in der Regel 3 bis 6 Monate. Ohne diese Anerkennung gelten Sie in Deutschland noch als verheiratet."
      },
      {
        question: "Ist es besser, in der Türkei oder in Deutschland zu scheiden?",
        answer: "Das hängt davon ab, wo Sie und Ihr Partner leben, wo die Kinder sind und wo das Vermögen liegt. Es gibt keine allgemeine Antwort. Ein Anwalt kann das für Ihren konkreten Fall einschätzen."
      }
    ],
    faqTR: [
      {
        question: "Türkiye'de anlaşmalı boşanma ne kadar sürer?",
        answer: "Türk aile mahkemesine dilekçe sunulmasından itibaren tipik olarak 2 ile 4 ay — boşanma protokolü eksiksizse ve her iki taraf onaylıyorsa."
      },
      {
        question: "Türkiye'deki boşanma için bizzat orada bulunmam gerekiyor mu?",
        answer: "Anlaşmalı boşanmada zorunlu değil — Vekâletname ile Türk avukatı yetkilendirirseniz avukat sizi mahkemede temsil eder. Çekişmeli boşanmada mahkeme bizzat dinleme isteyebilir."
      },
      {
        question: "Türk boşanma kararım Almanya'da otomatik geçerli mi?",
        answer: "Hayır. Türk boşanma kararı Almanya'da § 107 FamFG kapsamında tanınmalıdır. Genellikle 3 ile 6 ay sürer. Bu tanıma olmadan Almanya'da hâlâ evli sayılırsınız."
      }
    ],
    ctaTitleDE: "Scheidung in der Türkei — wir koordinieren beides",
    ctaTitleTR: "Türkiye'de Boşanma — İki Tarafı Birden Koordine Ediyoruz",
    ctaDescriptionDE: "Türkische Scheidung plus Anerkennung in Deutschland — wir kennen beide Systeme und beraten auf Deutsch und Türkisch.",
    ctaDescriptionTR: "Türk boşanması artı Almanya'da tanıma — her iki sistemi biliyor, Almanca ve Türkçe danışmanlık sunuyoruz."
  },

  // ─── POST 10: Erstberatung türkischer Anwalt ───────────────────────────────
  {
    slug: "tuerkischer-anwalt-mannheim-erstberatung",
    slugDE: "tuerkischer-anwalt-mannheim-erstberatung",
    slugTR: "mannheim-turk-avukat-ilk-gorusme",
    titleDE: "Beim ersten Gespräch mit einem türkischen Anwalt: Was bringt mir was?",
    titleTR: "Türk Bir Avukatla İlk Görüşmede: Neyi Nasıl Değerlendirmelisiniz?",
    excerptDE: "Türkischer Anwalt Mannheim Erstberatung: Was passiert im ersten Gespräch, welche Dokumente sollen Sie mitbringen, und woran erkennen Sie, ob ein Anwalt wirklich türkisches Recht beherrscht?",
    excerptTR: "Mannheim'da Türk avukatla ilk görüşme: İlk görüşmede neler olur, hangi belgeleri getirmeniz gerekir ve bir avukatın gerçekten Türk hukukunu bilip bilmediğini nasıl anlarsınız?",
    contentDE: `Die meisten Menschen gehen zum ersten Mal zu einem Anwalt, wenn die Lage schon etwas eskaliert ist. Dann ist man nervös, weiß nicht genau, was man sagen soll, und verlässt das Gespräch manchmal verwirrt — obwohl der Anwalt formell alles richtig gemacht hat.

Das muss nicht so sein. Hier erkläre ich, was bei der Erstberatung eines türkischen Anwalts passiert und wie Sie das Gespräch so führen, dass Sie am Ende wirklich wissen, wo Sie stehen.

## Was in einer Erstberatung passiert — realistisch beschrieben

Eine Erstberatung ist kein Beratungsgespräch im weiteren Sinne. Sie ist ein Erstgespräch zur Einschätzung. Das heißt: Der Anwalt hört zu, stellt Fragen, ordnet Ihren Fall rechtlich ein und erklärt, was aus seiner Sicht die sinnvollen nächsten Schritte sind.

Was er Ihnen am Ende eines guten Erstgesprächs sagen kann:
- Welches Recht auf Ihren Fall anwendbar ist
- Ob und welche Ansprüche Sie haben (oder gegen Sie bestehen könnten)
- Was realistische Optionen sind — und welche davon Zeit und Geld kostet
- Ob Sie überhaupt einen Anwalt brauchen oder ob sich die Sache anders lösen lässt

Was er Ihnen nicht versprechen wird — und wenn er es tut, sollten Sie vorsichtig sein: Garantien über den Ausgang. Kein seriöser Anwalt sagt "das gewinnen Sie sicher".

## Was Sie vorbereiten sollten

Je besser vorbereitet Sie kommen, desto mehr bekommen Sie aus dem Gespräch. Das bedeutet nicht: einen mehrseitigen Bericht schreiben. Es bedeutet: die wesentlichen Fakten im Kopf haben und relevante Dokumente dabei.

Für die meisten türkisch-deutschen Rechtsfragen hilft es, mitzubringen:

Personaldokumente. Ihren Personalausweis oder Reisepass, türkischen Nüfus-Auszug falls vorhanden. Bei Familiensachen die Heiratsurkunde, eventuell Geburtsurkunden der Kinder.

Relevante Schriftstücke. Wenn es um eine Erbschaft geht: das Testament, den türkischen Veraset-Bescheid, Tapu-Dokumente. Bei Scheidung: den Scheidungsbeschluss oder laufende Anträge. Bei einer Vollmacht: das bestehende Dokument.

Eine Zeitlinie. Wann ist was passiert? Wann hat Ihr Vater das Testament gemacht? Wann hat sich die Ehe getrennt? Wann kam der Brief vom Gericht? Das hilft dem Anwalt, Fristen zu erkennen.

## Woran erkennen Sie, ob ein Anwalt türkisches Recht wirklich beherrscht?

Das ist eine berechtigt schwierige Frage — weil "türkisches Recht" kein offizieller Fachanwaltstitel in Deutschland ist. Jeder Anwalt, der in Deutschland zugelassen ist, darf grundsätzlich über türkisches Recht beraten.

Was einen Unterschied macht:

Zulassung bei einer türkischen Rechtsanwaltskammer. Wenn ein Anwalt zusätzlich zu seiner deutschen Zulassung auch bei einer türkischen Barosu zugelassen ist, darf er in der Türkei vor Gericht auftreten. Das ist ein konkreter Hinweis auf echte Kenntnisse des türkischen Systems.

Erfahrung mit konkreten Verfahren. Fragen Sie: "Haben Sie schon ein Tanıma-Tenfiz-Verfahren begleitet? Haben Sie schon türkische Immobilien in einem Erbschaftsfall abgewickelt?" Antworten, die klar und konkret sind, sprechen für echte Praxiserfahrung.

Kommunikation. Kann der Anwalt auf Türkisch kommunizieren — mit Ihnen, aber auch mit türkischen Gerichten und Anwälten? Das ist kein reines Komfortmerkmal: Türkische Behörden kommunizieren auf Türkisch.

## Was Sie nach der Erstberatung wissen sollten

Wenn Sie nach einem einstündigen Gespräch nicht wissen, ob und wie Ihre Sache weitergeht, war das Gespräch nicht hilfreich genug. Das kann am Anwalt liegen — oder daran, dass Sie den Fall noch nicht vollständig geschildert haben.

Fragen Sie am Ende direkt: "Was ist der nächste Schritt für mich?" Und: "Was kostet dieser nächste Schritt ungefähr?"

Ein Anwalt, der auf diese Fragen ausweicht, macht sich keinen Gefallen.

## Türkischer Anwalt in Mannheim: Was die Doğru Kanzlei anbietet

Rechtsanwalt Hasan Doğru ist sowohl bei der Rechtsanwaltskammer Karlsruhe (§ 207 BRAO) als auch bei der Ankara Barosu zugelassen. Das bedeutet: Er ist berechtigt, in der Türkei vor Gericht aufzutreten, nicht nur zu beraten.

Die Erstberatung findet auf Deutsch oder Türkisch statt — je nachdem, was für Sie angenehmer ist. Im Anschluss bekommen Sie eine klare Einschätzung: was Ihre Lage rechtlich bedeutet, welche Optionen realistisch sind und was der nächste Schritt ist.`,
    contentTR: `Çoğu insan ilk kez avukata gittiğinde durum biraz tırmanmış oluyor. Sinirlisiniz, ne söyleyeceğinizi tam bilmiyorsunuz ve bazen görüşmeden daha da kafanız karışmış ayrılıyorsunuz — avukat biçimsel açıdan her şeyi doğru yapmış olsa da.

Bu böyle olmak zorunda değil. Burada, Türk bir avukatla ilk görüşmede neler yaşandığını ve görüşmeyi, çıkarken gerçekten nerede durduğunuzu bileceğiniz şekilde nasıl yönlendirebileceğinizi açıklıyorum.

## İlk Görüşmede Gerçekte Ne Olur?

İlk danışma geniş anlamda bir rehberlik görüşmesi değildir. İlk değerlendirme görüşmesidir. Avukat dinler, sorular sorar, davanızı hukuki açıdan sınıflandırır ve en uygun sonraki adımların neler olduğunu açıklar.

İyi bir ilk görüşmenin sonunda avukatın size söyleyebilecekleri:
- Davanıza hangi hukukun uygulanacağı
- Hangi haklarınız olduğu — ya da size karşı ne ileri sürülebileceği
- Gerçekçi seçeneklerin neler olduğu ve hangilerinin zaman ve para gerektirdiği
- Gerçekten avukata ihtiyacınız olup olmadığı ya da konunun başka türlü çözülüp çözülemeyeceği

Söylemeyeceği — ve söylüyorsa dikkatli olun: Sonucu garantilemek. Ciddi hiçbir avukat "bunu kesinlikle kazanırsınız" demez.

## Ne Hazırlamalısınız?

Ne kadar hazırlıklı gelirseniz görüşmeden o kadar çok şey alırsınız. Bu çok sayfalık rapor yazmak demek değil — önemli gerçekleri aklınızda tutmak ve ilgili belgeleri getirmek demek.

Çoğu Türk-Alman hukuki sorusu için şunları getirmeniz yardımcı olur:

Kimlik belgeleri. Pasaportunuz, varsa Türk nüfus cüzdanı ya da nüfus kaydı. Aile davalarında evlilik cüzdanı, mümkünse çocukların doğum belgeleri.

İlgili belgeler. Miras söz konusuysa: vasiyetname, Türk veraset ilamı, tapu belgeleri. Boşanma söz konusuysa: boşanma kararı ya da sürmekte olan talepler. Vekaletname söz konusuysa: mevcut belge.

Zaman çizelgesi. Ne zaman ne oldu? Babanız vasiyeti ne zaman yazdı? Evlilik ne zaman bozuldu? Mahkeme mektubu ne zaman geldi? Bu, avukatın süreleri fark etmesine yardımcı olur.

## Bir Avukatın Türk Hukukunu Gerçekten Bilip Bilmediğini Nasıl Anlarsınız?

Bu haklı ve zor bir sorudur — çünkü "Türk hukuku" Almanya'da resmi bir uzmanlık unvanı değildir. Almanya'da ruhsat sahibi her avukat prensipte Türk hukuku hakkında danışmanlık verebilir.

Fark yaratan şeyler:

Türk barosuna üyelik. Bir avukat Alman ruhsatına ek olarak bir Türk Barosu'na da kayıtlıysa, Türkiye'de mahkemede temsil yetkisine sahiptir. Bu, Türk sistemine dair gerçek bilginin somut bir göstergesidir.

Somut deneyim. Sorun: "Daha önce Tanıma-Tenfiz sürecini yürüttünüz mü? Miras davasında Türk tapu işlemlerini gerçekleştirdiniz mi?" Net ve somut yanıtlar gerçek pratik deneyimi gösterir.

İletişim. Avukat Türkçe iletişim kurabiliyor mu — sizinle, ama aynı zamanda Türk mahkeme ve avukatlarıyla? Bu yalnızca konfor meselesi değil: Türk kurumları Türkçe iletişim kurar.

## İlk Görüşmeden Sonra Ne Bilmeniz Gerekir?

Saatlik bir görüşmenin ardından davanızın nasıl ilerleyeceğini bilmiyorsanız, görüşme yeterince verimli değildi. Bu avukattan kaynaklanıyor olabilir — ya da davayı henüz tam olarak anlatmamış olabilirsiniz.

Sonunda doğrudan sorun: "Benim için bir sonraki adım ne?" Ve: "Bu adım yaklaşık ne kadar tutar?"

Bu sorudan kaçınan bir avukat kendine iyilik etmiyor.

## Mannheim'da Türk Avukat: Doğru Kanzlei Ne Sunuyor?

Avukat Hasan Doğru, hem Karlsruhe Barosu'na (§207 BRAO) hem de Ankara Barosu'na kayıtlıdır. Bu, yalnızca danışmanlık vermekle kalmayıp Türkiye'de mahkemede temsil yetkisine sahip olduğu anlamına gelir.

İlk görüşme Almanca veya Türkçe yapılır — hangisi sizin için daha rahatsanız. Ardından net bir değerlendirme alırsınız: hukuki durumunuz ne anlama geliyor, gerçekçi seçenekler neler ve bir sonraki adım ne.`,
    category: "legal-info",
    categoryDE: "Rechtsinformationen",
    image: criminalDefenseTurkeyImg,
    dateDE: "19. April 2026",
    dateTR: "19 Nisan 2026",
    readTimeDE: "8 Min. Lesezeit",
    readTimeTR: "8 dk okuma",
    publishedAt: "2026-04-19",
    keywordsDE: "türkischer anwalt mannheim, türkischer anwalt erstberatung, anwalt türkisches recht mannheim, türkischer rechtsanwalt erstgespräch, türkisch deutscher anwalt",
    keywordsTR: "mannheim türk avukat, türk avukat ilk görüşme, türk hukuku avukat mannheim, türk alman avukat ilk danışma",
    faqDE: [
      {
        question: "Was kostet die Erstberatung bei einem türkischen Anwalt in Mannheim?",
        answer: "Maximal 190 Euro plus Mehrwertsteuer nach dem RVG. Mit Beratungshilfeschein (beim Amtsgericht erhältlich) nur 15 Euro. Fragen Sie vorher, was konkret berechnet wird."
      },
      {
        question: "Was ist der Unterschied zwischen einem Anwalt mit türkischer Barosu-Zulassung und einem ohne?",
        answer: "Ein Anwalt mit Zulassung bei einer türkischen Barosu ist berechtigt, in der Türkei vor Gericht aufzutreten — nicht nur zu beraten. Das ist relevant, wenn Ihr Fall türkische Gerichtsverfahren erfordert, zum Beispiel Tanıma-Tenfiz oder türkische Erbschaftsangelegenheiten."
      },
      {
        question: "Welche Dokumente soll ich zur Erstberatung mitbringen?",
        answer: "Personalausweis oder Reisepass, türkischer Nüfus-Auszug falls vorhanden, und alle Dokumente, die direkt mit Ihrem Anliegen zusammenhängen — Testament, Scheidungsbeschluss, Mietvertrag, Vollmacht. Eine kurze Zeitlinie der Ereignisse hilft dem Anwalt, schneller einzusteigen."
      },
      {
        question: "Kann ich die Erstberatung auch auf Türkisch führen?",
        answer: "Bei der Doğru Kanzlei ja. Das Gespräch findet auf Deutsch oder Türkisch statt — je nachdem, was für Sie angenehmer ist."
      }
    ],
    faqTR: [
      {
        question: "Mannheim'da Türk avukatla ilk görüşme ne kadar tutar?",
        answer: "RVG'ye göre maksimum 190 Euro + KDV. Beratungshilfe belgesiyle yalnızca 15 Euro. Önceden ne kadar ücret alındığını sormanızı öneririm."
      },
      {
        question: "Türk barosuna kayıtlı avukat ile kayıtsız arasındaki fark nedir?",
        answer: "Türk barosuna kayıtlı avukat Türkiye'de mahkemede temsil yetkisine sahiptir — yalnızca danışmanlık vermekle kalmaz. Tanıma-Tenfiz veya Türkiye'deki miras işlemleri gibi Türk mahkeme süreçleri gerekiyorsa bu önemlidir."
      },
      {
        question: "İlk görüşmeye hangi belgeleri getirmeliyim?",
        answer: "Pasaport veya kimlik belgesi, varsa Türk nüfus cüzdanı ve doğrudan ilginizi ilgilendiren tüm belgeler — vasiyetname, boşanma kararı, kira sözleşmesi, vekaletname. Olayların kısa bir zaman çizelgesi avukatın daha hızlı değerlendirme yapmasına yardımcı olur."
      },
      {
        question: "İlk görüşmeyi Türkçe yapabilir miyim?",
        answer: "Doğru Kanzlei'de evet. Görüşme Almanca veya Türkçe yapılabilir — hangisi sizin için daha rahatsanız."
      }
    ],
    ctaTitleDE: "Erstgespräch mit einem türkischen Anwalt in Mannheim",
    ctaTitleTR: "Mannheim'da Türk Avukatla İlk Görüşme",
    ctaDescriptionDE: "Rechtsanwalt Hasan Doğru ist bei der Ankara Barosu und der Rechtsanwaltskammer Karlsruhe zugelassen. Erstberatung auf Deutsch oder Türkisch.",
    ctaDescriptionTR: "Avukat Hasan Doğru, Ankara Barosu ve Karlsruhe Barosu'na kayıtlıdır. İlk görüşme Almanca veya Türkçe yapılabilir."
  },
];
