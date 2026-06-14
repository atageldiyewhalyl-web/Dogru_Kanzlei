import { useParams, Link } from "react-router";
import { ArrowLeft, Clock, Calendar, MessageCircle, Quote, User } from "lucide-react";
import { motion, useScroll, useSpring } from "motion/react";
import type { ReactNode } from "react";
import { useLanguage } from "../context/LanguageContext";
import { useSEO, SITE_URL } from "../hooks/useSEO";
import { blogPosts } from "../data/blogPosts";
import { SchemaOrg } from "../components/SchemaOrg";
import { FAQItem } from "../components/FAQItem";
import { openWhatsAppLeadCapture } from "../components/WhatsAppLeadCapture";
import { extractFaqsFromContent } from "../utils/schemaUtils";
import { usePrerender } from "../hooks/usePrerender";
import hasanMainHero from "@/assets/Hasan dogru main hero 1.webp";

const WHATSAPP_URL = "https://wa.me/4917661221210";
const CRIMINAL_LAW_BLOG_SLUG_DE = "tuerkisches-strafrecht-anwalt-deutschland";
const CRIMINAL_DEFENSE_FROM_GERMANY_BLOG_SLUG_DE = "strafverfahren-tuerkei-aus-deutschland";
const PROPERTY_PARTITION_BLOG_SLUG_DE = "teilungsklage-immobilien-tuerkei";
const INHERITANCE_DISPUTE_BLOG_SLUG_DE = "pflichtteil-herabsetzungsklage-tuerkei";
const PROPERTY_RIGHTS_BLOG_SLUG_DE = "immobilienrechte-tuerkei";
const MURIS_MUVAZAASI_BLOG_SLUG_DE = "scheingeschaeft-tapu-iptali-tuerkei";
const MURIS_MUVAZAASI_LEGACY_BLOG_SLUG_DE = "muris-muvazaasi-erbrecht-tuerkei-tapu-iptal-klage";
const MAVI_KART_BLOG_SLUG_DE = "blaue-karte-tuerkei-erbrecht-immobilien";
const DEBT_COLLECTION_BLOG_SLUG_DE = "zwangsvollstreckung-tuerkei-forderungen-aus-deutschland";
const DEBT_COLLECTION_LEGACY_BLOG_SLUG_DE = "deutschland-tuerkei-forderungseinzug-zwangsvollstreckung";
const DIVORCE_TURKEY_BLOG_SLUG_DE = "scheidung-tuerkei-ohne-reise";
const TANIMA_TENFIZ_BLOG_SLUG_DE = "deutsche-scheidung-tuerkei-anerkennen-tanima-tenfiz";
const TCK_191_KDAE_BLOG_SLUG_DE = "tck-191-kdae-auslandstuerken";
const DRUG_CASE_TURKEY_BLOG_SLUG_DE = "drogendelikt-tuerkei-strafverteidigung-deutschland";
const THREAT_CRIME_TURKEY_BLOG_SLUG_DE = "bedrohung-tuerkei-aus-deutschland-strafverteidigung";
const HAKARET_BLOG_SLUG_DE = "beleidigung-tuerkei-whatsapp-strafrecht";
const HAKARET_SOCIAL_MEDIA_BLOG_SLUG_DE = "beleidigung-tuerkei-aus-deutschland-soziale-medien";
const HAGB_BLOG_SLUG_DE = "hagb-einbuergerung-deutschland-tuerkei";
const CUSTODY_TENFIZ_BLOG_SLUG_DE = "deutschland-gemeinsames-sorgerecht-tuerkei-anerkennung";
const INHERITANCE_GUIDE_BLOG_SLUG_DE = "erbschaft-tuerkei-deutschland-ratgeber";
const UNTERHALT_TURKISH_LAW_BLOG_SLUG_DE = "unterhalt-tuerkisches-recht";

type BlogProductCTAPlacement = 'intro' | 'comparison' | 'service_types' | 'bottom' | 'sticky';

type BlogProductFunnel = {
  service: 'vekaletname';
  slugTR: string;
  duration: string;
};

const vekaletnameFunnel: BlogProductFunnel = {
  service: 'vekaletname',
  slugTR: 'almanya-da-vekaletname-cikarma-rehberi',
  duration: '20 dakika',
};

function buildProductWhatsAppLeadUrl(funnel: BlogProductFunnel, placement: BlogProductCTAPlacement) {
  const url = new URL(WHATSAPP_URL);
  url.searchParams.set('service', 'Vekaletname');
  url.searchParams.set('utm_source', 'blog');
  url.searchParams.set('utm_medium', 'cta');
  url.searchParams.set('utm_campaign', 'vekaletname_whatsapp_form');
  url.searchParams.set('utm_content', placement);
  url.searchParams.set('situation', `${funnel.duration} vekaletname ön görüşmesi talep ediyorum.`);
  return url.toString();
}

function getProductLeadCaptureDetail(funnel: BlogProductFunnel) {
  return {
    service: 'Vekaletname',
    situation: `${funnel.duration} vekaletname ön görüşmesi talep ediyorum.`,
  };
}

function BlogBookingButton({
  funnel,
  placement,
  children,
  compact = false,
}: {
  funnel: BlogProductFunnel;
  placement: BlogProductCTAPlacement;
  children: ReactNode;
  compact?: boolean;
}) {
  return (
    <a
      href={buildProductWhatsAppLeadUrl(funnel, placement)}
      onClick={(event) => {
        event.preventDefault();
        openWhatsAppLeadCapture(getProductLeadCaptureDetail(funnel));
      }}
      target="_blank"
      rel="noopener noreferrer"
      className={[
        "inline-flex items-center justify-center rounded-full bg-[#8B6E2A] text-white font-sans font-bold uppercase tracking-[0.16em] shadow-lg transition-all duration-300 hover:bg-[#1C3829] hover:text-white active:scale-95",
        compact ? "px-4 py-3 text-[11px]" : "w-full px-5 py-4 text-center text-[10px] sm:w-auto sm:px-7 sm:text-[11px] md:px-10 md:text-[12px]",
      ].join(' ')}
    >
      {children}
    </a>
  );
}

function BlogProductCTAIntro({ funnel }: { funnel: BlogProductFunnel }) {
  return (
    <aside className="my-10 rounded-lg border border-[#8B6E2A]/25 bg-white p-5 shadow-[0_18px_45px_rgba(28,56,41,0.08)] sm:p-7 md:my-14 md:p-10">
      <div className="grid gap-7 md:hidden">
        <div className="min-w-0">
          <p className="mb-3 font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-[#7A5F20] md:text-[11px]">
            Vekaletname görüşmesi
          </p>
          <h3 className="mb-4 font-serif text-[28px] leading-[1.15] text-[#1C3829] sm:text-[34px]">
            Türkiye için vekâletname mi çıkartmanız gerekiyor?
          </h3>
          <p className="m-0 max-w-[420px] text-[16px] leading-7 text-[#444] sm:text-[18px] sm:leading-8">
            20 dakikada hangi yolu izlemeniz gerektiğini netleştirelim — konsolosluk mu, Alman noter mi?
          </p>
        </div>
        <div>
          <BlogBookingButton funnel={funnel} placement="intro">
            WHATSAPP FORMUNU AÇ
          </BlogBookingButton>
        </div>
      </div>

      <div className="hidden md:block">
        <div className="max-w-[620px]">
          <p className="mb-3 font-sans text-[11px] font-bold uppercase tracking-[0.22em] text-[#7A5F20]">
            Vekaletname görüşmesi
          </p>
          <h3 className="mb-4 font-serif text-4xl leading-[1.1] text-[#1C3829]">
            Türkiye için vekâletname mi çıkartmanız gerekiyor?
          </h3>
          <p className="m-0 text-[19px] leading-8 text-[#444]">
            20 dakikada hangi yolu izlemeniz gerektiğini netleştirelim — konsolosluk mu, Alman noter mi?
          </p>
        </div>
        <div className="mt-8 flex items-center justify-between gap-8 border-t border-[#1C3829]/10 pt-7">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-[#F7F5F0] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#1C3829] ring-1 ring-[#1C3829]/10">
              20 dakika
            </span>
            <span className="rounded-full bg-[#F7F5F0] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#7A5F20] ring-1 ring-[#8B6E2A]/25">
              WhatsApp ön bilgi formu
            </span>
          </div>
          <div className="w-full max-w-[390px] shrink-0">
            <BlogBookingButton funnel={funnel} placement="intro">
              WHATSAPP FORMUNU AÇ
            </BlogBookingButton>
          </div>
        </div>
      </div>
    </aside>
  );
}

function BlogProductCTAMid({
  funnel,
  variant,
}: {
  funnel: BlogProductFunnel;
  variant: 'comparison' | 'service_types';
}) {
  const isServiceTypes = variant === 'service_types';
  const chips = ['Tapu', 'Miras', 'Tanıma-Tenfiz', 'Boşanma', 'Banka'];

  return (
    <aside className="my-16 rounded-xl bg-[#FDFBF5] p-6 ring-1 ring-[#8B6E2A]/20 md:p-8">
      <div className="mb-5 h-1 w-16 rounded-full bg-[#8B6E2A]" />
      <h3 className="mb-4 font-serif text-2xl leading-tight text-[#1C3829] md:text-3xl">
        {isServiceTypes ? 'Vekâletname metni işleme göre farklılık gösterir' : 'Hangi yol sizin için doğru?'}
      </h3>
      <p className="mb-6 text-[17px] leading-8 text-[#444] md:text-[18px]">
        {isServiceTypes
          ? 'Eksik yetki, Türkiye’de reddedilme sebebi olabilir.'
          : 'Hasan Doğru, durumunuza özel en uygun yolu belirler. Kısa bilgilerinizi gönderin, süreç WhatsApp üzerinden netleştirilsin.'}
      </p>
      {isServiceTypes && (
        <div className="mb-7 flex flex-wrap gap-2">
          {chips.map((chip) => (
            <span key={chip} className="rounded-full border border-[#1C3829]/10 bg-white px-4 py-2 text-[12px] font-bold uppercase tracking-[0.12em] text-[#1C3829]">
              {chip}
            </span>
          ))}
        </div>
      )}
      <BlogBookingButton funnel={funnel} placement={isServiceTypes ? 'service_types' : 'comparison'}>
        {isServiceTypes ? 'VEKÂLETNAME İÇİN WHATSAPP FORMUNU AÇ' : 'WHATSAPP FORMUNU AÇ'}
      </BlogBookingButton>
    </aside>
  );
}

function BlogProductCTABottom({ funnel }: { funnel: BlogProductFunnel }) {
  return (
    <div className="mt-32 overflow-hidden rounded-xl border border-[#8B6E2A]/25 bg-white shadow-[0_22px_70px_rgba(28,56,41,0.13)]">
      <div className="h-2 bg-[#8B6E2A]" />
      <div className="p-7 md:p-10">
        <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-start">
          <div>
            <p className="mb-3 font-sans text-[11px] font-bold uppercase tracking-[0.24em] text-[#7A5F20]">
              Done-for-you vekaletname hizmeti
            </p>
            <h3 className="mb-5 font-serif text-3xl leading-tight text-[#1C3829] md:text-4xl">
              Vekâletnamenizi sizin için biz hazırlıyoruz
            </h3>
            <p className="mb-7 max-w-2xl text-[18px] leading-8 text-[#444]">
              Kısa WhatsApp formuyla durumunuzu ve vekâletnamenin hangi işlem için gerektiğini bize iletin. Hasan Doğru, konsolosluk veya Alman noter yolundan hangisinin uygun olduğunu değerlendirir ve vekâletname metnini amacınıza göre hazırlar.
            </p>
            <BlogBookingButton funnel={funnel} placement="bottom">
              WHATSAPP FORMUNU AÇ
            </BlogBookingButton>
          </div>

          <div className="rounded-lg bg-[#F7F5F0] p-6 ring-1 ring-[#1C3829]/8">
            <h4 className="mb-5 font-serif text-2xl leading-tight text-[#1C3829]">
              Hizmete dahil olanlar
            </h4>
            <ul className="m-0 space-y-4 p-0 text-[15px] leading-7 text-[#444]">
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8B6E2A]" />
                Formdaki bilgilerle durum ve doğru yol değerlendirilir
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8B6E2A]" />
                Vekâletname metni işlem amacına göre hazırlanır
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8B6E2A]" />
                Hasan Doğru süreci sizin adınıza takip eder
              </li>
            </ul>
            <p className="mt-6 border-t border-[#1C3829]/10 pt-5 text-[12px] font-bold uppercase tracking-[0.12em] text-[#1C3829]/55">
              Türkçe ve Almanca hizmet · Türk hukuku
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function BlogStickyBookingCTA({ funnel }: { funnel: BlogProductFunnel }) {
  return (
    <div className="fixed inset-x-3 bottom-3 z-[180] rounded-2xl bg-[#1C3829] p-2 shadow-[0_16px_44px_rgba(0,0,0,0.22)] ring-1 ring-white/10 md:hidden">
      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0 pl-3">
          <div className="truncate text-[12px] font-bold text-white">Vekaletname görüşmesi</div>
          <div className="text-[10px] uppercase tracking-[0.12em] text-white/55">WhatsApp ön bilgi formu</div>
        </div>
        <BlogBookingButton funnel={funnel} placement="sticky" compact>
          WhatsApp
        </BlogBookingButton>
      </div>
    </div>
  );
}

type BlogWhatsAppCTAPlacement = 'intro' | 'mid' | 'deadline' | 'settlement' | 'records' | 'strategy' | 'bottom';
type BlogWhatsAppCTATopic = 'criminal_law' | 'drug_case' | 'threat_case' | 'hakaret' | 'hagb' | 'property_partition' | 'inheritance_dispute' | 'inheritance_guide' | 'property_rights' | 'muris_muvazaasi' | 'mavi_kart' | 'debt_collection' | 'divorce_turkey' | 'tanima_tenfiz' | 'tck_191_kdae' | 'sorgerecht_tenfiz' | 'unterhalt_nafaka';

function getBlogWhatsAppService(topic: BlogWhatsAppCTATopic) {
  if (topic === 'hagb') return 'Ceza / Yakalama Kararı';
  if (topic === 'hakaret') return 'Ceza / Yakalama Kararı';
  if (topic === 'drug_case') return 'Ceza / Yakalama Kararı';
  if (topic === 'threat_case') return 'Ceza / Yakalama Kararı';
  if (topic === 'mavi_kart') return 'Mavi Kart';
  if (topic === 'debt_collection') return 'Forderung / Inkasso';
  if (topic === 'divorce_turkey') return 'Boşanma';
  if (topic === 'tanima_tenfiz') return 'Tanıma & Tenfiz';
  if (topic === 'sorgerecht_tenfiz') return 'Sorgerecht / Velayet';
  if (topic === 'unterhalt_nafaka') return 'Unterhalt / Nafaka';
  if (topic === 'property_partition' || topic === 'property_rights') return 'Tapu / Gayrimenkul';
  if (topic === 'inheritance_dispute' || topic === 'inheritance_guide' || topic === 'muris_muvazaasi') return 'Miras';
  return 'Ceza / Yakalama Kararı';
}

