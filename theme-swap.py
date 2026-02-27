"""Bulk-replace hardcoded dark-theme Tailwind classes with CSS-variable-based theme tokens."""
import os, re, sys

SRC = os.path.join(os.path.dirname(__file__), "src")

# Ordered longest-first within each category to avoid partial matches
REPLACEMENTS = [
    # ── Backgrounds: hex ──
    ("bg-[#000000]", "bg-page"),
    ("bg-[#111111]", "bg-panel"),
    ("bg-[#1a1a1a]", "bg-tile"),
    ("bg-[#060606]", "bg-panel"),
    ("bg-[#000]",    "bg-page"),
    ("bg-[#111]",    "bg-panel"),
    ("bg-[#222]",    "bg-tile"),

    # ── Backgrounds: white/opacity (overlays) ──
    ("bg-white/[0.03]", "bg-tint"),
    ("bg-white/[0.04]", "bg-tint"),
    ("bg-white/[0.06]", "bg-tint"),
    ("bg-white/[0.08]", "bg-tint"),
    ("bg-white/[0.12]", "bg-tint-2"),
    ("bg-white/[0.15]", "bg-tint-2"),
    ("bg-white/[0.16]", "bg-tint-2"),
    ("bg-white/10",     "bg-tint"),
    ("bg-white/20",     "bg-tint-2"),
    ("bg-white/30",     "bg-ink-4"),

    # ── Text ──
    ("text-white/[0.7]",  "text-ink-2"),
    ("text-white/[0.44]", "text-ink-4"),
    ("text-white/[0.15]", "text-ink-5"),
    ("text-white/80",     "text-ink-2"),
    ("text-white/70",     "text-ink-2"),
    ("text-white/60",     "text-ink-3"),
    ("text-white/55",     "text-ink-3"),
    ("text-white/50",     "text-ink-3"),
    ("text-white/45",     "text-ink-4"),
    ("text-white/40",     "text-ink-4"),
    ("text-white/30",     "text-ink-4"),
    ("text-white/20",     "text-ink-5"),
    ("text-white/10",     "text-ink-5"),
    ("text-white/5",      "text-ink-5"),

    # ── Borders ──
    ("border-white/[0.04]", "border-edge-2"),
    ("border-white/[0.06]", "border-edge-2"),
    ("border-white/[0.08]", "border-edge-2"),
    ("border-white/[0.15]", "border-edge"),
    ("border-white/[0.1]",  "border-edge"),
    ("border-white/10",     "border-edge"),
    ("border-white/20",     "border-edge"),

    # ── Dividers ──
    ("divide-white/[0.06]", "divide-edge-2"),
    ("divide-white/10",     "divide-edge"),

    # ── Ring ──
    ("ring-white/10",       "ring-edge"),

    # ── Gradients ──
    ("from-[#111111]", "from-panel"),
    ("from-[#111]",    "from-panel"),
    ("from-[#000]",    "from-page"),
    ("to-[#111111]",   "to-panel"),
    ("to-[#111]",      "to-panel"),
    ("to-[#000]",      "to-page"),
]

# Files to SKIP (they live inside always-dark sections or have special handling)
SKIP_FILES = set()

# These need special, context-aware handling — we do NOT auto-replace:
#   bg-black  (used with /80, or standalone)
#   text-white (bare — used in CTA buttons on dark bg)
#   from-black, to-black
#   bg-white (the CTA button background)
#   stroke="white"

# We'll handle bg-black and text-white with regex to avoid partial matches
REGEX_REPLACEMENTS = [
    # bg-black but NOT bg-black/XX (those keep their opacity and just need the base swapped)
    # bg-black → bg-page   |   bg-black/80 → bg-page/80 (automatic since we replace the prefix)
    (r'\bbg-black\b', 'bg-page'),

    # from-black / to-black
    (r'\bfrom-black\b', 'from-page'),
    (r'\bto-black\b',   'to-page'),

    # text-white standalone (NOT text-white/XX which was already replaced above)
    # After the string replacements above run, only bare text-white remains
    (r'\btext-white\b', 'text-ink'),

    # SVG strokes
    (r'stroke="white"', 'stroke="currentColor"'),
]


def process_file(path):
    with open(path, "r", encoding="utf-8") as f:
        original = f.read()

    text = original

    # 1. Exact string replacements (longest-first already ordered)
    for old, new in REPLACEMENTS:
        text = text.replace(old, new)

    # 2. Regex replacements
    for pattern, repl in REGEX_REPLACEMENTS:
        text = re.sub(pattern, repl, text)

    if text != original:
        with open(path, "w", encoding="utf-8") as f:
            f.write(text)
        return True
    return False


def main():
    changed = []
    for root, dirs, files in os.walk(SRC):
        # Skip node_modules if present
        dirs[:] = [d for d in dirs if d != "node_modules"]
        for fname in files:
            if not fname.endswith(".jsx"):
                continue
            if fname in SKIP_FILES:
                continue
            fpath = os.path.join(root, fname)
            if process_file(fpath):
                rel = os.path.relpath(fpath, SRC)
                changed.append(rel)

    if changed:
        print(f"Updated {len(changed)} files:")
        for f in sorted(changed):
            print(f"   {f}")
    else:
        print("No changes needed.")


if __name__ == "__main__":
    main()
