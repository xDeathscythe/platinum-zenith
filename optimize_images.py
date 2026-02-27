"""Optimize PZ images: resize + convert to WebP for speed"""
import sys
sys.stdout.reconfigure(encoding="utf-8")
from PIL import Image
from pathlib import Path

PUBLIC = Path("public")
MAX_WIDTH = 1200  # max width for any image
QUALITY = 82

total_before = 0
total_after = 0

for f in sorted(PUBLIC.glob("pz-*")):
    if f.suffix.lower() in ('.png', '.jpg', '.jpeg', '.webp'):
        before_size = f.stat().st_size
        total_before += before_size
        
        img = Image.open(f)
        w, h = img.size
        
        # Resize if too wide
        if w > MAX_WIDTH:
            ratio = MAX_WIDTH / w
            new_h = int(h * ratio)
            img = img.resize((MAX_WIDTH, new_h), Image.LANCZOS)
        
        # Convert to WebP
        out = f.with_suffix('.webp')
        if img.mode == 'RGBA':
            img.save(out, 'WEBP', quality=QUALITY, method=4)
        else:
            img = img.convert('RGB')
            img.save(out, 'WEBP', quality=QUALITY, method=4)
        
        after_size = out.stat().st_size
        total_after += after_size
        
        # Remove original if different format
        if f.suffix.lower() != '.webp' and out.exists():
            f.unlink()
        
        saving = (1 - after_size/before_size) * 100
        print(f"  {f.name} ({before_size//1024}KB) -> {out.name} ({after_size//1024}KB) [{saving:.0f}% smaller]")

print(f"\nTotal: {total_before//1024}KB -> {total_after//1024}KB ({(1-total_after/total_before)*100:.0f}% reduction)")
