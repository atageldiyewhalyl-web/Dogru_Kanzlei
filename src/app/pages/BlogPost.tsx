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
import vekaletnameImg from "@/assets/The_asset_for_blogs.png";

const WHATSAPP_URL = "https://wa.me/4917661221210";
const CRIMINAL_LAW_BLOG_SLUG_DE = "tuerkisches-strafrecht-anwalt-deutschland";
const CRIMINAL_DEFENSE_FROM_GERMANY_BLOG_SLUG_DE = "strafverfahren-tuerkei-aus-deutschland";
const SUMMONS_WARRANT_BLOG_SLUG_DE = "strafverfahren-tuerkei-haftbefehl-verteidigung-deutschland";
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
const INHERITANCE_GUIDE_BLOG_SLUG_DE = "erbschaft-tuerkei-deutschland-ratgeber";
const INHERITANCE_TAX_DOUBLE_TAXATION_BLOG_SLUG_DE = "erbschaftsteuer-tuerkei-doppelbesteuerung-vermeiden";
const UNTERHALT_TURKISH_LAW_BLOG_SLUG_DE = "unterhalt-tuerkisches-recht";
const TANIMA_TENFIZ_RECOGNITION_2026_BLOG_SLUG_DE = "tanima-tenfiz-scheidung-tuerkei-anerkennung-2026";
const PROPERTY_PARTITION_AUCTION_BLOG_SLUG_DE = "12-justizpaket-erbengemeinschaft-teilungsversteigerung";

type BlogProductCTAPlacement = 'intro' | 'comparison' | 'service_types' | 'bottom' | 'sticky';

type BlogProductFunnel = {
  service: 'vekaletname' | 'tanima_tenfiz' | 'inheritance_tax' | 'property_partition_auction' | 'divorce_property' | 'pension_rights' | 'inheritance_participation' | 'inheritance_certificate';
  slugDE: string;
  slugTR: string;
  duration: string;
  campaign: string;
  image?: string;
};

const vekaletnameFunnel: BlogProductFunnel = {
  service: 'vekaletname',
  slugDE: 'tuerkische-vekaletname-deutschland',
  slugTR: 'almanya-da-vekaletname-cikarma-rehberi',
  duration: '20 dakika',
  campaign: 'vekaletname_whatsapp_form',
};

function getVekaletnameFunnelCopy(language: string) {
  if (language === 'de') {
    return {
      duration: 'Direkter Kontakt',
      serviceName: 'Vekaletname',
      leadSituation: 'Ich möchte den vollständigen Vekaletname-Prozess per WhatsApp klären.',
      introEyebrow: 'DIREKTER WHATSAPP-KONTAKT',
      introTitle: 'Sie brauchen eine verwendbare Vollmacht für die Türkei?',
      introBody: 'Schreiben Sie uns direkt per WhatsApp und wir klären gemeinsam, ob Konsulat oder deutscher Notar sinnvoll ist und wie der gesamte Prozess vorbereitet wird.',
      introButton: 'WhatsApp Anfrage starten',
      durationChip: 'Direkter Kontakt',
      formChip: 'WhatsApp Vorab-Formular',
      comparisonTitle: 'Konsulat oder Notar? Lassen Sie den richtigen Weg vorab prüfen.',
      comparisonBody: 'Der schnellste Weg ist nicht immer der sicherste. Schildern Sie kurz, ob es um Tapu, Erbe, Scheidung, Bank oder Gericht geht. Hasan Doğru ordnet den passenden Ablauf ein.',
      serviceTypesTitle: 'Der Vollmachtstext muss zum konkreten Türkei-Vorgang passen',
      serviceTypesBody: 'Fehlende Befugnisse, falsche Form oder unklare Angaben führen in der Türkei oft zur Zurückweisung. Wir bereiten den Text und die nächsten Schritte passend zum Zweck vor.',
      serviceTypesButton: 'Vollmacht per WhatsApp vorbereiten',
      bottomEyebrow: 'Done-for-you Vekaletname Prozess',
      bottomTitle: 'Wir bereiten Ihre Türkei-Vollmacht vollständig mit Ihnen vor',
      bottomBody: 'Über das kurze WhatsApp Formular teilen Sie mit, wofür die Vollmacht gebraucht wird. Hasan Doğru prüft den passenden Weg, bereitet den Vollmachtstext zweckgenau vor und begleitet Konsulat, Notar, Apostille, Übersetzung und die Nutzung in der Türkei.',
      includedTitle: 'Was übernommen wird',
      includedItems: [
        'Einordnung: Konsulat oder deutscher Notar mit Apostille',
        'Vollmachtstext passend zu Tapu, Erbe, Scheidung, Bank oder Verfahren',
        'Koordination der nächsten Schritte bis zur Verwendung in der Türkei',
      ],
      trustLine: 'Deutsch und Türkisch · Türkisches Recht · Mannheim & Ankara',
      stickyTitle: 'Türkei-Vollmacht',
      stickySubtitle: 'WhatsApp Vorab-Formular',
      stickyButton: 'WhatsApp',
      chips: ['Tapu', 'Erbe', 'Tanıma-Tenfiz', 'Scheidung', 'Bank'],
    };
  }

  if (language === 'en') {
    return {
      duration: 'Direct Contact',
      serviceName: 'Vekaletname',
      leadSituation: 'I want to prepare a power of attorney for Turkey. Please check consulate, German notary, apostille, translation, documents and costs.',
      introEyebrow: 'DIRECT WHATSAPP CONTACT',
      introTitle: 'Need a power of attorney that will actually be accepted in Turkey?',
      introBody: 'Text us directly on WhatsApp and we will clarify whether the Turkish consulate, German notary, or apostille route is the right choice for your specific case.',
      introButton: 'Start WhatsApp request',
      durationChip: 'Direct Contact',
      formChip: 'WhatsApp intake form',
      comparisonTitle: 'Consulate, German notary or apostille? Have the route checked first.',
      comparisonBody: 'Tell us whether this is for property, inheritance, banking, court or another Turkish authority. We clarify the route before you lose time on the wrong appointment.',
      serviceTypesTitle: 'The wording must match the exact Turkish transaction',
      serviceTypesBody: 'Translation alone is often not enough. Missing powers or the wrong form can lead to rejection in Turkey.',
      serviceTypesButton: 'Prepare power of attorney via WhatsApp',
      bottomEyebrow: 'Done-for-you power of attorney process',
      bottomTitle: 'We prepare your Turkey power of attorney with you',
      bottomBody: 'Use the WhatsApp intake form to explain what the document is for. Hasan Doğru checks the route, wording, apostille, translation and next steps.',
      includedTitle: 'What we handle',
      includedItems: [
        'Route check: Turkish consulate or German notary with apostille',
        'Purpose-specific Turkish wording for property, inheritance, bank, court or authorities',
        'Next-step coordination until the document can be used in Turkey',
      ],
      trustLine: 'German, Turkish and English · Turkish law · Mannheim & Ankara',
      stickyTitle: 'Turkey power of attorney',
      stickySubtitle: 'WhatsApp intake form',
      stickyButton: 'WhatsApp',
      chips: ['Property', 'Inheritance', 'Court', 'Bank', 'Apostille'],
    };
  }

  return {
    duration: 'Direkt İletişim',
    serviceName: 'Vekaletname',
    leadSituation: 'Türkiye için vekâletname çıkartmam gerekiyor, süreç hakkında bilgi almak istiyorum.',
    introEyebrow: 'DİREKT WHATSAPP İLETİŞİMİ',
    introTitle: 'Türkiye için vekâletname mi çıkartmanız gerekiyor?',
    introBody: 'Bize doğrudan WhatsApp\'tan yazın, hangi yolu izlemeniz gerektiğini netleştirelim: konsolosluk mu, Alman noter mi?',
    introButton: 'WhatsApp formunu aç',
    durationChip: 'Direkt İletişim',
    formChip: 'WhatsApp ön bilgi formu',
    comparisonTitle: 'Hangi yol sizin için doğru?',
    comparisonBody: 'Hasan Doğru, durumunuza özel en uygun yolu belirler. Kısa bilgilerinizi gönderin, süreç WhatsApp üzerinden netleştirilsin.',
    serviceTypesTitle: 'Vekâletname metni işleme göre farklılık gösterir',
    serviceTypesBody: 'Eksik yetki, Türkiye’de reddedilme sebebi olabilir.',
    serviceTypesButton: 'Vekâletname için WhatsApp formunu aç',
    bottomEyebrow: 'Done-for-you vekaletname hizmeti',
    bottomTitle: 'Vekâletnamenizi sizin için biz hazırlıyoruz',
    bottomBody: 'Kısa WhatsApp formuyla durumunuzu ve vekâletnamenin hangi işlem için gerektiğini bize iletin. Hasan Doğru, konsolosluk veya Alman noter yolundan hangisinin uygun olduğunu değerlendirir ve vekâletname metnini amacınıza göre hazırlar.',
    includedTitle: 'Hizmete dahil olanlar',
    includedItems: [
      'Formdaki bilgilerle durum ve doğru yol değerlendirilir',
      'Vekâletname metni işlem amacına göre hazırlanır',
      'Hasan Doğru süreci sizin adınıza takip eder',
    ],
    trustLine: 'Türkçe ve Almanca hizmet · Türk hukuku',
    stickyTitle: 'Vekaletname görüşmesi',
    stickySubtitle: 'WhatsApp ön bilgi formu',
    stickyButton: 'WhatsApp',
    chips: ['Tapu', 'Miras', 'Tanıma-Tenfiz', 'Boşanma', 'Banka'],
  };
}

function getTanimaTenfizFunnelCopy(language: string) {
  if (language === 'de') {
    return {
      duration: 'Direkter Kontakt',
      serviceName: 'Tanıma & Tenfiz',
      leadSituation: 'Ich bin in Deutschland geschieden und möchte klären, wie die Scheidung in der Türkei anerkannt oder vollstreckt wird.',
      introEyebrow: 'DIREKTER WHATSAPP-KONTAKT',
      introTitle: 'In Deutschland geschieden, in der Türkei noch verheiratet?',
      introBody: 'Schreiben Sie uns direkt per WhatsApp. Wir prüfen, ob Tanıma genügt oder Tenfiz nötig ist, welche Unterlagen fehlen und ob das Verfahren ohne Reise in die Türkei geführt werden kann.',
      introButton: 'WhatsApp Anfrage starten',
      durationChip: 'Direkter Kontakt',
      formChip: 'WhatsApp Vorab-Formular',
      comparisonTitle: 'Tanıma oder Tenfiz? Lassen Sie den richtigen Weg vorab prüfen.',
      comparisonBody: 'Nicht jeder deutsche Scheidungsbeschluss braucht dieselbe Behandlung in der Türkei. Unterhalt, Vermögen und Zustellung entscheiden, ob Anerkennung allein reicht oder Vollstreckbarerklärung sinnvoll ist.',
      serviceTypesTitle: 'Unterlagen, Zustellung und Nüfus-Status müssen zusammenpassen',
      serviceTypesBody: 'Rechtskraftvermerk, Apostille, Übersetzung, Vollmacht und Adresse des Ex-Partners bestimmen Tempo und Risiko. Wir ordnen den Ablauf vorab ein und bereiten die nächsten Schritte vor.',
      serviceTypesButton: 'Tanıma-Tenfiz per WhatsApp prüfen',
      bottomEyebrow: 'Done-for-you Tanıma-Tenfiz Prozess',
      bottomTitle: 'Wir bereiten die Anerkennung Ihrer deutschen Scheidung in der Türkei vor',
      bottomBody: 'Über das kurze WhatsApp Formular schildern Sie Ihre Situation und die vorhandenen Dokumente. Hasan Doğru prüft Tanıma, Tenfiz, Konsularweg, Gerichtsweg, Zustellung, Vollmacht und mögliche Güterrechtsfristen.',
      includedTitle: 'Was übernommen wird',
      includedItems: [
        'Prüfung: Tanıma, Tenfiz oder konsularische Eintragung',
        'Dokumentencheck für Beschluss, Rechtskraft, Apostille, Übersetzung und Vollmacht',
        'Koordination des türkischen Gerichtsverfahrens ohne unnötige Türkeireise',
      ],
      trustLine: 'Deutsch und Türkisch · Türkisches Recht · Mannheim & Ankara',
      stickyTitle: 'Tanıma & Tenfiz',
      stickySubtitle: 'WhatsApp Vorab-Formular',
      stickyButton: 'WhatsApp',
      chips: ['Scheidung', 'Nüfus', 'Apostille', 'Zustellung', 'Vollmacht'],
    };
  }

  if (language === 'en') {
    return {
      duration: 'Direct Contact',
      serviceName: 'Tanıma & Tenfiz',
      leadSituation: 'I was divorced in Germany and want to clarify recognition or enforcement of the divorce in Turkey.',
      introEyebrow: 'DIRECT WHATSAPP CONTACT',
      introTitle: 'Divorced in Germany but still married in Turkey?',
      introBody: 'Text us directly on WhatsApp. We check whether recognition is enough, whether enforcement is needed, which documents are missing and whether the case can be handled without travel.',
      introButton: 'Start WhatsApp request',
      durationChip: 'Direct Contact',
      formChip: 'WhatsApp intake form',
      comparisonTitle: 'Recognition or enforcement? Have the route checked first.',
      comparisonBody: 'A German divorce order is not automatically valid in Turkey. Maintenance, property issues and service of process decide which route is safest.',
      serviceTypesTitle: 'Documents, service of process and Turkish registry status must align',
      serviceTypesBody: 'Finality certificate, apostille, translation, power of attorney and the former spouse’s address affect timing and risk. We clarify the process before you lose months.',
      serviceTypesButton: 'Check recognition via WhatsApp',
      bottomEyebrow: 'Done-for-you recognition process',
      bottomTitle: 'We prepare recognition of your German divorce in Turkey',
      bottomBody: 'Use the WhatsApp intake form to explain your case and available documents. Hasan Doğru reviews recognition, enforcement, court route, consular route, service, power of attorney and property-settlement timing.',
      includedTitle: 'What we handle',
      includedItems: [
        'Route check: recognition, enforcement or consular registration',
        'Document review for finality, apostille, translation and power of attorney',
        'Coordination of the Turkish court process without unnecessary travel',
      ],
      trustLine: 'German, Turkish and English · Turkish law · Mannheim & Ankara',
      stickyTitle: 'Divorce recognition',
      stickySubtitle: 'WhatsApp intake form',
      stickyButton: 'WhatsApp',
      chips: ['Divorce', 'Registry', 'Apostille', 'Service', 'Court'],
    };
  }

  return {
    duration: 'Direkt İletişim',
    serviceName: 'Tanıma & Tenfiz',
    leadSituation: "Almanya'da boşandım ve boşanma kararının Türkiye'de tanınması veya tenfizi için bilgi almak istiyorum.",
    introEyebrow: 'DİREKT WHATSAPP İLETİŞİMİ',
    introTitle: "Almanya'da boşandınız ama Türkiye'de hâlâ evli mi görünüyorsunuz?",
    introBody: "Bize doğrudan WhatsApp'tan yazın. Tanıma yeterli mi, tenfiz gerekir mi, hangi belgeler eksik ve Türkiye'ye gitmeden süreç yürür mü birlikte değerlendirelim.",
    introButton: 'WhatsApp formunu aç',
    durationChip: 'Direkt İletişim',
    formChip: 'WhatsApp ön bilgi formu',
    comparisonTitle: 'Tanıma mı, tenfiz mi? Doğru yolu önceden netleştirin.',
    comparisonBody: 'Alman boşanma kararı Türkiye’de kendiliğinden geçerli olmaz. Nafaka, mal rejimi ve tebligat durumuna göre izlenecek yol değişir.',
    serviceTypesTitle: 'Belge, tebligat ve nüfus kaydı aynı plana bağlanmalı',
    serviceTypesBody: 'Kesinleşme şerhi, apostil, tercüme, vekaletname ve eski eşin adresi süreyi doğrudan etkiler. Süreci baştan doğru kuralım.',
    serviceTypesButton: "Tanıma-tenfiz için WhatsApp'tan yazın",
    bottomEyebrow: 'Done-for-you tanıma-tenfiz süreci',
    bottomTitle: 'Alman boşanma kararınızın Türkiye’de tanınmasını hazırlıyoruz',
    bottomBody: 'Kısa WhatsApp formuyla durumunuzu ve elinizdeki belgeleri iletin. Hasan Doğru tanıma, tenfiz, konsolosluk yolu, dava yolu, tebligat, vekaletname ve mal rejimi sürelerini değerlendirir.',
    includedTitle: 'Hizmete dahil olanlar',
    includedItems: [
      'Tanıma, tenfiz veya konsolosluk tescili yolu değerlendirilir',
      'Karar, kesinleşme, apostil, tercüme ve vekaletname kontrol edilir',
      'Türkiye’deki mahkeme süreci gereksiz seyahat olmadan koordine edilir',
    ],
    trustLine: 'Türkçe ve Almanca hizmet · Türk hukuku · Mannheim & Ankara',
    stickyTitle: 'Tanıma & tenfiz',
    stickySubtitle: 'WhatsApp ön bilgi formu',
    stickyButton: 'WhatsApp',
    chips: ['Boşanma', 'Nüfus', 'Apostil', 'Tebligat', 'Vekalet'],
  };
}