function getHagbCTACopy(language: string, placement: BlogWhatsAppCTAPlacement) {
  if (language === 'de') {
    if (placement === 'intro') {
      return {
        eyebrow: 'HAGB & Einbürgerung',
        title: 'HAGB im türkischen Register vor der Einbürgerung prüfen',
        body: 'Bevor Sie den Antrag stellen, prüfen wir türkische Akte, HAGB-Status, Arşiv Kaydı und welche Unterlagen sinnvoll vorbereitet werden sollten.',
        button: 'WhatsApp Prüfung starten',
      };
    }
    if (placement === 'records') {
      return {
        eyebrow: 'Adli Sicil & Arşiv',
        title: 'Nicht der normale Auszug entscheidet, sondern der Archiv-Auszug',
        body: 'Viele sehen im Adli Sicil keinen Eintrag und sind trotzdem im Arşiv Kaydı sichtbar. Wir helfen, die türkischen Register sauber einzuordnen.',
        button: 'Register prüfen lassen',
      };
    }
    if (placement === 'strategy') {
      return {
        eyebrow: 'Timing & Strategie',
        title: 'Aktives HAGB, abgeschlossenes HAGB oder Freispruchsoption?',
        body: 'Je nach Stand kann Warten, Beschleunigen, Aktenprüfung oder eine andere Verfahrensstrategie sinnvoll sein. Das sollte vor dem Antrag geklärt werden.',
        button: 'Strategie per WhatsApp klären',
      };
    }
    return {
      eyebrow: 'Vor dem Antrag',
      title: 'Türkische Strafakte vorbereiten, bevor die Behörde sie sieht',
      body: 'Senden Sie uns kurz, ob HAGB noch läuft oder abgeschlossen ist. Wir prüfen die türkische Seite und bereiten den nächsten Schritt vor.',
      button: 'WhatsApp Anfrage starten',
    };
  }

  if (language === 'en') {
    if (placement === 'intro') {
      return {
        eyebrow: 'HAGB & German citizenship',
        title: 'Check your Turkish HAGB status before naturalisation',
        body: 'Before filing, we review the Turkish case, HAGB status, archive record, and which documents should be prepared.',
        button: 'Start WhatsApp review',
      };
    }
    if (placement === 'records') {
      return {
        eyebrow: 'Adli sicil & archive',
        title: 'The archive record matters more than the standard certificate',
        body: 'Many applicants see a clean standard record while the HAGB remains visible in the arşiv kaydı. We help interpret the Turkish records.',
        button: 'Review my records',
      };
    }
    if (placement === 'strategy') {
      return {
        eyebrow: 'Timing & strategy',
        title: 'Active HAGB, completed HAGB, or acquittal strategy?',
        body: 'Depending on the case status, waiting, accelerating, reviewing evidence, or another procedural route may be smarter before applying.',
        button: 'Clarify strategy on WhatsApp',
      };
    }
    return {
      eyebrow: 'Before filing',
      title: 'Prepare the Turkish criminal file before the authority sees it',
      body: 'Send us whether the HAGB is active or completed. We review the Turkish side and help you prepare the next step.',
      button: 'Start WhatsApp request',
    };
  }

  if (placement === 'intro') {
    return {
      eyebrow: 'HAGB & Alman vatandaşlığı',
      title: 'Vatandaşlık başvurusundan önce HAGB durumunu kontrol edin',
      body: 'Başvuru yapmadan önce Türkiye dosyasını, HAGB durumunu, arşiv kaydını ve hazırlanması gereken belgeleri değerlendirelim.',
      button: 'WhatsApp incelemesi başlat',
    };
  }
  if (placement === 'records') {
    return {
      eyebrow: 'Adli sicil & arşiv',
      title: 'Asıl sorun çoğu zaman normal kayıt değil, arşiv kaydıdır',
      body: 'Adli sicil temiz görünse bile HAGB arşiv kaydında çıkabilir. Türk kayıtlarının vatandaşlık süreci açısından ne anlama geldiğini inceleyelim.',
      button: 'Kayıtları kontrol ettirin',
    };
  }
  if (placement === 'strategy') {
    return {
      eyebrow: 'Zamanlama & strateji',
      title: 'HAGB devam ediyor mu, tamamlandı mı, beraat seçeneği var mı?',
      body: 'Dosyanın durumuna göre beklemek, hızlandırmak, delil durumunu incelemek veya farklı bir usul stratejisi daha doğru olabilir.',
      button: 'Stratejiyi WhatsApp’tan sorun',
    };
  }
  return {
    eyebrow: 'Başvurudan önce',
    title: 'Makam görmeden önce Türkiye ceza dosyanızı hazırlayın',
    body: 'HAGB’nin devam edip etmediğini veya tamamlanıp tamamlanmadığını kısaca gönderin. Türk hukuku yönünden sonraki adımı değerlendirelim.',
    button: 'WhatsApp talebi başlat',
  };
}

function getHakaretCTACopy(language: string, placement: BlogWhatsAppCTAPlacement) {
  if (language === 'de') {
    if (placement === 'intro') {
      return {
        eyebrow: 'Hakaret & digitale Beweise',
        title: 'Strafanzeige wegen WhatsApp oder Social Media?',
        body: 'Senden Sie uns kurz, welche Nachricht oder welcher Post betroffen ist. Wir prüfen Zuständigkeit, Fristen und erstes Risiko vor einer Türkeireise.',
        button: 'WhatsApp Formular öffnen',
      };
    }
    if (placement === 'deadline') {
      return {
        eyebrow: '6-Monats-Frist',
        title: 'Kann das Verfahren schon an der Frist scheitern?',
        body: 'Bei Hakaret ist der Zeitpunkt der Kenntnis entscheidend. Wir prüfen, ob der Strafantrag nach CMK Art. 73 rechtzeitig gestellt wurde.',
        button: 'Frist per WhatsApp prüfen lassen',
      };
    }
    if (placement === 'settlement') {
      return {
        eyebrow: 'Uzlaşma Strategie',
        title: 'Viele Hakaretfälle lassen sich ohne Urteil beenden',
        body: 'Eine Einigung kann das Verfahren vollständig erledigen. Wir bereiten die Verhandlung vor und vertreten Sie per Vollmacht aus Deutschland.',
        button: 'Uzlaşma-Fall schildern',
      };
    }
    return {
      eyebrow: 'Aus Deutschland verteidigen',
      title: 'Hakaret-Verfahren vor der Reise klären',
      body: 'Bevor Sie reagieren oder in die Türkei fliegen, klären wir UYAP, Aktenlage, mögliche Ladungen und die beste Verteidigungsroute.',
      button: 'WhatsApp Anfrage starten',
    };
  }

  if (language === 'en') {
    if (placement === 'intro') {
      return {
        eyebrow: 'Hakaret & digital evidence',
        title: 'Criminal complaint over WhatsApp or social media?',
        body: 'Send us which message or post is involved. We review jurisdiction, deadlines, and travel risk before you respond or go to Turkey.',
        button: 'Open WhatsApp form',
      };
    }
    if (placement === 'deadline') {
      return {
        eyebrow: '6-month deadline',
        title: 'Could the case fail on timing?',
        body: 'For standard hakaret, the complaint deadline can decide the case. We check whether CMK Art. 73 was respected.',
        button: 'Check the deadline',
      };
    }
    if (placement === 'settlement') {
      return {
        eyebrow: 'Uzlaşma strategy',
        title: 'Many insult cases can end without a conviction',
        body: 'A settlement can close the file completely. We prepare the position and represent you by power of attorney from Germany.',
        button: 'Describe the settlement issue',
      };
    }
    return {
      eyebrow: 'Defence from Germany',
      title: 'Clarify a Turkish insult case before travelling',
      body: 'Before you respond or fly to Turkey, we can check UYAP, summons risk, digital evidence, and the best defence route.',
      button: 'Start WhatsApp request',
    };
  }

  if (placement === 'intro') {
    return {
      eyebrow: 'Hakaret & dijital delil',
      title: 'WhatsApp veya sosyal medya nedeniyle şikayet mi var?',
      body: 'Hangi mesaj veya paylaşımın konu olduğunu kısaca gönderin. Yetki, süre ve Türkiye seyahati riskini birlikte değerlendirelim.',
      button: 'WhatsApp formunu aç',
    };
  }
  if (placement === 'deadline') {
    return {
      eyebrow: '6 aylık şikayet süresi',
      title: 'Dosya süre yönünden düşebilir mi?',
      body: 'Hakaret suçunda şikayet tarihi kritik olabilir. CMK m. 73 kapsamındaki sürenin doğru hesaplanıp hesaplanmadığını kontrol edelim.',
      button: 'Süreyi WhatsApp’tan sorun',
    };
  }
  if (placement === 'settlement') {
    return {
      eyebrow: 'Uzlaşma stratejisi',
      title: 'Birçok hakaret dosyası mahkumiyet olmadan kapanabilir',
      body: 'Uzlaşma doğru hazırlanırsa dosya tamamen kapanabilir. Almanya’dan vekaletle süreci sizin adınıza yürütebiliriz.',
      button: 'Uzlaşma durumunu anlatın',
    };
  }
  return {
    eyebrow: "Almanya'dan savunma",
    title: "Türkiye'ye gitmeden hakaret dosyanızı netleştirin",
    body: 'UYAP durumu, tebligat, dijital deliller ve savunma yolunu Türkiye seyahati planlamadan önce kontrol edelim.',
    button: 'WhatsApp talebi başlat',
  };
}

function getCriminalLawCTACopy(language: string, placement: BlogWhatsAppCTAPlacement) {
  if (language === 'de') {
    if (placement === 'intro') {
      return {
        eyebrow: 'Türkisches Strafrecht',
        title: 'Sie haben ein Strafverfahren in der Türkei?',
        body: 'Bevor Sie reagieren oder in die Türkei reisen, prüfen wir UYAP, Aktenlage und mögliche Haftbefehle.',
        button: 'WhatsApp Anfrage starten',
      };
    }
    if (placement === 'mid') {
      return {
        eyebrow: 'Akteneinsicht & Strategie',
        title: 'Welcher Vorwurf steht wirklich im Raum?',
        body: 'Betrug, Körperverletzung, Hakaret, TCK oder CMK-Fragen: Wir klären den konkreten Verfahrensstand und entwickeln die nächsten Schritte.',
        button: 'Fall per WhatsApp schildern',
      };
    }
    return {
      eyebrow: 'Direkter Kontakt',
      title: 'Türkisches Strafverfahren aus Deutschland klären',
      body: 'Senden Sie uns kurz Ihre Situation. Hasan Doğru erhält die Angaben vorab und kann mit Kontext antworten.',
      button: 'WhatsApp Formular öffnen',
    };
  }

  if (language === 'en') {
    if (placement === 'intro') {
      return {
        eyebrow: 'Turkish criminal law',
        title: 'Facing a criminal case in Turkey?',
        body: 'Before you travel or respond, we can check UYAP, the case file, and possible warrant risk.',
        button: 'Start WhatsApp request',
      };
    }
    if (placement === 'mid') {
      return {
        eyebrow: 'File review & strategy',
        title: 'What exactly is the allegation?',
        body: 'Fraud, assault, insult, TCK or CMK questions: we clarify the actual case status and the next legal steps.',
        button: 'Describe your case on WhatsApp',
      };
    }
    return {
      eyebrow: 'Direct contact',
      title: 'Clarify a Turkish criminal case from Germany',
      body: 'Send us a short summary first. Hasan Doğru receives the context before the WhatsApp chat opens.',
      button: 'Open WhatsApp form',
    };
  }

  if (placement === 'intro') {
    return {
      eyebrow: 'Türk ceza hukuku',
      title: "Türkiye'de ceza dosyanız mı var?",
      body: "Türkiye'ye gitmeden veya ifade vermeden önce UYAP, dosya durumu ve yakalama kararı riskini kontrol edelim.",
      button: "WhatsApp talebi başlat",
    };
  }
  if (placement === 'mid') {
    return {
      eyebrow: 'Dosya inceleme & strateji',
      title: 'Size yöneltilen suçlama tam olarak ne?',
      body: 'Dolandırıcılık, yaralama, hakaret, TCK veya CMK süreci: dosyanızın gerçek durumunu netleştirip sonraki adımları belirleyelim.',
      button: "Durumunuzu WhatsApp'tan anlatın",
    };
  }
  return {
    eyebrow: 'Doğrudan iletişim',
    title: "Türkiye'deki ceza dosyanızı Almanya'dan netleştirin",
    body: 'Kısa bilgilerinizi gönderin. Hasan Doğru WhatsApp görüşmesinden önce durumunuzu bağlamıyla görsün.',
    button: 'WhatsApp formunu aç',
  };
}

function getDrugCaseCTACopy(language: string, placement: BlogWhatsAppCTAPlacement) {
  if (language === 'de') {
    if (placement === 'intro') {
      return {
        eyebrow: 'TCK 188 & 191',
        title: 'Drogenverfahren in der Türkei nicht abwarten',
        body: 'Wir prüfen, ob Handel oder Eigenkonsum im Raum steht, ob Haft- oder Reiserisiko besteht und welche Schritte per Vollmacht aus Deutschland möglich sind.',
        button: 'WhatsApp Prüfung starten',
      };
    }
    if (placement === 'mid') {
      return {
        eyebrow: 'Akteneinsicht & Beweise',
        title: 'Telefonüberwachung, Durchsuchung, Haftfrage?',
        body: 'Bei Drogendelikten entscheidet die frühe Aktenprüfung. Wir prüfen Abhöranordnung, Beweiskette und ob Art. 188 angegriffen werden kann.',
        button: 'Fall per WhatsApp schildern',
      };
    }
    return {
      eyebrow: 'Vor der Türkeireise',
      title: 'Uyuşturucu-Akte vor Reise oder Aussage klären',
      body: 'Senden Sie uns kurz, ob es um TCK 188, TCK 191, Haftbefehl oder eine alte Akte geht. Wir prüfen den ersten sicheren Schritt.',
      button: 'WhatsApp Anfrage starten',
    };
  }

  if (language === 'en') {
    if (placement === 'intro') {
      return {
        eyebrow: 'TCK 188 & 191',
        title: 'Do not wait out a Turkish drug case',
        body: 'We check whether the file points to trafficking or personal use, whether there is warrant or travel risk, and what can be handled from Germany.',
        button: 'Start WhatsApp review',
      };
    }
    if (placement === 'mid') {
      return {
        eyebrow: 'File review & evidence',
        title: 'Phone surveillance, search, detention risk?',
        body: 'In drug cases, early file review matters. We review surveillance orders, evidence chain, and whether the TCK 188 classification can be challenged.',
        button: 'Describe the case on WhatsApp',
      };
    }
    return {
      eyebrow: 'Before travel',
      title: 'Clarify the drug file before travelling to Turkey',
      body: 'Send us whether it concerns TCK 188, TCK 191, a warrant, or an old case. We help identify the safest first step.',
      button: 'Start WhatsApp request',
    };
  }

  if (placement === 'intro') {
    return {
      eyebrow: 'TCK 188 & 191',
      title: 'Türkiye’deki uyuşturucu dosyasını beklemeye bırakmayın',
      body: 'Dosyanın ticaret mi kullanım mı olduğunu, yakalama veya seyahat riski bulunup bulunmadığını ve Almanya’dan hangi adımların atılabileceğini inceleyelim.',
      button: 'WhatsApp incelemesi başlat',
    };
  }
  if (placement === 'mid') {
    return {
      eyebrow: 'Dosya & dijital delil',
      title: 'Telefon dinleme, arama, tutuklama riski var mı?',
      body: 'Uyuşturucu dosyalarında erken dosya incelemesi belirleyicidir. Dinleme kararı, delil zinciri ve TCK 188 nitelendirmesini kontrol edelim.',
      button: 'Dosyayı WhatsApp’tan anlatın',
    };
  }
  return {
    eyebrow: 'Türkiye seyahati öncesi',
    title: 'Uyuşturucu dosyanızı Türkiye’ye gitmeden netleştirin',
    body: 'TCK 188, TCK 191, yakalama kararı veya eski bir dosya olup olmadığını kısaca gönderin. İlk güvenli adımı birlikte belirleyelim.',
    button: 'WhatsApp talebi başlat',
  };
}

