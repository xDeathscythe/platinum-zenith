import pathlib, re

files = [
    pathlib.Path(r"C:\Users\Eventide\.openclaw\workspace-devona\projects\arcads-clone\src\pages\blog\blogData.js"),
    pathlib.Path(r"C:\Users\Eventide\.openclaw\workspace-devona\projects\arcads-clone\src\pages\blog\blogIndexData.js"),
]

replacements = {
    "�ta": "šta",
    "za�to": "zašto",
    "ko�ta": "košta",
    "vi�e": "više",
    "bud�eta": "budžeta",
    "bud�etom": "budžetom",
    "bud�et": "budžet",
    "tro�i": "troši",
    "tro�e": "troše",
    "tro�kovi": "troškovi",
    "gre�aka": "grešaka",
    "gre�ke": "greške",
    "�to": "što",
    "Za�to": "Zašto",
    "mo�ete": "možete",
    "mo�emo": "možemo",
    "mo�e": "može",
    "va�": "vaš",
    "va�a": "vaša",
    "va�eg": "vašeg",
    "va�em": "vašem",
    "primeni�": "primeniš",
    "podigne�": "podigneš",
    "tr�i�te": "tržište",
    "tr�i�ta": "tržišta",
    "tr�i�tu": "tržištu",
    "Tr�i�te": "Tržište",
    "lo�": "loš",
    "Lo�": "Loš",
    "ko�taju": "koštaju",
    "br�e": "brže",
    "najbr�e": "najbrže",
    "kontroli�u": "kontrolišu",
    "ni�ta": "ništa",
    "ni�i": "niši",
    "ni�oj": "nižoj",
    "lak�a": "lakša",
    "uslu�ni": "uslužni",
    "uslu�ne": "uslužne",
    "posti�u": "postižu",
    "va�niji": "važniji",
    "podi�e": "podiže",
    "pa�nju": "pažnju",
    "razmi�ljanja": "razmišljanja",
    "�alju": "šalju",
    "poku�aja": "pokušaja",
    "zadr�ati": "zadržati",
    "zadr�avanja": "zadržavanja",
    "�tedi": "štedi",
    "tra�i": "traži",
    "tra�e": "traže",
    "tra�ite": "tražite",
    "izvr�enja": "izvršenja",
    "pogre�no": "pogrešno",
    "pogre�ne": "pogrešne",
    "vredno�cu": "vrednošću",
    "re�enje": "rešenje",
    "mar�e": "marže",
    "pretra�i": "pretraži",
    "najvi�e": "najviše",
    "sadr�aj": "sadržaj",
    "Sadr�aj": "Sadržaj",
    "nezapa�eno": "nezapaženo",
    "de�ava": "dešava",
    "ma�ini": "mašini",
    "zavr�e": "završe",
    "zavr�i": "završi",
    "pona�a": "ponaša",
    "Pogre�an": "Pogrešan",
    "Ko�ta": "Košta",
    "najni�a": "najniža",
    "previ�e": "previše",
    "funkcioni�e": "funkcioniše",
    "ka�e": "kaže",
    "vodi�": "vodiš",
    "vidi�": "vidiš",
    "odr�avanja": "održavanja",
    "dru�tvenih": "društvenih",
    "mre�a": "mreža",
    "izve�taj": "izveštaj",
    "te�ko": "teško",
    "ga�enja": "gašenja",
    "po�ara": "požara",
    "poma�e": "pomaže",
}

for path in files:
    text = path.read_text(encoding='utf-8')
    for bad, good in replacements.items():
        text = text.replace(bad, good)

    # Currency mojibake after numbers (e.g. 500� -> 500€)
    text = re.sub(r"(\d)�", r"\1€", text)
    # Broken ranges after currency replacement (e.g. 250€�400€ -> 250€-400€)
    text = re.sub(r"€�(?=\d)", "€-", text)
    text = re.sub(r"(?<=\d)�(?=\d)", "-", text)
    # Broken standalone separators in sentences
    text = text.replace(" � ", " — ")

    path.write_text(text, encoding='utf-8')
    print(f"updated {path}")
