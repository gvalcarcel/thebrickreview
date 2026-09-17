import sharp from "sharp";

async function generateAssets() {
  // 1. Tight crop of the logo emblem (440 x 480) with a little padding into 512x512
  const emblem = await sharp("public/logo.png")
    .extract({ left: 300, top: 45, width: 430, height: 470 })
    .toBuffer();

  // Create a 512x512 square centered emblem with transparent background
  await sharp({
    create: {
      width: 512,
      height: 512,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    }
  })
    .composite([{
      input: await sharp(emblem).resize(470, 470, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } }).toBuffer(),
      gravity: "center"
    }])
    .png()
    .toFile("public/logo-badge.png");

  // Also copy to src/app/icon.png and src/app/apple-icon.png
  await sharp("public/logo-badge.png")
    .resize(192, 192)
    .png()
    .toFile("src/app/icon.png");

  await sharp("public/logo-badge.png")
    .resize(180, 180)
    .png()
    .toFile("src/app/apple-icon.png");

  // Also 32x32 for public/favicon.ico
  await sharp("public/logo-badge.png")
    .resize(32, 32)
    .png()
    .toFile("public/favicon.ico");

  console.log("All logo assets generated successfully!");
}

generateAssets();

