import type { Metadata } from "next";
import QuotePageContent from "../components/QuotePageContent";

export const metadata: Metadata = {
  title: "Get a Quote — Watm",
  description:
    "Request a service quote from Watm — social media, paid media, content, websites, apps, SEO, and brand identity for organizations in Saudi Arabia.",
};

export default function GetAQuotePage() {
  return <QuotePageContent />;
}
