import { Hero } from "../components/Hero";
import { About } from "../components/About";
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
      ? 'Rechtsanwalt Hasan Doğru | Doğru Kanzlei Mannheim'
      : 'Avukat Hasan Doğru | Doğru Kanzlei Mannheim',
    description: language === 'de'
      ? 'Rechtsanwaltskanzlei für türkisches und deutsches Recht in Mannheim. Spezialisiert auf Familienrecht, Erbrecht, Mietrecht und grenzüberschreitende Rechtsberatung. Kostenlose Erstberatung.'
      : 'Mannheim\'da Türk ve Alman hukuku alanında uzman avukatlık bürosu. Aile hukuku, miras hukuku, kira hukuku ve uluslararası hukuki danışmanlık. Ücretsiz ilk görüşme.',
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
      <About />
      <PracticeAreas />
      <WhyUs />
      <Testimonials />
      <Blog />
      <Contact />
    </>
  );
}
