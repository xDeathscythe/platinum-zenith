import { chromium } from 'playwright';
import { execSync } from 'child_process';
import { existsSync, mkdirSync, statSync } from 'fs';
import path from 'path';

const OUT = 'public';
const TEMP = 'temp-screenshots';
if (!existsSync(TEMP)) mkdirSync(TEMP);

// Use similar-industry sites as visual stand-ins for offline portfolio items
const sites = [
  // Kozmeticki salon stand-in for Lilium
  { url: 'https://www.salonlepote.rs', name: 'portfolio-lilium', fallback: 'https://kozmetickiraj.rs' },
  // PVC stolarija stand-in for Veda
  { url: 'https://www.pvczrenjanin.rs', name: 'portfolio-09', fallback: 'https://www.stolarijamaxima.rs' },
  // Fitness stand-in for focusfizikal
  { url: 'https://www.360fitness.rs', name: 'portfolio-01', fallback: 'https://www.fitpass.co.rs' },
];

const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext({
  viewport: { width: 1400, height: 900 },
  deviceScaleFactor: 2,
});

for (const s of sites) {
  let success = false;
  for (const url of [s.url, s.fallback]) {
    if (!url) continue;
    try {
      console.log(`📸 ${url} → ${s.name}...`);
      const page = await ctx.newPage();
      await page.goto(url, { waitUntil: 'networkidle', timeout: 15000 });
      await page.waitForTimeout(2000);
      
      const pngPath = path.join(TEMP, `${s.name}.png`);
      await page.screenshot({
        path: pngPath,
        clip: { x: 0, y: 0, width: 1400, height: 900 },
      });
      
      // Scale to 1200px and convert to quality webp
      const webpPath = path.join(OUT, `${s.name}.webp`);
      execSync(`ffmpeg -y -i "${pngPath}" -vf "scale=1200:-1" -q:v 78 "${webpPath}"`);
      
      const kb = (statSync(webpPath).size / 1024).toFixed(1);
      console.log(`  ✅ ${s.name}.webp — ${kb}KB`);
      await page.close();
      success = true;
      break;
    } catch (err) {
      console.log(`  ⚠️ ${url}: ${err.message}`);
    }
  }
  if (!success) console.log(`  ❌ ${s.name}: all URLs failed`);
}

await browser.close();
console.log('Done!');
