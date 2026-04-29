import { Hero } from "../components/Hero";
import { PracticeAreas } from "../components/PracticeAreas";
import { WhyUs } from "../components/WhyUs";
import { Testimonials } from "../components/Testimonials";
import { Blog } from "../components/Blog";
import { Contact } from "../components/Contact";
import { useLanguage } from "../context/LanguageContext";
import { useSEO, SITE_URL } from "../hooks/useSEO";
import { SchemaOrg } from "../components/SchemaOrg";
import { usePrerender } from "../hooks/usePrerender";

const HOME_SCHEMA = {
  "@context": "https://schema.org",
  "@type": ["LegalService", "LocalBusiness"],
  "name": "Doğru Kanzlei",
  "alternateName": "Avukat Hasan Doğru",
  "url": "https://hasandogru.de",
  "logo": "https://www.hasandogru.de/assets/logo-eRLlm_XN.avif",
  "image": "https://www.hasandogru.de/assets/hero-Bn0oq0cB.avif",
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
  "jobTitle": "Rechtsanwalt / Avukat",
  "worksFor": { "@type": "LegalService", "name": "Doğru Kanzlei" },
  "memberOf": [
    { "@type": "Organization", "name": "Ankara Barosu", "identifier": "47068" },
    { "@type": "Organization", "name": "Rechtsanwaltskammer Karlsruhe" }
  ],
  "knowsLanguage": ["Turkish", "German", "English"],
  "url": "https://hasandogru.de/de/ueber-uns",
  "image": "https://www.hasandogru.de/assets/hero-Bn0oq0cB.avif"
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
      ? 'Türkischer Anwalt in Mannheim für türkisches Recht. Avukat Hasan Doğru berät türkischstämmige Familien in Deutschland und der Schweiz zu Scheidung, Erbrecht und türkischem Familienrecht — ohne Reise in die Türkei.'
      : language === 'tr'
        ? 'Almanya ve İsviçre\'deki Türk avukatı arıyorsanız doğru yerdesiniz. Avukat Hasan Doğru, boşanma, miras ve Türk hukuku konularında Almanya\'dan hizmet verir. Türkiye\'ye seyahat gerekmez.'
        : 'Turkish law specialist in Mannheim advising Turkish-speaking families in Germany, Switzerland and Austria on divorce, inheritance and Turkish family law — without travelling to Turkey.',
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
      <PracticeAreas />
      <WhyUs />
      <Testimonials />
      <Blog />
      <Contact />
    </>
  );
}
