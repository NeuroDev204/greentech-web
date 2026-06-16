import type { MetadataRoute } from "next";

const BASE_URL = "https://gtsol.vn";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/services", "/solutions", "/about", "/contact"];

  return routes.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
