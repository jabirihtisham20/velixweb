import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Layers, 
  ArrowRight, 
  ExternalLink, 
  CheckCircle2, 
  Sparkles, 
  Building2, 
  Globe, 
  Code2, 
  ShieldAlert,
  FileCheck
} from 'lucide-react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { projectsData } from '../data/projectsData';

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Verified Client Projects', 'Case Studies'];

  const filteredProjects = projectsData.filter((p) => {
    if (filter === 'Verified Client Projects') return p.isRealProject;
    if (filter === 'Case Studies') return !p.isRealProject;
    return true;
  });

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 bg-[#050505] min-h-screen text-[#9CA3AF]">
      <SEO
        title="Web Development Projects & Case Studies | VELIX"
        description="Explore selected VELIX web development projects across WordPress, Next.js, real estate and business websites, with transparent scope and verified outcomes."
        canonical="https://velix.com/projects"
      />

      <div className="max-w-7xl mx-auto">
        <Breadcrumbs items={[{ label: 'Projects & Case Studies' }]} />

        {/* HERO */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0066FF]/15 border border-[#0066FF]/30 text-[#00A8FF] text-xs font-semibold tracking-widest uppercase mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>PORTFOLIO & CASE STUDIES</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6 font-heading">
            Selected Work,{' '}
            <span className="gradient-text-blue">Built With Purpose</span>
          </h1>

          <p className="text-base sm:text-lg text-[#9CA3AF] leading-relaxed">
            A portfolio should show more than screenshots. It should explain the business context, the problem that needed to be solved, the approach used and the outcome that can be verified. VELIX presents projects with that standard so prospective clients can understand how we think and what we build.
          </p>
        </div>

        {/* FILTER BUTTONS */}
        <div className="flex items-center justify-center gap-2 mb-16 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                filter === cat
                  ? 'bg-gradient-to-r from-[#0066FF] to-[#00A8FF] text-white shadow-[0_0_20px_rgba(0,102,255,0.4)]'
                  : 'bg-[#07090D] border border-[#0066FF]/20 text-gray-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* PROJECTS SHOWCASE */}
        <div className="space-y-12 mb-24">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="p-8 sm:p-10 rounded-3xl bg-[#07090D] border border-[#0066FF]/25 hover:border-[#00A8FF]/40 transition-all flex flex-col lg:flex-row gap-8 lg:gap-12 items-center relative overflow-hidden shadow-xl"
            >
              {/* IMAGE / PREVIEW */}
              <div className="w-full lg:w-1/2 aspect-video rounded-2xl overflow-hidden bg-[#061A35] relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    project.isRealProject
                      ? 'bg-[#0066FF]/90 text-white'
                      : 'bg-[#0066FF]/20 border border-[#0066FF]/40 text-[#00A8FF]'
                  }`}>
                    {project.badge}
                  </span>
                </div>
              </div>

              {/* CONTENT */}
              <div className="w-full lg:w-1/2 space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono text-[#00A8FF]">
                  <span>{project.industry}</span>
                  <span>•</span>
                  <span>{project.platform}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading">
                  {project.title}
                </h2>

                <p className="text-sm text-gray-300 leading-relaxed">
                  {project.description}
                </p>

                {/* HIGHLIGHTS */}
                <div className="space-y-2 pt-2 border-t border-white/5">
                  {project.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-gray-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00A8FF] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((t, tIdx) => (
                    <span key={tIdx} className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-gray-300">
                      {t}
                    </span>
                  ))}
                </div>

                {/* LIVE LINK IF REAL PROJECT */}
                {project.liveUrl && (
                  <div className="pt-4 flex items-center gap-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0066FF]/20 border border-[#0066FF]/40 text-[#00A8FF] hover:bg-[#0066FF]/30 text-xs sm:text-sm font-semibold transition-all"
                    >
                      <span>Visit Live Website</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CASE STUDY TEMPLATE EXPLANATION */}
        <section className="mb-24 p-8 sm:p-12 rounded-3xl bg-[#07090D]/90 border border-[#0066FF]/25 shadow-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0066FF]/20 text-[#00A8FF] text-xs font-semibold uppercase tracking-wider mb-4">
            <FileCheck className="w-3.5 h-3.5" />
            <span>OUR PUBLISHING ETHICS</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-heading">
            Our Case Study Standard for Every Future Project
          </h2>

          <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6">
            VELIX does not present invented metrics or fabricated client claims. Every published case study adheres to our strict 10-point transparency framework:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 text-xs">
            {[
              '1. Client & business context',
              '2. Problem or limitation before project',
              '3. Goals and success criteria',
              '4. Complete scope delivered',
              '5. Technology used & why chosen',
              '6. Key UX or architectural decisions',
              '7. Visual screenshot evidence',
              '8. Verified data & date ranges',
              '9. Genuine client quote & approval',
              '10. Relevant service links & next step'
            ].map((step, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-gray-300">
                {step}
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-3xl p-10 sm:p-14 bg-gradient-to-br from-[#061A35] to-[#07090D] border border-[#0066FF]/30 text-center relative overflow-hidden shadow-[0_0_50px_rgba(0,102,255,0.2)]">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 font-heading">
            Have a Project You Want to Turn Into Your Next Growth Story?
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
