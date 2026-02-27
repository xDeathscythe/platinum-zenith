from playwright.sync_api import sync_playwright
from PIL import Image
import numpy as np

with sync_playwright() as p:
    b = p.chromium.launch()
    page = b.new_page(viewport={"width": 390, "height": 844})
    page.goto("http://127.0.0.1:5174/platinum-zenith/", wait_until="networkidle", timeout=15000)
    page.wait_for_timeout(2000)
    
    ft = page.evaluate("document.querySelector('footer').offsetTop")
    print(f"Footer offsetTop: {ft}")
    
    page.evaluate(f"window.scrollTo(0, {ft - 500})")
    page.wait_for_timeout(500)
    page.screenshot(path="diag.png", full_page=False)
    
    img = Image.open("diag.png")
    arr = np.array(img)
    print(f"Screenshot size: {arr.shape}")
    
    # Find where non-black pixels exist near boundary
    for y in range(400, min(700, arr.shape[0])):
        mx = int(arr[y, :, :].max())
        if mx > 3:
            print(f"y={y} max={mx}")
    
    print("Done")
    b.close()
