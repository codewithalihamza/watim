"use client";

import Reveal from "./Reveal";

export default function SearchSection() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted">
            Unlock your creativity, gain valuable knowledge, and grow your
            business with our wide range of courses, digital products, and
            physical products.
          </p>
        </Reveal>

        <Reveal delay={1}>
          <form
            className="group mx-auto mt-10 flex max-w-xl items-center gap-3"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search courses, products…"
                className="w-full rounded-full border-2 border-cyan/40 bg-white/5 px-6 py-4 text-ink placeholder:text-muted/70 outline-none transition-all duration-300 focus:border-cyan focus:bg-white/10 focus:shadow-[0_0_30px_-6px] focus:shadow-cyan"
              />
            </div>
            <button
              type="submit"
              className="rounded-full px-6 py-4 font-medium text-ink transition-colors hover:text-cyan"
            >
              Search
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
