import { Hero } from "../components/Hero";
import { PracticeAreas } from "../components/PracticeAreas";
import { WhyUs } from "../components/WhyUs";
import { Testimonials } from "../components/Testimonials";
import { Blog } from "../components/Blog";
import { Contact } from "../components/Contact";
import { useLanguage } from "../context/LanguageContext";
import { useSEO, SITE_URL } from "../hooks/useSEO";

export function Home() {
  const { language } = useLanguage();

  useSEO({
    title: language === 'de'
      ? 'Türk Avukat Mannheim | Avukat Mannheim | Avukat Hasan Doğru'
      : 'Türk Avukat Mannheim | Mannheim Türk Avukatlar | Avukat Hasan Doğru',
    description: language === 'de'
      ? 'Türkischer Anwalt in Mannheim für türkisches Recht. Avukat Hasan Doğru berät türkischstämmige Familien in Mannheim zu Scheidung, Erbrecht und türkischem Familienrecht — ohne Reise in die Türkei.'
      : 'Mannheim\'da Türk avukat arıyorsanız doğru yerdesiniz. Avukat Hasan Doğru, boşanma, miras ve Türk hukuku konularında Almanya\'dan hizmet verir. Türkiye\'ye seyahat gerekmez.',
    lang: language,
    canonical: `${SITE_URL}/${language}`,
    alternateLang: {
      lang: language === 'de' ? 'tr' : 'de',
      href: `${SITE_URL}/${language === 'de' ? 'tr' : 'de'}`,
    },
  });

  return (
    <>
      <Hero />
      <PracticeAreas />
      <WhyUs />
      <Testimonials />
      <Blog />
      <Contact />
    </>
  );
}
