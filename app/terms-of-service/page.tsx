import type { Metadata } from "next";
import TermsPageContent from "../components/TermsPageContent";

export const metadata: Metadata = {
  title: "Terms of Service — Watm",
  description:
    "The terms that govern your use of watm.com.sa and Watm's services.",
};

export default function TermsOfServicePage() {
  return <TermsPageContent />;
}
