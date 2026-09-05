import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, 
  Compass, 
  Palette, 
  Code2, 
  CheckCircle, 
  Rocket, 
  Headphones
} from 'lucide-react';

const steps = [
  {
    num: '01',
    name: 'Discover',
    icon: Search,
    title: 'Discovery & Vision Mapping',
    desc: 'Deep-dive alignment on business targets, audience behavior, technical constraints, and competitive edges.'
  },
  {
    num: '02',
    name: 'Strategy',
    icon: Compass,
    title: 'Architecture & UX Strategy',
    desc: 'Information hierarchy, tech stack selection, conversion funnels, and data flow modeling.'
  },
  {
    num: '03',
    name: 'UI/UX Design',
    icon: Palette,
    title: 'Modern Interactive Design',
    desc: 'Futuristic design systems, responsive wireframes, dark-theme aesthetics, and high-fidelity clickable prototypes.'
  },
  {
    num: '04',
    name: 'Development',
    icon: Code2,
    title: 'Precision Web Engineering',
    desc: 'Clean, modular React & Next.js architectures, Three.js 3D animations, and high-throughput cloud APIs.'
  },
  {
    num: '05',
    name: 'Testing',
    icon: CheckCircle,
    title: 'Rigorous QA & Optimization',
    desc: 'Multi-device cross-browser testing, accessibility compliance, security audits, and 95+ Lighthouse tuning.'
  },
  {
    num: '06',
    name: 'Launch',
    icon: Rocket,
    title: 'Edge Deployment & Go-Live',
    desc: 'Zero-downtime production deployment to global edge CDN networks with automated failover safeguards.'
  },
  {
    num: '07',
    name: 'Support',
    icon: Headphones,
    title: '24/7 Monitoring & Scaling',
    desc: 'Continuous uptime monitoring, daily cloud backups, security patching, and ongoing growth feature engineering.'
  }
];

export default function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress through this component
      if (rect.top <= windowHeight * 0.6 && rect.bottom >= windowHeight * 0.2) {
        const totalDist = rect.height;
        const currentDist = (windowHeight * 0.6) - rect.top;
        const progress = Math.min(Math.max(currentDist / totalDist, 0), 1);
        const index = Math.min(Math.floor(progress * steps.length), steps.length - 1);
        setActiveStep(index);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="w-full relative py-8">
      {/* Central Progress Track for Desktop */}
      <div className="hidden lg:block absolute left-1/2 top-10 bottom-10 -translate-x-1/2 w-0.5 bg-[#061A35]">
        <div
          className="w-full bg-gradient-to-b from-[#0066FF] to-[#00A8FF] transition-all duration-300 shadow-[0_0_15px_#00A8FF]"
          style={{ height: `${((activeStep + 1) / steps.length) * 100}%` }}
        />
      </div>

      <div className="space-y-8 lg:space-y-16">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          const isCurrent = activeStep === idx;
          const isPassed = activeStep >= idx;
          const isEven = idx % 2 === 0;

          return (
            <div
              key={step.num}
              onClick={() => setActiveStep(idx)}
              className={`cursor-pointer transition-all duration-500 flex flex-col lg:flex-row items-center ${
                isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-6 lg:gap-16`}
            >
              {/* Content Box */}
              <div
                className={`w-full lg:w-1/2 ${
                  isEven ? 'lg:text-right' : 'lg:text-left'
                }`}
              >
                <div
                  className={`p-6 sm:p-7 rounded-2xl transition-all duration-300 ${
                    isCurrent
                      ? 'bg-[#07090D] border border-[#00A8FF]/60 shadow-[0_0_30px_rgba(0,102,255,0.25)] -translate-y-1'
                      : isPassed
                      ? 'bg-[#07090D]/80 border border-[#0066FF]/25'
                      : 'bg-[#07090D]/40 border border-white/5 opacity-50'
                  }`}
                >
                  <div className={`flex items-center gap-3 mb-2 ${isEven ? 'lg:justify-end' : 'lg:justify-start'}`}>
                    <span className="text-xs font-mono font-bold text-[#00A8FF]">
                      STEP {step.num}
                    </span>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#0066FF]/20 text-white font-medium">
                      {step.name}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">
                    {step.title}
                  </h3>

                  <p className="text-sm text-[#9CA3AF] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>

              {/* Step Node Marker */}
              <div className="relative z-10 shrink-0">
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 border ${
                    isCurrent
                      ? 'bg-gradient-to-br from-[#0066FF] to-[#00A8FF] border-white text-white shadow-[0_0_25px_#00A8FF] scale-110'
                      : isPassed
                      ? 'bg-[#061A35] border-[#0066FF] text-[#00A8FF]'
                      : 'bg-[#07090D] border-white/10 text-gray-500'
                  }`}
                >
                  <Icon className="w-6 h-6" />
                </div>
              </div>

              {/* Empty balance spacer for alternating desktop layout */}
              <div className="hidden lg:block w-1/2" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
