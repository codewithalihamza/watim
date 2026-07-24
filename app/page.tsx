import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SearchSection from "./components/SearchSection";
import GrowthSection from "./components/GrowthSection";
import CreatorSection from "./components/CreatorSection";
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
        <SearchSection />
        <GrowthSection />
        <CreatorSection />
        <Gallery />
      </main>
      <Footer />
    </>
  );
}
