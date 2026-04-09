const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Hizmetler-DZsgoOHW.js","assets/react-router-6-Nor5m_.js","assets/proxy-DVrhTVfp.js","assets/ui-vendor-E682Tb8B.js","assets/react-core-D9_JuiPa.js","assets/ServiceDetail-DCq8Yw2u.js","assets/FAQItem-DMim3Ojw.js","assets/BlogPage-BFbv8YvU.js","assets/BlogPost-DYgshgG8.js","assets/Datenschutz-dzLC3xbq.js","assets/Impressum-DdYIfwI4.js","assets/AboutPage-CZvsAAPI.js","assets/NotFound-uTvfz7Pd.js"])))=>i.map(i=>d[i]);
import{a as pe,r as h,u as H,b as W,L as v,N as Te,S as Ae,O as we,c as xe,d,R as Se}from"./react-router-6-Nor5m_.js";import{r as De}from"./react-core-D9_JuiPa.js";import{U as P,S as ke,P as Ee,G as L,a as Be,B as Re,H as Me,b as Ke,c as me,X as he,M as _e,d as ce,e as M,f as V,C as je,g as Ve,h as q,A as w,i as Ie,j as He,k as We,l as Ne,m as Ge,n as Ce,o as Fe,p as U,L as Pe}from"./ui-vendor-E682Tb8B.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const s of u.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function t(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=t(l);fetch(l.href,u)}})();var _={exports:{}},D={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Y;function Le(){if(Y)return D;Y=1;var a=pe(),i=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,l=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function s(n,o,k){var m,g={},c=null,T=null;k!==void 0&&(c=""+k),o.key!==void 0&&(c=""+o.key),o.ref!==void 0&&(T=o.ref);for(m in o)r.call(o,m)&&!u.hasOwnProperty(m)&&(g[m]=o[m]);if(n&&n.defaultProps)for(m in o=n.defaultProps,o)g[m]===void 0&&(g[m]=o[m]);return{$$typeof:i,type:n,key:c,ref:T,props:g,_owner:l.current}}return D.Fragment=t,D.jsx=s,D.jsxs=s,D}var O;function qe(){return O||(O=1,_.exports=Le()),_.exports}var e=qe(),E={},Z;function Ue(){if(Z)return E;Z=1;var a=De();return E.createRoot=a.createRoot,E.hydrateRoot=a.hydrateRoot,E}var Ye=Ue();const Oe="modulepreload",Ze=function(a){return"/"+a},J={},x=function(i,t,r){let l=Promise.resolve();if(t&&t.length>0){let s=function(k){return Promise.all(k.map(m=>Promise.resolve(m).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};document.getElementsByTagName("link");const n=document.querySelector("meta[property=csp-nonce]"),o=(n==null?void 0:n.nonce)||(n==null?void 0:n.getAttribute("nonce"));l=s(t.map(k=>{if(k=Ze(k),k in J)return;J[k]=!0;const m=k.endsWith(".css"),g=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${k}"]${g}`))return;const c=document.createElement("link");if(c.rel=m?"stylesheet":Oe,m||(c.as="script"),c.crossOrigin="",c.href=k,o&&c.setAttribute("nonce",o),document.head.appendChild(c),m)return new Promise((T,z)=>{c.addEventListener("load",T),c.addEventListener("error",()=>z(new Error(`Unable to preload CSS for ${k}`)))})}))}function u(s){const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=s,window.dispatchEvent(n),!n.defaultPrevented)throw s}return l.then(s=>{for(const n of s||[])n.status==="rejected"&&u(n.reason);return i().catch(u)})},Je={tr:{nav_home:"Ana Sayfa",nav_about:"Hakkımızda",nav_services:"Hizmetler",nav_why_us:"Neden Biz?",nav_blog:"Blog",nav_contact:"İletişim",nav_cta:"Danışma Al",hero_title_pre:"Avukat",hero_title_main:"Hasan Doğru",hero_subtitle:"Türk Hukuku Uzmanı",hero_description:"Alman ve Türk hukuk sistemleri arasında köprü işlevi görecek deneyimli bir hukuk danışmanı arıyorsanız, uluslararası nitelikteki karmaşık hukuki süreçlerde uzman bilgi birikimim ve geniş deneyimimle hizmetinizdeyim",hero_cta_primary:"Hemen Danışın",hero_cta_secondary:"Hizmetlerimiz",stats_years_title:"15 Yıllık Deneyim",stats_years_subtitle:"Güven ve Otorite Temelinde",lawyer_role:"Türk Hukuku Avukatı",service_01_title:"Sınır Ötesi Hukuk",service_01_subtitle:"Almanya - Türkiye Hattı",service_02_title:"Kurumsal Danışmanlık",service_02_subtitle:"Ticaret ve Şirketler",service_03_title:"Etkin Dava Takibi",service_03_subtitle:"Otoriter Temsil",why_us_badge:"Neden Biz?",why_us_title:"Neden",why_us_subtitle:"DOĞRU KANZLEİ?",why_us_description:"Türkiye'deki davalarınızı Almanya'dan takip ediyoruz — Türk mahkemelerinde bizzat, aracısız, tam yetkiyle. İşte bizim avantajlarımız:",why_us_point_01_title:"Türk Mahkemelerine Dijital Erişim",why_us_point_01_desc:"UYAP sistemine kayıtlı bir avukat olarak Türkiye'deki hukuki işlemlerinizi Almanya'dan gerçek zamanlı olarak yönetiyorum. Duruşmalar, belge takibi, dava durumu. Hepsini sizin adınıza uzaktan hallediyorum. Türkiye'ye bizzat gitmenize hiç gerek yok.",why_us_point_02_title:"Çifte Baro Üyeliği",why_us_point_02_desc:"Hem Ankara Barosu hem de Karlsruhe Barosu (§207 BRAO) üyesi olarak sizi Türk mahkemelerinde doğrudan temsil ediyorum. Aracı avukata, iş ortağına gerek yok. Diğer bürolar Türkiye'deki işler için dışarıdan avukata muhtaçken ben bizzat hareket ediyorum. Bu zaman, maliyet ve iletişim kayıplarını ortadan kaldırır.",why_us_point_03_title:"70+ Google Yorumu · 5,0 Yıldız",why_us_point_03_desc:"70'ten fazla müvekkil deneyimlerini paylaştı. Tam puan olan 5,0 üzerinden 5,0 yıldızla. Bu bir tesadüf değil; tutarlı, kişisel ve sonuç odaklı çalışmanın ürünü. Kendiniz görün.",why_us_point_04_title:"Ankara'da Ofis",why_us_point_04_desc:"Almanya'daki ofisimizin yanı sıra Ankara'da gerçek bir ofisimiz bulunuyor. Bu şu anlama gelir: Türk mahkemeleri, noterler ve resmi kurumlarla doğrudan iletişim ve gerektiğinde hızlı yerinde müdahale. Dış kaynak yok. Dolaylı yol yok.",about_badge:"HAKKIMIZDA",about_title:"Hakkımda",about_subtitle:"Avukat Hasan Doğru",about_p1:"Hukuk yoluna adım atmadan önce Türk güvenlik teşkilatında yaklaşık on yıl görev yaptım — en yüksek disiplin, dayanıklılık ve Türk hukuk sistemine derin bir hakimiyet gerektiren operasyonel bir özel birimde. Bu yıllar beni şekillendirdi: Baskı altında isabetli kararlar almayı, karmaşık durumları hızla analiz etmeyi ve başkaları adına sorumluluk üstlenmeyi öğrendim. Bugün her davama tam olarak bu birikimle yaklaşıyorum.",about_p2:"Aktif görev süremdeyken paralel olarak üniversite eğitimime başladım — önce Anadolu Üniversitesi'nde Kamu Yönetimi, ardından Cyprus International University'de Hukuk (LL.B.) okudum. Ankara Barosu'na kayıt yaptırarak (Sicil No: 47068) avukatlık ruhsatımı aldıktan sonra yaşamımı Almanya'ya taşıdım.",about_p3:"Karlsruhe Barosu'na §207 BRAO kapsamında kaydımı yaptırdığımdan bu yana Mannheim ve Ankara ofislerimden müvekkillerime yalnızca Türk hukuku ve milletlerarası hukuk alanında danışmanlık ve temsil hizmeti sunmaktayım. Doğrudan, kişisel ve aracısız.",about_p4:"Beni diğerlerinden ayıran şey: Çifte baro üyeliğim sayesinde müvekkillerimi Türk mahkemeleri ve resmi kurumlar önünde bizzat temsil etme yetkisine sahibim — müvekkillerimin Türkiye'ye gitmesine gerek kalmadan. 70'i aşkın Google yorumu ve tam puan olan 5,0 yıldız, müvekkillerimin bana gösterdiği güvenin somut bir yansımasıdır.",about_cred_01:"Ankara Barosu Üyesi",about_cred_02:"Karlsruhe Barosu — §207 BRAO",about_cred_03:"Türk Mahkemelerinde Doğrudan Temsil",about_cred_04:"Mannheim & Ankara Ofisi",about_signature_role:"Kurucu Avukat",about_press_badge:"BASINDA BİZ",about_press_title:"Haberlerde",about_press_subtitle:"Doğru Kanzlei",practice_badge:"Uzmanlık Alanlarımız",practice_title:"Kapsamlı Hukuki",practice_subtitle:"Danışmanlık",practice_view_all:"TÜMÜNÜ İNCELE",practice_view_detail:"DETAYLI İNCELE",contact_badge:"İletişim",contact_title:"Bize",contact_subtitle:"Ulaşın",contact_description:"Davanızın değerlendirilmesi ve profesyonel hukuki destek için bizimle iletişime geçin. Size en doğru hukuki yolu gösteriyoruz.",contact_form_title:"Danışma Talebi",contact_form_name:"Ad Soyad *",contact_form_email:"E-posta *",contact_form_phone:"Telefon",contact_form_area:"Hukuk Alanı",contact_form_area_placeholder:"Seçiniz...",contact_form_message:"Mesajınız *",contact_form_submit:"Mesaj Gönder",contact_success_title:"Mesajınız Alındı",contact_success_p:"En kısa sürede sizinle iletişime geçeceğiz. Teşekkür ederiz.",contact_office_hours_tr:"Pzt–Cum: 09:00 – 18:00",contact_office_hours_de:"Pzt–Cmt: 09:00 – 18:00",contact_languages_badge:"Hizmet Dilleri",contact_calendly_btn:"Randevu Al",contact_whatsapp_btn:"WhatsApp ile Ulaşın",contact_direct_title:"Hızlı İletişim",contact_direct_p:"Bize doğrudan ulaşın veya size uygun bir zamanda görüşme ayarlayın.",testimonials_badge:"Müvekkil Yorumları",testimonials_title:"Müvekkillerimiz",testimonials_subtitle:"Ne Diyor?",testimonial_1_name:"Hatice Kul",testimonial_1_area:"Tanıma ve Tenfiz",testimonial_1_text:"Tanıma ve Tenfiz davamdaki üstün desteği için Sayın Doğru'ya içtenlikle teşekkür etmek istiyorum. En başından beri kendimi onun yanında çok güvende hissettim. Özellikle arkadaş canlısı, saygılı ve anlayışlı yaklaşımını takdir ediyorum. Zor bir durumda güven veriyor.",testimonial_2_name:"İnci Şen",testimonial_2_area:"Türk Hukuku",testimonial_2_text:"Harika bir hukuk bürosu, kesinlikle tavsiye ederim! Türkiye'deki iki davamda beni son derece başarılı bir şekilde destekleyen yetkin, teknik açıdan bilgili ve empatik bir avukat. Muazzam çalışması için çok teşekkür ederim!",testimonial_3_name:"Tuğçe Garip",testimonial_3_area:"Uluslararası Hukuk",testimonial_3_text:"Hasan Bey işini gerçekten hakkıyla yapan bir avukat. Süreci ilgiyle dinleyip bilgi ve tecrübesiyle davamın hem Türkiye hem Almanya süreçleri hakkında çok detaylı bilgiler verdi. İlgisi ve destekleri için kendisine çok teşekkür ediyorum.",testimonial_4_name:"Abdi Durna",testimonial_4_area:"Genel Danışmanlık",testimonial_4_text:"Tanıdığım en iyi Avukatlardan biri isinin ehli ve tuttuğunu koparan bir Avukat. Çok nazik ve güler yüzlü, işini titizlikle yapıyor.",testimonial_5_name:"Erkan Yerlii",testimonial_5_area:"Danışmanlık",testimonial_5_text:"İlk defa bir avukatın para odaklı olmayıp salt yardım ettiğini gördüm. Çekinerek aradığım Hasan Bey'in çözüm yöntemi ve anında cevap vermesi takdire şayan. Kesinlikle tavsiye ederim.",testimonial_6_name:"Mirsat Şahin",testimonial_6_area:"Vatandaşlık & Türk Hukuku",testimonial_6_text:"Almanya'da yaşadığım dönemde hem Türkiye'deki davalarım hem de vatandaşlık için çok yardımcı oldu. Kendisine bir teşekkürü borç bilirim.",blog_badge:"Blog & Güncel",blog_title:"Hukuki Gelişmeler",blog_subtitle:"ve Makaleler",blog_read_more:"Devamını Oku",footer_description:"Almanya ve Türkiye arasındaki hukuki köprünüz. 15 yılı aşkın deneyimle profesyonel danışmanlık.",footer_quick_links:"Hızlı Bağlantılar",footer_contact_info:"İletişim Bilgileri",footer_legal:"Yasal",footer_rights:"Tüm hakları saklıdır."},de:{nav_home:"Startseite",nav_about:"Über uns",nav_services:"Leistungen",nav_why_us:"Warum wir?",nav_blog:"Blog",nav_contact:"Kontakt",nav_cta:"Beratung anfragen",hero_title_pre:"Avukat",hero_title_main:"Hasan Doğru",hero_subtitle:"Experte für türkisches Recht",hero_description:"Suchen Sie einen kompetenten Rechtsbeistand, der die Brücke zwischen dem deutschen und dem türkischen Rechtssystem schlägt? Als spezialisierter Avukat unterstütze ich Sie bei komplexen grenzüberschreitenden Rechtsfragen mit fundierter Fachkenntnis und langjähriger Erfahrung.",hero_cta_primary:"Jetzt beraten lassen",hero_cta_secondary:"Unsere Leistungen",stats_years_title:"15 Jahre Erfahrung",stats_years_subtitle:"Auf Basis von Vertrauen und Kompetenz",lawyer_role:"Experte für türkisches Recht",service_01_title:"Grenzüberschreitendes Recht",service_01_subtitle:"Deutschland – Türkei",service_02_title:"Unternehmensberatung",service_02_subtitle:"Handel & Gesellschaftsrecht",service_03_title:"Effektive Prozessführung",service_03_subtitle:"Kompetente Vertretung",why_us_badge:"Warum wir?",why_us_title:"Warum",why_us_subtitle:"DOĞRU KANZLEİ?",why_us_description:"Sie leben in Deutschland, Ihre Rechte liegen in der Türkei. Wir sind auf beiden Seiten präsent — hier ist warum:",why_us_point_01_title:"Digitaler Zugang zu türkischen Gerichten",why_us_point_01_desc:"Als im UYAP-System registrierter Avukat verwalte ich Ihre türkischen Rechtsangelegenheiten in Echtzeit aus Deutschland. Gerichtstermine, Dokumentenverfolgung, Verfahrensstatus. Ich erledige alles remote in Ihrem Namen. Sie müssen nie persönlich in der Türkei erscheinen.",why_us_point_02_title:"Doppelte Zulassung",why_us_point_02_desc:"Als Mitglied der Anwaltskammer Ankara und der Anwaltskammer Karlsruhe (§207 BRAO) vertrete ich Sie direkt vor türkischen Gerichten. Ohne Kooperationspartner, ohne Mittelsmann. Während andere Kanzleien auf externe Anwälte in der Türkei angewiesen sind, handle ich selbst. Das spart Zeit, Kosten und Kommunikationsverluste.",why_us_point_03_title:"70+ Google-Bewertungen · 5,0 Sterne",why_us_point_03_desc:"Über 70 Mandanten haben ihre Erfahrungen mit uns geteilt. Mit der Bestnote 5,0 von 5,0 Sternen. Das ist kein Zufall, sondern das Ergebnis konsequenter, persönlicher und ergebnisorientierter Arbeit. Überzeugen Sie sich selbst.",why_us_point_04_title:"Büro in Ankara",why_us_point_04_desc:"Neben unserem Standort in Deutschland verfügen wir über ein echtes Büro in Ankara. Das bedeutet: direkte Kontakte zu türkischen Gerichten, Notaren und Behörden und schnelles Handeln vor Ort, wenn es darauf ankommt. Kein Outsourcing. Kein Umweg.",about_badge:"ÜBER UNS",about_title:"Über mich",about_subtitle:"Avukat Hasan Doğru",about_p1:"Bevor ich den Weg ins Recht einschlug, war ich fast ein Jahrzehnt im türkischen Sicherheitsdienst tätig — in einer operativen Spezialeinheit, die höchste Disziplin, Belastbarkeit und ein tiefes Verständnis für das türkische Rechtssystem erforderte. Diese Jahre haben mich geprägt: Ich habe gelernt, unter Druck präzise zu handeln, komplexe Sachverhalte schnell zu erfassen und Verantwortung für andere zu übernehmen. Genau diese Eigenschaften bringe ich heute in jedes Mandat ein.",about_p2:"Bereits während meiner aktiven Dienstzeit begann ich parallel mein Studium — zunächst Kamu Yönetimi (Öffentliche Verwaltung) an der Anadolu Üniversitesi, anschließend Rechtswissenschaften (LL.B.) an der Cyprus International University. Nach meiner Zulassung als Avukat bei der Rechtsanwaltskammer Ankara (Ankara Barosu, Sicil-Nr. 47068) verlegte ich meinen Lebensmittelpunkt nach Deutschland.",about_p3:"Seit meiner Registrierung bei der Anwaltskammer Karlsruhe gemäß §207 BRAO berate und vertrete ich Mandanten mit Kanzleistandorten in Mannheim und Ankara — ausschließlich im türkischen Recht und Völkerrecht. Direkt, persönlich und ohne Drittvermittlung.",about_p4:"Was mich von anderen unterscheidet: Durch meine Doppelzulassung bin ich berechtigt, Mandanten unmittelbar vor türkischen Gerichten und Behörden zu vertreten — ohne dass meine Mandanten dafür die Türkei bereisen müssen. Über 70 Google-Bewertungen mit 5,0 Sternen spiegeln das Vertrauen wider, das mir meine Mandanten täglich entgegenbringen.",about_cred_01:"Mitglied der Anwaltskammer Ankara",about_cred_02:"Anwaltskammer Karlsruhe — §207 BRAO",about_cred_03:"Direkte Vertretung vor türkischen Gerichten",about_cred_04:"Büros in Mannheim & Ankara",about_signature_role:"Gründer & Inhaber",about_press_badge:"PRESSE",about_press_title:"In der Presse",about_press_subtitle:"Doğru Kanzlei",practice_badge:"Unsere Fachgebiete",practice_title:"Umfassende rechtliche",practice_subtitle:"Beratung",practice_view_all:"ALLE ANSEHEN",practice_view_detail:"DETAILS ANSEHEN",contact_badge:"Kontakt",contact_title:"Kontaktieren Sie",contact_subtitle:"uns",contact_description:"Kontaktieren Sie uns für eine fundierte rechtliche Ersteinschätzung. Wir analysieren Ihren Fall und zeigen Ihnen den sichersten Weg.",contact_form_title:"Beratungsanfrage",contact_form_name:"Vor- & Nachname *",contact_form_email:"E-Mail *",contact_form_phone:"Telefon",contact_form_area:"Rechtsgebiet",contact_form_area_placeholder:"Bitte wählen...",contact_form_message:"Ihre Nachricht *",contact_form_submit:"Nachricht senden",contact_success_title:"Nachricht empfangen",contact_success_p:"Wir werden uns so schnell wie möglich mit Ihnen in Verbindung setzen. Vielen Dank.",contact_office_hours_tr:"Mo–Fr: 09:00 – 18:00",contact_office_hours_de:"Mo–Sa: 09:00 – 18:00",contact_languages_badge:"Service-Sprachen",contact_calendly_btn:"Termin vereinbaren",contact_whatsapp_btn:"Kontakt per WhatsApp",contact_direct_title:"Direkter Kontakt",contact_direct_p:"Kontaktieren Sie uns direkt oder vereinbaren Sie ein Gespräch zu einem passenden Zeitpunkt.",testimonials_badge:"Mandantenstimmen",testimonials_title:"Was unsere",testimonials_subtitle:"Mandanten sagen",testimonial_1_name:"Hatice Kul",testimonial_1_area:"Anerkennung & Vollstreckung",testimonial_1_text:"Ich möchte mich herzlich bei Herrn Doğru für seine hervorragende Unterstützung in meiner Tanıma ve Tenfiz davası bedanken. Von Anfang an habe ich mich bei ihm sehr gut aufgehoben gefühlt. Besonders schätze ich seine freundliche, respektvolle und verständnisvolle Art.",testimonial_2_name:"İnci Şen",testimonial_2_area:"Türkisches Recht",testimonial_2_text:"Top Kanzlei, sehr zu empfehlen! Kompetenter, sachlich versierter und empathischer Avukat, der mich bei zwei Verfahren in der Türkei äußerst erfolgreich unterstützt hat. Vielen Dank für die hervorragende Arbeit!",testimonial_3_name:"Tuğçe Garip",testimonial_3_area:"Internationales Recht",testimonial_3_text:"Herr Hasan ist ein Avukat, der seine Arbeit wirklich mit Bravour erledigt. Er hat den Prozess aufmerksam verfolgt und mit seinem Wissen und seiner Erfahrung sehr detaillierte Informationen über die Verfahren meines Falls sowohl in der Türkei als auch in Deutschland gegeben.",testimonial_4_name:"Abdi Durna",testimonial_4_area:"Allgemeine Beratung",testimonial_4_text:"Der ist der beste Avukat den ich je kennen gelernt habe. Ist sehr nett und freundlich, geht sehr präzise vor. Er ist einfach der Beste!",testimonial_5_name:"Erkan Yerlii",testimonial_5_area:"Beratung",testimonial_5_text:"Zum ersten Mal habe ich erlebt, dass ein Avukat nicht profitorientiert ist, sondern wirklich helfen möchte. Herr Hasans Lösungsansatz und seine Eigenschaft, sofort zu antworten, sind lobenswert. Er ist definitiv empfehlenswert.",testimonial_6_name:"Mirsat Şahin",testimonial_6_area:"Staatsbürgerschaft & Türkisches Recht",testimonial_6_text:"Während meiner Zeit in Deutschland hat er mir sowohl bei meinen Fällen in der Türkei als auch in Rechtsangelegenheiten sehr geholfen. Ich bin ihm zu großem Dank verpflichtet.",blog_badge:"Blog & Aktuelles",blog_title:"Rechtliche Entwicklungen",blog_subtitle:"und Artikel",blog_read_more:"Weiterlesen",footer_description:"Ihre rechtliche Brücke zwischen Deutschland und der Türkei. Professionelle Beratung mit über 15 Jahren Erfahrung.",footer_quick_links:"Schnelllinks",footer_contact_info:"Kontaktinformationen",footer_legal:"Rechtliches",footer_rights:"Alle Rechte vorbehalten."}},S=[{id:"familienrecht",slugDE:"familienrecht",slugTR:"aile-hukuku",icon:P,title:"Familienrecht & Scheidung",titleTR:"Aile Hukuku ve Boşanma",seoTitleDE:"Türkischer Anwalt Familienrecht Mannheim | Scheidung Türkei | Avukat Hasan Doğru",seoDescriptionDE:"Scheidung nach türkischem Recht von Mannheim aus — ohne Reise in die Türkei. Avukat Hasan Doğru berät türkischstämmige Familien in Mannheim zu Familienrecht, Scheidung, Unterhalt und Sorgerecht.",seoTitleTR:"Türk Boşanma Avukatı Almanya | Boşanma Avukatı Mannheim | Avukat Hasan Doğru",seoDescriptionTR:"Mannheim'dan Türkiye'de boşanma — Türkiye'ye gitmeden. Avukat Hasan Doğru, boşanma, nafaka ve velayet davalarında Almanya'daki Türk ailelere Türk hukuku danışmanlığı verir.",description:"Mannheim, Heidelberg ve Rhein-Neckar bölgesindeki Türk aileler; boşanma, velayet veya nafaka konularında sıklıkla çift taraflı bir zorlukla karşılaşır — iki hukuk sistemi, iki ülke, bir aile.",descriptionDE:"Türkischstämmige Familien in Mannheim, Heidelberg und dem gesamten Rhein-Neckar-Raum stehen bei Scheidung, Sorgerecht oder Unterhalt oft vor einer besonderen Herausforderung: Zwei Rechtssysteme, zwei Länder, eine Familie. Das türkische Familienrecht unterscheidet sich in wesentlichen Punkten vom deutschen Recht — und erfordert einen Anwalt, der beide Seiten kennt.",detail:"Yalnızca Türk hukuku — uzlaşmasız uzmanlaşma · Ankara Barosu üyesi, § 207 BRAO kapsamında kayıtlı · Türkiye'ye seyahat etmeden tam süreç yönetimi · Türkçe ve Almanca danışmanlık · Mannheim'da yüz yüze görüşme imkânı · Ankara'da ikinci ofis — Türk mahkemeleriyle doğrudan iş birliği",detailDE:"Ausschließlich türkisches Recht — keine Kompromisse, volle Spezialisierung · Mitglied der Ankara Barosu und registriert gemäß § 207 BRAO · Verfahren vollständig ohne Reise in die Türkei möglich · Beratung auf Türkisch und Deutsch · Standort Mannheim — persönliche Beratung im Rhein-Neckar-Raum · Zweiter Standort in Ankara für direkte Zusammenarbeit mit türkischen Gerichten",expertiseTitleDE:"Warum Doğru Kanzlei für türkisches Familienrecht in Mannheim?",expertiseTitleTR:"Mannheim'da Türk Aile Hukuku İçin Neden Doğru Kanzlei?",content:`Aile Hukuku ve Boşanma — Mannheim'da Türk Aile Hukuku

Türk Aile Hukuku & Boşanma Mannheim

Mannheim, Heidelberg ve Rhein-Neckar bölgesindeki Türk aileler; boşanma, velayet veya nafaka konularında sıklıkla çift taraflı bir zorlukla karşılaşır: İki hukuk sistemi, iki ülke, bir aile. Türk aile hukuku, Alman hukukundan önemli noktalarda ayrılmaktadır — ve her iki tarafı da bilen bir avukat gerektirir.

Avukat Hasan Doğru, Ankara Barosu üyesidir ve yalnızca Türk hukuku alanında danışmanlık vermektedir. Mannheim'daki büromuz, Türkiye ile ilgili tüm aile hukuku konularında size yardımcı olmaktadır — yetkin, gizli ve Türkiye'ye seyahat etmeden.

Sizin için neler yapıyoruz:

• Almanya'dan Türkiye'de Boşanma Davası Açmak (Boşanma Davası)
Mannheim'daki pek çok Türk çift, Türkiye'ye gitmeden Türk hukukuna göre boşanmak istemektedir. Vekaletname ile tüm Türk boşanma sürecini Almanya'dan yürütüyor, sizi Türk mahkemelerinde temsil ediyor ve karar kesinleşene kadar yanınızda oluyoruz.

• Anlaşmalı Boşanma Türkiye (Anlaşmalı Boşanma)
Her iki eş de boşanmayı kabul ediyorsa, anlaşmalı boşanma en hızlı ve en ekonomik çözümdür. Boşanma protokolünü hazırlıyor, nafaka, velayet ve mal paylaşımı gibi tüm konuları netleştiriyor ve sürecin sorunsuz ilerlemesini sağlıyoruz.

• Çekişmeli Boşanma Türkiye (Çekişmeli Boşanma)
Anlaşma sağlanamadığında, çıkarlarınızı Türk mahkemelerinde kararlılıkla savunuyoruz. Özellikle Almanya ile Türkiye arasındaki sınır ötesi boşanma davalarında deneyimli hukuki temsil belirleyici olmaktadır.

• Türk Hukukuna Göre Nafaka (Nafaka)
Türk nafaka hukuku üç türü kapsar: Tedbir Nafakası (ayrılık nafakası), İştirak Nafakası (çocuk nafakası) ve Yoksulluk Nafakası (yoksulluk nafakası). Haklarınız konusunda sizi bilgilendiriyor ve bu hakları Türk mahkemelerinde takip ediyoruz — nafaka yükümlüsü ebeveyn Almanya'da yaşasa bile.

• Türkiye'de Velayet Davası (Velayet Davası)
Türkiye bağlantılı velayet anlaşmazlıkları, aile hukukunun en karmaşık davalarından biridir. Türk velayet davalarında sizi temsil ediyor ve Almanya ile Türkiye arasındaki velayet ile kişisel ilişki kararlarının uluslararası alanda tanınmasını sağlıyoruz.

• Mal Rejimi / Edinilmiş Mallara Katılma (Edinilmiş Mallara Katılma)
Boşanmada sıkça sorulan soru şudur: Kime ne kalır? Türk mal rejimi hukuku, edinilmiş mallara katılma ilkesine göre mal paylaşımını düzenler. Türkiye'deki taşınmazlar, banka hesapları ve diğer varlıkların adil paylaşımı konusunda danışmanlık veriyoruz.

• Türkiye'den Eş Getirme (Aile Birleşimi)
Eşinizi Türkiye'den Almanya'ya getirmek mi istiyorsunuz? Aile birleşimi ve eş vizesi başvurusunda belgelerinizin hazırlanmasından Almanya'ya girişe kadar tüm süreçte hukuki destek sağlıyoruz.

• Boşanma Sonrası İsim Hakkı Türkiye
Boşanma sonrasında Türk hukukuna göre isim değişikliği konusunda sorularınız olabilir. Seçenekleriniz hakkında bilgi veriyor ve Türk makamları nezdinde isim değişikliği işlemlerini yürütüyoruz.`,contentDE:`Avukat Hasan Doğru ist Mitglied der Ankara Barosu und berät ausschließlich im türkischen Recht. Unsere Kanzlei in Mannheim begleitet Sie in allen familienrechtlichen Fragen mit Bezug zur Türkei — kompetent, diskret und vollständig ohne Reise in die Türkei.

Was wir für Sie tun:

• Scheidung in der Türkei aus Deutschland einreichen (Boşanma Davası)
Viele türkischstämmige Paare in Mannheim möchten ihre Ehe nach türkischem Recht scheiden lassen — ohne dafür in die Türkei reisen zu müssen. Wir leiten das gesamte türkische Scheidungsverfahren von Deutschland aus ein, vertreten Sie vor türkischen Gerichten per Vollmacht und begleiten Sie bis zum rechtskräftigen Urteil.

• Einvernehmliche Scheidung Türkei (Anlaşmalı Boşanma)
Wenn beide Ehepartner einer Scheidung zustimmen, ist eine einvernehmliche Scheidung nach türkischem Recht die schnellste und kostengünstigste Lösung. Wir bereiten die Scheidungsfolgenvereinbarung vor, klären alle offenen Punkte — Unterhalt, Sorgerecht, Vermögensaufteilung — and sorgen für einen reibungslosen Ablauf.

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
Nach einer Scheidung stellen sich Fragen zur Namensänderung nach türkischem Recht. Wir beraten Sie zu Ihren Optionen und übernehmen die Abwicklung der Namensänderung bei türkischen Behörden.`,faqDE:[{question:"Kann ich mich in der Türkei scheiden lassen, ohne dorthin zu reisen?",answer:"Ja. Mit einer notariellen Vollmacht können wir das gesamte türkische Scheidungsverfahren von Deutschland aus für Sie führen. Sie müssen nicht persönlich vor türkischen Gerichten erscheinen. Dies ist einer der häufigsten Gründe, warum türkischstämmige Familien aus Mannheim und dem Rhein-Neckar-Raum uns beauftragen."},{question:"Wie lange dauert eine Scheidung nach türkischem Recht?",answer:"Eine einvernehmliche Scheidung (Anlaşmalı Boşanma) dauert in der Regel 2–6 Monate. Eine streitige Scheidung (Çekişmeli Boşanma) kann 1–3 Jahre in Anspruch nehmen, abhängig von der Komplexität des Falles und dem zuständigen türkischen Gericht."},{question:"Wird eine türkische Scheidung in Deutschland anerkannt?",answer:"Eine in der Türkei ausgesprochene Scheidung muss in Deutschland anerkannt werden. Wir begleiten Sie durch das Anerkennungsverfahren (Tanıma ve Tenfiz) bei der zuständigen deutschen Behörde, damit Ihr Personenstand in Deutschland korrekt eingetragen wird."},{question:"Was passiert mit dem Sorgerecht, wenn ein Elternteil in Deutschland und einer in der Türkei lebt?",answer:"Grenzüberschreitende Sorgerechtsverfahren sind besonders komplex. Welches Gericht zuständig ist und welches Recht angewendet wird, hängt vom gewöhnlichen Aufenthaltsort des Kindes ab. Wir analysieren Ihren Fall und vertreten Sie vor dem zuständigen türkischen oder deutschen Gericht."},{question:"Muss ich für eine Erstberatung nach Mannheim kommen?",answer:"Nein. Wir bieten Erstberatungen auch per Telefon oder Video an. Viele unserer Mandanten aus dem gesamten Bundesgebiet betreuen wir vollständig auf Distanz."}],faqTR:[{question:"Türkiye'ye gitmeden Türkiye'de boşanabilir miyim?",answer:"Evet. Noter tasdikli bir vekaletname ile tüm Türk boşanma sürecini Almanya'dan sizin adınıza yürütebiliriz. Türk mahkemelerinde bizzat bulunmanız gerekmez. Bu, Mannheim ve Rhein-Neckar bölgesinden bize başvuran Türk ailelerin en sık dile getirdiği nedenlerden biridir."},{question:"Türk hukukuna göre boşanma ne kadar sürer?",answer:"Anlaşmalı boşanma (Anlaşmalı Boşanma) genellikle 2–6 ay sürer. Çekişmeli boşanma (Çekişmeli Boşanma) ise davanın karmaşıklığına ve ilgili Türk mahkemesine bağlı olarak 1–3 yıl sürebilir."},{question:"Türkiye'de gerçekleşen boşanma Almanya'da tanınır mı?",answer:"Türkiye'de verilen boşanma kararının Almanya'da tanınması gerekmektedir. Yetkili Alman makamı nezdinde tanıma ve tenfiz sürecinde (Tanıma ve Tenfiz) size eşlik ediyoruz; böylece medeni haliniz Almanya'da doğru şekilde tescil edilir."},{question:"Ebeveynlerden biri Almanya'da, diğeri Türkiye'de yaşıyorsa velayet nasıl belirlenir?",answer:"Sınır ötesi velayet davaları son derece karmaşıktır. Hangi mahkemenin yetkili olduğu ve hangi hukukun uygulanacağı, çocuğun mutad meskenine bağlıdır. Davanızı analiz ediyor ve sizi yetkili Türk veya Alman mahkemesinde temsil ediyoruz."},{question:"İlk danışma için Mannheim'a gelmem gerekiyor mu?",answer:"Hayır. İlk danışmayı telefon veya video görüşmesi yoluyla da gerçekleştirebilirsiniz. Almanya'nın dört bir yanından pek çok müvekkilimize tamamen uzaktan hizmet veriyoruz."}]},{id:"vollmacht-apostille",slugDE:"vollmacht-apostille",slugTR:"vekaletname-ve-apostil",icon:ke,title:"Vollmacht & Apostille",titleTR:"Vekaletname & Apostil",seoTitleDE:"Vollmacht & Apostille Türkei Mannheim | Vekaletname Deutschland | Avukat Hasan Doğru",seoDescriptionDE:"Vollmacht für die Türkei aus Mannheim — korrekt, apostilliert, sofort einsatzbereit. Avukat Hasan Doğru begleitet Sie durch alle Vollmachts- und Apostilleverfahren für türkische Behörden.",seoTitleTR:"Vekaletname & Apostil Türkiye Mannheim | Almanya'dan Türkiye Vekaletnamesi | Avukat Hasan Doğru",seoDescriptionTR:"Türkiye için Almanya'dan vekaletname — doğru, apostilli, hemen kullanıma hazır. Avukat Hasan Doğru, Mannheim'dan Türk makamları için tüm vekaletname ve apostil işlemlerinde size eşlik eder.",description:"Türkiye'deki resmi kurum ve mahkemeler için hukuki güvenceli vekaletname ve apostilli belgeler — hızlı, güvenilir ve gereksiz seyahat olmadan.",descriptionDE:"Rechtssichere Vollmachten und apostillierte Dokumente für Behörden und Gerichte in der Türkei — schnell, zuverlässig und ohne unnötige Reisen.",detail:"Noter Onayı · Tasdik · Apostil · Konsolosluk İşlemleri · Tercüme · Hukuki Danışmanlık",detailDE:"Beglaubigung · Notarielle Beurkundung · Apostille · Konsularische Dienste · Übersetzung · Rechtsberatung",content:`Vekaletname ve Apostil — Mannheim'da Türkiye İçin Vekaletname

Türkiye İçin Vekaletname & Apostil Mannheim

Mannheim, Heidelberg veya Rhein-Neckar bölgesinde yaşıyor ve Türkiye'deki hukuki işlemleri halletmek istiyorsanız, genellikle apostilli noter onaylı bir vekaletnameye ihtiyaç duyarsınız. Bu belgeler olmadan Türk makamları, mahkemeler, bankalar veya noterler — miras, gayrimenkul, boşanma veya şirket kuruluşu ne olursa olsun — adınıza hiçbir işlem yapamaz.

