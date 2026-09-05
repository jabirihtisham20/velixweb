import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQAccordion({ items = [], title = "Frequently Asked Questions", subtitle }) {
  const [openIndex, setOpenIndex] = useState(0);

  if (!items || items.length === 0) return null;

  return (
    <div className="w-full">
      {(title || subtitle) && (
        <div className="text-center max-w-3xl mx-auto mb-12">
          {subtitle && (
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0066FF]/15 border border-[#0066FF]/30 text-[#00A8FF] text-xs font-semibold tracking-widest uppercase mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>{subtitle}</span>
            </div>
          )}
          {title && (
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
              {title}
            </h2>
          )}
        </div>
      )}

      <div className="max-w-4xl mx-auto space-y-4">
        {items.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                isOpen
                  ? 'bg-[#07090D] border-[#0066FF]/50 shadow-[0_0_25px_rgba(0,102,255,0.15)]'
                  : 'bg-[#07090D]/60 border-[#0066FF]/20 hover:border-[#0066FF]/40'
              }`}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00A8FF]"
                aria-expanded={isOpen}
              >
                <span className="text-base sm:text-lg font-semibold text-white">
                  {item.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[#00A8FF] shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`transition-all duration-300 ease-in-out ${
                  isOpen ? 'max-h-[500px] opacity-100 px-6 pb-6' : 'max-h-0 opacity-0 px-6 pb-0'
                }`}
              >
                <p className="text-sm sm:text-base text-[#9CA3AF] leading-relaxed border-t border-white/5 pt-4">
                  {item.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
