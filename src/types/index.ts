import type { InferSelectModel, InferInsertModel } from "drizzle-orm";
import type { legoSets, posts, affiliateLinks, clickEvents } from "../db/schema";

export type LegoSet = InferSelectModel<typeof legoSets>;
export type NewLegoSet = InferInsertModel<typeof legoSets>;

export type Post = InferSelectModel<typeof posts>;
export type NewPost = InferInsertModel<typeof posts>;

export type AffiliateLink = InferSelectModel<typeof affiliateLinks>;
export type NewAffiliateLink = InferInsertModel<typeof affiliateLinks>;

export type ClickEvent = InferSelectModel<typeof clickEvents>;
export type NewClickEvent = InferInsertModel<typeof clickEvents>;

export interface ReviewMetric {
  label: string;
  score: number; // 1-10
  iconType?: "techniques" | "rigidity" | "flow" | "quality";
}

export interface BuildGalleryImage {
  url: string;
  caption: string;
  alt?: string;
}

export interface LegoSetMeta extends LegoSet {
  scaleCategory?: string;
  clutchScore?: number;
  galleryImages?: BuildGalleryImage[];
}

export interface PostWithSet extends Post {
  legoSet?: LegoSetMeta | null;
  affiliateLinks?: AffiliateLink[];
  pros?: string[];
  cons?: string[];
  verdictScore?: number;
  verdictSummary?: string;
  metrics?: ReviewMetric[];
  galleryImages?: BuildGalleryImage[];
}

export type SetDifficulty = "Beginner" | "Intermediate" | "Advanced" | "Expert / AFOL" | "Iniciación" | "Intermedio" | "Avanzado";
