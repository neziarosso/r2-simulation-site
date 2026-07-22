import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServicesPreviewSection from "@/components/ServicesPreviewSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import ClientsPreviewSection from "@/components/ClientsPreviewSection";
import CtaSection from "@/components/CtaSection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesPreviewSection />
      <DifferentialsSection />
      <ClientsPreviewSection />
      <CtaSection />
    </>
  );
}
