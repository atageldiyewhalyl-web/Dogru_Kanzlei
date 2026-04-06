import heroImage from "@/assets/Hero 1.png";
import newsletterImage from "@/assets/Newsletter.png";
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
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 64,
            alignItems: "center",
            paddingBottom: 80,
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
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
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
                  background: "#8B6E2A",
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
                border: "1px solid rgba(139,110,42,0.25)",
                zIndex: -1,
              }}
            />
          </div>

          {/* Right: Text */}
          <div>
            {/* Section label */}
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <div style={{ width: 32, height: 1, background: "#8B6E2A" }} />
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 10,
                  fontWeight: 800,
                  letterSpacing: "0.22em",
                  color: "#7A5F20",
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

            <div style={{ width: 48, height: 2, background: "#8B6E2A", marginBottom: 28 }} />

            {[t("about_p1"), t("about_p2"), t("about_p3"), t("about_p4")].map((p, idx, arr) => (
              <p
                key={idx}
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 15,
                  fontWeight: 500,
                  color: "#4a4a4a",
                  lineHeight: 1.7,
                  marginBottom: idx === arr.length - 1 ? 36 : 16,
                }}
              >
                {p}
              </p>
            ))}

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
                      background: "#8B6E2A",
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
                {t("hero_title_pre")} <span lang="tr">Hasan Doğru</span>
              </div>
              <div
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#7A5F20",
                  marginTop: 4,
                }}
              >
                {t("about_signature_role")}
              </div>
            </div>
          </div>
        </div>

        {/* Press Section */}
        <div
          style={{
            marginTop: 100,
            borderTop: "1px solid #e0ddd5",
            paddingTop: 80,
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: 800, margin: "0 auto 64px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 20 }}>
              <div style={{ width: 32, height: 1, background: "#8B6E2A" }} />
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 10,
                  fontWeight: 800,
                  letterSpacing: "0.22em",
                  color: "#7A5F20",
                  textTransform: "uppercase",
                }}
              >
                {t("about_press_badge")}
              </span>
              <div style={{ width: 32, height: 1, background: "#8B6E2A" }} />
            </div>
            <h3
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(32px, 4vw, 48px)",
                fontWeight: 500,
                color: "#1C3829",
                lineHeight: 1.2,
                marginBottom: 24,
              }}
            >
              {t("about_press_title")}
              <br />
              <em style={{ fontStyle: "italic", fontWeight: 400 }}>{t("about_press_subtitle")}</em>
            </h3>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 16,
                fontWeight: 500,
                color: "#4a4a4a",
                lineHeight: 1.8,
                margin: "0 auto",
                maxWidth: 650,
              }}
            >
              {t("about_p1").split("—")[0]}... {t("about_signature_role")} <span lang="tr">Hasan Doğru</span>'nun profesyonel yolculuğu ve büro açılışına dair basında yer alan haber kupürü.
            </p>
          </div>

          <div style={{ position: "relative", maxWidth: 1100, margin: "0 auto" }}>
            <div
              style={{
                background: "#ffffff",
                padding: "32px",
                boxShadow: "0 30px 60px rgba(0,0,0,0.12)",
                transform: "rotate(-0.5deg)",
                transition: "all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)",
                cursor: "zoom-in",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "rotate(0deg) scale(1.01)";
                e.currentTarget.style.boxShadow = "0 40px 80px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "rotate(-0.5deg)";
                e.currentTarget.style.boxShadow = "0 30px 60px rgba(0,0,0,0.12)";
              }}
            >
              <img
                src={newsletterImage}
                alt="Haber bülteni kupürü - Avukat Hasan Doğru ve Doğru Kanzlei büro açılışı haberi"
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-section {
          padding: 100px 32px;
        }
        @media (max-width: 900px) {
          .press-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
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
