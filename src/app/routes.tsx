import { createBrowserRouter, redirect } from "react-router";
import React, { Suspense, lazy } from "react";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";

// Task 4: Code Splitting - Lazy load all non-critical pages
const Hizmetler = lazy(() => import("./pages/Hizmetler").then(module => ({ default: module.Hizmetler })));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail").then(module => ({ default: module.ServiceDetail })));
const BlogPage = lazy(() => import("./pages/BlogPage").then(module => ({ default: module.BlogPage })));
const BlogPost = lazy(() => import("./pages/BlogPost").then(module => ({ default: module.BlogPost })));
const Datenschutz = lazy(() => import("./pages/Datenschutz").then(module => ({ default: module.Datenschutz })));
const Impressum = lazy(() => import("./pages/Impressum").then(module => ({ default: module.Impressum })));
const AboutPage = lazy(() => import("./pages/AboutPage").then(module => ({ default: module.AboutPage })));
const NotFound = lazy(() => import("./pages/NotFound").then(module => ({ default: module.NotFound })));

// Helper to wrap lazy components in Suspense
const Loadable = (Component: any) => (props: any) => (
  <Suspense fallback={<div className="min-h-screen bg-[#1C3829]" />}>
    <Component {...props} />
  </Suspense>
);

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
  { path: "/scheidungsverfahren", loader: () => redirect("/de/leistungen") },
  { path: "/schuldrecht", loader: () => redirect("/de/leistungen") },
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
      { path: "leistungen", Component: Loadable(Hizmetler) },
      { path: "leistungen/:id", Component: Loadable(ServiceDetail) },
      { path: "blog", Component: Loadable(BlogPage) },
      { path: "blog/:slug", Component: Loadable(BlogPost) },
      { path: "datenschutz", Component: Loadable(Datenschutz) },
      { path: "impressum", Component: Loadable(Impressum) },
      { path: "ueber-uns", Component: Loadable(AboutPage) },
    ],
  },

  // === Turkish routes ===
  {
    path: "/tr",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "hizmetler", Component: Loadable(Hizmetler) },
      { path: "hizmetler/:id", Component: Loadable(ServiceDetail) },
      { path: "blog", Component: Loadable(BlogPage) },
      { path: "blog/:slug", Component: Loadable(BlogPost) },
      { path: "gizlilik-politikasi", Component: Loadable(Datenschutz) },
      { path: "yasal-bilgiler", Component: Loadable(Impressum) },
      { path: "hakkimizda", Component: Loadable(AboutPage) },
    ],
  },

  // 404 catch-all
  {
    path: "*",
    Component: Loadable(NotFound),
  },
]);
