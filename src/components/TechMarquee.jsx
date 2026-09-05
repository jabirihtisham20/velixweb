import React from 'react';
import { 
  Code, 
  Layers, 
  Cpu, 
  Database, 
  Sparkles, 
  Zap, 
  Palette, 
  Layout 
} from 'lucide-react';

const technologies = [
  { name: 'React.js', icon: Code },
  { name: 'Next.js', icon: Cpu },
  { name: 'Node.js', icon: Database },
  { name: 'TypeScript', icon: Layers },
  { name: 'JavaScript', icon: Code },
  { name: 'Three.js', icon: Sparkles },
  { name: 'GSAP', icon: Zap },
  { name: 'Tailwind CSS', icon: Palette },
  { name: 'WordPress', icon: Layout }
];

export default function TechMarquee() {
  return (
    <div className="w-full py-9 bg-[#07090D]/80 border-y border-[#0066FF]/15 overflow-hidden relative backdrop-blur-sm">
      {/* Side gradient masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {[...technologies, ...technologies, ...technologies].map((tech, idx) => {
          const Icon = tech.icon;
          return (
            <div
              key={idx}
              className="flex items-center gap-3.5 mx-5 px-5 py-2.5 rounded-xl bg-[#061A35]/35 border border-[#0066FF]/20 text-white font-medium text-sm transition-all duration-300 hover:border-[#00A8FF]/60 hover:bg-[#0066FF]/15 hover:shadow-[0_0_20px_rgba(0,102,255,0.25)] hover:scale-105 group"
            >
              <Icon className="w-4 h-4 text-[#00A8FF] transition-transform duration-300 group-hover:rotate-12" />
              <span className="tracking-wide text-gray-200 group-hover:text-white">{tech.name}</span>
            </div>
          );
        })}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
      `}</style>
    </div>
  );
}
