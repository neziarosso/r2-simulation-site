import type { MetadataRoute } from "next";

const siteUrl = "https://www.r2sol.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/servicos", "/clientes-parceiros", "/contato"];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
