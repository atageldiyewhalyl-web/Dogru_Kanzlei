import heroImage from "@/assets/Hasan dogru main hero.webp";
import heroFullScreen from "@/assets/Hero full screen.png";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router";
import { useLanguage } from "../context/LanguageContext";

const WHATSAPP_URL = "https://wa.me/4917661221210";

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
    <section className="relative min-h-screen bg-[#1C3829] overflow-hidden flex flex-col justify-start pt-28 pb-0 xl:justify-center xl:pt-0">
      {/* Background with priority for first paint */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 z-0 overflow-hidden opacity-100 transition-opacity duration-500">
          {/* High-prestige background grid & gradients */}
          <div className="absolute inset-0 pointer-events-none hidden opacity-20 bg-[linear-gradient(to_right,#B8963E_1px,transparent_1px),linear-gradient(to_bottom,#B8963E_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] xl:block" />
          <div className="absolute top-0 left-0 hidden w-full h-full bg-gradient-to-b from-[#1C3829]/70 via-[#1C3829]/40 to-[#1a3326] pointer-events-none z-0 xl:block" />

          {/* Desktop Background Image */}
          <div className="absolute inset-0 z-0 hidden xl:block" aria-hidden="true">
            <img
              src={heroFullScreen}
              alt=""
              width={1920}
              height={1080}
              loading="eager"
              fetchpriority="high"
              decoding="async"
              className="w-full h-full object-cover object-center opacity-75"
            />
          </div>

          {/* Mobile Background Image */}
          <div className="absolute inset-0 z-0 xl:hidden" aria-hidden="true">
            <img
              src={heroImage}
              alt=""
              width={622}
              height={528}
              loading="eager"
              fetchpriority="high"
              decoding="sync"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 xl:px-10 2xl:px-12 w-full grid grid-cols-1 xl:grid-cols-12 gap-16 xl:gap-14 2xl:gap-24 items-center flex-grow py-8 xl:py-20">
        
        {/* Left Content */}
        <div className="mx-auto flex w-full max-w-[720px] flex-col justify-center items-center text-center xl:col-span-6 xl:col-start-7 xl:mx-0 xl:max-w-[620px] xl:items-end xl:text-right 2xl:col-span-5 2xl:col-start-8 2xl:max-w-[680px] z-20 relative">
          <div className="absolute -inset-x-4 -inset-y-6 bg-[#1C3829]/48 backdrop-blur-[2px] shadow-[0_24px_80px_rgba(0,0,0,0.24)] -z-10 sm:-inset-x-8 sm:-inset-y-8 xl:-inset-y-10 xl:bg-[#1C3829]/18 xl:backdrop-blur-[3px] xl:shadow-[0_24px_90px_rgba(0,0,0,0.16)]" aria-hidden="true" />
          {/* Pre-title */}
          <div className="flex w-full items-center justify-center mb-8 xl:justify-end">
            <span className="font-sans text-[11px] font-bold tracking-[0.22em] text-[#D2A848] uppercase drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)]">
              Mannheim · Ankara
            </span>
          </div>

          {/* Main Title - Corporate Identity Focused */}
          <h1 className="w-full font-serif text-[clamp(3rem,13vw,5.2rem)] xl:text-[clamp(4.6rem,5vw,6rem)] font-medium leading-[1] text-white mb-8 tracking-tight text-center xl:text-right drop-shadow-[0_4px_22px_rgba(0,0,0,0.9)]">
            <span className="block text-white/95 mb-3 font-normal text-[clamp(1.5rem,7vw,2.5rem)] xl:text-[clamp(2.35rem,2.7vw,3.1rem)] tracking-normal drop-shadow-[0_3px_16px_rgba(0,0,0,0.85)]">
              {t("hero_title_pre")}
            </span>{" "}
            {t("hero_title_main")}
          </h1>

          <div className="w-24 h-[2px] bg-[#8B6E2A] mb-8 mx-auto xl:mr-0 xl:ml-auto" />

          {/* Subtitle */}
          <p className="w-full max-w-[620px] font-serif text-2xl md:text-[32px] xl:text-[clamp(1.7rem,1.8vw,2rem)] font-normal text-white leading-snug mb-8 mx-auto text-center xl:ml-auto xl:text-right drop-shadow-[0_3px_16px_rgba(0,0,0,0.85)]">
            {t("hero_subtitle")}
          </p>

          <p className="font-sans text-[17px] xl:text-[clamp(0.95rem,1.08vw,1.06rem)] font-semibold text-white leading-relaxed w-full max-w-[620px] mb-12 mx-auto text-center text-pretty xl:ml-auto xl:text-right drop-shadow-[0_3px_14px_rgba(0,0,0,0.9)]">
            {t("hero_description")}
          </p>

          {/* CTA Buttons - Dark Green/Gold Blocks */}
          <div className="flex w-full flex-wrap justify-center gap-5 xl:justify-end">
            <button 
              onClick={() => window.open(WHATSAPP_URL, "_blank")}
              aria-label={t("hero_cta_primary")}
              className="group relative overflow-hidden bg-[#8B6E2A] text-white font-sans text-[11px] font-bold tracking-[0.15em] uppercase px-10 py-5 transition-all hover:bg-[#7A5F20] flex items-center gap-3 shadow-[0_12px_30px_rgba(0,0,0,0.28)]"
            >
              {t("hero_cta_primary")}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </button>
            <button 
              onClick={() => handleScroll(paths.services)}
              aria-label={t("hero_cta_secondary")}
              className="group border border-white/35 text-white hover:border-[#8B6E2A] hover:text-[#D2A848] font-sans text-[11px] font-bold tracking-[0.15em] uppercase px-10 py-5 transition-all bg-black/10 backdrop-blur-sm shadow-[0_12px_30px_rgba(0,0,0,0.2)]"
            >
              {t("hero_cta_secondary")}
            </button>
          </div>
        </div>
      </div>

    </section>
  );
}