Türk makamlarının yabancı vekaletnamelerden beklentileri katıdır ve düzenli olarak değişmektedir. Yanlış düzenlenmiş bir belge tüm sürecinizi aylarca geciktirebilir. Vekaletnamenizin başından itibaren doğru, eksiksiz ve hukuken geçerli olmasını sağlıyoruz.

Sizin için neler yapıyoruz:

- Türkiye'deki Hukuki İşlemler İçin Vekaletname
Miras, gayrimenkul, boşanma, banka işlemleri ve daha fazlası için hukuken güvenilir vekaletnameler hazırlıyoruz.

- Almanya'dan Türkiye İçin Apostil
Yetkili Alman mahkemesi veya makamı nezdinde apostil işleminin tamamını yönetiyoruz.

- Türk Makamları İçin Noter Onayı
Alman noterleri ve Türk konsoloslukları ile koordineli çalışıyoruz.

- Çeviri ve Onaylı Tercüme
Yeminli tercümanlar aracılığıyla Türkçe sertifikalı çevirilerin organizasyonunu üstleniyoruz.

- Genel Vekaletname Türkiye
Türkiye'deki tüm hukuki işlemler için kapsamlı vekaletnameler hazırlıyoruz.

- Gayrimenkul İşlemleri İçin Vekaletname
Türkiye'deki gayrimenkul alım, satım veya devirlerinde özelleşmiş vekaletnameler düzenliyoruz.

- Miras İşlemleri İçin Vekaletname
Veraset İlamı ve tapu devri dahil miras süreçleri için vekaletname hazırlıyoruz.

- Banka İşlemleri İçin Vekaletname
Türk banka hesaplarına erişim ve vefat sonrası hesap açma işlemleri için vekaletname düzenliyoruz.

- Mahkeme Yargılamaları İçin Vekaletname
Türk mahkemelerinde medeni ve aile davalarında dava vekaletnamesi hazırlıyoruz.

- Konsolosluk Onayı
Apostile alternatif olarak Almanya'daki Türk konsolosluğu aracılığıyla onay işlemi gerçekleştiriyoruz.

Önemli Uyarı:
Türk makamlarının güncel gerekliliklerini karşılamayan bir vekaletname, noter onaylı olsa dahi reddedilir. Güncel gereklilikleri biliyoruz ve belgelerinizin ilk seferde kabul edilmesini sağlıyoruz.`,contentDE:`Vollmacht & Apostille — Vollmacht für die Türkei — aus Deutschland beantragen

Apostille, Beglaubigung, Notar — wir erledigen alles für Sie.

Wer in Mannheim, Heidelberg oder dem Rhein-Neckar-Raum lebt und rechtliche Angelegenheiten in der Türkei regeln möchte, braucht in der Regel eine notariell beglaubigte Vollmacht mit Apostille. Ohne diese Dokumente können türkische Behörden, Gerichte, Banken oder Notare keine Handlungen in Ihrem Namen vornehmen — egal ob es um Erbschaft, Immobilien, Scheidung oder Unternehmensgründung geht.

Die Anforderungen türkischer Behörden an ausländische Vollmachten sind streng und ändern sich regelmäßig. Ein falsch ausgestelltes Dokument kann Ihr gesamtes Verfahren um Monate verzögern. Wir stellen sicher, dass Ihre Vollmacht von Anfang an korrekt, vollständig und rechtswirksam ist.

Was wir für Sie tun:

• Vollmacht für Rechtsgeschäfte in der Türkei — Erstellung rechtssicherer Vollmachten für Erbschaft, Immobilien, Scheidung, Bankangelegenheiten und mehr
• Apostille aus Deutschland für die Türkei — Begleitung des gesamten Apostille-Verfahrens beim zuständigen deutschen Gericht oder der Behörde
• Notarielle Beglaubigung für türkische Behörden — Koordination mit deutschen Notaren und türkischen Konsulaten
• Übersetzung und Beglaubigung — Organisation zertifizierter Übersetzungen ins Türkische durch vereidigte Übersetzer
• Generalvollmacht Türkei — Erstellung umfassender Vollmachten für alle Rechtsgeschäfte in der Türkei
• Vollmacht für Immobiliengeschäfte — Spezielle Vollmachten für Kauf, Verkauf oder Übertragung von Immobilien
• Vollmacht für Erbschaftsangelegenheiten — Für Nachlassverfahren, Veraset İlamı und Grundbuchübertragung
• Vollmacht für Bankgeschäfte — Zugriff auf türkische Bankkonten, Kontoeröffnung nach Todesfällen
• Vollmacht für Gerichtsverfahren — Prozessvollmacht für türkische Gerichte in Zivil- und Familienrechtssachen
• Konsularische Beglaubigung — Anerkennung durch das türkische Konsulat in Deutschland als Alternative zur Apostille

Wichtiger Hinweis:
Eine Vollmacht, die nicht den aktuellen Anforderungen türkischer Behörden entspricht, wird zurückgewiesen – selbst mit notarieller Beglaubigung. Wir kennen die aktuellen Vorgaben und sorgen dafür, dass Ihre Dokumente im ersten Anlauf akzeptiert werden.

Wir stehen Ihnen während des gesamten Prozesses zur Seite — schnell, zuverlässig und mit fundierter Erfahrung in der deutsch-türkischen Rechtspraxis.`,faqDE:[{question:"Was ist eine Apostille und wofür brauche ich sie?",answer:"Eine Apostille ist eine internationale Beglaubigung, die deutsche Dokumente für die Verwendung in der Türkei rechtsgültig macht. Ohne Apostille erkennen türkische Behörden, Gerichte und Banken deutsche Dokumente in der Regel nicht an."},{question:"Kann ich eine Vollmacht für die Türkei in Deutschland ausstellen lassen?",answer:"Ja. Sie können eine Vollmacht bei einem deutschen Notar beurkunden lassen — mit anschließender Apostille und beglaubigter Übersetzung ins Türkische. Wir koordinieren den gesamten Prozess und stellen sicher, dass die Vollmacht den aktuellen Anforderungen türkischer Behörden entspricht."},{question:"Wie lange ist eine Vollmacht für die Türkei gültig?",answer:"Das hängt von der Art der Vollmacht ab. Viele türkische Behörden akzeptieren Vollmachten nur, wenn sie nicht älter als 6 Monate sind. Wir beraten Sie zur optimalen Gültigkeitsdauer für Ihren konkreten Zweck."},{question:"Was passiert, wenn meine Vollmacht von türkischen Behörden abgelehnt wird?",answer:"Das passiert häufiger als man denkt — meistens wegen veralteter Formulierungen oder fehlender spezifischer Befugnisse. Wir stellen sicher, dass Ihre Vollmacht von Anfang an korrekt ausgestellt ist und alle aktuellen Anforderungen erfüllt."},{question:"Kann ich eine Vollmacht auch über das türkische Konsulat beglaubigen lassen?",answer:"Ja. Als Alternative zur Apostille kann eine Beglaubigung durch das türkische Konsulat in Deutschland erfolgen. Wir beraten Sie, welcher Weg für Ihren Fall schneller und kostengünstiger ist."}],faqTR:[{question:"Apostil nedir ve neden gereklidir?",answer:"Apostil, Alman belgelerini Türkiye'de kullanım için hukuken geçerli kılan uluslararası bir onay işlemidir. Apostil olmadan Türk makamları, mahkemeler ve bankalar Alman belgelerini genellikle kabul etmez."},{question:"Türkiye için Almanya'da vekaletname çıkarabilir miyim?",answer:"Evet. Alman noterinde vekaletname onaylattırabilirsiniz — ardından apostil ve Türkçe onaylı çeviri işlemleri yapılır. Tüm süreci koordine ediyor ve vekaletnamenin güncel Türk makamı gerekliliklerini karşıladığından emin oluyoruz."},{question:"Türkiye için vekaletname ne kadar süre geçerlidir?",answer:"Bu, vekaletnamenin türüne bağlıdır. Pek çok Türk makamı yalnızca 6 aydan eski olmayan vekaletnameleri kabul etmektedir. Belirli amacınız için en uygun geçerlilik süresi konusunda danışmanlık veriyoruz."},{question:"Vekaletnamen Türk makamlarınca reddedilirse ne olur?",answer:"Bu, düşünüldüğünden daha sık yaşanır — çoğunlukla güncelliğini yitirmiş ifadeler veya eksik yetki tanımları nedeniyle. Vekaletnamenizin başından itibaren doğru düzenlenmesini ve tüm güncel gereklilikleri karşılamasını sağlıyoruz."},{question:"Türk konsolosluğu aracılığıyla da onay yaptırabilir miyim?",answer:"Evet. Apostile alternatif olarak Almanya'daki Türk konsolosluğu aracılığıyla onay yapılabilir. Hangi yolun durumunuz için daha hızlı ve uygun maliyetli olduğu konusunda danışmanlık veriyoruz."}]},{id:"migrationsrecht",slugDE:"migrationsrecht",slugTR:"goc-hukuku",icon:Ee,title:"Migrationsrecht",titleTR:"Göç Hukuku",seoTitleDE:"Türkisches Migrationsrecht Mannheim | Mavi Kart & Aufenthalt Türkei | Avukat Hasan Doğru",seoDescriptionDE:"Aufenthaltserlaubnis, Mavi Kart und Remigration in die Türkei — rechtlich begleitet von Mannheim. Avukat Hasan Doğru berät im türkischen Migrationsrecht.",seoTitleTR:"Türk Göç Hukuku Mannheim | Mavi Kart & Türkiye'de İkamet | Avukat Hasan Doğru",seoDescriptionTR:"Türkiye'de oturma izni, Mavi Kart ve geri dönüş — Mannheim'dan hukuki rehberlik. Avukat Hasan Doğru, Türk göç hukuku konusunda danışmanlık verir.",description:"Türkiye'ye taşınmayı planlıyor, emekliliğinizi orada geçirmek istiyor ya da Mavi Kart haklarınız hakkında sorularınız mı var? Türk göç hukuku karmaşıktır — özellikle Alman pasaportu taşıyan veya çift vatandaşlığa sahip Türk kökenli kişiler için, her iki ülkedeki hak ve yükümlülüklerini bilmek büyük önem taşır.",descriptionDE:"Sie planen einen Umzug in die Türkei, möchten Ihren Ruhestand dort verbringen oder haben Fragen zu Ihrer Mavi Kart? Das türkische Migrationsrecht ist komplex — besonders für türkischstämmige Personen mit deutschem Pass oder Doppelstaatsbürgerschaft, die ihre Rechte und Pflichten in beiden Ländern kennen müssen.",detail:"Mavi Kart & Vatandaşlık · İkamet İzinleri · Geri Dönüş",detailDE:"Mavi Kart & Status · Aufenthaltstitel · Remigration",content:`Göç Hukuku — Mannheim'da Türk Göç Hukuku

Türk Göç Hukuku & Türkiye'de İkamet

Türkiye'ye taşınmayı planlıyor, emekliliğinizi orada geçirmek istiyor ya da Mavi Kart haklarınız hakkında sorularınız mı var? Türk göç hukuku karmaşıktır — özellikle Alman pasaportu taşıyan veya çift vatandaşlığa sahip Türk kökenli kişiler için, her iki ülkedeki hak ve yükümlülüklerini bilmek büyük önem taşır.

Avukat Hasan Doğru yalnızca Türk hukuku alanında danışmanlık vermektedir ve Mannheim, Heidelberg ile tüm Rhein-Neckar bölgesinden Türkiye bağlantılı göç hukuku sorunlarında insanlara yardımcı olmaktadır — yetkin ve gereksiz bürokratik süreçler olmadan.

Sizin için neler yapıyoruz:

- Türkiye'de Oturma İzni (İkamet İzni)
Kısa süreli oturma izninden uzun süreli veya daimi ikamete kadar — tüm uyruklar için Türk oturma izni sisteminde size rehberlik ediyoruz. Başvurunuzu hazırlıyor, tüm belgeleri kontrol ediyor ve Türk göç makamları nezdinde sizi temsil ediyoruz.

- Çalışma İzni ve Türkiye'de Şirket Kurulumu
Türkiye'de çalışmak veya şirket kurmak isteyenler için gerekli Türk izinleri gerekmektedir. Çalışanlar, girişimciler ve yatırımcılara Türk çalışma izni başvurularında destek veriyor ve Türkiye'de hukuki güvenli şirket kurulumu konusunda danışmanlık yapıyoruz.

- Mavi Kart — Haklar ve Yükümlülükler
Mavi Kart, Türk vatandaşlığından çıkan Türk kökenli kişiler için önemli bir araçtır. Resmi vatandaşlık olmaksızın Türkiye'de belirli haklar — taşınmaz edinme, miras, seyahat serbestisi — sağlar. Mavi Kart sahibi olarak hak ve yükümlülükleriniz konusunda kapsamlı danışmanlık veriyoruz.

- Türkiye'ye Hukuki Güvenli Geri Dönüş
Almanya'dan Türkiye'ye taşınmak yalnızca lojistik değil, aynı zamanda hukuki bir süreçtir — Almanya'dan çıkış kaydı, vergisel sonuçlar, Türkiye'de ikamet tesisi, emeklilik konuları. Geri dönüş sürecinin tüm hukuki aşamalarında size eşlik ediyor ve her şeyin doğru şekilde yürütülmesini sağlıyoruz.

- Çift Vatandaşlık ve Türkiye'de Vatandaşlığa Alınma
Almanya ile Türkiye arasındaki çift vatandaşlık soruları, Türkiye'ye yeniden vatandaşlık alımı veya Türk vatandaşlığının kaybı — Türk vatandaşlık hukukuna göre seçenekleriniz konusunda danışmanlık veriyoruz.

Mannheim'da Türk Göç Hukuku İçin Neden Doğru Kanzlei?

Türkiye bağlantılı göç hukuku soruları pek çok büroyu zorlar — çünkü Türk hukukunu bilmezler. Avukat Hasan Doğru bilir. Ankara Barosu üyesi ve § 207 BRAO kapsamında kayıtlı olarak yalnızca Türk hukuku alanında danışmanlık veriyor; Türk makam ve kurumlarına doğrudan erişimimiz bulunmaktadır.

Bizi farklı kılan:
- Yalnızca Türk hukuku — uzman bilgi
- Ankara Barosu üyesi, § 207 BRAO kapsamında kayıtlı
- Türkçe ve Almanca danışmanlık
- Mannheim'da yüz yüze görüşme imkânı
- Ankara'da ikinci ofis — Türkiye'deki makamlarla doğrudan temas`,contentDE:`Göç Hukuku — Türkisches Migrationsrecht in Mannheim

Türkisches Migrationsrecht & Aufenthalt in der Türkei

Sie planen einen Umzug in die Türkei, möchten Ihren Ruhestand dort verbringen oder haben Fragen zu Ihrer Mavi Kart? Das türkische Migrationsrecht ist komplex — besonders für türkischstämmige Personen mit deutschem Pass oder Doppelstaatsbürgerschaft, die ihre Rechte und Pflichten in beiden Ländern kennen müssen.

Avukat Hasan Doğru berät ausschließlich im türkischen Recht und begleitet Menschen aus Mannheim, Heidelberg und dem gesamten Rhein-Neckar-Raum bei allen migrationsrechtlichen Fragen mit Türkeibezug — kompetent und ohne unnötige Bürokratie.

Was wir für Sie tun:

- Aufenthaltserlaubnis in der Türkei (İkamet İzni)
Ob kurzfristiger Aufenthaltstitel, langfristige Aufenthaltserlaubnis oder Daueraufenthalt — wir begleiten Sie durch das türkische Aufenthaltserlaubnissystem für alle Staatsangehörigkeiten. Wir bereiten Ihren Antrag vor, prüfen alle Unterlagen und vertreten Sie gegenüber den türkischen Migrationsbehörden.

- Arbeitserlaubnis & Unternehmensgründung in der Türkei
Wer in der Türkei arbeiten oder ein Unternehmen gründen möchte, benötigt die entsprechenden türkischen Genehmigungen. Wir begleiten Arbeitnehmer, Unternehmer und Investoren bei der Beantragung türkischer Arbeitsgenehmigungen und beraten zur rechtssicheren Unternehmensgründung in der Türkei.

- Mavi Kart — Rechte und Pflichten
Die Mavi Kart (Blaue Karte) ist für türkischstämmige Personen, die die türkische Staatsbürgerschaft aufgegeben haben, ein wichtiges Instrument. Sie ermöglicht bestimmte Rechte in der Türkei — Grundbesitz, Erbschaft, Reisefreiheit — ohne die türkische Staatsbürgerschaft formell zu besitzen. Wir beraten Sie umfassend zu Ihren Rechten und Pflichten als Mavi-Kart-Inhaber.

- Rechtssichere Remigration in die Türkei
Ein Umzug von Deutschland in die Türkei ist nicht nur eine logistische, sondern auch eine rechtliche Herausforderung — Abmeldung in Deutschland, steuerliche Konsequenzen, Begründung des Wohnsitzes in der Türkei, Rentenangelegenheiten. Wir begleiten den gesamten rechtlichen Prozess Ihrer Remigration und sorgen dafür, dass alles korrekt abgewickelt wird.

- Doppelte Staatsbürgerschaft & Einbürgerung in der Türkei
Fragen zur doppelten Staatsbürgerschaft zwischen Deutschland und der Türkei, zur Wiedereinbürgerung in die Türkei oder zum Verlust der türkischen Staatsbürgerschaft — wir beraten Sie zu Ihren Optionen nach türkischem Staatsangehörigkeitsrecht.

Warum Doğru Kanzlei für türkisches Migrationsrecht in Mannheim?

Migrationsrechtliche Fragen mit Türkeibezug stellen viele Kanzleien vor eine Herausforderung — weil sie das türkische Recht nicht kennen. Avukat Hasan Doğru kennt es. Als Mitglied der Ankara Barosu und registriert gemäß § 207 BRAO beraten wir ausschließlich im türkischen Recht — mit direktem Zugang zu türkischen Behörden und Institutionen.

Was uns auszeichnet:
- Ausschließlich türkisches Recht — spezialisierte Expertise
- Mitglied der Ankara Barosu, registriert gemäß § 207 BRAO
- Beratung auf Türkisch und Deutsch
- Standort Mannheim — persönliche Beratung im Rhein-Neckar-Raum
- Zweiter Standort Ankara — direkte Behördenkontakte in der Türkei`,faqDE:[{question:"Brauche ich als deutscher Staatsbürger eine Aufenthaltserlaubnis für die Türkei?",answer:"Für Kurzaufenthalte bis 90 Tage benötigen deutsche Staatsbürger kein Visum. Wer länger in der Türkei leben möchte, benötigt eine türkische Aufenthaltserlaubnis (İkamet İzni). Wir begleiten Sie durch den Antragsprozess."},{question:"Was ist die Mavi Kart und wer hat Anspruch darauf?",answer:"Die Mavi Kart ist ein Dokument für Personen türkischer Abstammung, die die türkische Staatsbürgerschaft aufgegeben haben. Sie ermöglicht bestimmte Rechte in der Türkei — darunter Grundstückserwerb, Erbrecht und Reisefreiheit — ohne formelle Staatsbürgerschaft. Wir prüfen Ihren Anspruch und begleiten den Antrag."},{question:"Was muss ich rechtlich beachten, wenn ich von Deutschland in die Türkei umziehe?",answer:"Neben der deutschen Abmeldung sind steuerliche Fragen, die Begründung des türkischen Wohnsitzes und eventuell Rentenangelegenheiten zu klären. Wir begleiten den gesamten rechtlichen Prozess Ihrer Remigration."},{question:"Kann ich die türkische Staatsbürgerschaft wiedererlangen?",answer:"Unter bestimmten Voraussetzungen ist eine Wiedereinbürgerung in die Türkei möglich — auch wenn Sie die türkische Staatsbürgerschaft aufgegeben haben. Wir prüfen Ihre individuelle Situation und beraten Sie zu den Möglichkeiten."}],faqTR:[{question:"Alman vatandaşı olarak Türkiye'de oturma iznine ihtiyacım var mı?",answer:"90 güne kadar kısa süreli konaklamalar için Alman vatandaşları vize gerektirmez. Türkiye'de daha uzun süre yaşamak isteyenler Türk oturma izni (İkamet İzni) almak zorundadır. Başvuru sürecinde size rehberlik ediyoruz."},{question:"Mavi Kart nedir ve kimler başvurabilir?",answer:"Mavi Kart, Türk vatandaşlığından çıkan Türk kökenli kişilere verilen bir belgedir. Resmi vatandaşlık olmaksızın Türkiye'de belirli haklar — taşınmaz edinme, miras hakkı ve seyahat serbestisi dahil — tanır. Hak kazanma durumunuzu inceliyor ve başvuru sürecinizi yönetiyoruz."},{question:"Almanya'dan Türkiye'ye taşınırken hukuki açıdan nelere dikkat etmeliyim?",answer:"Almanya'dan çıkış kaydının yanı sıra vergisel konular, Türk ikamet tespiti ve emeklilik meseleleri de ele alınmalıdır. Geri dönüşünüzün tüm hukuki süreçlerine eşlik ediyoruz."},{question:"Türk vatandaşlığımı yeniden kazanabilir miyim?",answer:"Türk vatandaşlığından çıkmış olsanız bile belirli koşullar altında yeniden vatandaşlığa alınmak mümkündür. Bireysel durumunuzu değerlendiriyor ve olanaklarınız konusunda bilgilendiriyoruz."}]},{id:"strafrecht",slugDE:"strafrecht",slugTR:"ceza-hukuku",icon:L,title:"Strafrecht",titleTR:"Ceza Hukuku",seoTitleDE:"Türkisches Strafrecht Mannheim | Vorladung & Haftbefehl Türkei | Avukat Hasan Doğru",seoDescriptionDE:"Vorladung, Haftbefehl oder Interpol-Ausschreibung aus der Türkei? Avukat Hasan Doğru vertritt türkischstämmige Mandanten aus Mannheim in türkischen Strafverfahren — ohne Reise.",seoTitleTR:"Türk Ceza Hukuku Mannheim | Türkiye'den Mahkeme Celbi | Avukat Hasan Doğru",seoDescriptionTR:"Türkiye'den mahkeme celbi, tutuklama müzekkeresi veya Interpol arama kararı mı aldınız? Avukat Hasan Doğru, Mannheim'daki Türk müvekkilleri Türk ceza davalarında temsil eder — Türkiye'ye seyahat etmeden.",description:"Türk ceza davalarında uzman savunma ve hukuki danışmanlık — doğrudan Mannheim'dan. Mahkeme celbi, tutuklama müzekkeresi veya Interpol arama kararı olsun: Türk ceza yargısında yanınızdayız.",descriptionDE:"Fachkundige Strafverteidigung und rechtliche Beratung in türkischen Strafverfahren — direkt aus Mannheim. Ob Vorladung, Haftbefehl oder Interpol-Ausschreibung: Wir begleiten Sie durch das türkische Strafjustizsystem.",detail:"CEZA SAVUNMASI · INTERPOL / KIRMIZI BÜLTEN · İADE",detailDE:"STRAFVERTEIDIGUNG · INTERPOL / ROTE ECKE · AUSLIEFERUNG",content:`Almanya'dan Türkiye'deki Ceza Davalarında Savunma

Yurt Dışındaki Türkler için Türk Ceza Hukuku — Mahkeme Celbi veya Tutuklama Müzekkeresinde Ne Yapmalı?

Mannheim, Heidelberg veya Rhein-Neckar bölgesinde yaşıyorsanız ve Türkiye'den mahkeme celbi, tutuklama müzekkeresi veya Interpol arama kararı aldıysanız, ciddi bir hukuki sorunla karşı karşıyasınız demektir. Türk ceza hukuku, Alman hukukundan temelden farklıdır — uzman rehberlik olmadan Türkiye'ye hiç seyahat etmeseniz bile ağır sonuçlarla karşılaşabilirsiniz.

Türkiye'de devam eden bir ceza davası geniş çaplı sonuçlar doğurabilir: pasaport yenileme güçlükleri, Türkiye'ye girişte sorunlar, iade talepleri veya uluslararası arama sistemine (Interpol) kayıt. Bu süreçte zaman belirleyicidir — ne kadar erken harekete geçerseniz şansınız o kadar yüksek olur.

Avukat Hasan Doğru, Ankara Barosu üyesidir ve yalnızca Türk hukuku alanında danışmanlık vermektedir. Türkiye'de bizzat bulunmanıza gerek kalmadan Türk ceza davalarında sizi tam anlamıyla temsil ediyoruz.

Sizin için neler yapıyoruz:

- Türkiye'den Gelen Mahkeme Celbi veya Tutuklama Müzekkeresinde Durum Değerlendirmesi
Türkiye'den evrak aldınız ve ne yapacağınızı bilmiyor musunuz? Durumunuzu derhal ve gizlilik içinde analiz ediyor — tutuklama müzekkeresi veya seyahat yasağı bulunup bulunmadığını kontrol ediyor, sonuçları açıklıyor ve bir sonraki adımı birlikte belirliyoruz. Bizimle konuşmadan önce hiçbir şey yapmayın.

- Türk Ceza Yargılamasında Tam Savunma (Ceza Davası)
İlk ifadeden karara ve gerektiğinde üst mahkeme aşamasına kadar Türk ceza yargılamalarında tam savunmayı üstleniyoruz. Dava vekaleti ile Türk ceza mahkemelerinde sizi temsil ediyoruz — Türkiye'de bizzat bulunmanız gerekmiyor. Türk Ceza Muhakemesi Kanunu'nu (CMK) biliyor ve savunmanız için her türlü hukuki imkânı kullanıyoruz.

- Interpol Arama Kararları ve Kırmızı Bültenlerde Temsil (Kırmızı Bülten)
Interpol Kırmızı Bülteni, 196 üye ülkenin tamamında seyahat özgürlüğünüzü kısıtlayabilir — her sınır geçişinde gözaltına alınmanıza neden olabilir. Arama kararının hukuka uygunluğunu inceliyor, Interpol Dosyaların Denetim Komisyonu'na (CCF) kaldırma veya askıya alma başvurusunda bulunuyor ve Interpol ile Türk makamları nezdinde sizi temsil ediyoruz.

- Türkiye ile Almanya Arasındaki İade Davalarında Temsil (İade)
Türkiye Almanya'ya resmi bir iade talebinde bulunursa, hızlı hareket etmek ve her iki ülkede uzman temsil almak kritik önem taşır. Alman makamları ve Türk mahkemeleriyle eş zamanlı koordinasyon sağlıyor, talebin kabul edilebilirliğini inceliyor ve haklarınızı korumak için elimizden geleni yapıyoruz.

- Türk Hukukuna Göre Uyuşturucu Suçlarında Danışmanlık (TCK m. 188, 191)
Türk Ceza Kanunu'na (TCK) göre uyuşturucu suçları suçun türüne bağlı olarak birkaç yıldan ağırlaştırılmış müebbet hapis cezasına kadar uzanan ağır yaptırımlarla karşılık bulmaktadır. Haklarınız ve olası ceza indirim nedenleri konusunda danışmanlık veriyor, Türk ceza mahkemelerinde kararlılıkla sizi temsil ediyoruz.

- Dolandırıcılık ve Güveni Kötüye Kullanma Davalarında Temsil (Dolandırıcılık, Güveni Kötüye Kullanma)
Türk ceza hukukuna göre dolandırıcılık ve güveni kötüye kullanma suçlamaları titiz ve dikkatli bir savunma stratejisi gerektirir. Olayı bütünüyle analiz ediyor, aklamanıza yönelik delilleri güvence altına alıyor ve Türk ceza yargılamalarında sizi temsil ediyoruz.

- Almanya'dan Türkiye'de Suç Duyurusu (Suç Duyurusu)
Türkiye'de bir suçun mağduru oldunuz mu — dolandırıcılık, gasp, hırsızlık, yaralama? Almanya'dan da suç duyurusunda bulunabilirsiniz. Yetkili Türk Cumhuriyet Savcılığı'na Suç Duyurusu'nu hazırlayıp sunuyor ve davayı sizin adınıza takip ediyoruz.

- Askerlik Suçlarında Danışmanlık (Bakaya, Yoklama Kaçağı)
Pek çok Almanya'lı Türk, hakkında arama kararı olduğundan habersiz olarak Türkiye'ye gidiyor. Bakaya (firar) veya Yoklama Kaçağı (kayıt dışı kalma) durumunda havalimanında anında gözaltına alınma riski bulunmaktadır. Resmi kanallar aracılığıyla askerlik statünüzü netleştiriyor, bekleyen yükümlülükleri çözüme kavuşturuyor ve Türkiye'ye güvenle seyahat edebilmenizi sağlıyoruz.

- Türk Hukukuna Göre İnternet Suçları ve Siber Suçlarda Temsil
Türk Ceza Kanunu; internette hakaret (TCK m. 125), sosyal medyada iftira ve gizlilik ihlallerini — yurt dışında yaşayan kişiler söz konusu olsa dahi — giderek daha sert yaptırımlarla karşılamaktadır. Türk internet suçu davalarında sanık veya mağdur olarak sizi temsil ediyoruz.

- Siyasi Ceza Davaları ve Basın Özgürlüğü Suçlarında Danışmanlık
Türkiye'de sosyal medya paylaşımları veya grup konuşmalarındaki mesajlar bile cezai kovuşturmaya konu olabilmektedir. Devleti aşağılama (TCK m. 301), terör propagandası (TMK m. 7/2) veya benzer suçlamalarla karşılaşıyorsanız, uzman bilgimizle yanınızdayız.

Türkiye'den Mahkeme Celbi Aldığınızda Ne Yapmalısınız?

Pek çok kişi bu durumda aynı hatayı yapıyor: Hakkında tutuklama müzekkeresi olup olmadığını bilmeden Türkiye'ye gidiyor. Bu, havalimanında anında gözaltıyla sonuçlanabilir.

Doğru adımlar:

Adım 1 — Statünüz netleşmeden Türkiye'ye gitmeyin.
Adım 2 — Derhal bizimle iletişime geçin. Tutuklama müzekkeresi, seyahat yasağı veya Interpol arama kararı bulunup bulunmadığını kontrol ediyoruz.
Adım 3 — Yürütülen davayı analiz ediyor ve seçeneklerinizi açıklıyoruz.
Adım 4 — Birlikte bir strateji belirliyoruz — savunma, beyan veya davanın düşürülmesi.
Adım 5 — Türk makamları ve mahkemeleri önünde sizi tam anlamıyla temsil ediyoruz — vekaletname ile, bizzat bulunmanız gerekmeden.

Mannheim'da Türk Ceza Hukuku İçin Neden Doğru Kanzlei?

Türk ceza hukuku; Türk Ceza Kanunu (TCK), Ceza Muhakemesi Kanunu (CMK) ve Türk yargı pratiği konusunda derinlemesine bilgi gerektiren bir uzmanlık alanıdır. Avukat Hasan Doğru, Ankara Barosu üyesi olarak Türk ceza yargısını içeriden tanımaktadır — ders kitaplarından değil, uygulamadan.

Mannheim'daki büromuz, Türk ceza davalarıyla karşılaşan Rhein-Neckar bölgesindeki Türk kökenli müvekkiller için doğrudan muhataptır. Türkçe ve Almanca konuşuyoruz. Hızlı hareket ediyoruz. Ve davanın her aşamasında sizi şeffaf biçimde bilgilendiriyoruz.

Bizi farklı kılan:

- Yalnızca Türk hukuku — Türk ceza hukukunda uzman bilgi
- Ankara Barosu üyesi, § 207 BRAO kapsamında kayıtlı
- Türkiye'ye seyahat etmeden tam temsil imkânı
- Mahkeme celbi veya tutuklama müzekkeresinde anında durum kontrolü
- Türkçe ve Almanca danışmanlık
- Mannheim'da yüz yüze görüşme imkânı
- Ankara'da ikinci ofis — Türk ceza mahkemeleri ve makamlarına doğrudan erişim`,contentDE:`Strafverteidigung in der Türkei aus Deutschland

Türkisches Strafrecht für Auslandstürken — Was tun bei Vorladung oder Haftbefehl?

Wenn Sie in Mannheim, Heidelberg oder dem Rhein-Neckar-Raum leben und eine Vorladung, einen Haftbefehl oder eine Interpol-Ausschreibung aus der Türkei erhalten haben, stehen Sie vor einer ernsthaften rechtlichen Herausforderung. Das türkische Strafrecht unterscheidet sich grundlegend vom deutschen — ohne fachkundige Begleitung riskieren Sie schwerwiegende Konsequenzen, auch ohne jemals in die Türkei zu reisen.

Ein laufendes Strafverfahren in der Türkei kann weitreichende Folgen haben: Einschränkungen bei der Passverlängerung, Probleme bei der Einreise in die Türkei, Auslieferungsanträge oder Einträge im internationalen Fahndungssystem (Interpol). Zeit ist dabei entscheidend — je früher Sie handeln, desto besser stehen Ihre Chancen.

Avukat Hasan Doğru ist Mitglied der Ankara Barosu und berät ausschließlich im türkischen Recht. Wir vertreten Sie vollständig in türkischen Strafverfahren — auch ohne Ihre persönliche Anwesenheit in der Türkei.

Was wir für Sie tun:

- Prüfung Ihrer Situation bei Vorladung oder Haftbefehl aus der Türkei
Sie haben Post aus der Türkei erhalten und wissen nicht, was zu tun ist? Wir analysieren Ihre Situation sofort und vertraulich — prüfen ob ein Haftbefehl oder Reiseverbot besteht, erklären Ihnen die Konsequenzen und legen gemeinsam mit Ihnen den nächsten Schritt fest. Handeln Sie nicht, bevor Sie mit uns gesprochen haben.

- Vollständige Strafverteidigung im türkischen Strafverfahren (Ceza Davası)
Wir übernehmen die vollständige Verteidigung in türkischen Strafverfahren — von der ersten Einlassung bis zum Urteil und gegebenenfalls bis zur Rechtsmittelinstanz. Per Prozessvollmacht vertreten wir Sie vor türkischen Strafgerichten, ohne dass Sie persönlich in der Türkei erscheinen müssen. Wir kennen das türkische Strafprozessrecht (CMK) und nutzen jeden rechtlichen Spielraum für Ihre Verteidigung.

- Vertretung bei Interpol-Ausschreibungen und Roten Ecken (Kırmızı Bülten)
Eine Rote Ecke (Red Notice) von Interpol kann Ihre Reisefreiheit in allen 196 Mitgliedsstaaten einschränken — und dazu führen, dass Sie bei jeder Grenzüberschreitung festgehalten werden. Wir prüfen die Rechtmäßigkeit der Ausschreibung, beantragen die Löschung oder Aussetzung bei der Interpol-Kommission für die Kontrolle von Dateien (CCF) und vertreten Sie gegenüber Interpol und türkischen Behörden.

- Begleitung bei Auslieferungsverfahren zwischen der Türkei und Deutschland (İade)
Wenn die Türkei ein förmliches Auslieferungsersuchen an Deutschland stellt, sind schnelles Handeln und spezialisierte Vertretung in beiden Ländern entscheidend. Wir koordinieren mit deutschen Behörden und türkischen Gerichten gleichzeitig, prüfen die Zulässigkeit des Ersuchens und setzen alles daran, Ihre Rechte zu schützen.

- Beratung bei Betäubungsmitteldelikten nach türkischem Recht (TCK m. 188, 191)
Betäubungsmitteldelikte nach dem türkischen Strafgesetzbuch (TCK) werden mit erheblichen Freiheitsstrafen geahndet — die Strafen reichen je nach Delikt von mehreren Jahren bis zu lebenslanger Haft. Wir beraten Sie zu Ihren Rechten, möglichen Strafminderungsgründen und vertreten Sie konsequent vor türkischen Strafgerichten.

- Vertretung bei Betrug und Untreue (Dolandırıcılık, Güveni Kötüye Kullanma)
Betrugs- und Untreuevorwürfe nach türkischem Strafrecht erfordern eine differenzierte und sorgfältige Verteidigungsstrategie. Wir analysieren den Sachverhalt vollständig, sichern entlastende Beweismittel und vertreten Sie durchsetzungsstark in türkischen Strafverfahren.

- Einreichung von Strafanzeigen in der Türkei aus Deutschland (Suç Duyurusu)
Wurden Sie selbst Opfer einer Straftat in der Türkei — Betrug, Erpressung, Diebstahl, Körperverletzung — können Sie auch von Deutschland aus Strafanzeige erstatten. Wir formulieren und reichen die Suç Duyurusu bei der zuständigen türkischen Staatsanwaltschaft ein und verfolgen das Verfahren in Ihrem Auftrag.

- Beratung bei Militärdienst-Vergehen (Bakaya, Yoklama Kaçağı)
Viele Deutsch-Türken reisen sorglos in die Türkei — ohne zu wissen, dass sie wegen nicht abgeleisteten Militärdienstes gesucht werden. Bakaya (Fahnenflucht) oder Yoklama Kaçağı (Erfassungsentzug) können bei der Einreise zu sofortiger Festnahme führen. Wir klären Ihren Militärdienststatus, regeln offene Pflichten und sichern Ihnen die Möglichkeit, sicher in die Türkei zu reisen.

- Begleitung bei Internetstraftaten und Cyber-Kriminalität nach türkischem Recht
Das türkische Strafgesetzbuch ahndet Beleidigung im Internet (TCK m. 125), Verleumdung in sozialen Medien und Datenschutzverletzungen zunehmend streng — auch wenn die betreffenden Personen im Ausland leben. Wir vertreten Sie sowohl als Beschuldigten als auch als Geschädigten in türkischen Verfahren wegen Internetkriminalität.

