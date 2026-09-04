import debtCollectionImg from "@/assets/debt_collection_law.avif";
import { sortedBlogPosts, type BlogPost } from "./blogPosts";

export type BlogListingItem = BlogPost & {
  listingHrefDE?: string;
  listingHrefTR?: string;
  listingHrefEN?: string;
  listingPriority?: number;
};

const debtEnforcementServiceTeaser: BlogListingItem = {
  slug: "forderungsvollstreckung-tuerkei",
  slugDE: "forderungsvollstreckung-tuerkei",
  slugTR: "turkiyede-alacak-tahsili",
  slugEN: "debt-enforcement-turkey",
  listingHrefDE: "/de/leistungen/forderungsvollstreckung-tuerkei",
  listingHrefTR: "/tr/hizmetler/turkiyede-alacak-tahsili",
  listingHrefEN: "/en/services/debt-enforcement-turkey",
  listingPriority: 1,
  titleDE: "Forderungen in der Türkei vollstrecken: Titel, Vermögen, Tenfiz",
  titleTR: "Türkiye'de Alacak Tahsili: İlam, Mal Varlığı, Tenfiz",
  titleEN: "Debt Enforcement in Turkey: Titles, Assets, Tenfiz",
  excerptDE:
    "Schuldner mit Vermögen in der Türkei? Die neue Leistungsseite erklärt Anerkennung deutscher Titel, Vermögensermittlung, İhtiyati Haciz und Vollstreckung.",
  excerptTR:
    "Borçlunun Türkiye'de mal varlığı mı var? Yeni hizmet sayfası Alman kararlarının tenfizi, mal varlığı araştırması, ihtiyati haciz ve icra takibini açıklar.",
  excerptEN:
    "Debtor with assets in Turkey? The new service page explains recognition of foreign judgments, asset tracing, precautionary attachment and enforcement.",
  contentDE: "Service teaser",
  contentTR: "Service teaser",
  contentEN: "Service teaser",
  category: "Alacak Tahsili / Tenfiz",
  categoryDE: "Forderung / Tenfiz",
  categoryEN: "Debt Enforcement / Tenfiz",
  image: debtCollectionImg,
  dateDE: "4. September 2026",
  dateTR: "4 Eylül 2026",
  dateEN: "September 4, 2026",
  readTimeDE: "Service",
  readTimeTR: "Hizmet",
  readTimeEN: "Service",
  publishedAt: "2026-09-04",
  modifiedAt: "2026-09-04",
};

export const sortedBlogListingItems: BlogListingItem[] = [
  debtEnforcementServiceTeaser,
  ...sortedBlogPosts,
].sort((a, b) => {
  const byPublishedDate = b.publishedAt.localeCompare(a.publishedAt);
  if (byPublishedDate !== 0) return byPublishedDate;
  return (a.listingPriority ?? 0) - (b.listingPriority ?? 0);
});