function getInheritanceTaxFunnelCopy(language: string) {
  if (language === 'de') {
    return {
      duration: 'Direkter Kontakt',
      serviceName: 'Erbschaftsteuer Türkei',
      leadSituation: 'Ich habe einen Erbfall mit Vermögen in der Türkei und möchte Doppelbesteuerung, Fristen und Unterlagen prüfen lassen.',
      introEyebrow: 'DIREKTER WHATSAPP-KONTAKT',
      introTitle: 'Türkisches Erbe mit Steuerfragen in Deutschland?',
      introBody: 'Schreiben Sie uns direkt per WhatsApp. Wir prüfen, welche Vermögenswerte in der Türkei liegen, welche Fristen laufen und wie die türkische Abwicklung mit dem deutschen Steuerberater koordiniert werden sollte.',
      introButton: 'WhatsApp Steuer-Check starten',
      durationChip: 'Direkter Kontakt',
      formChip: 'WhatsApp Vorab-Formular',
      comparisonTitle: 'Türkei und Deutschland parallel prüfen, bevor Fristen kippen.',
      comparisonBody: 'Bei Immobilien, Bankguthaben oder gemischten Nachlässen greifen türkische Erklärungspflichten und deutsche Anrechnung nicht automatisch ineinander. Die Dokumente müssen von Anfang an verwertbar vorbereitet werden.',
      serviceTypesTitle: 'Erbschein, Steuerbescheid und § 21-Anrechnung gehören in einen Ablauf',
      serviceTypesBody: 'Veraset İlamı, türkische Steuererklärung, Zahlungsnachweise, Apostille, Übersetzung und deutsche Anrechnung sollten nicht getrennt nebeneinander laufen.',
      serviceTypesButton: 'Erbschaftsteuer per WhatsApp prüfen',
      bottomEyebrow: 'Done-for-you Erbschaftsteuer-Koordination',
      bottomTitle: 'Wir koordinieren die türkische Erbseite mit Blick auf Doppelbesteuerung',
      bottomBody: 'Über das kurze WhatsApp Formular schildern Sie Erblasser, Erben und Vermögen. Hasan Doğru prüft die türkische Abwicklung und koordiniert mit spezialisierten Steuerberatern, damit Anrechnung, Fristen und Nachweise sauber vorbereitet werden.',
      includedTitle: 'Was übernommen wird',
      includedItems: [
        'Einordnung türkischer Vermögenswerte, Fristen und Steuerpflichten',
        'Koordination von Veraset İlamı, Steuererklärung, Zahlung, Apostille und Übersetzung',
        'Vorbereitung der Nachweise für die deutsche § 21-ErbStG-Anrechnung',
      ],
      trustLine: 'Türkisches Recht · Mannheim & Ankara · Koordination mit Steuerberatern',
      stickyTitle: 'Erbschaftsteuer Türkei',
      stickySubtitle: 'WhatsApp Vorab-Formular',
      stickyButton: 'WhatsApp',
      chips: ['Erbe', 'Immobilie', '§ 21 ErbStG', 'Apostille', 'Fristen'],
    };
  }

  if (language === 'en') {
    return {
      duration: 'Direct Contact',
      serviceName: 'Turkish inheritance tax',
      leadSituation: 'I have an inheritance case involving Turkish assets and want to check double taxation, deadlines and documents.',
      introEyebrow: 'DIRECT WHATSAPP CONTACT',
      introTitle: 'Turkish inheritance with German tax exposure?',
      introBody: 'Text us directly on WhatsApp. We review which assets are in Turkey, which deadlines apply and how the Turkish estate process should be coordinated with German tax advice.',
      introButton: 'Start WhatsApp tax check',
      durationChip: 'Direct Contact',
      formChip: 'WhatsApp intake form',
      comparisonTitle: 'Check Turkey and Germany together before deadlines become expensive.',
      comparisonBody: 'For property, bank accounts and mixed estates, Turkish filing duties and German tax credits do not align automatically. The evidence must be prepared from the beginning.',
      serviceTypesTitle: 'Inheritance certificate, tax payment and German credit claim belong in one workflow',
      serviceTypesBody: 'Veraset İlamı, Turkish tax filing, payment receipts, apostille, translation and German credit documentation should be coordinated together.',
      serviceTypesButton: 'Check inheritance tax via WhatsApp',
      bottomEyebrow: 'Done-for-you inheritance tax coordination',
      bottomTitle: 'We coordinate the Turkish estate side with double taxation in mind',
      bottomBody: 'Use the WhatsApp intake form to explain the deceased, heirs and assets. Hasan Doğru reviews the Turkish process and coordinates with specialist tax advisors so deadlines, credits and evidence are prepared cleanly.',
      includedTitle: 'What we handle',
      includedItems: [
        'Review of Turkish assets, deadlines and tax duties',
        'Coordination of probate, Turkish tax filing, payment, apostille and translation',
        'Preparation of evidence for the German § 21 ErbStG credit claim',
      ],
      trustLine: 'Turkish law · Mannheim & Ankara · Coordination with tax advisors',
      stickyTitle: 'Turkish inheritance tax',
      stickySubtitle: 'WhatsApp intake form',
      stickyButton: 'WhatsApp',
      chips: ['Inheritance', 'Property', '§ 21 ErbStG', 'Apostille', 'Deadlines'],
    };
  }

  return {
    duration: 'Direkt İletişim',
    serviceName: 'Türkiye miras vergisi',
    leadSituation: "Türkiye'de malvarlığı içeren bir miras dosyam var; çifte vergilendirme, süreler ve belgeler hakkında bilgi almak istiyorum.",
    introEyebrow: 'DİREKT WHATSAPP İLETİŞİMİ',
    introTitle: 'Türkiye’de miras, Almanya’da vergi riski mi var?',
    introBody: "Bize doğrudan WhatsApp'tan yazın. Türkiye’de hangi malvarlığı bulunduğunu, hangi sürelerin işlediğini ve Alman vergi tarafıyla koordinasyonun nasıl kurulacağını değerlendirelim.",
    introButton: 'WhatsApp vergi kontrolünü başlat',
    durationChip: 'Direkt İletişim',
    formChip: 'WhatsApp ön bilgi formu',
    comparisonTitle: 'Süreler kaçmadan Türkiye ve Almanya tarafını birlikte kontrol edin.',
    comparisonBody: 'Taşınmaz, banka hesabı veya karma miraslarda Türk beyan yükümlülüğü ile Almanya’daki mahsup kendiliğinden birleşmez. Belgeler baştan doğru hazırlanmalıdır.',
    serviceTypesTitle: 'Veraset, vergi ödemesi ve § 21 mahsubu tek süreçte planlanmalı',
    serviceTypesBody: 'Veraset ilamı, Türk vergi beyannamesi, ödeme belgeleri, apostil, tercüme ve Alman vergi mahsup başvurusu birlikte koordine edilmelidir.',
    serviceTypesButton: "Miras vergisini WhatsApp'tan sorun",
    bottomEyebrow: 'Done-for-you miras vergisi koordinasyonu',
    bottomTitle: 'Çifte vergilendirme riskini dikkate alarak Türkiye miras sürecini koordine ediyoruz',
    bottomBody: 'Kısa WhatsApp formuyla miras bırakanı, mirasçıları ve malvarlığını iletin. Hasan Doğru Türkiye tarafını değerlendirir; mahsup, süreler ve belgeler için uzman mali müşavirlerle koordinasyonu hazırlar.',
    includedTitle: 'Hizmete dahil olanlar',
    includedItems: [
      'Türkiye’deki malvarlığı, süreler ve vergi yükümlülükleri değerlendirilir',
      'Veraset ilamı, beyanname, ödeme, apostil ve tercüme koordine edilir',
      'Almanya’daki § 21 ErbStG mahsubu için gerekli belgeler hazırlanır',
    ],
    trustLine: 'Türk hukuku · Mannheim & Ankara · Mali müşavir koordinasyonu',
    stickyTitle: 'Miras vergisi',
    stickySubtitle: 'WhatsApp ön bilgi formu',
    stickyButton: 'WhatsApp',
    chips: ['Miras', 'Taşınmaz', '§ 21 ErbStG', 'Apostil', 'Süreler'],
  };
}

function getPropertyPartitionAuctionFunnelCopy(language: string) {
  if (language === 'de') {
    return {
      duration: 'Direkter Kontakt',
      serviceName: 'Teilungsversteigerung Türkei',
      leadSituation: 'Ich bin Miterbe einer Immobilie in der Türkei und möchte Schätzwert, Versteigerung, Sicherheitsleistung und Fristen prüfen lassen.',
      introEyebrow: 'DIREKTER WHATSAPP-KONTAKT',
      introTitle: 'Teilungsversteigerung einer geerbten Immobilie in der Türkei?',
      introBody: 'Schreiben Sie uns direkt per WhatsApp. Wir prüfen Grundbuchstand, Erbenkreis, Schätzwert, Einwendungsfristen und ob die neue 100-%-Regel für Ihre Immobilie greifen kann.',
      introButton: 'WhatsApp Prüfung starten',
      durationChip: 'Direkter Kontakt',
      formChip: 'WhatsApp Vorab-Formular',
      comparisonTitle: 'Erben-only erste Versteigerung? Prüfen Sie die Voraussetzungen vor dem Termin.',
      comparisonBody: 'Die neue Regel schützt nur, wenn alle Eigentümer geerbt haben und kein Dritter beteiligt ist. Ein verkaufter Anteil, ein zu niedriger Schätzwert oder verpasste Einwendungsfrist kann den Schutz kippen.',
      serviceTypesTitle: 'Schätzwert, Sicherheit und 7-Tage-Frist gehören in einen Plan',
      serviceTypesBody: 'Wer bieten will, braucht Finanzierung, Sicherheitsleistung und Fristenkontrolle. Wir ordnen den Verfahrensstand über UYAP ein und sagen, wo sofort gehandelt werden muss.',
      serviceTypesButton: 'Teilungsversteigerung per WhatsApp prüfen',
      bottomEyebrow: 'Done-for-you Teilungsversteigerung',
      bottomTitle: 'Wir prüfen Ihre türkische Erbimmobilie vor der Versteigerung',
      bottomBody: 'Über das kurze WhatsApp Formular schildern Sie Immobilie, Erben und Verfahrensstand. Hasan Doğru prüft Tapu, Veraset, Gutachten, Einwendungsfristen, Sicherheitsleistung und den Ablauf ohne unnötige Türkeireise.',
      includedTitle: 'Was übernommen wird',
      includedItems: [
        'Prüfung von Tapu, Erbenkreis und Anwendbarkeit der 100-%-Regel',
        'Kontrolle von Schätzwertgutachten, Einwendungsfrist und Verkaufstermin',
        'Koordination von Vollmacht, UYAP, Sicherheitsleistung und Versteigerungsstrategie',
      ],
      trustLine: 'Türkisches Erbrecht · Mannheim & Ankara · UYAP-Verfahrenskontrolle',
      stickyTitle: 'Teilungsversteigerung Türkei',
      stickySubtitle: 'WhatsApp Vorab-Formular',
      stickyButton: 'WhatsApp',
      chips: ['Tapu', 'Erbenkreis', 'Schätzwert', 'Sicherheit', '7-Tage-Frist'],
    };
  }

  if (language === 'en') {
    return {
      duration: 'Direct Contact',
      serviceName: 'Turkish inherited-property auction',
      leadSituation: 'I am an heir to property in Turkey and want to check the valuation, partition auction, deposit, deadlines and strategy.',
      introEyebrow: 'DIRECT WHATSAPP CONTACT',
      introTitle: 'Inherited property in Turkey facing a partition auction?',
      introBody: 'Text us directly on WhatsApp. We review the title deed, heirs, assessed value, objection deadline and whether the new 100% first-auction rule may apply.',
      introButton: 'Start WhatsApp review',
      durationChip: 'Direct Contact',
      formChip: 'WhatsApp intake form',
      comparisonTitle: 'Heirs-only first auction? Check the conditions before the hearing.',
      comparisonBody: 'The new protection only works if all co-owners acquired their shares through inheritance and no third-party share is involved. A sold share, low valuation or missed objection deadline can change the entire strategy.',
      serviceTypesTitle: 'Valuation, deposit and 7-day payment deadline need one plan',
      serviceTypesBody: 'Anyone planning to bid needs financing, deposit timing and deadline control. We review the Turkish file status through UYAP and flag what must be handled immediately.',
      serviceTypesButton: 'Check the auction via WhatsApp',
      bottomEyebrow: 'Done-for-you partition auction review',
      bottomTitle: 'We review your Turkish inherited property before auction',
      bottomBody: 'Use the WhatsApp intake form to explain the property, heirs and current stage. Hasan Doğru reviews the title deed, inheritance documents, valuation, objection deadlines, deposit and auction strategy without unnecessary travel.',
      includedTitle: 'What we handle',
      includedItems: [
        'Review of title deed, heir structure and 100% rule eligibility',
        'Check of valuation report, objection deadline and auction date',
        'Coordination of power of attorney, UYAP, deposit and bidding strategy',
      ],
      trustLine: 'Turkish inheritance law · Mannheim & Ankara · UYAP file control',
      stickyTitle: 'Turkey partition auction',
      stickySubtitle: 'WhatsApp intake form',
      stickyButton: 'WhatsApp',
      chips: ['Title deed', 'Heirs', 'Valuation', 'Deposit', '7-day deadline'],
    };
  }

  return {
    duration: 'Direkt İletişim',
    serviceName: 'Ortaklığın Giderilmesi',
    leadSituation: "Türkiye'de miras kalan taşınmaz için ortaklığın giderilmesi veya ihale sürecim var; tapu, muhammen bedel, teminat ve süreleri kontrol ettirmek istiyorum.",
    introEyebrow: 'DİREKT WHATSAPP İLETİŞİMİ',
    introTitle: 'Türkiye’de miras taşınmazı için ortaklığın giderilmesi davası mı var?',
    introBody: "Bize doğrudan WhatsApp'tan yazın. Tapu kaydı, mirasçı listesi, muhammen bedel, itiraz süresi, teminat ve yeni yüzde yüz kuralının dosyanıza uygulanıp uygulanmayacağını birlikte kontrol edelim.",
    introButton: 'WhatsApp kontrolünü başlat',
    durationChip: 'Direkt İletişim',
    formChip: 'WhatsApp ön bilgi formu',
    comparisonTitle: 'İlk ihale sadece mirasçılar arasında mı? Şartları önceden kontrol edin.',
    comparisonBody: 'Yeni koruma yalnızca tüm maliklerin miras yoluyla edinmiş olması ve üçüncü kişi payı bulunmaması halinde işler. Satılmış bir pay, düşük kıymet takdiri veya kaçan itiraz süresi korumayı zayıflatabilir.',
    serviceTypesTitle: 'Muhammen bedel, teminat ve 7 günlük ödeme süresi tek planda yönetilmeli',
    serviceTypesBody: 'İhaleye girmek isteyen mirasçının finansman, teminat ve süre kontrolünü önceden hazırlaması gerekir. UYAP üzerinden dosya aşamasını inceler, nerede hızlı hareket edilmesi gerektiğini netleştiririz.',
    serviceTypesButton: "Ortaklığın giderilmesini WhatsApp'tan sorun",
    bottomEyebrow: 'Done-for-you ortaklığın giderilmesi kontrolü',
    bottomTitle: 'Türkiye’deki miras taşınmazınızı ihale öncesi kontrol ediyoruz',
    bottomBody: 'Kısa WhatsApp formuyla taşınmazı, mirasçıları ve dosya aşamasını iletin. Hasan Doğru tapu, veraset, kıymet takdiri, itiraz süresi, teminat ve ihale stratejisini gereksiz Türkiye seyahati olmadan değerlendirir.',
    includedTitle: 'Hizmete dahil olanlar',
    includedItems: [
      'Tapu, mirasçı yapısı ve yüzde yüz kuralının uygulanabilirliği incelenir',
      'Kıymet takdiri, itiraz süresi ve satış günü kontrol edilir',
      'Vekaletname, UYAP, teminat ve ihale stratejisi koordine edilir',
    ],
    trustLine: 'Türk miras hukuku · Mannheim & Ankara · UYAP dosya kontrolü',
    stickyTitle: 'Ortaklığın giderilmesi',
    stickySubtitle: 'WhatsApp ön bilgi formu',
    stickyButton: 'WhatsApp',
    chips: ['Tapu', 'Mirasçılar', 'Muhammen bedel', 'Teminat', '7 günlük süre'],
  };
}