- Beratung bei politischen Strafverfahren und Pressefreiheitsdelikten
In der Türkei werden auch Meinungsäußerungen in sozialen Medien oder Beiträge in Gruppenkonversationen strafrechtlich verfolgt. Wenn Sie wegen Beleidigung des Staates (TCK m. 301), Terrorismuspropaganda (TMK m. 7/2) oder ähnlichen Delikten verfolgt werden, stehen wir Ihnen mit spezialisierter Expertise zur Seite.

Was tun, wenn Sie eine Vorladung aus der Türkei erhalten?

Viele Menschen machen in dieser Situation denselben Fehler: Sie reisen in die Türkei, ohne zu wissen, ob ein Haftbefehl vorliegt. Das kann zur sofortigen Festnahme am Flughafen führen.

Der richtige Ablauf:

Schritt 1 — Nicht in die Türkei reisen, bevor Ihr Status geklärt ist.
Schritt 2 — Kontaktieren Sie uns sofort. Wir prüfen ob ein Haftbefehl, Reiseverbot oder eine Interpol-Ausschreibung vorliegt.
Schritt 3 — Wir analysieren das zugrundeliegende Verfahren und erklären Ihnen Ihre Optionen.
Schritt 4 — Wir entwickeln gemeinsam mit Ihnen eine Strategie — ob Einlassung, Verteidigung oder Verfahrenseinstellung.
Schritt 5 — Wir vertreten Sie vollständig vor türkischen Behörden und Gerichten — per Vollmacht, ohne Ihre Anwesenheit.

Warum Doğru Kanzlei für türkisches Strafrecht in Mannheim?

Türkisches Strafrecht ist ein Spezialgebiet, das tiefgreifende Kenntnisse des türkischen Strafgesetzbuchs (TCK), der türkischen Strafprozessordnung (CMK) und der türkischen Justizpraxis erfordert. Avukat Hasan Doğru ist Mitglied der Ankara Barosu und kennt das türkische Strafjustizsystem von innen — nicht aus Lehrbüchern, sondern aus der Praxis.

Unsere Kanzlei in Mannheim ist der direkte Ansprechpartner für türkischstämmige Mandanten im Rhein-Neckar-Raum, die mit türkischen Strafverfahren konfrontiert sind. Wir sprechen Türkisch und Deutsch. Wir handeln schnell. Und wir halten Sie in jeder Phase des Verfahrens transparent informiert.

Was uns auszeichnet:

- Ausschließlich türkisches Recht — spezialisierte Expertise im türkischen Strafrecht
- Mitglied der Ankara Barosu, registriert gemäß § 207 BRAO
- Vollständige Vertretung ohne Reise in die Türkei möglich
- Sofortige Statusprüfung bei Vorladung oder Haftbefehl
- Beratung auf Türkisch und Deutsch
- Standort Mannheim — persönliche Beratung im Rhein-Neckar-Raum
- Zweiter Standort Ankara — direkter Zugang zu türkischen Strafgerichten und Behörden`,faqDE:[{question:"Ich habe eine Vorladung aus der Türkei erhalten. Was soll ich tun?",answer:"Handeln Sie nicht unüberlegt und reisen Sie auf keinen Fall in die Türkei, bevor Sie Ihren Status kennen. Kontaktieren Sie uns zuerst — bevor Sie auf die Vorladung antworten oder irgendwelche Schritte unternehmen. Wir analysieren die Situation, prüfen ob ein Haftbefehl oder Reiseverbot vorliegt und legen den sichersten Weg fest."},{question:"Kann ich in die Türkei einreisen, wenn gegen mich ein Verfahren läuft?",answer:"Das hängt davon ab, ob ein Reiseverbot (Yurt Dışı Çıkış Yasağı) oder Haftbefehl (Tutuklama Müzekkeresi) vorliegt. In manchen Fällen ist die Einreise möglich, in anderen droht unmittelbare Festnahme am Flughafen. Wir prüfen Ihren Status, bevor Sie reisen — das ist in jedem Fall unverzichtbar."},{question:"Kann ich in einem türkischen Strafverfahren vertreten werden, ohne selbst zu erscheinen?",answer:"In den meisten Verfahren ja. Mit einer Prozessvollmacht (Vekaletname) vertreten wir Sie vor türkischen Strafgerichten. Ob eine persönliche Anwesenheit erforderlich ist, hängt vom Verfahrensstand, der Art des Delikts und dem Willen des Gerichts ab — wir klären das von Anfang an."},{question:"Was ist eine Interpol-Rote-Ecke und wie kann sie aufgehoben werden?",answer:"Eine Red Notice ist ein internationaler Fahndungsaufruf, der in allen 196 Interpol-Mitgliedsstaaten gilt. Sie schränkt Ihre Reisefreiheit erheblich ein. Wir beantragen die Überprüfung und Löschung der Ausschreibung bei der Interpol-Kommission für die Kontrolle von Dateien (CCF) und vertreten Sie in diesem spezialisierten Verfahren."},{question:"Was passiert, wenn ich wegen des Militärdienstes gesucht werde?",answer:"Wer als Bakaya (Fahnenflüchtiger) oder Yoklama Kaçağı (Erfassungsentzieher) registriert ist, riskiert bei der Einreise in die Türkei sofortige Festnahme. Wir klären Ihren Militärdienststatus über offizielle Kanäle, regeln offene Pflichten und ermöglichen Ihnen so eine sichere Einreise in die Türkei."},{question:"Wie lange dauert ein türkisches Strafverfahren?",answer:"Das hängt stark von der Art des Delikts, dem zuständigen Gericht und dem Verfahrensstand ab. Einfachere Verfahren können in 6–18 Monaten abgeschlossen werden, komplexe Fälle dauern mehrere Jahre. Wir informieren Sie realistisch und transparent über den Zeitrahmen Ihres konkreten Falls — ohne falsche Versprechen."},{question:"Was kostet eine Strafverteidigung nach türkischem Recht?",answer:"Die Kosten hängen vom Umfang des Verfahrens, der Anzahl der Instanzen und der Komplexität des Falls ab. Nach einer ersten Analyse erstellen wir Ihnen ein transparentes Angebot — ohne versteckte Kosten."}],faqTR:[{question:"Türkiye'den mahkeme celbi aldım. Ne yapmalıyım?",answer:"Aceleci davranmayın ve statünüzü öğrenmeden Türkiye'ye gitmeyin. Mahkeme celbine yanıt vermeden veya herhangi bir adım atmadan önce bize başvurun. Durumu analiz ediyor, tutuklama müzekkeresi ya da seyahat yasağı bulunup bulunmadığını kontrol ediyor ve en güvenli yolu belirliyoruz."},{question:"Hakkımda dava varken Türkiye'ye girebilir miyim?",answer:"Bu, seyahat yasağı (Yurt Dışı Çıkış Yasağı) veya tutuklama müzekkeresi (Tutuklama Müzekkeresi) bulunup bulunmadığına bağlıdır. Bazı durumlarda giriş mümkünken bazılarında havalimanında anında gözaltı riski söz konusudur. Seyahat etmeden önce her durumda statünüzü kontrol ediyoruz — bu vazgeçilmezdir."},{question:"Türk ceza yargılamasında bizzat bulunmadan temsil edilebilir miyim?",answer:"Pek çok davada evet. Dava vekaleti (Vekaletname) ile Türk ceza mahkemelerinde sizi temsil edebiliyoruz. Bizzat katılımın gerekip gerekmediği, davanın aşamasına, suçun niteliğine ve mahkemenin takdirine bağlıdır — bunu başından netleştiriyoruz."},{question:"Interpol Kırmızı Bülteni nedir ve nasıl kaldırılır?",answer:"Kırmızı Bülten, tüm 196 Interpol üyesi ülkede geçerli uluslararası bir arama ilanıdır. Seyahat özgürlüğünüzü ciddi ölçüde kısıtlar. Interpol Dosyaların Denetim Komisyonu'na (CCF) başvurarak arama kararının incelenmesi ve kaldırılması için talepte bulunuyor, bu özel süreçte sizi temsil ediyoruz."},{question:"Askerlik nedeniyle aranıyorsam ne olur?",answer:"Bakaya (firar) veya Yoklama Kaçağı (kayıt dışı kalma) olarak tescil edilmişseniz Türkiye'ye girişte anında gözaltı riskiyle karşılaşabilirsiniz. Resmi kanallar aracılığıyla askerlik statünüzü netleştiriyor, bekleyen yükümlülükleri çözüme kavuşturuyor ve güvenli Türkiye girişini mümkün kılıyoruz."},{question:"Bir Türk ceza davası ne kadar sürer?",answer:"Bu, suçun türüne, yetkili mahkemeye ve davanın aşamasına göre büyük farklılık gösterir. Daha basit davalar 6–18 ayda sonuçlanabilirken karmaşık davalar yıllarca sürebilir. Somut davanızın zaman çizelgesi konusunda gerçekçi ve şeffaf bilgi veriyoruz — gerçekçi olmayan vaatler yapmadan."},{question:"Türk ceza savunmasının maliyeti nedir?",answer:"Maliyet, davanın kapsamına, yargılama aşaması sayısına ve karmaşıklığına bağlıdır. İlk değerlendirmenin ardından şeffaf bir teklif sunuyoruz — gizli ücret olmaksızın."}]},{id:"tanima-ve-tenfiz",slugDE:"tanima-ve-tenfiz",slugTR:"tanima-ve-tenfiz",icon:P,title:"Tanıma & Tenfiz",titleTR:"Tanıma ve Tenfiz",seoTitleDE:"Tanıma & Tenfiz Mannheim | Deutsche Scheidung Türkei anerkennen | Avukat Hasan Doğru",seoDescriptionDE:"Deutsche Scheidung in der Türkei anerkennen lassen — von Mannheim aus, ohne Reise. Avukat Hasan Doğru führt das Tanıma ve Tenfiz-Verfahren vollständig für Sie durch.",seoTitleTR:"Tanıma ve Tenfiz Mannheim | Alman Boşanmasını Türkiye'de Tanıtmak | Avukat Hasan Doğru",seoDescriptionTR:"Alman boşanma kararını Türkiye'de tanıtın — Mannheim'dan, Türkiye'ye gitmeden. Avukat Hasan Doğru, Tanıma ve Tenfiz davasını baştan sona sizin için yürütür.",description:"Almanya ile Türkiye arasındaki yabancı mahkeme kararlarının tanınması ve tenfizinde uzman hukuki danışmanlık — Türkiye'ye seyahat etmeden.",descriptionDE:"Spezialisierte rechtliche Beratung bei der Anerkennung und Vollstreckung ausländischer Gerichtsentscheidungen zwischen Deutschland und der Türkei — vollständig ohne Reise.",detail:"Boşanma Tanıma Tenfiz · Türk Boşanmasının Tanınması · Gitmeden Tanıma Tenfiz · Süre ve Maliyet · Velayet Kararları · Evlat Edinme · Genel Mahkeme Kararları",detailDE:"Scheidungsanerkennung · Anerkennung türkischer Urteile · Tanıma Tenfiz (Reise nicht erforderlich) · Verfahrensdauer & Kosten · Sorgerechtsbeschlüsse · Adoptionsanerkennung · Urteilsanerkennung allgemein",content:`Tanıma ve Tenfiz — Alman Boşanmasını Türkiye'de Tanıtmak

Yabancı mahkeme kararları Türkiye'de kendiliğinden geçerli olmaz — biz geçerli hale getiriyoruz.

Almanya'da boşandıysanız, bu karar Türkiye'de otomatik olarak geçerli sayılmaz. Türk hukuku açısından evliliğinizin sona ermiş sayılabilmesi için ayrı bir mahkeme süreci gereklidir — buna Tanıma ve Tenfiz denir.

Mannheim, Heidelberg ve Rhein-Neckar bölgesindeki Türk aileler için bu süreç çoğunlukla bilinmemektedir — ve sonuçları ağır olabilmektedir. Tanıma yapılmadan Türk makamları sizi hâlâ evli kabul eder. Bu durum; yeniden evlenme, miras ve Türkiye'deki mal varlığının devri gibi konularda ciddi sorunlara yol açabilir.

Avukat Hasan Doğru, Ankara Barosu üyesidir ve yalnızca Türk hukuku alanında danışmanlık vermektedir. Tüm Tanıma ve Tenfiz sürecini sizin için yürütüyoruz — Türkiye'ye seyahat etmenize gerek kalmadan.

Sizin için neler yapıyoruz:

- Alman Boşanmasını Türkiye'de Tanıtmak (Tanıma)
Almanya'da boşandıysanız ve bu boşanmanın Türkiye'de de geçerli sayılmasını istiyorsanız, yetkili Türk mahkemelerinde tam Tanıma davasını yürütüyoruz — gerekli tüm belgelerin hazırlanmasından başvuruya, kararın kesinleşmesine kadar. Türkiye'de bizzat bulunmanıza gerek yoktur.

- Yabancı Kararların Türkiye'de İcrası (Tenfiz)
Yalnızca tanıma değil, aynı zamanda nafaka ödemeleri, mal paylaşımı veya velayet kararları gibi konularda icra da söz konusuysa Tenfiz davasını açıyor ve kararın Türkiye'de icra edilebilir ve fiilen uygulanabilir hale gelmesini sağlıyoruz.

- Türk Boşanmasının Almanya'da Tanınması
Türkiye'de verilen kararlar da Almanya'da otomatik geçerlilik kazanmaz. Türkiye'de boşandıysanız ve bu boşanmanın Almanya'da resmi olarak tanınmasını istiyorsanız, koşulları inceliyor ve yetkili Alman makamı nezdinde tanıma işlemini başlatıyoruz.

- Türkiye'ye Gitmeden Tanıma ve Tenfiz
Dava vekaleti ile Türk mahkemelerinde sizi tam anlamıyla temsil ediyoruz — Türkiye'de bizzat görünmeniz gerekmiyor. Mannheim ve Almanya genelindeki pek çok müvekkilimiz süreci tamamen uzaktan yürütmektedir. Belgeler, çeviriler, mahkeme yazışmaları ve süreler — tümünü biz hallediyoruz.

- Velayet Kararlarının Uluslararası Tanınması
Alman velayet ve kişisel ilişki kararları, Türkiye'de icra edilebilmesi için ayrı bir Tanıma davası yoluyla tanınmak zorundadır. Bu davayı Türk mahkemelerinde yürütüyor ve velayet düzenlemenizin Türkiye'de de geçerliliğini sağlıyoruz.

- Türkiye ile Almanya Arasında Evlat Edinme Tanıması
Sınır ötesi evlat edinmeler, her iki ülkede de evlat edinme kararının karşılıklı olarak tanınmasını gerektirmektedir. Bu süreç karmaşıktır ve her iki ülkedeki makamlarla yakın iş birliği gerektirir. Hukuki olarak her adımda yanınızdayız.

- Genel Mahkeme Kararlarının Tanınması (Genel Mahkeme Kararları)
Yalnızca boşanma kararları değil; miras hukuku, sözleşme hukuku veya nafaka ilamları gibi diğer Alman mahkeme kararları da Türkiye'de tanınıp icra edilebilir hale getirilebilir. Davanızı inceliyor ve ilgili süreci başlatıyoruz.

- Süre ve Maliyet Konusunda Şeffaf Danışmanlık
Başından itibaren gerçekçi bir değerlendirme sunuyoruz — sürecin ne kadar süreceğini, hangi belgelerin gerektiğini, ne kadara mal olacağını. Gizli ücret yok, gerçekçi olmayan vaatler yok.

Tanıma ve Tenfiz Süreci Nasıl İşler?

Adım 1 — Belge Hazırlığı:
Hangi belgelerin gerektiğini inceliyoruz — genellikle apostilli boşanma kararı ve onaylı Türkçe çevirisi — ve tüm belgelerin teminini koordine ediyoruz.

Adım 2 — Başvuru:
Tanıma talebini yetkili Türk mahkemesine (Asliye Hukuk Mahkemesi) sunuyor ve vekaleten sizin avukatınız olarak sizi temsil ediyoruz.

Adım 3 — Yargılama Süreci:
Türk mahkemesi, tanıma koşullarının karşılanıp karşılanmadığını incelemektedir — özellikle yabancı kararın kesinleşip kesinleşmediğini ve Türk kamu düzenine (ordre public) aykırı olup olmadığını.

Adım 4 — Kararın Kesinleşmesi:
Tanıma kararı kesinleştikten sonra sizi derhal bilgilendiriyoruz ve gerekli tüm sonraki adımları — örneğin Türk nüfus kayıtlarında medeni hal değişikliği — başlatıyoruz.

Mannheim'da Tanıma ve Tenfiz İçin Neden Doğru Kanzlei?

Tanıma ve Tenfiz davası teknik görünebilir — ve gerçekten öyledir. Belge hazırlığındaki hatalar, yanlış çeviriler veya kaçırılan süreler tüm süreci aylarca geciktirebilir ya da reddedilmesiyle sonuçlanabilir. Avukat Hasan Doğru, Türk mahkemelerinin gerekliliklerini yakından bilmekte ve başvurunuzun başından itibaren doğru olmasını sağlamaktadır.

Ankara Barosu üyesi olarak Mannheim'da büroya ve Ankara'da ikinci ofise sahip olan büromuz, Rhein-Neckar bölgesindeki Türk kökenli müvekkiller için doğrudan muhataptır.

Bizi farklı kılan:

- Yalnızca Türk hukuku — tanıma davalarında uzman bilgi
- Ankara Barosu üyesi, § 207 BRAO kapsamında kayıtlı
- Türkiye'ye seyahat etmeden tam süreç yönetimi mümkün
- Türkçe ve Almanca danışmanlık
- Mannheim'da yüz yüze görüşme imkânı
- Ankara'da ikinci ofis — Türk mahkemeleriyle doğrudan iş birliği`,contentDE:`Tanıma ve Tenfiz — Deutsche Scheidung in der Türkei anerkennen lassen

Ausländische Urteile gelten in der Türkei nicht automatisch — wir machen sie rechtswirksam.

Wenn Ihre Ehe in Deutschland geschieden wurde, entfaltet dieses Urteil in der Türkei nicht automatisch seine Wirkung. Damit die Scheidung auch nach türkischem Recht als wirksam gilt, ist ein gesondertes gerichtliches Verfahren erforderlich — die sogenannte Tanıma ve Tenfiz (Anerkennung und Vollstreckung).

Für türkischstämmige Familien in Mannheim, Heidelberg und dem Rhein-Neckar-Raum ist dieses Verfahren oft unbekannt — mit weitreichenden Konsequenzen. Ohne Tanıma gilt Ihre Ehe vor türkischen Behörden weiterhin als bestehend. Das kann bei einer erneuten Heirat, bei erbrechtlichen Fragen oder bei der Übertragung von Vermögenswerten in der Türkei zu erheblichen Problemen führen.

Avukat Hasan Doğru ist Mitglied der Ankara Barosu und berät ausschließlich im türkischen Recht. Wir führen das gesamte Tanıma ve Tenfiz-Verfahren für Sie durch — vollständig ohne Reise in die Türkei.

Was wir für Sie tun:

- Deutsche Scheidung in der Türkei anerkennen lassen (Tanıma)
Wenn Ihre Ehe in Deutschland geschieden wurde und Sie diese Scheidung auch in der Türkei wirksam machen möchten, führen wir das vollständige Tanıma-Verfahren vor den zuständigen türkischen Gerichten durch — von der Vorbereitung aller notwendigen Dokumente über die Antragstellung bis zur rechtskräftigen Anerkennung. Sie müssen nicht persönlich in der Türkei erscheinen.

- Vollstreckung ausländischer Urteile in der Türkei (Tenfiz)
Geht es nicht nur um die Anerkennung, sondern auch um die Vollstreckung eines Urteils — zum Beispiel bei Unterhaltszahlungen, Vermögensaufteilung oder Sorgerechtsentscheidungen — führen wir das Tenfiz-Verfahren ein und sorgen dafür, dass das Urteil in der Türkei vollstreckbar ist und tatsächlich umgesetzt wird.

- Türkische Scheidung in Deutschland anerkennen lassen
Auch türkische Urteile entfalten in Deutschland nicht automatisch ihre Wirkung. Wenn Sie in der Türkei geschieden wurden und diese Scheidung in Deutschland offiziell anerkannt haben möchten, prüfen wir die Voraussetzungen und leiten das Anerkennungsverfahren bei der zuständigen deutschen Behörde ein.

- Tanıma Tenfiz ohne Reise in die Türkei
Per Prozessvollmacht vertreten wir Sie vollständig vor türkischen Gerichten — kein persönliches Erscheinen in der Türkei erforderlich. Viele unserer Mandanten aus Mannheim und dem gesamten Bundesgebiet führen das Verfahren vollständig auf Distanz durch. Wir kümmern uns um Dokumente, Übersetzungen, Gerichtskorrespondenz und Fristen.

- Sorgerechtsbeschlüsse international anerkennen lassen
Deutsche Sorgerechts- und Umgangsrechtsurteile müssen in der Türkei durch ein eigenes Tanıma-Verfahren anerkannt werden, bevor sie dort vollstreckbar sind. Wir führen dieses Verfahren vor türkischen Gerichten durch und sorgen dafür, dass Ihre Sorgerechtsregelung in der Türkei Bestand hat.

- Adoptionsanerkennung zwischen der Türkei und Deutschland
Grenzüberschreitende Adoptionen erfordern die gegenseitige Anerkennung des Adoptionsbeschlusses in beiden Ländern. Dieses Verfahren ist komplex und erfordert die enge Zusammenarbeit mit Behörden in beiden Ländern. Wir begleiten Sie rechtlich durch jeden Schritt.

- Allgemeine Urteilsanerkennung (Genel Mahkeme Kararları)
Nicht nur Scheidungsurteile, sondern auch andere deutsche Gerichtsentscheidungen — etwa im Erbrecht, Vertragsrecht oder bei Unterhaltstiteln — können in der Türkei anerkannt und für vollstreckbar erklärt werden. Wir prüfen Ihren Fall und leiten das entsprechende Verfahren ein.

- Transparente Beratung zu Verfahrensdauer und Kosten
Wir geben Ihnen von Anfang an eine realistische Einschätzung — wie lange das Verfahren dauert, welche Dokumente benötigt werden, welche Kosten entstehen. Keine versteckten Gebühren, keine falschen Versprechen.

Wie läuft das Tanıma ve Tenfiz-Verfahren ab?

Schritt 1 — Dokumentenvorbereitung:
Wir prüfen welche Unterlagen benötigt werden — in der Regel das Scheidungsurteil mit Apostille und beglaubigter türkischer Übersetzung — und koordinieren die Beschaffung aller Dokumente.

Schritt 2 — Antragstellung:
Wir reichen den Tanıma-Antrag beim zuständigen türkischen Gericht (Asliye Hukuk Mahkemesi) ein und vertreten Sie als Ihren bevollmächtigten Anwalt.

Schritt 3 — Gerichtsverfahren:
Das türkische Gericht prüft ob die Voraussetzungen für eine Anerkennung erfüllt sind — insbesondere ob das ausländische Urteil rechtskräftig ist und türkischen Grundsätzen (ordre public) nicht widerspricht.

Schritt 4 — Rechtskräftige Anerkennung:
Nach positiver Entscheidung wird die Anerkennung rechtskräftig. Wir informieren Sie sofort und stellen sicher, dass alle notwendigen Folgeschritte — zum Beispiel die Änderung des Personenstands in türkischen Registern — eingeleitet werden.

Warum Doğru Kanzlei für Tanıma ve Tenfiz in Mannheim?

Das Tanıma ve Tenfiz-Verfahren klingt technisch — und ist es auch. Fehler bei der Dokumentenvorbereitung, falsche Übersetzungen oder verpasste Fristen können das gesamte Verfahren um Monate verzögern oder zur Ablehnung führen. Avukat Hasan Doğru kennt die Anforderungen türkischer Gerichte genau und stellt sicher, dass Ihr Antrag von Anfang an korrekt ist.

Als Mitglied der Ankara Barosu mit Büro in Mannheim und zweitem Standort in Ankara sind wir der direkte Ansprechpartner für türkischstämmige Mandanten im Rhein-Neckar-Raum.

Was uns auszeichnet:

- Ausschließlich türkisches Recht — spezialisierte Expertise im Anerkennungsverfahren
- Mitglied der Ankara Barosu, registriert gemäß § 207 BRAO
- Vollständiges Verfahren ohne Reise in die Türkei möglich
- Beratung auf Türkisch und Deutsch
- Standort Mannheim — persönliche Beratung im Rhein-Neckar-Raum
- Zweiter Standort Ankara — direkte Zusammenarbeit mit türkischen Gerichten`,faqDE:[{question:"Warum wird meine deutsche Scheidung in der Türkei nicht automatisch anerkannt?",answer:"Die Türkei ist kein EU-Mitgliedstaat und hat keine bilateralen Abkommen mit Deutschland über die automatische Urteilsanerkennung. Jedes ausländische Urteil muss durch ein eigenständiges gerichtliches Verfahren (Tanıma) in der Türkei anerkannt werden — unabhängig davon, wie lange die Scheidung in Deutschland schon rechtskräftig ist."},{question:"Was passiert konkret, wenn ich das Tanıma-Verfahren nicht durchführe?",answer:"Ohne Tanıma gilt Ihre Ehe vor türkischen Behörden, Gerichten und Standesämtern weiterhin als bestehend. Wenn Sie in der Türkei erneut heiraten möchten, werden Sie als verheiratet geführt. Bei Erbschaftsangelegenheiten hat Ihr früherer Ehepartner möglicherweise weiterhin Ansprüche. Bei der Übertragung gemeinsamer Immobilien in der Türkei wird die Mitwirkung des früheren Ehepartners verlangt."},{question:"Welche Dokumente brauche ich für das Tanıma-Verfahren?",answer:"In der Regel benötigen Sie das rechtskräftige Scheidungsurteil mit Apostille sowie eine beglaubigte Übersetzung ins Türkische. Je nach Fall können weitere Dokumente erforderlich sein — wir prüfen Ihren konkreten Fall und erstellen eine vollständige Dokumentenliste."},{question:"Wie lange dauert das Tanıma ve Tenfiz-Verfahren?",answer:"In der Regel 3–9 Monate, abhängig vom zuständigen türkischen Gericht und dessen Auslastung. Wir informieren Sie über realistische Zeitrahmen für Ihren konkreten Fall und halten Sie in jeder Phase transparent auf dem Laufenden."},{question:"Muss ich persönlich vor einem türkischen Gericht erscheinen?",answer:"Nein. Per Vollmacht vertreten wir Sie vollständig vor türkischen Gerichten. Sie bleiben in Mannheim — wir erledigen alles in der Türkei."},{question:"Kann das Verfahren auch für türkische Urteile in Deutschland durchgeführt werden?",answer:"Ja. Auch türkische Urteile — zum Beispiel eine in der Türkei ausgesprochene Scheidung — müssen in Deutschland anerkannt werden, bevor sie dort wirksam sind. Wir prüfen die Voraussetzungen und leiten das Anerkennungsverfahren bei der zuständigen deutschen Behörde ein."},{question:"Was kostet das Tanıma ve Tenfiz-Verfahren?",answer:"Die Kosten setzen sich aus Gerichtsgebühren, Übersetzungskosten und dem Anwaltshonorar zusammen. Nach einer ersten Analyse Ihres Falls erstellen wir Ihnen ein transparentes Angebot — ohne versteckte Kosten."}],faqTR:[{question:"Alman boşanmam Türkiye'de neden otomatik olarak tanınmıyor?",answer:"Türkiye AB üyesi değildir ve Almanya ile otomatik karar tanıma konusunda ikili anlaşması bulunmamaktadır. Almanya'da ne kadar süre önce boşanılmış olursa olsun, her yabancı karar bağımsız bir yargısal işlemle (Tanıma) Türkiye'de tanınmak zorundadır."},{question:"Tanıma davası açmazsam ne olur?",answer:"Tanıma yapılmadan Türk makamları, mahkemeler ve nüfus müdürlükleri sizi hâlâ evli olarak kabul eder. Türkiye'de yeniden evlenmek isterseniz evli olarak kayıtlısınızdır. Miras durumlarında eski eşinizin hak talepleri devam edebilir. Ortak Türkiye gayrimenkullerinin devrinde eski eşin katılımı talep edilir."},{question:"Tanıma davası için hangi belgeler gerekiyor?",answer:"Genellikle apostilli kesinleşmiş boşanma kararı ve onaylı Türkçe çevirisi gerekmektedir. Davaya göre ek belgeler istenebilir — somut durumunuzu inceliyor ve eksiksiz belge listesi hazırlıyoruz."},{question:"Tanıma ve Tenfiz davası ne kadar sürer?",answer:"Yetkili Türk mahkemesine ve iş yüküne göre genellikle 3–9 ay sürmektedir. Somut davanız için gerçekçi süre tahmini sunuyor ve her aşamada sizi şeffaf biçimde bilgilendiriyoruz."},{question:"Türk mahkemesinde bizzat bulunmam gerekiyor mu?",answer:"Hayır. Vekaletname ile Türk mahkemelerinde sizi tam anlamıyla temsil ediyoruz. Mannheim'da kalırsınız — Türkiye'deki her şeyi biz hallediyoruz."},{question:"Türk kararları da Almanya'da tanıtılabilir mi?",answer:"Evet. Türkiye'de verilen kararlar — örneğin Türkiye'de gerçekleştirilen boşanma — Almanya'da geçerli sayılmadan önce tanınması gerekmektedir. Koşulları inceliyor ve yetkili Alman makamı nezdinde tanıma işlemini başlatıyoruz."},{question:"Tanıma ve Tenfiz davasının maliyeti nedir?",answer:"Mahkeme harçları, çeviri giderleri ve avukatlık ücretinden oluşmaktadır. Davanızın ilk değerlendirmesinin ardından şeffaf bir teklif sunuyoruz — gizli ücret olmaksızın."}]},{id:"mavi-kart",slugDE:"mavi-kart",slugTR:"mavi-kart",icon:Be,title:"Mavi Kart (Blaue Karte)",titleTR:"Mavi Kart",seoTitleDE:"Mavi Kart Mannheim | Rechte ehemaliger türkischer Staatsbürger | Avukat Hasan Doğru",seoDescriptionDE:"Mavi Kart beantragen oder verlängern von Mannheim aus. Avukat Hasan Doğru berät ehemalige türkische Staatsbürger im Rhein-Neckar-Raum zu allen Mavi Kart-Rechten und -Pflichten.",seoTitleTR:"Mavi Kart Mannheim | Eski Türk Vatandaşlarının Hakları | Avukat Hasan Doğru",seoDescriptionTR:"Mannheim'dan Mavi Kart başvurusu veya yenileme. Avukat Hasan Doğru, Rhein-Neckar bölgesindeki eski Türk vatandaşlarına Mavi Kart hakları konusunda danışmanlık verir.",description:"Eski Türk vatandaşları için Mavi Kart haklarında uzman hukuki danışmanlık — Türkiye'deki ikamet ve yatırım olanaklarınızı hukuki güvenceyle koruyun.",descriptionDE:"Fachanwaltliche Beratung zu Mavi Kart-Rechten für ehemalige türkische Staatsbürger sowie zu Aufenthalts- und Investitionsmöglichkeiten in der Türkei — rechtssichere und dauerhaft.",detail:"Yerleşim Özgürlüğü · Taşınmaz Edinimi · Miras Hakları · Yatırım ve İş · Eğitim ve Sağlık · Oy Kullanma · Emeklilik",detailDE:"Aufenthaltsfreiheit · Immobilienerwerb · Erbrecht · Investition · Bildung & Gesundheit · Wahlrecht · Rente",content:`Mavi Kart — Eski Türk vatandaşlarının hak ve yükümlülükleri
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

Unsere Kanzlei steht Ihnen mit fundierter Expertise im türkischen und deutsch-türkischen Recht zur Seite — für eine rechtlich sichere Verbindung zu beiden Ländern.`},{id:"icra-ve-iflas",slugDE:"icra-ve-iflas",slugTR:"icra-ve-iflas",icon:L,title:"Zwangsvollstreckung & Forderungsbeitreibung in der Türkei",titleTR:"Türkiye'de İcra ve İflas",seoTitleDE:"Zwangsvollstreckung Türkei Mannheim | Forderungen Türkei durchsetzen | Avukat Hasan Doğru",seoDescriptionDE:"Forderungen in der Türkei durchsetzen — von Mannheim aus. Avukat Hasan Doğru leitet İcra-Verfahren, vollstreckt Urteile und treibt Schulden in der Türkei ein — ohne Reise.",seoTitleTR:"Türkiye'de İcra ve İflas Mannheim | Alacak Takibi Türkiye | Avukat Hasan Doğru",seoDescriptionTR:"Türkiye'deki alacakları Mannheim'dan tahsil edin. Avukat Hasan Doğru, İcra takibini başlatır, kararları icra eder ve Türkiye'deki borçları tahsil eder — seyahat etmeden.",description:"Türkiye'deki alacaklarınızın ve mahkeme kararlarınızın etkin şekilde icrası — Almanya'dan tam temsil, bizzat bulunmanıza gerek yok.",descriptionDE:"Effektive Durchsetzung Ihrer Forderungen und Urteile in der Türkei — vollständig aus Deutschland, ohne persönliche Anwesenheit vor Ort.",detail:"Alacak Tahsili · Alman Kararları İcrası · Haciz · İflas Takibi · İcra Takibi",detailDE:"Forderungsbeitreibung · Vollstreckung ausländischer Urteile · Pfändung · Insolvenzverfahren · Inkasso",content:`İcra ve İflas — Türk hukukuna göre icra takibi
Kararı kazandınız ama para gelmiyor mu? Türkiye'deki alacaklarınızı biz tahsil ediyoruz.

Kazanılan bir dava yalnızca ilk adımdır. Karşı taraf gönüllü olarak ödeme yapmaz veya kararı uygulamazsa asıl zorluk başlar: İcra Takibi. Türkiye'de bu süreç, İcra Müdürlüğü üzerinden yürütülen sıkı usul kurallarına tabidir ve uzmanlık gerektirir.

İster Türkiye'de bir Alman mahkeme kararını icra etmek isteyin, ister Türkiye'deki bir kişi veya şirkete karşı alacaklarınız olsun, isterseniz de bir icra takibiyle karşı karşıya kalın — sizi kapsamlı bir şekilde temsil ediyor ve haklarınızı kararlılıkla savunuyoruz.

Sizin için neler yapıyoruz:
• Almanya'dan İcra Takibi Başlatma — Türkiye'de bizzat bulunmanıza gerek kalmadan icra sürecinin tam yönetimi
• Alacak Tahsili — Türkiye'deki gerçek ve tüzel kişilere karşı vadesi geçmiş alacakların kararlı takibi
• Alman Kararlarının Türkiye'de İcrası — Alman mahkeme kararlarının tanınması ve tenfizi
• Türk Kararlarının İcrası — Kesinleşmiş Türk mahkeme kararlarının İcra Müdürlüğü aracılığıyla uygulanması
• Türkiye'de Banka Hesabı Haczi — Türk bankalarındaki hesaplara haciz konulması yoluyla malvarlığının güvence altına alınması
• Türkiye'de Gayrimenkul Haczi — İpotek tesisi ve Türk gayrimenkullerinin haczi
• İcra İşlemlerine İtiraz — Haksız icra girişimlerine karşı savunma
• İflas Hukuku (İflas) — Türk iflas süreçlerinde alacaklıların temsili
• Alacakların Güvenceye Alınması — Dava öncesinde alacağınızı güvence altına almak için ihtiyati haciz başvurusu
• Nafaka Kararlarının İcrası — İcra Müdürlüğü aracılığıyla nafaka alacaklarının tahsili
• Hakem Kararlarının İcrası — Uluslararası hakem kararlarının Türkiye'de tanınması ve tenfizi
• Mahkeme Dışı Uzlaşma — Dava açılmadan alacak tahsili için borçlularla müzakere

İcra süreci nasıl işler?
Adım 1 — Başlatma: Yetkili İcra Müdürlüğü'ne başvuruyoruz. Borçluya resmi bir ödeme emri gönderilir ve ödeme veya itiraz için 7 gün süresi vardır.
Adım 2 — İtiraz veya Ödeme: Borçlu ödeme yapmaz ve itiraz etmezse, haciz hemen başlar. İtiraz durumunda itirazın iptali davası açıyoruz.
Adım 3 — Haciz: Borçlunun Türkiye'deki banka hesapları, gayrimenkulleri, araçları veya diğer malvarlığına haciz talep ediyoruz.
Adım 4 — Paraya Çevirme: Haczedilen mallar, alacağınız tamamen ödenene kadar açık artırmayla satılır veya doğrudan devredilir.

Önemli Uyarı:
Türk icra hukukunda kesin süreler geçerlidir. Alacakların zaman aşımına uğramaması veya güvence haklarının kaybedilmemesi için fazla beklemeyin. Mümkün olan en kısa sürede bizimle iletişime geçin — ne kadar erken harekete geçersek, başarı şansınız o kadar yüksek olur.

Sonuç:
Çıkarlarınızı kararlılıkla savunuyor ve Türkiye'deki alacaklarınızı takip ediyoruz — güvenilir, şeffaf ve Almanya'dan tam hizmetle.`,contentDE:`Zwangsvollstreckung — Forderungsbeitreibung nach türkischem Recht
Sie haben ein Urteil erwirkt, aber das Geld bleibt aus? Wir treiben Ihre Forderungen in der Türkei ein.

