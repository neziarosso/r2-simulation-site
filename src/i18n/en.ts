import type { Dictionary } from "./dictionary";

export const en: Dictionary = {
  nav: {
    home: "Home",
    services: "Services",
    clients: "Clients & Partners",
    contact: "Contact",
    cta: "Talk to our team",
  },
  hero: {
    eyebrow: "Computational simulation engineering",
    title: "We turn engineering challenges into digital solutions.",
    subtitle:
      "Modeling, simulation and optimization for efficient product and industrial process development.",
    ctaPrimary: "Explore our services",
    ctaSecondary: "Talk to our specialists",
    stat1Value: "CFD · DEM · FEA",
    stat1Label: "Numerical simulation disciplines",
    stat2Value: "100%",
    stat2Label: "National and international reach",
    stat3Value: "Industry + Academia",
    stat3Label: "Partnerships with research centers",
  },
  about: {
    eyebrow: "About R2 Simulation",
    title: "Advanced technical knowledge, in service of your engineering",
    paragraph1:
      "At R2 Simulation, we connect advanced technical expertise with cutting-edge digital tools to deliver tailored solutions in computational simulation, thermal analysis, fluid performance and mechanical design. We work in partnership with companies and research centers, generating real impact on products, processes and people.",
    paragraph2:
      "Our team is made up of engineers with solid academic backgrounds and hands-on experience in complex industrial environments.",
    imageAlt: "R2 Simulation team at a technical conference, next to the company's banner",
  },
  servicesPreview: {
    eyebrow: "What we do",
    title: "Our services",
    subtitle:
      "From numerical simulation to team training, we integrate data science, computational physics and field experience.",
    learnMore: "Learn more",
  },
  differentials: {
    eyebrow: "Why R2",
    title: "What sets us apart",
    subtitle: "What makes our way of working different.",
    items: [
      {
        title: "Specialized, highly qualified team",
        description:
          "Engineers with a strong academic background and hands-on experience applying computational simulation to industry.",
      },
      {
        title: "Hands-on experience with heavy industry and innovation",
        description:
          "From oil & gas to deep-tech startups, we understand the real challenges of operations and product development.",
      },
      {
        title: "Flexibility to work across different segments",
        description:
          "Adaptable methodologies for thermal, fluid, granular, structural processes and complex formulations.",
      },
      {
        title: "Tailored solutions focused on results",
        description:
          "Every project is designed around the client's business problem, not a fixed package of deliverables.",
      },
      {
        title: "Integration between simulation and experimentation",
        description:
          "We cross-check computational models with experimental characterization to validate results with confidence.",
      },
    ],
  },
  clientsPreview: {
    eyebrow: "Trust",
    title: "Clients & partners",
    subtitle:
      "Companies and institutions that collaborate with R2 Simulation on innovation and technology development projects.",
    clientsLabel: "Clients",
    partnersLabel: "Institutional partners",
    ctaLabel: "See all",
  },
  finalCta: {
    title: "Let's talk?",
    subtitle:
      "Want to take your engineering to the next level? Get in touch with our team and discover how we can collaborate with your company.",
    ctaLabel: "Talk to our team",
  },
  services: {
    pageEyebrow: "Services",
    pageTitle: "Engineering solutions for every stage of your process",
    pageSubtitle:
      "Numerical simulation, thermal analysis, fluid and material performance, and technical training — under a single engineering team.",
    list: [
      {
        slug: "numerical-simulation",
        icon: "cfd",
        title: "Numerical Simulation (CFD, DEM, FEA)",
        summary:
          "Predicting the behavior of fluids, granular materials and mechanical structures.",
        intro:
          "We perform advanced computational simulations to predict the behavior of fluids, granular materials and mechanical structures. We work with:",
        itemsLabel: "We work with:",
        items: [
          "Computational Fluid Dynamics (CFD)",
          "Discrete Element Method (DEM)",
          "Finite Element Analysis (FEA)",
        ],
        applications:
          "Applications: mixing processes, complex flows, thermal performance, structural behavior, among others.",
        ctaLabel: "Ask about this service",
      },
      {
        slug: "heat-transfer",
        icon: "heat",
        title: "Heat Transfer",
        summary: "Optimizing thermal exchange in industrial processes and products.",
        intro:
          "We analyze and optimize thermal exchange in industrial processes and products. We identify inefficiencies, critical zones and improvement opportunities in:",
        itemsLabel: "Areas of expertise:",
        items: [
          "Thermal equipment",
          "Cooling and heating systems",
          "Cooling of electronics and mechanical components",
        ],
        ctaLabel: "Ask about this service",
      },
      {
        slug: "fluid-and-material-performance",
        icon: "fluids",
        title: "Fluid & Material Performance Analysis",
        summary:
          "Simulation and experimental characterization of rheology, properties and adhesion.",
        intro: "We integrate simulation and experimental characterization to evaluate:",
        itemsLabel: "We evaluate:",
        items: [
          "Rheology and non-Newtonian behavior",
          "Thermal and mechanical properties",
          "Adhesiveness, tackiness and lubrication",
        ],
        highlight:
          "Ideal for companies working with greases, polymers, paints, cosmetics and advanced technical products.",
        ctaLabel: "Ask about this service",
      },
      {
        slug: "custom-training",
        icon: "courses",
        title: "Custom Training (CAE, Meshing, Applied Rheology)",
        summary:
          "Tailored technical training, delivered in person, online or hybrid.",
        intro:
          "We train technical teams with content aimed at the real needs of industry. Our courses include:",
        itemsLabel: "Course content:",
        items: [
          "CAE fundamentals and practice",
          "Mesh generation and refinement techniques",
          "Practical rheology applications for product development",
        ],
        highlight: "Flexible format: in-person, online or hybrid training.",
        ctaLabel: "Request a training proposal",
      },
    ],
  },
  clientsPage: {
    eyebrow: "Who trusts R2",
    title: "Clients & Partners",
    subtitle:
      "We build long-term relationships with industrial companies and innovation-funding institutions.",
    clientsTitle: "Clients",
    partnersTitle: "Institutional partners",
    clients: ["Petrobras", "Brasil Biofuels", "Recifer", "Silomax"],
    partners: [
      {
        name: "Fundação Araucária",
        description: "Funding science, technology and innovation in Paraná.",
      },
      {
        name: "Centelha (MCTI)",
        description: "National program supporting innovative entrepreneurs.",
      },
      {
        name: "CERNN",
        description: "Research Center on Rheology and Non-Newtonian Fluids.",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's talk?",
    subtitle:
      "Want to take your engineering to the next level? Get in touch with our team and discover how we can collaborate with your company.",
    formName: "Name",
    formEmail: "Email",
    formCompany: "Company",
    formMessage: "Message",
    formSubmit: "Send message",
    formSubmitting: "Sending...",
    formSuccess: "Message sent! Our team will get back to you shortly.",
    formError:
      "We couldn't send your message right now. Please try again or use the email below.",
    addressLabel: "Address",
    address:
      "R. Dep. Heitor Alencar Furtado, 5000, Bloco L, 3rd Floor, room R2 – Ecoville HQ, Curitiba – PR, Brazil",
    emailLabel: "Email",
    phoneLabel: "Phone",
    scopeLabel: "Reach",
    scope: "National and international reach",
    mapCaption: "Ecoville HQ, Curitiba – PR",
  },
  footer: {
    tagline: "Solutions that transform.",
    quickLinks: "Quick links",
    contactTitle: "Contact",
    rights: "All rights reserved.",
  },
  common: {
    languageLabel: "Language",
  },
};
