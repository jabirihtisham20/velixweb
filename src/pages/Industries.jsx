import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Activity, 
  GraduationCap, 
  Landmark, 
  ShoppingCart, 
  Car, 
  Compass, 
  UtensilsCrossed, 
  Scale, 
  ArrowRight,
  Sparkles,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import FAQAccordion from '../components/FAQAccordion';
import { industriesData, industryFaqs } from '../data/industriesData';

const iconMap = {
  Activity,
  GraduationCap,
  Landmark,
  Building2,
  ShoppingCart,
  Car,
  Compass,
  UtensilsCrossed,
  Scale
};

export default function Industries() {
  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 bg-[#050505] min-h-screen text-[#9CA3AF]">
      <SEO
        title="Web Development Solutions by Industry | VELIX"
        description="VELIX builds websites, ecommerce, software and digital experiences for healthcare, education, finance, real estate, ecommerce, automotive, travel, hospitality and legal businesses."
        canonical="https://velix.com/industries"
      />

      <div className="max-w-7xl mx-auto">
        <Breadcrumbs items={[{ label: 'Industries' }]} />

        {/* HERO */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0066FF]/15 border border-[#0066FF]/30 text-[#00A8FF] text-xs font-semibold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SECTOR EXPERTISE</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6 font-heading">
            Technology Should Fit the Industry,{' '}
            <span className="gradient-text-blue">Not Just the Screen</span>
          </h1>

          <p className="text-base sm:text-lg text-[#9CA3AF] leading-relaxed max-w-3xl mx-auto">
            A healthcare visitor, property investor, law-firm prospect and ecommerce shopper do not make decisions in the same way. VELIX adapts content structure, user journeys, trust signals, integrations and technical architecture to the industry and the customer journey.
          </p>
        </div>

        {/* 9 DETAILED INDUSTRIES SECTIONS */}
        <div className="space-y-16 mb-24">
          {industriesData.map((ind) => {
            const Icon = iconMap[ind.icon] || Building2;
            return (
              <div
                key={ind.id}
                id={ind.id}
                className="p-8 sm:p-12 rounded-3xl bg-[#07090D] border border-[#0066FF]/25 hover:border-[#00A8FF]/40 transition-all shadow-xl"
              >
                <div className="flex flex-col lg:flex-row items-start justify-between gap-6 mb-8 pb-6 border-b border-white/10">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-[#061A35] border border-[#0066FF]/30 text-[#00A8FF] flex items-center justify-center shrink-0">
                      <Icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading">
                        {ind.name}
                      </h2>
                      <p className="text-sm text-[#00A8FF] font-medium mt-0.5">
                        {ind.headline}
                      </p>
                    </div>
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0066FF]/20 border border-[#0066FF]/40 text-[#00A8FF] text-xs font-semibold hover:bg-[#0066FF]/30 transition-all shrink-0"
                  >
                    <span>Discuss {ind.name} Project</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  {/* CHALLENGES */}
                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                    <h3 className="text-sm font-bold text-red-400 uppercase tracking-wider font-mono">
                      The Industry Challenge
                    </h3>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {ind.challenges}
                    </p>
                  </div>

                  {/* OPPORTUNITIES */}
                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                    <h3 className="text-sm font-bold text-emerald-400 uppercase tracking-wider font-mono">
                      The Digital Opportunity
                    </h3>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {ind.opportunities}
                    </p>
                  </div>
                </div>

                {/* SOLUTIONS PROVIDED */}
                <div className="mb-8">
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono mb-4">
                    What VELIX Engineers for this Sector:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {ind.solutions.map((sol, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-200">
                        <CheckCircle2 className="w-4 h-4 text-[#00A8FF] shrink-0 mt-0.5" />
                        <span>{sol}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* RELEVANT SERVICES & TECH */}
                <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs text-gray-400 mr-2">Relevant Services:</span>
                    {ind.relevantServices.map((rel, rIdx) => (
                      <Link
                        key={rIdx}
                        to={rel.path}
                        className="text-xs px-3 py-1 rounded-lg bg-[#0066FF]/15 border border-[#0066FF]/30 text-[#00A8FF] hover:bg-[#0066FF]/25 transition-all"
                      >
                        {rel.name}
                      </Link>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span>Stack:</span>
                    <span className="text-gray-300">{ind.techSolutions.join(', ')}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* INDUSTRY FAQS */}
        <section className="mb-24 border-t border-white/10 pt-16">
          <FAQAccordion
            title="Industry Solutions FAQs"
            subtitle="QUESTIONS & ANSWERS"
            items={industryFaqs}
          />
        </section>

        {/* CTA */}
        <section className="rounded-3xl p-10 sm:p-14 bg-gradient-to-br from-[#061A35] to-[#07090D] border border-[#0066FF]/30 text-center relative overflow-hidden shadow-[0_0_50px_rgba(0,102,255,0.2)]">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 font-heading">
            Tell Us How Your Industry Works. We Will Design Around It.
          </h2>
          <p className="text-base text-gray-300 max-w-2xl mx-auto mb-8">
            Book a free consultation with VELIX. Tell us what you are building, what is getting in the way, and what success should look like. We typically respond within 24 hours.
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
