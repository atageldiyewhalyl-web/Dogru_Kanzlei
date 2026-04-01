import { useParams, Link } from "react-router";
import { services } from "../data/services";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { useSEO, SITE_URL } from "../hooks/useSEO";

export function ServiceDetail() {
  const { id } = useParams();
  const { language, t, paths } = useLanguage();
  const service = services.find((s) => s.id === id);

  const servicesSegment = language === 'de' ? 'leistungen' : 'hizmetler';
  const altServicesSegment = language === 'de' ? 'hizmetler' : 'leistungen';

  useSEO({
    title: service
      ? language === 'de'
        ? `${service.title} | Avukat Hasan Doğru`
        : `${service.titleTR} | Avukat Hasan Doğru`
      : 'Seite nicht gefunden',
    description: service
      ? (language === 'de' ? service.descriptionDE : service.description)
      : '',
    lang: language,
    canonical: service ? `${SITE_URL}/${language}/${servicesSegment}/${service.id}` : undefined,
    alternateLang: service ? {
      lang: language === 'de' ? 'tr' : 'de',
      href: `${SITE_URL}/${language === 'de' ? 'tr' : 'de'}/${altServicesSegment}/${service.id}`,
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
                <Icon size={40} className="text-[#B8963E]" />
              </div>
              <div className="flex-grow">
                <span className="font-sans text-[12px] font-bold tracking-[0.25em] uppercase text-[#B8963E] block mb-4">
                  {altTitle}
                </span>
                <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#1C3829] font-medium leading-[1.1] tracking-tight">
                  {title}
                </h1>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-24">
            {/* Main Content Area */}
            <div className="lg:col-span-8">
              <div className="mb-16">
                <p className="font-serif text-2xl md:text-3xl text-[#1C3829]/90 leading-relaxed italic mb-12 font-light border-l-2 border-[#B8963E] pl-8">
                  {description}
                </p>

                <div className="prose prose-xl prose-serif max-w-none text-[#3a3a3a] leading-[1.8] font-light whitespace-pre-line mb-20 space-y-8">
                  {content || (language === 'de'
                    ? 'In diesem Bereich bieten wir umfassende Rechtsberatung und Vertretung.'
                    : 'Bu alanda kapsamlı hukuki danışmanlık ve temsil hizmetleri sunmaktayız.')}
                </div>
              </div>

              {/* Modern Expertise Cards */}
              <div className="bg-white/50 backdrop-blur-sm border border-[#1C3829]/5 p-10 md:p-16 mb-20">
                <div className="flex items-center gap-4 mb-12">
                   <div className="w-12 h-[1px] bg-[#B8963E]" />
                   <h3 className="font-serif text-3xl text-[#1C3829]">
                    {language === 'de' ? 'Unsere Expertise' : 'Uzmanlık Alanlarımız'}
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {detail.split(' · ').map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-6 bg-white shadow-sm border border-[#1C3829]/5 rounded-sm group hover:border-[#B8963E]/30 transition-colors">
                      <CheckCircle2 size={24} className="text-[#B8963E] mt-0.5 flex-shrink-0 opacity-80 group-hover:opacity-100 transition-opacity" />
                      <div>
                        <h4 className="font-sans text-[15px] font-bold text-[#1C3829] mb-1 tracking-wide">
                          {item}
                        </h4>
                        <p className="font-sans text-[13px] text-[#6a6a6a] leading-relaxed">
                          {language === 'de' ? 'Professionelle Fall- und Prozessführung' : 'Profesyonel Dava ve Süreç Takibi'}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Navigation - Inter-service connectivity */}
              <div className="flex flex-col sm:flex-row border-t border-[#1C3829]/10 pt-16 gap-8 sm:gap-0 sm:justify-between items-center group">
                <Link 
                  to={paths.service(prevService.id)}
                  className="flex flex-col items-center sm:items-start group/btn max-w-[200px]"
                >
                  <span className="font-sans text-[10px] font-bold tracking-widest text-[#6a6a6a] uppercase mb-3 flex items-center gap-2 group-hover/btn:text-[#B8963E] transition-colors">
                    <ArrowLeft size={12} /> {language === 'de' ? 'VORHERIGE' : 'ÖNCEKİ'}
                  </span>
                  <span className="font-serif text-lg text-[#1C3829] text-center sm:text-left leading-tight group-hover/btn:text-[#B8963E] transition-colors">
                    {language === 'de' ? prevService.title : prevService.titleTR}
                  </span>
                </Link>

                <div className="hidden sm:block w-[1px] h-12 bg-[#1C3829]/10" />

                <Link 
                  to={paths.service(nextService.id)}
                  className="flex flex-col items-center sm:items-end group/btn max-w-[200px] text-right"
                >
                  <span className="font-sans text-[10px] font-bold tracking-widest text-[#6a6a6a] uppercase mb-3 flex items-center gap-2 group-hover/btn:text-[#B8963E] transition-colors">
                    {language === 'de' ? 'NÄCHSTE' : 'SONRAKİ'} <ArrowRight className="w-3 h-3" />
                  </span>
                  <span className="font-serif text-lg text-[#1C3829] text-center sm:text-right leading-tight group-hover/btn:text-[#B8963E] transition-colors">
                    {language === 'de' ? nextService.title : nextService.titleTR}
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
                    {language === 'de' ? 'Weitere Fachgebiete' : 'Diğer Uzmanlıklar'}
                  </h4>
                  <div className="space-y-3">
                    {services.filter(s => s.id !== id).map((s) => (
                      <Link
                        key={s.id}
                        to={paths.service(s.id)}
                        className="group flex items-center justify-between p-5 border border-[#1C3829]/5 hover:border-[#B8963E]/30 hover:bg-[#F7F5F0] transition-all rounded-sm"
                      >
                        <div className="flex items-center gap-4">
                          <s.icon size={18} className="text-[#6a6a6a] group-hover:text-[#B8963E] transition-colors" />
                          <span className="font-sans text-[13px] font-bold tracking-wide text-[#4a4a4a] group-hover:text-[#1C3829] transition-colors">
                            {language === 'de' ? s.title : s.titleTR}
                          </span>
                        </div>
                        <ArrowRight size={14} className="text-[#B8963E]/0 group-hover:text-[#B8963E]/100 transition-all -translate-x-2 group-hover:translate-x-0" />
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Modern CTA Card */}
                <div className="relative overflow-hidden bg-[#1C3829] p-10 text-white shadow-2xl">
                  {/* Decorative background accent */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#B8963E]/10 rounded-full -mr-16 -mt-16 blur-3xl" />
                  
                  <div className="relative z-10">
                    <h5 className="font-serif text-2xl mb-4 leading-tight">
                      {language === 'de' ? 'Brauchen Sie rechtliche Hilfe?' : 'Hukuki Yardıma mı İhtiyacınız Var?'}
                    </h5>
                    <p className="font-sans text-[14px] text-white/70 mb-10 leading-relaxed font-light">
                      {language === 'de'
                        ? 'Kontaktieren Sie uns, damit wir Ihren Fall prüfen und eine professionelle Einschätzung geben können.'
                        : 'Dosyanızı incelememiz ve profesyonel görüş sunmamız için bizimle iletişime geçin.'}
                    </p>
                    <Link
                      to={paths.contact}
                      className="group flex items-center justify-center gap-3 w-full py-5 bg-[#B8963E] text-white font-sans text-[11px] font-bold tracking-[0.2em] uppercase transition-all hover:bg-[#a68635]"
                    >
                      {language === 'de' ? 'ZUM KONTAKT' : 'BİZE ULAŞIN'}
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
