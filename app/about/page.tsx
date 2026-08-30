import type { Metadata } from "next";
import AboutPageContent from "../components/AboutPageContent";

export const metadata: Metadata = {
  title: "About — Watm",
  description:
    "Watm is a Saudi digital marketing and technology partner — strategists, creatives, and engineers building brands the Kingdom remembers.",
};

export default function AboutPage() {
  return <AboutPageContent />;
}
