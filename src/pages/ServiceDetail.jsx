import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Sparkles, 
  Calendar, 
  ShieldCheck, 
  Clock, 
  Code2, 
  Cpu, 
  Globe, 
  Layout, 
  ShoppingBag, 
  Palette, 
  Database, 
  Zap, 
  Search, 
  Smartphone, 
  Terminal, 
  FileText, 
  Store, 
  Users, 
  Cloud, 
  TrendingUp,
  ChevronRight
} from 'lucide-react';
import { servicesData } from '../data/servicesData';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import FAQAccordion from '../components/FAQAccordion';

const iconMap = {
  Globe,
  Code2,
  Cpu,
  Layers,
  ShoppingBag,
  Layout,
  Palette,
  Database,
  ShieldCheck,
  Zap,
  Search,
  Smartphone,
  Terminal,
  FileText,
  Store,
  Users,
  Cloud,
  TrendingUp,
  Sparkles
};

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const IconComponent = iconMap[service.icon] || Globe;

  // Build JSON-LD Service Schema
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': service.title,
    'description': service.metaDescription,
    'provider': {
      '@type': 'Organization',
      'name': 'VELIX',
      'url': 'https://velix.com',
      'telephone': '+923254229971',
      'email': 'velixwebstudio@gmail.com',
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Gulberg Greens',
        'addressRegion': 'Islamabad',
        'addressCountry': 'Pakistan'
      }
    },
    'areaServed': [
      { '@type': 'AdministrativeArea', 'name': 'Islamabad' },
      { '@type': 'AdministrativeArea', 'name': 'Rawalpindi' },
      { '@type': 'Country', 'name': 'Pakistan' },
      { '@type': 'Country', 'name': 'United Kingdom' },
      { '@type': 'Country', 'name': 'United States' },
      { '@type': 'Country', 'name': 'United Arab Emirates' }
    ]
  };

  const related = service.relatedServices
    ? servicesData.filter((s) => service.relatedServices.includes(s.slug))
    : [];

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 bg-[#050505] min-h-screen text-[#9CA3AF]">
      <SEO
        title={service.seoTitle}
        description={service.metaDescription}
        canonical={`https://velix.com/services/${service.slug}`}
        schema={serviceSchema}
      />

      <div className="max-w-7xl mx-auto">
        <Breadcrumbs
          items={[
            { label: 'Services', path: '/services' },
            { label: service.title }
          ]}
        />

        {/* HERO SECTION */}
        <section className="mb-20 pt-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0066FF]/15 border border-[#0066FF]/30 text-[#00A8FF] text-xs font-semibold tracking-widest uppercase mb-6">
            <IconComponent className="w-3.5 h-3.5" />
            <span>{service.primaryKeyword.toUpperCase()}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-8 font-heading max-w-5xl">
            {service.heroHeading}
          </h1>

          <p className="text-lg sm:text-xl text-[#9CA3AF] leading-relaxed max-w-4xl mb-10">
            {service.heroSubtitle}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              to={`/contact?service=${service.slug}`}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#0066FF] to-[#00A8FF] text-white font-semibold flex items-center gap-2 shadow-[0_0_30px_rgba(0,102,255,0.4)] hover:shadow-[0_0_45px_rgba(0,168,255,0.6)] hover:scale-[1.02] transition-all duration-300"
            >
              <span>Book a Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to={`/contact?service=${service.slug}`}
              className="px-8 py-4 rounded-xl bg-[#07090D] border border-[#0066FF]/30 hover:border-[#00A8FF] text-white font-semibold hover:bg-white/5 transition-all duration-300"
            >
              Talk to Our Team
            </Link>
          </div>
        </section>

        {/* WHO THIS SERVICE IS FOR */}
        <section className="mb-20">
          <div className="border-t border-white/10 pt-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 font-heading">
              Who This Service Is For
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {service.whoIsItFor.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#07090D]/80 border border-[#0066FF]/20 hover:border-[#00A8FF]/40 transition-all flex items-start gap-4"
                >
                  <div className="w-6 h-6 rounded-lg bg-[#0066FF]/20 text-[#00A8FF] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <p className="text-sm sm:text-base text-gray-200 font-medium">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHAT OUR SERVICE INCLUDES */}
        <section className="mb-20">
          <div className="border-t border-white/10 pt-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 font-heading">
              What Our {service.title} Service Includes
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {service.whatIncludes.map((inc, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#07090D]/80 border border-[#0066FF]/20 hover:border-[#00A8FF]/40 transition-all flex flex-col justify-between"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#0066FF]/20 text-[#00A8FF] flex items-center justify-center mb-4 text-xs font-mono font-bold">
                    0{idx + 1}
                  </div>
                  <h3 className="text-base font-semibold text-white">
                    {inc}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY THE APPROACH MATTERS */}
        <section className="mb-20">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#061A35]/60 to-[#07090D] border border-[#0066FF]/30 shadow-[0_0_40px_rgba(0,102,255,0.15)] relative overflow-hidden">
            <div className="max-w-4xl relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0066FF]/20 border border-[#0066FF]/30 text-[#00A8FF] text-xs font-semibold tracking-wider uppercase mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>ARCHITECTURAL INTEGRITY</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-heading">
                Why the VELIX Approach Matters
              </h2>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                {service.whyItMatters}
              </p>
            </div>
          </div>
        </section>

        {/* HOW VELIX DELIVERS THE WORK (6-STEP PROCESS) */}
        <section className="mb-20">
          <div className="border-t border-white/10 pt-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 font-heading">
              How VELIX Delivers the Work
            </h2>
            <p className="text-[#9CA3AF] mb-8 max-w-3xl text-sm sm:text-base">
              A structured, transparent engineering process designed to eliminate surprises and maintain momentum from discovery through launch.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.howDelivered.map((step, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#07090D]/80 border border-[#0066FF]/20 hover:border-[#00A8FF]/40 transition-all flex flex-col"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#0066FF]/20 text-[#00A8FF] flex items-center justify-center font-bold text-sm mb-4">
                    0{idx + 1}
                  </div>
                  <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-medium">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TECHNOLOGY STACK */}
        {service.technologies && service.technologies.length > 0 && (
          <section className="mb-20">
            <div className="border-t border-white/10 pt-14">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 font-heading">
                Technology & Delivery
              </h2>
              <div className="flex flex-wrap gap-3">
                {service.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 rounded-xl bg-[#07090D] border border-[#0066FF]/30 text-gray-200 text-sm font-medium hover:border-[#00A8FF] transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* INDICATIVE PRICING SECTION */}
        {service.pricing && (
          <section className="mb-20">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#07090D]/90 border border-[#0066FF]/30 shadow-xl">
              <div className="flex items-center gap-3 mb-4 text-[#00A8FF]">
                <Calendar className="w-5 h-5" />
                <h3 className="text-xl font-bold text-white font-heading">
                  Indicative Pricing & Scope
                </h3>
              </div>
              <p className="text-base sm:text-lg text-white font-medium mb-3">
                {service.pricing.text}
              </p>
              <p className="text-xs sm:text-sm text-gray-400 italic">
                {service.pricing.note}
              </p>
              <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between flex-wrap gap-4">
                <Link
                  to="/pricing"
                  className="text-sm text-[#00A8FF] hover:underline font-semibold flex items-center gap-1.5"
                >
                  <span>View Full Agency Pricing Table</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  to={`/contact?service=${service.slug}`}
                  className="px-6 py-2.5 rounded-xl bg-[#0066FF]/20 border border-[#0066FF]/40 text-[#00A8FF] hover:bg-[#0066FF]/30 text-sm font-semibold transition-all"
                >
                  Request Custom Quotation
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* FAQS */}
        {service.faqs && service.faqs.length > 0 && (
          <section className="mb-20">
            <div className="border-t border-white/10 pt-14">
              <FAQAccordion
                title={`${service.title} FAQs`}
                subtitle="SEARCH & CLIENT QUESTIONS"
                items={service.faqs}
              />
            </div>
          </section>
        )}

        {/* RELATED SERVICES / INTERNAL LINKING */}
        {related.length > 0 && (
          <section className="mb-20">
            <div className="border-t border-white/10 pt-14">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 font-heading">
                Related Services
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {related.map((rel) => {
                  const RelIcon = iconMap[rel.icon] || Globe;
                  return (
                    <Link
                      key={rel.slug}
                      to={`/services/${rel.slug}`}
                      className="p-6 rounded-2xl bg-[#07090D]/80 border border-[#0066FF]/20 hover:border-[#00A8FF]/50 transition-all group flex flex-col justify-between"
                    >
                      <div>
                        <div className="w-10 h-10 rounded-xl bg-[#061A35] border border-[#0066FF]/30 text-[#00A8FF] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <RelIcon className="w-5 h-5" />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#00A8FF] transition-colors">
                          {rel.title}
                        </h3>
                        <p className="text-xs text-gray-400 line-clamp-2">
                          {rel.shortDesc}
                        </p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1.5 text-xs text-[#00A8FF] font-medium">
                        <span>Explore Service</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* FINAL CONVERSION CTA */}
        <section className="rounded-3xl p-10 sm:p-14 bg-gradient-to-br from-[#061A35] to-[#07090D] border border-[#0066FF]/30 text-center relative overflow-hidden shadow-[0_0_50px_rgba(0,102,255,0.2)]">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 font-heading">
            Need {service.title} Planned Around Your Business?
          </h2>
          <p className="text-base text-gray-300 max-w-2xl mx-auto mb-8">
            Book a free consultation with VELIX. Tell us what you are building, what is getting in the way, and what success should look like. We typically respond within 24 hours.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to={`/contact?service=${service.slug}`}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#0066FF] to-[#00A8FF] text-white font-semibold shadow-[0_0_30px_rgba(0,102,255,0.5)] hover:scale-105 transition-all"
            >
              <span>Book a Free Consultation</span>
            </Link>
            <Link
              to={`/contact?service=${service.slug}`}
              className="px-8 py-4 rounded-xl bg-[#07090D] border border-[#0066FF]/40 text-white font-semibold hover:bg-white/5 transition-all"
            >
              Talk to Our Team
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
