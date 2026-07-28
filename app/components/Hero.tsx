import Image from "next/image";
import HeroBackground from "./HeroBackground";
import HeroTiles from "./HeroTiles";
import Parallax from "./Parallax";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
    >
      <HeroBackground />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-4 lg:px-10">
        {/*
          Left: the subject standing inside the ring of icon tiles.
          The back tile row renders beneath the man, the front row above him,
          which is what gives the PSD its wrap-around depth.
        */}
        <Reveal immediate className="relative">
          <div className="relative mx-auto aspect-[560/620] w-full max-w-[560px] scale-90 sm:scale-100">
            <HeroTiles layer="back" />

            <Parallax
              strength={18}
              className="absolute inset-x-0 bottom-0 z-10 flex justify-center"
            >
              <div className="relative">
                <div className="animate-pulse-glow absolute inset-x-4 bottom-0 -z-10 h-3/4 rounded-full bg-teal-bright/25 blur-3xl" />
                <Image
                  src="/assets/hero-man-phone.png"
                  alt="A man in traditional Saudi dress holding up a phone showing the WATM app"
                  width={388}
                  height={1200}
                  priority
                  className="h-auto w-[165px] drop-shadow-[0_36px_60px_rgba(0,0,0,0.5)] sm:w-[196px] lg:w-[218px]"
                />
              </div>
            </Parallax>

            <div className="absolute inset-0 z-20">
              <HeroTiles layer="front" />
            </div>
          </div>
        </Reveal>

        {/* Right: headline + glass W emblem */}
        <div className="relative">
          <Reveal immediate delay={1}>
            <h1 className="text-center font-display text-[2.6rem] font-extrabold uppercase leading-[0.92] tracking-tight sm:text-6xl lg:text-[4.6rem]">
              <span className="block text-gradient-teal">Marketing</span>
              <span className="block text-gradient-teal">Solutions</span>
              <span className="block text-gradient-teal">Start With</span>
            </h1>
          </Reveal>

          <Reveal immediate delay={2} className="mt-6 flex justify-center ">
            <Parallax strength={34} className="animate-floaty">
              <Image
                src="/assets/glass-w-psd.png"
                alt="WATM glass emblem"
                width={700}
                height={470}
                priority
                className="h-24 w-auto drop-shadow-[0_0_40px_rgba(50,136,155,0.55)] sm:h-32 lg:h-40"
              />
            </Parallax>
          </Reveal>

          <Reveal immediate delay={3} className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#about"
              className="group relative overflow-hidden rounded-full bg-brand-teal px-8 py-3.5 font-medium text-[#062029] transition-all duration-300 hover:shadow-[0_10px_40px_-8px] hover:shadow-brand-teal"
            >
              <span className="relative z-10">Get Started</span>
              <span className="absolute inset-0 -translate-x-full bg-cyan transition-transform duration-500 group-hover:translate-x-0" />
            </a>
            <a
              href="#gallery"
              className="rounded-full border border-white/25 px-8 py-3.5 font-medium text-ink transition-colors duration-300 hover:border-cyan hover:text-cyan"
            >
              View Our Work
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
