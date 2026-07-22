"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/language-provider";
import WireframeMesh from "./WireframeMesh";
import Reveal from "./Reveal";
import { placeholderImages } from "@/lib/placeholder-images";

export default function Hero() {
  const { t } = useLanguage();

  const stats = [
    { value: t.hero.stat1Value, label: t.hero.stat1Label },
    { value: t.hero.stat2Value, label: t.hero.stat2Label },
    { value: t.hero.stat3Value, label: t.hero.stat3Label },
  ];

  return (
    <section className="relative overflow-hidden bg-[color:var(--color-navy-950)] text-white">
      <div className="absolute inset-0">
        <Image
          src={placeholderImages.hero.src}
          alt={placeholderImages.hero.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--color-navy-950)]/80 via-[color:var(--color-navy-950)]/85 to-[color:var(--color-navy-950)]" />
      </div>

      <WireframeMesh
        variant="hero"
        className="absolute inset-0 h-full w-full text-cyan-300"
      />

      <div className="container-page relative flex min-h-[86vh] flex-col justify-center gap-10 py-28 sm:min-h-[80vh] sm:py-32">
        <div className="max-w-3xl">
          <Reveal mode="fade">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full spectrum-gradient" />
              {t.hero.eyebrow}
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 text-balance font-heading text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-6xl">
              {t.hero.title}
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-white/75 sm:text-xl">
              {t.hero.subtitle}
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/servicos"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--color-cyan-500)] px-6 py-3.5 text-sm font-semibold text-[color:var(--color-navy-950)] shadow-[0_0_0_1px_rgba(255,255,255,0.05)] transition-transform hover:scale-[1.03]"
              >
                {t.hero.ctaPrimary}
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/contato"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                {t.hero.ctaSecondary}
              </Link>
            </div>
          </Reveal>
        </div>

        <Reveal delay={320}>
          <dl className="grid max-w-3xl grid-cols-1 gap-6 border-t border-white/10 pt-8 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="font-heading text-xl font-semibold text-white sm:text-2xl">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-sm text-white/60">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
