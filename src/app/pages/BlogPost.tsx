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

const WHATSAPP_URL = "https://wa.me/4917661221210";

function processInlineStyles(text: string) {
  // First split by bold markers
  const boldParts = text.split(/(\*\*.*?\*\*)/g);

  return boldParts.map((boldPart, i) => {
    if (boldPart.startsWith('**') && boldPart.endsWith('**')) {
      return (
        <strong key={`bold-${i}`} className="font-bold border-b border-[#B8963E]/20">
          {boldPart.slice(2, -2)}
        </strong>
      );
    }

    // Now split the non-bold part by link markers [text](url)
    const linkParts = boldPart.split(/(\[.*?\]\(.*?\))/g);

    return linkParts.map((linkPart, j) => {
      const linkMatch = linkPart.match(/^\[(.*?)\]\((.*?)\)$/);
      if (linkMatch) {
        const [, linkText, linkUrl] = linkMatch;
        return (
          <a
            key={`link-${i}-${j}`}
            href={linkUrl}
            target={linkUrl.startsWith('/') ? "_self" : "_blank"}
            rel={linkUrl.startsWith('/') ? "" : "noopener noreferrer"}
            className="text-[#8B6E2A] hover:text-[#1C3829] underline decoration-[#8B6E2A]/30 underline-offset-4 transition-colors font-semibold"
          >
            {linkText}
          </a>
        );
      }
      return linkPart;
    });
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
  const post = blogPosts.find((p) => p.slugDE === slug || p.slugTR === slug || p.slugEN === slug || p.slug === slug);
  const hasEnglishContent = Boolean(post?.slugEN && post?.contentEN?.trim());
  const isAvailable = Boolean(post && (language !== 'en' || hasEnglishContent));

  // Signal ready to prerenderer only if post is found
  usePrerender(isAvailable);

  const altLang = language === 'de' ? 'tr' : 'de';
  const currentCategory = post ? (language === 'de' ? post.categoryDE : language === 'tr' ? post.category : post.categoryEN) : '';
  const currentMetaTitle = post ? (language === 'de' ? post.metaTitleDE : language === 'tr' ? post.metaTitleTR : post.metaTitleEN) : undefined;
  const currentSchemaHeadline = post ? (language === 'de' ? post.schemaHeadlineDE : language === 'tr' ? post.schemaHeadlineTR : post.schemaHeadlineEN) : undefined;
  const currentPublishedAt = post
    ? (language === 'de'
      ? (post.publishedAtDE || post.publishedAt)
      : language === 'tr'
        ? (post.publishedAtTR || post.publishedAt)
        : (post.publishedAtEN || post.publishedAt))
    : undefined;
  const currentModifiedAt = post
    ? (language === 'de'
      ? (post.modifiedAtDE || post.modifiedAt || currentPublishedAt)
      : language === 'tr'
        ? (post.modifiedAtTR || post.modifiedAt || currentPublishedAt)
        : (post.modifiedAtEN || post.modifiedAt || currentPublishedAt))
    : undefined;
  const currentDescription = post
    ? (language === 'de'
      ? (post.metaDescriptionDE || post.excerptDE)
      : language === 'tr'
        ? (post.metaDescriptionTR || post.excerptTR)
        : (post.metaDescriptionEN || post.excerptEN))
    : '';
  const currentImage = post?.slugTR === 'almanya-turkiye-alacak-tahsili-icra'
    ? `${SITE_URL}/assets/debt_collection_law-BB5vtc8j.png`
    : post?.slugTR === 'almanya-turkiye-miras-hukuku-rehberi'
      ? `${SITE_URL}/assets/inheritance_fraud_law-BxjZQ9m1.png`
      : post?.slugTR === 'veraset-ilami-nedir-nasil-alinir' && language !== 'tr'
        ? `${SITE_URL}/assets/inheritance_fraud_law-BxjZQ9m1.png`
      : post?.image;
  const currentArticleAuthor = post?.slugTR === 'almanya-turkiye-alacak-tahsili-icra'
    ? 'Av. Hasan Doğru'
    : post?.slugTR === 'almanya-turkiye-miras-hukuku-rehberi'
      ? 'Av. Hasan Doğru'
      : post?.slugTR === 'veraset-ilami-nedir-nasil-alinir'
        ? 'Av. Hasan Doğru'
      : post?.slugTR === 'tanima-tenfiz-rehberi'
        ? 'Av. Hasan Doğru'
      : language === 'tr' ? 'Av. Hasan Doğru' : 'Hasan Doğru';
  const currentArticleTags = post?.slugTR === 'almanya-turkiye-alacak-tahsili-icra'
    ? language === 'de'
      ? ['Forderungseinzug Türkei', 'Zwangsvollstreckung Türkei', 'Deutschland Türkei Recht']
      : language === 'tr'
        ? ['alacak tahsili', 'icra takibi', 'Almanya Türkiye hukuk']
        : ['debt collection Turkey', 'enforce judgment Turkey', 'Turkish law Germany']
    : post?.slugTR === 'almanya-turkiye-miras-hukuku-rehberi'
      ? language === 'de'
        ? ['Erbschaft Türkei', 'Türkisches Erbrecht', 'Erbschein Türkei', 'Nachlassspaltung']
        : language === 'tr'
          ? ['Miras Hukuku', 'Türkiye Almanya Miras', 'Veraset İlamı', 'Tenkis Davası', 'Muris Muvazaası']
          : ['Turkish Inheritance', 'Turkish Inheritance Law', 'Inheriting Property Turkey', 'Turkish Probate']
      : post?.slugTR === 'veraset-ilami-nedir-nasil-alinir'
        ? language === 'de'
          ? ['Erbschein Türkei', 'Veraset İlamı', 'Türkisches Erbrecht', 'Mavi Kart Erbschein']
          : language === 'tr'
          ? ['Veraset İlamı', 'Mirasçılık Belgesi', 'Miras Hukuku Almanya', 'Mavi Kart Miras']
          : ['Turkish Inheritance Certificate', 'Veraset İlamı', 'Turkish Probate', 'Blue Card Inheritance']
      : post?.slugTR === 'tanima-tenfiz-rehberi'
        ? language === 'de'
          ? ['Anerkennung Scheidung Türkei', 'Tanıma Tenfiz', 'Hinkende Ehe', '§ 107 FamFG']
          : language === 'tr'
            ? ['Tanıma Tenfiz', 'Almanya Boşanma Türkiye', 'MÖHUK', 'Yabancı Mahkeme Kararı']
            : ['Recognition German Divorce Turkey', 'Tanıma Tenfiz', 'Turkish Family Law']
    : undefined;

  useSEO({
    title: isAvailable && post
      ? currentMetaTitle || (language === 'de'
        ? `${post.titleDE} | Doğru Kanzlei Blog`
        : language === 'tr'
          ? `${post.titleTR} | Doğru Kanzlei Blog`
          : `${post.titleEN} | Doğru Kanzlei Blog`)
      : language === 'de' ? 'Artikel nicht gefunden' : language === 'tr' ? 'Makale Bulunamadı' : 'Article Not Found',
    description: isAvailable ? currentDescription : '',
    lang: language,
    ogType: 'article',
    ogImage: isAvailable ? currentImage : undefined,
    canonical: isAvailable && post
      ? `${SITE_URL}/${language}/blog/${language === 'de' ? post.slugDE : language === 'tr' ? post.slugTR : post.slugEN}`
      : undefined,
    keywords: isAvailable && post
      ? (language === 'de' ? post.keywordsDE : language === 'tr' ? post.keywordsTR : post.keywordsEN)
      : undefined,
    alternateLang: isAvailable && post ? {
      lang: language === 'de' ? 'tr' : 'de',
      href: `${SITE_URL}/${language === 'de' ? 'tr' : 'de'}/blog/${language === 'de' ? post.slugTR : post.slugDE}`,
    } : undefined,
    alternateLangs: isAvailable && post ? [
      { lang: 'tr', href: `${SITE_URL}/tr/blog/${post.slugTR}` },
      { lang: 'de', href: `${SITE_URL}/de/blog/${post.slugDE}` },
      { lang: 'de-DE', href: `${SITE_URL}/de/blog/${post.slugDE}` },
      { lang: 'de-CH', href: `${SITE_URL}/de/blog/${post.slugDE}` },
      { lang: 'de-AT', href: `${SITE_URL}/de/blog/${post.slugDE}` },
      ...(hasEnglishContent ? [{ lang: 'en', href: `${SITE_URL}/en/blog/${post.slugEN}` }] : []),
    ] : undefined,
    xDefault: isAvailable && post ? `${SITE_URL}/de/blog/${post.slugDE}` : undefined,
    article: isAvailable && post ? {
      publishedTime: `${currentPublishedAt}T00:00:00+00:00`,
      modifiedTime: `${currentModifiedAt}T00:00:00+00:00`,
      author: currentArticleAuthor,
      section: currentCategory,
      tags: currentArticleTags,
    } : undefined,
    noindex: !isAvailable,
  });

  if (!isAvailable || !post) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 bg-[#F7F5F0]">
        <h2 className="font-serif text-3xl text-[#1C3829] mb-4">
          {language === 'de' ? 'Artikel nicht gefunden' : language === 'tr' ? 'Makale Bulunamadı' : 'Article Not Found'}
        </h2>
        <Link to={paths.blog} className="text-[#B8963E] font-bold flex items-center gap-2">
          <ArrowLeft size={16} /> {language === 'de' ? 'Zurück zum Blog' : language === 'tr' ? 'Blog\'a Dön' : 'Back to Blog'}
        </Link>
      </div>
    );
  }

  const title = language === 'de' ? post.titleDE : language === 'tr' ? post.titleTR : post.titleEN;
  const content = language === 'de' ? post.contentDE : language === 'tr' ? post.contentTR : post.contentEN || '';
  const date = language === 'de' ? post.dateDE : language === 'tr' ? post.dateTR : post.dateEN;
  const readTime = language === 'de' ? post.readTimeDE : language === 'tr' ? post.readTimeTR : post.readTimeEN;
  const category = language === 'de' ? post.categoryDE : language === 'tr' ? post.category : post.categoryEN;

  // Find related posts (same category, excluding current)
  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": currentSchemaHeadline || title,
    "description": currentDescription,
    "image": currentImage?.startsWith('http') ? currentImage : `${SITE_URL}${currentImage}`,
    "datePublished": currentPublishedAt,
    "dateModified": currentModifiedAt,
    "author": {
      "@type": "Person",
      "name": currentArticleAuthor,
      "url": `${SITE_URL}/${language === 'tr' ? 'tr/hakkimizda' : language === 'de' ? 'de/ueber-uns' : 'en/about'}`
    },
    "publisher": {
      "@type": "Organization",
      "name": "Doğru Kanzlei",
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE_URL}/assets/logo-eRLlm_XN.avif`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${SITE_URL}/${language}/blog/${language === 'de' ? post.slugDE : language === 'tr' ? post.slugTR : post.slugEN}`
    },
    "inLanguage": language,
    "about": {
      "@type": "LegalService",
      "name": category
    }
  };

  const explicitFaqs = language === 'de' ? post.faqDE : language === 'tr' ? post.faqTR : post.faqEN;
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
    <div className="bg-[#F7F5F0] min-h-screen overflow-x-hidden">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#8B6E2A] origin-left z-[1001]"
        style={{ scaleX }}
      />
      
      <SchemaOrg data={articleSchema} id="schema-article" />
      {faqSchema && <SchemaOrg data={faqSchema} id="schema-faq" />}
      
      <div style={{ paddingTop: '200px', paddingBottom: '80px', position: 'relative', zIndex: 0 }}>
        <article className="w-full min-w-0 max-w-4xl mx-auto px-6 lg:px-12 box-border" style={{ display: 'flex', flexDirection: 'column' }}>
          <div className="mb-10 text-center min-w-0 max-w-full" style={{ position: 'relative', display: 'block' }}>
            <ol className="inline-flex max-w-full flex-wrap items-center justify-center gap-2 font-sans text-xs tracking-[0.2em] uppercase">
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
              <li className="text-[#1C3829] font-bold max-w-full break-words sm:truncate sm:max-w-[200px]">{title}</li>
            </ol>
          </div>

          <div className="mb-16 text-center min-w-0 max-w-full" style={{ position: 'relative', display: 'block' }}>
            {/* Category */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <span className="w-8 h-[1px] bg-[#8B6E2A]" />
              <span className="font-sans text-[11px] font-bold tracking-[0.3em] text-[#7A5F20] uppercase">
                <span lang={language === 'tr' ? 'tr' : 'de'}>{category}</span>
              </span>
              <span className="w-8 h-[1px] bg-[#8B6E2A]" />
            </div>

            {/* Title */}
            <h1 className="font-serif text-[clamp(21px,6.5vw,48px)] md:text-[clamp(24px,5vw,48px)] text-[#1C3829] leading-[1.2] font-medium mb-10 tracking-tight text-center w-full min-w-0 max-w-full" style={{ position: 'relative', display: 'block', whiteSpace: 'normal', overflowWrap: 'anywhere', wordBreak: 'break-word', hyphens: 'auto', maxWidth: '100%', boxSizing: 'border-box' }}>
              <span className="block max-w-[18ch] sm:max-w-none mx-auto" lang={language === 'tr' ? 'tr' : language === 'de' ? 'de' : 'en'} style={{ whiteSpace: 'normal', overflowWrap: 'anywhere', wordBreak: 'break-word', hyphens: 'auto' }}>{title}</span>
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
          <div className="overflow-hidden mb-20 shadow-2xl relative group rounded-lg">
            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-700 pointer-events-none z-10" />
            <img
              src={post.image}
              alt={title}
              className="w-full h-auto max-h-[70vh] object-contain block mx-auto"
            />
          </div>

          {/* Dual-width content strategy: headers can go wide, text stays readable */}
          <div className="max-w-[720px] mx-auto">
            <div className="prose prose-xl prose-stone max-w-none font-sans text-[#333] leading-[1.9] font-[450] selection:bg-[#B8963E]/20">
              <div lang={language === 'tr' ? 'tr' : 'de'}>
            <div className="prose prose-xl prose-stone max-w-none font-sans text-[#333] leading-[1.9] font-[450] selection:bg-[#B8963E]/20">
              <div lang={language === 'tr' ? 'tr' : 'de'}>
                {(() => {
                  const lines = content.split('\n');
                  const renderedElements = [];
                  let i = 0;
                  let foundFirstParagraph = false;

                  while (i < lines.length) {
                    const line = lines[i];
                    const trimmedLine = line.trim();

                    // 1. Handle Empty Lines
                    if (!trimmedLine) {
                      renderedElements.push(<div key={`empty-${i}`} className="h-6" />);
                      i++;
                      continue;
                    }

                    // 2. Handle Tables
                    if (trimmedLine.startsWith('|')) {
                      const tableRows = [];
                      while (i < lines.length && lines[i].trim().startsWith('|')) {
                        const rowCells = lines[i]
                          .split('|')
                          .filter((_, idx, arr) => idx > 0 && idx < arr.length - 1)
                          .map(cell => cell.trim());
                        
                        // Skip separator rows (|---|---|)
                        if (!rowCells.every(cell => cell.match(/^:?-+:?$/))) {
                          tableRows.push(rowCells);
                        }
                        i++;
                      }

                      if (tableRows.length > 0) {
                        const [header, ...body] = tableRows;
                        renderedElements.push(
                          <div key={`table-${i}`} className="blog-table-wrapper">
                            <table className="blog-table">
                              <thead>
                                <tr>
                                  {header.map((cell, cellIdx) => (
                                    <th key={cellIdx}>
                                      {processInlineStyles(cell)}
                                    </th>
                                  ))}
                                </tr>
                              </thead>
                              <tbody>
                                {body.map((row, rowIdx) => (
                                  <tr key={rowIdx}>
                                    {row.map((cell, cellIdx) => (
                                      <td key={cellIdx}>
                                        {processInlineStyles(cell)}
                                      </td>
                                    ))}
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        );
                      }
                      continue;
                    }

                    // 3. Handle Other Blocks
                    let element = null;

                    // Horizontal Rules
                    if (trimmedLine === '---') {
                      element = (
                        <div key={i} className="flex justify-center items-center gap-4 my-20">
                          <div className="w-16 h-[1px] bg-[#1C3829]/10" />
                          <div className="w-2 h-2 rounded-full border border-[#8B6E2A]" />
                          <div className="w-16 h-[1px] bg-[#1C3829]/10" />
                        </div>
                      );
                    }
                    // Headers
                    else if (trimmedLine.startsWith('###')) {
                      element = (
                        <h3 key={i} className="font-serif text-2xl md:text-3xl text-[#1C3829] mt-16 mb-8 font-semibold tracking-tight leading-snug">
                          {processInlineStyles(trimmedLine.replace(/###/g, '').trim())}
                        </h3>
                      );
                    }
                    else if (trimmedLine.startsWith('##')) {
                      element = (
                        <h2 
                          key={i} 
                          className="font-serif text-3xl md:text-4xl text-[#1C3829] mt-24 mb-12 font-medium tracking-tight relative pb-6 border-b border-[#1C3829]/5"
                        >
                          <span className="absolute bottom-0 left-0 w-16 h-1 bg-[#8B6E2A]" />
                          {processInlineStyles(trimmedLine.replace(/##/g, '').trim())}
                        </h2>
                      );
                    }
                    // Blockquotes
                    else if (trimmedLine.startsWith('> ')) {
                      element = (
                        <blockquote key={i} className="relative border-none pl-12 py-10 my-20 italic text-[#1C3829]/90 font-serif text-2xl bg-white shadow-sm ring-1 ring-black/5 rounded-xl pr-10">
                          <Quote className="absolute top-6 left-6 text-[#B8963E]/20 w-12 h-12 -z-10" />
                          {processInlineStyles(trimmedLine.replace('> ', '').trim())}
                        </blockquote>
                      );
                    }
                    // List Items
                    else if (trimmedLine.startsWith('- ')) {
                      element = (
                        <li key={i} className="ml-2 pl-4 mb-4 list-none relative text-[#444]">
                          <span className="absolute left-[-1.5rem] top-[0.6rem] w-1.5 h-1.5 rounded-full bg-[#8B6E2A]/60" />
                          <span className="inline-block transition-transform duration-300 hover:translate-x-1">
                            {processInlineStyles(trimmedLine.replace('- ', '').trim())}
                          </span>
                        </li>
                      );
                    }
                    // Number Lists
                    else if (/^\d+\./.test(trimmedLine)) {
                      element = (
                        <div key={i} className="ml-2 pl-4 mb-6 relative text-[#444] flex gap-4">
                           <span className="font-serif text-[#8B6E2A] italic text-xl font-bold min-w-[1.5rem]">{trimmedLine.match(/^\d+/)?.[0]}.</span>
                           <span className="pt-0.5">{processInlineStyles(trimmedLine.replace(/^\d+\.\s*/, '').trim())}</span>
                        </div>
                      );
                    }
                    // Skip H1 Titles (already rendered in header)
                    else if (trimmedLine.startsWith('# ')) {
                      i++;
                      continue;
                    }
                    // Paragraphs
                    else {
                      if (!foundFirstParagraph) {
                        foundFirstParagraph = true;
                        element = (
                          <div key={i} className="mb-8 last:mb-0 text-lg md:text-xl relative">
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
                      } else {
                        element = (
                          <p key={i} className="mb-8 last:mb-0 text-[19px] md:text-[21px] text-[#444]">
                            {processInlineStyles(trimmedLine)}
                          </p>
                        );
                      }
                    }

                    renderedElements.push(element);
                    i++;
                  }

                  return renderedElements;
                })()}
              </div>
            </div>
              </div>
            </div>

            {/* Explicit FAQ Section */}
            {explicitFaqs && explicitFaqs.length > 0 && (
              <div className="mt-32">
                <div className="flex items-center gap-6 mb-12">
                  <div className="w-16 h-[2px] bg-[#8B6E2A]" />
                  <h3 className="font-serif text-3xl md:text-4xl text-[#1C3829]">
                    {language === 'de' ? 'Häufige Fragen' : language === 'tr' ? <span lang="tr">Sıkça Sorulan Sorular</span> : 'Frequently Asked Questions'}
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
                <span lang={language === 'tr' ? 'tr' : 'de'}>
                  {language === 'de' 
                    ? (post.ctaTitleDE || 'Haben Sie Fragen zu diesem Thema?') 
                    : language === 'tr'
                      ? (post.ctaTitleTR || 'Tanıma ve Tenfiz İşlemleriniz İçin Buradayız')
                      : (post.ctaTitleEN || 'We Are Here for Your Criminal Defence Needs')}
                </span>
              </h3>
              <p className="font-sans text-lg text-white/70 mb-10 leading-relaxed relative z-10 max-w-xl">
                <span lang={language === 'tr' ? 'tr' : 'de'}>
                  {language === 'de'
                    ? (post.ctaDescriptionDE || 'Profitieren Sie von unserer doppelten Zulassung in Deutschland und der Türkei. Kontaktieren Sie uns for eine erste Einschätzung.')
                    : language === 'tr'
                      ? (post.ctaDescriptionTR || 'Almanya ve Türkiye\'deki çift baro üyeliğimiz ve UYAP tecrübemizle süreci sizin adınıza en hızlı şekilde sonuçlandırıyoruz.')
                      : (post.ctaDescriptionEN || 'Take advantage of our dual admission in Germany and Turkey. Contact us for an initial assessment.')}
                </span>
              </p>
              <a
                href={WHATSAPP_URL}
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
                {language === 'de' ? 'Weitere Artikel' : language === 'tr' ? <span lang="tr">İlginizi Çekebilecek Diğer Konular</span> : 'Other Related Articles'}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {related.map((r) => (
                  <Link key={r.slug} to={paths.blogPost(language === 'de' ? r.slugDE : r.slugTR)} className="group block h-full flex flex-col">
                    <div className="overflow-hidden mb-6 aspect-[16/10] bg-[#e8e4dc] shadow-md group-hover:shadow-xl transition-shadow duration-500 rounded-lg">
                      <img
                        src={r.image}
                        alt={language === 'de' ? r.titleDE : language === 'tr' ? r.titleTR : r.titleEN}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <span className="font-sans text-[11px] font-bold tracking-[0.2em] uppercase text-[#7A5F20] mb-3 inline-block">
                      <span lang={language === 'tr' ? 'tr' : 'de'}>
                        {language === 'de' ? r.categoryDE : language === 'tr' ? r.category : r.categoryEN}
                      </span>
                    </span>
                    <h4 className="font-serif text-2xl text-[#1C3829] group-hover:text-[#B8963E] transition-colors leading-[1.3] grow">
                      <span lang={language === 'tr' ? 'tr' : 'de'}>
                        {language === 'de' ? r.titleDE : language === 'tr' ? r.titleTR : r.titleEN}
                      </span>
                    </h4>
                    <div className="mt-6 flex items-center gap-2 text-[#B8963E] font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                      {language === 'de' ? 'Weiterlesen' : language === 'tr' ? 'Tamamını Oku' : 'Read More'} <ArrowLeft size={14} className="rotate-180" />
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
