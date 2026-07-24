"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: 0 | 1 | 2 | 3 | 4;
  as?: "div" | "section" | "li" | "span";
  immediate?: boolean;
};

export default function Reveal({
  children,
  className = "",
  delay = 0,
  as = "div",
  immediate = false,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (immediate) {
      const t = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(t);
    }
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [immediate]);

  const Tag = as as "div";
  const delayClass = delay ? `reveal-delay-${delay}` : "";

  return (
    <Tag
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`reveal ${delayClass} ${visible ? "is-visible" : ""} ${className}`}
    >
      {children}
    </Tag>
  );
}
