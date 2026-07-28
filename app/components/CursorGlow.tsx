"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    let raf = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = ref.current;
        if (el) {
          el.style.setProperty("--gx", `${e.clientX}px`);
          el.style.setProperty("--gy", `${e.clientY}px`);
          el.style.opacity = "1";
        }
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[5] opacity-0 transition-opacity duration-500 mix-blend-screen"
      style={{
        background:
          "radial-gradient(320px circle at var(--gx, 50%) var(--gy, 50%), rgba(136,215,225,0.10), transparent 65%)",
      }}
    />
  );
}
