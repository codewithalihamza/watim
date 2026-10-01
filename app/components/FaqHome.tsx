"use client";

import FaqSection from "./FaqSection";
import { useLang } from "../lib/i18n";

/* Thin client wrapper so the server-rendered homepage can mount the FAQ. */
export default function FaqHome() {
  const { t } = useLang();
  return <FaqSection items={t.faq.home} />;
}
