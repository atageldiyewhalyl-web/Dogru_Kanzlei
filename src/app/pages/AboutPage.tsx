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
    alternateLang: {
      lang: language === 'de' ? 'tr' : language === 'tr' ? 'de' : 'de',
      href: language === 'de'
        ? `${SITE_URL}/tr/hakkimizda`
        : language === 'tr'
          ? `${SITE_URL}/de/ueber-uns`
          : `${SITE_URL}/de/ueber-uns`,
    },
    xDefault: `${SITE_URL}/de/ueber-uns`,
  });

  return (
    <div className="pt-20">
      <About />
    </div>
  );
}
