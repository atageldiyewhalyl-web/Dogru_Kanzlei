// Service page -> blog post links.
//
// Every service page previously linked *out* to nothing: the blog linked to the
// services, but never the other way round, so the article cluster passed no
// internal link equity back to the pages that actually convert.
//
// Values are the canonical `slug` of a post (the `slug` field, not slugDE /
// slugTR / slugEN). `paths.blogPost()` resolves the canonical slug to the right
// per-language URL and falls back to the blog index when a language has no
// translation, so these are safe to reference from all three locales.
export const serviceRelatedPosts: Record<string, string[]> = {
  familienrecht: [
    "bosanma-rehberi-tuerkiye",
    "scheidung-tuerkei-dauer-kosten",
    "unterhalt-tuerkisches-recht",
  ],
  "tanima-ve-tenfiz": [
    // Cluster pillar first.
    "almanyada-bosandim-turkiyede-ne-olur",
    "tanima-tenfiz-scheidung-tuerkei-anerkennung-2026",
    "deutsches-urteil-tuerkei-vollstrecken-tanima-tenfiz",
  ],
  erbrecht: [
    "almanya-turkiye-miras-hukuku-rehberi",
    "veraset-ilami-nedir-nasil-alinir",
    "erbschaftsteuer-tuerkei-doppelbesteuerung-vermeiden",
  ],
  "vollmacht-apostille": [
    "vollmacht-fuer-die-tuerkei-leitfaden",
    "tuerkische-vollmacht-lichtbild-formfehler",
    "tapu-vollmacht-immobilie-tuerkei-uebertragung",
  ],
  strafrecht: [
    "turkiyede-hakkimda-yakalama-karari-var-mi",
    "tuerkisches-strafrecht-anwalt-deutschland",
    "drogendelikt-tuerkei-strafverteidigung-deutschland",
  ],
  "mavi-kart": [
    "mavi-kart-haklari-rehberi",
    "mavi-kart-miras-gayrimenkul-haklari",
    "hagb-einbuergerung-deutschland-tuerkei",
  ],
  immobilienrecht: [
    "gayrimenkul-haklari",
    "muris-muvazaasi-erbrecht-tuerkei-tapu-iptal-klage",
    "izale-i-suyu-paylasim-davasi",
  ],
  "icra-ve-iflas": [
    "zwangsvollstreckung-tuerkei-forderungen-aus-deutschland",
    "almanya-turkiye-alacak-tahsili-icra",
    "deutsches-urteil-tuerkei-vollstrecken-tanima-tenfiz",
  ],
  "forderungsvollstreckung-tuerkei": [
    "almanya-turkiye-alacak-tahsili-icra",
    "deutsches-urteil-tuerkei-vollstrecken-tanima-tenfiz",
    "zwangsvollstreckung-tuerkei-forderungen-aus-deutschland",
  ],
  migrationsrecht: [
    "hagb-einbuergerung-deutschland-tuerkei",
    "mavi-kart-haklari-rehberi",
    "tuerkischer-notar-deutschland",
  ],
  "rechtsgutachten-tuerkisches-recht": [
    "almanya-turkiye-miras-hukuku-rehberi",
    "tanima-tenfiz-scheidung-tuerkei-anerkennung-2026",
    "muris-muvazaasi-erbrecht-tuerkei-tapu-iptal-klage",
  ],
};
