"use client";

import { useRef, useState } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";

import Link from "next/link";

import CountUp from "./CountUp";
import PageShell from "./PageShell";
import Reveal from "./Reveal";
import { useLang } from "../lib/i18n";

const clientLogos = [
  { id: 1, src: "/clients/images.png" },
  { id: 2, src: "/clients/mallah.webp" },
  { id: 3, src: "/clients/tikka.jpg" },
  { id: 4, src: "/clients/bawaai.png" },
  { id: 5, src: "/clients/nevox-logo.avif" },
  { id: 6, src: "/clients/wattam.png" },
  { id: 7, src: "/clients/a-logo.png" },
];

function LogoCarousel() {
  const allLogos = [...clientLogos, ...clientLogos, ...clientLogos];

  const trackRef = useRef<HTMLDivElement>(null);
  const startXRef = useRef(0);
  const startScrollRef = useRef(0);

  const [isDragging, setIsDragging] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!trackRef.current) return;

    setIsDragging(true);
    startXRef.current = event.clientX;
    startScrollRef.current = scrollPosition;

    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!isDragging || !trackRef.current) return;

    const movement = event.clientX - startXRef.current;
    const nextPosition = startScrollRef.current + movement;

    setScrollPosition(nextPosition);
  };

  const handlePointerUp = (event: ReactPointerEvent<HTMLDivElement>) => {
    setIsDragging(false);

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  const handlePointerCancel = () => {
    setIsDragging(false);
  };

  return (
    <div
      dir="ltr"
      className={`relative w-full overflow-hidden ${
        isDragging ? "cursor-grabbing" : "cursor-grab"
      }`}
      aria-label="Our partners"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerCancel}
      onPointerLeave={handlePointerCancel}
    >
      <div
        ref={trackRef}
        className={`partners-track flex w-max flex-nowrap items-center gap-8 py-4 ${
          isDragging ? "is-dragging" : ""
        }`}
        style={{
          transform: isDragging
            ? `translate3d(${scrollPosition}px, 0, 0)`
            : undefined,
        }}
      >
        {allLogos.map((logo, index) => (
          <div
            key={`${logo.id}-${index}`}
            className="partner-logo group relative h-20 w-20 shrink-0 select-none overflow-hidden rounded-full border border-white/10 bg-white/[0.04] transition-all duration-500 hover:scale-110 hover:border-brand-teal/50 hover:bg-white/[0.08] sm:h-24 sm:w-24"
          >
            <img
              src={logo.src}
              alt="Watm partner"
              loading="lazy"
              decoding="async"
              draggable={false}
              className="pointer-events-none block h-full w-full object-cover transition-all duration-500 group-hover:scale-105"
            />

            <div className="pointer-events-none absolute inset-0 rounded-full bg-brand-teal/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </div>
        ))}
      </div>

      <style jsx>{`
        .partners-track {
          animation: partners-scroll 32s linear infinite;
          will-change: transform;
          touch-action: pan-y;
        }

        .partners-track.is-dragging {
          animation-play-state: paused;
          transition: none;
        }

        .partners-track:hover {
          animation-play-state: paused;
        }

        @keyframes partners-scroll {
          0% {
            transform: translate3d(0, 0, 0);
          }

          100% {
            transform: translate3d(-33.333333%, 0, 0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .partners-track {
            animation: none;
            transform: none;
          }

          .partner-logo {
            transition: none;
          }
        }
      `}</style>
    </div>
  );
}

