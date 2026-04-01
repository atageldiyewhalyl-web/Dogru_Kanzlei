import { About } from "../components/About";
import { useLanguage } from "../context/LanguageContext";
import { useSEO, SITE_URL } from "../hooks/useSEO";

export function AboutPage() {
  const { language } = useLanguage();
  const aboutPath = language === 'de' ? 'ueber-uns' : 'hakkimizda';

  useSEO({
    title: language === 'de'
      ? 'Über uns | Avukat Hasan Doğru'
      : 'Hakkımızda | Avukat Hasan Doğru',
    description: language === 'de'
      ? 'Erfahren Sie mehr über Avukat Hasan Doğru und seine Kanzlei in Mannheim und Ankara.'
      : 'Avukat Hasan Doğru ve Mannheim ile Ankara\'daki bürosu hakkında daha fazla bilgi edinin.',
    lang: language,
    canonical: `${SITE_URL}/${language}/${aboutPath}`,
    alternateLang: {
      lang: language === 'de' ? 'tr' : 'de',
      href: `${SITE_URL}/${language === 'de' ? 'tr/hakkimizda' : 'de/ueber-uns'}`,
    },
  });

  return (
    <div className="pt-20">
      <About />
    </div>
  );
}
