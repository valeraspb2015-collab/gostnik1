import sharp from "sharp";
import { writeFileSync } from "fs";

const GOLD1 = "#C8923A";
const GOLD2 = "#8B5E1F";
const WHITE = "#FFFFFF";
const BG = "#F7F2EA";
const DARK = "#1A1714";

const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="${GOLD1}"/>
      <stop offset="1" stop-color="${GOLD2}"/>
    </linearGradient>
  </defs>
  <rect width="64" height="64" rx="14" fill="url(#g)"/>
  <rect x="14" y="14" width="34" height="8" rx="3" fill="${WHITE}"/>
  <rect x="14" y="14" width="8" height="37" rx="3" fill="${WHITE}"/>
</svg>`;

const ogSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="${BG}"/>

  <rect x="0" y="0" width="6" height="630" fill="${GOLD1}"/>

  <rect x="80" y="220" width="90" height="90" rx="18" fill="url(#og)"/>
  <defs>
    <linearGradient id="og" x1="80" y1="220" x2="170" y2="310" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="${GOLD1}"/>
      <stop offset="1" stop-color="${GOLD2}"/>
    </linearGradient>
  </defs>

  <rect x="100" y="236" width="48" height="12" rx="3" fill="${WHITE}"/>
  <rect x="100" y="236" width="12" height="52" rx="3" fill="${WHITE}"/>

  <text x="190" y="283" font-family="Georgia, serif" font-size="72" font-weight="700" fill="${DARK}" letter-spacing="6">ГОСТЬНИК</text>

  <rect x="190" y="308" width="80" height="2" fill="${GOLD1}"/>

  <text x="190" y="346" font-family="Arial, sans-serif" font-size="28" fill="#6B5C45" letter-spacing="5">СЕТЬ ГОСТЕВЫХ КВАРТИР</text>

  <text x="190" y="420" font-family="Arial, sans-serif" font-size="32" fill="#4A3F30">Квартиры посуточно в Санкт-Петербурге и Кисловодске</text>

  <rect x="80" y="530" width="1040" height="1" fill="#D4C4A8" opacity="0.6"/>
  <text x="80" y="572" font-family="Arial, sans-serif" font-size="22" fill="#A08060">gostnik.ru</text>
</svg>`;

writeFileSync("scripts/favicon-src.svg", faviconSvg);
writeFileSync("scripts/og-image-src.svg", ogSvg);

await sharp(Buffer.from(faviconSvg))
  .resize(64, 64)
  .png()
  .toFile("client/public/favicon.png");
console.log("favicon.png generated (64x64)");

await sharp(Buffer.from(faviconSvg))
  .resize(180, 180)
  .png()
  .toFile("client/public/apple-touch-icon.png");
console.log("apple-touch-icon.png generated (180x180)");

await sharp(Buffer.from(ogSvg))
  .resize(1200, 630)
  .png()
  .toFile("client/public/og-image.png");
console.log("og-image.png generated (1200x630)");

console.log("All brand assets generated successfully.");
