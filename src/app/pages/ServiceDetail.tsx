import { useParams, Link } from "react-router";
import { services } from "../data/services";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
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
        ? `${service.title} | Rechtsanwalt Hasan Doğru`
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

  const Icon = service.icon;
  const title = language === 'de' ? service.title : service.titleTR;
  const description = language === 'de' ? service.descriptionDE : service.description;
  const detail = language === 'de' ? service.detailDE : service.detail;
  const content = language === 'de' ? (service.contentDE || service.content) : service.content;

  return (
    <div className="bg-[#F7F5F0] pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-12">
          <ol className="flex items-center gap-2 font-sans text-xs tracking-widest uppercase">
            <li>
              <Link to={paths.home} className="text-[#6a6a6a] hover:text-[#B8963E] transition-colors">
                {t("nav_home")}
              </Link>
            </li>
            <li className="text-[#6a6a6a]">/</li>
            <li>
              <Link to={paths.services} className="text-[#B8963E] font-bold hover:opacity-70 transition-opacity">
                {t("nav_services")}
              </Link>
            </li>
            <li className="text-[#6a6a6a]">/</li>
            <li className="text-[#1C3829] font-bold">{title}</li>
          </ol>
        </nav>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-6 mb-8">
            <div className="w-16 h-16 bg-[#1C3829] flex items-center justify-center rounded-lg">
              <Icon size={32} className="text-[#B8963E]" />
            </div>
            <div>
              <span className="font-sans text-[11px] font-bold tracking-widest uppercase text-[#B8963E] block mb-2">
                {language === 'de' ? service.titleTR : service.title}
              </span>
              <h1 className="font-serif text-4xl md:text-5xl text-[#1C3829] font-medium leading-tight">
                {title}
              </h1>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12">
            <div className="lg:col-span-2">
              <p className="font-sans text-lg text-[#1C3829] leading-relaxed mb-8 italic font-medium">
                {description}
              </p>

              <div className="prose prose-lg text-[#4a4a4a] font-sans font-normal leading-relaxed mb-12 whitespace-pre-line">
                {content || (language === 'de'
                  ? 'In diesem Bereich bieten wir umfassende Rechtsberatung und Vertretung.'
                  : 'Bu alanda kapsamlı hukuki danışmanlık ve temsil hizmetleri sunmaktayız.')}
              </div>

              <div className="bg-[#1C3829] p-8 md:p-12 text-white border-l-4 border-[#B8963E]">
                <h3 className="font-serif text-2xl mb-6 text-white">
                  {language === 'de' ? 'Unsere Expertise in diesem Bereich' : 'Bu Alandaki Uzmanlığımız'}
                </h3>
                <ul className="space-y-4">
                  {detail.split(' · ').map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <CheckCircle2 size={20} className="text-[#B8963E] mt-1 flex-shrink-0" />
                      <span className="text-white/80 font-sans">
                        {item} - {language === 'de' ? 'Professionelle Fall- und Prozessführung' : 'Profesyonel Dava ve Süreç Takibi'}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white p-8 border border-black/5 shadow-sm sticky top-32">
                <h4 className="font-serif text-xl text-[#1C3829] mb-6">
                  {language === 'de' ? 'Weitere Fachgebiete' : 'Diğer Uzmanlıklar'}
                </h4>
                <div className="space-y-4">
                  {services.filter(s => s.id !== id).map((s) => (
                    <Link
                      key={s.id}
                      to={paths.service(s.id)}
                      className="group flex items-center justify-between p-4 border border-black/5 hover:border-[#B8963E]/30 hover:bg-[#F7F5F0] transition-all"
                    >
                      <span className="font-sans text-sm font-medium text-[#1C3829] group-hover:text-[#B8963E] transition-colors">
                        {language === 'de' ? s.title : s.titleTR}
                      </span>
                      <s.icon size={16} className="text-[#6a6a6a] group-hover:text-[#B8963E]" />
                    </Link>
                  ))}
                </div>

                <div className="mt-12 p-6 bg-[#B8963E] text-white">
                  <h5 className="font-serif text-lg mb-2">
                    {language === 'de' ? 'Brauchen Sie rechtliche Hilfe?' : 'Hukuki Yardıma mı İhtiyacınız Var?'}
                  </h5>
                  <p className="font-sans text-xs text-white/80 mb-6 leading-relaxed">
                    {language === 'de'
                      ? 'Kontaktieren Sie uns, damit wir Ihren Fall prüfen und eine professionelle Einschätzung geben können.'
                      : 'Dosyanızı incelememiz ve profesyonel görüş sunmamız için bizimle iletişime geçin.'}
                  </p>
                  <Link
                    to={paths.contact}
                    className="block text-center py-3 bg-white text-[#1C3829] font-sans text-[11px] font-bold tracking-widest uppercase hover:bg-[#F7F5F0] transition-colors"
                  >
                    {language === 'de' ? 'KONTAKT' : 'BİZE ULAŞIN'}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
