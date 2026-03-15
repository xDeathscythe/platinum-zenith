import { chromium } from 'playwright';
import { execSync } from 'child_process';
import { existsSync, mkdirSync, statSync } from 'fs';
import path from 'path';

const OUT = 'public';
const TEMP = 'temp-screenshots';
if (!existsSync(TEMP)) mkdirSync(TEMP);

// Clean webpage screenshots — NO device frames, just the site content
const sites = [
  { url: 'https://grubinshowroom.rs', name: 'portfolio-grubin' },
  { url: 'https://niwachat.com', name: 'niwa-hero' },
  { url: 'https://platinumzenith.com', name: 'portfolio-02' },  // Platinum Tartufi = PZ site
  { url: 'https://dentelevate.com', name: 'portfolio-04' },     // DentElevate for MERME slot
];

const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 2,  // Retina
});

for (const s of sites) {
  try {
    console.log(`📸 ${s.url}...`);
    const page = await ctx.newPage();
    await page.goto(s.url, { waitUntil: 'networkidle', timeout: 20000 });
    await page.waitForTimeout(2500);
    
    // Screenshot only the viewport (above the fold)
    const pngPath = path.join(TEMP, `${s.name}-clean.png`);
    await page.screenshot({ path: pngPath });
    
    // Convert to webp at 1200px wide, quality 82
    const webpPath = path.join(OUT, `${s.name}.webp`);
    execSync(`ffmpeg -y -i "${pngPath}" -vf "scale=1200:-1" -q:v 82 "${webpPath}"`);
    
    const kb = (statSync(webpPath).size / 1024).toFixed(1);
    console.log(`  ✅ ${s.name}.webp — ${kb}KB (1200px clean screenshot)`);
    await page.close();
  } catch (err) {
    console.log(`  ❌ ${s.name}: ${err.message}`);
  }
}

await browser.close();
console.log('Done!');
