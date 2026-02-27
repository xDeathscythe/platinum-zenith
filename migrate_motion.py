"""
Bulk migrate framer-motion whileInView to CSS Reveal component.
This handles the most common patterns in our codebase.
"""
import re
import sys
sys.stdout.reconfigure(encoding='utf-8')
from pathlib import Path

SRC = Path('src')
FILES = list(SRC.rglob('*.jsx'))

# Files to skip (Hero already done, HomePage doesn't use motion)
SKIP = {'Hero.jsx', 'HomePage.jsx', 'NotFoundPage.jsx', 'Features.jsx', 'Surfaces.jsx', 'Reveal.jsx'}

for f in FILES:
    if f.name in SKIP:
        continue
    
    text = f.read_text(encoding='utf-8')
    original = text
    
    if 'framer-motion' not in text:
        continue
    
    # Track if we need Reveal import
    state = {'needs_reveal': False}
    
    # 1. Replace import { motion, ... } from 'framer-motion' 
    #    Keep AnimatePresence if used
    has_animate_presence = 'AnimatePresence' in text
    has_use_in_view = 'useInView' in text
    
    # Remove framer-motion import
    text = re.sub(r"import\s*\{[^}]*\}\s*from\s*'framer-motion'\s*\n?", '', text)
    
    # 2. Replace <motion.div initial={{...}} whileInView={{...}} viewport={{...}} transition={{...}}
    #    with <Reveal ...>
    # Pattern: motion.div with whileInView (scroll-triggered)
    def replace_motion_whileInView(m):
        # nonlocal ref
        tag = m.group(1)  # div, h2, p, etc.
        attrs = m.group(2)
        
        # Extract className
        cn_match = re.search(r'className="([^"]*)"', attrs)
        cn = cn_match.group(1) if cn_match else ''
        
        # Extract delay
        delay_match = re.search(r'delay:\s*([\d.]+)', attrs)
        delay = ''
        if delay_match:
            d = float(delay_match.group(1))
            if d > 0:
                delay = f' delay={{{int(d * 1000)}}}'
        
        # Extract key
        key_match = re.search(r'key=\{([^}]+)\}', attrs)
        key = f' key={{{key_match.group(1)}}}' if key_match else ''
        
        # Determine type based on initial values
        type_attr = ''
        if 'x: -' in attrs or 'x:-' in attrs:
            type_attr = ' type="left"'
        elif 'scale' in attrs:
            type_attr = ' type="scale"'
        
        state['needs_reveal'] = True
        
        if tag in ('h2', 'h3', 'p', 'span'):
            return f'<Reveal as="{tag}"{key}{type_attr}{delay} className="{cn}">'
        else:
            return f'<Reveal{key}{type_attr}{delay} className="{cn}">'
    
    # Match motion.TAG with whileInView
    text = re.sub(
        r'<motion\.(\w+)\s+((?:[^>]*whileInView[^>]*)?)>',
        replace_motion_whileInView,
        text
    )
    
    # 3. Replace </motion.TAG> with </Reveal>
    text = re.sub(r'</motion\.\w+>', '</Reveal>', text)
    
    # 4. Replace remaining <motion.TAG with initial/animate (page-load animations)
    #    These become CSS hero-enter classes
    def replace_motion_animate(m):
        # nonlocal ref
        tag = m.group(1)
        attrs = m.group(2)
        
        cn_match = re.search(r'className="([^"]*)"', attrs)
        cn = cn_match.group(1) if cn_match else ''
        
        delay_match = re.search(r'delay:\s*([\d.]+)', attrs)
        delay_class = ''
        if delay_match:
            d = float(delay_match.group(1))
            if d <= 0.15:
                delay_class = ' hero-enter-d1'
            elif d <= 0.25:
                delay_class = ' hero-enter-d2'
            elif d <= 0.35:
                delay_class = ' hero-enter-d3'
            else:
                delay_class = ' hero-enter-d4'
        else:
            delay_class = ' hero-enter-d1'
        
        key_match = re.search(r'key=\{([^}]+)\}', attrs)
        key = f' key={{{key_match.group(1)}}}' if key_match else ''
        
        if tag in ('h1', 'h2', 'h3', 'p'):
            return f'<{tag}{key} className="hero-enter{delay_class} {cn}">'
        else:
            return f'<div{key} className="hero-enter{delay_class} {cn}">'
        
    text = re.sub(
        r'<motion\.(\w+)\s+((?:(?!whileInView)[^>])*)>',
        replace_motion_animate,
        text
    )
    
    # 5. Add Reveal import if needed
    if state['needs_reveal'] and "import Reveal from" not in text:
        # Find first import line
        first_import = text.find('import ')
        if first_import >= 0:
            # Determine relative path
            if '/pages/' in str(f):
                reveal_import = "import Reveal from '../components/Reveal'\n"
            else:
                reveal_import = "import Reveal from './Reveal'\n"
            text = text[:first_import] + reveal_import + text[first_import:]
    
    # 6. Add AnimatePresence import back if needed
    if has_animate_presence:
        if "import { AnimatePresence" not in text and "AnimatePresence" in text:
            first_import = text.find('import ')
            text = text[:first_import] + "import { AnimatePresence } from 'framer-motion'\n" + text[first_import:]
    
    # 7. Add useInView import back if needed  
    if has_use_in_view:
        if "import { useInView" not in text and "useInView" in text:
            first_import = text.find('import ')
            text = text[:first_import] + "import { useInView } from 'framer-motion'\n" + text[first_import:]
    
    if text != original:
        f.write_text(text, encoding='utf-8')
        print(f'  ✅ {f.name}: migrated')
    else:
        print(f'  ⏭️ {f.name}: no changes')