Ein gewonnenes Urteil ist nur der erste Schritt. Wenn die Gegenseite nicht freiwillig zahlt oder das Urteil nicht umsetzt, beginnt die eigentliche Herausforderung: die Zwangsvollstreckung (İcra Takibi). In der Türkei unterliegt dieser Prozess strengen Verfahrensvorschriften über das Vollstreckungsamt (İcra Müdürlüğü) und erfordert spezialisierte Expertise.

Ob Sie ein deutsches Urteil in der Türkei vollstrecken lassen wollen, Forderungen gegen eine Person oder ein Unternehmen in der Türkei haben oder selbst mit einer Vollstreckung konfrontiert sind — wir vertreten Sie umfassend und setzen Ihre Rechte konsequent durch.

Was wir für Sie tun:
• Einleitung der Zwangsvollstreckung aus Deutschland — Vollständige Abwicklung des türkischen Vollstreckungsverfahrens ohne Ihre persönliche Anwesenheit
• Forderungsbeitreibung — Konsequente Verfolgung überfälliger Forderungen gegen natürliche und juristische Personen in der Türkei
• Vollstreckung deutscher Urteile in der Türkei — Anerkennung und Vollstreckung deutscher Gerichtsurteile
• Vollstreckung türkischer Urteile — Durchsetzung rechtskräftiger türkischer Urteile über das Vollstreckungsamt
• Kontopfändung in der Türkei — Sicherung von Vermögenswerten durch Kontopfändungen bei türkischen Banken
• Immobilienpfändung in der Türkei — Eintragung von Zwangshypotheken und Pfändung türkischer Immobilien
• Einspruch gegen Vollstreckungsmaßnahmen — Verteidigung gegen unberechtigte Vollstreckungsversuche
• Insolvenzverfahren (İflas) — Vertretung von Gläubigern in türkischen Insolvenzverfahren
• Sicherung von Forderungen — Beantragung von Arrest (ihtiyati haciz) zur Sicherung Ihrer Forderung vor Prozessbeginn
• Vollstreckung von Unterhaltsurteilen — Beitreibung von Unterhaltsforderungen über das Vollstreckungsamt
• Vollstreckung von Schiedssprüchen — Anerkennung und Vollstreckung internationaler Schiedssprüche in der Türkei
• Außergerichtliche Einigung — Verhandlung mit Schuldnern zur Forderungsbeitreibung ohne Gerichtsverfahren

Wie läuft die Zwangsvollstreckung ab?
Schritt 1 — Einleitung:
Wir stellen den Vollstreckungsantrag beim zuständigen Vollstreckungsamt. Der Schuldner erhält einen offiziellen Zahlungsbefehl and hat 7 Tage Zeit zur Zahlung oder zum Einspruch.
Schritt 2 — Einspruch oder Zahlung:
Zahlt der Schuldner nicht und legt keinen Einspruch ein, beginnt die Vollstreckung sofort. Bei Einspruch erheben wir Klage auf Aufhebung des Einspruchs.
Schritt 3 — Pfändung:
Wir beantragen die Pfändung von Bankkonten, Immobilien, Fahrzeugen oder sonstigem Vermögen des Schuldners in der Türkei.
Schritt 4 — Verwertung:
Gepfändete Vermögenswerte werden versteigert oder direkt übertragen — bis Ihre Forderung vollständig beglichen ist.

Wichtiger Hinweis:
Im türkischen Vollstreckungsrecht gelten strikte Fristen. Zögern Sie nicht zu lange, da Forderungen verjähren oder Sicherungsrechte verloren gehen können. Kontaktieren Sie uns so früh wie möglich — je schneller wir handeln, desto höher sind Ihre Erfolgsaussichten.

Fazit:
Wir vertreten Ihre Interessen konsequent und verfolgen Ihre Forderungen in der Türkei — zuverlässig, transparent und mit vollem Service aus Deutschland.`},{id:"erbrecht",slugDE:"erbrecht",slugTR:"miras-hukuku",icon:Re,title:"Erbrecht",titleTR:"Miras Hukuku",seoTitleDE:"Türkisches Erbrecht Mannheim | Erbschaft Türkei | Avukat Hasan Doğru",seoDescriptionDE:"Erbschaft in der Türkei von Mannheim aus regeln — ohne Reise. Avukat Hasan Doğru berät türkischstämmige Familien zu Veraset İlamı, Tapu-Übertragung und türkischem Erbrecht.",seoTitleTR:"Türk Miras Avukatı Almanya | Miras Hukuku Mannheim | Avukat Hasan Doğru",seoDescriptionTR:"Türkiye'deki mirası Almanya'dan halledin — seyahat etmeden. Avukat Hasan Doğru, Mannheim'daki Türk ailelere Veraset İlamı, tapu devri ve miras hukuku konularında danışmanlık verir.",description:"Miras Hukuku — Mannheim'da Türk Miras Hukuku. Bir yakınınız vefat ettiğinde ve Türkiye'de mülk, banka hesabı veya arazi bıraktığında — Mannheim, Heidelberg ve Rhein-Neckar bölgesindeki Türk aileler karmaşık bir görevle karşı karşıya kalır.",descriptionDE:"Wenn ein Angehöriger stirbt und Vermögen in der Türkei hinterlässt — Immobilien, Bankkonten, Grundstücke — stehen türkischstämmige Familien in Mannheim, Heidelberg und dem Rhein-Neckar-Raum vor einer komplexen Aufgabe: Zwei Rechtssysteme, zwei Länder, oft wenig Zeit.",detail:"Veraset İlamı · Tapu Devri · Saklı Pay · Mirasın Reddi · İzale-i Şüyu · Veraset Vergisi",detailDE:"Erbschein · Grundbuchübertragung · Pflichtteil · Erbausschlagung · Teilungsklage · Erbschaftsteuer",expertiseTitleDE:"Warum Doğru Kanzlei für türkisches Erbrecht in Mannheim?",expertiseTitleTR:"Mannheim'da Türk Miras Hukuku İçin Neden Doğru Kanzlei?",content:`Miras Hukuku — Mannheim'da Türk Miras Hukuku

Türk Miras Hukuku & Miras Mannheim

Bir yakınınız vefat ettiğinde ve Türkiye'de mülk, banka hesabı veya arazi bıraktığında — Mannheim, Heidelberg ve Rhein-Neckar bölgesindeki Türk aileler karmaşık bir görevle karşı karşıya kalır: İki hukuk sistemi, iki ülke, çoğunlukla az zaman. Türk miras hukuku, Alman hukukundan temelden farklıdır ve uzman bilgi gerektirir.

Avukat Hasan Doğru, Ankara Barosu üyesidir ve yalnızca Türk hukuku alanında danışmanlık vermektedir. Veraset İlamı'ndan tapu devrine kadar tüm Türk miras sürecinde yanınızdayız — Türkiye'ye seyahat etmeden.

Sizin için neler yapıyoruz:

• Veraset İlamı — Türk Mirasçılık Belgesi
Veraset İlamı, Türkiye'deki her türlü varlığa — banka hesapları, gayrimenkuller, araziler — erişimin ön koşuludur. Bu belge olmadan hiçbir işlem yapılamaz. Türk noterlerinde veya Sulh Hukuk Mahkemesi'nde Veraset İlamı başvurusunu yapıyor, Almanya'da kullanım için apostil ve onaylı çeviri işlemlerini de üstleniyoruz.

• Mirasçılara Tapu Devri (Tapu Devri)
Mülk sahibinin vefatının ardından Türkiye'deki her gayrimenkulün tapusu (Tapu Sicili) mirasçılar adına tescil edilmelidir. Belge hazırlığından tapu müdürlüğünde tescile kadar tüm tapu devri sürecini yönetiyoruz — Türkiye'ye seyahat etmenize gerek kalmadan.

• Türk Hukukuna Göre Saklı Pay (Mahfuz Hisse / Tenkis Davası)
Türk miras hukuku, belirli mirasçıları saklı pay haklarıyla korur. Saklı pay sahipleri devre dışı bırakıldıysa veya saklı payı ihlal eden sağlararası bağışlar yapıldıysa tenkis davası açılabilir. Bu davalarda Türk mahkemelerinde sizi temsil ediyoruz.

• Türk Hukukuna Göre Mirası Reddetme (Mirası Reddetmek)
Her miras bir kazanç değildir — özellikle borç söz konusu olduğunda. Türk hukukuna göre mirası reddetmenin süreleri ve koşulları hakkında danışmanlık veriyor, yetkili Türk sulh mahkemesine ret beyanını iletiyoruz.

• Ortaklığın Giderilmesi Davası (İzale-i Şüyu)
Birden fazla mirasçı Türkiye'de bir mülk veya araziyi birlikte miras aldığında ve paylaşım konusunda uzlaşılamazsa, izale-i şüyu davası açılabilir. Bu davalarda sizi temsil ediyor ve mirasçılar arasındaki ortaklığın adil and hukuka uygun biçimde sona erdirilmesini sağlıyoruz.

• Türk Veraset ve İntikal Vergisi
Türkiye bağlantılı miraslar için Türk veraset ve intikal vergisi ödenmesi gerekir. Yurt dışında yaşayan mirasçılar için özel süreler geçerlidir — genellikle ölüm tarihinden itibaren 6 ay. Vergisel yükümlülükleriniz konusunda danışmanlık veriyor ve tüm sürelere uyulmasını sağlıyoruz.

• Türk Hukukuna Göre Vasiyetname (Vasiyetname)
Türk hukukuna göre geçerli bir vasiyetname, ileride yaşanabilecek anlaşmazlıklara karşı en iyi güvencedir. Türk vasiyetnamesi düzenlenmesi, saklı pay sınırları (Mahfuz Hisse) ve Almanlarda yaygın "Berliner Testament"in Türkiye'de tanınıp tanınmayacağı konularında danışmanlık veriyoruz.

• Miras Sözleşmeleri ve Sağlararası Bağışlar
Türk hukukuna göre miras paylaşımının önceden planlanması — bağışlar veya miras sözleşmeleri yoluyla — konusunda danışmanlık veriyor, hukuki güvenlik ve vergisel sonuçlar açısından değerlendirme yapıyoruz.`,contentDE:`Miras Hukuku — Türkisches Erbrecht in Mannheim

Türkisches Erbrecht & Erbschaft Mannheim

Wenn ein Angehöriger stirbt und Vermögen in der Türkei hinterlässt — Immobilien, Bankkonten, Grundstücke — stehen türkischstämmige Familien in Mannheim, Heidelberg und dem Rhein-Neckar-Raum vor einer komplexen Aufgabe: Zwei Rechtssysteme, zwei Länder, oft wenig Zeit. Das türkische Erbrecht unterscheidet sich grundlegend vom deutschen und erfordert spezialisierte Expertise.

Avukat Hasan Doğru ist Mitglied der Ankara Barosu und berät ausschließlich im türkischen Recht. Wir begleiten Sie durch das gesamte türkische Erbverfahren — von der Veraset İlamı bis zur Grundbuchübertragung — vollständig ohne Reise in die Türkei.

Was wir für Sie tun:

• Veraset İlamı — Türkisches Erbschaftszeugnis
Das türkische Erbschaftszeugnis (Veraset İlamı) ist die Grundvoraussetzung für den Zugriff auf jedes Vermögen in der Türkei — Bankkonten, Immobilien, Grundstücke. Ohne dieses Dokument ist nichts möglich. Wir beantragen die Veraset İlamı bei türkischen Notaren oder dem Nachlassgericht (Sulh Hukuk Mahkemesi) und kümmern uns um Apostille und beglaubigte Übersetzungen für die Verwendung in Deutschland.

• Grundbuchübertragung auf Erben (Tapu Devri)
Nach dem Tod des Eigentümers muss jede Immobilie in der Türkei im Grundbuch (Tapu Sicili) auf die Erben umgeschrieben werden. Wir übernehmen den gesamten Tapu-Devri-Prozess — von der Vorbereitung der Unterlagen bis zur Eintragung beim türkischen Grundbuchamt — ohne dass Sie in die Türkei reisen müssen.

• Pflichtteil nach türkischem Recht (Mahfuz Hisse / Tenkis Davası)
Das türkische Erbrecht schützt bestimmte Erben durch Pflichtteilsrechte. Wurden Pflichtteilsberechtigte übergangen oder wurden Schenkungen zu Lebzeiten vorgenommen, die den Pflichtteil verletzen, kann eine Pflichtteilsherabsetzungsklage (Tenkis Davası) eingereicht werden. Wir vertreten Sie in diesen Verfahren vor türkischen Gerichten.

• Erbausschlagung nach türkischem Recht (Mirası Reddetmek)
Nicht jedes Erbe ist ein Gewinn — besonders wenn Schulden vorhanden sind. Wir beraten Sie zu den Fristen und Voraussetzungen der Erbausschlagung nach türkischem Recht und übernehmen die Erklärung gegenüber dem zuständigen türkischen Nachlassgericht.

• Teilungsklage bei gemeinschaftlichem Erbe (İzale-i Şüyu)
Wenn mehrere Erben gemeinsam eine Immobilie oder ein Grundstück in der Türkei erben und keine Einigung über die Aufteilung erzielt werden kann, ist eine Teilungsklage (İzale-i Şüyu) möglich. Wir vertreten Sie in diesen Verfahren und sorgen für eine faire und rechtssichere Auflösung der Erbengemeinschaft.

• Türkische Erbschaftsteuer (Veraset ve İntikal Vergisi)
Bei Erbschaften mit Bezug zur Türkei fällt türkische Erbschaftsteuer an. Für im Ausland lebende Erben gelten besondere Fristen — in der Regel 6 Monate ab dem Todesfall. Wir beraten Sie zu Ihren steuerlichen Pflichten und stellen sicher, dass alle Fristen eingehalten werden.

• Testament nach türkischem Recht (Vasiyetname)
Ein wirksames Testament nach türkischem Recht ist der beste Schutz vor späteren Streitigkeiten. Wir beraten Sie zur Errichtung eines türkischen Testaments, zu Pflichtteilsgrenzen (Mahfuz Hisse) und zur Frage, ob ein deutsches "Berliner Testament" in der Türkei anerkannt wird.

• Erbverträge & Schenkungen zu Lebzeiten
Vorweggenommene Erbfolge durch Schenkungen oder Erbverträge nach türkischem Recht — wir beraten Sie zur rechtssicheren Gestaltung und zu den steuerlichen Konsequenzen.`,faqDE:[{question:"Was ist eine Veraset İlamı und wozu brauche ich sie?",answer:"Die Veraset İlamı ist das türkische Erbschaftszeugnis. Es weist aus, wer nach türkischem Recht Erbe ist und zu welchem Anteil. Ohne dieses Dokument können Sie in der Türkei weder auf Bankkonten noch auf Immobilien zugreifen. Wir beantragen es für Sie — ohne dass Sie dafür in die Türkei reisen müssen."},{question:"Wie lange habe ich Zeit, eine türkische Erbschaft anzunehmen oder auszuschlagen?",answer:"Die Frist zur Erbausschlagung beträgt nach türkischem Recht 3 Monate ab Kenntnis des Erbfalls. Diese Frist ist streng — wer sie versäumt, gilt automatisch als Erbe, auch wenn Schulden vorhanden sind. Kontaktieren Sie uns so früh wie möglich."},{question:"Muss ich für das Erbverfahren in die Türkei reisen?",answer:"Nein. Mit einer notariellen Vollmacht können wir das gesamte türkische Erbverfahren von Deutschland aus für Sie führen — Veraset İlamı, Grundbuchübertragung, Bankkonten, Erbschaftsteuer."},{question:"Gilt mein deutsches Testament auch in der Türkei?",answer:"Nicht automatisch. Ein deutsches Testament muss in der Türkei anerkannt werden und darf das türkische Pflichtteilsrecht (Mahfuz Hisse) nicht verletzen. Wir prüfen die Wirksamkeit Ihres Testaments nach türkischem Recht und beraten Sie zu eventuell notwendigen Anpassungen."},{question:"Was kostet das türkische Erbverfahren?",answer:"Die Kosten hängen vom Umfang des Nachlasses und der Komplexität des Verfahrens ab. Wir erstellen Ihnen nach einer ersten Analyse ein transparentes Angebot — ohne versteckte Kosten."}],faqTR:[{question:"Veraset İlamı nedir ve neden gereklidir?",answer:"Veraset İlamı, Türk hukukuna göre kimin mirasçı olduğunu ve hangi oranda pay aldığını belgeleyen Türk mirasçılık belgesidir. Bu belge olmadan Türkiye'deki banka hesaplarına veya gayrimenkullere erişmek mümkün değildir. Türkiye'ye seyahat etmenize gerek kalmadan bu belgeyi sizin adınıza temin ediyoruz."},{question:"Türk mirasını kabul etmek veya reddetmek için ne kadar sürem var?",answer:"Türk hukukuna göre mirayı reddetme süresi, miras hakkının öğrenilmesinden itibaren 3 aydır. Bu süre kesindir — süreyi kaçıranlar, borç olsa bile otomatik olarak mirasçı sayılır. Mümkün olan en erken aşamada bizimle iletişime geçin."},{question:"Miras işlemleri için Türkiye'ye gitmem gerekiyor mu?",answer:"Hayır. Noter tasdikli bir vekaletname ile Veraset İlamı, tapu devri, banka hesapları ve veraset vergisi dahil tüm Türk miras sürecini Almanya'dan sizin adınıza yürütebiliyoruz."},{question:"Alman vasiyetnamen Türkiye'de geçerli mi?",answer:"Otomatik olarak geçerli değildir. Alman vasiyetnamesi Türkiye'de tanınmalı ve Türk saklı pay hukukunu (Mahfuz Hisse) ihlal etmemelidir. Vasiyetnamenizin Türk hukukuna göre geçerliliğini inceliyor ve gerektiğinde düzenleme yapılması konusunda sizi bilgilendiriyoruz."},{question:"Türk miras işlemlerinin maliyeti nedir?",answer:"Maliyet, miras kapsamına ve sürecin karmaşıklığına bağlıdır. İlk analiz sonrasında şeffaf bir teklif sunuyoruz — gizli ücret olmaksızın."}]},{seoTitleDE:"Türkisches Sorgerecht Mannheim | Sorgerecht Türkei Deutschland | Avukat Hasan Doğru",seoDescriptionDE:"Sorgerecht zwischen Deutschland und der Türkei — spezialisierte Vertretung aus Mannheim. Avukat Hasan Doğru führt türkische Sorgerechtsklagen und internationale Kindesentziehungsverfahren.",seoTitleTR:"Türk Velayet Hukuku Mannheim | Almanya Türkiye Velayet Davası | Avukat Hasan Doğru",seoDescriptionTR:"Almanya ile Türkiye arasında velayet — Mannheim'dan uzman temsil. Avukat Hasan Doğru, Türk velayet davalarını ve uluslararası çocuk kaçırma davalarını yürütür.",id:"sorgerecht",slugDE:"sorgerecht",slugTR:"velayet",icon:Me,title:"Sorgerecht",titleTR:"Velayet",description:"Almanya ve Türkiye arasındaki velayet davaları, çocuk yetiştirme hakları ve uluslararası çocuk kaçırma (La Haye) konularında uzman hukuki destek.",descriptionDE:"Fachanwaltliche Unterstützung bei Sorgerechtsverfahren zwischen Deutschland und der Türkei sowie bei internationaler Kindesentführung (HKÜ).",detail:"Velayet Davaları · Tanıma ve Tenfiz · La Haye",detailDE:"Sorgerechtsklagen · Anerkennung · HKÜ",content:`Velayet — Almanya'daki Türkler için Türk Hukukunda Velayet
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

Besondere Herausforderungen entstehen, wenn ein Elternteil in Deutschland und der andere in der Türkei lebt, wenn ein türkisches Sorgerechtsurteil in Deutschland anerkannt werden soll oder wenn ein deutsches Urteil in der Türkei vollstreckt werden muss.

Was wir für Sie tun:
• Rechtliche Beratung zum Sorgerecht nach türkischem und deutschem Recht
• Vertretung in Sorgerechtsklagen vor türkischen Gerichten
• Anerkennung und Vollstreckung ausländischer Sorgerechtsurteile
• Beratung bei internationalen Kindesentziehungsfällen (HKÜ)
• Koordination zwischen deutschen und türkischen Behörden

Unsere Kanzlei ist auf deutsch-türkisches Familienrecht spezialisiert und begleitet Sie kompetent und einfühlsam durch jeden Schritt des Verfahrens.`},{id:"immobilienrecht",slugDE:"immobilienrecht",slugTR:"gayrimenkul-hukuku",icon:Ke,title:"Immobilienrecht",titleTR:"Gayrimenkul Hukuku",seoTitleDE:"Türkisches Immobilienrecht Mannheim | Immobilien Türkei | Avukat Hasan Doğru",seoDescriptionDE:"Immobilien in der Türkei kaufen, verkaufen oder erben — rechtlich sicher von Mannheim aus. Avukat Hasan Doğru berät Deutsch-Türken zu Tapu, Grundbuch und türkischem Eigentumsrecht.",seoTitleTR:"Gayrimenkul Avukatı Almanya | Türkiye Gayrimenkul Hukuku Mannheim | Avukat Hasan Doğru",seoDescriptionTR:"Türkiye'deki mülkü Almanya'dan alın, satın veya miras alın — hukuki güvenceyle. Avukat Hasan Doğru, Mannheim'daki Türk ailelere tapu, gayrimenkul ve mülkiyet hukuku konularında danışmanlık verir.",description:"Türkiye'de mülkü bulunan, miras yoluyla taşınmaz edinen ya da gayrimenkul satın almayı planlayan vatandaşlar için tapu, kira ve mülkiyet süreçlerinde uzman destek.",descriptionDE:"Fachkundige rechtliche Begleitung für Deutsch-Türken bei Kauf, Verkauf, Grundbucheintragungen und Eigentumsstreitigkeiten von Immobilien in der Türkei.",detail:"Tapu İptali · Kira Sözleşmeleri · Şufa",detailDE:"Grundbuchberichtigung · Mietverträge · Vorkaufsrecht",content:`Gayrimenkul Hukuku — Mannheim'da Türk Gayrimenkul Hukuku

Türk Gayrimenkul Hukuku & Türkiye'deki Mülkler

Mannheim, Heidelberg ve Rhein-Neckar bölgesindeki pek çok Türk aile Türkiye'de gayrimenkul sahibidir — ya da orada almak, satmak veya miras yoluyla devralmak istemektedir. Türk gayrimenkul hukuku karmaşıktır ve tapu işlemlerinde ya da satış sözleşmelerinde yapılan küçük hatalar bile ciddi mali kayıplara ve yıllarca süren davalara yol açabilir.

Avukat Hasan Doğru, Ankara Barosu üyesidir ve yalnızca Türk hukuku alanında danışmanlık vermektedir. Türkiye bağlantılı tüm gayrimenkul hukuku konularında yanınızdayız — güvenli, güvenilir ve Türkiye'ye seyahat etmeden.

Sizin için neler yapıyoruz:

- Tapu Düzeltme ve Tescil (Tapu Tescili)
Türkiye'deki hatalı tapu kayıtları düşünüldüğünden daha yaygındır — yanlış isimler, eksik alanlar, hatalı mülkiyet payları. Tapu Sicili'ndeki hatalı kayıtlara itiraz ediyor ve Türk tapu müdürlüğünde doğru yeniden tescil işlemlerini sağlıyoruz. Tüm işlemleri vekaletname ile yürütüyoruz — Türkiye'de bizzat bulunmanıza gerek yok.

- Türkiye'de Gayrimenkul Alım ve Satımı
Türkiye'de gayrimenkul alan veya satan kişiler hukuki desteğe ihtiyaç duyar — tapu kaydının incelenmesinden satış sözleşmesine, güvenli mülkiyet devrine kadar. Tüm belgeleri inceliyor, gizli yükleri tespit ediyor ve sizi pahalı hatalardan koruyoruz.

- Kat Mülkiyeti ve Ortak Alanlar
Türk kat mülkiyeti topluluklarında ortak alanlar, yönetim veya bakım konusundaki anlaşmazlıklar sıkça yaşanmaktadır. Türk kat mülkiyeti hukuku kapsamında hak ve yükümlülüklerinizi açıklıyor ve anlaşmazlıklarda sizi temsil ediyoruz.

- Önalım Hakkı ve Ortaklığın Giderilmesi (Şufa Hakkı ve İzale-i Şüyu)
Türkiye'deki bir gayrimenkul üzerinde önalım hakkınız var mı? Yoksa bir miras ortaklığını paylaştırmak mı istiyorsunuz? Şufa hakkını Türk mahkemelerinde takip ediyor ve ortak mülkiyette izale-i şüyu davalarında sizi temsil ediyoruz.

- Müteahhit Sözleşmeleri ve Kat Karşılığı Projeler
Türk müteahhitlerle yapılan sözleşmeler çoğu zaman şeffaf değildir ve tek taraflı düzenlenmiştir. İmzalamadan önce sözleşmenizi inceliyor, düzeltmeler için müzakere yapıyor ve ayıp ya da gecikme durumlarında müteahhide karşı sizi temsil ediyoruz.

- Kamulaştırma ve Bedel Tespiti (Kamulaştırma)
Türk devleti veya bir belediye mülkünüzü kamulaştırmak istiyorsa haklarınız vardır — adil tazminat ve bedel tespitinin hukuki denetimi. Kamulaştırma süreçlerinde sizi temsil ediyor ve hakkaniyete uygun bir tazminat için mücadele ediyoruz.

- Türkiye'de Kira Sözleşmeleri ve Tahliye Davaları
Türkiye'deki gayrimenkulünüzü kiraladınız ve kira alamıyor musunuz? Ya da kiracı taşınmayı reddediyor mu? Türk kira hukuku kapsamında tahliye, fesih ve kira alacaklarınızı takip ediyoruz.

Mannheim'da Türk Gayrimenkul Hukuku İçin Neden Doğru Kanzlei?

Türkiye'deki gayrimenkul işlemleri, Almanya'daki Türkler için çoğunlukla büyük meblağlar içerir — ve hukuki destek yoksa büyük riskler barındırır. Sahte tapu belgeleri, gizli ipotekler, geçersiz satış sözleşmeleri — bunlar Türkiye pratiğinde nadir değildir.

Avukat Hasan Doğru, Türk gayrimenkul hukukunu içeriden bilmektedir. Ankara Barosu üyesi olarak Türk tapu müdürlükleri, mahkemeler ve noterlerle doğrudan çalışıyoruz — Mannheim'dan, seyahat etmenize gerek kalmadan.

Bizi farklı kılan:
- Yalnızca Türk hukuku — uzmanlıkta taviz yok
- Ankara Barosu üyesi, § 207 BRAO kapsamında kayıtlı
- Tüm işlemler Türkiye'ye seyahat etmeden mümkün
- Türkçe ve Almanca danışmanlık
- Mannheim'da yüz yüze görüşme imkânı
- Ankara'da ikinci ofis — Türk makamlarıyla doğrudan iş birliği`,contentDE:`Gayrimenkul Hukuku — Türkisches Immobilienrecht in Mannheim

Türkisches Immobilienrecht & Immobilien in der Türkei

Viele türkischstämmige Familien in Mannheim, Heidelberg und dem Rhein-Neckar-Raum besitzen Immobilien in der Türkei — oder möchten dort kaufen, verkaufen oder erben. Das türkische Immobilienrecht (Gayrimenkul Hukuku) ist komplex, und selbst kleine Fehler bei Tapu-Verfahren oder Kaufverträgen können zu erheblichen finanziellen Verlusten und jahrelangen Gerichtsverfahren führen.

Avukat Hasan Doğru ist Mitglied der Ankara Barosu und berät ausschließlich im türkischen Recht. Wir begleiten Sie bei allen immobilienrechtlichen Fragen mit Türkeibezug — sicher, zuverlässig und vollständig ohne Reise in die Türkei.

Was wir für Sie tun:

- Grundbuchberichtigung & Eintragung (Tapu Tescili)
Fehlerhafte Grundbucheinträge in der Türkei sind häufiger als man denkt — falsche Namen, fehlende Flächen, unrichtige Eigentumsanteile. Wir fechten fehlerhafte Einträge im Tapu Sicili an und sorgen für korrekte Neueintragungen beim türkischen Grundbuchamt. Alle Verfahren führen wir per Vollmacht durch — ohne Ihre persönliche Anwesenheit in der Türkei.

- Immobilienkauf & -verkauf in der Türkei
Wer in der Türkei eine Immobilie kauft oder verkauft, braucht rechtliche Begleitung — von der Prüfung des Tapu-Auszugs über den Kaufvertrag bis zur sicheren Eigentumsübertragung. Wir prüfen alle Unterlagen, decken versteckte Belastungen auf und schützen Sie vor teuren Fehlern.

- Wohnungseigentum & Gemeinschaftsflächen (Kat Mülkiyeti)
Streitigkeiten in türkischen Wohnungseigentümergemeinschaften über Gemeinschaftsflächen, Verwaltung oder Instandhaltung sind häufig. Wir klären Ihre Rechte und Pflichten nach türkischem Wohnungseigentumsrecht und vertreten Sie bei Streitigkeiten.

- Vorkaufsrecht & Teilungsklage (Şufa Hakkı & İzale-i Şüyu)
Haben Sie ein Vorkaufsrecht auf eine türkische Immobilie? Oder möchten Sie eine Erbengemeinschaft aufteilen? Wir setzen das Vorkaufsrecht (Şufa Hakkı) vor türkischen Gerichten durch und vertreten Sie in Teilungsklagen (İzale-i Şüyu) bei gemeinschaftlichem Eigentum.

- Bauträgerverträge & Schlüsselfertigprojekte (Kat Karşılığı)
Kaufverträge mit türkischen Bauträgern sind oft intransparent und einseitig formuliert. Wir prüfen Ihren Vertrag vor der Unterzeichnung, verhandeln Nachbesserungen und vertreten Sie bei Mängeln oder Verzögerungen gegenüber dem Bauträger.

- Enteignung & Wertermittlung (Kamulaştırma)
Wenn der türkische Staat oder eine Gemeinde Ihre Immobilie enteignen möchte, haben Sie Rechte — auf faire Entschädigung und auf rechtliche Überprüfung der Wertfestsetzung. Wir vertreten Sie in Enteignungsverfahren und kämpfen für eine angemessene Entschädigung.

- Mietverträge & Räumungsklagen in der Türkei
Sie haben eine Immobilie in der Türkei vermietet und erhalten keine Miete? Oder ein Mieter weigert sich auszuziehen? Wir setzen Ihre Ansprüche nach türkischem Mietrecht durch — Kündigung, Räumung, Mietrückstände.

Warum Doğru Kanzlei für türkisches Immobilienrecht in Mannheim?

Immobiliengeschäfte in der Türkei sind für Deutsch-Türken oft mit großen Summen verbunden — und mit großen Risiken, wenn die rechtliche Begleitung fehlt. Gefälschte Tapu-Dokumente, versteckte Grundpfandrechte, unwirksame Kaufverträge — all das ist in der türkischen Praxis keine Seltenheit.

Avukat Hasan Doğru kennt das türkische Immobilienrecht von innen. Als Mitglied der Ankara Barosu arbeiten wir direkt mit türkischen Grundbuchämtern, Gerichten und Notaren zusammen — von Mannheim aus, ohne dass Sie reisen müssen.

