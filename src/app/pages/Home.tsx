import { Hero } from "../components/Hero";
import { PracticeAreas } from "../components/PracticeAreas";
import { WhyUs } from "../components/WhyUs";
import { Testimonials } from "../components/Testimonials";
import { Blog } from "../components/Blog";
import { Contact } from "../components/Contact";
import { useLanguage } from "../context/LanguageContext";
import { useSEO, SITE_URL } from "../hooks/useSEO";
import { SchemaOrg } from "../components/SchemaOrg";

const HOME_SCHEMA = {
  "@context": "https://schema.org",
  "@type": ["LegalService", "LocalBusiness"],
  "name": "Doğru Kanzlei",
  "alternateName": "Avukat Hasan Doğru",
  "url": "https://hasandogru.de",
  "logo": "https://www.hasandogru.de/assets/logo-eRLlm_XN.avif",
  "description": "Türkisches Recht spezialisierte Kanzlei in Mannheim. Beratung in Erbrecht, Familienrecht, Strafrecht und Migrationsrecht zwischen Deutschland und der Türkei.",
  "areaServed": ["DE", "TR"],
  "availableLanguage": ["Turkish", "German", "English"],
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
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
    "opens": "09:00",
    "closes": "18:00"
  },
  "sameAs": []
};

export function Home() {
  const { language } = useLanguage();

  useSEO({
    title: language === 'de'
      ? 'Türk Avukat Mannheim | Avukat Mannheim | Avukat Hasan Doğru'
      : 'Türk Avukat Mannheim | Mannheim Türk Avukatlar | Avukat Hasan Doğru',
    description: language === 'de'
      ? 'Türkischer Anwalt in Mannheim für türkisches Recht. Avukat Hasan Doğru berät türkischstämmige Familien in Mannheim zu Scheidung, Erbrecht und türkischem Familienrecht — ohne Reise in die Türkei.'
      : 'Mannheim\'da Türk avukat arıyorsanız doğru yerdesiniz. Avukat Hasan Doğru, boşanma, miras ve Türk hukuku konularında Almanya\'dan hizmet verir. Türkiye\'ye seyahat gerekmez.',
    lang: language,
    canonical: `${SITE_URL}/${language}`,
    alternateLang: {
      lang: language === 'de' ? 'tr' : 'de',
      href: `${SITE_URL}/${language === 'de' ? 'tr' : 'de'}`,
    },
  });

  return (
    <>
      <SchemaOrg data={HOME_SCHEMA} />
      <Hero />
      <PracticeAreas />
      <WhyUs />
      <Testimonials />
      <Blog />
      <Contact />
    </>
  );
}
