import pathlib, re

files = [
    pathlib.Path(r"C:\Users\Eventide\.openclaw\workspace-devona\projects\arcads-clone\src\pages\blog\blogData.js"),
    pathlib.Path(r"C:\Users\Eventide\.openclaw\workspace-devona\projects\arcads-clone\src\pages\blog\blogIndexData.js"),
]

bad = "\uFFFD"
replacements = {
    f"{bad}ta": "šta",
    f"za{bad}to": "zašto",
    f"ko{bad}ta": "košta",
    f"vi{bad}e": "više",
    f"bud{bad}eta": "budžeta",
    f"bud{bad}etom": "budžetom",
    f"bud{bad}et": "budžet",
    f"tro{bad}i": "troši",
    f"tro{bad}e": "troše",
    f"tro{bad}kovi": "troškovi",
    f"gre{bad}aka": "grešaka",
    f"gre{bad}ke": "greške",
    f"{bad}to": "što",
    f"Za{bad}to": "Zašto",
    f"mo{bad}ete": "možete",
    f"mo{bad}emo": "možemo",
    f"mo{bad}e": "može",
    f"va{bad}": "vaš",
    f"va{bad}a": "vaša",
    f"va{bad}eg": "vašeg",
    f"va{bad}em": "vašem",
    f"primeni{bad}": "primeniš",
    f"podigne{bad}": "podigneš",
    f"tr{bad}i{bad}te": "tržište",
    f"tr{bad}i{bad}ta": "tržišta",
    f"tr{bad}i{bad}tu": "tržištu",
    f"Tr{bad}i{bad}te": "Tržište",
    f"lo{bad}": "loš",
    f"Lo{bad}": "Loš",
    f"ko{bad}taju": "koštaju",
    f"br{bad}e": "brže",
    f"najbr{bad}e": "najbrže",
    f"kontroli{bad}u": "kontrolišu",
    f"ni{bad}ta": "ništa",
    f"ni{bad}i": "niši",
    f"ni{bad}oj": "nižoj",
    f"lak{bad}a": "lakša",
    f"uslu{bad}ni": "uslužni",
    f"uslu{bad}ne": "uslužne",
    f"posti{bad}u": "postižu",
    f"va{bad}niji": "važniji",
    f"podi{bad}e": "podiže",
    f"pa{bad}nju": "pažnju",
    f"razmi{bad}ljanja": "razmišljanja",
    f"{bad}alju": "šalju",
    f"poku{bad}aja": "pokušaja",
    f"zadr{bad}ati": "zadržati",
    f"zadr{bad}avanja": "zadržavanja",
    f"{bad}tedi": "štedi",
    f"tra{bad}i": "traži",
    f"tra{bad}e": "traže",
    f"tra{bad}ite": "tražite",
    f"izvr{bad}enja": "izvršenja",
    f"pogre{bad}no": "pogrešno",
    f"pogre{bad}ne": "pogrešne",
    f"vredno{bad}cu": "vrednošću",
    f"re{bad}enje": "rešenje",
    f"mar{bad}e": "marže",
    f"pretra{bad}i": "pretraži",
    f"najvi{bad}e": "najviše",
    f"sadr{bad}aj": "sadržaj",
    f"Sadr{bad}aj": "Sadržaj",
    f"nezapa{bad}eno": "nezapaženo",
    f"de{bad}ava": "dešava",
    f"ma{bad}ini": "mašini",
    f"zavr{bad}e": "završe",
    f"zavr{bad}i": "završi",
    f"pona{bad}a": "ponaša",
    f"Pogre{bad}an": "Pogrešan",
    f"Ko{bad}ta": "Košta",
    f"najni{bad}a": "najniža",
    f"previ{bad}e": "previše",
    f"funkcioni{bad}e": "funkcioniše",
    f"ka{bad}e": "kaže",
    f"vodi{bad}": "vodiš",
    f"vidi{bad}": "vidiš",
    f"odr{bad}avanja": "održavanja",
    f"dru{bad}tvenih": "društvenih",
    f"mre{bad}a": "mreža",
    f"izve{bad}taj": "izveštaj",
    f"te{bad}ko": "teško",
    f"ga{bad}enja": "gašenja",
    f"po{bad}ara": "požara",
    f"poma{bad}e": "pomaže",
}

for path in files:
    text = path.read_text(encoding='utf-8')
    before = text
    for b, g in replacements.items():
        text = text.replace(b, g)

    # Currency (e.g., 500� -> 500€)
    text = re.sub(f"(\\d){bad}", r"\\1€", text)
    # Broken numeric ranges (e.g., 250€�400€ -> 250€-400€)
    text = re.sub(r"€�(?=\\d)", "€-", text)
    text = re.sub(f"(?<=\\d){bad}(?=\\d)", "-", text)
    # Standalone separators where replacement char survived
    text = text.replace(f" {bad} ", " — ")

    path.write_text(text, encoding='utf-8')
    print(f"{path.name}: {len(before)-len(text)} char delta")
