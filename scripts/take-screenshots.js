import { chromium } from 'playwright';
import { execSync } from 'child_process';
import { existsSync } from 'fs';
import path from 'path';

const OUT = path.resolve('public');
const TEMP = path.resolve('temp-screenshots');

const sites = [
  { url: 'https://grubinshowroom.rs', name: 'portfolio-grubin' },
  { url: 'https://niwachat.com', name: 'niwa-hero' },
  { url: 'https://platinumzenith.com', name: 'portfolio-02' }, // Platinum Tartufi = our own site
];

(async () => {
  if (!existsSync(TEMP)) execSync(`mkdir "${TEMP}"`);

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1200, height: 800 },
    deviceScaleFactor: 2, // Retina quality
  });

  for (const site of sites) {
    try {
      console.log(`Screenshotting ${site.url}...`);
      const page = await context.newPage();
      await page.goto(site.url, { waitUntil: 'networkidle', timeout: 30000 });
      await page.waitForTimeout(2000); // let animations finish

      const pngPath = path.join(TEMP, `${site.name}.png`);
      await page.screenshot({ path: pngPath, clip: { x: 0, y: 0, width: 1200, height: 800 } });

      // Convert to high-quality webp
      const webpPath = path.join(OUT, `${site.name}.webp`);
      execSync(`ffmpeg -y -i "${pngPath}" -quality 82 "${webpPath}"`);

      const sizeKB = Math.round(require('fs').statSync(webpPath).length / 1024 * 10) / 10;
      console.log(`  ✅ ${site.name}.webp — ${sizeKB}KB`);
      await page.close();
    } catch (err) {
      console.log(`  ❌ ${site.name}: ${err.message}`);
    }
  }

  await browser.close();
  console.log('Done!');
})();
