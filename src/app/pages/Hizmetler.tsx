import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import { services } from "../data/services";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useSEO, SITE_URL } from "../hooks/useSEO";
import hizmetlerBg from "../../assets/hizmetler-bg.jpg";

export function Hizmetler() {
  const [hovered, setHovered] = useState<string | null>(null);
  const { language, t, paths } = useLanguage();

  const servicesPath = language === 'de' ? 'leistungen' : 'hizmetler';

  useSEO({
    title: language === 'de'
      ? 'Unsere Leistungen | Avukat Hasan Doğru'
      : 'Hizmetlerimiz | Avukat Hasan Doğru',
    description: language === 'de'
      ? 'Rechtsberatung in Familienrecht, Erbrecht, Mietrecht, Strafrecht und türkischem Recht. Kanzlei Doğru in Mannheim und Ankara.'
      : 'Aile hukuku, miras hukuku, kira hukuku, ceza hukuku ve Türk hukuku alanlarında hukuki danışmanlık. Mannheim ve Ankara\'da Doğru Kanzlei.',
    lang: language,
    canonical: `${SITE_URL}/${language}/${servicesPath}`,
    alternateLang: {
      lang: language === 'de' ? 'tr' : 'de',
      href: `${SITE_URL}/${language === 'de' ? 'tr/hizmetler' : 'de/leistungen'}`,
    },
  });

  return (
    <div className="bg-[#FDFCFB] pt-40 pb-20">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="w-10 h-[1px] bg-[#B8963E]" />
              <span className="font-sans text-[10px] font-bold tracking-[0.2em] text-[#B8963E] uppercase">
                {t("practice_badge")}
              </span>
            </div>
            <h1 className="font-serif text-[clamp(40px,5vw,64px)] text-[#1C3829] leading-[1.1] font-medium italic">
              {t("practice_title")} <br />
              <span className="not-italic">{t("practice_subtitle")}</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-[15px] text-[#6a6a6a] leading-relaxed font-light max-w-sm mb-2"
          >
            {language === 'de'
              ? 'Umfassende rechtliche Beratung für Ihre Angelegenheiten in der Türkei — direkt aus Deutschland. Jeden Fall bewerten wir individuell und bieten die effektivste Lösung.'
              : 'Türkiye\'deki hukuki sorunlarınız için Almanya\'dan kapsamlı danışmanlık sunuyoruz. Her davayı bireysel olarak değerlendiriyor, en etkin çözümü sağlıyoruz.'}
          </motion.p>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Link
                to={paths.service(service.id)}
                onMouseEnter={() => setHovered(service.id)}
                onMouseLeave={() => setHovered(null)}
                className="group flex flex-col items-start h-full"
              >
                {/* Icon */}
                <div className="mb-10 transition-transform duration-500 group-hover:-translate-y-1">
                  <service.icon
                    size={28}
                    strokeWidth={1}
                    className="text-[#1C3829] group-hover:text-[#8B6E2A] transition-colors duration-500"
                  />
                </div>

                {/* Category */}
                <div className="font-sans text-[10px] font-bold tracking-[0.2em] text-[#7A5F20] uppercase mb-4">
                  <span lang={language === 'tr' ? 'tr' : 'de'}>
                    {language === 'de' ? service.title : service.titleTR}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-[32px] md:text-[36px] text-[#1C3829] leading-tight mb-8">
                  <span lang={language === 'tr' ? 'tr' : 'de'}>
                    {language === 'de' ? service.title : service.titleTR}
                  </span>
                </h3>

                {/* Divider Line */}
                <div className="w-full h-[1px] bg-black/5 mb-8 group-hover:bg-[#8B6E2A]/30 transition-colors duration-500" />

                {/* Description */}
                <p className="font-sans text-[14px] text-[#6a6a6a] leading-relaxed font-light mb-10 line-clamp-3">
                  <span lang={language === 'tr' ? 'tr' : 'de'}>
                    {language === 'de' ? service.descriptionDE : service.description}
                  </span>
                </p>

                {/* Details / Scope */}
                <div className="font-sans text-[9px] font-medium tracking-[0.1em] text-[#aaa8a0] uppercase mb-10">
                  <span lang={language === 'tr' ? 'tr' : 'de'}>
                    {language === 'de' ? service.detailDE : service.detail}
                  </span>
                </div>

                {/* Link Action */}
                <div className="flex items-center gap-2 font-sans text-[10px] font-bold tracking-[0.2em] text-[#1C3829] uppercase group-hover:text-[#7A5F20] transition-all duration-500 mt-auto">
                  {t("practice_view_detail")}
                  <ArrowRight size={14} className="transition-transform duration-500 group-hover:translate-x-2" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 mt-40">
        <div className="bg-[#1C3829] p-12 lg:p-24 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12 group">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-10 group-hover:scale-105 transition-transform duration-1000" 
            style={{ backgroundImage: `url(${hizmetlerBg})` }}
          />
          <div className="relative z-10 max-w-2xl text-left">
            <h2 className="font-serif text-3xl md:text-5xl text-white mb-8 leading-tight">
              {language === 'de' ? (
                <>Grenzüberschreitende <br /> <em className="italic text-[#8B6E2A] font-normal">Rechtslösungen</em></>
              ) : (
                <><span lang="tr">Uluslararası Hukukta</span> <br /> <em className="italic text-[#8B6E2A] font-normal"><span lang="tr">Sınır Tanımayan Çözümler</span></em></>
              )}
            </h2>
            <p className="font-sans text-white/50 text-lg mb-0 leading-relaxed font-light">
              {language === 'de'
                ? 'Mit unseren Büros in Mannheim und Ankara bieten wir fachkundige Beratung in beiden Rechtssystemen.'
                : <span lang="tr">'Mannheim ve Ankara ofislerimizle her iki ülkenin hukuk sisteminde uzman danışmanlık sağlıyoruz.'</span>}
            </p>
          </div>
          <div className="relative z-10 flex-shrink-0">
            <Link
              to={paths.contact}
              className="inline-flex items-center gap-4 bg-[#8B6E2A] text-white font-sans text-[11px] font-bold tracking-[0.2em] uppercase px-12 py-6 hover:bg-[#7A5F20] transition-all"
            >
              {language === 'de' ? 'JETZT BERATEN LASSEN' : <span lang="tr">ŞİMDİ DANIŞIN</span>} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