function getThreatCaseCTACopy(language: string, placement: BlogWhatsAppCTAPlacement) {
  if (language === 'de') {
    if (placement === 'intro') {
      return {
        eyebrow: 'TCK 106 & WhatsApp',
        title: 'Bedrohungsvorwurf in der Türkei nicht abwarten',
        body: 'Wir prüfen, ob einfache oder qualifizierte Bedrohung im Raum steht, ob Uzlaşma oder HAGB möglich ist und welches Reiserisiko besteht.',
        button: 'WhatsApp Prüfung starten',
      };
    }
    if (placement === 'mid') {
      return {
        eyebrow: 'Nachricht, Kontext, Beweis',
        title: 'Streitnachricht oder TCK-106-Bedrohung?',
        body: 'Screenshot, vollständiger Chatverlauf, Account-Zuordnung und Vorgeschichte entscheiden oft über die Verteidigung.',
        button: 'Fall per WhatsApp schildern',
      };
    }
    return {
      eyebrow: 'Vor der Türkeireise',
      title: 'Bedrohungsakte vor der Türkeireise klären',
      body: 'Senden Sie uns kurz, ob es um WhatsApp, Social Media, Uzlaşma, HAGB oder einen alten Haftbefehl geht. Wir prüfen den sicheren ersten Schritt.',
      button: 'WhatsApp Anfrage starten',
    };
  }

  if (language === 'en') {
    if (placement === 'intro') {
      return {
        eyebrow: 'TCK 106 & WhatsApp',
        title: 'Do not wait out a Turkish threat case',
        body: 'We check whether the file is simple or qualified threat, whether settlement or HAGB is possible, and whether travel creates risk.',
        button: 'Start WhatsApp review',
      };
    }
    if (placement === 'mid') {
      return {
        eyebrow: 'Message, context, evidence',
        title: 'Angry message or TCK 106 threat?',
        body: 'Screenshots, full chat history, account ownership and the relationship between the parties often decide the defence.',
        button: 'Describe the case on WhatsApp',
      };
    }
    return {
      eyebrow: 'Before travel',
      title: 'Clarify the threat file before travelling to Turkey',
      body: 'Send us whether it concerns WhatsApp, social media, settlement, HAGB or an old warrant. We help identify the safest first step.',
      button: 'Start WhatsApp request',
    };
  }

  if (placement === 'intro') {
    return {
      eyebrow: 'TCK 106 & WhatsApp tehdidi',
      title: 'Türkiye’deki tehdit dosyasını beklemeye bırakmayın',
      body: 'Mesajın basit tehdit mi nitelikli tehdit mi sayılabileceğini, uzlaşma/HAGB ihtimalini ve Türkiye seyahati riskini Almanya’dan değerlendirelim.',
      button: 'WhatsApp incelemesi başlat',
    };
  }
  if (placement === 'mid') {
    return {
      eyebrow: 'Mesaj, bağlam, delil',
      title: 'Kavga anı mı, TCK 106 tehdidi mi?',
      body: 'Ekran görüntüsü, mesaj geçmişi, taraflar arasındaki ilişki ve tekrar olup olmadığı savunmada belirleyicidir. Dosyayı bağlamıyla birlikte inceleyelim.',
      button: 'Mesajı WhatsApp’tan anlatın',
    };
  }
  return {
    eyebrow: 'Türkiye seyahati öncesi',
    title: 'Tehdit dosyanızı Türkiye’ye gitmeden netleştirin',
    body: 'TCK 106, uzlaşma, HAGB, gıyabi karar veya yakalama riski olup olmadığını kontrol edip ilk güvenli adımı belirleyelim.',
    button: 'WhatsApp talebi başlat',
  };
}

function getPropertyPartitionCTACopy(language: string, placement: BlogWhatsAppCTAPlacement) {
  if (language === 'de') {
    if (placement === 'intro') {
      return {
        eyebrow: 'İzale-i Şüyu',
        title: 'Gemeinsame Immobilie in der Türkei blockiert?',
        body: 'Wenn Miteigentümer nicht verkaufen oder nicht reagieren, prüfen wir Ihre Möglichkeiten zur Teilungsklage aus Deutschland.',
        button: 'WhatsApp Anfrage starten',
      };
    }
    if (placement === 'mid') {
      return {
        eyebrow: 'Tapu & Erbanteile prüfen',
        title: 'Bevor Sie klagen: Eigentumsstruktur klären',
        body: 'Wir prüfen Tapu, Veraset İlamı, Miteigentumsquoten und ob eine İzale-i Şüyu-Klage realistisch der richtige Weg ist.',
        button: 'Fall per WhatsApp schildern',
      };
    }
    return {
      eyebrow: 'Von Deutschland aus',
      title: 'İzale-i Şüyu-Verfahren ohne Türkeireise starten',
      body: 'Senden Sie uns kurz Ihre Situation. Hasan Doğru erhält die Angaben vorab und kann mit konkretem Kontext antworten.',
      button: 'WhatsApp Formular öffnen',
    };
  }

  if (language === 'en') {
    if (placement === 'intro') {
      return {
        eyebrow: 'İzale-i Şüyu',
        title: 'Co-owned property in Turkey stuck?',
        body: 'If relatives or co-owners refuse to sell, we can review whether a Turkish partition lawsuit can resolve the deadlock from abroad.',
        button: 'Start WhatsApp request',
      };
    }
    if (placement === 'mid') {
      return {
        eyebrow: 'Title deed & shares',
        title: 'Clarify ownership before filing',
        body: 'We review the Tapu, inheritance certificate, ownership shares, and whether İzale-i Şüyu is the right route.',
        button: 'Describe your case on WhatsApp',
      };
    }
    return {
      eyebrow: 'From abroad',
      title: 'Start a Turkish property partition case without travelling',
      body: 'Send us a short summary first. Hasan Doğru receives the context before the WhatsApp chat opens.',
      button: 'Open WhatsApp form',
    };
  }

  if (placement === 'intro') {
    return {
      eyebrow: 'İzale-i şüyu',
      title: "Türkiye'deki ortak taşınmaz çözümsüz mü kaldı?",
      body: 'Paydaşlar satmak istemiyor, ulaşılamıyor veya taşınmaz tek kişi tarafından kullanılıyorsa Almanya’dan dava yolunu değerlendirelim.',
      button: 'WhatsApp talebi başlat',
    };
  }
  if (placement === 'mid') {
    return {
      eyebrow: 'Tapu & miras payı',
      title: 'Dava açmadan önce pay durumunu netleştirin',
      body: 'Tapu kaydı, veraset ilamı, pay oranları ve izale-i şüyu davasının sizin için doğru yol olup olmadığını kontrol edelim.',
      button: "Durumunuzu WhatsApp'tan anlatın",
    };
  }
  return {
    eyebrow: "Almanya'dan takip",
    title: "İzale-i şüyu sürecini Türkiye'ye gitmeden başlatın",
    body: 'Kısa bilgilerinizi gönderin. Hasan Doğru WhatsApp görüşmesinden önce durumunuzu bağlamıyla görsün.',
    button: 'WhatsApp formunu aç',
  };
}

function getInheritanceDisputeCTACopy(language: string, placement: BlogWhatsAppCTAPlacement) {
  if (language === 'de') {
    if (placement === 'intro') {
      return {
        eyebrow: 'Saklı Pay & Tenkis',
        title: 'Wurde Ihr Pflichtteil in der Türkei verletzt?',
        body: 'Wir prüfen Testament, Tapu-Übertragungen, Fristen und ob Tenkis Davası oder Muris Muvazaası der stärkere Weg ist.',
        button: 'WhatsApp Anfrage starten',
      };
    }
    if (placement === 'mid') {
      return {
        eyebrow: 'Fristen & Strategie',
        title: 'Die 1-Jahres-Frist nicht verpassen',
        body: 'Gerade bei Erbfällen aus Deutschland entscheidet der Zeitpunkt der Kenntnis. Lassen Sie Fristen und Ansprüche früh prüfen.',
        button: 'Fall per WhatsApp schildern',
      };
    }
    return {
      eyebrow: 'Von Deutschland aus',
      title: 'Tenkis oder Muris Muvazaası ohne Türkeireise prüfen',
      body: 'Senden Sie uns kurz Ihre Situation. Hasan Doğru erhält die Angaben vorab und kann mit konkretem Kontext antworten.',
      button: 'WhatsApp Formular öffnen',
    };
  }

  if (language === 'en') {
    if (placement === 'intro') {
      return {
        eyebrow: 'Saklı Pay & Tenkis',
        title: 'Was your forced share in Turkey violated?',
        body: 'We review wills, Tapu transfers, deadlines, and whether Tenkis Davası or Muris Muvazaası is the stronger legal route.',
        button: 'Start WhatsApp request',
      };
    }
    if (placement === 'mid') {
      return {
        eyebrow: 'Deadlines & strategy',
        title: 'Do not miss the 1-year deadline',
        body: 'In diaspora inheritance cases, the date you learned of the violation can decide the case. Have the deadlines checked early.',
        button: 'Describe your case on WhatsApp',
      };
    }
    return {
      eyebrow: 'From abroad',
      title: 'Review Tenkis or Muris Muvazaası without travelling',
      body: 'Send us a short summary first. Hasan Doğru receives the context before the WhatsApp chat opens.',
      button: 'Open WhatsApp form',
    };
  }

  if (placement === 'intro') {
    return {
      eyebrow: 'Saklı pay & tenkis',
      title: 'Saklı payınız Türkiye’de ihlal edilmiş olabilir mi?',
      body: 'Vasiyet, tapu devri, süreler ve tenkis davası ya da muris muvazaası yolunun hangisinin daha güçlü olduğunu değerlendirelim.',
      button: 'WhatsApp talebi başlat',
    };
  }
  if (placement === 'mid') {
    return {
      eyebrow: 'Süreler & strateji',
      title: '1 yıllık hak düşürücü süreyi kaçırmayın',
      body: 'Almanya’daki mirasçılar için ihlalin ne zaman öğrenildiği kritik olabilir. Süreleri ve dava yolunu erken netleştirelim.',
      button: "Durumunuzu WhatsApp'tan anlatın",
    };
  }
  return {
    eyebrow: "Almanya'dan takip",
    title: "Tenkis veya muris muvazaası yolunu Türkiye'ye gitmeden değerlendirelim",
    body: 'Kısa bilgilerinizi gönderin. Hasan Doğru WhatsApp görüşmesinden önce durumunuzu bağlamıyla görsün.',
    button: 'WhatsApp formunu aç',
  };
}

function getInheritanceGuideCTACopy(language: string, placement: BlogWhatsAppCTAPlacement) {
  if (language === 'de') {
    if (placement === 'intro') {
      return {
        eyebrow: 'Erbschaft Türkei',
        title: 'Erbfall in der Türkei aus Deutschland abwickeln?',
        body: 'Wir prüfen Erbschein, Immobilien, Bankkonten, Erbschaftsteuer und ob Sie den Nachlass ohne Reise in die Türkei regeln können.',
        button: 'WhatsApp Anfrage starten',
      };
    }
    if (placement === 'mid') {
      return {
        eyebrow: 'Veraset, Tapu & Fristen',
        title: 'Bevor Erbanteile, Immobilien oder Fristen blockieren',
        body: 'Gerade bei deutsch-türkischen Erbfällen müssen Veraset İlamı, Tapu, Steuer, Miterben und mögliche Pflichtteilsfragen zusammen geprüft werden.',
        button: 'Erbfall per WhatsApp schildern',
      };
    }
    return {
      eyebrow: 'Von Deutschland aus',
      title: 'Türkische Erbschaft mit klarem Fahrplan lösen',
      body: 'Senden Sie uns kurz, wer verstorben ist, welche Vermögenswerte in der Türkei liegen und welche Dokumente vorhanden sind. Hasan Doğru erhält den Kontext vorab.',
      button: 'WhatsApp Formular öffnen',
    };
  }

  if (language === 'en') {
    if (placement === 'intro') {
      return {
        eyebrow: 'Turkish inheritance',
        title: 'Handling an inheritance in Turkey from Germany?',
        body: 'We review inheritance certificates, property, bank accounts, inheritance tax and whether the estate can be handled without travelling.',
        button: 'Start WhatsApp request',
      };
    }
    if (placement === 'mid') {
      return {
        eyebrow: 'Certificate, Tapu & deadlines',
        title: 'Clarify the estate before documents or co-heirs block progress',
        body: 'German-Turkish inheritance cases often require checking Veraset İlamı, title deeds, tax, co-heirs and possible forced-share claims together.',
        button: 'Describe your inheritance case',
      };
    }
    return {
      eyebrow: 'From Germany',
      title: 'Resolve a Turkish inheritance with a clear plan',
      body: 'Send us who passed away, what assets are in Turkey and which documents you already have. Hasan Doğru receives the context first.',
      button: 'Open WhatsApp form',
    };
  }

  if (placement === 'intro') {
    return {
      eyebrow: 'Türkiye’de miras',
      title: "Türkiye'deki miras işlerinizi Almanya'dan mı çözmek istiyorsunuz?",
      body: 'Veraset ilamı, tapu, banka hesabı, veraset vergisi ve Türkiye’ye gitmeden işlem yapılıp yapılamayacağını birlikte değerlendirelim.',
      button: 'WhatsApp talebi başlat',
    };
  }
  if (placement === 'mid') {
    return {
      eyebrow: 'Veraset, tapu & süreler',
      title: 'Miras payları, taşınmazlar veya süreler sorun olmadan ilerleyin',
      body: 'Almanya-Türkiye miras dosyalarında veraset ilamı, tapu, vergi, mirasçılar ve saklı pay konuları birlikte kontrol edilmelidir.',
      button: "Miras durumunuzu anlatın",
    };
  }
  return {
    eyebrow: "Almanya'dan takip",
    title: "Türkiye'deki miras sürecinizi net bir planla çözelim",
    body: 'Vefat eden kişiyi, Türkiye’deki malvarlığını ve elinizdeki belgeleri kısaca gönderin. Hasan Doğru görüşmeden önce bağlamı görsün.',
    button: 'WhatsApp formunu aç',
  };
}

function getPropertyRightsCTACopy(language: string, placement: BlogWhatsAppCTAPlacement) {
  if (language === 'de') {
    if (placement === 'intro') {
      return {
        eyebrow: 'Tapu & Immobilienrecht',
        title: 'Unsicher, welche Rechte Sie an einer Immobilie in der Türkei haben?',
        body: 'Wir prüfen Tapu, Eigentumsform, Belastungen und ob Kauf, Verkauf, Erbschaft oder Streitfall von Deutschland aus gelöst werden kann.',
        button: 'WhatsApp Anfrage starten',
      };
    }
    if (placement === 'mid') {
      return {
        eyebrow: 'Vor dem nächsten Schritt',
        title: 'Tapu, İskan und Belastungen zuerst prüfen',
        body: 'Hypothek, Haciz, Kat İrtifakı oder ungeklärte Miteigentumsanteile können teuer werden. Lassen Sie den Status prüfen, bevor Sie handeln.',
        button: 'Tapu-Fall per WhatsApp schildern',
      };
    }
    return {
      eyebrow: 'Von Deutschland aus',
      title: 'Türkische Immobilie kaufen, verkaufen oder Streit lösen',
      body: 'Senden Sie uns kurz Ihre Situation. Hasan Doğru erhält die Angaben vorab und kann mit konkretem Kontext antworten.',
      button: 'WhatsApp Formular öffnen',
    };
  }

  if (language === 'en') {
    if (placement === 'intro') {
      return {
        eyebrow: 'Tapu & property law',
        title: 'Unsure what rights you have over Turkish property?',
        body: 'We review the Tapu, ownership type, encumbrances, and whether a purchase, sale, inheritance issue, or dispute can be handled from abroad.',
        button: 'Start WhatsApp request',
      };
    }
    if (placement === 'mid') {
      return {
        eyebrow: 'Before the next step',
        title: 'Check the Tapu, İskan and encumbrances first',
        body: 'A mortgage, attachment, Kat İrtifakı, or unclear co-ownership shares can become expensive. Get the status checked before acting.',
        button: 'Describe your property issue',
      };
    }
    return {
      eyebrow: 'From abroad',
      title: 'Buy, sell, manage or dispute Turkish property',
      body: 'Send us a short summary first. Hasan Doğru receives the context before the WhatsApp chat opens.',
      button: 'Open WhatsApp form',
    };
  }

  if (placement === 'intro') {
    return {
      eyebrow: 'Tapu & gayrimenkul hukuku',
      title: "Türkiye'deki taşınmaz üzerindeki hakkınız net mi?",
      body: "Tapu kaydı, mülkiyet türü, şerhler ve alım-satım, miras ya da uyuşmazlık sürecinin Almanya'dan nasıl yönetileceğini değerlendirelim.",
      button: 'WhatsApp talebi başlat',
    };
  }
  if (placement === 'mid') {
    return {
      eyebrow: 'İşlemden önce',
      title: 'Tapu, iskan ve şerhleri önce kontrol edin',
      body: 'İpotek, haciz, kat irtifakı veya belirsiz pay durumu ileride ciddi masraf doğurabilir. Adım atmadan önce hukuki durumu netleştirelim.',
      button: "Tapu durumunuzu WhatsApp'tan anlatın",
    };
  }
  return {
    eyebrow: "Almanya'dan takip",
    title: "Türkiye'deki taşınmaz işleminizi veya uyuşmazlığınızı uzaktan çözelim",
    body: 'Kısa bilgilerinizi gönderin. Hasan Doğru WhatsApp görüşmesinden önce durumunuzu bağlamıyla görsün.',
    button: 'WhatsApp formunu aç',
  };
}

