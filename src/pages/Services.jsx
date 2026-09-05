import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Sparkles, 
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
  ChevronRight
} from 'lucide-react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { servicesData } from '../data/servicesData';

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

export default function Services() {
  const prioritySlugs = [
    'custom-web-development',
    'ecommerce-development',
    'react-js-development',
    'seo',
    'wordpress-development'
  ];

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 bg-[#050505] min-h-screen text-[#9CA3AF]">
      <SEO
        title="Web Development Services in Islamabad & Pakistan | VELIX"
        description="Explore VELIX web development services including custom websites, React, Next.js, ecommerce, WordPress, SEO, web apps, software, mobile apps, AI integrations, cloud and ongoing support."
        canonical="https://velix.com/services"
      />

      <div className="max-w-7xl mx-auto">
        <Breadcrumbs items={[{ label: 'Services Overview' }]} />

        {/* HERO */}
        <section className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0066FF]/15 border border-[#0066FF]/30 text-[#00A8FF] text-xs font-semibold tracking-widest uppercase mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>END-TO-END DIGITAL SERVICES</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6 font-heading">
            One Team for Web Development,{' '}
            <span className="gradient-text-blue">Software and Digital Growth</span>
          </h1>

          <div className="space-y-4 text-base sm:text-lg text-[#9CA3AF] leading-relaxed max-w-3xl mx-auto">
            <p>
              VELIX provides end-to-end digital services for businesses that need more than a one-off website. We can help you plan the product, design the experience, build the technology, connect third-party systems, improve search visibility and support the platform after launch.
            </p>
            <p className="text-sm sm:text-base text-gray-400">
              Our core focus is custom web development, ecommerce, React.js development, WordPress and SEO. Around those services, we provide Next.js development, web applications, UI/UX, APIs, mobile apps, software development, CMS development, Shopify, AI integration, dedicated teams, cloud solutions, hosting, digital marketing, maintenance and performance optimization.
            </p>
          </div>
        </section>

        {/* ALL 19 SERVICES GRID */}
        <section className="mb-24">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
            <div>
              <h2 className="text-2xl font-bold text-white font-heading">
                All 19 Dedicated Service Solutions
              </h2>
              <p className="text-xs sm:text-sm text-gray-400 mt-1">
                Each service features dedicated engineering architecture, pricing ranges, and technical scope.
              </p>
            </div>
            <span className="text-xs font-mono text-[#00A8FF] bg-[#0066FF]/15 px-3 py-1 rounded-full">
              19 SERVICES
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map((svc) => {
              const Icon = iconMap[svc.icon] || Globe;
              const isPriority = prioritySlugs.includes(svc.slug);

              return (
                <div
                  key={svc.slug}
                  className={`p-8 rounded-3xl flex flex-col justify-between transition-all duration-300 group relative overflow-hidden shadow-lg ${
                    isPriority
                      ? 'bg-[#07090D] border border-[#0066FF]/40 hover:border-[#00A8FF] shadow-[0_0_30px_rgba(0,102,255,0.15)]'
                      : 'bg-[#07090D]/80 border border-white/10 hover:border-[#0066FF]/40'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-[#061A35] border border-[#0066FF]/30 text-[#00A8FF] flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>
                      {isPriority && (
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#00A8FF] px-2.5 py-0.5 rounded bg-[#0066FF]/20 border border-[#0066FF]/30">
                          Priority Service
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00A8FF] transition-colors font-heading">
                      {svc.title}
                    </h3>

                    <p className="text-sm text-gray-300 leading-relaxed mb-6">
                      {svc.shortDesc}
                    </p>

                    <div className="space-y-1.5 mb-6 text-xs text-gray-400 border-t border-white/5 pt-4">
                      {svc.whatIncludes.slice(0, 3).map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 truncate">
                          <div className="w-1 h-1 rounded-full bg-[#00A8FF]" />
                          <span className="truncate">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    to={`/services/${svc.slug}`}
                    className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-[#00A8FF] group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>View Scope, Process & Pricing</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </section>

        {/* NOT SURE WHICH SERVICE CTA */}
        <section className="rounded-3xl p-10 sm:p-14 bg-gradient-to-br from-[#061A35] to-[#07090D] border border-[#0066FF]/30 text-center relative overflow-hidden shadow-[0_0_50px_rgba(0,102,255,0.2)]">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 font-heading">
            Not Sure Which Service Fits Your Project?
          </h2>
          <p className="text-base text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Book a free consultation. We will review the goal, users, features, budget and timeline, then recommend the simplest approach that can deliver the outcome you need. We typically respond within 24 hours.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#0066FF] to-[#00A8FF] text-white font-semibold shadow-[0_0_30px_rgba(0,102,255,0.5)] hover:scale-105 transition-all"
            >
              <span>Book a Free Consultation</span>
            </Link>
            <Link
              to="/contact"
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
