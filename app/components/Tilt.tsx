"use client";

import { useRef, type ReactNode } from "react";

type TiltProps = {
  children: ReactNode;
  className?: string;
  max?: number; // max tilt in degrees
  glare?: boolean;
};

export default function Tilt({
  children,
  className = "",
  max = 8,
  glare = true,
}: TiltProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const glareRef = useRef<HTMLDivElement | null>(null);
  const raf = useRef<number | null>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rx = (0.5 - py) * max * 2;
    const ry = (px - 0.5) * max * 2;
    if (raf.current) cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(() => {
      el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.02)`;
      if (glareRef.current) {
        glareRef.current.style.background = `radial-gradient(220px circle at ${
          px * 100
        }% ${py * 100}%, rgba(255,255,255,0.16), transparent 60%)`;
        glareRef.current.style.opacity = "1";
      }
    });
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform =
      "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)";
    if (glareRef.current) glareRef.current.style.opacity = "0";
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`relative transition-transform duration-300 ease-out will-change-transform [transform-style:preserve-3d] ${className}`}
    >
      {children}
      {glare && (
        <div
          ref={glareRef}
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300"
          style={{ mixBlendMode: "soft-light" }}
        />
      )}
    </div>
  );
}