function getMurisMuvazaasiCTACopy(language: string, placement: BlogWhatsAppCTAPlacement) {
  if (language === 'de') {
    if (placement === 'intro') {
      return {
        eyebrow: 'Muris Muvazaası',
        title: 'Wurde eine türkische Immobilie als Scheinverkauf übertragen?',
        body: 'Wir prüfen Tapu-Verlauf, Kaufpreis, Erbenstellung und ob sofort ein Verfügungsverbot im Grundbuch beantragt werden sollte.',
        button: 'WhatsApp Anfrage starten',
      };
    }
    if (placement === 'mid') {
      return {
        eyebrow: 'Beweise & Tedbir',
        title: 'Beweise sichern, bevor die Immobilie weiterverkauft wird',
        body: 'Bei Muris Muvazaası zählen Marktwert, Zahlungsnachweise, Weiternutzung und Zeugen. Parallel kann ein Grundbuchverbot nötig sein.',
        button: 'Fall per WhatsApp schildern',
      };
    }
    return {
      eyebrow: 'Aus Deutschland klagen',
      title: 'Tapu-İptali-Klage ohne Reise in die Türkei vorbereiten',
      body: 'Senden Sie uns kurz Ihre Situation. Hasan Doğru erhält die Angaben vorab und kann mit konkretem Kontext antworten.',
      button: 'WhatsApp Formular öffnen',
    };
  }

  if (language === 'en') {
    if (placement === 'intro') {
      return {
        eyebrow: 'Muris Muvazaası',
        title: 'Was Turkish property transferred through a sham sale?',
        body: 'We review the title history, recorded price, heir status, and whether an urgent title freeze should be filed.',
        button: 'Start WhatsApp request',
      };
    }
    if (placement === 'mid') {
      return {
        eyebrow: 'Evidence & injunction',
        title: 'Secure evidence before the property is sold again',
        body: 'Muris Muvazaası cases turn on market value, payment records, continued use, witnesses, and fast interim protection.',
        button: 'Describe your case on WhatsApp',
      };
    }
    return {
      eyebrow: 'Claim from abroad',
      title: 'Prepare a title cancellation claim without travelling to Turkey',
      body: 'Send us a short summary first. Hasan Doğru receives the context before the WhatsApp chat opens.',
      button: 'Open WhatsApp form',
    };
  }

  if (placement === 'intro') {
    return {
      eyebrow: 'Muris muvazaası',
      title: "Taşınmaz tapuda satış gösterilip gerçekte bağış mı yapıldı?",
      body: 'Tapu geçmişi, satış bedeli, mirasçılık durumu ve ihtiyati tedbir gerekip gerekmediğini Almanya’dan değerlendirelim.',
      button: 'WhatsApp talebi başlat',
    };
  }
  if (placement === 'mid') {
    return {
      eyebrow: 'Delil & ihtiyati tedbir',
      title: 'Taşınmaz el değiştirmeden delilleri güvenceye alın',
      body: 'Muris muvazaasında piyasa değeri, ödeme kaydı, kullanım durumu ve tanıklar kritik delildir. Gerekirse tapuya tedbir konulmalıdır.',
      button: "Durumunuzu WhatsApp'tan anlatın",
    };
  }
  return {
    eyebrow: "Almanya'dan dava takibi",
    title: "Tapu iptali ve tescil davasını Türkiye'ye gitmeden hazırlayalım",
    body: 'Kısa bilgilerinizi gönderin. Hasan Doğru WhatsApp görüşmesinden önce durumunuzu bağlamıyla görsün.',
    button: 'WhatsApp formunu aç',
  };
}

function getMaviKartCTACopy(language: string, placement: BlogWhatsAppCTAPlacement) {
  if (language === 'de') {
    if (placement === 'intro') {
      return {
        eyebrow: 'Mavi Kart Rechte',
        title: 'Blaue Karte, Erbe oder Immobilie in der Türkei?',
        body: 'Wir prüfen, welche Rechte Sie nach Art. 28 TVK behalten und wie Sie Kauf, Tapu, Erbschaft oder Nachlassplanung aus Deutschland lösen.',
        button: 'WhatsApp Anfrage starten',
      };
    }
    if (placement === 'mid') {
      return {
        eyebrow: 'Tapu & Erbrecht',
        title: 'Behörden behandeln Sie wie einen normalen Ausländer?',
        body: 'Bei Tapu-Amt, Erbschaft oder Mavi-Kart-Nachweis kann ein gezielter Verweis auf Art. 28 TVK den Unterschied machen.',
        button: 'Mavi-Kart-Fall schildern',
      };
    }
    return {
      eyebrow: 'Von Deutschland aus',
      title: 'Mavi-Kart-Rechte in der Türkei praktisch durchsetzen',
      body: 'Senden Sie uns kurz Ihre Situation. Hasan Doğru erhält die Angaben vorab und kann mit konkretem Kontext antworten.',
      button: 'WhatsApp Formular öffnen',
    };
  }

  if (language === 'en') {
    if (placement === 'intro') {
      return {
        eyebrow: 'Mavi Kart rights',
        title: 'Blue Card, inheritance or property in Turkey?',
        body: 'We review which rights you retain under Art. 28 TVK and how property, title deed, inheritance, or estate planning can be handled from Germany.',
        button: 'Start WhatsApp request',
      };
    }
    if (placement === 'mid') {
      return {
        eyebrow: 'Title deed & inheritance',
        title: 'Are Turkish authorities treating you like a regular foreigner?',
        body: 'For land registry, inheritance, or proof of Mavi Kart status, a targeted Art. 28 TVK intervention can resolve the issue.',
        button: 'Describe your Mavi Kart issue',
      };
    }
    return {
      eyebrow: 'From abroad',
      title: 'Enforce your Mavi Kart rights in Turkey',
      body: 'Send us a short summary first. Hasan Doğru receives the context before the WhatsApp chat opens.',
      button: 'Open WhatsApp form',
    };
  }

  if (placement === 'intro') {
    return {
      eyebrow: 'Mavi Kart hakları',
      title: "Mavi Kart, miras veya Türkiye'de gayrimenkul meseleniz mi var?",
      body: 'TVK Madde 28 kapsamındaki haklarınızı ve tapu, miras ya da planlama sürecinin Almanya’dan nasıl yürütüleceğini değerlendirelim.',
      button: 'WhatsApp talebi başlat',
    };
  }
  if (placement === 'mid') {
    return {
      eyebrow: 'Tapu & miras',
      title: 'Kurumlar sizi normal yabancı gibi mi değerlendiriyor?',
      body: 'Tapu, miras veya Mavi Kart ispatında TVK Madde 28’e doğru şekilde dayanmak işlemin seyrini değiştirebilir.',
      button: "Mavi Kart durumunuzu anlatın",
    };
  }
  return {
    eyebrow: "Almanya'dan takip",
    title: "Türkiye'deki Mavi Kart haklarınızı pratikte kullanalım",
    body: 'Kısa bilgilerinizi gönderin. Hasan Doğru WhatsApp görüşmesinden önce durumunuzu bağlamıyla görsün.',
    button: 'WhatsApp formunu aç',
  };
}

function getDebtCollectionCTACopy(language: string, placement: BlogWhatsAppCTAPlacement) {
  if (language === 'de') {
    if (placement === 'intro') {
      return {
        eyebrow: 'Forderung in der Türkei',
        title: 'Schuldet Ihnen jemand in der Türkei Geld?',
        body: 'Wir prüfen Forderung, Belege, Schuldnervermögen und ob İcra Takibi, Tenfiz oder İhtiyati Haciz der schnellste Weg ist.',
        button: 'WhatsApp Anfrage starten',
      };
    }
    if (placement === 'mid') {
      return {
        eyebrow: 'Konten, Tapu & Fristen',
        title: 'Bevor der Schuldner Vermögen verschiebt',
        body: 'Bei Bankkonten, Immobilien oder offenen Kaufpreisen zählt Tempo. Wir prüfen, ob eine Pfändung oder vorläufige Sicherung möglich ist.',
        button: 'Forderung per WhatsApp schildern',
      };
    }
    return {
      eyebrow: 'Von Deutschland aus',
      title: 'Forderung in der Türkei ohne Anreise durchsetzen',
      body: 'Senden Sie uns Betrag, Schuldnerort und vorhandene Belege. Hasan Doğru erhält die Angaben vorab und kann mit konkretem Kontext antworten.',
      button: 'WhatsApp Formular öffnen',
    };
  }

  if (language === 'en') {
    if (placement === 'intro') {
      return {
        eyebrow: 'Debt in Turkey',
        title: 'Does someone in Turkey owe you money?',
        body: 'We review the claim, evidence, debtor assets, and whether Icra Takibi, Tenfiz, or interim seizure is the fastest route.',
        button: 'Start WhatsApp request',
      };
    }
    if (placement === 'mid') {
      return {
        eyebrow: 'Accounts, title deed & deadlines',
        title: 'Act before assets are moved',
        body: 'For bank accounts, real estate, unpaid purchase prices or support payments, speed matters. We check whether seizure can start from Germany.',
        button: 'Describe your claim',
      };
    }
    return {
      eyebrow: 'From Germany',
      title: 'Enforce a Turkish debt claim without travelling',
      body: 'Send us the amount, debtor location and available evidence first. Hasan Doğru receives the context before the WhatsApp chat opens.',
      button: 'Open WhatsApp form',
    };
  }

  if (placement === 'intro') {
    return {
      eyebrow: 'Türkiye’de alacak tahsili',
      title: "Türkiye'de biri size para mı borçlu?",
      body: 'Alacak, deliller, borçlunun malvarlığı ve icra takibi, tenfiz ya da ihtiyati haciz yolunun hangisinin doğru olduğunu değerlendirelim.',
      button: 'WhatsApp talebi başlat',
    };
  }
  if (placement === 'mid') {
    return {
      eyebrow: 'Banka, tapu & süreler',
      title: 'Borçlu mal kaçırmadan harekete geçin',
      body: 'Banka hesabı, taşınmaz, satış bedeli veya nafaka alacağında hız önemlidir. Almanya’dan haciz veya ihtiyati haciz imkânını kontrol edelim.',
      button: "Alacağınızı WhatsApp'tan anlatın",
    };
  }
  return {
    eyebrow: "Almanya'dan takip",
    title: "Türkiye'deki alacağınızı seyahat etmeden tahsil edelim",
    body: 'Tutarı, borçlunun bulunduğu yeri ve elinizdeki belgeleri gönderin. Hasan Doğru WhatsApp görüşmesinden önce durumunuzu bağlamıyla görsün.',
    button: 'WhatsApp formunu aç',
  };
}

function getDivorceTurkeyCTACopy(language: string, placement: BlogWhatsAppCTAPlacement) {
  if (language === 'de') {
    if (placement === 'intro') {
      return {
        eyebrow: 'Scheidung Türkei',
        title: 'Scheidung in der Türkei aus Deutschland planen?',
        body: 'Wir prüfen, ob Deutschland oder die Türkei der bessere Weg ist, ob eine einvernehmliche Scheidung möglich ist und ob Sie persönlich reisen müssen.',
        button: 'WhatsApp Anfrage starten',
      };
    }
    if (placement === 'mid') {
      return {
        eyebrow: 'Anlaşmalı oder streitig',
        title: 'Vor dem Antrag: Protokoll, Zuständigkeit und Reise klären',
        body: 'Bei türkischen Scheidungen entscheiden Protokoll, Vollmacht, Gerichtsort und Folgesachen wie Unterhalt oder Sorgerecht über Tempo und Kosten.',
        button: 'Scheidungsfall schildern',
      };
    }
    return {
      eyebrow: 'Von Deutschland aus',
      title: 'Türkische Scheidung ohne unnötige Reise vorbereiten',
      body: 'Senden Sie uns kurz Ihre Situation: Aufenthaltsort beider Ehegatten, Kinder, Vermögen und ob Einigkeit besteht. Hasan Doğru erhält den Kontext vorab.',
      button: 'WhatsApp Formular öffnen',
    };
  }

  if (language === 'en') {
    if (placement === 'intro') {
      return {
        eyebrow: 'Divorce in Turkey',
        title: 'Planning a Turkish divorce from Germany?',
        body: 'We check whether Germany or Turkey is the better forum, whether amicable divorce is realistic, and whether you need to travel.',
        button: 'Start WhatsApp request',
      };
    }
    if (placement === 'mid') {
      return {
        eyebrow: 'Amicable or contested',
        title: 'Before filing: protocol, jurisdiction and travel risk',
        body: 'In Turkish divorce cases, the protocol, power of attorney, court venue, custody, alimony and property issues determine speed and cost.',
        button: 'Describe your divorce case',
      };
    }
    return {
      eyebrow: 'From Germany',
      title: 'Prepare a Turkish divorce without unnecessary travel',
      body: 'Send us where both spouses live, whether children or property are involved, and whether there is agreement. Hasan Doğru receives the context first.',
      button: 'Open WhatsApp form',
    };
  }

  if (placement === 'intro') {
    return {
      eyebrow: 'Türkiye’de boşanma',
      title: "Almanya'dan Türkiye'de boşanma sürecini mi planlıyorsunuz?",
      body: 'Almanya’da mı Türkiye’de mi dava açılmalı, anlaşmalı boşanma mümkün mü ve Türkiye’ye gitmeniz gerekir mi birlikte değerlendirelim.',
      button: 'WhatsApp talebi başlat',
    };
  }
  if (placement === 'mid') {
    return {
      eyebrow: 'Anlaşmalı mı çekişmeli mi?',
      title: 'Dava açmadan önce protokol, yetki ve seyahat konusunu netleştirin',
      body: 'Türkiye’de boşanmada protokol, vekâletname, mahkeme yeri, velayet, nafaka ve mal paylaşımı sürecin hızını ve maliyetini belirler.',
      button: "Boşanma durumunuzu anlatın",
    };
  }
  return {
    eyebrow: "Almanya'dan takip",
    title: "Türkiye'deki boşanma sürecinizi gereksiz seyahat olmadan hazırlayalım",
    body: 'Eşlerin nerede yaşadığını, çocuk veya mal varlığı olup olmadığını ve anlaşma durumunu gönderin. Hasan Doğru görüşmeden önce bağlamı görsün.',
    button: 'WhatsApp formunu aç',
  };
}

