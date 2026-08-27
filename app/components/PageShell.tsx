"use client";

import Image from "next/image";
import { type ReactNode } from "react";

/*
  Shared scaffold for the inner pages (/services, /contact): the teal
  gradient field with the faint WA pattern, padded below the fixed navbar.
*/
export default function PageShell({ children }: { children: ReactNode }) {
  return (
    <main className="relative overflow-hidden bg-gradient-to-b from-field-dark via-[#1c5461] to-[#2f9894] pt-28 lg:pt-32">
      <Image
        src="/brand/pattern.webp"
        alt=""
        fill
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-full w-full object-cover object-top opacity-[0.06]"
      />
      <div className="relative">{children}</div>
    </main>
  );
}
