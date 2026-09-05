import React, { useState } from 'react';
import { ExternalLink, ArrowRight, X } from 'lucide-react';

export default function ProjectCard({ project, isAlternating = false, index = 0 }) {
  const [modalOpen, setModalOpen] = useState(false);

  // Alternating direction for Home page showcase
  const isReversed = isAlternating && index % 2 === 1;

  return (
    <>
      <div className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-12 items-center rounded-3xl p-6 sm:p-8 bg-[#07090D]/70 border border-[#0066FF]/20 hover:border-[#00A8FF]/40 transition-all duration-500 group relative overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.6)]`}>
        
        {/* Subtle background gradient glow */}
        <div className="absolute top-1/2 -translate-y-1/2 -left-20 w-72 h-72 bg-[#0066FF]/10 blur-[90px] pointer-events-none group-hover:bg-[#00A8FF]/15 transition-all duration-700" />

        {/* Project Image Preview */}
        <div className="w-full lg:w-7/12 relative rounded-2xl overflow-hidden aspect-[16/10] bg-[#061A35]/40 border border-[#0066FF]/20 group">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />
          {/* Blue overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-300" />
          <div className="absolute inset-0 bg-[#0066FF]/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

          {/* Top Badge */}
          <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#050505]/80 backdrop-blur-md border border-[#0066FF]/30 text-xs font-semibold text-[#00A8FF] flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00A8FF]" />
            {project.category}
          </div>

          {/* Hover Action Button */}
          <button
            onClick={() => setModalOpen(true)}
            className="absolute bottom-4 right-4 px-4 py-2 rounded-xl bg-[#050505]/90 backdrop-blur-md border border-[#00A8FF]/40 text-white text-xs font-semibold flex items-center gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-[0_0_20px_rgba(0,102,255,0.4)]"
          >
            <span>Inspect Project</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#00A8FF]" />
          </button>
        </div>

        {/* Project Content */}
        <div className="w-full lg:w-5/12 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 text-xs text-gray-400 font-mono mb-3">
              <span>{project.client}</span>
              <span>•</span>
              <span className="text-[#00A8FF]">{project.year}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight group-hover:text-[#00A8FF] transition-colors duration-200">
              {project.title}
            </h3>

            <p className="text-sm text-[#9CA3AF] leading-relaxed mb-6">
              {project.overview}
            </p>

            {/* Metrics */}
            {project.metrics && (
              <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-[#061A35]/30 border border-[#0066FF]/15 mb-6">
                {project.metrics.map((m, i) => (
                  <div key={i} className="text-center sm:text-left">
                    <p className="text-lg font-bold text-white font-heading">{m.value}</p>
                    <p className="text-[11px] text-gray-400 uppercase tracking-wider">{m.label}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Technology Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((t, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-lg bg-[#061A35]/50 border border-[#0066FF]/20 text-xs font-medium text-gray-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <button
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:text-[#00A8FF] transition-colors w-max"
          >
            <span>View Case Study Details</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      {/* Case Study Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl">
          <div className="relative w-full max-w-2xl bg-[#07090D] border border-[#0066FF]/30 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(0,102,255,0.25)] max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6">
              <span className="px-3 py-1 rounded-full bg-[#0066FF]/20 text-[#00A8FF] text-xs font-semibold">
                {project.category}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-3">
                {project.title}
              </h2>
              <p className="text-xs text-gray-400 font-mono mt-1">
                Client: {project.client} • Year: {project.year}
              </p>
            </div>

            <div className="rounded-xl overflow-hidden aspect-[16/9] mb-6 border border-[#0066FF]/20">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            </div>

            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-2 text-[#00A8FF]">
              Engineering Overview
            </h4>
            <p className="text-sm text-gray-300 leading-relaxed mb-6">
              {project.description}
            </p>

            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-3 text-[#00A8FF]">
              Technologies Utilized
            </h4>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((t, idx) => (
                <span key={idx} className="px-3 py-1 rounded-lg bg-[#061A35] border border-[#0066FF]/30 text-xs font-medium text-white">
                  {t}
                </span>
              ))}
            </div>

            <div className="pt-5 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-gray-500">VELIX Case Study Archive</span>
              <button
                onClick={() => setModalOpen(false)}
                className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#0066FF] to-[#00A8FF] text-white text-xs font-semibold"
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
