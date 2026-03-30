import { createBrowserRouter, redirect } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Hizmetler } from "./pages/Hizmetler";
import { ServiceDetail } from "./pages/ServiceDetail";
import { BlogPage } from "./pages/BlogPage";
import { BlogPost } from "./pages/BlogPost";
import { Datenschutz } from "./pages/Datenschutz";
import { Impressum } from "./pages/Impressum";
import { AboutPage } from "./pages/AboutPage";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  // Root redirects to German (default language)
  {
    path: "/",
    loader: () => redirect("/de"),
  },

  // === Old URL redirects (preserve SEO from hasandogru.de) ===
  { path: "/familienrecht", loader: () => redirect("/de/leistungen/familienrecht") },
  { path: "/erbrecht", loader: () => redirect("/de/leistungen/erbrecht") },
  { path: "/immobilienrecht", loader: () => redirect("/de/leistungen/immobilienrecht") },
  { path: "/scheidungsverfahren", loader: () => redirect("/de/leistungen/scheidungsverfahren") },
  { path: "/schuldrecht", loader: () => redirect("/de/leistungen/schuldrecht") },
  { path: "/mietrecht", loader: () => redirect("/de/leistungen/mietrecht") },
  { path: "/kontakt", loader: () => redirect("/de/#iletisim") },
  { path: "/meine-vision", loader: () => redirect("/de/#hakkimizda") },
  { path: "/blog", loader: () => redirect("/de/blog") },
  { path: "/blogartikel", loader: () => redirect("/de/blog") },
  { path: "/datenschutz", loader: () => redirect("/de/datenschutz") },
  { path: "/impressum", loader: () => redirect("/de/impressum") },
  { path: "/book-online", loader: () => redirect("/de/#iletisim") },
  { path: "/treffen", loader: () => redirect("/de/#iletisim") },
  { path: "/schlüsselthemen", loader: () => redirect("/de/leistungen") },

  // === German routes ===
  {
    path: "/de",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "leistungen", Component: Hizmetler },
      { path: "leistungen/:id", Component: ServiceDetail },
      { path: "blog", Component: BlogPage },
      { path: "blog/:slug", Component: BlogPost },
      { path: "datenschutz", Component: Datenschutz },
      { path: "impressum", Component: Impressum },
      { path: "ueber-uns", Component: AboutPage },
    ],
  },

  // === Turkish routes ===
  {
    path: "/tr",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "hizmetler", Component: Hizmetler },
      { path: "hizmetler/:id", Component: ServiceDetail },
      { path: "blog", Component: BlogPage },
      { path: "blog/:slug", Component: BlogPost },
      { path: "gizlilik-politikasi", Component: Datenschutz },
      { path: "yasal-bilgiler", Component: Impressum },
      { path: "hakkimizda", Component: AboutPage },
    ],
  },

  // 404 catch-all
  {
    path: "*",
    Component: NotFound,
  },
]);
