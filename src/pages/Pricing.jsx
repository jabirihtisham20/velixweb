import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Check, 
  ArrowRight, 
  HelpCircle, 
  ShieldCheck, 
  Clock, 
  Layers, 
  Sparkles,
  Info
} from 'lucide-react';
import { pricingData, priceFactors } from '../data/pricingData';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import FAQAccordion from '../components/FAQAccordion';

export default function Pricing() {
  const [activeTab, setActiveTab] = useState('All');

  const categories = ['All', 'WordPress Websites', 'Custom Web Development', 'Ecommerce Development', 'React / Next.js Development', 'SEO Services (Monthly Retainers)'];

  const filteredPricing = activeTab === 'All'
    ? pricingData
    : pricingData.filter((p) => p.service === activeTab);

  const pricingFaqs = [
    {
      question: 'How much does a typical business website cost in Pakistan?',
      answer: 'At VELIX, essential WordPress business websites start from PKR 75,000, custom bespoke websites from PKR 150,000, ecommerce storefronts from PKR 180,000, and React/Next.js platforms from PKR 200,000. Final costs depend on your unique scope, features, and integrations.'
    },
    {
      question: 'Why do you provide indicative price ranges rather than fixed packages?',
      answer: 'Fixed low-cost packages usually force clients into generic templates with hidden charges later. We publish realistic starting ranges so you can verify budget alignment, but we always price the final project against a detailed written scope.'
    },
    {
      question: 'Are payments milestone-based?',
      answer: 'Yes. Most projects are structured into milestone-based payments (e.g. Discovery & Architecture, UI/UX Approval, Staging Development Review, and Final Production Launch Handover).'
    },
    {
      question: 'Do your prices include domain and hosting?',
      answer: 'We recommend clients hold direct ownership of their domains and hosting accounts (e.g. Vercel, AWS, Hostinger), while VELIX handles complete infrastructure configuration and deployment.'
    }
  ];

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 bg-[#050505] min-h-screen text-[#9CA3AF]">
      <SEO
        title="Website Development Pricing in Pakistan | VELIX"
        description="See indicative VELIX website development and SEO pricing for WordPress, custom websites, ecommerce and React/Next.js projects. Final quotes are based on scope."
        canonical="https://velix.com/pricing"
      />

      <div className="max-w-7xl mx-auto">
        <Breadcrumbs items={[{ label: 'Pricing' }]} />

        {/* HERO */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0066FF]/15 border border-[#0066FF]/30 text-[#00A8FF] text-xs font-semibold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TRANSPARENT COMMERCIAL PRICING</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6 font-heading">
            Transparent Starting Prices,{' '}
            <span className="gradient-text-blue">Scope-Based Proposals</span>
          </h1>

          <p className="text-base sm:text-lg text-[#9CA3AF] leading-relaxed">
            Website pricing varies because a five-page business site, an ecommerce store, and a custom web application solve completely different problems. VELIX publishes practical starting points so you can decide whether the likely investment fits your budget before spending time on a detailed proposal.
          </p>
        </div>

        {/* CATEGORY FILTER TABS */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === cat
                  ? 'bg-gradient-to-r from-[#0066FF] to-[#00A8FF] text-white shadow-[0_0_20px_rgba(0,102,255,0.4)]'
                  : 'bg-[#07090D] border border-[#0066FF]/20 text-gray-400 hover:text-white hover:border-[#00A8FF]/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* PRICING SECTIONS */}
        <div className="space-y-20 mb-24">
          {filteredPricing.map((item, idx) => (
            <div key={idx} className="border-t border-white/10 pt-12">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                <div>
                  <span className="text-xs font-mono font-bold text-[#00A8FF] tracking-wider uppercase">
                    {item.category}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading mt-1">
                    {item.service}
                  </h2>
                  <p className="text-sm text-gray-400 max-w-2xl mt-2">
                    {item.description}
                  </p>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#00A8FF] hover:underline shrink-0"
                >
                  <span>Request Custom Quotation</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* 3 TIERS GRID */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {item.tiers.map((tier, tIdx) => (
                  <div
                    key={tIdx}
                    className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative overflow-hidden ${
                      tier.popular
                        ? 'bg-[#07090D] border-2 border-[#00A8FF] shadow-[0_0_40px_rgba(0,102,255,0.25)]'
                        : 'bg-[#07090D]/80 border border-[#0066FF]/20 hover:border-[#00A8FF]/40'
                    }`}
                  >
                    {tier.popular && (
                      <div className="absolute top-0 right-0 px-4 py-1 bg-gradient-to-r from-[#0066FF] to-[#00A8FF] text-white text-[10px] font-bold tracking-widest uppercase rounded-bl-xl">
                        MOST POPULAR
                      </div>
                    )}

                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {tier.name}
                      </h3>
                      <div className="text-2xl sm:text-3xl font-extrabold text-[#00A8FF] font-heading mb-3">
                        {tier.price}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-400 mb-6">
                        <Clock className="w-3.5 h-3.5 text-gray-500" />
                        <span>Timeline: {tier.timeline}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-300 mb-6 leading-relaxed border-b border-white/5 pb-6">
                        {tier.scope}
                      </p>

                      {/* FEATURES LIST */}
                      <ul className="space-y-3 mb-8">
                        {tier.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2.5 text-xs text-gray-300">
                            <Check className="w-4 h-4 text-[#00A8FF] shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      to={`/contact?service=${item.service.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                      className={`w-full py-3.5 rounded-xl font-semibold text-xs sm:text-sm text-center transition-all ${
                        tier.popular
                          ? 'bg-gradient-to-r from-[#0066FF] to-[#00A8FF] text-white shadow-[0_0_20px_rgba(0,102,255,0.4)] hover:scale-[1.02]'
                          : 'bg-[#061A35] border border-[#0066FF]/40 text-white hover:bg-[#0066FF]/20'
                      }`}
                    >
                      Choose {tier.name}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* WHAT CHANGES THE PRICE */}
        <section className="mb-24">
          <div className="rounded-3xl p-8 sm:p-12 bg-[#07090D]/90 border border-[#0066FF]/25 shadow-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0066FF]/20 border border-[#0066FF]/30 text-[#00A8FF] text-xs font-semibold tracking-wider uppercase mb-4">
              <Info className="w-3.5 h-3.5" />
              <span>SCOPING TRANSPARENCY</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 font-heading">
              What Factors Change the Project Price?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {priceFactors.map((factor, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02]">
                  <div className="w-2 h-2 rounded-full bg-[#00A8FF] shrink-0 mt-2" />
                  <p className="text-sm text-gray-300">{factor}</p>
                </div>
              ))}
            </div>

            {/* POSITIONING NOTE */}
            <div className="mt-8 pt-6 border-t border-white/10 text-xs sm:text-sm text-gray-400 italic">
              <strong className="text-white not-italic">Price Positioning Note:</strong> These VELIX ranges were set to remain competitive in the Pakistan market while avoiding ultra-low pricing that makes custom, quality-controlled delivery unrealistic. Keep the final quote tied to a written scope and never promise premium custom work at a template-level budget.
            </div>
          </div>
        </section>

        {/* PRICING FAQS */}
        <section className="mb-24">
          <FAQAccordion
            title="Pricing & Investment FAQs"
            subtitle="COMMERCIAL CLARITY"
            items={pricingFaqs}
          />
        </section>

        {/* PRICING CTA */}
        <section className="rounded-3xl p-10 sm:p-14 bg-gradient-to-br from-[#061A35] to-[#07090D] border border-[#0066FF]/30 text-center relative overflow-hidden shadow-[0_0_50px_rgba(0,102,255,0.2)]">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 font-heading">
            Want a Realistic Quote Instead of a Vague Package?
          </h2>
          <p className="text-base text-gray-300 max-w-2xl mx-auto mb-8">
            Book a free consultation and share your goals, current website, key features, and target timeline. We typically respond within 24 hours.
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
