"use client";

import Image from "next/image";
import { useLanguage } from "@/i18n/language-provider";
import Reveal from "./Reveal";

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal as="div" className="order-2 lg:order-1">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-cyan-500)]">
            <span className="h-1.5 w-1.5 rounded-full spectrum-gradient" />
            {t.about.eyebrow}
          </span>
          <h2 className="mt-4 text-balance font-heading text-3xl font-semibold leading-tight text-[color:var(--color-navy-900)] sm:text-4xl">
            {t.about.title}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-[color:var(--color-slate)] sm:text-lg">
            {t.about.paragraph1}
          </p>
          <p className="mt-4 text-base leading-relaxed text-[color:var(--color-slate)] sm:text-lg">
            {t.about.paragraph2}
          </p>
        </Reveal>

        <Reveal as="div" delay={120} className="order-1 lg:order-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="/images/team/evento-r2-simulation.jpg"
              alt={t.about.imageAlt}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-navy-950)]/50 via-transparent to-transparent" />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-2xl" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
