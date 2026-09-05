import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonialsData } from '../data/testimonialsData';

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((c) => (c === 0 ? testimonialsData.length - 1 : c - 1));
  };

  const next = () => {
    setCurrent((c) => (c === testimonialsData.length - 1 ? 0 : c + 1));
  };

  // Subtle auto advance every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 8000);
    return () => clearInterval(timer);
  }, [current]);

  const active = testimonialsData[current];

  return (
    <div className="relative max-w-4xl mx-auto rounded-3xl p-8 sm:p-12 bg-[#07090D]/90 border border-[#0066FF]/25 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden">
      
      {/* Decorative quotes background */}
      <Quote className="absolute -bottom-6 -right-6 w-48 h-48 text-[#0066FF]/5 pointer-events-none" />

      {/* Star Rating */}
      <div className="flex items-center gap-1.5 mb-8">
        {[...Array(active.rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-[#00A8FF] text-[#00A8FF]" />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-lg sm:text-2xl font-normal text-white leading-relaxed mb-8 tracking-tight min-h-[110px] flex items-center">
        "{active.quote}"
      </blockquote>

      {/* Client Info & Slider Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-white/10">
        <div className="flex items-center gap-4">
          <img
            src={active.avatar}
            alt={active.name}
            className="w-13 h-13 rounded-full object-cover border-2 border-[#0066FF]/40 shadow-[0_0_15px_rgba(0,102,255,0.3)]"
          />
          <div>
            <h4 className="text-base font-bold text-white">{active.name}</h4>
            <p className="text-xs text-[#00A8FF] font-medium">{active.title}</p>
            <p className="text-xs text-gray-400">{active.company}</p>
          </div>
        </div>

        {/* Next / Prev Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="w-10 h-10 rounded-xl bg-[#061A35]/60 border border-[#0066FF]/30 text-gray-300 hover:text-white hover:border-[#00A8FF] hover:bg-[#0066FF]/20 flex items-center justify-center transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <span className="text-xs font-mono text-gray-400 px-2">
            0{current + 1} / 0{testimonialsData.length}
          </span>

          <button
            onClick={next}
            aria-label="Next testimonial"
            className="w-10 h-10 rounded-xl bg-[#061A35]/60 border border-[#0066FF]/30 text-gray-300 hover:text-white hover:border-[#00A8FF] hover:bg-[#0066FF]/20 flex items-center justify-center transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
