"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/language-provider";
import SectionHeading from "./SectionHeading";
import LogoChip from "./LogoChip";
import Reveal from "./Reveal";
import { clientLogos, partnerLogos } from "@/lib/client-logos";

export default function ClientsPreviewSection() {
  const { t } = useLanguage();
  const names = [
    ...t.clientsPage.clients,
    ...t.clientsPage.partners.map((p) => p.name),
  ];

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow={t.clientsPreview.eyebrow}
          title={t.clientsPreview.title}
          subtitle={t.clientsPreview.subtitle}
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {names.map((name, i) => (
            <Reveal key={name} delay={i * 60}>
              <LogoChip name={name} logoSrc={clientLogos[name] ?? partnerLogos[name]} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-10 flex justify-center">
          <Link
            href="/clientes-parceiros"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--color-navy-900)] hover:text-[color:var(--color-cyan-500)]"
          >
            {t.clientsPreview.ctaLabel}
            <ArrowRight size={16} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
