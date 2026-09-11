import { describe, it, expect } from "vitest";
import { GET } from "../route";
import { SAMPLE_SETS } from "@/lib/posts";

describe("Affiliate Redirection & Cloaking Tests", () => {
  it("TEST-001: should return HTTP 307 with proper location and legal headers", async () => {
    const req = new Request("https://thebrickreview.com/ir/amazon/amazon-galaxy-explorer", {
      headers: {
        "referer": "https://thebrickreview.com/resenas/galaxy-explorer-10497",
        "user-agent": "Vitest-TestRunner/1.0",
      },
    });

    const params = Promise.resolve({
      retailer: "amazon",
      slug: "amazon-galaxy-explorer",
    });

    const res = await GET(req, { params });

    // HTTP 307 Temporary Redirect
    expect(res.status).toBe(307);

    // Location header points to destination affiliate URL
    const location = res.headers.get("Location");
    expect(location).toContain("amazon.es");
    expect(location).toContain("tag=thebrickreview-21");

    // Legal & SEO headers
    expect(res.headers.get("X-Robots-Tag")).toBe("noindex, nofollow");
    expect(res.headers.get("Cache-Control")).toContain("no-cache");
  });

  it("TEST-002: should handle retired sets metadata correctly", () => {
    const galaxyExplorer = SAMPLE_SETS["10497"];
    expect(galaxyExplorer.isRetired).toBe(true);

    const falcon = SAMPLE_SETS["75192"];
    expect(falcon.isRetired).toBe(false);
  });

  it("should gracefully fallback to home if affiliate slug is not found", async () => {
    const req = new Request("https://thebrickreview.com/ir/amazon/non-existent-set");
    const params = Promise.resolve({
      retailer: "amazon",
      slug: "non-existent-set",
    });

    const res = await GET(req, { params });
    expect(res.status).toBe(302);
    expect(res.headers.get("Location")).toContain("not_found_affiliate=non-existent-set");
  });
});