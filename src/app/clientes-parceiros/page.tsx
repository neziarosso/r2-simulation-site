import type { Metadata } from "next";
import ClientesParceirosContent from "@/components/pages/ClientesParceirosContent";

export const metadata: Metadata = {
  title: "Clientes e Parceiros",
  description:
    "Empresas e instituições que confiam na R2 Simulation: Petrobras, Brasil Biofuels, Recifer, Silomax, Fundação Araucária, Centelha (MCTI) e CERNN.",
  alternates: {
    canonical: "/clientes-parceiros",
  },
};

export default function ClientesParceirosPage() {
  return <ClientesParceirosContent />;
}
