import React, { useEffect, useState, useRef } from 'react';

export default function StatCounter({ endValue, suffix = '', label, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  // Extract number from endValue if passed as string e.g. "100+" -> numeric 100
  const numericEnd = typeof endValue === 'number' ? endValue : parseInt(endValue.replace(/\D/g, ''), 10) || 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTime = null;

          const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            // Ease out cubic
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easeProgress * numericEnd));

            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setCount(numericEnd);
            }
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated, numericEnd, duration]);

  return (
    <div ref={ref} className="flex flex-col items-center sm:items-start">
      <div className="text-4xl sm:text-5xl font-extrabold text-white font-heading tracking-tight flex items-baseline gap-0.5">
        <span className="gradient-text-electric">{hasAnimated ? count : 0}</span>
        <span className="text-[#00A8FF]">{suffix}</span>
      </div>
      <p className="text-sm font-medium text-gray-400 mt-1.5 uppercase tracking-wider">{label}</p>
    </div>
  );
}
