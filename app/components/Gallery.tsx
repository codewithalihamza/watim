import Image from "next/image";
import Reveal from "./Reveal";
import Tilt from "./Tilt";

// Curated high-resolution imagery (Unsplash). Portrait crops @ q=85.
const IMG =
  "?auto=format&fit=crop&w=900&h=1200&q=85";

// Authentic Saudi Arabian culture & lifestyle imagery (Unsplash). Portrait crops @ q=85.
const works = [
  {
    src: "/portfolio/A happy man in traditional wear embraces his camel in a desert setting..jpg",
    title: "Traditional Arabian Culture",
    tag: "Arabian Culture",
  },
  {
    src: "https://images.unsplash.com/photo-1648027753410-31ae2ed611a2" + IMG,
    title: "Desert Lifestyle Campaigns",
    tag: "Lifestyle",
  },
  {
    src: "/portfolio/Woman wearing traditional Bedouin attire with coin jewelry in desert landscape..jpg",
    title: "Women in Arabian Culture",
    tag: "Culture",
  },
  {
    src: "https://images.unsplash.com/photo-1578895101408-1a36b834405b" + IMG,
    title: "Landmark Architecture",
    tag: "Heritage",
  },
  {
    src: "/portfolio/Arab men dressed in traditional clothing at Uhud Mountain marketplace near a mosque..jpg",
    title: "Traditional Arabian Market",
    tag: "Creative",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-teal-bright">
            Our Gallery
          </p>
          <h2 className="font-display text-4xl font-bold text-ink sm:text-5xl">
            Work That Speaks Louder
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-5">
          {works.map((w, i) => (
            <Reveal
              key={w.title}
              delay={((i % 4) + 1) as 1 | 2 | 3 | 4}
              className="group"
            >
              <Tilt max={9} className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/10 shadow-lg group-hover:shadow-[0_20px_50px_-15px_rgba(33,121,146,0.6)]">
                <Image
                  src={w.src}
                  alt={w.title}
                  fill
                  quality={95}
                  sizes="(max-width: 768px) 45vw, 20vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#062029] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-90" />
                <div className="absolute inset-x-0 bottom-0 translate-y-4 p-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="text-xs font-medium uppercase tracking-wider text-teal-bright">
                    {w.tag}
                  </span>
                  <p className="mt-1 text-sm font-semibold text-white">
                    {w.title}
                  </p>
                </div>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