function getTanimaTenfizCTACopy(language: string, placement: BlogWhatsAppCTAPlacement) {
  if (language === 'de') {
    if (placement === 'intro') {
      return {
        eyebrow: 'Tanıma & Tenfiz',
        title: 'In Deutschland geschieden, in der Türkei noch verheiratet?',
        body: 'Wir prüfen, ob Tanıma genügt oder Tenfiz nötig ist, welche Unterlagen fehlen und ob das Verfahren ohne Reise möglich ist.',
        button: 'WhatsApp Anfrage starten',
      };
    }
    if (placement === 'mid') {
      return {
        eyebrow: 'Register, Fristen & Unterlagen',
        title: 'Bevor Erbe, Ehe oder Vermögen blockiert werden',
        body: 'Türkisches Personenstandsregister, Apostille, Übersetzung, Zustellung und mögliche Güterrechtsfristen sollten früh geklärt werden.',
        button: 'Tanıma-Tenfiz-Fall schildern',
      };
    }
    return {
      eyebrow: 'Ohne Türkeireise',
      title: 'Deutsche Scheidung in der Türkei anerkennen lassen',
      body: 'Senden Sie uns kurz Ihre Situation und welche Dokumente vorliegen. Hasan Doğru erhält die Angaben vorab und kann konkret antworten.',
      button: 'WhatsApp Formular öffnen',
    };
  }

  if (language === 'en') {
    if (placement === 'intro') {
      return {
        eyebrow: 'Tanıma & Tenfiz',
        title: 'Divorced in Germany but still married in Turkey?',
        body: 'We check whether recognition alone is enough, whether enforcement is needed, which documents are missing, and whether travel can be avoided.',
        button: 'Start WhatsApp request',
      };
    }
    if (placement === 'mid') {
      return {
        eyebrow: 'Registry, deadlines & documents',
        title: 'Fix the Turkish record before it blocks inheritance or remarriage',
        body: 'Civil registry status, apostille, translation, service of process and property-division deadlines should be checked early.',
        button: 'Describe your recognition case',
      };
    }
    return {
      eyebrow: 'No Turkey travel',
      title: 'Have your German divorce recognised in Turkey',
      body: 'Send us your situation and which documents you already have. Hasan Doğru receives the context before the WhatsApp chat opens.',
      button: 'Open WhatsApp form',
    };
  }

  if (placement === 'intro') {
    return {
      eyebrow: 'Tanıma & tenfiz',
      title: "Almanya'da boşandınız ama Türkiye'de hâlâ evli mi görünüyorsunuz?",
      body: 'Tanıma yeterli mi, tenfiz gerekir mi, hangi belgeler eksik ve Türkiye’ye gitmeden süreç yürür mü birlikte değerlendirelim.',
      button: 'WhatsApp talebi başlat',
    };
  }
  if (placement === 'mid') {
    return {
      eyebrow: 'Nüfus kaydı, süreler & belgeler',
      title: 'Miras, evlilik veya mal paylaşımı bloke olmadan çözün',
      body: 'Apostil, tercüme, tebligat, nüfus kaydı ve Türkiye’deki mal paylaşımı süreleri erken kontrol edilmelidir.',
      button: 'Tanıma-tenfiz durumunuzu anlatın',
    };
  }
  return {
    eyebrow: "Türkiye'ye gitmeden",
    title: "Alman boşanma kararınızı Türkiye'de tanıtalım",
    body: 'Durumunuzu ve elinizdeki belgeleri kısaca gönderin. Hasan Doğru WhatsApp görüşmesinden önce bağlamı görsün.',
    button: 'WhatsApp formunu aç',
  };
}

function getSorgerechtTenfizCTACopy(language: string, placement: BlogWhatsAppCTAPlacement) {
  if (language === 'de') {
    if (placement === 'intro') {
      return {
        eyebrow: 'Sorgerecht & Tenfiz',
        title: 'Deutsche Sorgerechtsentscheidung in der Türkei durchsetzen?',
        body: 'Wir prüfen, ob Tenfiz nötig ist, welche Unterlagen fehlen und wie das Verfahren aus Deutschland vorbereitet werden kann.',
        button: 'WhatsApp Anfrage starten',
      };
    }
    if (placement === 'mid') {
      return {
        eyebrow: 'Kind, Register & Gericht',
        title: 'Bei Sorgerecht reicht Tanıma oft nicht aus',
        body: 'Wenn türkische Behörden, Schulen oder Gerichte die Entscheidung beachten sollen, müssen Zuständigkeit, Kindeswohl, Unterlagen und Vollstreckbarkeit sauber geprüft werden.',
        button: 'Sorgerechtsfall schildern',
      };
    }
    return {
      eyebrow: 'Von Deutschland aus',
      title: 'Sorgerecht mit Türkei-Bezug rechtssicher klären',
      body: 'Senden Sie uns kurz, welche Entscheidung vorliegt, wo das Kind lebt und was in der Türkei anerkannt werden soll. Hasan Doğru erhält den Kontext vorab.',
      button: 'WhatsApp Formular öffnen',
    };
  }

  if (language === 'en') {
    if (placement === 'intro') {
      return {
        eyebrow: 'Custody & enforcement',
        title: 'Need a German custody decision recognised in Turkey?',
        body: 'We check whether enforcement is required, which documents are missing, and how the process can be prepared from Germany.',
        button: 'Start WhatsApp request',
      };
    }
    if (placement === 'mid') {
      return {
        eyebrow: 'Child, registry & court',
        title: 'For custody, recognition alone is often not enough',
        body: 'If Turkish authorities, schools or courts must follow the decision, jurisdiction, child welfare, documents and enforceability need careful review.',
        button: 'Describe your custody case',
      };
    }
    return {
      eyebrow: 'From Germany',
      title: 'Clarify a Germany-Turkey custody issue safely',
      body: 'Send us which decision exists, where the child lives and what should be recognised in Turkey. Hasan Doğru receives the context first.',
      button: 'Open WhatsApp form',
    };
  }

  if (placement === 'intro') {
    return {
      eyebrow: 'Velayet & tenfiz',
      title: "Alman velayet kararının Türkiye'de geçerli olması mı gerekiyor?",
      body: 'Tenfiz gerekip gerekmediğini, hangi belgelerin eksik olduğunu ve sürecin Almanya’dan nasıl yürütüleceğini değerlendirelim.',
      button: 'WhatsApp talebi başlat',
    };
  }
  if (placement === 'mid') {
    return {
      eyebrow: 'Çocuk, nüfus & mahkeme',
      title: 'Velayet kararlarında tanıma çoğu zaman yeterli olmayabilir',
      body: 'Türk kurumları, okullar veya mahkemeler kararınıza göre işlem yapacaksa yetki, çocuğun üstün yararı, belgeler ve icra edilebilirlik birlikte incelenmelidir.',
      button: 'Velayet durumunuzu anlatın',
    };
  }
  return {
    eyebrow: "Almanya'dan takip",
    title: "Türkiye bağlantılı velayet sürecinizi güvenli şekilde netleştirelim",
    body: 'Hangi kararın mevcut olduğunu, çocuğun nerede yaşadığını ve Türkiye’de neyin tanınması gerektiğini gönderin. Hasan Doğru önce bağlamı görsün.',
    button: 'WhatsApp formunu aç',
  };
}

function getUnterhaltNafakaCTACopy(language: string, placement: BlogWhatsAppCTAPlacement) {
  if (language === 'de') {
    if (placement === 'intro') {
      return {
        eyebrow: 'Unterhalt & Nafaka',
        title: 'Unterhalt nach türkischem Recht klären?',
        body: 'Wir prüfen, ob Yoksulluk Nafakası, Kindesunterhalt, Abänderung oder grenzüberschreitende Vollstreckung für Ihren Fall relevant ist.',
        button: 'WhatsApp Anfrage starten',
      };
    }
    if (placement === 'mid') {
      return {
        eyebrow: 'Kindesunterhalt & Titel',
        title: 'Betrag, Zuständigkeit und Durchsetzung sauber einordnen',
        body: 'Gerade bei Deutschland-Türkei-Fällen entscheiden Wohnsitz, Einkommen, bestehende Titel und Vollstreckungsort über die richtige Strategie.',
        button: 'Unterhaltsfall schildern',
      };
    }
    return {
      eyebrow: 'Deutschland-Türkei',
      title: 'Nafaka-Anspruch oder Unterhaltstitel durchsetzen',
      body: 'Senden Sie uns kurz, wer zahlen muss, wo die Parteien leben, ob ein Titel besteht und welcher Betrag offen ist. Hasan Doğru erhält den Kontext vorab.',
      button: 'WhatsApp Formular öffnen',
    };
  }

  if (language === 'en') {
    if (placement === 'intro') {
      return {
        eyebrow: 'Maintenance & nafaka',
        title: 'Need to clarify maintenance under Turkish law?',
        body: 'We review whether spousal maintenance, child support, modification or cross-border enforcement is relevant for your case.',
        button: 'Start WhatsApp request',
      };
    }
    if (placement === 'mid') {
      return {
        eyebrow: 'Child support & enforcement',
        title: 'Clarify amount, jurisdiction and enforcement route',
        body: 'In Germany-Turkey cases, residence, income, existing orders and enforcement location determine the right strategy.',
        button: 'Describe your maintenance case',
      };
    }
    return {
      eyebrow: 'Germany-Turkey',
      title: 'Enforce or review a nafaka claim',
      body: 'Send us who must pay, where both parties live, whether an order exists and what amount is unpaid. Hasan Doğru receives the context first.',
      button: 'Open WhatsApp form',
    };
  }

  if (placement === 'intro') {
    return {
      eyebrow: 'Nafaka & icra',
      title: 'Türk hukukunda nafaka durumunuzu netleştirmek mi istiyorsunuz?',
      body: 'Yoksulluk nafakası, iştirak nafakası, nafaka uyarlama veya Almanya-Türkiye arasında icra yolunu birlikte değerlendirelim.',
      button: 'WhatsApp talebi başlat',
    };
  }
  if (placement === 'mid') {
    return {
      eyebrow: 'Çocuk nafakası & icra',
      title: 'Miktar, yetki ve icra yolunu doğru belirleyin',
      body: 'Almanya-Türkiye nafaka dosyalarında ikamet, gelir, mevcut karar ve icra yeri doğru stratejiyi belirler.',
      button: 'Nafaka durumunuzu anlatın',
    };
  }
  return {
    eyebrow: 'Almanya-Türkiye',
    title: 'Nafaka alacağınızı veya nafaka kararınızı takip edelim',
    body: 'Kimin ödeme yapması gerektiğini, tarafların nerede yaşadığını, karar olup olmadığını ve açık tutarı gönderin. Hasan Doğru önce bağlamı görsün.',
    button: 'WhatsApp formunu aç',
  };
}

function getTck191KdaeCTACopy(language: string, placement: BlogWhatsAppCTAPlacement) {
  if (language === 'de') {
    if (placement === 'intro') {
      return {
        eyebrow: 'TCK 191 & KDAE',
        title: 'KDAE-Beschluss oder TCK-191-Dossier in der Türkei?',
        body: 'Vor einer Türkei-Reise prüfen wir UYAP, Zustellung, Bewährungsauflagen und mögliches Haftbefehlsrisiko.',
        button: 'WhatsApp Anfrage starten',
      };
    }
    if (placement === 'mid') {
      return {
        eyebrow: 'Zustellung & Reisefähigkeit',
        title: 'Nicht wissen schützt nicht vor Verfahrensfortsetzung',
        body: 'Wenn ein KDAE-Beschluss an eine alte Adresse ging oder Auflagen verpasst wurden, sollte der Status vor jeder Einreise geklärt werden.',
        button: 'KDAE-Fall schildern',
      };
    }
    return {
      eyebrow: 'Vor der Türkei-Reise',
      title: 'TCK-191-Status aus Deutschland klären',
      body: 'Senden Sie uns kurz, wann der Vorfall war, ob Post aus der Türkei kam und ob eine Reise geplant ist. Hasan Doğru erhält den Kontext vorab.',
      button: 'WhatsApp Formular öffnen',
    };
  }

  if (language === 'en') {
    if (placement === 'intro') {
      return {
        eyebrow: 'TCK 191 & KDAE',
        title: 'Drug case, KDAE decision or warrant risk in Turkey?',
        body: 'Before travelling to Turkey, we can check UYAP, service of process, probation obligations and possible arrest-warrant risk.',
        button: 'Start WhatsApp request',
      };
    }
    if (placement === 'mid') {
      return {
        eyebrow: 'Service & travel risk',
        title: 'A case can continue even if you never received notice',
        body: 'If a KDAE decision was sent to an old address or obligations were missed, the status should be checked before any trip.',
        button: 'Describe your KDAE case',
      };
    }
    return {
      eyebrow: 'Before travelling',
      title: 'Clarify your TCK-191 status from Germany',
      body: 'Send us when the incident happened, whether Turkish mail arrived and whether travel is planned. Hasan Doğru receives the context first.',
      button: 'Open WhatsApp form',
    };
  }

  if (placement === 'intro') {
    return {
      eyebrow: 'TCK 191 & KDAE',
      title: "Türkiye'de TCK 191 veya KDAE dosyanız olabilir mi?",
      body: "Türkiye'ye gitmeden önce UYAP, tebligat, denetimli serbestlik yükümlülükleri ve yakalama riski kontrol edilmelidir.",
      button: 'WhatsApp talebi başlat',
    };
  }
  if (placement === 'mid') {
    return {
      eyebrow: 'Tebligat & seyahat riski',
      title: 'Haberiniz olmasa bile dosya ilerleyebilir',
      body: 'KDAE kararı eski adrese gönderildiyse veya yükümlülükler yerine getirilmediyse, Türkiye’ye gitmeden önce durum netleştirilmelidir.',
      button: 'KDAE durumunuzu anlatın',
    };
  }
  return {
    eyebrow: "Türkiye'ye gitmeden önce",
    title: "TCK 191 dosyanızı Almanya'dan netleştirin",
    body: 'Olay tarihini, Türkiye’den tebligat gelip gelmediğini ve seyahat planınızı kısaca gönderin. Hasan Doğru görüşmeden önce bağlamı görsün.',
    button: 'WhatsApp formunu aç',
  };
}

function BlogWhatsAppCTA({
  language,
  placement,
  topic,
}: {
  language: string;
  placement: BlogWhatsAppCTAPlacement;
  topic: BlogWhatsAppCTATopic;
}) {
  const copy = topic === 'property_partition'
    ? getPropertyPartitionCTACopy(language, placement)
    : topic === 'hagb'
      ? getHagbCTACopy(language, placement)
    : topic === 'hakaret'
      ? getHakaretCTACopy(language, placement)
    : topic === 'property_rights'
      ? getPropertyRightsCTACopy(language, placement)
    : topic === 'mavi_kart'
      ? getMaviKartCTACopy(language, placement)
    : topic === 'debt_collection'
      ? getDebtCollectionCTACopy(language, placement)
    : topic === 'divorce_turkey'
      ? getDivorceTurkeyCTACopy(language, placement)
    : topic === 'tanima_tenfiz'
      ? getTanimaTenfizCTACopy(language, placement)
    : topic === 'sorgerecht_tenfiz'
      ? getSorgerechtTenfizCTACopy(language, placement)
    : topic === 'unterhalt_nafaka'
      ? getUnterhaltNafakaCTACopy(language, placement)
	    : topic === 'tck_191_kdae'
	      ? getTck191KdaeCTACopy(language, placement)
	    : topic === 'drug_case'
	      ? getDrugCaseCTACopy(language, placement)
	    : topic === 'threat_case'
	      ? getThreatCaseCTACopy(language, placement)
    : topic === 'muris_muvazaasi'
      ? getMurisMuvazaasiCTACopy(language, placement)
    : topic === 'inheritance_dispute'
      ? getInheritanceDisputeCTACopy(language, placement)
    : topic === 'inheritance_guide'
      ? getInheritanceGuideCTACopy(language, placement)
      : getCriminalLawCTACopy(language, placement);
	  const isBottom = placement === 'bottom';
	  const hasTrustPortrait = topic === 'hakaret' || topic === 'drug_case' || topic === 'threat_case';
	
	  return (
	    <aside className={[
	      "relative overflow-hidden rounded-lg border shadow-[0_14px_34px_rgba(28,56,41,0.10)] md:rounded-xl md:shadow-[0_20px_56px_rgba(28,56,41,0.10)]",
	      hasTrustPortrait ? "border-[#8B6E2A]/35 bg-[#F7F5F0]" : "border-[#8B6E2A]/25 bg-white",
	      isBottom ? "mt-20 md:mt-32" : "my-10 md:my-20",
	    ].join(' ')}>
	      {hasTrustPortrait ? (
	        <>
	          <div className="absolute inset-y-0 left-0 hidden w-[42%] overflow-hidden bg-[#B8963E] md:block">
	            <img
	              src={hasanMainHero}
	              alt=""
	              aria-hidden="true"
	              className="h-full w-full object-cover object-[50%_18%]"
	            />
	            <div className="absolute inset-0 bg-[#B8963E]/18 mix-blend-multiply" />
	            <div className="absolute inset-y-0 right-[-1px] w-[46%] bg-[linear-gradient(90deg,rgba(247,245,240,0)_0%,rgba(247,245,240,0.22)_24%,rgba(247,245,240,0.62)_58%,rgba(247,245,240,0.96)_100%)]" />
	          </div>
	          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(247,245,240,0.98)_0%,rgba(247,245,240,0.94)_58%,rgba(184,150,62,0.12)_100%)] md:left-[42%]" />
	        </>
	      ) : null}
	      <div className="relative z-10 h-2 bg-[#8B6E2A]" />
	      <div className={[
	        "relative z-10 p-5 sm:p-6 md:p-9",
	        hasTrustPortrait ? "md:ml-[42%] md:min-h-[300px] md:flex md:flex-col md:justify-center" : "",
	      ].join(' ')}>
	        <div className="min-w-0">
	          <p className={[
	            "mb-3 font-sans text-[9px] font-bold uppercase tracking-[0.18em] md:text-[11px] md:tracking-[0.22em]",
	            hasTrustPortrait ? "text-[#1C3829]/70" : "text-[#7A5F20]",
	          ].join(' ')}>
	            {copy.eyebrow}
	          </p>
	          <h3 className={[
	            "mb-4 max-w-full font-serif text-[25px] leading-[1.12] text-[#1C3829] md:leading-tight",
	            hasTrustPortrait ? "md:text-[32px]" : "md:text-4xl",
	          ].join(' ')}>
	            {copy.title}
	          </h3>
	          <p className={[
	            "m-0 max-w-2xl text-[15px] leading-7 md:text-[18px] md:leading-8",
	            hasTrustPortrait ? "text-[#1f2f26]/85" : "text-[#444]",
	          ].join(' ')}>
	            {copy.body}
	          </p>
        </div>
        <div className="mt-6 border-t border-[#1C3829]/10 pt-5 md:mt-7 md:pt-6">
          <button
            type="button"
            onClick={() => openWhatsAppLeadCapture({
              service: getBlogWhatsAppService(topic),
              situation: copy.title,
            })}
            className="inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full bg-[#8B6E2A] px-5 py-3.5 text-center font-sans text-[10px] font-bold uppercase tracking-[0.12em] text-white shadow-lg transition-all duration-300 hover:bg-[#1C3829] active:scale-95 sm:w-auto sm:min-w-[280px] sm:px-6 sm:py-4 sm:text-[11px] sm:tracking-[0.16em]"
          >
            <MessageCircle size={16} className="shrink-0" />
            <span className="min-w-0 leading-5">{copy.button}</span>
          </button>
        </div>
      </div>
    </aside>
  );
}

