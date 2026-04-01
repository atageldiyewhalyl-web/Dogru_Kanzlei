import heroImage from "@/assets/Hero 1.png";
import { useLanguage } from "../context/LanguageContext";

export function About() {
  const { t } = useLanguage();
  return (
    <section
      id="hakkimizda"
      className="about-section"
      style={{
        background: "#F7F5F0",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 64,
          alignItems: "center",
        }}
        className="about-grid"
      >
        {/* Left: Professional Portrait */}
        <div style={{ position: "relative" }}>
          <div
            style={{
              width: "100%",
              maxWidth: 520,
              aspectRatio: "4/5",
              background: "#1C3829",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <img
              src={heroImage}
              alt="Avukat Hasan DOĞRU"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "top center",
              }}
            />

            {/* Bottom bar */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: 4,
                background: "#B8963E",
              }}
            />
          </div>

          {/* Decorative offset border */}
          <div
            style={{
              position: "absolute",
              top: 24,
              left: 24,
              width: "100%",
              maxWidth: 520,
              aspectRatio: "4/5",
              border: "1px solid rgba(184,150,62,0.25)",
              zIndex: -1,
            }}
          />
        </div>

        {/* Right: Text */}
        <div>
          {/* Section label */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
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
              {t("about_badge")}
            </span>
          </div>

          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(32px, 3.5vw, 44px)",
              fontWeight: 500,
              color: "#1C3829",
              lineHeight: 1.15,
              marginBottom: 24,
            }}
          >
            {t("about_title")}
            <br />
            <em style={{ fontStyle: "italic", fontWeight: 400 }}>{t("about_subtitle")}</em>
          </h2>

          <div style={{ width: 48, height: 2, background: "#B8963E", marginBottom: 28 }} />

          <p
            style={{
            fontFamily: "var(--font-sans)",
            fontSize: 16,
            fontWeight: 500,
              color: "#4a4a4a",
              lineHeight: 1.8,
              marginBottom: 20,
            }}
          >
            {t("about_p1")}
          </p>

          <p
            style={{
            fontFamily: "var(--font-sans)",
            fontSize: 16,
            fontWeight: 500,
              color: "#4a4a4a",
              lineHeight: 1.8,
              marginBottom: 36,
            }}
          >
            {t("about_p2")}
          </p>

          {/* Credentials */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 16,
              marginBottom: 40,
            }}
          >
            {[
              t("about_cred_01"),
              t("about_cred_02"),
              t("about_cred_03"),
              t("about_cred_04"),
            ].map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <div
                  style={{
                    width: 6,
                    height: 6,
                    background: "#B8963E",
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 13,
                    fontWeight: 500,
                    color: "#4a4a4a",
                    letterSpacing: "0.02em",
                  }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Signature-style name */}
          <div
            style={{
              borderTop: "1px solid #e0ddd5",
              paddingTop: 24,
            }}
          >
            <div
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 28,
                fontWeight: 400,
                fontStyle: "italic",
                color: "#1C3829",
                letterSpacing: "0.03em",
              }}
            >
              {t("hero_title_pre")} Hasan Doğru
            </div>
            <div
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#B8963E",
                marginTop: 4,
              }}
            >
              {t("about_signature_role")}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-section {
          padding: 100px 32px;
        }
        @media (max-width: 768px) {
          .about-section {
            padding: 64px 24px;
          }
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}
