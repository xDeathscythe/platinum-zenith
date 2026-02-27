from playwright.sync_api import sync_playwright
import time

with sync_playwright() as p:
    b = p.chromium.launch()
    page = b.new_page(viewport={"width": 1440, "height": 900})
    page.goto("https://niwachat.com", wait_until="networkidle")
    time.sleep(4)
    
    # Scroll down to trigger animations
    page.evaluate("window.scrollTo(0, 800)")
    time.sleep(2)
    
    # Scroll back up
    page.evaluate("window.scrollTo(0, 0)")
    time.sleep(3)
    
    # Close Niwa chat popup X button
    try:
        page.click("text=×", timeout=2000)
    except:
        pass
    time.sleep(0.5)
    
    # Hide any remaining chat elements
    page.evaluate("""
        (function() {
            var els = document.querySelectorAll('[class*="niwa"], [id*="niwa-"], .chat-widget, .niwa-chat');
            els.forEach(function(e) { e.style.display = 'none'; });
            var iframes = document.querySelectorAll('iframe');
            iframes.forEach(function(f) { 
                if (f.src && f.src.indexOf('niwa') !== -1) f.style.display = 'none'; 
            });
        })()
    """)
    time.sleep(1)
    
    # Capture just the hero area - navbar + heading + buttons + avatars (no bento grid)
    page.screenshot(path="public/niwa-hero-full.png", clip={"x": 0, "y": 0, "width": 1440, "height": 580})
    b.close()
    print("done")
