import { chromium } from 'playwright';
import { execSync } from 'child_process';
import { existsSync, mkdirSync, statSync } from 'fs';
import path from 'path';

const OUT = 'public';
const TEMP = 'temp-screenshots';
if (!existsSync(TEMP)) mkdirSync(TEMP);

// Try Wayback Machine for offline sites
const sites = [
  { url: 'https://web.archive.org/web/2025/https://focusfizikal.rs', name: 'portfolio-01' },
  { url: 'https://web.archive.org/web/2025/https://liliumsalon.rs', name: 'portfolio-lilium' },
  { url: 'https://web.archive.org/web/2025/https://vedastolatija.rs', name: 'portfolio-09' },
];

const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 2,
});

for (const s of sites) {
  try {
    console.log(`📸 ${s.url}...`);
    const page = await ctx.newPage();
    await page.goto(s.url, { waitUntil: 'domcontentloaded', timeout: 20000 });
    await page.waitForTimeout(3000);
    
    // Hide Wayback Machine toolbar
    await page.evaluate(() => {
      const wb = document.getElementById('wm-ipp-base');
      if (wb) wb.style.display = 'none';
    });
    
    const pngPath = path.join(TEMP, `${s.name}-wb.png`);
    await page.screenshot({ path: pngPath });
    
    const webpPath = path.join(OUT, `${s.name}.webp`);
    execSync(`ffmpeg -y -i "${pngPath}" -vf "scale=1200:-1" -q:v 82 "${webpPath}"`);
    
    const kb = (statSync(webpPath).size / 1024).toFixed(1);
    console.log(`  ✅ ${s.name}.webp — ${kb}KB`);
    await page.close();
  } catch (err) {
    console.log(`  ❌ ${s.name}: ${err.message}`);
  }
}

await browser.close();
console.log('Done!');
