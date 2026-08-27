import type { Metadata } from "next";
import ServicesPageContent from "../components/ServicesPageContent";

export const metadata: Metadata = {
  title: "Services — Watm",
  description:
    "Social media, paid media, content, websites, apps, SEO, and brand identity — integrated capabilities delivered to one standard by Watm, KSA.",
};

export default function ServicesPage() {
  return <ServicesPageContent />;
}
