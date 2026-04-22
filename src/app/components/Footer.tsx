import logoImage from "@/assets/logo.avif";
import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router";
import { useLanguage } from "../context/LanguageContext";
import { useConsent } from "../context/ConsentContext";

export function Footer() {
  const { t, language, paths } = useLanguage();
  const { openSettings } = useConsent();
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
        { label: "Strafrecht", href: paths.service("strafrecht") },
      ]
    : [
        { label: "Aile Hukuku", href: paths.service("familienrecht") },
        { label: "Miras Hukuku", href: paths.service("erbrecht") },
        { label: "Ceza Hukuku", href: paths.service("strafrecht") },
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
            <Link 
              to={paths.home}
              aria-label={`Doğru Kanzlei - ${t("nav_home")}`}
              style={{ marginBottom: 20, display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}
            >
              <img
                src={logoImage}
                alt="Doğru Kanzlei Logo"
                width={48}
                height={48}
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
            </Link>
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
                  fontFamily: "var(--font-sans)",
                  fontSize: 14,
                  fontWeight: 500,
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
                  fontFamily: "var(--font-sans)",
                  fontSize: 13,
                  fontWeight: 500,
                  color: "rgba(255,255,255,0.7)",
                  textDecoration: "none",
                  marginBottom: 12,
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#ffffff")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.7)")}
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
                  fontFamily: "var(--font-sans)",
                  fontSize: 13,
                  fontWeight: 500,
                  color: "rgba(255,255,255,0.7)",
                  textDecoration: "none",
                  marginBottom: 12,
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#ffffff")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.7)")}
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
                 color: "#8B6E2A", // Task 2: Darker gold for text contrast
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
                 color: "rgba(255,255,255,0.7)",
                 lineHeight: 1.7,
               }}
             >
               <div style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 14 }}>
                 <Mail size={14} color="#8B6E2A" style={{ marginTop: 4 }} />
                 <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                   <a href="mailto:info@hasandogru.de" style={{ color: "inherit", textDecoration: "none" }}>info@hasandogru.de</a>
                   <a href="mailto:Avukat.hasandogru@outlook.de" style={{ color: "inherit", textDecoration: "none" }}>Avukat.hasandogru@outlook.de</a>
                 </div>
               </div>
               <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                 <Phone size={14} color="#8B6E2A" />
                 <a 
                   href="https://wa.me/4917661221210" 
                   aria-label="Kontakt per WhatsApp" 
                   style={{ color: "inherit", textDecoration: "none" }}
                   target="_blank"
                   rel="noopener noreferrer"
                 >
                   +4917661221210
                 </a>
               </div>
               <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                 <Phone size={14} color="#8B6E2A" />
                 <span>+905332375918</span>
               </div>
               <div style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 14 }}>
                 <MapPin size={14} color="#8B6E2A" style={{ marginTop: 4 }} />
                 <span>R1 2,3, 68161 Mannheim, Deutschland</span>
               </div>
               <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                 <MapPin size={14} color="#8B6E2A" style={{ marginTop: 4 }} />
                 <span>Aşağı Öveçler Mahallesi 1322 Cadde 45/9, Çankaya Ankara</span>
               </div>
             </div>
           </div>
         </div>
 
         {/* Legal Disclaimer Section */}
         <div
           style={{
             marginTop: 80,
             marginBottom: 20,
           }}
         >
           <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 40 }} className="footer-disclaimer-grid">
             <div>
               <span style={{ color: "#C9A84C", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.2em", display: "block", marginBottom: 16, opacity: 0.9 }}>Rechtlicher Hinweis</span>
               <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 11, lineHeight: 1.8, margin: 0, fontFamily: "'Lato', sans-serif" }}>
                 Die Kanzlei berät ausschließlich im türkischen Recht. Eine Beratung oder Vertretung im deutschen Recht findet nicht statt. Registriert als ausländischer Anwalt gemäß § 207 BRAO.
               </p>
             </div>
             <div lang="tr">
               <span style={{ color: "#C9A84C", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.2em", display: "block", marginBottom: 16, opacity: 0.9 }}>Yasal Uyarı</span>
               <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 11, lineHeight: 1.8, margin: 0, fontFamily: "'Lato', sans-serif" }}>
                 Büromuz yalnızca Türk hukuku alanında danışmanlık vermektedir. Alman hukuku konusunda danışmanlık veya temsil hizmeti verilmemektedir. § 207 BRAO uyarınca kayıtlı yabancı avukat.
               </p>
             </div>
             <div>
               <span style={{ color: "#C9A84C", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.2em", display: "block", marginBottom: 16, opacity: 0.9 }}>Legal Notice</span>
               <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 11, lineHeight: 1.8, margin: 0, fontFamily: "'Lato', sans-serif" }}>
                 The firm provides legal advice exclusively in Turkish law. We do not provide advice or representation in German law. Registered as a foreign lawyer according to § 207 BRAO.
               </p>
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
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
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
            <a
              href="https://nüll.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
                fontFamily: "'Lato', sans-serif",
                fontSize: 10,
                fontWeight: 400,
                color: "rgba(255,255,255,0.4)",
                textDecoration: "none",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                const target = e.currentTarget as HTMLElement;
                target.style.color = "rgba(255,255,255,0.7)";
              }}
              onMouseLeave={(e) => {
                const target = e.currentTarget as HTMLElement;
                target.style.color = "rgba(255,255,255,0.4)";
              }}
            >
              Site made by
              <span style={{ 
                display: "flex", 
                alignItems: "center", 
                color: "rgba(255,255,255,0.8)", 
                fontWeight: 800,
                marginLeft: 2,
                letterSpacing: "-0.02em",
                fontFamily: "var(--font-sans)"
              }}>
                nüll<span style={{ color: "#3B82F6" }}>.</span>com
              </span>
            </a>
          </div>
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
                  color: "rgba(255,255,255,0.6)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.4)")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.2)")}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={openSettings}
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: 11,
                fontWeight: 400,
                color: "rgba(255,255,255,0.2)",
                textDecoration: "none",
                background: "none",
                border: "none",
                padding: 0,
                cursor: "pointer",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.4)")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.2)")}
            >
              {language === 'de' ? 'Cookie-Einstellungen' : language === 'tr' ? 'Çerez Ayarları' : 'Cookie Settings'}
            </button>
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
        @media (max-width: 768px) {
          .footer-disclaimer-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
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
