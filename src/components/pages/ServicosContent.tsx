"use client";

import { useLanguage } from "@/i18n/language-provider";
import SectionHeading from "@/components/SectionHeading";
import ServiceDetailBlock from "@/components/ServiceDetailBlock";
import CtaSection from "@/components/CtaSection";
import { placeholderImages } from "@/lib/placeholder-images";

const imagesBySlugIndex = [
  placeholderImages.serviceCfd,
  placeholderImages.serviceHeat,
  placeholderImages.serviceFluids,
  placeholderImages.serviceCourses,
];

export default function ServicosContent() {
  const { t } = useLanguage();

  return (
    <>
      <section className="bg-[color:var(--color-mist)] py-20 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow={t.services.pageEyebrow}
            title={t.services.pageTitle}
            subtitle={t.services.pageSubtitle}
          />
        </div>
      </section>

      {t.services.list.map((service, index) => (
        <ServiceDetailBlock
          key={service.slug}
          service={service}
          image={imagesBySlugIndex[index]}
          reverse={index % 2 === 1}
          featured={service.icon === "courses"}
        />
      ))}

      <CtaSection />
    </>
  );
}
