import { describe, it, expect } from "vitest";
import sitemap from "@/app/sitemap";
import robots from "@/app/robots";
import { SAMPLE_POSTS } from "@/lib/posts";

describe("Technical SEO & Schema Tests", () => {
  it("should generate a complete sitemap including posts, categories, and legal pages", async () => {
    const map = await sitemap();
    expect(map.length).toBeGreaterThanOrEqual(10);

    const urls = map.map((entry) => entry.url);
    expect(urls).toContain("https://thebrickreview.com");
    expect(urls).toContain("https://thebrickreview.com/resenas/galaxy-explorer-10497");
    expect(urls).toContain("https://thebrickreview.com/categorias/icons");
    expect(urls).toContain("https://thebrickreview.com/legal/aviso-legal");
    expect(urls).toContain("https://thebrickreview.com/legal/afiliacion");
    expect(urls).toContain("https://thebrickreview.com/legal/privacidad");
  });

  it("should configure robots.txt to disallow cloaked affiliate links and admin paths", () => {
    const rob = robots();
    const rules = Array.isArray(rob.rules) ? rob.rules[0] : rob.rules;

    expect(rules?.disallow).toContain("/ir/");
    expect(rules?.disallow).toContain("/admin/");
    expect(rob.sitemap).toBe("https://thebrickreview.com/sitemap.xml");
  });

  it("should verify schema metadata for sample posts", () => {
    const post = SAMPLE_POSTS["galaxy-explorer-10497"];
    expect(post.legoSet?.name).toBe("Galaxy Explorer");
    expect(post.legoSet?.setNumber).toBe("10497");
    expect(post.legoSet?.isRetired).toBe(true);
  });
});