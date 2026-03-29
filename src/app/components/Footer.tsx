import logoImage from "@/assets/30fbe893025c3fe015e5b6962dda4011264eeccb.png";
import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router";
import { useLanguage } from "../context/LanguageContext";

export function Footer() {
  const { t, language, paths } = useLanguage();
  const year = new Date().getFullYear();

  const quickLinks = [
    { label: t("nav_about"), href: paths.about },
    { label: t("nav_services"), href: paths.services },
    { label: t("nav_why_us"), href: paths.whyUs },
    { label: t("nav_blog"), href: paths.blog },
    { label: t("nav_contact"), href: paths.contact },
  ];

  const practiceAreas = language === 'de'
    ? [
        { label: "Familienrecht", href: paths.service("familienrecht") },
        { label: "Erbrecht", href: paths.service("erbrecht") },
        { label: "Mietrecht", href: paths.service("mietrecht") },
        { label: "Strafrecht", href: paths.service("strafrecht") },
        { label: "Türkisches Recht", href: paths.service("tuerkisches-recht") },
      ]
    : [
        { label: "Aile Hukuku", href: paths.service("familienrecht") },
        { label: "Miras Hukuku", href: paths.service("erbrecht") },
        { label: "Kira Hukuku", href: paths.service("mietrecht") },
        { label: "Ceza Hukuku", href: paths.service("strafrecht") },
        { label: "Türk Hukuku", href: paths.service("tuerkisches-recht") },
      ];

  return (
    <footer style={{ background: "#111d17", padding: "64px 32px 32px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Top row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2.5fr 1fr 1fr 1.5fr",
            gap: 48,
            paddingBottom: 48,
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <div style={{ marginBottom: 20, display: "flex", alignItems: "center", gap: 10 }}>
              <img
                src={logoImage}
                alt="Doğru Kanzlei"
                style={{
                  height: 48,
                  width: "auto",
                  display: "block",
                  filter: "brightness(0) invert(1)",
                }}
              />
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 22,
                  fontWeight: 600,
                  color: "#ffffff",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                DOGRU Kanzlei
              </span>
            </div>
            <p
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: 13,
                fontWeight: 400,
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.7,
                maxWidth: 320,
                marginBottom: 24,
              }}
            >
              {t("footer_description")}
            </p>
            <div style={{ display: "flex", gap: 14 }}>
              <div
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  background: "rgba(184,150,62,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid rgba(184,150,62,0.2)",
                }}
              >
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#B8963E" }} />
              </div>
              <span
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: 12,
                  fontWeight: 400,
                  color: "rgba(255,255,255,0.6)",
                  letterSpacing: "0.05em",
                }}
              >
                Mannheim · Ankara
              </span>
            </div>
          </div>

          {/* Nav links */}
          <div>
            <div
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#B8963E",
                marginBottom: 24,
              }}
            >
              {t("footer_quick_links")}
            </div>
            {quickLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                style={{
                  display: "block",
                  fontFamily: "'Lato', sans-serif",
                  fontSize: 13,
                  fontWeight: 400,
                  color: "rgba(255,255,255,0.4)",
                  textDecoration: "none",
                  marginBottom: 12,
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#ffffff")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.4)")}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Practice areas */}
          <div>
            <div
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#B8963E",
                marginBottom: 24,
              }}
            >
              {t("hero_cta_secondary")}
            </div>
            {practiceAreas.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                style={{
                  display: "block",
                  fontFamily: "'Lato', sans-serif",
                  fontSize: 13,
                  fontWeight: 400,
                  color: "rgba(255,255,255,0.4)",
                  textDecoration: "none",
                  marginBottom: 12,
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#ffffff")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.4)")}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#B8963E",
                marginBottom: 24,
              }}
            >
              {t("footer_contact_info")}
            </div>
            <div
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: 13,
                fontWeight: 400,
                color: "rgba(255,255,255,0.4)",
                lineHeight: 1.7,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                <Mail size={14} color="#B8963E" />
                <a href="mailto:info@dogru-kanzlei.de" style={{ color: "inherit", textDecoration: "none" }}>info@dogru-kanzlei.de</a>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                <Phone size={14} color="#B8963E" />
                <span>+49 (0) 621 15 20 83 23</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                <Phone size={14} color="#B8963E" />
                <span>+90 (0) 312 431 01 01</span>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                <MapPin size={14} color="#B8963E" style={{ marginTop: 4 }} />
                <span>Q7, 24, 68161 Mannheim, Deutschland</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            paddingTop: 24,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <span
            style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: 11,
              fontWeight: 400,
              color: "rgba(255,255,255,0.2)",
            }}
          >
            © {year} DOGRU Kanzlei · {t("hero_title_pre")} Hasan Dogru. {t("footer_rights")}
          </span>
          <div style={{ display: "flex", gap: 24 }}>
            {[
              { label: "Impressum", href: paths.impressum },
              { label: "Datenschutz", href: paths.datenschutz },
            ].map((link) => (
              <Link
                key={link.label}
                to={link.href}
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: 11,
                  fontWeight: 400,
                  color: "rgba(255,255,255,0.2)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.4)")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.2)")}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 48px !important;
          }
        }
        @media (max-width: 640px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
