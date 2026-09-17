#!/usr/bin/env node
import { execSync } from "child_process";
import fs from "fs";
import path from "path";

/**
 * CLI Tool: extract_lego_images.mjs
 * Extracts, verifies, and formats official LEGO.com build & assembly images
 * for inclusion in The Brick Review catalog.
 * 
 * Usage:
 *   node scripts/extract_lego_images.mjs <setNumber> <legoProductUrl>
 * 
 * Example:
 *   node scripts/extract_lego_images.mjs 10300 https://www.lego.com/es-es/product/back-to-the-future-time-machine-10300
 */

async function main() {
  const args = process.argv.slice(2);
  if (args.length < 2) {
    console.log("Usage: node scripts/extract_lego_images.mjs <setNumber> <legoProductUrl>");
    console.log("Example: node scripts/extract_lego_images.mjs 72051 https://www.lego.com/es-es/product/donkey-kong-arcade-72051");
    process.exit(1);
  }

  const [setNumber, legoUrl] = args;
  console.log(`\n🔍 Fetching official LEGO product page for Set #${setNumber}...`);
  console.log(`URL: ${legoUrl}`);

  const tempFile = path.resolve(`.tmp_lego_${setNumber}.html`);
  try {
    execSync(
      `curl.exe -s -A "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36" -H "Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8" -H "Accept-Language: es-ES,es;q=0.9,en;q=0.8" "${legoUrl}" -o "${tempFile}"`,
      { timeout: 30000 }
    );
  } catch (err) {
    console.error(`❌ Failed to fetch page via curl: ${err.message}`);
    process.exit(1);
  }

  if (!fs.existsSync(tempFile)) {
    console.error("❌ Temporary file not found.");
    process.exit(1);
  }

  const html = fs.readFileSync(tempFile, "utf-8");
  try { fs.unlinkSync(tempFile); } catch {}

  const rawMatches = [...html.matchAll(/https:\/\/[^"'\s<>]+\.(?:jpg|png|webp|jpeg)(?:\?[^"'\s<>]*)?/gi)].map(m => m[0]);
  const cleaned = rawMatches.map(u => u.replace(/&amp;/g, "&").replace(/\\u0026/g, "&"));

  const filtered = cleaned.filter(u =>
    u.includes("lego.com/cdn") &&
    (u.includes(setNumber) || u.includes("set/assets") || u.includes("SKROLL") || u.includes("FeatureExplorer") || u.includes("SEC0") || u.includes("Hero_")) &&
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

  console.log(`📸 Found ${candidates.length} unique image candidates. Verifying live HTTP 200 availability...`);

  const results = await Promise.all(
    candidates.map(async (url) => {
      try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 4000);
        const res = await fetch(url, {
          method: "HEAD",
          headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36" },
          signal: controller.signal
        });
        clearTimeout(timeout);
        return { url, ok: res.status === 200 };
      } catch {
        return { url, ok: false };
      }
    })
  );

  const verified = results.filter(r => r.ok).map(r => r.url);
  console.log(`✅ Verified ${verified.length} accessible images on LEGO CDN.\n`);

  const prodShot = verified.find(u => u.toLowerCase().includes("prod") && !u.toLowerCase().includes("box")) || verified[0];
  const buildShots = verified.filter(u => u !== prodShot && !u.toLowerCase().includes("box")).slice(0, 6);

  console.log("--------------------------------------------------");
  console.log("Primary imageUrl:");
  console.log(`"${prodShot}"\n`);

  console.log("galleryImages array for scripts/write_posts.mjs:");
  const galleryItems = [
    { url: prodShot, caption: `Full assembled model showcase #${setNumber}` },
    ...buildShots.map((u, i) => ({
      url: u,
      caption: `Assembly detail & architecture angle #${i + 1}`
    }))
  ];

  console.log(JSON.stringify(galleryItems, null, 2));
  console.log("--------------------------------------------------\n");
}

main();

