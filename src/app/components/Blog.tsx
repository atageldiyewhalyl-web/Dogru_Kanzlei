import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { useLanguage } from "../context/LanguageContext";
import { blogPosts } from "../data/blogPosts";

export function Blog() {
  const { t, language, paths } = useLanguage();

  return (
    <section
      id="blog"
      className="hidden md:block"
      style={{
        background: "#ffffff",
        padding: "100px 32px",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Section header */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: 64,
            flexWrap: "wrap",
            gap: 24,
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <div style={{ width: 32, height: 1, background: "#B8963E" }} />
              <span
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "0.22em",
                  color: "#B8963E",
                  textTransform: "uppercase",
                }}
              >
                {t("blog_badge")}
              </span>
            </div>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(32px, 3.5vw, 44px)",
                fontWeight: 500,
                color: "#1C3829",
                lineHeight: 1.15,
                margin: 0,
              }}
            >
              {t("blog_title")}
              <br />
              <em style={{ fontStyle: "italic", fontWeight: 400 }}>{t("blog_subtitle")}</em>
            </h2>
          </div>

          <Link
            to={paths.blog}
            style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#1C3829",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: 8,
              borderBottom: "1px solid #1C3829",
              paddingBottom: 2,
              transition: "color 0.2s, border-color 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = "#B8963E";
              (e.currentTarget as HTMLElement).style.borderColor = "#B8963E";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color = "#1C3829";
              (e.currentTarget as HTMLElement).style.borderColor = "#1C3829";
            }}
          >
            {t("blog_read_more")}
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Blog cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 32,
          }}
          className="blog-grid"
        >
          {blogPosts.map((post) => (
            <article key={post.slug}>
              <Link to={paths.blogPost(post.slug)} className="group block" style={{ textDecoration: "none" }}>
                {/* Image */}
                <div
                  style={{
                    overflow: "hidden",
                    marginBottom: 24,
                    height: 220,
                    background: "#e8e4dc",
                  }}
                >
                  <img
                    src={post.image}
                    alt={language === 'de' ? post.titleDE : post.titleTR}
                    loading="lazy"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                      transition: "transform 0.5s ease",
                    }}
                    className="group-hover:scale-[1.04]"
                  />
                </div>

                {/* Meta */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    marginBottom: 14,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Lato', sans-serif",
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "#B8963E",
                    }}
                  >
                    {language === 'de' ? post.categoryDE : post.category}
                  </span>
                  <span
                    style={{
                      width: 4,
                      height: 4,
                      borderRadius: "50%",
                      background: "#d4cfc6",
                      display: "inline-block",
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "'Lato', sans-serif",
                      fontSize: 12,
                      fontWeight: 300,
                      color: "#aaa8a0",
                    }}
                  >
                    {language === 'de' ? post.dateDE : post.dateTR}
                  </span>
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 22,
                    fontWeight: 600,
                    color: "#1C3829",
                    lineHeight: 1.3,
                    marginBottom: 12,
                    transition: "color 0.2s",
                  }}
                  className="group-hover:!text-[#B8963E]"
                >
                  {language === 'de' ? post.titleDE : post.titleTR}
                </h3>

                <p
                  style={{
                    fontFamily: "'Lato', sans-serif",
                    fontSize: 14,
                    fontWeight: 300,
                    color: "#6a6a6a",
                    lineHeight: 1.7,
                    marginBottom: 20,
                  }}
                >
                  {language === 'de' ? post.excerptDE : post.excerptTR}
                </p>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    fontFamily: "'Lato', sans-serif",
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#1C3829",
                  }}
                >
                  <span>{t("blog_read_more")}</span>
                  <ArrowRight size={13} />
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .blog-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 600px) {
          .blog-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
