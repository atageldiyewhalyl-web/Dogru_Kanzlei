import React, { createContext, useContext, useMemo, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { translations, TranslationKeys } from '../data/translations';
import { services } from '../data/services';
import { blogPosts } from '../data/blogPosts';

type Language = 'tr' | 'de';

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

  // 1. Static base segments
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
  }

  // 2. Dynamic slugs (Services)
  const servicesSegment = toLang === 'de' ? '/leistungen/' : '/hizmetler/';
  if (newPath.includes(servicesSegment)) {
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
        fromLang === 'de' ? p.slugDE === slug : p.slugTR === slug
      );
      if (post) {
        const newSlug = toLang === 'de' ? post.slugDE : post.slugTR;
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
    const servicesSegment = language === 'de' ? 'leistungen' : 'hizmetler';

    return {
      home: prefix,
      services: `${prefix}/${servicesSegment}`,
      service: (id: string) => {
        const s = services.find(serv => serv.id === id);
        const slug = s ? (language === 'de' ? s.slugDE : s.slugTR) : id;
        return `${prefix}/${servicesSegment}/${slug}`;
      },
      blog: `${prefix}/blog`,
      blogPost: (origSlug: string) => {
        const p = blogPosts.find(post => post.slug === origSlug);
        const slug = p ? (language === 'de' ? p.slugDE : p.slugTR) : origSlug;
        return `${prefix}/blog/${slug}`;
      },
      datenschutz: language === 'de' ? `${prefix}/datenschutz` : `${prefix}/gizlilik-politikasi`,
      impressum: language === 'de' ? `${prefix}/impressum` : `${prefix}/yasal-bilgiler`,
      about: language === 'de' ? `${prefix}/ueber-uns` : `${prefix}/hakkimizda`,
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
