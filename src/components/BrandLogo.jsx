import React from 'react';
import { Link } from 'react-router-dom';

/**
 * BrandLogo Component
 * Renders the official VELIX 3D brand logo with enhanced luminous clarity,
 * ambient electric-blue back-lighting, and crisp metallic bevel definition
 * without altering the original logo design, geometry, or typography.
 */
export default function BrandLogo({
  variant = 'horizontal', // 'horizontal' | 'stacked' | 'icon-only' | 'single-image'
  size = 'md',            // 'sm' | 'md' | 'lg' | 'xl'
  withLink = true,
  className = ''
}) {
  // Sizing scale for retina clarity
  const sizeMap = {
    sm: {
      icon: 'h-7 sm:h-8',
      text: 'h-5 sm:h-5.5',
      gap: 'gap-2',
      aura: 'w-28 h-8'
    },
    md: {
      icon: 'h-9 sm:h-10 md:h-10.5',
      text: 'h-6 sm:h-6.5 md:h-7',
      gap: 'gap-2.5 sm:gap-3',
      aura: 'w-36 h-10'
    },
    lg: {
      icon: 'h-11 sm:h-12 md:h-14',
      text: 'h-7 sm:h-8 md:h-9',
      gap: 'gap-3 sm:gap-4',
      aura: 'w-48 h-14'
    },
    xl: {
      icon: 'h-20 sm:h-24 md:h-28',
      text: 'h-11 sm:h-13 md:h-15',
      gap: 'gap-4 sm:gap-5',
      aura: 'w-64 h-24'
    }
  };

  const current = sizeMap[size] || sizeMap.md;

  const logoGraphic = (
    <div className={`relative inline-flex items-center group select-none ${className}`}>
      {/* 1. Ambient Electric-Blue Glow Aura */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${current.aura} bg-gradient-to-r from-[#0066FF]/35 via-[#00A8FF]/20 to-transparent rounded-full blur-xl pointer-events-none transition-all duration-500 group-hover:from-[#0066FF]/55 group-hover:via-[#00A8FF]/35 group-hover:blur-2xl group-hover:scale-125 -z-10`}
      />

      {/* 2. Variant: Horizontal (High-Resolution Icon + Metallic Wordmark) */}
      {variant === 'horizontal' && (
        <div className={`flex items-center ${current.gap}`}>
          {/* 3D Cyan Glass & Metal Monogram */}
          <div className="relative shrink-0 flex items-center justify-center">
            <div className="absolute inset-0 bg-[#00A8FF]/30 rounded-full blur-md opacity-60 group-hover:opacity-100 transition-opacity" />
            <img
              src="/assets/velix-icon.png"
              alt="VELIX Brand Monogram"
              className={`relative ${current.icon} w-auto object-contain filter drop-shadow-[0_0_12px_rgba(0,168,255,0.85)] drop-shadow-[0_0_3px_rgba(0,230,255,0.95)] transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_0_18px_rgba(0,168,255,1)]`}
            />
          </div>

          {/* 3D Titanium Metallic Wordmark with Enhanced Bevel Contrast */}
          <div className="relative flex items-center">
            {/* Subtle underglow to boost readability against dark backgrounds */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#00A8FF]/25 via-white/10 to-transparent blur-sm opacity-40 group-hover:opacity-75 transition-opacity" />
            <img
              src="/assets/velix-wordmark.png"
              alt="VELIX"
              className={`relative ${current.text} w-auto object-contain filter brightness-[1.7] contrast-[1.25] drop-shadow-[0_0_1px_rgba(255,255,255,0.6)] drop-shadow-[0_0_10px_rgba(0,168,255,0.4)] group-hover:brightness-[1.9] group-hover:drop-shadow-[0_0_14px_rgba(0,168,255,0.7)] transition-all duration-300`}
            />
          </div>
        </div>
      )}

      {/* 3. Variant: Stacked (Used in About & Feature Showcase) */}
      {variant === 'stacked' && (
        <div className={`flex flex-col items-center text-center ${current.gap}`}>
          <div className="relative shrink-0 flex items-center justify-center">
            <div className="absolute inset-0 bg-[#0066FF]/40 rounded-full blur-xl opacity-80 group-hover:opacity-100 transition-opacity" />
            <img
              src="/assets/velix-icon.png"
              alt="VELIX Brand Monogram"
              className={`relative ${current.icon} w-auto object-contain filter drop-shadow-[0_0_18px_rgba(0,168,255,0.9)] drop-shadow-[0_0_4px_rgba(0,230,255,1)] transition-all duration-300 group-hover:scale-105`}
            />
          </div>

          <div className="relative flex items-center justify-center">
            <div className="absolute -inset-2 bg-gradient-to-r from-[#00A8FF]/20 via-white/15 to-[#00A8FF]/20 blur-md opacity-50 group-hover:opacity-85 transition-opacity" />
            <img
              src="/assets/velix-wordmark.png"
              alt="VELIX"
              className={`relative ${current.text} w-auto object-contain filter brightness-[1.7] contrast-[1.25] drop-shadow-[0_0_1px_rgba(255,255,255,0.6)] drop-shadow-[0_0_12px_rgba(0,168,255,0.5)] group-hover:brightness-[1.9] group-hover:drop-shadow-[0_0_16px_rgba(0,168,255,0.8)] transition-all duration-300`}
            />
          </div>
        </div>
      )}

      {/* 4. Variant: Single Image (Enhanced Combined PNG) */}
      {variant === 'single-image' && (
        <div className="relative">
          <img
            src="/assets/velix-logo-horizontal.png"
            alt="VELIX Web Development Agency"
            className={`${current.icon} w-auto object-contain filter brightness-[1.6] contrast-[1.25] drop-shadow-[0_0_1px_rgba(255,255,255,0.5)] drop-shadow-[0_0_12px_rgba(0,168,255,0.6)] group-hover:brightness-[1.8] group-hover:drop-shadow-[0_0_18px_rgba(0,168,255,0.85)] transition-all duration-300 group-hover:scale-105`}
          />
        </div>
      )}

      {/* 5. Variant: Icon Only */}
      {variant === 'icon-only' && (
        <div className="relative">
          <img
            src="/assets/velix-icon.png"
            alt="VELIX"
            className={`${current.icon} w-auto object-contain filter drop-shadow-[0_0_14px_rgba(0,168,255,0.85)] group-hover:drop-shadow-[0_0_20px_rgba(0,210,255,1)] transition-all duration-300 group-hover:scale-105`}
          />
        </div>
      )}
    </div>
  );

  if (withLink) {
    return (
      <Link
        to="/"
        className="inline-flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00A8FF] rounded-xl transition-transform"
        aria-label="VELIX - Home"
      >
        {logoGraphic}
      </Link>
    );
  }

  return logoGraphic;
}
