const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Hizmetler-DiOTXmRM.js","assets/framer-vendor-BqeeD604.js","assets/react-vendor-CgwWJmHi.js","assets/ui-vendor-Bd5aUR3P.js","assets/ServiceDetail-uV-gdJRW.js","assets/BlogPage-BDQpKrG6.js","assets/BlogPost-CiLdHwgq.js","assets/Datenschutz-DjH0w5Vh.js","assets/Impressum-Csxp8zoP.js","assets/AboutPage-BsiXWWNb.js","assets/NotFound-B4HgYd1J.js"])))=>i.map(i=>d[i]);
import{j as e}from"./framer-vendor-BqeeD604.js";import{b as be,r as h,u as M,c as K,L as p,N as ye,S as pe,O as ve,d as ze,e as f,R as xe}from"./react-vendor-CgwWJmHi.js";import{U as F,S as oe,P as Te,G,a as Ae,B as we,H as _e,b as Ee,c as de,X as ue,M as Se,d as ce,e as j,f as I,C as De,g as je,h as L,A,i as Be,j as Re,k as Ie,l as Ne,m as Me,n as Ke,o as Ce,p as U,L as He}from"./ui-vendor-Bd5aUR3P.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();var E={},P;function Ve(){if(P)return E;P=1;var a=be();return E.createRoot=a.createRoot,E.hydrateRoot=a.hydrateRoot,E}var We=Ve();const Fe="modulepreload",Ge=function(a){return"/"+a},O={},w=function(i,t,r){let s=Promise.resolve();if(t&&t.length>0){let l=function(u){return Promise.all(u.map(c=>Promise.resolve(c).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};document.getElementsByTagName("link");const n=document.querySelector("meta[property=csp-nonce]"),d=(n==null?void 0:n.nonce)||(n==null?void 0:n.getAttribute("nonce"));s=l(t.map(u=>{if(u=Ge(u),u in O)return;O[u]=!0;const c=u.endsWith(".css"),g=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${g}`))return;const m=document.createElement("link");if(m.rel=c?"stylesheet":Fe,c||(m.as="script"),m.crossOrigin="",m.href=u,d&&m.setAttribute("nonce",d),document.head.appendChild(m),c)return new Promise((T,v)=>{m.addEventListener("load",T),m.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${u}`)))})}))}function o(l){const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=l,window.dispatchEvent(n),!n.defaultPrevented)throw l}return s.then(l=>{for(const n of l||[])n.status==="rejected"&&o(n.reason);return i().catch(o)})},Le={tr:{nav_home:"Ana Sayfa",nav_about:"Hakkımızda",nav_services:"Hizmetler",nav_why_us:"Neden Biz?",nav_blog:"Blog",nav_contact:"İletişim",nav_cta:"Danışma Al",hero_title_pre:"Avukat",hero_title_main:"Hasan Doğru",hero_subtitle:"Türk Hukuku Uzmanı",hero_description:"Alman ve Türk hukuk sistemleri arasında köprü işlevi görecek deneyimli bir hukuk danışmanı arıyorsanız, uluslararası nitelikteki karmaşık hukuki süreçlerde uzman bilgi birikimim ve geniş deneyimimle hizmetinizdeyim",hero_cta_primary:"Hemen Danışın",hero_cta_secondary:"Hizmetlerimiz",stats_years_title:"15 Yıllık Deneyim",stats_years_subtitle:"Güven ve Otorite Temelinde",lawyer_role:"Türk Hukuku Avukatı",service_01_title:"Sınır Ötesi Hukuk",service_01_subtitle:"Almanya - Türkiye Hattı",service_02_title:"Kurumsal Danışmanlık",service_02_subtitle:"Ticaret ve Şirketler",service_03_title:"Etkin Dava Takibi",service_03_subtitle:"Otoriter Temsil",why_us_badge:"Neden Biz?",why_us_title:"Neden",why_us_subtitle:"DOĞRU KANZLEİ?",why_us_description:"Türkiye'deki davalarınızı Almanya'dan takip ediyoruz — Türk mahkemelerinde bizzat, aracısız, tam yetkiyle. İşte bizim avantajlarımız:",why_us_point_01_title:"Türk Mahkemelerine Dijital Erişim",why_us_point_01_desc:"UYAP sistemine kayıtlı bir avukat olarak Türkiye'deki hukuki işlemlerinizi Almanya'dan gerçek zamanlı olarak yönetiyorum. Duruşmalar, belge takibi, dava durumu. Hepsini sizin adınıza uzaktan hallediyorum. Türkiye'ye bizzat gitmenize hiç gerek yok.",why_us_point_02_title:"Çifte Baro Üyeliği",why_us_point_02_desc:"Hem Ankara Barosu hem de Karlsruhe Barosu (§207 BRAO) üyesi olarak sizi Türk mahkemelerinde doğrudan temsil ediyorum. Aracı avukata, iş ortağına gerek yok. Diğer bürolar Türkiye'deki işler için dışarıdan avukata muhtaçken ben bizzat hareket ediyorum. Bu zaman, maliyet ve iletişim kayıplarını ortadan kaldırır.",why_us_point_03_title:"70+ Google Yorumu · 5,0 Yıldız",why_us_point_03_desc:"70'ten fazla müvekkil deneyimlerini paylaştı. Tam puan olan 5,0 üzerinden 5,0 yıldızla. Bu bir tesadüf değil; tutarlı, kişisel ve sonuç odaklı çalışmanın ürünü. Kendiniz görün.",why_us_point_04_title:"Ankara'da Ofis",why_us_point_04_desc:"Almanya'daki ofisimizin yanı sıra Ankara'da gerçek bir ofisimiz bulunuyor. Bu şu anlama gelir: Türk mahkemeleri, noterler ve resmi kurumlarla doğrudan iletişim ve gerektiğinde hızlı yerinde müdahale. Dış kaynak yok. Dolaylı yol yok.",about_badge:"HAKKIMIZDA",about_title:"Hakkımda",about_subtitle:"Avukat Hasan Doğru",about_p1:"Hukuk yoluna adım atmadan önce Türk güvenlik teşkilatında yaklaşık on yıl görev yaptım — en yüksek disiplin, dayanıklılık ve Türk hukuk sistemine derin bir hakimiyet gerektiren operasyonel bir özel birimde. Bu yıllar beni şekillendirdi: Baskı altında isabetli kararlar almayı, karmaşık durumları hızla analiz etmeyi ve başkaları adına sorumluluk üstlenmeyi öğrendim. Bugün her davama tam olarak bu birikimle yaklaşıyorum.",about_p2:"Aktif görev süremdeyken paralel olarak üniversite eğitimime başladım — önce Anadolu Üniversitesi'nde Kamu Yönetimi, ardından Cyprus International University'de Hukuk (LL.B.) okudum. Ankara Barosu'na kayıt yaptırarak (Sicil No: 47068) avukatlık ruhsatımı aldıktan sonra yaşamımı Almanya'ya taşıdım.",about_p3:"Karlsruhe Barosu'na §207 BRAO kapsamında kaydımı yaptırdığımdan bu yana Mannheim ve Ankara ofislerimden müvekkillerime yalnızca Türk hukuku ve milletlerarası hukuk alanında danışmanlık ve temsil hizmeti sunmaktayım. Doğrudan, kişisel ve aracısız.",about_p4:"Beni diğerlerinden ayıran şey: Çifte baro üyeliğim sayesinde müvekkillerimi Türk mahkemeleri ve resmi kurumlar önünde bizzat temsil etme yetkisine sahibim — müvekkillerimin Türkiye'ye gitmesine gerek kalmadan. 70'i aşkın Google yorumu ve tam puan olan 5,0 yıldız, müvekkillerimin bana gösterdiği güvenin somut bir yansımasıdır.",about_cred_01:"Ankara Barosu Üyesi",about_cred_02:"Karlsruhe Barosu — §207 BRAO",about_cred_03:"Türk Mahkemelerinde Doğrudan Temsil",about_cred_04:"Mannheim & Ankara Ofisi",about_signature_role:"Kurucu Avukat",about_press_badge:"BASINDA BİZ",about_press_title:"Haberlerde",about_press_subtitle:"Doğru Kanzlei",practice_badge:"Uzmanlık Alanlarımız",practice_title:"Kapsamlı Hukuki",practice_subtitle:"Danışmanlık",practice_view_all:"TÜMÜNÜ İNCELE",practice_view_detail:"DETAYLI İNCELE",contact_badge:"İletişim",contact_title:"Bize",contact_subtitle:"Ulaşın",contact_description:"Davanızın değerlendirilmesi ve profesyonel hukuki destek için bizimle iletişime geçin. Size en doğru hukuki yolu gösteriyoruz.",contact_form_title:"Danışma Talebi",contact_form_name:"Ad Soyad *",contact_form_email:"E-posta *",contact_form_phone:"Telefon",contact_form_area:"Hukuk Alanı",contact_form_area_placeholder:"Seçiniz...",contact_form_message:"Mesajınız *",contact_form_submit:"Mesaj Gönder",contact_success_title:"Mesajınız Alındı",contact_success_p:"En kısa sürede sizinle iletişime geçeceğiz. Teşekkür ederiz.",contact_office_hours_tr:"Pzt–Cum: 09:00 – 18:00",contact_office_hours_de:"Pzt–Cmt: 09:00 – 18:00",contact_languages_badge:"Hizmet Dilleri",contact_calendly_btn:"Randevu Al",contact_whatsapp_btn:"WhatsApp ile Ulaşın",contact_direct_title:"Hızlı İletişim",contact_direct_p:"Bize doğrudan ulaşın veya size uygun bir zamanda görüşme ayarlayın.",testimonials_badge:"Müvekkil Yorumları",testimonials_title:"Müvekkillerimiz",testimonials_subtitle:"Ne Diyor?",testimonial_1_name:"Hatice Kul",testimonial_1_area:"Tanıma ve Tenfiz",testimonial_1_text:"Tanıma ve Tenfiz davamdaki üstün desteği için Sayın Doğru'ya içtenlikle teşekkür etmek istiyorum. En başından beri kendimi onun yanında çok güvende hissettim. Özellikle arkadaş canlısı, saygılı ve anlayışlı yaklaşımını takdir ediyorum. Zor bir durumda güven veriyor.",testimonial_2_name:"İnci Şen",testimonial_2_area:"Türk Hukuku",testimonial_2_text:"Harika bir hukuk bürosu, kesinlikle tavsiye ederim! Türkiye'deki iki davamda beni son derece başarılı bir şekilde destekleyen yetkin, teknik açıdan bilgili ve empatik bir avukat. Muazzam çalışması için çok teşekkür ederim!",testimonial_3_name:"Tuğçe Garip",testimonial_3_area:"Uluslararası Hukuk",testimonial_3_text:"Hasan Bey işini gerçekten hakkıyla yapan bir avukat. Süreci ilgiyle dinleyip bilgi ve tecrübesiyle davamın hem Türkiye hem Almanya süreçleri hakkında çok detaylı bilgiler verdi. İlgisi ve destekleri için kendisine çok teşekkür ediyorum.",testimonial_4_name:"Abdi Durna",testimonial_4_area:"Genel Danışmanlık",testimonial_4_text:"Tanıdığım en iyi Avukatlardan biri isinin ehli ve tuttuğunu koparan bir Avukat. Çok nazik ve güler yüzlü, işini titizlikle yapıyor.",testimonial_5_name:"Erkan Yerlii",testimonial_5_area:"Danışmanlık",testimonial_5_text:"İlk defa bir avukatın para odaklı olmayıp salt yardım ettiğini gördüm. Çekinerek aradığım Hasan Bey'in çözüm yöntemi ve anında cevap vermesi takdire şayan. Kesinlikle tavsiye ederim.",testimonial_6_name:"Mirsat Şahin",testimonial_6_area:"Vatandaşlık & Türk Hukuku",testimonial_6_text:"Almanya'da yaşadığım dönemde hem Türkiye'deki davalarım hem de vatandaşlık için çok yardımcı oldu. Kendisine bir teşekkürü borç bilirim.",blog_badge:"Blog & Güncel",blog_title:"Hukuki Gelişmeler",blog_subtitle:"ve Makaleler",blog_read_more:"Devamını Oku",footer_description:"Almanya ve Türkiye arasındaki hukuki köprünüz. 15 yılı aşkın deneyimle profesyonel danışmanlık.",footer_quick_links:"Hızlı Bağlantılar",footer_contact_info:"İletişim Bilgileri",footer_legal:"Yasal",footer_rights:"Tüm hakları saklıdır."},de:{nav_home:"Startseite",nav_about:"Über uns",nav_services:"Leistungen",nav_why_us:"Warum wir?",nav_blog:"Blog",nav_contact:"Kontakt",nav_cta:"Beratung anfragen",hero_title_pre:"Avukat",hero_title_main:"Hasan Doğru",hero_subtitle:"Fachanwalt für türkisches Recht",hero_description:"Suchen Sie einen kompetenten Rechtsbeistand, der die Brücke zwischen dem deutschen und dem türkischen Rechtssystem schlägt? Als spezialisierter Avukat unterstütze ich Sie bei komplexen grenzüberschreitenden Rechtsfragen mit fundierter Fachkenntnis und langjähriger Erfahrung.",hero_cta_primary:"Jetzt beraten lassen",hero_cta_secondary:"Unsere Leistungen",stats_years_title:"15 Jahre Erfahrung",stats_years_subtitle:"Auf Basis von Vertrauen und Kompetenz",lawyer_role:"Fachanwalt für türkisches Recht",service_01_title:"Grenzüberschreitendes Recht",service_01_subtitle:"Deutschland – Türkei",service_02_title:"Unternehmensberatung",service_02_subtitle:"Handel & Gesellschaftsrecht",service_03_title:"Effektive Prozessführung",service_03_subtitle:"Kompetente Vertretung",why_us_badge:"Warum wir?",why_us_title:"Warum",why_us_subtitle:"DOĞRU KANZLEİ?",why_us_description:"Sie leben in Deutschland, Ihre Rechte liegen in der Türkei. Wir sind auf beiden Seiten präsent — hier ist warum:",why_us_point_01_title:"Digitaler Zugang zu türkischen Gerichten",why_us_point_01_desc:"Als im UYAP-System registrierter Avukat verwalte ich Ihre türkischen Rechtsangelegenheiten in Echtzeit aus Deutschland. Gerichtstermine, Dokumentenverfolgung, Verfahrensstatus. Ich erledige alles remote in Ihrem Namen. Sie müssen nie persönlich in der Türkei erscheinen.",why_us_point_02_title:"Doppelte Zulassung",why_us_point_02_desc:"Als Mitglied der Anwaltskammer Ankara und der Rechtsanwaltskammer Karlsruhe (§207 BRAO) vertrete ich Sie direkt vor türkischen Gerichten. Ohne Kooperationspartner, ohne Mittelsmann. Während andere Kanzleien auf externe Anwälte in der Türkei angewiesen sind, handle ich selbst. Das spart Zeit, Kosten und Kommunikationsverluste.",why_us_point_03_title:"70+ Google-Bewertungen · 5,0 Sterne",why_us_point_03_desc:"Über 70 Mandanten haben ihre Erfahrungen mit uns geteilt. Mit der Bestnote 5,0 von 5,0 Sternen. Das ist kein Zufall, sondern das Ergebnis konsequenter, persönlicher und ergebnisorientierter Arbeit. Überzeugen Sie sich selbst.",why_us_point_04_title:"Büro in Ankara",why_us_point_04_desc:"Neben unserem Standort in Deutschland verfügen wir über ein echtes Büro in Ankara. Das bedeutet: direkte Kontakte zu türkischen Gerichten, Notaren und Behörden und schnelles Handeln vor Ort, wenn es darauf ankommt. Kein Outsourcing. Kein Umweg.",about_badge:"ÜBER UNS",about_title:"Über mich",about_subtitle:"Avukat Hasan Doğru",about_p1:"Bevor ich den Weg ins Recht einschlug, war ich fast ein Jahrzehnt im türkischen Sicherheitsdienst tätig — in einer operativen Spezialeinheit, die höchste Disziplin, Belastbarkeit und ein tiefes Verständnis für das türkische Rechtssystem erforderte. Diese Jahre haben mich geprägt: Ich habe gelernt, unter Druck präzise zu handeln, komplexe Sachverhalte schnell zu erfassen und Verantwortung für andere zu übernehmen. Genau diese Eigenschaften bringe ich heute in jedes Mandat ein.",about_p2:"Bereits während meiner aktiven Dienstzeit begann ich parallel mein Studium — zunächst Kamu Yönetimi (Öffentliche Verwaltung) an der Anadolu Üniversitesi, anschließend Rechtswissenschaften (LL.B.) an der Cyprus International University. Nach meiner Zulassung als Avukat bei der Rechtsanwaltskammer Ankara (Ankara Barosu, Sicil-Nr. 47068) verlegte ich meinen Lebensmittelpunkt nach Deutschland.",about_p3:"Seit meiner Registrierung bei der Rechtsanwaltskammer Karlsruhe gemäß §207 BRAO berate und vertrete ich Mandanten mit Kanzleistandorten in Mannheim und Ankara — ausschließlich im türkischen Recht und Völkerrecht. Direkt, persönlich und ohne Drittvermittlung.",about_p4:"Was mich von anderen unterscheidet: Durch meine Doppelzulassung bin ich berechtigt, Mandanten unmittelbar vor türkischen Gerichten und Behörden zu vertreten — ohne dass meine Mandanten dafür die Türkei bereisen müssen. Über 70 Google-Bewertungen mit 5,0 Sternen spiegeln das Vertrauen wider, das mir meine Mandanten täglich entgegenbringen.",about_cred_01:"Mitglied der Anwaltskammer Ankara",about_cred_02:"Rechtsanwaltskammer Karlsruhe — §207 BRAO",about_cred_03:"Direkte Vertretung vor türkischen Gerichten",about_cred_04:"Büros in Mannheim & Ankara",about_signature_role:"Gründer & Inhaber",about_press_badge:"PRESSE",about_press_title:"In der Presse",about_press_subtitle:"Doğru Kanzlei",practice_badge:"Unsere Fachgebiete",practice_title:"Umfassende rechtliche",practice_subtitle:"Beratung",practice_view_all:"ALLE ANSEHEN",practice_view_detail:"DETAILS ANSEHEN",contact_badge:"Kontakt",contact_title:"Kontaktieren Sie",contact_subtitle:"uns",contact_description:"Kontaktieren Sie uns für eine fundierte rechtliche Ersteinschätzung. Wir analysieren Ihren Fall und zeigen Ihnen den sichersten Weg.",contact_form_title:"Beratungsanfrage",contact_form_name:"Vor- & Nachname *",contact_form_email:"E-Mail *",contact_form_phone:"Telefon",contact_form_area:"Rechtsgebiet",contact_form_area_placeholder:"Bitte wählen...",contact_form_message:"Ihre Nachricht *",contact_form_submit:"Nachricht senden",contact_success_title:"Nachricht empfangen",contact_success_p:"Wir werden uns so schnell wie möglich mit Ihnen in Verbindung setzen. Vielen Dank.",contact_office_hours_tr:"Mo–Fr: 09:00 – 18:00",contact_office_hours_de:"Mo–Sa: 09:00 – 18:00",contact_languages_badge:"Service-Sprachen",contact_calendly_btn:"Termin vereinbaren",contact_whatsapp_btn:"Kontakt per WhatsApp",contact_direct_title:"Direkter Kontakt",contact_direct_p:"Kontaktieren Sie uns direkt oder vereinbaren Sie ein Gespräch zu einem passenden Zeitpunkt.",testimonials_badge:"Mandantenstimmen",testimonials_title:"Was unsere",testimonials_subtitle:"Mandanten sagen",testimonial_1_name:"Hatice Kul",testimonial_1_area:"Anerkennung & Vollstreckung",testimonial_1_text:"Ich möchte mich herzlich bei Herrn Doğru für seine hervorragende Unterstützung in meiner Tanıma ve Tenfiz davası bedanken. Von Anfang an habe ich mich bei ihm sehr gut aufgehoben gefühlt. Besonders schätze ich seine freundliche, respektvolle und verständnisvolle Art.",testimonial_2_name:"İnci Şen",testimonial_2_area:"Türkisches Recht",testimonial_2_text:"Top Kanzlei, sehr zu empfehlen! Kompetenter, sachlich versierter und empathischer Avukat, der mich bei zwei Verfahren in der Türkei äußerst erfolgreich unterstützt hat. Vielen Dank für die hervorragende Arbeit!",testimonial_3_name:"Tuğçe Garip",testimonial_3_area:"Internationales Recht",testimonial_3_text:"Herr Hasan ist ein Avukat, der seine Arbeit wirklich mit Bravour erledigt. Er hat den Prozess aufmerksam verfolgt und mit seinem Wissen und seiner Erfahrung sehr detaillierte Informationen über die Verfahren meines Falls sowohl in der Türkei als auch in Deutschland gegeben.",testimonial_4_name:"Abdi Durna",testimonial_4_area:"Allgemeine Beratung",testimonial_4_text:"Der ist der beste Avukat den ich je kennen gelernt habe. Ist sehr nett und freundlich, geht sehr präzise vor. Er ist einfach der Beste!",testimonial_5_name:"Erkan Yerlii",testimonial_5_area:"Beratung",testimonial_5_text:"Zum ersten Mal habe ich erlebt, dass ein Avukat nicht profitorientiert ist, sondern wirklich helfen möchte. Herr Hasans Lösungsansatz und seine Eigenschaft, sofort zu antworten, sind lobenswert. Er ist definitiv empfehlenswert.",testimonial_6_name:"Mirsat Şahin",testimonial_6_area:"Staatsbürgerschaft & Türkisches Recht",testimonial_6_text:"Während meiner Zeit in Deutschland hat er mir sowohl bei meinen Fällen in der Türkei als auch in Rechtsangelegenheiten sehr geholfen. Ich bin ihm zu großem Dank verpflichtet.",blog_badge:"Blog & Aktuelles",blog_title:"Rechtliche Entwicklungen",blog_subtitle:"und Artikel",blog_read_more:"Weiterlesen",footer_description:"Ihre rechtliche Brücke zwischen Deutschland und der Türkei. Professionelle Beratung mit über 15 Jahren Erfahrung.",footer_quick_links:"Schnelllinks",footer_contact_info:"Kontaktinformationen",footer_legal:"Rechtliches",footer_rights:"Alle Rechte vorbehalten."}},_=[{id:"familienrecht",slugDE:"familienrecht",slugTR:"aile-hukuku",icon:F,title:"Familienrecht & Scheidung",titleTR:"Aile Hukuku ve Boşanma",seoTitleDE:"Türkisches Familienrecht & Scheidung Mannheim | Avukat Hasan Doğru",seoDescriptionDE:"Scheidung nach türkischem Recht von Mannheim aus — ohne Reise in die Türkei. Avukat Hasan Doğru berät türkischstämmige Familien in Mannheim, Heidelberg und dem Rhein-Neckar-Raum.",description:"Almanya ile Türkiye arasındaki aile hukuku davalarında uzman hukuki danışmanlık ve temsil — boşanmadan velayete kadar.",descriptionDE:"Türkischstämmige Familien in Mannheim, Heidelberg und dem gesamten Rhein-Neckar-Raum stehen bei Scheidung, Sorgerecht oder Unterhalt oft vor einer besonderen Herausforderung: Zwei Rechtssysteme, zwei Länder, eine Familie. Das türkische Familienrecht unterscheidet sich in wesentlichen Punkten vom deutschen Recht — und erfordert einen Anwalt, der beide Seiten kennt.",detail:"Boşanma · Nafaka · Velayet · Mal Paylaşımı · Aile Birleşimi · Soyadı Değişikliği",detailDE:"Ausschließlich türkisches Recht — keine Kompromisse, volle Spezialisierung · Mitglied der Ankara Barosu und registriert gemäß § 207 BRAO · Verfahren vollständig ohne Reise in die Türkei möglich · Beratung auf Türkisch und Deutsch · Standort Mannheim — persönliche Beratung im Rhein-Neckar-Raum · Zweiter Standort in Ankara für direkte Zusammenarbeit mit türkischen Gerichten",expertiseTitleDE:"Warum Doğru Kanzlei für türkisches Familienrecht in Mannheim?",content:`Aile Hukuku — Türk-Alman aileler für aile hukuku danışmanlığı
Boşanma, nafaka, velayet — sınır ötesinde yanınızdayız.

