import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function Contact() {
  const { t, language } = useLanguage();

  const offices = [
    {
      city: "Mannheim",
      country: language === "tr" ? "Almanya" : "Deutschland",
      address: "Q7, 24\n68161 Mannheim, Deutschland",
      phone: "+49 (0) 621 15 20 83 23",
      email: "info@dogru-kanzlei.de",
      hours: language === "tr" ? "Pzt–Cmt: 09:00 – 18:00" : "Mo–Sa: 09:00 – 18:00",
    },
    {
      city: "Ankara",
      country: language === "tr" ? "Türkiye" : "Türkei",
      address: "Aziziye, Kuzgun Sk. No:2\n06690 Çankaya / Ankara",
      phone: "+90 (0) 312 431 01 01",
      email: "info@dogru-kanzlei.de",
      hours: language === "tr" ? "Pzt–Cum: 09:00 – 18:00" : "Mo–Fr: 09:00 – 18:00",
    },
  ];

  // PLACEHOLDERS - User should update these
  const calendlyLink = "https://calendly.com/your-link";
  const whatsappNumber = "4917661221210"; 

  return (
    <section
      id="iletisim"
      className="contact-section"
      style={{
        background: "#ffffff",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: 80 }}>
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
                fontSize: 14,
                fontWeight: 500,
                letterSpacing: "0.22em",
                color: "#B8963E",
                textTransform: "uppercase",
              }}
            >
              {t("contact_badge")}
            </span>
            <div style={{ width: 32, height: 1, background: "#B8963E" }} />
          </div>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(32px, 4vw, 52px)",
              fontWeight: 500,
              color: "#1C3829",
              lineHeight: 1.1,
              margin: "0 0 16px",
            }}
          >
            {t("contact_title")}
            <br />
            <em style={{ fontStyle: "italic", fontWeight: 400 }}>{t("contact_subtitle")}</em>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 16,
              color: "#6a6a6a",
              lineHeight: 1.8,
              maxWidth: 600,
              margin: "0 auto",
            }}
          >
            {t("contact_description")}
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 64,
            alignItems: "start",
          }}
          className="contact-grid"
        >
          {/* Left: Direct Contact Options */}
          <div
            style={{
              background: "#F7F5F0",
              padding: 48,
              borderLeft: "4px solid #B8963E",
            }}
          >
            <h3
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 32,
                color: "#1C3829",
                marginBottom: 16,
              }}
            >
              {t("contact_direct_title")}
            </h3>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 15,
                color: "#6a6a6a",
                marginBottom: 40,
                lineHeight: 1.6,
              }}
            >
              {t("contact_direct_p")}
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <a
                href={calendlyLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 12,
                  background: "#1C3829",
                  color: "#ffffff",
                  padding: "18px 32px",
                  fontFamily: "var(--font-sans)",
                  fontSize: 13,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#B8963E")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#1C3829")}
              >
                <Clock size={18} />
                {t("contact_calendly_btn")}
              </a>

              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 12,
                  background: "#ffffff",
                  border: "1px solid #1C3829",
                  color: "#1C3829",
                  padding: "18px 32px",
                  fontFamily: "var(--font-sans)",
                  fontSize: 13,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#1C3829";
                  e.currentTarget.style.color = "#ffffff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#ffffff";
                  e.currentTarget.style.color = "#1C3829";
                }}
              >
                <Phone size={18} />
                {t("contact_whatsapp_btn")}
              </a>
            </div>

            <div style={{ marginTop: 48, borderTop: "1px solid #d4cfc6", paddingTop: 32 }}>
              <div
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 11,
                  fontWeight: 700,
                  color: "#B8963E",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  marginBottom: 16,
                }}
              >
                {t("contact_languages_badge")}
              </div>
              <div style={{ display: "flex", gap: 12 }}>
                {["Türkçe", "Deutsch", "English"].map((lang) => (
                  <span
                    key={lang}
                    style={{
                      fontFamily: "'Lato', sans-serif",
                      fontSize: 13,
                      color: "#1C3829",
                      background: "#ffffff",
                      padding: "6px 16px",
                      border: "1px solid #e0ddd5",
                    }}
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Office Info */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 32 }}>
            {offices.map((office, idx) => (
              <div
                key={idx}
                style={{
                  paddingBottom: idx === 0 ? 32 : 0,
                  borderBottom: idx === 0 ? "1px solid #f0ece4" : "none",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: 10,
                    marginBottom: 16,
                  }}
                >
                  <h4
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: 24,
                      fontWeight: 500,
                      color: "#1C3829",
                      margin: 0,
                    }}
                  >
                    {office.city}
                  </h4>
                  <span
                    style={{
                      fontFamily: "'Lato', sans-serif",
                      fontSize: 11,
                      color: "#B8963E",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {office.country}
                  </span>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <div style={{ display: "flex", gap: 12 }}>
                    <MapPin size={16} color="#B8963E" style={{ flexShrink: 0, marginTop: 4 }} />
                    <div
                      style={{
                        fontFamily: "'Lato', sans-serif",
                        fontSize: 14,
                        color: "#6a6a6a",
                        lineHeight: 1.6,
                        whiteSpace: "pre-line",
                      }}
                    >
                      {office.address}
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: 12 }}>
                    <Phone size={16} color="#B8963E" style={{ flexShrink: 0 }} />
                    <a
                      href={`tel:${office.phone.replace(/\s/g, "")}`}
                      style={{
                        fontFamily: "'Lato', sans-serif",
                        fontSize: 14,
                        color: "#4a4a4a",
                        textDecoration: "none",
                        fontWeight: 500,
                      }}
                    >
                      {office.phone}
                    </a>
                  </div>

                  <div style={{ display: "flex", gap: 12 }}>
                    <Mail size={16} color="#B8963E" style={{ flexShrink: 0 }} />
                    <a
                      href={`mailto:${office.email}`}
                      style={{
                        fontFamily: "'Lato', sans-serif",
                        fontSize: 14,
                        color: "#4a4a4a",
                        textDecoration: "none",
                      }}
                    >
                      {office.email}
                    </a>
                  </div>

                  <div style={{ display: "flex", gap: 12 }}>
                    <Clock size={16} color="#B8963E" style={{ flexShrink: 0 }} />
                    <div
                      style={{
                        fontFamily: "'Lato', sans-serif",
                        fontSize: 14,
                        color: "#6a6a6a",
                      }}
                    >
                      {office.hours}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .contact-section {
          padding: 120px 32px;
        }
        @media (max-width: 991px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
        @media (max-width: 768px) {
          .contact-section {
            padding: 80px 24px;
          }
        }
      `}</style>
    </section>
  );
}
