import Image from "next/image";
import About from "./components/About";
import CursorGlow from "./components/CursorGlow";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import OneLiner from "./components/OneLiner";
import Services from "./components/Services";
import WhyWatm from "./components/WhyWatm";

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
            {/* <Gallery /> */}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
