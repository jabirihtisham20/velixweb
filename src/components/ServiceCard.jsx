import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  Code2, 
  Cpu, 
  ShoppingBag, 
  Palette, 
  Layers, 
  Layout, 
  Database, 
  ShieldCheck, 
  Zap,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

const iconMap = {
  Globe,
  Code2,
  Cpu,
  ShoppingBag,
  Palette,
  Layers,
  Layout,
  Database,
  ShieldCheck,
  Zap
};

export default function ServiceCard({ service, index }) {
  const cardRef = useRef(null);
  const [rotX, setRotX] = useState(0);
  const [rotY, setRotY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const Icon = iconMap[service.icon] || Globe;

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Subtle 3D tilt
    setRotX(-((y - centerY) / centerY) * 7);
    setRotY(((x - centerX) / centerX) * 7);
  };

  const handleMouseLeave = () => {
    setRotX(0);
    setRotY(0);
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(${isHovered ? -6 : 0}px)`,
        transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.4s ease-out'
      }}
      className="relative rounded-2xl p-7 bg-[#07090D]/80 border border-[#0066FF]/20 hover:border-[#00A8FF]/50 transition-colors duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.5)] group flex flex-col justify-between overflow-hidden"
    >
      {/* Background glow when hovering */}
      <div 
        className="absolute -top-24 -right-24 w-48 h-48 bg-[#0066FF]/20 rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" 
      />

      <div>
        {/* Header: Icon and badge */}
        <div className="flex items-center justify-between mb-6">
          <div className="w-13 h-13 rounded-xl bg-[#061A35]/60 border border-[#0066FF]/30 flex items-center justify-center text-[#00A8FF] group-hover:text-white group-hover:bg-[#0066FF] group-hover:shadow-[0_0_20px_#0066FF] transition-all duration-300">
            <Icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
          </div>
          <span className="text-xs font-mono text-gray-500 group-hover:text-[#00A8FF] transition-colors">
            0{index + 1}
          </span>
        </div>

        {/* Title & Description */}
        <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-[#00A8FF] transition-colors duration-200">
          {service.title}
        </h3>
        <p className="text-sm text-[#9CA3AF] leading-relaxed mb-6">
          {service.shortDesc}
        </p>

        {/* Key Deliverables */}
        {service.deliverables && (
          <div className="space-y-2 mb-6 pt-4 border-t border-white/5">
            {service.deliverables.slice(0, 3).map((d, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-gray-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00A8FF] shrink-0" />
                <span>{d}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer Link */}
      <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-[#00A8FF] group-hover:text-white transition-colors">
        <Link 
          to={`/services#${service.id}`} 
          className="flex items-center gap-1.5 group-hover:translate-x-1 transition-transform"
        >
          <span>Explore Service</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
        <span className="text-[10px] text-gray-500 font-mono">VELIX CORE</span>
      </div>
    </div>
  );
}
