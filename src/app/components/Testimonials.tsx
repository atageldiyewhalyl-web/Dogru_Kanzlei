import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const testimonialIds = [5, 1, 2, 3, 4, 6];

export function Testimonials() {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonialIds.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonialIds.length - 1 ? 0 : c + 1));

  const currentId = testimonialIds[current];

  return (
    <section
      className="testimonials-section"
      style={{
        background: "#F7F5F0",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Section header */}
        <div style={{ marginBottom: 64 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
            <div style={{ width: 32, height: 1, background: "#B8963E" }} />
            <span
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "0.22em",
                color: "#B8963E",
                textTransform: "uppercase",
              }}
            >
              {t("testimonials_badge")}
            </span>
          </div>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(32px, 3.5vw, 44px)",
              fontWeight: 500,
              color: "#1C3829",
              lineHeight: 1.15,
              margin: 0,
            }}
          >
            {t("testimonials_title")}
            <br />
            <em style={{ fontStyle: "italic", fontWeight: 400 }}>{t("testimonials_subtitle")}</em>
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: 64,
            alignItems: "center",
          }}
          className="testimonial-grid"
        >
          {/* Left: Navigation */}
          <div className="testimonial-nav">
            <div className="testimonial-nav-list" style={{ marginBottom: 40 }}>
              {testimonialIds.map((id, i) => (
                <button
                  key={id}
                  onClick={() => setCurrent(i)}
                  className={`testimonial-nav-button ${i === current ? 'active' : ''}`}
                  style={{
                    display: "block",
                    width: "100%",
                    background: "none",
                    border: "none",
                    borderLeft: `2px solid ${i === current ? "#B8963E" : "#d4cfc6"}`,
                    padding: "12px 20px",
                    textAlign: "left",
                    cursor: "pointer",
                    marginBottom: 4,
                    transition: "border-color 0.2s",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Lato', sans-serif",
                      fontSize: 13,
                      fontWeight: i === current ? 700 : 400,
                      color: i === current ? "#1C3829" : "#9a9a8a",
                      transition: "color 0.2s, font-weight 0.2s",
                    }}
                  >
                    {t(`testimonial_${id}_name` as any)}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Lato', sans-serif",
                      fontSize: 11,
                      color: i === current ? "#B8963E" : "#bbb8b0",
                      marginTop: 2,
                      transition: "color 0.2s",
                    }}
                  >
                    {t(`testimonial_${id}_area` as any)}
                  </div>
                </button>
              ))}
            </div>

            {/* Prev/Next */}
            <div className="testimonial-nav-controls" style={{ display: "flex", gap: 8 }}>
              <button
                onClick={prev}
                style={{
                  width: 44,
                  height: 44,
                  border: "1px solid #d4cfc6",
                  background: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "border-color 0.2s, background 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#1C3829";
                  (e.currentTarget as HTMLElement).style.background = "#1C3829";
                  (e.currentTarget.querySelector("svg") as SVGElement)?.setAttribute("color", "#fff");
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#d4cfc6";
                  (e.currentTarget as HTMLElement).style.background = "none";
                  (e.currentTarget.querySelector("svg") as SVGElement)?.setAttribute("color", "#1C3829");
                }}
              >
                <ChevronLeft size={18} color="#1C3829" />
              </button>
              <button
                onClick={next}
                style={{
                  width: 44,
                  height: 44,
                  border: "1px solid #d4cfc6",
                  background: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "border-color 0.2s, background 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#1C3829";
                  (e.currentTarget as HTMLElement).style.background = "#1C3829";
                  (e.currentTarget.querySelector("svg") as SVGElement)?.setAttribute("color", "#fff");
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#d4cfc6";
                  (e.currentTarget as HTMLElement).style.background = "none";
                  (e.currentTarget.querySelector("svg") as SVGElement)?.setAttribute("color", "#1C3829");
                }}
              >
                <ChevronRight size={18} color="#1C3829" />
              </button>
            </div>
          </div>

          {/* Right: Active testimonial */}
          <div
            key={current}
            className="testimonial-active-card"
            style={{
              background: "#ffffff",
              position: "relative",
              borderLeft: "3px solid #B8963E",
            }}
          >
            {/* Large quote mark */}
            <div
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 120,
                fontWeight: 400,
                color: "#f0ece4",
                lineHeight: 0.7,
                marginBottom: 24,
                userSelect: "none",
              }}
            >
              "
            </div>

            {/* Stars */}
            <div style={{ display: "flex", gap: 4, marginBottom: 24 }}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={14} style={{ fill: "#B8963E", color: "#B8963E" }} />
              ))}
            </div>

            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(20px, 2.5vw, 22px)", // Slightly smaller for longer real text
                fontWeight: 400,
                fontStyle: "italic",
                color: "#2a2a2a",
                lineHeight: 1.6,
                marginBottom: 36,
              }}
            >
              "{t(`testimonial_${currentId}_text` as any)}"
            </p>

            <div style={{ borderTop: "1px solid #f0ece4", paddingTop: 24 }}>
              <div
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: 14,
                  fontWeight: 700,
                  color: "#1C3829",
                  letterSpacing: "0.04em",
                }}
              >
                {t(`testimonial_${currentId}_name` as any)}
              </div>
              <div
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: 12,
                  fontWeight: 400,
                  color: "#B8963E",
                  marginTop: 4,
                  letterSpacing: "0.06em",
                }}
              >
                {t(`testimonial_${currentId}_area` as any)}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .testimonials-section {
          padding: 100px 32px;
        }
        .testimonial-active-card {
          padding: 56px 52px;
        }
        @media (max-width: 768px) {
          .testimonials-section {
            padding: 64px 24px 100px 24px;
          }
          .testimonial-grid {
            display: flex !important;
            flex-direction: column-reverse;
            gap: 40px !important;
          }
          .testimonial-active-card {
            padding: 32px 24px;
            border-left: none !important;
            border-top: 3px solid #B8963E;
          }
          .testimonial-nav-list {
            display: flex;
            overflow-x: auto;
            padding-bottom: 16px;
            margin-bottom: 24px !important;
            gap: 20px;
            -ms-overflow-style: none;
            scrollbar-width: none;
            scroll-snap-type: x mandatory;
            scroll-behavior: smooth;
          }
          .testimonial-nav-list::-webkit-scrollbar {
            display: none;
          }
          .testimonial-nav-button {
            border-left: none !important;
            border-bottom: 2px solid #e5e5e5 !important;
            min-width: 180px;
            flex-shrink: 0;
            margin-bottom: 0 !important;
            padding: 12px 0 16px 0 !important;
            scroll-snap-align: start;
            display: flex !important;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            white-space: normal;
          }
          .testimonial-nav-button.active {
            border-bottom-color: #B8963E !important;
          }
          .testimonial-nav-controls {
            justify-content: center;
            margin-top: 16px;
          }
        }
      `}</style>
    </section>
  );
}
