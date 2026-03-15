import re,pathlib
p=pathlib.Path(r"C:\Users\Eventide\.openclaw\workspace-devona\projects\arcads-clone\src\pages\blog\blogData.js")
t=p.read_text(encoding='utf-8')
strings=re.findall(r"(?:title|excerpt): '([^']*)'", t)
for s in strings:
    if '�' in s:
        for tok in re.findall(r"[^\s,.:;!?()\[\]\"']+", s):
            if '�' in tok:
                print(tok, [hex(ord(ch)) for ch in tok])
                raise SystemExit
