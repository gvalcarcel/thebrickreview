import { describe, it, expect } from "vitest";
import { GET } from "../route";
import { SAMPLE_SETS } from "@/lib/posts";

describe("Affiliate Redirection & Cloaking Tests", () => {
  it("TEST-001: should return HTTP 307 with proper location and legal headers", async () => {
    const req = new Request("https://thebrickreview.com/ir/aliexpress/aliexpress-arcade-pinball-machine-11374", {
      headers: {
        "referer": "https://thebrickreview.com/reviews/arcade-pinball-machine-11374",
        "user-agent": "Vitest-TestRunner/1.0",
      },
    });

    const params = Promise.resolve({
      retailer: "aliexpress",
      slug: "aliexpress-arcade-pinball-machine-11374",
    });

    const res = await GET(req, { params });

    // HTTP 307 Temporary Redirect
    expect(res.status).toBe(307);

    // Location header points to destination affiliate URL
    const location = res.headers.get("Location");
    expect(location).toContain("aliexpress.com");

    // Legal & SEO headers
    expect(res.headers.get("X-Robots-Tag")).toBe("noindex, nofollow");
    expect(res.headers.get("Cache-Control")).toContain("no-cache");
  });

  it("TEST-002: should verify set metadata correctly", () => {
    const falcon = SAMPLE_SETS["75192"];
    expect(falcon.isRetired).toBe(false);
    expect(falcon.difficulty).toBe("Expert / AFOL");

    const pinball = SAMPLE_SETS["11374"];
    expect(pinball.isRetired).toBe(false);
    expect(pinball.clutchScore).toBe(9.8);
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