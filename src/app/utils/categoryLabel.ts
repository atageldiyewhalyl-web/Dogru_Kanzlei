// A few older posts store a slug ("family-law") in `category`; show a readable label instead.
const LABELS: Record<string, { de: string; tr: string; en: string }> = {
  "family-law": { de: "Familienrecht", tr: "Aile Hukuku", en: "Family Law" },
  "inheritance-law": { de: "Erbrecht", tr: "Miras Hukuku", en: "Inheritance Law" },
  "legal-documents": { de: "Vollmacht & Urkunden", tr: "Vekaletname ve Belgeler", en: "Powers of Attorney & Documents" },
  "legal-info": { de: "Rechtliche Informationen", tr: "Hukuki Bilgiler", en: "Legal Information" },
  "tenant-law": { de: "Mietrecht", tr: "Kira Hukuku", en: "Tenancy Law" },
};

type Categorised = { category?: string; categoryDE?: string; categoryEN?: string };

export function categoryLabel(post: Categorised, language: string): string {
  const raw = language === "de" ? post.categoryDE : language === "tr" ? post.category : post.categoryEN || post.categoryDE;
  const mapped = LABELS[(raw || "").trim()];
  if (!mapped) return raw || "";
  return language === "de" ? mapped.de : language === "tr" ? mapped.tr : mapped.en;
}
