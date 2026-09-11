import { describe, it, expect } from "vitest";
import { parseMarkdownToHtml, extractTableOfContents } from "@/lib/markdown";
import { getPostBySlug, getPostsByCategory, getAllPosts } from "@/lib/posts";

describe("Editorial Blog & Markdown Viewer Tests", () => {
  const sampleMd = `
## Introduccion al Modelo
Texto del analisis...

### Anatomia del Ensamblaje
Detalles tecnicos...

## Veredicto Final
Conclusion del revisor.
`;

  it("should extract table of contents with proper hierarchy and IDs", () => {
    const toc = extractTableOfContents(sampleMd);
    expect(toc).toHaveLength(3);
    expect(toc[0]).toEqual({
      id: "introduccion-al-modelo",
      text: "Introduccion al Modelo",
      level: 2,
    });
    expect(toc[1]).toEqual({
      id: "anatomia-del-ensamblaje",
      text: "Anatomia del Ensamblaje",
      level: 3,
    });
    expect(toc[2]).toEqual({
      id: "veredicto-final",
      text: "Veredicto Final",
      level: 2,
    });
  });

  it("should render markdown to HTML with heading anchors", () => {
    const html = parseMarkdownToHtml(sampleMd);
    expect(html).toContain('<h2 id="introduccion-al-modelo" class="scroll-mt-24">Introduccion al Modelo</h2>');
    expect(html).toContain('<h3 id="anatomia-del-ensamblaje" class="scroll-mt-24">Anatomia del Ensamblaje</h3>');
    expect(html).toContain("<p>Texto del analisis...</p>");
  });

  it("should retrieve posts and related Lego set metadata", async () => {
    const post = await getPostBySlug("galaxy-explorer-10497");
    expect(post).toBeDefined();
    expect(post?.legoSet?.setNumber).toBe("10497");
    expect(post?.legoSet?.lineTheme).toBe("Icons");
    expect(post?.readingTimeMinutes).toBeGreaterThanOrEqual(5);

    const iconsPosts = await getPostsByCategory("icons");
    expect(iconsPosts).toHaveLength(1);
    expect(iconsPosts[0].slug).toBe("galaxy-explorer-10497");

    const all = await getAllPosts();
    expect(all.length).toBeGreaterThanOrEqual(2);
  });
});