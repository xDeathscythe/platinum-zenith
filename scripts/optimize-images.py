import os
import re
from pathlib import Path
from PIL import Image
import io

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / 'public'
TARGET = 30 * 1024  # 30 KiB

REF_EXTS = ('.jsx', '.js', '.html', '.css')
IMG_RE = re.compile(r'([a-zA-Z0-9_-]+\.(?:webp|jpg|jpeg|png))', re.IGNORECASE)


def collect_referenced_images():
    refs = set()
    for base in [ROOT / 'src', ROOT / 'server']:
        if not base.exists():
            continue
        for p in base.rglob('*'):
            if p.is_file() and p.suffix.lower() in REF_EXTS:
                text = p.read_text(encoding='utf-8', errors='ignore')
                for m in IMG_RE.findall(text):
                    refs.add(m.lower())

    idx = ROOT / 'index.html'
    if idx.exists():
        text = idx.read_text(encoding='utf-8', errors='ignore')
        for m in IMG_RE.findall(text):
            refs.add(m.lower())

    return sorted(refs)


def category_settings(name: str):
    n = name.lower()
    # Card images shown at ~196x245
    if n.startswith(('grubin-', 'truffles-', 'medifizio-', 'focus-')):
        return (280, 350, 58)
    # Portfolio cards / case studies
    if n.startswith('portfolio-'):
        return (520, 520, 52)
    # PZ gallery images
    if n.startswith('pz-') and not n.startswith(('pz-logo', 'pz-icon', 'pz-favicon')):
        return (420, 520, 52)
    # OG image
    if n.startswith('og-image'):
        return (1200, 630, 40)
    # Hero images
    if n.startswith('hero-'):
        return (900, 700, 52)
    # Fallback
    return (600, 600, 52)


def encode(img: Image.Image, ext: str, quality: int):
    buf = io.BytesIO()
    ext = ext.lower()
    if ext == '.webp':
        img.save(buf, 'WEBP', quality=quality, method=6)
    elif ext in ('.jpg', '.jpeg'):
        img.save(buf, 'JPEG', quality=quality, optimize=True, progressive=True)
    elif ext == '.png':
        # For PNG, Pillow quality doesn't apply; optimize + max compression
        img.save(buf, 'PNG', optimize=True, compress_level=9)
    else:
        raise ValueError(f'Unsupported ext: {ext}')
    return buf.getvalue()


def optimize_file(path: Path):
    ext = path.suffix.lower()
    img = Image.open(path)
    if img.mode in ('RGBA', 'P') and ext in ('.jpg', '.jpeg'):
        img = img.convert('RGB')
    elif img.mode == 'P':
        img = img.convert('RGBA')

    max_w, max_h, start_q = category_settings(path.name)

    # Resize down if needed
    w, h = img.size
    ratio = min(max_w / w, max_h / h, 1)
    if ratio < 1:
        img = img.resize((max(1, int(w * ratio)), max(1, int(h * ratio))), Image.Resampling.LANCZOS)

    # Try quality search (for PNG this is basically one shot)
    if ext == '.png':
        data = encode(img, ext, 0)
        if len(data) <= TARGET:
            return data, 'png-opt'
        # If still huge, convert PNG to WEBP is better, but keep ext requirement by skipping
        return None, None

    lo, hi = 20, start_q
    best = None
    while lo <= hi:
        q = (lo + hi) // 2
        data = encode(img, ext, q)
        if len(data) <= TARGET:
            best = (data, q)
            lo = q + 1
        else:
            hi = q - 1

    # If still too large, downscale progressively
    scale = 0.9
    while best is None and img.width > 120 and img.height > 120:
        img = img.resize((max(120, int(img.width * scale)), max(120, int(img.height * scale))), Image.Resampling.LANCZOS)
        lo, hi = 20, start_q
        while lo <= hi:
            q = (lo + hi) // 2
            data = encode(img, ext, q)
            if len(data) <= TARGET:
                best = (data, q)
                lo = q + 1
            else:
                hi = q - 1

    if best is None:
        # absolute fallback
        data = encode(img, ext, 20)
        if len(data) <= TARGET:
            return data, 20
        return None, None

    return best[0], best[1]


def main():
    refs = collect_referenced_images()
    files = []
    for name in refs:
        p = PUBLIC / name
        if p.exists() and p.suffix.lower() in ('.webp', '.jpg', '.jpeg', '.png'):
            if p.stat().st_size > TARGET:
                files.append(p)

    print(f'Referenced images over 30 KiB: {len(files)}')
    total_saved = 0
    changed = 0
    skipped = []

    for p in files:
        before = p.stat().st_size
        data, q = optimize_file(p)
        if not data:
            skipped.append(p.name)
            continue
        after = len(data)
        if after < before:
            p.write_bytes(data)
            total_saved += before - after
            changed += 1
            print(f'  {p.name}: {before/1024:.1f}KB -> {after/1024:.1f}KB (q={q})')

    print(f'\nChanged: {changed}, saved: {total_saved/1024:.1f}KB')
    if skipped:
        print('Skipped (still >30KiB or PNG constraints):')
        for s in skipped:
            print('  -', s)


if __name__ == '__main__':
    main()
