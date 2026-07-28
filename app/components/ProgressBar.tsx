"use client";

import { useEffect, useRef, useState } from "react";

export default function ProgressBar({
  value,
  className = "",
}: {
  value: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [w, setW] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            requestAnimationFrame(() => setW(value));
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [value]);

  return (
    <div
      ref={ref}
      className={`h-2.5 w-full overflow-hidden rounded-full bg-white/15 ${className}`}
    >
      <div
        className="h-full rounded-full bg-gradient-to-r from-brand-teal to-cyan transition-[width] duration-[1400ms] ease-out"
        style={{ width: `${w}%` }}
      />
    </div>
  );
}
