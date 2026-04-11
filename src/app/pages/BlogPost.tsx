import { useParams, Link } from "react-router";
import { ArrowLeft, Clock, Calendar, Quote, User } from "lucide-react";
import { motion, useScroll, useSpring } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { useSEO, SITE_URL } from "../hooks/useSEO";
import { blogPosts } from "../data/blogPosts";
import { SchemaOrg } from "../components/SchemaOrg";
import { FAQItem } from "../components/FAQItem";
import { extractFaqsFromContent } from "../utils/schemaUtils";
import { usePrerender } from "../hooks/usePrerender";

const CALENDLY_URL = "https://calendly.com/hasand9366/30min";

function processInlineStyles(text: string) {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={i} className="font-bold text-[#1C3829] border-b border-[#B8963E]/20">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

export function BlogPost() {
  const { slug } = useParams();
  const { language, t, paths } = useLanguage();
  const { scrollYProgress } = useScroll();
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Find post by localized slug or legacy slug
  const post = blogPosts.find((p) => p.slugDE === slug || p.slugTR === slug || p.slug === slug);

  // Signal ready to prerenderer only if post is found
  usePrerender(!!post);

  const altLang = language === 'de' ? 'tr' : 'de';

  useSEO({
    title: post
      ? language === 'de'
        ? `${post.titleDE} | Doğru Kanzlei Blog`
        : `${post.titleTR} | Doğru Kanzlei Blog`
      : 'Artikel nicht gefunden',
    description: post
      ? (language === 'de' ? post.excerptDE : post.excerptTR)
      : '',
    lang: language,
    ogType: 'article',
    ogImage: post?.image,
    canonical: post 
      ? `${SITE_URL}/${language}/blog/${language === 'de' ? post.slugDE : post.slugTR}` 
      : undefined,
    keywords: post
      ? (language === 'de' ? post.keywordsDE : post.keywordsTR)
      : undefined,
    alternateLang: post ? {
      lang: altLang,
      href: `${SITE_URL}/${altLang}/blog/${altLang === 'de' ? post.slugDE : post.slugTR}`,
    } : undefined,
  });

  if (!post) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 bg-[#F7F5F0]">
        <h2 className="font-serif text-3xl text-[#1C3829] mb-4">
          {language === 'de' ? 'Artikel nicht gefunden' : 'Makale Bulunamadı'}
        </h2>
        <Link to={paths.blog} className="text-[#B8963E] font-bold flex items-center gap-2">
          <ArrowLeft size={16} /> {language === 'de' ? 'Zurück zum Blog' : 'Blog\'a Dön'}
        </Link>
      </div>
    );
  }

  const title = language === 'de' ? post.titleDE : post.titleTR;
  const content = language === 'de' ? post.contentDE : post.contentTR;
  const date = language === 'de' ? post.dateDE : post.dateTR;
  const readTime = language === 'de' ? post.readTimeDE : post.readTimeTR;
  const category = language === 'de' ? post.categoryDE : post.category;

  // Find related posts (same category, excluding current)
  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "datePublished": post.publishedAt,
    "dateModified": post.publishedAt,
    "author": {
      "@type": "Person",
      "name": "Hasan Doğru",
      "jobTitle": "Avukat",
      "worksFor": {
        "@type": "LegalService",
        "name": "Doğru Kanzlei"
      }
    },
    "publisher": {
      "@type": "LegalService",
      "name": "Doğru Kanzlei",
      "url": "https://hasandogru.de"
    },
    "inLanguage": language,
    "about": {
      "@type": "LegalService",
      "name": category
    }
  };

  const explicitFaqs = language === 'de' ? post.faqDE : post.faqTR;
  let faqs: any[] = [];

  if (explicitFaqs && explicitFaqs.length > 0) {
    // 1. Priority: Curated list defined in blogPosts.ts
    faqs = explicitFaqs.map(f => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.answer
      }
    }));
  } else {
    // 2. Try strict extraction (only under FAQ heading)
    const strictFaqs = extractFaqsFromContent(content, 'strict');
    if (strictFaqs.length > 0) {
      faqs = strictFaqs;
    } else {
      // 3. Try heuristic extraction (any appropriate headings)
      const heuristicFaqs = extractFaqsFromContent(content, 'heuristic');
      if (heuristicFaqs.length > 0) {
        faqs = heuristicFaqs;
      }
    }
  }

  // 4. Final step: Only generate schema if we have quality Q&A pairs
  const faqSchema = faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs
  } : null;

  let hasFoundFirstParagraph = false;

  return (
    <div className="bg-[#F7F5F0] min-h-screen">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#8B6E2A] origin-left z-[1001]"
        style={{ scaleX }}
      />
      
      <SchemaOrg data={articleSchema} id="schema-article" />
      {faqSchema && <SchemaOrg data={faqSchema} id="schema-faq" />}
      
      <div style={{ paddingTop: '200px', paddingBottom: '80px', position: 'relative', zIndex: 0 }}>
        <article className="max-w-4xl mx-auto px-6 lg:px-12" style={{ display: 'flex', flexDirection: 'column' }}>
          <div className="mb-10 text-center" style={{ position: 'relative', display: 'block' }}>
            <ol className="inline-flex items-center gap-2 font-sans text-xs tracking-[0.2em] uppercase">
              <li>
                <Link to={paths.home} className="text-[#6a6a6a] hover:text-[#7A5F20] transition-colors">
                  {t("nav_home")}
                </Link>
              </li>
              <li className="text-[#6a6a6a]">/</li>
              <li>
                <Link to={paths.blog} className="text-[#B8963E] font-bold hover:opacity-70 transition-opacity">
                  Blog
                </Link>
              </li>
              <li className="text-[#6a6a6a]">/</li>
              <li className="text-[#1C3829] font-bold truncate max-w-[200px]">{title}</li>
            </ol>
          </div>

          <div className="mb-16 text-center" style={{ position: 'relative', display: 'block' }}>
            {/* Category */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <span className="w-8 h-[1px] bg-[#8B6E2A]" />
              <span className="font-sans text-[11px] font-bold tracking-[0.3em] text-[#7A5F20] uppercase">
                <span lang={language === 'tr' ? 'tr' : 'de'}>{category}</span>
              </span>
              <span className="w-8 h-[1px] bg-[#8B6E2A]" />
            </div>

            {/* Title */}
            <h1 className="font-serif text-[clamp(24px,5vw,48px)] text-[#1C3829] leading-[1.2] font-medium mb-10 tracking-tight text-center" style={{ position: 'relative', display: 'block' }}>
              <span lang={language === 'tr' ? 'tr' : 'de'}>{title}</span>
            </h1>

            {/* Meta information aligned for premium feel */}
            <div className="flex flex-wrap items-center justify-center gap-y-4 gap-x-10 pb-8 border-b border-[#1C3829]/5 text-[#6a6a6a] font-sans text-[13px] tracking-wide" style={{ position: 'relative', display: 'flex' }}>
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#1C3829]/5 flex items-center justify-center">
                  <User size={14} className="text-[#8B6E2A]" />
                </div>
                <span>Av. Hasan Doğru</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Calendar size={15} className="text-[#8B6E2A]" />
                <span>
                  <span lang={language === 'tr' ? 'tr' : 'de'}>{date}</span>
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock size={15} className="text-[#8B6E2A]" />
                <span>
                  <span lang={language === 'tr' ? 'tr' : 'de'}>{readTime}</span>
                </span>
              </div>
            </div>
          </div>

          {/* Hero Image with slight parallax or zoom entrance hint */}
          <motion.div 
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="overflow-hidden mb-20 shadow-2xl relative group rounded-lg"
          >
            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-700 pointer-events-none z-10" />
            <img
              src={post.image}
              alt={title}
              className="w-full h-auto max-h-[70vh] object-contain block mx-auto"
            />
          </motion.div>

          {/* Dual-width content strategy: headers can go wide, text stays readable */}
          <div className="max-w-[720px] mx-auto">
            <div className="prose prose-xl prose-stone max-w-none font-sans text-[#333] leading-[1.9] font-[450] selection:bg-[#B8963E]/20">
              <div lang={language === 'tr' ? 'tr' : 'de'}>
                {content.split('\n').map((line, idx) => {
                  const trimmedLine = line.trim();
                  
                  if (!trimmedLine) return <div key={idx} className="h-6" />;

                  // Handle Horizontal Rules - more decorative
                  if (trimmedLine === '---') {
                    return (
                      <div key={idx} className="flex justify-center items-center gap-4 my-20">
                        <div className="w-16 h-[1px] bg-[#1C3829]/10" />
                        <div className="w-2 h-2 rounded-full border border-[#8B6E2A]" />
                        <div className="w-16 h-[1px] bg-[#1C3829]/10" />
                      </div>
                    );
                  }

                  // Handle Headers (Large & elegant)
                  if (trimmedLine.startsWith('###')) {
                    return (
                      <h3 key={idx} className="font-serif text-2xl md:text-3xl text-[#1C3829] mt-16 mb-8 font-semibold tracking-tight leading-snug">
                        {processInlineStyles(trimmedLine.replace(/###/g, '').trim())}
                      </h3>
                    );
                  }

                  if (trimmedLine.startsWith('##')) {
                    return (
                      <motion.h2 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        key={idx} 
                        className="font-serif text-3xl md:text-4xl text-[#1C3829] mt-24 mb-12 font-medium tracking-tight relative pb-6 border-b border-[#1C3829]/5"
                      >
                        <span className="absolute bottom-0 left-0 w-16 h-1 bg-[#8B6E2A]" />
                        {processInlineStyles(trimmedLine.replace(/##/g, '').trim())}
                      </motion.h2>
                    );
                  }

                  // Handle Blockquotes - elegant & academic
                  if (trimmedLine.startsWith('> ')) {
                    return (
                      <blockquote key={idx} className="relative border-none pl-12 py-10 my-20 italic text-[#1C3829]/90 font-serif text-2xl bg-white shadow-sm ring-1 ring-black/5 rounded-xl pr-10">
                        <Quote className="absolute top-6 left-6 text-[#B8963E]/20 w-12 h-12 -z-10" />
                        {processInlineStyles(trimmedLine.replace('> ', '').trim())}
                      </blockquote>
                    );
                  }

                  // Handle List Items
                  if (trimmedLine.startsWith('- ')) {
                    return (
                      <li key={idx} className="ml-2 pl-4 mb-4 list-none relative text-[#444]">
                        <span className="absolute left-[-1.5rem] top-[0.6rem] w-1.5 h-1.5 rounded-full bg-[#8B6E2A]/60" />
                        <span className="inline-block transition-transform duration-300 hover:translate-x-1">
                          {processInlineStyles(trimmedLine.replace('- ', '').trim())}
                        </span>
                      </li>
                    );
                  }
                  
                  if (/^\d+\./.test(trimmedLine)) {
                     return (
                        <div key={idx} className="ml-2 pl-4 mb-6 relative text-[#444] flex gap-4">
                           <span className="font-serif text-[#8B6E2A] italic text-xl font-bold min-w-[1.5rem]">{trimmedLine.match(/^\d+/)?.[0]}.</span>
                           <span className="pt-0.5">{processInlineStyles(trimmedLine.replace(/^\d+\.\s*/, '').trim())}</span>
                        </div>
                     )
                  }

                  // Drop Cap for first paragraph
                  const isParagraph = !trimmedLine.startsWith('#') && !trimmedLine.startsWith('>') && !trimmedLine.startsWith('-') && !trimmedLine.startsWith('---') && !/^\d+\./.test(trimmedLine);
                  
                  // Skip duplication of Title if it's rendered as H1 in MD
                  if (trimmedLine.startsWith('# ')) return null;

                  if (isParagraph && !hasFoundFirstParagraph) {
                    hasFoundFirstParagraph = true;
                    return (
                      <div key={idx} className="mb-8 last:mb-0 text-lg md:text-xl relative">
                        <style dangerouslySetInnerHTML={{ __html: `
                          .drop-cap-text::first-letter {
                            float: left;
                            font-size: 4.8rem;
                            line-height: 1;
                            padding-right: 0.8rem;
                            padding-top: 0.4rem;
                            color: #1C3829;
                            font-family: serif;
                            font-weight: 700;
                            height: 0.85em;
                          }
                        `}} />
                        <div className="drop-cap-text text-[#222]">
                          {processInlineStyles(trimmedLine)}
                        </div>
                        <div className="clear-both" />
                      </div>
                    );
                  }

                  // Normal Paragraph
                  return (
                    <p key={idx} className="mb-8 last:mb-0 text-[19px] md:text-[21px] text-[#444]">
                      {processInlineStyles(trimmedLine)}
                    </p>
                  );
                })}
              </div>
            </div>

            {/* Explicit FAQ Section */}
            {explicitFaqs && explicitFaqs.length > 0 && (
              <div className="mt-32">
                <div className="flex items-center gap-6 mb-12">
                  <div className="w-16 h-[2px] bg-[#8B6E2A]" />
                  <h3 className="font-serif text-3xl md:text-4xl text-[#1C3829]">
                    {language === 'de' ? 'Häufige Fragen' : <span lang="tr">Sıkça Sorulan Sorular</span>}
                  </h3>
                </div>
                <div className="space-y-6">
                  {explicitFaqs.map((faq, idx) => (
                    <FAQItem key={idx} question={faq.question} answer={faq.answer} />
                  ))}
                </div>
              </div>
            )}

            {/* CTA - More integrated & premium */}
            <div className="mt-32 p-10 md:p-16 bg-[#1C3829] rounded-2xl shadow-xl border-t-8 border-[#8B6E2A] relative overflow-hidden group">
              <div className="absolute top-[-100px] right-[-100px] w-64 h-64 bg-white/5 rounded-full blur-3xl transition-transform duration-1000 group-hover:scale-150" />
              <h3 className="font-serif text-3xl text-white mb-6 relative z-10 tracking-tight">
                {language === 'de' ? 'Haben Sie Fragen zu diesem Thema?' : <span lang="tr">Tanıma ve Tenfiz İşlemleriniz İçin Buradayız</span>}
              </h3>
              <p className="font-sans text-lg text-white/70 mb-10 leading-relaxed relative z-10 max-w-xl">
                <span lang={language === 'tr' ? 'tr' : 'de'}>
                  {language === 'de'
                    ? 'Profitieren Sie von unserer doppelten Zulassung in Deutschland und der Türkei. Kontaktieren Sie uns for eine erste Einschätzung.'
                    : 'Almanya ve Türkiye\'deki çift baro üyeliğimiz ve UYAP tecrübemizle süreci sizin adınıza en hızlı şekilde sonuçlandırıyoruz.'}
                </span>
              </p>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 inline-block bg-[#8B6E2A] text-white font-sans text-[12px] font-bold tracking-[0.2em] uppercase px-12 py-5 rounded-full hover:bg-white hover:text-[#1C3829] transition-all duration-300 shadow-lg active:scale-95"
              >
                {t("nav_cta")}
              </a>
            </div>
          </div>
        </article>

        {/* Related Posts - Full width background for contrast */}
        {related.length > 0 && (
          <div className="bg-white/40 mt-32 py-24 border-t border-[#1C3829]/5">
            <div className="max-w-4xl mx-auto px-6 lg:px-12">
              <h3 className="font-serif text-3xl text-[#1C3829] mb-12 flex items-center gap-4">
                <span className="w-2 h-2 rounded-full bg-[#8B6E2A]" />
                {language === 'de' ? 'Weitere Artikel' : <span lang="tr">İlginizi Çekebilecek Diğer Konular</span>}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {related.map((r) => (
                  <Link key={r.slug} to={paths.blogPost(language === 'de' ? r.slugDE : r.slugTR)} className="group block h-full flex flex-col">
                    <div className="overflow-hidden mb-6 aspect-[16/10] bg-[#e8e4dc] shadow-md group-hover:shadow-xl transition-shadow duration-500 rounded-lg">
                      <img
                        src={r.image}
                        alt={language === 'de' ? r.titleDE : r.titleTR}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <span className="font-sans text-[11px] font-bold tracking-[0.2em] uppercase text-[#7A5F20] mb-3 inline-block">
                      <span lang={language === 'tr' ? 'tr' : 'de'}>
                        {language === 'de' ? r.categoryDE : r.category}
                      </span>
                    </span>
                    <h4 className="font-serif text-2xl text-[#1C3829] group-hover:text-[#B8963E] transition-colors leading-[1.3] grow">
                      <span lang={language === 'tr' ? 'tr' : 'de'}>
                        {language === 'de' ? r.titleDE : r.titleTR}
                      </span>
                    </h4>
                    <div className="mt-6 flex items-center gap-2 text-[#B8963E] font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                      {language === 'de' ? 'Weiterlesen' : 'Tamamını Oku'} <ArrowLeft size={14} className="rotate-180" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
