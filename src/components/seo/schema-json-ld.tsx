import type { PostWithSet } from "@/types";

interface SchemaJsonLdProps {
  post: PostWithSet;
  ratingValue?: number; // Ej: 9.6
}

export function SchemaJsonLd({ post, ratingValue = 9.5 }: SchemaJsonLdProps) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://thebrickreview.com";
  const articleUrl = `${baseUrl}/reviews/${post.slug}`;
  const logoUrl = `${baseUrl}/logo.png`;

  const schemas: Record<string, unknown>[] = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: baseUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: post.legoSet?.lineTheme || "Reviews",
          item: `${baseUrl}/categories/${post.legoSet?.lineTheme?.toLowerCase().replace(/[^a-z0-9]+/g, "-") || "icons"}`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: post.title,
          item: articleUrl,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": articleUrl,
      },
      headline: post.title,
      description: post.excerpt,
      image: post.legoSet?.imageUrl ? [post.legoSet.imageUrl] : [`${baseUrl}/logo.png`],
      datePublished: post.publishedAt ? post.publishedAt.toISOString() : new Date().toISOString(),
      dateModified: post.updatedAt ? post.updatedAt.toISOString() : new Date().toISOString(),
      author: {
        "@type": "Organization",
        name: "Review The Brick Editorial Council",
        url: baseUrl,
      },
      publisher: {
        "@type": "Organization",
        name: "The Brick Review",
        logo: {
          "@type": "ImageObject",
          url: logoUrl,
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
      mpn: post.legoSet.setNumber,
      image: post.legoSet.imageUrl ? [post.legoSet.imageUrl] : undefined,
      description: `Technical engineering review and assembly teardown of LEGO® ${post.legoSet.name} (#${post.legoSet.setNumber}) featuring ${post.legoSet.pieceCount} structural pieces.`,
      brand: {
        "@type": "Brand",
        name: "LEGO",
      },
      review: {
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: ratingValue.toString(),
          bestRating: "10",
          worstRating: "1",
        },
        author: {
          "@type": "Organization",
          name: "The Brick Review",
        },
        reviewBody: post.verdictSummary || post.excerpt,
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: ratingValue.toString(),
        bestRating: "10",
        worstRating: "1",
        ratingCount: "1",
        reviewCount: "1",
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