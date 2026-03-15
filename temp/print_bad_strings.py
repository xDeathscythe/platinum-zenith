import re,pathlib
p=pathlib.Path(r"C:\Users\Eventide\.openclaw\workspace-devona\projects\arcads-clone\src\pages\blog\blogData.js")
t=p.read_text(encoding='utf-8')
for s in re.findall(r"(?:title|excerpt): '([^']*)'", t):
    if 'ï¿½' in s or '�' in s:
        print(s)
