import { useState } from "react";
import { useParams, Link } from "react-router";
import { services } from "../data/services";
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { useSEO, SITE_URL } from "../hooks/useSEO";

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-[#1C3829]/10 bg-white hover:border-[#8B6E2A]/30 transition-colors overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 text-left flex items-center justify-between group"
      >
        <span className="font-serif text-lg text-[#1C3829] group-hover:text-[#8B6E2A] transition-colors">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-[#8B6E2A]"
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 pb-6 font-sans text-[15px] text-[#6a6a6a] leading-relaxed border-t border-[#1C3829]/5 pt-4">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const renderFormattedContent = (text: string) => {
  const paragraphs = text.split('\n\n');
  return paragraphs.map((para, i) => {
    const lines = para.split('\n');
    return (
      <div key={i} className={i < paragraphs.length - 1 ? "mb-8 flex flex-col" : "flex flex-col"}>
        {lines.map((line, j) => {
          const trimmed = line.trim();
          if (!trimmed) return null;

          // Headers
          const isHeaderLine = 
            trimmed.includes('Sizin için neler') ||
            trimmed.includes('Was wir für Sie') ||
            trimmed.includes('Warum Doğru') ||
            trimmed.includes('Neden Doğru');

          if (isHeaderLine) {
            return (
              <h3 key={j} className="font-serif text-[24px] md:text-[28px] text-[#1C3829] mt-8 mb-4 border-b border-[#8B6E2A]/20 pb-3 self-start">
                {trimmed}
              </h3>
            );
          }

          // Bold list items: lines starting with '-' or '•'
          if (trimmed.startsWith('- ') || trimmed.startsWith('• ') || trimmed.startsWith('-') || trimmed.startsWith('•')) {
            const content = trimmed.replace(/^[-•]\s*/, '');
            return (
              <div key={j} className="font-sans font-bold text-[17px] md:text-[19px] text-[#1C3829] mt-6 mb-2 flex items-start gap-3">
                <span className="text-[#8B6E2A] shrink-0 mt-0.5">—</span>
                <span>{content}</span>
              </div>
            );
          }

          // Default text
          return (
            <p key={j} className={`font-light text-[#3a3a3a] leading-[1.8] ${j > 0 ? "mt-2" : ""}`}>
              {trimmed}
            </p>
          );
        })}
      </div>
    );
  });
};

export function ServiceDetail() {
  const { id } = useParams();
  const { language, t, paths } = useLanguage();
  
  // Find service by localized slug
  const service = services.find((s) => s.slugDE === id || s.slugTR === id);

  const servicesSegment = language === 'de' ? 'leistungen' : 'hizmetler';
  const altLang = language === 'de' ? 'tr' : 'de';
  const altServicesSegment = altLang === 'de' ? 'leistungen' : 'hizmetler';

  useSEO({
    title: service
      ? language === 'de'
        ? service.seoTitleDE || `${service.title} | Avukat Hasan Doğru`
        : service.seoTitleTR || `${service.titleTR} | Avukat Hasan Doğru`
      : 'Seite nicht gefunden',
    description: service
      ? language === 'de'
        ? service.seoDescriptionDE || service.descriptionDE
        : service.seoDescriptionTR || service.description
      : '',
    lang: language,
    canonical: service 
      ? `${SITE_URL}/${language}/${servicesSegment}/${language === 'de' ? service.slugDE : service.slugTR}` 
      : undefined,
    alternateLang: service ? {
      lang: altLang,
      href: `${SITE_URL}/${altLang}/${altServicesSegment}/${altLang === 'de' ? service.slugDE : service.slugTR}`,
    } : undefined,
  });

  if (!service) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 bg-[#F7F5F0]">
        <h2 className="font-serif text-3xl text-[#1C3829] mb-4">
          {language === 'de' ? 'Leistung nicht gefunden' : 'Hizmet Bulunamadı'}
        </h2>
        <Link to={paths.home} className="text-[#B8963E] font-bold flex items-center gap-2">
          <ArrowLeft size={16} /> {language === 'de' ? 'Zur Startseite' : 'Ana Sayfaya Dön'}
        </Link>
      </div>
    );
  }

  const currentIndex = services.findIndex((s) => s.id === id);
  const nextService = services[(currentIndex + 1) % services.length];
  const prevService = services[(currentIndex - 1 + services.length) % services.length];

  const Icon = service.icon;
  const title = language === 'de' ? service.title : service.titleTR;
  const altTitle = language === 'de' ? service.titleTR : service.title;
  const description = language === 'de' ? service.descriptionDE : service.description;
  const detail = language === 'de' ? service.detailDE : service.detail;
  const content = language === 'de' ? (service.contentDE || service.content) : service.content;

  return (
    <div className="bg-[#F7F5F0] min-h-screen pt-32 pb-24">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Breadcrumb - Elevated */}
        <nav aria-label="Breadcrumb" className="mb-16">
          <ol className="flex items-center gap-3 font-sans text-[10px] sm:text-xs tracking-[0.2em] uppercase">
            <li>
              <Link to={paths.home} className="text-[#6a6a6a] hover:text-[#B8963E] transition-colors">
                {t("nav_home")}
              </Link>
            </li>
            <li className="text-[#B8963E]/40">/</li>
            <li>
              <Link to={paths.services} className="text-[#6a6a6a] hover:text-[#B8963E] transition-colors">
                {t("nav_services")}
              </Link>
            </li>
            <li className="text-[#B8963E]/40">/</li>
            <li className="text-[#1C3829] font-bold tracking-widest">{title}</li>
          </ol>
        </nav>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header Section - High Prestige */}
          <div className="relative mb-20">
            <div className="flex flex-col md:flex-row md:items-end gap-8 pb-12 border-b border-[#1C3829]/10">
              <div className="w-20 h-20 bg-[#1C3829] flex items-center justify-center rounded-sm shadow-xl shrink-0">
                <Icon size={40} className="text-[#8B6E2A]" />
              </div>
              <div className="flex-grow">
                <span className="font-sans text-[12px] font-bold tracking-[0.25em] uppercase text-[#7A5F20] block mb-4">
                  <span lang={language === 'de' ? 'tr' : 'de'}>{altTitle}</span>
                </span>
                <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#1C3829] font-medium leading-[1.1] tracking-tight">
                  <span lang={language === 'tr' ? 'tr' : 'de'}>{title}</span>
                </h1>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-24">
            {/* Main Content Area */}
            <div className="lg:col-span-8">
              <div className="mb-16">
                <p className="font-serif text-2xl md:text-3xl text-[#1C3829]/90 leading-relaxed italic mb-12 font-light border-l-2 border-[#8B6E2A] pl-8">
                  <span lang={language === 'tr' ? 'tr' : 'de'}>{description}</span>
                </p>

                <div className="prose-container prose-xl prose-serif max-w-none text-[#3a3a3a] leading-[1.8] font-light mb-20 space-y-8">
                  <span lang={language === 'tr' ? 'tr' : 'de'}>
                    {renderFormattedContent(content || (language === 'de'
                      ? 'In diesem Bereich bieten wir umfassende Rechtsberatung und Vertretung.'
                      : 'Bu alanda kapsamlı hukuki danışmanlık ve temsil hizmetleri sunmaktayız.'))}
                  </span>
                </div>
              </div>

              {/* Modern Expertise Cards */}
              <div className="bg-white/50 backdrop-blur-sm border border-[#1C3829]/5 p-10 md:p-16 mb-20">
                <div className="flex items-center gap-4 mb-12">
                   <div className="w-12 h-[1px] bg-[#8B6E2A]" />
                   <h3 className="font-serif text-3xl text-[#1C3829]">
                    {language === 'de' 
                      ? (service.expertiseTitleDE || 'Unsere Expertise') 
                      : (service.expertiseTitleTR || <span lang="tr">Uzmanlık Alanlarımız</span>)}
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {detail.split(' · ').map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-6 bg-white shadow-sm border border-[#1C3829]/5 rounded-sm group hover:border-[#8B6E2A]/30 transition-colors">
                      <CheckCircle2 size={24} className="text-[#8B6E2A] mt-0.5 flex-shrink-0 opacity-80 group-hover:opacity-100 transition-opacity" />
                      <div>
                        <h4 className="font-sans text-[15px] font-bold text-[#1C3829] mb-1 tracking-wide">
                          <span lang={language === 'tr' ? 'tr' : 'de'}>{item}</span>
                        </h4>
                        <p className="font-sans text-[13px] text-[#6a6a6a] leading-relaxed">
                          {language === 'de' 
                            ? (service.id === 'familienrecht' ? 'Individuelle Beratung vor Ort' : 'Professionelle Fall- und Prozessführung') 
                            : (service.id === 'familienrecht' ? <span lang="tr">Bireysel ve Yerinde Danışmalık</span> : <span lang="tr">Profesyonel Dava ve Süreç Takibi</span>)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

               {/* FAQ Accordion Section */}
              {((language === 'de' && service.faqDE) || (language === 'tr' && service.faqTR)) && (
                <div className="mb-20">
                  <div className="flex items-center gap-4 mb-12">
                    <div className="w-12 h-[1px] bg-[#8B6E2A]" />
                    <h3 className="font-serif text-3xl text-[#1C3829]">
                      {language === 'de' ? 'Häufige Fragen' : <span lang="tr">Sıkça Sorulan Sorular</span>}
                    </h3>
                  </div>
                  <div className="space-y-4">
                    {(language === 'de' ? service.faqDE : service.faqTR).map((faq: any, idx: number) => (
                      <FAQItem key={idx} question={faq.question} answer={faq.answer} />
                    ))}
                  </div>
                </div>
              )}

              {/* Bottom Navigation - Inter-service connectivity */}
              <div className="flex flex-col sm:flex-row border-t border-[#1C3829]/10 pt-16 gap-8 sm:gap-0 sm:justify-between items-center group">
                <Link 
                  to={paths.service(prevService.id)}
                  className="flex flex-col items-center sm:items-start group/btn max-w-[200px]"
                >
                  <span className="font-sans text-[10px] font-bold tracking-widest text-[#6a6a6a] uppercase mb-3 flex items-center gap-2 group-hover/btn:text-[#7A5F20] transition-colors">
                    <ArrowLeft size={12} /> {language === 'de' ? 'VORHERIGE' : <span lang="tr">ÖNCEKİ</span>}
                  </span>
                  <span className="font-serif text-lg text-[#1C3829] text-center sm:text-left leading-tight group-hover/btn:text-[#7A5F20] transition-colors">
                    <span lang={language === 'tr' ? 'tr' : 'de'}>{language === 'de' ? prevService.title : prevService.titleTR}</span>
                  </span>
                </Link>

                <div className="hidden sm:block w-[1px] h-12 bg-[#1C3829]/10" />

                <Link 
                  to={paths.service(nextService.id)}
                  className="flex flex-col items-center sm:items-end group/btn max-w-[200px] text-right"
                >
                  <span className="font-sans text-[10px] font-bold tracking-widest text-[#6a6a6a] uppercase mb-3 flex items-center gap-2 group-hover/btn:text-[#7A5F20] transition-colors">
                    {language === 'de' ? 'NÄCHSTE' : <span lang="tr">SONRAKİ</span>} <ArrowRight className="w-3 h-3" />
                  </span>
                  <span className="font-serif text-lg text-[#1C3829] text-center sm:text-right leading-tight group-hover/btn:text-[#7A5F20] transition-colors">
                    <span lang={language === 'tr' ? 'tr' : 'de'}>{language === 'de' ? nextService.title : nextService.titleTR}</span>
                  </span>
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="sticky top-32 space-y-10">
                {/* Other Services List */}
                <div className="bg-white p-10 shadow-sm border border-[#1C3829]/5">
                  <h4 className="font-serif text-2xl text-[#1C3829] mb-8 pb-4 border-b border-[#1C3829]/5">
                    {language === 'de' ? 'Weitere Fachgebiete' : <span lang="tr">Diğer Uzmanlıklar</span>}
                  </h4>
                  <div className="space-y-3">
                    {services.filter(s => s.id !== id).map((s) => (
                      <Link
                        key={s.id}
                        to={paths.service(s.id)}
                        className="group flex items-center justify-between p-5 border border-[#1C3829]/5 hover:border-[#8B6E2A]/30 hover:bg-[#F7F5F0] transition-all rounded-sm"
                      >
                        <div className="flex items-center gap-4">
                          <s.icon size={18} className="text-[#6a6a6a] group-hover:text-[#7A5F20] transition-colors" />
                          <span className="font-sans text-[13px] font-bold tracking-wide text-[#4a4a4a] group-hover:text-[#1C3829] transition-colors">
                            <span lang={language === 'tr' ? 'tr' : 'de'}>{language === 'de' ? s.title : s.titleTR}</span>
                          </span>
                        </div>
                        <ArrowRight size={14} className="text-[#8B6E2A]/0 group-hover:text-[#8B6E2A]/100 transition-all -translate-x-2 group-hover:translate-x-0" />
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Modern CTA Card */}
                <div className="relative overflow-hidden bg-[#1C3829] p-10 text-white shadow-2xl">
                  {/* Decorative background accent */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#8B6E2A]/10 rounded-full -mr-16 -mt-16 blur-3xl" />
                  
                  <div className="relative z-10">
                    <h5 className="font-serif text-2xl mb-4 leading-tight">
                      {language === 'de' ? 'Brauchen Sie rechtliche Hilfe?' : <span lang="tr">Hukuki Yardıma mı İhtiyacınız Var?</span>}
                    </h5>
                    <p className="font-sans text-[14px] text-white/70 mb-10 leading-relaxed font-light">
                      <span lang={language === 'tr' ? 'tr' : 'de'}>
                        {language === 'de'
                          ? 'Kontaktieren Sie uns, damit wir Ihren Fall prüfen und eine professionelle Einschätzung geben können.'
                          : 'Dosyanızı incelememiz ve profesyonel görüş sunmamız için bizimle iletişime geçin.'}
                      </span>
                    </p>
                    <Link
                      to={paths.contact}
                      className="group flex items-center justify-center gap-3 w-full py-5 bg-[#8B6E2A] text-white font-sans text-[11px] font-bold tracking-[0.2em] uppercase transition-all hover:bg-[#7A5F20]"
                    >
                      {language === 'de' ? 'ZUM KONTAKT' : <span lang="tr">BİZE ULAŞIN</span>}
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
