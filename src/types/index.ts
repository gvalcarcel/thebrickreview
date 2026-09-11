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

export interface PostWithSet extends Post {
  legoSet?: LegoSet | null;
  affiliateLinks?: AffiliateLink[];
}

export type SetDifficulty = "Iniciación" | "Intermedio" | "Avanzado" | "Experto / AFOL";
