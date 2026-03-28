import { useEffect } from 'react';

const SITE_URL = 'https://www.hasandogru.de';

interface SEOConfig {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  lang: 'de' | 'tr';
  alternateLang?: { lang: string; href: string };
  noindex?: boolean;
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

    // Language
    document.documentElement.lang = config.lang;

    // Description
    setMetaTag('description', config.description, true);

    // Canonical
    const canonicalUrl = config.canonical || window.location.origin + window.location.pathname;
    setLinkTag('canonical', canonicalUrl);

    // Open Graph
    setMetaTag('og:title', config.title);
    setMetaTag('og:description', config.description);
    setMetaTag('og:url', canonicalUrl);
    setMetaTag('og:type', config.ogType || 'website');
    setMetaTag('og:locale', config.lang === 'de' ? 'de_DE' : 'tr_TR');
    setMetaTag('og:locale:alternate', config.lang === 'de' ? 'tr_TR' : 'de_DE');
    setMetaTag('og:site_name', 'Doğru Kanzlei');
    if (config.ogImage) {
      setMetaTag('og:image', config.ogImage);
    }

    // Twitter Card
    setMetaTag('twitter:card', 'summary_large_image', true);
    setMetaTag('twitter:title', config.title, true);
    setMetaTag('twitter:description', config.description, true);
    if (config.ogImage) {
      setMetaTag('twitter:image', config.ogImage, true);
    }

    // Hreflang alternate
    if (config.alternateLang) {
      setLinkTag('alternate', config.alternateLang.href, { hreflang: config.alternateLang.lang });
    }

    // x-default hreflang (always points to German version)
    const xDefaultUrl = config.lang === 'de'
      ? canonicalUrl
      : canonicalUrl.replace('/tr/', '/de/');
    setLinkTag('alternate', xDefaultUrl, { hreflang: 'x-default' });

    // Robots
    if (config.noindex) {
      setMetaTag('robots', 'noindex, nofollow', true);
    } else {
      setMetaTag('robots', 'index, follow', true);
    }
  }, [config.title, config.description, config.canonical, config.ogImage, config.ogType, config.lang, config.alternateLang, config.noindex]);
}

export { SITE_URL };
