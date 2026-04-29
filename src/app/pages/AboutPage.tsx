import { About } from "../components/About";
import { useLanguage } from "../context/LanguageContext";
import { useSEO, SITE_URL } from "../hooks/useSEO";
import { usePrerender } from "../hooks/usePrerender";

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
      <About />
    </div>
  );
}
