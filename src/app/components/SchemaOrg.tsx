import { useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

const SCHEMA_ID = "schema-org-jsonld";

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LegalService",
      "@id": "https://www.hasandogru.de/#organization",
      "name": "Doğru Kanzlei",
      "alternateName": "Avukat Hasan Doğru",
      "url": "https://www.hasandogru.de",
      "logo": "https://www.hasandogru.de/logo.png",
      "description": "Avukat Hasan Doğru für türkisches und internationales Recht in Mannheim und Ankara. Spezialisiert auf Familienrecht, Erbrecht, Strafrecht und grenzüberschreitende Rechtsberatung.",
      "telephone": "+4917661221210",
      "email": ["info@hasandogru.de", "Avukat.hasandogru@outlook.de"],
      "priceRange": "$$",
      "knowsLanguage": ["de", "tr"],
      "areaServed": [
        { "@type": "Country", "name": "Germany" },
        { "@type": "Country", "name": "Turkey" }
      ],
      "address": [
        {
          "@type": "PostalAddress",
          "streetAddress": "R1 2,3",
          "addressLocality": "Mannheim",
          "postalCode": "68161",
          "addressCountry": "DE"
        },
        {
          "@type": "PostalAddress",
          "streetAddress": "Aşağı Öveçler Mahallesi 1322 Cadde 45/9",
          "addressLocality": "Çankaya",
          "addressRegion": "Ankara",
          "addressCountry": "TR"
        }
      ],
      "founder": {
        "@type": "Person",
        "name": "Hasan Doğru",
        "jobTitle": "Avukat",
        "knowsLanguage": ["de", "tr"]
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Rechtsgebiete",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Familienrecht / Aile Hukuku" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Erbrecht / Miras Hukuku" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Strafrecht / Ceza Hukuku" } }
        ]
      },
      "sameAs": []
    },
    {
      "@type": "WebSite",
      "@id": "https://www.hasandogru.de/#website",
      "url": "https://www.hasandogru.de",
      "name": "Doğru Kanzlei",
      "publisher": { "@id": "https://www.hasandogru.de/#organization" },
      "inLanguage": ["de", "tr"]
    }
  ]
};

export function SchemaOrg() {
  const { language } = useLanguage();

  useEffect(() => {
    let el = document.getElementById(SCHEMA_ID) as HTMLScriptElement | null;
    if (!el) {
      el = document.createElement("script");
      el.id = SCHEMA_ID;
      el.type = "application/ld+json";
      document.head.appendChild(el);
    }
    el.textContent = JSON.stringify(schemaData);
  }, [language]);

  return null;
}