export default function AboutPageContent() {
  const { t, lang } = useLang();
  const isArabic = lang === "ar";

  const mobileTextAlignment = isArabic
    ? "text-right sm:text-center"
    : "text-left sm:text-center";

  const mobileContentAlignment = isArabic
    ? "mr-0 ml-auto sm:mx-auto"
    : "mr-auto ml-0 sm:mx-auto";

  return (
    <PageShell>
      <main dir={isArabic ? "rtl" : "ltr"}>
        {/* Header */}
        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
          <Reveal className={`mx-auto max-w-5xl ${mobileTextAlignment}`}>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              {t.about.eyebrow}
            </p>

            <h1 className="display text-3xl font-bold leading-tight text-ink sm:text-4xl lg:text-5xl">
              {t.about.title}
            </h1>

            <div
              className={`mt-7 max-w-5xl space-y-4 ${mobileContentAlignment}`}
            >
              <p className="text-base leading-8 text-muted sm:text-lg">
                {t.about.p1}
              </p>

              <p className="text-base leading-8 text-muted sm:text-lg">
                {t.about.p2}
              </p>
            </div>
          </Reveal>

          {/* Stats */}
          <Reveal delay={2}>
            <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-10">
              {t.about.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center text-center"
                >
                  <CountUp
                    value={stat.value}
                    suffix={stat.suffix}
                    className="display text-4xl font-bold text-accent sm:text-5xl"
                  />

                  <p className="mt-2 text-sm text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* Standards */}
        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
          <Reveal className={`mx-auto mb-12 max-w-3xl ${mobileTextAlignment}`}>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              {t.why.eyebrow}
            </p>

            <h2 className="display text-2xl font-bold leading-tight text-ink sm:text-3xl lg:text-4xl">
              {t.why.title}
            </h2>

            <p className="mt-5 leading-8 text-muted">{t.why.intro}</p>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.why.standards.map((standard, index) => (
              <Reveal
                key={standard.title}
                delay={((index % 3) + 1) as 1 | 2 | 3}
              >
                <article className="h-full rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm">
                  <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-brand-teal text-[#06222c]">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M5 12.5L9.5 17L19 7.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>

                  <h3
                    className={`display mt-4 text-lg font-bold text-white ${mobileTextAlignment}`}
                  >
                    {standard.title}
                  </h3>

                  <p
                    className={`mt-2 text-sm leading-7 text-muted ${mobileTextAlignment}`}
                  >
                    {standard.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Partners */}
        <section className="relative overflow-hidden py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Reveal
              className={`mx-auto mb-10 max-w-3xl ${mobileTextAlignment}`}
            >
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                {t.partners.eyebrow}
              </p>

              <h2 className="display text-2xl font-bold leading-tight text-ink sm:text-3xl lg:text-4xl">
                {t.partners.title}
              </h2>

              <p className="mt-5 leading-8 text-muted">{t.partners.intro}</p>
            </Reveal>

            <Reveal delay={2}>
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] px-4 py-8 backdrop-blur-sm sm:px-8 sm:py-10">
                <LogoCarousel />
              </div>
            </Reveal>
          </div>
        </section>

        {/* Partnership CTA */}
        <Reveal delay={2} className="px-6 pb-8 text-center lg:px-10">
          <Link
            href="/contact"
            className="btn-primary inline-block rounded-full px-10 py-4 font-semibold"
          >
            {t.hero.cta1}
          </Link>
        </Reveal>

        {/* Team */}
        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
          <Reveal className={`mx-auto mb-12 max-w-3xl ${mobileTextAlignment}`}>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              {t.team.eyebrow}
            </p>

            <h2 className="display text-2xl font-bold leading-tight text-ink sm:text-3xl lg:text-4xl">
              {t.team.title}
            </h2>

            <p className="mt-5 leading-8 text-muted">{t.team.intro}</p>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.team.members.map((member, index) => (
              <Reveal
                key={member.id}
                delay={((index % 3) + 1) as 1 | 2 | 3}
                className="h-full"
              >
                <div className="group h-[390px] w-full [perspective:1200px]">
                  <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    {/* Front Card */}
                    <div className="absolute inset-0 flex h-full w-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#092934] shadow-lg [backface-visibility:hidden]">
                      {/* Team Image */}
                      <div className="relative h-[265px] w-full shrink-0 overflow-hidden bg-white">
                        <img
                          src={member.image}
                          alt={member.name}
                          loading="lazy"
                          decoding="async"
                          className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>

                      {/* Team Content */}
                      <div
                        className={`flex flex-1 flex-col justify-center px-6 py-5 ${
                          isArabic ? "text-right" : "text-left"
                        }`}
                      >
                        <h3 className="display text-lg font-bold leading-tight text-white sm:text-xl">
                          {member.name}
                        </h3>

                        <p className="mt-2 text-xs leading-5 text-brand-teal sm:text-sm">
                          {member.role}
                        </p>

                        <div className="mt-4 flex items-center justify-between gap-3 text-xs text-muted">
                          <span>{isArabic}</span>
                          <span className="text-base text-brand-teal" />
                        </div>
                      </div>
                    </div>

                    {/* Back Card */}
                    <div
                      className={`absolute inset-0 flex h-full w-full flex-col rounded-3xl border border-brand-teal/30 bg-[#092934] p-6 [backface-visibility:hidden] [transform:rotateY(180deg)] ${
                        isArabic ? "text-right" : "text-left"
                      }`}
                    >
                      <div className="flex-1 overflow-y-auto">
                        <p className="text-xs font-semibold leading-5 text-brand-teal">
                          {member.role}
                        </p>

                        <h3 className="display mt-3 text-2xl font-bold leading-tight text-white">
                          {member.name}
                        </h3>

                        <div className="my-5 h-px w-10 bg-brand-teal/50" />

                        <p className="text-sm leading-7 text-muted">
                          {member.bio}
                        </p>
                      </div>

                      <span className="mt-5 shrink-0 text-xs font-semibold text-brand-teal">
                        {isArabic}
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </main>
    </PageShell>
  );
}
