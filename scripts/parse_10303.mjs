import fs from "fs";

const html = fs.readFileSync("scratch/lego_10303_en.html", "utf8");

// Search for product description block
const idx = html.indexOf("Take your seat. It’s time to relive the thrills");
if (idx !== -1) {
  console.log(html.slice(idx, idx + 2000));
} else {
  // Try searching for "Loop Coaster" or "roller coaster"
  const matches = [...html.matchAll(/"markup"\s*:\s*"([^"]+)"/g)];
  for (const m of matches) {
    if (m[1].includes("coaster") || m[1].includes("elevator")) {
      console.log("MARKUP:\n", m[1].replace(/\\u003c[^>]+>/g, " ").replace(/\\n/g, "\n").slice(0, 1500));
      break;
    }
  }
}
