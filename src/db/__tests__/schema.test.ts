import { describe, it, expect, beforeAll } from "vitest";
import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
import { legoSets, posts, affiliateLinks, clickEvents } from "../schema";
import { formatPriceCents, calculatePricePerPiece, slugify } from "../../lib/utils";

describe("Database Schema & Utility Tests", () => {
  it("should correctly format prices and piece ratios according to editorial standards", () => {
    expect(formatPriceCents(9999)).toBe("99,99\u00a0€");
    expect(formatPriceCents(null)).toBe("Consultar disponibilidad");

    // Ratio precio / pieza
    expect(calculatePricePerPiece(9999, 1254)).toBe("0.08 €/pieza");
    expect(calculatePricePerPiece(null, 1000)).toBeNull();
    expect(calculatePricePerPiece(1000, 0)).toBeNull();

    // Slugs amigables
    expect(slugify("Galaxy Explorer 10497 (Edición 90 Aniversario)")).toBe("galaxy-explorer-10497-edicion-90-aniversario");
  });

  it("should initialize schema and insert relations in SQLite", async () => {
    const memoryClient = createClient({ url: ":memory:" });
    const memoryDb = drizzle(memoryClient);

    // Crear tablas en memoria para prueba de integridad
    await memoryClient.execute(`
      CREATE TABLE lego_sets (
        id TEXT PRIMARY KEY,
        set_number TEXT NOT NULL UNIQUE,
        name TEXT NOT NULL,
        line_theme TEXT NOT NULL,
        piece_count INTEGER NOT NULL,
        minifigs_count INTEGER DEFAULT 0,
        official_price_cents INTEGER,
        release_year INTEGER NOT NULL,
        is_retired INTEGER DEFAULT 0 NOT NULL,
        difficulty TEXT DEFAULT 'Intermedio' NOT NULL,
        image_url TEXT,
        created_at INTEGER
      );
    `);

    await memoryClient.execute(`
      CREATE TABLE posts (
        id TEXT PRIMARY KEY,
        title TEXT NOT NULL,
        slug TEXT NOT NULL UNIQUE,
        content_markdown TEXT NOT NULL,
        excerpt TEXT NOT NULL,
        status TEXT DEFAULT 'draft' NOT NULL,
        reading_time_minutes INTEGER DEFAULT 5 NOT NULL,
        set_id TEXT REFERENCES lego_sets(id),
        published_at INTEGER,
        created_at INTEGER,
        updated_at INTEGER
      );
    `);

    await memoryClient.execute(`
      CREATE TABLE affiliate_links (
        id TEXT PRIMARY KEY,
        set_id TEXT NOT NULL REFERENCES lego_sets(id) ON DELETE CASCADE,
        retailer_name TEXT NOT NULL,
        destination_url TEXT NOT NULL,
        internal_slug TEXT NOT NULL UNIQUE,
        is_active INTEGER DEFAULT 1 NOT NULL,
        created_at INTEGER
      );
    `);

    await memoryClient.execute(`
      CREATE TABLE click_events (
        id TEXT PRIMARY KEY,
        link_id TEXT NOT NULL REFERENCES affiliate_links(id) ON DELETE CASCADE,
        clicked_at INTEGER,
        referer TEXT,
        user_agent TEXT
      );
    `);

    // Inserción de Set
    await memoryDb.insert(legoSets).values({
      id: "set-10497",
      setNumber: "10497",
      name: "Galaxy Explorer",
      lineTheme: "Icons",
      pieceCount: 1254,
      minifigsCount: 4,
      officialPriceCents: 9999,
      releaseYear: 2022,
      isRetired: true,
      difficulty: "Intermedio",
    });

    // Inserción de Post
    await memoryDb.insert(posts).values({
      id: "post-1",
      title: "Reseña del Galaxy Explorer 10497",
      slug: "galaxy-explorer-10497",
      contentMarkdown: "# Análisis...",
      excerpt: "Nostalgia espacial...",
      status: "published",
      readingTimeMinutes: 6,
      setId: "set-10497",
    });

    // Inserción de Link de Afiliado
    await memoryDb.insert(affiliateLinks).values({
      id: "link-1",
      setId: "set-10497",
      retailerName: "Amazon",
      destinationUrl: "https://amazon.es/dp/B0B1XXXXXX?tag=thebrickreview-21",
      internalSlug: "amazon-galaxy-explorer",
      isActive: true,
    });

    // Inserción de Clic
    await memoryDb.insert(clickEvents).values({
      id: "click-1",
      linkId: "link-1",
      referer: "https://thebrickreview.com/resenas/galaxy-explorer-10497",
      userAgent: "Mozilla/5.0",
    });

    // Verificación
    const sets = await memoryDb.select().from(legoSets);
    expect(sets).toHaveLength(1);
    expect(sets[0].name).toBe("Galaxy Explorer");
    expect(sets[0].isRetired).toBe(true);

    const links = await memoryDb.select().from(affiliateLinks);
    expect(links).toHaveLength(1);
    expect(links[0].internalSlug).toBe("amazon-galaxy-explorer");
  });
});
