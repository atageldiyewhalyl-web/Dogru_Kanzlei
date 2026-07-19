import { useRef, useState, type TouchEvent } from "react";
import { ArrowLeft, ArrowRight, Globe, MessageSquare, Scale, ShieldCheck } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import carouselOne from "@/assets/Carrousel 1.webp";
import carouselTwo from "@/assets/carrousel 2 .webp";
import carouselThree from "@/assets/carruosel 3.webp";
import carouselFour from "@/assets/carrousel 4.webp";

export function WhyUs() {
  const { t, language } = useLanguage();
  const [active, setActive] = useState(0);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const touchEnd = useRef<{ x: number; y: number } | null>(null);

  const points = [
    {
      icon: ShieldCheck,
      title: t("why_us_point_01_title"),
      description: t("why_us_point_01_desc"),
      image: carouselOne,
      imagePosition: "center center",
      imageScale: 1,
    },
    {
      icon: Scale,
      title: t("why_us_point_02_title"),
      description: t("why_us_point_02_desc"),
      image: carouselTwo,
      imagePosition: "30% 52%",
      imageScale: 1,
    },
    {
      icon: Scale,
      title: language === "de"
        ? "Gerichtlich anerkannte Expertise"
        : language === "tr"
          ? "Mahkeme Tarafından Tanınan Uzmanlık"
          : "Court-Recognized Expertise",
      description: language === "de"
        ? "Deutsche Gerichte ziehen mich als Sachverständigen für Fragen des türkischen Rechts heran. Diese Anerkennung durch das Amtsgericht Mannheim ist ein unabhängiger Nachweis meiner Fachkenntnis — kein Selbstlob."
        : language === "tr"
          ? "Alman mahkemeleri, Türk hukuku konularında beni bilirkişi olarak görevlendiriyor. Amtsgericht Mannheim tarafından tanınan bu konum, uzmanlığımın bağımsız bir göstergesidir; kişisel bir övgü değildir."
          : "German courts consult me as an expert witness on questions of Turkish law. Recognition by the Mannheim Local Court is independent evidence of my expertise, not self-praise.",
      image: carouselTwo,
      imagePosition: "50% 46%",
      imageScale: 1.04,
    },
    {
      icon: MessageSquare,
      title: t("why_us_point_03_title"),
      description: t("why_us_point_03_desc"),
      image: carouselThree,
      imagePosition: "center center",
      imageScale: 1.12,
    },
    {
      icon: Globe,
      title: t("why_us_point_04_title"),
      description: t("why_us_point_04_desc"),
      image: carouselFour,
      imagePosition: "center center",
      imageScale: 1,
    },
  ];

  const activePoint = points[active];
  const ActiveIcon = activePoint.icon;
  const flipped = active % 2 === 1;

  const goTo = (index: number) => {
    setActive((index + points.length) % points.length);
  };

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    const touch = event.touches[0];
    touchStart.current = { x: touch.clientX, y: touch.clientY };
    touchEnd.current = null;
  };

  const handleTouchMove = (event: TouchEvent<HTMLDivElement>) => {
    const touch = event.touches[0];
    touchEnd.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchEnd = () => {
    if (!touchStart.current || !touchEnd.current) return;

    const deltaX = touchStart.current.x - touchEnd.current.x;
    const deltaY = touchStart.current.y - touchEnd.current.y;
    const isHorizontalSwipe = Math.abs(deltaX) > 45 && Math.abs(deltaX) > Math.abs(deltaY) * 1.4;

    if (!isHorizontalSwipe) return;
    goTo(active + (deltaX > 0 ? 1 : -1));
  };

  return (
    <section id={language === "de" ? "warum-wir" : "neden-biz"} className="relative overflow-hidden bg-[#FAF9F6] px-5 py-10 text-[#20201D] md:px-6 md:py-20 lg:min-h-screen lg:flex lg:items-center">
      {language === "de" && <span id="neden-biz" className="sr-only" aria-hidden="true" />}
      <style>{`
        @keyframes whyTextInLeft {
          from { opacity: 0; transform: translateX(-28px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes whyTextInRight {
          from { opacity: 0; transform: translateX(28px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes whyImageInLeft {
          from { opacity: 0; transform: translateX(-34px) scale(0.98); }
          to { opacity: 1; transform: translateX(0) scale(1); }
        }
        @keyframes whyImageInRight {
          from { opacity: 0; transform: translateX(34px) scale(0.98); }
          to { opacity: 1; transform: translateX(0) scale(1); }
        }
        @media (max-width: 767px) {
          .whyus-slide-grid {
            grid-template-rows: 176px 172px;
            min-height: 372px;
          }
          .whyus-mobile-description {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        }
      `}</style>
      <div className="mx-auto max-w-[1220px]">
        <div className="mb-7 max-w-[1120px] text-center md:mb-10 lg:text-left">
          <div className="mb-3 flex items-center justify-center gap-3 md:mb-5 md:gap-4 lg:justify-start">
            <span className="h-px w-8 bg-[#A67D28] md:w-10" />
            <span className="font-sans text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#A67D28]">
              {t("why_us_badge")}
            </span>
          </div>

          <h2 className="font-serif text-[34px] font-medium leading-[1.02] text-[#20201D] md:text-[52px] lg:text-[58px] lg:whitespace-nowrap">
            {t("why_us_title")} <span className="font-normal">{t("why_us_subtitle")}</span>
          </h2>

          <p className="mx-auto mt-3 max-w-[620px] font-sans text-[14px] font-semibold leading-6 text-[#4A4842] md:mt-5 md:text-[15px] md:leading-7 lg:mx-0">
            {t("why_us_description")}
          </p>
        </div>

        <div
          className="whyus-slide-grid grid touch-pan-y select-none items-center gap-6 md:gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            key={`text-${active}`}
            className={`relative order-2 py-1 text-center md:py-2 ${
              flipped
                ? "lg:order-2 lg:text-right [animation:whyTextInRight_520ms_cubic-bezier(0.22,1,0.36,1)_both]"
                : "lg:order-1 lg:text-left [animation:whyTextInLeft_520ms_cubic-bezier(0.22,1,0.36,1)_both]"
            }`}
          >
            <div className={`mb-4 hidden items-center justify-center gap-4 md:mb-7 md:flex md:gap-5 ${flipped ? "lg:justify-end" : "lg:justify-start"}`}>
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#A67D28]/35 text-[#A67D28] md:h-14 md:w-14">
                <ActiveIcon size={22} strokeWidth={1.4} aria-hidden="true" />
              </div>
              <div className="font-serif text-base text-[#A67D28] md:text-lg">
                {String(active + 1).padStart(2, "0")} / {String(points.length).padStart(2, "0")}
              </div>
            </div>

            <h3 className={`mx-auto line-clamp-2 max-w-[640px] font-serif text-[30px] font-semibold leading-[1.08] text-[#20201D] md:text-[46px] md:leading-tight ${flipped ? "lg:ml-auto" : "lg:mx-0"}`}>
              {activePoint.title}
            </h3>

            <p className={`whyus-mobile-description mx-auto mt-3 max-w-[660px] font-sans text-[13px] font-semibold leading-6 text-[#55524A] md:mt-6 md:text-[15px] md:leading-7 ${flipped ? "lg:ml-auto" : "lg:mx-0"}`}>
              {activePoint.description}
            </p>

          </div>

          <div
            key={`image-${active}`}
            className={`relative order-1 ${
              flipped
                ? "lg:order-1 [animation:whyImageInLeft_560ms_cubic-bezier(0.22,1,0.36,1)_both]"
                : "lg:order-2 [animation:whyImageInRight_560ms_cubic-bezier(0.22,1,0.36,1)_both]"
            }`}
          >
            <div className="relative mx-auto aspect-[16/9] w-full max-w-[680px] overflow-hidden rounded-[18px] border border-[#A67D28]/15 bg-[#EFE9DE] shadow-[0_18px_45px_rgba(32,32,29,0.12)] md:aspect-[16/10] md:rounded-[22px] md:shadow-[0_28px_70px_rgba(32,32,29,0.14)]">
              <img
                src={activePoint.image}
                alt=""
                width={900}
                height={1100}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
                style={{
                  objectPosition: activePoint.imagePosition,
                  transform: `scale(${activePoint.imageScale})`,
                }}
              />
            </div>
          </div>
        </div>

        <div className="mt-7 flex flex-col items-center justify-center gap-4 sm:flex-row md:mt-10 md:gap-6">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => goTo(active - 1)}
              aria-label="Previous"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#20201D]/20 text-[#20201D] transition-colors hover:border-[#A67D28] hover:text-[#A67D28] md:h-11 md:w-11"
            >
              <ArrowLeft size={18} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => goTo(active + 1)}
              aria-label="Next"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#20201D]/20 text-[#20201D] transition-colors hover:border-[#A67D28] hover:text-[#A67D28] md:h-11 md:w-11"
            >
              <ArrowRight size={18} aria-hidden="true" />
            </button>
          </div>

          <div className="flex w-full max-w-[420px] items-center gap-3">
            {points.map((point, index) => (
              <button
                key={point.title}
                type="button"
                onClick={() => goTo(index)}
                aria-label={point.title}
                aria-current={active === index ? "true" : undefined}
                className={`h-px flex-1 transition-colors ${
                  active === index ? "bg-[#A67D28]" : "bg-[#20201D]/20 hover:bg-[#20201D]/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
