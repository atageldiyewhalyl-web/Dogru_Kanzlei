import { useState } from "react";
import { useParams, Link } from "react-router";
import { services } from "../data/services";
import { ArrowLeft, ArrowRight, Banknote, CheckCircle2, ChevronDown, FileCheck2, Gavel, Globe2, Scale, Star, UsersRound } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { useSEO, SITE_URL } from "../hooks/useSEO";
import { SchemaOrg } from "../components/SchemaOrg";
import { FAQItem } from "../components/FAQItem";
import { usePrerender } from "../hooks/usePrerender";
import aileHukukuHeroVideo from "../../assets/aile-hukuku-hero.webm";
import mirasHukukuHero from "../../assets/miras-hukuku-hero.avif";
import criminalHero from "../../assets/ceza-hero.avif";
import vekaletnameHero from "../../assets/vekaletname-hero.avif";
import servicesBackground from "../../assets/background-for-services.avif";


const renderFormattedContent = (text: string) => {
  const paragraphs = text.split('\n\n');
  return paragraphs.map((para, i) => {
    const lines = para.split('\n');
    return (
      <div key={i} className={i < paragraphs.length - 1 ? "mb-8 flex flex-col" : "flex flex-col"}>
        {lines.map((line, j) => {
          const trimmed = line.trim();
          if (!trimmed) return null;

          // Headers
          const isHeaderLine = 
            trimmed.includes('Sizin için neler') ||
            trimmed.includes('Was wir für Sie') ||
            trimmed.includes('What we do for you') ||
            trimmed.includes('Warum Doğru') ||
            trimmed.includes('Why Doğru') ||
            trimmed.includes('Neden Doğru');

          if (isHeaderLine) {
            return (
              <h3 key={j} className="font-serif text-[24px] md:text-[28px] text-[#1C3829] mt-8 mb-4 border-b border-[#8B6E2A]/20 pb-3 self-start">
                {trimmed}
              </h3>
            );
          }

          // Bold list items: lines starting with '-' or '•'
          if (trimmed.startsWith('- ') || trimmed.startsWith('• ') || trimmed.startsWith('-') || trimmed.startsWith('•')) {
            const content = trimmed.replace(/^[-•]\s*/, '');
            return (
              <div key={j} className="font-sans font-bold text-[17px] md:text-[19px] text-[#1C3829] mt-6 mb-2 flex items-start gap-3">
                <span className="text-[#8B6E2A] shrink-0 mt-0.5">—</span>
                <span>{content}</span>
              </div>
            );
          }

          // Default text
          return (
            <p key={j} className={`font-light text-[#3a3a3a] leading-[1.8] ${j > 0 ? "mt-2" : ""}`}>
              {trimmed}
            </p>
          );
        })}
      </div>
    );
  });
};

