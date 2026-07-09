import { lazy, Suspense } from "react";
import { Hero } from "../components/Hero";
import { useLanguage } from "../context/LanguageContext";
import { useSEO, SITE_URL } from "../hooks/useSEO";
import { SchemaOrg } from "../components/SchemaOrg";
import { usePrerender } from "../hooks/usePrerender";

// Lazy load below-fold sections so they don't block the initial paint.
// Hero is the only above-fold component — everything else defers.
const PracticeAreas = lazy(() => import("../components/PracticeAreas").then(m => ({ default: m.PracticeAreas })));
const WhyUs        = lazy(() => import("../components/WhyUs").then(m => ({ default: m.WhyUs })));
const Testimonials = lazy(() => import("../components/Testimonials").then(m => ({ default: m.Testimonials })));
const CooperationPartner = lazy(() => import("../components/CooperationPartner").then(m => ({ default: m.CooperationPartner })));
const Blog         = lazy(() => import("../components/Blog").then(m => ({ default: m.Blog })));
const Contact      = lazy(() => import("../components/Contact").then(m => ({ default: m.Contact })));

// Minimal fallback that matches the background colour so there's no flash
const SectionFallback = () => <div style={{ minHeight: "200px", background: "#1C3829" }} />;

const HOME_SCHEMA = {
  "@context": "https://schema.org",
  "@type": ["LegalService", "LocalBusiness"],
  "name": "Doğru Kanzlei",
  "alternateName": "Avukat Hasan Doğru",
  "url": "https://hasandogru.de",
  "logo": "https://www.hasandogru.de/logo.png",
  "image": "https://www.hasandogru.de/logo.png",
  "description": "Auf türkisches Recht spezialisierte Kanzlei in Mannheim. Beratung in Erbrecht, Familienrecht, Strafrecht und Migrationsrecht zwischen Deutschland, der Schweiz und der Türkei.",
  "areaServed": ["DE", "CH", "AT", "TR"],
  "availableLanguage": ["Turkish", "German"],
  "priceRange": "$$",
  "telephone": "+4917661221210",
  "email": "info@hasandogru.de",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "R1 2,3",
    "addressLocality": "Mannheim",
    "postalCode": "68161",
    "addressCountry": "DE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 49.4875,
    "longitude": 8.4660
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "70",
    "bestRating": "5",
    "worstRating": "1"
  },
  "sameAs": [
    "https://maps.app.goo.gl/GujBeApHPpj1Vzjd9",
    "https://www.anwalt.de/hasan-dogru",
    "https://kilimgazetesi.de/haber/avukat-hasan-dogru-mannheim-da-turk-hukukunda-kopru-gorevi-ustleniyor"
  ]
};

const PERSON_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Hasan Doğru",
  "jobTitle": "Avukat / ausländischer Rechtsanwalt (§ 207 BRAO)",
  "worksFor": { "@type": "LegalService", "name": "Doğru Kanzlei" },
  "memberOf": [
    { "@type": "Organization", "name": "Ankara Barosu", "identifier": "47068" },
    { "@type": "Organization", "name": "Rechtsanwaltskammer Karlsruhe" }
  ],
  "knowsLanguage": ["Turkish", "German", "English"],
  "url": "https://hasandogru.de/de/ueber-uns",
  "image": "https://www.hasandogru.de/logo.png"
};

export function Home() {
  const { language } = useLanguage();
  usePrerender();

  useSEO({
    title: language === 'de'
      ? 'Türkischer Anwalt Mannheim | Avukat Hasan Doğru | Doğru Kanzlei'
      : language === 'tr'
        ? 'Türk Avukat Mannheim | Mannheim Türk Avukatlar | Avukat Hasan Doğru'
        : 'Turkish Lawyer Mannheim | Avukat Hasan Doğru | Doğru Kanzlei',
    description: language === 'de'
      ? 'Türkischer Anwalt Mannheim — 70+ Bewertungen, 5 Sterne. Scheidung, Erbrecht & türkisches Recht aus Deutschland. Ohne Reise in die Türkei. Jetzt beraten lassen.'
      : language === 'tr'
        ? 'Mannheim Türk avukatı — 70+ değerlendirme, 5 yıldız. Boşanma, miras ve Türk hukuku. Almanya\'dan, Türkiye\'ye seyahat etmeden. Hemen WhatsApp\'tan yazın.'
        : 'Turkish lawyer Mannheim — 70+ reviews, 5 stars. Divorce, inheritance & Turkish law from Germany. No travel to Turkey needed. Get advice now.',
    lang: language,
    canonical: `${SITE_URL}/${language}`,
    alternateLangs: [
      { lang: 'de', href: `${SITE_URL}/de` },
      { lang: 'de-DE', href: `${SITE_URL}/de` },
      { lang: 'de-CH', href: `${SITE_URL}/de` },
      { lang: 'de-AT', href: `${SITE_URL}/de` },
      { lang: 'tr', href: `${SITE_URL}/tr` },
      { lang: 'en', href: `${SITE_URL}/en` },
    ],
    xDefault: `${SITE_URL}/de`,
  });

  return (
    <>
      <SchemaOrg data={HOME_SCHEMA} />
      <SchemaOrg data={PERSON_SCHEMA} id="schema-org-person" />
      <Hero />
      <Suspense fallback={<SectionFallback />}>
        <PracticeAreas />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <WhyUs />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <CooperationPartner />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Blog />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Contact />
      </Suspense>
    </>
  );
}
