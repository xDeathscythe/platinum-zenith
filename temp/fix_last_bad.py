import pathlib
files=[
 pathlib.Path(r'C:\Users\Eventide\.openclaw\workspace-devona\projects\arcads-clone\src\pages\blog\blogData.js'),
 pathlib.Path(r'C:\Users\Eventide\.openclaw\workspace-devona\projects\arcads-clone\src\pages\blog\blogIndexData.js'),
]
for p in files:
    t=p.read_text(encoding='utf-8')
    t=t.replace('Piramida kupaca: zaï¿½to vecina firmi gubi 97% trï¿½iï¿½ta','Piramida kupaca: zašto vecina firmi gubi 97% tržišta')
    t=t.replace('Piramida kupaca: za�to vecina firmi gubi 97% tr�i�ta','Piramida kupaca: zašto vecina firmi gubi 97% tržišta')
    t=t.replace('Vecina firmi se bori za isti mali procenat kupaca koji su spremni da kupe odmah. U meduvremenu, ogromna vecina trï¿½iï¿½ta prolazi pored njih nezapaï¿½eno.','Vecina firmi se bori za isti mali procenat kupaca koji su spremni da kupe odmah. U meduvremenu, ogromna vecina tržišta prolazi pored njih nezapaženo.')
    t=t.replace('Vecina firmi se bori za isti mali procenat kupaca koji su spremni da kupe odmah. U meduvremenu, ogromna vecina tr�i�ta prolazi pored njih nezapa�eno.','Vecina firmi se bori za isti mali procenat kupaca koji su spremni da kupe odmah. U meduvremenu, ogromna vecina tržišta prolazi pored njih nezapaženo.')
    p.write_text(t,encoding='utf-8')
    print('updated',p.name)
