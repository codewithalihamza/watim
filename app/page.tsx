import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import OneLiner from "./components/OneLiner";
import About from "./components/About";
import Services from "./components/Services";
import WhyWatm from "./components/WhyWatm";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import CursorGlow from "./components/CursorGlow";

export default function Home() {
  return (
    <>
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <div className="relative overflow-hidden bg-gradient-to-b from-field-dark via-[#1c5461] to-[#2f9894]">
          <Image
            src="/brand/pattern.webp"
            alt=""
            fill
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-full w-full object-cover object-top opacity-[0.06]"
          />
          <div className="relative">
            <OneLiner />
            <About />
            <Services />
            <WhyWatm />
            <Gallery />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