Was uns auszeichnet:
- Ausschließlich türkisches Recht — keine Kompromisse bei der Spezialisierung
- Mitglied der Ankara Barosu, registriert gemäß § 207 BRAO
- Alle Verfahren ohne Reise in die Türkei möglich
- Beratung auf Türkisch und Deutsch
- Standort Mannheim — persönliche Beratung im Rhein-Neckar-Raum
- Zweiter Standort Ankara — direkte Zusammenarbeit mit türkischen Behörden`,faqDE:[{question:"Kann ich eine Immobilie in der Türkei kaufen, ohne dorthin zu reisen?",answer:"Ja. Mit einer notariellen Vollmacht können wir den gesamten Kauf- oder Verkaufsprozess in der Türkei für Sie abwickeln — Vertragsprüfung, Tapu-Übertragung, Behördengänge. Sie müssen nicht persönlich in der Türkei anwesend sein."},{question:"Was ist der Tapu und warum ist er so wichtig?",answer:"Der Tapu ist das türkische Grundbuchdokument, das Eigentum an einer Immobilie belegt. Ohne einen korrekten Tapu-Eintrag auf Ihren Namen haben Sie in der Türkei keinen rechtlich gesicherten Eigentumsanspruch. Wir prüfen Tapu-Dokumente vor jedem Kauf auf versteckte Belastungen und Fehler."},{question:"Was passiert, wenn mehrere Erben eine Immobilie in der Türkei gemeinsam besitzen?",answer:"Wenn keine Einigung über Nutzung oder Verkauf erzielt werden kann, kann eine Teilungsklage (İzale-i Şüyu) eingereicht werden. Das Gericht ordnet dann entweder die Versteigerung oder die Realteilung an. Wir begleiten Sie durch dieses Verfahren."},{question:"Kann ein türkischer Bauträger meinen Kaufvertrag einfach ändern?",answer:"Nein — aber es kommt leider vor. Wir prüfen Ihren Bauträgervertrag vor der Unterzeichnung auf problematische Klauseln und stellen sicher, dass Ihre Rechte bei Verzögerungen oder Mängeln vertraglich gesichert sind."},{question:"Muss ich für eine Erstberatung nach Mannheim kommen?",answer:"Nein. Wir bieten Erstberatungen auch per Telefon oder Video an und betreuen viele Mandanten aus dem gesamten Bundesgebiet vollständig auf Distanz."}],faqTR:[{question:"Türkiye'ye gitmeden Türkiye'de mülk alabilir miyim?",answer:"Evet. Noter tasdikli bir vekaletname ile Türkiye'deki tüm alım veya satım sürecini sizin adınıza yürütebiliyoruz — sözleşme incelemesi, tapu devri, resmi başvurular dahil. Türkiye'de bizzat bulunmanıza gerek yoktur."},{question:"Tapu nedir ve neden bu kadar önemlidir?",answer:"Tapu, bir mülkün mülkiyetini belgeleyen Türk tapu senedidir. Adınıza doğru bir tapu kaydı olmadan Türkiye'de hukuken güvence altına alınmış bir mülkiyet hakkınız bulunmaz. Her alımdan önce tapu belgelerini gizli yükler ve hatalar açısından inceliyoruz."},{question:"Birden fazla mirasçı Türkiye'deki bir mülke ortak sahipse ne olur?",answer:"Kullanım veya satış konusunda anlaşma sağlanamazsa izale-i şüyu davası açılabilir. Mahkeme daha sonra ihaleye çıkarılmasına veya aynen taksime karar verir. Bu süreçte size eşlik ediyoruz."},{question:"Bir Türk müteahhit satış sözleşmemi tek taraflı değiştirebilir mi?",answer:"Hayır — ama maalesef bu tür durumlar yaşanmaktadır. Müteahhit sözleşmenizi imzalamadan önce sorunlu maddelere karşı inceliyor ve gecikme ya da ayıp durumlarında haklarınızın sözleşmede güvence altına alınmasını sağlıyoruz."},{question:"İlk danışma için Mannheim'a gelmem gerekiyor mu?",answer:"Hayır. İlk danışmayı telefon veya video görüşmesiyle de gerçekleştirebilirsiniz. Almanya'nın dört bir yanından pek çok müvekkilimize tamamen uzaktan hizmet veriyoruz."}]}],$e="/assets/blog_real_estate-BsdSzrht.png",Xe="/assets/blog_tanima_tenfiz-BF9wvZ0P.png",Qe="/assets/blog_sakli_pay-B_8STbJm.png",ea="/assets/blog_izale_i_suyu-CXt7Eodh.png",aa="/assets/blog_mavi_kart-oKz4CNqU.png",na="/assets/blog_criminal_summons-g4zAzZLs.png",ia="/assets/blog_criminal_complaint-BtVrdnj0.png",ra="/assets/blog_divorce-BgSDRDb9.png",ta="/assets/blog_vekaletname-CG91CODL.png",la="/assets/blog_property_division-qBlzmg7O.png",sa="/assets/inheritance_fraud_law-BxjZQ9m1.png",da="/assets/joint_custody_law-B-FOZxII.png",ua="/assets/debt_collection_law-BB5vtc8j.png",oa="/assets/criminal_defense_law-BDM0I72W.png",ka="/assets/blue_card_rights_law-D0nJt0CD.png",N=[{slug:"mavi-kart-turkiye-miras-tasinmaz-haklari",slugDE:"blaue-karte-tuerkei-erbrecht-immobilien",slugTR:"mavi-kart-turkiye-miras-tasinmaz-haklari",titleDE:"Erbrecht und Immobilienrechte von Inhabern der Blauen Karte in der Türkei | Update 2026",titleTR:"Mavi Kart Sahiplerinin Türkiye'deki Miras ve Taşınmaz Hakları | 2026 Güncel",excerptDE:"Haben Sie die deutsche Staatsbürgerschaft angenommen, besitzen aber eine Blaue Karte (Mavi Kart)? Ihre Rechte auf Erbe und Immobilien in der Türkei bleiben gewahrt. Wir erklären Ihnen die Details.",excerptTR:"Alman vatandaşlığına geçtiniz ama mavi kartınız var mı? Türkiye'deki miras, tapu ve velayet haklarınız korunuyor. Yargıtay kararlarıyla açıklıyoruz.",contentDE:`**RECHTLICHER HINWEIS:** Dieser Artikel befasst sich ausschließlich mit dem türkischen Recht. Eine Beratung zum deutschen Recht findet in unserer Kanzlei nicht statt.

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
Obwohl die Blaue Karte Ihre Rechte weitgehend schützt, erfordern die praktische Umsetzung bei Grundbuchämtern und die Steuererklärungen Fachwissen. Die Doğru Kanzlei verwaltet diesen Prozess transparent mit Anwälten, die sowohl in Deutschland als auch in der Türkei zugelassen sind.`,contentTR:`**YASAL UYARI:** Bu makale yalnızca Türk hukukuna ilişkindir. Büromuzda Alman hukuku konusunda danışmanlık verilmemektedir.

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
Mavi kart sahipliği haklarınızı büyük ölçüde korusa da, tapu müdürlüklerindeki pratik uygulamalar ve vergi beyannameleri uzmanlık gerektirir. Doğru Kanzlei olarak, hem Almanya hem de Türkiye barosuna kayıtlı avukatlarımızla tüm süreci şeffafça yönetiyoruz.`,category:"Miras Hukuku",categoryDE:"Erbrecht",image:ka,dateDE:"10. April 2026",dateTR:"10 Nisan 2026",readTimeDE:"6 Min. Lesezeit",readTimeTR:"6 dk okuma",publishedAt:"2026-04-10",keywordsDE:"Mavi Kart Erbrecht, Blaue Karte Immobilienübertragung, deutscher Staatsbürger Erbe Türkei, Rechte Blaue Karte Türkei 2026, türkischer Anwalt Mannheim",keywordsTR:"mavi kart miras hakkı, mavi kart tapu devri, Alman vatandaşı Türkiye miras, mavi kart Türkiye hakları 2026, Mannheim Türk avukat",faqDE:[{question:"Was ist die Mavi Kart und welche Rechte gewährt sie in der Türkei?",answer:"Die Mavi Kart (früher Pembe Kart) ist ein Dokument für Personen, die die türkische Staatsbürgerschaft mit Genehmigung aufgegeben haben. Sie sichert bestimmte Rechte in der Türkei: Immobilienerwerb (einschließlich Erbschaft), Erbrechte, gewerbliche Tätigkeit und Beschäftigung. Ausgeschlossen sind politische Rechte wie Wahlrecht und öffentliche Ämter."},{question:"Haben Mavi-Kart-Inhaber in der Türkei volle Erbrechte?",answer:"Ja, vollständig. Mavi-Kart-Inhaber können Erbrechte in der Türkei genauso geltend machen wie türkische Staatsangehörige. Sie können einen Erbschein (veraset ilamı) ausstellen lassen und Erbschaftsstreitigkeiten gerichtlich klären — ohne jede Einschränkung aufgrund der aufgegebenen Staatsbürgerschaft."},{question:"Können Mavi-Kart-Inhaber in der Türkei Immobilien erwerben?",answer:"Ja. Obwohl der Immobilienerwerb für Ausländer in der Türkei durch Art. 35 des Grundbuchgesetzes eingeschränkt ist, sind Mavi-Kart-Inhaber von diesen Beschränkungen ausgenommen. Für sie gelten weder das Gegenseitigkeitsprinzip noch die Verbotszonen für Ausländer."},{question:"Verliere ich meine Erbrechte in der Türkei, wenn ich die deutsche Staatsbürgerschaft angenommen habe?",answer:"Nein — sofern Sie eine Mavi Kart besitzen. Der Zeitpunkt des Staatsangehörigkeitswechsels spielt keine Rolle. Solange Ihre Mavi Kart gültig ist, bleiben Ihre Erbrechte in der Türkei vollständig erhalten, unabhängig davon, ob Sie zum Zeitpunkt des Todes des Erblassers türkischer Staatsbürger waren oder nicht."},{question:"Welche Erbschaftssteuer gilt 2026 für Mavi-Kart-Inhaber in der Türkei?",answer:"Mavi-Kart-Inhaber unterliegen der türkischen Erbschaft- und Schenkungsteuer. Für im Ausland ansässige Erben gilt eine Erklärungsfrist von 6 Monaten ab dem Todestag des Erblassers. Im Jahr 2026 sind Erbschaften an Ehegatten und Kinder bis zu einem Betrag von ca. 2.316.628 TL steuerfrei. Darüber hinausgehende Beträge werden progressiv mit 1 bis 10 % besteuert."},{question:"Was ist zu tun, wenn ich im türkischen E-Devlet-Portal als Ausländer geführt werde, obwohl ich eine Mavi Kart habe?",answer:"Das liegt in der Regel daran, dass Ihre Meldedaten nicht aktualisiert wurden. Sie müssen sich beim zuständigen Standesamt in der Türkei (nüfus müdürlüğü) melden und Ihre Eintragung in das Mavi-Kart-Register beantragen. Ohne diese Korrektur können praktische Schwierigkeiten beim Zugang zu Behördenportalen und bei Immobilientransaktionen entstehen."},{question:"Können Mavi-Kart-Inhaber in der Türkei ein Bankkonto eröffnen?",answer:"Ja. Die Mavi Kart wird von allen Banken in der Türkei als offizielles Ausweisdokument anerkannt und berechtigt zur Eröffnung eines Bankkontos."}],faqTR:[{question:"Mavi Kart nedir ve Türkiye'de hangi hakları sağlar?",answer:"Mavi Kart, Türk vatandaşlığından izinle ayrılanlara verilen bir belgedir. Türkiye'de taşınmaz edinme (miras dahil), miras hakları, ticari faaliyet ve çalışma hakkı gibi hakları saklı tutar. Siyasi haklar (seçme-seçilme) kapsam dışıdır."},{question:"Mavi Kart sahiplerinin tam miras hakkı var mıdır?",answer:"Evet. Mavi Kart sahipleri Türkiye'deki miras haklarını aynen Türk vatandaşları gibi kullanabilirler. Veraset ilamı çıkarabilir ve miras paylaşımı yapabilirler."},{question:"Mavi Kart sahipleri Türkiye'de gayrimenkul alabilir mi?",answer:"Evet. Yabancılara uygulanan kısıtlamalardan (mütekabiliyet, yasak bölgeler vb.) muaftırlar ve diledikleri gibi taşınmaz edinebilirler."},{question:"Alman vatandaşı olursam Türkiye'deki miras haklarım kaybolur mu?",answer:"Hayır. Mavi Kartınız olduğu sürece miras haklarınız tam olarak korunur. Vefat tarihinde Türk vatandaşı olup olmamanız haklarınızı etkilemez."},{question:"2026 yılında Mavi Kartlılar için miras vergisi nasıldır?",answer:"Mavi Kartlılar da vergiye tabidir. 2026 yılı için eş ve çocuklara kalan mirasın yaklaşık 2.316.628 TL'si muaftır. Aşan kısım ise %1-%10 arası kademeli vergilendirilir."},{question:"E-devlette yabancı görünüyorum, ne yapmalıyım?",answer:"Bu durum kayıtlarınızın güncel olmadığını gösterir. Türkiye'deki nüfus müdürlüğüne başvurarak 'Mavi Kartlılar Kütüğü'ne kaydınızı yaptırmanız gerekir."},{question:"Mavi Kart ile Türkiye'de banka hesabı açılabilir mi?",answer:"Evet. Mavi Kart, Türkiye'deki tüm bankalarca resmi kimlik belgesi olarak kabul edilmektedir."}]},{slug:"turkiye-ceza-davasi-almanya-savunma",slugDE:"strafverfahren-tuerkei-verteidigung-deutschland",slugTR:"turkiye-ceza-davasi-almanya-savunma",titleDE:"Strafverfahren in der Türkei eröffnet? Verteidigungsratgeber aus Deutschland",titleTR:"Türkiye'de Hakkınızda Ceza Davası mı Açıldı? Almanya'dan Savunma Rehberi",excerptDE:"Wurde in der Türkei ein Strafverfahren gegen Sie eingeleitet? Erfahren Sie alles über Ihre Verteidigungsrechte, die Vertretung ohne Anwesenheit und Interpol-Red-Notice-Verfahren. Direkte Hilfe aus Mannheim.",excerptTR:"Almanya'dayken Türkiye'de hakkınızda ceza davası açıldı mı? Savunma haklarınız, duruşmaya katılmadan müdafaa ve Interpol red notice süreci. Yargıtay kararlarıyla.",contentDE:`**RECHTLICHER HINWEIS:** Dieser Artikel befasst sich ausschließlich mit dem türkischen Recht. Eine Beratung zum deutschen Recht findet in unserer Kanzlei nicht statt.

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

Durch unsere Zulassungen bei der Anwaltskamer Ankara und der Rechtsanwaltskammer Karlsruhe (§207 BRAO) verfolgen wir Ihre Strafverfahren in der Türkei direkt und ohne Zwischenschaltung Dritter.`,contentTR:`**YASAL UYARI:** Bu makale yalnızca Türk hukukuna ilişkindir. Büromuzda Alman hukuku konusunda danışmanlık verilmemektedir.

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

Ankara Barosu üyeliğimiz ve Karlsruhe Barosu kaydımız sayesinde Türkiye'deki ceza davalarınızı bizzat takip ediyoruz.`,category:"Ceza Hukuku",categoryDE:"Strafrecht",image:oa,dateDE:"10. April 2026",dateTR:"10 Nisan 2026",readTimeDE:"9 Min. Lesezeit",readTimeTR:"9 dk okuma",publishedAt:"2026-04-10",keywordsDE:"Strafrecht Türkei Deutschland, Verteidigung aus Deutschland, Interpol Roteckene, Türkisches Strafrecht Mannheim, Anwalt Strafrecht Deutschland",keywordsTR:"Türkiye ceza davası Almanya, Almanya'dan Türkiye savunma, Interpol kırmızı bülten, Türk ceza hukuku Mannheim, ceza davası avukat Almanya",faqDE:[{question:"Muss ich für mein Strafverfahren in der Türkei persönlich erscheinen?",answer:"In vielen Fällen nicht. Bei Straftaten mit einem Strafrahmen unter 5 Jahren Freiheitsstrafe kann die Verteidigung auf Antrag vollständig durch einen Anwalt geführt werden, ohne dass der Angeklagte persönlich erscheinen muss. Bei schwerwiegenderen Verfahren besteht die Möglichkeit, per SEGBİS (Videokonferenz) aus Deutschland an der Verhandlung teilzunehmen."},{question:"Wie erfahre ich, ob in der Türkei ein Strafverfahren gegen mich läuft?",answer:"Sie können den Stand Ihrer Akte über das UYAP-Bürgerportal abfragen oder einen Anwalt bevollmächtigen, der die Abfrage in Ihrem Namen durchführt. Viele in Deutschland lebende türkische Staatsangehörige erfahren von einem Verfahren erst bei der Einreise in die Türkei oder bei einer routinemäßigen Abfrage."},{question:"Was passiert, wenn ich nie über mein türkisches Strafverfahren informiert wurde?",answer:"Nach CMK Art. 145 muss die Zustellung an im Ausland lebende Angeklagte auf diplomatischem Weg erfolgen. Laut Yargıtay (4. Strafkammer, 2021/17832 E.) stellt eine Fortsetzung des Verfahrens ohne ordnungsgemäße Auslandszustellung eine Verletzung des Rechts auf Verteidigung dar und ist ein absoluter Revisionsgrund. Ein ergangenes Urteil kann daher angefochten werden."},{question:"Besteht das Risiko einer Interpol-Fahndung, wenn gegen mich ein türkischer Haftbefehl vorliegt?",answer:"Ja. Ein türkischer Haftbefehl kann in eine internationale Fahndung über Interpol (Red Notice) umgewandelt werden. Bei politisch motivierten oder rechtsstaatswidrigen Ersuchen besteht jedoch die Möglichkeit, beim Interpol-Kontrollgremium (CCF) Beschwerde einzulegen und die Löschung der Red Notice zu beantragen."},{question:"Kann ein abgeschlossenes türkisches Strafverfahren wieder aufgerollt werden?",answer:"Ja. Wurde ein Urteil in Abwesenheit des Angeklagten (gıyabi) gefällt, kann das Verfahren über die Rechtsinstitute der Wiedereinsetzung in den vorigen Stand (eski hale getirme) und der Wiederaufnahme des Verfahrens (yargılamanın yenilenmesi) neu aufgerollt werden."},{question:"Was passiert, wenn die Verjährungsfrist für mein türkisches Strafverfahren abläuft?",answer:"Läuft die Verjährungsfrist ab, muss das Gericht die Einstellung des Verfahrens beschließen (düşme kararı). Für in Deutschland lebende Angeklagte ist es daher wichtig, dass ihr Anwalt die Verjährungsfristen kontinuierlich überwacht — insbesondere wenn das Verfahren über Jahre hinweg ruhend geführt wird."},{question:"Welchen Vorteil bietet ein Anwalt mit Strafverfolgungserfahrung bei türkischen Strafverfahren?",answer:"Gründer Hasan Doğru war vor seiner Anwaltskarriere rund 10 Jahre Mitglied der Spezialeinheit (Özel Harekat) der türkischen Nationalpolizei. Dieses Hintergrundwissen über Ermittlungsmethoden und Strafverfolgungspraxis verleiht der Verteidigungsstrategie eine einzigartige Tiefe, die rein akademisch ausgebildeten Anwälten fehlt."}],faqTR:[{question:"Türkiye'deki ceza davam için duruşmaya bizzat gitmem gerekir mi?",answer:"Çoğu durumda hayır. 5 yılın altındaki suçlarda savunma tamamen avukat aracılığıyla yürütülebilir. Daha ağır dosyalarda ise SEGBİS ile duruşmaya katılma imkanı vardır."},{question:"Türkiye'de hakkımda dava olup olmadığını nasıl öğrenirim?",answer:"Dosyayı UYAP üzerinden sorgulayabilir veya avukatınıza sorgulama yetkisi verebilirisiniz. Gurbetçiler genellikle davayı tesadüfen öğrenirler."},{question:"Davadan hiç haberim olmazsa ne olur?",answer:"CMK m.145 uyarınca yurt dışı tebligatı diplomatik yolla yapılmalıdır. Usulüne uygun tebligat yapılmaması durumunda davanın devam etmesi savunma hakkının ihlalidir ve bozma nedenidir."},{question:"Türkiye'deki yakalama kararı Interpol aramasına dönüşür mü?",answer:"Evet. Kırmızı Bülten çıkarılabilir. Ancak hukuka aykırı bültenler için Interpol (CCF) nezdinde itiraz edilerek bültenin silinmesi mümkündür."},{question:"Bitmiş bir ceza davası tekrar açılabilir mi?",answer:"Evet. Sanığın haberi olmadan verilen mahkumiyet kararları durumunda 'eski hale getirme' ve 'yargılamanın yenilenmesi' yollarıyla dava yeniden görülebilir."},{question:"Ceza davasında zamanaşımı dolarsa ne olur?",answer:"Dava düşer. Avukatınızın zamanaşımı sürelerini titizlikle takip etmesi, özellikle yıllardır devam eden dosyalar için hayatidir."},{question:"Polislik geçmişi olan bir avukatla çalışmanın avantajı nedir?",answer:"Hasan Doğru'nun 10 yıllık Özel Harekat polisliği geçmişi, soruşturma yöntemleri hakkında derin bir bilgi sağlayarak savunma stratejilerimize eşsiz bir güç katar."}]},{slug:"almanya-turkiye-alacak-tahsili-icra",slugDE:"deutschland-tuerkei-forderungseinzug-zwangsvollstreckung",slugTR:"almanya-turkiye-alacak-tahsili-icra",titleDE:"Forderungseinzug & Zwangsvollstreckung in der Türkei | Fremdwährungsforderungen",titleTR:"Almanya'dan Türkiye'de Alacak Tahsili ve İcra Takibi | Yabancı Para Alacağı",excerptDE:"Treiben Sie Ihre Forderungen gegen Schuldner in der Türkei ein. Unser Leitfaden zur Zwangsvollstreckung, Annullierung des Widerspruchs und BGH-Urteile aus Deutschland. Direkte Vertretung aus Mannheim.",excerptTR:"Türkiye'deki borçlunuzdan alacağınızı tahsil edin. Almanya'dan icra takibi başlatma, itirazın iptali ve Yargıtay kararlarıyla rehber. Mannheim'dan doğrudan temsil.",contentDE:`**RECHTLICHER HINWEIS:** Dieser Artikel befasst sich ausschließlich mit dem türkischen Recht. Eine Beratung zum deutschen Recht findet in unserer Kanzlei nicht statt.

# Forderungseinzug in der Türkei aus Deutschland: Leitfaden zur Zwangsvollstreckung

### Einleitung: Treiben Sie Ihre Forderungen in der Türkei ein
Viele in Deutschland lebende Staatsbürger haben Personen in der Türkei Darlehen gewährt, Immobilien verkauft oder geschäftliche Beziehungen unterhalten, konnten ihre Forderungen jedoch bisher nicht einziehen. Dieser Leitfaden behandelt die rechtlichen Wege des Forderungseinzugs in der Türkei aus Deutschland im Lichte der Rechtsprechung des türkischen Kassationshofs.

---

### 1. Die Zwangsvollstreckung ohne Gerichtstitel (İlamsız İcra)
Nach dem türkischen Vollstreckungs- und Konkursgesetz können Sie ohne vorheriges Gerichtsurteil direkt beim Vollstreckungsamt ein Verfahren einleiten. Hierfür genügt eine Vollmacht für Ihren Anwalt in der Türkei.

Dem Schuldner wird ein Zahlungsbefehl zugestellt. Wenn dieser nicht innerhalb von 7 Tagen widerspricht, wird das Verfahren rechtskräftig und die Sachpfändung kann eingeleitet werden.

---

### 2. Klage auf Aufhebung des Widerspruchs & 20% Entschädigung
Widerspricht der Schuldner unberechtigt, muss der Gläubiger eine Klage auf Aufhebung des Widerspruchs erheben. Der größte Vorteil dieser Klage ist, dass der Schuldner zur Zahlung einer "Vollstreckungsentschädigung" von mindestens 20 % der Forderung verurteilt wird.

> **Yargıtay 19. HD, 2019/4412 E.:**
> "Ist die Forderung bestimmt, muss bei unberechtigtem Widerspruch gegen den Schuldner eine Vollstreckungsentschädigung in Höhe von 20 % verhängt werden."

---

### 3. Vollstreckung deutscher Gerichtsurteile in der Türkei
Falls Sie bereits einen Vollstreckungsbescheid aus Deutschland haben, muss dieser in der Türkei zunächst im Rahmen einer "Anerkennungs- und Vollstreckungsklage" (Tenfiz) bestätigt werden. Beachten Sie jedoch, dass deutsche Vollstreckungsbescheide aus Mahnverfahren oft nicht direkt für eine Tenfiz-Klage geeignet sind, da sie nicht auf einem streitigen Verfahren basieren.

In vielen Fällen ist es daher schneller, direkt ein neues Vollstreckungsverfahren in der Türkei ohne Gerichtstitel einzuleiten.

---

### 4. Fremdwährungsforderungen und Wechselkursrisiken
Wenn Sie ein Darlehen in Euro gewährt haben, haben Sie nach Art. 99 des türkischen Obligationenrechts das Recht, den Wechselkurs zum Zeitpunkt der tatsächlichen Zahlung zu verlangen. Dies schützt den Gläubiger vor Währungsschwankungen der Türkischen Lira.

---

### 5. Häufig gestellte Fragen (FAQ)

**Ich weiß nicht, ob der Schuldner Vermögen in der Türkei hat. Was kann man tun?**
Über das elektronische UYAP-System können wir alle Immobilien, Bankkonten, Fahrzeuge und Rentenregistrierungen des Schuldners abfragen und sofort pfänden.

**Wie lange dauert das Verfahren?**
Widerspricht der Schuldner nicht, ist das Verfahren oft in 15-20 Tagen rechtskräftig. Bei einem Widerspruch kann der anschließende Prozess je nach Arbeitsbelastung des Gerichts 1-2 Jahre dauern.

**Kann ich deutsche Dokumente als Beweis verwenden?**
Ja. Diese müssen jedoch von einem beeidigten Dolmetscher ins Türkische übersetzt und gegebenenfalls mit einer Apostille versehen werden.

---

### 6. Die Doğru Kanzlei Strategie
Als Doğru Kanzlei leiten wir den Prozess in Mannheim ein und führen die Vollstreckung über unser Büro in Ankara direkt aus. Ohne Zwischenschaltung externer Anwälte verwalten wir den gesamten Prozess transparent aus einer Hand.`,contentTR:`**YASAL UYARI:** Bu makale yalnızca Türk hukukuna ilişkindir. Büromuzda Alman hukuku konusunda danışmanlık verilmemektedir.

# Almanya'dan Türkiye'de Alacak Tahsili: İcra Takibi Rehberi

### Giriş: Türkiye'deki Alacaklarınızı Tahsil Edin
Almanya'da yaşayan birçok vatandaşımız, Türkiye'deki kişilere borç vermiş, gayrimenkul satmış veya ticari ilişki kurmuş ancak alacağını tahsil edememiştir. Bu rehberde, Almanya'dan Türkiye'de alacak tahsilinin hukuki yollarını ve Yargıtay kararları ışığında izlenmesi gereken stratejileri ele alacağız.

---

### 1. İlamsız İcra Takibi: Mahkeme Kararı Olmadan Takip Başlatma
İcra ve İflas Kanunu uyarınca, herhangi bir mahkeme kararı olmaksızın doğrudan icra dairesine başvurarak ilamsız icra takibi başlatabilirsiniz. Bunun için Türkiye'deki avukatınıza vekâletname çıkarmanız yeterlidir.

Borçluya ödeme emri tebliğ edilir. Borçlu 7 gün içinde itiraz etmezse, takip kesinleşir ve haciz işlemlerine geçilir.

---

### 2. İtirazın İptali Davası ve %20 İcra İnkar Tazminatı
Borçlu haksız yere itiraz ederse, alacaklı olarak itirazın iptali davası açmanız gerekir. Bu davanın en büyük avantajı, borçlunun alacağın %20'sinden az olmamak üzere icra inkar tazminatına mahkum edilmesidir.

> **Yargıtay 19. HD, 2019/4412 E.:**
> "İtirazın iptali davasında alacağın likit (belirli) olması halinde, haksız itiraz eden borçlu aleyhine %20 oranında icra inkar tazminatına hükmedilmesi gerekir."

---

### 3. Almanya'dan Verilen Mahkeme Kararının Türkiye'de İcrası
Eğer Almanya'da bir mahkeme kararı (*Vollstreckungsbescheid*) aldıysanız, bunun Türkiye'de icra edilmesi için önce "tenfiz" davası açılması gerekir. Ancak, Alman *Mahnverfahren* (ödeme emri prosedürü) sonucu alınan kararlar Yargıtay tarafından doğrudan tenfize elverişli bulunmayabilir.

Bu nedenle, Türkiye'de doğrudan ilamsız icra takibi başlatmak genellikle daha hızlı ve etkili bir yoldur.

---

### 4. Yabancı Para Alacağında Kur Farkı Sorunu
Türkiye'deki borçlunuza Euro cinsinden borç verdiyseniz, TBK m.99 uyarınca fiili ödeme tarihindeki kuru talep etme hakkınız bulunmaktadır. Bu, kur dalgalanmalarına karşı alacaklıyı koruyan önemli bir haktır.

---

### 5. Sıkça Sorulan Sorular

**Borçlunun Türkiye'de nesi olduğunu bilmiyorum, ne yapabiliriz?**
UYAP sistemi üzerinden borçlunun tüm taşınmazları (TAKPAS), banka hesapları, araçları ve SGK kayıtları avukatınız tarafından sorgulanabilir ve anında haciz konulabilir.

**Dava ne kadar sürer?**
İlamsız takipte borçlu itiraz etmezse takip 15-20 gün içinde kesinleşir. İtiraz halinde açılacak dava ise mahkemenin iş yüküne göre 1-2 yıl sürebilir.

**Almanca belgelerim var, bunları kullanabilir miyim?**
Evet. Ancak bu belgelerin yeminli tercüman tarafından Türkçeye çevrilmesi ve gerekirse Apostil şerhi alınması gerekmektedir.

---

### 6. Doğru Kanzlei Farkı
Doğru Kanzlei olarak Mannheim ofisimizden vekâletname sürecini başlatır, Ankara ofisimiz üzerinden doğrudan icra dairesine başvururuz. Aracı avukata gerek kalmadan tüm süreci şeffaf bir şekilde yönetiyoruz.`,category:"İcra ve İflas Hukuku",categoryDE:"Zwangsvollstreckungsrecht",image:ua,dateDE:"10. April 2026",dateTR:"10 Nisan 2026",readTimeDE:"7 Min. Lesezeit",readTimeTR:"7 dk okuma",publishedAt:"2026-04-10",keywordsDE:"Forderungseinzug Deutschland Türkei, Zwangsvollstreckung Türkei, Fremdwährungsforderung Vollstreckung, Anwalt Schuldeneintreibung Türkei Mannheim",keywordsTR:"Almanya'dan Türkiye icra takibi, Türkiye alacak tahsili, yabancı para alacağı icra, Almanya Türkiye borç tahsili avukat",faqDE:[{question:"Ist ein deutsches gemeinsames Sorgerecht in der Türkei direkt gültig?",answer:"Nein. Ein deutsches Sorgerechtsurteil entfaltet in der Türkei keine automatische Wirkung. Es muss zunächst durch ein türkisches Gericht im Rahmen eines Tenfiz-Verfahrens (Vollstreckbarerklärung) anerkannt werden, bevor es in der Türkei rechtliche Wirkung entfaltet."},{question:"Wurde gemeinsames Sorgerecht in der Türkei früher grundsätzlich abgelehnt?",answer:"Ja. Vor 2016 lehnte der Yargıtay (2. Zivilkammer) die Anerkennung gemeinsamer Sorgerechtsentscheidungen konsequent ab, da das türkische Recht (TMK Art. 336) vorsah, dass das Sorgerecht bei einer Scheidung nur einem Elternteil übertragen werden kann. Gemeinsames Sorgerecht galt als Verstoß gegen die türkische öffentliche Ordnung."},{question:"Hat sich die Rechtslage zum gemeinsamen Sorgerecht in der Türkei geändert?",answer:"Ja, seit 2016. Mit dem Gesetz Nr. 6684 ratifizierte die Türkei das Zusatzprotokoll zum Europäischen Übereinkommen über den Umgang mit Kindern, wodurch das Konzept des gemeinsamen Sorgerechts indirekt ins türkische Recht eingeführt wurde. Daraufhin entschied der Yargıtay (2. HD, 2016/15771 E., 2017/1737 K.), dass ausländische Sorgerechtsurteile nicht mehr pauschal als ordre-public-widrig abgelehnt werden dürfen, sondern im Einzelfall am Kindeswohl gemessen werden müssen."},{question:"Was ist der Unterschied zwischen Aufenthaltsbestimmungsrecht und gemeinsamem Sorgerecht bei der Anerkennung in der Türkei?",answer:"Im deutschen Recht wird das Aufenthaltsbestimmungsrecht — also das Recht zu entscheiden, wo das Kind lebt — häufig nur einem Elternteil übertragen, auch wenn das Sorgerecht gemeinsam bleibt. Türkische Gerichte müssen diese Unterscheidung bei der Vollstreckbarerklärung berücksichtigen, da sie erhebliche Auswirkungen darauf hat, wie das Urteil im türkischen Kontext umgesetzt wird."},{question:"Kann das Kind nach Anerkennung des gemeinsamen Sorgerechts dauerhaft in die Türkei gebracht werden?",answer:"Nein. Gemeinsames Sorgerecht bedeutet, dass beide Elternteile Mitspracherecht beim Aufwachsen des Kindes haben. Eine dauerhafte Verlegung des Wohnsitzes des Kindes in die Türkei erfordert entweder die Zustimmung beider Elternteile oder eine gerichtliche Entscheidung. Ein eigenmächtiges Verbringen des Kindes kann nach dem Haager Übereinkommen über internationale Kindesentführung strafbar sein."},{question:"Wie lange dauert das Tenfiz-Verfahren für Sorgerechtsurteile?",answer:"Bei richtiger rechtlicher Strategie dauert das Verfahren in der Regel 6 bis 12 Monate. Die tatsächliche Dauer hängt maßgeblich von den Zustellungsprozessen ab, insbesondere wenn die andere Partei in Deutschland ansässig ist."},{question:"Was muss der Tenfiz-Antrag für ein deutsches Sorgerechtsurteil enthalten?",answer:"Der Antrag muss eine detaillierte Erläuterung enthalten, wie die deutschen Sorgerechtskonzepte — insbesondere gemeinsames Sorgerecht und Aufenthaltsbestimmungsrecht — ihren türkischen rechtlichen Entsprechungen zugeordnet werden. Zudem sollte auf aktuelle Yargıtay-Rechtsprechung nach 2016 Bezug genommen werden, um eine Ablehnung als ordre-public-widrig zu vermeiden."}],faqTR:[{question:"Almanya'da verilen bir ortak velayet kararı Türkiye'de doğrudan geçerli mi?",answer:"Hayır. Almanya'da verilen bir ortak velayet kararı Türkiye'de doğrudan geçerli değildir. Türkiye'de hukuki sonuç doğurabilmesi için önce bir Türk mahkemesi tarafından tenfiz edilmesi (Vollstreckbarerklärung) gerekir."},{question:"Türkiye'de ortak velayet eskiden temelden reddediliyor muydu?",answer:"Evet. 2016 yılından önce Yargıtay, Türk hukukunda velayetin boşanma halinde sadece bir ebeveyne verilebileceği esasını gerekçe göstererek, yabancı ortak velayet kararlarını 'kamu düzenine aykırılık' nedeniyle reddediyordu."},{question:"Türkiye'de ortak velayet konusundaki hukuki durum değişti mi?",answer:"Evet, 2016'dan bu yana değişti. Çocuklarla Kişisel İlişki Kurulmasına Dair Avrupa Sözleşmesi'nin onaylanmasıyla ortak velayet kavramı dolaylı olarak Türk hukukuna girdi. Yargıtay artık bu kararların vaka bazında çocuk yararına göre değerlendirilmesine karar vermiştir."},{question:"Tenfiz sürecinde yerleşim yeri belirleme hakkı ile ortak velayet arasındaki fark nedir?",answer:"Alman hukukunda velayet ortak kalsa bile, çocuğun nerede yaşayacağına karar verme hakkı genellikle tek bir ebeveyne verilir. Türk mahkemeleri tenfiz sürecinde bu ayrımı dikkate almalıdır; çünkü bu durum kararın Türkiye'deki uygulama biçimini etkiler."},{question:"Ortak velayet tanındıktan sonra çocuk kalıcı olarak Türkiye'ye getirilebilir mi?",answer:"Hayır. Ortak velayet, her iki ebeveynin de çocuğun yetiştirilmesi konusunda söz hakkı olması demektir. Çocuğun yerleşim yerinin Türkiye'ye taşınması ya her iki ebeveynin rızasını ya da mahkeme kararını gerektirir. Diğer ebeveynin onayı olmadan çocuğun Türkiye'ye getirilmesi suç teşkil edebilir."},{question:"Velayet kararları için tenfiz davası ne kadar sürer?",answer:"Doğru hukuki strateji ile bu süreç genellikle 6 ila 12 ay sürer. Süreyi belirleyen en önemli faktör, tebligat süreçlerinin hızıdır."},{question:"Alman velayet kararı için tenfiz dilekçesi neleri içermelidir?",answer:"Dilekçe, Alman velayet kavramlarının Türk hukukundaki karşılıkları ile nasıl ilişkilendirildiğine dair detaylı açıklamalar içermelidir. Ayrıca, reddedilme riskini önlemek için 2016 sonrası güncel Yargıtay içtihatlarına atıf yapılmalıdır."}]},{slug:"almanya-ortak-velayet-turkiye-tenfiz",slugDE:"deutschland-gemeinsames-sorgerecht-tuerkei-anerkennung",slugTR:"almanya-ortak-velayet-turkiye-tenfiz",titleDE:"Gemeinsames Sorgerecht aus Deutschland | Anerkennung in der Türkei",titleTR:"Almanya'dan Verilen Ortak Velayet Kararı Türkiye'de Tenfiz Edilir mi?",excerptDE:"Sie haben das gemeinsame Sorgerecht in Deutschland erhalten, aber erkennt die Türkei dies an? Wir erklären die geänderte BGH-Rechtsprechung nach 2016. Vertretung aus Mannheim.",excerptTR:"Almanya'da ortak velayet kararı aldınız ama Türkiye tenfiz ediyor mu? 2016 sonrası değişen Yargıtay içtihadını açıklıyoruz. Mannheim'dan doğrudan temsil.",contentDE:`**RECHTLICHER HINWEIS:** Dieser Artikel befasst sich ausschließlich mit dem türkischen Recht. Eine Beratung zum deutschen Recht findet in unserer Kanzlei nicht statt.

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
Abhängig von der Zustellung der Dokumente dauert das Verfahren mit der richtigen Strategie in der Regel zwischen 6 und 12 Monaten.`,contentTR:`**YASAL UYARI:** Bu makale yalnızca Türk hukukuna ilişkindir. Büromuzda Alman hukuku konusunda danışmanlık verilmemektedir.

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
Tebligat süreçlerine bağlı olmakla birlikte, doğru hukuki strateji ile genellikle 6-12 ay arasında sonuçlanmaktadır.`,category:"Aile Hukuku",categoryDE:"Familienrecht",image:da,dateDE:"10. April 2026",dateTR:"10 Nisan 2026",readTimeDE:"6 Min. Lesezeit",readTimeTR:"6 dk okuma",publishedAt:"2026-04-10",keywordsDE:"Gemeinsames Sorgerecht Deutschland Türkei, Sorgerechtsanerkennung, Sorgerechtstenfiz, internationales Sorgerecht",keywordsTR:"Almanya ortak velayet Türkiye, gemeinsames Sorgerecht Türkei Anerkennung, velayet tenfizi, uluslararası velayet Almanya Türkiye"},{slug:"almanya-muris-muvazaasi-tapu-iptali",slugDE:"deutschland-muris-muvazaasi-tapu-annullierung",slugTR:"almanya-muris-muvazaasi-tapu-iptali",titleDE:"Muris Muvazaası-Klage aus Deutschland | Erbschleicherei in der Türkei",titleTR:"Almanya'dan Türkiye'de Muris Muvazaası Davası | Mirastan Mal Kaçırma",excerptDE:"Haben Verwandte in der Türkei geerbte Immobilien übertragen? Erheben Sie eine Muris Muvazaası-Klage aus Deutschland, um die Eigentumsurkunde zurückzuerhalten. Wir erklären es anhand von BGH-Urteilen.",excerptTR:"Türkiye'de miras kalan taşınmazı akrabalarınız mı devretti? Almanya'dan muris muvazaası davası açarak tapuyu geri alabilirsiniz. Yargıtay kararlarıyla anlatıyoruz.",contentDE:`**RECHTLICHER HINWEIS:** Dieser Artikel befasst sich ausschließlich mit dem türkischen Recht. Eine Beratung zum deutschen Recht findet in unserer Kanzlei nicht statt.

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
Nein, bei Muris Muvazaası kann ein Erbe die Annullierung für seinen gesamten gesetzlichen Erbanteil verlangen, nicht nur für den Pflichtteil.`,contentTR:`**YASAL UYARI:** Bu makale yalnızca Türk hukukuna ilişkindir. Büromuzda Alman hukuku konusunda danışmanlık verilmemektedir.

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
Hayır, muris muvazaası davasında mirasçı, saklı payı ile sınırlı olmaksızın kendi yasal miras payının tamamı için iptal isteyebilir.`,category:"Miras Hukuku",categoryDE:"Erbrecht",image:sa,dateDE:"10. April 2026",dateTR:"10 Nisan 2026",readTimeDE:"8 Min. Lesezeit",readTimeTR:"8 dk okuma",publishedAt:"2026-04-10",keywordsDE:"Muris Muvazaası Deutschland, Erbschleicherei Türkei, Klage auf Aufhebung und Registrierung der Eigentumsurkunde, Erbrechtsfall aus Deutschland, Erbrecht Anwalt Türkei Mannheim",keywordsTR:"muris muvazaası Almanya, mirastan mal kaçırma Türkiye, tapu iptali ve tescil davası, Almanya'dan miras davası, Türkiye miras avukatı Mannheim",faqDE:[{question:"Was ist Muris Muvazaası (Erbschaftsbetrug durch Scheinverkauf)?",answer:"Muris Muvazaası bezeichnet einen Fall, in dem der Erblasser eine Immobilie im Grundbuch als 'Verkauf' einträgt, obwohl es sich tatsächlich um eine Schenkung handelt — mit dem Ziel, pflichtteilsberechtigte Erben (Ehegatten, Kinder) um ihr Erbrecht zu bringen. Laut dem Grundsatzurteil des Yargıtay (01.04.1974, 1/2) ist ein solches Rechtsgeschäft nichtig, und jeder betroffene Erbe kann Grundbuchberichtigung und Umschreibung auf seinen Namen verlangen."},{question:"Muss ich nach der Türkei reisen, um eine Muris-Muvazaası-Klage einzureichen?",answer:"Nein. Mit einer speziellen Vollmacht, die über das türkische Konsulat in Deutschland oder einen deutschen Notar ausgestellt wird, kann der gesamte Prozess von spezialisierten Anwälten geführt werden. Die Vollmacht muss ausdrücklich die Befugnis zur 'Klage auf Grundbuchberichtigung und Umschreibung' enthalten."},{question:"Gibt es eine Verjährungsfrist für Muris-Muvazaası-Klagen?",answer:"Nein. Da die Klage auf dem Eigentumsrecht basiert, unterliegt sie laut Yargıtay (1. Zivilkammer, 2019/2547 E.) weder einer Verjährungsfrist noch einer Ausschlussfrist. Selbst wenn seit dem Todesfall 10 bis 20 Jahre vergangen sind, bleibt das Klagerecht bestehen."},{question:"Wie kann ich von Deutschland aus feststellen, ob Immobilien muvazaalı übertragen wurden?",answer:"Es gibt drei Wege: Erstens eine Grundbuchabfrage über E-Devlet oder das TAKPAS-System durch Ihren Anwalt. Zweitens die Überprüfung von Banktransaktionen, ob der angebliche Kaufpreis tatsächlich überwiesen wurde — ein auffällig niedriger Preis gilt dem Yargıtay als starkes Indiz für Muvazaa. Drittens Zeugenbefragungen aus dem Dorf oder der Nachbarschaft zur Ermittlung des wahren Willens des Erblassers."},{question:"Kann ich nur meinen Pflichtteil oder meinen gesamten Erbanteil einklagen?",answer:"Bei einer Muris-Muvazaası-Klage ist der Anspruch nicht auf den Pflichtteil beschränkt. Der Erbe kann die Aufhebung der Übertragung für seinen gesamten gesetzlichen Erbanteil verlangen — nicht nur für den Mindestpflichtteil."},{question:"Wie lange nach dem Tod des Erblassers kann ich eine Klage einreichen?",answer:"Es gibt keine Frist. Da diese Klageart keiner Verjährung unterliegt, kann sie unabhängig davon eingereicht werden, wie viel Zeit seit dem Tod des Erblassers vergangen ist."}],faqTR:[{question:"Muris Muvazaası (Mirasçıdan Mal Kaçırma) nedir?",answer:"Muris Muvazaası, miras bırakanın taşınmazını tapuda 'satış' gibi gösterip aslında bağışlaması durumudur. Amaç, çocukların veya eşin saklı pay miras haklarını engellemektir. Yargıtay'ın 1974 tarihli içtihadı uyarınca bu işlem geçersizdir ve her mirasçı kendi payı oranında dava açabilir."},{question:"Muris muvazaası davası açmak için Türkiye'ye gitmem gerekir mi?",answer:"Hayır. Almanya'daki Türk konsolosluğundan veya Alman noterinden çıkarılacak, 'Tapu İptali ve Tescili' yetkisini içeren özel bir vekaletname ile tüm süreç uzman avukatlarca yürütülebilir."},{question:"Dava açmak için bir zamanaşımı süresi var mıdır?",answer:"Hayır. Yargıtay kararlarına göre bu dava ayni hakka dayandığı için zamanaşımı veya hak düşürücü süreye tabi değildir. Vefatın üzerinden ne kadar zaman geçerse geçsin dava açılabilir."},{question:"Malların muvazaalı devredildiğini Almanya'dan nasıl anlarım?",answer:"Avukatınız aracılığıyla TAKPAS üzerinden tapu sorgulaması yapılabilir. Ayrıca satış bedelinin ödenip ödenmediği banka kayıtlarından kontrol edilir; piyasa değerinin çok altındaki bedel güçlü bir delildir."},{question:"Sadece saklı payımı mı yoksa tüm miras payımı mı alabilirim?",answer:"Muris muvazaası davasında hak talebiniz saklı payla sınırlı değildir. Mirasçı, işlemin iptalini yasal miras payının tamamı için talep edebilir."},{question:"Miras bırakanın ölümünden ne kadar süre sonra dava açılabilir?",answer:"Bu dava türü zamanaşımına tabi olmadığından, miras bırakanın ölümünden sonra herhangi bir zaman diliminde açılabilir."}]},{slug:"almanya-bosanma-turkiye-mal-paylasimi",slugDE:"almanya-scheidung-tuerkei-vermoegensaufteilung",slugTR:"almanya-bosanma-turkiye-mal-paylasimi",titleDE:"In Deutschland geschieden: Wie teile ich das Vermögen in der Türkei auf? (Die Verjährungsfalle)",titleTR:"Almanya’da Boşandım, Türkiye’deki Malları Nasıl Paylaştırırım? (Zamanaşımı Tuzağı)",excerptDE:"Möchten Sie nach einer Scheidung in Deutschland das Vermögen in der Türkei aufteilen? Die Verjährung beginnt nicht vor der Anerkennung. Wir erklären es Ihnen praxisnah.",excerptTR:"Almanya'da boşanıp Türkiye'deki malları paylaştırmak mı istiyorsunuz? Tanıma tenfiz öncesi zamanaşımı başlamaz. Yargıtay kararlarıyla açıklıyoruz.",contentDE:`**RECHTLICHER HINWEIS:** Dieser Artikel befasst sich ausschließlich mit dem türkischen Recht. Eine Beratung zum deutschen Recht (z.B. deutsches Erbrecht, Familienrecht nach BGB oder deutsches Migrationsrecht) findet in unserer Kanzlei nicht statt.

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

