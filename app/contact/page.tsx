import type { Metadata } from "next";
import ContactPageContent from "../components/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact — Watm",
  description:
    "Talk to Watm — Saudi digital marketing and technology partner in Riyadh. Reach us by WhatsApp, email, or LinkedIn.",
};

export default function ContactPage() {
  return <ContactPageContent />;
}
