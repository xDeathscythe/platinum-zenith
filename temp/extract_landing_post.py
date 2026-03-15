from pathlib import Path
p = Path(r"C:\Users\Eventide\.openclaw\workspace-devona\projects\arcads-clone\src\pages\blog\blogData.js")
t = p.read_text(encoding='utf-8')
s = t.index("slug: 'izrada-landing-stranice-cena-rokovi-sta-ulazi-u-cenu'")
e = t.index("slug: 'copywriting-formule-koje-rade'", s)
print(t[s:e])
