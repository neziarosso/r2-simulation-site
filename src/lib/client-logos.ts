/**
 * Maps client/partner names (as used in the i18n dictionaries) to their
 * real logo files in /public/images/clients.
 * TODO(cliente): Immer Messen ainda usa o wordmark em texto — falta uma
 * versão do logo com texto em cor escura (a atual e branca, feita para
 * fundo escuro) para poder usar a imagem real no card de fundo branco.
 */
export const clientLogos: Record<string, string> = {
  Petrobras: "/images/clients/petrobras.png",
  "Brasil Biofuels": "/images/clients/brasil-biofuels.png",
  Recifer: "/images/clients/recifer.png",
  Silomax: "/images/clients/silomax.png",
  ICONIC: "/images/clients/iconic.jpeg",
};
