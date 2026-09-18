"use client";

import Image from "next/image";
import Link from "next/link";
import HeroBackground from "./HeroBackground";
import { useLang } from "../lib/i18n";

/**
 * Desktop follows legacy/watm web homepage/with background.jpg: the subject
 * stands on the right, lit from behind, with the headline occupying the open
 * left half.
 * Phone follows legacy/watm web homepage/phone/: the subject is centred and
 * the type sits above him, so the layout stacks rather than shrinking the
 * two-column desktop arrangement.
 */
export default function Hero() {
  const { t } = useLang();

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-[auto] flex-col overflow-hidden lg:min-h-[88svh]"
    >
      <HeroBackground />

      <div className="relative mx-auto flex w-full max-w-shell flex-1 flex-col px-6 pt-24 pb-6 sm:px-8 lg:px-10 lg:pt-24 lg:pb-8">
        {/**
         * minmax(0,…) keeps the tracks from being widened by their content —
         * without it the subject image pushes the grid past the viewport on
         * narrow screens.
         */}
        <div className="grid flex-1 grid-cols-[minmax(0,1fr)] items-end gap-0 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
          {/* ---- Copy ---- */}
          <div className="order-2 min-w-0 pb-8 text-center lg:order-1 lg:pb-0 lg:text-start">
            <h1
              id="hero-heading"
              className="display animate-drift delay-2 max-w-3xl text-[2.1rem] uppercase text-lit [text-shadow:0_4px_18px_rgba(0,0,0,0.55),0_1px_4px_rgba(0,0,0,0.6)] sm:text-5xl lg:text-[3.4rem] xl:text-[3.9rem]"
            >
              <span className="block">{t.hero.line1}</span>
              <span className="block">{t.hero.line2}</span>
            </h1>

            <div className="animate-drift delay-3 mt-4 flex justify-center">
              <Image
                src="/assets/watim-favicon.png"
                alt=""
                aria-hidden
                width={350}
                height={350}
                className="hero-logo-float h-12 w-auto drop-shadow-[0_10px_30px_rgba(0,0,0,0.45)] sm:h-14 lg:h-18"
              />
            </div>

            <p className="animate-drift delay-3 mx-auto mt-4 max-w-2xl text-[0.95rem] leading-[1.8] text-ink-soft [text-shadow:0_2px_10px_rgba(0,0,0,0.5)] sm:text-base lg:mx-0 lg:text-[1.05rem]">
              {t.hero.sub}
            </p>

            <div className="animate-drift delay-4 mt-6 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <Link
                href="/contact"
                className="group btn-primary inline-flex items-center justify-center rounded-full px-8 py-3.5 font-semibold transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                {t.hero.cta1}

                <span
                  aria-hidden
                  className="ms-2 transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-3.5 font-medium text-ink transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:bg-white/5 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                {t.hero.cta2}

                <span aria-hidden className="ms-2">
                  ↗
                </span>
              </Link>
            </div>
          </div>

          {/* ---- Subject ---- */}
          <div className="animate-fade order-1 relative flex w-full min-w-0 justify-center self-end overflow-hidden lg:order-2 lg:justify-end lg:self-end lg:overflow-visible">
            {/* rim glow behind him, as in the comp */}
            <div className="animate-bloom absolute bottom-0 h-[70%] w-[80%] rounded-full bg-field-glow/25 blur-[90px]" />

            <Image
              src="/brand/man.webp"
              alt={t.hero.alt}
              width={737}
              height={1116}
              priority
              sizes="(max-width: 1024px) 60vw, 42vw"
              className="relative hidden h-auto w-full max-w-[320px] object-contain object-bottom drop-shadow-[0_30px_60px_rgba(0,0,0,0.45)] transition-transform duration-700 sm:block lg:max-w-[420px]"
            />

            <Image
              src="/brand/man-mobile.webp"
              alt={t.hero.alt}
              width={712}
              height={1076}
              priority
              sizes="80vw"
              className="relative h-auto w-full max-w-[300px] object-contain object-bottom drop-shadow-[0_24px_50px_rgba(0,0,0,0.45)] sm:hidden"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
