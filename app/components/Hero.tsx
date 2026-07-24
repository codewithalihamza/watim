import Image from "next/image";
import HeroBackground from "./HeroBackground";
import Parallax from "./Parallax";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
    >
      <HeroBackground />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 px-6 lg:grid-cols-2 lg:px-10">
        {/* Left: subject */}
        <Reveal immediate className="relative flex justify-center lg:justify-start">
          <Parallax strength={26} className="animate-floaty-slow relative">
            <div className="animate-pulse-glow absolute inset-0 -z-10 translate-y-6 scale-90 rounded-full bg-cyan/25 blur-3xl" />
            <Image
              src="/assets/hero-man.png"
              alt="Man wearing a keffiyeh with an apple pierced by an arrow — precision marketing"
              width={418}
              height={423}
              priority
              unoptimized
              className="h-auto w-[300px] drop-shadow-[0_30px_60px_rgba(0,0,0,0.45)] sm:w-[380px] lg:w-[440px]"
            />
          </Parallax>
        </Reveal>

        {/* Right: headline */}
        <div className="relative">
          <Reveal immediate delay={1}>
            <h1 className="font-display text-5xl font-extrabold uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              <span className="block text-gradient-teal">Marketing</span>
              <span className="block text-gradient-teal">Solutions</span>
              <span className="mt-2 block text-2xl font-bold text-ink/95 sm:text-3xl lg:text-4xl">
                Start With
              </span>
            </h1>
          </Reveal>

          <Reveal immediate delay={2} className="mt-4 flex items-center gap-5">
            <span className="font-display text-6xl font-extrabold uppercase tracking-tight text-white sm:text-7xl lg:text-8xl">
              WATM
            </span>
            <Parallax strength={40} className="animate-floaty">
              <Image
                src="/assets/glass-w.png"
                alt="Glass WATM emblem"
                width={145}
                height={180}
                unoptimized
                className="h-20 w-auto drop-shadow-[0_0_28px_rgba(75,184,196,0.6)] sm:h-24 lg:h-28"
              />
            </Parallax>
          </Reveal>

          <Reveal immediate delay={3} className="mt-8 flex flex-wrap gap-4">
            <a
              href="#about"
              className="group relative overflow-hidden rounded-full bg-teal px-8 py-3.5 font-medium text-[#062029] transition-all duration-300 hover:shadow-[0_10px_40px_-8px] hover:shadow-teal"
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
