"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/language-provider";
import ServiceIcon from "./ServiceIcon";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function ServicesPreviewSection() {
  const { t } = useLanguage();

  return (
    <section className="bg-[color:var(--color-mist)] py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow={t.servicesPreview.eyebrow}
          title={t.servicesPreview.title}
          subtitle={t.servicesPreview.subtitle}
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.services.list.map((service, index) => (
            <Reveal key={service.slug} delay={index * 90}>
              <Link
                href={`/servicos#${service.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-[color:var(--color-mist-dark)] bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[color:var(--color-navy-900)]/5 text-[color:var(--color-navy-900)] transition-colors group-hover:bg-[color:var(--color-cyan-500)]/10 group-hover:text-[color:var(--color-cyan-500)]">
                  <ServiceIcon icon={service.icon} />
                </span>
                <h3 className="mt-5 font-heading text-lg font-semibold leading-snug text-[color:var(--color-navy-900)]">
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[color:var(--color-slate)]">
                  {service.summary}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[color:var(--color-cyan-500)]">
                  {t.servicesPreview.learnMore}
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