function processInlineStyles(text: string) {
  // First split by bold markers
  const boldParts = text.split(/(\*\*.*?\*\*)/g);

  return boldParts.map((boldPart, i) => {
    if (boldPart.startsWith('**') && boldPart.endsWith('**')) {
      return (
        <strong key={`bold-${i}`} className="font-bold border-b border-[#B8963E]/20">
          {boldPart.slice(2, -2)}
        </strong>
      );
    }

    // Now split the non-bold part by link markers [text](url)
    const linkParts = boldPart.split(/(\[.*?\]\(.*?\))/g);

    return linkParts.map((linkPart, j) => {
      const linkMatch = linkPart.match(/^\[(.*?)\]\((.*?)\)$/);
      if (linkMatch) {
        const [, linkText, linkUrl] = linkMatch;
        return (
          <a
            key={`link-${i}-${j}`}
            href={linkUrl}
            target={linkUrl.startsWith('/') ? "_self" : "_blank"}
            rel={linkUrl.startsWith('/') ? "" : "noopener noreferrer"}
            className="text-[#8B6E2A] hover:text-[#1C3829] underline decoration-[#8B6E2A]/30 underline-offset-4 transition-colors font-semibold"
          >
            {linkText}
          </a>
        );
      }
      return linkPart;
    });
  });
}

