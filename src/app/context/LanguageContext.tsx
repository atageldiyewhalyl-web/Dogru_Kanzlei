import React, { createContext, useContext, useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { translations, TranslationKeys } from '../data/translations';
import { services } from '../data/services';
import { blogPosts } from '../data/blogPosts';

type Language = 'tr' | 'de' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKeys) => string;
  paths: LocalePaths;
}

interface LocalePaths {
  home: string;
  services: string;
  service: (id: string) => string;
  blog: string;
  blogPost: (slug: string) => string;
  datenschutz: string;
  impressum: string;
  about: string;
  whyUs: string;
  blogSection: string;
  contact: string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translate route segments when switching language
function translatePath(path: string, fromLang: Language, toLang: Language): string {
  let newPath = path.replace(`/${fromLang}`, `/${toLang}`);

  // 1. Static base segments — all 6 direction pairs
  if (fromLang === 'tr' && toLang === 'de') {
    newPath = newPath.replace('/hizmetler', '/leistungen');
    newPath = newPath.replace('/gizlilik-politikasi', '/datenschutz');
    newPath = newPath.replace('/yasal-bilgiler', '/impressum');
    newPath = newPath.replace('/hakkimizda', '/ueber-uns');
  } else if (fromLang === 'de' && toLang === 'tr') {
    newPath = newPath.replace('/leistungen', '/hizmetler');
    newPath = newPath.replace('/datenschutz', '/gizlilik-politikasi');
    newPath = newPath.replace('/impressum', '/yasal-bilgiler');
    newPath = newPath.replace('/ueber-uns', '/hakkimizda');
  } else if (fromLang === 'en' && toLang === 'de') {
    newPath = newPath.replace('/services', '/leistungen');
    newPath = newPath.replace('/privacy', '/datenschutz');
    newPath = newPath.replace('/legal', '/impressum');
    newPath = newPath.replace('/about', '/ueber-uns');
  } else if (fromLang === 'en' && toLang === 'tr') {
    newPath = newPath.replace('/services', '/hizmetler');
    newPath = newPath.replace('/privacy', '/gizlilik-politikasi');
    newPath = newPath.replace('/legal', '/yasal-bilgiler');
    newPath = newPath.replace('/about', '/hakkimizda');
  } else if (fromLang === 'de' && toLang === 'en') {
    newPath = newPath.replace('/leistungen', '/services');
    newPath = newPath.replace('/datenschutz', '/privacy');
    newPath = newPath.replace('/impressum', '/legal');
    newPath = newPath.replace('/ueber-uns', '/about');
  } else if (fromLang === 'tr' && toLang === 'en') {
    newPath = newPath.replace('/hizmetler', '/services');
    newPath = newPath.replace('/gizlilik-politikasi', '/privacy');
    newPath = newPath.replace('/yasal-bilgiler', '/legal');
    newPath = newPath.replace('/hakkimizda', '/about');
  }

  // 2. Dynamic slugs (Services) — only translate for de/tr pairs
  const servicesSegment = toLang === 'de' ? '/leistungen/' : toLang === 'tr' ? '/hizmetler/' : null;
  if (servicesSegment && newPath.includes(servicesSegment)) {
    const slug = newPath.split(servicesSegment)[1]?.split(/[?#]/)[0];
    if (slug) {
      const service = services.find(s =>
        fromLang === 'de' ? s.slugDE === slug : s.slugTR === slug
      );
      if (service) {
        const newSlug = toLang === 'de' ? service.slugDE : service.slugTR;
        newPath = newPath.replace(slug, newSlug);
      }
    }
  }

  // 3. Dynamic slugs (Blog)
  const blogSegment = '/blog/';
  if (newPath.includes(blogSegment)) {
    const slug = newPath.split(blogSegment)[1]?.split(/[?#]/)[0];
    if (slug) {
      const post = blogPosts.find(p =>
        fromLang === 'de' ? p.slugDE === slug : fromLang === 'tr' ? p.slugTR === slug : p.slugEN === slug
      );
      if (post) {
        const hasEnglishBlog = Boolean(post.slugEN && post.contentEN?.trim());
        if (toLang === 'en' && !hasEnglishBlog) {
          return '/en/blog';
        }
        const newSlug = toLang === 'de' ? post.slugDE : toLang === 'tr' ? post.slugTR : post.slugEN;
        newPath = newPath.replace(slug, newSlug);
      }
    }
  }

  return newPath;
}

export const LanguageProvider: React.FC<{ language: Language; children: React.ReactNode }> = ({ language, children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const setLanguage = (newLang: Language) => {
    if (newLang === language) return;
    const newPath = translatePath(location.pathname, language, newLang) + location.search + location.hash;
    navigate(newPath);
  };

  const t = (key: TranslationKeys) => {
    return translations[language][key] || key;
  };

  const paths: LocalePaths = useMemo(() => {
    const prefix = `/${language}`;
    const servicesSegment = language === 'de' ? 'leistungen' : language === 'tr' ? 'hizmetler' : 'services';

    return {
      home: prefix,
      services: `${prefix}/${servicesSegment}`,
      service: (id: string) => {
        const s = services.find(serv => serv.id === id);
        if (language === 'en') {
          // Use DE slug for English routes (same slug, different prefix)
          const slug = s ? s.slugDE : id;
          return `/en/services/${slug}`;
        }
        const slug = s ? (language === 'de' ? s.slugDE : s.slugTR) : id;
        return `${prefix}/${servicesSegment}/${slug}`;
      },
      blog: `${prefix}/blog`,
      blogPost: (origSlug: string) => {
        const p = blogPosts.find(post => post.slug === origSlug);
        if (language === 'en' && p && !(p.slugEN && p.contentEN?.trim())) {
          return `${prefix}/blog`;
        }
        const slug = p ? (language === 'de' ? p.slugDE : language === 'tr' ? p.slugTR : p.slugEN) : origSlug;
        return `${prefix}/blog/${slug}`;
      },
      datenschutz: language === 'de'
        ? `${prefix}/datenschutz`
        : language === 'tr'
          ? `${prefix}/gizlilik-politikasi`
          : `/de/datenschutz`,
      impressum: language === 'de'
        ? `${prefix}/impressum`
        : language === 'tr'
          ? `${prefix}/yasal-bilgiler`
          : `/de/impressum`,
      about: language === 'de'
        ? `${prefix}/ueber-uns`
        : language === 'tr'
          ? `${prefix}/hakkimizda`
          : `${prefix}/about`,
      whyUs: `${prefix}/#neden-biz`,
      blogSection: `${prefix}/#blog`,
      contact: `${prefix}/#iletisim`,
    };
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, paths }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
