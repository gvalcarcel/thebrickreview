import { db } from "./index";
import { legoSets, posts, affiliateLinks, clickEvents } from "./schema";
import { SAMPLE_SETS, SAMPLE_POSTS } from "../lib/posts";

async function main() {
  console.log("Iniciando sembrado de datos en la base de datos de TheBrickReview...");

  // 0. Limpiar tablas para sincronizar exactamente con el catálogo actual
  await db.delete(clickEvents);
  await db.delete(affiliateLinks);
  await db.delete(posts);
  await db.delete(legoSets);

  // 1. Insertar Sets
  for (const set of Object.values(SAMPLE_SETS)) {
    await db
      .insert(legoSets)
      .values({
        id: set.id,
        setNumber: set.setNumber,
        name: set.name,
        lineTheme: set.lineTheme,
        pieceCount: set.pieceCount,
        minifigsCount: set.minifigsCount,
        officialPriceCents: set.officialPriceCents,
        releaseYear: set.releaseYear,
        isRetired: set.isRetired,
        difficulty: set.difficulty,
        imageUrl: set.imageUrl,
      })
      .onConflictDoUpdate({
        target: legoSets.id,
        set: {
          name: set.name,
          officialPriceCents: set.officialPriceCents,
          isRetired: set.isRetired,
          difficulty: set.difficulty,
        },
      });

    console.log(`Set insertado: #${set.setNumber} - ${set.name}`);

    // Insertar enlaces de afiliado asociados
    if (set.affiliateLinks) {
      for (const link of set.affiliateLinks) {
        await db
          .insert(affiliateLinks)
          .values({
            id: link.id,
            setId: link.setId,
            retailerName: link.retailerName,
            destinationUrl: link.destinationUrl,
            internalSlug: link.internalSlug,
            isActive: link.isActive,
          })
          .onConflictDoUpdate({
            target: affiliateLinks.id,
            set: {
              destinationUrl: link.destinationUrl,
              retailerName: link.retailerName,
              isActive: link.isActive,
            },
          });
      }
    }
  }

  // 2. Insertar Artículos
  for (const post of Object.values(SAMPLE_POSTS)) {
    await db
      .insert(posts)
      .values({
        id: post.id,
        title: post.title,
        slug: post.slug,
        contentMarkdown: post.contentMarkdown,
        excerpt: post.excerpt,
        status: post.status,
        readingTimeMinutes: post.readingTimeMinutes,
        setId: post.setId,
        publishedAt: post.publishedAt,
      })
      .onConflictDoUpdate({
        target: posts.id,
        set: {
          title: post.title,
          contentMarkdown: post.contentMarkdown,
          excerpt: post.excerpt,
        },
      });

    console.log(`Artículo insertado: ${post.title}`);
  }

  console.log("Sembrado de datos finalizado con éxito.");
}

main().catch((err) => {
  console.error("Error sembrando base de datos:", err);
  process.exit(1);
});