import sharp from "sharp";
import fs from "fs";

async function processLogo() {
  const { data, info } = await sharp("public/logo.jpg")
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const w = info.width;
  const h = info.height;
  const out = Buffer.from(data);

  // Flood fill from all 4 borders
  const visited = new Uint8Array(w * h);
  const queue = [];

  // Seed borders
  for (let x = 0; x < w; x++) {
    queue.push(x, 0);
    queue.push(x, h - 1);
    visited[0 * w + x] = 1;
    visited[(h - 1) * w + x] = 1;
  }
  for (let y = 0; y < h; y++) {
    queue.push(0, y);
    queue.push(w - 1, y);
    visited[y * w + 0] = 1;
    visited[y * w + (w - 1)] = 1;
  }

  let head = 0;
  while (head < queue.length) {
    const x = queue[head++];
    const y = queue[head++];
    const idx = (y * w + x) * 4;

    const r = data[idx];
    const g = data[idx + 1];
    const b = data[idx + 2];

    // Background is near white/light grey (r > 225, g > 220, b > 215)
    // and color distance is small (low saturation)
    const isBg = r > 222 && g > 218 && b > 210 && Math.abs(r - g) < 20 && Math.abs(r - b) < 25;

    if (isBg) {
      out[idx + 3] = 0; // Make transparent

      // Check 4 neighbors
      const neighbors = [
        [x + 1, y],
        [x - 1, y],
        [x, y + 1],
        [x, y - 1]
      ];

      for (const [nx, ny] of neighbors) {
        if (nx >= 0 && nx < w && ny >= 0 && ny < h) {
          const nPos = ny * w + nx;
          if (!visited[nPos]) {
            visited[nPos] = 1;
            queue.push(nx, ny);
          }
        }
      }
    }
  }

  // Soft edge anti-aliasing: find pixels near transparent ones
  for (let y = 1; y < h - 1; y++) {
    for (let x = 1; x < w - 1; x++) {
      const idx = (y * w + x) * 4;
      if (out[idx + 3] !== 0) {
        // Check if any neighbor is transparent
        const hasTransparentNeighbor =
          out[((y - 1) * w + x) * 4 + 3] === 0 ||
          out[((y + 1) * w + x) * 4 + 3] === 0 ||
          out[(y * w + (x - 1)) * 4 + 3] === 0 ||
          out[(y * w + (x + 1)) * 4 + 3] === 0;

        if (hasTransparentNeighbor) {
          const r = out[idx];
          const g = out[idx + 1];
          const b = out[idx + 2];
          // If it's a very light fringe pixel, soften alpha
          if (r > 210 && g > 205 && b > 200) {
            out[idx + 3] = Math.max(0, Math.min(255, Math.floor(255 - ((r + g + b) / 3 - 210) * 5)));
          }
        }
      }
    }
  }

  await sharp(out, { raw: { width: w, height: h, channels: 4 } })
    .png()
    .toFile("public/logo.png");

  console.log("Created transparent public/logo.png successfully!");
}

processLogo();

