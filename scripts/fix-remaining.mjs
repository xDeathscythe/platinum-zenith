import { chromium } from 'playwright';
import { execSync } from 'child_process';
import { statSync } from 'fs';
import path from 'path';

const OUT = 'public';
const TEMP = 'temp-screenshots';

const browser = await chromium.launch({ headless: true });

// PZ screenshot - force light theme via media
const ctx1 = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 2,
  colorScheme: 'light',
});

console.log('📸 platinumzenith.com (light mode)...');
const page1 = await ctx1.newPage();
await page1.goto('https://platinumzenith.com', { waitUntil: 'networkidle', timeout: 30000 });
await page1.waitForTimeout(4000);
const png1 = path.join(TEMP, 'portfolio-02-light.png');
await page1.screenshot({ path: png1 });
execSync(`ffmpeg -y -i "${png1}" -vf "scale=1200:-1" -q:v 82 "${path.join(OUT, 'portfolio-02.webp')}"`);
console.log(`  ✅ portfolio-02.webp — ${(statSync(path.join(OUT, 'portfolio-02.webp')).size/1024).toFixed(1)}KB`);

// Lilium — re-crop from Untitled-design-26 LEFT side (Platinum Tartufi tablet) 
// Actually let's use pz-wd-3000 which shows Focus Fizikal across devices
// Better: use the actual old PZ web design page screenshot at scroll 1000 which has Platinum Tartufi
console.log('📸 Cropping Lilium from old PZ mockup...');
const scraped = 'scraped-images';
// Use Untitled-design-26.png and crop the LEFT tablet (Platinum Tartufi dark site)
execSync(`ffmpeg -y -i "${scraped}/Untitled-design-26.png" -vf "crop=700:520:50:160,scale=1200:-1" -q:v 82 "${path.join(OUT, 'portfolio-lilium.webp')}"`);
console.log(`  ✅ portfolio-lilium.webp — ${(statSync(path.join(OUT, 'portfolio-lilium.webp')).size/1024).toFixed(1)}KB`);

await browser.close();
console.log('Done!');
