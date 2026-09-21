"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import PageShell from "./PageShell";
import Reveal from "./Reveal";
import Tilt from "./Tilt";
import { useLang } from "../lib/i18n";
import {
  aiUseCases,
  featuredProjects,
  testimonials,
  workItems,
  type WorkCategory,
} from "../lib/work-data";

type Filter = "all" | WorkCategory;

/* Filters are derived from the data, so new categories appear on their own. */
const activeCategories = Array.from(
  new Set(workItems.map((w) => w.category))
) as WorkCategory[];

export default function OurWorkContent() {
  const { t, lang } = useLang();
  const [filter, setFilter] = useState<Filter>("all");
  const [lightbox, setLightbox] = useState<number | null>(null); // index into `visible`
  const [slide, setSlide] = useState(0);

  const visible = useMemo(
    () =>
      filter === "all"
        ? workItems
        : workItems.filter((w) => w.category === filter),
    [filter]
  );

  const closeLightbox = useCallback(() => setLightbox(null), []);
  const step = useCallback(
    (dir: 1 | -1) =>
      setLightbox((i) =>
        i === null ? null : (i + dir + visible.length) % visible.length
      ),
    [visible.length]
  );

  // Lightbox keyboard support: Esc closes, arrows navigate.
  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, closeLightbox, step]);

  const ow = t.ourWork;
  const filters: { key: Filter; label: string }[] = [
    { key: "all", label: ow.filters.all },
    ...activeCategories.map((c) => ({ key: c as Filter, label: ow.filters[c] })),
  ];

  return (
    <PageShell>
      {/* ---- Hero ---- */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            {ow.eyebrow}
          </p>
          <h1 className="display text-4xl font-bold text-ink sm:text-6xl">
            {ow.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            {ow.heroSub}
          </p>
        </Reveal>
      </section>

      {/* ---- What we do ---- */}
      <section aria-labelledby="ow-services" className="mx-auto max-w-7xl px-6 pb-8 lg:px-10">
        <Reveal className="mb-10 max-w-2xl">
          <h2 id="ow-services" className="display text-3xl font-bold text-ink sm:text-4xl">
            {ow.whatWeDoTitle}
          </h2>
          <p className="mt-4 leading-relaxed text-muted">{ow.whatWeDoIntro}</p>
        </Reveal>
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {t.services.items.slice(0, 8).map((s, i) => (
            <Reveal key={s.title} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
              <Link
                href="/services"
                className="block h-full rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-teal/50 hover:bg-white/[0.06] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                <span className="display text-sm font-bold text-accent/80">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="display mt-2 text-base font-bold text-white sm:text-lg">
                  {s.title}
                </h3>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---- Featured work ---- */}
      <section aria-labelledby="ow-featured" className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <Reveal className="mb-10 max-w-2xl">
          <h2 id="ow-featured" className="display text-3xl font-bold text-ink sm:text-4xl">
            {ow.devTitle}
          </h2>
          <p className="mt-4 leading-relaxed text-muted">{ow.devIntro}</p>
        </Reveal>
        <div className="space-y-10 lg:space-y-14">
          {featuredProjects.map((proj, i) => (
            <Reveal key={proj.id} delay={((i % 2) + 1) as 1 | 2}>
              <article
                className={`flex flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-sm lg:flex-row ${
                  i % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* media panel */}
                <div className="relative flex items-center justify-center bg-[radial-gradient(80%_80%_at_50%_20%,rgba(74,160,169,0.25),transparent_75%)] p-6 sm:p-10 lg:w-3/5">
                  {proj.kind === "web" ? (
                    <div className="w-full overflow-hidden rounded-xl border border-white/15 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
                      {/* browser chrome */}
                      <div className="flex items-center gap-1.5 bg-[#0b2735] px-4 py-2.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                      </div>
                      <Image
                        src={proj.image}
                        alt={proj.imageAlt[lang]}
                        width={2000}
                        height={1038}
                        sizes="(max-width: 1024px) 100vw, 60vw"
                        className="h-auto w-full"
                      />
                    </div>
                  ) : (
                    <div className="w-48 overflow-hidden rounded-[1.75rem] border-4 border-[#0b2735] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)] sm:w-56">
                      <Image
                        src={proj.image}
                        alt={proj.imageAlt[lang]}
                        width={720}
                        height={1600}
                        sizes="224px"
                        className="h-auto w-full"
                      />
                    </div>
                  )}
                </div>

                {/* copy panel */}
                <div className="flex flex-col justify-center p-7 sm:p-10 lg:w-2/5">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                    {ow.builtFor}{" "}
                    <span className="text-ink">{proj.client[lang]}</span>
                  </p>
                  <h3 className="display mt-3 text-2xl font-bold text-white sm:text-3xl">
                    {proj.title[lang]}
                  </h3>
                  <p className="mt-4 leading-relaxed text-muted">
                    {proj.description[lang]}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {proj.tags.map((tag) => (
                      <span
                        key={tag.en}
                        className="rounded-full border border-brand-teal/40 bg-brand-teal/10 px-3.5 py-1.5 text-xs font-medium text-accent"
                      >
                        {tag[lang]}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---- AI & Integration ---- */}
      <section aria-labelledby="ow-ai" className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <Reveal className="mb-10 max-w-2xl">
          <h2 id="ow-ai" className="display text-3xl font-bold text-ink sm:text-4xl">
            {ow.aiTitle}
          </h2>
          <p className="mt-4 leading-relaxed text-muted">{ow.aiIntro}</p>
        </Reveal>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {aiUseCases.map((uc, i) => (
            <Reveal key={uc.id} delay={((i % 3) + 1) as 1 | 2 | 3}>
              <article className="group h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm transition-colors hover:border-brand-teal/50">
                <div className="relative aspect-[4/3] overflow-hidden bg-white/5">
                  <Image
                    src={uc.image}
                    alt={uc.alt[lang]}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="display text-lg font-bold text-white">
                    {uc.title[lang]}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {uc.body[lang]}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---- Work library ---- */}
      <section aria-labelledby="ow-library" className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <Reveal className="mb-8 max-w-2xl">
          <h2 id="ow-library" className="display text-3xl font-bold text-ink sm:text-4xl">
            {ow.libraryTitle}
          </h2>
          <p className="mt-4 leading-relaxed text-muted">{ow.libraryIntro}</p>
        </Reveal>

        {/* Filters */}
        <Reveal delay={1}>
          <div role="group" aria-label={ow.libraryTitle} className="mb-8 flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => {
                  setFilter(f.key);
                  setLightbox(null);
                }}
                aria-pressed={filter === f.key}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                  filter === f.key
                    ? "bg-brand-teal text-[#06222c]"
                    : "border border-white/20 text-ink/80 hover:border-accent hover:text-accent"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Grid */}
        {visible.length === 0 ? (
          <p className="py-10 text-center text-muted">{ow.empty}</p>
        ) : (
          <div className="columns-2 gap-4 md:columns-3 [&>*]:mb-4">
            {visible.map((w, i) => (
              <button
                key={w.id}
                onClick={() => setLightbox(i)}
                aria-label={w.title[lang]}
                className="group block w-full overflow-hidden rounded-2xl border border-white/10 transition-shadow hover:shadow-[0_20px_50px_-15px_rgba(47,152,148,0.6)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <span
                  className={`relative block ${
                    w.height / w.width > 1.4 ? "aspect-[3/4]" : ""
                  }`}
                >
                  {/* very tall shots (phone screens) show a tidy top crop in
                      the grid; the lightbox still opens the full image */}
                  <Image
                    src={w.src}
                    alt={w.alt[lang]}
                    {...(w.height / w.width > 1.4
                      ? { fill: true }
                      : { width: w.width, height: w.height })}
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className={`transition-transform duration-700 group-hover:scale-105 ${
                      w.height / w.width > 1.4
                        ? "object-cover object-top"
                        : "h-auto w-full object-cover"
                    }`}
                  />
                  <span className="absolute inset-0 flex items-end bg-gradient-to-t from-[#0b2735]/90 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <span className="text-start">
                      <span className="block text-xs font-medium uppercase tracking-wider text-accent">
                        {ow.filters[w.category]}
                      </span>
                      <span className="mt-1 block text-sm font-semibold text-white">
                        {w.title[lang]}
                      </span>
                    </span>
                  </span>
                </span>
              </button>
            ))}
          </div>
        )}
      </section>

      {/* ---- Testimonials ---- */}
      <section aria-labelledby="ow-testimonials" className="mx-auto max-w-4xl px-6 py-16 lg:px-10">
        <Reveal className="mb-10 text-center">
          <h2 id="ow-testimonials" className="display text-3xl font-bold text-ink sm:text-4xl">
            {ow.testimonialsTitle}
          </h2>
          <p className="mt-4 leading-relaxed text-muted">{ow.testimonialsIntro}</p>
        </Reveal>

        <Reveal delay={1}>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm sm:p-10">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(${(lang === "ar" ? 1 : -1) * slide * 100}%)`,
              }}
            >
              {testimonials.map((ts) => (
                <figure key={ts.id} className="w-full shrink-0 px-1 text-center">
                  {ts.placeholder && (
                    <span className="mb-4 inline-block rounded-full border border-amber-400/60 bg-amber-400/10 px-3 py-1 text-xs font-medium text-amber-300">
                      {lang === "ar" ? "نموذج للاستبدال" : "Sample — to be replaced"}
                    </span>
                  )}
                  <blockquote className="mx-auto max-w-2xl text-lg leading-relaxed text-ink-soft">
                    “{ts.quote[lang]}”
                  </blockquote>
                  <figcaption className="mt-6">
                    <p className="font-semibold text-white">{ts.name[lang]}</p>
                    <p className="text-sm text-muted">
                      {ts.role ? `${ts.role[lang]} — ` : ""}
                      {ts.company[lang]}
                    </p>
                  </figcaption>
                </figure>
              ))}
            </div>

            {testimonials.length > 1 && (
              <div className="mt-8 flex items-center justify-center gap-4">
                <button
                  onClick={() => setSlide((s) => (s - 1 + testimonials.length) % testimonials.length)}
                  aria-label={ow.carousel.prev}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-ink transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-accent"
                >
                  <span aria-hidden className="rtl:rotate-180">←</span>
                </button>
                <div className="flex gap-2">
                  {testimonials.map((ts, i) => (
                    <button
                      key={ts.id}
                      onClick={() => setSlide(i)}
                      aria-label={`${i + 1} / ${testimonials.length}`}
                      className={`h-2 rounded-full transition-all ${
                        slide === i ? "w-6 bg-accent" : "w-2 bg-white/30"
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={() => setSlide((s) => (s + 1) % testimonials.length)}
                  aria-label={ow.carousel.next}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-ink transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-accent"
                >
                  <span aria-hidden className="rtl:rotate-180">→</span>
                </button>
              </div>
            )}
          </div>
        </Reveal>
      </section>

      {/* ---- CTA ---- */}
      <section className="mx-auto max-w-4xl px-6 py-20 text-center lg:px-10">
        <Reveal>
          <h2 className="display text-3xl font-bold text-ink sm:text-5xl">
            {ow.ctaTitle}
          </h2>
          <Link
            href="/get-a-quote"
            className="btn-primary mt-8 inline-block rounded-full px-10 py-4 font-semibold transition-transform duration-300 hover:-translate-y-1"
          >
            {ow.ctaBtn}
          </Link>
        </Reveal>
      </section>

      {/* ---- Lightbox ---- */}
      {lightbox !== null && visible[lightbox] && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={visible[lightbox].title[lang]}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-[#06222c]/95 p-4 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            aria-label={ow.lightbox.close}
            className="absolute end-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-2xl text-white transition-colors hover:border-accent hover:text-accent"
          >
            ×
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            aria-label={ow.lightbox.prev}
            className="absolute start-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:border-accent hover:text-accent sm:start-6"
          >
            <span aria-hidden className="rtl:rotate-180">←</span>
          </button>
          <figure
            className="max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={visible[lightbox].src}
              alt={visible[lightbox].alt[lang]}
              width={visible[lightbox].width}
              height={visible[lightbox].height}
              sizes="90vw"
              quality={95}
              className="max-h-[80svh] w-auto rounded-2xl object-contain"
            />
            <figcaption className="mt-3 text-center">
              <span className="text-xs font-medium uppercase tracking-wider text-accent">
                {ow.filters[visible[lightbox].category]}
              </span>
              <p className="mt-1 text-sm font-semibold text-white">
                {visible[lightbox].title[lang]}
              </p>
            </figcaption>
          </figure>
          <button
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            aria-label={ow.lightbox.next}
            className="absolute end-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:border-accent hover:text-accent sm:end-6"
          >
            <span aria-hidden className="rtl:rotate-180">→</span>
          </button>
        </div>
      )}
    </PageShell>
  );
}
