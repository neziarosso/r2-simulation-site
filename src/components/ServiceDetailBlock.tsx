"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import type { ServiceContent } from "@/i18n/dictionary";
import ServiceIcon from "./ServiceIcon";
import Reveal from "./Reveal";

interface ServiceDetailBlockProps {
  service: ServiceContent;
  image: { src: string; alt: string };
  reverse?: boolean;
  featured?: boolean;
}

export default function ServiceDetailBlock({
  service,
  image,
  reverse = false,
  featured = false,
}: ServiceDetailBlockProps) {
  return (
    <section
      id={service.slug}
      className={`scroll-mt-24 py-16 sm:py-20 ${
        featured ? "bg-[color:var(--color-cyan-500)]/[0.06]" : reverse ? "bg-[color:var(--color-mist)]" : "bg-white"
      }`}
    >
      <div className="container-page">
        <div
          className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
            reverse ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          <Reveal>
            <span
              className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${
                featured
                  ? "bg-[color:var(--color-cyan-500)]/15 text-[color:var(--color-cyan-500)]"
                  : "bg-[color:var(--color-navy-900)]/5 text-[color:var(--color-navy-900)]"
              }`}
            >
              <ServiceIcon icon={service.icon} size={26} />
            </span>

            {featured && (
              <span className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-[color:var(--color-cyan-500)]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[color:var(--color-cyan-500)]">
                <Sparkles size={12} />
                Oferta complementar
              </span>
            )}

            <h2 className="mt-5 text-balance font-heading text-2xl font-semibold leading-tight text-[color:var(--color-navy-900)] sm:text-3xl">
              {service.title}
            </h2>

            <p className="mt-4 text-base leading-relaxed text-[color:var(--color-slate)] sm:text-lg">
              {service.intro}
            </p>

            <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-[color:var(--color-navy-900)]">
              {service.itemsLabel}
            </p>
            <ul className="mt-3 space-y-2.5">
              {service.items.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[color:var(--color-slate)]">
                  <Check size={18} className="mt-0.5 shrink-0 text-[color:var(--color-cyan-500)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {service.applications && (
              <p className="mt-6 rounded-xl bg-[color:var(--color-mist)] px-4 py-3 text-sm leading-relaxed text-[color:var(--color-slate)]">
                {service.applications}
              </p>
            )}

            {service.highlight && (
              <p className="mt-6 rounded-xl border border-[color:var(--color-cyan-500)]/25 bg-[color:var(--color-cyan-500)]/10 px-4 py-3 text-sm font-medium leading-relaxed text-[color:var(--color-navy-900)]">
                {service.highlight}
              </p>
            )}

            <Link
              href="/contato"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[color:var(--color-navy-900)] px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
            >
              {service.ctaLabel}
              <ArrowRight size={16} />
            </Link>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-navy-950)]/40 via-transparent to-transparent" />
              {service.partnerBadge && (
                <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-[color:var(--color-navy-900)] shadow-sm backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full spectrum-gradient" />
                  {service.partnerBadge}
                </span>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
