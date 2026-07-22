/**
 * Maps client/partner names (as used in the i18n dictionaries) to their
 * real logo files in /public/images/clients and /public/images/partners.
 */
export const clientLogos: Record<string, string> = {
  Petrobras: "/images/clients/petrobras.png",
  "Brasil Biofuels": "/images/clients/brasil-biofuels.png",
  Recifer: "/images/clients/recifer.png",
  Silomax: "/images/clients/silomax.png",
  ICONIC: "/images/clients/iconic.jpeg",
  "Immer Messen": "/images/clients/immer-messen.jpeg",
};

export const partnerLogos: Record<string, string> = {
  "Fundação Araucária": "/images/partners/fundacao-araucaria.jpeg",
  "Centelha (MCTI)": "/images/partners/centelha.jpeg",
  CERNN: "/images/partners/cernn.jpeg",
};
