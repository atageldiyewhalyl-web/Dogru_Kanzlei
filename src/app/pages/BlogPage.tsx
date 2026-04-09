import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { useSEO, SITE_URL } from "../hooks/useSEO";
import { blogPosts } from "../data/blogPosts";
import { usePrerender } from "../hooks/usePrerender";

export function BlogPage() {
  const { language, t, paths } = useLanguage();
  usePrerender();

  useSEO({
    title: language === 'de'
      ? 'Blog & Aktuelles | Avukat Hasan Doğru'
      : 'Blog & Güncel | Avukat Hasan Doğru',
    description: language === 'de'
      ? 'Rechtliche Entwicklungen und Fachartikel zu türkischem und deutschem Recht. Informieren Sie sich über aktuelle Themen im Familienrecht, Erbrecht und mehr.'
      : 'Türk ve Alman hukuku alanında güncel gelişmeler ve uzman makaleleri. Aile hukuku, miras hukuku ve daha fazlası hakkında bilgi edinin.',
    lang: language,
    canonical: `${SITE_URL}/${language}/blog`,
    alternateLang: {
      lang: language === 'de' ? 'tr' : 'de',
      href: `${SITE_URL}/${language === 'de' ? 'tr' : 'de'}/blog`,
    },
  });

  return (
    <div className="bg-[#FDFCFB] pt-40 pb-20">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-10">
            <div className="w-10 h-[1px] bg-[#8B6E2A]" />
            <span className="font-sans text-[10px] font-bold tracking-[0.2em] text-[#7A5F20] uppercase">
              {t("blog_badge")}
            </span>
          </div>
          <h1 className="font-serif text-[clamp(40px,5vw,64px)] text-[#1C3829] leading-[1.1] font-medium">
            {t("blog_title")}
            <br />
            <em className="italic font-normal">{t("blog_subtitle")}</em>
          </h1>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((post, idx) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="text-left"
            >
              <Link to={paths.blogPost(post.slug)} className="group block no-justify">
                {/* Image */}
                <div className="overflow-hidden mb-6 h-[220px] bg-[#e8e4dc]">
                  <img
                    src={post.image}
                    alt={language === 'de' ? post.titleDE : post.titleTR}
                    loading="lazy"
                    className="w-full h-full object-cover block transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>

                {/* Meta */}
                <div className="flex items-center gap-4 mb-3 text-left">
                  <span className="font-sans text-[10px] font-bold tracking-[0.14em] uppercase text-[#7A5F20]">
                    <span lang={language === 'tr' ? 'tr' : 'de'}>
                      {language === 'de' ? post.categoryDE : post.category}
                    </span>
                  </span>
                  <span className="w-1 h-1 rounded-full bg-[#d4cfc6] inline-block" />
                  <span className="font-sans text-xs font-light text-[#aaa8a0]">
                    <span lang={language === 'tr' ? 'tr' : 'de'}>
                      {language === 'de' ? post.dateDE : post.dateTR}
                    </span>
                  </span>
                </div>

                {/* Title */}
                <h2 className="font-serif text-[22px] font-semibold text-[#1C3829] leading-[1.3] mb-3 group-hover:text-[#7A5F20] transition-colors text-left no-justify">
                  <span lang={language === 'tr' ? 'tr' : 'de'}>
                    {language === 'de' ? post.titleDE : post.titleTR}
                  </span>
                </h2>

                {/* Excerpt */}
                <p className="font-sans text-sm font-light text-[#6a6a6a] leading-[1.7] mb-5 text-left no-justify">
                  <span lang={language === 'tr' ? 'tr' : 'de'}>
                    {language === 'de' ? post.excerptDE : post.excerptTR}
                  </span>
                </p>

                {/* Read more */}
                <div className="flex items-center gap-2 font-sans text-xs font-bold tracking-[0.1em] uppercase text-[#1C3829] group-hover:text-[#7A5F20] transition-colors">
                  <span>{t("blog_read_more")}</span>
                  <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
