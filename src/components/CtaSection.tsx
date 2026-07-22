"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/language-provider";
import WireframeMesh from "./WireframeMesh";
import Reveal from "./Reveal";

export default function CtaSection() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-[color:var(--color-navy-950)] py-20 text-white sm:py-24">
      <WireframeMesh variant="panel" className="absolute inset-0 h-full w-full text-cyan-300" />
      <div className="container-page relative flex flex-col items-center gap-6 text-center">
        <Reveal>
          <h2 className="text-balance font-heading text-3xl font-semibold sm:text-4xl">
            {t.finalCta.title}
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="max-w-2xl text-balance text-base leading-relaxed text-white/70 sm:text-lg">
            {t.finalCta.subtitle}
          </p>
        </Reveal>
        <Reveal delay={200}>
          <Link
            href="/contato"
            className="mt-2 inline-flex items-center gap-2 rounded-full bg-[color:var(--color-cyan-500)] px-7 py-3.5 text-sm font-semibold text-[color:var(--color-navy-950)] transition-transform hover:scale-[1.03]"
          >
            {t.finalCta.ctaLabel}
            <ArrowRight size={16} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
