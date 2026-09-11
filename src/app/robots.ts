import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://thebrickreview.com";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/ir/", "/admin/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}