import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Home, MessageSquare, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

export default function NotFound() {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-[#050505] min-h-screen flex items-center justify-center text-center">
      <SEO
        title="Page Not Found (404) | VELIX"
        description="The requested page could not be found on VELIX. Explore our web development services, portfolio, or speak with our team."
      />

      <div className="max-w-2xl mx-auto p-10 sm:p-14 rounded-3xl bg-[#07090D]/90 border border-[#0066FF]/30 shadow-[0_0_50px_rgba(0,102,255,0.2)] relative overflow-hidden">
        <div className="w-16 h-16 rounded-2xl bg-[#061A35] border border-[#0066FF]/40 text-[#00A8FF] flex items-center justify-center mx-auto mb-6">
          <Compass className="w-8 h-8 animate-spin-slow" />
        </div>

        <span className="text-xs font-mono font-bold text-[#00A8FF] tracking-widest uppercase mb-2 block">
          ERROR 404
        </span>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-heading mb-4">
          Looks Like This Page Took a Different Route.
        </h1>

        <p className="text-base text-gray-400 mb-8 max-w-md mx-auto leading-relaxed">
          The link you followed may be outdated, moved, or misspelled. Head back to our homepage or reach out to our team directly.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/"
            className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#0066FF] to-[#00A8FF] text-white font-semibold flex items-center gap-2 shadow-[0_0_25px_rgba(0,102,255,0.4)] hover:scale-105 transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          <Link
            to="/contact"
            className="px-7 py-3.5 rounded-xl bg-[#07090D] border border-[#0066FF]/40 text-white font-semibold hover:bg-white/5 transition-all"
          >
            Talk to Our Team
          </Link>
        </div>
      </div>
    </div>
  );
}
