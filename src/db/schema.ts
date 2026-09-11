import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";
import { relations } from "drizzle-orm";

export const legoSets = sqliteTable("lego_sets", {
  id: text("id").primaryKey(),
  setNumber: text("set_number").notNull().unique(),
  name: text("name").notNull(),
  lineTheme: text("line_theme").notNull(), // Ej: "Icons", "Star Wars", "Technic"
  pieceCount: integer("piece_count").notNull(),
  minifigsCount: integer("minifigs_count").default(0),
  officialPriceCents: integer("official_price_cents"), // en céntimos para evitar decimales
  releaseYear: integer("release_year").notNull(),
  isRetired: integer("is_retired", { mode: "boolean" }).default(false).notNull(),
  difficulty: text("difficulty", { enum: ["Iniciación", "Intermedio", "Avanzado", "Experto / AFOL"] }).default("Intermedio").notNull(),
  imageUrl: text("image_url"),
  createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(() => new Date()),
});

export const posts = sqliteTable("posts", {
  id: text("id").primaryKey(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  contentMarkdown: text("content_markdown").notNull(),
  excerpt: text("excerpt").notNull(),
  status: text("status", { enum: ["draft", "published", "archived"] }).default("draft").notNull(),
  readingTimeMinutes: integer("reading_time_minutes").default(5).notNull(),
  setId: text("set_id").references(() => legoSets.id),
  publishedAt: integer("published_at", { mode: "timestamp" }),
  createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(() => new Date()),
  updatedAt: integer("updated_at", { mode: "timestamp" }).$defaultFn(() => new Date()),
});

export const affiliateLinks = sqliteTable("affiliate_links", {
  id: text("id").primaryKey(),
  setId: text("set_id").notNull().references(() => legoSets.id, { onDelete: "cascade" }),
  retailerName: text("retailer_name").notNull(), // "Amazon", "Tienda Oficial LEGO", "Zavvi"
  destinationUrl: text("destination_url").notNull(),
  internalSlug: text("internal_slug").notNull().unique(),
  isActive: integer("is_active", { mode: "boolean" }).default(true).notNull(),
  createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(() => new Date()),
});

export const clickEvents = sqliteTable("click_events", {
  id: text("id").primaryKey(),
  linkId: text("link_id").notNull().references(() => affiliateLinks.id, { onDelete: "cascade" }),
  clickedAt: integer("clicked_at", { mode: "timestamp" }).$defaultFn(() => new Date()),
  referer: text("referer"),
  userAgent: text("user_agent"),
});

// Relaciones Drizzle
export const legoSetsRelations = relations(legoSets, ({ many }) => ({
  posts: many(posts),
  affiliateLinks: many(affiliateLinks),
}));

export const postsRelations = relations(posts, ({ one }) => ({
  legoSet: one(legoSets, {
    fields: [posts.setId],
    references: [legoSets.id],
  }),
}));

export const affiliateLinksRelations = relations(affiliateLinks, ({ one, many }) => ({
  legoSet: one(legoSets, {
    fields: [affiliateLinks.setId],
    references: [legoSets.id],
  }),
  clickEvents: many(clickEvents),
}));

export const clickEventsRelations = relations(clickEvents, ({ one }) => ({
  link: one(affiliateLinks, {
    fields: [clickEvents.linkId],
    references: [affiliateLinks.id],
  }),
}));
