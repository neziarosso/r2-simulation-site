"use client";

import Image from "next/image";
import { useLanguage } from "@/i18n/language-provider";
import SectionHeading from "@/components/SectionHeading";
import LogoChip from "@/components/LogoChip";
import CtaSection from "@/components/CtaSection";
import Reveal from "@/components/Reveal";
import { clientLogos, partnerLogos } from "@/lib/client-logos";

export default function ClientesParceirosContent() {
  const { t } = useLanguage();

  return (
    <>
      <section className="bg-[color:var(--color-mist)] py-20 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow={t.clientsPage.eyebrow}
            title={t.clientsPage.title}
            subtitle={t.clientsPage.subtitle}
          />
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="container-page">
          <Reveal>
            <h2 className="font-heading text-xl font-semibold text-[color:var(--color-navy-900)] sm:text-2xl">
              {t.clientsPage.clientsTitle}
            </h2>
          </Reveal>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {t.clientsPage.clients.map((name, i) => (
              <Reveal key={name} delay={i * 60}>
                <LogoChip name={name} logoSrc={clientLogos[name]} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[color:var(--color-mist)] py-16 sm:py-20">
        <div className="container-page">
          <Reveal>
            <h2 className="font-heading text-xl font-semibold text-[color:var(--color-navy-900)] sm:text-2xl">
              {t.clientsPage.partnersTitle}
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {t.clientsPage.partners.map((partner, i) => {
              const logoSrc = partnerLogos[partner.name];
              return (
                <Reveal key={partner.name} delay={i * 90}>
                  <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[color:var(--color-mist-dark)] bg-white p-6 transition-shadow hover:shadow-md">
                    <span className="h-1 w-10 rounded-full spectrum-gradient" />
                    {logoSrc && (
                      <div className="relative mt-4 h-12 w-full max-w-[160px] grayscale transition-all duration-300 group-hover:grayscale-0">
                        <Image
                          src={logoSrc}
                          alt={partner.name}
                          fill
                          sizes="160px"
                          className="object-contain object-left"
                        />
                      </div>
                    )}
                    <h3 className="mt-4 font-heading text-lg font-semibold text-[color:var(--color-navy-900)]">
                      {partner.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[color:var(--color-slate)]">
                      {partner.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
