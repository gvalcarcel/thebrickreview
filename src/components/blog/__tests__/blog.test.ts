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
    const post = await getPostBySlug("delorean-regreso-al-futuro-10300");
    expect(post).toBeDefined();
    expect(post?.legoSet?.setNumber).toBe("10300");
    expect(post?.legoSet?.lineTheme).toBe("Icons");
    expect(post?.readingTimeMinutes).toBeGreaterThanOrEqual(5);

    const iconsPosts = await getPostsByCategory("icons");
    expect(iconsPosts).toHaveLength(8);
    expect(iconsPosts.map((p) => p.slug)).toContain("delorean-regreso-al-futuro-10300");
    expect(iconsPosts.map((p) => p.slug)).toContain("arcade-pinball-machine-11374");
    expect(iconsPosts.map((p) => p.slug)).toContain("sega-genesis-console-40926");
    expect(iconsPosts.map((p) => p.slug)).toContain("donkey-kong-arcade-72051");
    expect(iconsPosts.map((p) => p.slug)).toContain("scuderia-ferrari-hp-charles-leclerc-helmet-43014");
    expect(iconsPosts.map((p) => p.slug)).toContain("captain-jack-sparrows-pirate-ship-10365");
    expect(iconsPosts.map((p) => p.slug)).toContain("loop-coaster-10303");
    expect(iconsPosts.map((p) => p.slug)).toContain("the-lord-of-the-rings-barad-dur-10333");

    const all = await getAllPosts();
    expect(all.length).toBe(17);

    const homeAlone = await getPostBySlug("home-alone-21330");
    expect(homeAlone).toBeDefined();
    expect(homeAlone?.legoSet?.setNumber).toBe("21330");
    expect(homeAlone?.legoSet?.lineTheme).toBe("Ideas");

    const pinball = await getPostBySlug("arcade-pinball-machine-11374");
    expect(pinball).toBeDefined();
    expect(pinball?.legoSet?.setNumber).toBe("11374");
    expect(pinball?.legoSet?.lineTheme).toBe("Icons");

    const sega = await getPostBySlug("sega-genesis-console-40926");
    expect(sega).toBeDefined();
    expect(sega?.legoSet?.setNumber).toBe("40926");
    expect(sega?.legoSet?.lineTheme).toBe("Icons");

    const segaAlias = await getPostBySlug("sega-genesis-console-11374");
    expect(segaAlias).toBeDefined();
    expect(segaAlias?.legoSet?.setNumber).toBe("40926");

    const snoopy = await getPostBySlug("peanuts-snoopys-doghouse-21368");
    expect(snoopy).toBeDefined();
    expect(snoopy?.legoSet?.setNumber).toBe("21368");
    expect(snoopy?.legoSet?.lineTheme).toBe("Ideas");

    const snoopyAlias = await getPostBySlug("snoopys-doghouse-21368");
    expect(snoopyAlias).toBeDefined();
    expect(snoopyAlias?.legoSet?.setNumber).toBe("21368");

    const dk = await getPostBySlug("donkey-kong-arcade-72051");
    expect(dk).toBeDefined();
    expect(dk?.legoSet?.setNumber).toBe("72051");
    expect(dk?.legoSet?.lineTheme).toBe("Icons");

    const dkAlias = await getPostBySlug("donkey-kong-72051");
    expect(dkAlias).toBeDefined();
    expect(dkAlias?.legoSet?.setNumber).toBe("72051");

    const batman = await getPostBySlug("batman-gotham-city-76271");
    expect(batman).toBeDefined();
    expect(batman?.legoSet?.setNumber).toBe("76271");
    expect(batman?.legoSet?.lineTheme).toBe("DC");
    expect(batman?.galleryImages?.length).toBeGreaterThanOrEqual(6);

    const batmanAlias = await getPostBySlug("gotham-city-76271");
    expect(batmanAlias).toBeDefined();
    expect(batmanAlias?.legoSet?.setNumber).toBe("76271");

    const beauty = await getPostBySlug("beauty-and-the-beast-castle-43263");
    expect(beauty).toBeDefined();
    expect(beauty?.legoSet?.setNumber).toBe("43263");
    expect(beauty?.legoSet?.lineTheme).toBe("Disney");
    expect(beauty?.galleryImages?.length).toBeGreaterThanOrEqual(6);

    const beautyAlias = await getPostBySlug("beauty-and-the-beast-43263");
    expect(beautyAlias).toBeDefined();
    expect(beautyAlias?.legoSet?.setNumber).toBe("43263");

    const leclerc = await getPostBySlug("scuderia-ferrari-hp-charles-leclerc-helmet-43014");
    expect(leclerc).toBeDefined();
    expect(leclerc?.legoSet?.setNumber).toBe("43014");
    expect(leclerc?.legoSet?.lineTheme).toBe("Icons");
    expect(leclerc?.galleryImages?.length).toBeGreaterThanOrEqual(6);

    const leclercAlias = await getPostBySlug("charles-leclerc-helmet-43014");
    expect(leclercAlias).toBeDefined();
    expect(leclercAlias?.legoSet?.setNumber).toBe("43014");

    const mandalorian = await getPostBySlug("mandalorian-n1-starfighter-75442");
    expect(mandalorian).toBeDefined();
    expect(mandalorian?.legoSet?.setNumber).toBe("75442");
    expect(mandalorian?.legoSet?.lineTheme).toBe("Star Wars");
    expect(mandalorian?.galleryImages?.length).toBeGreaterThanOrEqual(6);

    const mandalorianAlias = await getPostBySlug("the-mandalorians-n-1-starfighter-75442");
    expect(mandalorianAlias).toBeDefined();
    expect(mandalorianAlias?.legoSet?.setNumber).toBe("75442");

    const messi = await getPostBySlug("lionel-messi-soccer-legend-43015");
    expect(messi).toBeDefined();
    expect(messi?.legoSet?.setNumber).toBe("43015");
    expect(messi?.legoSet?.lineTheme).toBe("Editions");
    expect(messi?.galleryImages?.length).toBeGreaterThanOrEqual(6);

    const messiAlias = await getPostBySlug("lionel-messi-43015");
    expect(messiAlias).toBeDefined();
    expect(messiAlias?.legoSet?.setNumber).toBe("43015");

    const pirateShip = await getPostBySlug("captain-jack-sparrows-pirate-ship-10365");
    expect(pirateShip).toBeDefined();
    expect(pirateShip?.legoSet?.setNumber).toBe("10365");
    expect(pirateShip?.legoSet?.lineTheme).toBe("Icons");
    expect(pirateShip?.galleryImages?.length).toBeGreaterThanOrEqual(6);

    const pirateShipAlias = await getPostBySlug("black-pearl-10365");
    expect(pirateShipAlias).toBeDefined();
    expect(pirateShipAlias?.legoSet?.setNumber).toBe("10365");

    const loopCoaster = await getPostBySlug("loop-coaster-10303");
    expect(loopCoaster).toBeDefined();
    expect(loopCoaster?.legoSet?.setNumber).toBe("10303");
    expect(loopCoaster?.legoSet?.lineTheme).toBe("Icons");
    expect(loopCoaster?.galleryImages?.length).toBeGreaterThanOrEqual(6);

    const loopCoasterAlias = await getPostBySlug("montana-rusa-loop-10303");
    expect(loopCoasterAlias).toBeDefined();
    expect(loopCoasterAlias?.legoSet?.setNumber).toBe("10303");

    const baradDur = await getPostBySlug("the-lord-of-the-rings-barad-dur-10333");
    expect(baradDur).toBeDefined();
    expect(baradDur?.legoSet?.setNumber).toBe("10333");
    expect(baradDur?.legoSet?.lineTheme).toBe("Icons");
    expect(baradDur?.galleryImages?.length).toBeGreaterThanOrEqual(6);

    const baradDurAlias = await getPostBySlug("barad-dur-10333");
    expect(baradDurAlias).toBeDefined();
    expect(baradDurAlias?.legoSet?.setNumber).toBe("10333");

    const deathStar = await getPostBySlug("death-star-75419");
    expect(deathStar).toBeDefined();
    expect(deathStar?.legoSet?.setNumber).toBe("75419");
    expect(deathStar?.legoSet?.lineTheme).toBe("Star Wars");
    expect(deathStar?.galleryImages?.length).toBeGreaterThanOrEqual(6);

    const deathStarAlias = await getPostBySlug("estrella-de-la-muerte-75419");
    expect(deathStarAlias).toBeDefined();
    expect(deathStarAlias?.legoSet?.setNumber).toBe("75419");

    const messiHighlights = await getPostBySlug("lionel-messi-soccer-highlights-43011");
    expect(messiHighlights).toBeDefined();
    expect(messiHighlights?.legoSet?.setNumber).toBe("43011");
    expect(messiHighlights?.legoSet?.lineTheme).toBe("Editions");
    expect(messiHighlights?.galleryImages?.length).toBeGreaterThanOrEqual(6);

    const messiHighlightsAlias = await getPostBySlug("messi-highlights-43011");
    expect(messiHighlightsAlias).toBeDefined();
    expect(messiHighlightsAlias?.legoSet?.setNumber).toBe("43011");

    const starWarsPosts = await getPostsByCategory("star-wars");
    expect(starWarsPosts).toHaveLength(3);
    expect(starWarsPosts.map((p) => p.slug)).toContain("millennium-falcon-ucs-75192");
    expect(starWarsPosts.map((p) => p.slug)).toContain("mandalorian-n1-starfighter-75442");
    expect(starWarsPosts.map((p) => p.slug)).toContain("death-star-75419");

    const dcPosts = await getPostsByCategory("dc");
    expect(dcPosts).toHaveLength(1);
    expect(dcPosts[0].slug).toBe("batman-gotham-city-76271");

    const disneyPosts = await getPostsByCategory("disney");
    expect(disneyPosts).toHaveLength(1);
    expect(disneyPosts[0].slug).toBe("beauty-and-the-beast-castle-43263");

    const editionsPosts = await getPostsByCategory("editions");
    expect(editionsPosts).toHaveLength(2);
    expect(editionsPosts.map((p) => p.slug)).toContain("lionel-messi-soccer-legend-43015");
    expect(editionsPosts.map((p) => p.slug)).toContain("lionel-messi-soccer-highlights-43011");

    const ideasPosts = await getPostsByCategory("ideas");
    expect(ideasPosts).toHaveLength(2);
    expect(ideasPosts.map((p) => p.slug)).toContain("home-alone-21330");
    expect(ideasPosts.map((p) => p.slug)).toContain("peanuts-snoopys-doghouse-21368");

    // Verify retired/withdrawn posts return null
    expect(await getPostBySlug("medieval-blacksmith-21325")).toBeNull();
    expect(await getPostBySlug("galaxy-explorer-10497")).toBeNull();
    expect(await getPostBySlug("ferrari-daytona-sp3-42143")).toBeNull();
  });
});