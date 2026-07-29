import Image from "next/image";

/*
  Rebuilds the layer stack of legacy/watm web homepage/ (and its /phone
  counterpart) in the browser, bottom to top:

    1. flat field colour
    2. the teal-duotone Riyadh skyline photo
    3. the radial aqua bloom that sits right of centre
    4. the oversized "WA" watermark
    5. a vignette that seats the corners back into the dark field

  Desktop and phone use their own crops of every layer, matching the two
  PSDs, so the mobile view is the phone comp rather than a squeezed desktop.
*/
export default function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-field-dark" />

      {/* 2 — skyline photo */}
      <Image
        src="/brand/skyline.webp"
        alt=""
        fill
        priority
        aria-hidden
        sizes="(max-width: 639px) 0px, 100vw"
        className="hidden object-cover object-bottom opacity-90 sm:block"
      />
      <Image
        src="/brand/skyline-mobile.webp"
        alt=""
        fill
        priority
        aria-hidden
        sizes="(min-width: 640px) 0px, 100vw"
        className="object-cover object-bottom opacity-90 sm:hidden"
      />

      {/* 3 — the aqua bloom, multiplied over the photo */}
      <Image
        src="/brand/gradient.webp"
        alt=""
        fill
        priority
        aria-hidden
        sizes="(max-width: 639px) 0px, 100vw"
        className="hidden object-cover mix-blend-soft-light sm:block"
      />
      <Image
        src="/brand/gradient-mobile.webp"
        alt=""
        fill
        priority
        aria-hidden
        sizes="(min-width: 640px) 0px, 100vw"
        className="object-cover mix-blend-soft-light sm:hidden"
      />

      {/*
        A live radial bloom on top of the baked one, so the light breathes.
        Desktop puts it right-of-centre behind the subject; the phone comp
        raises it to sit behind his head.
      */}
      <div className="animate-bloom absolute inset-0 bg-[radial-gradient(60%_55%_at_50%_28%,rgba(74,160,169,0.5)_0%,rgba(53,131,143,0.24)_45%,transparent_75%)] sm:bg-[radial-gradient(46%_62%_at_68%_46%,rgba(74,160,169,0.55)_0%,rgba(53,131,143,0.26)_46%,transparent_74%)]" />

      {/*
        4 — the oversized WA watermark.

        The legacy PNGs ship with their glyph at a max alpha of 13/255 (38 on
        the phone crop), i.e. effectively invisible once composited. They are
        rebuilt in public/brand/ as full-strength white masks, so the opacity
        below is what actually sets the watermark's weight.
      */}
      <Image
        src="/brand/pattern.webp"
        alt=""
        fill
        aria-hidden
        sizes="(max-width: 639px) 0px, 100vw"
        className="hidden object-cover object-left opacity-[0.14] sm:block"
      />
      <Image
        src="/brand/pattern-mobile.webp"
        alt=""
        fill
        aria-hidden
        sizes="(min-width: 640px) 0px, 100vw"
        className="object-cover object-center opacity-[0.13] sm:hidden"
      />

      {/* 5 — vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_95%_at_50%_45%,transparent_40%,rgba(10,34,45,0.72)_100%)]" />
      {/* seat the section into whatever follows it */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-field-dark" />
    </div>
  );
}
