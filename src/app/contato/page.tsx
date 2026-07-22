import type { Metadata } from "next";
import ContatoContent from "@/components/pages/ContatoContent";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com o time da R2 Simulation. Sede em Curitiba – PR, atuação nacional e internacional. contato@r2sol.com.br",
  alternates: {
    canonical: "/contato",
  },
};

export default function ContatoPage() {
  return <ContatoContent />;
}