function getBlogProductFunnelCopy(funnel: BlogProductFunnel, language: string) {
  if (funnel.service === 'tanima_tenfiz') return getTanimaTenfizFunnelCopy(language);
  if (funnel.service === 'inheritance_tax') return getInheritanceTaxFunnelCopy(language);
  if (funnel.service === 'property_partition_auction') return getPropertyPartitionAuctionFunnelCopy(language);
  if (['divorce_property', 'pension_rights', 'inheritance_participation', 'inheritance_certificate'].includes(funnel.service)) {
    return getFamilyAndInheritanceFunnelCopy(funnel.service, language);
  }
  return getVekaletnameFunnelCopy(language);
}

function getFamilyAndInheritanceFunnelCopy(service: BlogProductFunnel['service'], language: string) {
  const isPension = service === 'pension_rights';
  const isDivorceProperty = service === 'divorce_property';
  const isParticipation = service === 'inheritance_participation';

  if (language === 'de') {
    return {
      duration: 'Direkter Kontakt',
      serviceName: isPension ? 'Rentenrechte bei Scheidung' : isDivorceProperty ? 'Vermögensaufteilung & Schadensersatz' : isParticipation ? 'Katılma-Alacağı im Erbfall' : 'Erbschein-Anerkennung',
      leadSituation: isPension
        ? 'Ich möchte prüfen lassen, welche Renten- oder BES-Werte bei meiner türkisch-deutschen Scheidung relevant sind.'
        : isDivorceProperty
          ? 'Ich möchte Vermögensaufteilung, Katılma Alacağı, Fristen und Schadensersatz nach türkischer Scheidung prüfen lassen.'
          : isParticipation
            ? 'Ich möchte prüfen lassen, ob vor der Erbteilung eine Katılma-Alacağı-Forderung berücksichtigt werden muss.'
            : 'Ich habe einen deutschen oder türkischen Erbschein und möchte klären, wo er anerkannt wird.',
      introEyebrow: 'DIREKTER WHATSAPP-KONTAKT',
      introTitle: isPension ? 'Rentenrechte in zwei Systemen sauber trennen?' : isDivorceProperty ? 'Türkische Scheidung, Vermögen oder Schadensersatz offen?' : isParticipation ? 'Erst Malregime, dann Erbe: wurde der Schritt übersehen?' : 'Erbschein in Deutschland oder Türkei verwendbar?',
      introBody: isPension ? 'Schreiben Sie uns, welche Renten, BES-Verträge oder Auszahlungen betroffen sind. Wir ordnen den türkischen Teil ein und markieren, wo deutsche Beratung nötig ist.' : isDivorceProperty ? 'Schildern Sie Scheidungsdatum, Vermögen, Immobilien und mögliche Fristen. Wir prüfen den türkischen Anspruch und den nächsten Schritt.' : isParticipation ? 'Senden Sie Ehezeit, Todesdatum und eine grobe Vermögensliste. Wir prüfen, ob vor der Erbteilung ein güterrechtlicher Anspruch in Betracht kommt.' : 'Senden Sie uns, welches Dokument vorliegt und welche Bank, Behörde oder Grundbuchstelle es verlangt. Wir klären den schnellsten türkischen Weg.',
      introButton: 'WhatsApp Prüfung starten',
      durationChip: 'Direkter Kontakt',
      formChip: 'WhatsApp Vorab-Formular',
      comparisonTitle: isPension ? 'Deutscher Versorgungsausgleich und türkisches Malregime dürfen nicht vermischt werden.' : isDivorceProperty ? 'Fristen, Belege und Zuständigkeit entscheiden, ob der Anspruch noch durchsetzbar ist.' : isParticipation ? 'Die Erbquote allein zeigt nicht, was dem Ehegatten zusteht.' : 'Ein Dokument reicht selten automatisch in beiden Ländern.',
      comparisonBody: isPension ? 'Wir trennen SGK, Bağ-Kur, BES, ausgezahlte Beträge und deutsche Renteninformationen, damit keine Werte doppelt oder gar nicht berücksichtigt werden.' : isDivorceProperty ? 'Wir prüfen Katılma Alacağı, persönliche Vermögenswerte, Immobilien, deutsche Bezüge und mögliche TMK-174-Ansprüche.' : isParticipation ? 'Katılma Alacağı wird vor der Erbteilung berechnet und kann den Nachlass erheblich verändern.' : 'Für Tapu, Bank und Grundbuchamt gelten unterschiedliche Nachweise. Wir ordnen ein, welches Zertifikat, welche Apostille und welche Übersetzung nötig sind.',
      serviceTypesTitle: isPension ? 'Dokumente früh sammeln, bevor alte Beitragszeiten schwer belegbar werden' : isDivorceProperty ? 'Malaufstellung, Tapu, Kontoauszüge und Scheidungsdatum gehören in eine Prüfung' : isParticipation ? 'Veraset, Tapu, Bankdaten und Ehezeit müssen zusammen gerechnet werden' : 'Türkischer Erbschein, Fremdrechtserbschein und Apostille gehören in einen Plan',
      serviceTypesBody: isPension ? 'Alte SGK-/BES-Nachweise, Rentenauskünfte und Zahlungsbelege bestimmen die Strategie.' : isDivorceProperty ? 'Gerade aus Deutschland entstehen Verluste, wenn Belege, Vollmacht oder Fristen erst nachträglich sortiert werden.' : isParticipation ? 'Wir prüfen, ob die Teilhabe-Forderung schon berücksichtigt wurde oder vor der Taksim noch gesichert werden muss.' : 'Wir koordinieren den türkischen Teil und stimmen bei deutschen Verfahrensfragen mit Notaren oder Erbrechtskollegen ab.',
      serviceTypesButton: 'Fall per WhatsApp prüfen',
      bottomEyebrow: 'Done-for-you Prüfung',
      bottomTitle: isPension ? 'Wir prüfen türkische Renten- und BES-Werte bei Scheidung' : isDivorceProperty ? 'Wir prüfen Ihre türkische Vermögensaufteilung nach Scheidung' : isParticipation ? 'Wir prüfen Katılma Alacağı vor der Erbteilung' : 'Wir klären die Erbschein-Nutzung zwischen Deutschland und Türkei',
      bottomBody: isPension ? 'Über das WhatsApp Formular schildern Sie Rentensysteme, Ehezeit und Verfahrensstand. Hasan Doğru ordnet die türkische Seite ein und koordiniert, wo deutsche Beratung gebraucht wird.' : isDivorceProperty ? 'Über das WhatsApp Formular schildern Sie Scheidung, Vermögen und Fristen. Hasan Doğru prüft Katılma Alacağı, Schadensersatz und die Vertretung in der Türkei.' : isParticipation ? 'Über das WhatsApp Formular senden Sie Ehezeit, Erbfall und Vermögen. Hasan Doğru prüft, ob der Nachlass vor der Verteilung um einen malrechtlichen Anspruch bereinigt werden muss.' : 'Über das WhatsApp Formular teilen Sie Dokument, Vermögensort und Behörde mit. Hasan Doğru klärt, ob türkischer Erbschein, Anerkennung, Apostille oder Übersetzung erforderlich sind.',
      includedTitle: 'Was übernommen wird',
      includedItems: ['Erste Einordnung von Anspruch, Fristen und zuständigem Weg', 'Dokumentencheck für Vollmacht, Register, Tapu, Bank oder Gericht', 'Koordination der türkischen Schritte über Mannheim und Ankara'],
      trustLine: 'Türkisches Recht · Mannheim & Ankara · Deutsch und Türkisch',
      stickyTitle: isPension ? 'Renten & Scheidung' : isDivorceProperty ? 'Mal paylaşımı' : isParticipation ? 'Katılma alacağı' : 'Erbschein DE/TR',
      stickySubtitle: 'WhatsApp Vorab-Formular',
      stickyButton: 'WhatsApp',
      chips: isPension ? ['SGK', 'Bağ-Kur', 'BES', 'Versorgungsausgleich', 'TMK'] : isDivorceProperty ? ['Katılma Alacağı', 'TMK 174', 'Tapu', 'Fristen', 'UYAP'] : isParticipation ? ['Tereke', 'Ehezeit', 'Tapu', 'Veraset', 'Tasfiye'] : ['Erbschein', 'Tapu', 'Bank', 'Apostille', 'MÖHUK'],
    };
  }

  if (language === 'en') {
    return {
      duration: 'Direct Contact',
      serviceName: isPension ? 'Pension rights in divorce' : isDivorceProperty ? 'Property division & compensation' : isParticipation ? 'Participation claim in inheritance' : 'Inheritance certificate recognition',
      leadSituation: isPension ? 'I want to check pension or BES values in a Turkish-German divorce.' : isDivorceProperty ? 'I want to check property division, participation claim, deadlines or compensation after a Turkish divorce.' : isParticipation ? 'I want to check whether a participation claim must be handled before estate division.' : 'I have a German or Turkish inheritance certificate and want to know where it will be accepted.',
      introEyebrow: 'DIRECT WHATSAPP CONTACT',
      introTitle: isPension ? 'Separate pension rights across two legal systems?' : isDivorceProperty ? 'Turkish divorce property or compensation still open?' : isParticipation ? 'Before estate division, check the spouse’s property claim.' : 'Will your inheritance certificate work in the other country?',
      introBody: 'Send us the key facts via WhatsApp. We review the Turkish-law side, the documents needed and the next procedural step.',
      introButton: 'Start WhatsApp review',
      durationChip: 'Direct Contact',
      formChip: 'WhatsApp intake form',
      comparisonTitle: 'The document path and the legal claim must be checked before deadlines or filings go wrong.',
      comparisonBody: 'We identify which Turkish-law issue is actually at stake, what evidence is missing and whether German-side advice needs to be coordinated.',
      serviceTypesTitle: 'Documents, power of attorney and timing belong in one plan',
      serviceTypesBody: 'From Germany, the case usually turns on early document control, correct power of attorney wording and UYAP follow-up.',
      serviceTypesButton: 'Check via WhatsApp',
      bottomEyebrow: 'Done-for-you review',
      bottomTitle: isPension ? 'We review Turkish pension and BES values in divorce' : isDivorceProperty ? 'We review Turkish property division after divorce' : isParticipation ? 'We review participation claims before estate division' : 'We clarify certificate recognition between Germany and Turkey',
      bottomBody: 'Use the WhatsApp intake form to share the timeline, documents and assets. Hasan Doğru reviews the Turkish-law route and coordinates the next steps from Mannheim and Ankara.',
      includedTitle: 'What we handle',
      includedItems: ['Initial assessment of claim, deadlines and route', 'Document check for certificate, title deed, bank, court or power of attorney', 'Coordination of Turkish steps through Mannheim and Ankara'],
      trustLine: 'Turkish law · Mannheim & Ankara · German, Turkish and English',
      stickyTitle: isPension ? 'Pensions & divorce' : isDivorceProperty ? 'Property division' : isParticipation ? 'Participation claim' : 'Certificate DE/TR',
      stickySubtitle: 'WhatsApp intake form',
      stickyButton: 'WhatsApp',
      chips: isPension ? ['SGK', 'BES', 'Pension', 'Divorce', 'TMK'] : isDivorceProperty ? ['Property', 'Compensation', 'Deadlines', 'Title deed', 'UYAP'] : isParticipation ? ['Estate', 'Spouse', 'Assets', 'Probate', 'Division'] : ['Certificate', 'Bank', 'Title deed', 'Apostille', 'MÖHUK'],
    };
  }

  return {
    duration: 'Direkt İletişim',
    serviceName: isPension ? 'Boşanmada emeklilik hakları' : isDivorceProperty ? 'Mal paylaşımı ve tazminat' : isParticipation ? 'Mirasta katılma alacağı' : 'Mirasçılık belgesi tanıma',
    leadSituation: isPension ? 'Boşanmada SGK, Bağ-Kur, BES veya Alman emeklilik haklarının durumunu öğrenmek istiyorum.' : isDivorceProperty ? 'Boşanma sonrası mal paylaşımı, katılma alacağı, süre veya tazminat hakkımı kontrol ettirmek istiyorum.' : isParticipation ? 'Miras paylaşılmadan önce katılma alacağı olup olmadığını kontrol ettirmek istiyorum.' : 'Türk veya Alman mirasçılık belgemin diğer ülkede geçerli olup olmadığını öğrenmek istiyorum.',
    introEyebrow: 'DİREKT WHATSAPP İLETİŞİMİ',
    introTitle: isPension ? 'Emeklilik hakları iki sistemde farklı mı değerlendiriliyor?' : isDivorceProperty ? 'Boşanma sonrası mal paylaşımı veya tazminat açık mı kaldı?' : isParticipation ? 'Miras paylaşılmadan önce eşin katılma alacağı kontrol edildi mi?' : 'Mirasçılık belgeniz Almanya veya Türkiye’de kabul edilir mi?',
    introBody: 'Bize WhatsApp üzerinden temel bilgileri gönderin. Türk hukuku tarafını, gerekli belgeleri ve sonraki adımı netleştirelim.',
    introButton: 'WhatsApp kontrolünü başlat',
    durationChip: 'Direkt İletişim',
    formChip: 'WhatsApp ön bilgi formu',
    comparisonTitle: 'Süre, belge ve doğru dava yolu baştan kontrol edilmeli.',
    comparisonBody: 'Hangi Türk hukuku meselesinin gündemde olduğunu, hangi belgelerin eksik olduğunu ve Almanya tarafında ayrıca koordinasyon gerekip gerekmediğini belirleriz.',
    serviceTypesTitle: 'Belge, vekaletname ve UYAP takibi tek planda yürümeli',
    serviceTypesBody: 'Almanya’dan yürütülen dosyalarda kayıp genellikle yanlış vekaletname, eksik belge veya kaçırılan süreden doğar.',
    serviceTypesButton: "WhatsApp'tan değerlendirme isteyin",
    bottomEyebrow: 'Done-for-you değerlendirme',
    bottomTitle: isPension ? 'Boşanmada emeklilik ve BES değerlerini kontrol ediyoruz' : isDivorceProperty ? 'Boşanma sonrası mal paylaşımı ve tazminatı kontrol ediyoruz' : isParticipation ? 'Miras paylaşımından önce katılma alacağını kontrol ediyoruz' : 'Mirasçılık belgesinin Almanya-Türkiye kullanımını netleştiriyoruz',
    bottomBody: 'Kısa WhatsApp formuyla tarihleri, belgeleri ve mal varlığını iletin. Hasan Doğru Türk hukuku yolunu değerlendirir ve Mannheim-Ankara hattında sonraki adımları koordine eder.',
    includedTitle: 'Hizmete dahil olanlar',
    includedItems: ['Hak, süre ve doğru yol için ilk değerlendirme', 'Belge, tapu, banka, mahkeme veya vekaletname kontrolü', 'Türkiye adımlarının Mannheim ve Ankara üzerinden koordinasyonu'],
    trustLine: 'Türk hukuku · Mannheim & Ankara · Türkçe ve Almanca',
    stickyTitle: isPension ? 'Emeklilik & boşanma' : isDivorceProperty ? 'Mal paylaşımı' : isParticipation ? 'Katılma alacağı' : 'Belge tanıma',
    stickySubtitle: 'WhatsApp ön bilgi formu',
    stickyButton: 'WhatsApp',
    chips: isPension ? ['SGK', 'Bağ-Kur', 'BES', 'Boşanma', 'TMK'] : isDivorceProperty ? ['Katılma alacağı', 'TMK 174', 'Tapu', 'Süreler', 'UYAP'] : isParticipation ? ['Tereke', 'Evlilik', 'Tapu', 'Veraset', 'Tasfiye'] : ['Mirasçılık', 'Tapu', 'Banka', 'Apostil', 'MÖHUK'],
  };
}

