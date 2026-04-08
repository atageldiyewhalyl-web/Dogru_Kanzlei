import { useParams, Link } from "react-router";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { useSEO, SITE_URL } from "../hooks/useSEO";
import { blogPosts } from "../data/blogPosts";

const CALENDLY_URL = "https://calendly.com/hasand9366/30min";

function processInlineStyles(text: string) {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={i} className="font-bold text-[#1C3829]">
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
  
  // Find post by localized slug or legacy slug
  const post = blogPosts.find((p) => p.slugDE === slug || p.slugTR === slug || p.slug === slug);

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

  return (
    <div className="bg-[#F7F5F0] pt-32 pb-20">
      <article className="max-w-3xl mx-auto px-6 lg:px-12">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 font-sans text-xs tracking-widest uppercase">
            <li>
              <Link to={paths.home} className="text-[#6a6a6a] hover:text-[#7A5F20] transition-colors">
                {t("nav_home")}
              </Link>
            </li>
            <li className="text-[#6a6a6a]">/</li>
            <li>
              <Link to={paths.blog} className="text-[#7A5F20] font-bold hover:opacity-70 transition-opacity">
                Blog
              </Link>
            </li>
            <li className="text-[#6a6a6a]">/</li>
            <li className="text-[#1C3829] font-bold truncate max-w-[200px]">{title}</li>
          </ol>
        </nav>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Category */}
          <span className="font-sans text-[10px] font-bold tracking-[0.2em] text-[#7A5F20] uppercase">
            <span lang={language === 'tr' ? 'tr' : 'de'}>{category}</span>
          </span>

          {/* Title */}
          <h1 className="font-serif text-[clamp(32px,4vw,48px)] text-[#1C3829] leading-[1.15] font-medium mt-4 mb-6">
            <span lang={language === 'tr' ? 'tr' : 'de'}>{title}</span>
          </h1>

          {/* Meta */}
          <div className="flex items-center gap-6 mb-10 text-[#6a6a6a] font-sans text-sm">
            <div className="flex items-center gap-2">
              <Calendar size={14} className="text-[#7A5F20]" />
              <span>
                <span lang={language === 'tr' ? 'tr' : 'de'}>{date}</span>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={14} className="text-[#7A5F20]" />
              <span>
                <span lang={language === 'tr' ? 'tr' : 'de'}>{readTime}</span>
              </span>
            </div>
          </div>

          {/* Hero Image */}
          <div className="overflow-hidden mb-12 h-[300px] md:h-[400px] bg-[#e8e4dc]">
            <img
              src={post.image}
              alt={title}
              className="w-full h-full object-cover block"
            />
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none font-sans text-[#3a3a3a] leading-[1.8] font-medium">
            <span lang={language === 'tr' ? 'tr' : 'de'}>
              {content.split('\n').map((line, idx) => {
                const trimmedLine = line.trim();
                
                if (!trimmedLine) return <div key={idx} className="h-4" />;

                // Handle Headers
                if (trimmedLine.startsWith('###')) {
                  return (
                    <h3 key={idx} className="font-serif text-2xl text-[#1C3829] mt-10 mb-4">
                      {processInlineStyles(trimmedLine.replace('###', '').trim())}
                    </h3>
                  );
                }

                // Handle List Items
                if (trimmedLine.startsWith('- ')) {
                  return (
                    <li key={idx} className="ml-6 mb-2 list-disc">
                      {processInlineStyles(trimmedLine.replace('- ', '').trim())}
                    </li>
                  );
                }

                // Normal Paragraph
                return (
                  <p key={idx} className="mb-4">
                    {processInlineStyles(trimmedLine)}
                  </p>
                );
              })}
            </span>
          </div>

          {/* CTA */}
          <div className="mt-16 p-8 md:p-12 bg-[#1C3829] border-l-4 border-[#8B6E2A]">
            <h3 className="font-serif text-2xl text-white mb-4">
              {language === 'de' ? 'Haben Sie Fragen zu diesem Thema?' : <span lang="tr">Bu konuda sorularınız mı var?</span>}
            </h3>
            <p className="font-sans text-white/60 mb-6 leading-relaxed">
              <span lang={language === 'tr' ? 'tr' : 'de'}>
                {language === 'de'
                  ? 'Kontaktieren Sie uns for eine rechtliche Einschätzung Ihres Falles. Wir helfen Ihnen gerne weiter.'
                  : 'Davanızın profesyonel değerlendirmesi için bizimle iletişime geçin. Size yardımcı olmaktan memnuniyet duyarız.'}
              </span>
            </p>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#8B6E2A] text-white font-sans text-[11px] font-bold tracking-[0.15em] uppercase px-8 py-4 hover:bg-[#7A5F20] transition-colors"
            >
              {t("nav_cta")}
            </a>
          </div>
        </motion.div>
      </article>

      {/* Related Posts */}
      {related.length > 0 && (
        <div className="max-w-3xl mx-auto px-6 lg:px-12 mt-20">
          <h3 className="font-serif text-2xl text-[#1C3829] mb-8">
            {language === 'de' ? 'Weitere Artikel' : <span lang="tr">Diğer Makaleler</span>}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {related.map((r) => (
              <Link key={r.slug} to={paths.blogPost(r.slug)} className="group block">
                <div className="overflow-hidden mb-4 h-[160px] bg-[#e8e4dc]">
                  <img
                    src={r.image}
                    alt={language === 'de' ? r.titleDE : r.titleTR}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <span className="font-sans text-[10px] font-bold tracking-[0.14em] uppercase text-[#7A5F20]">
                  <span lang={language === 'tr' ? 'tr' : 'de'}>
                    {language === 'de' ? r.categoryDE : r.category}
                  </span>
                </span>
                <h4 className="font-serif text-lg text-[#1C3829] mt-2 group-hover:text-[#7A5F20] transition-colors leading-snug">
                  <span lang={language === 'tr' ? 'tr' : 'de'}>
                    {language === 'de' ? r.titleDE : r.titleTR}
                  </span>
                </h4>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
