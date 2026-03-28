import { services } from "../data/services";
import { Link } from "react-router";
import { ArrowRight, MoveRight } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

export function PracticeAreas() {
  const { t, language, paths } = useLanguage();
  // Mapping services to specific layout positions for the bento grid
  const miet = services.find(s => s.id === "mietrecht");
  const familien = services.find(s => s.id === "familienrecht");
  const straf = services.find(s => s.id === "strafrecht");
  const tuerk = services.find(s => s.id === "tuerkisches-recht");
  const erb = services.find(s => s.id === "erbrecht");

  return (
    <section id="hizmetler" className="bg-[#FDFCFB] py-16 md:py-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-[#B8963E]" />
              <span className="font-sans text-[9px] font-bold tracking-[0.25em] text-[#B8963E] uppercase">
                {t("practice_badge")}
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-[#1C3829] leading-tight">
              {t("practice_title")} <br /> <em className="italic font-normal">{t("practice_subtitle")}</em>
            </h2>
          </div>
          <Link
            to={paths.services}
            className="group inline-flex items-center gap-3 font-sans text-[10px] font-bold tracking-[0.2em] text-[#1C3829] uppercase border-b border-black/10 pb-1 hover:border-[#B8963E] transition-all"
          >
            {t("practice_view_all")} <MoveRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Bento Grid - 4 Column Logic */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[minmax(260px,auto)]">

          {/* 1. Familienrecht: Large White (3/4 width) */}
          {familien && (
            <Link to={paths.service(familien.id)} className="md:col-span-3 group block">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="h-full bg-white p-10 md:p-14 border-l-[3px] border-[#B8963E] flex flex-col justify-center relative transition-all duration-500 hover:shadow-xl hover:shadow-black/[0.02]"
              >
                <div className="mb-8">
                  {(() => {
                    const Icon = familien.icon;
                    return <Icon size={32} strokeWidth={1} className="text-[#B8963E]" />;
                  })()}
                </div>
                <h3 className="font-serif text-3xl md:text-4xl text-[#1C3829] mb-6">
                  {language === "tr" ? familien.titleTR : familien.title}
                </h3>
                <p className="font-sans text-[15px] text-[#6a6a6a] leading-relaxed font-light max-w-2xl">
                  {language === "tr" ? familien.description : familien.descriptionDE}
                </p>
                <div className="absolute bottom-10 right-10 text-[#1C3829] opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-x-1">
                  <ArrowRight size={20} />
                </div>
              </motion.div>
            </Link>
          )}

          {/* 2. Mietrecht: Small Grey (1/4 width) */}
          {miet && (
            <Link to={paths.service(miet.id)} className="md:col-span-1 group block">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="h-full bg-[#F2F2F0] p-8 flex flex-col justify-center relative transition-all duration-500 hover:bg-[#ebebe9]"
              >
                <h3 className="font-serif text-xl text-[#1C3829] mb-4">
                  {language === "tr" ? miet.titleTR : miet.title}
                </h3>
                <p className="font-sans text-[13px] text-[#6a6a6a] leading-relaxed font-light line-clamp-4">
                  {language === "tr" ? miet.description : miet.descriptionDE}
                </p>
                <div className="mt-6 text-[#1C3829] group-hover:text-[#B8963E] transition-all duration-500 group-hover:translate-x-1">
                  <ArrowRight size={18} strokeWidth={1} />
                </div>
              </motion.div>
            </Link>
          )}

          {/* 3. Türkisches Recht: Small Grey (1/4 width) */}
          {tuerk && (
            <Link to={paths.service(tuerk.id)} className="md:col-span-1 group block">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="h-full bg-[#F2F2F0] p-8 flex flex-col justify-center relative transition-all duration-500 hover:bg-[#ebebe9]"
              >
                <h3 className="font-serif text-xl text-[#1C3829] mb-4">
                  {language === "tr" ? tuerk.titleTR : tuerk.title}
                </h3>
                <p className="font-sans text-[13px] text-[#6a6a6a] leading-relaxed font-light line-clamp-4">
                  {language === "tr" ? tuerk.description : tuerk.descriptionDE}
                </p>
                <div className="mt-6 text-[#1C3829] group-hover:text-[#B8963E] transition-all duration-500 group-hover:translate-x-1">
                  <ArrowRight size={18} strokeWidth={1} />
                </div>
              </motion.div>
            </Link>
          )}

          {/* 4. Erbrecht: Small Grey (1/4 width) */}
          {erb && (
            <Link to={paths.service(erb.id)} className="md:col-span-1 group block">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="h-full bg-[#F2F2F0] p-8 flex flex-col justify-center relative transition-all duration-500 hover:bg-[#ebebe9]"
              >
                <h3 className="font-serif text-xl text-[#1C3829] mb-4">
                  {language === "tr" ? erb.titleTR : erb.title}
                </h3>
                <p className="font-sans text-[13px] text-[#6a6a6a] leading-relaxed font-light line-clamp-4">
                  {language === "tr" ? erb.description : erb.descriptionDE}
                </p>
                <div className="mt-6 text-[#1C3829] group-hover:text-[#B8963E] transition-all duration-500 group-hover:translate-x-1">
                  <ArrowRight size={18} strokeWidth={1} />
                </div>
              </motion.div>
            </Link>
          )}

          {/* 5. Strafrecht: Large Green (2/4 width) */}
          {straf && (
            <Link to={paths.service(straf.id)} className="md:col-span-2 group block">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="h-full bg-[#1C3829] p-10 md:p-12 flex flex-col justify-center relative overflow-hidden transition-all duration-500 hover:brightness-110"
              >
                <div className="absolute right-[-20px] bottom-[-20px] opacity-[0.03] text-white pointer-events-none">
                  {(() => {
                    const Icon = straf.icon;
                    return <Icon size={200} strokeWidth={0.5} />;
                  })()}
                </div>

                <div className="relative z-10">
                  <h3 className="font-serif text-2xl md:text-3xl text-white mb-6">
                    {language === "tr" ? straf.titleTR : straf.title}
                  </h3>
                  <p className="font-sans text-[14px] text-white/70 leading-relaxed font-light max-w-md">
                    {language === "tr" ? straf.description : straf.descriptionDE}
                  </p>
                  <div className="mt-8 inline-flex items-center gap-3 text-[#B8963E] font-sans text-[9px] font-bold tracking-widest uppercase hover:text-white transition-all duration-500 group-hover:translate-x-1">
                    {t("practice_view_detail")} <ArrowRight size={14} />
                  </div>
                </div>
              </motion.div>
            </Link>
          )}

        </div>
      </div>
    </section>
  );
}
