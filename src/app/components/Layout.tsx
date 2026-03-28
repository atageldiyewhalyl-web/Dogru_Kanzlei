import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { WhatsAppButton } from "./WhatsAppButton";
import { Outlet, useLocation, ScrollRestoration, Navigate } from "react-router";
import { useEffect } from "react";
import { LanguageProvider } from "../context/LanguageContext";
import { SchemaOrg } from "./SchemaOrg";

export function Layout() {
  const { pathname } = useLocation();

  // Derive language from URL path
  const language = pathname.startsWith('/tr') ? 'tr' : pathname.startsWith('/de') ? 'de' : null;
  if (!language) {
    return <Navigate to="/de" replace />;
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <LanguageProvider language={language}>
      <div
        style={{
          fontFamily: "'Lato', sans-serif",
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
      </div>
    </LanguageProvider>
  );
}