Detaylı bilgi ve hukuki danışmanlık için Mannheim ofisimizden (+49 176 6122 1210) veya Ankara ofisimizden (+90 533 237 59 18) bize ulaşabilirsiniz.`,contentTR:`**YASAL UYARI:** Bu makale yalnızca Türk hukuku ile ilgilidir. Büromuzda Alman hukuku (örneğin Alman miras hukuku, BGB uyarınca aile hukuku veya Alman göç hukuku) konusunda danışmanlık verilmemektedir.

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

Detaylı bilgi ve hukuki danışmanlık için Mannheim ofisimizden (+49 176 6122 1210) veya Ankara ofisimizden (+90 533 237 59 18) bize ulaşabilirsiniz.`,category:"Aile Hukuku",categoryDE:"Familienrecht",image:la,dateDE:"9. April 2026",dateTR:"9 Nisan 2026",readTimeDE:"10 Min. Lesezeit",readTimeTR:"10 dk okuma",publishedAt:"2026-04-09",keywordsDE:"Scheidung Deutschland Vermögensaufteilung, Türkei Liquidation Güterstand, Anerkennung Verjährung, Klage Türkei aus Deutschland, Türkischer Anwalt Mannheim",keywordsTR:"Almanya boşanma mal paylaşımı, Türkiye mal rejimi tasfiyesi, tanıma tenfiz zamanaşımı, Almanya'dan Türkiye'de dava, Mannheim Türk avukat",faqDE:[{question:"Ist ein deutsches Scheidungsurteil in der Türkei gültig?",answer:"Nein. Ein deutsches Scheidungsurteil gilt nur im deutschen Rechtssystem. Damit es in der Türkei wirksam wird, muss es von einem türkischen Gericht anerkannt und vollstreckt werden (Tanıma & Tenfiz). Ohne dieses Verfahren bleibt man im türkischen Personenstandsregister weiterhin als verheiratet eingetragen."},{question:"Was passiert mit Immobilien und Bankkonten in der Türkei nach einer Scheidung in Deutschland?",answer:"Das deutsche Scheidungsurteil hat keinerlei direkte Wirkung auf Vermögen in der Türkei. Für türkische Immobilien und Bankkonten muss separat eine Klage zur Auflösung des Güterrechts nach türkischem Recht eingereicht werden."},{question:"Wann beginnt die Verjährungsfrist für die Güterrechtsauflösung in der Türkei?",answer:"Laut einem Urteil des Yargıtay (8. Zivilkammer, 2015/3525 E.) beginnt die 10-jährige Verjährungsfrist nicht mit dem deutschen Scheidungsurteil, sondern erst mit der Rechtskraft des türkischen Anerkennungsurteils. Wer also noch kein Tanıma-Tenfiz-Verfahren eingeleitet hat, bei dem hat die Frist noch nicht begonnen."},{question:"Kann der Ex-Partner türkische Immobilien verkaufen, bevor das Verfahren abgeschlossen ist?",answer:"Ja, das ist möglich und ein reales Risiko. Da man im türkischen Grundbuch noch als verheiratet gilt, kann der Ex-Partner Immobilien an Dritte verkaufen oder übertragen. Zum Schutz kann beim türkischen Gericht ein einstweiliger Rechtsschutz (ihtiyati tedbir) beantragt werden, noch bevor das Anerkennungsverfahren abgeschlossen ist."},{question:"Gilt der deutsche Zugewinnausgleich auch für Vermögen in der Türkei?",answer:"Nein. Der Zugewinnausgleich nach deutschem Recht erfasst keine türkischen Immobilien. Für in der Türkei belegenes Vermögen muss eine eigenständige Klage zur Güterrechtsauflösung nach türkischem Recht eingereicht werden. Welches Güterrecht gilt, hängt vom Heiratsdatum ab: Vor dem 01.01.2002 gilt Gütertrennung, danach das Modell der Zugewinngemeinschaft nach türkischem Recht."},{question:"Kann ich das Verfahren führen, ohne in die Türkei zu reisen?",answer:"Ja. Mit einer Vollmacht, die beim deutschen Notar oder türkischen Konsulat in Deutschland ausgestellt wird, kann ein Anwalt das gesamte Verfahren in der Türkei stellvertretend führen. Eine persönliche Anwesenheit bei Gerichtsterminen ist nicht erforderlich."},{question:"Was ist, wenn der Ex-Partner dem Verfahren nicht zustimmt?",answer:"Das Tanıma-Tenfiz-Verfahren kann einseitig eingeleitet werden, ohne Zustimmung des Ex-Partners. Erforderlich sind das rechtskräftige deutsche Gerichtsurteil (mit Rechtskraftvermerk), eine Apostille sowie eine beglaubigte türkische Übersetzung."},{question:"Wie lange dauert das Tanıma-Tenfiz-Verfahren aus Deutschland?",answer:"Die Dauer variiert, kann sich aber erheblich verlängern, wenn der Ex-Partner schwer erreichbar ist. Eine Zustellung auf diplomatischem Weg nach Deutschland kann 6–8 Monate in Anspruch nehmen. Wurde der Ex-Partner zwischenzeitlich deutscher Staatsbürger, müssen alle Zustellungsunterlagen zusätzlich ins Deutsche übersetzt werden."}],faqTR:[{question:"Alman boşanma kararı Türkiye'de geçerli mi?",answer:"Hayır. Alman boşanma kararı sadece Alman hukuk sisteminde geçerlidir. Türkiye'de etkili olabilmesi için bir Türk mahkemesi tarafından tanınması ve tenfizi (Tanıma & Tenfiz) gerekir. Bu prosedür olmadan Türk nüfus kaydında hâlâ evli görünürsünüz."},{question:"Almanya'da boşandıktan sonra Türkiye'deki mal varlığına ne olur?",answer:"Alman boşanma kararının Türkiye'deki varlıklar üzerinde doğrudan bir etkisi yoktur. Türkiye'deki taşınmazlar ve banka hesapları için Türk hukukuna göre ayrıca bir mal rejimi tasfiyesi davası açılması gerekmektedir."},{question:"Türkiye'de mal rejimi tasfiyesi davası için zamanaşımı ne zaman başlar?",answer:"Yargıtay kararına göre, 10 yıllık zamanaşımı süresi Alman boşanma kararıyla değil, Türk tanıma kararının kesinleşmesiyle başlar. Dolayısıyla henüz tanıma-tenfiz davası açmamış olanlar için süre henüz işlemeye başlamamıştır."},{question:"Dava bitmeden eski eş Türkiye'deki malları satabilir mi?",answer:"Evet, bu mümkün ve gerçek bir risktir. Türkiye'deki tapu sicilinde hâlâ evli göründüğünüz için, eski eş taşınmazları üçüncü kişilere satabilir. Korunma amacıyla, tanıma davası sonuçlanmadan önce mahkemeden ihtiyati tedbir talep edilebilir."},{question:"Almanya'daki mal paylaşımı Türkiye'deki malları kapsar mı?",answer:"Hayır. Alman hukukuna göre yapılan mal rejimi tasfiyesi Türkiye'deki taşınmazları kapsamaz. Türkiye'de bulunan varlıklar için Türk hukukuna göre bağımsız bir mal rejimi tasfiyesi davası açılmalıdır."},{question:"Türkiye'ye gitmeden davayı yürütebilir miyim?",answer:"Evet. Almanya'dan çıkarılacak bir vekaletname ile bir avukat Türkiye'deki tüm süreci adınıza yürütebilir. Duruşmalara bizzat katılmanız gerekmez."},{question:"Eski eş boşanmanın tanınmasına onay vermezse ne olur?",answer:"Tanıma-tenfiz davası, eski eşin onayı olmadan tek taraflı olarak açılabilir. Kesinleşmiş Alman mahkeme kararı, apostil ve Türkçe tercüme yeterlidir."},{question:"Tanıma-tenfiz davası ne kadar sürer?",answer:"Süre değişebilir ancak eski eşe ulaşılamıyorsa önemli ölçüde uzayabilir. Almanya'ya diplomatik yolla tebligat yapılması 6-8 ay sürebilir."}]},{slug:"miras-hukuku-rehberi",slugDE:"erbrecht-leitfaden-tuerkei",slugTR:"miras-hukuku-rehberi",titleDE:"Erbrecht-Leitfaden für türkische Staatsangehörige in Deutschland",titleTR:"Almanya'daki Türk Vatandaşları için Kapsamlı Miras Hukuku Rehberi",excerptDE:"Das Erbrecht für türkische Staatsangehörige in Deutschland beschäftigt viele Familien. Wir erklären den Veraset İlamı und Testamente nach türkischem Recht.",excerptTR:"Almanya'daki Türk vatandaşları için miras hukuku rehberi. Türk hukukuna göre Veraset İlamı, vasiyetnameler ve dikkat edilmesi gereken kritik noktalar.",contentDE:`**RECHTLICHER HINWEIS:** Dieser Artikel befasst sich ausschließlich mit dem türkischen Recht. Eine Beratung zum deutschen Recht (z.B. deutsches Erbrecht, Familienrecht nach BGB oder deutsches Migrationsrecht) findet in unserer Kanzlei nicht statt.

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
Als Mitglied der Ankara Barosu und der Anwaltskammer Karlsruhe (§ 207 BRAO) führen wir Erbschaftsangelegenheiten direkt vor türkischen Behörden durch. Wir sprechen Türkisch und Deutsch. Kontaktieren Sie uns für eine professionelle Unterstützung.`,contentTR:`**YASAL UYARI:** Bu makale yalnızca Türk hukuku ile ilgilidir. Büromuzda Alman hukuku (örneğin Alman miras hukuku, BGB uyarınca aile hukuku veya Alman göç hukuku) konusunda danışmanlık verilmemektedir.

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

*Bu yazı genel bilgilendirme amaçlıdır ve hukuki danışmanlık yerine geçmez. Her vakanın kendine özgü koşulları olduğundan, somut bir hukuki sorun için mutlaka bir avukana başvurmanızı öneririz.*`,category:"Miras Hukuku",categoryDE:"Erbrecht",image:"https://images.unsplash.com/photo-1769092992534-f2d0210162b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXclMjBsaWJyYXJ5JTIwYm9va3MlMjBsZWdhbHxlbnwxfHx8fDE3NzQ2OTc3NDV8MA&ixlib=rb-4.1.0&q=80&w=1080",dateDE:"15. März 2026",dateTR:"15 Mart 2026",readTimeDE:"12 Min. Lesezeit",readTimeTR:"13 dk okuma",publishedAt:"2026-03-15"},{slug:"uluslararasi-bosanma",slugDE:"internationale-scheidung-tuerkei",slugTR:"uluslararasi-bosanma",titleDE:"Internationale Scheidungsverfahren – Was Sie wissen müssen",titleTR:"Uluslararası Boşanma Davalarında Bilinmesi Gerekenler",excerptDE:"Eine Scheidung zwischen Deutschland und der Türkei ist rechtlich komplex. Wir erklären Zuständigkeiten und die Anerkennung nach türkischem Recht.",excerptTR:"Almanya ve Türkiye arasındaki boşanma süreçleri hukuken karmaşıktır. Yetkili mahkemeler ve tanıma-tenfiz konularını Türk hukukuna göre açıklıyoruz.",contentDE:`**RECHTLICHER HINWEIS:** Dieser Artikel befasst sich ausschließlich mit dem türkischen Recht. Eine Beratung zum deutschen Recht (z.B. deutsches Erbrecht, Familienrecht nach BGB oder deutsches Migrationsrecht) findet in unserer Kanzlei nicht statt.

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
Türkiye'deki taşınmaz hukukuna hakimiz ve işlemlerinizi doğrudan Türk makamları nezdinde takip ediyoruz.`,category:"Gayrimenkul Hukuku",categoryDE:"Immobilienrecht",image:$e,dateDE:"2. April 2026",dateTR:"2 Nisan 2026",readTimeDE:"8 Min. Lesezeit",readTimeTR:"8 dk okuma",publishedAt:"2026-04-02"},{slug:"tanima-tenfiz-rehberi",slugDE:"tanima-tenfiz-leitfaden",slugTR:"tanima-tenfiz-rehberi",titleDE:"Tanıma ve Tenfiz: Warum Ihre deutsche Scheidung in der Türkei nicht gilt",titleTR:"Tanıma ve Tenfiz: Almanya'daki Boşanma Kararınız Türkiye'de Neden Geçersiz?",excerptDE:"In Deutschland geschieden, in der Türkei noch verheiratet? Wir erklären das Anerkennungsverfahren nach türkischem Recht.",excerptTR:"Almanya'daki boşanma kararınızı Türkiye'de nasıl tanıtabilirsiniz? Tanıma ve tenfiz davası süreçlerini açıklıyoruz.",contentDE:`**RECHTLICHER HINWEIS:** Dieser Artikel befasst sich ausschließlich mit dem türkischen Recht. Eine Beratung zum deutschen Recht (z.B. deutsches Erbrecht, Familienrecht nach BGB oder deutsches Migrationsrecht) findet in unserer Kanzlei nicht statt.

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
Türkiye'deki aile mahkemeleri nezdindeki süreci bizzat yönetiyoruz.`,category:"Aile Hukuku",categoryDE:"Familienrecht",image:Xe,dateDE:"2. April 2026",dateTR:"2 Nisan 2026",readTimeDE:"6 Min. Lesezeit",readTimeTR:"6 dk okuma",publishedAt:"2026-04-02"},{slug:"sakli-pay-tenkis-davasi",slugDE:"pflichtteil-herabsetzungsklage-tuerkei",slugTR:"sakli-pay-tenkis-davasi",titleDE:"Saklı Pay im türkischen Erbrecht: Wann Erben klagen können",titleTR:"Saklı Pay ve Tenkis Davası: Mirasçıların Hakları ve Dava Süreci",excerptDE:"Pflichtteil (Saklı Pay) nach türkischem Recht verletzt? Wir erklären die Herabsetzungsklage (Tenkis Davası).",excerptTR:"Türk miras hukukunda saklı pay nedir? Tenkis davası şartları ve mirasçıların haklarını açıklıyoruz.",contentDE:`**RECHTLICHER HINWEIS:** Dieser Artikel befasst sich ausschließlich mit dem türkischen Recht. Eine Beratung zum deutschen Recht (z.B. deutsches Erbrecht, Familienrecht nach BGB oder deutsches Migrationsrecht) findet in unserer Kanzlei nicht statt.

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

Saklı payınız ihlal edilmişse, öğrenmeden itibaren 1 yıl içinde **Tenkis Davası** açarak haklarınızı talep edebilirsiniz.`,category:"Miras Hukuku",categoryDE:"Erbrecht",image:Qe,dateDE:"2. April 2026",dateTR:"2 Nisan 2026",readTimeDE:"8 Min. Lesezeit",readTimeTR:"8 dk okuma",publishedAt:"2026-04-02"},{slug:"izale-i-suyu-paylasim-davasi",slugDE:"teilungsklage-immobilien-tuerkei",slugTR:"izale-i-suyu-paylasim-davasi",titleDE:"İzale-i Şüyu: Wenn Erben sich nicht einigen: Teilungsklage in der Türkei",titleTR:"İzale-i Şüyu: Miras Kalan Taşınmazlarda Ortaklığın Giderilmesi Davası",excerptDE:"İzale-i Şüyu (Teilungsklage) bei Erbimmobilien in der Türkei nach türkischem Zivilrecht.",excerptTR:"Mirasçılar arasında paylaşılamayan taşınmazlar için izale-i şüyu davası süreci ve yasal prosedürler.",contentDE:`**RECHTLICHER HINWEIS:** Dieser Artikel befasst sich ausschließlich mit dem türkischen Recht. Eine Beratung zum deutschen Recht (z.B. deutsches Erbrecht, Familienrecht nach BGB oder deutsches Migrationsrecht) findet in unserer Kanzlei nicht statt.

### Was ist İzale-i Şüyu?

Können sich Miteigentümer einer Immobilie in der Türkei nicht über Verkauf oder Nutzung einigen, kann jeder Teilhaber die Teilungsklage (**İzale-i Şüyu**) erheben.

**Rechtsgrundlage**: TMK Art. 698–699.

### Ablauf

Wenn eine Realteilung nicht möglich ist, wird das Gericht die Versteigerung der Immobilie anordnen. Der Erlös wird nach Anteilen verteilt.

**Unser Service**: Wir vertreten Sie im gesamten Versteigerungsprozess in der Türkei.`,contentTR:`**YASAL UYARI:** Bu makale yalnızca Türk hukuku ile ilgilidir. Büromuzda Alman hukuku (örneğin Alman miras hukuku, BGB uyarınca aile hukuku veya Alman göç hukuku) konusunda danışmanlık verilmemektedir.

### İzale-i Şüyu (Ortaklığın Giderilmesi)

Paydaşlar arasında paylaşılamayan taşınmazlar için Sulh Hukuk Mahkemesi'nde açılan davadır.

**Hukuki Dayanak**: TMK m. 698-699.`,category:"Miras Hukuku",categoryDE:"Erbrecht",image:ea,dateDE:"2. April 2026",dateTR:"2 Nisan 2026",readTimeDE:"7 Min. Lesezeit",readTimeTR:"7 dk okuma",publishedAt:"2026-04-02"},{slug:"mavi-kart-haklari-rehberi",slugDE:"mavi-kart-rechte-tuerkei",slugTR:"mavi-kart-haklari-rehberi",titleDE:"Mavi Kart: Ihre Rechte in der Türkei nach Einbürgerung in Deutschland",titleTR:"Mavi Kart: Alman Vatandaşlığına Geçiş Sonrası Türkiye'deki Haklarınız",excerptDE:"Mavi Kart — Rechte in der Türkei: Eigentum und Erbschaft nach türkischem Staatsangehörigkeitsrecht.",excerptTR:"Mavi Kart nedir? Türkiye'de mülkiyet ve miras haklarınız. 5901 sayılı Kanun kapsamında eski Türk vatandaşlarının statüsü.",contentDE:`**RECHTLICHER HINWEIS:** Dieser Artikel befasst sich ausschließlich mit dem türkischen Recht. Eine Beratung zum deutschen Recht (z.B. deutsches Erbrecht, Familienrecht nach BGB oder deutsches Migrationsrecht) findet in unserer Kanzlei nicht statt.

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

**Hukuki Dayanak**: 5901 sayılı TVK Madde 28.`,category:"Vatandaşlık Hukuku",categoryDE:"Staatsangehörigkeitsrecht",image:aa,dateDE:"2. April 2026",dateTR:"2 Nisan 2026",readTimeDE:"5 Min. Lesezeit",readTimeTR:"5 dk okuma",publishedAt:"2026-04-02"},{slug:"vorladung-haftbefehl-tuerkei",slugDE:"vorladung-haftbefehl-tuerkei",slugTR:"turkiye-den-tebligat-veya-yakalama-karari",titleDE:"Vorladung oder Haftbefehl aus der Türkei: Was tun?",titleTR:"Türkiye'den Tebligat veya Yakalama Kararı mı Geldi? Almanya'dan Ne Yapmalısınız?",excerptDE:"Vorladungen oder Strafverfahren in der Türkei können auch aus Deutschland heraus nach türkischem Strafprozessrecht verteidigt werden.",excerptTR:"Türkiye'de hakkınızda açılan ceza davaları ve yakalama kararları. CMK uyarınca Almanya'dan savunma haklarınız.",contentDE:`**RECHTLICHER HINWEIS:** Dieser Artikel befasst sich ausschließlich mit dem türkischen Recht. Eine Beratung zum deutschen Recht (z.B. deutsches Erbrecht, Familienrecht nach BGB oder deutsches Migrationsrecht) findet in unserer Kanzlei nicht statt.

### Wenn Post aus der Türkei kommt

Erhalten Sie eine Vorladung oder einen Haftbefehl (**Yakalama Kararı**) aus der Türkei, ist professionelle Hilfe vor Ort in der Türkei entscheidend.

**Rechtsgrundlage**: Türkische Strafprozessordnung (CMK).

### Ihre Rechte

- **Vertretung**: Sie können sich durch einen in der Türkei zugelassenen Avukat vertreten lassen, oft ohne selbst reisen zu müssen.
- **Akteneinsicht**: Über das UYAP-System können wir den Stand Ihres Verfahrens prüfen.

**Doğru Kanzlei**: Als Mitglied der Ankara Barosu übernehmen wir Ihre Verteidigung vor türkischen Strafgerichten.`,contentTR:`**YASAL UYARI:** Bu makale yalnızca Türk hukuku ile ilgilidir. Büromuzda Alman hukuku (örneğin Alman miras hukuku, BGB uyarınca aile hukuku veya Alman göç hukuku) konusunda danışmanlık verilmemektedir.

### Yakalama Kararı ve Tebligatlar

Türkiye'deki ceza dosyalarınızı Almanya'dan vekalet vererek takip edebilirsiniz.

**Hukuki Dayanak**: CMK m. 145 vd.`,category:"Ceza Hukuku",categoryDE:"Strafrecht",image:na,dateDE:"2. April 2026",dateTR:"2 Nisan 2026",readTimeDE:"7 Min. Lesezeit",readTimeTR:"7 dk okuma",publishedAt:"2026-04-02"},{slug:"suc-duyurusu-tuerkei-rehberi",slugDE:"strafanzeige-tuerkei-rehber",slugTR:"turkiye-de-suc-duyurusu-rehberi",titleDE:"Strafanzeige in der Türkei aus Deutschland erstatten",titleTR:"Almanya'dan Türkiye'deki Bir Suç İçin Şikayetçi Olmak: Suç Duyurusu Rehberi",excerptDE:"Opfer einer Straftat in der Türkei geworden? Wir erklären die Strafanzeige (Suç Duyurusu) nach türkischem Recht.",excerptTR:"Türkiye'de mağdur olduğunuz suçlar için Almanya'dan nasıl suç duyurusunda bulunabilirsiniz?",contentDE:`**RECHTLICHER HINWEIS:** Dieser Artikel befasst sich ausschließlich mit dem türkischen Recht. Eine Beratung zum deutschen Recht (z.B. deutsches Erbrecht, Familienrecht nach BGB oder deutsches Migrationsrecht) findet in unserer Kanzlei nicht statt.

### Anzeige in der Türkei

Wenn Sie in der Türkei Opfer eines Betrugs oder einer anderen Straftat geworden sind, können Sie über einen Avukat Strafanzeige (**Suç Duyurusu**) bei der zuständigen türkischen Staatsanwaltschaft erstatten.

**Rechtsgrundlage**: CMK Art. 158.

**Doğru Kanzlei**: Wir formulieren Ihre Anzeige und verfolgen das Ermittlungsverfahren in der Türkei für Sie.`,contentTR:`**YASAL UYARI:** Bu makale yalnızca Türk hukuku ile ilgilidir. Büromuzda Alman hukuku (örneğin Alman miras hukuku, BGB uyarınca aile hukuku veya Alman göç hukuku) konusunda danışmanlık verilmemektedir.

### Türkiye'de Suç Duyurusu

Türkiye'deki suç mağduriyetleriniz için Almanya'dan vekaletle suç duyurusunda bulunabilirsiniz.`,category:"Ceza Hukuku",categoryDE:"Strafrecht",image:ia,dateDE:"2. April 2026",dateTR:"2 Nisan 2026",readTimeDE:"6 Min. Lesezeit",readTimeTR:"6 dk okuma",publishedAt:"2026-04-02"},{slug:"bosanma-rehberi-tuerkiye",slugDE:"scheidung-tuerkei-ohne-reise",slugTR:"turkiye-de-bosanma-rehberi",titleDE:"Scheidung in der Türkei ohne Reise",titleTR:"Almanya'dan Türkiye'de Boşanma: Anlaşmalı ve Çekişmeli Boşanma Rehberi",excerptDE:"Scheidung in der Türkei aus Deutschland einreichen nach türkischem Zivilgesetzbuch (TMK).",excerptTR:"Türkiye'ye gitmeden Almanya'dan boşanma davası nasıl açılır? Yasal şartlar ve süreçler.",contentDE:`**RECHTLICHER HINWEIS:** Dieser Artikel befasst sich ausschließlich mit dem türkischen Recht. Eine Beratung zum deutschen Recht (z.B. deutsches Erbrecht, Familienrecht nach BGB oder deutsches Migrationsrecht) findet in unserer Kanzlei nicht statt.

### Scheidung nach türkischem Recht

Eine Scheidung kann direkt vor türkischen Familiengerichten beantragt werden.

**Rechtsgrundlage**: TMK Art. 166.

- **Anlaşmalı Boşanma**: Einvernehmliche Scheidung via Anwaltsprotokoll.
- **Çekişmeli Boşanma**: Streitige Scheidung.

**Doğru Kanzlei**: Wir vertreten Sie in allen Phasen des türkischen Boşanma-Verfahrens.`,contentTR:`**YASAL UYARI:** Bu makale yalnızca Türk hukuku ile ilgilidir. Büromuzda Alman hukuku (örneğin Alman miras hukuku, BGB uyarınca aile hukuku veya Alman göç hukuku) konusunda danışmanlık verilmemektedir.

### Türkiye'de Boşanma Davası

Süreci Almanya'dan vekaletle yönetmek mümkündür. 

**Hukuki Dayanak**: TMK m. 166.`,category:"Aile Hukuku",categoryDE:"Familienrecht",image:ra,dateDE:"2. April 2026",dateTR:"2 Nisan 2026",readTimeDE:"8 Min. Lesezeit",readTimeTR:"8 dk okuma",publishedAt:"2026-04-02"},{slug:"vekaletname-rehberi-almanya",slugDE:"tuerkische-vekaletname-deutschland",slugTR:"almanya-da-vekaletname-cikarma-rehberi",titleDE:"Türkische Vollmacht (Vekaletname) in Deutschland",titleTR:"Almanya'da Türk Vekaletnamesi: Noter, Apostil ve Konsolosluk Rehberi",excerptDE:"Vekaletname in Deutschland erstellen — Schritte nach türkischem Notariatsrecht.",excerptTR:"Almanya'da nasıl vekaletname çıkarılır? Apostil ve tercüme süreçleri.",contentDE:`**RECHTLICHER HINWEIS:** Dieser Artikel befasst sich ausschließlich mit dem türkischen Recht. Eine Beratung zum deutschen Recht (z.B. deutsches Erbrecht, Familienrecht nach BGB oder deutsches Migrationsrecht) findet in unserer Kanzlei nicht statt.

### Die Vekaletname

Für Rechtsgeschäfte in der Türkei benötigen Sie eine formelle Vollmacht (**Vekaletname**).

**Verfahren**:
- Über ein türkisches Konsulat.
- Über einen deutschen Notar mit anschließender Apostille und Übersetzung.

**Doğru Kanzlei**: Wir stellen Ihnen die passenden Textvorlagen für Ihre türkische Vollmacht zur Verfügung.`,contentTR:`**YASAL UYARI:** Bu makale yalnızca Türk hukuku ile ilgilidir. Büromuzda Alman hukuku (örneğin Alman miras hukuku, BGB uyarınca aile hukuku veya Alman göç hukuku) konusunda danışmanlık verilmemektedir.

### Vekaletname İşlemleri