Türkiye ile bağlantılı aile hukuku davaları karmaşık bir yapıya sahiptir — özellikle eşlerin farklı ülkelerde yaşadığı, çocukların dahil olduğu veya her iki ülkede mal varlığı bulunduğu durumlarda. Türk aile hukuku, Alman hukukundan önemli noktalarda ayrılır ve uzman sınır ötesi deneyim gerektirir.

Hukuk büromuz, Almanya ile Türkiye arasındaki tüm aile hukuku konularında size destek olur — yetkin, gizli ve Türkiye've seyahat etmenize gerek kalmadan.

Sizin için neler yapıyoruz:
• Almanya'dan Türkiye'de Boşanma Davası Açma — Bizzat Türkiye'ye gitmeden Türk boşanma davasının başlatılması ve tam takibi
• Anlaşmalı Boşanma (Einvernehmliche Scheidung) — Her iki tarafın rızasıyla hızlı ve ekonomik boşanma, boşanma protokolü dahil
• Çekişmeli Boşanma (Streitige Scheidung) — Türk mahkemelerinde tartışmalı boşanma davalarında güçlü hukuki temsil
• Nafaka (Unterhalt) — Tedbir nafakası, iştirak nafakası ve yoksulluk nafakasının talep edilmesi ve icrası
• Velayet Davası (Sorgerecht) — Türk mahkemelerinde velayet davalarında temsil ve uluslararası velayet kararlarının icrası
• Edinilmiş Mallara Katılma (Zugewinnausgleich) — Boşanmada Türk mal rejimi hukukuna göre mal paylaşımı danışmanlığı
• Türkiye'den Eş Getirme (Ehegattennachzug) — Aile birleşimi ve eş vizesi süreçlerinde hukuki destek
• Boşanma Sonrası Soyadı Değişikliği — Türk hukukuna göre isim değişikliği danışmanlığı ve işlem takibi

Tüm süreç boyunca yanınızdayız — güvenilir, şeffaf ve Türk-Alman aile hukukunda derin deneyimle.`,contentDE:`Avukat Hasan Doğru ist Mitglied der Ankara Barosu und berät ausschließlich im türkischen Recht. Unsere Kanzlei in Mannheim begleitet Sie in allen familienrechtlichen Fragen mit Bezug zur Türkei — kompetent, diskret und vollständig ohne Reise in die Türkei.

Was wir für Sie tun:

• Scheidung in der Türkei aus Deutschland einreichen (Boşanma Davası)
Viele türkischstämmige Paare in Mannheim möchten ihre Ehe nach türkischem Recht scheiden lassen — ohne dafür in die Türkei reisen zu müssen. Wir leiten das gesamte türkische Scheidungsverfahren von Deutschland aus ein, vertreten Sie vor türkischen Gerichten per Vollmacht und begleiten Sie bis zum rechtskräftigen Urteil.

• Einvernehmliche Scheidung Türkei (Anlaşmalı Boşanma)
Wenn beide Ehepartner einer Scheidung zustimmen, ist eine einvernehmliche Scheidung nach türkischem Recht die schnellste und kostengünstigste Lösung. Wir bereiten die Scheidungsfolgenvereinbarung vor, klären alle offenen Punkte — Unterhalt, Sorgerecht, Vermögensaufteilung — und sorgen für einen reibungslosen Ablauf.

• Streitige Scheidung Türkei (Çekişmeli Boşanma)
Wenn keine Einigung möglich ist, vertreten wir Ihre Interessen konsequent vor türkischen Gerichten. Gerade bei grenzüberschreitenden Scheidungsverfahren zwischen Deutschland und der Türkei ist erfahrene anwaltliche Vertretung entscheidend.

• Unterhalt nach türkischem Recht (Nafaka)
Das türkische Unterhaltsrecht kennt drei Formen: Trennungsunterhalt (Tedbir Nafakası), Kindesunterhalt (İştirak Nafakası) und nachehelicher Unterhalt (Yoksulluk Nafakası). Wir beraten Sie zu Ihren Ansprüchen und setzen diese vor türkischen Gerichten durch — auch wenn der unterhaltspflichtige Elternteil in Deutschland lebt.

• Sorgerecht Türkei (Velayet Davası)
Sorgerechtsstreitigkeiten mit Türkeibezug gehören zu den komplexesten familienrechtlichen Verfahren überhaupt. Wir vertreten Sie in türkischen Sorgerechtverfahren und kümmern uns um die internationale Durchsetzung von Sorge- und Umgangsrechtsurteilen zwischen Deutschland und der Türkei.

• Güterrecht / Zugewinnausgleich Türkei (Edinilmiş Mallara Katılma)
Bei einer Scheidung stellt sich oft die Frage: Wem gehört was? Das türkische Güterrecht regelt die Vermögensaufteilung nach dem Prinzip der Errungenschaftsbeteiligung. Wir beraten Sie zur gerechten Aufteilung von Immobilien, Konten und sonstigem Vermögen in der Türkei.

• Ehegattennachzug aus der Türkei
Sie möchten Ihren Ehepartner aus der Türkei nach Deutschland holen? Wir begleiten Sie rechtlich beim Familiennachzug und der Beantragung des Ehegattenvisums — von der Vorbereitung der Unterlagen bis zur erfolgreichen Einreise.

• Namensrecht nach Scheidung Türkei
Nach einer Scheidung stellen sich Fragen zur Namensänderung nach türkischem Recht. Wir beraten Sie zu Ihren Optionen und übernehmen die Abwicklung der Namensänderung bei türkischen Behörden.`,faqDE:[{question:"Kann ich mich in der Türkei scheiden lassen, ohne dorthin zu reisen?",answer:"Ja. Mit einer notariellen Vollmacht können wir das gesamte türkische Scheidungsverfahren von Deutschland aus für Sie führen. Sie müssen nicht persönlich vor türkischen Gerichten erscheinen. Dies ist einer der häufigsten Gründe, warum türkischstämmige Familien aus Mannheim und dem Rhein-Neckar-Raum uns beauftragen."},{question:"Wie lange dauert eine Scheidung nach türkischem Recht?",answer:"Eine einvernehmliche Scheidung (Anlaşmalı Boşanma) dauert in der Regel 2–6 Monate. Eine streitige Scheidung (Çekişmeli Boşanma) kann 1–3 Jahre in Anspruch nehmen, abhängig von der Komplexität des Falles und dem zuständigen türkischen Gericht."},{question:"Wird eine türkische Scheidung in Deutschland anerkannt?",answer:"Eine in der Türkei ausgesprochene Scheidung muss in Deutschland anerkannt werden. Wir begleiten Sie durch das Anerkennungsverfahren (Tanıma ve Tenfiz) bei der zuständigen deutschen Behörde, damit Ihr Personenstand in Deutschland korrekt eingetragen wird."},{question:"Was passiert mit dem Sorgerecht, wenn ein Elternteil in Deutschland und einer in der Türkei lebt?",answer:"Grenzüberschreitende Sorgerechtsverfahren sind besonders komplex. Welches Gericht zuständig ist und welches Recht angewendet wird, hängt vom gewöhnlichen Aufenthaltsort des Kindes ab. Wir analysieren Ihren Fall und vertreten Sie vor dem zuständigen türkischen oder deutschen Gericht."},{question:"Muss ich für eine Erstberatung nach Mannheim kommen?",answer:"Nein. Wir bieten Erstberatungen auch per Telefon oder Video an. Viele unserer Mandanten aus dem gesamten Bundesgebiet betreuen wir vollständig auf Distanz."}]},{id:"vollmacht-apostille",slugDE:"vollmacht-apostille",slugTR:"vekaletname-ve-apostil",icon:oe,title:"Vollmacht & Apostille",titleTR:"Vekaletname & Apostil",description:"Türkiye'deki resmi kurum ve mahkemeler için hukuki güvenceli vekaletname ve apostilli belgeler — hızlı, güvenilir ve gereksiz seyahat olmadan.",descriptionDE:"Rechtssichere Vollmachten und apostillierte Dokumente für Behörden und Gerichte in der Türkei — schnell, zuverlässig und ohne unnötige Reisen.",detail:"Noter Onayı · Tasdik · Apostil · Konsolosluk İşlemleri · Tercüme · Hukuki Danışmanlık",detailDE:"Beglaubigung · Notarielle Beurkundung · Apostille · Konsularische Dienste · Übersetzung · Rechtsberatung",content:`Vekaletname & Apostil — Türkiye için Vekaletname — Almanya'dan hazırlayın
Apostil, onay, noter — her şeyi sizin için hallediyoruz.

Almanya'da yaşayan ve Türkiye'deki hukuki işlemlerini çözmek isteyen kişilerin genellikle apostilli ve noter onaylı bir vekaletnameye ihtiyacı vardır. Bu belgeler olmadan Türk resmi kurumları, mahkemeler, bankalar veya noterler sizin adınıza herhangi bir işlem yapamaz — miras, taşınmaz, boşanma veya şirket kuruluşu gibi konularda bile.

Türk kurumlarının yabancı vekaletnamelerden talep ettiği şartlar oldukça katıdır ve düzenli olarak değişmektedir. Hatalı düzenlenmiş bir belge tüm sürecinizi aylarca geciktirebilir. Vekaletnamenizin başından itibaren doğru, eksiksiz ve hukuken geçerli olmasını sağlıyoruz.

Sizin için neler yapıyoruz:
• Türkiye'de Hukuki İşlemler için Vekaletname — Miras, taşınmaz, boşanma, banka işlemleri ve daha fazlası için hukuki güvenceli vekaletname hazırlanması
• Almanya'dan Türkiye için Apostil — Yetkili Alman mahkemesi veya kurumunda apostil işleminin baştan sona takibi
• Türk Kurumları için Noter Onayı — Alman noterler ve Türk konsoloslukları ile koordinasyon
• Tercüme ve Onay — Yeminli tercümanlar aracılığıyla Türkçe sertifikalı çeviri organizasyonu
• Genel Vekaletname — Türkiye'deki tüm hukuki işlemler için kapsamlı vekaletname hazırlanması
• Taşınmaz İşlemleri için Vekaletname — Türkiye'de taşınmaz alım, satım veya devri için özel vekaletname
• Miras İşlemleri için Vekaletname — Tereke davası, veraset ilamı ve tapu devri işlemleri için
• Banka İşlemleri için Vekaletname — Türk banka hesaplarına erişim, vefat sonrası hesap açma işlemleri
• Mahkeme Süreçleri için Vekaletname — Hukuk ve aile davalarında Türk mahkemelerinde dava ve vekâletnamesi
• Konsolosluk Onayı — Apostile alternatif olarak Almanya'daki Türk konsolosluğu tarafından onay

Önemli Uyarı:
Türk kurumlarının güncel gerekliliklerini karşılamayan bir vekaletname, noter onaylı olsa bile reddedilir. Güncel gereklilikleri biliyoruz ve belgelerinizin ilk seferde kabul edilmesini sağlıyoruz.

Tüm süreç boyunca yanınızdayız — hızlı, güvenilir ve Türk-Alman hukuki uygulamasında derin deneyimle.`,contentDE:`Vollmacht & Apostille — Vollmacht für die Türkei — aus Deutschland beantragen
Apostille, Beglaubigung, Notar — wir erledigen alles für Sie.

Wer in Deutschland lebt und rechtliche Angelegenheiten in der Türkei regeln möchte, braucht in der Regel eine notariell beglaubigte Vollmacht mit Apostille. Ohne diese Dokumente können türkische Behörden, Gerichte, Banken oder Notare keine Handlungen in Ihrem Namen vornehmen — egal ob es um Erbschaft, Immobilien, Scheidung oder Unternehmensgründung geht.

Die Anforderungen türkischer Behörden an ausländische Vollmachten sind streng und ändern sich regelmäßig. Ein falsch ausgestelltes Dokument kann Ihr gesamtes Verfahren um Monate verzögern. Wir stellen sicher, dass Ihre Vollmacht von Anfang an korrekt, vollständig und rechtswirksam ist.

Was wir für Sie tun:
• Vollmacht für Rechtsgeschäfte in der Türkei — Erstellung rechtssicherer Vollmachten für Erbschaft, Immobilien, Scheidung, Bankangelegenheiten und mehr
• Apostille aus Deutschland für die Türkei — Begleitung des gesamten Apostille-Verfahrens beim zuständigen deutschen Gericht oder der Behörde
• Notarielle Beglaubigung für türkische Behörden — Koordination mit deutschen Notaren und türkischen Konsulaten
• Übersetzung und Beglaubigung — Organisation zertifizierter Übersetzungen ins Türkische durch vereidigte Übersetzer
• Generalvollmacht Türkei — Erstellung umfassender Vollmachten für alle Rechtsgeschäfte in der Türkei
• Vollmacht für Immobilientransaktionen — Speziell für Kauf, Verkauf oder Übertragung von Immobilien in der Türkei
• Vollmacht für Erbschaftsangelegenheiten — Für die Abwicklung von Nachlassverfahren, Veraset İlamı und Tapu-Übertragungen
• Vollmacht für Bankangelegenheiten — Zugriff auf türkische Bankkonten, Entsperrung nach Todesfall
• Vollmacht für Gerichtsverfahren — Prozessvollmacht für türkische Gerichte in Zivil- und Familiensachen
• Konsularische Beglaubigung — Beglaubigung durch das türkische Konsulat in Deutschland as Alternative zur Apostille

Wichtiger Hinweis:
Eine Vollmacht, die nicht den aktuellen Anforderungen türkischer Behörden entspricht, wird zurückgewiesen — auch wenn sie notariell beglaubigt ist. Wir kennen die aktuellen Anforderungen und stellen sicher, dass Ihre Dokumente auf Anhieb akzeptiert werden.

Wir begleiten Sie durch den gesamten Prozess — schnell, zuverlässig und mit langjähriger Erfahrung in der deutsch-türkischen Rechtspraxis.`},{id:"migrationsrecht",slugDE:"migrationsrecht",slugTR:"goc-hukuku",icon:Te,title:"Migrationsrecht",titleTR:"Göç Hukuku",description:"Türk hukukuna göre vize işlemleri, oturma izni ve vatandaşlık başvurularında uzman danışmanlık — Türk göç hukuku kapsamında hukuki koruma dahil.",descriptionDE:"Fachkundige Beratung zu Visumverfahren, Aufenthaltserlaubnis und Einbürgerung im türkischen Recht — sowie rechtlicher Schutz nach türkischem Migrationsrecht.",detail:"Mavi Kart & Vatandaşlık · İkamet İzinleri · Geri Dönüş",detailDE:"Mavi Kart & Status · Aufenthaltstitel · Remigration",content:`Göç Hukuku — Türkiye'ye Yerleşim İçin Hukuki Danışmanlık
Türkiye'de İkamet, Çalışma ve Yaşam İçin Hukuki Güvence — Uyruğunuzdan Bağımsız Olarak

Türkiye'ye taşınmayı mı planlıyorsunuz yoksa zaten orada mı yaşıyorsunuz? Alman, Avrupalı ya da başka bir pasaporta sahip olun — Türk göç hukukunda yolunuzu bulmak, standart çevrimiçi kaynaklarının çok ötesinde uzman bilgi gerektirmektedir.

Hukuk büromuz, tüm uyruktan bireylere Türk ikamet ve göç hukuku konularında danışmanlık sunmakta olup özellikle Türkiye'ye taşınmak, emeklilik, yatırım veya çalışma amacıyla Almanya'dan gelen müvekkillere odaklanmaktadır.

Sizin için neler yapıyoruz:
• Türkiye'de İkamet İzni — Kısa süreli izinlerden uzun süreli ve kalıcı ikamet statüsüne kadar Türk ikamet izni sistemi (ikamet) konusunda tüm uyruklar için rehberlik ediyoruz
• Çalışma İzni & Şirket Kuruluşu — Çalışanlar, girişimciler ve yatırımcılar für menşei ülkeden bağımsız olarak Türk çalışma izni başvurularında profesyonel destek
• Mavi Kart & Vatandaşlık — Türk kökenli müvekkiller için Mavi Kart hakları, yükümlülükleri ve çifte vatandaşlık konularında özel danışmanlık
• Hukuki Güvenceli Geri Dönüş — Almanya'dan çıkış kaydından Türkiye'de yasal ikamet tesisine kadar taşınma sürecinizin tüm hukuki aşamalarını yönetiyoruz

Hukuk büromuz Karlsruhe Barosu'na kayıtlıdır (§ 207 BRAO uyarınca tescilli) ve çıkarlarınızı en yüksek mesleki yetkinlikle temsil etmektedir — sınır ötesi ve güvenilir biçimde.`,contentDE:`Migrationsrecht — Rechtsberatung für Ihre Umsiedlung in die Türkei
Rechtssicherheit bei Aufenthalt, Arbeit und Leben in der Türkei — unabhängig von Ihrer Staatsangehörigkeit

Planen Sie einen Umzug in die Türkei oder leben Sie bereits dort? Ob mit deutschem, europäischem oder einem anderen Pass — die Navigation durch das türkische Migrationsrecht erfordert spezialisiertes Fachwissen, das weit über standardmäßige Online-Ressourcen hinausgeht.

Unsere Kanzlei berät Personen aller Staatsangehörigkeiten im türkischen Aufenthalts- und Migrationsrecht, mit besonderem Schwerpunkt auf Mandanten mit Wohnsitz in Deutschland, die in die Türkei umsiedeln, dort ihren Ruhestand verbringen, investieren oder arbeiten möchten.

Was wir für Sie tun:
• Aufenthaltserlaubnis in der Türkei — Wir begleiten Sie durch das türkische Aufenthaltserlaubnissystem (ikamet), von kurzfristigen Genehmigungen bis hin zu langfristigen und dauerhaften Aufenthaltstiteln — für alle Staatsangehörigkeiten
• Arbeitserlaubnis & Unternehmensgründung — Professionelle Unterstützung für Arbeitnehmer, Unternehmer und Investoren bei der Beantragung türkischer Arbeitsgenehmigungen, unabhängig von Ihrer Herkunft
• Mavi Kart & Staatsbürgerschaft — Spezialisierte Beratung für Mandanten türkischer Herkunft zu Rechten und Pflichten der Blauen Karte sowie zur doppelten Staatsangehörigkeit
• Rechtssichere Remigration — Wir begleiten den gesamten rechtlichen Prozess Ihres Umzugs in die Türkei — von der Abmeldung in Deutschland bis zur Begründung Ihres rechtlichen Wohnsitzes in der Türkei

Unsere Kanzlei ist Mitglied der Rechtsanwaltskammer Karlsruhe (registriert gemäß § 207 BRAO) und vertritt Ihre Interessen mit höchster fachlicher Kompetenz — grenzüberschreitend und verlässlich.`},{id:"strafrecht",slugDE:"strafrecht",slugTR:"ceza-hukuku",icon:G,title:"Strafrecht",titleTR:"Ceza Hukuku",description:"Türkiye'deki ceza davalarında Almanya'dan uzman hukuki savunma ve temsil. Mahkeme celbi, tutuklama müzekkeresi veya Interpol bildirimi olsa — Türk ceza yargı sisteminde her adımda yanınızdayız.",descriptionDE:"Fachkundige Strafverteidigung und rechtliche Beratung in türkischen Strafverfahren — direkt aus Deutschland. Ob Vorladung, Haftbefehl oder Interpol-Ausschreibung: Wir begleiten Sie durch das türkische Strafjustizsystem.",detail:"CEZA SAVUNMASI · INTERPOL / KIRMIZI KÖŞE · İADE",detailDE:"STRAFVERTEIDIGUNG · INTERPOL / ROTE ECKE · AUSLIEFERUNG",content:`Türkiye'deki ceza davalarında Almanya'dan uzman hukuki savunma ve temsil — güvenilir, şeffaf ve deneyimli.

Almanya'dan Türkiye'de Ceza Savunması
Yurt dışında yaşayan Türkler için Türk Ceza Hukuku — celp veya tutuklama müzekkeresi aldınız mı?

Almanya'da yaşıyor ve Türkiye'den bir mahkeme celbi, tutuklama müzekkeresi veya Interpol bildirimi aldıysanız, ciddi bir hukuki sorunla karşı karşıyasınız demektir. Türk ceza hukuku, Alman hukukundan temelden farklıdır — uzman bir avukat olmadan, Türkiye'ye gitmeden bile ağır sonuçlarla karşılaşabilirsiniz.

Türkiye'de devam eden bir ceza davası; pasaport yenileme sorunları, Türkiye'ye giriş yasağı, iade talepleri veya Interpol kayıtları gibi geniş çaplı sonuçlar doğurabilir. Sizi tam olarak temsil ediyoruz — Türkiye'de bizzat bulunmanıza gerek kalmadan.

Sizin için neler yapıyoruz:
• Türkiye'den gelen celp veya tutuklama müzekkeresi durumunda hukuki değerlendirme
• Türk ceza yargılamasında tam savunma temsili
• Interpol bildirimleri ve Kırmızı Köşe işlemlerinde temsil
• Türkiye-Almanya arasındaki iade davalarında hukuki destek
• Uyuşturucu suçlarında danışmanlık (TCK m. 188, 191)
• Dolandırıcılık ve güveni kötüye kullanma davalarında temsil
• Almanya'dan Türkiye'ye suç duyurusu yapılması
• Askerlik ihlallerine ilişkin danışmanlık (Bakaya, Yoklama Kaçağı)
• Türk hukukuna göre siber suçlar ve internet suçlarında temsil

Kapanış cümlesi:
Tüm süreç boyunca yanınızdayız — güvenilir, şeffaf ve Türk-Alman ceza hukuku alanında derin deneyimle.`,contentDE:`Fachkundige Strafverteidigung und rechtliche Beratung bei türkischen Strafverfahren — kompetent vertreten aus Deutschland.

Strafverteidigung in der Türkei aus Deutschland
Türkisches Strafrecht for Auslandstürken — Was tun bei Vorladung oder Haftbefehl?

Wenn Sie in Deutschland leben und eine Vorladung, einen Haftbefehl oder eine Interpol-Ausschreibung aus der Türkei erhalten haben, stehen Sie vor einer ernsthaften rechtlichen Herausforderung. Das türkische Strafrecht unterscheidet sich grundlegend vom deutschen — ohne fachkundige Begleitung riskieren Sie schwerwiegende Konsequenzen, auch ohne in die Türkei zu reisen.

Ein laufendes Strafverfahren in der Türkei kann weitreichende Folgen haben: Einschränkungen bei der Passverlängerung, Probleme bei der Einreise in die Türkei, Auslieferungsanträge oder Einträge im internationalen Fahndungssystem (Interpol). Wir vertreten Sie vollständig — auch ohne Ihre persönliche Anwesenheit in der Türkei.

Was wir für Sie tun:
• Prüfung Ihrer Situation bei Vorladung oder Haftbefehl aus der Türkei
• Vollständige Strafverteidigung im türkischen Strafverfahren
• Vertretung bei Interpol-Ausschreibungen und Roten Ecken
• Begleitung bei Auslieferungsverfahren zwischen der Türkei und Deutschland
• Beratung bei Betäubungsmitteldelikten (TCK m. 188, 191)
• Vertretung bei Betrug und Untreue (Dolandırıcılık, Güveni Kötüye Kullanma)
• Einreichung von Strafanzeigen in der Türkei aus Deutschland (Suç duyurusu)
• Beratung bei Militärdienst-Vergehen (Bakaya, Yoklama Kaçağı)
• Begleitung bei Internetstraftaten und Cyber-Kriminalität nach türkischem Recht

