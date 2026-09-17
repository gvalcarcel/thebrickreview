import fs from "fs";

function inspect(file, label) {
  const html = fs.readFileSync(file, "utf8");
  console.log(`\n=== ${label} ===`);
  const pieceMatch = html.match(/\"pieceCount\":\s*(\d+)/) || html.match(/(\d[\d,]*)\s*pieces/i);
  console.log("Piece count:", pieceMatch ? pieceMatch[1] : "N/A");

  const miniMatch = html.match(/(\d+)\s*(?:characters|minifigures)/i);
  console.log("Minifigures:", miniMatch ? miniMatch[0] : "N/A");

  const dimMatches = [...html.matchAll(/(\d+(?:\.\d+)?\s*(?:cm|in\.|inches)[^<,\.]*)/gi)].map(m => m[0]);
  console.log("Dimensions:", dimMatches.slice(0, 6));

  const textMatches = [...html.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gi)].map(m => m[1].replace(/<[^>]+>/g, " ").trim());
  textMatches.filter(t => t.length > 50 && (t.includes("Dimensions") || t.includes("minifigure") || t.includes("model") || t.includes("tower") || t.includes("Star"))).slice(0, 5).forEach(t => console.log("Bullet:", t));
}

inspect("scratch/lego_10333_en.html", "10333 Barad-dur");
inspect("scratch/lego_75419_en.html", "75419 Death Star");

