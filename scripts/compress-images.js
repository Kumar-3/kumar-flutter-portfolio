// One-off/rerunnable script: converts assets/projects and assets/awards JPG/PNG
// source images to compressed WebP. Project screenshots are capped at 900px wide
// (displayed at ~256px tall in a card, so no need to ship 2000px+ originals);
// award/certificate scans are capped at 1600px wide since they're also viewed
// full-size in the Awards modal. Run with: node scripts/compress-images.js
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const jobs = [
  { dir: "assets/projects", maxWidth: 900 },
  { dir: "assets/awards", maxWidth: 1600 },
];

const QUALITY = 75;

async function run() {
  for (const { dir, maxWidth } of jobs) {
    const absDir = path.join(__dirname, "..", dir);
    for (const file of fs.readdirSync(absDir)) {
      if (!/\.(png|jpe?g)$/i.test(file)) continue;

      const inputPath = path.join(absDir, file);
      const outputPath = path.join(
        absDir,
        file.replace(/\.(png|jpe?g)$/i, ".webp"),
      );

      const beforeBytes = fs.statSync(inputPath).size;

      await sharp(inputPath)
        .resize({ width: maxWidth, withoutEnlargement: true })
        .webp({ quality: QUALITY })
        .toFile(outputPath);

      const afterBytes = fs.statSync(outputPath).size;
      fs.unlinkSync(inputPath);

      console.log(
        `${dir}/${file} -> ${path.basename(outputPath)}: ` +
          `${(beforeBytes / 1024).toFixed(0)}KB -> ${(afterBytes / 1024).toFixed(0)}KB`,
      );
    }
  }
}

run();
