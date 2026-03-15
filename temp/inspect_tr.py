import re,pathlib
p=pathlib.Path(r'C:\Users\Eventide\.openclaw\workspace-devona\projects\arcads-clone\src\pages\blog\blogData.js')
t=p.read_text(encoding='utf-8')
for tok in re.findall(r"[^\s,.:;!?()\[\]\\\"']+", t):
    if tok.startswith('tr') and ('ï' in tok or '�' in tok):
        print(tok, [hex(ord(ch)) for ch in tok])
        break
