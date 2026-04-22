import { useEffect } from 'react';

const SITE_URL = 'https://www.hasandogru.de';

interface SEOConfig {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  lang: 'de' | 'tr' | 'en';
  alternateLang?: { lang: string; href: string };
  xDefault?: string;
  noindex?: boolean;
  keywords?: string;
}

function setMetaTag(property: string, content: string, isName = false) {
  const attr = isName ? 'name' : 'property';
  let el = document.querySelector(`meta[${attr}="${property}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, property);
    document.head.appendChild(el);
  }
  el.content = content;
}

function setLinkTag(rel: string, href: string, attrs: Record<string, string> = {}) {
  const selector = Object.entries(attrs)
    .map(([k, v]) => `[${k}="${v}"]`)
    .join('');
  let el = document.querySelector(`link[rel="${rel}"]${selector}`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement('link');
    el.rel = rel;
    Object.entries(attrs).forEach(([k, v]) => el!.setAttribute(k, v));
    document.head.appendChild(el);
  }
  el.href = href;
}

export function useSEO(config: SEOConfig) {
  useEffect(() => {
    // Title
    document.title = config.title;

    // Description
    setMetaTag('description', config.description, true);

    // Keywords
    if (config.keywords) {
      setMetaTag('keywords', config.keywords, true);
    }

    // Canonical
    const canonicalUrl = config.canonical || window.location.origin + window.location.pathname;
    setLinkTag('canonical', canonicalUrl);

    // Open Graph
    setMetaTag('og:title', config.title);
    setMetaTag('og:description', config.description);
    setMetaTag('og:url', canonicalUrl);
    setMetaTag('og:type', config.ogType || 'website');
    const ogLocale = config.lang === 'de' ? 'de_DE' : config.lang === 'tr' ? 'tr_TR' : 'en_US';
    setMetaTag('og:locale', ogLocale);
    // Set alternates for the other two locales
    if (config.lang === 'en') {
      setMetaTag('og:locale:alternate', 'de_DE');
    } else {
      setMetaTag('og:locale:alternate', config.lang === 'de' ? 'tr_TR' : 'de_DE');
    }
    setMetaTag('og:site_name', 'Doğru Kanzlei');
    const defaultOgImage = `${SITE_URL}/logo.png`;
    const finalOgImage = config.ogImage || defaultOgImage;

    setMetaTag('og:image', finalOgImage);

    // Twitter Card
    setMetaTag('twitter:card', 'summary_large_image', true);
    setMetaTag('twitter:title', config.title, true);
    setMetaTag('twitter:description', config.description, true);
    setMetaTag('twitter:image', finalOgImage, true);

    // Lang alternates — country-specific codes for broader geo-targeting
    if (config.alternateLang) {
      setLinkTag('alternate', config.alternateLang.href, { hreflang: config.alternateLang.lang });
      setLinkTag('alternate', canonicalUrl, { hreflang: config.lang });
    }

    // German-speaking regions: DE, CH, AT all served by the /de version
    if (config.lang === 'de') {
      setLinkTag('alternate', canonicalUrl, { hreflang: 'de-DE' });
      setLinkTag('alternate', canonicalUrl, { hreflang: 'de-CH' });
      setLinkTag('alternate', canonicalUrl, { hreflang: 'de-AT' });
    }

    // English hreflang (no region-specific variants)
    if (config.lang === 'en') {
      setLinkTag('alternate', canonicalUrl, { hreflang: 'en' });
    }

    // x-default hreflang (always points to German /de version)
    const xDefaultUrl = config.xDefault || (config.lang === 'de' ? canonicalUrl : config.alternateLang?.href);
    if (xDefaultUrl) {
      setLinkTag('alternate', xDefaultUrl, { hreflang: 'x-default' });
    }

    // Robots
    if (config.noindex) {
      setMetaTag('robots', 'noindex, nofollow', true);
    } else {
      setMetaTag('robots', 'index, follow', true);
    }
  }, [config.title, config.description, config.canonical, config.ogImage, config.ogType, config.lang, config.alternateLang, config.noindex]);
}

export { SITE_URL };
