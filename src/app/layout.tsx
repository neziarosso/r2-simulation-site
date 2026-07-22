import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import { LanguageProvider } from "@/i18n/language-provider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const siteUrl = "https://www.r2sol.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "R2 Simulation | Engenharia de Simulação Computacional",
    template: "%s | R2 Simulation",
  },
  description:
    "R2 Simulation conecta conhecimento técnico avançado com ferramentas digitais de última geração em simulação computacional (CFD, DEM, FEA), transferência de calor e desempenho de fluidos e materiais.",
  keywords: [
    "simulação computacional",
    "CFD",
    "DEM",
    "FEA",
    "elementos finitos",
    "transferência de calor",
    "reologia",
    "engenharia de simulação",
    "Curitiba",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "R2 Simulation",
    title: "R2 Simulation | Engenharia de Simulação Computacional",
    description:
      "Modelagem, simulação e otimização para o desenvolvimento eficiente de produtos e processos industriais.",
    images: [
      {
        url: "/images/logo/r2-logo-horizontal-colorida.png",
        width: 2069,
        height: 321,
        alt: "R2 Simulation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "R2 Simulation | Engenharia de Simulação Computacional",
    description:
      "Modelagem, simulação e otimização para o desenvolvimento eficiente de produtos e processos industriais.",
  },
  alternates: {
    canonical: siteUrl,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "R2 Simulation",
  alternateName: "R2 Simulações",
  url: siteUrl,
  logo: `${siteUrl}/images/logo/r2-logo-horizontal-colorida.png`,
  description:
    "Engenharia de simulação computacional: CFD, DEM, FEA, transferência de calor e desempenho de fluidos e materiais.",
  email: "contato@r2sol.com.br",
  telephone: "+55-41-98748-2188",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "R. Dep. Heitor Alencar Furtado, 5000, Bloco L, 3º Andar, sala R2 – Sede Ecoville",
    addressLocality: "Curitiba",
    addressRegion: "PR",
    addressCountry: "BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-[color:var(--color-ink)]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <LanguageProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
