import { useEffect, useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router";
import { useLanguage } from "../context/LanguageContext";
import logoImage from "@/assets/30fbe893025c3fe015e5b6962dda4011264eeccb.png";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { language, setLanguage, t, paths } = useLanguage();
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { label: t("nav_home"), href: paths.home },
    { label: t("nav_about"), href: paths.about },
    { label: t("nav_services"), href: paths.services },
    { label: t("nav_why_us"), href: paths.whyUs },
    { label: t("nav_blog"), href: paths.blog },
    { label: t("nav_contact"), href: paths.contact },
  ];

  const isHome = pathname === `/${language}` || pathname === `/${language}/`;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 150);
        return () => clearTimeout(timer);
      }
    }
  }, [hash]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const hashIndex = href.indexOf('#');
    if (hashIndex !== -1) {
      const basePath = href.substring(0, hashIndex);
      const id = href.substring(hashIndex + 1);
      const currentBase = pathname.replace(/\/$/, '');
      const targetBase = basePath.replace(/\/$/, '');

      if (currentBase === targetBase || (isHome && targetBase === `/${language}`)) {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          return;
        }
      }
      navigate(href);
    } else {
      navigate(href);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const isLight = (scrolled || !isHome) && !mobileOpen;

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "background 0.3s, box-shadow 0.3s",
        background: isLight ? "#ffffff" : "transparent",
        boxShadow: isLight ? "0 1px 24px rgba(0,0,0,0.07)" : "none",
        borderBottom: isLight ? "1px solid #f0f0f0" : "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <div
        className="relative z-50 max-w-[1400px] mx-auto px-6 lg:px-8 flex items-center justify-between h-[80px]"
      >
        {/* Logo */}
        <Link
          to={paths.home}
          onClick={(e) => {
            if (isHome) {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 12 }}
        >
          <img
            src={logoImage}
            alt="Doğru Kanzlei"
            style={{
              height: 44,
              width: "auto",
              display: "block",
              filter: isLight ? "none" : "brightness(0) invert(1)",
              transition: "filter 0.3s",
            }}
          />
          <div className="flex flex-col">
            <span
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 20,
                fontWeight: 600,
                color: isLight ? "#1C3829" : "#ffffff",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                transition: "color 0.3s",
                lineHeight: 1,
              }}
            >
              DOGRU
            </span>
            <span
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: 9,
                fontWeight: 700,
                color: "#B8963E",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                marginTop: 2,
              }}
            >
              Kanzlei
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8" aria-label={language === 'de' ? 'Hauptnavigation' : 'Ana navigasyon'}>
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "var(--font-sans)",
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: isLight ? "#3a3a3a" : "rgba(255,255,255,0.9)",
                textDecoration: "none",
                transition: "color 0.2s",
                padding: "8px 0",
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#B8963E")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = isLight ? "#3a3a3a" : "rgba(255,255,255,0.9)")}
            >
              {link.label}
            </button>
          ))}

          <div style={{ width: 1, height: 18, background: isLight ? "#e0e0e0" : "rgba(255,255,255,0.2)" }} />

          {/* Language Switcher */}
          <button
            onClick={() => setLanguage(language === "tr" ? "de" : "tr")}
            aria-label={language === 'de' ? 'Sprache wechseln' : 'Dil değiştir'}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 5,
              background: "none",
              border: "none",
              cursor: "pointer",
              fontFamily: "var(--font-sans)",
              fontSize: 11,
              fontWeight: 700,
              color: isLight ? "#3a3a3a" : "#ffffff",
              textTransform: "uppercase",
            }}
          >
            <Globe size={13} color="#B8963E" />
            {language === 'de' ? 'TR' : 'DE'}
          </button>

          <button
            onClick={() => handleNavClick(paths.contact)}
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#ffffff",
              background: "#B8963E",
              padding: "12px 24px",
              textDecoration: "none",
              transition: "transform 0.2s, background 0.2s",
              border: "none",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.background = "#9a7c32";
              (e.target as HTMLElement).style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.background = "#B8963E";
              (e.target as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            {t("nav_cta")}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 lg:hidden">
           <button
            onClick={() => setLanguage(language === "tr" ? "de" : "tr")}
            aria-label={language === 'de' ? 'Sprache wechseln' : 'Dil değiştir'}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 4,
              background: "none",
              border: "none",
              cursor: "pointer",
              fontFamily: "'Lato', sans-serif",
              fontSize: 12,
              fontWeight: 700,
              color: isLight ? "#3a3a3a" : "#ffffff",
              textTransform: "uppercase",
            }}
          >
            {language === 'de' ? 'TR' : 'DE'}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Menu schließen' : 'Menu öffnen'}
            style={{ background: "none", border: "none", cursor: "pointer", color: isLight ? "#1C3829" : "#ffffff", padding: 4 }}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-[#1C3829] z-40 transition-transform duration-500 ease-in-out lg:hidden ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}
        style={{ top: 0, height: "100vh" }}
      >
        <div className="flex flex-col h-full pt-28 px-8 pb-12 overflow-y-auto">
          <div className="flex flex-col gap-6 flex-grow">
            {navLinks.map((link, idx) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                style={{ transitionDelay: `${idx * 100}ms` }}
                className={`text-left font-serif text-3xl font-medium text-white hover:text-[#B8963E] transition-all duration-300 ${mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className={`mt-auto pt-8 border-t border-white/10 transition-all duration-500 delay-500 ${mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <p className="font-sans text-[11px] text-white/50 tracking-[0.2em] uppercase mb-4">
              {language === 'de' ? 'Direkter Kontakt' : 'Doğrudan İletişim'}
            </p>
            <p className="font-sans text-white mb-1">info@hasandogru.de</p>
            <p className="font-sans text-white mb-2">Avukat.hasandogru@outlook.de</p>
            <p className="font-sans text-white mb-8">+4917661221210</p>
            <button
              onClick={() => handleNavClick(paths.contact)}
              className="w-full bg-[#B8963E] text-white font-sans text-xs font-bold tracking-[0.15em] uppercase py-5 text-center transition-colors hover:bg-[#a68635]"
            >
              {t("nav_cta")}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
