import React from 'react';

export default function SectionHeading({
  badge,
  title,
  subtitle,
  centered = true,
  className = ''
}) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'} ${className}`}>
      {badge && (
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0066FF]/10 border border-[#0066FF]/30 text-[#00A8FF] text-xs font-semibold tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(0,102,255,0.15)]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00A8FF] animate-pulse" />
          {badge}
        </div>
      )}
      
      {title && (
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-5 leading-tight">
          {title}
        </h2>
      )}

      {subtitle && (
        <p className="text-base md:text-lg text-[#9CA3AF] leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
