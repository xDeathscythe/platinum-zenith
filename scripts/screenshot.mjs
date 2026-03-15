import { chromium } from 'playwright';
import { execSync } from 'child_process';
import { existsSync, mkdirSync, statSync } from 'fs';
import path from 'path';

const OUT = 'public';
const TEMP = 'temp-screenshots';
if (!existsSync(TEMP)) mkdirSync(TEMP);

const sites = [
  { url: 'https://grubinshowroom.rs', name: 'portfolio-grubin' },
  { url: 'https://niwachat.com', name: 'niwa-hero' },
  { url: 'https://platinumzenith.com', name: 'portfolio-02' },
  { url: 'https://dentelevate.com', name: 'portfolio-04' },
];

const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext({
  viewport: { width: 1400, height: 900 },
  deviceScaleFactor: 2,
});

for (const s of sites) {
  try {
    console.log(`📸 ${s.url}...`);
    const page = await ctx.newPage();
    await page.goto(s.url, { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(2500);
    
    const pngPath = path.join(TEMP, `${s.name}.png`);
    await page.screenshot({
      path: pngPath,
      clip: { x: 0, y: 0, width: 1400, height: 900 },
    });
    
    const webpPath = path.join(OUT, `${s.name}.webp`);
    execSync(`ffmpeg -y -i "${pngPath}" -q:v 80 -compression_level 4 "${webpPath}"`);
    
    const kb = (statSync(webpPath).size / 1024).toFixed(1);
    console.log(`  ✅ ${s.name}.webp — ${kb}KB`);
    await page.close();
  } catch (err) {
    console.log(`  ❌ ${s.name}: ${err.message}`);
  }
}

await browser.close();
console.log('Done!');
