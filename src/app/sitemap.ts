import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://thebrickreview.com";
  const posts = await getAllPosts();

  const englishPostUrls = posts.map((post) => ({
    url: `${baseUrl}/reviews/${post.slug}`,
    lastModified: post.updatedAt || new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const compatPostUrls = posts.map((post) => ({
    url: `${baseUrl}/resenas/${post.slug}`,
    lastModified: post.updatedAt || new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const englishCategories = ["icons", "star-wars", "technic", "ideas", "disney", "dc", "editions"].map((cat) => ({
    url: `${baseUrl}/categories/${cat}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const compatCategories = ["icons", "star-wars", "technic", "ideas", "disney", "dc", "editions"].map((cat) => ({
    url: `${baseUrl}/categorias/${cat}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  const legalUrls = [
    "terms",
    "affiliate",
    "privacy",
    "aviso-legal",
    "afiliacion",
    "privacidad",
  ].map((slug) => ({
    url: `${baseUrl}/legal/${slug}`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.3,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    ...englishPostUrls,
    ...compatPostUrls,
    ...englishCategories,
    ...compatCategories,
    ...legalUrls,
  ];
}