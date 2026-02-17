from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={"width": 1440, "height": 900})
    page.goto("https://openai.com/codex/", timeout=30000, wait_until="networkidle")
    page.wait_for_timeout(3000)
    
    # Screenshot the hero area only for reference
    page.screenshot(path=r"C:\Users\Eventide\.openclaw\media\codex-original-hero.png", clip={"x":0,"y":0,"width":1440,"height":900})
    
    # Get all images and background images
    results = page.evaluate("""() => {
        const out = [];
        document.querySelectorAll('img').forEach(el => {
            out.push({tag: 'IMG', src: el.src, cls: el.className.substring(0, 100), w: el.naturalWidth, h: el.naturalHeight});
        });
        document.querySelectorAll('video').forEach(el => {
            out.push({tag: 'VIDEO', src: el.currentSrc || el.src, cls: el.className.substring(0, 80)});
        });
        // Check first 50 elements for background-image
        const all = document.querySelectorAll('*');
        for (let i = 0; i < Math.min(all.length, 200); i++) {
            const s = getComputedStyle(all[i]);
            if (s.backgroundImage && s.backgroundImage !== 'none') {
                out.push({tag: all[i].tagName, bg: s.backgroundImage.substring(0, 300), cls: all[i].className.substring(0, 80)});
            }
        }
        return out;
    }""")
    
    for r in results[:30]:
        print(r)
    
    browser.close()
    print("\nDone")
