import type { Metadata } from "next";
import ServicosContent from "@/components/pages/ServicosContent";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Simulação Numérica (CFD, DEM, FEA), Transferência de Calor, Análise de Desempenho de Fluidos e Materiais, e Cursos Personalizados em engenharia de simulação.",
  alternates: {
    canonical: "/servicos",
  },
};

export default function ServicosPage() {
  return <ServicosContent />;
}
