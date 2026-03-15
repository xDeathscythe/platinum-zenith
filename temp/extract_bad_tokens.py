import re, pathlib, collections
p = pathlib.Path(r"C:\Users\Eventide\.openclaw\workspace-devona\projects\arcads-clone\src\pages\blog\blogData.js")
t = p.read_text(encoding='utf-8')
strings = re.findall(r"(?:title|excerpt): '([^']*)'", t)
bad = [s for s in strings if ('ï¿½' in s or '�' in s)]
print('bad strings', len(bad))
c = collections.Counter()
for s in bad:
    for tok in re.findall(r"[^\s,.:;!?()\[\]\"']+", s):
        if 'ï¿½' in tok or '�' in tok:
            c[tok] += 1
print('bad tokens', len(c))
for tok, n in c.most_common(300):
    print(f"{tok}\t{n}")
