import { About } from "../components/About";
import { useLanguage } from "../context/LanguageContext";
import { useSEO, SITE_URL } from "../hooks/useSEO";
import { SchemaOrg } from "../components/SchemaOrg";
import { usePrerender } from "../hooks/usePrerender";

const PERSON_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Hasan Doğru",
  "jobTitle": "Avukat / ausländischer Rechtsanwalt (§ 207 BRAO)",
  "description": "Dual-licensed Turkish law specialist. Member of the Ankara Bar Association (No. 47068) and registered with the Karlsruhe Bar Association under §207 BRAO. 15+ years experience in Turkish-German cross-border law.",
  "url": "https://www.hasandogru.de/de/ueber-uns",
  "image": "https://www.hasandogru.de/assets/hero-Bn0oq0cB.avif",
  "worksFor": {
    "@type": "LegalService",
    "name": "Doğru Kanzlei",
    "url": "https://www.hasandogru.de"
  },
  "memberOf": [
    {
      "@type": "Organization",
      "name": "Ankara Barosu",
      "identifier": "47068",
      "url": "https://www.ankarabarosu.org.tr"
    },
    {
      "@type": "Organization",
      "name": "Rechtsanwaltskammer Karlsruhe",
      "description": "§207 BRAO — licensed to practise Turkish law in Germany"
    }
  ],
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "name": "Ankara Bar Association Membership",
      "credentialCategory": "licence",
      "recognizedBy": { "@type": "Organization", "name": "Ankara Barosu" },
      "identifier": "47068"
    },
    {
      "@type": "EducationalOccupationalCredential",
      "name": "§207 BRAO Registration — Karlsruhe Bar",
      "credentialCategory": "licence",
      "recognizedBy": { "@type": "Organization", "name": "Rechtsanwaltskammer Karlsruhe" }
    }
  ],
  "knowsLanguage": ["Turkish", "German", "English"],
  "knowsAbout": [
    "Turkish Family Law",
    "Turkish Inheritance Law",
    "Tanıma ve Tenfiz",
    "Turkish Criminal Law",
    "Turkish Migration Law",
    "Turkish Real Estate Law",
    "Cross-border Turkish-German Legal Proceedings"
  ],
  "sameAs": [
    "https://www.anwalt.de/hasan-dogru",
    "https://maps.app.goo.gl/GujBeApHPpj1Vzjd9"
  ]
};

export function AboutPage() {
  const { language } = useLanguage();
  usePrerender();

  const aboutPath = language === 'de'
    ? 'ueber-uns'
    : language === 'tr'
      ? 'hakkimizda'
      : 'about';

  useSEO({
    title: language === 'de'
      ? 'Über uns | Avukat Hasan Doğru'
      : language === 'tr'
        ? 'Hakkımızda | Avukat Hasan Doğru'
        : 'About | Avukat Hasan Doğru — Turkish Law Specialist',
    description: language === 'de'
      ? 'Erfahren Sie mehr über Avukat Hasan Doğru und seine Kanzlei in Mannheim und Ankara.'
      : language === 'tr'
        ? 'Avukat Hasan Doğru ve Mannheim ile Ankara\'daki bürosu hakkında daha fazla bilgi edinin.'
        : 'Learn about Avukat Hasan Doğru, dual-licensed Turkish law specialist with offices in Mannheim and Ankara.',
    lang: language,
    canonical: `${SITE_URL}/${language}/${aboutPath}`,
    alternateLangs: [
      { lang: 'de', href: `${SITE_URL}/de/ueber-uns` },
      { lang: 'de-DE', href: `${SITE_URL}/de/ueber-uns` },
      { lang: 'de-CH', href: `${SITE_URL}/de/ueber-uns` },
      { lang: 'de-AT', href: `${SITE_URL}/de/ueber-uns` },
      { lang: 'tr', href: `${SITE_URL}/tr/hakkimizda` },
      { lang: 'en', href: `${SITE_URL}/en/about` },
    ],
    xDefault: `${SITE_URL}/de/ueber-uns`,
  });

  return (
    <div className="pt-20">
      <SchemaOrg data={PERSON_SCHEMA} id="schema-person-about" />
      <About />
    </div>
  );
}
