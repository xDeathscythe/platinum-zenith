"""Second pass: remaining bg-white/XX, CTA buttons, and other fixups."""
import os, re

SRC = os.path.join(os.path.dirname(__file__), "src")

# Additional exact string replacements missed in pass 1
EXTRA = [
    # bg-white with opacity variants
    ("bg-white/[0.02]", "bg-tint"),
    ("bg-white/[0.05]", "bg-tint"),
    ("bg-white/[0.10]", "bg-tint"),
    ("bg-white/5",  "bg-tint"),
    ("bg-white/8",  "bg-tint"),
    ("bg-white/15", "bg-tint"),
    ("bg-white/40", "bg-ink-4"),
    ("bg-white/60", "bg-ink-3"),
    # Remaining hex backgrounds
    ("bg-[#232323]", "bg-tile"),
]

# CTA button pattern: bg-white text-black → bg-inv-bg text-inv-fg
# But NOT inside Features.jsx mock UIs or BottomCTA (which gets theme-dark)
CTA_FILES = [
    "Navbar.jsx",
    "ConsultingPage.jsx", "ContactPage.jsx", "CROPage.jsx",
    "MarketingPage.jsx", "WebDesignPage.jsx", "PricingPage.jsx",
    "NotFoundPage.jsx",
]

def process_file(path, fname):
    with open(path, "r", encoding="utf-8") as f:
        text = f.read()
    original = text

    # 1. Extra exact replacements
    for old, new in EXTRA:
        text = text.replace(old, new)

    # 2. CTA buttons: bg-white text-black → bg-inv-bg text-inv-fg
    if fname in CTA_FILES:
        # Full pattern: bg-white text-black ... hover:bg-white/90
        text = re.sub(
            r'bg-white(\s+)text-black',
            r'bg-inv-bg\1text-inv-fg',
            text
        )
        text = text.replace("hover:bg-white/90", "hover:bg-inv-bg-hover")
        # PricingPage non-featured: hover:bg-white/[0.10] already → hover:bg-tint from EXTRA

    if text != original:
        with open(path, "w", encoding="utf-8") as f:
            f.write(text)
        return True
    return False

def main():
    changed = []
    for root, dirs, files in os.walk(SRC):
        dirs[:] = [d for d in dirs if d != "node_modules"]
        for fname in files:
            if not fname.endswith(".jsx"):
                continue
            fpath = os.path.join(root, fname)
            if process_file(fpath, fname):
                rel = os.path.relpath(fpath, SRC)
                changed.append(rel)

    if changed:
        print(f"Pass 2 updated {len(changed)} files:")
        for f in sorted(changed):
            print(f"   {f}")
    else:
        print("No changes needed.")

if __name__ == "__main__":
    main()
