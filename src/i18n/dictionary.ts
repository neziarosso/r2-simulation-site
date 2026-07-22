export type Locale = "pt" | "en";

export interface ServiceContent {
  slug: string;
  icon: "cfd" | "heat" | "fluids" | "courses";
  title: string;
  summary: string;
  intro: string;
  items: string[];
  itemsLabel: string;
  applications?: string;
  highlight?: string;
  ctaLabel: string;
  partnerBadge?: string;
}

export interface Dictionary {
  nav: {
    home: string;
    services: string;
    clients: string;
    contact: string;
    cta: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stat1Value: string;
    stat1Label: string;
    stat2Value: string;
    stat2Label: string;
    stat3Value: string;
    stat3Label: string;
  };
  about: {
    eyebrow: string;
    title: string;
    paragraph1: string;
    paragraph2: string;
    imageAlt: string;
  };
  servicesPreview: {
    eyebrow: string;
    title: string;
    subtitle: string;
    learnMore: string;
  };
  differentials: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: { title: string; description: string }[];
  };
  clientsPreview: {
    eyebrow: string;
    title: string;
    subtitle: string;
    clientsLabel: string;
    partnersLabel: string;
    ctaLabel: string;
  };
  finalCta: {
    title: string;
    subtitle: string;
    ctaLabel: string;
  };
  services: {
    pageEyebrow: string;
    pageTitle: string;
    pageSubtitle: string;
    list: ServiceContent[];
  };
  clientsPage: {
    eyebrow: string;
    title: string;
    subtitle: string;
    clientsTitle: string;
    partnersTitle: string;
    clients: string[];
    partners: { name: string; description: string }[];
  };
  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    formName: string;
    formEmail: string;
    formCompany: string;
    formMessage: string;
    formSubmit: string;
    formSubmitting: string;
    formSuccess: string;
    formError: string;
    addressLabel: string;
    address: string;
    emailLabel: string;
    phoneLabel: string;
    scopeLabel: string;
    scope: string;
    mapCaption: string;
  };
  footer: {
    tagline: string;
    quickLinks: string;
    contactTitle: string;
    rights: string;
  };
  common: {
    languageLabel: string;
  };
}