Wir begleiten Sie durch den gesamten Prozess — zuverlässig, transparent und mit fundierter Erfahrung im deutsch-türkischen Strafrecht.`},{id:"tanima-ve-tenfiz",slugDE:"tanima-ve-tenfiz",slugTR:"tanima-ve-tenfiz",icon:F,title:"Tanıma & Tenfiz",titleTR:"Tanıma ve Tenfiz",description:"Almanya ile Türkiye arasındaki yabancı mahkeme kararlarının tanınması ve tenfizinde uzman hukuki danışmanlık.",descriptionDE:"Spezialisierte rechtliche Beratung bei der Anerkennung und Vollstreckung ausländischer Gerichtsentscheidungen zwischen Deutschland und der Türkei.",detail:"Boşanma Tanıma Tenfiz · Türk Boşanmasının Tanınması · Gitmeden Tanıma Tenfiz · Süre ve Maliyet · Velayet Kararları · Evlat Edinme · Genel Mahkeme Kararları",detailDE:"Scheidungsanerkennung · Anerkennung türkischer Urteile · Tanıma Tenfiz (Reise nicht erforderlich) · Verfahrensdauer & Kosten · Sorgerechtsbeschlüsse · Adoptionsanerkennung · Urteilsanerkennung allgemein",content:`Tanıma ve Tenfiz — Almanya'daki Boşanma Kararının Türkiye'de Tanınması
Yabancı mahkeme kararları Türkiye'de kendiliğinden geçerli olmaz — biz geçerli hale getiriyoruz.

Almanya'da boşandıysanız, bu karar Türkiye'de otomatik olarak geçerli sayılmaz. Türk hukuku açısından evliliğinizin sona ermiş sayılabilmesi için ayrı bir mahkeme süreci gereklidir — buna Tanıma ve Tenfiz denir.

Bu işlem yapılmadığında Türk makamları sizi hâlâ evli kabul eder. Bu durum; yeniden evlenme, miras ve Türkiye'deki mal varlığının devri gibi konularda ciddi sorunlara yol açabilir.

Sizin için neler yapıyoruz:
• Boşanma Tanıma Tenfiz — Türk mahkemelerinde Tanıma ve Tenfiz davalarında tam temsil
• Almanya'daki Boşanmanın Türkiye'de Tanınması — Başvurunun hazırlanması ve sürecin baştan sona takibi
• Türk Boşanmasının Almanya'da Tanınması — Türkiye'de verilen kararların Almanya'da geçerliliği için başvuru ve takip
• Türkiye've Gitmeden Tanıma Tenfiz — Vekaletname ile tam temsil, bizzat bulunmanıza gerek yok
• Süre ve Maliyet Danışmanlığı — Gerçekçi zaman çizelgesi ve ücretler hakkında şeffaf bilgilendirme
• Velayet Kararlarının Tanınması — Uluslararası velayet ve kişisel ilişki kararlarının Türkiye'de icrası
• Evlat Edinme Tanıma — Sınır ötesi evlat edinme süreçlerinde hukuki destek
• Genel Mahkeme Kararlarının Tanınması — Diğer Alman mahkeme kararlarının Türkiye'de tanınması

Tüm süreç boyunca yanınızdayız — güvenilir, şeffaf ve Türk-Alman aile hukukunda derin deneyimle.`,contentDE:`Tanıma ve Tenfiz — Deutsche Scheidung in der Türkei anerkennen lassen
Ausländische Urteile gelten in der Türkei nicht automatisch — wir machen sie rechtswirksam.

Wenn Ihre Ehe in Deutschland geschieden wurde, entfaltet dieses Urteil in der Türkei nicht automatisch seine Wirkung. Damit die Scheidung auch nach türkischem Recht als wirksam gilt, ist ein gesondertes gerichtliches Verfahren erforderlich — die sogenannte Tanıma ve Tenfiz (Anerkennung und Vollstreckung).

Ohne dieses Verfahren gilt Ihre Ehe vor türkischen Behörden weiterhin als bestehend. Dies kann weitreichende Folgen haben — etwa bei einer erneuten Heirat, bei erbrechtlichen Fragen oder bei der Übertragung von Vermögenswerten in der Türkei.

Was wir für Sie tun:
• Scheidungsanerkennung Türkei — Vollständige Vertretung im Tanıma ve Tenfiz-Verfahren vor türkischen Gerichten
• Deutsche Scheidung in der Türkei anerkennen lassen — Einreichung und Begleitung des gesamten Anerkennungsverfahrens
• Türkische Scheidung in Deutschland anerkennen — Prüfung und Einleitung des Anerkennungsverfahrens für türkische Urteile in Deutschland
• Tanıma Tenfiz ohne Reise in die Türkei — Wir vertreten Sie vollständig per Vollmacht, ohne dass Sie persönlich erscheinen müssen
• Verfahrensdauer und Kosten — Transparente Beratung zu realistischen Zeitrahmen und anfallenden Gebühren
• Sorgerechtsbeschlüsse anerkennen lassen — Internationale Durchsetzung von Sorge- und Umgangsrechtsurteilen
• Adoptionsanerkennung Türkei-Deutschland — Rechtliche Begleitung bei grenzüberschreitenden Adoptionsverfahren
• Urteilsanerkennung allgemein (Genel Mahkeme Kararları) — Anerkennung sonstiger deutscher Gerichtsentscheidungen in der Türkei

Wir begleiten Sie durch den gesamten Prozess — zuverlässig, transparent und mit langjähriger Erfahrung im deutsch-türkischen Familienrecht.`},{id:"mavi-kart",slugDE:"mavi-kart",slugTR:"mavi-kart",icon:Ae,title:"Mavi Kart (Blaue Karte)",titleTR:"Mavi Kart",description:"Eski Türk vatandaşları için Mavi Kart haklarında uzman hukuki danışmanlık — Türkiye'deki ikamet ve yatırım olanaklarınızı hukuki güvenceyle koruyun.",descriptionDE:"Fachanwaltliche Beratung zu Mavi Kart-Rechten für ehemalige türkische Staatsbürger sowie zu Aufenthalts- und Investitionsmöglichkeiten in der Türkei — rechtssichere und dauerhaft.",detail:"Yerleşim Özgürlüğü · Taşınmaz Edinimi · Miras Hakları · Yatırım ve İş · Eğitim ve Sağlık · Oy Kullanma · Emeklilik",detailDE:"Aufenthaltsfreiheit · Immobilienerwerb · Erbrecht · Investition · Bildung & Gesundheit · Wahlrecht · Rente",content:`Mavi Kart — Eski Türk vatandaşlarının hak ve yükümlülükleri
Mavi Kart nedir ve kimler başvurabilir?

Mavi Kart, Alman vatandaşlığı gibi başka bir vatandaşlık edinmek için Türk vatandaşlığından çıkmak zorunda kalan eski Türk vatandaşlarına Türk devleti tarafından verilen resmi bir belgedir. Bu belge, Türk vatandaşlığını kaybettikten sonra da Türkiye'deki pek çok haktan yararlanmaya devam etmenizi sağlar.

Pek çok Almanya Türkü için Mavi Kart, Türkiye ile hukuki bağı kalıcı olarak koruyan vazgeçilmez bir belgedir. Ancak çoğu kişi kartın aktif olarak başvurulması, yenilenmesi ve belirli koşullarda iptal edilebileceğini bilmiyor — ya da haklarının basit bir oturma izninin çok ötesine geçtiğinin farkında değil.

Mavi Kart hangi hakları sağlar?
Mavi Kart sahipleri Türkiye'de Türk vatandaşlarıyla neredeyse aynı haklardan yararlanır. Bunlar özellikle şunlardır:
• İkamet ve Yerleşim Özgürlüğü — Oturma izni olmaksızın Türkiye'de sınırsız ikamet ve yerleşme hakkı
• Taşınmaz Edinimi — Türkiye'de arazi ve taşınmaz satın alma ve sahip olma hakkı
• Miras Hakları — Türk vatandaşlarıyla eşit şekilde Türk hukukuna göre tam miras hakkı
• Yatırım ve İş İmkânları — Ek izin gerekmeksizin Türkiye'de şirket kurma ve ticari faaliyet yürütme
• Eğitim ve Sağlık — Türk eğitim ve sağlık kurumlarından yerli fiyatlarla yararlanma
• Oy Kullanma Hakkı — Belirli koşullar altında Türk seçimlerine katılım hakkı
• Emeklilik Hakları — Türk emeklilik haklarını talep etme imkânı

Sizin için neler yapıyoruz:
• Mavi Kart Başvurusu — Almanya'daki eski Türk vatandaşları için ilk başvurunun baştan sona takibi
• Mavi Kart Yenileme — Mavi Kartınızın süresi dolmadan zamanında yenilenmesi ve güncellenmesi
• Türk Vatandaşlığını Yeniden Kazanma — Türk vatandaşlığına yeniden kabul für danışmanlık ve temsil
• Türkiye-Almanya Çifte Vatandaşlık — Bireysel durumunuzun ve çifte vatandaşlık olanaklarının hukuki değerlendirmesi
• Çocuklar için Mavi Kart — Eski Türk vatandaşlarının reşit olmayan çocukları için Mavi Kart başvurusu ve tescili
• Hukuki Statü Tespiti — Almanya ve Türkiye arasındaki bireysel hukuki durumunuzun netleştirilmesi
• Mavi Kart ile Taşınmaz Alımı — Mavi Kart sahibi olarak Türkiye'de taşınmaz alım veya satımında hukuki destek
• Mavi Kart ile Miras Hakları — Eski vatandaş sıfatıyla Türkiye'deki miras haklarının kullanılması
• Türkiye'de Şirket Kuruluşu — Mavi Kart ile Türkiye'de şirket kuruluşu ve yönetimi için hukuki danışmanlık
• Kayıp veya Süresi Dolmuş Mavi Kart — Belgelerinizin yeniden düzenlenmesi ve geri kazanılması

Önemli Uyarı:
Mavi Kart otomatik olarak verilmez — aktif olarak başvurulması gerekir. Pek çok eski Türk vatandaşı hak sahibi olduğunu bilmiyor ya da başvuru süresini kaçırmış oluyor. Durumunuzu değerlendiriyor ve gerekli tüm adımları başlatıyoruz.

Hukuk büromuz, Türk ve Türk-Alman hukukunda derin uzmanlığıyla yanınızda — her iki ülkeyle hukuki bağınızı güvenle korumak için.`,contentDE:`Mavi Kart — Rechte und Pflichten für ehemalige türkische Staatsbürger
Was ist die Mavi Kart und wer hat Anspruch darauf?

Die Mavi Kart (Blaue Karte) ist ein offizielles Dokument des türkischen Staates für ehemalige türkische Staatsbürger, die ihre Staatsangehörigkeit aufgegeben haben, um eine andere Staatsbürgerschaft — etwa die deutsche — zu erwerben. Sie ermöglicht es, auch nach dem Verlust der türkischen Staatsangehörigkeit weiterhin von zahlreichen Rechten in der Türkei zu profitieren.

Für viele Deutsch-Türken ist die Mavi Kart ein unverzichtbares Dokument, das die rechtliche Verbindung zur Türkei dauerhaft sichert. Doch viele wissen nicht, dass die Karte aktiv beantragt, verlängert und unter bestimmten Umständen auch entzogen werden kann — oder dass ihre Rechte weit über einen einfachen Aufenthaltstitel hinausgehen.

Welche Rechte bietet die Mavi Kart?
Inhaber der Mavi Kart genießen in der Türkei nahezu dieselben Rechte wie türkische Staatsbürger. Dazu gehören insbesondere:
• Aufenthalts- & Niederlassungsfreiheit — Unbeschränkter Aufenthalt und Wohnsitznahme in der Türkei ohne Aufenthaltstitel
• Immobilienerwerb — Kauf und Besitz von Grundstücken und Immobilien in der Türkei
• Erbrechtliche Ansprüche — Volles Erbrecht nach türkischem Recht, gleichgestellt mit türkischen Staatsbürgern
• Investitions- & Geschäftsmöglichkeiten — Unternehmensgründung und wirtschaftliche Betätigung in der Türkei ohne zusätzliche Genehmigungen
• Zugang zu Bildung & Gesundheit — Nutzung türkischer Bildungs- und Gesundheitseinrichtungen zu inländischen Konditionen
• Wahlrecht — Unter bestimmten Voraussetzungen Teilnahme an türkischen Wahlen
• Rentenansprüche — Möglichkeit, türkische Rentenansprüche geltend zu machen

Was wir für Sie tun:
• Mavi Kart beantragen — Vollständige Begleitung des Erstantrags für ehemalige türkische Staatsbürger in Deutschland
• Mavi Kart verlängern — Fristgerechte Verlängerung und Aktualisierung Ihrer Mavi Kart
• Türkische Staatsbürgerschaft zurückerlangen — Beratung und Vertretung bei der Wiedereinbürgerung in die türkische Staatsbürgerschaft
• Doppelstaatsbürgerschaft Türkei-Deutschland — Rechtliche Prüfung Ihrer individuellen Situation und Möglichkeiten zur Doppelstaatsbürgerschaft
• Mavi Kart für Kinder — Beantragung und Registrierung der Mavi Kart für minderjährige Kinder ehemaliger türkischer Staatsbürger
• Rechtsstatus klären — Klärung Ihres individuellen Rechtsstatus zwischen Deutschland und der Türkei
• Immobilienerwerb mit Mavi Kart — Rechtliche Begleitung beim Kauf oder Verkauf von Immobilien in der Türkei als Mavi Kart-Inhaber
• Erbrecht mit Mavi Kart — Durchsetzung erbrechtlicher Ansprüche in der Türkei als ehemaliger Staatsbürger
• Unternehmensgründung in der Türkei — Rechtliche Beratung zur Gründung und Führung eines Unternehmens in der Türkei mit Mavi Kart
• Mavi Kart verloren oder abgelaufen — Neuausstellung und Wiederherstellung Ihrer Dokumente

Wichtiger Hinweis:
Die Mavi Kart wird nicht automatisch ausgestellt — sie muss aktiv beantragt werden. Viele ehemalige türkische Staatsbürger wissen nicht, dass sie Anspruch haben, oder haben die Antragsfrist versäumt. Wir prüfen Ihre Situation und leiten alle notwendigen Schritte ein.

Unsere Kanzlei steht Ihnen mit fundierter Expertise im türkischen und deutsch-türkischen Recht zur Seite — für eine rechtlich sichere Verbindung zu beiden Ländern.`},{id:"icra-ve-iflas",slugDE:"icra-ve-iflas",slugTR:"icra-ve-iflas",icon:G,title:"Zwangsvollstreckung & Forderungsbeitreibung in der Türkei",titleTR:"Türkiye'de İcra ve İflas",description:"Türkiye'deki alacaklarınızın ve mahkeme kararlarınızın etkin şekilde icrası — Almanya'dan tam temsil, bizzat bulunmanıza gerek yok.",descriptionDE:"Effektive Durchsetzung Ihrer Forderungen und Urteile in der Türkei — vollständig aus Deutschland, ohne persönliche Anwesenheit vor Ort.",detail:"Alacak Tahsili · Alman Kararları İcrası · Haciz · İflas Takibi · İcra Takibi",detailDE:"Forderungsbeitreibung · Vollstreckung ausländischer Urteile · Pfändung · Insolvenzverfahren · Inkasso",content:`İcra ve İflas — Türk hukukuna göre icra takibi
Kararı kazandınız ama para gelmiyor mu? Türkiye'deki alacaklarınızı biz tahsil ediyoruz.

Kazanılan bir dava yalnızca ilk adımdır. Karşı taraf gönüllü olarak ödeme yapmıyor veya kararı uygulamıyorsa asıl zorluk başlar: icra takibi. Türkiye'de bu süreç İcra Müdürlüğü üzerinden yürütülür ve uzmanlık gerektiren katı usul kurallarına tabidir.

Almanya'da aldığınız bir kararı Türkiye'de icra ettirmek istiyorsanız, Türkiye'deki bir kişi veya şirketten alacağınız varsa ya da kendiniz bir icra takibiyle muhatap olduysanız — sizi tam olarak temsil ediyor ve haklarınızı kararlılıkla savunuyoruz.

Sizin için neler yapıyoruz:
• Almanya'dan İcra Takibi Başlatma — Bizzat bulunmanıza gerek kalmadan Türk icra takibinin başlatılması ve tam takibi
• Alacak Tahsili — Türkiye'deki gerçek ve tüzel kişilere karşı vadesi geçmiş alacakların kararlılıkla takibi
• Alman Mahkeme Kararlarının Türkiye'de İcrası — Alman mahkeme kararlarının Türkiye'de tanınması ve tenfiz edilmesi
• Türk Mahkeme Kararlarının İcrası — Kesinleşmiş Türk kararlarının İcra Müdürlüğü aracılığıyla icrası
• Türkiye'de Banka Hesabı Haczi — Türk icra makamları aracılığıyla hesap haczi ve mal varlığının güvence altına alınması
• Türkiye'de Taşınmaz Haczi — Türk taşınmazlarına icra ipoteği ve haciz
• İcra Takibine İtiraz — Haksız icra işlemlerine karşı savunma
• İflas Takibi (İflas) — İflas başvuruları ve Türk iflas davalarında alacaklı temsilciliği
• Dava Öncesi Alacak Güvencesi — Asıl dava başlamadan alacağınızı güvence altına almak için ihtiyati haciz
• Nafaka Kararlarının İcrası — Nafaka ilamlarının İcra Müdürlüğü aracılığıyla tahsili
• Tahkim Kararlarının İcrası — Uluslararası tahkim kararlarının Türkiye'de tanınması ve icrası
• Türkiye'de Alacak Tahsilatı — Borçlularla dava dışı müzakere ve tahsilat

İcra Takibi Nasıl İşler?
Adım 1 — İcra Takibi Başlatma:
Yetkili İcra Müdürlüğü'ne icra takip talebini sunuyoruz. Borçluya resmi bir ödeme emri tebliğ edilir; 7 gün içinde ödeme yapması veya itiraz etmesi gerekir.
Adım 2 — İtiraz veya Ödeme:
Borçlu ödeme yapmaz ve itiraz etmezse icra işlemi derhal başlatılır. İtiraz etmesi halinde mahkemede itirazın iptali davası açıyoruz.
Adım 3 — Haciz ve İcra:
Borçlunun Türkiye'deki banka hesapları, taşınmazları, araçları veya diğer mal varlıkları üzerine haciz talep ediyoruz.
Adım 4 — Satış ve Tahsilat:
Haczedilen mal varlıkları açık artırmayla satılır veya doğrudan devredilir — alacağınız tamamen tahsil edilene kadar.

Önemli Uyarı:
Türk icra hukukunda katı süreler geçerlidir. Çok uzun beklemek alacağın zamanaşımına uğramasına veya teminat haklarının kaybına yol açabilir. Mümkün olan en kısa sürede bize başvurun — ne kadar erken hareket edersek şansınız o kadar artar.

Kapanış:
Çıkarlarınızı kararlılıkla temsil ediyor ve Türkiye'deki alacaklarınızı takip ediyoruz — güvenilir, şeffaf ve Almanya'dan tam hizmetle.`,contentDE:`İcra ve İflas — Zwangsvollstreckung nach türkischem Recht
Sie haben ein Urteil — aber das Geld kommt nicht? Wir treiben Ihre Forderungen in der Türkei ein.

Ein gewonnenes Gerichtsverfahren ist nur der erste Schritt. Wenn die Gegenseite nicht freiwillig zahlt oder das Urteil nicht umsetzt, beginnt die eigentliche Herausforderung: die Zwangsvollstreckung. In der Türkei läuft dieser Prozess über die İcra Müdürlüğü (Vollstreckungsamt) und folgt eigenen, strikten Verfahrensregeln — die ohne Fachkenntnis kaum zu navigieren sind.

Ob Sie ein deutsches Urteil in der Türkei vollstrecken möchten, eine Forderung gegen eine Person oder ein Unternehmen in der Türkei haben, oder ob Sie selbst mit einem İcra-Verfahren konfrontiert wurden — wir vertreten Sie vollständig und durchsetzen Ihre Rechte konsequent.

Was wir für Sie tun:
• İcra Takibi aus Deutschland einleiten — Vollständige Einleitung und Begleitung des türkischen Vollstreckungsverfahrens ohne Ihre persönliche Anwesenheit
• Forderungsbeitreibung Türkei — Konsequente Durchsetzung offener Forderungen gegen Privatpersonen und Unternehmen in der Türkei
• Vollstreckung deutscher Urteile in der Türkei — Anerkennung und Vollstreckbarerklärung (Tenfiz) deutscher Gerichtsentscheidungen in der Türkei
• Vollstreckung türkischer Urteile — Durchsetzung rechtskräftiger türkischer Urteile über das İcra Müdürlüğü
• Pfändung von Bankkonten in der Türkei — Kontenpfändung und Vermögenssicherung über türkische Vollstreckungsbehörden
• Pfändung von Immobilien in der Türkei — Zwangshypothek und Vollstreckung in türkisches Grundvermögen
• İtiraz / Widerspruch gegen İcra-Verfahren — Verteidigung gegen unberechtigte Vollstreckungsmaßnahmen in der Türkei
• Insolvenzverfahren Türkei (İflas) — Begleitung bei Insolvenzanträgen und Gläubigervertretung in türkischen Insolvenzverfahren
• Forderungssicherung vor Klage — Ihtiyati Haciz (einstweilige Pfändung) zur Sicherung Ihrer Forderung vor Beginn des Hauptverfahrens
• Vollstreckung von Unterhaltstiteln — Durchsetzung von Unterhaltsurteilen über das türkische Vollstreckungsamt
• Vollstreckung von Schiedsurteilen — Anerkennung und Vollstreckung internationaler Schiedssprüche in der Türkei
• Inkasso Türkei — Außergerichtliche Forderungsbeitreibung und Verhandlungsführung mit Schuldnern in der Türkei

Wie läuft das İcra-Verfahren ab?
Schritt 1 — İcra Takibi einleiten:
Wir reichen den Vollstreckungsantrag beim zuständigen İcra Müdürlüğü ein. Der Schuldner erhält einen offiziellen Zahlungsbefehl und hat 7 Tage Zeit, zu zahlen oder Widerspruch einzulegen.
Schritt 2 — Widerspruch oder Zahlung:
Zahlt der Schuldner nicht und legt keinen Widerspruch ein, wird die Vollstreckung sofort eingeleitet. Legt er Widerspruch ein, führen wir das entsprechende İtirazın İptali-Verfahren vor Gericht.
Schritt 3 — Pfändung und Vollstreckung:
Wir beantragen die Pfändung von Bankkonten, Immobilien, Fahrzeugen oder sonstigen Vermögenswerten des Schuldners in der Türkei.
Schritt 4 — Verwertung:
Gepfändete Vermögenswerte werden versteigert oder direkt übertragen — bis Ihre Forderung vollständig beglichen ist.

Wichtiger Hinweis:
Im türkischen Vollstreckungsrecht gelten strenge Fristen. Wer zu lange wartet, riskiert die Verjährung seiner Ansprüche oder den Verlust von Sicherungsrechten. Wenden Sie sich so früh wie möglich an uns — je früher wir handeln, desto besser sind Ihre Chancen.

Wir begleiten Sie durch den gesamten Prozess — schnell, zuverlässig und mit langjähriger Erfahrung in der deutsch-türkischen Rechtspraxis.`},{id:"erbrecht",slugDE:"erbrecht",slugTR:"miras-hukuku",icon:we,title:"Erbrecht",titleTR:"Miras Hukuku",description:"Almanya ile Türkiye arasındaki miras davalarında uzman hukuki danışmanlık: miras tespitinden mal varlığının tam devrine kadar.",descriptionDE:"Fachanwaltliche Beratung bei Erbfällen zwischen Deutschland und der Türkei: von der Nachlassermittlung bis zur vollständigen Vermögensübertragung.",detail:"Veraset İlamı · İzale-i Şüyu · Saklı Pay · Mirasın Reddi · Tapu Devri · Banka Hesabı · Vasiyetname · Veraset Vergisi",detailDE:"Erbschein · Erbauseinanderersetzung · Pflichtteil · Erbverzicht · Tapu-Übertragung · Bankkonto · Testament · Erbschaftssteuer",content:`Miras Hukuku: Alman ve Türk vatandaşları için miras hukuku danışmanlığı
Türkiye'de mirasınız mı var? Mal varlığınızı zamanında güvence altına alın.

