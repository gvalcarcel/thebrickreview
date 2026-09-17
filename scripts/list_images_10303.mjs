import fs from "fs";

const html = fs.readFileSync("scratch/lego_10303_en.html", "utf8");

const rawMatches = [...html.matchAll(/https:\/\/[^"'\s<>]+\.(?:jpg|png|webp|jpeg)(?:\?[^"'\s<>]*)?/gi)].map(m => m[0]);
const cleaned = rawMatches.map(u => u.replace(/&amp;/g, "&").replace(/\\u0026/g, "&"));

const filtered = cleaned.filter(u =>
  u.includes("lego.com/cdn") &&
  (u.includes("10303") || u.includes("set/assets") || u.includes("SKROLL") || u.includes("FeatureExplorer") || u.includes("SEC0") || u.includes("Hero_")) &&
  !u.includes("icon") && !u.includes("logo") && !u.includes("flag") && !u.includes("avatar") && !u.includes("favicon") &&
  !u.includes("width=170") && !u.includes("width=160") && !u.includes("dpr=2") && !u.includes("dpr=3")
);

const seenBases = new Set();
const candidates = [];
for (const u of filtered) {
  const base = u.split("?")[0];
  if (!seenBases.has(base)) {
    seenBases.add(base);
    candidates.push(u);
  }
}

console.log("Candidate images count:", candidates.length);
candidates.forEach((c, i) => {
  const file = c.split("?")[0].split("/").pop();
  console.log(`${i+1}: ${file} -> ${c}`);
});
