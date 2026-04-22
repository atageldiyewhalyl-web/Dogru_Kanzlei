import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { WhatsAppButton } from "./WhatsAppButton";
import { Outlet, useLocation, ScrollRestoration, Navigate } from "react-router";
import { useEffect } from "react";
import { LanguageProvider } from "../context/LanguageContext";
import { ConsentProvider } from "../context/ConsentContext";
import { CookieBanner } from "./CookieBanner";
import { SchemaOrg } from "./SchemaOrg";

export function Layout() {
  const { pathname } = useLocation();

  // Derive language from URL path
  const language = pathname.startsWith('/tr') ? 'tr' : pathname.startsWith('/de') ? 'de' : pathname.startsWith('/en') ? 'en' : null;
  if (!language) {
    return <Navigate to="/de" replace />;
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Sync HTML lang attribute immediately on render/path change
  useEffect(() => {
    if (language) {
      // Map 'en' locale to proper BCP-47 tag
      document.documentElement.lang = language === 'de' ? 'de' : language === 'tr' ? 'tr' : 'en';
    }
  }, [language]);

  return (
    <LanguageProvider language={language}>
      <ConsentProvider>
        <div
          style={{
            fontFamily: "var(--font-sans)",
            margin: 0,
            padding: 0,
            minHeight: "100vh",
            overflowX: "hidden",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <ScrollRestoration />
          <SchemaOrg />
          <Navbar />
          <main style={{ flex: 1 }}>
            <Outlet />
          </main>
          <Footer />
          <WhatsAppButton />
          <CookieBanner />
        </div>
      </ConsentProvider>
    </LanguageProvider>
  );
}
