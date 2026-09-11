import { describe, it, expect } from "vitest";
import { getAllPosts } from "@/lib/posts";
import type { PostWithSet } from "@/types";

describe("Faceted Search & Filter Engine Tests", () => {
  function filterPosts(
    posts: PostWithSet[],
    filters: {
      searchQuery?: string;
      selectedTheme?: string;
      selectedDifficulty?: string;
      retiredFilter?: "TODOS" | "ACTIVO" | "RETIRED";
    }
  ): PostWithSet[] {
    const {
      searchQuery = "",
      selectedTheme = "TODOS",
      selectedDifficulty = "TODOS",
      retiredFilter = "TODOS",
    } = filters;

    return posts.filter((post) => {
      const q = searchQuery.toLowerCase().trim();
      const matchesText =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        (post.legoSet?.name.toLowerCase().includes(q) ?? false) ||
        (post.legoSet?.setNumber.includes(q) ?? false);

      const matchesTheme =
        selectedTheme === "TODOS" || post.legoSet?.lineTheme === selectedTheme;

      const matchesDifficulty =
        selectedDifficulty === "TODOS" || post.legoSet?.difficulty === selectedDifficulty;

      const matchesRetired =
        retiredFilter === "TODOS" ||
        (retiredFilter === "RETIRED" && Boolean(post.legoSet?.isRetired)) ||
        (retiredFilter === "ACTIVO" && !post.legoSet?.isRetired);

      return matchesText && matchesTheme && matchesDifficulty && matchesRetired;
    });
  }

  it("should match posts by set number or set name query", async () => {
    const posts = await getAllPosts();

    const byNumber = filterPosts(posts, { searchQuery: "75192" });
    expect(byNumber).toHaveLength(1);
    expect(byNumber[0].slug).toBe("millennium-falcon-ucs-75192");

    const byName = filterPosts(posts, { searchQuery: "delorean" });
    expect(byName).toHaveLength(1);
    expect(byName[0].legoSet?.setNumber).toBe("10300");
  });

  it("should filter posts by theme / lineTheme", async () => {
    const posts = await getAllPosts();

    const starWars = filterPosts(posts, { selectedTheme: "Star Wars" });
    expect(starWars).toHaveLength(1);
    expect(starWars[0].legoSet?.setNumber).toBe("75192");

    const technic = filterPosts(posts, { selectedTheme: "Technic" });
    expect(technic).toHaveLength(1);
    expect(technic[0].legoSet?.setNumber).toBe("42143");

    const ideas = filterPosts(posts, { selectedTheme: "Ideas" });
    expect(ideas).toHaveLength(1);
    expect(ideas[0].legoSet?.setNumber).toBe("21325");
  });

  it("should filter posts by difficulty tier", async () => {
    const posts = await getAllPosts();

    const expert = filterPosts(posts, { selectedDifficulty: "Experto / AFOL" });
    expect(expert.length).toBe(2);
    expect(expert.map((p) => p.legoSet?.setNumber)).toContain("75192");
    expect(expert.map((p) => p.legoSet?.setNumber)).toContain("42143");

    const advanced = filterPosts(posts, { selectedDifficulty: "Avanzado" });
    expect(advanced.length).toBe(2);

    const intermediate = filterPosts(posts, { selectedDifficulty: "Intermedio" });
    expect(intermediate.length).toBe(1);
    expect(intermediate[0].legoSet?.setNumber).toBe("10497");
  });

  it("should filter posts by retired vs active catalog status", async () => {
    const posts = await getAllPosts();

    const retired = filterPosts(posts, { retiredFilter: "RETIRED" });
    expect(retired.length).toBe(2);
    expect(retired.map((p) => p.legoSet?.setNumber)).toContain("10497");
    expect(retired.map((p) => p.legoSet?.setNumber)).toContain("21325");

    const active = filterPosts(posts, { retiredFilter: "ACTIVO" });
    expect(active.length).toBe(3);
  });

  it("should return empty list when no criteria match", async () => {
    const posts = await getAllPosts();
    const none = filterPosts(posts, { searchQuery: "Ninjago Mech 99999" });
    expect(none).toHaveLength(0);
  });
});