"use client";

import { useEffect, useRef, type ReactNode } from "react";

type ParallaxProps = {
  children: ReactNode;
  className?: string;
  strength?: number; // px of drift at full deflection
};

export default function Parallax({
  children,
  className = "",
  strength = 22,
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = ref.current;
        if (el) {
          el.style.transform = `translate3d(${x * strength}px, ${
            y * strength
          }px, 0)`;
        }
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [strength]);

  return (
    <div
      ref={ref}
      className={`transition-transform duration-500 ease-out will-change-transform ${className}`}
    >
      {children}
    </div>
  );
}
