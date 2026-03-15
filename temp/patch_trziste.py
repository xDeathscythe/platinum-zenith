import pathlib
files=[
 pathlib.Path(r'C:\Users\Eventide\.openclaw\workspace-devona\projects\arcads-clone\src\pages\blog\blogData.js'),
 pathlib.Path(r'C:\Users\Eventide\.openclaw\workspace-devona\projects\arcads-clone\src\pages\blog\blogIndexData.js'),
]
for p in files:
    t=p.read_text(encoding='utf-8')
    t=t.replace('trï¿½išta','tržišta').replace('trï¿½ište','tržište').replace('trï¿½ištu','tržištu')
    p.write_text(t,encoding='utf-8')
    print('patched',p.name)
