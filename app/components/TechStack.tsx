"use client";

import Reveal from "./Reveal";
import { useLang } from "../lib/i18n";
import { techStack, type TechTool } from "../lib/tech-stack";

/*
  Tech-stack logo grid for /services: three labelled groups of white tiles,
  each holding a brand mark and its name. Tool names stay in Latin script in
  both languages; only the heading copy and category labels are translated.
*/

function Logo({ tool }: { tool: TechTool }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className="h-10 w-10"
      fill={tool.outline ? "none" : tool.color}
      stroke={tool.outline ? tool.color : undefined}
      strokeWidth={tool.outline ? 1.75 : undefined}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={tool.path} />
    </svg>
  );
}

export default function TechStack() {
  const { t } = useLang();
  const ts = t.techStack;

  return (
    <section
      aria-labelledby="tech-stack-heading"
      className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20"
    >
      <Reveal className="mb-12 max-w-3xl">
        <h2
          id="tech-stack-heading"
          className="display text-3xl font-bold text-ink sm:text-4xl"
        >
          {ts.eyebrow}
        </h2>

        <p className="mt-3 text-lg font-semibold text-accent sm:text-xl">
          {ts.title}
        </p>

        <p className="mt-4 leading-relaxed text-muted">{ts.intro}</p>
      </Reveal>

      <div className="space-y-10">
        {techStack.map((cat, ci) => (
          <Reveal key={cat.key} delay={((ci % 4) + 1) as 1 | 2 | 3 | 4}>
            <h3 className="mb-4 border-b border-white/20 pb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent rtl:text-sm rtl:tracking-normal">
              {ts.categories[cat.key]}
            </h3>

            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
              {cat.tools.map((tool) => (
                <li
                  key={tool.name}
                  className="flex h-28 flex-col items-center justify-center gap-2.5 rounded-2xl bg-white p-3 text-center shadow-[0_10px_28px_-14px_rgba(0,0,0,0.55)] ring-1 ring-black/5 transition-transform duration-300 hover:-translate-y-1"
                >
                  <Logo tool={tool} />
                  <span
                    dir="ltr"
                    className="text-[0.78rem] font-semibold leading-tight text-slate-800"
                  >
                    {tool.name}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
