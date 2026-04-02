import { motion } from "motion/react";
import heroImage from "@/assets/Hero 1.png";
import { ArrowRight, Scale, Globe, FileText } from "lucide-react";
import { useNavigate } from "react-router";
import { useLanguage } from "../context/LanguageContext";

const CALENDLY_URL = "https://calendly.com/hasand9366/30min";

export function Hero() {
  const navigate = useNavigate();
  const { t, paths } = useLanguage();

  const handleScroll = (href: string) => {
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(href);
    }
  };

  return (
    <section className="relative min-h-screen bg-[#1C3829] overflow-hidden flex flex-col justify-center pt-40 pb-0 lg:pt-0">
      {/* High-prestige background grid & gradients */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(to_right,#B8963E_1px,transparent_1px),linear-gradient(to_bottom,#B8963E_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#1C3829]/70 via-[#1C3829]/40 to-[#1a3326] pointer-events-none z-0" />

      {/* Mobile Background Image */}
      <div className="absolute inset-0 z-0 lg:hidden">
        <img
          src={heroImage}
          alt="Avukat Hasan Doğru Background"
          className="w-full h-full object-cover object-top opacity-30 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C3829] via-[#1C3829]/80 to-transparent" />
      </div>

      {/* Decorative vertical architectural line */}
      <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/5 pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center flex-grow py-12 lg:py-20">
        
        {/* Left Content */}
        <motion.div 
          className="lg:col-span-5 flex flex-col justify-center z-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Pre-title */}
          <div className="flex items-center gap-4 mb-8">
            <span className="w-12 h-[1px] bg-[#B8963E]" />
            <span className="font-sans text-[11px] font-bold tracking-[0.2em] text-[#B8963E] uppercase">
              Mannheim · Ankara
            </span>
          </div>

          {/* Main Title - Corporate Identity Focused */}
          <h1 className="font-serif text-5xl md:text-[4.8rem] lg:text-[5.2rem] font-medium leading-[1] text-white mb-8 tracking-tight">
            <span className="block text-white/80 mb-3 font-normal text-2xl md:text-4xl lg:text-[2.8rem] tracking-normal">
              {t("hero_title_pre")}
            </span>
            {t("hero_title_main")}
          </h1>

          <div className="w-24 h-[2px] bg-[#B8963E] mb-8" />

          {/* Subtitle */}
          <p className="font-serif text-2xl md:text-[28px] font-light italic text-white/90 leading-snug mb-8 max-w-lg">
            {t("hero_subtitle")}
          </p>

          <p className="font-sans text-[15px] font-light text-white/60 leading-relaxed max-w-md mb-12">
            {t("hero_description")}
          </p>

          {/* CTA Buttons - Dark Green/Gold Blocks */}
          <div className="flex flex-wrap gap-5">
            <button 
              onClick={() => window.open(CALENDLY_URL, "_blank")}
              className="group relative overflow-hidden bg-[#B8963E] text-white font-sans text-[11px] font-bold tracking-[0.15em] uppercase px-10 py-5 transition-all hover:bg-[#a68635] flex items-center gap-3"
            >
              {t("hero_cta_primary")}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button 
              onClick={() => handleScroll(paths.services)}
              className="group border border-white/20 text-white hover:border-[#B8963E] hover:text-[#B8963E] font-sans text-[11px] font-bold tracking-[0.15em] uppercase px-10 py-5 transition-all bg-white/5 backdrop-blur-sm"
            >
              {t("hero_cta_secondary")}
            </button>
          </div>
        </motion.div>

        {/* Right Content - Hero Image */}
        <motion.div 
          className="lg:col-span-7 relative hidden md:flex justify-center lg:justify-end items-center"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <div className="relative w-full max-w-[480px] lg:max-w-[500px] xl:max-w-[540px] aspect-[4/5] z-10 mt-12 lg:mt-32">
            {/* Gold Frame Accent */}
            <div className="absolute -top-5 -right-5 w-full h-full border border-[#B8963E]/40 z-0 transition-transform duration-700 hover:translate-x-2 hover:-translate-y-2" />
            
            {/* Image Container */}
            <div className="relative w-full h-full bg-[#152a1e] border border-white/10 overflow-hidden z-10 shadow-2xl">
              <img 
                src={heroImage} 
                alt="Avukat Hasan Doğru" 
                className="w-full h-full object-cover object-top opacity-90 transition-transform duration-1000 hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-[#1C3829] via-[#1C3829]/60 to-transparent opacity-90" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8 border-t border-[#B8963E]/20 bg-[#1C3829]/40 backdrop-blur-md">
                <div className="font-serif text-2xl font-medium text-white mb-2 tracking-wide">{t("hero_title_pre")} Hasan Doğru</div>
                <div className="font-sans text-[11px] tracking-[0.2em] uppercase text-[#B8963E]">{t("lawyer_role")}</div>
              </div>
            </div>


          </div>
        </motion.div>
      </div>

    </section>
  );
}
