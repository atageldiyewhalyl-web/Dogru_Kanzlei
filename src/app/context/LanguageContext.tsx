import React, { createContext, useContext, useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { translations, TranslationKeys } from '../data/translations';

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

  if (fromLang === 'de' && toLang === 'tr') {
    newPath = newPath.replace('/leistungen', '/hizmetler');
    newPath = newPath.replace('/datenschutz', '/gizlilik-politikasi');
    newPath = newPath.replace('/impressum', '/yasal-bilgiler');
  } else if (fromLang === 'tr' && toLang === 'de') {
    newPath = newPath.replace('/hizmetler', '/leistungen');
    newPath = newPath.replace('/gizlilik-politikasi', '/datenschutz');
    newPath = newPath.replace('/yasal-bilgiler', '/impressum');
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
      service: (id: string) => `${prefix}/${servicesSegment}/${id}`,
      blog: `${prefix}/blog`,
      blogPost: (slug: string) => `${prefix}/blog/${slug}`,
      datenschutz: language === 'de' ? `${prefix}/datenschutz` : `${prefix}/gizlilik-politikasi`,
      impressum: language === 'de' ? `${prefix}/impressum` : `${prefix}/yasal-bilgiler`,
      about: `${prefix}/#hakkimizda`,
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
