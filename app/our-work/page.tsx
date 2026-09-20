import type { Metadata } from "next";
import OurWorkContent from "../components/OurWorkContent";

export const metadata: Metadata = {
  title: "Our Work | WATM",
  description:
    "Explore WATM's work, creative projects, digital solutions, and selected client work across marketing, branding, content, and technology.",
};

export default function OurWorkPage() {
  return <OurWorkContent />;
}