Türkiye'deki işlemleriniz için gerekli olan yetki belgesidir.`,category:"Hukuki Danışmanlık",categoryDE:"Rechtsberatung",image:ta,dateDE:"2. April 2026",dateTR:"2 Nisan 2026",readTimeDE:"6 Min. Lesezeit",readTimeTR:"6 dk okuma",publishedAt:"2026-04-02"}],ge=h.createContext(void 0);function ma(a,i,t){var s,n;let r=a.replace(`/${i}`,`/${t}`);i==="tr"&&t==="de"?(r=r.replace("/hizmetler","/leistungen"),r=r.replace("/gizlilik-politikasi","/datenschutz"),r=r.replace("/yasal-bilgiler","/impressum"),r=r.replace("/hakkimizda","/ueber-uns")):i==="de"&&t==="tr"&&(r=r.replace("/leistungen","/hizmetler"),r=r.replace("/datenschutz","/gizlilik-politikasi"),r=r.replace("/impressum","/yasal-bilgiler"),r=r.replace("/ueber-uns","/hakkimizda"));const l=t==="de"?"/leistungen/":"/hizmetler/";if(r.includes(l)){const o=(s=r.split(l)[1])==null?void 0:s.split(/[?#]/)[0];if(o){const k=S.find(m=>i==="de"?m.slugDE===o:m.slugTR===o);if(k){const m=t==="de"?k.slugDE:k.slugTR;r=r.replace(o,m)}}}const u="/blog/";if(r.includes(u)){const o=(n=r.split(u)[1])==null?void 0:n.split(/[?#]/)[0];if(o){const k=N.find(m=>i==="de"?m.slugDE===o:m.slugTR===o);if(k){const m=t==="de"?k.slugDE:k.slugTR;r=r.replace(o,m)}}}return r}const ha=({language:a,children:i})=>{const t=H(),r=W(),l=n=>{if(n===a)return;const o=ma(r.pathname,a,n)+r.search+r.hash;t(o)},u=n=>Je[a][n]||n,s=h.useMemo(()=>{const n=`/${a}`,o=a==="de"?"leistungen":"hizmetler";return{home:n,services:`${n}/${o}`,service:k=>{const m=S.find(c=>c.id===k),g=m?a==="de"?m.slugDE:m.slugTR:k;return`${n}/${o}/${g}`},blog:`${n}/blog`,blogPost:k=>{const m=N.find(c=>c.slug===k),g=m?a==="de"?m.slugDE:m.slugTR:k;return`${n}/blog/${g}`},datenschutz:a==="de"?`${n}/datenschutz`:`${n}/gizlilik-politikasi`,impressum:a==="de"?`${n}/impressum`:`${n}/yasal-bilgiler`,about:a==="de"?`${n}/ueber-uns`:`${n}/hakkimizda`,whyUs:`${n}/#neden-biz`,blogSection:`${n}/#blog`,contact:`${n}/#iletisim`}},[a]);return e.jsx(ge.Provider,{value:{language:a,setLanguage:l,t:u,paths:s},children:i})},A=()=>{const a=h.useContext(ge);if(a===void 0)throw new Error("useLanguage must be used within a LanguageProvider");return a},be="/assets/logo-eRLlm_XN.avif",$="https://calendly.com/hasand9366/30min";function ca(){const[a,i]=h.useState(!1),[t,r]=h.useState(!1),{language:l,setLanguage:u,t:s,paths:n}=A(),{pathname:o,hash:k}=W(),m=H(),g=[{label:s("nav_home"),href:n.home},{label:s("nav_about"),href:n.about},{label:s("nav_services"),href:n.services},{label:s("nav_why_us"),href:n.whyUs},{label:s("nav_blog"),href:n.blog},{label:s("nav_contact"),href:n.contact}],c=o===`/${l}`||o===`/${l}/`;h.useEffect(()=>{const b=()=>i(window.scrollY>40);return window.addEventListener("scroll",b),()=>window.removeEventListener("scroll",b)},[]),h.useEffect(()=>{if(k){const b=k.replace("#",""),p=document.getElementById(b);if(p){const K=setTimeout(()=>{p.scrollIntoView({behavior:"smooth"})},150);return()=>clearTimeout(K)}}},[k]),h.useEffect(()=>(t?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[t]);const T=b=>{r(!1);const p=b.indexOf("#");if(p!==-1){const K=b.substring(0,p),ve=b.substring(p+1),ze=o.replace(/\/$/,""),C=K.replace(/\/$/,"");if(ze===C||c&&C===`/${l}`){const F=document.getElementById(ve);if(F){F.scrollIntoView({behavior:"smooth"});return}}m(b)}else m(b),window.scrollTo({top:0,behavior:"smooth"})},z=(a||!c)&&!t;return e.jsxs("header",{style:{position:"fixed",top:0,left:0,right:0,zIndex:100,transition:"background 0.3s, box-shadow 0.3s",background:z?"#ffffff":"transparent",boxShadow:z?"0 1px 24px rgba(0,0,0,0.07)":"none",borderBottom:z?"1px solid #f0f0f0":"1px solid rgba(255,255,255,0.1)"},children:[e.jsxs("div",{className:"relative z-50 max-w-[1400px] mx-auto px-6 lg:px-8 flex items-center justify-between h-[80px]",children:[e.jsxs(v,{to:n.home,"aria-label":`Doğru Kanzlei - ${s("nav_home")}`,onClick:b=>{c&&(b.preventDefault(),window.scrollTo({top:0,behavior:"smooth"}))},style:{textDecoration:"none",display:"flex",alignItems:"center",gap:12},children:[e.jsx("img",{src:be,alt:"Doğru Kanzlei Logo",width:44,height:44,fetchPriority:"high",style:{height:44,width:"auto",display:"block",filter:z?"none":"brightness(0) invert(1)",transition:"filter 0.3s"}}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("span",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:20,fontWeight:600,color:z?"#1C3829":"#ffffff",letterSpacing:"0.05em",textTransform:"uppercase",transition:"color 0.3s",lineHeight:1},children:"DOGRU"}),e.jsx("span",{style:{fontFamily:"'Lato', sans-serif",fontSize:9,fontWeight:700,color:"#7A5F20",letterSpacing:"0.2em",textTransform:"uppercase",marginTop:2},children:"Kanzlei"})]})]}),e.jsxs("nav",{className:"hidden lg:flex items-center gap-8","aria-label":l==="de"?"Hauptnavigation":"Ana navigasyon",children:[g.map(b=>e.jsx("button",{onClick:()=>T(b.href),"aria-label":b.label,style:{background:"none",border:"none",cursor:"pointer",fontFamily:"var(--font-sans)",fontSize:10,fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",color:z?"#3a3a3a":"rgba(255,255,255,0.9)",textDecoration:"none",transition:"color 0.2s",padding:"8px 0"},onMouseEnter:p=>p.target.style.color="#7A5F20",onMouseLeave:p=>p.target.style.color=z?"#3a3a3a":"rgba(255,255,255,0.9)",children:b.label},b.href)),e.jsx("div",{style:{width:1,height:18,background:z?"#e0e0e0":"rgba(255,255,255,0.2)"}}),e.jsxs("button",{onClick:()=>u(l==="tr"?"de":"tr"),"aria-label":l==="de"?"Sprache zu Türkisch wechseln":"Dili Almanca yap",style:{display:"flex",alignItems:"center",gap:5,background:"none",border:"none",cursor:"pointer",fontFamily:"var(--font-sans)",fontSize:11,fontWeight:700,color:z?"#3a3a3a":"#ffffff",textTransform:"uppercase"},children:[e.jsx(me,{size:13,color:"#7A5F20","aria-hidden":"true"}),l==="de"?"TR":"DE"]}),e.jsx("button",{onClick:()=>window.open($,"_blank"),style:{fontFamily:"var(--font-sans)",fontSize:10,fontWeight:700,letterSpacing:"0.12em",textTransform:"uppercase",color:"#ffffff",background:"#8B6E2A",padding:"12px 24px",textDecoration:"none",transition:"transform 0.2s, background 0.2s",border:"none",cursor:"pointer"},onMouseEnter:b=>{b.target.style.background="#7A5F20",b.target.style.transform="translateY(-1px)"},onMouseLeave:b=>{b.target.style.background="#8B6E2A",b.target.style.transform="translateY(0)"},children:s("nav_cta")})]}),e.jsxs("div",{className:"flex items-center gap-4 lg:hidden",children:[e.jsx("button",{onClick:()=>u(l==="tr"?"de":"tr"),"aria-label":l==="de"?"Sprache zu Türkisch wechseln":"Dili Almanca yap",style:{display:"flex",alignItems:"center",gap:4,background:"none",border:"none",cursor:"pointer",fontFamily:"'Lato', sans-serif",fontSize:12,fontWeight:700,color:z?"#3a3a3a":"#ffffff",textTransform:"uppercase"},children:l==="de"?"TR":"DE"}),e.jsx("button",{onClick:()=>r(!t),"aria-label":t?"Hauptmenü schließen":"Hauptmenü öffnen",style:{background:"none",border:"none",cursor:"pointer",color:z?"#1C3829":"#ffffff",padding:4},children:t?e.jsx(he,{size:24}):e.jsx(_e,{size:24})})]})]}),e.jsx("div",{className:`fixed inset-0 bg-[#1C3829] z-40 transition-transform duration-500 ease-in-out lg:hidden ${t?"translate-x-0":"translate-x-full"}`,style:{top:0,height:"100vh"},children:e.jsxs("div",{className:"flex flex-col h-full pt-28 px-8 pb-12 overflow-y-auto",children:[e.jsx("div",{className:"flex flex-col gap-6 flex-grow",children:g.map((b,p)=>e.jsx("button",{onClick:()=>T(b.href),style:{transitionDelay:`${p*100}ms`},className:`text-left font-serif text-3xl font-medium text-white hover:text-[#8B6E2A] transition-all duration-300 ${t?"opacity-100 translate-y-0":"opacity-0 translate-y-4"}`,children:b.label},b.href))}),e.jsxs("div",{className:`mt-auto pt-8 border-t border-white/10 transition-all duration-500 delay-500 ${t?"opacity-100 translate-y-0":"opacity-0 translate-y-4"}`,children:[e.jsx("p",{className:"font-sans text-[11px] text-white/50 tracking-[0.2em] uppercase mb-4",children:l==="de"?"Direkter Kontakt":"Doğrudan İletişim"}),e.jsx("p",{className:"font-sans text-white mb-1",children:"info@hasandogru.de"}),e.jsx("p",{className:"font-sans text-white mb-2",children:"Avukat.hasandogru@outlook.de"}),e.jsx("p",{className:"font-sans text-white mb-8",children:"+4917661221210"}),e.jsx("button",{onClick:()=>window.open($,"_blank"),className:"w-full bg-[#8B6E2A] text-white font-sans text-xs font-bold tracking-[0.15em] uppercase py-5 text-center transition-colors hover:bg-[#7A5F20]",children:s("nav_cta")})]})]})})]})}const X="dogru_kanzlei_consent",Q="1";function ga(){const[a,i]=h.useState("pending"),[t,r]=h.useState({essential:!0,functional:!1,analytics:!1}),[l,u]=h.useState(!1);h.useEffect(()=>{try{const g=localStorage.getItem(X);if(g){const c=JSON.parse(g);if(c.version===Q){r(c.consent),i(c.status),u(!1);return}}}catch{}u(!0)},[]);const s=(g,c)=>{const T={version:Q,consent:g,status:c};localStorage.setItem(X,JSON.stringify(T)),r(g),i(c),u(!1)};return{showBanner:l,status:a,consent:t,acceptAll:()=>{s({essential:!0,functional:!0,analytics:!0},"accepted")},rejectAll:()=>{s({essential:!0,functional:!1,analytics:!1},"rejected")},saveCustom:(g,c)=>{s({essential:!0,functional:g,analytics:c},"custom")},openSettings:()=>{u(!0)}}}const ye=h.createContext(null);function ba({children:a}){const i=ga();return e.jsx(ye.Provider,{value:i,children:a})}function G(){const a=h.useContext(ye);if(!a)throw new Error("useConsent must be used within ConsentProvider");return a}function ya(){const{t:a,language:i,paths:t}=A(),{openSettings:r}=G(),l=new Date().getFullYear(),u=[{label:a("nav_about"),href:t.about},{label:a("nav_services"),href:t.services},{label:a("nav_why_us"),href:t.whyUs},{label:a("nav_blog"),href:t.blog},{label:a("nav_contact"),href:t.contact}],s=i==="de"?[{label:"Familienrecht",href:t.service("familienrecht")},{label:"Erbrecht",href:t.service("erbrecht")},{label:"Strafrecht",href:t.service("strafrecht")}]:[{label:"Aile Hukuku",href:t.service("familienrecht")},{label:"Miras Hukuku",href:t.service("erbrecht")},{label:"Ceza Hukuku",href:t.service("strafrecht")}];return e.jsxs("footer",{style:{background:"#111d17",padding:"64px 32px 32px"},children:[e.jsxs("div",{style:{maxWidth:1100,margin:"0 auto"},children:[e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"2.5fr 1fr 1fr 1.5fr",gap:48,paddingBottom:48,borderBottom:"1px solid rgba(255,255,255,0.06)"},className:"footer-grid",children:[e.jsxs("div",{children:[e.jsxs(v,{to:t.home,"aria-label":`Doğru Kanzlei - ${a("nav_home")}`,style:{marginBottom:20,display:"flex",alignItems:"center",gap:10,textDecoration:"none"},children:[e.jsx("img",{src:be,alt:"Doğru Kanzlei Logo",width:48,height:48,style:{height:48,width:"auto",display:"block",filter:"brightness(0) invert(1)"}}),e.jsx("span",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:22,fontWeight:600,color:"#ffffff",letterSpacing:"0.05em",textTransform:"uppercase"},children:"DOGRU Kanzlei"})]}),e.jsx("p",{style:{fontFamily:"'Lato', sans-serif",fontSize:13,fontWeight:400,color:"rgba(255,255,255,0.55)",lineHeight:1.7,maxWidth:320,marginBottom:24},children:a("footer_description")}),e.jsxs("div",{style:{display:"flex",gap:14},children:[e.jsx("div",{style:{width:28,height:28,borderRadius:"50%",background:"rgba(184,150,62,0.1)",display:"flex",alignItems:"center",justifyContent:"center",border:"1px solid rgba(184,150,62,0.2)"},children:e.jsx("div",{style:{width:6,height:6,borderRadius:"50%",background:"#B8963E"}})}),e.jsx("span",{style:{fontFamily:"var(--font-sans)",fontSize:14,fontWeight:500,color:"rgba(255,255,255,0.6)",letterSpacing:"0.05em"},children:"Mannheim · Ankara"})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontFamily:"'Lato', sans-serif",fontSize:10,fontWeight:700,letterSpacing:"0.15em",textTransform:"uppercase",color:"#B8963E",marginBottom:24},children:a("footer_quick_links")}),u.map(n=>e.jsx(v,{to:n.href,style:{display:"block",fontFamily:"var(--font-sans)",fontSize:13,fontWeight:500,color:"rgba(255,255,255,0.7)",textDecoration:"none",marginBottom:12,transition:"color 0.2s"},onMouseEnter:o=>o.target.style.color="#ffffff",onMouseLeave:o=>o.target.style.color="rgba(255,255,255,0.7)",children:n.label},n.label))]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontFamily:"'Lato', sans-serif",fontSize:10,fontWeight:700,letterSpacing:"0.15em",textTransform:"uppercase",color:"#B8963E",marginBottom:24},children:a("hero_cta_secondary")}),s.map(n=>e.jsx(v,{to:n.href,style:{display:"block",fontFamily:"var(--font-sans)",fontSize:13,fontWeight:500,color:"rgba(255,255,255,0.7)",textDecoration:"none",marginBottom:12,transition:"color 0.2s"},onMouseEnter:o=>o.target.style.color="#ffffff",onMouseLeave:o=>o.target.style.color="rgba(255,255,255,0.7)",children:n.label},n.label))]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontFamily:"'Lato', sans-serif",fontSize:10,fontWeight:700,letterSpacing:"0.15em",textTransform:"uppercase",color:"#8B6E2A",marginBottom:24},children:a("footer_contact_info")}),e.jsxs("div",{style:{fontFamily:"'Lato', sans-serif",fontSize:13,fontWeight:400,color:"rgba(255,255,255,0.7)",lineHeight:1.7},children:[e.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:10,marginBottom:14},children:[e.jsx(ce,{size:14,color:"#8B6E2A",style:{marginTop:4}}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[e.jsx("a",{href:"mailto:info@hasandogru.de",style:{color:"inherit",textDecoration:"none"},children:"info@hasandogru.de"}),e.jsx("a",{href:"mailto:Avukat.hasandogru@outlook.de",style:{color:"inherit",textDecoration:"none"},children:"Avukat.hasandogru@outlook.de"})]})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:14},children:[e.jsx(M,{size:14,color:"#8B6E2A"}),e.jsx("a",{href:"https://wa.me/4917661221210","aria-label":"Kontakt per WhatsApp",style:{color:"inherit",textDecoration:"none"},target:"_blank",rel:"noopener noreferrer",children:"+4917661221210"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:14},children:[e.jsx(M,{size:14,color:"#8B6E2A"}),e.jsx("span",{children:"+905332375918"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:10,marginBottom:14},children:[e.jsx(V,{size:14,color:"#8B6E2A",style:{marginTop:4}}),e.jsx("span",{children:"R1 2,3, 68161 Mannheim, Deutschland"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:10},children:[e.jsx(V,{size:14,color:"#8B6E2A",style:{marginTop:4}}),e.jsx("span",{children:"Aşağı Öveçler Mahallesi 1322 Cadde 45/9, Çankaya Ankara"})]})]})]})]}),e.jsx("div",{style:{marginTop:80,marginBottom:20},children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:40},className:"footer-disclaimer-grid",children:[e.jsxs("div",{children:[e.jsx("span",{style:{color:"#C9A84C",fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.2em",display:"block",marginBottom:16,opacity:.9},children:"Rechtlicher Hinweis"}),e.jsx("p",{style:{color:"rgba(255,255,255,0.6)",fontSize:11,lineHeight:1.8,margin:0,fontFamily:"'Lato', sans-serif"},children:"Die Kanzlei berät ausschließlich im türkischen Recht. Eine Beratung oder Vertretung im deutschen Recht findet nicht statt. Registriert als ausländischer Anwalt gemäß § 207 BRAO."})]}),e.jsxs("div",{lang:"tr",children:[e.jsx("span",{style:{color:"#C9A84C",fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.2em",display:"block",marginBottom:16,opacity:.9},children:"Yasal Uyarı"}),e.jsx("p",{style:{color:"rgba(255,255,255,0.6)",fontSize:11,lineHeight:1.8,margin:0,fontFamily:"'Lato', sans-serif"},children:"Büromuz yalnızca Türk hukuku alanında danışmanlık vermektedir. Alman hukuku konusunda danışmanlık veya temsil hizmeti verilmemektedir. § 207 BRAO uyarınca kayıtlı yabancı avukat."})]}),e.jsxs("div",{children:[e.jsx("span",{style:{color:"#C9A84C",fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.2em",display:"block",marginBottom:16,opacity:.9},children:"Legal Notice"}),e.jsx("p",{style:{color:"rgba(255,255,255,0.6)",fontSize:11,lineHeight:1.8,margin:0,fontFamily:"'Lato', sans-serif"},children:"The firm provides legal advice exclusively in Turkish law. We do not provide advice or representation in German law. Registered as a foreign lawyer according to § 207 BRAO."})]})]})}),e.jsxs("div",{style:{paddingTop:24,display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:16},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsxs("span",{style:{fontFamily:"'Lato', sans-serif",fontSize:11,fontWeight:400,color:"rgba(255,255,255,0.2)"},children:["© ",l," DOGRU Kanzlei · ",a("hero_title_pre")," Hasan Dogru. ",a("footer_rights")]}),e.jsxs("a",{href:"https://nüll.com",target:"_blank",rel:"noopener noreferrer",style:{display:"inline-flex",alignItems:"center",gap:"4px",fontFamily:"'Lato', sans-serif",fontSize:10,fontWeight:400,color:"rgba(255,255,255,0.4)",textDecoration:"none",transition:"all 0.2s ease"},onMouseEnter:n=>{const o=n.currentTarget;o.style.color="rgba(255,255,255,0.7)"},onMouseLeave:n=>{const o=n.currentTarget;o.style.color="rgba(255,255,255,0.4)"},children:["Site made by",e.jsxs("span",{style:{display:"flex",alignItems:"center",color:"rgba(255,255,255,0.8)",fontWeight:800,marginLeft:2,letterSpacing:"-0.02em",fontFamily:"var(--font-sans)"},children:["nüll",e.jsx("span",{style:{color:"#3B82F6"},children:"."}),"com"]})]})]}),e.jsxs("div",{style:{display:"flex",gap:24},children:[[{label:"Impressum",href:t.impressum},{label:"Datenschutz",href:t.datenschutz}].map(n=>e.jsx(v,{to:n.href,style:{fontFamily:"'Lato', sans-serif",fontSize:11,fontWeight:400,color:"rgba(255,255,255,0.6)",textDecoration:"none",transition:"color 0.2s"},onMouseEnter:o=>o.target.style.color="rgba(255,255,255,0.4)",onMouseLeave:o=>o.target.style.color="rgba(255,255,255,0.2)",children:n.label},n.label)),e.jsx("button",{onClick:r,style:{fontFamily:"'Lato', sans-serif",fontSize:11,fontWeight:400,color:"rgba(255,255,255,0.2)",textDecoration:"none",background:"none",border:"none",padding:0,cursor:"pointer",transition:"color 0.2s"},onMouseEnter:n=>n.target.style.color="rgba(255,255,255,0.4)",onMouseLeave:n=>n.target.style.color="rgba(255,255,255,0.2)",children:i==="de"?"Cookie-Einstellungen":"Çerez Ayarları"})]})]})]}),e.jsx("style",{children:`
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
      `})]})}function fa(){const{t:a}=A(),[i,t]=h.useState(!1);return e.jsxs("a",{href:"https://wa.me/4917661221210",target:"_blank",rel:"noopener noreferrer","aria-label":"Kontakt per WhatsApp",onMouseEnter:()=>t(!0),onMouseLeave:()=>t(!1),className:"fixed z-[200] flex items-center gap-3 bg-[#25D366] text-white no-underline rounded-full shadow-[0_6px_25px_rgba(37,211,102,0.45)] transition-all duration-300 bottom-6 right-6 md:bottom-8 md:right-8",style:{padding:i?"14px 26px":"14px 14px",transform:i?"scale(1.05)":"scale(1)"},children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",width:22,height:22,style:{flexShrink:0},children:e.jsx("path",{d:"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"})}),e.jsx("span",{style:{fontFamily:"var(--font-sans)",fontSize:"12px",fontWeight:"600",letterSpacing:"0.1em",textTransform:"uppercase",whiteSpace:"nowrap",maxWidth:i?180:0,opacity:i?1:0,overflow:"hidden",transition:"max-width 0.3s ease, opacity 0.2s ease",display:"inline-block"},children:a("contact_whatsapp_btn")})]})}const ee={de:{title:"Ihre Privatsphäre",subtitle:"Wir respektieren Ihre Daten",description:"Diese Website verwendet Cookies und ähnliche Technologien. Einige sind notwendig, andere helfen uns, Ihnen einen besseren Service zu bieten. Gemäß §25 TDDDG und DSGVO benötigen wir Ihre Einwilligung.",essential:"Technisch notwendig",essentialDesc:"Erforderlich für die Grundfunktionen der Website. Kann nicht deaktiviert werden.",functional:"Funktional",functionalDesc:"Ermöglicht externe Dienste wie Calendly (Terminbuchung) und WhatsApp.",analytics:"Analyse",analyticsDesc:"Hilft uns, die Nutzung der Website zu verstehen (z.B. Google Analytics). Aktuell nicht aktiv.",acceptAll:"Alle akzeptieren",rejectAll:"Nur notwendige",saveCustom:"Auswahl speichern",customize:"Anpassen",alwaysOn:"Immer aktiv",privacyLink:"Datenschutzerklärung",imprintLink:"Impressum"},tr:{title:"Gizliliğiniz",subtitle:"Verilerinize saygı duyuyoruz",description:"Bu web sitesi çerezler ve benzer teknolojiler kullanmaktadır. Bazıları zorunlu, bazıları daha iyi hizmet sunmamıza yardımcı olmaktadır. GDPR ve §25 TDDDG kapsamında onayınızı talep ediyoruz.",essential:"Teknik Zorunlu",essentialDesc:"Web sitesinin temel işlevleri için gereklidir. Devre dışı bırakılamaz.",functional:"İşlevsel",functionalDesc:"Calendly (randevu) ve WhatsApp gibi harici hizmetlere olanak tanır.",analytics:"Analitik",analyticsDesc:"Web sitesi kullanımını anlamamıza yardımcı olur (örn. Google Analytics). Şu anda aktif değil.",acceptAll:"Tümünü kabul et",rejectAll:"Yalnızca zorunlu",saveCustom:"Seçimi kaydet",customize:"Özelleştir",alwaysOn:"Her zaman aktif",privacyLink:"Gizlilik Politikası",imprintLink:"Künye"}};function va(){const{showBanner:a,consent:i,acceptAll:t,rejectAll:r,saveCustom:l}=G(),{language:u,paths:s}=A(),n=ee[u]??ee.de,[o,k]=h.useState(!1),[m,g]=h.useState(i.functional),[c,T]=h.useState(i.analytics);return a?e.jsxs("div",{className:"fixed inset-0 z-[9999] flex items-end justify-center pointer-events-none",style:{paddingBottom:"0",animation:"cookieFadeIn 0.2s ease forwards"},children:[e.jsx("div",{className:"absolute inset-0 bg-black/20 pointer-events-auto"}),e.jsx("div",{className:"relative pointer-events-auto w-full max-w-4xl mx-auto bg-white shadow-2xl border-t-4 border-[#8B6E2A]",style:{maxHeight:"90vh",overflowY:"auto",animation:"cookieSlideUp 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards"},children:e.jsxs("div",{className:"p-8 lg:p-12",children:[e.jsx("div",{className:"flex items-start justify-between gap-6 mb-8",children:e.jsxs("div",{className:"flex items-start gap-5",children:[e.jsx("div",{className:"w-12 h-12 bg-[#1C3829] flex items-center justify-center shrink-0",children:e.jsx(ke,{size:22,className:"text-[#8B6E2A]"})}),e.jsxs("div",{children:[e.jsx("div",{className:"flex items-center gap-3 mb-1",children:e.jsx("span",{className:"font-sans text-[10px] font-bold tracking-[0.2em] uppercase text-[#7A5F20]",children:"Doğru Kanzlei"})}),e.jsx("h2",{className:"font-serif text-2xl lg:text-3xl text-[#1C3829] font-medium leading-tight",children:n.title}),e.jsx("p",{className:"font-sans text-sm text-[#6a6a6a] mt-1",children:n.subtitle})]})]})}),e.jsx("p",{className:"font-sans text-[14px] text-[#4a4a4a] leading-relaxed mb-8 max-w-2xl",children:n.description}),e.jsxs("button",{onClick:()=>k(!o),className:"flex items-center gap-2 font-sans text-[12px] font-bold tracking-widest text-[#7A5F20] uppercase mb-6 hover:text-[#1C3829] transition-colors",children:[o?e.jsx(je,{size:14}):e.jsx(Ve,{size:14}),n.customize]}),e.jsx("div",{className:"overflow-hidden mb-8 transition-all duration-300 ease-in-out",style:{maxHeight:o?"500px":"0px",opacity:o?1:0},children:e.jsxs("div",{className:"space-y-4 border border-[#1C3829]/5 p-6 bg-[#F7F5F0]",children:[e.jsx(j,{title:n.essential,description:n.essentialDesc,checked:!0,disabled:!0,alwaysOnLabel:n.alwaysOn,onChange:()=>{}}),e.jsx(j,{title:n.functional,description:n.functionalDesc,checked:m,onChange:g}),e.jsx(j,{title:n.analytics,description:n.analyticsDesc,checked:c,onChange:T})]})}),e.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 mb-6",children:[e.jsxs("button",{onClick:t,className:"flex-1 flex items-center justify-center gap-2 py-4 bg-[#1C3829] text-white font-sans text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-[#8B6E2A] transition-colors",children:[e.jsx(q,{size:14}),n.acceptAll]}),o?e.jsxs("button",{onClick:()=>l(m,c),className:"flex-1 flex items-center justify-center gap-2 py-4 border border-[#1C3829] text-[#1C3829] font-sans text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-[#F7F5F0] transition-colors",children:[e.jsx(q,{size:14}),n.saveCustom]}):e.jsxs("button",{onClick:r,className:"flex-1 flex items-center justify-center gap-2 py-4 border border-[#1C3829]/30 text-[#6a6a6a] font-sans text-[11px] font-bold tracking-[0.2em] uppercase hover:border-[#1C3829] hover:text-[#1C3829] transition-colors",children:[e.jsx(he,{size:14}),n.rejectAll]})]}),e.jsxs("div",{className:"flex gap-4 font-sans text-[11px] text-[#6a6a6a]",children:[e.jsx(v,{to:s.datenschutz,className:"hover:text-[#7A5F20] transition-colors underline-offset-2 hover:underline",onClick:r,children:n.privacyLink}),e.jsx("span",{children:"·"}),e.jsx(v,{to:s.impressum,className:"hover:text-[#7A5F20] transition-colors underline-offset-2 hover:underline",onClick:r,children:n.imprintLink})]})]})}),e.jsx("style",{children:`
        @keyframes cookieFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes cookieSlideUp {
          from { transform: translateY(80px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `})]}):null}function j({title:a,description:i,checked:t,disabled:r=!1,alwaysOnLabel:l,onChange:u}){return e.jsxs("div",{className:"flex items-start justify-between gap-4 py-4 border-b border-[#1C3829]/5 last:border-0",children:[e.jsxs("div",{className:"flex-grow",children:[e.jsx("div",{className:"font-sans text-[13px] font-bold text-[#1C3829] mb-1",children:a}),e.jsx("div",{className:"font-sans text-[12px] text-[#6a6a6a] leading-relaxed",children:i})]}),e.jsx("div",{className:"shrink-0 pt-1",children:r?e.jsx("span",{className:"font-sans text-[10px] font-bold tracking-widest text-[#8B6E2A] uppercase",children:l}):e.jsx("button",{role:"switch","aria-checked":t,"aria-label":a,onClick:()=>u(!t),className:`relative w-12 h-6 rounded-full transition-colors duration-200 focus:outline-none ${t?"bg-[#1C3829]":"bg-[#d4cfc6]"}`,children:e.jsx("span",{className:`absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200 ${t?"translate-x-6":"translate-x-0"}`})})})]})}function fe({data:a,id:i="schema-org-jsonld"}){return h.useEffect(()=>{const t=i;let r=document.getElementById(t);return r||(r=document.createElement("script"),r.id=t,r.type="application/ld+json",document.head.appendChild(r)),r.textContent=JSON.stringify(a),()=>{const l=document.getElementById(t);l&&l.remove()}},[a,i]),null}function ae(){const{pathname:a}=W(),i=a.startsWith("/tr")?"tr":a.startsWith("/de")?"de":null;return i?(h.useEffect(()=>{window.scrollTo(0,0)},[a]),h.useEffect(()=>{i&&(document.documentElement.lang=i)},[i]),e.jsx(ha,{language:i,children:e.jsx(ba,{children:e.jsxs("div",{style:{fontFamily:"var(--font-sans)",margin:0,padding:0,minHeight:"100vh",overflowX:"hidden",display:"flex",flexDirection:"column"},children:[e.jsx(Ae,{}),e.jsx(fe,{}),e.jsx(ca,{}),e.jsx("main",{style:{flex:1},children:e.jsx(we,{})}),e.jsx(ya,{}),e.jsx(fa,{}),e.jsx(va,{})]})})})):e.jsx(Te,{to:"/de",replace:!0})}const ne="/assets/hero-Bn0oq0cB.avif",za="https://calendly.com/hasand9366/30min";function pa(){const a=H(),{t:i,paths:t}=A(),r=l=>{if(l.startsWith("#")){const u=document.querySelector(l);u&&u.scrollIntoView({behavior:"smooth"})}else a(l)};return e.jsxs("section",{className:"relative min-h-screen bg-[#1C3829] overflow-hidden flex flex-col justify-center pt-40 pb-0 lg:pt-0",children:[e.jsx("style",{children:`
        @keyframes heroImageIn { from { opacity: 0; } to { opacity: 1; } }
      `}),e.jsx("div",{className:"absolute inset-0 z-0",children:e.jsxs("div",{className:"absolute inset-0 z-0 overflow-hidden opacity-100 transition-opacity duration-500",children:[e.jsx("div",{className:"absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(to_right,#B8963E_1px,transparent_1px),linear-gradient(to_bottom,#B8963E_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]"}),e.jsx("div",{className:"absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#1C3829]/70 via-[#1C3829]/40 to-[#1a3326] pointer-events-none z-0"}),e.jsxs("div",{className:"absolute inset-0 z-0 lg:hidden","aria-hidden":"true",children:[e.jsx("img",{src:ne,alt:"",width:1024,height:1280,className:"w-full h-full object-cover object-top opacity-30 mix-blend-overlay"}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#1C3829] via-[#1C3829]/80 to-transparent"})]})]})}),e.jsx("div",{className:"hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/5 pointer-events-none","aria-hidden":"true"}),e.jsxs("div",{className:"relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center flex-grow py-12 lg:py-20",children:[e.jsxs("div",{className:"lg:col-span-5 flex flex-col justify-center z-20",children:[e.jsxs("div",{className:"flex items-center gap-4 mb-8",children:[e.jsx("span",{className:"w-12 h-[1px] bg-[#8B6E2A]"}),e.jsx("span",{className:"font-sans text-[11px] font-bold tracking-[0.2em] text-[#7A5F20] uppercase",children:"Mannheim · Ankara"})]}),e.jsxs("h1",{className:"font-serif text-5xl md:text-[4.8rem] lg:text-[5.2rem] font-medium leading-[1] text-white mb-8 tracking-tight",children:[e.jsx("span",{className:"block text-white/80 mb-3 font-normal text-2xl md:text-4xl lg:text-[2.8rem] tracking-normal",children:i("hero_title_pre")}),i("hero_title_main")]}),e.jsx("div",{className:"w-24 h-[2px] bg-[#8B6E2A] mb-8"}),e.jsx("p",{className:"font-serif text-2xl md:text-[28px] font-light italic text-white/90 leading-snug mb-8 max-w-lg",children:i("hero_subtitle")}),e.jsx("p",{className:"font-sans text-[15px] font-light text-white/60 leading-relaxed max-w-md mb-12",children:i("hero_description")}),e.jsxs("div",{className:"flex flex-wrap gap-5",children:[e.jsxs("button",{onClick:()=>window.open(za,"_blank"),"aria-label":i("hero_cta_primary"),className:"group relative overflow-hidden bg-[#8B6E2A] text-white font-sans text-[11px] font-bold tracking-[0.15em] uppercase px-10 py-5 transition-all hover:bg-[#7A5F20] flex items-center gap-3",children:[i("hero_cta_primary"),e.jsx(w,{className:"w-4 h-4 transition-transform group-hover:translate-x-1","aria-hidden":"true"})]}),e.jsx("button",{onClick:()=>r(t.services),"aria-label":i("hero_cta_secondary"),className:"group border border-white/20 text-white hover:border-[#8B6E2A] hover:text-[#7A5F20] font-sans text-[11px] font-bold tracking-[0.15em] uppercase px-10 py-5 transition-all bg-white/5 backdrop-blur-sm",children:i("hero_cta_secondary")})]})]}),e.jsx("div",{className:"lg:col-span-7 relative hidden md:flex justify-center lg:justify-end",style:{animation:"heroImageIn 0.8s ease 0.2s both"},children:e.jsxs("div",{className:"relative w-full max-w-[480px] lg:max-w-[500px] xl:max-w-[540px] aspect-[4/5] z-10 mt-12 lg:mt-32",children:[e.jsx("div",{className:"absolute -top-5 -right-5 w-full h-full border border-[#8B6E2A]/40 z-0 transition-transform duration-700 hover:translate-x-2 hover:-translate-y-2"}),e.jsxs("div",{className:"relative w-full h-full bg-[#152a1e] border border-white/10 overflow-hidden z-10 shadow-2xl",children:[e.jsx("img",{src:ne,alt:"Avukat Hasan Doğru - Doğru Kanzlei Mannheim",width:540,height:675,fetchPriority:"high",decoding:"async",className:"w-full h-full object-cover object-top opacity-90 transition-transform duration-1000 hover:scale-105"}),e.jsx("div",{className:"absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-[#1C3829] via-[#1C3829]/60 to-transparent opacity-90"}),e.jsxs("div",{className:"absolute bottom-0 left-0 right-0 p-8 border-t border-[#8B6E2A]/20 bg-[#1C3829]/40 backdrop-blur-md",children:[e.jsxs("div",{className:"font-serif text-2xl font-medium text-white mb-2 tracking-wide",children:[i("hero_title_pre")," Hasan Doğru"]}),e.jsx("div",{className:"font-sans text-[11px] tracking-[0.2em] uppercase text-[#7A5F20]",children:i("lawyer_role")})]})]})]})})]})]})}const Ta="/assets/tanima-vd2xoGN-.avif",Aa="/assets/migration-G7ApS8jw.avif",wa="/assets/inheritance-CD7T1bo4.avif",xa="/assets/custody-D3gHhtt3.avif",Sa="/assets/criminal-BOLXiXxA.avif",Da=`
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
`;function Ea(a){h.useEffect(()=>{const i=a.current;if(!i)return;const t=i.querySelectorAll(".fade-in-card"),r=new IntersectionObserver(l=>{l.forEach(u=>{u.isIntersecting&&(u.target.classList.add("visible"),r.unobserve(u.target))})},{threshold:.1});return t.forEach(l=>r.observe(l)),()=>r.disconnect()},[a])}function Ba(){const{t:a,language:i,paths:t}=A(),r=h.useRef(null);Ea(r);const l=S.find(k=>k.id==="migrationsrecht"),u=S.find(k=>k.id==="tanima-ve-tenfiz"),s=S.find(k=>k.id==="strafrecht"),n=S.find(k=>k.id==="erbrecht"),o=S.find(k=>k.id==="sorgerecht");return e.jsxs("section",{id:"hizmetler",className:"bg-[#FDFCFB] py-16 md:py-24 px-6",children:[e.jsx("style",{children:Da}),e.jsxs("div",{className:"max-w-[1200px] mx-auto",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16",children:[e.jsxs("div",{className:"max-w-xl",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("div",{className:"w-8 h-[1px] bg-[#8B6E2A]"}),e.jsx("span",{className:"font-sans text-[9px] font-bold tracking-[0.25em] text-[#7A5F20] uppercase",children:a("practice_badge")})]}),e.jsxs("h2",{className:"font-serif text-4xl md:text-5xl text-[#1C3829] leading-tight",children:[a("practice_title")," ",e.jsx("br",{})," ",e.jsx("em",{className:"italic font-normal",children:a("practice_subtitle")})]})]}),e.jsxs(v,{to:t.services,className:"group inline-flex items-center gap-3 font-sans text-[10px] font-bold tracking-[0.2em] text-[#1C3829] uppercase border-b border-black/10 pb-1 hover:border-[#8B6E2A] transition-all",children:[a("practice_view_all")," ",e.jsx(Ie,{size:14,className:"group-hover:translate-x-1 transition-transform"})]})]}),e.jsxs("div",{ref:r,className:"grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[minmax(260px,auto)]",children:[u&&e.jsx(v,{to:t.service(u.id),className:"md:col-span-3 group block",children:e.jsxs("div",{className:"fade-in-card h-full bg-white p-10 md:p-14 border-l-[3px] border-[#8B6E2A] flex flex-col justify-center relative transition-all duration-500 hover:shadow-xl hover:shadow-black/[0.02] overflow-hidden",children:[e.jsxs("div",{className:"md:hidden absolute inset-0 z-0","aria-hidden":"true",children:[e.jsx("img",{src:Ta,alt:i==="tr"?"Tanıma ve Tenfiz hizmeti görseli":"Anerkennung und Vollstreckung Dienstleistungsbild",width:600,height:400,loading:"lazy",decoding:"async",className:"w-full h-full object-cover opacity-60"}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#1C3829] via-[#1C3829]/70 to-transparent"})]}),e.jsxs("div",{className:"relative z-10",children:[e.jsx("div",{className:"mb-8",children:(()=>{const k=u.icon;return k?e.jsx(k,{size:32,strokeWidth:1,className:"text-[#8B6E2A]","aria-hidden":"true"}):null})()}),e.jsx("h3",{className:"font-serif text-3xl md:text-4xl text-white md:text-[#1C3829] mb-6",children:i==="tr"?u.titleTR:u.title}),e.jsx("p",{className:"font-sans text-[15px] text-white/90 md:text-[#6a6a6a] leading-relaxed font-light max-w-2xl",children:i==="tr"?u.description:u.descriptionDE}),e.jsx("div",{className:"absolute bottom-10 right-10 text-white md:text-[#1C3829] opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-x-1",children:e.jsx(w,{size:20,"aria-hidden":"true"})})]})]})}),l&&e.jsx(v,{to:t.service(l.id),className:"md:col-span-1 group block",children:e.jsxs("div",{className:"fade-in-card h-full bg-[#F2F2F0] p-8 flex flex-col justify-center relative transition-all duration-500 hover:bg-[#ebebe9] overflow-hidden",children:[e.jsxs("div",{className:"md:hidden absolute inset-0 z-0","aria-hidden":"true",children:[e.jsx("img",{src:Aa,alt:"",width:600,height:400,loading:"lazy",decoding:"async",className:"w-full h-full object-cover opacity-60"}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#1C3829] via-[#1C3829]/70 to-transparent"})]}),e.jsxs("div",{className:"relative z-10",children:[e.jsx("h3",{className:"font-serif text-xl text-white md:text-[#1C3829] mb-4",children:i==="tr"?l.titleTR:l.title}),e.jsx("p",{className:"font-sans text-[13px] text-white/90 md:text-[#6a6a6a] leading-relaxed font-light line-clamp-4",children:i==="tr"?l.description:l.descriptionDE}),e.jsx("div",{className:"mt-6 text-white md:text-[#1C3829] group-hover:text-[#B8963E] transition-all duration-500 group-hover:translate-x-1",children:e.jsx(w,{size:18,strokeWidth:1,"aria-hidden":"true"})})]})]})}),n&&e.jsx(v,{to:t.service(n.id),className:"md:col-span-1 group block",children:e.jsxs("div",{className:"fade-in-card h-full bg-[#F2F2F0] p-8 flex flex-col justify-center relative transition-all duration-500 hover:bg-[#ebebe9] overflow-hidden",children:[e.jsxs("div",{className:"md:hidden absolute inset-0 z-0","aria-hidden":"true",children:[e.jsx("img",{src:wa,alt:"",width:600,height:400,loading:"lazy",decoding:"async",className:"w-full h-full object-cover opacity-60"}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#1C3829] via-[#1C3829]/70 to-transparent"})]}),e.jsxs("div",{className:"relative z-10",children:[e.jsx("h3",{className:"font-serif text-xl text-white md:text-[#1C3829] mb-4",children:i==="tr"?n.titleTR:n.title}),e.jsx("p",{className:"font-sans text-[13px] text-white/90 md:text-[#6a6a6a] leading-relaxed font-light line-clamp-4",children:i==="tr"?n.description:n.descriptionDE}),e.jsx("div",{className:"mt-6 text-white md:text-[#1C3829] group-hover:text-[#B8963E] transition-all duration-500 group-hover:translate-x-1",children:e.jsx(w,{size:18,strokeWidth:1,"aria-hidden":"true"})})]})]})}),o&&e.jsx(v,{to:t.service(o.id),className:"md:col-span-1 group block",children:e.jsxs("div",{className:"fade-in-card h-full bg-[#F2F2F0] p-8 flex flex-col justify-center relative transition-all duration-500 hover:bg-[#ebebe9] overflow-hidden",children:[e.jsxs("div",{className:"md:hidden absolute inset-0 z-0","aria-hidden":"true",children:[e.jsx("img",{src:xa,alt:"",width:600,height:400,loading:"lazy",decoding:"async",className:"w-full h-full object-cover opacity-60"}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#1C3829] via-[#1C3829]/70 to-transparent"})]}),e.jsxs("div",{className:"relative z-10",children:[e.jsx("h3",{className:"font-serif text-xl text-white md:text-[#1C3829] mb-4",children:i==="tr"?o.titleTR:o.title}),e.jsx("p",{className:"font-sans text-[13px] text-white/90 md:text-[#6a6a6a] leading-relaxed font-light line-clamp-4",children:i==="tr"?o.description:o.descriptionDE}),e.jsx("div",{className:"mt-6 text-white md:text-[#1C3829] group-hover:text-[#B8963E] transition-all duration-500 group-hover:translate-x-1",children:e.jsx(w,{size:18,strokeWidth:1,"aria-hidden":"true"})})]})]})}),s&&e.jsx(v,{to:t.service(s.id),className:"md:col-span-2 group block",children:e.jsxs("div",{className:"fade-in-card h-full bg-[#1C3829] p-10 md:p-12 flex flex-col justify-center relative overflow-hidden transition-all duration-500 hover:brightness-110",children:[e.jsx("div",{className:"absolute right-[-20px] bottom-[-20px] opacity-[0.03] text-white pointer-events-none hidden md:block",children:(()=>{const k=s.icon;return k?e.jsx(k,{size:200,strokeWidth:.5,"aria-hidden":"true"}):null})()}),e.jsxs("div",{className:"md:hidden absolute inset-0 z-0","aria-hidden":"true",children:[e.jsx("img",{src:Sa,alt:"",width:600,height:400,loading:"lazy",decoding:"async",className:"w-full h-full object-cover opacity-60"}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#1C3829] via-[#1C3829]/70 to-transparent"})]}),e.jsxs("div",{className:"relative z-10",children:[e.jsx("h3",{className:"font-serif text-2xl md:text-3xl text-white mb-6",children:i==="tr"?s.titleTR:s.title}),e.jsx("p",{className:"font-sans text-[14px] text-white/70 leading-relaxed font-light max-w-md",children:i==="tr"?s.description:s.descriptionDE}),e.jsxs("div",{className:"mt-8 inline-flex items-center gap-3 text-[#B8963E] font-sans text-[9px] font-bold tracking-widest uppercase hover:text-white transition-all duration-500 group-hover:translate-x-1",children:[a("practice_view_detail")," ",e.jsx(w,{size:14,"aria-hidden":"true"})]})]})]})})]})]})]})}function Ra(){const{t:a}=A(),i=[{icon:He,title:a("why_us_point_01_title"),description:a("why_us_point_01_desc")},{icon:We,title:a("why_us_point_02_title"),description:a("why_us_point_02_desc")},{icon:Ne,title:a("why_us_point_03_title"),description:a("why_us_point_03_desc")},{icon:me,title:a("why_us_point_04_title"),description:a("why_us_point_04_desc")}];return e.jsxs("section",{id:"neden-biz",className:"whyus-section",style:{background:"#1C3829",position:"relative",overflow:"hidden"},children:[e.jsx("div",{style:{position:"absolute",top:0,right:0,width:400,height:400,borderRadius:"50%",background:"radial-gradient(circle, rgba(184,150,62,0.07) 0%, transparent 70%)",transform:"translate(30%, -30%)",pointerEvents:"none"}}),e.jsx("div",{style:{position:"absolute",bottom:0,left:0,width:300,height:300,borderRadius:"50%",background:"radial-gradient(circle, rgba(184,150,62,0.05) 0%, transparent 70%)",transform:"translate(-30%, 30%)",pointerEvents:"none"}}),e.jsxs("div",{style:{maxWidth:1100,margin:"0 auto",position:"relative"},children:[e.jsxs("div",{style:{textAlign:"center",marginBottom:64},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:12,marginBottom:20},children:[e.jsx("div",{style:{width:32,height:1,background:"#B8963E"}}),e.jsx("span",{style:{fontFamily:"var(--font-sans)",fontSize:10,fontWeight:800,letterSpacing:"0.22em",color:"#B8963E",textTransform:"uppercase"},children:a("why_us_badge")}),e.jsx("div",{style:{width:32,height:1,background:"#B8963E"}})]}),e.jsxs("h2",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"clamp(32px, 3.5vw, 44px)",fontWeight:500,color:"#ffffff",lineHeight:1.15,margin:"0 0 20px",textAlign:"center"},children:[a("why_us_title"),e.jsx("br",{}),e.jsx("em",{style:{fontStyle:"italic",fontWeight:400},children:a("why_us_subtitle")})]}),e.jsx("p",{style:{fontFamily:"var(--font-sans)",fontSize:15,fontWeight:500,color:"rgba(255,255,255,0.85)",lineHeight:1.8,maxWidth:500,margin:"0 auto"},children:a("why_us_description")})]}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:2},className:"why-grid",children:i.map((t,r)=>{const l=t.icon;return e.jsxs("div",{style:{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.06)",padding:"44px 40px",position:"relative",transition:"background 0.3s, border-color 0.3s"},className:`why-item-${r+1}`,onMouseEnter:u=>{u.currentTarget.style.background="rgba(255,255,255,0.06)",u.currentTarget.style.borderColor="rgba(184,150,62,0.3)"},onMouseLeave:u=>{u.currentTarget.style.background="rgba(255,255,255,0.03)",u.currentTarget.style.borderColor="rgba(255,255,255,0.06)"},children:[e.jsx("div",{style:{position:"absolute",top:28,right:32,fontFamily:"'Cormorant Garamond', serif",fontSize:14,fontWeight:300,color:"rgba(255,255,255,0.85)",lineHeight:1,userSelect:"none"},children:String(r+1).padStart(2,"0")}),e.jsx("div",{style:{width:52,height:52,border:"1px solid rgba(184,150,62,0.35)",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:28},children:e.jsx(l,{size:22,style:{color:"#B8963E",strokeWidth:1.5}})}),e.jsx("h3",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:26,fontWeight:600,color:"#ffffff",lineHeight:1.2,marginBottom:16},children:t.title}),e.jsx("p",{style:{fontFamily:"var(--font-sans)",fontSize:14,fontWeight:500,color:"rgba(255,255,255,0.8)",lineHeight:1.8,margin:0},children:t.description})]},t.title)})})]}),e.jsx("style",{children:`
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
      `})]})}const B=[5,1,2,3,4,6];function Ma(){const{t:a}=A(),[i,t]=h.useState(0),r=()=>t(s=>s===0?B.length-1:s-1),l=()=>t(s=>s===B.length-1?0:s+1),u=B[i];return e.jsxs("section",{className:"testimonials-section",style:{background:"#F7F5F0"},children:[e.jsxs("div",{style:{maxWidth:1100,margin:"0 auto"},children:[e.jsxs("div",{style:{marginBottom:64},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:20},children:[e.jsx("div",{style:{width:32,height:1,background:"#B8963E"}}),e.jsx("span",{style:{fontFamily:"var(--font-sans)",fontSize:14,fontWeight:500,letterSpacing:"0.22em",color:"#B8963E",textTransform:"uppercase"},children:a("testimonials_badge")})]}),e.jsxs("h2",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"clamp(32px, 3.5vw, 44px)",fontWeight:500,color:"#1C3829",lineHeight:1.15,margin:0},children:[a("testimonials_title"),e.jsx("br",{}),e.jsx("em",{style:{fontStyle:"italic",fontWeight:400},children:a("testimonials_subtitle")})]})]}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 2fr",gap:64,alignItems:"center"},className:"testimonial-grid",children:[e.jsxs("div",{className:"testimonial-nav",children:[e.jsx("div",{className:"testimonial-nav-list",style:{marginBottom:40},children:B.map((s,n)=>e.jsxs("button",{onClick:()=>t(n),className:`testimonial-nav-button ${n===i?"active":""}`,style:{display:"block",width:"100%",background:"none",border:"none",borderLeft:`2px solid ${n===i?"#B8963E":"#d4cfc6"}`,padding:"12px 20px",textAlign:"left",cursor:"pointer",marginBottom:4,transition:"border-color 0.2s"},children:[e.jsx("div",{style:{fontFamily:"var(--font-sans)",fontSize:13,fontWeight:n===i?700:500,color:n===i?"#1C3829":"#9a9a8a",transition:"color 0.2s, font-weight 0.2s"},children:a(`testimonial_${s}_name`)}),e.jsx("div",{style:{fontFamily:"var(--font-sans)",fontSize:11,color:n===i?"#B8963E":"#bbb8b0",marginTop:2,transition:"color 0.2s"},children:a(`testimonial_${s}_area`)})]},s))}),e.jsxs("div",{className:"testimonial-nav-controls",style:{display:"flex",gap:8},children:[e.jsx("button",{onClick:r,"aria-label":"Vorheriges Testimonial",style:{width:44,height:44,border:"1px solid #d4cfc6",background:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",transition:"border-color 0.2s, background 0.2s"},onMouseEnter:s=>{var n;s.currentTarget.style.borderColor="#1C3829",s.currentTarget.style.background="#1C3829",(n=s.currentTarget.querySelector("svg"))==null||n.setAttribute("color","#fff")},onMouseLeave:s=>{var n;s.currentTarget.style.borderColor="#d4cfc6",s.currentTarget.style.background="none",(n=s.currentTarget.querySelector("svg"))==null||n.setAttribute("color","#1C3829")},children:e.jsx(Ge,{size:18,color:"#1C3829"})}),e.jsx("button",{onClick:l,"aria-label":"Nächstes Testimonial",style:{width:44,height:44,border:"1px solid #d4cfc6",background:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",transition:"border-color 0.2s, background 0.2s"},onMouseEnter:s=>{var n;s.currentTarget.style.borderColor="#1C3829",s.currentTarget.style.background="#1C3829",(n=s.currentTarget.querySelector("svg"))==null||n.setAttribute("color","#fff")},onMouseLeave:s=>{var n;s.currentTarget.style.borderColor="#d4cfc6",s.currentTarget.style.background="none",(n=s.currentTarget.querySelector("svg"))==null||n.setAttribute("color","#1C3829")},children:e.jsx(Ce,{size:18,color:"#1C3829"})})]})]}),e.jsxs("div",{className:"testimonial-active-card",style:{background:"#ffffff",position:"relative",borderLeft:"3px solid #B8963E"},children:[e.jsx("div",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:120,fontWeight:400,color:"#f0ece4",lineHeight:.7,marginBottom:24,userSelect:"none"},children:'"'}),e.jsx("div",{style:{display:"flex",gap:4,marginBottom:24},children:Array.from({length:5}).map((s,n)=>e.jsx(Fe,{size:14,style:{fill:"#B8963E",color:"#B8963E"}},n))}),e.jsxs("p",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"clamp(20px, 2.5vw, 22px)",fontWeight:400,fontStyle:"italic",color:"#2a2a2a",lineHeight:1.6,marginBottom:36},children:['"',a(`testimonial_${u}_text`),'"']}),e.jsxs("div",{style:{borderTop:"1px solid #f0ece4",paddingTop:24},children:[e.jsx("div",{style:{fontFamily:"var(--font-sans)",fontSize:13,fontWeight:700,color:"#1C3829",letterSpacing:"0.04em"},children:a(`testimonial_${u}_name`)}),e.jsx("div",{style:{fontFamily:"'Lato', sans-serif",fontSize:13,fontWeight:600,color:"#555555",marginTop:4,letterSpacing:"0.06em"},children:a(`testimonial_${u}_area`)})]})]},i)]})]}),e.jsx("style",{children:`
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
      `})]})}function Ka(){const{t:a,language:i,paths:t}=A();return e.jsxs("section",{id:"blog",className:"hidden md:block",style:{background:"#ffffff",padding:"100px 32px"},children:[e.jsxs("div",{style:{maxWidth:1100,margin:"0 auto"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"flex-end",justifyContent:"space-between",marginBottom:64,flexWrap:"wrap",gap:24},children:[e.jsxs("div",{children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:20},children:[e.jsx("div",{style:{width:32,height:1,background:"#B8963E"}}),e.jsx("span",{style:{fontFamily:"var(--font-sans)",fontSize:15,fontWeight:500,letterSpacing:"0.22em",color:"#B8963E",textTransform:"uppercase"},children:a("blog_badge")})]}),e.jsxs("h2",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"clamp(32px, 3.5vw, 44px)",fontWeight:500,color:"#1C3829",lineHeight:1.15,margin:0},children:[a("blog_title"),e.jsx("br",{}),e.jsx("em",{style:{fontStyle:"italic",fontWeight:400},children:a("blog_subtitle")})]})]}),e.jsxs(v,{to:t.blog,"aria-label":i==="de"?"Alle Blogbeiträge lesen":"Tüm blog yazılarını oku",style:{fontFamily:"var(--font-sans)",fontSize:12,fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",color:"#1C3829",textDecoration:"none",display:"flex",alignItems:"center",gap:8,borderBottom:"1px solid #1C3829",paddingBottom:2,transition:"color 0.2s, border-color 0.2s"},onMouseEnter:r=>{r.currentTarget.style.color="#B8963E",r.currentTarget.style.borderColor="#B8963E"},onMouseLeave:r=>{r.currentTarget.style.color="#1C3829",r.currentTarget.style.borderColor="#1C3829"},children:[i==="de"?"Alle Beiträge lesen":"Tüm yazıları oku",e.jsx(w,{size:14})]})]}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:32},className:"blog-grid",children:N.slice(0,3).map(r=>e.jsx("article",{className:"text-left",children:e.jsxs(v,{to:t.blogPost(r.slug),className:"group block no-justify",style:{textDecoration:"none",textAlign:"left"},children:[e.jsx("div",{style:{overflow:"hidden",marginBottom:24,height:220,background:"#e8e4dc"},children:e.jsx("img",{src:r.image,alt:i==="de"?r.titleDE:r.titleTR,loading:"lazy",style:{width:"100%",height:"100%",objectFit:"cover",display:"block",transition:"transform 0.5s ease"},className:"group-hover:scale-[1.04]"})}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16,marginBottom:14,textAlign:"left"},children:[e.jsx("span",{style:{fontFamily:"var(--font-sans)",fontSize:10,fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",color:"#B8963E"},children:i==="de"?r.categoryDE:r.category}),e.jsx("span",{style:{width:4,height:4,borderRadius:"50%",background:"#d4cfc6",display:"inline-block"}}),e.jsx("span",{style:{fontFamily:"var(--font-sans)",fontSize:12,fontWeight:400,color:"#888680"},children:i==="de"?r.dateDE:r.dateTR})]}),e.jsx("h3",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:22,fontWeight:600,color:"#1C3829",lineHeight:1.3,marginBottom:12,transition:"color 0.2s",textAlign:"left"},className:"group-hover:!text-[#B8963E] no-justify",children:i==="de"?r.titleDE:r.titleTR}),e.jsx("p",{style:{fontFamily:"var(--font-sans)",fontSize:11,fontWeight:700,color:"#5a5a5a",lineHeight:1.7,marginBottom:20,textAlign:"left"},className:"no-justify",children:i==="de"?r.excerptDE:r.excerptTR}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,fontFamily:"'Lato', sans-serif",fontSize:12,fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",color:"#1C3829"},children:[e.jsx("span",{children:a("blog_read_more")}),e.jsx(w,{size:13})]})]})},r.slug))})]}),e.jsx("style",{children:`
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
      `})]})}function _a(){const{t:a,language:i}=A(),{consent:t,openSettings:r}=G(),l=[{city:"Mannheim",country:i==="tr"?"Almanya":"Deutschland",address:`R1 2,3
68161 Mannheim, Deutschland`,phone:"+4917661221210",emails:["info@hasandogru.de","Avukat.hasandogru@outlook.de"],hours:i==="tr"?"Pzt–Cmt: 09:00 – 18:00":"Mo–Sa: 09:00 – 18:00",mapLink:"https://www.google.com/maps/search/?api=1&query=R1+2+3+68161+Mannheim+Deutschland"},{city:"Ankara",country:i==="tr"?"Türkiye":"Türkei",address:`Aşağı Öveçler Mahallesi 1322 Cadde 45/9
Çankaya / Ankara, Türkiye`,phone:"+905332375918",emails:["info@hasandogru.de","Avukat.hasandogru@outlook.de"],hours:i==="tr"?"Pzt–Cum: 09:00 – 18:00":"Mo–Fr: 09:00 – 18:00",mapLink:"https://www.google.com/maps/search/?api=1&query=Aşağı+Öveçler+Mahallesi+1322+Cadde+45/9+Çankaya+Ankara+Türkiye"}];return e.jsxs("section",{id:"iletisim",className:"contact-section",style:{background:"#ffffff"},children:[e.jsxs("div",{style:{maxWidth:1100,margin:"0 auto"},children:[e.jsxs("div",{style:{textAlign:"center",marginBottom:80},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:12,marginBottom:20},children:[e.jsx("div",{style:{width:32,height:1,background:"#B8963E"}}),e.jsx("span",{style:{fontFamily:"var(--font-sans)",fontSize:14,fontWeight:500,letterSpacing:"0.22em",color:"#B8963E",textTransform:"uppercase"},children:a("contact_badge")}),e.jsx("div",{style:{width:32,height:1,background:"#B8963E"}})]}),e.jsxs("h2",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"clamp(32px, 4vw, 52px)",fontWeight:500,color:"#1C3829",lineHeight:1.1,margin:"0 0 16px"},children:[a("contact_title"),e.jsx("br",{}),e.jsx("em",{style:{fontStyle:"italic",fontWeight:400},children:a("contact_subtitle")})]}),e.jsx("p",{style:{fontFamily:"var(--font-sans)",fontSize:16,color:"#6a6a6a",lineHeight:1.8,maxWidth:600,margin:"0 auto"},children:a("contact_description")})]}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:64,alignItems:"start"},className:"contact-grid",children:[e.jsxs("div",{style:{background:"#F7F5F0",padding:48,borderLeft:"4px solid #B8963E"},children:[e.jsx("h3",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:32,color:"#1C3829",marginBottom:16},children:a("contact_direct_title")}),e.jsx("p",{style:{fontFamily:"var(--font-sans)",fontSize:15,color:"#6a6a6a",marginBottom:40,lineHeight:1.6},children:a("contact_direct_p")}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[t.functional?e.jsxs("a",{href:"https://calendly.com/hasand9366/30min",target:"_blank",rel:"noopener noreferrer","aria-label":a("contact_calendly_btn"),style:{display:"flex",alignItems:"center",justifyContent:"center",gap:12,background:"#1C3829",color:"#ffffff",padding:"18px 32px",fontFamily:"var(--font-sans)",fontSize:13,fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",textDecoration:"none",transition:"all 0.3s ease"},onMouseEnter:n=>n.currentTarget.style.background="#8B6E2A",onMouseLeave:n=>n.currentTarget.style.background="#1C3829",children:[e.jsx(U,{size:18}),a("contact_calendly_btn")]}):e.jsxs("button",{onClick:r,"aria-label":"Cookie-Einstellungen öffnen",style:{display:"flex",alignItems:"center",justifyContent:"center",gap:12,background:"#e8e4dc",color:"#6a6a6a",padding:"18px 32px",fontFamily:"var(--font-sans)",fontSize:13,fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",border:"none",cursor:"pointer",width:"100%"},children:[e.jsx(Pe,{size:18}),i==="de"?"Cookie-Einwilligung erforderlich":"Çerez izni gerekli"]}),e.jsxs("a",{href:"https://wa.me/4917661221210",target:"_blank",rel:"noopener noreferrer","aria-label":"Kontakt per WhatsApp",style:{display:"flex",alignItems:"center",justifyContent:"center",gap:12,background:"#ffffff",border:"1px solid #1C3829",color:"#1C3829",padding:"18px 32px",fontFamily:"var(--font-sans)",fontSize:13,fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",textDecoration:"none",transition:"all 0.3s ease"},onMouseEnter:n=>{n.currentTarget.style.background="#1C3829",n.currentTarget.style.color="#ffffff"},onMouseLeave:n=>{n.currentTarget.style.background="#ffffff",n.currentTarget.style.color="#1C3829"},children:[e.jsx(M,{size:18}),a("contact_whatsapp_btn")]})]}),e.jsxs("div",{style:{marginTop:48,borderTop:"1px solid #d4cfc6",paddingTop:32},children:[e.jsx("div",{style:{fontFamily:"var(--font-sans)",fontSize:11,fontWeight:700,color:"#B8963E",letterSpacing:"0.14em",textTransform:"uppercase",marginBottom:16},children:a("contact_languages_badge")}),e.jsx("div",{style:{display:"flex",gap:12},children:["Türkçe","Deutsch","English"].map(n=>e.jsx("span",{style:{fontFamily:"'Lato', sans-serif",fontSize:13,color:"#1C3829",background:"#ffffff",padding:"6px 16px",border:"1px solid #e0ddd5"},children:n},n))})]})]}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr",gap:32},children:l.map((n,o)=>e.jsxs("div",{style:{paddingBottom:o===0?32:0,borderBottom:o===0?"1px solid #f0ece4":"none"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:10,marginBottom:16},children:[e.jsx("h4",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:24,fontWeight:500,color:"#1C3829",margin:0},children:n.city}),e.jsx("span",{style:{fontFamily:"'Lato', sans-serif",fontSize:11,color:"#B8963E",textTransform:"uppercase",letterSpacing:"0.1em"},children:n.country})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsxs("div",{style:{display:"flex",gap:12},children:[e.jsx(V,{size:16,color:"#B8963E",style:{flexShrink:0,marginTop:4}}),e.jsx("div",{style:{fontFamily:"'Lato', sans-serif",fontSize:14,color:"#6a6a6a",lineHeight:1.6,whiteSpace:"pre-line"},children:n.address})]}),e.jsxs("div",{style:{display:"flex",gap:12},children:[e.jsx(M,{size:16,color:"#B8963E",style:{flexShrink:0}}),e.jsx("a",{href:`tel:${n.phone.replace(/\s/g,"")}`,style:{fontFamily:"'Lato', sans-serif",fontSize:14,color:"#4a4a4a",textDecoration:"none",fontWeight:500},children:n.phone})]}),e.jsxs("div",{style:{display:"flex",gap:12},children:[e.jsx(ce,{size:16,color:"#B8963E",style:{flexShrink:0}}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:n.emails.map(k=>e.jsx("a",{href:`mailto:${k}`,style:{fontFamily:"'Lato', sans-serif",fontSize:14,color:"#4a4a4a",textDecoration:"none",transition:"color 0.2s ease"},onMouseEnter:m=>m.currentTarget.style.color="#B8963E",onMouseLeave:m=>m.currentTarget.style.color="#4a4a4a",children:k},k))})]}),e.jsxs("div",{style:{display:"flex",gap:12},children:[e.jsx(U,{size:16,color:"#B8963E",style:{flexShrink:0}}),e.jsx("div",{style:{fontFamily:"'Lato', sans-serif",fontSize:14,color:"#6a6a6a"},children:n.hours})]})]})]},o))})]})]}),e.jsx("style",{children:`
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
      `})]})}const I="https://www.hasandogru.de";function y(a,i,t=!1){const r=t?"name":"property";let l=document.querySelector(`meta[${r}="${a}"]`);l||(l=document.createElement("meta"),l.setAttribute(r,a),document.head.appendChild(l)),l.content=i}function R(a,i,t={}){const r=Object.entries(t).map(([u,s])=>`[${u}="${s}"]`).join("");let l=document.querySelector(`link[rel="${a}"]${r}`);l||(l=document.createElement("link"),l.rel=a,Object.entries(t).forEach(([u,s])=>l.setAttribute(u,s)),document.head.appendChild(l)),l.href=i}function ja(a){h.useEffect(()=>{var u;document.title=a.title,y("description",a.description,!0),a.keywords&&y("keywords",a.keywords,!0);const i=a.canonical||window.location.origin+window.location.pathname;R("canonical",i),y("og:title",a.title),y("og:description",a.description),y("og:url",i),y("og:type",a.ogType||"website"),y("og:locale",a.lang==="de"?"de_DE":"tr_TR"),y("og:locale:alternate",a.lang==="de"?"tr_TR":"de_DE"),y("og:site_name","Doğru Kanzlei");const t=`${I}/logo.png`,r=a.ogImage||t;y("og:image",r),y("twitter:card","summary_large_image",!0),y("twitter:title",a.title,!0),y("twitter:description",a.description,!0),y("twitter:image",r,!0),a.lang,a.alternateLang&&(R("alternate",a.alternateLang.href,{hreflang:a.alternateLang.lang}),R("alternate",i,{hreflang:a.lang}));const l=a.xDefault||(a.lang==="de"?i:(u=a.alternateLang)==null?void 0:u.href);l&&R("alternate",l,{hreflang:"x-default"}),a.noindex?y("robots","noindex, nofollow",!0):y("robots","index, follow",!0)},[a.title,a.description,a.canonical,a.ogImage,a.ogType,a.lang,a.alternateLang,a.noindex])}function Va(a=!0){h.useEffect(()=>{const i="prerender-ready",t=setTimeout(()=>{if(!document.getElementById(i)){const r=document.createElement("div");r.id=i,r.style.display="none",document.body.appendChild(r),document.dispatchEvent(new Event("render-event"))}},2e3);return()=>clearTimeout(t)},[a])}const Ia={"@context":"https://schema.org","@type":["LegalService","LocalBusiness"],name:"Doğru Kanzlei",alternateName:"Avukat Hasan Doğru",url:"https://hasandogru.de",logo:"https://www.hasandogru.de/assets/logo-eRLlm_XN.avif",description:"Türkisches Recht spezialisierte Kanzlei in Mannheim. Beratung in Erbrecht, Familienrecht, Strafrecht und Migrationsrecht zwischen Deutschland und der Türkei.",areaServed:["DE","TR"],availableLanguage:["Turkish","German","English"],priceRange:"$$",telephone:"+4917661221210",email:"info@hasandogru.de",address:{"@type":"PostalAddress",streetAddress:"R1 2,3",addressLocality:"Mannheim",postalCode:"68161",addressCountry:"DE"},geo:{"@type":"GeoCoordinates",latitude:49.4875,longitude:8.466},openingHoursSpecification:{"@type":"OpeningHoursSpecification",dayOfWeek:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],opens:"09:00",closes:"18:00"},sameAs:[]};function ie(){const{language:a}=A();return Va(),ja({title:a==="de"?"Türk Avukat Mannheim | Avukat Mannheim | Avukat Hasan Doğru":"Türk Avukat Mannheim | Mannheim Türk Avukatlar | Avukat Hasan Doğru",description:a==="de"?"Türkischer Anwalt in Mannheim für türkisches Recht. Avukat Hasan Doğru berät türkischstämmige Familien in Mannheim zu Scheidung, Erbrecht und türkischem Familienrecht — ohne Reise in die Türkei.":"Mannheim'da Türk avukat arıyorsanız doğru yerdesiniz. Avukat Hasan Doğru, boşanma, miras ve Türk hukuku konularında Almanya'dan hizmet verir. Türkiye'ye seyahat gerekmez.",lang:a,canonical:`${I}/${a}`,alternateLang:{lang:a==="de"?"tr":"de",href:`${I}/${a==="de"?"tr":"de"}`}}),e.jsxs(e.Fragment,{children:[e.jsx(fe,{data:Ia}),e.jsx(pa,{}),e.jsx(Ba,{}),e.jsx(Ra,{}),e.jsx(Ma,{}),e.jsx(Ka,{}),e.jsx(_a,{})]})}const re=h.lazy(()=>x(()=>import("./Hizmetler-DZsgoOHW.js"),__vite__mapDeps([0,1,2,3,4])).then(a=>({default:a.Hizmetler}))),te=h.lazy(()=>x(()=>import("./ServiceDetail-DCq8Yw2u.js"),__vite__mapDeps([5,1,6,3,2,4])).then(a=>({default:a.ServiceDetail}))),le=h.lazy(()=>x(()=>import("./BlogPage-BFbv8YvU.js"),__vite__mapDeps([7,1,3,2,4])).then(a=>({default:a.BlogPage}))),se=h.lazy(()=>x(()=>import("./BlogPost-DYgshgG8.js"),__vite__mapDeps([8,1,6,3,2,4])).then(a=>({default:a.BlogPost}))),de=h.lazy(()=>x(()=>import("./Datenschutz-dzLC3xbq.js"),__vite__mapDeps([9,1,4,3])).then(a=>({default:a.Datenschutz}))),ue=h.lazy(()=>x(()=>import("./Impressum-DdYIfwI4.js"),__vite__mapDeps([10,1,4,3])).then(a=>({default:a.Impressum}))),oe=h.lazy(()=>x(()=>import("./AboutPage-CZvsAAPI.js"),__vite__mapDeps([11,1,4,3])).then(a=>({default:a.AboutPage}))),Ha=h.lazy(()=>x(()=>import("./NotFound-uTvfz7Pd.js"),__vite__mapDeps([12,1,3,4])).then(a=>({default:a.NotFound}))),f=a=>i=>e.jsx(h.Suspense,{fallback:e.jsx("div",{className:"min-h-screen bg-[#1C3829]"}),children:e.jsx(a,{...i})}),Wa=xe([{path:"/",loader:()=>d("/de")},{path:"/familienrecht",loader:()=>d("/de/leistungen/familienrecht")},{path:"/erbrecht",loader:()=>d("/de/leistungen/erbrecht")},{path:"/immobilienrecht",loader:()=>d("/de/leistungen/immobilienrecht")},{path:"/scheidungsverfahren",loader:()=>d("/de/leistungen")},{path:"/schuldrecht",loader:()=>d("/de/leistungen")},{path:"/kontakt",loader:()=>d("/de/#iletisim")},{path:"/meine-vision",loader:()=>d("/de/#hakkimizda")},{path:"/blog",loader:()=>d("/de/blog")},{path:"/blogartikel",loader:()=>d("/de/blog")},{path:"/datenschutz",loader:()=>d("/de/datenschutz")},{path:"/impressum",loader:()=>d("/de/impressum")},{path:"/book-online",loader:()=>d("/de/#iletisim")},{path:"/treffen",loader:()=>d("/de/#iletisim")},{path:"/schlüsselthemen",loader:()=>d("/de/leistungen")},{path:"/en/team-3",loader:()=>d("/de/ueber-uns")},{path:"/team-3",loader:()=>d("/de/ueber-uns")},{path:"/en/general-5",loader:()=>d("/de")},{path:"/kopyası-familienrecht",loader:()=>d("/de/leistungen/familienrecht")},{path:"/contact-5",loader:()=>d("/de/#iletisim")},{path:"/contact-8",loader:()=>d("/de/#iletisim")},{path:"/registration",loader:()=>d("/de")},{path:"/tr/familienrecht",loader:()=>d("/tr/hizmetler/aile-hukuku")},{path:"/kopyası-internati",loader:()=>d("/de/leistungen/immobilienrecht")},{path:"/tr/hizmetler/erbrecht",loader:()=>d("/tr/hizmetler/miras-hukuku")},{path:"/tr/hizmetler/familienrecht",loader:()=>d("/tr/hizmetler/aile-hukuku")},{path:"/tr/hizmetler/immobilienrecht",loader:()=>d("/tr/hizmetler/gayrimenkul-hukuku")},{path:"/tr/hizmetler/migrationsrecht",loader:()=>d("/tr/hizmetler/goc-hukuku")},{path:"/tr/hizmetler/sorgerecht",loader:()=>d("/tr/hizmetler/velayet")},{path:"/tr/hizmetler/strafrecht",loader:()=>d("/tr/hizmetler/ceza-hukuku")},{path:"/tr/hizmetler/vollmacht-apostille",loader:()=>d("/tr/hizmetler/vekaletname-ve-apostil")},{path:"/de/blog/vekaletname-rehberi-almanya",loader:()=>d("/de/blog/tuerkische-vekaletname-deutschland")},{path:"/de/blog/veraset-ilami-nedir",loader:()=>d("/de/blog/erbrecht-leitfaden-tuerkei")},{path:"/de/blog/vorladung-haftbefehl-tuerkel",loader:()=>d("/de/blog/vorladung-haftbefehl-tuerkei")},{path:"/author/*",loader:()=>d("/de/ueber-uns")},{path:"/category/*",loader:()=>d("/de/blog")},{path:"/tag/*",loader:()=>d("/de/blog")},{path:"/blog/page/*",loader:()=>d("/de/blog")},{path:"/about",loader:()=>d("/de/ueber-uns")},{path:"/about/*",loader:()=>d("/de/ueber-uns")},{path:"/contact",loader:()=>d("/de/#iletisim")},{path:"/contact-2",loader:()=>d("/de/#iletisim")},{path:"/en/about",loader:()=>d("/de/ueber-uns")},{path:"/en/service",loader:()=>d("/de/leistungen")},{path:"/en/blog",loader:()=>d("/de/blog")},{path:"/en/blog/*",loader:()=>d("/de/blog")},{path:"/en/impressum",loader:()=>d("/de/impressum")},{path:"/en/contact-2",loader:()=>d("/de/#iletisim")},{path:"/tr/contact-2",loader:()=>d("/tr/#iletisim")},{path:"/de/contact-2",loader:()=>d("/de/#iletisim")},{path:"/de/about",loader:()=>d("/de/ueber-uns")},{path:"/de/service",loader:()=>d("/de/leistungen")},{path:"/de/category/*",loader:()=>d("/de/blog")},{path:"/de/tag/*",loader:()=>d("/de/blog")},{path:"/general-clean",loader:()=>d("/de")},{path:"/tr/blogartikel",loader:()=>d("/tr/blog")},{path:"/tr/arbeitsrecht",loader:()=>d("/tr/hizmetler")},{path:"/de/arbeitsrecht",loader:()=>d("/de/leistungen")},{path:"/arbeitsrecht",loader:()=>d("/de/leistungen")},{path:"/en/internationales-erbrecht",loader:()=>d("/de/leistungen/erbrecht")},{path:"/en/arbeitsrecht",loader:()=>d("/de/leistungen")},{path:"/en/erbrecht",loader:()=>d("/de/leistungen/erbrecht")},{path:"/tr/book-online",loader:()=>d("/tr/#iletisim")},{path:"/en/grundstucksrecht",loader:()=>d("/de/leistungen/immobilienrecht")},{path:"/kopyası-familienrecht-1",loader:()=>d("/de/leistungen/familienrecht")},{path:"/en/familienrecht",loader:()=>d("/de/leistungen/familienrecht")},{path:"/en/meine-vision",loader:()=>d("/de/ueber-uns")},{path:"/grundstucksrecht",loader:()=>d("/de/leistungen/immobilienrecht")},{path:"/en/kopyası-arbeitsrecht-im-türkischen-r",loader:()=>d("/de/leistungen")},{path:"/en/kopyası-home-1",loader:()=>d("/de")},{path:"/en/erbschein",loader:()=>d("/de/leistungen/erbrecht")},{path:"/category/service/*",loader:()=>d("/de/leistungen")},{path:"/en/category/service/*",loader:()=>d("/de/leistungen")},{path:"/xmlrpc.php",loader:()=>d("/de")},{path:"/feed",loader:()=>d("/de/blog")},{path:"/comments/feed",loader:()=>d("/de/blog")},{path:"/en/contact",loader:()=>d("/de/#iletisim")},{path:"/de",Component:ae,children:[{index:!0,Component:ie},{path:"leistungen",Component:f(re)},{path:"leistungen/:id",Component:f(te)},{path:"blog",Component:f(le)},{path:"blog/:slug",Component:f(se)},{path:"datenschutz",Component:f(de)},{path:"impressum",Component:f(ue)},{path:"ueber-uns",Component:f(oe)}]},{path:"/tr",Component:ae,children:[{index:!0,Component:ie},{path:"hizmetler",Component:f(re)},{path:"hizmetler/:id",Component:f(te)},{path:"blog",Component:f(le)},{path:"blog/:slug",Component:f(se)},{path:"gizlilik-politikasi",Component:f(de)},{path:"yasal-bilgiler",Component:f(ue)},{path:"hakkimizda",Component:f(oe)}]},{path:"*",Component:f(Ha)}]);function Na(){return e.jsx(Se,{router:Wa})}Ye.createRoot(document.getElementById("root")).render(e.jsx(Na,{}));export{I as S,Va as a,ja as b,fe as c,N as d,e as j,S as s,A as u};
