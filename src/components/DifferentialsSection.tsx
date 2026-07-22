"use client";

import { Users, Factory, Layers, Target, FlaskConical, type LucideIcon } from "lucide-react";
import { useLanguage } from "@/i18n/language-provider";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const icons: LucideIcon[] = [Users, Factory, Layers, Target, FlaskConical];

export default function DifferentialsSection() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-[color:var(--color-navy-900)] py-20 text-white sm:py-28">
      <div className="container-page relative">
        <SectionHeading
          eyebrow={t.differentials.eyebrow}
          title={t.differentials.title}
          subtitle={t.differentials.subtitle}
          tone="light"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {t.differentials.items.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <Reveal key={item.title} delay={index * 90} className="h-full">
                <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-cyan-300">
                    <Icon size={22} strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-heading text-base font-semibold leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