function getProductHookCopy(funnel: BlogProductFunnel, language: string) {
  if (['divorce_property', 'pension_rights', 'inheritance_participation', 'inheritance_certificate'].includes(funnel.service)) {
    const copy = getBlogProductFunnelCopy(funnel, language);
    const isInheritance = funnel.service === 'inheritance_participation' || funnel.service === 'inheritance_certificate';
    return {
      lead: copy.introBody,
      bullets: copy.chips.slice(0, 3).map((chip) => (
        language === 'de'
          ? `${chip}: früh einordnen, bevor Fristen oder Nachweise kippen`
          : language === 'en'
            ? `${chip}: check early before deadlines or documents become a problem`
            : `${chip}: süre veya belge sorunu doğmadan önce kontrol edin`
      )),
      trust: isInheritance
        ? (language === 'en' ? 'Turkish inheritance law · Mannheim & Ankara' : language === 'de' ? 'Türkisches Erbrecht · Mannheim & Ankara' : 'Türk miras hukuku · Mannheim & Ankara')
        : (language === 'en' ? 'Turkish family law · Mannheim & Ankara' : language === 'de' ? 'Türkisches Familienrecht · Mannheim & Ankara' : 'Türk aile hukuku · Mannheim & Ankara'),
    };
  }

  if (funnel.service === 'tanima_tenfiz') {
    return language === 'de'
      ? {
          lead: 'Eine deutsche Scheidung ändert den türkischen Personenstand nicht automatisch. Dieser Ratgeber zeigt, wann Tanıma reicht, wann Tenfiz sinnvoll ist und welche Unterlagen das Verfahren beschleunigen.',
          bullets: [
            'Tanıma oder Tenfiz: Welcher Weg passt zu Ihrem deutschen Beschluss?',
            'Apostille, Übersetzung und Vollmacht: Welche Dokumente müssen stimmen?',
            'Zustellung vermeiden: Wann beide Anwälte das Verfahren deutlich verkürzen können',
          ],
          trust: 'Av. Hasan Doğru · Deutsch & Türkisch · Mannheim & Ankara',
        }
      : language === 'en'
      ? {
          lead: 'A German divorce does not automatically update the Turkish civil registry. This guide explains when recognition is enough, when enforcement is needed, and which documents speed up the process.',
          bullets: [
            'Recognition or enforcement: which route fits your German order?',
            'Apostille, translation and power of attorney: which documents must be correct?',
            'Avoid service delays: when both sides appoint Turkish counsel, the case can move faster',
          ],
          trust: 'Av. Hasan Doğru · German & Turkish · Mannheim & Ankara',
        }
      : {
          lead: 'Almanya’daki boşanma kararı Türk nüfus kaydını kendiliğinden değiştirmez. Bu rehber tanımanın ne zaman yeterli olduğunu, tenfizin ne zaman gerektiğini ve hangi belgelerin süreci hızlandırdığını açıklar.',
          bullets: [
            'Tanıma mı, tenfiz mi: Alman kararınıza hangi yol uygun?',
            'Apostil, tercüme ve vekaletname: Hangi belgeler doğru hazırlanmalı?',
            'Tebligat gecikmesini önleme: İki tarafın avukatla temsilinde süreç nasıl hızlanır?',
          ],
          trust: 'Av. Hasan Doğru · Türkçe & Almanca · Mannheim & Ankara',
        };
  }

  if (funnel.service === 'inheritance_tax') {
    return language === 'de'
      ? {
          lead: 'Bei Erbschaften mit Türkei-Bezug laufen türkische Abwicklung und deutsche Steuerfolgen parallel. Dieser Ratgeber zeigt, wo Doppelbesteuerung entsteht und welche Nachweise von Anfang an gesichert werden sollten.',
          bullets: [
            'Türkische Immobilie, deutsches Konto oder gemischter Nachlass: Wo entsteht Steuer?',
            '§ 21 ErbStG: Wann deutsche Steuer durch türkische Zahlung angerechnet werden kann',
            'Fristen und Belege: Welche Dokumente Sie nicht erst später suchen sollten',
          ],
          trust: 'Av. Hasan Doğru · Türkisches Recht · Mannheim & Ankara',
        }
      : language === 'en'
      ? {
          lead: 'In inheritance cases involving Turkey, the Turkish estate process and German tax consequences run in parallel. This guide shows where double taxation arises and which evidence should be secured early.',
          bullets: [
            'Turkish property, German accounts or mixed estates: where does tax arise?',
            '§ 21 ErbStG: when German tax can be reduced by Turkish tax paid',
            'Deadlines and evidence: which documents should be prepared from day one',
          ],
          trust: 'Av. Hasan Doğru · Turkish law · Mannheim & Ankara',
        }
      : {
          lead: 'Türkiye bağlantılı miraslarda Türk miras işlemleri ile Almanya’daki vergi sonuçları aynı anda yürür. Bu rehber çifte vergilendirmenin nerede doğduğunu ve hangi belgelerin baştan hazırlanması gerektiğini gösterir.',
          bullets: [
            'Türkiye’de taşınmaz, Almanya’da hesap veya karma miras: Vergi nerede doğar?',
            '§ 21 ErbStG: Türkiye’de ödenen vergi Almanya’da ne zaman mahsup edilir?',
            'Süreler ve belgeler: Hangi evraklar en baştan güvenceye alınmalı?',
          ],
          trust: 'Av. Hasan Doğru · Türk hukuku · Mannheim & Ankara',
        };
  }

  if (funnel.service === 'property_partition_auction') {
    return language === 'de'
      ? {
          lead: 'Das 12. Justizpaket verändert die erste Versteigerungsrunde bei geerbten türkischen Immobilien. Dieser Ratgeber zeigt, wann die neue 100-%-Regel greift und warum Schätzwert, Einwendungsfrist und Sicherheitsleistung früh geprüft werden müssen.',
          bullets: [
            'Erbenkreis und Tapu: Wann gilt die erste Runde nur unter Miterben?',
            'Schätzwert und Einwendung: Warum eine verpasste Frist teuer werden kann',
            'Bieten aus Deutschland: Vollmacht, UYAP, Sicherheitsleistung und 7-Tage-Frist',
          ],
          trust: 'Av. Hasan Doğru · Türkisches Erbrecht · Mannheim & Ankara',
        }
      : language === 'en'
      ? {
          lead: 'Turkey’s 12th Judicial Package changes the first auction round for inherited property. This guide explains when the new 100% rule applies and why valuation, objection deadlines and deposits must be checked early.',
          bullets: [
            'Heirs and title deed: when is the first auction limited to co-heirs?',
            'Valuation and objections: why a missed deadline can become expensive',
            'Bidding from abroad: power of attorney, UYAP, deposit and 7-day payment deadline',
          ],
          trust: 'Av. Hasan Doğru · Turkish inheritance law · Mannheim & Ankara',
        }
      : {
          lead: '12. Yargı Paketi, miras kalan taşınmazlarda ilk satış ihalesinin işleyişini değiştiriyor. Bu rehber yüzde yüz kuralının ne zaman uygulanacağını ve muhammen bedel, itiraz süresi, teminat konularının neden erken kontrol edilmesi gerektiğini açıklar.',
          bullets: [
            'Mirasçı yapısı ve tapu: İlk ihale ne zaman sadece mirasçılar arasında yapılır?',
            'Kıymet takdiri ve itiraz: Kaçırılan süre neden pahalıya mal olabilir?',
            'Almanya’dan ihaleye hazırlık: Vekaletname, UYAP, teminat ve 7 günlük ödeme süresi',
          ],
          trust: 'Av. Hasan Doğru · Türk miras hukuku · Mannheim & Ankara',
        };
  }

  return language === 'de'
    ? {
        lead: 'Viele Vollmachten für die Türkei scheitern an der falschen Vorgehensweise. Dieser Ratgeber erklärt Ihnen genau, worauf es bei Konsulat, Notar und Apostille ankommt, um rechtlich auf der sicheren Seite zu sein.',
        bullets: [
          'Konsulat oder deutscher Notar: Welcher Weg ist für Sie der richtige?',
          'Apostille und vereidigte Übersetzung: Wann sind sie zwingend erforderlich?',
          'Zeitverlust vermeiden: Die häufigsten Gründe für eine Ablehnung in der Türkei',
        ],
        trust: 'Av. Hasan Doğru · Deutsch & Türkisch · Mannheim & Ankara',
      }
    : language === 'en'
    ? {
        lead: 'Many powers of attorney for Turkey fail due to choosing the wrong procedure. This guide explains exactly what you need to know about the consulate, notaries, and apostilles to ensure your documents are legally valid.',
        bullets: [
          'Consulate vs. German Notary: Which route is better for your specific case?',
          'Apostilles and sworn translations: When are they strictly required?',
          'Avoid delays: The most common reasons documents are rejected in Turkey',
        ],
        trust: 'Av. Hasan Doğru · German & Turkish · Mannheim & Ankara',
      }
    : {
        lead: 'Türkiye\'de kullanılacak vekaletnamelerde en sık yaşanan sorun, yanlış başvuru yönteminin seçilmesidir. Konsolosluk, Alman noteri veya apostil işlemleri arasındaki karmaşayı gidermek için bilmeniz gereken her şeyi bu rehberde derledik.',
        bullets: [
          'Konsolosluk mu yoksa Alman noteri mi: Hangi seçenek sizin için daha uygun?',
          'Apostil ve yeminli tercüme: Hangi durumlarda kesinlikle zorunludur?',
          'Zaman kaybını önleyin: Türkiye\'de belgelerin reddedilmesine yol açan en yaygın hatalar',
        ],
        trust: 'Av. Hasan Doğru · Türkçe & Almanca · Mannheim & Ankara',
      };
}

function buildProductWhatsAppLeadUrl(funnel: BlogProductFunnel, placement: BlogProductCTAPlacement, language: string) {
  const copy = getBlogProductFunnelCopy(funnel, language);
  const url = new URL(WHATSAPP_URL);
  url.searchParams.set('service', copy.serviceName);
  url.searchParams.set('utm_source', 'blog');
  url.searchParams.set('utm_medium', 'cta');
  url.searchParams.set('utm_campaign', funnel.campaign);
  url.searchParams.set('utm_content', placement);
  url.searchParams.set('situation', copy.leadSituation);
  return url.toString();
}

function getProductLeadCaptureDetail(funnel: BlogProductFunnel, language: string) {
  const copy = getBlogProductFunnelCopy(funnel, language);
  return {
    service: copy.serviceName,
    situation: copy.leadSituation,
  };
}

function BlogBookingButton({
  funnel,
  placement,
  language,
  children,
  compact = false,
}: {
  funnel: BlogProductFunnel;
  placement: BlogProductCTAPlacement;
  language: string;
  children: ReactNode;
  compact?: boolean;
}) {
  return (
    <a
      href={buildProductWhatsAppLeadUrl(funnel, placement, language)}
      onClick={(event) => {
        event.preventDefault();
        openWhatsAppLeadCapture(getProductLeadCaptureDetail(funnel, language));
      }}
      target="_blank"
      rel="noopener noreferrer"
      className={[
        "inline-flex items-center justify-center rounded-full bg-[#D4AF37] text-[#1C3829] font-sans font-bold uppercase tracking-[0.16em] shadow-lg transition-all duration-300 hover:bg-white hover:scale-105 active:scale-95",
        compact ? "px-4 py-3 text-[11px]" : "w-full px-5 py-4 text-center text-[10px] sm:w-auto sm:px-7 sm:text-[11px] md:px-10 md:text-[12px]",
      ].join(' ')}
    >
      {children}
    </a>
  );
}

