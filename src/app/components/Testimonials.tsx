import { useRef, useState, type TouchEvent } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const testimonialIds = [5, 1, 2, 3, 4, 6];

export function Testimonials() {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const touchEnd = useRef<{ x: number; y: number } | null>(null);

  const currentId = testimonialIds[current];
  const prev = () => setCurrent((c) => (c === 0 ? testimonialIds.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonialIds.length - 1 ? 0 : c + 1));
  const goTo = (index: number) => setCurrent(index);

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
    if (deltaX > 0) next();
    else prev();
  };

  return (
    <section className="bg-white px-5 py-14 text-[#20201D] md:px-8 md:py-24">
      <style>{`
        @media (max-width: 767px) {
          .testimonial-quote {
            display: -webkit-box;
            -webkit-line-clamp: 6;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        }
      `}</style>

      <div className="mx-auto max-w-[1040px]">
        <div className="mx-auto mb-8 max-w-[700px] text-center md:mb-12">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#B8963E]" />
            <span className="font-sans text-[11px] font-bold uppercase tracking-[0.22em] text-[#B8963E]">
              {t("testimonials_badge")}
            </span>
            <span className="h-px w-8 bg-[#B8963E]" />
          </div>

          <h2 className="font-serif text-[36px] font-medium leading-[1.05] text-[#1C3829] md:text-[52px]">
            {t("testimonials_title")}{" "}
            <span className="block font-normal italic md:inline">{t("testimonials_subtitle")}</span>
          </h2>
        </div>

        <div
          className="touch-pan-y select-none"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <article className="mx-auto max-w-[780px] rounded-[18px] border border-[#1C3829]/8 bg-[#FAF9F6] px-6 py-7 text-center shadow-[0_20px_60px_rgba(28,56,41,0.08)] md:rounded-[22px] md:px-12 md:py-11">
            <div className="mb-5 flex justify-center gap-1.5" aria-label="5 Sterne">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} size={16} className="fill-[#B8963E] text-[#B8963E]" aria-hidden="true" />
              ))}
            </div>

            <p className="testimonial-quote mx-auto max-w-[660px] font-serif text-[21px] italic leading-[1.45] text-[#2A2A2A] md:text-[25px] md:leading-[1.55]">
              "{t(`testimonial_${currentId}_text` as any)}"
            </p>

            <div className="mx-auto mt-7 h-px w-16 bg-[#B8963E]/45" />

            <div className="mt-5">
              <div className="font-sans text-[13px] font-bold tracking-[0.08em] text-[#1C3829]">
                {t(`testimonial_${currentId}_name` as any)}
              </div>
              <div className="mt-1 font-sans text-[12px] font-bold uppercase tracking-[0.14em] text-[#8B6E2A]">
                {t(`testimonial_${currentId}_area` as any)}
              </div>
            </div>
          </article>

          <div className="mt-7 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={prev}
                aria-label="Vorheriges Testimonial"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#1C3829]/20 text-[#1C3829] transition-colors hover:border-[#B8963E] hover:text-[#B8963E]"
              >
                <ArrowLeft size={18} aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Nächstes Testimonial"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#1C3829]/20 text-[#1C3829] transition-colors hover:border-[#B8963E] hover:text-[#B8963E]"
              >
                <ArrowRight size={18} aria-hidden="true" />
              </button>
            </div>

            <div className="flex w-full max-w-[360px] items-center gap-2.5">
              {testimonialIds.map((id, index) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => goTo(index)}
                  aria-label={t(`testimonial_${id}_name` as any)}
                  aria-current={current === index ? "true" : undefined}
                  className={`h-px flex-1 transition-colors ${
                    current === index ? "bg-[#B8963E]" : "bg-[#1C3829]/18 hover:bg-[#1C3829]/35"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
