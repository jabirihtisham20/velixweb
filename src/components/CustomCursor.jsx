import React, { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch] = useState(() => {
    if (typeof window === 'undefined') return true;
    return window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
  });
  
  const cursorDotRef = useRef(null);
  const cursorRingRef = useRef(null);
  
  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    if (isTouch) return;

    const onMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      const target = e.target;
      const isInteractive = target.closest('a, button, input, textarea, select, [role="button"], .interactive-hover');
      setIsHovered(!!isInteractive);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    let animationFrameId;
    const render = () => {
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.18;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.18;

      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0)`;
      }
      if (cursorRingRef.current) {
        cursorRingRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible, isTouch]);

  if (isTouch || !isVisible) return null;

  return (
    <>
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300"
        style={{ willChange: 'transform' }}
      >
        <div className={`w-2 h-2 rounded-full bg-[#00A8FF] shadow-[0_0_10px_#00A8FF] transition-transform duration-200 ${isHovered ? 'scale-0' : 'scale-100'}`} />
      </div>

      <div
        ref={cursorRingRef}
        className="fixed top-0 left-0 pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300"
        style={{ willChange: 'transform' }}
      >
        <div
          className={`rounded-full border transition-all duration-300 ${
            isHovered
              ? 'w-12 h-12 border-[#00A8FF] bg-[#0066FF]/15 backdrop-blur-[1px] shadow-[0_0_25px_rgba(0,168,255,0.4)] scale-100 -ml-6 -mt-6'
              : 'w-8 h-8 border-[#0066FF]/60 shadow-[0_0_12px_rgba(0,102,255,0.25)] scale-100 -ml-4 -mt-4'
          }`}
        />
      </div>
    </>
  );
}
