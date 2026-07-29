import Image from "next/image";
import HeroBackground from "./HeroBackground";

/*
  Desktop follows legacy/watm web homepage/with background.jpg: the subject
  stands on the right, lit from behind, with the headline occupying the open
  left half.

  Phone follows legacy/watm web homepage/phone/: the subject is centred and
  the type sits above him, so the layout stacks rather than shrinking the
  two-column desktop arrangement.
*/
export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden"
    >
      <HeroBackground />

      <div className="relative mx-auto flex w-full max-w-shell flex-1 flex-col px-6 pt-28 pb-0 sm:px-8 lg:px-10 lg:pt-32">
        {/*
          minmax(0,…) keeps the tracks from being widened by their content —
          without it the subject image pushes the grid past the viewport on
          narrow screens.
        */}
        <div className="grid flex-1 grid-cols-[minmax(0,1fr)] items-end gap-0 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
          {/* ---- Copy ---- */}
          <div className="order-2 min-w-0 pb-8 text-center lg:order-1 lg:pb-0 lg:text-left">
            <p className="animate-drift delay-1 text-[0.7rem] font-medium uppercase tracking-[0.34em] text-accent/90 sm:text-xs">
              Marketing Solutions
            </p>

            <h1 className="display animate-drift delay-2 mt-5 text-[2.65rem] uppercase sm:text-6xl lg:text-[4.6rem] xl:text-[5.2rem]">
              <span className="text-lit block">Start</span>
              <span className="text-lit block">With WATM</span>
            </h1>

            <p className="animate-drift delay-3 mx-auto mt-6 max-w-lg text-[0.95rem] leading-relaxed text-ink-soft/85 sm:text-base lg:mx-0">
              We build brands that move — strategy, creative and media that put
              your business in front of the people who matter across the
              Kingdom.
            </p>

            <div className="animate-drift delay-4 mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center sm:gap-4 lg:justify-start">
              <a
                href="#contact"
                className="btn-primary rounded-full px-8 py-3.5 text-center text-[0.95rem] font-semibold transition-shadow duration-300"
              >
                Start a Project
              </a>
              <a
                href="#gallery"
                className="rounded-full border border-white/25 px-8 py-3.5 text-center text-[0.95rem] font-medium text-ink backdrop-blur-sm transition-colors duration-300 hover:border-accent hover:text-accent"
              >
                View Our Work
              </a>
            </div>
          </div>

          {/* ---- Subject ---- */}
          <div className="animate-fade order-1 relative flex w-full min-w-0 justify-center self-end overflow-hidden lg:order-2 lg:justify-end lg:self-end lg:overflow-visible">
            {/* rim glow behind him, as in the comp */}
            <div className="animate-bloom absolute bottom-0 h-[70%] w-[80%] rounded-full bg-field-glow/25 blur-[90px]" />

            <Image
              src="/brand/man-mobile.webp"
              alt="A man in traditional Saudi dress standing before the Riyadh skyline"
              width={737}
              height={1116}
              priority
              sizes="(max-width: 1024px) 60vw, 42vw"
              className="relative hidden h-auto w-full max-w-[420px] object-contain object-bottom drop-shadow-[0_30px_60px_rgba(0,0,0,0.45)] sm:block lg:max-w-[520px]"
            />
            <Image
              src="/brand/man-mobile.webp"
              alt="A man in traditional Saudi dress standing before the Riyadh skyline"
              width={712}
              height={1076}
              priority
              sizes="80vw"
              className="relative h-auto w-full max-w-[340px] object-contain object-bottom drop-shadow-[0_24px_50px_rgba(0,0,0,0.45)] sm:hidden"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
