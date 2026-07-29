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
            <h1 className="display animate-drift delay-2 text-[2.4rem] uppercase sm:text-6xl lg:text-[4.2rem] xl:text-[4.8rem]">
              <span className="text-lit block">Marketing</span>
              <span className="text-lit block">Solutions</span>
              <span className="text-lit block">Start With</span>
            </h1>

            <div className="animate-drift delay-3 mt-2 flex items-center justify-center gap-3 sm:gap-5 lg:justify-start">
              <span className="wordmark text-[3.4rem] leading-none sm:text-7xl lg:text-[6.2rem] xl:text-[7rem]">
                WATM
              </span>
              <Image
                src="/assets/glass-w.png"
                alt=""
                aria-hidden
                width={280}
                height={280}
                className="h-16 w-auto drop-shadow-[0_10px_30px_rgba(0,0,0,0.45)] sm:h-24 lg:h-28 xl:h-32"
              />
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
