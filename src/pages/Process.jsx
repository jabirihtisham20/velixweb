import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Compass, 
  Search, 
  Layers, 
  Palette, 
  Code2, 
  CheckCircle, 
  Rocket, 
  Headphones, 
  ArrowRight,
  Sparkles,
  CheckCircle2,
  FileText,
  Clock,
  ShieldCheck
} from 'lucide-react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { processData, clientExpectations, scopeChangesPolicy } from '../data/processData';

const phaseIcons = {
  '01': Search,
  '02': Compass,
  '03': Palette,
  '04': Code2,
  '05': CheckCircle,
  '06': Rocket,
  '07': Headphones
};

export default function Process() {
  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 bg-[#050505] min-h-screen text-[#9CA3AF]">
      <SEO
        title="Our Web Development Process | VELIX Islamabad"
        description="See how VELIX plans, designs, develops, tests and launches websites, ecommerce and software projects with clear milestones and ongoing support."
        canonical="https://velix.com/process"
      />

      <div className="max-w-7xl mx-auto">
        <Breadcrumbs items={[{ label: 'Our Process' }]} />

        {/* HERO */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0066FF]/15 border border-[#0066FF]/30 text-[#00A8FF] text-xs font-semibold tracking-widest uppercase mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>DELIVERY METHODOLOGY</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6 font-heading">
            A Clear Process Creates{' '}
            <span className="gradient-text-blue">Better Digital Products</span>
          </h1>

          <p className="text-base sm:text-lg text-[#9CA3AF] leading-relaxed max-w-3xl mx-auto">
            Good projects become expensive when requirements stay unclear, decisions arrive late or nobody owns the next step. VELIX uses a structured delivery process that gives clients visibility while leaving enough flexibility to learn and improve as the project takes shape.
          </p>
        </div>

        {/* 7 DELIVERY PHASES */}
        <div className="space-y-12 mb-24">
          {processData.map((phase) => {
            const Icon = phaseIcons[phase.step] || Code2;
            return (
              <div
                key={phase.step}
                className="p-8 sm:p-12 rounded-3xl bg-[#07090D] border border-[#0066FF]/25 hover:border-[#00A8FF]/40 transition-all flex flex-col lg:flex-row gap-8 lg:gap-12 items-start shadow-xl"
              >
                {/* Step indicator */}
                <div className="flex items-center gap-4 lg:flex-col lg:items-start shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-[#061A35] border border-[#0066FF]/30 text-[#00A8FF] flex items-center justify-center">
                    <Icon className="w-7 h-7" />
                  </div>
                  <div className="text-3xl font-extrabold text-[#00A8FF] font-mono">
                    {phase.step}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow space-y-4">
                  <div className="inline-block px-3 py-1 rounded-full bg-[#0066FF]/15 text-[#00A8FF] text-xs font-mono font-semibold uppercase">
                    PHASE {phase.step} • {phase.phase}
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading">
                    {phase.title}
                  </h2>

                  <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-medium">
                    {phase.summary}
                  </p>

                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                    {phase.details}
                  </p>

                  {/* Deliverables */}
                  <div className="pt-4 border-t border-white/5">
                    <h3 className="text-xs font-mono font-bold text-gray-400 uppercase tracking-wider mb-3">
                      Phase Deliverables:
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {phase.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-gray-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#00A8FF] shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* WHAT WE NEED FROM CLIENTS */}
        <section className="mb-24 p-8 sm:p-12 rounded-3xl bg-[#07090D]/90 border border-[#0066FF]/25 shadow-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0066FF]/20 text-[#00A8FF] text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>COLLABORATIVE SUCCESS</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 font-heading">
            {clientExpectations.title}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {clientExpectations.items.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                <h3 className="text-base font-bold text-white">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* HOW WE HANDLE SCOPE CHANGES */}
        <section className="mb-24 p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#061A35]/70 to-[#07090D] border border-[#0066FF]/30 shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-heading">
            {scopeChangesPolicy.title}
          </h2>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-4xl">
            {scopeChangesPolicy.desc}
          </p>
        </section>

        {/* CTA */}
        <section className="rounded-3xl p-10 sm:p-14 bg-gradient-to-br from-[#061A35] to-[#07090D] border border-[#0066FF]/30 text-center relative overflow-hidden shadow-[0_0_50px_rgba(0,102,255,0.2)]">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 font-heading">
            Have a Project in Mind? Start With Discovery, Not Assumptions.
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