Türkiye ile bağlantılı bir miras davası, özellikle taşınmazlar, banka hesapları veya diğer mal varlıkları söz konusu olduğunda beklenmedik hukuki güçlükler doğurabilir. Uzman destek olmadan Türkiye'deki bir mirasın tasfiyesi uzun, maliyetli und hatalara açık bir sürece dönüşebilir.

Hukuk büromuz, Alman ve Türk miras hukukunda sınır ötesi uzmanlığa sahiptir und mirasınızı Türkiye'de bizzat takip eder: seyahat etmenize gerek kalmaz.

Sizin für neler yapıyoruz:
• Veraset İlamı (Erbschein): Türkiye'deki yetkili makamlarda veraset ilamının hızlı başvurusu ve tam takibi
• İzale-i Şüyu (Ortaklığın Giderilmesi): Türk mahkemelerinde paylı mülkiyet ve miras ortaklığının çözümünde hukuki destek
• Saklı Pay (Pflichtteil): Türk hukukuna göre saklı pay taleplerinin ileri sürülmesi veya savunulması
• Mirasın Reddi: Türkiye'deki mirastan feragat ve ret işlemlerinde danışmanlık ve takip
• Türkiye'de Taşınmaz Mirası: Tapu Devri: Tapu müdürlüğü koordinasyonu dahil taşınmazların mirasçılara hukuki güvenceyle devri
• Vefat Sonrası Türkiye'deki Banka Hesabı: Türk banka hesaplarının açılması ve devir işlemleri
• Vasiyetname: Türkiye'deki mal varlığınızı Türk hukukuna göre kişisel istekleriniz doğrultusunda güvence altına alan vasiyetname hazırlanması
• Veraset ve İntikal Vergisi: Türk veraset vergisinin hesaplanması, optimizasyonu ve ödeme sürecinin yönetimi
• Tereke Tespiti: Türkiye'deki miras varlıklarının eksiksiz tespiti ve değerlendirilmesi
• Muvazaalı Satış / Sahte Veraset: Türk mahkemelerinde sahte miras belgelerinin ve danışıklı işlemlerin iptali
• Türkiye-Almanya Çifte Vergilendirme Anlaşması: Alman-Türk vergi anlaşması çerçevesinde vergi avantajlı miras planlaması

Türk-Alman miras hukukundaki derin deneyimimize güvenin: güvenilir, gizli ve Türkiye'ye seyahat etmeden tam hizmet.`,contentDE:`Erbrecht: Fachanwaltliche Beratung für Erbfälle in Deutschland und der Türkei
Erbschaft in der Türkei? Sichern Sie Ihr Vermögen rechtzeitig und rechtssicher.

Ein Erbfall mit Bezug zur Türkei bringt oft unerwartete rechtliche und steuerliche Herausforderungen mit sich. Unsere Kanzlei verfügt over grenzüberschreitende Expertise und regelt Ihren Nachlass direkt vor Ort in der Türkei: ohne dass Sie dafür reisen müssen.

WAS WIR FÜR SIE TUN:

• Veraset İlamı (Erbschein) aus Deutschland beantragen: Schnelle Beantragung und Anerkennung des türkischen Erbscheins for Erbfälle in der Türkei direkt von Deutschland aus.
• Erbauseinanderersetzung Türkei (İzale-i Şüyu): Klärung von Erbstreitigkeiten bei gemeinsamem Eigentum (Grundstücke, Häuser) und gerichtliche Aufhebung der Gemeinschaft zur fairen Aufteilung.
• Pflichtteil im türkischen Erbrecht (Saklı Pay): Sicherung Ihrer gesetzlichen Pflichtteilsansprüche, die durch Testament oder Schenkungen beeinträchtigt wurden (Tenkis Davası).
• Erbverzicht und Ausschlagung Türkei (Mirasın Reddi): Vertretung bei der Ausschlagung überschuldeter Nachlässe oder beim notariellen Verzicht auf Erbansprüche in der Türkei.
• Immobilie in der Türkei geerbt: Tapu-Übertragung: Vollständige rechtliche Abwicklung der Grundbuchumschreibung von vererbten Immobilien auf die Erben.
• Bankkonto in der Türkei nach Todesfall: Ermittlung von Guthaben bei türkischen Banken, Aufhebung von Kontensperren und Auszahlung an die Erbengemeinschaft.
• Testament (Vasiyetname) in der Türkei: Gestaltung rechtssicherer Testamente for Ihre türkischen Vermögenswerte zur Vermeidung künftiger Erbstreitigkeiten.
• Erbschaftssteuer Türkei (Veraset ve İntikal Vergisi): Beratung und Abwicklung der türkischen Erbschaftssteuererklärung sowie Optimierung der Steuerlast.
• Nachlassermittlung Türkei (Tereke Tespiti): Gerichtliche Ermittlung von unbekannten Vermögenswerten (Immobilien, Konten, Depots) des Erblassers in der Türkei.
• Betrug bei Erbschaft Türkei (Muvazaalı Satış): Anfechtung von Scheingeschäften (Muris Muvazaası), wenn der Erblasser zu Lebzeiten Vermögen unrechtmäßig übertragen hat.
• Doppelbesteuerungsabkommen Türkei-Deutschland Erbschaft: Beratung zur Vermeidung der zweifachen Besteuerung Ihrer Erbschaft in beiden Ländern.

Vertrauen Sie auf unsere langjährige Erfahrung im deutsch-türkischen Erbrecht: zuverlässig, diskret und effizient.`},{id:"sorgerecht",slugDE:"sorgerecht",slugTR:"velayet",icon:_e,title:"Sorgerecht",titleTR:"Velayet",description:"Almanya ve Türkiye arasındaki velayet davaları, çocuk yetiştirme hakları ve uluslararası çocuk kaçırma (La Haye) konularında uzman hukuki destek.",descriptionDE:"Fachanwaltliche Unterstützung bei Sorgerechtsverfahren zwischen Deutschland und der Türkei sowie bei internationaler Kindesentführung (HKÜ).",detail:"Velayet Davaları · Tanıma ve Tenfiz · La Haye",detailDE:"Sorgerechtsklagen · Anerkennung · HKÜ",content:`Velayet — Almanya'daki Türkler için Türk Hukukunda Velayet
Türk-Alman Aile Hukukunda Velayet

Velayet, aile hukukunun temel unsurlarından biri olup ebeveynlerin küçük çocuklarına karşı hak ve yükümlülüklerini düzenler. Almanya'da yaşayan ya da daha önce Almanya'da ikamet etmiş Türk vatandaşları için, özellikle hem Türk hem de Alman hukukunun devreye girdiği durumlarda, karmaşık hukuki sorular gündeme gelebilmektedir.

Türk Hukukunda Velayet Ne Anlama Gelir?
Türk hukukuna göre velayet; çocuğun bakımı, yetiştirilmesi ve temsil edilmesi sorumluluğunu kapsar. Boşanma halinde velayet genellikle ebeveynlerden birine bırakılır ve bu kararın merkezinde her zaman çocuğun üstün yararı yer alır.

Ebeveynlerden birinin Almanya'da, diğerinin Türkiye'de ikamet etmesi; bir Türk velayet kararının Almanya'da tanınmak istenmesi ya da Almanya'da verilen bir kararın Türkiye'de uygulanması gereken durumlarda özel hukuki güçlükler ortaya çıkmaktadır.

Size sunduğumuz hizmetler:
• Türk ve Alman hukukuna göre velayet konusunda hukuki danışmanlık
• Türk mahkemelerinde velayet davalarında temsil
• Yabancı velayet kararlarının tanınması ve tenfizi
• Uluslararası çocuk kaçırma davalarında danışmanlık (La Haye Sözleşmesi)
• Türk ve Alman makamları arasında koordinasyon

Hukuk büromuz, Türk-Alman aile hukukunda uzmanlaşmış olup her adımda profesyonel ve empatik bir yaklaşımla yanınızdadır.`,contentDE:`Velayet — Sorgerecht im türkischen Recht for Deutschlandtürken
Sorgerecht im türkisch-deutschen Familienrecht

