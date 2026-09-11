import type { PostWithSet } from "@/types";

interface SchemaJsonLdProps {
  post: PostWithSet;
  ratingValue?: number; // Ej: 9.6
}

export function SchemaJsonLd({ post, ratingValue = 9.5 }: SchemaJsonLdProps) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://thebrickreview.com";
  const articleUrl = `${baseUrl}/resenas/${post.slug}`;

  const schemas: Record<string, unknown>[] = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": articleUrl,
      },
      headline: post.title,
      description: post.excerpt,
      image: post.legoSet?.imageUrl ? [post.legoSet.imageUrl] : undefined,
      datePublished: post.publishedAt ? post.publishedAt.toISOString() : new Date().toISOString(),
      dateModified: post.updatedAt ? post.updatedAt.toISOString() : new Date().toISOString(),
      author: {
        "@type": "Organization",
        name: "Consejo Editorial de The Brick Review",
      },
      publisher: {
        "@type": "Organization",
        name: "The Brick Review",
        logo: {
          "@type": "ImageObject",
          url: `${baseUrl}/assets/logo.png`,
        },
      },
    },
  ];

  if (post.legoSet) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Product",
      name: post.legoSet.name,
      sku: post.legoSet.setNumber,
      image: post.legoSet.imageUrl ? [post.legoSet.imageUrl] : undefined,
      description: `Set de construcción LEGO® ${post.legoSet.name} (#${post.legoSet.setNumber}) con ${post.legoSet.pieceCount} piezas.`,
      brand: {
        "@type": "Brand",
        name: "LEGO",
      },
      offers: {
        "@type": "Offer",
        priceCurrency: "EUR",
        price: post.legoSet.officialPriceCents ? (post.legoSet.officialPriceCents / 100).toFixed(2) : undefined,
        availability: post.legoSet.isRetired
          ? "https://schema.org/Discontinued"
          : "https://schema.org/InStock",
        url: articleUrl,
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: ratingValue.toString(),
        bestRating: "10",
        worstRating: "1",
        ratingCount: "1",
      },
    });
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
    />
  );
}