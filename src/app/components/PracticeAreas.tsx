import { services } from "../data/services";
import { Link } from "react-router";
import { ArrowRight, MoveRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useEffect, useRef } from "react";

// Mobile background images
import tanimaImg from "@/assets/services/tanima.avif";
import migrationImg from "@/assets/services/migration.avif";
import inheritanceImg from "@/assets/services/inheritance.avif";
import custodyImg from "@/assets/services/custody.avif";
import criminalImg from "@/assets/services/criminal.avif";

// CSS for the scroll-triggered fade-in (same visual as Framer Motion whileInView)
const fadeInStyle = `
  .fade-in-card {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.5s ease, transform 0.5s ease;
  }
  .fade-in-card.visible {
    opacity: 1;
    transform: translateY(0);
  }
  .fade-in-card:nth-child(2) { transition-delay: 0.1s; }
  .fade-in-card:nth-child(3) { transition-delay: 0.2s; }
  .fade-in-card:nth-child(4) { transition-delay: 0.3s; }
  .fade-in-card:nth-child(5) { transition-delay: 0.4s; }
`;

function useFadeInOnScroll(ref: React.RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const container = ref.current;
    if (!container) return;
    const cards = container.querySelectorAll(".fade-in-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, [ref]);
}

export function PracticeAreas() {
  const { t, language, paths } = useLanguage();
  const gridRef = useRef<HTMLDivElement>(null);
  useFadeInOnScroll(gridRef);

  // Mapping services to specific layout positions for the bento grid
  const migrations = services.find(s => s.id === "migrationsrecht");
  const tanima = services.find(s => s.id === "tanima-ve-tenfiz");
  const straf = services.find(s => s.id === "strafrecht");
  const erb = services.find(s => s.id === "erbrecht");
  const sorge = services.find(s => s.id === "sorgerecht");

  return (
    <section id="hizmetler" className="bg-[#FDFCFB] py-16 md:py-24 px-6">
      <style>{fadeInStyle}</style>
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-[#8B6E2A]" />
              <span className="font-sans text-[9px] font-bold tracking-[0.25em] text-[#7A5F20] uppercase">
                {t("practice_badge")}
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-[#1C3829] leading-tight">
              {t("practice_title")} <br /> <em className="italic font-normal">{t("practice_subtitle")}</em>
            </h2>
          </div>
          <Link
            to={paths.services}
            className="group inline-flex items-center gap-3 font-sans text-[10px] font-bold tracking-[0.2em] text-[#1C3829] uppercase border-b border-black/10 pb-1 hover:border-[#8B6E2A] transition-all"
          >
            {t("practice_view_all")} <MoveRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Bento Grid - 4 Column Logic */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[minmax(260px,auto)]">

          {/* 1. Tanıma ve Tenfiz: Large White (3/4 width) */}
          {tanima && (
            <Link to={paths.service(tanima.id)} className="md:col-span-3 group block">
              <div className="fade-in-card h-full bg-white p-10 md:p-14 border-l-[3px] border-[#8B6E2A] flex flex-col justify-center relative transition-all duration-500 hover:shadow-xl hover:shadow-black/[0.02] overflow-hidden">
                {/* Mobile Background */}
                <div className="md:hidden absolute inset-0 z-0" aria-hidden="true">
                  <img src={tanimaImg} alt={language === 'tr' ? 'Tanıma ve Tenfiz hizmeti görseli' : 'Anerkennung und Vollstreckung Dienstleistungsbild'} width={600} height={400} loading="lazy" decoding="async" className="w-full h-full object-cover opacity-60" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C3829] via-[#1C3829]/70 to-transparent" />
                </div>

                <div className="relative z-10">
                  <div className="mb-8">
                    {(() => {
                      const Icon = tanima.icon;
                      if (!Icon) return null;
                      return <Icon size={32} strokeWidth={1} className="text-[#8B6E2A]" aria-hidden="true" />;
                    })()}
                  </div>
                  <h3 className="font-serif text-3xl md:text-4xl text-white md:text-[#1C3829] mb-6">
                    {language === "tr" ? tanima.titleTR : tanima.title}
                  </h3>
                  <p className="font-sans text-[15px] text-white/90 md:text-[#6a6a6a] leading-relaxed font-light max-w-2xl">
                    {language === "tr" ? tanima.description : tanima.descriptionDE}
                  </p>
                  <div className="absolute bottom-10 right-10 text-white md:text-[#1C3829] opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-x-1">
                    <ArrowRight size={20} aria-hidden="true" />
                  </div>
                </div>
              </div>
            </Link>
          )}

          {/* 2. Migrationsrecht: Small Grey (1/4 width) */}
          {migrations && (
            <Link to={paths.service(migrations.id)} className="md:col-span-1 group block">
              <div className="fade-in-card h-full bg-[#F2F2F0] p-8 flex flex-col justify-center relative transition-all duration-500 hover:bg-[#ebebe9] overflow-hidden">
                {/* Mobile Background */}
                <div className="md:hidden absolute inset-0 z-0" aria-hidden="true">
                  <img src={migrationImg} alt="" width={600} height={400} loading="lazy" decoding="async" className="w-full h-full object-cover opacity-60" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C3829] via-[#1C3829]/70 to-transparent" />
                </div>

                <div className="relative z-10">
                  <h3 className="font-serif text-xl text-white md:text-[#1C3829] mb-4">
                    {language === "tr" ? migrations.titleTR : migrations.title}
                  </h3>
                  <p className="font-sans text-[13px] text-white/90 md:text-[#6a6a6a] leading-relaxed font-light line-clamp-4">
                    {language === "tr" ? migrations.description : migrations.descriptionDE}
                  </p>
                  <div className="mt-6 text-white md:text-[#1C3829] group-hover:text-[#B8963E] transition-all duration-500 group-hover:translate-x-1">
                    <ArrowRight size={18} strokeWidth={1} aria-hidden="true" />
                  </div>
                </div>
              </div>
            </Link>
          )}

          {/* 3. Erbrecht: Small Grey (1/4 width) */}
          {erb && (
            <Link to={paths.service(erb.id)} className="md:col-span-1 group block">
              <div className="fade-in-card h-full bg-[#F2F2F0] p-8 flex flex-col justify-center relative transition-all duration-500 hover:bg-[#ebebe9] overflow-hidden">
                {/* Mobile Background */}
                <div className="md:hidden absolute inset-0 z-0" aria-hidden="true">
                  <img src={inheritanceImg} alt="" width={600} height={400} loading="lazy" decoding="async" className="w-full h-full object-cover opacity-60" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C3829] via-[#1C3829]/70 to-transparent" />
                </div>

                <div className="relative z-10">
                  <h3 className="font-serif text-xl text-white md:text-[#1C3829] mb-4">
                    {language === "tr" ? erb.titleTR : erb.title}
                  </h3>
                  <p className="font-sans text-[13px] text-white/90 md:text-[#6a6a6a] leading-relaxed font-light line-clamp-4">
                    {language === "tr" ? erb.description : erb.descriptionDE}
                  </p>
                  <div className="mt-6 text-white md:text-[#1C3829] group-hover:text-[#B8963E] transition-all duration-500 group-hover:translate-x-1">
                    <ArrowRight size={18} strokeWidth={1} aria-hidden="true" />
                  </div>
                </div>
              </div>
            </Link>
          )}

          {/* 4. Sorgerecht: Small Grey (1/4 width) */}
          {sorge && (
            <Link to={paths.service(sorge.id)} className="md:col-span-1 group block">
              <div className="fade-in-card h-full bg-[#F2F2F0] p-8 flex flex-col justify-center relative transition-all duration-500 hover:bg-[#ebebe9] overflow-hidden">
                {/* Mobile Background */}
                <div className="md:hidden absolute inset-0 z-0" aria-hidden="true">
                  <img src={custodyImg} alt="" width={600} height={400} loading="lazy" decoding="async" className="w-full h-full object-cover opacity-60" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C3829] via-[#1C3829]/70 to-transparent" />
                </div>

                <div className="relative z-10">
                  <h3 className="font-serif text-xl text-white md:text-[#1C3829] mb-4">
                    {language === "tr" ? sorge.titleTR : sorge.title}
                  </h3>
                  <p className="font-sans text-[13px] text-white/90 md:text-[#6a6a6a] leading-relaxed font-light line-clamp-4">
                    {language === "tr" ? sorge.description : sorge.descriptionDE}
                  </p>
                  <div className="mt-6 text-white md:text-[#1C3829] group-hover:text-[#B8963E] transition-all duration-500 group-hover:translate-x-1">
                    <ArrowRight size={18} strokeWidth={1} aria-hidden="true" />
                  </div>
                </div>
              </div>
            </Link>
          )}

          {/* 5. Strafrecht: Large Green (2/4 width) */}
          {straf && (
            <Link to={paths.service(straf.id)} className="md:col-span-2 group block">
              <div className="fade-in-card h-full bg-[#1C3829] p-10 md:p-12 flex flex-col justify-center relative overflow-hidden transition-all duration-500 hover:brightness-110">
                {/* Overlay for icon mix-blend */}
                <div className="absolute right-[-20px] bottom-[-20px] opacity-[0.03] text-white pointer-events-none hidden md:block">
                  {(() => {
                    const Icon = straf.icon;
                    if (!Icon) return null;
                    return <Icon size={200} strokeWidth={0.5} aria-hidden="true" />;
                  })()}
                </div>

                {/* Mobile Background */}
                <div className="md:hidden absolute inset-0 z-0" aria-hidden="true">
                  <img src={criminalImg} alt="" width={600} height={400} loading="lazy" decoding="async" className="w-full h-full object-cover opacity-60" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C3829] via-[#1C3829]/70 to-transparent" />
                </div>

                <div className="relative z-10">
                  <h3 className="font-serif text-2xl md:text-3xl text-white mb-6">
                    {language === "tr" ? straf.titleTR : straf.title}
                  </h3>
                  <p className="font-sans text-[14px] text-white/70 leading-relaxed font-light max-w-md">
                    {language === "tr" ? straf.description : straf.descriptionDE}
                  </p>
                  <div className="mt-8 inline-flex items-center gap-3 text-[#B8963E] font-sans text-[9px] font-bold tracking-widest uppercase hover:text-white transition-all duration-500 group-hover:translate-x-1">
                    {t("practice_view_detail")} <ArrowRight size={14} aria-hidden="true" />
                  </div>
                </div>
              </div>
            </Link>
          )}

        </div>
      </div>
    </section>
  );
}