function isFaqHeading(line: string) {
  const normalized = line
    .replace(/^#+\s*/, '')
    .toLocaleLowerCase('de-DE')
    .trim();

  return [
    'häufige fragen',
    'häufig gestellte fragen',
    'sıkça sorulan sorular',
    'frequently asked questions',
  ].some((heading) => normalized.includes(heading));
}

export function BlogPost() {
  const { slug } = useParams();
  const { language, t, paths } = useLanguage();
  const { scrollYProgress } = useScroll();
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Find post by localized slug or legacy slug
  const post = blogPosts.find((p) => p.slugDE === slug || p.slugTR === slug || p.slugEN === slug || p.slug === slug);
  const hasGermanContent = Boolean(post?.slugDE && post?.contentDE?.trim());
  const hasTurkishContent = Boolean(post?.slugTR && post?.contentTR?.trim());
  const hasEnglishContent = Boolean(post?.slugEN && post?.contentEN?.trim());
  const hasEnglishAlternate = Boolean(
    post?.slugEN && (hasEnglishContent || post.slugTR === 'almanya-ortak-velayet-turkiye-tenfiz')
  );
  const isAvailable = Boolean(post && (language === 'de' ? hasGermanContent : language === 'tr' ? hasTurkishContent : hasEnglishContent));
  const currentSlugForLanguage = post
    ? language === 'de'
      ? post.slugDE
      : language === 'tr'
        ? post.slugTR
        : post.slugEN
    : '';

  // Signal ready to prerenderer only if post is found
  usePrerender(isAvailable);

  const altLang = language === 'de' ? 'tr' : 'de';
  const currentCategory = post ? (language === 'de' ? post.categoryDE : language === 'tr' ? post.category : post.categoryEN) : '';
  const currentMetaTitle = post ? (language === 'de' ? post.metaTitleDE : language === 'tr' ? post.metaTitleTR : post.metaTitleEN) : undefined;
  const currentOgTitle = post?.slugTR === 'almanya-ortak-velayet-turkiye-tenfiz'
    ? language === 'de'
      ? 'Gemeinsames Sorgerecht aus Deutschland: Anerkennung in der Türkei 2026'
      : language === 'tr'
        ? "Almanya'dan Verilen Ortak Velayet Kararı Türkiye'de Tenfiz Edilir mi? 2026"
        : 'Joint Custody from Germany: Does It Apply in Turkey? (2026 Guide)'
    : undefined;
  const currentSchemaHeadline = post ? (language === 'de' ? post.schemaHeadlineDE : language === 'tr' ? post.schemaHeadlineTR : post.schemaHeadlineEN) : undefined;
  const currentOgDescription = post
    ? (language === 'de'
      ? post.ogDescriptionDE
      : language === 'tr'
        ? post.ogDescriptionTR
        : post.ogDescriptionEN)
    : undefined;
  const currentSchemaDescription = post
    ? (language === 'de'
      ? (post.schemaDescriptionDE || currentOgDescription)
      : language === 'tr'
        ? (post.schemaDescriptionTR || currentOgDescription)
        : (post.schemaDescriptionEN || currentOgDescription))
    : undefined;
  const currentPublishedAt = post
    ? (language === 'de'
      ? (post.publishedAtDE || post.publishedAt)
      : language === 'tr'
        ? (post.publishedAtTR || post.publishedAt)
        : (post.publishedAtEN || post.publishedAt))
    : undefined;
  const currentModifiedAt = post
    ? (language === 'de'
      ? (post.modifiedAtDE || post.modifiedAt || currentPublishedAt)
      : language === 'tr'
        ? (post.modifiedAtTR || post.modifiedAt || currentPublishedAt)
        : (post.modifiedAtEN || post.modifiedAt || currentPublishedAt))
    : undefined;
  const currentDescription = post
    ? (language === 'de'
      ? (post.metaDescriptionDE || post.excerptDE)
      : language === 'tr'
        ? (post.metaDescriptionTR || post.excerptTR)
        : (post.metaDescriptionEN || post.excerptEN))
    : '';
  const currentImage = post?.slugTR === 'almanya-turkiye-alacak-tahsili-icra'
    ? `${SITE_URL}/assets/debt_collection_law-BB5vtc8j.png`
    : post?.schemaImage
      ? post.schemaImage
    : post?.slugTR === 'almanya-turkiye-miras-hukuku-rehberi'
      ? `${SITE_URL}/assets/inheritance_fraud_law-BxjZQ9m1.png`
      : post?.slugTR === 'almanya-ortak-velayet-turkiye-tenfiz'
        ? `${SITE_URL}/assets/joint_custody_law-B-FOZxII.png`
      : post?.slugTR === 'veraset-ilami-nedir-nasil-alinir' && language !== 'tr'
        ? `${SITE_URL}/assets/inheritance_fraud_law-BxjZQ9m1.png`
      : post?.image;
  const currentArticleAuthor = post?.articleAuthor
    ? post.articleAuthor
    : post?.slugTR === 'almanya-bosanma-turkiye-tanima-tenfiz'
    ? 'Av. Hasan Doğru'
    : post?.slugTR === 'almanya-turkiye-alacak-tahsili-icra'
    ? 'Av. Hasan Doğru'
    : post?.slugTR === 'almanya-turkiye-miras-hukuku-rehberi'
      ? 'Av. Hasan Doğru'
      : post?.slugTR === 'veraset-ilami-nedir-nasil-alinir'
        ? 'Av. Hasan Doğru'
      : post?.slugTR === 'tanima-tenfiz-rehberi'
        ? 'Av. Hasan Doğru'
      : post?.slugTR === 'almanya-ortak-velayet-turkiye-tenfiz'
        ? 'Av. Hasan Doğru'
      : language === 'tr' ? 'Av. Hasan Doğru' : 'Hasan Doğru';
  const explicitArticleTags = post
    ? (language === 'de' ? post.articleTagsDE : language === 'tr' ? post.articleTagsTR : post.articleTagsEN)
    : undefined;
  const currentArticleTags = explicitArticleTags || (post?.slugTR === 'almanya-turkiye-alacak-tahsili-icra'
    ? language === 'de'
      ? ['Forderungseinzug Türkei', 'Zwangsvollstreckung Türkei', 'Deutschland Türkei Recht']
      : language === 'tr'
        ? ['alacak tahsili', 'icra takibi', 'Almanya Türkiye hukuk']
        : ['debt collection Turkey', 'enforce judgment Turkey', 'Turkish law Germany']
    : post?.slugTR === 'almanya-turkiye-miras-hukuku-rehberi'
      ? language === 'de'
        ? ['Erbschaft Türkei', 'Türkisches Erbrecht', 'Erbschein Türkei', 'Nachlassspaltung']
        : language === 'tr'
          ? ['Miras Hukuku', 'Türkiye Almanya Miras', 'Veraset İlamı', 'Tenkis Davası', 'Muris Muvazaası']
          : ['Turkish Inheritance', 'Turkish Inheritance Law', 'Inheriting Property Turkey', 'Turkish Probate']
      : post?.slugTR === 'veraset-ilami-nedir-nasil-alinir'
        ? language === 'de'
          ? ['Erbschein Türkei', 'Veraset İlamı', 'Türkisches Erbrecht', 'Mavi Kart Erbschein']
          : language === 'tr'
          ? ['Veraset İlamı', 'Mirasçılık Belgesi', 'Miras Hukuku Almanya', 'Mavi Kart Miras']
          : ['Turkish Inheritance Certificate', 'Veraset İlamı', 'Turkish Probate', 'Blue Card Inheritance']
      : post?.slugTR === 'tanima-tenfiz-rehberi'
        ? language === 'de'
          ? ['Anerkennung Scheidung Türkei', 'Tanıma Tenfiz', 'Hinkende Ehe', '§ 107 FamFG']
          : language === 'tr'
            ? ['Tanıma Tenfiz', 'Almanya Boşanma Türkiye', 'MÖHUK', 'Yabancı Mahkeme Kararı']
            : ['Recognition German Divorce Turkey', 'Tanıma Tenfiz', 'Turkish Family Law']
        : post?.slugTR === 'almanya-ortak-velayet-turkiye-tenfiz'
          ? language === 'de'
            ? ['Gemeinsames Sorgerecht', 'Türkei Anerkennung', 'Tenfiz']
            : language === 'tr'
              ? ['Ortak Velayet', 'Tenfiz', 'Türkiye Almanya Aile Hukuku']
              : ['Joint Custody Turkey', 'Tenfiz', 'Turkish Family Law Germany']
    : undefined);
  const currentArticleSection = post
    ? (language === 'de'
      ? (post.articleSectionDE || currentCategory)
      : language === 'tr'
        ? (post.articleSectionTR || currentCategory)
        : (post.articleSectionEN || currentCategory))
    : '';

  useSEO({
    title: isAvailable && post
      ? currentMetaTitle || (language === 'de'
        ? `${post.titleDE} | Doğru Kanzlei Blog`
        : language === 'tr'
          ? `${post.titleTR} | Doğru Kanzlei Blog`
          : `${post.titleEN} | Doğru Kanzlei Blog`)
      : language === 'de' ? 'Artikel nicht gefunden' : language === 'tr' ? 'Makale Bulunamadı' : 'Article Not Found',
    description: isAvailable ? currentDescription : '',
    lang: language,
    ogType: 'article',
    ogTitle: currentOgTitle,
    ogDescription: currentOgDescription,
    ogImage: isAvailable ? currentImage : undefined,
    canonical: isAvailable && post
      ? `${SITE_URL}/${language}/blog/${currentSlugForLanguage}`
      : undefined,
    keywords: isAvailable && post
      ? (language === 'de' ? post.keywordsDE : language === 'tr' ? post.keywordsTR : post.keywordsEN)
      : undefined,
    alternateLang: isAvailable && post && !post.exactHreflangs && hasGermanContent && hasTurkishContent ? {
      lang: language === 'de' ? 'tr' : 'de',
      href: `${SITE_URL}/${language === 'de' ? 'tr' : 'de'}/blog/${language === 'de' ? post.slugTR : post.slugDE}`,
    } : undefined,
    alternateLangs: isAvailable && post ? [
      ...(hasTurkishContent ? [{ lang: 'tr', href: `${SITE_URL}/tr/blog/${post.slugTR}` }] : []),
      ...(hasGermanContent ? [{ lang: 'de', href: `${SITE_URL}/de/blog/${post.slugDE}` }] : []),
      ...(hasGermanContent && !post.exactHreflangs ? [
        { lang: 'de-DE', href: `${SITE_URL}/de/blog/${post.slugDE}` },
        { lang: 'de-CH', href: `${SITE_URL}/de/blog/${post.slugDE}` },
        { lang: 'de-AT', href: `${SITE_URL}/de/blog/${post.slugDE}` },
      ] : []),
      ...(hasEnglishAlternate ? [{ lang: 'en', href: `${SITE_URL}/en/blog/${post.slugEN}` }] : []),
    ] : undefined,
    exactHreflangs: Boolean(post?.exactHreflangs),
    xDefault: isAvailable && post && hasGermanContent ? `${SITE_URL}/de/blog/${post.slugDE}` : undefined,
    article: isAvailable && post ? {
      publishedTime: `${currentPublishedAt}T00:00:00+00:00`,
      modifiedTime: `${currentModifiedAt}T00:00:00+00:00`,
      author: currentArticleAuthor,
      section: currentArticleSection,
      tags: currentArticleTags,
    } : undefined,
    noindex: !isAvailable,
  });

  if (!isAvailable || !post) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 bg-[#F7F5F0]">
        <h2 className="font-serif text-3xl text-[#1C3829] mb-4">
          {language === 'de' ? 'Artikel nicht gefunden' : language === 'tr' ? 'Makale Bulunamadı' : 'Article Not Found'}
        </h2>
        <Link to={paths.blog} className="text-[#B8963E] font-bold flex items-center gap-2">
          <ArrowLeft size={16} /> {language === 'de' ? 'Zurück zum Blog' : language === 'tr' ? 'Blog\'a Dön' : 'Back to Blog'}
        </Link>
      </div>
    );
  }

  const title = language === 'de' ? post.titleDE : language === 'tr' ? post.titleTR : post.titleEN;
  const content = language === 'de' ? post.contentDE : language === 'tr' ? post.contentTR : post.contentEN || '';
  const date = language === 'de' ? post.dateDE : language === 'tr' ? post.dateTR : post.dateEN;
  const readTime = language === 'de' ? post.readTimeDE : language === 'tr' ? post.readTimeTR : post.readTimeEN;
  const category = language === 'de' ? post.categoryDE : language === 'tr' ? post.category : post.categoryEN;
  const productFunnel = language === 'tr' && post.slugTR === vekaletnameFunnel.slugTR ? vekaletnameFunnel : null;
  const whatsappCTATopic: BlogWhatsAppCTATopic | null = [CRIMINAL_LAW_BLOG_SLUG_DE, CRIMINAL_DEFENSE_FROM_GERMANY_BLOG_SLUG_DE].includes(post.slugDE)
    ? 'criminal_law'
    : post.slugDE === DRUG_CASE_TURKEY_BLOG_SLUG_DE
      ? 'drug_case'
    : post.slugDE === THREAT_CRIME_TURKEY_BLOG_SLUG_DE
      ? 'threat_case'
    : post.slugDE === PROPERTY_PARTITION_BLOG_SLUG_DE
      ? 'property_partition'
      : post.slugDE === INHERITANCE_DISPUTE_BLOG_SLUG_DE
        ? 'inheritance_dispute'
        : post.slugDE === PROPERTY_RIGHTS_BLOG_SLUG_DE
          ? 'property_rights'
          : [MURIS_MUVAZAASI_BLOG_SLUG_DE, MURIS_MUVAZAASI_LEGACY_BLOG_SLUG_DE].includes(post.slugDE)
            ? 'muris_muvazaasi'
            : post.slugDE === MAVI_KART_BLOG_SLUG_DE
              ? 'mavi_kart'
              : [DEBT_COLLECTION_BLOG_SLUG_DE, DEBT_COLLECTION_LEGACY_BLOG_SLUG_DE].includes(post.slugDE)
                ? 'debt_collection'
                : post.slugDE === DIVORCE_TURKEY_BLOG_SLUG_DE
                  ? 'divorce_turkey'
                  : post.slugDE === TANIMA_TENFIZ_BLOG_SLUG_DE
                    ? 'tanima_tenfiz'
                  : post.slugDE === TCK_191_KDAE_BLOG_SLUG_DE
                      ? 'tck_191_kdae'
                      : [HAKARET_BLOG_SLUG_DE, HAKARET_SOCIAL_MEDIA_BLOG_SLUG_DE].includes(post.slugDE)
                        ? 'hakaret'
                        : post.slugDE === HAGB_BLOG_SLUG_DE
                          ? 'hagb'
                          : post.slugDE === CUSTODY_TENFIZ_BLOG_SLUG_DE
                            ? 'sorgerecht_tenfiz'
                            : post.slugDE === INHERITANCE_GUIDE_BLOG_SLUG_DE
                              ? 'inheritance_guide'
                              : post.slugDE === UNTERHALT_TURKISH_LAW_BLOG_SLUG_DE
                                ? 'unterhalt_nafaka'
                                : null;

  const hasContentForCurrentLanguage = (candidate: typeof post) => Boolean(candidate && (
    language === 'de'
      ? candidate.slugDE && candidate.contentDE?.trim()
      : language === 'tr'
        ? candidate.slugTR && candidate.contentTR?.trim()
        : candidate.slugEN && candidate.contentEN?.trim()
  ));
  const getLocalizedBlogSlug = (candidate: NonNullable<typeof post>) =>
    language === 'de' ? candidate.slugDE : language === 'tr' ? candidate.slugTR : candidate.slugEN;

  const related = post.slugTR === 'almanya-ortak-velayet-turkiye-tenfiz'
    ? blogPosts.filter((p) => language === 'tr'
      ? [
        'almanya-turkiye-miras-hukuku-rehberi',
        'turkiye-ceza-davasi-almanya-savunma',
      ].includes(p.slugTR)
      : language === 'en'
        ? [
          'turkish-inheritance-germany-guide',
          'turkish-criminal-case-defence-from-germany',
        ].includes(p.slugEN || '')
        : [
        'erbschaft-tuerkei-deutschland-ratgeber',
        'strafverfahren-tuerkei-haftbefehl-verteidigung-deutschland',
      ].includes(p.slugDE))
    : blogPosts
      .filter((p) => p !== post && hasContentForCurrentLanguage(p))
      .slice(0, 2);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": currentSchemaHeadline || title,
    "description": currentSchemaDescription || currentDescription,
    "image": currentImage?.startsWith('http') ? currentImage : `${SITE_URL}${currentImage}`,
    "datePublished": currentPublishedAt,
    "dateModified": currentModifiedAt,
    "author": {
      "@type": "Person",
      "name": currentArticleAuthor,
      "url": `${SITE_URL}/${language === 'tr' ? 'tr/hakkimizda' : language === 'de' ? 'de/ueber-uns' : 'en/about'}`
    },
    "publisher": {
      "@type": "Organization",
      "name": "Doğru Kanzlei",
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE_URL}/assets/logo-eRLlm_XN.avif`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${SITE_URL}/${language}/blog/${currentSlugForLanguage}`
    },
    "inLanguage": language,
    ...(post.exactSchema ? {} : {
      "about": {
      "@type": "LegalService",
      "name": category
      }
    })
  };

  const explicitFaqs = language === 'de' ? post.faqDE : language === 'tr' ? post.faqTR : post.faqEN;
  let faqs: any[] = [];

  if (explicitFaqs && explicitFaqs.length > 0) {
    // 1. Priority: Curated list defined in blogPosts.ts
    faqs = explicitFaqs.map(f => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.answer
      }
    }));
  } else {
    // 2. Try strict extraction (only under FAQ heading)
    const strictFaqs = extractFaqsFromContent(content, 'strict');
    if (strictFaqs.length > 0) {
      faqs = strictFaqs;
    } else {
      // 3. Try heuristic extraction (any appropriate headings)
      const heuristicFaqs = extractFaqsFromContent(content, 'heuristic');
      if (heuristicFaqs.length > 0) {
        faqs = heuristicFaqs;
      }
    }
  }

  // 4. Final step: Only generate schema if we have quality Q&A pairs
  const faqSchema = faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs
  } : null;

  let hasFoundFirstParagraph = false;

  return (
    <div className="bg-[#F7F5F0] min-h-screen overflow-x-hidden">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#8B6E2A] origin-left z-[1001]"
        style={{ scaleX }}
      />
      
      <SchemaOrg data={articleSchema} id="schema-article" />
      {faqSchema && <SchemaOrg data={faqSchema} id="schema-faq" />}
      
      <div className={`relative z-0 pt-28 md:pt-[200px] ${productFunnel ? 'pb-36 md:pb-20' : 'pb-20'}`}>
        <article className="w-full min-w-0 max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 box-border" style={{ display: 'flex', flexDirection: 'column' }}>
          <div className="mb-7 hidden text-center min-w-0 max-w-full md:block md:mb-10" style={{ position: 'relative', display: undefined }}>
            <ol className="inline-flex max-w-full flex-wrap items-center justify-center gap-2 font-sans text-xs tracking-[0.2em] uppercase">
              <li>
                <Link to={paths.home} className="text-[#6a6a6a] hover:text-[#7A5F20] transition-colors">
                  {t("nav_home")}
                </Link>
              </li>
              <li className="text-[#6a6a6a]">/</li>
              <li>
                <Link to={paths.blog} className="text-[#B8963E] font-bold hover:opacity-70 transition-opacity">
                  Blog
                </Link>
              </li>
              <li className="text-[#6a6a6a]">/</li>
              <li className="text-[#1C3829] font-bold max-w-full break-words sm:truncate sm:max-w-[200px]">{title}</li>
            </ol>
          </div>

          <div className="mb-10 text-center min-w-0 max-w-full md:mb-16" style={{ position: 'relative', display: 'block' }}>
            {/* Category */}
            <div className="flex items-center justify-center gap-3 mb-6 md:mb-8">
              <span className="w-8 h-[1px] bg-[#8B6E2A]" />
              <span className="font-sans text-[10px] font-bold tracking-[0.22em] text-[#7A5F20] uppercase md:text-[11px] md:tracking-[0.3em]">
                <span lang={language === 'tr' ? 'tr' : 'de'}>{category}</span>
              </span>
              <span className="w-8 h-[1px] bg-[#8B6E2A]" />
            </div>

            {/* Title */}
            <h1 className="font-serif text-[clamp(29px,9vw,42px)] md:text-[clamp(24px,5vw,48px)] text-[#1C3829] leading-[1.12] md:leading-[1.2] font-medium mb-8 md:mb-10 tracking-tight text-center w-full min-w-0 max-w-full" style={{ position: 'relative', display: 'block', whiteSpace: 'normal', overflowWrap: 'anywhere', wordBreak: 'break-word', hyphens: 'auto', maxWidth: '100%', boxSizing: 'border-box' }}>
              <span className="block max-w-[15ch] sm:max-w-[18ch] md:max-w-none mx-auto" lang={language === 'tr' ? 'tr' : language === 'de' ? 'de' : 'en'} style={{ whiteSpace: 'normal', overflowWrap: 'anywhere', wordBreak: 'break-word', hyphens: 'auto' }}>{title}</span>
            </h1>

            {/* Meta information aligned for premium feel */}
            <div className="flex flex-wrap items-center justify-center gap-y-3 gap-x-5 pb-6 border-b border-[#1C3829]/5 text-[#6a6a6a] font-sans text-[12px] tracking-wide md:gap-x-10 md:pb-8 md:text-[13px]" style={{ position: 'relative', display: 'flex' }}>
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#1C3829]/5 flex items-center justify-center">
                  <User size={14} className="text-[#8B6E2A]" />
                </div>
                <span>Av. Hasan Doğru</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Calendar size={15} className="text-[#8B6E2A]" />
                <span>
                  <span lang={language === 'tr' ? 'tr' : 'de'}>{date}</span>
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock size={15} className="text-[#8B6E2A]" />
                <span>
                  <span lang={language === 'tr' ? 'tr' : 'de'}>{readTime}</span>
                </span>
              </div>
            </div>
          </div>

          {/* Hero Image with slight parallax or zoom entrance hint */}
          <div className="overflow-hidden mb-10 shadow-xl relative group rounded-lg md:mb-20 md:shadow-2xl">
            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-700 pointer-events-none z-10" />
            <img
              src={post.image}
              alt={title}
              className="w-full h-auto max-h-[70vh] object-contain block mx-auto"
            />
          </div>

          {/* Dual-width content strategy: headers can go wide, text stays readable */}
          <div className="max-w-[720px] mx-auto w-full">
            <div className="prose prose-stone max-w-none font-sans text-[#333] leading-[1.75] font-[450] selection:bg-[#B8963E]/20 md:prose-xl md:leading-[1.9]">
              <div lang={language === 'tr' ? 'tr' : 'de'}>
            <div className="prose prose-stone max-w-none font-sans text-[#333] leading-[1.75] font-[450] selection:bg-[#B8963E]/20 md:prose-xl md:leading-[1.9]">
              <div lang={language === 'tr' ? 'tr' : 'de'}>
                {(() => {
                  const lines = content.split('\n');
                  const renderedElements = [];
                  let i = 0;
                  let foundFirstParagraph = false;
                  let currentSectionHeading = '';
                  let currentSubheading = '';
                  let insertedIntroCTA = false;
                  let insertedComparisonCTA = false;
                  let insertedServiceTypesCTA = false;
                  let insertedWhatsAppIntroCTA = false;
                  let insertedWhatsAppMidCTA = false;
                  let insertedHakaretDeadlineCTA = false;
                  let insertedHakaretSettlementCTA = false;
                  let insertedHagbRecordsCTA = false;
                  let insertedHagbStrategyCTA = false;

                  while (i < lines.length) {
                    const line = lines[i];
                    const trimmedLine = line.trim();
                    let insertWhatsAppIntroAfterElement = false;

                    if (explicitFaqs?.length && isFaqHeading(trimmedLine)) {
                      break;
                    }

                    // 1. Handle Empty Lines
                    if (!trimmedLine) {
                      renderedElements.push(<div key={`empty-${i}`} className="h-4 md:h-6" />);
                      i++;
                      continue;
                    }

                    // 2. Handle Tables
                    if (trimmedLine.startsWith('|')) {
                      const tableRows = [];
                      while (i < lines.length && lines[i].trim().startsWith('|')) {
                        const rowCells = lines[i]
                          .split('|')
                          .filter((_, idx, arr) => idx > 0 && idx < arr.length - 1)
                          .map(cell => cell.trim());
                        
                        // Skip separator rows (|---|---|)
                        if (!rowCells.every(cell => cell.match(/^:?-+:?$/))) {
                          tableRows.push(rowCells);
                        }
                        i++;
                      }

                      if (tableRows.length > 0) {
                        const [header, ...body] = tableRows;
                        renderedElements.push(
                          <div key={`table-${i}`} className="blog-table-wrapper">
                            <table className="blog-table">
                              <thead>
                                <tr>
                                  {header.map((cell, cellIdx) => (
                                    <th key={cellIdx}>
                                      {processInlineStyles(cell)}
                                    </th>
                                  ))}
                                </tr>
                              </thead>
                              <tbody>
                                {body.map((row, rowIdx) => (
                                  <tr key={rowIdx}>
                                    {row.map((cell, cellIdx) => (
                                      <td key={cellIdx}>
                                        {processInlineStyles(cell)}
                                      </td>
                                    ))}
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        );
                        if (
                          productFunnel &&
                          !insertedComparisonCTA &&
                          currentSectionHeading === 'Konsolosluk mu, Alman Noteri mi? Hangisi Daha İyi?'
                        ) {
                          renderedElements.push(
                            <BlogProductCTAMid
                              key="vekaletname-comparison-cta"
                              funnel={productFunnel}
                              variant="comparison"
                            />
                          );
                          insertedComparisonCTA = true;
                        }
                      }
                      continue;
                    }

                    // 3. Handle Other Blocks
                    let element = null;

                    // Horizontal Rules
                    if (trimmedLine === '---') {
                      element = (
                        <div key={i} className="flex justify-center items-center gap-4 my-20">
                          <div className="w-16 h-[1px] bg-[#1C3829]/10" />
                          <div className="w-2 h-2 rounded-full border border-[#8B6E2A]" />
                          <div className="w-16 h-[1px] bg-[#1C3829]/10" />
                        </div>
                      );
                    }
                    // Headers
                    else if (trimmedLine.startsWith('###')) {
                      currentSubheading = trimmedLine.replace(/###/g, '').trim();
                      element = (
                        <h3 key={i} className="font-serif text-2xl md:text-3xl text-[#1C3829] mt-16 mb-8 font-semibold tracking-tight leading-snug">
                          {processInlineStyles(currentSubheading)}
                        </h3>
                      );
                    }
                    else if (trimmedLine.startsWith('##')) {
                      const headingText = trimmedLine.replace(/##/g, '').trim();
                      if (
                        whatsappCTATopic === 'hakaret' &&
                        !insertedHakaretDeadlineCTA &&
                        [
                          'Die 6-Monats-Frist: Warum sie entscheidend ist',
                          'The 6-Month Complaint Deadline: Your Most Important Procedural Protection',
                          '6 Aylık Şikayet Süresi: Sizi Koruyan Kural',
                        ].includes(headingText)
                      ) {
                        renderedElements.push(
                          <BlogWhatsAppCTA
                            key="hakaret-deadline-whatsapp-cta"
                            language={language}
                            placement="deadline"
                            topic={whatsappCTATopic}
                          />
                        );
                        insertedHakaretDeadlineCTA = true;
                      }
                      if (
                        whatsappCTATopic === 'hakaret' &&
                        !insertedHakaretSettlementCTA &&
                        [
                          'Uzlaşma: Der Ausweg für die meisten Hakaretfälle',
                          'Uzlaşma: The Settlement That Ends the Case',
                          'Uzlaşma: Hakaret Davasını Kapatmanın En İyi Yolu',
                        ].includes(headingText)
                      ) {
                        renderedElements.push(
                          <BlogWhatsAppCTA
                            key="hakaret-settlement-whatsapp-cta"
                            language={language}
                            placement="settlement"
                            topic={whatsappCTATopic}
                          />
                        );
                        insertedHakaretSettlementCTA = true;
                      }
                      if (
                        whatsappCTATopic === 'hagb' &&
                        !insertedHagbRecordsCTA &&
                        [
                          'Das Doppelregister-Problem: Adli Sicil vs. Arşiv Kaydı',
                          'The Two-Record Problem: Adli Sicil vs. Arşiv Kaydı',
                          'İki Farklı Kayıt: Adli Sicil ve Arşiv Kaydı',
                        ].includes(headingText)
                      ) {
                        renderedElements.push(
                          <BlogWhatsAppCTA
                            key="hagb-records-whatsapp-cta"
                            language={language}
                            placement="records"
                            topic={whatsappCTATopic}
                          />
                        );
                        insertedHagbRecordsCTA = true;
                      }
                      if (
                        whatsappCTATopic === 'hagb' &&
                        !insertedHagbStrategyCTA &&
                        [
                          'Strategische Überlegungen: Timing des Einbürgerungsantrags',
                          'Your Strategic Options',
                          'Stratejik Seçenekler',
                        ].includes(headingText)
                      ) {
                        renderedElements.push(
                          <BlogWhatsAppCTA
                            key="hagb-strategy-whatsapp-cta"
                            language={language}
                            placement="strategy"
                            topic={whatsappCTATopic}
                          />
                        );
                        insertedHagbStrategyCTA = true;
                      }
                      if (
                        whatsappCTATopic &&
                        whatsappCTATopic !== 'hagb' &&
                        whatsappCTATopic !== 'hakaret' &&
                        !insertedWhatsAppMidCTA &&
                        (
                          [
                            'Wie läuft ein türkisches Strafverfahren ab?',
                            "Türkiye'de Ceza Davası Nasıl İşler?",
                            'How a Turkish Criminal Case Proceeds',
                            'Das türkische Strafverfahren im Überblick',
                            'Türk Ceza Yargılaması: İki Ana Aşama',
                            'How Turkish Criminal Procedure Works',
                            'En Kritik Savunma: Ticaret mi, Kişisel Kullanım mı?',
                            'Die Schlüsselverteidigung: Handel oder Eigenkonsum?',
                            'The Airport Scenario',
                            'Tehdit Suçu ile Şantaj Suçu Arasındaki Kritik Fark',
                            'Bedrohung oder Erpressung?',
                            'An Angry Message vs. a Criminal Threat: Where the Line Is',
                          ].includes(headingText) ||
                          [
                            'Ablauf des İzale-i Şüyu-Verfahrens',
                            'İzale-i Şüyu Davasının Aşamaları',
                            'How Does the İzale-i Şüyu Process Work?',
                          ].includes(headingText) ||
                          [
                            'Die kritischen Fristen – TMK Art. 571',
                            'Hak Düşürücü Süreler: En Kritik Mesele',
                            'The Deadlines — Why Acting Fast Is Critical',
                          ].includes(headingText) ||
                          [
                            'Immobilienkauf in der Türkei: Ablauf und Kosten',
                            'Tapu Üzerindeki Şerh ve Kısıtlamalar',
                            'Buying Property in Turkey: Process and Costs',
                          ].includes(headingText) ||
                          [
                            'Beweisführung: Was zählt vor türkischen Gerichten?',
                            'Beweisführung: Wie Muris Muvazaası nachgewiesen wird',
                            'Muvazaayı Nasıl İspatlarsınız?',
                            'Delil Stratejisi: Muvazaa Nasıl İspatlanır?',
                            'What Evidence Do Courts Look For?',
                            'How to Prove Muris Muvazaası',
                          ].includes(headingText) ||
                          [
                            'Welche Rechte gewährt die Mavi Kart? (Art. 28 TVK)',
                            'TVK Madde 28: Korunan Haklar',
                            'The Rights Preserved Under Art. 28 TVK',
                          ].includes(headingText) ||
                          [
                            '4. Bankkonten pfänden: Haciz İhbarnamesi und Toplu Sorgu',
                            '4. Banka Haczi: Haciz İhbarnamesi ve Toplu Sorgu (İİK m. 89)',
                            '4. How Bank Account Seizure Works in Turkey',
                          ].includes(headingText) ||
                          [
                            'Einvernehmliche Scheidung nach türkischem Recht (ZGB Art. 166/3)',
                            'Türk Hukukunda Anlaşmalı Boşanma (TMK Madde 166/3)',
                            'Amicable Divorce in Turkish Law (Anlaşmalı Boşanma)',
                          ].includes(headingText) ||
                          [
                            'Tanıma oder Tenfiz? Der Unterschied in der Praxis',
                            'Tanıma mı, Tenfiz mi? Farkı Bilmek Neden Önemli?',
                            'Tanıma vs Tenfiz — Which Do You Need?',
                          ].includes(headingText) ||
                          [
                            'Kann ein Strafverfahren gegen mich laufen, ohne dass ich davon weiß?',
                            '3. Tebligatlar neden başarısız oluyor?',
                            '3. Why service of process regularly fails',
                          ].includes(headingText) ||
                          [
                            'Die fünf Bedingungen für eine erfolgreiche Tenfiz-Klage',
                            'Tenfiz İçin Beş Zorunlu Koşul (MÖHUK m. 54)',
                            'The Five Conditions a Turkish Court Will Check',
                          ].includes(headingText) ||
                          [
                            'UYAP: Die digitale Vermögensermittlung in der Türkei',
                            'UYAP ile Borçlunun Varlıklarını Tespit Etmek',
                            "UYAP: Turkey's Digital Asset Discovery System",
                          ].includes(headingText) ||
                          [
                            '3. Der türkische Erbschein (Veraset İlamı) — Warum der deutsche nicht reicht',
                            '3. Veraset İlamı: Mirasın Kapısını Açan Belge',
                            '3. The Turkish Inheritance Certificate (Veraset İlamı) — Why a German Probate Document Is Not Enough',
                          ].includes(headingText) ||
                          [
                            'İştirak Nafakası: Kindesunterhalt nach türkischem Recht',
                            'İştirak Nafakası (TMK m. 182): Çocuk Nafakası',
                            'İştirak Nafakası: Child Support After a Turkish Divorce',
                          ].includes(headingText)
                        )
                      ) {
                        renderedElements.push(
                          <BlogWhatsAppCTA
                            key={`${whatsappCTATopic}-mid-whatsapp-cta`}
                            language={language}
                            placement="mid"
                            topic={whatsappCTATopic}
                          />
                        );
                        insertedWhatsAppMidCTA = true;
                      }
                      if (
                        productFunnel &&
                        !insertedIntroCTA &&
                        headingText === 'Vekâletname Nedir ve Neden Bu Kadar Önemlidir?'
                      ) {
                        renderedElements.push(
                          <BlogProductCTAIntro key="vekaletname-intro-cta" funnel={productFunnel} />
                        );
                        insertedIntroCTA = true;
                      }
                      if (
                        productFunnel &&
                        !insertedServiceTypesCTA &&
                        currentSectionHeading === 'Vekâletname Türlerine Göre Özel Dikkat Edilmesi Gerekenler' &&
                        currentSubheading === 'Banka ve Genel İşlem Vekâletnamesi'
                      ) {
                        renderedElements.push(
                          <BlogProductCTAMid
                            key="vekaletname-service-types-cta"
                            funnel={productFunnel}
                            variant="service_types"
                          />
                        );
                        insertedServiceTypesCTA = true;
                      }
                      currentSectionHeading = headingText;
                      currentSubheading = '';
                      element = (
                        <h2 
                          key={i} 
                          className="font-serif text-[30px] md:text-4xl text-[#1C3829] mt-16 md:mt-24 mb-8 md:mb-12 font-medium tracking-tight relative pb-5 md:pb-6 border-b border-[#1C3829]/5 leading-[1.12]"
                        >
                          <span className="absolute bottom-0 left-0 w-16 h-1 bg-[#8B6E2A]" />
                          {processInlineStyles(headingText)}
                        </h2>
                      );
                    }
                    // Blockquotes
                    else if (trimmedLine.startsWith('> ')) {
                      element = (
                        <blockquote key={i} className="relative border-none pl-8 md:pl-12 py-8 md:py-10 my-12 md:my-20 italic text-[#1C3829]/90 font-serif text-xl md:text-2xl bg-white shadow-sm ring-1 ring-black/5 rounded-xl pr-6 md:pr-10">
                          <Quote className="absolute top-6 left-6 text-[#B8963E]/20 w-12 h-12 -z-10" />
                          {processInlineStyles(trimmedLine.replace('> ', '').trim())}
                        </blockquote>
                      );
                    }
                    // List Items
                    else if (trimmedLine.startsWith('- ')) {
                      element = (
                        <li key={i} className="ml-2 pl-4 mb-4 list-none relative text-[#444]">
                          <span className="absolute left-[-1.5rem] top-[0.6rem] w-1.5 h-1.5 rounded-full bg-[#8B6E2A]/60" />
                          <span className="inline-block transition-transform duration-300 hover:translate-x-1">
                            {processInlineStyles(trimmedLine.replace('- ', '').trim())}
                          </span>
                        </li>
                      );
                    }
                    // Number Lists
                    else if (/^\d+\./.test(trimmedLine)) {
                      element = (
                        <div key={i} className="ml-2 pl-4 mb-6 relative text-[#444] flex gap-4">
                           <span className="font-serif text-[#8B6E2A] italic text-xl font-bold min-w-[1.5rem]">{trimmedLine.match(/^\d+/)?.[0]}.</span>
                           <span className="pt-0.5">{processInlineStyles(trimmedLine.replace(/^\d+\.\s*/, '').trim())}</span>
                        </div>
                      );
                    }
                    // Skip H1 Titles (already rendered in header)
                    else if (trimmedLine.startsWith('# ')) {
                      i++;
                      continue;
                    }
                    // Paragraphs
                    else {
                      if (!foundFirstParagraph) {
                        foundFirstParagraph = true;
                        element = (
                          <div key={i} className="mb-8 last:mb-0 text-lg md:text-xl relative">
                            <style dangerouslySetInnerHTML={{ __html: `
                              .drop-cap-text::first-letter {
                                float: left;
                                font-size: 4.8rem;
                                line-height: 1;
                                padding-right: 0.8rem;
                                padding-top: 0.4rem;
                                color: #1C3829;
                                font-family: serif;
                                font-weight: 700;
                                height: 0.85em;
                              }
                            `}} />
                            <div className="drop-cap-text text-[#222]">
                              {processInlineStyles(trimmedLine)}
                            </div>
                            <div className="clear-both" />
                          </div>
                        );
                        if (whatsappCTATopic && !insertedWhatsAppIntroCTA) {
                          insertWhatsAppIntroAfterElement = true;
                          insertedWhatsAppIntroCTA = true;
                        }
                      } else {
                        element = (
                          <p key={i} className="mb-6 md:mb-8 last:mb-0 text-[17px] leading-8 md:text-[21px] text-[#444]">
                            {processInlineStyles(trimmedLine)}
                          </p>
                        );
                      }
                    }

                    renderedElements.push(element);
                    if (insertWhatsAppIntroAfterElement && whatsappCTATopic) {
                      renderedElements.push(
                        <BlogWhatsAppCTA
                          key={`${whatsappCTATopic}-intro-whatsapp-cta`}
                          language={language}
                          placement="intro"
                          topic={whatsappCTATopic}
                        />
                      );
                    }
                    i++;
                  }

                  return renderedElements;
                })()}
              </div>
            </div>
              </div>
            </div>

            {productFunnel ? (
              <BlogProductCTABottom funnel={productFunnel} />
            ) : whatsappCTATopic ? (
              <BlogWhatsAppCTA language={language} placement="bottom" topic={whatsappCTATopic} />
            ) : (
              <div className="mt-32 p-10 md:p-16 bg-[#1C3829] rounded-2xl shadow-xl border-t-8 border-[#8B6E2A] relative overflow-hidden group">
                <div className="absolute top-[-100px] right-[-100px] w-64 h-64 bg-white/5 rounded-full blur-3xl transition-transform duration-1000 group-hover:scale-150" />
                <h3 className="font-serif text-3xl text-white mb-6 relative z-10 tracking-tight">
                  <span lang={language === 'tr' ? 'tr' : 'de'}>
                    {language === 'de' 
                      ? (post.ctaTitleDE || 'Haben Sie Fragen zu diesem Thema?') 
                      : language === 'tr'
                        ? (post.ctaTitleTR || 'Tanıma ve Tenfiz İşlemleriniz İçin Buradayız')
                        : (post.ctaTitleEN || 'We Are Here for Your Criminal Defence Needs')}
                  </span>
                </h3>
                <p className="font-sans text-lg text-white/70 mb-10 leading-relaxed relative z-10 max-w-xl">
                  <span lang={language === 'tr' ? 'tr' : 'de'}>
                    {language === 'de'
                      ? (post.ctaDescriptionDE || 'Profitieren Sie von unserer doppelten Zulassung in Deutschland und der Türkei. Kontaktieren Sie uns for eine erste Einschätzung.')
                      : language === 'tr'
                        ? (post.ctaDescriptionTR || 'Almanya ve Türkiye\'deki çift baro üyeliğimiz ve UYAP tecrübemizle süreci sizin adınıza en hızlı şekilde sonuçlandırıyoruz.')
                        : (post.ctaDescriptionEN || 'Take advantage of our dual admission in Germany and Turkey. Contact us for an initial assessment.')}
                  </span>
                </p>
                <button
                  type="button"
                  onClick={() => openWhatsAppLeadCapture({
                    service: category,
                    situation: language === 'de' ? post.ctaTitleDE : language === 'tr' ? post.ctaTitleTR : post.ctaTitleEN,
                  })}
                  className="relative z-10 inline-block bg-[#8B6E2A] text-white font-sans text-[12px] font-bold tracking-[0.2em] uppercase px-12 py-5 rounded-full hover:bg-white hover:text-[#1C3829] transition-all duration-300 shadow-lg active:scale-95"
                >
                  {t("nav_cta")}
                </button>
              </div>
            )}

            {/* Explicit FAQ Section */}
            {explicitFaqs && explicitFaqs.length > 0 && (
              <div className="mt-32">
                <div className="flex items-center gap-6 mb-12">
                  <div className="w-16 h-[2px] bg-[#8B6E2A]" />
                  <h3 className="font-serif text-3xl md:text-4xl text-[#1C3829]">
                    {language === 'de' ? 'Häufige Fragen' : language === 'tr' ? <span lang="tr">Sıkça Sorulan Sorular</span> : 'Frequently Asked Questions'}
                  </h3>
                </div>
                <div className="space-y-6">
                  {explicitFaqs.map((faq, idx) => (
                    <FAQItem key={idx} question={faq.question} answer={faq.answer} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </article>

        {/* Related Posts - Full width background for contrast */}
        {related.length > 0 && (
          <div className="bg-white/40 mt-32 py-24 border-t border-[#1C3829]/5">
            <div className="max-w-4xl mx-auto px-6 lg:px-12">
              <h3 className="font-serif text-3xl text-[#1C3829] mb-12 flex items-center gap-4">
                <span className="w-2 h-2 rounded-full bg-[#8B6E2A]" />
                {language === 'de' ? 'Weitere Artikel' : language === 'tr' ? <span lang="tr">İlginizi Çekebilecek Diğer Konular</span> : 'Other Related Articles'}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {related.map((r) => (
                  <Link key={`${language}-${getLocalizedBlogSlug(r)}`} to={paths.blogPost(getLocalizedBlogSlug(r))} className="group block h-full flex flex-col">
                    <div className="overflow-hidden mb-6 aspect-[16/10] bg-[#e8e4dc] shadow-md group-hover:shadow-xl transition-shadow duration-500 rounded-lg">
                      <img
                        src={r.image}
                        alt={language === 'de' ? r.titleDE : language === 'tr' ? r.titleTR : r.titleEN}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <span className="font-sans text-[11px] font-bold tracking-[0.2em] uppercase text-[#7A5F20] mb-3 inline-block">
                      <span lang={language === 'tr' ? 'tr' : 'de'}>
                        {language === 'de' ? r.categoryDE : language === 'tr' ? r.category : r.categoryEN}
                      </span>
                    </span>
                    <h4 className="font-serif text-2xl text-[#1C3829] group-hover:text-[#B8963E] transition-colors leading-[1.3] grow">
                      <span lang={language === 'tr' ? 'tr' : 'de'}>
                        {language === 'de' ? r.titleDE : language === 'tr' ? r.titleTR : r.titleEN}
                      </span>
                    </h4>
                    <div className="mt-6 flex items-center gap-2 text-[#B8963E] font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                      {language === 'de' ? 'Weiterlesen' : language === 'tr' ? 'Tamamını Oku' : 'Read More'} <ArrowLeft size={14} className="rotate-180" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      {productFunnel && <BlogStickyBookingCTA funnel={productFunnel} />}
    </div>
  );
}
