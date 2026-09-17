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
        selectedDifficulty === "TODOS" ||
        selectedDifficulty === "ALL" ||
        post.legoSet?.difficulty === selectedDifficulty ||
        (selectedDifficulty === "Experto / AFOL" && post.legoSet?.difficulty === "Expert / AFOL") ||
        (selectedDifficulty === "Avanzado" && post.legoSet?.difficulty === "Advanced") ||
        (selectedDifficulty === "Intermedio" && post.legoSet?.difficulty === "Intermediate") ||
        (selectedDifficulty === "Iniciación" && post.legoSet?.difficulty === "Beginner");

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
    expect(starWars).toHaveLength(3);
    expect(starWars.map((p) => p.legoSet?.setNumber)).toContain("75192");
    expect(starWars.map((p) => p.legoSet?.setNumber)).toContain("75442");
    expect(starWars.map((p) => p.legoSet?.setNumber)).toContain("75419");

    const technic = filterPosts(posts, { selectedTheme: "Technic" });
    expect(technic).toHaveLength(0);

    const ideas = filterPosts(posts, { selectedTheme: "Ideas" });
    expect(ideas).toHaveLength(2);
    expect(ideas.map((p) => p.legoSet?.setNumber)).toContain("21330");
    expect(ideas.map((p) => p.legoSet?.setNumber)).toContain("21368");

    const icons = filterPosts(posts, { selectedTheme: "Icons" });
    expect(icons).toHaveLength(8);
    expect(icons.map((p) => p.legoSet?.setNumber)).toContain("10300");
    expect(icons.map((p) => p.legoSet?.setNumber)).toContain("11374");
    expect(icons.map((p) => p.legoSet?.setNumber)).toContain("40926");
    expect(icons.map((p) => p.legoSet?.setNumber)).toContain("72051");
    expect(icons.map((p) => p.legoSet?.setNumber)).toContain("43014");
    expect(icons.map((p) => p.legoSet?.setNumber)).toContain("10365");
    expect(icons.map((p) => p.legoSet?.setNumber)).toContain("10303");
    expect(icons.map((p) => p.legoSet?.setNumber)).toContain("10333");

    const dc = filterPosts(posts, { selectedTheme: "DC" });
    expect(dc).toHaveLength(1);
    expect(dc[0].legoSet?.setNumber).toBe("76271");

    const disney = filterPosts(posts, { selectedTheme: "Disney" });
    expect(disney).toHaveLength(1);
    expect(disney[0].legoSet?.setNumber).toBe("43263");

    const editions = filterPosts(posts, { selectedTheme: "Editions" });
    expect(editions).toHaveLength(2);
    expect(editions.map((p) => p.legoSet?.setNumber)).toContain("43015");
    expect(editions.map((p) => p.legoSet?.setNumber)).toContain("43011");
  });

  it("should filter posts by difficulty tier", async () => {
    const posts = await getAllPosts();

    const expert = filterPosts(posts, { selectedDifficulty: "Experto / AFOL" });
    expect(expert.length).toBe(6);
    expect(expert.map((p) => p.legoSet?.setNumber)).toContain("75192");
    expect(expert.map((p) => p.legoSet?.setNumber)).toContain("76271");
    expect(expert.map((p) => p.legoSet?.setNumber)).toContain("75442");
    expect(expert.map((p) => p.legoSet?.setNumber)).toContain("10303");
    expect(expert.map((p) => p.legoSet?.setNumber)).toContain("10333");
    expect(expert.map((p) => p.legoSet?.setNumber)).toContain("75419");

    const advanced = filterPosts(posts, { selectedDifficulty: "Avanzado" });
    expect(advanced.length).toBe(6);
    expect(advanced.map((p) => p.legoSet?.setNumber)).toContain("10300");
    expect(advanced.map((p) => p.legoSet?.setNumber)).toContain("21330");
    expect(advanced.map((p) => p.legoSet?.setNumber)).toContain("11374");
    expect(advanced.map((p) => p.legoSet?.setNumber)).toContain("72051");
    expect(advanced.map((p) => p.legoSet?.setNumber)).toContain("43263");
    expect(advanced.map((p) => p.legoSet?.setNumber)).toContain("10365");

    const intermediate = filterPosts(posts, { selectedDifficulty: "Intermedio" });
    expect(intermediate.length).toBe(4);
    expect(intermediate.map((p) => p.legoSet?.setNumber)).toContain("40926");
    expect(intermediate.map((p) => p.legoSet?.setNumber)).toContain("21368");
    expect(intermediate.map((p) => p.legoSet?.setNumber)).toContain("43014");
    expect(intermediate.map((p) => p.legoSet?.setNumber)).toContain("43015");

    const beginner = filterPosts(posts, { selectedDifficulty: "Iniciación" });
    expect(beginner.length).toBe(1);
    expect(beginner[0].legoSet?.setNumber).toBe("43011");
  });

  it("should filter posts by retired vs active catalog status", async () => {
    const posts = await getAllPosts();

    const retired = filterPosts(posts, { retiredFilter: "RETIRED" });
    expect(retired.length).toBe(0);

    const active = filterPosts(posts, { retiredFilter: "ACTIVO" });
    expect(active.length).toBe(17);
    expect(active.map((p) => p.legoSet?.setNumber)).toContain("75192");
    expect(active.map((p) => p.legoSet?.setNumber)).toContain("10300");
    expect(active.map((p) => p.legoSet?.setNumber)).toContain("21330");
    expect(active.map((p) => p.legoSet?.setNumber)).toContain("11374");
    expect(active.map((p) => p.legoSet?.setNumber)).toContain("40926");
    expect(active.map((p) => p.legoSet?.setNumber)).toContain("21368");
    expect(active.map((p) => p.legoSet?.setNumber)).toContain("72051");
    expect(active.map((p) => p.legoSet?.setNumber)).toContain("76271");
    expect(active.map((p) => p.legoSet?.setNumber)).toContain("43263");
    expect(active.map((p) => p.legoSet?.setNumber)).toContain("43014");
    expect(active.map((p) => p.legoSet?.setNumber)).toContain("75442");
    expect(active.map((p) => p.legoSet?.setNumber)).toContain("43015");
    expect(active.map((p) => p.legoSet?.setNumber)).toContain("10365");
    expect(active.map((p) => p.legoSet?.setNumber)).toContain("10303");
    expect(active.map((p) => p.legoSet?.setNumber)).toContain("10333");
    expect(active.map((p) => p.legoSet?.setNumber)).toContain("75419");
    expect(active.map((p) => p.legoSet?.setNumber)).toContain("43011");
  });

  it("should return empty list when no criteria match", async () => {
    const posts = await getAllPosts();
    const none = filterPosts(posts, { searchQuery: "Ninjago Mech 99999" });
    expect(none).toHaveLength(0);
  });
});