import { useEffect } from 'react';

const SITE_URL = 'https://www.hasandogru.de';

interface SEOConfig {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogTitle?: string;
  ogType?: string;
  lang: 'de' | 'tr' | 'en';
  alternateLang?: { lang: string; href: string };
  alternateLangs?: { lang: string; href: string }[];
  xDefault?: string;
  noindex?: boolean;
  keywords?: string;
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
    tags?: string[];
  };
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
    document.querySelectorAll('link[rel="canonical"], link[rel="alternate"][hreflang]').forEach((el) => el.remove());

    // Title
    document.title = config.title;

    // Description
    setMetaTag('description', config.description, true);

    // Keywords
    if (config.keywords) {
      setMetaTag('keywords', config.keywords, true);
    } else {
      document.querySelector('meta[name="keywords"]')?.remove();
    }

    // Canonical
    const canonicalUrl = config.canonical || window.location.origin + window.location.pathname;
    setLinkTag('canonical', canonicalUrl);

    // Open Graph
    setMetaTag('og:title', config.ogTitle || config.title);
    setMetaTag('og:description', config.description);
    setMetaTag('og:url', canonicalUrl);
    setMetaTag('og:type', config.ogType || 'website');
    const ogLocale = config.lang === 'de' ? 'de_DE' : config.lang === 'tr' ? 'tr_TR' : 'en_GB';
    setMetaTag('og:locale', ogLocale);
    document.querySelectorAll('meta[property="og:locale:alternate"]').forEach((el) => el.remove());
    const localeMap = { de: 'de_DE', tr: 'tr_TR', en: 'en_GB' } as const;
    (['de', 'tr', 'en'] as const)
      .filter((lang) => lang !== config.lang)
      .forEach((lang) => {
        const el = document.createElement('meta');
        el.setAttribute('property', 'og:locale:alternate');
        el.content = localeMap[lang];
        document.head.appendChild(el);
      });
    setMetaTag('og:site_name', 'Doğru Kanzlei');
    const defaultOgImage = `${SITE_URL}/logo.png`;
    const rawOgImage = config.ogImage || defaultOgImage;
    const finalOgImage = rawOgImage.startsWith('http') ? rawOgImage : `${SITE_URL}${rawOgImage}`;

    setMetaTag('og:image', finalOgImage);

    if (config.article) {
      if (config.article.publishedTime) {
        setMetaTag('article:published_time', config.article.publishedTime);
      }
      if (config.article.modifiedTime) {
        setMetaTag('article:modified_time', config.article.modifiedTime);
      }
      if (config.article.author) {
        setMetaTag('article:author', config.article.author);
      }
      if (config.article.section) {
        setMetaTag('article:section', config.article.section);
      }
      document.querySelectorAll('meta[property="article:tag"]').forEach((el) => el.remove());
      config.article.tags?.forEach((tag) => {
        const el = document.createElement('meta');
        el.setAttribute('property', 'article:tag');
        el.content = tag;
        document.head.appendChild(el);
      });
    } else {
      document.querySelectorAll('meta[property^="article:"]').forEach((el) => el.remove());
    }

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

    if (config.alternateLangs) {
      config.alternateLangs.forEach((alternate) => {
        setLinkTag('alternate', alternate.href, { hreflang: alternate.lang });
      });
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
  }, [config.title, config.description, config.canonical, config.ogImage, config.ogTitle, config.ogType, config.lang, config.alternateLang, config.alternateLangs, config.xDefault, config.noindex, config.keywords, config.article]);
}

export { SITE_URL };
