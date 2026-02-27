"""Scrape images from platinumzenith.com for our PZ site"""
import os
import requests
from playwright.sync_api import sync_playwright
from urllib.parse import urljoin
from pathlib import Path

import sys
sys.stdout.reconfigure(encoding="utf-8")

OUT_DIR = Path("scraped-images")
OUT_DIR.mkdir(exist_ok=True)

PAGES = [
    "https://platinumzenith.com/",
    "https://platinumzenith.com/web-design/",
    "https://platinumzenith.com/digitalni-marketing/",
    "https://platinumzenith.com/cro/",
    "https://platinumzenith.com/o-nama/",
    "https://platinumzenith.com/konsalting/",
]

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page(viewport={"width": 1440, "height": 900})

    all_images = set()

    for url in PAGES:
        print(f"\n📄 Scraping: {url}")
        try:
            page.goto(url, wait_until="networkidle", timeout=15000)
            page.wait_for_timeout(2000)

            # Get all image sources
            images = page.evaluate("""() => {
                const imgs = document.querySelectorAll('img');
                const bgs = document.querySelectorAll('[style*="background"]');
                const srcs = new Set();

                // <img> tags
                imgs.forEach(img => {
                    if (img.src && !img.src.startsWith('data:')) srcs.add(img.src);
                    if (img.dataset.src) srcs.add(img.dataset.src);
                    if (img.srcset) {
                        img.srcset.split(',').forEach(s => {
                            const url = s.trim().split(' ')[0];
                            if (url && !url.startsWith('data:')) srcs.add(url);
                        });
                    }
                });

                // Background images
                bgs.forEach(el => {
                    const style = el.getAttribute('style');
                    const match = style.match(/url\\(['"](.*?)['"]\\)/);
                    if (match) srcs.add(match[1]);
                });

                // Also check CSS background-image on all elements
                document.querySelectorAll('*').forEach(el => {
                    const bg = getComputedStyle(el).backgroundImage;
                    if (bg && bg !== 'none') {
                        const match = bg.match(/url\\(['"](.*?)['"]\\)/);
                        if (match && !match[1].startsWith('data:')) srcs.add(match[1]);
                    }
                });

                return [...srcs];
            }""")

            for src in images:
                full_url = urljoin(url, src)
                all_images.add(full_url)
                print(f"  🖼 {full_url[:100]}")

            # Also take a full-page screenshot
            page_name = url.rstrip('/').split('/')[-1] or 'home'
            page.screenshot(path=str(OUT_DIR / f"page-{page_name}.png"), full_page=True)
            print(f"  📸 Screenshot: page-{page_name}.png")

        except Exception as e:
            print(f"  ❌ Error: {e}")

    browser.close()

    # Download all images
    print(f"\n📥 Downloading {len(all_images)} unique images...")
    downloaded = 0
    for img_url in sorted(all_images):
        try:
            # Filter: only platinumzenith.com images, skip tiny icons
            if 'platinumzenith.com' not in img_url:
                continue
            
            resp = requests.get(img_url, timeout=10)
            if resp.status_code == 200 and len(resp.content) > 5000:  # Skip tiny files
                # Generate filename
                fname = img_url.split('/')[-1].split('?')[0]
                if not fname or len(fname) > 100:
                    fname = f"img_{downloaded}.jpg"
                out_path = OUT_DIR / fname
                # Avoid overwriting
                if out_path.exists():
                    out_path = OUT_DIR / f"dup_{downloaded}_{fname}"
                out_path.write_bytes(resp.content)
                size_kb = len(resp.content) / 1024
                print(f"  ✅ {fname} ({size_kb:.0f}KB)")
                downloaded += 1
        except Exception as e:
            print(f"  ❌ {img_url[:80]}: {e}")

    print(f"\n✅ Done! {downloaded} images saved to {OUT_DIR}")