export function ServiceDetail() {
  const { id } = useParams();
  const { language, t, paths } = useLanguage();
  
  // Find service by localized slug
  const service = services.find((s) => s.slugDE === id || s.slugTR === id);

  // Signal ready to prerenderer only if service is found
  usePrerender(!!service);

  const servicesSegment = language === 'de' ? 'leistungen' : language === 'tr' ? 'hizmetler' : 'services';

  useSEO({
    title: service
      ? language === 'de'
        ? service.seoTitleDE || `${service.title} | Avukat Hasan Doğru`
        : language === 'tr'
          ? service.seoTitleTR || `${service.titleTR} | Avukat Hasan Doğru`
          : (service as any).seoTitleEN || `${(service as any).titleEN ?? service.title} | Avukat Hasan Doğru`
      : 'Page not found',
    description: service
      ? language === 'de'
        ? service.seoDescriptionDE || service.descriptionDE
        : language === 'tr'
          ? service.seoDescriptionTR || service.description
          : (service as any).seoDescriptionEN || (service as any).descriptionEN || service.descriptionDE
      : '',
    lang: language,
    canonical: service 
      ? `${SITE_URL}/${language}/${servicesSegment}/${language === 'de' ? service.slugDE : language === 'tr' ? service.slugTR : service.slugDE}` 
      : undefined,
    alternateLangs: service ? [
      { lang: 'de', href: `${SITE_URL}/de/leistungen/${service.slugDE}` },
      { lang: 'de-DE', href: `${SITE_URL}/de/leistungen/${service.slugDE}` },
      { lang: 'de-CH', href: `${SITE_URL}/de/leistungen/${service.slugDE}` },
      { lang: 'de-AT', href: `${SITE_URL}/de/leistungen/${service.slugDE}` },
      { lang: 'tr', href: `${SITE_URL}/tr/hizmetler/${service.slugTR}` },
      { lang: 'en', href: `${SITE_URL}/en/services/${service.slugDE}` },
    ] : undefined,
    xDefault: service ? `${SITE_URL}/de/leistungen/${service.slugDE}` : undefined,
  });

  if (!service) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 bg-[#F7F5F0]">
        <h2 className="font-serif text-3xl text-[#1C3829] mb-4">
          {language === 'de' ? 'Leistung nicht gefunden' : language === 'tr' ? 'Hizmet Bulunamadı' : 'Service Not Found'}
        </h2>
        <Link to={paths.home} className="text-[#B8963E] font-bold flex items-center gap-2">
          <ArrowLeft size={16} /> {language === 'de' ? 'Zur Startseite' : language === 'tr' ? 'Ana Sayfaya Dön' : 'Back to Home'}
        </Link>
      </div>
    );
  }

  const currentIndex = services.findIndex((s) => s.id === service.id);
  const nextService = services[(currentIndex + 1) % services.length];
  const prevService = services[(currentIndex - 1 + services.length) % services.length];

  const Icon = service.icon;
  const svc = service as any;
  const title = language === 'de' ? service.title : language === 'tr' ? service.titleTR : svc.titleEN ?? service.title;
  const altTitle = language === 'de' ? service.titleTR : language === 'tr' ? service.title : service.titleTR;
  const description = language === 'de' ? service.descriptionDE : language === 'tr' ? service.description : svc.descriptionEN ?? service.descriptionDE;
  const detail = language === 'de' ? service.detailDE : language === 'tr' ? service.detail : svc.detailEN ?? service.detailDE;
  const content = language === 'de' ? (service.contentDE || service.content) : language === 'tr' ? service.content : (svc.contentEN || service.contentDE || service.content);
  const isFamilyLawServicePage = service.id === 'familienrecht';
  const isTanimaLandingPage = service.id === 'tanima-ve-tenfiz';
  const isVollmachtLandingPage = service.id === 'vollmacht-apostille';
  const isErbrechtLandingPage = service.id === 'erbrecht';
  const isStrafrechtLandingPage = service.id === 'strafrecht';
  const isFamilyLawLandingPage = (language === 'de' || language === 'tr' || language === 'en') && (isFamilyLawServicePage || isTanimaLandingPage || isVollmachtLandingPage || isErbrechtLandingPage || isStrafrechtLandingPage);
  const isTurkishFamilyLawPage = language === 'tr' && isFamilyLawLandingPage;
  const isEnglishFamilyLawPage = language === 'en' && isFamilyLawLandingPage;
  const familyLawText = (de: string, tr: string, en: string) => (
    isTurkishFamilyLawPage ? tr : isEnglishFamilyLawPage ? en : de
  );
  const heroTitle = isFamilyLawLandingPage
    ? isStrafrechtLandingPage
      ? familyLawText(
        'Strafverteidiger türkisches Recht aus Deutschland',
        "Türkiye'den Mahkeme Celbi mi Aldınız? Almanya'dan Savunuyoruz.",
        'Criminal defence in Turkish law from Germany'
      )
      : isErbrechtLandingPage
      ? familyLawText(
        'Erbrecht Türkei Anwalt für Erbschaft in der Türkei',
        "Türkiye'deki Mirasınızı Almanya'dan Yönetiyoruz",
        'Turkish inheritance lawyer for estates in Turkey'
      )
      : isVollmachtLandingPage
      ? familyLawText(
        'Vollmacht für die Türkei aus Deutschland beantragen',
        'Vekaletname Almanya’dan nasıl çıkarılır?',
        'Power of attorney for Turkey from Germany'
      )
      : isTanimaLandingPage
      ? familyLawText(
        'Scheidung Türkei anerkennen lassen?',
        'Almanya’daki boşanmanız Türkiye’de hâlâ geçerli değil mi?',
        'Need your German divorce recognised in Turkey?'
      )
      : familyLawText(
      'Scheidung oder Familienstreit mit Türkeibezug? Wir lösen das ohne Reise.',
      'Türkiye bağlantılı bir aile uyuşmazlığınız mı var? Seyahate gerek kalmadan çözüyoruz.',
      'Divorce or family dispute with a Turkey connection? We resolve it without travel.'
    )
    : title;
  const heroSubtitle = isFamilyLawLandingPage
    ? isStrafrechtLandingPage
      ? familyLawText(
        'Vorladung, Haftbefehl oder Interpol Red Notice aus der Türkei? Wir prüfen Ihren Status und vertreten Sie im türkischen Strafverfahren ohne Reise.',
        'Türkiye’den mahkeme celbi, tutuklama müzekkeresi veya Interpol arama bülteni mi var? Almanya’dan durumunuzu kontrol ediyor ve Türk ceza sürecini yönetiyoruz.',
        'Summons, arrest warrant or Interpol Red Notice from Turkey? We check your status and represent you in Turkish criminal proceedings without travel.'
      )
      : isErbrechtLandingPage
      ? familyLawText(
        'Immobilien, Bankkonten oder Grundstücke in der Türkei geerbt? Wir regeln den Nachlass vollständig ohne Reise. Die Erbausschlagung-Frist beträgt 3 Monate.',
        'Türkiye’de miras mı kaldı? Veraset ilamı, tapu devri, reddi miras ve saklı pay süreçlerini Almanya’dan yönetiyoruz. Reddi miras süresi 3 aydır.',
        'Inherited property, land or bank accounts in Turkey? We manage the Turkish inheritance process without travel. The inheritance rejection deadline is 3 months.'
      )
      : isVollmachtLandingPage
      ? familyLawText(
        'Generalvollmacht, notarielle Vollmacht und Apostille für türkische Behörden — korrekt vorbereitet, ohne unnötige Reise.',
        'Türkiye için vekaletname, tapu veya miras işlemleri ve apostil Almanya-Türkiye sürecini doğru şekilde hazırlıyoruz.',
        'General powers of attorney, notarised powers and apostilles for Turkish authorities — prepared correctly without unnecessary travel.'
      )
      : isTanimaLandingPage
      ? familyLawText(
        'Ihre Ehe gilt in der Türkei noch als bestehend? Wir führen das Tanıma-Verfahren vollständig durch — ohne Reise.',
        'Türkiye’de hâlâ evli mi görünüyorsunuz? Tanıma ve Tenfiz sürecini seyahate gerek kalmadan sizin için yürütüyoruz.',
        'Still considered married in Turkey? We handle the full Tanıma & Tenfiz procedure without travel.'
      )
      : familyLawText(
      'Deutsch-türkische Scheidung, Sorgerecht, Unterhalt und Tanıma & Tenfiz direkt aus Mannheim und Ankara betreut.',
      'Almanya-Türkiye hattında boşanma, velayet, nafaka ve Tanıma & Tenfiz süreçlerini Mannheim ve Ankara’dan yönetiyoruz.',
      'German-Turkish divorce, custody, maintenance and Tanıma & Tenfiz handled directly from Mannheim and Ankara.'
    )
    : null;
  const whatsappUrl = 'https://wa.me/4917661221210';
  const familyLawConversionCards = [
    {
      title: familyLawText('Scheidung in der Türkei', 'Türkiye’de boşanma davası', 'Divorce in Turkey'),
      text: familyLawText(
        'Wir leiten das türkische Scheidungsverfahren aus Deutschland ein und vertreten Sie per Vollmacht vor türkischen Gerichten.',
        'Türkiye’de boşanma davasını Almanya’dan başlatıyor, vekaletname ile Türk mahkemeleri nezdinde temsil sağlıyoruz.',
        'We initiate Turkish divorce proceedings from Germany and represent you before Turkish courts by power of attorney.'
      ),
      icon: Gavel
    },
    {
      title: familyLawText('Scheidungsanerkennung / Tanıma & Tenfiz', 'Almanya boşanma kararının tanınması / Tanıma & Tenfiz', 'Recognition of divorce / Tanıma & Tenfiz'),
      text: familyLawText(
        'Wir klären, ob Ihre deutsche Scheidung in der Türkei anerkannt oder vollstreckbar gemacht werden muss.',
        'Almanya’daki boşanma kararınızın Türkiye’de tanınması veya tenfiz edilmesi gerekip gerekmediğini netleştiriyoruz.',
        'We clarify whether your German divorce must be recognised or made enforceable in Turkey.'
      ),
      icon: FileCheck2
    },
    {
      title: familyLawText('Sorgerecht', 'Velayet', 'Custody'),
      text: familyLawText(
        'Wir begleiten Sorgerechtsfragen mit Türkeibezug und prüfen, welche Gerichte und Schritte in Ihrem Fall relevant sind.',
        'Türkiye bağlantılı velayet uyuşmazlıklarında hangi mahkeme ve hangi adımların gerekli olduğunu değerlendiriyoruz.',
        'We advise on custody disputes with a Turkey connection and assess which courts and steps matter in your case.'
      ),
      icon: UsersRound
    },
    {
      title: familyLawText('Unterhalt', 'Nafaka', 'Maintenance'),
      text: familyLawText(
        'Wir beraten zu Nafaka, Kindesunterhalt und nachehelichem Unterhalt nach türkischem Recht und zur Durchsetzung in der Türkei.',
        'Tedbir nafakası, iştirak nafakası ve yoksulluk nafakası konularında Türk hukukuna göre değerlendirme ve takip sağlıyoruz.',
        'We advise on Turkish maintenance, child support and post-divorce maintenance, including enforcement in Turkey.'
      ),
      icon: Banknote
    },
    {
      title: familyLawText('Vermögensaufteilung', 'Mal paylaşımı', 'Division of assets'),
      text: familyLawText(
        'Wir prüfen Immobilien, Konten und Vermögen in der Türkei und begleiten die güterrechtliche Auseinandersetzung.',
        'Türkiye’deki taşınmaz, banka hesabı ve malvarlığı değerleri için mal rejimi ve paylaşım sürecini değerlendiriyoruz.',
        'We assess real estate, bank accounts and assets in Turkey and guide the Turkish property-regime process.'
      ),
      icon: Scale
    },
    {
      title: familyLawText('Ohne Reise in die Türkei', 'Türkiye’ye gitmeden süreç yönetimi', 'No travel to Turkey'),
      text: familyLawText(
        'Viele Schritte können über Vollmacht, Konsulat und unsere Standorte in Mannheim und Ankara vollständig aus der Ferne laufen.',
        'Birçok işlem vekaletname, konsolosluk ve Mannheim-Ankara koordinasyonu ile Türkiye’ye gitmeden yürütülebilir.',
        'Many steps can be handled remotely through power of attorney, consular documents and Mannheim-Ankara coordination.'
      ),
      icon: Globe2
    }
  ];
  const familyLawOutcomes = [
    familyLawText('Deutsche Scheidung in der Türkei anerkennen', 'Almanya’daki boşanmanın Türkiye’de tanınması', 'Recognise a German divorce in Turkey'),
    familyLawText('Unterhalt in der Türkei durchsetzen', 'Türkiye’de nafaka takibi', 'Enforce maintenance in Turkey'),
    familyLawText('Sorgerecht mit Türkei-Bezug klären', 'Türkiye bağlantılı velayet sürecini netleştirme', 'Clarify custody with a Turkey connection'),
    familyLawText('Verfahren ohne Reise vorbereiten', 'Türkiye’ye gitmeden dava hazırlığı', 'Prepare proceedings without travelling')
  ];
  const familyLawProcessSteps = [
    {
      step: '01',
      title: familyLawText('Fall schildern', 'Dosyanızı anlatın', 'Describe your case'),
      text: familyLawText(
        'Sie senden uns kurz per WhatsApp, worum es geht: Scheidung, Sorgerecht, Unterhalt oder Anerkennung in der Türkei.',
        'WhatsApp üzerinden kısaca konuyu yazın: boşanma, velayet, nafaka veya Türkiye’de tanıma-tenfiz.',
        'Send us a short WhatsApp message about the issue: divorce, custody, maintenance or recognition in Turkey.'
      )
    },
    {
      step: '02',
      title: familyLawText('Unterlagen prüfen', 'Belgeleri inceleyelim', 'Review the documents'),
      text: familyLawText(
        'Wir prüfen Beschlüsse, Vollmachten, Apostillen oder vorhandene Dokumente und sagen Ihnen, welcher Weg sinnvoll ist.',
        'Karar, kesinleşme şerhi, apostil, vekaletname veya mevcut belgelerinizi inceleyerek doğru yolu belirliyoruz.',
        'We review court orders, powers of attorney, apostilles or existing documents and identify the right path.'
      )
    },
    {
      step: '03',
      title: familyLawText('Vertretung in der Türkei starten', 'Türkiye sürecini başlatalım', 'Start representation in Turkey'),
      text: familyLawText(
        'Wenn eine Beauftragung sinnvoll ist, bereiten wir die nächsten Schritte vor und koordinieren das Verfahren mit der Türkei.',
        'Vekalet ve belgeler hazır olduğunda Türkiye’deki dava veya başvuru sürecini Mannheim ve Ankara’dan koordine ediyoruz.',
        'Once the documents are ready, we coordinate the Turkish court or application process from Mannheim and Ankara.'
      )
    }
  ];
  const familyLawProofPoints = [
    {
      label: '01',
      title: familyLawText('Digitaler Zugang zu türkischen Gerichten', 'Türk mahkemelerine dijital erişim', 'Digital access to Turkish courts'),
      text: familyLawText(
        'Als im UYAP-System registrierter Avukat kann Hasan Doğru türkische Verfahren digital verfolgen, Dokumente einsehen und Schritte aus Deutschland koordinieren.',
        'UYAP sistemine kayıtlı Avukat Hasan Doğru, Türkiye’deki dosyaları dijital olarak takip edebilir ve süreci Almanya’dan koordine edebilir.',
        'As a lawyer registered in the UYAP system, Hasan Doğru can follow Turkish proceedings digitally, review documents and coordinate steps from Germany.'
      )
    },
    {
      label: '02',
      title: familyLawText('Doppelte Zulassung', 'Çifte baro kaydı', 'Dual bar registration'),
      text: familyLawText(
        'Mit Ankara Barosu und Anwaltskammer Karlsruhe (§207 BRAO) vertreten wir Mandanten direkt im türkischen Recht, ohne Kooperationspartner oder Mittelsmann.',
        'Ankara Barosu üyeliği ve Karlsruhe Barosu §207 BRAO kaydı sayesinde Türk hukuku süreçlerini aracısız yürütüyoruz.',
        'With Ankara Bar membership and Karlsruhe Bar registration under §207 BRAO, we handle Turkish-law matters directly.'
      )
    },
    {
      label: '03',
      title: familyLawText('70+ Bewertungen · 5,0 Sterne', '70+ yorum · 5,0 yıldız', '70+ reviews · 5.0 stars'),
      text: familyLawText(
        'Über 70 Mandantenbewertungen mit Bestnote zeigen, dass persönliche, transparente und ergebnisorientierte Betreuung für uns kein Werbesatz ist.',
        '70’ten fazla müvekkil yorumu ve 5,0 yıldız, kişisel ve sonuç odaklı çalışma biçimimizin güçlü bir göstergesidir.',
        'More than 70 client reviews with a 5.0 rating show our focus on personal, transparent and results-oriented support.'
      )
    },
    {
      label: '04',
      title: familyLawText('Deutschlandweit erreichbar', 'Almanya genelinde ulaşılabilir', 'Available throughout Germany'),
      text: familyLawText(
        'Ob Berlin, Hamburg, Köln, München oder Mannheim: Viele familienrechtliche Türkei-Verfahren lassen sich per WhatsApp, Telefon, Video und Vollmacht vorbereiten.',
        'Berlin, Hamburg, Köln, Münih veya Mannheim fark etmez: Birçok aile hukuku süreci WhatsApp, telefon, video ve vekaletname ile hazırlanabilir.',
        'Whether you are in Berlin, Hamburg, Cologne, Munich or Mannheim, many Turkey-related family-law matters can be prepared by WhatsApp, phone, video and power of attorney.'
      )
    },
    {
      label: '05',
      title: familyLawText('Büro in Ankara', 'Ankara’da ofis', 'Office in Ankara'),
      text: familyLawText(
        'Neben dem Standort in Deutschland gibt es ein echtes Büro in Ankara. Das schafft direkten Zugang zu türkischen Gerichten, Notaren und Behörden, wenn schnelles Handeln zählt.',
        'Almanya’daki ofisin yanında Ankara’da gerçek bir ofis bulunması, mahkeme, noter ve resmi kurum süreçlerinde doğrudan hareket imkanı sağlar.',
        'Alongside the German office, the Ankara office provides direct access to Turkish courts, notaries and authorities when speed matters.'
      )
    }
  ];
  const familyLawTestimonials = [
    {
      name: 'Hatice Kul',
      area: 'Tanıma & Tenfiz',
      text: familyLawText(
        'Ich möchte mich herzlich bei Herrn Doğru für seine hervorragende Unterstützung in meiner Tanıma ve Tenfiz davası bedanken. Von Anfang an habe ich mich bei ihm sehr gut aufgehoben gefühlt.',
        'Tanıma ve tenfiz davamda Sayın Doğru’nun desteği için içtenlikle teşekkür ederim. En başından itibaren kendimi güvende hissettim.',
        'I sincerely thank Mr Doğru for his excellent support in my Tanıma ve Tenfiz case. From the very beginning, I felt in safe hands.'
      )
    },
    {
      name: 'İnci Şen',
      area: familyLawText('Verfahren in der Türkei', 'Türkiye’de dava süreci', 'Proceedings in Turkey'),
      text: familyLawText(
        'Top Kanzlei, sehr zu empfehlen! Kompetenter, sachlich versierter und empathischer Avukat, der mich bei zwei Verfahren in der Türkei äußerst erfolgreich unterstützt hat.',
        'Harika bir hukuk bürosu, kesinlikle tavsiye ederim. Türkiye’deki iki davamda beni son derece başarılı şekilde destekledi.',
        'Excellent law office, highly recommended. He supported me very successfully in two proceedings in Turkey.'
      )
    },
    {
      name: 'Tuğçe Garip',
      area: familyLawText('Deutschland-Türkei Bezug', 'Almanya-Türkiye bağlantısı', 'Germany-Turkey matter'),
      text: familyLawText(
        'Herr Hasan hat den Prozess aufmerksam verfolgt und mit seinem Wissen und seiner Erfahrung sehr detaillierte Informationen über die Verfahren meines Falls sowohl in der Türkei als auch in Deutschland gegeben.',
        'Hasan Bey süreci dikkatle takip etti ve davamın hem Türkiye hem Almanya tarafı hakkında çok detaylı bilgi verdi.',
        'Hasan followed the process attentively and gave very detailed information about both the Turkish and German sides of my case.'
      )
    }
  ];
  const tanimaConversionCards = [
    {
      title: familyLawText('Deutsche Scheidung anerkennen', 'Alman boşanmasını tanıtmak', 'Recognise a German divorce'),
      text: familyLawText(
        'Wir führen das Tanıma-Verfahren, damit Ihre deutsche Scheidung in der Türkei rechtlich wirksam wird.',
        'Almanya’daki boşanma kararınızın Türkiye’de hukuken geçerli sayılması için Tanıma sürecini yürütüyoruz.',
        'We conduct the Tanıma procedure so your German divorce becomes legally effective in Turkey.'
      ),
      icon: FileCheck2
    },
    {
      title: familyLawText('Tenfiz bei Unterhalt & Sorgerecht', 'Nafaka ve velayet için Tenfiz', 'Tenfiz for maintenance and custody'),
      text: familyLawText(
        'Wenn Unterhalt, Sorgerecht oder Vermögen vollstreckt werden müssen, prüfen und führen wir das Tenfiz-Verfahren.',
        'Nafaka, velayet veya mal paylaşımı hükümleri uygulanacaksa Tenfiz gerekip gerekmediğini değerlendiriyoruz.',
        'If maintenance, custody or asset provisions must be enforced, we assess and conduct the Tenfiz procedure.'
      ),
      icon: Scale
    },
    {
      title: familyLawText('Unterlagen vollständig vorbereiten', 'Belgeleri eksiksiz hazırlamak', 'Prepare the documents'),
      text: familyLawText(
        'Scheidungsbeschluss, Rechtskraftvermerk, Apostille, Übersetzung und Vollmacht werden strukturiert geprüft.',
        'Boşanma kararı, kesinleşme şerhi, apostil, tercüme ve vekaletname eksiksiz şekilde kontrol edilir.',
        'We check the divorce decision, finality note, apostille, translation and power of attorney in a structured way.'
      ),
      icon: Gavel
    },
    {
      title: familyLawText('Keine Reise in die Türkei', 'Türkiye’ye gitmeden süreç', 'No travel to Turkey'),
      text: familyLawText(
        'Mit geeigneter Vollmacht vertreten wir Sie vor türkischen Gerichten und koordinieren die Folgeschritte.',
        'Uygun vekaletname ile Türk mahkemelerinde sizi temsil ediyor ve sonraki adımları koordine ediyoruz.',
        'With a suitable power of attorney, we represent you before Turkish courts and coordinate the follow-up steps.'
      ),
      icon: Globe2
    },
    {
      title: familyLawText('Personenstand aktualisieren', 'Nüfus kaydını güncellemek', 'Update marital status'),
      text: familyLawText(
        'Nach Anerkennung unterstützen wir die Schritte, damit Ihr Personenstand in türkischen Registern aktualisiert wird.',
        'Tanıma kararı sonrası Türkiye’deki nüfus kaydınızın güncellenmesi için gerekli adımları takip ediyoruz.',
        'After recognition, we support the steps needed to update your marital status in Turkish registers.'
      ),
      icon: UsersRound
    },
    {
      title: familyLawText('Kosten & Dauer realistisch klären', 'Süre ve maliyeti netleştirmek', 'Clarify timing and costs'),
      text: familyLawText(
        'Sie erhalten früh eine realistische Einschätzung zu Dokumenten, Dauer, Kosten und möglichen Risiken.',
        'Belgeler, süre, masraflar ve olası riskler konusunda baştan gerçekçi bir değerlendirme sunuyoruz.',
        'You receive an early, realistic assessment of documents, timing, costs and possible risks.'
      ),
      icon: Banknote
    }
  ];
  const tanimaOutcomes = [
    familyLawText('Meine Scheidung gilt nicht in der Türkei', 'Almanya’da boşandım, Türkiye’de geçerli mi?', 'My German divorce is not valid in Turkey'),
    familyLawText('Scheidung Türkei anerkennen', 'Alman boşanmasını Türkiye’de tanıtmak', 'Recognise a German divorce in Turkey'),
    familyLawText('Tanıma oder Tenfiz: welchen Weg brauche ich?', 'Tanıma mı Tenfiz mi gerekiyor?', 'Tanıma or Tenfiz: which route do I need?'),
    familyLawText('Ohne Reise den Personenstand klären', 'Seyahate gerek kalmadan nüfus kaydını düzeltmek', 'Fix marital status without travelling')
  ];
  const tanimaProcessSteps = [
    {
      step: '01',
      title: familyLawText('Fall und Urteil senden', 'Kararınızı gönderin', 'Send the decision'),
      text: familyLawText(
        'Sie schicken uns den Scheidungsbeschluss oder vorhandene Unterlagen per WhatsApp zur ersten Einordnung.',
        'Boşanma kararınızı veya mevcut belgelerinizi WhatsApp üzerinden ilk değerlendirme için gönderirsiniz.',
        'Send us your divorce decision or existing documents on WhatsApp for an initial assessment.'
      )
    },
    {
      step: '02',
      title: familyLawText('Dokumente prüfen', 'Belgeleri inceleyelim', 'Review documents'),
      text: familyLawText(
        'Wir prüfen Rechtskraft, Apostille, Übersetzung, Vollmacht und ob Tanıma oder Tenfiz erforderlich ist.',
        'Kesinleşme, apostil, tercüme, vekaletname ve Tanıma mı Tenfiz mi gerektiğini kontrol ederiz.',
        'We check finality, apostille, translation, power of attorney and whether Tanıma or Tenfiz is required.'
      )
    },
    {
      step: '03',
      title: familyLawText('Verfahren in der Türkei starten', 'Türkiye’de süreci başlatalım', 'Start the Turkish procedure'),
      text: familyLawText(
        'Nach Beauftragung reichen wir den Antrag ein, vertreten Sie vor Gericht und koordinieren die Registeränderung.',
        'Vekalet sonrası başvuruyu yapar, mahkemede sizi temsil eder ve nüfus kaydı adımlarını koordine ederiz.',
        'After instruction, we file the application, represent you in court and coordinate the registry update.'
      )
    }
  ];
  const tanimaProofPoints = [
    {
      label: '01',
      title: familyLawText('Anerkennung ist kein neues Scheidungsverfahren', 'Tanıma yeni bir boşanma davası değildir', 'Recognition is not a new divorce'),
      text: familyLawText(
        'Das Ziel ist nicht die erneute Scheidung, sondern die rechtliche Wirksamkeit des deutschen Urteils in der Türkei.',
        'Amaç yeniden boşanmak değil, Almanya kararının Türkiye’de hukuken geçerli hale gelmesidir.',
        'The goal is not to divorce again, but to make the German decision legally effective in Turkey.'
      )
    },
    {
      label: '02',
      title: familyLawText('Dokumentfehler kosten Monate', 'Belge hataları aylar kaybettirebilir', 'Document errors cost months'),
      text: familyLawText(
        'Fehlende Apostillen, unklare Rechtskraftvermerke oder falsche Übersetzungen verzögern Tanıma-Verfahren häufig.',
        'Eksik apostil, belirsiz kesinleşme şerhi veya hatalı tercüme Tanıma sürecini sıkça geciktirir.',
        'Missing apostilles, unclear proof of finality or incorrect translations often delay recognition proceedings.'
      )
    },
    {
      label: '03',
      title: familyLawText('Direkte Türkei-Kompetenz', 'Doğrudan Türkiye uzmanlığı', 'Direct Turkey expertise'),
      text: familyLawText(
        'Ankara Barosu, §207 BRAO und Ankara-Standort ermöglichen kurze Wege zu türkischen Gerichten und Behörden.',
        'Ankara Barosu, §207 BRAO kaydı ve Ankara ofisi Türk mahkemeleri ve makamlarıyla doğrudan çalışma sağlar.',
        'Ankara Bar membership, §207 BRAO registration and the Ankara office allow direct coordination with Turkish courts and authorities.'
      )
    },
    {
      label: '04',
      title: familyLawText('Deutschlandweit ohne Reise betreut', 'Almanya genelinde seyahatsiz destek', 'Nationwide support without travel'),
      text: familyLawText(
        'Mandanten aus ganz Deutschland können die Vorbereitung per WhatsApp, Telefon, Video und Vollmacht durchführen.',
        'Almanya genelindeki müvekkiller hazırlığı WhatsApp, telefon, video ve vekaletname ile yapabilir.',
        'Clients throughout Germany can prepare the matter by WhatsApp, phone, video and power of attorney.'
      )
    },
    {
      label: '05',
      title: familyLawText('70+ Bewertungen · 5,0 Sterne', '70+ yorum · 5,0 yıldız', '70+ reviews · 5.0 stars'),
      text: familyLawText(
        'Die Bewertungen zeigen: klare Kommunikation, transparente Schritte und verlässliche Begleitung zählen.',
        'Yorumlar; net iletişim, şeffaf adımlar ve güvenilir takibin ne kadar önemli olduğunu gösterir.',
        'The reviews reflect clear communication, transparent steps and reliable guidance.'
      )
    }
  ];
  const vollmachtConversionCards = [
    {
      title: familyLawText('Generalvollmacht Türkei', 'Genel vekaletname Türkiye', 'General power of attorney for Turkey'),
      text: familyLawText(
        'Wir prüfen, ob eine Generalvollmacht für die Türkei sinnvoll ist und welche Befugnisse konkret enthalten sein müssen.',
        'Türkiye için genel vekaletnamenin uygun olup olmadığını ve hangi yetkilerin açıkça yer alması gerektiğini kontrol ediyoruz.',
        'We check whether a general power of attorney for Turkey is suitable and which powers must be included.'
      ),
      icon: FileCheck2
    },
    {
      title: familyLawText('Notarielle Vollmacht Türkei', 'Almanya noter vekaletname', 'Notarised power of attorney for Turkey'),
      text: familyLawText(
        'Wir koordinieren die notarielle Vollmacht Türkei mit Notar, Apostille, Übersetzung und türkischen Anforderungen.',
        'Alman noterinde vekaletname, apostil, tercüme ve Türk makamlarının şartlarını birlikte koordine ediyoruz.',
        'We coordinate notarisation, apostille, translation and Turkish authority requirements.'
      ),
      icon: Gavel
    },
    {
      title: familyLawText('Apostille Türkei Dokumente', 'Apostil Almanya Türkiye', 'Apostille for Turkey documents'),
      text: familyLawText(
        'Apostille Türkei Dokumente: Wir klären die zuständige Stelle und bereiten Urkunden für die Verwendung in der Türkei vor.',
        'Apostil Almanya Türkiye işlemlerinde yetkili makamı ve belgelerin Türkiye’de kullanıma uygunluğunu netleştiriyoruz.',
        'We identify the competent authority and prepare documents for use in Turkey.'
      ),
      icon: Globe2
    },
    {
      title: familyLawText('Vollmacht für Immobilien Türkei', 'Tapu vekaletname Almanya', 'Property power of attorney Turkey'),
      text: familyLawText(
        'Für Kauf, Verkauf, Grundbuch, Tapu-Übertragung oder Verwaltung von Immobilien in der Türkei.',
        'Türkiye’de tapu devri, satış, alım veya gayrimenkul yönetimi için özel vekaletname hazırlığı.',
        'For purchase, sale, land registry transfer or management of property in Turkey.'
      ),
      icon: Scale
    },
    {
      title: familyLawText('Vollmacht für Erbschaft Türkei', 'Miras vekaletname Almanya', 'Inheritance power of attorney Turkey'),
      text: familyLawText(
        'Für Veraset İlamı, Nachlassabwicklung, Grundbuchübertragung und Bankangelegenheiten nach einem Todesfall.',
        'Veraset ilamı, miras işlemleri, tapu devri ve vefat sonrası banka işlemleri için vekaletname.',
        'For probate, estate handling, land registry transfers and banking matters after a death.'
      ),
      icon: UsersRound
    },
    {
      title: familyLawText('Türkische Dokumente beglaubigen', 'Türkçe tercüme ve tasdik', 'Certify Turkish documents'),
      text: familyLawText(
        'Wir begleiten Beglaubigung, Übersetzung und Konsularweg, damit türkische Dokumente richtig verwendet werden können.',
        'Belgelerin Türkiye’de doğru kullanılabilmesi için tercüme, tasdik ve konsolosluk yolunu değerlendiriyoruz.',
        'We guide certification, translation and consular steps so documents can be used correctly.'
      ),
      icon: Banknote
    }
  ];
  const vollmachtOutcomes = [
    familyLawText('Vollmacht für die Türkei aus Deutschland', 'Vekaletname Almanya’dan nasıl çıkarılır', 'Power of attorney for Turkey from Germany'),
    familyLawText('Generalvollmacht Türkei rechtssicher vorbereiten', 'Genel vekaletname Türkiye için doğru hazırlık', 'Prepare a general power of attorney for Turkey'),
    familyLawText('Apostille Türkei Dokumente ohne Umwege', 'Apostil Almanya Türkiye sürecini netleştirme', 'Apostille Turkey documents without detours'),
    familyLawText('Immobilien- und Erbschaftsvollmacht Türkei', 'Tapu ve miras vekaletnamesi Almanya', 'Property and inheritance power of attorney Turkey')
  ];
  const vollmachtProcessSteps = [
    {
      step: '01',
      title: familyLawText('Zweck der Vollmacht klären', 'Vekalet amacını netleştirelim', 'Clarify the purpose'),
      text: familyLawText(
        'Sie schildern kurz, ob es um Immobilien, Erbschaft, Bank, Gericht, Apostille oder Konsulat geht.',
        'Tapu, miras, banka, mahkeme, apostil veya konsolosluk işlemi olup olmadığını kısaca anlatırsınız.',
        'Tell us whether it concerns property, inheritance, banking, court, apostille or consular use.'
      )
    },
    {
      step: '02',
      title: familyLawText('Formulierung & Dokumente prüfen', 'Metin ve belgeleri kontrol edelim', 'Check wording and documents'),
      text: familyLawText(
        'Wir prüfen die erforderlichen Befugnisse, notarielle Form, Apostille, Übersetzung und türkische Akzeptanz.',
        'Gerekli yetkileri, noter formunu, apostili, tercümeyi ve Türk makamlarınca kabul şartlarını kontrol ederiz.',
        'We check required powers, notarial form, apostille, translation and acceptance by Turkish authorities.'
      )
    },
    {
      step: '03',
      title: familyLawText('Vollmacht nutzbar machen', 'Vekaletnameyi kullanılabilir hale getirelim', 'Make it ready to use'),
      text: familyLawText(
        'Wir koordinieren die nächsten Schritte, damit die Vollmacht oder Urkunde in der Türkei genutzt werden kann.',
        'Vekaletname veya belgenin Türkiye’de kullanılabilmesi için sonraki adımları koordine ederiz.',
        'We coordinate the next steps so the power of attorney or document can be used in Turkey.'
      )
    }
  ];
  const vollmachtProofPoints = [
    {
      label: '01',
      title: familyLawText('Türkei-spezifische Formulierungen', 'Türkiye’ye özel yetki metinleri', 'Turkey-specific wording'),
      text: familyLawText(
        'Eine allgemeine deutsche Vollmacht reicht oft nicht. Türkische Behörden verlangen konkrete Befugnisse.',
        'Genel bir Alman vekaletnamesi çoğu zaman yetmez. Türk makamları belirli yetkileri açıkça görmek ister.',
        'A generic German power of attorney is often not enough. Turkish authorities require specific powers.'
      )
    },
    {
      label: '02',
      title: familyLawText('Apostille-Fallen vermeiden', 'Apostil hatalarını önleme', 'Avoid apostille mistakes'),
      text: familyLawText(
        'Wir filtern DIY-Fehler: falsche Stelle, falsche Urkunde, fehlende Übersetzung oder unpassende Beglaubigung.',
        'Yanlış makam, yanlış belge, eksik tercüme veya uygun olmayan tasdik gibi hataların önüne geçiyoruz.',
        'We help avoid DIY errors: wrong authority, wrong document, missing translation or unsuitable certification.'
      )
    },
    {
      label: '03',
      title: familyLawText('Immobilien & Erbschaft im Blick', 'Tapu ve miras odaklı hazırlık', 'Property and inheritance focus'),
      text: familyLawText(
        'Gerade bei Tapu, Erbschaft und Banken muss die Vollmacht den späteren Zweck präzise abdecken.',
        'Özellikle tapu, miras ve banka işlemlerinde vekaletname sonraki amacı net şekilde kapsamalıdır.',
        'For land registry, inheritance and banking matters, the power of attorney must precisely cover the intended use.'
      )
    },
    {
      label: '04',
      title: familyLawText('Deutsch-türkische Koordination', 'Almanya-Türkiye koordinasyonu', 'German-Turkish coordination'),
      text: familyLawText(
        'Wir verbinden deutsche Notar- und Apostille-Schritte mit den Anforderungen türkischer Behörden.',
        'Alman noter ve apostil adımlarını Türk makamlarının şartlarıyla uyumlu hale getiriyoruz.',
        'We align German notarial and apostille steps with Turkish authority requirements.'
      )
    },
    {
      label: '05',
      title: familyLawText('70+ Bewertungen · 5,0 Sterne', '70+ yorum · 5,0 yıldız', '70+ reviews · 5.0 stars'),
      text: familyLawText(
        'Klare Vorbereitung spart Zeit, Rückfragen und Ablehnungen bei türkischen Behörden.',
        'Doğru hazırlık Türk makamlarında zaman kaybını, ek soruları ve ret riskini azaltır.',
        'Clear preparation saves time, follow-up questions and rejection risk with Turkish authorities.'
      )
    }
  ];
  const erbrechtConversionCards = [
    {
      title: familyLawText('Erbschaft Türkei beantragen', 'Türkiye’de miras işlemlerini başlatmak', 'Start inheritance proceedings in Turkey'),
      text: familyLawText(
        'Wir beantragen Veraset İlamı, klären Erbquoten und bereiten die nächsten Schritte für den Nachlass in der Türkei vor.',
        'Veraset ilamı, miras payları ve Türkiye’deki miras sürecinin sonraki adımlarını hazırlıyoruz.',
        'We apply for the Turkish certificate of inheritance, clarify shares and prepare the next steps for the estate in Turkey.'
      ),
      icon: FileCheck2
    },
    {
      title: familyLawText('Erbschein Türkei beantragen', 'Veraset ilamı Almanya’dan almak', 'Obtain Turkish certificate of inheritance'),
      text: familyLawText(
        'Der türkische Erbschein ist Grundlage für Bankkonten, Immobilien, Grundstücke und viele Behördenvorgänge.',
        'Veraset ilamı banka, tapu, arsa ve resmi kurum işlemlerinin temel belgesidir.',
        'The Turkish certificate of inheritance is the basis for bank accounts, property, land and many authority steps.'
      ),
      icon: Gavel
    },
    {
      title: familyLawText('Erbausschlagung Türkei Frist', 'Reddi miras Almanya', 'Inheritance rejection deadline'),
      text: familyLawText(
        'Die Frist zur Erbausschlagung in der Türkei beträgt regelmäßig 3 Monate. Wer sie verpasst, kann für Schulden haften.',
        'Türkiye’de reddi miras süresi genellikle 3 aydır. Süre kaçarsa borçlardan sorumluluk doğabilir.',
        'The deadline to reject an inheritance in Turkey is generally 3 months. Missing it can create liability for debts.'
      ),
      icon: Banknote
    },
    {
      title: familyLawText('Erbschaftssteuer Türkei', 'Veraset vergisi Almanya', 'Inheritance tax in Turkey'),
      text: familyLawText(
        'Wir klären Veraset ve İntikal Vergisi, Fristen und Pflichten für Erben mit Wohnsitz in Deutschland.',
        'Almanya’da yaşayan mirasçılar için veraset ve intikal vergisi, süreler ve yükümlülükleri netleştiriyoruz.',
        'We clarify Turkish inheritance tax, deadlines and obligations for heirs living in Germany.'
      ),
      icon: Scale
    },
    {
      title: familyLawText('Pflichtteil Türkei', 'Saklı pay Almanya', 'Compulsory share in Turkey'),
      text: familyLawText(
        'Bei verletztem Pflichtteil prüfen wir Ansprüche nach türkischem Erbrecht und mögliche Tenkis-Dava-Schritte.',
        'Saklı pay ihlali varsa Türk miras hukukuna göre haklarınızı ve tenkis davası yolunu değerlendiriyoruz.',
        'If compulsory share rights are infringed, we assess claims under Turkish inheritance law and reduction actions.'
      ),
      icon: UsersRound
    },
    {
      title: familyLawText('Doppelstaatsbürgerschaft Erbrecht Türkei', 'Çifte vatandaşlık miras Türkiye', 'Dual citizenship inheritance Turkey'),
      text: familyLawText(
        'Wir prüfen, welches Recht gilt und welche Schritte bei Erbfällen zwischen Deutschland und der Türkei erforderlich sind.',
        'Almanya-Türkiye miraslarında hangi hukukun uygulanacağını ve hangi adımların gerektiğini değerlendiriyoruz.',
        'We assess applicable law and required steps in inheritance matters between Germany and Turkey.'
      ),
      icon: Globe2
    }
  ];
  const erbrechtOutcomes = [
    familyLawText('Erbrecht Türkei Anwalt einschalten', 'Miras avukatı Almanya', 'Turkish inheritance lawyer Germany'),
    familyLawText('Erbschein Türkei beantragen', 'Veraset ilamı Almanya', 'Obtain certificate of inheritance in Turkey'),
    familyLawText('Erbausschlagung Türkei Frist beachten', 'Reddi miras Almanya 3 aylık süre', 'Observe the 3-month inheritance rejection deadline'),
    familyLawText('Pflichtteil und Erbschaftssteuer Türkei klären', 'Saklı pay ve veraset vergisi Türkiye', 'Clarify compulsory share and inheritance tax in Turkey')
  ];
  const erbrechtProcessSteps = [
    {
      step: '01',
      title: familyLawText('Nachlass schildern', 'Mirası anlatın', 'Describe the estate'),
      text: familyLawText(
        'Sie senden uns kurz, ob es um Immobilie, Bankkonto, Grundstück, Schulden, Testament oder Erbausschlagung geht.',
        'Tapu, banka hesabı, arsa, borç, vasiyetname veya reddi miras konusu olup olmadığını kısaca anlatırsınız.',
        'Tell us whether the matter concerns property, bank accounts, land, debts, a will or inheritance rejection.'
      )
    },
    {
      step: '02',
      title: familyLawText('Fristen und Unterlagen prüfen', 'Süreleri ve belgeleri inceleyelim', 'Check deadlines and documents'),
      text: familyLawText(
        'Wir prüfen Veraset İlamı, Vollmacht, Sterbeurkunde, Erbquoten und die 3-Monats-Frist zur Erbausschlagung.',
        'Veraset ilamı, vekaletname, ölüm belgesi, miras payları ve 3 aylık reddi miras süresini kontrol ederiz.',
        'We check the certificate of inheritance, power of attorney, death certificate, shares and the 3-month rejection deadline.'
      )
    },
    {
      step: '03',
      title: familyLawText('Türkei-Verfahren starten', 'Türkiye sürecini başlatalım', 'Start the Turkish process'),
      text: familyLawText(
        'Wir beantragen die notwendigen Schritte in der Türkei und koordinieren Erbschein, Tapu, Steuer und Gerichte.',
        'Türkiye’de gerekli başvuruları yapar; veraset ilamı, tapu, vergi ve mahkeme süreçlerini koordine ederiz.',
        'We file the necessary steps in Turkey and coordinate certificate, land registry, tax and court matters.'
      )
    }
  ];
  const erbrechtProofPoints = [
    {
      label: '01',
      title: familyLawText('3-Monats-Frist als Risiko', '3 aylık süre kritik', '3-month deadline risk'),
      text: familyLawText(
        'Bei Erbausschlagung in der Türkei ist Zeit entscheidend. Wer zu spät reagiert, kann rechtlich als Erbe gelten.',
        'Türkiye’de reddi mirasta zaman kritiktir. Geç kalan kişi hukuken mirasçı sayılabilir.',
        'In Turkish inheritance rejection, timing is critical. Acting too late can mean being treated as heir.'
      )
    },
    {
      label: '02',
      title: familyLawText('Türkisches Erbrecht statt deutsches Bauchgefühl', 'Alman mantığı değil Türk miras hukuku', 'Turkish law, not German assumptions'),
      text: familyLawText(
        'Erbquoten, Pflichtteil, Tapu und Steuer funktionieren in der Türkei anders als viele Erben in Deutschland erwarten.',
        'Miras payı, saklı pay, tapu ve vergi Türkiye’de Almanya’daki beklentilerden farklı işler.',
        'Shares, compulsory rights, land registry and tax work differently in Turkey than many heirs in Germany expect.'
      )
    },
    {
      label: '03',
      title: familyLawText('Direkter Zugang in der Türkei', 'Türkiye’de doğrudan takip', 'Direct access in Turkey'),
      text: familyLawText(
        'Ankara Barosu, §207 BRAO und Standort Ankara helfen bei Gerichten, Notaren, Tapu und Behörden.',
        'Ankara Barosu, §207 BRAO kaydı ve Ankara ofisi mahkeme, noter, tapu ve resmi kurumlarda doğrudan takip sağlar.',
        'Ankara Bar membership, §207 BRAO registration and the Ankara office support court, notary, land registry and authority steps.'
      )
    },
    {
      label: '04',
      title: familyLawText('Ohne Reise aus Deutschland', 'Almanya’dan seyahatsiz işlem', 'No travel from Germany'),
      text: familyLawText(
        'Viele Erbschaftsschritte können per Vollmacht, WhatsApp, Telefon und Video vorbereitet werden.',
        'Birçok miras işlemi vekaletname, WhatsApp, telefon ve video ile hazırlanabilir.',
        'Many inheritance steps can be prepared by power of attorney, WhatsApp, phone and video.'
      )
    },
    {
      label: '05',
      title: familyLawText('70+ Bewertungen · 5,0 Sterne', '70+ yorum · 5,0 yıldız', '70+ reviews · 5.0 stars'),
      text: familyLawText(
        'Gerade in Erbfällen zählt transparente Kommunikation, weil Fristen, Familie und Vermögen zusammenkommen.',
        'Miras dosyalarında süreler, aile ve malvarlığı birlikte olduğu için şeffaf iletişim çok önemlidir.',
        'In inheritance matters, transparent communication matters because deadlines, family and assets all meet.'
      )
    }
  ];
  const strafrechtConversionCards = [
    {
      title: familyLawText('Vorladung Türkei Deutschland', 'Türkiye mahkeme celbi Almanya', 'Summons from Turkey in Germany'),
      text: familyLawText(
        'Wir prüfen die Vorladung, das zugrunde liegende Verfahren und ob vor einer Reise Risiken bestehen.',
        'Mahkeme celbini, dosyanın konusunu ve Türkiye’ye gitmeden önce risk olup olmadığını inceliyoruz.',
        'We review the summons, the underlying proceedings and whether travel would create risk.'
      ),
      icon: FileCheck2
    },
    {
      title: familyLawText('Haftbefehl Türkei', 'Tutuklama müzekkeresi Türkiye', 'Arrest warrant in Turkey'),
      text: familyLawText(
        'Wir klären, ob ein Haftbefehl, Reiseverbot oder sonstiger Eintrag besteht, bevor Sie handeln oder reisen.',
        'Harekete geçmeden veya seyahat etmeden önce tutuklama müzekkeresi, seyahat yasağı veya kayıt olup olmadığını kontrol ediyoruz.',
        'We check whether an arrest warrant, travel ban or other entry exists before you act or travel.'
      ),
      icon: Gavel
    },
    {
      title: familyLawText('Interpol Red Notice Anwalt', 'Interpol arama bülteni Almanya', 'Interpol Red Notice lawyer'),
      text: familyLawText(
        'Bei Interpol-Ausschreibungen prüfen wir die Grundlage und bereiten Schritte zur Überprüfung oder Löschung vor.',
        'Interpol arama bültenlerinde hukuki dayanağı inceliyor, inceleme veya kaldırma adımlarını hazırlıyoruz.',
        'For Interpol notices, we review the basis and prepare steps for review or deletion.'
      ),
      icon: Globe2
    },
    {
      title: familyLawText('Auslieferung Türkei Deutschland', 'İade talebi Almanya Türkiye', 'Extradition Turkey Germany'),
      text: familyLawText(
        'Wenn ein Auslieferungsersuchen droht oder läuft, koordinieren wir die türkische Seite und die Verteidigungsstrategie.',
        'İade talebi ihtimali veya süreci varsa Türkiye tarafını ve savunma stratejisini koordine ediyoruz.',
        'If an extradition request is threatened or active, we coordinate the Turkish side and defence strategy.'
      ),
      icon: Scale
    },
    {
      title: familyLawText('Strafrecht Türkei ohne Reise', 'Türkiye’ye gitmeden ceza dosyası', 'Turkish criminal law without travel'),
      text: familyLawText(
        'Viele Schritte lassen sich per Vollmacht, digitaler Akteneinsicht und Ankara-Koordination vorbereiten.',
        'Birçok adım vekaletname, dijital dosya takibi ve Ankara koordinasyonu ile seyahatsiz hazırlanabilir.',
        'Many steps can be prepared by power of attorney, digital file review and Ankara coordination.'
      ),
      icon: UsersRound
    },
    {
      title: familyLawText('Militärdienst Türkei Anwalt', 'Askerlik kaçağı Almanya avukat', 'Turkish military-service cases'),
      text: familyLawText(
        'Bei Bakaya, Yoklama Kaçağı oder offenen Militärdienstfragen prüfen wir den Status vor der Einreise.',
        'Bakaya, yoklama kaçağı veya askerlik yükümlülüğü konularında Türkiye’ye girişten önce statünüzü kontrol ediyoruz.',
        'For Bakaya, Yoklama Kaçağı or military-service issues, we check your status before entry.'
      ),
      icon: Banknote
    }
  ];
  const strafrechtOutcomes = [
    familyLawText('Vorladung aus der Türkei prüfen', 'Türkiye’den gelen mahkeme celbini incelemek', 'Review a summons from Turkey'),
    familyLawText('Haftbefehl Türkei klären', 'Tutuklama müzekkeresi riskini netleştirmek', 'Clarify an arrest warrant in Turkey'),
    familyLawText('Interpol Red Notice prüfen lassen', 'Interpol arama bültenini kontrol ettirmek', 'Review an Interpol Red Notice'),
    familyLawText('Auslieferung Türkei Deutschland koordinieren', 'Almanya-Türkiye iade sürecini koordine etmek', 'Coordinate extradition between Turkey and Germany')
  ];
  const strafrechtProcessSteps = [
    {
      step: '01',
      title: familyLawText('Status schildern', 'Durumu anlatın', 'Describe the status'),
      text: familyLawText(
        'Sie senden uns per WhatsApp, ob es um Vorladung, Haftbefehl, Interpol, Auslieferung oder Militärdienst geht.',
        'WhatsApp üzerinden konunun mahkeme celbi, tutuklama, Interpol, iade veya askerlik olup olmadığını anlatırsınız.',
        'Send us a WhatsApp message saying whether the matter concerns a summons, arrest warrant, Interpol, extradition or military service.'
      )
    },
    {
      step: '02',
      title: familyLawText('Risiken prüfen', 'Riskleri kontrol edelim', 'Check the risks'),
      text: familyLawText(
        'Wir prüfen Aktenstand, Reise- und Festnahmerisiken und erklären, welche Schritte vor einer Türkei-Reise sinnvoll sind.',
        'Dosya durumunu, seyahat ve gözaltı risklerini inceler, Türkiye’ye gitmeden önce hangi adımların gerekli olduğunu açıklarız.',
        'We check file status, travel and detention risks and explain which steps make sense before travelling to Turkey.'
      )
    },
    {
      step: '03',
      title: familyLawText('Verteidigung starten', 'Savunmayı başlatalım', 'Start the defence'),
      text: familyLawText(
        'Wenn eine Vertretung sinnvoll ist, koordinieren wir die türkische Verteidigung mit Vollmacht, Ankara und den zuständigen Stellen.',
        'Temsil gerekiyorsa vekaletname, Ankara ofisi ve yetkili makamlarla Türk ceza savunmasını koordine ederiz.',
        'If representation is appropriate, we coordinate the Turkish defence by power of attorney, Ankara office and competent authorities.'
      )
    }
  ];
  const strafrechtProofPoints = [
    {
      label: '01',
      title: familyLawText('Türkisches Strafrecht aus der Praxis', 'Türk ceza hukuku uygulamasından bilgi', 'Turkish criminal law in practice'),
      text: familyLawText(
        'Hasan Doğru ist Ankara Barosu Mitglied und kennt türkische Strafverfahren, Behördenwege und Gerichtsabläufe aus praktischer Arbeit.',
        'Avukat Hasan Doğru Ankara Barosu üyesidir ve Türk ceza yargısını, kurum yollarını ve mahkeme süreçlerini uygulamadan bilir.',
        'Hasan Doğru is a member of the Ankara Bar and knows Turkish criminal proceedings, authority channels and court practice from real work.'
      )
    },
    {
      label: '02',
      title: familyLawText('Status prüfen, bevor Sie reisen', 'Seyahatten önce statü kontrolü', 'Check status before travel'),
      text: familyLawText(
        'Bei Vorladung, Haftbefehl oder Militärdienstfragen kann eine ungeprüfte Reise zur Festnahme am Flughafen führen.',
        'Mahkeme celbi, tutuklama müzekkeresi veya askerlik konularında kontrolsüz seyahat havalimanında gözaltı riski doğurabilir.',
        'With summonses, arrest warrants or military-service issues, travelling without a status check can lead to detention at the airport.'
      )
    },
    {
      label: '03',
      title: familyLawText('Interpol und Auslieferung im Blick', 'Interpol ve iade süreçleri', 'Interpol and extradition focus'),
      text: familyLawText(
        'Bei Red Notice, Auslieferungsersuchen oder internationaler Fahndung zählt eine koordinierte Strategie zwischen Deutschland und der Türkei.',
        'Kırmızı bülten, iade talebi veya uluslararası arama varsa Almanya ve Türkiye arasında koordine strateji gerekir.',
        'For Red Notices, extradition requests or international alerts, a coordinated Germany-Turkey strategy matters.'
      )
    },
    {
      label: '04',
      title: familyLawText('Ohne Reise vorbereiten', 'Seyahatsiz hazırlık', 'Prepare without travel'),
      text: familyLawText(
        'Viele Schritte lassen sich per WhatsApp, Telefon, Video, Vollmacht und direkter Ankara-Koordination vorbereiten.',
        'Birçok adım WhatsApp, telefon, video, vekaletname ve Ankara koordinasyonu ile hazırlanabilir.',
        'Many steps can be prepared by WhatsApp, phone, video, power of attorney and direct Ankara coordination.'
      )
    },
    {
      label: '05',
      title: familyLawText('70+ Bewertungen · 5,0 Sterne', '70+ yorum · 5,0 yıldız', '70+ reviews · 5.0 stars'),
      text: familyLawText(
        'Gerade bei Strafrecht zählt ruhige, klare Kommunikation, weil Angst, Fristen und Reiserisiken zusammenkommen.',
        'Ceza dosyalarında korku, süreler ve seyahat riskleri birleştiği için sakin ve net iletişim çok önemlidir.',
        'In criminal-law matters, calm and clear communication matters because anxiety, deadlines and travel risks come together.'
      )
    }
  ];
  const landingConversionCards = isStrafrechtLandingPage ? strafrechtConversionCards : isErbrechtLandingPage ? erbrechtConversionCards : isVollmachtLandingPage ? vollmachtConversionCards : isTanimaLandingPage ? tanimaConversionCards : familyLawConversionCards;
  const landingOutcomes = isStrafrechtLandingPage ? strafrechtOutcomes : isErbrechtLandingPage ? erbrechtOutcomes : isVollmachtLandingPage ? vollmachtOutcomes : isTanimaLandingPage ? tanimaOutcomes : familyLawOutcomes;
  const landingProcessSteps = isStrafrechtLandingPage ? strafrechtProcessSteps : isErbrechtLandingPage ? erbrechtProcessSteps : isVollmachtLandingPage ? vollmachtProcessSteps : isTanimaLandingPage ? tanimaProcessSteps : familyLawProcessSteps;
  const landingProofPoints = isStrafrechtLandingPage ? strafrechtProofPoints : isErbrechtLandingPage ? erbrechtProofPoints : isVollmachtLandingPage ? vollmachtProofPoints : isTanimaLandingPage ? tanimaProofPoints : familyLawProofPoints;
  const landingTestimonials = familyLawTestimonials;
  const landingServicesHeading = isTanimaLandingPage
    ? familyLawText('Was wir im Tanıma-Verfahren übernehmen', 'Tanıma ve Tenfiz sürecinde neler yapıyoruz', 'What we handle in the Tanıma process')
    : isStrafrechtLandingPage
      ? familyLawText('Strafrecht Türkei ohne Reise: Was wir prüfen', 'Türkiye ceza dosyalarında neleri kontrol ediyoruz', 'Turkish criminal law without travel: what we check')
    : isErbrechtLandingPage
      ? familyLawText('Türkisches Erbrecht von Deutschland aus regeln', 'Türkiye miras işlemlerini Almanya’dan yürütüyoruz', 'Turkish inheritance matters handled from Germany')
    : isVollmachtLandingPage
      ? familyLawText('Vollmacht, Apostille und Beglaubigung für die Türkei', 'Vekaletname, apostil ve tasdik işlemleri', 'Power of attorney, apostille and certification for Turkey')
      : familyLawText('Was wir für Sie tun', 'Sizin için neler yapıyoruz', 'What we handle for you');
  const landingInlineLabel = isTanimaLandingPage
    ? familyLawText('Wichtig zu wissen', 'Bilmeniz gereken', 'Important to know')
    : isStrafrechtLandingPage
      ? familyLawText('Vor Reise prüfen', 'Seyahatten önce kontrol', 'Check before travel')
    : isErbrechtLandingPage
      ? familyLawText('Dringende Frist', 'Acil süre', 'Urgent deadline')
    : isVollmachtLandingPage
      ? familyLawText('Nicht jeder Klick ist ein Mandat', 'Önemli ayrım', 'Important distinction')
      : 'Tanıma & Tenfiz';
  const landingInlineTitle = isTanimaLandingPage
    ? familyLawText('Ohne Tanıma gelten Sie in der Türkei weiter als verheiratet.', 'Tanıma yapılmadan Türkiye’de hâlâ evli görünebilirsiniz.', 'Without Tanıma, Turkey may still treat you as married.')
    : isStrafrechtLandingPage
      ? familyLawText('Reisen Sie nicht in die Türkei, bevor Haftbefehl oder Reiseverbot geprüft sind.', 'Tutuklama müzekkeresi veya seyahat yasağı kontrol edilmeden Türkiye’ye gitmeyin.', 'Do not travel to Turkey before arrest warrant or travel-ban risks are checked.')
    : isErbrechtLandingPage
      ? familyLawText('Die Frist zur Erbausschlagung in der Türkei beträgt 3 Monate.', 'Türkiye’de reddi miras süresi 3 aydır.', 'The deadline to reject an inheritance in Turkey is 3 months.')
    : isVollmachtLandingPage
      ? familyLawText('Apostille beantragen ist nicht dasselbe wie eine verwendbare Türkei-Vollmacht.', 'Apostil almak, Türkiye’de kullanılabilir vekaletname hazırlamakla aynı şey değildir.', 'Getting an apostille is not the same as preparing a usable Turkey power of attorney.')
    : familyLawText('Scheidung Türkei anerkennen lassen?', 'Almanya’daki boşanma kararınız Türkiye’de geçerli mi?', 'Need your German divorce recognised in Turkey?');
  const landingInlineText = isTanimaLandingPage
    ? familyLawText(
      'Das kann bei Wiederheirat, Erbschaft, Immobilien, Bankgeschäften oder Unterhalt zu echten Folgeproblemen führen. Genau deshalb ist die Anerkennung nicht nur Formalität, sondern oft der nächste notwendige Schritt nach der Scheidung in Deutschland.',
      'Bu durum yeniden evlenme, miras, taşınmaz devri, banka işlemleri veya nafaka konularında ciddi sorunlara yol açabilir. Bu nedenle Tanıma sadece formalite değil, Almanya’daki boşanmadan sonra çoğu zaman zorunlu adımdır.',
      'This can create real problems with remarriage, inheritance, property transfers, banking or maintenance. Recognition is therefore not just paperwork, but often the necessary next step after a German divorce.'
    )
    : isStrafrechtLandingPage
      ? familyLawText(
        'Ein türkisches Strafverfahren ist kein deutsches Strafrechtsproblem. Bei Vorladung, Haftbefehl Türkei, Interpol Red Notice oder Auslieferung Türkei Deutschland zählt zuerst eine saubere Statusprüfung.',
        'Türkiye’deki ceza dosyası Alman ceza hukuku meselesi değildir. Mahkeme celbi, tutuklama müzekkeresi, Interpol arama bülteni veya iade talebinde ilk adım doğru statü kontrolüdür.',
        'A Turkish criminal case is not a German criminal-law matter. With a summons, Turkish arrest warrant, Interpol Red Notice or extradition request, the first step is a clean status check.'
      )
    : isErbrechtLandingPage
      ? familyLawText(
        'Wer die Frist verpasst, kann nach türkischem Recht als Erbe gelten und im schlimmsten Fall für Schulden des Erblassers haften. Wenn unklar ist, ob der Nachlass überschuldet ist, sollten die Unterlagen sofort geprüft werden.',
        'Süre kaçırılırsa kişi Türk hukukuna göre mirasçı sayılabilir ve bazı durumlarda miras bırakanın borçlarından sorumlu olabilir. Mirasın borçlu olup olmadığı belirsizse belgeler hemen incelenmelidir.',
        'If the deadline is missed, Turkish law may treat you as heir and, in the worst case, liable for debts of the deceased. If the estate may be indebted, the documents should be checked immediately.'
      )
    : isVollmachtLandingPage
      ? familyLawText(
        'Viele suchen nur eine Behörde für eine einfache Apostille. Entscheidend wird es, wenn die Vollmacht in der Türkei für Immobilien, Erbschaft, Bank, Gericht oder Behörden wirklich akzeptiert werden muss.',
        'Birçok kişi sadece basit apostil makamını arar. Asıl önemli olan, vekaletnamenin Türkiye’de tapu, miras, banka, mahkeme veya resmi kurum işlemlerinde gerçekten kabul edilmesidir.',
        'Many people only need a government office for a simple apostille. The real issue is whether the power of attorney will actually be accepted in Turkey for property, inheritance, banking, court or authority matters.'
      )
    : familyLawText(
      'Wenn Sie in Deutschland geschieden sind, gilt diese Scheidung in der Türkei nicht automatisch. Wir prüfen, ob Tanıma, Tenfiz oder ein kombiniertes Verfahren nötig ist.',
      'Almanya’da boşandıysanız, bu karar Türkiye’de kendiliğinden geçerli olmaz. Nüfus kaydınızın güncellenmesi veya nafaka ve velayet hükümlerinin uygulanması için Tanıma, Tenfiz ya da birleşik bir süreç gerekebilir.',
      'If you were divorced in Germany, the decision is not automatically valid in Turkey. We check whether Tanıma, Tenfiz or a combined procedure is required.'
    );
  const landingWhyTitle = isTanimaLandingPage
    ? familyLawText('Warum Mandanten uns mit Tanıma & Tenfiz beauftragen', 'Müvekkiller Tanıma & Tenfiz için neden bizi tercih ediyor?', 'Why clients instruct us for Tanıma & Tenfiz')
    : isStrafrechtLandingPage
      ? familyLawText('Warum Mandanten uns bei türkischem Strafrecht beauftragen', 'Müvekkiller Türk ceza dosyalarında neden bizi tercih ediyor?', 'Why clients instruct us for Turkish criminal law')
    : isErbrechtLandingPage
      ? familyLawText('Warum Mandanten uns im türkischen Erbrecht beauftragen', 'Müvekkiller Türk miras hukuku için neden bizi tercih ediyor?', 'Why clients instruct us for Turkish inheritance law')
    : isVollmachtLandingPage
      ? familyLawText('Warum Mandanten ihre Türkei-Vollmacht mit uns vorbereiten', 'Müvekkiller Türkiye vekaletnamesi için neden bizi tercih ediyor?', 'Why clients prepare Turkey powers of attorney with us')
    : familyLawText('Warum Mandanten aus ganz Deutschland uns beauftragen', 'Almanya genelindeki müvekkiller neden bizi tercih ediyor?', 'Why clients across Germany instruct us');
  const landingWhyText = isTanimaLandingPage
    ? familyLawText(
      'Bei der Anerkennung deutscher Scheidungen in der Türkei entscheidet saubere Dokumentenvorbereitung. Ein fehlender Nachweis oder eine falsche Übersetzung kann das Verfahren unnötig verzögern.',
      'Alman boşanma kararlarının Türkiye’de tanınmasında en kritik nokta belgelerin doğru hazırlanmasıdır. Eksik bir belge veya hatalı tercüme süreci gereksiz yere uzatabilir.',
      'For recognition of German divorce decisions in Turkey, clean document preparation is decisive. A missing proof or incorrect translation can delay the process unnecessarily.'
    )
    : isStrafrechtLandingPage
      ? familyLawText(
        'Bei türkischen Strafverfahren entscheiden Tempo, Statusprüfung und praktische Kenntnis des türkischen Justizsystems. Gerade bei Vorladung, Haftbefehl, Interpol oder Militärdienstfragen brauchen Sie klare Schritte, bevor Sie reisen oder reagieren.',
        'Türk ceza dosyalarında hız, statü kontrolü ve Türk yargı sistemini uygulamada bilmek belirleyicidir. Mahkeme celbi, tutuklama, Interpol veya askerlik konularında seyahat etmeden ya da cevap vermeden önce net adımlar gerekir.',
        'In Turkish criminal proceedings, speed, status checks and practical knowledge of the Turkish justice system are decisive. With summonses, arrest warrants, Interpol or military-service issues, you need clear steps before travelling or responding.'
      )
    : isErbrechtLandingPage
      ? familyLawText(
        'Bei Erbschaften in der Türkei treffen Familienkonflikte, Fristen, Immobilien, Banken und Steuerfragen schnell aufeinander. Entscheidend ist ein Anwalt, der türkisches Erbrecht nicht nur übersetzt, sondern praktisch durchsetzen kann.',
        'Türkiye’de miras dosyalarında aile anlaşmazlıkları, süreler, tapu, banka ve vergi konuları hızla birleşir. Önemli olan Türk miras hukukunu sadece çevirmek değil, uygulamada yürütebilen bir avukattır.',
        'In Turkish inheritance matters, family conflict, deadlines, property, banks and tax questions quickly meet. The key is a lawyer who can apply Turkish inheritance law in practice.'
      )
    : isVollmachtLandingPage
      ? familyLawText(
        'Bei Vollmachten für die Türkei entscheidet nicht nur der Notarstempel. Entscheidend ist, ob Wortlaut, Apostille, Übersetzung und Zweck von türkischen Behörden akzeptiert werden.',
        'Türkiye için vekaletnamede sadece noter onayı yetmez. Metin, apostil, tercüme ve işlem amacı Türk makamlarınca kabul edilecek şekilde hazırlanmalıdır.',
        'For powers of attorney for Turkey, the notarial stamp alone is not enough. Wording, apostille, translation and purpose must be accepted by Turkish authorities.'
      )
    : familyLawText(
      'Bei Scheidung, Sorgerecht und Unterhalt mit Türkeibezug zählt nicht die Nähe zum nächsten Büro, sondern die direkte Verbindung zum türkischen Rechtssystem.',
      'Boşanma, velayet ve nafaka gibi Türkiye bağlantılı konularda önemli olan en yakın ofis değil, Türk hukuk sistemiyle doğrudan çalışabilmektir.',
      'For divorce, custody and maintenance with a Turkey connection, the decisive factor is direct access to the Turkish legal system, not the nearest office.'
    );
  const landingBottomText = isTanimaLandingPage
    ? familyLawText(
      'Schildern Sie kurz per WhatsApp, ob Ihre deutsche Scheidung in der Türkei noch nicht anerkannt ist. Wir prüfen die Unterlagen und sagen Ihnen, welcher Weg sinnvoll ist.',
      'Almanya’daki boşanmanızın Türkiye’de tanınıp tanınmadığını WhatsApp üzerinden kısaca anlatın. Belgelerinizi inceleyip hangi yolun uygun olduğunu söyleyelim.',
      'Briefly tell us on WhatsApp whether your German divorce has not yet been recognised in Turkey. We review the documents and tell you which route makes sense.'
    )
    : isStrafrechtLandingPage
      ? familyLawText(
        'Schildern Sie kurz per WhatsApp, ob es um Vorladung, Haftbefehl, Interpol Red Notice, Auslieferung oder Militärdienst geht. Wir prüfen, welcher nächste Schritt sicher ist.',
        'Mahkeme celbi, tutuklama müzekkeresi, Interpol arama bülteni, iade veya askerlik konusu olup olmadığını WhatsApp üzerinden kısaca anlatın. Güvenli sonraki adımı değerlendirelim.',
        'Briefly tell us on WhatsApp whether the issue concerns a summons, arrest warrant, Interpol Red Notice, extradition or military service. We assess the safest next step.'
      )
    : isErbrechtLandingPage
      ? familyLawText(
        'Schildern Sie kurz per WhatsApp, was in der Türkei geerbt wurde und ob Schulden, Immobilien, Bankkonten oder Fristen im Raum stehen. Wir prüfen den nächsten sinnvollen Schritt.',
        'Türkiye’de ne miras kaldığını, borç, tapu, banka hesabı veya süre olup olmadığını WhatsApp üzerinden kısaca anlatın. Sonraki doğru adımı değerlendirelim.',
        'Briefly tell us on WhatsApp what was inherited in Turkey and whether debts, property, bank accounts or deadlines are involved. We assess the next sensible step.'
      )
    : isVollmachtLandingPage
      ? familyLawText(
        'Schildern Sie kurz per WhatsApp, wofür Sie die Vollmacht oder Apostille in der Türkei benötigen. Wir prüfen, welche Form und welche Schritte sinnvoll sind.',
        'Vekaletname veya apostili Türkiye’de hangi işlem için kullanacağınızı WhatsApp üzerinden kısaca anlatın. Hangi form ve adımların gerekli olduğunu değerlendirelim.',
        'Briefly tell us on WhatsApp what you need the power of attorney or apostille for in Turkey. We assess the right form and next steps.'
      )
    : familyLawText(
      'Schildern Sie kurz Ihre Situation per WhatsApp. Wir prüfen, ob und wie wir Sie bei Scheidung, Sorgerecht, Unterhalt oder Tanıma & Tenfiz unterstützen können.',
      'Durumunuzu WhatsApp üzerinden kısaca anlatın. Boşanma, velayet, nafaka veya Tanıma & Tenfiz konusunda size nasıl yardımcı olabileceğimizi değerlendirelim.',
      'Briefly describe your situation on WhatsApp. We will assess whether and how we can support you with divorce, custody, maintenance or Tanıma & Tenfiz.'
    );
  const landingWhatsappLabel = isTanimaLandingPage
    ? familyLawText('Jetzt per WhatsApp anfragen', 'WhatsApp’tan bilgi alın', 'Ask on WhatsApp')
    : isStrafrechtLandingPage
      ? familyLawText('Strafrecht-Fall per WhatsApp schildern', 'Ceza dosyasını WhatsApp’tan anlatın', 'Describe the criminal case')
    : isErbrechtLandingPage
      ? familyLawText('Erbfall per WhatsApp schildern', 'Miras dosyasını WhatsApp’tan anlatın', 'Describe the inheritance case')
    : isVollmachtLandingPage
      ? familyLawText('Vollmacht per WhatsApp klären', 'WhatsApp’tan vekaletnameyi sorun', 'Ask about the power of attorney')
    : familyLawText('Fall per WhatsApp schildern', 'Dosyanızı WhatsApp’tan anlatın', 'Describe your case on WhatsApp');

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": title,
    "provider": {
      "@type": "LegalService",
      "name": "Doğru Kanzlei",
      "url": "https://hasandogru.de"
    },
    "areaServed": ["DE", "CH", "AT", "TR"],
    "description": description,
    "availableLanguage": ["Turkish", "German"]
  };

  const faqItems = language === 'de' ? service.faqDE : language === 'tr' ? service.faqTR : (svc.faqEN ?? service.faqDE);
  const faqSchema = faqItems && faqItems.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map((faq: any) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": language === 'de' ? "Startseite" : "Ana Sayfa",
        "item": `https://www.hasandogru.de/${language}`
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": language === 'de' ? "Leistungen" : "Hizmetler",
        "item": `https://www.hasandogru.de/${language}/${servicesSegment}`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": title,
        "item": `https://www.hasandogru.de/${language}/${servicesSegment}/${language === 'de' ? service.slugDE : service.slugTR}`
      }
    ]
  };

  const serviceSidebar = (
    <div className="sticky top-32 space-y-10">
      {/* Other Services List */}
      <div className="bg-white p-10 shadow-sm border border-[#1C3829]/5">
        <h4 className="font-serif text-2xl text-[#1C3829] mb-8 pb-4 border-b border-[#1C3829]/5">
          {language === 'de' ? 'Weitere Fachgebiete' : language === 'tr' ? <span lang="tr">Diğer Uzmanlıklar</span> : 'Other Practice Areas'}
        </h4>
        <div className="space-y-3">
          {services.filter(s => s.id !== service.id).map((s) => (
            <Link
              key={s.id}
              to={paths.service(s.id)}
              className="group flex items-center justify-between p-5 border border-[#1C3829]/5 hover:border-[#8B6E2A]/30 hover:bg-[#F7F5F0] transition-all rounded-sm"
            >
              <div className="flex items-center gap-4">
                <s.icon size={18} className="text-[#6a6a6a] group-hover:text-[#7A5F20] transition-colors" />
                <span className="font-sans text-[13px] font-bold tracking-wide text-[#4a4a4a] group-hover:text-[#1C3829] transition-colors">
                  <span lang={language === 'tr' ? 'tr' : language === 'en' ? 'en' : 'de'}>{language === 'de' ? s.title : language === 'tr' ? s.titleTR : (s as any).titleEN ?? s.title}</span>
                </span>
              </div>
              <ArrowRight size={14} className="text-[#8B6E2A]/0 group-hover:text-[#8B6E2A]/100 transition-all -translate-x-2 group-hover:translate-x-0" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-[#F7F5F0] min-h-screen pt-32 pb-24">
      <SchemaOrg data={serviceSchema} />
      <SchemaOrg data={breadcrumbSchema} id="schema-org-breadcrumb" />
      {faqSchema && <SchemaOrg data={faqSchema} id="schema-org-faq" />}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Breadcrumb - Elevated */}
        <nav aria-label="Breadcrumb" className="mb-16">
          <ol className="flex items-center gap-3 font-sans text-[10px] sm:text-xs tracking-[0.2em] uppercase">
            <li>
              <Link to={paths.home} className="text-[#6a6a6a] hover:text-[#B8963E] transition-colors">
                {t("nav_home")}
              </Link>
            </li>
            <li className="text-[#B8963E]/40">/</li>
            <li>
              <Link to={paths.services} className="text-[#6a6a6a] hover:text-[#B8963E] transition-colors">
                {t("nav_services")}
              </Link>
            </li>
            <li className="text-[#B8963E]/40">/</li>
            <li className="text-[#1C3829] font-bold tracking-widest">{title}</li>
          </ol>
        </nav>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header Section - High Prestige */}
          {isFamilyLawLandingPage ? (
            <section className="relative left-1/2 -ml-[50vw] w-screen min-h-[620px] md:min-h-[680px] mb-20 overflow-hidden bg-[#F7F5F0]">
              {isVollmachtLandingPage ? (
                <img
                  className="absolute inset-0 h-full w-full object-cover object-center"
                  src={vekaletnameHero}
                  alt=""
                  aria-hidden="true"
                />
              ) : isStrafrechtLandingPage ? (
                <img
                  className="absolute inset-0 h-full w-full object-cover object-center"
                  src={criminalHero}
                  alt=""
                  aria-hidden="true"
                />
              ) : isErbrechtLandingPage ? (
                <img
                  className="absolute inset-0 h-full w-full object-cover object-center"
                  src={mirasHukukuHero}
                  alt=""
                  aria-hidden="true"
                />
              ) : (
                <video
                  className="absolute inset-0 h-full w-full object-cover object-center"
                  src={aileHukukuHeroVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                  aria-hidden="true"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-r from-[#F7F5F0]/94 via-[#F7F5F0]/68 to-[#F7F5F0]/5" />
              <div className="absolute inset-0 bg-gradient-to-b from-[#F7F5F0]/95 via-[#F7F5F0]/35 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#F7F5F0]/85 via-transparent to-transparent" />

              <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 min-h-[620px] md:min-h-[680px] flex items-center">
                <div className="max-w-[820px] pt-10 pb-16">
                  <span className="font-sans text-[12px] font-bold tracking-[0.25em] uppercase text-[#7A5F20] block mb-5">
                    <span lang="tr">{altTitle}</span>
                  </span>
                  <h1 className="font-serif text-[#1C3829] font-medium tracking-tight text-4xl md:text-5xl lg:text-[64px] leading-[1.08]">
                    {heroTitle}
                  </h1>
                  <p className="font-sans text-lg md:text-xl text-[#2f3430] leading-relaxed max-w-3xl mt-6">
                    {heroSubtitle}
                  </p>
                  <div className="mt-8">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-3 px-8 py-5 bg-[#1C3829] text-white font-sans text-[12px] font-bold tracking-[0.16em] uppercase transition-all hover:bg-[#7A5F20]"
                    >
                      {landingWhatsappLabel}
                      <ArrowRight size={15} />
                    </a>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-8 font-sans text-[12px] md:text-[13px] font-bold tracking-[0.12em] uppercase text-[#1C3829]/75">
                    <span>Ankara Barosu</span>
                    <span className="text-[#8B6E2A]">·</span>
                    <span>§207 BRAO</span>
                    <span className="text-[#8B6E2A]">·</span>
                    <span>{familyLawText('70+ Bewertungen', '70+ yorum', '70+ reviews')}</span>
                    <span className="text-[#8B6E2A]">·</span>
                    <span>{familyLawText('5,0 Sterne', '5,0 yıldız', '5.0 stars')}</span>
                    <span className="text-[#8B6E2A]">·</span>
                    <span>Mannheim & Ankara</span>
                  </div>
                </div>
              </div>
            </section>
          ) : (
            <div className="relative mb-20">
              <div className="flex flex-col md:flex-row md:items-end gap-8 pb-12 border-b border-[#1C3829]/10">
                <div className="w-20 h-20 bg-[#1C3829] flex items-center justify-center rounded-sm shadow-xl shrink-0">
                  <Icon size={40} className="text-[#8B6E2A]" />
                </div>
                <div className="flex-grow">
                  <span className="font-sans text-[12px] font-bold tracking-[0.25em] uppercase text-[#7A5F20] block mb-4">
                    <span lang={language === 'de' ? 'tr' : language === 'en' ? 'tr' : 'de'}>{altTitle}</span>
                  </span>
                  <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#1C3829] font-medium leading-[1.1] tracking-tight">
                    <span lang={language === 'tr' ? 'tr' : 'de'}>{heroTitle}</span>
                  </h1>
                </div>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-24">
            {/* Main Content Area */}
            <div className={isFamilyLawLandingPage ? "lg:col-span-12" : "lg:col-span-8"}>
              <div className="mb-16">
	                <p className="font-serif text-2xl md:text-3xl text-[#1C3829]/90 leading-relaxed italic mb-12 font-light border-l-2 border-[#8B6E2A] pl-8">
	                  <span lang={language === 'tr' ? 'tr' : 'de'}>{description}</span>
	                </p>

	                {isFamilyLawLandingPage ? (
	                  <div className="mb-20">
	                    <div className="flex flex-wrap gap-x-6 gap-y-3 mb-14 border-y border-[#1C3829]/10 py-5">
	                      {landingOutcomes.map((outcome) => (
	                        <div key={outcome} className="flex items-center gap-2">
	                          <span className="w-1.5 h-1.5 bg-[#8B6E2A] rounded-full flex-shrink-0" />
	                          <span className="font-sans text-[12px] md:text-[13px] font-bold leading-relaxed tracking-[0.08em] uppercase text-[#1C3829]/80">
	                            {outcome}
	                          </span>
	                        </div>
	                      ))}
	                    </div>

		                    <section
		                      className="relative left-1/2 -ml-[50vw] w-screen overflow-hidden mb-14 py-12 md:py-16"
		                      style={{
		                        backgroundImage: `linear-gradient(90deg, rgba(247,245,240,0.74), rgba(247,245,240,0.42)), url(${servicesBackground})`,
		                        backgroundSize: 'cover',
		                        backgroundPosition: 'center',
	                      }}
		                    >
		                      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
		                        <div className="flex items-center gap-4 mb-10">
		                          <div className="w-12 h-[1px] bg-[#8B6E2A]" />
		                          <h2 className="font-serif text-3xl text-[#1C3829]">
			                            {landingServicesHeading}
		                          </h2>
		                        </div>

		                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
		                          {landingConversionCards.map((card) => {
		                            const CardIcon = card.icon;
		                            return (
		                            <div key={card.title} className="bg-white/88 backdrop-blur-[1px] p-6 border border-[#1C3829]/5 shadow-sm rounded-sm">
		                              <div className="flex items-start gap-4">
		                                <CardIcon size={23} strokeWidth={1.8} className="text-[#8B6E2A] mt-1 flex-shrink-0" />
		                                <div>
		                                  <h3 className="font-sans text-[16px] font-bold text-[#1C3829] mb-2 tracking-wide">
		                                    {card.title}
		                                  </h3>
		                                  <p className="font-sans text-[14px] text-[#4a4a4a] leading-relaxed">
		                                    {card.text}
		                                  </p>
		                                </div>
		                              </div>
		                            </div>
		                            );
		                          })}
		                        </div>

		                        <div className="mt-10 pt-8 border-t border-[#1C3829]/12 grid grid-cols-1 md:grid-cols-[260px_1fr] gap-6 md:gap-10 items-start">
		                          <span className="font-sans text-[11px] font-bold tracking-[0.2em] uppercase text-[#8B6E2A]">
			                            {landingInlineLabel}
		                          </span>
		                          <div>
		                            <h3 className="font-serif text-2xl md:text-3xl text-[#1C3829] mb-3 leading-tight">
				                              {landingInlineTitle}
		                            </h3>
		                            <p className="font-sans text-[15px] text-[#4a4a4a] leading-relaxed max-w-3xl mb-5">
				                              {landingInlineText}
		                            </p>
			                            {isFamilyLawServicePage && (
			                              <Link
			                                to={paths.service('tanima-ve-tenfiz')}
			                                className="inline-flex items-center gap-2 font-sans text-[12px] font-bold tracking-[0.12em] uppercase text-[#1C3829] transition-colors hover:text-[#8B6E2A]"
			                              >
				                                {familyLawText('Mehr zu Tanıma & Tenfiz', 'Tanıma & Tenfiz hakkında bilgi', 'More about Tanıma & Tenfiz')}
			                                <ArrowRight size={14} />
			                              </Link>
			                            )}
		                          </div>
		                        </div>
		                      </div>
		                    </section>

		                    <section className="mt-14">
	                      <div className="flex items-center gap-4 mb-10">
	                        <div className="w-12 h-[1px] bg-[#8B6E2A]" />
	                        <h2 className="font-serif text-3xl text-[#1C3829]">
		                          {familyLawText('So läuft es ab', 'Süreç nasıl ilerler', 'How the process works')}
	                        </h2>
	                      </div>

	                      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
	                        {landingProcessSteps.map((item) => (
	                          <div key={item.step} className="bg-white border border-[#1C3829]/5 p-7 rounded-sm shadow-sm">
	                            <span className="font-serif text-4xl text-[#8B6E2A] block mb-5">
	                              {item.step}
	                            </span>
	                            <h3 className="font-sans text-[17px] font-bold text-[#1C3829] mb-3 tracking-wide">
	                              {item.title}
	                            </h3>
	                            <p className="font-sans text-[14px] text-[#4a4a4a] leading-relaxed">
	                              {item.text}
	                            </p>
	                          </div>
	                        ))}
	                      </div>
	                    </section>
	                  </div>
	                ) : (
                  <div className="prose-container prose-xl prose-serif max-w-none text-[#3a3a3a] leading-[1.8] font-light mb-20 space-y-8">
                    <span lang={language === 'tr' ? 'tr' : 'de'}>
                      {renderFormattedContent(content || (language === 'de'
                        ? 'In diesem Bereich bieten wir umfassende Rechtsberatung und Vertretung.'
                        : 'Bu alanda kapsamlı hukuki danışmanlık ve temsil hizmetleri sunmaktayız.'))}
                    </span>
                  </div>
                )}
              </div>

              {/* Modern Expertise Cards */}
              {isFamilyLawLandingPage ? (
                <section className="bg-[#EFE9DE] border border-[#1C3829]/10 p-8 md:p-12 mb-20 rounded-sm overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-14 items-start">
                    <div>
                      <span className="font-sans text-[11px] font-bold tracking-[0.22em] uppercase text-[#8B6E2A] block mb-4">
	                        {familyLawText('Warum Doğru Kanzlei', 'Neden Doğru Kanzlei', 'Why Doğru Kanzlei')}
                      </span>
	                      <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-5 text-[#1C3829]">
			                        {landingWhyTitle}
	                      </h2>
	                      <p className="font-sans text-[15px] text-[#4a4a4a] leading-relaxed">
			                        {landingWhyText}
	                      </p>
	                      <div className="grid grid-cols-2 gap-4 mt-8">
	                        <div>
	                          <div className="font-serif text-4xl text-[#8B6E2A] leading-none">70+</div>
		                          <div className="font-sans text-[11px] font-bold tracking-[0.16em] uppercase text-[#1C3829]/70 mt-2">{familyLawText('Bewertungen', 'Yorum', 'Reviews')}</div>
	                        </div>
	                        <div>
	                          <div className="font-serif text-4xl text-[#8B6E2A] leading-none">5,0</div>
		                          <div className="font-sans text-[11px] font-bold tracking-[0.16em] uppercase text-[#1C3829]/70 mt-2">{familyLawText('Sterne', 'Yıldız', 'Stars')}</div>
	                        </div>
	                      </div>
	                    </div>

                    <div className="border-t border-[#1C3829]/15">
                      {landingProofPoints.map((point) => (
                        <div key={point.label} className="grid grid-cols-[52px_1fr] gap-5 py-6 border-b border-[#1C3829]/15">
                          <span className="font-serif text-3xl text-[#8B6E2A] leading-none">
                            {point.label}
                          </span>
                          <div>
                            <h3 className="font-sans text-[16px] font-bold tracking-wide mb-2 text-[#1C3829]">
                              {point.title}
                            </h3>
                            <p className="font-sans text-[14px] text-[#4a4a4a] leading-relaxed">
                              {point.text}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              ) : (
                <div className="bg-white/50 backdrop-blur-sm border border-[#1C3829]/5 p-10 md:p-16 mb-20">
                  <div className="flex items-center gap-4 mb-12">
                     <div className="w-12 h-[1px] bg-[#8B6E2A]" />
                     <h3 className="font-serif text-3xl text-[#1C3829]">
                      {language === 'de' 
                        ? (service.expertiseTitleDE || 'Unsere Expertise') 
                        : (service.expertiseTitleTR || <span lang="tr">Uzmanlık Alanlarımız</span>)}
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {detail.split(' · ').map((item, idx) => (
                      <div key={idx} className="flex items-start gap-4 p-6 bg-white shadow-sm border border-[#1C3829]/5 rounded-sm group hover:border-[#8B6E2A]/30 transition-colors">
                        <CheckCircle2 size={24} className="text-[#8B6E2A] mt-0.5 flex-shrink-0 opacity-80 group-hover:opacity-100 transition-opacity" />
                        <div>
                          <h4 className="font-sans text-[15px] font-bold text-[#1C3829] mb-1 tracking-wide">
                            <span lang={language === 'tr' ? 'tr' : 'de'}>{item}</span>
                          </h4>
                          <p className="font-sans text-[13px] text-[#6a6a6a] leading-relaxed">
                            {language === 'de'
                              ? (service.id === 'familienrecht' ? 'Individuelle Beratung vor Ort' : 'Professionelle Fall- und Prozessführung')
                              : language === 'tr'
                                ? (service.id === 'familienrecht' ? <span lang="tr">Bireysel ve Yerinde Danışmalık</span> : <span lang="tr">Profesyonel Dava ve Süreç Takibi</span>)
                                : (service.id === 'familienrecht' ? 'Individual on-site consultation' : 'Professional case & process management')}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {isFamilyLawLandingPage && (
                <section className="mb-20">
                  <div className="flex items-center gap-4 mb-10">
                    <div className="w-12 h-[1px] bg-[#8B6E2A]" />
                    <h2 className="font-serif text-3xl text-[#1C3829]">
                      {familyLawText('Mandantenstimmen', 'Müvekkil yorumları', 'Client testimonials')}
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {landingTestimonials.map((testimonial) => (
                      <article key={testimonial.name} className="bg-white border border-[#1C3829]/5 p-6 shadow-sm rounded-sm">
                        <div className="flex gap-1 mb-5" aria-label={familyLawText('5 von 5 Sternen', '5 üzerinden 5 yıldız', '5 out of 5 stars')}>
                          {Array.from({ length: 5 }).map((_, idx) => (
                            <Star key={idx} size={14} className="text-[#B8963E] fill-[#B8963E]" />
                          ))}
                        </div>
                        <p className="font-serif text-[20px] italic leading-relaxed text-[#1C3829] mb-6">
                          "{testimonial.text}"
                        </p>
                        <div className="border-t border-[#1C3829]/10 pt-4">
                          <div className="font-sans text-[13px] font-bold tracking-wide text-[#1C3829]">
                            {testimonial.name}
                          </div>
                          <div className="font-sans text-[12px] font-bold tracking-[0.12em] uppercase text-[#8B6E2A] mt-1">
                            {testimonial.area}
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
              )}

               {/* FAQ Accordion Section */}
              {((language === 'de' && service.faqDE) || (language === 'tr' && service.faqTR) || (language === 'en' && svc.faqEN)) && (
                <div className="mb-20">
                  <div className="flex items-center gap-4 mb-12">
                    <div className="w-12 h-[1px] bg-[#8B6E2A]" />
                    <h3 className="font-serif text-3xl text-[#1C3829]">
                      {language === 'de' ? 'Häufige Fragen' : language === 'tr' ? <span lang="tr">Sıkça Sorulan Sorular</span> : 'Frequently Asked Questions'}
                    </h3>
                  </div>
                  <div className="space-y-4">
                    {(faqItems ?? []).map((faq: any, idx: number) => (
                      <FAQItem key={idx} question={faq.question} answer={faq.answer} />
                    ))}
	                  </div>
	                </div>
	              )}

	              {isFamilyLawLandingPage && (
	                <section className="clear-both bg-[#1C3829] text-white p-8 md:p-12 mb-20 rounded-sm">
	                  <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-center">
	                    <div>
	                      <span className="font-sans text-[11px] font-bold tracking-[0.22em] uppercase text-[#B8963E] block mb-3">
		                        {familyLawText('Nächster Schritt', 'Sonraki adım', 'Next step')}
	                      </span>
	                      <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-4">
		                        {familyLawText('Lassen Sie Ihren Fall prüfen', 'Dosyanızı değerlendirelim', 'Let us review your case')}
	                      </h2>
	                      <p className="font-sans text-[15px] text-white/75 leading-relaxed max-w-2xl">
			                        {landingBottomText}
	                      </p>
	                    </div>
	                    <a
	                      href={whatsappUrl}
	                      target="_blank"
	                      rel="noopener noreferrer"
	                      className="inline-flex items-center justify-center gap-3 px-8 py-5 bg-[#8B6E2A] text-white font-sans text-[12px] font-bold tracking-[0.16em] uppercase transition-all hover:bg-[#7A5F20]"
	                    >
			                      {landingWhatsappLabel}
	                      <ArrowRight size={15} />
	                    </a>
	                  </div>
	                </section>
	              )}

	              {isFamilyLawLandingPage && (
	                <section className="mb-20 border-t border-[#1C3829]/10 pt-10">
	                  <div className="flex flex-col md:flex-row md:items-start gap-8">
	                    <div className="md:w-[260px] flex-shrink-0">
	                      <span className="font-sans text-[11px] font-bold tracking-[0.22em] uppercase text-[#8B6E2A] block mb-3">
		                        {familyLawText('Weitere Themen', 'Diğer konular', 'Other topics')}
	                      </span>
	                      <h2 className="font-serif text-2xl text-[#1C3829] leading-tight">
		                        {familyLawText('Verwandte Fachgebiete', 'İlgili hizmetler', 'Related services')}
	                      </h2>
	                    </div>
	                    <div className="flex flex-wrap gap-3">
	                      {services.filter(s => s.id !== id).map((s) => (
	                        <Link
	                          key={s.id}
	                          to={paths.service(s.id)}
	                          className="inline-flex items-center gap-2 border border-[#1C3829]/10 bg-white/50 px-4 py-3 rounded-sm font-sans text-[12px] font-bold tracking-wide text-[#1C3829]/75 transition-colors hover:border-[#8B6E2A]/40 hover:text-[#1C3829]"
	                        >
	                          <s.icon size={15} className="text-[#8B6E2A]" />
	                          <span>{language === 'de' ? s.title : language === 'tr' ? s.titleTR : (s as any).titleEN ?? s.title}</span>
	                        </Link>
	                      ))}
	                    </div>
	                  </div>
	                </section>
	              )}

	              {/* Bottom Navigation - Inter-service connectivity */}
	              <div className={`${isFamilyLawLandingPage ? 'hidden' : 'flex'} flex-col sm:flex-row border-t border-[#1C3829]/10 pt-16 gap-8 sm:gap-0 sm:justify-between items-center group`}>
                <Link 
                  to={paths.service(prevService.id)}
                  className="flex flex-col items-center sm:items-start group/btn max-w-[200px]"
                >
                  <span className="font-sans text-[10px] font-bold tracking-widest text-[#6a6a6a] uppercase mb-3 flex items-center gap-2 group-hover/btn:text-[#7A5F20] transition-colors">
                    <ArrowLeft size={12} /> {language === 'de' ? 'PREVIOUS' : language === 'tr' ? <span lang="tr">ÖNCEKİ</span> : 'PREVIOUS'}
                  </span>
                  <span className="font-serif text-lg text-[#1C3829] text-center sm:text-left leading-tight group-hover/btn:text-[#7A5F20] transition-colors">
                    <span lang={language === 'tr' ? 'tr' : language === 'en' ? 'en' : 'de'}>{language === 'de' ? prevService.title : language === 'tr' ? prevService.titleTR : (prevService as any).titleEN ?? prevService.title}</span>
                  </span>
                </Link>

                <div className="hidden sm:block w-[1px] h-12 bg-[#1C3829]/10" />

                <Link 
                  to={paths.service(nextService.id)}
                  className="flex flex-col items-center sm:items-end group/btn max-w-[200px] text-right"
                >
                  <span className="font-sans text-[10px] font-bold tracking-widest text-[#6a6a6a] uppercase mb-3 flex items-center gap-2 group-hover/btn:text-[#7A5F20] transition-colors">
                    {language === 'de' ? 'NEXT' : language === 'tr' ? <span lang="tr">SONRAKİ</span> : 'NEXT'} <ArrowRight className="w-3 h-3" />
                  </span>
                  <span className="font-serif text-lg text-[#1C3829] text-center sm:text-right leading-tight group-hover/btn:text-[#7A5F20] transition-colors">
                    <span lang={language === 'tr' ? 'tr' : language === 'en' ? 'en' : 'de'}>{language === 'de' ? nextService.title : language === 'tr' ? nextService.titleTR : (nextService as any).titleEN ?? nextService.title}</span>
                  </span>
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <aside className={isFamilyLawLandingPage ? "hidden" : "lg:col-span-4"}>
              {serviceSidebar}
            </aside>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
