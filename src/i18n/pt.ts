import type { Dictionary } from "./dictionary";

export const pt: Dictionary = {
  nav: {
    home: "Home",
    services: "Serviços",
    clients: "Clientes e Parceiros",
    contact: "Contato",
    cta: "Fale com nosso time",
  },
  hero: {
    eyebrow: "Engenharia de simulação computacional",
    title: "Transformamos desafios em soluções digitais de engenharia.",
    subtitle:
      "Modelagem, simulação e otimização para o desenvolvimento eficiente de produtos e processos industriais.",
    ctaPrimary: "Conheça nossos serviços",
    ctaSecondary: "Fale com nossos especialistas",
    stat1Value: "CFD · DEM · FEA",
    stat1Label: "Frentes de simulação numérica",
    stat2Value: "100%",
    stat2Label: "Atuação nacional e internacional",
    stat3Value: "Indústria + Academia",
    stat3Label: "Parcerias com centros de pesquisa",
  },
  about: {
    eyebrow: "Sobre a R2 Simulation",
    title: "Conhecimento técnico avançado a serviço da sua engenharia",
    paragraph1:
      "Na R2 Simulation, conectamos conhecimento técnico avançado com ferramentas digitais de última geração para oferecer soluções sob medida nas áreas de simulação computacional, análise térmica, desempenho de fluidos e desenvolvimento de projetos mecânicos. Atuamos em parceria com empresas e centros de pesquisa, gerando impacto real em produtos, processos e pessoas.",
    paragraph2:
      "Nosso time é formado por engenheiros com sólida formação acadêmica e experiência prática em ambientes industriais complexos.",
    imageAlt: "Equipe da R2 Simulation em evento técnico, ao lado do banner institucional da empresa",
  },
  servicesPreview: {
    eyebrow: "O que fazemos",
    title: "Nossos serviços",
    subtitle:
      "Da simulação numérica à capacitação de equipes, integramos ciência de dados, física computacional e experiência de campo.",
    learnMore: "Saiba mais",
  },
  differentials: {
    eyebrow: "Por que a R2",
    title: "Diferenciais",
    subtitle: "O que torna nossa forma de trabalhar diferente.",
    items: [
      {
        title: "Equipe especializada e altamente qualificada",
        description:
          "Engenheiros com formação acadêmica sólida e vivência prática em simulação computacional aplicada à indústria.",
      },
      {
        title: "Experiência prática com indústrias de base e inovação",
        description:
          "Do óleo e gás a startups deep tech, conhecemos os desafios reais de operação e desenvolvimento de produto.",
      },
      {
        title: "Flexibilidade para atuar em diferentes segmentos",
        description:
          "Metodologias adaptáveis a processos térmicos, fluidos, granulares, estruturais e formulações complexas.",
      },
      {
        title: "Soluções personalizadas com foco em resultado",
        description:
          "Cada projeto é desenhado em torno do problema de negócio do cliente, não de um pacote fechado de entregas.",
      },
      {
        title: "Integração entre simulação e experimentação",
        description:
          "Cruzamos modelos computacionais com caracterização experimental para validar resultados com confiança.",
      },
    ],
  },
  clientsPreview: {
    eyebrow: "Confiança",
    title: "Clientes e parceiros",
    subtitle:
      "Empresas e instituições que colaboram com a R2 Simulation em projetos de inovação e desenvolvimento tecnológico.",
    clientsLabel: "Clientes",
    partnersLabel: "Parceiros institucionais",
    ctaLabel: "Ver todos",
  },
  finalCta: {
    title: "Vamos conversar?",
    subtitle:
      "Quer levar sua engenharia ao próximo nível? Entre em contato com nosso time e descubra como podemos colaborar com sua empresa.",
    ctaLabel: "Fale com nosso time",
  },
  services: {
    pageEyebrow: "Serviços",
    pageTitle: "Soluções de engenharia para cada etapa do seu processo",
    pageSubtitle:
      "Simulação numérica, análise térmica, desempenho de fluidos e materiais, e capacitação técnica — sob um único time de engenharia.",
    list: [
      {
        slug: "simulacao-numerica",
        icon: "cfd",
        title: "Simulação Numérica (CFD, DEM, FEA)",
        summary:
          "Previsão do comportamento de fluidos, materiais granulares e estruturas mecânicas.",
        intro:
          "Realizamos simulações computacionais avançadas para prever o comportamento de fluidos, materiais granulares e estruturas mecânicas. Atuamos com:",
        itemsLabel: "Atuamos com:",
        items: [
          "Dinâmica dos Fluidos Computacional (CFD)",
          "Método dos Elementos Discretos (DEM)",
          "Análise por Elementos Finitos (FEA)",
        ],
        applications:
          "Aplicações: processos de mistura, escoamentos complexos, desempenho térmico, comportamento estrutural, entre outros.",
        ctaLabel: "Fale sobre este serviço",
        imageCredit: "Fonte: Poletto et al., SPE-200689-MS (2020) — CERNN/UTFPR",
      },
      {
        slug: "transferencia-de-calor",
        icon: "heat",
        title: "Transferência de Calor",
        summary:
          "Otimização de trocas térmicas em processos industriais e produtos.",
        intro:
          "Analisamos e otimizamos trocas térmicas em processos industriais e produtos. Identificamos ineficiências, zonas críticas e oportunidades de melhoria em:",
        itemsLabel: "Áreas de atuação:",
        items: [
          "Equipamentos térmicos",
          "Sistemas de refrigeração e aquecimento",
          "Resfriamento de eletrônicos e componentes mecânicos",
        ],
        ctaLabel: "Fale sobre este serviço",
      },
      {
        slug: "desempenho-de-fluidos-e-materiais",
        icon: "fluids",
        title: "Análise de Desempenho de Fluidos e Materiais",
        summary:
          "Simulação e caracterização experimental de reologia, propriedades e adesividade.",
        intro:
          "Integramos simulação e caracterização experimental para avaliar:",
        itemsLabel: "Avaliamos:",
        items: [
          "Reologia e comportamento não Newtoniano",
          "Propriedades térmicas e mecânicas",
          "Adesividade, tackiness e lubrificação",
        ],
        highlight:
          "Ideal para empresas que trabalham com graxas, polímeros, tintas, cosméticos e produtos técnicos avançados.",
        ctaLabel: "Fale sobre este serviço",
        partnerBadge: "Parceria técnica: CERNN",
      },
      {
        slug: "cursos-personalizados",
        icon: "courses",
        title: "Cursos Personalizados (CAE, Malhas, Reologia Aplicada)",
        summary:
          "Capacitação técnica sob medida, em formato presencial, online ou híbrido.",
        intro:
          "Capacitamos equipes técnicas com conteúdos direcionados às necessidades reais da indústria. Nossos cursos envolvem:",
        itemsLabel: "Conteúdo programático:",
        items: [
          "Fundamentos e prática em CAE",
          "Técnicas de geração e refinamento de malhas",
          "Aplicações práticas de reologia para desenvolvimento de produtos",
        ],
        highlight: "Formato flexível: treinamentos presenciais, online ou híbridos.",
        ctaLabel: "Solicitar proposta de curso",
        partnerBadge: "Treinamento aplicado na ICONIC",
      },
    ],
  },
  clientsPage: {
    eyebrow: "Quem confia na R2",
    title: "Clientes e Parceiros",
    subtitle:
      "Construímos relações de longo prazo com empresas de base industrial e instituições de fomento à inovação.",
    clientsTitle: "Clientes",
    partnersTitle: "Parceiros institucionais",
    clients: ["Petrobras", "Brasil Biofuels", "Recifer", "Silomax", "ICONIC", "Immer Messen"],
    partners: [
      {
        name: "Fundação Araucária",
        description: "Fomento à ciência, tecnologia e inovação no Paraná.",
      },
      {
        name: "Centelha (MCTI)",
        description: "Programa nacional de apoio a empreendedores inovadores.",
      },
      {
        name: "CERNN",
        description:
          "Centro de Pesquisas em Reologia e Fluidos Não Newtonianos.",
      },
      {
        name: "ESSS",
        description:
          "Especialista latino-americana em simulação numérica e softwares CAE.",
      },
      {
        name: "Sistema Fiep",
        description:
          "Federação das Indústrias do Paraná — representação e apoio à indústria.",
      },
      {
        name: "Instituto SENAI de Tecnologia",
        description:
          "Inovação e tecnologia aplicada ao desenvolvimento industrial.",
      },
      {
        name: "SEBRAE",
        description:
          "Apoio a micro e pequenas empresas e ao empreendedorismo.",
      },
      {
        name: "SPRINT — Incubadora da UTFPR",
        description:
          "Incubadora de empresas de base tecnológica da UTFPR.",
      },
    ],
  },
  contact: {
    eyebrow: "Contato",
    title: "Vamos conversar?",
    subtitle:
      "Quer levar sua engenharia ao próximo nível? Entre em contato com nosso time e descubra como podemos colaborar com sua empresa.",
    formName: "Nome",
    formEmail: "E-mail",
    formCompany: "Empresa",
    formMessage: "Mensagem",
    formSubmit: "Enviar mensagem",
    formSubmitting: "Enviando...",
    formSuccess:
      "Mensagem enviada! Nosso time retornará o contato em breve.",
    formError:
      "Não foi possível enviar sua mensagem agora. Tente novamente ou use o e-mail abaixo.",
    addressLabel: "Endereço",
    address:
      "R. Dep. Heitor Alencar Furtado, 5000, Bloco L, 3º Andar, sala R2 – Sede Ecoville, Curitiba – PR",
    emailLabel: "E-mail",
    phoneLabel: "Telefone",
    scopeLabel: "Abrangência",
    scope: "Atuação nacional e internacional",
    mapCaption: "Sede Ecoville, Curitiba – PR",
  },
  footer: {
    tagline: "Soluções que transformam.",
    quickLinks: "Links rápidos",
    contactTitle: "Contato",
    rights: "Todos os direitos reservados.",
  },
  common: {
    languageLabel: "Idioma",
  },
};