Das Sorgerecht („Velayet") ist ein zentraler Bestandteil des Familienrechts und regelt die Rechte und Pflichten der Eltern gegenüber ihren minderjährigen Kindern. Für Deutsch-Türken, die in Deutschland leben oder gelebt haben, ergeben sich häufig komplexe Rechtsfragen – insbesondere dann, wenn sowohl deutsches als auch türkisches Recht zur Anwendung kommt.

Was bedeutet Sorgerecht im türkischen Recht?
Nach türkischem Recht umfasst das Sorgerecht die Verantwortung für Pflege, Erziehung und gesetzliche Vertretung des Kindes. Im Falle einer Scheidung wird das Sorgerecht in der Regel einem Elternteil übertragen – maßgeblich ist dabei stets das Wohl des Kindes.

Besondere Herausforderungen entstehen, wenn ein Elternteil in Deutschland und der andere in der Türkei lebt, wenn un türkisches Sorgerechtsurteil in Deutschland anerkannt werden soll oder wenn ein deutsches Urteil in der Türkei vollstreckt werden muss.

Was wir for Sie tun:
• Rechtliche Beratung zum Sorgerecht nach türkischem und deustchem Recht
• Vertretung in Sorgerechtsklagen vor türkischen Gerichten
• Anerkennung und Vollstreckung ausländischer Sorgerechtsurteile
• Beratung bei internationalen Kindesentziehungsfällen (HKÜ)
• Koordination zwischen deutschen und türkischen Behörden

Unsere Kanzlei ist auf deutsch-türkisches Familienrecht spezialisiert und begleitet Sie kompetent und einfühlsam durch jeden Schritt des Verfahrens.`},{id:"immobilienrecht",slugDE:"immobilienrecht",slugTR:"gayrimenkul-hukuku",icon:Ee,title:"Immobilienrecht",titleTR:"Gayrimenkul Hukuku",description:"Türkiye'de mülkü bulunan, miras yoluyla taşınmaz edinen ya da gayrimenkul satın almayı planlayan vatandaşlar için tapu, kira ve mülkiyet süreçlerinde uzman destek.",descriptionDE:"Fachkundige rechtliche Begleitung für Deutsch-Türken bei Kauf, Verkauf, Grundbucheintragungen und Eigentumsstreitigkeiten von Immobilien in der Türkei.",detail:"Tapu İptali · Kira Sözleşmeleri · Şufa",detailDE:"Grundbuchberichtigung · Mietverträge · Vorkaufsrecht",content:`Gayrimenkul Hukuku — Türkiye'deki Taşınmaz Hukuku Süreçlerinde Uzman Destek
Gayrimenkul Hukuku Nedir? Hangi Durumlarda Gerekli Olur?

Gayrimenkul hukuku; arsa, konut ve işyeri gibi taşınmazlarla ilgili alım-satım, kira, tapu ve mülkiyet süreçlerinin tamamını düzenleyen hukuk dalıdır. Türkiye'de mülkü bulunan, miras yoluyla taşınmaz edinen ya da gayrimenkul satın almayı planlayan Almanya'daki Türk vatandaşları için uzman hukuki destek almak büyük önem taşımaktadır.

Taşınmaz işlemlerinde yapılan küçük bir hata, ciddi maddi kayıplara ve uzun soluklu dava süreçlerine yol açabilir.

Gayrimenkul Hukuku Hangi Alanları Kapsar?
• Tapu İptali ve Tescil Davaları — Hatalı tapu kayıtlarının iptali, düzeltilmesi ve yeni tescil işlemleri
• Kat Mülkiyeti ve Ortak Alan Uyuşmazlıkları — Kat mülkiyeti topluluklarında ortaya çıkan hukuki anlaşmazlıkların çözümü
• Kira Sözleşmeleri ve Tahliye Davaları — Kira alacaklarının tahsili ve kira ilişkisinin hukuki güvenceyle sona erdirilmesi
• Şufa ve İzale-i Şüyu Davaları — Önalım hakkının kullanılması ve paylı mülkiyetin mahkeme yoluyla giderilmesi
• İnşaat Sözleşmeleri — Kat karşılığı ve anahtar teslim projelerde hukuki danışmanlık ve sözleşme takibi
• Kamulaştırma ve Değer Tespiti Uyuşmazlıkları — Kamulaştırma süreçlerinde hukuki temsil ve bedel tespitine itiraz

Neden Hukuki Destek Almalısınız?
Uzman hukuki desteğiyle:
• Tapu işlemleriniz güvenli ve eksiksiz biçimde yürütülür
• Kira alacaklarınız hızlı ve etkili şekilde tahsil edilir
• Ortak mülkiyetleriniz hukuka uygun ve adil biçimde paylaştırılır

Hukuk büromuz, Türkiye'deki tüm gayrimenkul hukuku süreçlerinde yanınızdadır — profesyonel, güvenilir ve bizzat Türkiye'de bulunmanıza gerek kalmadan.`,contentDE:`Gayrimenkul Hukuku — Immobilienrecht in der Türkei for Deutsch-Türken
Was ist das türkische Immobilienrecht und wann wird es relevant?

Das türkische Immobilienrecht (Gayrimenkul Hukuku) regelt sämtliche rechtlichen Vorgänge rund um Grundstücke, Wohnimmobilien und Gewerbeimmobilien in der Türkei — von Kauf und Verkauf über Mietverträge bis hin to Grundbucheintragungen und Eigentumsstreitigkeiten.

Für Deutsch-Türken, die in der Türkei Eigentum besitzen, erben oder erwerben möchten, ist eine fachkundige rechtliche Begleitung unerlässlich — denn selbst kleine Fehler bei Immobiliengeschäften können zu erheblichen finanziellen Verlusten und langwierigen Gerichtsverfahren führen.

Welche Rechte umfasst das türkische Immobilienrecht?
• Grundbuchberichtigung & Eintragung — Anfechtung und Berichtigung fehlerhafter Grundbucheinträge sowie Neueintragungen
• Wohnungseigentum & Gemeinschaftsflächen — Rechtliche Klärung von Streitigkeiten in Wohnungseigentümergemeinschaften
• Mietverträge & Räumungsklagen — Durchsetzung von Mietzahlungen und rechtssichere Abwicklung von Mietverhältnissen
• Vorkaufsrecht & Aufhebung der Gemeinschaft — Durchsetzung des Vorkaufsrechts (Şufa) sowie Teilungsklagen bei gemeinschaftlichem Eigentum (İzale-i Şüyu)
• Bauverträge — Rechtliche Begleitung bei Bauträgerprojekten, Schlüsselfertigverträgen und Stockwerkbaurechten (Kat Karşılığı)
• Enteignung & Wertermittlung — Rechtliche Vertretung bei Enteignungsverfahren und Streitigkeiten over die Wertfestsetzung

Warum rechtliche Unterstützung unverzichtbar ist:
Ein einziger Fehler bei türkischen Immobiliengeschäften kann weitreichende Konsequenzen haben. Mit unserer Unterstützung:
• werden Grundbuch- und Tapu-Verfahren sicher und korrekt abgewickelt
• werden Mietforderungen schnell und effizient durchgesetzt
• wird gemeinschaftliches Eigentum rechtssicher und fair aufgeteilt

Unsere Kanzlei begleitet Sie bei allen immobilienrechtlichen Fragen in der Türkei — kompetent, zuverlässig und ohne dass Sie vor Ort sein müssen.`}],Ue="/assets/blog_real_estate-BsdSzrht.png",Pe="/assets/blog_tanima_tenfiz-BF9wvZ0P.png",Oe="/assets/blog_sakli_pay-B_8STbJm.png",Ye="/assets/blog_izale_i_suyu-CXt7Eodh.png",$e="/assets/blog_mavi_kart-oKz4CNqU.png",Ze="/assets/blog_criminal_summons-g4zAzZLs.png",qe="/assets/blog_criminal_complaint-BtVrdnj0.png",Je="/assets/blog_divorce-BgSDRDb9.png",Xe="/assets/blog_vekaletname-CG91CODL.png",C=[{slug:"miras-hukuku-rehberi",slugDE:"erbrecht-leitfaden-tuerkei",slugTR:"miras-hukuku-rehberi",titleDE:"Erbrecht-Leitfaden für türkische Staatsangehörige in Deutschland",titleTR:"Almanya'daki Türk Vatandaşları için Kapsamlı Miras Hukuku Rehberi",excerptDE:"Das Erbrecht für türkische Staatsangehörige in Deutschland beschäftigt viele Familien. Wir erklären den Veraset İlamı und Testamente nach türkischem Recht.",excerptTR:"Almanya'daki Türk vatandaşları için miras hukuku rehberi. Türk hukukuna göre Veraset İlamı, vasiyetnameler ve dikkat edilmesi gereken kritik noktalar.",contentDE:`**RECHTLICHER HINWEIS:** Dieser Artikel befasst sich ausschließlich mit dem türkischen Recht. Eine Beratung zum deutschen Recht (z.B. deutsches Erbrecht, Familienrecht nach BGB oder deutsches Migrationsrecht) findet in unserer Kanzlei nicht statt.

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
Als Mitglied der Ankara Barosu und der Rechtsanwaltskammer Karlsruhe (§ 207 BRAO) führen wir Erbschaftsangelegenheiten direkt vor türkischen Behörden durch. Wir sprechen Türkisch und Deutsch. Kontaktieren Sie uns für eine professionelle Unterstützung.`,contentTR:`**YASAL UYARI:** Bu makale yalnızca Türk hukuku ile ilgilidir. Büromuzda Alman hukuku (örneğin Alman miras hukuku, BGB uyarınca aile hukuku veya Alman göç hukuku) konusunda danışmanlık verilmemektedir.

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
Ankara Barosu ve Karlsruhe Barosu (§ 207 BRAO) üyesi olarak, Türkiye'deki tüm miras sürecinizi bizzat ve doğrudan yönetiyoruz. Türkçe ve Almanca hizmet veriyoruz.`,category:"Miras Hukuku",categoryDE:"Erbrecht",image:"https://images.unsplash.com/photo-1769092992534-f2d0210162b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXclMjBsaWJyYXJ5JTIwYm9va3MlMjBsZWdhbHxlbnwxfHx8fDE3NzQ2OTc3NDV8MA&ixlib=rb-4.1.0&q=80&w=1080",dateDE:"15. März 2026",dateTR:"15 Mart 2026",readTimeDE:"12 Min. Lesezeit",readTimeTR:"12 dk okuma",publishedAt:"2026-03-15"},{slug:"uluslararasi-bosanma",slugDE:"internationale-scheidung-tuerkei",slugTR:"uluslararasi-bosanma",titleDE:"Internationale Scheidungsverfahren – Was Sie wissen müssen",titleTR:"Uluslararası Boşanma Davalarında Bilinmesi Gerekenler",excerptDE:"Eine Scheidung zwischen Deutschland und der Türkei ist rechtlich komplex. Wir erklären Zuständigkeiten und die Anerkennung nach türkischem Recht.",excerptTR:"Almanya ve Türkiye arasındaki boşanma süreçleri hukuken karmaşıktır. Yetkili mahkemeler ve tanıma-tenfiz konularını Türk hukukuna göre açıklıyoruz.",contentDE:`**RECHTLICHER HINWEIS:** Dieser Artikel befasst sich ausschließlich mit dem türkischen Recht. Eine Beratung zum deutschen Recht (z.B. deutsches Erbrecht, Familienrecht nach BGB oder deutsches Migrationsrecht) findet in unserer Kanzlei nicht statt.

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
Internationale Scheidungsverfahren sind unser Alltag. Wir führen Anerkennungsverfahren direkt vor türkischen Gerichten – oft ohne dass Sie selbst reisen müssen. Wir sprechen Türkisch und Deutsch.`,contentTR:`**YASAL UYARI:** Bu makale yalnızca Türk hukuku ile ilgilidir. Büromuzda Alman hukuku (örneğin Alman miras hukuku, BGB uyarınca aile hukuku veya Alman göç hukuku) konusunda danışmanlık verilmemektedir.

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
Uluslararası boşanma davaları ve tanıma-tenfiz süreçleri bizim uzmanlık alanımızdır. Davanızı Türkiye'deki mahkemeler nezdinde bizzat takip ediyoruz.`,category:"Aile Hukuku",categoryDE:"Familienrecht",image:"https://images.unsplash.com/photo-1589829545856-d10d557cf95f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxsYXclMjBmaXJtJTIwY291cnR8ZW58MXx8fHwxNzc0Njk3NzQ1fDA&ixlib=rb-4.1.0&q=80&w=1080",dateDE:"2. März 2026",dateTR:"2 Mart 2026",readTimeDE:"10 Min. Lesezeit",readTimeTR:"10 dk okuma",publishedAt:"2026-03-02"},{slug:"gayrimenkul-haklari",slugDE:"immobilienrechte-tuerkei",slugTR:"gayrimenkul-haklari",titleDE:"Rechte von Ausländern beim Immobilienkauf in der Türkei",titleTR:"Yabancıların Türkiye'de Mülk Satın Alma Hakları",excerptDE:"Immobilienkauf in der Türkei: Rechtssichere Abwicklung aus Deutschland, Tapu-Prüfung und Risiken nach türkischem Recht.",excerptTR:"Türkiye'de taşınmaz edinimi: Almanya'dan vekaletle tapu devri, yasal incelemeler ve yabancı alıcılar için kritik riskler.",contentDE:`**RECHTLICHER HINWEIS:** Dieser Artikel befasst sich ausschließlich mit dem türkischen Recht. Eine Beratung zum deutschen Recht (z.B. deutsches Erbrecht, Familienrecht nach BGB oder deutsches Migrationsrecht) findet in unserer Kanzlei nicht statt.

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
Wir prüfen Ihre Verträge nach türkischem Recht und sorgen für eine rechtssichere Eintragung im Grundbuch. Wir sprechen Türkisch und Deutsch.`,contentTR:`**YASAL UYARI:** Bu makale yalnızca Türk hukuku ile ilgilidir. Büromuzda Alman hukuku (örneğin Alman miras hukuku, BGB uyarınca aile hukuku veya Alman göç hukuku) konusunda danışmanlık verilmemektedir.

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
Türkiye'deki taşınmaz hukukuna hakimiz ve işlemlerinizi doğrudan Türk makamları nezdinde takip ediyoruz.`,category:"Gayrimenkul Hukuku",categoryDE:"Immobilienrecht",image:Ue,dateDE:"2. April 2026",dateTR:"2 Nisan 2026",readTimeDE:"8 Min. Lesezeit",readTimeTR:"8 dk okuma",publishedAt:"2026-04-02"},{slug:"tanima-tenfiz-rehberi",slugDE:"tanima-tenfiz-leitfaden",slugTR:"tanima-tenfiz-rehberi",titleDE:"Tanıma ve Tenfiz: Warum Ihre deutsche Scheidung in der Türkei nicht gilt",titleTR:"Tanıma ve Tenfiz: Almanya'daki Boşanma Kararınız Türkiye'de Neden Geçersiz?",excerptDE:"In Deutschland geschieden, in der Türkei noch verheiratet? Wir erklären das Anerkennungsverfahren nach türkischem Recht.",excerptTR:"Almanya'daki boşanma kararınızı Türkiye'de nasıl tanıtabilirsiniz? Tanıma ve tenfiz davası süreçlerini açıklıyoruz.",contentDE:`**RECHTLICHER HINWEIS:** Dieser Artikel befasst sich ausschließlich mit dem türkischen Recht. Eine Beratung zum deutschen Recht (z.B. deutsches Erbrecht, Familienrecht nach BGB oder deutsches Migrationsrecht) findet in unserer Kanzlei nicht statt.

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
Wir führen Tanıma-Tenfiz-Verfahren persönlich vor dem türkischen Familiengericht – ohne Drittvermittlung.`,contentTR:`**YASAL UYARI:** Bu makale yalnızca Türk hukuku ile ilgilidir. Büromuzda Alman hukuku (örneğin Alman miras hukuku, BGB uyarınca aile hukuku veya Alman göç hukuku) konusunda danışmanlık verilmemektedir.

### Almanya'da Boşanmış, Türkiye'de Hala Evli

Alman mahkemesinin boşanma kararı Türkiye'de otomatik olarak tanınmaz. Bu kararın nüfus kayıtlarına işlenmesi için **Tanıma ve Tenfiz** davası açılmalıdır.

### Şartlar

- **Kesinleşme Şerhi**: Kararın kesinleşmiş olması.
- **Apostil**: Alman makamlarından alınan doğrulama şerhi.
- **Onaylı Tercüme**: Belgelerin Türkçeye çevrilmiş olması.

**Neden Dogru Kanzlei?**
Türkiye'deki aile mahkemeleri nezdindeki süreci bizzat yönetiyoruz.`,category:"Aile Hukuku",categoryDE:"Familienrecht",image:Pe,dateDE:"2. April 2026",dateTR:"2 Nisan 2026",readTimeDE:"6 Min. Lesezeit",readTimeTR:"6 dk okuma",publishedAt:"2026-04-02"},{slug:"sakli-pay-tenkis-davasi",slugDE:"pflichtteil-herabsetzungsklage-tuerkei",slugTR:"sakli-pay-tenkis-davasi",titleDE:"Saklı Pay im türkischen Erbrecht: Wann Erben klagen können",titleTR:"Saklı Pay ve Tenkis Davası: Mirasçıların Hakları ve Dava Süreci",excerptDE:"Pflichtteil (Saklı Pay) nach türkischem Recht verletzt? Wir erklären die Herabsetzungsklage (Tenkis Davası).",excerptTR:"Türk miras hukukunda saklı pay nedir? Tenkis davası şartları ve mirasçıların haklarını açıklıyoruz.",contentDE:`**RECHTLICHER HINWEIS:** Dieser Artikel befasst sich ausschließlich mit dem türkischen Recht. Eine Beratung zum deutschen Recht (z.B. deutsches Erbrecht, Familienrecht nach BGB oder deutsches Migrationsrecht) findet in unserer Kanzlei nicht statt.

### Was ist der Saklı Pay (Pflichtteil)?

Im türkischen Erbrecht schützt der Saklı Pay bestimmte nahe Angehörige davor, vollständig vom Erbe ausgeschlossen zu werden.

**Rechtsgrundlage**: TMK Art. 505–512.

### Die Tenkis Davası (Herabsetzungsklage)

Wurde der Pflichtteil verletzt, kann innerhalb einer Frist von 1 Jahr ab Kenntnis (max. 10 Jahre ab Eröffnung) die **Tenkis Davası** vor einem türkischen Zivilgericht erhoben werden.

**Doğru Kanzlei: Ihr Vorteil**
Als Mitglied der Ankara Barosu führen wir diese Klagen professionell vor türkischen Gerichten.`,contentTR:`**YASAL UYARI:** Bu makale yalnızca Türk hukuku ile ilgilidir. Büromuzda Alman hukuku (örneğin Alman miras hukuku, BGB uyarınca aile hukuku veya Alman göç hukuku) konusunda danışmanlık verilmemektedir.

### Saklı Pay Nedir?

Türk miras hukukunda saklı pay, miras bırakanın vasiyetname ile dahi dokunamayacağı miras hissesidir.

**Hukuki Dayanak**: TMK m. 505-512.

### Tenkis Davası

Saklı payınız ihlal edilmişse, öğrenmeden itibaren 1 yıl içinde **Tenkis Davası** açarak haklarınızı talep edebilirsiniz.`,category:"Miras Hukuku",categoryDE:"Erbrecht",image:Oe,dateDE:"2. April 2026",dateTR:"2 Nisan 2026",readTimeDE:"8 Min. Lesezeit",readTimeTR:"8 dk okuma",publishedAt:"2026-04-02"},{slug:"izale-i-suyu-paylasim-davasi",slugDE:"teilungsklage-immobilien-tuerkei",slugTR:"izale-i-suyu-paylasim-davasi",titleDE:"İzale-i Şüyu: Wenn Erben sich nicht einigen: Teilungsklage in der Türkei",titleTR:"İzale-i Şüyu: Miras Kalan Taşınmazlarda Ortaklığın Giderilmesi Davası",excerptDE:"İzale-i Şüyu (Teilungsklage) bei Erbimmobilien in der Türkei nach türkischem Zivilrecht.",excerptTR:"Mirasçılar arasında paylaşılamayan taşınmazlar için izale-i şüyu davası süreci ve yasal prosedürler.",contentDE:`**RECHTLICHER HINWEIS:** Dieser Artikel befasst sich ausschließlich mit dem türkischen Recht. Eine Beratung zum deutschen Recht (z.B. deutsches Erbrecht, Familienrecht nach BGB oder deutsches Migrationsrecht) findet in unserer Kanzlei nicht statt.

### Was ist İzale-i Şüyu?

Können sich Miteigentümer einer Immobilie in der Türkei nicht über Verkauf oder Nutzung einigen, kann jeder Teilhaber die Teilungsklage (**İzale-i Şüyu**) erheben.

**Rechtsgrundlage**: TMK Art. 698–699.

### Ablauf

Wenn eine Realteilung nicht möglich ist, wird das Gericht die Versteigerung der Immobilie anordnen. Der Erlös wird nach Anteilen verteilt.

**Unser Service**: Wir vertreten Sie im gesamten Versteigerungsprozess in der Türkei.`,contentTR:`**YASAL UYARI:** Bu makale yalnızca Türk hukuku ile ilgilidir. Büromuzda Alman hukuku (örneğin Alman miras hukuku, BGB uyarınca aile hukuku veya Alman göç hukuku) konusunda danışmanlık verilmemektedir.

### İzale-i Şüyu (Ortaklığın Giderilmesi)

Paydaşlar arasında paylaşılamayan taşınmazlar için Sulh Hukuk Mahkemesi'nde açılan davadır.

**Hukuki Dayanak**: TMK m. 698-699.`,category:"Miras Hukuku",categoryDE:"Erbrecht",image:Ye,dateDE:"2. April 2026",dateTR:"2 Nisan 2026",readTimeDE:"7 Min. Lesezeit",readTimeTR:"7 dk okuma",publishedAt:"2026-04-02"},{slug:"mavi-kart-haklari-rehberi",slugDE:"mavi-kart-rechte-tuerkei",slugTR:"mavi-kart-haklari-rehberi",titleDE:"Mavi Kart: Ihre Rechte in der Türkei nach Einbürgerung in Deutschland",titleTR:"Mavi Kart: Alman Vatandaşlığına Geçiş Sonrası Türkiye'deki Haklarınız",excerptDE:"Mavi Kart — Rechte in der Türkei: Eigentum und Erbschaft nach türkischem Staatsangehörigkeitsrecht.",excerptTR:"Mavi Kart nedir? Türkiye'de mülkiyet ve miras haklarınız. 5901 sayılı Kanun kapsamında eski Türk vatandaşlarının statüsü.",contentDE:`**RECHTLICHER HINWEIS:** Dieser Artikel befasst sich ausschließlich mit dem türkischen Recht. Eine Beratung zum deutschen Recht (z.B. deutsches Erbrecht, Familienrecht nach BGB oder deutsches Migrationsrecht) findet in unserer Kanzlei nicht statt.

### Was ist die Mavi Kart?

Ehemalige türkische Staatsbürger behalten durch die **Mavi Kart** viele ihrer Rechte in der Türkei.

**Rechtsgrundlage**: Art. 28 des türkischen Staatsangehörigkeitsgesetzes (TVK).

### Ihre Rechte in der Türkei

- **Immobilienerwerb**: Sie können wie türkische Bürger Immobilien erwerben.
- **Erbrecht**: Sie bleiben voll erbberechtigt.
- **Aufenthalt**: Visumfreier Aufenthalt in der Türkei.

**Doğru Kanzlei**: Wir beraten Sie zu allen mavkart-bezogenen Rechtsfragen in der Türkei.`,contentTR:`**YASAL UYARI:** Bu makale yalnızca Türk hukuku ile ilgilidir. Büromuzda Alman hukuku (örneğin Alman miras hukuku, BGB uyarınca aile hukuku veya Alman göç hukuku) konusunda danışmanlık verilmemektedir.

### Mavi Kart Hakları

Türk vatandaşlığından çıkan kişilerin Türkiye'deki haklarını koruyan statüdür.

**Hukuki Dayanak**: 5901 sayılı TVK Madde 28.`,category:"Vatandaşlık Hukuku",categoryDE:"Staatsangehörigkeitsrecht",image:$e,dateDE:"2. April 2026",dateTR:"2 Nisan 2026",readTimeDE:"5 Min. Lesezeit",readTimeTR:"5 dk okuma",publishedAt:"2026-04-02"},{slug:"vorladung-haftbefehl-tuerkei",slugDE:"vorladung-haftbefehl-tuerkei",slugTR:"turkiye-den-tebligat-veya-yakalama-karari",titleDE:"Vorladung oder Haftbefehl aus der Türkei: Was tun?",titleTR:"Türkiye'den Tebligat veya Yakalama Kararı mı Geldi? Almanya'dan Ne Yapmalısınız?",excerptDE:"Vorladungen oder Strafverfahren in der Türkei können auch aus Deutschland heraus nach türkischem Strafprozessrecht verteidigt werden.",excerptTR:"Türkiye'de hakkınızda açılan ceza davaları ve yakalama kararları. CMK uyarınca Almanya'dan savunma haklarınız.",contentDE:`**RECHTLICHER HINWEIS:** Dieser Artikel befasst sich ausschließlich mit dem türkischen Recht. Eine Beratung zum deutschen Recht (z.B. deutsches Erbrecht, Familienrecht nach BGB oder deutsches Migrationsrecht) findet in unserer Kanzlei nicht statt.

### Wenn Post aus der Türkei kommt

Erhalten Sie eine Vorladung oder einen Haftbefehl (**Yakalama Kararı**) aus der Türkei, ist professionelle Hilfe vor Ort in der Türkei entscheidend.

**Rechtsgrundlage**: Türkische Strafprozessordnung (CMK).

### Ihre Rechte

- **Vertretung**: Sie können sich durch einen in der Türkei zugelassenen Avukat vertreten lassen, oft ohne selbst reisen zu müssen.
- **Akteneinsicht**: Über das UYAP-System können wir den Stand Ihres Verfahrens prüfen.

**Doğru Kanzlei**: Als Mitglied der Ankara Barosu übernehmen wir Ihre Verteidigung vor türkischen Strafgerichten.`,contentTR:`**YASAL UYARI:** Bu makale yalnızca Türk hukuku ile ilgilidir. Büromuzda Alman hukuku (örneğin Alman miras hukuku, BGB uyarınca aile hukuku veya Alman göç hukuku) konusunda danışmanlık verilmemektedir.

### Yakalama Kararı ve Tebligatlar

Türkiye'deki ceza dosyalarınızı Almanya'dan vekalet vererek takip edebilirsiniz.

**Hukuki Dayanak**: CMK m. 145 vd.`,category:"Ceza Hukuku",categoryDE:"Strafrecht",image:Ze,dateDE:"2. April 2026",dateTR:"2 Nisan 2026",readTimeDE:"7 Min. Lesezeit",readTimeTR:"7 dk okuma",publishedAt:"2026-04-02"},{slug:"suc-duyurusu-tuerkei-rehberi",slugDE:"strafanzeige-tuerkei-rehber",slugTR:"turkiye-de-suc-duyurusu-rehberi",titleDE:"Strafanzeige in der Türkei aus Deutschland erstatten",titleTR:"Almanya'dan Türkiye'deki Bir Suç İçin Şikayetçi Olmak: Suç Duyurusu Rehberi",excerptDE:"Opfer einer Straftat in der Türkei geworden? Wir erklären die Strafanzeige (Suç Duyurusu) nach türkischem Recht.",excerptTR:"Türkiye'de mağdur olduğunuz suçlar için Almanya'dan nasıl suç duyurusunda bulunabilirsiniz?",contentDE:`**RECHTLICHER HINWEIS:** Dieser Artikel befasst sich ausschließlich mit dem türkischen Recht. Eine Beratung zum deutschen Recht (z.B. deutsches Erbrecht, Familienrecht nach BGB oder deutsches Migrationsrecht) findet in unserer Kanzlei nicht statt.

### Anzeige in der Türkei

Wenn Sie in der Türkei Opfer eines Betrugs oder einer anderen Straftat geworden sind, können Sie über einen Avukat Strafanzeige (**Suç Duyurusu**) bei der zuständigen türkischen Staatsanwaltschaft erstatten.

**Rechtsgrundlage**: CMK Art. 158.

**Doğru Kanzlei**: Wir formulieren Ihre Anzeige und verfolgen das Ermittlungsverfahren in der Türkei für Sie.`,contentTR:`**YASAL UYARI:** Bu makale yalnızca Türk hukuku ile ilgilidir. Büromuzda Alman hukuku (örneğin Alman miras hukuku, BGB uyarınca aile hukuku veya Alman göç hukuku) konusunda danışmanlık verilmemektedir.

### Türkiye'de Suç Duyurusu

Türkiye'deki suç mağduriyetleriniz için Almanya'dan vekaletle suç duyurusunda bulunabilirsiniz.`,category:"Ceza Hukuku",categoryDE:"Strafrecht",image:qe,dateDE:"2. April 2026",dateTR:"2 Nisan 2026",readTimeDE:"6 Min. Lesezeit",readTimeTR:"6 dk okuma",publishedAt:"2026-04-02"},{slug:"bosanma-rehberi-tuerkiye",slugDE:"scheidung-tuerkei-ohne-reise",slugTR:"turkiye-de-bosanma-rehberi",titleDE:"Scheidung in der Türkei ohne Reise",titleTR:"Almanya'dan Türkiye'de Boşanma: Anlaşmalı ve Çekişmeli Boşanma Rehberi",excerptDE:"Scheidung in der Türkei aus Deutschland einreichen nach türkischem Zivilgesetzbuch (TMK).",excerptTR:"Türkiye'ye gitmeden Almanya'dan boşanma davası nasıl açılır? Yasal şartlar ve süreçler.",contentDE:`**RECHTLICHER HINWEIS:** Dieser Artikel befasst sich ausschließlich mit dem türkischen Recht. Eine Beratung zum deutschen Recht (z.B. deutsches Erbrecht, Familienrecht nach BGB oder deutsches Migrationsrecht) findet in unserer Kanzlei nicht statt.

### Scheidung nach türkischem Recht

Eine Scheidung kann direkt vor türkischen Familiengerichten beantragt werden.

**Rechtsgrundlage**: TMK Art. 166.

- **Anlaşmalı Boşanma**: Einvernehmliche Scheidung via Anwaltsprotokoll.
- **Çekişmeli Boşanma**: Streitige Scheidung.

**Doğru Kanzlei**: Wir vertreten Sie in allen Phasen des türkischen Boşanma-Verfahrens.`,contentTR:`**YASAL UYARI:** Bu makale yalnızca Türk hukuku ile ilgilidir. Büromuzda Alman hukuku (örneğin Alman miras hukuku, BGB uyarınca aile hukuku veya Alman göç hukuku) konusunda danışmanlık verilmemektedir.

### Türkiye'de Boşanma Davası

Süreci Almanya'dan vekaletle yönetmek mümkündür. 

**Hukuki Dayanak**: TMK m. 166.`,category:"Aile Hukuku",categoryDE:"Familienrecht",image:Je,dateDE:"2. April 2026",dateTR:"2 Nisan 2026",readTimeDE:"8 Min. Lesezeit",readTimeTR:"8 dk okuma",publishedAt:"2026-04-02"},{slug:"vekaletname-rehberi-almanya",slugDE:"tuerkische-vekaletname-deutschland",slugTR:"almanya-da-vekaletname-cikarma-rehberi",titleDE:"Türkische Vollmacht (Vekaletname) in Deutschland",titleTR:"Almanya'da Türk Vekaletnamesi: Noter, Apostil ve Konsolosluk Rehberi",excerptDE:"Vekaletname in Deutschland erstellen — Schritte nach türkischem Notariatsrecht.",excerptTR:"Almanya'da nasıl vekaletname çıkarılır? Apostil ve tercüme süreçleri.",contentDE:`**RECHTLICHER HINWEIS:** Dieser Artikel befasst sich ausschließlich mit dem türkischen Recht. Eine Beratung zum deutschen Recht (z.B. deutsches Erbrecht, Familienrecht nach BGB oder deutsches Migrationsrecht) findet in unserer Kanzlei nicht statt.

### Die Vekaletname

Für Rechtsgeschäfte in der Türkei benötigen Sie eine formelle Vollmacht (**Vekaletname**).

**Verfahren**:
- Über ein türkisches Konsulat.
- Über einen deutschen Notar mit anschließender Apostille und Übersetzung.

**Doğru Kanzlei**: Wir stellen Ihnen die passenden Textvorlagen für Ihre türkische Vollmacht zur Verfügung.`,contentTR:`**YASAL UYARI:** Bu makale yalnızca Türk hukuku ile ilgilidir. Büromuzda Alman hukuku (örneğin Alman miras hukuku, BGB uyarınca aile hukuku veya Alman göç hukuku) konusunda danışmanlık verilmemektedir.

### Vekaletname İşlemleri

Türkiye'deki işlemleriniz için gerekli olan yetki belgesidir.`,category:"Hukuki Danışmanlık",categoryDE:"Rechtsberatung",image:Xe,dateDE:"2. April 2026",dateTR:"2 Nisan 2026",readTimeDE:"6 Min. Lesezeit",readTimeTR:"6 dk okuma",publishedAt:"2026-04-02"}],he=h.createContext(void 0);function Qe(a,i,t){var l,n;let r=a.replace(`/${i}`,`/${t}`);i==="tr"&&t==="de"?(r=r.replace("/hizmetler","/leistungen"),r=r.replace("/gizlilik-politikasi","/datenschutz"),r=r.replace("/yasal-bilgiler","/impressum"),r=r.replace("/hakkimizda","/ueber-uns")):i==="de"&&t==="tr"&&(r=r.replace("/leistungen","/hizmetler"),r=r.replace("/datenschutz","/gizlilik-politikasi"),r=r.replace("/impressum","/yasal-bilgiler"),r=r.replace("/ueber-uns","/hakkimizda"));const s=t==="de"?"/leistungen/":"/hizmetler/";if(r.includes(s)){const d=(l=r.split(s)[1])==null?void 0:l.split(/[?#]/)[0];if(d){const u=_.find(c=>i==="de"?c.slugDE===d:c.slugTR===d);if(u){const c=t==="de"?u.slugDE:u.slugTR;r=r.replace(d,c)}}}const o="/blog/";if(r.includes(o)){const d=(n=r.split(o)[1])==null?void 0:n.split(/[?#]/)[0];if(d){const u=C.find(c=>i==="de"?c.slugDE===d:c.slugTR===d);if(u){const c=t==="de"?u.slugDE:u.slugTR;r=r.replace(d,c)}}}return r}const ea=({language:a,children:i})=>{const t=M(),r=K(),s=n=>{if(n===a)return;const d=Qe(r.pathname,a,n)+r.search+r.hash;t(d)},o=n=>Le[a][n]||n,l=h.useMemo(()=>{const n=`/${a}`,d=a==="de"?"leistungen":"hizmetler";return{home:n,services:`${n}/${d}`,service:u=>{const c=_.find(m=>m.id===u),g=c?a==="de"?c.slugDE:c.slugTR:u;return`${n}/${d}/${g}`},blog:`${n}/blog`,blogPost:u=>{const c=C.find(m=>m.slug===u),g=c?a==="de"?c.slugDE:c.slugTR:u;return`${n}/blog/${g}`},datenschutz:a==="de"?`${n}/datenschutz`:`${n}/gizlilik-politikasi`,impressum:a==="de"?`${n}/impressum`:`${n}/yasal-bilgiler`,about:a==="de"?`${n}/ueber-uns`:`${n}/hakkimizda`,whyUs:`${n}/#neden-biz`,blogSection:`${n}/#blog`,contact:`${n}/#iletisim`}},[a]);return e.jsx(he.Provider,{value:{language:a,setLanguage:s,t:o,paths:l},children:i})},x=()=>{const a=h.useContext(he);if(a===void 0)throw new Error("useLanguage must be used within a LanguageProvider");return a},me="/assets/logo-eRLlm_XN.avif",Y="https://calendly.com/hasand9366/30min";function aa(){const[a,i]=h.useState(!1),[t,r]=h.useState(!1),{language:s,setLanguage:o,t:l,paths:n}=x(),{pathname:d,hash:u}=K(),c=M(),g=[{label:l("nav_home"),href:n.home},{label:l("nav_about"),href:n.about},{label:l("nav_services"),href:n.services},{label:l("nav_why_us"),href:n.whyUs},{label:l("nav_blog"),href:n.blog},{label:l("nav_contact"),href:n.contact}],m=d===`/${s}`||d===`/${s}/`;h.useEffect(()=>{const k=()=>i(window.scrollY>40);return window.addEventListener("scroll",k),()=>window.removeEventListener("scroll",k)},[]),h.useEffect(()=>{if(u){const k=u.replace("#",""),z=document.getElementById(k);if(z){const B=setTimeout(()=>{z.scrollIntoView({behavior:"smooth"})},150);return()=>clearTimeout(B)}}},[u]),h.useEffect(()=>(t?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[t]);const T=k=>{r(!1);const z=k.indexOf("#");if(z!==-1){const B=k.substring(0,z),ge=k.substring(z+1),fe=d.replace(/\/$/,""),V=B.replace(/\/$/,"");if(fe===V||m&&V===`/${s}`){const W=document.getElementById(ge);if(W){W.scrollIntoView({behavior:"smooth"});return}}c(k)}else c(k),window.scrollTo({top:0,behavior:"smooth"})},v=(a||!m)&&!t;return e.jsxs("header",{style:{position:"fixed",top:0,left:0,right:0,zIndex:100,transition:"background 0.3s, box-shadow 0.3s",background:v?"#ffffff":"transparent",boxShadow:v?"0 1px 24px rgba(0,0,0,0.07)":"none",borderBottom:v?"1px solid #f0f0f0":"1px solid rgba(255,255,255,0.1)"},children:[e.jsxs("div",{className:"relative z-50 max-w-[1400px] mx-auto px-6 lg:px-8 flex items-center justify-between h-[80px]",children:[e.jsxs(p,{to:n.home,"aria-label":`Doğru Kanzlei - ${l("nav_home")}`,onClick:k=>{m&&(k.preventDefault(),window.scrollTo({top:0,behavior:"smooth"}))},style:{textDecoration:"none",display:"flex",alignItems:"center",gap:12},children:[e.jsx("img",{src:me,alt:"Doğru Kanzlei Logo",width:44,height:44,style:{height:44,width:"auto",display:"block",filter:v?"none":"brightness(0) invert(1)",transition:"filter 0.3s"}}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("span",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:20,fontWeight:600,color:v?"#1C3829":"#ffffff",letterSpacing:"0.05em",textTransform:"uppercase",transition:"color 0.3s",lineHeight:1},children:"DOGRU"}),e.jsx("span",{style:{fontFamily:"'Lato', sans-serif",fontSize:9,fontWeight:700,color:"#7A5F20",letterSpacing:"0.2em",textTransform:"uppercase",marginTop:2},children:"Kanzlei"})]})]}),e.jsxs("nav",{className:"hidden lg:flex items-center gap-8","aria-label":s==="de"?"Hauptnavigation":"Ana navigasyon",children:[g.map(k=>e.jsx("button",{onClick:()=>T(k.href),"aria-label":k.label,style:{background:"none",border:"none",cursor:"pointer",fontFamily:"var(--font-sans)",fontSize:10,fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",color:v?"#3a3a3a":"rgba(255,255,255,0.9)",textDecoration:"none",transition:"color 0.2s",padding:"8px 0"},onMouseEnter:z=>z.target.style.color="#7A5F20",onMouseLeave:z=>z.target.style.color=v?"#3a3a3a":"rgba(255,255,255,0.9)",children:k.label},k.href)),e.jsx("div",{style:{width:1,height:18,background:v?"#e0e0e0":"rgba(255,255,255,0.2)"}}),e.jsxs("button",{onClick:()=>o(s==="tr"?"de":"tr"),"aria-label":s==="de"?"Sprache zu Türkisch wechseln":"Dili Almanca yap",style:{display:"flex",alignItems:"center",gap:5,background:"none",border:"none",cursor:"pointer",fontFamily:"var(--font-sans)",fontSize:11,fontWeight:700,color:v?"#3a3a3a":"#ffffff",textTransform:"uppercase"},children:[e.jsx(de,{size:13,color:"#7A5F20","aria-hidden":"true"}),s==="de"?"TR":"DE"]}),e.jsx("button",{onClick:()=>window.open(Y,"_blank"),style:{fontFamily:"var(--font-sans)",fontSize:10,fontWeight:700,letterSpacing:"0.12em",textTransform:"uppercase",color:"#ffffff",background:"#8B6E2A",padding:"12px 24px",textDecoration:"none",transition:"transform 0.2s, background 0.2s",border:"none",cursor:"pointer"},onMouseEnter:k=>{k.target.style.background="#7A5F20",k.target.style.transform="translateY(-1px)"},onMouseLeave:k=>{k.target.style.background="#8B6E2A",k.target.style.transform="translateY(0)"},children:l("nav_cta")})]}),e.jsxs("div",{className:"flex items-center gap-4 lg:hidden",children:[e.jsx("button",{onClick:()=>o(s==="tr"?"de":"tr"),"aria-label":s==="de"?"Sprache zu Türkisch wechseln":"Dili Almanca yap",style:{display:"flex",alignItems:"center",gap:4,background:"none",border:"none",cursor:"pointer",fontFamily:"'Lato', sans-serif",fontSize:12,fontWeight:700,color:v?"#3a3a3a":"#ffffff",textTransform:"uppercase"},children:s==="de"?"TR":"DE"}),e.jsx("button",{onClick:()=>r(!t),"aria-label":t?"Hauptmenü schließen":"Hauptmenü öffnen",style:{background:"none",border:"none",cursor:"pointer",color:v?"#1C3829":"#ffffff",padding:4},children:t?e.jsx(ue,{size:24}):e.jsx(Se,{size:24})})]})]}),e.jsx("div",{className:`fixed inset-0 bg-[#1C3829] z-40 transition-transform duration-500 ease-in-out lg:hidden ${t?"translate-x-0":"translate-x-full"}`,style:{top:0,height:"100vh"},children:e.jsxs("div",{className:"flex flex-col h-full pt-28 px-8 pb-12 overflow-y-auto",children:[e.jsx("div",{className:"flex flex-col gap-6 flex-grow",children:g.map((k,z)=>e.jsx("button",{onClick:()=>T(k.href),style:{transitionDelay:`${z*100}ms`},className:`text-left font-serif text-3xl font-medium text-white hover:text-[#8B6E2A] transition-all duration-300 ${t?"opacity-100 translate-y-0":"opacity-0 translate-y-4"}`,children:k.label},k.href))}),e.jsxs("div",{className:`mt-auto pt-8 border-t border-white/10 transition-all duration-500 delay-500 ${t?"opacity-100 translate-y-0":"opacity-0 translate-y-4"}`,children:[e.jsx("p",{className:"font-sans text-[11px] text-white/50 tracking-[0.2em] uppercase mb-4",children:s==="de"?"Direkter Kontakt":"Doğrudan İletişim"}),e.jsx("p",{className:"font-sans text-white mb-1",children:"info@hasandogru.de"}),e.jsx("p",{className:"font-sans text-white mb-2",children:"Avukat.hasandogru@outlook.de"}),e.jsx("p",{className:"font-sans text-white mb-8",children:"+4917661221210"}),e.jsx("button",{onClick:()=>window.open(Y,"_blank"),className:"w-full bg-[#8B6E2A] text-white font-sans text-xs font-bold tracking-[0.15em] uppercase py-5 text-center transition-colors hover:bg-[#7A5F20]",children:l("nav_cta")})]})]})})]})}const $="dogru_kanzlei_consent",Z="1";function na(){const[a,i]=h.useState("pending"),[t,r]=h.useState({essential:!0,functional:!1,analytics:!1}),[s,o]=h.useState(!1);h.useEffect(()=>{try{const g=localStorage.getItem($);if(g){const m=JSON.parse(g);if(m.version===Z){r(m.consent),i(m.status),o(!1);return}}}catch{}o(!0)},[]);const l=(g,m)=>{const T={version:Z,consent:g,status:m};localStorage.setItem($,JSON.stringify(T)),r(g),i(m),o(!1)};return{showBanner:s,status:a,consent:t,acceptAll:()=>{l({essential:!0,functional:!0,analytics:!0},"accepted")},rejectAll:()=>{l({essential:!0,functional:!1,analytics:!1},"rejected")},saveCustom:(g,m)=>{l({essential:!0,functional:g,analytics:m},"custom")},openSettings:()=>{o(!0)}}}const ke=h.createContext(null);function ia({children:a}){const i=na();return e.jsx(ke.Provider,{value:i,children:a})}function H(){const a=h.useContext(ke);if(!a)throw new Error("useConsent must be used within ConsentProvider");return a}function ra(){const{t:a,language:i,paths:t}=x(),{openSettings:r}=H(),s=new Date().getFullYear(),o=[{label:a("nav_about"),href:t.about},{label:a("nav_services"),href:t.services},{label:a("nav_why_us"),href:t.whyUs},{label:a("nav_blog"),href:t.blog},{label:a("nav_contact"),href:t.contact}],l=i==="de"?[{label:"Familienrecht",href:t.service("familienrecht")},{label:"Erbrecht",href:t.service("erbrecht")},{label:"Mietrecht",href:t.service("mietrecht")},{label:"Strafrecht",href:t.service("strafrecht")},{label:"Türkisches Recht",href:t.service("tuerkisches-recht")}]:[{label:"Aile Hukuku",href:t.service("familienrecht")},{label:"Miras Hukuku",href:t.service("erbrecht")},{label:"Kira Hukuku",href:t.service("mietrecht")},{label:"Ceza Hukuku",href:t.service("strafrecht")},{label:"Türk Hukuku",href:t.service("tuerkisches-recht")}];return e.jsxs("footer",{style:{background:"#111d17",padding:"64px 32px 32px"},children:[e.jsxs("div",{style:{maxWidth:1100,margin:"0 auto"},children:[e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"2.5fr 1fr 1fr 1.5fr",gap:48,paddingBottom:48,borderBottom:"1px solid rgba(255,255,255,0.06)"},className:"footer-grid",children:[e.jsxs("div",{children:[e.jsxs(p,{to:t.home,"aria-label":`Doğru Kanzlei - ${a("nav_home")}`,style:{marginBottom:20,display:"flex",alignItems:"center",gap:10,textDecoration:"none"},children:[e.jsx("img",{src:me,alt:"Doğru Kanzlei Logo",width:48,height:48,style:{height:48,width:"auto",display:"block",filter:"brightness(0) invert(1)"}}),e.jsx("span",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:22,fontWeight:600,color:"#ffffff",letterSpacing:"0.05em",textTransform:"uppercase"},children:"DOGRU Kanzlei"})]}),e.jsx("p",{style:{fontFamily:"'Lato', sans-serif",fontSize:13,fontWeight:400,color:"rgba(255,255,255,0.55)",lineHeight:1.7,maxWidth:320,marginBottom:24},children:a("footer_description")}),e.jsxs("div",{style:{display:"flex",gap:14},children:[e.jsx("div",{style:{width:28,height:28,borderRadius:"50%",background:"rgba(184,150,62,0.1)",display:"flex",alignItems:"center",justifyContent:"center",border:"1px solid rgba(184,150,62,0.2)"},children:e.jsx("div",{style:{width:6,height:6,borderRadius:"50%",background:"#B8963E"}})}),e.jsx("span",{style:{fontFamily:"var(--font-sans)",fontSize:14,fontWeight:500,color:"rgba(255,255,255,0.6)",letterSpacing:"0.05em"},children:"Mannheim · Ankara"})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontFamily:"'Lato', sans-serif",fontSize:10,fontWeight:700,letterSpacing:"0.15em",textTransform:"uppercase",color:"#B8963E",marginBottom:24},children:a("footer_quick_links")}),o.map(n=>e.jsx(p,{to:n.href,style:{display:"block",fontFamily:"var(--font-sans)",fontSize:13,fontWeight:500,color:"rgba(255,255,255,0.7)",textDecoration:"none",marginBottom:12,transition:"color 0.2s"},onMouseEnter:d=>d.target.style.color="#ffffff",onMouseLeave:d=>d.target.style.color="rgba(255,255,255,0.7)",children:n.label},n.label))]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontFamily:"'Lato', sans-serif",fontSize:10,fontWeight:700,letterSpacing:"0.15em",textTransform:"uppercase",color:"#B8963E",marginBottom:24},children:a("hero_cta_secondary")}),l.map(n=>e.jsx(p,{to:n.href,style:{display:"block",fontFamily:"var(--font-sans)",fontSize:13,fontWeight:500,color:"rgba(255,255,255,0.7)",textDecoration:"none",marginBottom:12,transition:"color 0.2s"},onMouseEnter:d=>d.target.style.color="#ffffff",onMouseLeave:d=>d.target.style.color="rgba(255,255,255,0.7)",children:n.label},n.label))]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontFamily:"'Lato', sans-serif",fontSize:10,fontWeight:700,letterSpacing:"0.15em",textTransform:"uppercase",color:"#8B6E2A",marginBottom:24},children:a("footer_contact_info")}),e.jsxs("div",{style:{fontFamily:"'Lato', sans-serif",fontSize:13,fontWeight:400,color:"rgba(255,255,255,0.7)",lineHeight:1.7},children:[e.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:10,marginBottom:14},children:[e.jsx(ce,{size:14,color:"#8B6E2A",style:{marginTop:4}}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[e.jsx("a",{href:"mailto:info@hasandogru.de",style:{color:"inherit",textDecoration:"none"},children:"info@hasandogru.de"}),e.jsx("a",{href:"mailto:Avukat.hasandogru@outlook.de",style:{color:"inherit",textDecoration:"none"},children:"Avukat.hasandogru@outlook.de"})]})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:14},children:[e.jsx(j,{size:14,color:"#8B6E2A"}),e.jsx("a",{href:"https://wa.me/4917661221210","aria-label":"Kontakt per WhatsApp",style:{color:"inherit",textDecoration:"none"},target:"_blank",rel:"noopener noreferrer",children:"+4917661221210"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:14},children:[e.jsx(j,{size:14,color:"#8B6E2A"}),e.jsx("span",{children:"+905332375918"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:10,marginBottom:14},children:[e.jsx(I,{size:14,color:"#8B6E2A",style:{marginTop:4}}),e.jsx("span",{children:"R1 2,3, 68161 Mannheim, Deutschland"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:10},children:[e.jsx(I,{size:14,color:"#8B6E2A",style:{marginTop:4}}),e.jsx("span",{children:"Aşağı Öveçler Mahallesi 1322 Cadde 45/9, Çankaya Ankara"})]})]})]})]}),e.jsx("div",{style:{marginTop:80,marginBottom:20},children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:40},className:"footer-disclaimer-grid",children:[e.jsxs("div",{children:[e.jsx("span",{style:{color:"#C9A84C",fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.2em",display:"block",marginBottom:16,opacity:.9},children:"Rechtlicher Hinweis"}),e.jsx("p",{style:{color:"rgba(255,255,255,0.6)",fontSize:11,lineHeight:1.8,margin:0,fontFamily:"'Lato', sans-serif"},children:"Die Kanzlei berät ausschließlich im türkischen Recht. Eine Beratung oder Vertretung im deutschen Recht findet nicht statt. Registriert als ausländischer Rechtsanwalt gemäß § 207 BRAO."})]}),e.jsxs("div",{lang:"tr",children:[e.jsx("span",{style:{color:"#C9A84C",fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.2em",display:"block",marginBottom:16,opacity:.9},children:"Yasal Uyarı"}),e.jsx("p",{style:{color:"rgba(255,255,255,0.6)",fontSize:11,lineHeight:1.8,margin:0,fontFamily:"'Lato', sans-serif"},children:"Büromuz yalnızca Türk hukuku alanında danışmanlık vermektedir. Alman hukuku konusunda danışmanlık veya temsil hizmeti verilmemektedir. § 207 BRAO uyarınca kayıtlı yabancı avukat."})]}),e.jsxs("div",{children:[e.jsx("span",{style:{color:"#C9A84C",fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.2em",display:"block",marginBottom:16,opacity:.9},children:"Legal Notice"}),e.jsx("p",{style:{color:"rgba(255,255,255,0.6)",fontSize:11,lineHeight:1.8,margin:0,fontFamily:"'Lato', sans-serif"},children:"The firm provides legal advice exclusively in Turkish law. We do not provide advice or representation in German law. Registered as a foreign lawyer according to § 207 BRAO."})]})]})}),e.jsxs("div",{style:{paddingTop:24,display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:16},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsxs("span",{style:{fontFamily:"'Lato', sans-serif",fontSize:11,fontWeight:400,color:"rgba(255,255,255,0.2)"},children:["© ",s," DOGRU Kanzlei · ",a("hero_title_pre")," Hasan Dogru. ",a("footer_rights")]}),e.jsxs("a",{href:"https://nüll.com",target:"_blank",rel:"noopener noreferrer",style:{display:"inline-flex",alignItems:"center",gap:"4px",fontFamily:"'Lato', sans-serif",fontSize:10,fontWeight:400,color:"rgba(255,255,255,0.4)",textDecoration:"none",transition:"all 0.2s ease"},onMouseEnter:n=>{const d=n.currentTarget;d.style.color="rgba(255,255,255,0.7)"},onMouseLeave:n=>{const d=n.currentTarget;d.style.color="rgba(255,255,255,0.4)"},children:["Site made by",e.jsxs("span",{style:{display:"flex",alignItems:"center",color:"rgba(255,255,255,0.8)",fontWeight:800,marginLeft:2,letterSpacing:"-0.02em",fontFamily:"var(--font-sans)"},children:["nüll",e.jsx("span",{style:{color:"#3B82F6"},children:"."}),"com"]})]})]}),e.jsxs("div",{style:{display:"flex",gap:24},children:[[{label:"Impressum",href:t.impressum},{label:"Datenschutz",href:t.datenschutz}].map(n=>e.jsx(p,{to:n.href,style:{fontFamily:"'Lato', sans-serif",fontSize:11,fontWeight:400,color:"rgba(255,255,255,0.6)",textDecoration:"none",transition:"color 0.2s"},onMouseEnter:d=>d.target.style.color="rgba(255,255,255,0.4)",onMouseLeave:d=>d.target.style.color="rgba(255,255,255,0.2)",children:n.label},n.label)),e.jsx("button",{onClick:r,style:{fontFamily:"'Lato', sans-serif",fontSize:11,fontWeight:400,color:"rgba(255,255,255,0.2)",textDecoration:"none",background:"none",border:"none",padding:0,cursor:"pointer",transition:"color 0.2s"},onMouseEnter:n=>n.target.style.color="rgba(255,255,255,0.4)",onMouseLeave:n=>n.target.style.color="rgba(255,255,255,0.2)",children:i==="de"?"Cookie-Einstellungen":"Çerez Ayarları"})]})]})]}),e.jsx("style",{children:`
        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 48px !important;
          }
        }
        @media (max-width: 768px) {
          .footer-disclaimer-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
        }
        @media (max-width: 640px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `})]})}function ta(){const{t:a}=x(),[i,t]=h.useState(!1);return e.jsxs("a",{href:"https://wa.me/4917661221210",target:"_blank",rel:"noopener noreferrer","aria-label":"Kontakt per WhatsApp",onMouseEnter:()=>t(!0),onMouseLeave:()=>t(!1),className:"fixed z-[200] flex items-center gap-3 bg-[#25D366] text-white no-underline rounded-full shadow-[0_6px_25px_rgba(37,211,102,0.45)] transition-all duration-300 bottom-6 right-6 md:bottom-8 md:right-8",style:{padding:i?"14px 26px":"14px 14px",transform:i?"scale(1.05)":"scale(1)"},children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",width:22,height:22,style:{flexShrink:0},children:e.jsx("path",{d:"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"})}),e.jsx("span",{style:{fontFamily:"var(--font-sans)",fontSize:"12px",fontWeight:"600",letterSpacing:"0.1em",textTransform:"uppercase",whiteSpace:"nowrap",maxWidth:i?180:0,opacity:i?1:0,overflow:"hidden",transition:"max-width 0.3s ease, opacity 0.2s ease",display:"inline-block"},children:a("contact_whatsapp_btn")})]})}const q={de:{title:"Ihre Privatsphäre",subtitle:"Wir respektieren Ihre Daten",description:"Diese Website verwendet Cookies und ähnliche Technologien. Einige sind notwendig, andere helfen uns, Ihnen einen besseren Service zu bieten. Gemäß §25 TDDDG und DSGVO benötigen wir Ihre Einwilligung.",essential:"Technisch notwendig",essentialDesc:"Erforderlich für die Grundfunktionen der Website. Kann nicht deaktiviert werden.",functional:"Funktional",functionalDesc:"Ermöglicht externe Dienste wie Calendly (Terminbuchung) und WhatsApp.",analytics:"Analyse",analyticsDesc:"Hilft uns, die Nutzung der Website zu verstehen (z.B. Google Analytics). Aktuell nicht aktiv.",acceptAll:"Alle akzeptieren",rejectAll:"Nur notwendige",saveCustom:"Auswahl speichern",customize:"Anpassen",alwaysOn:"Immer aktiv",privacyLink:"Datenschutzerklärung",imprintLink:"Impressum"},tr:{title:"Gizliliğiniz",subtitle:"Verilerinize saygı duyuyoruz",description:"Bu web sitesi çerezler ve benzer teknolojiler kullanmaktadır. Bazıları zorunlu, bazıları daha iyi hizmet sunmamıza yardımcı olmaktadır. GDPR ve §25 TDDDG kapsamında onayınızı talep ediyoruz.",essential:"Teknik Zorunlu",essentialDesc:"Web sitesinin temel işlevleri için gereklidir. Devre dışı bırakılamaz.",functional:"İşlevsel",functionalDesc:"Calendly (randevu) ve WhatsApp gibi harici hizmetlere olanak tanır.",analytics:"Analitik",analyticsDesc:"Web sitesi kullanımını anlamamıza yardımcı olur (örn. Google Analytics). Şu anda aktif değil.",acceptAll:"Tümünü kabul et",rejectAll:"Yalnızca zorunlu",saveCustom:"Seçimi kaydet",customize:"Özelleştir",alwaysOn:"Her zaman aktif",privacyLink:"Gizlilik Politikası",imprintLink:"Künye"}};function sa(){const{showBanner:a,consent:i,acceptAll:t,rejectAll:r,saveCustom:s}=H(),{language:o,paths:l}=x(),n=q[o]??q.de,[d,u]=h.useState(!1),[c,g]=h.useState(i.functional),[m,T]=h.useState(i.analytics);return a?e.jsxs("div",{className:"fixed inset-0 z-[9999] flex items-end justify-center pointer-events-none",style:{paddingBottom:"0",animation:"cookieFadeIn 0.2s ease forwards"},children:[e.jsx("div",{className:"absolute inset-0 bg-black/20 pointer-events-auto"}),e.jsx("div",{className:"relative pointer-events-auto w-full max-w-4xl mx-auto bg-white shadow-2xl border-t-4 border-[#8B6E2A]",style:{maxHeight:"90vh",overflowY:"auto",animation:"cookieSlideUp 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards"},children:e.jsxs("div",{className:"p-8 lg:p-12",children:[e.jsx("div",{className:"flex items-start justify-between gap-6 mb-8",children:e.jsxs("div",{className:"flex items-start gap-5",children:[e.jsx("div",{className:"w-12 h-12 bg-[#1C3829] flex items-center justify-center shrink-0",children:e.jsx(oe,{size:22,className:"text-[#8B6E2A]"})}),e.jsxs("div",{children:[e.jsx("div",{className:"flex items-center gap-3 mb-1",children:e.jsx("span",{className:"font-sans text-[10px] font-bold tracking-[0.2em] uppercase text-[#7A5F20]",children:"Doğru Kanzlei"})}),e.jsx("h2",{className:"font-serif text-2xl lg:text-3xl text-[#1C3829] font-medium leading-tight",children:n.title}),e.jsx("p",{className:"font-sans text-sm text-[#6a6a6a] mt-1",children:n.subtitle})]})]})}),e.jsx("p",{className:"font-sans text-[14px] text-[#4a4a4a] leading-relaxed mb-8 max-w-2xl",children:n.description}),e.jsxs("button",{onClick:()=>u(!d),className:"flex items-center gap-2 font-sans text-[12px] font-bold tracking-widest text-[#7A5F20] uppercase mb-6 hover:text-[#1C3829] transition-colors",children:[d?e.jsx(De,{size:14}):e.jsx(je,{size:14}),n.customize]}),e.jsx("div",{className:"overflow-hidden mb-8 transition-all duration-300 ease-in-out",style:{maxHeight:d?"500px":"0px",opacity:d?1:0},children:e.jsxs("div",{className:"space-y-4 border border-[#1C3829]/5 p-6 bg-[#F7F5F0]",children:[e.jsx(R,{title:n.essential,description:n.essentialDesc,checked:!0,disabled:!0,alwaysOnLabel:n.alwaysOn,onChange:()=>{}}),e.jsx(R,{title:n.functional,description:n.functionalDesc,checked:c,onChange:g}),e.jsx(R,{title:n.analytics,description:n.analyticsDesc,checked:m,onChange:T})]})}),e.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 mb-6",children:[e.jsxs("button",{onClick:t,className:"flex-1 flex items-center justify-center gap-2 py-4 bg-[#1C3829] text-white font-sans text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-[#8B6E2A] transition-colors",children:[e.jsx(L,{size:14}),n.acceptAll]}),d?e.jsxs("button",{onClick:()=>s(c,m),className:"flex-1 flex items-center justify-center gap-2 py-4 border border-[#1C3829] text-[#1C3829] font-sans text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-[#F7F5F0] transition-colors",children:[e.jsx(L,{size:14}),n.saveCustom]}):e.jsxs("button",{onClick:r,className:"flex-1 flex items-center justify-center gap-2 py-4 border border-[#1C3829]/30 text-[#6a6a6a] font-sans text-[11px] font-bold tracking-[0.2em] uppercase hover:border-[#1C3829] hover:text-[#1C3829] transition-colors",children:[e.jsx(ue,{size:14}),n.rejectAll]})]}),e.jsxs("div",{className:"flex gap-4 font-sans text-[11px] text-[#6a6a6a]",children:[e.jsx(p,{to:l.datenschutz,className:"hover:text-[#7A5F20] transition-colors underline-offset-2 hover:underline",onClick:r,children:n.privacyLink}),e.jsx("span",{children:"·"}),e.jsx(p,{to:l.impressum,className:"hover:text-[#7A5F20] transition-colors underline-offset-2 hover:underline",onClick:r,children:n.imprintLink})]})]})}),e.jsx("style",{children:`
        @keyframes cookieFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes cookieSlideUp {
          from { transform: translateY(80px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `})]}):null}function R({title:a,description:i,checked:t,disabled:r=!1,alwaysOnLabel:s,onChange:o}){return e.jsxs("div",{className:"flex items-start justify-between gap-4 py-4 border-b border-[#1C3829]/5 last:border-0",children:[e.jsxs("div",{className:"flex-grow",children:[e.jsx("div",{className:"font-sans text-[13px] font-bold text-[#1C3829] mb-1",children:a}),e.jsx("div",{className:"font-sans text-[12px] text-[#6a6a6a] leading-relaxed",children:i})]}),e.jsx("div",{className:"shrink-0 pt-1",children:r?e.jsx("span",{className:"font-sans text-[10px] font-bold tracking-widest text-[#8B6E2A] uppercase",children:s}):e.jsx("button",{role:"switch","aria-checked":t,"aria-label":a,onClick:()=>o(!t),className:`relative w-12 h-6 rounded-full transition-colors duration-200 focus:outline-none ${t?"bg-[#1C3829]":"bg-[#d4cfc6]"}`,children:e.jsx("span",{className:`absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200 ${t?"translate-x-6":"translate-x-0"}`})})})]})}const J="schema-org-jsonld",la={"@context":"https://schema.org","@graph":[{"@type":"LegalService","@id":"https://www.hasandogru.de/#organization",name:"Doğru Kanzlei",alternateName:"Avukat Hasan Doğru",url:"https://www.hasandogru.de",logo:"https://www.hasandogru.de/logo.png",description:"Avukat Hasan Doğru für türkisches und deutsches Recht in Mannheim und Ankara. Spezialisiert auf Familienrecht, Erbrecht, Mietrecht, Strafrecht und grenzüberschreitende Rechtsberatung.",telephone:"+4917661221210",email:["info@hasandogru.de","Avukat.hasandogru@outlook.de"],priceRange:"$$",knowsLanguage:["de","tr"],areaServed:[{"@type":"Country",name:"Germany"},{"@type":"Country",name:"Turkey"}],address:[{"@type":"PostalAddress",streetAddress:"R1 2,3",addressLocality:"Mannheim",postalCode:"68161",addressCountry:"DE"},{"@type":"PostalAddress",streetAddress:"Aşağı Öveçler Mahallesi 1322 Cadde 45/9",addressLocality:"Çankaya",addressRegion:"Ankara",addressCountry:"TR"}],founder:{"@type":"Person",name:"Hasan Doğru",jobTitle:"Avukat",knowsLanguage:["de","tr"]},hasOfferCatalog:{"@type":"OfferCatalog",name:"Rechtsgebiete",itemListElement:[{"@type":"Offer",itemOffered:{"@type":"Service",name:"Familienrecht / Aile Hukuku"}},{"@type":"Offer",itemOffered:{"@type":"Service",name:"Erbrecht / Miras Hukuku"}},{"@type":"Offer",itemOffered:{"@type":"Service",name:"Mietrecht / Kira Hukuku"}},{"@type":"Offer",itemOffered:{"@type":"Service",name:"Strafrecht / Ceza Hukuku"}},{"@type":"Offer",itemOffered:{"@type":"Service",name:"Türkisches Recht / Türk Hukuku"}}]},sameAs:[]},{"@type":"WebSite","@id":"https://www.hasandogru.de/#website",url:"https://www.hasandogru.de",name:"Doğru Kanzlei",publisher:{"@id":"https://www.hasandogru.de/#organization"},inLanguage:["de","tr"]}]};function oa(){const{language:a}=x();return h.useEffect(()=>{let i=document.getElementById(J);i||(i=document.createElement("script"),i.id=J,i.type="application/ld+json",document.head.appendChild(i)),i.textContent=JSON.stringify(la)},[a]),null}function X(){const{pathname:a}=K(),i=a.startsWith("/tr")?"tr":a.startsWith("/de")?"de":null;return i?(h.useEffect(()=>{window.scrollTo(0,0)},[a]),h.useEffect(()=>{i&&(document.documentElement.lang=i)},[i]),e.jsx(ea,{language:i,children:e.jsx(ia,{children:e.jsxs("div",{style:{fontFamily:"var(--font-sans)",margin:0,padding:0,minHeight:"100vh",overflowX:"hidden",display:"flex",flexDirection:"column"},children:[e.jsx(pe,{}),e.jsx(oa,{}),e.jsx(aa,{}),e.jsx("main",{style:{flex:1},children:e.jsx(ve,{})}),e.jsx(ra,{}),e.jsx(ta,{}),e.jsx(sa,{})]})})})):e.jsx(ye,{to:"/de",replace:!0})}const Q="/assets/hero-Bn0oq0cB.avif",da="https://calendly.com/hasand9366/30min";function ua(){const a=M(),{t:i,paths:t}=x(),r=s=>{if(s.startsWith("#")){const o=document.querySelector(s);o&&o.scrollIntoView({behavior:"smooth"})}else a(s)};return e.jsxs("section",{className:"relative min-h-screen bg-[#1C3829] overflow-hidden flex flex-col justify-center pt-40 pb-0 lg:pt-0 hero-instant",style:{animation:"heroFadeIn 0.5s ease forwards"},children:[e.jsx("style",{children:`
        @keyframes heroFadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes heroContentIn { from { opacity: 0; } to { opacity: 1; } }
      `}),e.jsx("div",{className:"absolute inset-0 z-0",children:e.jsxs("div",{className:"absolute inset-0 z-0 overflow-hidden opacity-100 transition-opacity duration-500",children:[e.jsx("div",{className:"absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(to_right,#B8963E_1px,transparent_1px),linear-gradient(to_bottom,#B8963E_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]"}),e.jsx("div",{className:"absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#1C3829]/70 via-[#1C3829]/40 to-[#1a3326] pointer-events-none z-0"}),e.jsxs("div",{className:"absolute inset-0 z-0 lg:hidden","aria-hidden":"true",children:[e.jsx("img",{src:Q,alt:"",width:1024,height:1280,className:"w-full h-full object-cover object-top opacity-30 mix-blend-overlay"}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#1C3829] via-[#1C3829]/80 to-transparent"})]})]})}),e.jsx("div",{className:"hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/5 pointer-events-none","aria-hidden":"true"}),e.jsxs("div",{className:"relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center flex-grow py-12 lg:py-20",children:[e.jsxs("div",{className:"lg:col-span-5 flex flex-col justify-center z-20",style:{animation:"heroContentIn 0.7s ease forwards"},children:[e.jsxs("div",{className:"flex items-center gap-4 mb-8",children:[e.jsx("span",{className:"w-12 h-[1px] bg-[#8B6E2A]"}),e.jsx("span",{className:"font-sans text-[11px] font-bold tracking-[0.2em] text-[#7A5F20] uppercase",children:"Mannheim · Ankara"})]}),e.jsxs("h1",{className:"font-serif text-5xl md:text-[4.8rem] lg:text-[5.2rem] font-medium leading-[1] text-white mb-8 tracking-tight",children:[e.jsx("span",{className:"block text-white/80 mb-3 font-normal text-2xl md:text-4xl lg:text-[2.8rem] tracking-normal",children:i("hero_title_pre")}),i("hero_title_main")]}),e.jsx("div",{className:"w-24 h-[2px] bg-[#8B6E2A] mb-8"}),e.jsx("p",{className:"font-serif text-2xl md:text-[28px] font-light italic text-white/90 leading-snug mb-8 max-w-lg",children:i("hero_subtitle")}),e.jsx("p",{className:"font-sans text-[15px] font-light text-white/60 leading-relaxed max-w-md mb-12",children:i("hero_description")}),e.jsxs("div",{className:"flex flex-wrap gap-5",children:[e.jsxs("button",{onClick:()=>window.open(da,"_blank"),"aria-label":i("hero_cta_primary"),className:"group relative overflow-hidden bg-[#8B6E2A] text-white font-sans text-[11px] font-bold tracking-[0.15em] uppercase px-10 py-5 transition-all hover:bg-[#7A5F20] flex items-center gap-3",children:[i("hero_cta_primary"),e.jsx(A,{className:"w-4 h-4 transition-transform group-hover:translate-x-1","aria-hidden":"true"})]}),e.jsx("button",{onClick:()=>r(t.services),"aria-label":i("hero_cta_secondary"),className:"group border border-white/20 text-white hover:border-[#8B6E2A] hover:text-[#7A5F20] font-sans text-[11px] font-bold tracking-[0.15em] uppercase px-10 py-5 transition-all bg-white/5 backdrop-blur-sm",children:i("hero_cta_secondary")})]})]}),e.jsx("div",{className:"lg:col-span-7 relative hidden md:flex justify-center lg:justify-end",style:{animation:"heroContentIn 0.7s ease 0.1s forwards",opacity:0},children:e.jsxs("div",{className:"relative w-full max-w-[480px] lg:max-w-[500px] xl:max-w-[540px] aspect-[4/5] z-10 mt-12 lg:mt-32",children:[e.jsx("div",{className:"absolute -top-5 -right-5 w-full h-full border border-[#8B6E2A]/40 z-0 transition-transform duration-700 hover:translate-x-2 hover:-translate-y-2"}),e.jsxs("div",{className:"relative w-full h-full bg-[#152a1e] border border-white/10 overflow-hidden z-10 shadow-2xl",children:[e.jsx("img",{src:Q,alt:"Avukat Hasan Doğru - Doğru Kanzlei Mannheim",width:540,height:675,fetchPriority:"high",decoding:"async",className:"w-full h-full object-cover object-top opacity-90 transition-transform duration-1000 hover:scale-105"}),e.jsx("div",{className:"absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-[#1C3829] via-[#1C3829]/60 to-transparent opacity-90"}),e.jsxs("div",{className:"absolute bottom-0 left-0 right-0 p-8 border-t border-[#8B6E2A]/20 bg-[#1C3829]/40 backdrop-blur-md",children:[e.jsxs("div",{className:"font-serif text-2xl font-medium text-white mb-2 tracking-wide",children:[i("hero_title_pre")," Hasan Doğru"]}),e.jsx("div",{className:"font-sans text-[11px] tracking-[0.2em] uppercase text-[#7A5F20]",children:i("lawyer_role")})]})]})]})})]})]})}const ca="/assets/tanima-vd2xoGN-.avif",ha="/assets/migration-G7ApS8jw.avif",ma="/assets/inheritance-CD7T1bo4.avif",ka="/assets/custody-D3gHhtt3.avif",ga="/assets/criminal-BOLXiXxA.avif",fa=`
  .fade-in-card {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.5s ease, transform 0.5s ease;
  }
  .fade-in-card.visible {
    opacity: 1;
    transform: translateY(0);
  }
  .fade-in-card:nth-child(2) { transition-delay: 0.1s; }
  .fade-in-card:nth-child(3) { transition-delay: 0.2s; }
  .fade-in-card:nth-child(4) { transition-delay: 0.3s; }
  .fade-in-card:nth-child(5) { transition-delay: 0.4s; }
`;function ba(a){h.useEffect(()=>{const i=a.current;if(!i)return;const t=i.querySelectorAll(".fade-in-card"),r=new IntersectionObserver(s=>{s.forEach(o=>{o.isIntersecting&&(o.target.classList.add("visible"),r.unobserve(o.target))})},{threshold:.1});return t.forEach(s=>r.observe(s)),()=>r.disconnect()},[a])}function ya(){const{t:a,language:i,paths:t}=x(),r=h.useRef(null);ba(r);const s=_.find(u=>u.id==="migrationsrecht"),o=_.find(u=>u.id==="tanima-ve-tenfiz"),l=_.find(u=>u.id==="strafrecht"),n=_.find(u=>u.id==="erbrecht"),d=_.find(u=>u.id==="sorgerecht");return e.jsxs("section",{id:"hizmetler",className:"bg-[#FDFCFB] py-16 md:py-24 px-6",children:[e.jsx("style",{children:fa}),e.jsxs("div",{className:"max-w-[1200px] mx-auto",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16",children:[e.jsxs("div",{className:"max-w-xl",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("div",{className:"w-8 h-[1px] bg-[#8B6E2A]"}),e.jsx("span",{className:"font-sans text-[9px] font-bold tracking-[0.25em] text-[#7A5F20] uppercase",children:a("practice_badge")})]}),e.jsxs("h2",{className:"font-serif text-4xl md:text-5xl text-[#1C3829] leading-tight",children:[a("practice_title")," ",e.jsx("br",{})," ",e.jsx("em",{className:"italic font-normal",children:a("practice_subtitle")})]})]}),e.jsxs(p,{to:t.services,className:"group inline-flex items-center gap-3 font-sans text-[10px] font-bold tracking-[0.2em] text-[#1C3829] uppercase border-b border-black/10 pb-1 hover:border-[#8B6E2A] transition-all",children:[a("practice_view_all")," ",e.jsx(Be,{size:14,className:"group-hover:translate-x-1 transition-transform"})]})]}),e.jsxs("div",{ref:r,className:"grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[minmax(260px,auto)]",children:[o&&e.jsx(p,{to:t.service(o.id),className:"md:col-span-3 group block",children:e.jsxs("div",{className:"fade-in-card h-full bg-white p-10 md:p-14 border-l-[3px] border-[#8B6E2A] flex flex-col justify-center relative transition-all duration-500 hover:shadow-xl hover:shadow-black/[0.02] overflow-hidden",children:[e.jsxs("div",{className:"md:hidden absolute inset-0 z-0","aria-hidden":"true",children:[e.jsx("img",{src:ca,alt:i==="tr"?"Tanıma ve Tenfiz hizmeti görseli":"Anerkennung und Vollstreckung Dienstleistungsbild",width:600,height:400,loading:"lazy",decoding:"async",className:"w-full h-full object-cover opacity-60"}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#1C3829] via-[#1C3829]/70 to-transparent"})]}),e.jsxs("div",{className:"relative z-10",children:[e.jsx("div",{className:"mb-8",children:(()=>{const u=o.icon;return u?e.jsx(u,{size:32,strokeWidth:1,className:"text-[#8B6E2A]","aria-hidden":"true"}):null})()}),e.jsx("h3",{className:"font-serif text-3xl md:text-4xl text-white md:text-[#1C3829] mb-6",children:i==="tr"?o.titleTR:o.title}),e.jsx("p",{className:"font-sans text-[15px] text-white/90 md:text-[#6a6a6a] leading-relaxed font-light max-w-2xl",children:i==="tr"?o.description:o.descriptionDE}),e.jsx("div",{className:"absolute bottom-10 right-10 text-white md:text-[#1C3829] opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-x-1",children:e.jsx(A,{size:20,"aria-hidden":"true"})})]})]})}),s&&e.jsx(p,{to:t.service(s.id),className:"md:col-span-1 group block",children:e.jsxs("div",{className:"fade-in-card h-full bg-[#F2F2F0] p-8 flex flex-col justify-center relative transition-all duration-500 hover:bg-[#ebebe9] overflow-hidden",children:[e.jsxs("div",{className:"md:hidden absolute inset-0 z-0","aria-hidden":"true",children:[e.jsx("img",{src:ha,alt:"",width:600,height:400,loading:"lazy",decoding:"async",className:"w-full h-full object-cover opacity-60"}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#1C3829] via-[#1C3829]/70 to-transparent"})]}),e.jsxs("div",{className:"relative z-10",children:[e.jsx("h3",{className:"font-serif text-xl text-white md:text-[#1C3829] mb-4",children:i==="tr"?s.titleTR:s.title}),e.jsx("p",{className:"font-sans text-[13px] text-white/90 md:text-[#6a6a6a] leading-relaxed font-light line-clamp-4",children:i==="tr"?s.description:s.descriptionDE}),e.jsx("div",{className:"mt-6 text-white md:text-[#1C3829] group-hover:text-[#B8963E] transition-all duration-500 group-hover:translate-x-1",children:e.jsx(A,{size:18,strokeWidth:1,"aria-hidden":"true"})})]})]})}),n&&e.jsx(p,{to:t.service(n.id),className:"md:col-span-1 group block",children:e.jsxs("div",{className:"fade-in-card h-full bg-[#F2F2F0] p-8 flex flex-col justify-center relative transition-all duration-500 hover:bg-[#ebebe9] overflow-hidden",children:[e.jsxs("div",{className:"md:hidden absolute inset-0 z-0","aria-hidden":"true",children:[e.jsx("img",{src:ma,alt:"",width:600,height:400,loading:"lazy",decoding:"async",className:"w-full h-full object-cover opacity-60"}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#1C3829] via-[#1C3829]/70 to-transparent"})]}),e.jsxs("div",{className:"relative z-10",children:[e.jsx("h3",{className:"font-serif text-xl text-white md:text-[#1C3829] mb-4",children:i==="tr"?n.titleTR:n.title}),e.jsx("p",{className:"font-sans text-[13px] text-white/90 md:text-[#6a6a6a] leading-relaxed font-light line-clamp-4",children:i==="tr"?n.description:n.descriptionDE}),e.jsx("div",{className:"mt-6 text-white md:text-[#1C3829] group-hover:text-[#B8963E] transition-all duration-500 group-hover:translate-x-1",children:e.jsx(A,{size:18,strokeWidth:1,"aria-hidden":"true"})})]})]})}),d&&e.jsx(p,{to:t.service(d.id),className:"md:col-span-1 group block",children:e.jsxs("div",{className:"fade-in-card h-full bg-[#F2F2F0] p-8 flex flex-col justify-center relative transition-all duration-500 hover:bg-[#ebebe9] overflow-hidden",children:[e.jsxs("div",{className:"md:hidden absolute inset-0 z-0","aria-hidden":"true",children:[e.jsx("img",{src:ka,alt:"",width:600,height:400,loading:"lazy",decoding:"async",className:"w-full h-full object-cover opacity-60"}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#1C3829] via-[#1C3829]/70 to-transparent"})]}),e.jsxs("div",{className:"relative z-10",children:[e.jsx("h3",{className:"font-serif text-xl text-white md:text-[#1C3829] mb-4",children:i==="tr"?d.titleTR:d.title}),e.jsx("p",{className:"font-sans text-[13px] text-white/90 md:text-[#6a6a6a] leading-relaxed font-light line-clamp-4",children:i==="tr"?d.description:d.descriptionDE}),e.jsx("div",{className:"mt-6 text-white md:text-[#1C3829] group-hover:text-[#B8963E] transition-all duration-500 group-hover:translate-x-1",children:e.jsx(A,{size:18,strokeWidth:1,"aria-hidden":"true"})})]})]})}),l&&e.jsx(p,{to:t.service(l.id),className:"md:col-span-2 group block",children:e.jsxs("div",{className:"fade-in-card h-full bg-[#1C3829] p-10 md:p-12 flex flex-col justify-center relative overflow-hidden transition-all duration-500 hover:brightness-110",children:[e.jsx("div",{className:"absolute right-[-20px] bottom-[-20px] opacity-[0.03] text-white pointer-events-none hidden md:block",children:(()=>{const u=l.icon;return u?e.jsx(u,{size:200,strokeWidth:.5,"aria-hidden":"true"}):null})()}),e.jsxs("div",{className:"md:hidden absolute inset-0 z-0","aria-hidden":"true",children:[e.jsx("img",{src:ga,alt:"",width:600,height:400,loading:"lazy",decoding:"async",className:"w-full h-full object-cover opacity-60"}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#1C3829] via-[#1C3829]/70 to-transparent"})]}),e.jsxs("div",{className:"relative z-10",children:[e.jsx("h3",{className:"font-serif text-2xl md:text-3xl text-white mb-6",children:i==="tr"?l.titleTR:l.title}),e.jsx("p",{className:"font-sans text-[14px] text-white/70 leading-relaxed font-light max-w-md",children:i==="tr"?l.description:l.descriptionDE}),e.jsxs("div",{className:"mt-8 inline-flex items-center gap-3 text-[#B8963E] font-sans text-[9px] font-bold tracking-widest uppercase hover:text-white transition-all duration-500 group-hover:translate-x-1",children:[a("practice_view_detail")," ",e.jsx(A,{size:14,"aria-hidden":"true"})]})]})]})})]})]})]})}function pa(){const{t:a}=x(),i=[{icon:Re,title:a("why_us_point_01_title"),description:a("why_us_point_01_desc")},{icon:Ie,title:a("why_us_point_02_title"),description:a("why_us_point_02_desc")},{icon:Ne,title:a("why_us_point_03_title"),description:a("why_us_point_03_desc")},{icon:de,title:a("why_us_point_04_title"),description:a("why_us_point_04_desc")}];return e.jsxs("section",{id:"neden-biz",className:"whyus-section",style:{background:"#1C3829",position:"relative",overflow:"hidden"},children:[e.jsx("div",{style:{position:"absolute",top:0,right:0,width:400,height:400,borderRadius:"50%",background:"radial-gradient(circle, rgba(184,150,62,0.07) 0%, transparent 70%)",transform:"translate(30%, -30%)",pointerEvents:"none"}}),e.jsx("div",{style:{position:"absolute",bottom:0,left:0,width:300,height:300,borderRadius:"50%",background:"radial-gradient(circle, rgba(184,150,62,0.05) 0%, transparent 70%)",transform:"translate(-30%, 30%)",pointerEvents:"none"}}),e.jsxs("div",{style:{maxWidth:1100,margin:"0 auto",position:"relative"},children:[e.jsxs("div",{style:{textAlign:"center",marginBottom:64},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:12,marginBottom:20},children:[e.jsx("div",{style:{width:32,height:1,background:"#B8963E"}}),e.jsx("span",{style:{fontFamily:"var(--font-sans)",fontSize:10,fontWeight:800,letterSpacing:"0.22em",color:"#B8963E",textTransform:"uppercase"},children:a("why_us_badge")}),e.jsx("div",{style:{width:32,height:1,background:"#B8963E"}})]}),e.jsxs("h2",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"clamp(32px, 3.5vw, 44px)",fontWeight:500,color:"#ffffff",lineHeight:1.15,margin:"0 0 20px",textAlign:"center"},children:[a("why_us_title"),e.jsx("br",{}),e.jsx("em",{style:{fontStyle:"italic",fontWeight:400},children:a("why_us_subtitle")})]}),e.jsx("p",{style:{fontFamily:"var(--font-sans)",fontSize:15,fontWeight:500,color:"rgba(255,255,255,0.85)",lineHeight:1.8,maxWidth:500,margin:"0 auto"},children:a("why_us_description")})]}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:2},className:"why-grid",children:i.map((t,r)=>{const s=t.icon;return e.jsxs("div",{style:{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.06)",padding:"44px 40px",position:"relative",transition:"background 0.3s, border-color 0.3s"},className:`why-item-${r+1}`,onMouseEnter:o=>{o.currentTarget.style.background="rgba(255,255,255,0.06)",o.currentTarget.style.borderColor="rgba(184,150,62,0.3)"},onMouseLeave:o=>{o.currentTarget.style.background="rgba(255,255,255,0.03)",o.currentTarget.style.borderColor="rgba(255,255,255,0.06)"},children:[e.jsx("div",{style:{position:"absolute",top:28,right:32,fontFamily:"'Cormorant Garamond', serif",fontSize:14,fontWeight:300,color:"rgba(255,255,255,0.85)",lineHeight:1,userSelect:"none"},children:String(r+1).padStart(2,"0")}),e.jsx("div",{style:{width:52,height:52,border:"1px solid rgba(184,150,62,0.35)",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:28},children:e.jsx(s,{size:22,style:{color:"#B8963E",strokeWidth:1.5}})}),e.jsx("h3",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:26,fontWeight:600,color:"#ffffff",lineHeight:1.2,marginBottom:16},children:t.title}),e.jsx("p",{style:{fontFamily:"var(--font-sans)",fontSize:14,fontWeight:500,color:"rgba(255,255,255,0.8)",lineHeight:1.8,margin:0},children:t.description})]},t.title)})})]}),e.jsx("style",{children:`
        .whyus-section {
          padding: 100px 32px;
        }
        @media (max-width: 768px) {
          .whyus-section {
            padding: 64px 24px;
          }
          .why-grid {
            grid-template-columns: 1fr !important;
          }
          .why-grid > div {
            grid-column: auto !important;
          }
        }
      `})]})}const S=[5,1,2,3,4,6];function va(){const{t:a}=x(),[i,t]=h.useState(0),r=()=>t(l=>l===0?S.length-1:l-1),s=()=>t(l=>l===S.length-1?0:l+1),o=S[i];return e.jsxs("section",{className:"testimonials-section",style:{background:"#F7F5F0"},children:[e.jsxs("div",{style:{maxWidth:1100,margin:"0 auto"},children:[e.jsxs("div",{style:{marginBottom:64},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:20},children:[e.jsx("div",{style:{width:32,height:1,background:"#B8963E"}}),e.jsx("span",{style:{fontFamily:"var(--font-sans)",fontSize:14,fontWeight:500,letterSpacing:"0.22em",color:"#B8963E",textTransform:"uppercase"},children:a("testimonials_badge")})]}),e.jsxs("h2",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"clamp(32px, 3.5vw, 44px)",fontWeight:500,color:"#1C3829",lineHeight:1.15,margin:0},children:[a("testimonials_title"),e.jsx("br",{}),e.jsx("em",{style:{fontStyle:"italic",fontWeight:400},children:a("testimonials_subtitle")})]})]}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 2fr",gap:64,alignItems:"center"},className:"testimonial-grid",children:[e.jsxs("div",{className:"testimonial-nav",children:[e.jsx("div",{className:"testimonial-nav-list",style:{marginBottom:40},children:S.map((l,n)=>e.jsxs("button",{onClick:()=>t(n),className:`testimonial-nav-button ${n===i?"active":""}`,style:{display:"block",width:"100%",background:"none",border:"none",borderLeft:`2px solid ${n===i?"#B8963E":"#d4cfc6"}`,padding:"12px 20px",textAlign:"left",cursor:"pointer",marginBottom:4,transition:"border-color 0.2s"},children:[e.jsx("div",{style:{fontFamily:"var(--font-sans)",fontSize:13,fontWeight:n===i?700:500,color:n===i?"#1C3829":"#9a9a8a",transition:"color 0.2s, font-weight 0.2s"},children:a(`testimonial_${l}_name`)}),e.jsx("div",{style:{fontFamily:"var(--font-sans)",fontSize:11,color:n===i?"#B8963E":"#bbb8b0",marginTop:2,transition:"color 0.2s"},children:a(`testimonial_${l}_area`)})]},l))}),e.jsxs("div",{className:"testimonial-nav-controls",style:{display:"flex",gap:8},children:[e.jsx("button",{onClick:r,"aria-label":"Vorheriges Testimonial",style:{width:44,height:44,border:"1px solid #d4cfc6",background:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",transition:"border-color 0.2s, background 0.2s"},onMouseEnter:l=>{var n;l.currentTarget.style.borderColor="#1C3829",l.currentTarget.style.background="#1C3829",(n=l.currentTarget.querySelector("svg"))==null||n.setAttribute("color","#fff")},onMouseLeave:l=>{var n;l.currentTarget.style.borderColor="#d4cfc6",l.currentTarget.style.background="none",(n=l.currentTarget.querySelector("svg"))==null||n.setAttribute("color","#1C3829")},children:e.jsx(Me,{size:18,color:"#1C3829"})}),e.jsx("button",{onClick:s,"aria-label":"Nächstes Testimonial",style:{width:44,height:44,border:"1px solid #d4cfc6",background:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",transition:"border-color 0.2s, background 0.2s"},onMouseEnter:l=>{var n;l.currentTarget.style.borderColor="#1C3829",l.currentTarget.style.background="#1C3829",(n=l.currentTarget.querySelector("svg"))==null||n.setAttribute("color","#fff")},onMouseLeave:l=>{var n;l.currentTarget.style.borderColor="#d4cfc6",l.currentTarget.style.background="none",(n=l.currentTarget.querySelector("svg"))==null||n.setAttribute("color","#1C3829")},children:e.jsx(Ke,{size:18,color:"#1C3829"})})]})]}),e.jsxs("div",{className:"testimonial-active-card",style:{background:"#ffffff",position:"relative",borderLeft:"3px solid #B8963E"},children:[e.jsx("div",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:120,fontWeight:400,color:"#f0ece4",lineHeight:.7,marginBottom:24,userSelect:"none"},children:'"'}),e.jsx("div",{style:{display:"flex",gap:4,marginBottom:24},children:Array.from({length:5}).map((l,n)=>e.jsx(Ce,{size:14,style:{fill:"#B8963E",color:"#B8963E"}},n))}),e.jsxs("p",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"clamp(20px, 2.5vw, 22px)",fontWeight:400,fontStyle:"italic",color:"#2a2a2a",lineHeight:1.6,marginBottom:36},children:['"',a(`testimonial_${o}_text`),'"']}),e.jsxs("div",{style:{borderTop:"1px solid #f0ece4",paddingTop:24},children:[e.jsx("div",{style:{fontFamily:"var(--font-sans)",fontSize:13,fontWeight:700,color:"#1C3829",letterSpacing:"0.04em"},children:a(`testimonial_${o}_name`)}),e.jsx("div",{style:{fontFamily:"'Lato', sans-serif",fontSize:13,fontWeight:600,color:"#555555",marginTop:4,letterSpacing:"0.06em"},children:a(`testimonial_${o}_area`)})]})]},i)]})]}),e.jsx("style",{children:`
        .testimonials-section {
          padding: 100px 32px;
        }
        .testimonial-active-card {
          padding: 56px 52px;
        }
        @media (max-width: 768px) {
          .testimonials-section {
            padding: 64px 24px 100px 24px;
          }
          .testimonial-grid {
            display: flex !important;
            flex-direction: column-reverse;
            gap: 40px !important;
          }
          .testimonial-active-card {
            padding: 32px 24px;
            border-left: none !important;
            border-top: 3px solid #B8963E;
          }
          .testimonial-nav-list {
            display: flex;
            overflow-x: auto;
            padding-bottom: 16px;
            margin-bottom: 24px !important;
            gap: 20px;
            -ms-overflow-style: none;
            scrollbar-width: none;
            scroll-snap-type: x mandatory;
            scroll-behavior: smooth;
          }
          .testimonial-nav-list::-webkit-scrollbar {
            display: none;
          }
          .testimonial-nav-button {
            border-left: none !important;
            border-bottom: 2px solid #e5e5e5 !important;
            min-width: 180px;
            flex-shrink: 0;
            margin-bottom: 0 !important;
            padding: 12px 0 16px 0 !important;
            scroll-snap-align: start;
            display: flex !important;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            white-space: normal;
          }
          .testimonial-nav-button.active {
            border-bottom-color: #B8963E !important;
          }
          .testimonial-nav-controls {
            justify-content: center;
            margin-top: 16px;
          }
        }
      `})]})}function za(){const{t:a,language:i,paths:t}=x();return e.jsxs("section",{id:"blog",className:"hidden md:block",style:{background:"#ffffff",padding:"100px 32px"},children:[e.jsxs("div",{style:{maxWidth:1100,margin:"0 auto"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"flex-end",justifyContent:"space-between",marginBottom:64,flexWrap:"wrap",gap:24},children:[e.jsxs("div",{children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:20},children:[e.jsx("div",{style:{width:32,height:1,background:"#B8963E"}}),e.jsx("span",{style:{fontFamily:"var(--font-sans)",fontSize:15,fontWeight:500,letterSpacing:"0.22em",color:"#B8963E",textTransform:"uppercase"},children:a("blog_badge")})]}),e.jsxs("h2",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"clamp(32px, 3.5vw, 44px)",fontWeight:500,color:"#1C3829",lineHeight:1.15,margin:0},children:[a("blog_title"),e.jsx("br",{}),e.jsx("em",{style:{fontStyle:"italic",fontWeight:400},children:a("blog_subtitle")})]})]}),e.jsxs(p,{to:t.blog,"aria-label":i==="de"?"Alle Blogbeiträge lesen":"Tüm blog yazılarını oku",style:{fontFamily:"var(--font-sans)",fontSize:12,fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",color:"#1C3829",textDecoration:"none",display:"flex",alignItems:"center",gap:8,borderBottom:"1px solid #1C3829",paddingBottom:2,transition:"color 0.2s, border-color 0.2s"},onMouseEnter:r=>{r.currentTarget.style.color="#B8963E",r.currentTarget.style.borderColor="#B8963E"},onMouseLeave:r=>{r.currentTarget.style.color="#1C3829",r.currentTarget.style.borderColor="#1C3829"},children:[i==="de"?"Alle Beiträge lesen":"Tüm yazıları oku",e.jsx(A,{size:14})]})]}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:32},className:"blog-grid",children:C.slice(0,3).map(r=>e.jsx("article",{className:"text-left",children:e.jsxs(p,{to:t.blogPost(r.slug),className:"group block no-justify",style:{textDecoration:"none",textAlign:"left"},children:[e.jsx("div",{style:{overflow:"hidden",marginBottom:24,height:220,background:"#e8e4dc"},children:e.jsx("img",{src:r.image,alt:i==="de"?r.titleDE:r.titleTR,loading:"lazy",style:{width:"100%",height:"100%",objectFit:"cover",display:"block",transition:"transform 0.5s ease"},className:"group-hover:scale-[1.04]"})}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16,marginBottom:14,textAlign:"left"},children:[e.jsx("span",{style:{fontFamily:"var(--font-sans)",fontSize:10,fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",color:"#B8963E"},children:i==="de"?r.categoryDE:r.category}),e.jsx("span",{style:{width:4,height:4,borderRadius:"50%",background:"#d4cfc6",display:"inline-block"}}),e.jsx("span",{style:{fontFamily:"var(--font-sans)",fontSize:12,fontWeight:400,color:"#888680"},children:i==="de"?r.dateDE:r.dateTR})]}),e.jsx("h3",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:22,fontWeight:600,color:"#1C3829",lineHeight:1.3,marginBottom:12,transition:"color 0.2s",textAlign:"left"},className:"group-hover:!text-[#B8963E] no-justify",children:i==="de"?r.titleDE:r.titleTR}),e.jsx("p",{style:{fontFamily:"var(--font-sans)",fontSize:11,fontWeight:700,color:"#5a5a5a",lineHeight:1.7,marginBottom:20,textAlign:"left"},className:"no-justify",children:i==="de"?r.excerptDE:r.excerptTR}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,fontFamily:"'Lato', sans-serif",fontSize:12,fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",color:"#1C3829"},children:[e.jsx("span",{children:a("blog_read_more")}),e.jsx(A,{size:13})]})]})},r.slug))})]}),e.jsx("style",{children:`
        @media (max-width: 900px) {
          .blog-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 600px) {
          .blog-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `})]})}function xa(){const{t:a,language:i}=x(),{consent:t,openSettings:r}=H(),s=[{city:"Mannheim",country:i==="tr"?"Almanya":"Deutschland",address:`R1 2,3
68161 Mannheim, Deutschland`,phone:"+4917661221210",emails:["info@hasandogru.de","Avukat.hasandogru@outlook.de"],hours:i==="tr"?"Pzt–Cmt: 09:00 – 18:00":"Mo–Sa: 09:00 – 18:00",mapLink:"https://www.google.com/maps/search/?api=1&query=R1+2+3+68161+Mannheim+Deutschland"},{city:"Ankara",country:i==="tr"?"Türkiye":"Türkei",address:`Aşağı Öveçler Mahallesi 1322 Cadde 45/9
Çankaya / Ankara, Türkiye`,phone:"+905332375918",emails:["info@hasandogru.de","Avukat.hasandogru@outlook.de"],hours:i==="tr"?"Pzt–Cum: 09:00 – 18:00":"Mo–Fr: 09:00 – 18:00",mapLink:"https://www.google.com/maps/search/?api=1&query=Aşağı+Öveçler+Mahallesi+1322+Cadde+45/9+Çankaya+Ankara+Türkiye"}];return e.jsxs("section",{id:"iletisim",className:"contact-section",style:{background:"#ffffff"},children:[e.jsxs("div",{style:{maxWidth:1100,margin:"0 auto"},children:[e.jsxs("div",{style:{textAlign:"center",marginBottom:80},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:12,marginBottom:20},children:[e.jsx("div",{style:{width:32,height:1,background:"#B8963E"}}),e.jsx("span",{style:{fontFamily:"var(--font-sans)",fontSize:14,fontWeight:500,letterSpacing:"0.22em",color:"#B8963E",textTransform:"uppercase"},children:a("contact_badge")}),e.jsx("div",{style:{width:32,height:1,background:"#B8963E"}})]}),e.jsxs("h2",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"clamp(32px, 4vw, 52px)",fontWeight:500,color:"#1C3829",lineHeight:1.1,margin:"0 0 16px"},children:[a("contact_title"),e.jsx("br",{}),e.jsx("em",{style:{fontStyle:"italic",fontWeight:400},children:a("contact_subtitle")})]}),e.jsx("p",{style:{fontFamily:"var(--font-sans)",fontSize:16,color:"#6a6a6a",lineHeight:1.8,maxWidth:600,margin:"0 auto"},children:a("contact_description")})]}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:64,alignItems:"start"},className:"contact-grid",children:[e.jsxs("div",{style:{background:"#F7F5F0",padding:48,borderLeft:"4px solid #B8963E"},children:[e.jsx("h3",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:32,color:"#1C3829",marginBottom:16},children:a("contact_direct_title")}),e.jsx("p",{style:{fontFamily:"var(--font-sans)",fontSize:15,color:"#6a6a6a",marginBottom:40,lineHeight:1.6},children:a("contact_direct_p")}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[t.functional?e.jsxs("a",{href:"https://calendly.com/hasand9366/30min",target:"_blank",rel:"noopener noreferrer","aria-label":a("contact_calendly_btn"),style:{display:"flex",alignItems:"center",justifyContent:"center",gap:12,background:"#1C3829",color:"#ffffff",padding:"18px 32px",fontFamily:"var(--font-sans)",fontSize:13,fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",textDecoration:"none",transition:"all 0.3s ease"},onMouseEnter:n=>n.currentTarget.style.background="#8B6E2A",onMouseLeave:n=>n.currentTarget.style.background="#1C3829",children:[e.jsx(U,{size:18}),a("contact_calendly_btn")]}):e.jsxs("button",{onClick:r,"aria-label":"Cookie-Einstellungen öffnen",style:{display:"flex",alignItems:"center",justifyContent:"center",gap:12,background:"#e8e4dc",color:"#6a6a6a",padding:"18px 32px",fontFamily:"var(--font-sans)",fontSize:13,fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",border:"none",cursor:"pointer",width:"100%"},children:[e.jsx(He,{size:18}),i==="de"?"Cookie-Einwilligung erforderlich":"Çerez izni gerekli"]}),e.jsxs("a",{href:"https://wa.me/4917661221210",target:"_blank",rel:"noopener noreferrer","aria-label":"Kontakt per WhatsApp",style:{display:"flex",alignItems:"center",justifyContent:"center",gap:12,background:"#ffffff",border:"1px solid #1C3829",color:"#1C3829",padding:"18px 32px",fontFamily:"var(--font-sans)",fontSize:13,fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",textDecoration:"none",transition:"all 0.3s ease"},onMouseEnter:n=>{n.currentTarget.style.background="#1C3829",n.currentTarget.style.color="#ffffff"},onMouseLeave:n=>{n.currentTarget.style.background="#ffffff",n.currentTarget.style.color="#1C3829"},children:[e.jsx(j,{size:18}),a("contact_whatsapp_btn")]})]}),e.jsxs("div",{style:{marginTop:48,borderTop:"1px solid #d4cfc6",paddingTop:32},children:[e.jsx("div",{style:{fontFamily:"var(--font-sans)",fontSize:11,fontWeight:700,color:"#B8963E",letterSpacing:"0.14em",textTransform:"uppercase",marginBottom:16},children:a("contact_languages_badge")}),e.jsx("div",{style:{display:"flex",gap:12},children:["Türkçe","Deutsch","English"].map(n=>e.jsx("span",{style:{fontFamily:"'Lato', sans-serif",fontSize:13,color:"#1C3829",background:"#ffffff",padding:"6px 16px",border:"1px solid #e0ddd5"},children:n},n))})]})]}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr",gap:32},children:s.map((n,d)=>e.jsxs("div",{style:{paddingBottom:d===0?32:0,borderBottom:d===0?"1px solid #f0ece4":"none"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:10,marginBottom:16},children:[e.jsx("h4",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:24,fontWeight:500,color:"#1C3829",margin:0},children:n.city}),e.jsx("span",{style:{fontFamily:"'Lato', sans-serif",fontSize:11,color:"#B8963E",textTransform:"uppercase",letterSpacing:"0.1em"},children:n.country})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsxs("div",{style:{display:"flex",gap:12},children:[e.jsx(I,{size:16,color:"#B8963E",style:{flexShrink:0,marginTop:4}}),e.jsx("div",{style:{fontFamily:"'Lato', sans-serif",fontSize:14,color:"#6a6a6a",lineHeight:1.6,whiteSpace:"pre-line"},children:n.address})]}),e.jsxs("div",{style:{display:"flex",gap:12},children:[e.jsx(j,{size:16,color:"#B8963E",style:{flexShrink:0}}),e.jsx("a",{href:`tel:${n.phone.replace(/\s/g,"")}`,style:{fontFamily:"'Lato', sans-serif",fontSize:14,color:"#4a4a4a",textDecoration:"none",fontWeight:500},children:n.phone})]}),e.jsxs("div",{style:{display:"flex",gap:12},children:[e.jsx(ce,{size:16,color:"#B8963E",style:{flexShrink:0}}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:n.emails.map(u=>e.jsx("a",{href:`mailto:${u}`,style:{fontFamily:"'Lato', sans-serif",fontSize:14,color:"#4a4a4a",textDecoration:"none",transition:"color 0.2s ease"},onMouseEnter:c=>c.currentTarget.style.color="#B8963E",onMouseLeave:c=>c.currentTarget.style.color="#4a4a4a",children:u},u))})]}),e.jsxs("div",{style:{display:"flex",gap:12},children:[e.jsx(U,{size:16,color:"#B8963E",style:{flexShrink:0}}),e.jsx("div",{style:{fontFamily:"'Lato', sans-serif",fontSize:14,color:"#6a6a6a"},children:n.hours})]})]})]},d))})]})]}),e.jsx("style",{children:`
        .contact-section {
          padding: 120px 32px;
        }
        @media (max-width: 991px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
        @media (max-width: 768px) {
          .contact-section {
            padding: 80px 24px;
          }
        }
      `})]})}const N="https://www.hasandogru.de";function b(a,i,t=!1){const r=t?"name":"property";let s=document.querySelector(`meta[${r}="${a}"]`);s||(s=document.createElement("meta"),s.setAttribute(r,a),document.head.appendChild(s)),s.content=i}function D(a,i,t={}){const r=Object.entries(t).map(([o,l])=>`[${o}="${l}"]`).join("");let s=document.querySelector(`link[rel="${a}"]${r}`);s||(s=document.createElement("link"),s.rel=a,Object.entries(t).forEach(([o,l])=>s.setAttribute(o,l)),document.head.appendChild(s)),s.href=i}function Ta(a){h.useEffect(()=>{var o;document.title=a.title,b("description",a.description,!0);const i=a.canonical||window.location.origin+window.location.pathname;D("canonical",i),b("og:title",a.title),b("og:description",a.description),b("og:url",i),b("og:type",a.ogType||"website"),b("og:locale",a.lang==="de"?"de_DE":"tr_TR"),b("og:locale:alternate",a.lang==="de"?"tr_TR":"de_DE"),b("og:site_name","Doğru Kanzlei");const t=`${N}/logo.png`,r=a.ogImage||t;b("og:image",r),b("twitter:card","summary_large_image",!0),b("twitter:title",a.title,!0),b("twitter:description",a.description,!0),b("twitter:image",r,!0),a.lang,a.alternateLang&&(D("alternate",a.alternateLang.href,{hreflang:a.alternateLang.lang}),D("alternate",i,{hreflang:a.lang}));const s=a.xDefault||(a.lang==="de"?i:(o=a.alternateLang)==null?void 0:o.href);s&&D("alternate",s,{hreflang:"x-default"}),a.noindex?b("robots","noindex, nofollow",!0):b("robots","index, follow",!0)},[a.title,a.description,a.canonical,a.ogImage,a.ogType,a.lang,a.alternateLang,a.noindex])}function ee(){const{language:a}=x();return Ta({title:a==="de"?"Avukat Hasan Doğru | Doğru Kanzlei Mannheim":"Avukat Hasan Doğru | Türk Hukuku Uzmanı Mannheim",description:a==="de"?"Avukat Hasan Doğru für türkisches und deutsches Recht in Mannheim. Spezialisiert auf Familienrecht, Erbrecht, Mietrecht und grenzüberschreitende Rechtsberatung. Professionelle Rechtsberatung.":"Mannheim'da Türk ve Alman hukuku alanında uzman avukatlık bürosu. Aile hukuku, miras hukuku, kira hukuku ve uluslararası hukuki danışmanlık. Profesyonel hukuki danışmanlık.",lang:a,canonical:`${N}/${a}`,alternateLang:{lang:a==="de"?"tr":"de",href:`${N}/${a==="de"?"tr":"de"}`}}),e.jsxs(e.Fragment,{children:[e.jsx(ua,{}),e.jsx(ya,{}),e.jsx(pa,{}),e.jsx(va,{}),e.jsx(za,{}),e.jsx(xa,{})]})}const ae=h.lazy(()=>w(()=>import("./Hizmetler-DiOTXmRM.js"),__vite__mapDeps([0,1,2,3])).then(a=>({default:a.Hizmetler}))),ne=h.lazy(()=>w(()=>import("./ServiceDetail-uV-gdJRW.js"),__vite__mapDeps([4,1,2,3])).then(a=>({default:a.ServiceDetail}))),ie=h.lazy(()=>w(()=>import("./BlogPage-BDQpKrG6.js"),__vite__mapDeps([5,1,2,3])).then(a=>({default:a.BlogPage}))),re=h.lazy(()=>w(()=>import("./BlogPost-CiLdHwgq.js"),__vite__mapDeps([6,1,2,3])).then(a=>({default:a.BlogPost}))),te=h.lazy(()=>w(()=>import("./Datenschutz-DjH0w5Vh.js"),__vite__mapDeps([7,1,2,3])).then(a=>({default:a.Datenschutz}))),se=h.lazy(()=>w(()=>import("./Impressum-Csxp8zoP.js"),__vite__mapDeps([8,1,2,3])).then(a=>({default:a.Impressum}))),le=h.lazy(()=>w(()=>import("./AboutPage-BsiXWWNb.js"),__vite__mapDeps([9,1,2,3])).then(a=>({default:a.AboutPage}))),Aa=h.lazy(()=>w(()=>import("./NotFound-B4HgYd1J.js"),__vite__mapDeps([10,1,2,3])).then(a=>({default:a.NotFound}))),y=a=>i=>e.jsx(h.Suspense,{fallback:e.jsx("div",{className:"min-h-screen bg-[#1C3829]"}),children:e.jsx(a,{...i})}),wa=ze([{path:"/",loader:()=>f("/de")},{path:"/familienrecht",loader:()=>f("/de/leistungen/familienrecht")},{path:"/erbrecht",loader:()=>f("/de/leistungen/erbrecht")},{path:"/immobilienrecht",loader:()=>f("/de/leistungen/immobilienrecht")},{path:"/scheidungsverfahren",loader:()=>f("/de/leistungen")},{path:"/schuldrecht",loader:()=>f("/de/leistungen")},{path:"/mietrecht",loader:()=>f("/de/leistungen")},{path:"/kontakt",loader:()=>f("/de/#iletisim")},{path:"/meine-vision",loader:()=>f("/de/#hakkimizda")},{path:"/blog",loader:()=>f("/de/blog")},{path:"/blogartikel",loader:()=>f("/de/blog")},{path:"/datenschutz",loader:()=>f("/de/datenschutz")},{path:"/impressum",loader:()=>f("/de/impressum")},{path:"/book-online",loader:()=>f("/de/#iletisim")},{path:"/treffen",loader:()=>f("/de/#iletisim")},{path:"/schlüsselthemen",loader:()=>f("/de/leistungen")},{path:"/de",Component:X,children:[{index:!0,Component:ee},{path:"leistungen",Component:y(ae)},{path:"leistungen/:id",Component:y(ne)},{path:"blog",Component:y(ie)},{path:"blog/:slug",Component:y(re)},{path:"datenschutz",Component:y(te)},{path:"impressum",Component:y(se)},{path:"ueber-uns",Component:y(le)}]},{path:"/tr",Component:X,children:[{index:!0,Component:ee},{path:"hizmetler",Component:y(ae)},{path:"hizmetler/:id",Component:y(ne)},{path:"blog",Component:y(ie)},{path:"blog/:slug",Component:y(re)},{path:"gizlilik-politikasi",Component:y(te)},{path:"yasal-bilgiler",Component:y(se)},{path:"hakkimizda",Component:y(le)}]},{path:"*",Component:y(Aa)}]);function _a(){return e.jsx(xe,{router:wa})}We.createRoot(document.getElementById("root")).render(e.jsx(_a,{}));setTimeout(()=>{document.dispatchEvent(new Event("render-event"))},3e3);export{N as S,Ta as a,C as b,_ as s,x as u};
