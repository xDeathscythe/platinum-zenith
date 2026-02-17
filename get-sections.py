"""Take full-page screenshot of original Codex page sections from Google cache"""
from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    b = p.chromium.launch(headless=True)
    pg = b.new_page(viewport={"width": 1440, "height": 900})
    
    # Try Google cache 
    try:
        pg.goto("https://webcache.googleusercontent.com/search?q=cache:openai.com/codex/", timeout=15000)
        pg.wait_for_timeout(2000)
        content = pg.content()
        if len(content) > 5000:
            pg.screenshot(path=r"C:\Users\Eventide\.openclaw\media\codex-cache-full.png", full_page=True)
            print(f"Google cache screenshot saved, content len: {len(content)}")
        else:
            print("Cache too short, skipping")
    except Exception as e:
        print(f"Cache failed: {e}")
    
    b.close()
