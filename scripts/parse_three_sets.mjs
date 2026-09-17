import fs from "fs";

function parseSet(file, setNum) {
  if (!fs.existsSync(file)) {
    console.log(`File ${file} not found.`);
    return;
  }
  const html = fs.readFileSync(file, "utf8");
  console.log(`\n=================== SET #${setNum} ===================`);
  
  // Title
  const titleMatch = html.match(/<title>([^<]+)<\/title>/i);
  console.log("Title:", titleMatch ? titleMatch[1] : "N/A");

  // Pieces
  const pieceMatches = [...html.matchAll(/(\d[\d,]*)\s*(?:Pieces|pieces)/g)];
  console.log("Pieces:", pieceMatches.map(m => m[0]));

  // Minifigures
  const minifigMatches = [...html.matchAll(/(\d+)\s*(?:minifigures?|Minifigures?)/g)];
  console.log("Minifigures:", minifigMatches.map(m => m[0]));

  // Dimensions
  const dimMatches = [...html.matchAll(/(\d+(?:\.\d+)?\s*(?:cm|in\.|inches)[^<,\.]*)/gi)];
  console.log("Dimensions:", dimMatches.map(m => m[0]).slice(0, 10));

  // Paragraphs
  const pMatches = [...html.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)].map(m => m[1].replace(/<[^>]+>/g, " ").trim());
  pMatches.filter(p => p.length > 80 && !p.includes("cookie")).slice(0, 4).forEach((p, i) => console.log(`P${i+1}: ${p}\n`));
  
  // Bullets
  const liMatches = [...html.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gi)].map(m => m[1].replace(/<[^>]+>/g, " ").trim());
  liMatches.filter(l => l.length > 40 && (l.includes("Dimensions") || l.includes("minifigure") || l.includes("set") || l.includes("Features"))).slice(0, 6).forEach((l, i) => console.log(`LI${i+1}: ${l}`));
}

parseSet("scratch/lego_10333_en.html", "10333");
parseSet("scratch/lego_75419_en.html", "75419");
parseSet("scratch/lego_43011_en.html", "43011");

