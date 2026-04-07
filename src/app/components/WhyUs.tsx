import { ShieldCheck, Scale, MessageSquare, Globe, Star } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function WhyUs() {
  const { t } = useLanguage();

  const points = [
    {
      icon: ShieldCheck,
      title: t("why_us_point_01_title"),
      description: t("why_us_point_01_desc"),
    },
    {
      icon: Scale,
      title: t("why_us_point_02_title"),
      description: t("why_us_point_02_desc"),
    },
    {
      icon: MessageSquare,
      title: t("why_us_point_03_title"),
      description: t("why_us_point_03_desc"),
    },
    {
      icon: Globe,
      title: t("why_us_point_04_title"),
      description: t("why_us_point_04_desc"),
    },
  ];

  return (
    <section
      id="neden-biz"
      className="whyus-section"
      style={{
        background: "#1C3829",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background accent */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(184,150,62,0.07) 0%, transparent 70%)",
          transform: "translate(30%, -30%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(184,150,62,0.05) 0%, transparent 70%)",
          transform: "translate(-30%, 30%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>
        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 12,
              marginBottom: 20,
            }}
          >
            <div style={{ width: 32, height: 1, background: "#B8963E" }} />
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 10,
                fontWeight: 800,
                letterSpacing: "0.22em",
                color: "#B8963E",
                textTransform: "uppercase",
              }}
            >
              {t("why_us_badge")}
            </span>
            <div style={{ width: 32, height: 1, background: "#B8963E" }} />
          </div>

          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(32px, 3.5vw, 44px)",
              fontWeight: 500,
              color: "#ffffff",
              lineHeight: 1.15,
              margin: "0 0 20px",
              textAlign: "center",
            }}
          >
            {t("why_us_title")}
            <br />
            <em style={{ fontStyle: "italic", fontWeight: 400 }}>{t("why_us_subtitle")}</em>
          </h2>

          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 15,
              fontWeight: 500,
              color: "rgba(255,255,255,0.85)",
              lineHeight: 1.8,
              maxWidth: 500,
              margin: "0 auto",
            }}
          >
            {t("why_us_description")}
          </p>
        </div>

        {/* Points grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 2,
          }}
          className="why-grid"
        >
          {points.map((point, i) => {
            const Icon = point.icon;
            return (
              <div
                key={point.title}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  padding: "44px 40px",
                  position: "relative",
                  transition: "background 0.3s, border-color 0.3s",
                }}
                className={`why-item-${i + 1}`}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(184,150,62,0.3)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)";
                }}
              >
                {/* Number */}
                <div
                  style={{
                    position: "absolute",
                    top: 28,
                    right: 32,
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 14,
                    fontWeight: 300,
                    color: "rgba(255,255,255,0.85)",
                    lineHeight: 1,
                    userSelect: "none",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>

                {/* Icon */}
                <div
                  style={{
                    width: 52,
                    height: 52,
                    border: "1px solid rgba(184,150,62,0.35)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 28,
                  }}
                >
                  <Icon size={22} style={{ color: "#B8963E", strokeWidth: 1.5 }} />
                </div>

                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 26,
                    fontWeight: 600,
                    color: "#ffffff",
                    lineHeight: 1.2,
                    marginBottom: 16,
                  }}
                >
                  {point.title}
                </h3>

                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 14,
                    fontWeight: 500,
                    color: "rgba(255,255,255,0.8)",
                    lineHeight: 1.8,
                    margin: 0,
                  }}
                >
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .whyus-section {
          padding: 100px 32px;
        }
        @media (max-width: 768px) {
          .whyus-section {
            padding: 64px 24px;
          }
          .why-grid {
            grid-template-columns: 1fr !important;
          }
          .why-grid > div {
            grid-column: auto !important;
          }
        }
      `}</style>
    </section>
  );
}
