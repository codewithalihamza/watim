import type { Metadata } from "next";
import PrivacyPageContent from "../components/PrivacyPageContent";

export const metadata: Metadata = {
  title: "Privacy Policy — Watm",
  description:
    "How Watm collects, uses, and protects your information on watm.com.sa.",
};

export default function PrivacyPolicyPage() {
  return <PrivacyPageContent />;
}