function BlogProductCTAIntro({ funnel, language }: { funnel: BlogProductFunnel; language: string }) {
  const copy = getBlogProductFunnelCopy(funnel, language);
  const visual = funnel.image || vekaletnameImg;

  return (
    <aside className="relative my-20 w-screen relative left-1/2 -translate-x-1/2 bg-[#0F2417] shadow-[0_24px_60px_rgba(15,36,23,0.3)] border-y border-white/10 isolate overflow-hidden">
      
      {/* Mobile-only background image */}
      <div className="absolute inset-0 md:hidden pointer-events-none z-0">
        <img src={visual} alt="" className="w-full h-full object-cover object-right opacity-[0.15] mix-blend-luminosity" />
      </div>

      {/* Glow effect */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-80 h-80 bg-[#D4AF37]/20 rounded-full blur-[80px] pointer-events-none z-0" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16 relative z-10">
        <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          
          {/* Left Column: Text & CTA */}
          <div>
            {/* Eyebrow + duration chip on same row */}
            <div className="flex items-center gap-4 mb-6">
              <span className="font-sans text-[11px] font-bold uppercase tracking-[0.24em] text-[#D4AF37]">
                {copy.introEyebrow}
              </span>
              <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white/60 backdrop-blur-sm">
                {copy.durationChip}
              </span>
            </div>

            <h3 className="mb-6 font-serif text-[34px] leading-[1.1] tracking-tight text-white md:text-[44px] drop-shadow-md">
              {copy.introTitle}
            </h3>
            
            <div className="mb-10 max-w-[540px] relative p-6 md:p-8 rounded-2xl bg-white/[0.03] backdrop-blur-sm border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#D4AF37] to-transparent rounded-l-2xl opacity-50" />
              <p className="text-[16px] leading-[1.8] text-white/90 md:text-[17px] font-light antialiased">
                {copy.introBody}
              </p>
            </div>

            <BlogBookingButton funnel={funnel} placement="intro" language={language}>
              {copy.introButton}
            </BlogBookingButton>
          </div>

          {/* Right Column: Proper Image Asset */}
          <div className="hidden md:flex relative justify-center items-center">
            <img 
              src={visual}
              alt={copy.serviceName}
              className="w-full h-auto object-contain drop-shadow-2xl scale-110"
            />
          </div>

        </div>
      </div>
    </aside>
  );
}

function BlogProductCTAMid({
  funnel,
  language,
  variant,
}: {
  funnel: BlogProductFunnel;
  language: string;
  variant: 'comparison' | 'service_types';
}) {
  const isServiceTypes = variant === 'service_types';
  const copy = getBlogProductFunnelCopy(funnel, language);

  return (
    <aside className="relative my-20 w-screen relative left-1/2 -translate-x-1/2 bg-[#0F2417]/95 backdrop-blur-xl shadow-[0_24px_60px_rgba(15,36,23,0.3)] border-y border-white/10 isolate">
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-80 h-80 bg-[#D4AF37]/15 rounded-full blur-[80px] pointer-events-none" />
      <div className="max-w-[720px] mx-auto px-4 sm:px-6 py-12 md:py-16 relative z-10">
        <div className="mb-6 h-1 w-16 rounded-full bg-[#D4AF37]" />
        <h3 className="mb-5 font-serif text-[26px] leading-[1.15] text-white md:text-[32px] drop-shadow-sm">
          {isServiceTypes ? copy.serviceTypesTitle : copy.comparisonTitle}
        </h3>
        <p className="mb-8 text-[16px] leading-[1.8] text-white/80 sm:text-[18px] sm:leading-[1.8]">
          {isServiceTypes ? copy.serviceTypesBody : copy.comparisonBody}
        </p>
        {isServiceTypes && (
          <div className="mb-8 flex flex-wrap gap-2">
            {copy.chips.map((chip) => (
              <span key={chip} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[12px] font-bold uppercase tracking-[0.12em] text-[#D4AF37]">
                {chip}
              </span>
            ))}
          </div>
        )}
        <BlogBookingButton funnel={funnel} placement={isServiceTypes ? 'service_types' : 'comparison'} language={language}>
          {isServiceTypes ? copy.serviceTypesButton : copy.introButton}
        </BlogBookingButton>
      </div>
    </aside>
  );
}

function BlogDoneForYouBanner({ funnel, language }: { funnel: BlogProductFunnel; language: string }) {
  const headline =
    language === 'de'
      ? 'Hasan Doğru übernimmt den gesamten Vollmacht-Prozess für Sie'
      : language === 'en'
      ? 'Hasan Doğru handles your entire power of attorney process'
      : 'Hasan Doğru vekaletname sürecinizi baştan sona yönetir';

  const sub =
    language === 'de'
      ? 'Von der Prüfung des richtigen Wegs bis zur fertigen Vollmacht — alles aus einer Hand. Konsulat, Notar, Apostille, Übersetzung, Unterlagen.'
      : language === 'en'
      ? 'From route check to ready-to-use document — everything handled for you. Consulate, notary, apostille, translation, documents.'
      : 'Doğru yolun tespitinden hazır vekâletnameye kadar her şey tek elden. Konsolosluk, noter, apostil, tercüme, belgeler.';

  const button =
    language === 'de'
      ? 'Jetzt per WhatsApp anfragen'
      : language === 'en'
      ? 'Start on WhatsApp'
      : 'WhatsApp ile hemen başlayın';

  const leadDetail = getProductLeadCaptureDetail(funnel, language);

  return (
    <div className="mt-10 overflow-hidden rounded-2xl bg-[#1C3829]">
      <div className="h-1.5 bg-[#8B6E2A]" />
      <div className="flex flex-col md:flex-row md:items-stretch">
        <div className="flex flex-1 flex-col justify-center p-8 md:p-12">
          <p className="mb-4 font-sans text-[11px] font-bold uppercase tracking-[0.24em] text-[#C4A94A]">
            Done-for-you
          </p>
          <h3 className="mb-5 font-serif text-[28px] leading-[1.15] text-white md:text-4xl">
            {headline}
          </h3>
          <p className="mb-8 text-[16px] leading-[1.75] text-white/65 md:text-[17px]">
            {sub}
          </p>
          <div>
            <a
              href={buildProductWhatsAppLeadUrl(funnel, 'bottom', language)}
              onClick={(e) => {
                e.preventDefault();
                openWhatsAppLeadCapture(leadDetail);
              }}
              className="inline-flex items-center gap-3 rounded-full bg-[#8B6E2A] px-8 py-4 font-sans text-[13px] font-bold uppercase tracking-[0.16em] text-white transition-all duration-200 hover:bg-white hover:text-[#1C3829] active:scale-95"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 shrink-0">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.845L.057 23.428a.75.75 0 0 0 .915.915l5.651-1.46A11.944 11.944 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.89 0-3.663-.49-5.2-1.348l-.371-.214-3.857.997 1.02-3.763-.234-.386A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
              {button}
            </a>
          </div>
        </div>
        <div className="hidden md:block md:w-64 lg:w-72 shrink-0 relative overflow-hidden">
          <img
            src={hasanMainHero}
            alt="Hasan Doğru"
            className="absolute inset-0 h-full w-full object-cover object-top opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1C3829] via-[#1C3829]/30 to-transparent" />
        </div>
      </div>
    </div>
  );
}

function BlogProductCTABottom({ funnel, language }: { funnel: BlogProductFunnel; language: string }) {
  const copy = getBlogProductFunnelCopy(funnel, language);

  return (
    <div className="relative mt-32 w-screen relative left-1/2 -translate-x-1/2 bg-[#0F2417] shadow-[0_30px_80px_rgba(15,36,23,0.35)] border-y border-white/10 isolate overflow-hidden">
      
      {/* Hasan Background Image - Properly aligned to fit the section */}
      <div className="absolute inset-y-0 left-0 w-full md:w-[50%] pointer-events-none z-0">
        <img 
          src={hasanMainHero} 
          alt="Av. Hasan Doğru" 
          className="w-full h-full object-contain object-left-bottom opacity-100 mix-blend-soft-light md:mix-blend-normal" 
        />
        
        {/* Gradients to fade the edges seamlessly on desktop only */}
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-transparent via-[#0F2417]/90 to-[#0F2417]" />
        <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-[#0F2417]" />
      </div>

      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4AF37]/15 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3 z-0" />
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37]/70 to-transparent z-10" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 md:py-24 relative z-10">
        <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div>
            <p className="mb-5 font-sans text-[11px] font-bold uppercase tracking-[0.24em] text-[#D4AF37]">
              {copy.bottomEyebrow}
            </p>
            <h3 className="mb-7 font-serif text-[34px] leading-[1.1] tracking-tight text-white md:text-[44px] drop-shadow-lg">
              {copy.bottomTitle}
            </h3>
            <div className="mb-10 max-w-[540px] relative p-6 md:p-8 rounded-2xl bg-[#0F2417]/75 border border-white/10 shadow-2xl">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#D4AF37] to-transparent rounded-l-2xl opacity-50" />
              <p className="text-[16px] leading-[1.8] text-white/90 md:text-[17px] font-light antialiased">
                {copy.bottomBody}
              </p>
            </div>
            <BlogBookingButton funnel={funnel} placement="bottom" language={language}>
              {copy.introButton}
            </BlogBookingButton>
          </div>

          <div className="md:pl-10 relative z-10">
            <h4 className="mb-8 font-serif text-[24px] md:text-[28px] leading-tight text-white tracking-tight drop-shadow-lg">
              {copy.includedTitle}
            </h4>
            <ul className="m-0 space-y-6 p-0 text-[16px] md:text-[17px] leading-relaxed text-white/90 font-light">
              {copy.includedItems.map((item) => (
                <li key={item} className="flex gap-4 items-start group">
                  <span className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#D4AF37] ring-4 ring-[#D4AF37]/20 group-hover:ring-[#D4AF37]/40 transition-all" />
                  <span className="group-hover:text-white transition-colors">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 pt-6 text-[12px] font-bold uppercase tracking-[0.14em] text-[#D4AF37]/60">
              {copy.trustLine}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function BlogStickyBookingCTA({ funnel, language }: { funnel: BlogProductFunnel; language: string }) {
  const copy = getBlogProductFunnelCopy(funnel, language);

  const doneForYouLabel =
    copy.stickyTitle;

  const headline =
    funnel.service === 'tanima_tenfiz'
      ? language === 'de'
        ? 'Wir klären Tanıma, Tenfiz, Unterlagen und Zustellung für Sie.'
        : language === 'en'
          ? 'We clarify recognition, enforcement, documents and service for you.'
          : 'Tanıma, tenfiz, belge ve tebligat sürecini sizin için netleştiriyoruz.'
      : funnel.service === 'inheritance_tax'
        ? language === 'de'
          ? 'Erbschaftsteuer Türkei prüfen: Fristen, Nachweise und Doppelbesteuerung klären.'
          : language === 'en'
            ? 'Check Turkish inheritance tax, deadlines, evidence and double taxation.'
            : 'Türkiye miras vergisi, süreler, belgeler ve çifte vergilendirmeyi netleştirelim.'
        : funnel.service === 'property_partition_auction'
          ? language === 'de'
            ? 'Teilungsversteigerung Türkei prüfen: Schätzwert, Erbenkreis und Fristen klären.'
            : language === 'en'
              ? 'Check the Turkish partition auction: valuation, heirs and deadlines.'
              : 'Ortaklığın giderilmesi sürecinde muhammen bedel, mirasçılar ve süreleri netleştirelim.'
        : ['divorce_property', 'pension_rights', 'inheritance_participation', 'inheritance_certificate'].includes(funnel.service)
          ? copy.bottomTitle
        : language === 'de'
          ? 'Wir bereiten Ihre Vollmacht vollständig vor. Sie müssen sich um nichts kümmern.'
          : language === 'en'
            ? 'We handle everything for you. You just sign.'
            : 'Her şeyi sizin için hallediyoruz, size sadece imzalamak kalıyor!';

  const sub =
    funnel.service === 'tanima_tenfiz'
      ? language === 'de'
        ? 'Deutsche Scheidung, Nüfus, Apostille, Übersetzung und Vollmacht'
        : language === 'en'
          ? 'German divorce, Turkish registry, apostille, translation and power of attorney'
          : 'Alman boşanması, nüfus kaydı, apostil, tercüme ve vekalet'
      : funnel.service === 'inheritance_tax'
        ? language === 'de'
          ? 'Türkische Erbseite und deutsche Anrechnung von Anfang an koordinieren'
          : language === 'en'
            ? 'Coordinate the Turkish estate side and German tax credit from day one'
            : 'Türkiye miras süreci ve Almanya mahsup başvurusunu baştan koordine edin'
        : funnel.service === 'property_partition_auction'
          ? language === 'de'
            ? 'Tapu, Veraset, UYAP, Sicherheitsleistung und 7-Tage-Frist'
            : language === 'en'
              ? 'Title deed, probate, UYAP, deposit and 7-day deadline'
              : 'Tapu, veraset, UYAP, teminat ve 7 günlük ödeme süresi'
        : ['divorce_property', 'pension_rights', 'inheritance_participation', 'inheritance_certificate'].includes(funnel.service)
          ? copy.chips.join(' · ')
        : language === 'de'
          ? 'Konsulat, Notar, Apostille, Übersetzung — Hasan Doğru kümmert sich darum'
          : language === 'en'
            ? 'Consulate, notary, apostille, translation — all taken care of'
            : 'Konsolosluk, noter, apostil, tercüme — hepsini Hasan Doğru bürosu halledebilir';

  return (
    <div className="fixed inset-x-0 bottom-0 z-[180] bg-[#1C3829] shadow-[0_-4px_32px_rgba(0,0,0,0.28)] ring-1 ring-white/10">
      <div className="h-[3px] bg-[#8B6E2A]" />
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3 md:gap-8 md:px-8 md:py-4">
        <div className="min-w-0 flex-1">
          <div className="mb-0.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#C4A94A] md:text-[11px]">
            {doneForYouLabel}
          </div>
          <div className="font-serif text-[13px] font-medium leading-snug text-white md:text-[22px] md:leading-tight">
            {headline}
          </div>
          <div className="mt-0.5 hidden text-[13px] text-white/50 md:block">
            {sub}
          </div>
        </div>
        <a
          href={buildProductWhatsAppLeadUrl(funnel, 'sticky', language)}
          onClick={(e) => {
            e.preventDefault();
            openWhatsAppLeadCapture({ service: copy.serviceName, situation: copy.leadSituation });
          }}
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#25D366] p-3 text-white shadow-[0_4px_18px_rgba(37,211,102,0.4)] transition-all duration-200 hover:bg-[#1EBE5A] active:scale-95 md:px-6 md:py-3"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 shrink-0">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          <span className="hidden font-sans text-[12px] font-bold uppercase tracking-[0.14em] md:inline">{copy.stickyButton}</span>
        </a>
      </div>
    </div>
  );
}

type BlogWhatsAppCTAPlacement = 'intro' | 'mid' | 'deadline' | 'settlement' | 'records' | 'strategy' | 'bottom';
type BlogWhatsAppCTATopic = 'criminal_law' | 'summons_warrant' | 'drug_case' | 'threat_case' | 'hakaret' | 'hagb' | 'property_partition' | 'inheritance_dispute' | 'inheritance_guide' | 'property_rights' | 'muris_muvazaasi' | 'tapu_iptal' | 'mavi_kart' | 'debt_collection' | 'divorce_turkey' | 'tanima_tenfiz' | 'tck_191_kdae' | 'unterhalt_nafaka';

function getBlogWhatsAppService(topic: BlogWhatsAppCTATopic) {
  if (topic === 'hagb') return 'Ceza / Yakalama Kararı';
  if (topic === 'hakaret') return 'Ceza / Yakalama Kararı';
  if (topic === 'drug_case') return 'Ceza / Yakalama Kararı';
  if (topic === 'threat_case') return 'Ceza / Yakalama Kararı';
  if (topic === 'mavi_kart') return 'Mavi Kart';
  if (topic === 'debt_collection') return 'Forderung / Inkasso';
  if (topic === 'divorce_turkey') return 'Boşanma';
  if (topic === 'tanima_tenfiz') return 'Tanıma & Tenfiz';
  if (topic === 'unterhalt_nafaka') return 'Unterhalt / Nafaka';
  if (topic === 'property_partition' || topic === 'property_rights' || topic === 'tapu_iptal') return 'Tapu / Gayrimenkul';
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

function getSummonsWarrantCTACopy(language: string, placement: BlogWhatsAppCTAPlacement) {
  if (language === 'de') {
    if (placement === 'intro') {
      return {
        eyebrow: 'Haftbefehl & UYAP-Check',
        title: 'Nicht in die Türkei reisen, bevor der Aktenstatus geprüft ist',
        body: 'Wenn Sie eine Vorladung, einen Hinweis auf ein Verfahren oder Angst vor einem Haftbefehl haben, prüfen wir UYAP, Zustellungen, Yakalama Kararı und das konkrete Grenzrisiko.',
        button: 'Status per WhatsApp prüfen lassen',
      };
    }
    if (placement === 'deadline') {
      return {
        eyebrow: 'Grenz- und Flughafenrisiko',
        title: 'Ein aktiver Yakalama Kararı wird bei der Einreise sichtbar',
        body: 'Vor Familienbesuch, Urlaub oder Erbtermin sollte geklärt sein, ob ein Haftbefehl, GBT-Eintrag oder Adli-Kontrol-Risiko besteht.',
        button: 'Reiserisiko klären',
      };
    }
    if (placement === 'strategy') {
      return {
        eyebrow: 'Interpol & Auslieferung',
        title: 'Wenn der Haftbefehl international wird, zählt Vorbereitung',
        body: 'Wir ordnen ein, ob Interpol, Red Notice, Auslieferungsrisiko oder eine türkische Aktenstrategie zuerst geprüft werden sollte.',
        button: 'Internationales Risiko prüfen',
      };
    }
    if (placement === 'mid') {
      return {
        eyebrow: 'UYAP, Vollmacht & SEGBİS',
        title: 'Verteidigung aus Mannheim direkt im türkischen Verfahren vorbereiten',
        body: 'Mit der passenden Vekaletname kann Hasan Doğru Akteneinsicht nehmen, Anträge stellen, SEGBİS prüfen und die nächsten Schritte ohne unnötige Türkeireise koordinieren.',
        button: 'UYAP-Status prüfen lassen',
      };
    }
    return {
      eyebrow: 'Verteidigung aus Deutschland',
      title: 'Türkisches Strafverfahren ohne unnötige Reise vorbereiten',
      body: 'Senden Sie kurz, ob es um Vorladung, Haftbefehl, Anklage, Interpol oder Einbürgerungsfolgen geht. Hasan Doğru prüft den sicheren nächsten Schritt.',
      button: 'WhatsApp Anfrage starten',
    };
  }

  if (language === 'en') {
    if (placement === 'intro') {
      return {
        eyebrow: 'Warrant & UYAP check',
        title: 'Do not travel to Turkey before the case status is checked',
        body: 'If you received a summons or suspect a warrant, we review UYAP, service of process, Yakalama Kararı and border risk before you travel.',
        button: 'Check status on WhatsApp',
      };
    }
    if (placement === 'deadline') {
      return {
        eyebrow: 'Airport and border risk',
        title: 'An active Yakalama Kararı appears at Turkish entry points',
        body: 'Before visiting family, travelling or attending an inheritance appointment, check whether a warrant, GBT record or travel restriction exists.',
        button: 'Clarify travel risk',
      };
    }
    if (placement === 'strategy') {
      return {
        eyebrow: 'Interpol & extradition',
        title: 'If the warrant becomes international, preparation matters',
        body: 'We assess whether Interpol, Red Notice, extradition risk or Turkish file strategy should be handled first.',
        button: 'Review international risk',
      };
    }
    if (placement === 'mid') {
      return {
        eyebrow: 'UYAP, power of attorney & SEGBİS',
        title: 'Prepare defence in the Turkish case directly from Germany',
        body: 'With the right Vekaletname, Hasan Doğru can review the file, file motions, assess SEGBİS options and coordinate next steps without unnecessary travel.',
        button: 'Check UYAP status',
      };
    }
    return {
      eyebrow: 'Defence from abroad',
      title: 'Prepare a Turkish criminal case without unnecessary travel',
      body: 'Send whether it concerns a summons, warrant, indictment, Interpol or citizenship consequences. Hasan Doğru reviews the safest next step.',
      button: 'Start WhatsApp request',
    };
  }

  if (placement === 'intro') {
    return {
      eyebrow: 'Yakalama kararı & UYAP kontrolü',
      title: "Dosya durumu kontrol edilmeden Türkiye'ye gitmeyin",
      body: 'Tebligat, dava şüphesi veya yakalama kararı riski varsa UYAP, tebligat, GBT ve sınır kapısı riskini birlikte değerlendirelim.',
      button: "Durumu WhatsApp'tan kontrol ettirin",
    };
  }
  if (placement === 'deadline') {
    return {
      eyebrow: 'Havalimanı ve sınır riski',
      title: 'Aktif yakalama kararı girişte görünür',
      body: 'Aile ziyareti, tatil veya miras işlemi öncesinde yakalama, GBT kaydı veya adli kontrol riski olup olmadığı netleşmelidir.',
      button: 'Seyahat riskini sorun',
    };
  }
  if (placement === 'strategy') {
    return {
      eyebrow: 'Interpol & iade riski',
      title: 'Dosya uluslararası boyuta taşınmadan hazırlık yapın',
      body: 'Interpol, Red Notice, iade riski veya Türk ceza dosyasında hangi stratejinin önce gelmesi gerektiğini değerlendirelim.',
      button: 'Uluslararası riski sorun',
    };
  }
  if (placement === 'mid') {
    return {
      eyebrow: 'UYAP, vekaletname & SEGBİS',
      title: "Türkiye'deki ceza dosyasını Almanya'dan doğrudan hazırlayın",
      body: 'Doğru vekaletname ile Hasan Doğru dosyayı inceleyebilir, dilekçe sunabilir, SEGBİS imkanını değerlendirebilir ve gereksiz seyahat olmadan süreci koordine edebilir.',
      button: 'UYAP durumunu kontrol ettirin',
    };
  }
  return {
    eyebrow: "Almanya'dan savunma",
    title: "Türkiye'deki ceza dosyasını gereksiz seyahat olmadan hazırlayın",
    body: 'Tebligat, yakalama kararı, iddianame, Interpol veya vatandaşlık etkisi olup olmadığını gönderin. Hasan Doğru güvenli ilk adımı değerlendirsin.',
    button: 'WhatsApp talebi başlat',
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

function getTapuIptalCTACopy(language: string, placement: BlogWhatsAppCTAPlacement) {
  if (language === 'de') {
    if (placement === 'intro') {
      return {
        eyebrow: 'Tapu İptal aus Deutschland',
        title: 'Steht im türkischen Grundbuch plötzlich ein fremder Name?',
        body: 'Senden Sie uns kurz, um welche Immobilie es geht, wer übertragen hat und wann Sie davon erfahren haben. Wir prüfen den sinnvollsten ersten Schritt.',
        button: 'WhatsApp Prüfung starten',
      };
    }
    if (placement === 'deadline') {
      return {
        eyebrow: 'Sofortschutz',
        title: 'İhtiyati Tedbir prüfen, bevor die Immobilie weiterverkauft wird',
        body: 'Bei Verdacht auf fehlerhafte Übertragung zählt Zeit. Wir prüfen, ob eine türkische Grundbuchsperre sofort beantragt werden sollte.',
        button: 'Tedbir prüfen lassen',
      };
    }
    if (placement === 'strategy') {
      return {
        eyebrow: 'Beweisstrategie',
        title: 'Marktwert, Bankspuren und Zeugen richtig sichern',
        body: 'Tapu-İptal-Fälle stehen und fallen mit Beweisen. Wir ordnen ein, welche Unterlagen aus Türkei und Deutschland zuerst beschafft werden sollten.',
        button: 'Beweise per WhatsApp einordnen',
      };
    }
    if (placement === 'mid') {
      return {
        eyebrow: 'Ohne Türkei-Reise',
        title: 'Vollmacht, Erbschein und Klageweg sauber vorbereiten',
        body: 'Wir klären, ob Tapu İptal, Tenkis oder beide Anträge sinnvoll sind und welche Vollmacht dafür gebraucht wird.',
        button: 'Nächsten Schritt klären',
      };
    }
    return {
      eyebrow: 'Türkische Immobilie sichern',
      title: 'Lassen Sie den Tapu-Verlauf prüfen, bevor Fakten geschaffen werden',
      body: 'Schildern Sie kurz den Todesfall, die Übertragung und vorhandene Unterlagen. Hasan Doğru prüft die Lage mit türkischem Grundbuch- und Erbrecht im Blick.',
      button: 'WhatsApp Formular öffnen',
    };
  }

  if (language === 'en') {
    if (placement === 'intro') {
      return {
        eyebrow: 'Tapu İptal from abroad',
        title: 'Did a stranger or sibling appear in the Turkish title deed?',
        body: 'Send us the property context, who transferred it, and when you discovered it. We assess the safest first step.',
        button: 'Start WhatsApp review',
      };
    }
    if (placement === 'deadline') {
      return {
        eyebrow: 'Urgent protection',
        title: 'Check whether an İhtiyati Tedbir should freeze the title now',
        body: 'If the title entry is suspicious, speed matters. We assess whether a Turkish registry freeze should be filed before another sale happens.',
        button: 'Check urgent freeze',
      };
    }
    if (placement === 'strategy') {
      return {
        eyebrow: 'Evidence strategy',
        title: 'Market value, payment traces, and witnesses need structure',
        body: 'Title cancellation cases depend on evidence. We help identify which records from Turkey and abroad should come first.',
        button: 'Review evidence on WhatsApp',
      };
    }
    if (placement === 'mid') {
      return {
        eyebrow: 'No Turkey travel',
        title: 'Prepare power of attorney, heir certificate, and claim strategy',
        body: 'We clarify whether Tapu İptal, Tenkis, or both claims make sense and which power of attorney wording is needed.',
        button: 'Clarify next step',
      };
    }
    return {
      eyebrow: 'Secure Turkish property',
      title: 'Review the title history before the property is moved again',
      body: 'Briefly describe the death, transfer, and documents you have. Hasan Doğru reviews the issue through Turkish property and inheritance law.',
      button: 'Open WhatsApp form',
    };
  }

  if (placement === 'intro') {
    return {
      eyebrow: "Almanya'dan tapu iptali",
      title: 'Tapuda beklenmedik bir isim mi görünüyor?',
      body: 'Taşınmazı, devri kimin yaptığını ve durumu ne zaman öğrendiğinizi kısaca gönderin. İlk doğru adımı birlikte netleştirelim.',
      button: 'WhatsApp incelemesi başlat',
    };
  }
  if (placement === 'deadline') {
    return {
      eyebrow: 'Acil koruma',
      title: 'Taşınmaz yeniden satılmadan ihtiyati tedbir değerlendirin',
      body: 'Şüpheli tapu devrinde zaman kritiktir. Tapuya şerh konulması gerekip gerekmediğini hızlıca değerlendirelim.',
      button: 'Tedbir imkanını sorun',
    };
  }
  if (placement === 'strategy') {
    return {
      eyebrow: 'Delil stratejisi',
      title: 'Piyasa değeri, banka kaydı ve tanıkları doğru sıraya koyun',
      body: 'Tapu iptal davalarında delil düzeni sonucu belirler. Türkiye ve Almanya’dan hangi belgelerin önce gerektiğini birlikte netleştirelim.',
      button: "Delilleri WhatsApp'tan gönderin",
    };
  }
  if (placement === 'mid') {
    return {
      eyebrow: "Türkiye'ye gitmeden",
      title: 'Vekaletname, veraset ilamı ve dava yolunu hazırlayın',
      body: 'Tapu iptal, tenkis veya her iki talebin birlikte açılıp açılmayacağını ve vekaletnamenin kapsamını değerlendirelim.',
      button: 'Sonraki adımı netleştirin',
    };
  }
  return {
    eyebrow: 'Türkiye’deki taşınmazı koruyun',
    title: 'Tapu geçmişini yeniden devir yapılmadan inceletin',
    body: 'Vefat, devir ve elinizdeki belgeleri kısaca anlatın. Hasan Doğru Türk tapu ve miras hukuku açısından ilk değerlendirmeyi yapar.',
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
        body: 'Bei türkischen Scheidungen entscheiden Protokoll, Vollmacht, Gerichtsort und Folgesachen wie Unterhalt oder Vermögen über Tempo und Kosten.',
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
        body: 'In Turkish divorce cases, the protocol, power of attorney, court venue, alimony and property issues determine speed and cost.',
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
      body: 'Türkiye’de boşanmada protokol, vekâletname, mahkeme yeri, nafaka ve mal paylaşımı sürecin hızını ve maliyetini belirler.',
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
    : topic === 'summons_warrant'
      ? getSummonsWarrantCTACopy(language, placement)
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
    : topic === 'tapu_iptal'
      ? getTapuIptalCTACopy(language, placement)
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
  const hasEnglishAlternate = Boolean(post?.slugEN && hasEnglishContent);
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
  const currentOgTitle = undefined;
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
  const vekaletnameProductSlugs = {
    de: ['tuerkische-vekaletname-deutschland', 'vollmacht-auf-tuerkisch', 'tuerkischer-notar-deutschland', 'tuerkische-vollmacht-kosten-2026', 'tuerkische-vollmacht-ohne-konsulat', 'tuerkische-vollmacht-lichtbild-formfehler', 'tapu-vollmacht-immobilie-tuerkei-uebertragung', 'vollmacht-fuer-die-tuerkei-leitfaden'],
    tr: ['almanya-da-vekaletname-cikarma-rehberi', 'turkce-vekaletname-nasil-cikarilir', 'almanyada-turk-noteri', 'almanyada-vekaletname-ucreti-2026', 'almanyadan-turkiyeye-vekaletname-gonderme', 'fotografli-vekaletname-alman-noteri-sartlari', 'tapu-devir-vekaletnamesi-almanya', 'almanyadan-turkiye-vekaletname-rehberi'],
    en: ['power-of-attorney-in-turkish', 'turkish-notary-in-germany', 'tuerkische-vollmacht-kosten-2026-en', 'tuerkische-vollmacht-ohne-konsulat-en', 'turkish-power-of-attorney-photo-requirements', 'turkish-title-deed-transfer-power-of-attorney', 'power-of-attorney-turkey-guide'],
  };
  const tanimaTenfizProductSlugs = {
    de: [TANIMA_TENFIZ_RECOGNITION_2026_BLOG_SLUG_DE],
    tr: ['almanya-bosanma-turkiye-tanima-tenfiz-2026-rehber'],
    en: ['german-divorce-turkey-recognition-guide-2026'],
  };
  const inheritanceTaxProductSlugs = {
    de: [INHERITANCE_TAX_DOUBLE_TAXATION_BLOG_SLUG_DE],
    tr: ['turkiye-almanya-miras-vergisi-cifte-vergilendirme'],
    en: ['turkish-inheritance-tax-double-taxation-germany'],
  };
  const propertyPartitionAuctionProductSlugs = {
    de: [PROPERTY_PARTITION_AUCTION_BLOG_SLUG_DE],
    tr: ['12-yargi-paketi-ortakligin-giderilmesi-mirascilar'],
    en: ['turkey-12th-judicial-package-inherited-property-auction'],
  };
  const pensionRightsProductSlugs = {
    de: ['rentenausgleich-tuerkische-scheidung-versorgungsausgleich'],
    tr: ['bosanmada-emeklilik-haklari-denklesmesi-2026'],
    en: ['turkish-divorce-pension-rights-versorgungsausgleich-guide'],
  };
  const divorcePropertyProductSlugs = {
    de: ['tuerkische-scheidung-vermoegensaufteilung-schadensersatz-2026'],
    tr: ['mal-paylasimi-tazminat-bosanma-davasi-2026'],
    en: ['turkish-divorce-property-division-compensation-2026'],
  };
  const inheritanceParticipationProductSlugs = {
    de: ['zugewinnausgleich-tuerkei-erbfall-katilma-alacagi'],
    tr: ['mirasa-katilma-alacagi-davasi'],
    en: ['turkish-inheritance-participation-claim-lawsuit'],
  };
  const inheritanceCertificateProductSlugs = {
    de: ['erbschein-tuerkei-deutschland-gegenseitige-anerkennung'],
    tr: ['mirascilik-belgesi-almanyada-tanima'],
    en: ['turkish-inheritance-certificate-recognition-germany'],
  };
  const matchesLocalizedSlug = (slugs: { de: string[]; tr: string[]; en: string[] }) => (
    (language === 'de' && slugs.de.includes(post.slugDE)) ||
    (language === 'tr' && slugs.tr.includes(post.slugTR)) ||
    (language === 'en' && slugs.en.includes(post.slugEN ?? ''))
  );
  const productFunnel = matchesLocalizedSlug(vekaletnameProductSlugs)
    ? { ...vekaletnameFunnel, image: vekaletnameImg }
    : matchesLocalizedSlug(tanimaTenfizProductSlugs)
      ? {
          service: 'tanima_tenfiz' as const,
          slugDE: TANIMA_TENFIZ_RECOGNITION_2026_BLOG_SLUG_DE,
          slugTR: 'almanya-bosanma-turkiye-tanima-tenfiz-2026-rehber',
          duration: '20 dakika',
          campaign: 'tanima_tenfiz_whatsapp_form',
          image: post.image,
        }
      : matchesLocalizedSlug(inheritanceTaxProductSlugs)
        ? {
            service: 'inheritance_tax' as const,
            slugDE: INHERITANCE_TAX_DOUBLE_TAXATION_BLOG_SLUG_DE,
            slugTR: 'turkiye-almanya-miras-vergisi-cifte-vergilendirme',
            duration: '20 dakika',
            campaign: 'inheritance_tax_whatsapp_form',
            image: post.image,
          }
          : matchesLocalizedSlug(propertyPartitionAuctionProductSlugs)
            ? {
                service: 'property_partition_auction' as const,
                slugDE: PROPERTY_PARTITION_AUCTION_BLOG_SLUG_DE,
                slugTR: '12-yargi-paketi-ortakligin-giderilmesi-mirascilar',
                duration: '20 dakika',
                campaign: 'property_partition_auction_whatsapp_form',
                image: post.image,
              }
            : matchesLocalizedSlug(pensionRightsProductSlugs)
              ? {
                  service: 'pension_rights' as const,
                  slugDE: 'rentenausgleich-tuerkische-scheidung-versorgungsausgleich',
                  slugTR: 'bosanmada-emeklilik-haklari-denklesmesi-2026',
                  duration: '20 dakika',
                  campaign: 'pension_rights_whatsapp_form',
                  image: post.image,
                }
              : matchesLocalizedSlug(divorcePropertyProductSlugs)
                ? {
                    service: 'divorce_property' as const,
                    slugDE: 'tuerkische-scheidung-vermoegensaufteilung-schadensersatz-2026',
                    slugTR: 'mal-paylasimi-tazminat-bosanma-davasi-2026',
                    duration: '20 dakika',
                    campaign: 'divorce_property_whatsapp_form',
                    image: post.image,
                  }
                : matchesLocalizedSlug(inheritanceParticipationProductSlugs)
                  ? {
                      service: 'inheritance_participation' as const,
                      slugDE: 'zugewinnausgleich-tuerkei-erbfall-katilma-alacagi',
                      slugTR: 'mirasa-katilma-alacagi-davasi',
                      duration: '20 dakika',
                      campaign: 'inheritance_participation_whatsapp_form',
                      image: post.image,
                    }
                  : matchesLocalizedSlug(inheritanceCertificateProductSlugs)
                    ? {
                        service: 'inheritance_certificate' as const,
                        slugDE: 'erbschein-tuerkei-deutschland-gegenseitige-anerkennung',
                        slugTR: 'mirascilik-belgesi-almanyada-tanima',
                        duration: '20 dakika',
                        campaign: 'inheritance_certificate_whatsapp_form',
                        image: post.image,
                      }
                    : null;
  const whatsappCTATopic: BlogWhatsAppCTATopic | null = [CRIMINAL_LAW_BLOG_SLUG_DE, CRIMINAL_DEFENSE_FROM_GERMANY_BLOG_SLUG_DE].includes(post.slugDE)
    ? 'criminal_law'
    : post.slugDE === SUMMONS_WARRANT_BLOG_SLUG_DE
      ? 'summons_warrant'
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
                          : post.slugDE === INHERITANCE_GUIDE_BLOG_SLUG_DE
                              ? 'inheritance_guide'
                            : post.slugDE === UNTERHALT_TURKISH_LAW_BLOG_SLUG_DE
                              ? 'unterhalt_nafaka'
                              : post.slugDE === 'tapu-iptal-tescil-klage-deutschland'
                                ? 'tapu_iptal'
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

  const related = blogPosts
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
      
      {/* Full-Bleed Hero Section */}
      {/* Full-Bleed Hero Section */}
      <div className="relative w-full min-h-[70vh] flex flex-col justify-center pt-32 pb-32">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={post.image}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#F7F5F0] to-transparent pointer-events-none" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 box-border flex flex-col items-center">
          <div className="mb-7 hidden text-center w-full md:block md:mb-10">
            <ol className="inline-flex flex-wrap items-center justify-center gap-2 font-sans text-xs tracking-[0.2em] uppercase">
              <li>
                <Link to={paths.home} className="text-[#e0e0e0] hover:text-white transition-colors">
                  {t("nav_home")}
                </Link>
              </li>
              <li className="text-[#e0e0e0]">/</li>
              <li>
                <Link to={paths.blog} className="text-[#D4AF37] font-bold hover:opacity-70 transition-opacity">
                  Blog
                </Link>
              </li>
              <li className="text-[#e0e0e0]">/</li>
              <li className="text-white font-bold max-w-full break-words sm:truncate sm:max-w-[200px]">{title}</li>
            </ol>
          </div>

          <div className="text-center w-full">
            {/* Category */}
            <div className="flex items-center justify-center gap-3 mb-6 md:mb-8">
              <span className="w-8 h-[1px] bg-[#D4AF37]" />
              <span className="font-sans text-[10px] font-bold tracking-[0.22em] text-[#D4AF37] uppercase md:text-[11px] md:tracking-[0.3em]">
                <span lang={language === 'tr' ? 'tr' : 'de'}>{category}</span>
              </span>
              <span className="w-8 h-[1px] bg-[#D4AF37]" />
            </div>

            {/* Title */}
            <h1 className="font-serif text-[clamp(29px,9vw,42px)] md:text-[clamp(24px,5vw,48px)] text-white leading-[1.12] md:leading-[1.2] font-medium mb-8 md:mb-10 tracking-tight text-center w-full drop-shadow-lg">
              <span className="block max-w-[15ch] sm:max-w-[18ch] md:max-w-none mx-auto" lang={language === 'tr' ? 'tr' : language === 'de' ? 'de' : 'en'}>{title}</span>
            </h1>

            {/* Meta information */}
            <div className="flex flex-wrap items-center justify-center gap-y-3 gap-x-5 text-[#e0e0e0] font-sans text-[12px] tracking-wide md:gap-x-10 md:text-[13px]">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <User size={14} className="text-[#D4AF37]" />
                </div>
                <span>Av. Hasan Doğru</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Calendar size={15} className="text-[#D4AF37]" />
                <span>
                  <span lang={language === 'tr' ? 'tr' : 'de'}>{date}</span>
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock size={15} className="text-[#D4AF37]" />
                <span>
                  <span lang={language === 'tr' ? 'tr' : 'de'}>{readTime}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`relative z-0 ${productFunnel ? 'pb-36 md:pb-20' : 'pb-20'}`}>
        <article className="w-full min-w-0 max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 box-border" style={{ display: 'flex', flexDirection: 'column' }}>
          {/* Product funnel hero hook */}
          {productFunnel && (() => {
            const hook = getProductHookCopy(productFunnel, language);

            return (
              <div className="max-w-[720px] mx-auto w-full mb-12 mt-8 md:mt-12">
                <p className="mb-6 text-[18px] md:text-[20px] leading-[1.7] text-[#1C3829] font-serif">
                  {hook.lead}
                </p>
                <ul className="m-0 space-y-3 p-0 mb-8">
                  {hook.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-[15px] md:text-[16px] leading-[1.6] text-[#444]">
                      <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#D4AF37]" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-4">
                  <span className="w-12 h-[1px] bg-[#D4AF37]/40" />
                  <p className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-[#8B6E2A]">
                    {hook.trust}
                  </p>
                </div>
              </div>
            );
          })()}

          {/* Dual-width content strategy: headers can go wide, text stays readable */}
          <div className="max-w-[720px] mx-auto w-full">
            <div className="prose prose-stone prose-lg max-w-none font-sans text-[#2C3338] leading-relaxed antialiased selection:bg-[#D4AF37]/20 prose-headings:font-serif prose-headings:text-[#0F2417] prose-a:text-[#8B6E2A] prose-a:no-underline hover:prose-a:text-[#D4AF37] transition-colors">
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
                  let insertedTapuIptalTedbirCTA = false;
                  let insertedTapuIptalEvidenceCTA = false;
                  let insertedTapuIptalProcessCTA = false;
                  let insertedSummonsWarrantTravelCTA = false;
                  let insertedSummonsWarrantInterpolCTA = false;
                  let insertedSummonsWarrantUyapCTA = false;

                  while (i < lines.length) {
                    const line = lines[i];
                    const trimmedLine = line.trim();
                    let insertWhatsAppIntroAfterElement = false;

                    if (explicitFaqs?.length && isFaqHeading(trimmedLine)) {
                      break;
                    }

                    // 1. Handle Empty Lines
                    if (!trimmedLine) {
                      // Skip empty lines, let standard element margins handle vertical rhythm
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
                          [
                            'Konsulat oder Notar — Was ist besser?',
                            'Konsolosluk mu, Alman Noteri mi? Hangisi Daha İyi?',
                            'Türkisches Konsulat oder deutscher Notar?',
                            'Konsolosluk mu, Alman noteri mi?',
                            'Turkish consulate or German notary?',
                            'Konsulat oder deutscher Notar – was ist besser?',
                            'Consulate or German notary — which is better?',
                            '1. Zwei Wege – und nicht jeder passt zu jedem Geschäft',
                            '1. İki Yol Var — ve Her İş İçin Aynı Yol Uygun Değil',
                            '1. Two routes — and they are not interchangeable',
                            'Dauer und Kosten - realistische Zahlen',
                            'Süre ve Masraf - Gerçekçi Rakamlar',
                            'Timeline and Cost - Realistic Numbers',
                          ].includes(currentSectionHeading)
                        ) {
                          renderedElements.push(
                            <BlogProductCTAMid
                              key="vekaletname-comparison-cta"
                              funnel={productFunnel}
                              language={language}
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
                        <div key={i} className="w-full flex justify-center py-6">
                          <span className="w-20 h-[1px] bg-[#D4AF37]/50" />
                        </div>
                      );
                    }
                    // Headers
                    else if (trimmedLine.startsWith('###')) {
                      currentSubheading = trimmedLine.replace(/###/g, '').trim();
                      if (
                        productFunnel &&
                        !insertedIntroCTA &&
                        [
                          '2. Der konsularische Weg: wer, mit welchem Ausweis?',
                          '2. Konsolosluk Yolu: Kim, Hangi Belgeyle Vekaletname Çıkarabilir?',
                          '2. The consular route: who, with which identification?',
                        ].includes(currentSubheading)
                      ) {
                        renderedElements.push(
                          <BlogProductCTAIntro key={`intro-cta-${i}`} funnel={productFunnel} language={language} />
                        );
                        insertedIntroCTA = true;
                      }
                      if (
                        productFunnel &&
                        !insertedComparisonCTA &&
                        [
                          '3. Der Weg über den deutschen Notar',
                          '3. Alman Noteri + Apostil Yolu',
                          '3. The notary route',
                        ].includes(currentSubheading)
                      ) {
                        renderedElements.push(
                          <BlogProductCTAMid
                            key={`comparison-cta-${i}`}
                            funnel={productFunnel}
                            language={language}
                            variant="comparison"
                          />
                        );
                        insertedComparisonCTA = true;
                      }
                      if (
                        productFunnel &&
                        !insertedServiceTypesCTA &&
                        [
                          'Wie die Doğru Kanzlei das übernimmt',
                          'Doğru Kanzlei bunu nasıl üstlenir?',
                          'How Doğru Kanzlei handles this',
                          'Wie die Doğru Kanzlei dieses Verfahren führt',
                          'Doğru Kanzlei Bu Süreci Nasıl Yürütüyor?',
                          'Der Punkt, an dem es wirklich schiefgeht: der Vollmachtstext',
                          'Der teuerste Fehler: Deutscher Notar ohne Apostille',
                          'En pahalı hata: Apostilsiz Alman noteri belgesi',
                          'The most expensive mistake: a German notary deed with no apostille',
                          'Gesamtkosten im Vergleich (2026 – ca.)',
                          'Versteckte Kosten: die zurückgewiesene Vollmacht',
                          'Toplam maliyet karşılaştırması (2026 — yaklaşık)',
                          'Gizli maliyet: reddedilen vekaletname',
                          'Worauf je nach Vorgang zu achten ist',
                          'Die 4 häufigsten Fehler (und wie Sie sie vermeiden)',
                          'İşlem türüne göre nelere dikkat edilmeli?',
                          'En sık yapılan 4 hata (ve nasıl kaçınılır)',
                          '4. Welche Befugnisse müssen aufgenommen werden?',
                          '4. Hangi İş İçin Hangi Yetkiler Yazılmalı?',
                          '4. Which authorities must be included?',
                        ].includes(currentSubheading)
                      ) {
                        renderedElements.push(
                          <BlogProductCTAMid
                            key={`service-types-cta-${i}`}
                            funnel={productFunnel}
                            language={language}
                            variant="service_types"
                          />
                        );
                        insertedServiceTypesCTA = true;
                      }
                      element = (
                        <h3 key={i} className="font-serif text-[20px] md:text-[24px] text-[#1C3829] mt-10 md:mt-12 mb-6 font-semibold tracking-tight leading-snug">
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
                        whatsappCTATopic === 'tapu_iptal' &&
                        !insertedTapuIptalTedbirCTA &&
                        [
                          'Sofortmaßnahme: Die İhtiyati Tedbir (Grundbuchsperre nach HMK Art. 389)',
                          'EN ACİL ADIM: İhtiyati Tedbir — Tapuya Şerh Koydurma (HMK m. 389)',
                          'The Most Urgent Step: Getting a Property Freeze (İhtiyati Tedbir — HMK Art. 389)',
                        ].includes(headingText)
                      ) {
                        renderedElements.push(
                          <BlogWhatsAppCTA
                            key="tapu-iptal-tedbir-whatsapp-cta"
                            language={language}
                            placement="deadline"
                            topic={whatsappCTATopic}
                          />
                        );
                        insertedTapuIptalTedbirCTA = true;
                      }
                      if (
                        whatsappCTATopic === 'tapu_iptal' &&
                        !insertedTapuIptalEvidenceCTA &&
                        [
                          'Beweisführung: Wie gewinnen Sie die Klage?',
                          'Davayı Kazanmak İçin Delil Stratejisi',
                          'How to Win: Evidence Strategy',
                        ].includes(headingText)
                      ) {
                        renderedElements.push(
                          <BlogWhatsAppCTA
                            key="tapu-iptal-evidence-whatsapp-cta"
                            language={language}
                            placement="strategy"
                            topic={whatsappCTATopic}
                          />
                        );
                        insertedTapuIptalEvidenceCTA = true;
                      }
                      if (
                        whatsappCTATopic === 'tapu_iptal' &&
                        !insertedTapuIptalProcessCTA &&
                        [
                          'Schritt-für-Schritt aus Deutschland',
                          "Almanya'dan Adım Adım Süreç",
                          'Step-by-Step Process from Germany, the UK or the Netherlands',
                        ].includes(headingText)
                      ) {
                        renderedElements.push(
                          <BlogWhatsAppCTA
                            key="tapu-iptal-process-whatsapp-cta"
                            language={language}
                            placement="mid"
                            topic={whatsappCTATopic}
                          />
                        );
                        insertedTapuIptalProcessCTA = true;
                      }
                      if (
                        whatsappCTATopic === 'summons_warrant' &&
                        !insertedSummonsWarrantTravelCTA &&
                        [
                          'Reisepass und Grenzrisiko: Was passiert, wenn Sie in die Türkei einreisen?',
                          "Pasaport ve Sınır Riski: Türkiye'ye Girişte Ne Olur?",
                          'What Happens If I Travel to Turkey With an Active Warrant?',
                        ].includes(headingText)
                      ) {
                        renderedElements.push(
                          <BlogWhatsAppCTA
                            key="summons-warrant-travel-whatsapp-cta"
                            language={language}
                            placement="deadline"
                            topic={whatsappCTATopic}
                          />
                        );
                        insertedSummonsWarrantTravelCTA = true;
                      }
                      if (
                        whatsappCTATopic === 'summons_warrant' &&
                        !insertedSummonsWarrantInterpolCTA &&
                        [
                          'Interpol Red Notice: Was passiert, wenn der Haftbefehl international wird?',
                          'Interpol Red Notice: Yakalama Kararı Uluslararası Hale Gelirse Ne Olur?',
                          'Can Turkey Have Me Extradited From Germany?',
                        ].includes(headingText)
                      ) {
                        renderedElements.push(
                          <BlogWhatsAppCTA
                            key="summons-warrant-interpol-whatsapp-cta"
                            language={language}
                            placement="strategy"
                            topic={whatsappCTATopic}
                          />
                        );
                        insertedSummonsWarrantInterpolCTA = true;
                      }
                      if (
                        whatsappCTATopic === 'summons_warrant' &&
                        !insertedSummonsWarrantUyapCTA &&
                        [
                          'Fernzugang zu türkischen Gerichten über UYAP',
                          'UYAP Üzerinden Türk Mahkemelerine Uzaktan Erişim',
                          'The Power of Attorney: How to Authorise Your Lawyer From Germany',
                        ].includes(headingText)
                      ) {
                        renderedElements.push(
                          <BlogWhatsAppCTA
                            key="summons-warrant-uyap-whatsapp-cta"
                            language={language}
                            placement="mid"
                            topic={whatsappCTATopic}
                          />
                        );
                        insertedSummonsWarrantUyapCTA = true;
                      }
                      if (
                        whatsappCTATopic &&
                        whatsappCTATopic !== 'hagb' &&
                        whatsappCTATopic !== 'hakaret' &&
                        whatsappCTATopic !== 'summons_warrant' &&
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
                        [
                          'Was ist eine Vekâletname und warum ist sie so wichtig?',
                          'Vekâletname Nedir ve Neden Bu Kadar Önemlidir?',
                          'Reicht eine Übersetzung der deutschen Vollmacht?',
                          'Sadece tercüme yeterli mi?',
                          'Is translation alone enough?',
                          'Fotoğraflı Vekaletname Ne Zaman Gerekir?',
                          'Wann braucht eine türkische Vollmacht ein Lichtbild?',
                          'When does a Turkish power of attorney need a photo?',
                          'Tapu Devir Vekaletnamesi Hangi İşlemler İçin Kullanılır?',
                          'Wofür wird eine Tapu-Vollmacht genutzt?',
                          'What is a Tapu power of attorney used for?',
                          'Tanıma oder Tenfiz - welches Verfahren brauchen Sie?',
                          'Tanıma mı, Tenfiz mi? Hangisine İhtiyacınız Var?',
                          'Tanıma or Tenfiz - Which One Do You Need?',
                          'Rechenbeispiel 1: Gemischter Nachlass mit Immobilie und Bankvermögen',
                          'Örnek 1: Taşınmaz ve Banka Hesabından Oluşan Karma Miras',
                          'Worked Example 1: A Mixed Estate with Real Estate and a Bank Account',
                          'Wie weit reicht die Anrechnung nach § 21 ErbStG wirklich?',
                          '§ 21 ErbStG Mahsubu Pratikte Ne Kadar İşe Yarar?',
                          'How Far Does the § 21 ErbStG Credit Actually Go?',
                          'Was ist der Schätzwert (muhammen bedel) und warum ist er jetzt so wichtig?',
                          'Muhammen Bedel Nedir ve Yeni Düzenlemede Neden Bu Kadar Önemli?',
                          'What Is the “Assessed Value” and Why Does It Matter So Much Now?',
                          'Der zentrale Unterschied in einem Satz',
                          'Tek Cümlede Fark',
                          'The Key Difference in One Sentence',
                          'Ferili Dava Nedir, Neden Ayrı Bir Konu?',
                          'Warum dieses Thema für türkisch-deutsche Paare besonders komplex ist',
                          'Why this is especially complex for Turkish-German couples',
                          'Mirasa Katılma Alacağı Davası Nedir?',
                          'Was ist die Katılma-Alacağı-Klage im türkischen Erbrecht?',
                          'What Is a Participation Claim in a Turkish Inheritance Case?',
                          '1. Die Grundregel, die die meisten Erben überrascht',
                          '1. En Çok Şaşırtan Gerçek: Otomatik Bir Karşılıklı Tanıma Yok',
                          '1. The Rule That Surprises Most Heirs: No Automatic Mutual Recognition',
                          '2. Der konsularische Weg: wer, mit welchem Ausweis?',
                          '2. Konsolosluk Yolu: Kim, Hangi Belgeyle Vekaletname Çıkarabilir?',
                          '2. The consular route: who, with which identification?',
                        ].includes(headingText)
                      ) {
                        renderedElements.push(
                          <BlogProductCTAIntro key="vekaletname-intro-cta" funnel={productFunnel} language={language} />
                        );
                        insertedIntroCTA = true;
                      }
                      if (
                        productFunnel &&
                        !insertedComparisonCTA &&
                        [
                          'Rechenbeispiel 2: Deutscher Staatsbürger erbt ausschließlich türkische Immobilie',
                          "Örnek 2: Türk Kökeni Olmayan Alman Vatandaşının Sadece Türkiye'deki Taşınmazı Miras Alması",
                          'Worked Example 2: A German National with No Turkish Background Inherits Only Turkish Property',
                          'Welche Immobilien profitieren von diesem neuen Schutz?',
                          'Hangi Taşınmazlar Bu Yeni Korumadan Yararlanıyor?',
                          'Which Properties Qualify for This New Protection?',
                          'Türk Hukuku ile Alman Versorgungsausgleich Karşılaştırması',
                          'Türkisches Recht vs. deutscher Versorgungsausgleich im direkten Vergleich',
                          'Turkish Law vs German Versorgungsausgleich: Direct Comparison',
                          'Katılma Alacağı Nasıl Hesaplanır?',
                          'Wie die Ausgleichsforderung (Katılma Alacağı) berechnet wird',
                          'How the Participation Claim Is Calculated',
                          'Örnek Hesaplama: Mal Rejimi Tasfiyesi ve Miras Taksimi Birlikte',
                          'Rechenbeispiel: Güterrechtliche Auseinandersetzung und Erbteilung',
                          'Worked Example: Property-Regime Settlement and Estate Division Together',
                          '3. Vergleichstabelle: Mirasçılık Belgesi vs. Erbschein vs. Europäisches Nachlasszeugnis — wer akzeptiert was?',
                          '3. Karşılaştırma Tablosu: Mirasçılık Belgesi vs. Erbschein vs. Avrupa Miras Sertifikası — Kim Neyi Kabul Eder?',
                          '3. Comparison Table: Turkish Certificate vs German Erbschein vs European Certificate of Succession',
                          'Alman Noterinde Hazırlanan Vekaletnamelerde En Sık Form Hataları',
                          'Typische Formfehler bei deutschen Notarurkunden',
                          'Common formal mistakes in German-notary powers of attorney',
                          'Tapu Vekaletnamesinde Mutlaka Değerlendirilmesi Gereken Yetkiler',
                          'Welche Befugnisse gehören in eine Tapu-Vollmacht?',
                          'Which powers should a title deed POA include?',
                          '3. Der Weg über den deutschen Notar',
                          '3. Alman Noteri + Apostil Yolu',
                          '3. The notary route',
                        ].includes(headingText)
                      ) {
                        renderedElements.push(
                          <BlogProductCTAMid
                            key="product-comparison-cta"
                            funnel={productFunnel}
                            language={language}
                            variant="comparison"
                          />
                        );
                        insertedComparisonCTA = true;
                      }
                      if (
                        productFunnel &&
                        !insertedServiceTypesCTA &&
                        [
                          'Besondere Anforderungen je nach Vollmachtstyp',
                          'Vekâletname Türlerine Göre Özel Dikkat Edilmesi Gerekenler',
                        ].includes(currentSectionHeading) &&
                        [
                          'Bank- und allgemeine Geschäftsvollmacht',
                          'Banka ve Genel İşlem Vekâletnamesi',
                          'Gesamtkosten im Vergleich (2026 – ca.)',
                          'Versteckte Kosten: die zurückgewiesene Vollmacht',
                          'Toplam maliyet karşılaştırması (2026 — yaklaşık)',
                          'Gizli maliyet: reddedilen vekaletname',
                          'Worauf je nach Vorgang zu achten ist',
                          'Die 4 häufigsten Fehler (und wie Sie sie vermeiden)',
                          'İşlem türüne göre nelere dikkat edilmeli?',
                          'En sık yapılan 4 hata (ve nasıl kaçınılır)',
                        ].includes(currentSubheading)
                      ) {
                        renderedElements.push(
                          <BlogProductCTAMid
                            key="vekaletname-service-types-cta"
                            funnel={productFunnel}
                            language={language}
                            variant="service_types"
                          />
                        );
                        insertedServiceTypesCTA = true;
                      }
                      if (
                        productFunnel &&
                        !insertedServiceTypesCTA &&
                        [
                          'Was sollten Sie jetzt tun?',
                          'Şimdi ne yapmalısınız?',
                          'What should you do now?',
                          'Wie die Doğru Kanzlei das übernimmt',
                          'Doğru Kanzlei bunu nasıl üstlenir?',
                          'How Doğru Kanzlei handles this',
                          'Wie die Doğru Kanzlei dieses Verfahren führt',
                          'Doğru Kanzlei Bu Süreci Nasıl Yürütüyor?',
                          'Was muss in der türkischen Vollmacht stehen?',
                          'Türkçe vekaletnamede ne yazmalı?',
                          'What should the Turkish power of attorney say?',
                          '4. Welche Befugnisse müssen aufgenommen werden?',
                          '4. Hangi İş İçin Hangi Yetkiler Yazılmalı?',
                          '4. Which authorities must be included?',
                          'Vekaletname Metninde Hangi Yetkiler Açık Yazılmalı?',
                          'Türkçe tapu vekaletnamesinde ne yazmalı?',
                          'Der Gerichtsweg: Ablauf Schritt für Schritt',
                          'Dava Yolu: Adım Adım Süreç',
                          'The Court Route: Step by Step',
                          '5 Strategien zur Minimierung der Doppelbesteuerung',
                          'Çifte Vergilendirmeyi Azaltmak İçin 5 Strateji',
                          '5 Strategies to Reduce Double Taxation',
                          'Schritt für Schritt: Das Verfahren aus Deutschland steuern',
                          'Almanya’dan Süreci Yönetmek İsteyenler İçin Adım Adım Yol Haritası',
                          'A Step-by-Step Roadmap for Managing This From Abroad',
                          'Hangi Belgeleri Toplamalısınız — ve Neden Erken Başlamalısınız',
                          'Welche Nachweise Sie sammeln sollten — und warum das früh beginnen sollte',
                          'Which Documents You Should Collect — and Why You Should Start Early',
                          'Dava Süreci: Adım Adım',
                          'Der Ablauf: Schritt für Schritt',
                          'The Process: Step by Step',
                          'Almanya\'dan Yürütülen Süreç: Adım Adım',
                          'Grenzüberschreitende Erbscheinsfragen mit der Doğru Kanzlei',
                          'Sınır Ötesi Mirasçılık Belgesi Süreçlerinde Doğru Kanzlei ile',
                          'Cross-Border Certificate Questions with Doğru Kanzlei',
                        ].includes(headingText)
                      ) {
                        renderedElements.push(
                          <BlogProductCTAMid
                            key="vekaletname-service-types-cta"
                            funnel={productFunnel}
                            language={language}
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
                          className="font-serif text-[24px] md:text-[28px] text-[#1C3829] mt-12 md:mt-16 mb-6 md:mb-8 font-medium tracking-tight relative pb-3 md:pb-4 border-b border-[#1C3829]/10 leading-[1.2]"
                        >
                          <span className="absolute bottom-[-1px] left-0 w-16 h-[2px] bg-[#D4AF37]" />
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
                        <li key={i} className="ml-2 pl-4 mb-5 list-none relative text-[17px] md:text-[19px] leading-[1.8] text-[#2C3338]">
                          <span className="absolute left-[-1.5rem] top-[0.65rem] w-1.5 h-1.5 rounded-full bg-[#8B6E2A]/60" />
                          <span className="inline-block transition-transform duration-300 hover:translate-x-1">
                            {processInlineStyles(trimmedLine.replace('- ', '').trim())}
                          </span>
                        </li>
                      );
                    }
                    // Number Lists
                    else if (/^\d+\./.test(trimmedLine)) {
                      element = (
                        <div key={i} className="ml-2 pl-4 mb-6 relative text-[17px] md:text-[19px] leading-[1.8] text-[#2C3338] flex gap-4">
                           <span className="font-serif text-[#8B6E2A] italic text-xl md:text-2xl font-bold min-w-[1.5rem]">{trimmedLine.match(/^\d+/)?.[0]}.</span>
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
                      const isDisclaimer = /(yasal uyar|hinweis|disclaimer|bu makale genel|bu makale yaln|dieser artikel|this article)/i.test(trimmedLine);
                      const isContactInfo = trimmedLine.startsWith('📍') || trimmedLine.startsWith('📞') || trimmedLine.startsWith('✉️') || trimmedLine.startsWith('💬') || trimmedLine === '**Avukat Hasan Doğru | Doğru Kanzlei**' || trimmedLine.startsWith('*Mo–Sa:') || trimmedLine.startsWith('*Mo-Sa:');

                      if (!foundFirstParagraph && !isDisclaimer && !isContactInfo) {
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
                      } else if (isDisclaimer) {
                        element = (
                          <div key={i} className="mb-8 md:mb-12 p-5 md:p-6 bg-[#FAF5E6] rounded-xl border-l-4 border-[#D4AF37] flex items-start gap-4 shadow-sm">
                            <div className="mt-1 flex-shrink-0">
                              <svg className="w-5 h-5 text-[#8B6E2A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <p className="text-[#665d4b] text-[14px] md:text-[15px] leading-[1.6]">
                              {processInlineStyles(trimmedLine.replace(/(\*\*|> |\*|YASAL UYARI:|HINWEIS:|DISCLAIMER:)\s*/gi, ''))}
                            </p>
                          </div>
                        );
                      } else if (isContactInfo) {
                        const isTitle = trimmedLine.includes('Avukat Hasan Doğru');
                        const isHours = trimmedLine.includes('Mo–Sa') || trimmedLine.includes('Mo-Sa');
                        element = (
                          <div key={i} className="flex justify-center my-3">
                            <p className={`inline-flex items-center gap-3 px-4 py-2 rounded-full ${isTitle ? 'font-serif text-[18px] md:text-[20px] font-bold text-[#1C3829] bg-transparent' : isHours ? 'text-[14px] italic text-[#666] bg-transparent' : 'bg-[#FAF5E6] text-[#444] text-[15px] md:text-[16px] border border-[#D4AF37]/20 shadow-sm'} transition-colors hover:bg-[#F3EAD3]`}>
                              {processInlineStyles(trimmedLine.replace(/\*\*/g, '').replace(/\*/g, ''))}
                            </p>
                          </div>
                        );
                      } else {
                        element = (
                          <p key={i} className="mb-6 md:mb-8 last:mb-0 text-[17px] md:text-[19px] leading-[1.8] text-[#2C3338]">
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

            {productFunnel ? (
              <BlogProductCTABottom funnel={productFunnel} language={language} />
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
      {productFunnel && <BlogStickyBookingCTA funnel={productFunnel} language={language} />}
    </div>
  );
}
