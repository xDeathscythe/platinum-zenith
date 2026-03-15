from pathlib import Path

path = Path(r"C:\Users\Eventide\.openclaw\workspace-devona\projects\arcads-clone\src\pages\blog\blogData.js")
text = path.read_text(encoding="utf-8")
marker = "const rawBlogPosts = [\n"
if marker not in text:
    raise SystemExit("marker not found")
slug = "google-ads-za-krovopokrivace-cena-leada-srbija-2026"
if slug in text:
    raise SystemExit("post already exists")

insert = """  {
    slug: 'google-ads-za-krovopokrivace-cena-leada-srbija-2026',
    title: 'Google Ads za krovopokrivace u Srbiji 2026: cena lead-a, budzet i manje praznih poziva',
    excerpt: 'Koliko realno kostaju Google Ads kampanje za krovopokrivace u Srbiji 2026, koji budzet ima smisla i kako da spustis cenu kvalifikovanog upita bez gubljenja na nerelevantne klikove.',
    date: '2026-03-15',
    category: 'Google Ads',
    readTime: '10 min',
    content: `
## Google Ads za krovopokrivace: kratak odgovor

Ako trazis upit **google ads za krovopokrivace cena**, realni rasponi u Srbiji 2026 obicno izgledaju ovako:

- **CPC (klik):** 0.25e-1.40e,
- **cena kvalifikovanog upita:** 9e-45e,
- **cena ugovorene procene na terenu:** 18e-80e,
- **test budzet za prvi mesec:** 450e-1.200e.

Raspon je siri jer nije isto da li ciljas hitne sanacije posle nevremena, zamenu crepa ili kompletan novi krov.
Za siri benchmark Search troska pogledaj i [google reklame cena](/google-reklame-cena).

## Gde kampanje najcesce pucaju kod krovopokrivaca

Kod ove nise problem retko bude samo u "skupom kliku".
Najcesce su tri uzroka visokog CPA:

1. keyword set je preopsiran i hvata DIY/informativne upite,
2. landing ne filtrira tip objekta i obim radova,
3. odgovor na upit kasni, pa lead ode konkurenciji.

Kada se ova tri sloja srede, ista medija cesto donese vise ozbiljnih poziva bez dodatnog budzeta.

## Intent podela koja obicno snizava cenu lead-a

Umesto jedne kampanje "krovopokrivac", bolje radi podela po intentu:

- **hitna sanacija curenja:** visi CPC, ali brza odluka,
- **renoviranje starog krova:** srednji CPC i solidan kvalitet,
- **novogradnja / kompletan krov:** skuplji lead, ali veca vrednost posla,
- **limarski radovi i oluci:** cesto jeftiniji klik, dobar ulaz za upsell.

Kada svaki intent dobije svoj oglas i landing poruku, quality score raste, a rasipanje budzeta pada.

## Koliki budzet ima smisla bez pogadjanja

Praktican okvir za krovopokrivacke firme:

1. izracunaj prosecnu vrednost zavrsenog posla,
2. odredi cilj broja procena mesecno,
3. postavi maksimalni CPA koji ostavlja zdravu marzu,
4. tek onda zakljucaj dnevni budzet.

Primer:

- prosecna vrednost posla: 1.600e,
- cilj: 10 kvalitetnih procena mesecno,
- maksimalni CPA: 70e,
- medijski budzet: oko 700e (plus fee za vodjenje).

Za siri raspored kanala i troskova pogledaj [cene digitalnog marketinga](/cene-digitalnog-marketinga).

## Landing koji pretvara klik u ozbiljan upit

Za ovu industriju Google Ads ne treba da vodi na genericki homepage.
Landing treba da ima:

- jasno navedene tipove radova (sanacija, zamena, novi krov),
- servisnu zonu (gradovi/opstine),
- 2-3 foto primera radova pre/posle,
- trust signale (garancija, rokovi, iskustvo),
- jedan glavni CTA: "posalji mere i slike" ili "zakazi procenu".

Ako je sajt spor i nepregledan na telefonu, plakaces i na dobrim kampanjama.
Za tehnicki deo pogledaj i [izrada wordpress sajta cena](/izrada-wordpress-sajta-cena).

## 5 gresaka koje dizu cenu lead-a

### 1) Sve usluge u jednoj kampanji
Sanacije, limarija i kompletni krovovi imaju razlicit intent i ne treba ih mesati.

### 2) Bez negativnih kljucnih reci
Bez minusa hvatas upite tipa "sam svoj majstor" i tutorijale.

### 3) Oglas ne navodi servisnu zonu
Ako radis samo jedan region, geografska poruka mora biti eksplicitna.

### 4) Nema kvalifikacije na formi
Lead bez osnova (tip krova, povrsina, lokacija) trosi vreme prodaje.

### 5) Fokus na jeftin CPC umesto na ugovoreni posao
Jeftin klik je nebitan ako ne dovede do izlaska na teren i potpisa.

## 30-dnevni plan optimizacije

- **Nedelja 1:** podela kampanja po intentu + negativne reci.
- **Nedelja 2:** nova ad copy varijanta po usluzi i regionu.
- **Nedelja 3:** dorada landing sekcija (dokazi, FAQ, CTA).
- **Nedelja 4:** budzet samo na ad grupe koje drze ciljani CPA.

Ako zelis i poredjenje sa social kanalom, pogledaj [instagram reklame cena](/instagram-reklame-cena).

## FAQ: Google Ads za krovopokrivace

### Koliki je minimalan budzet da kampanja ima smisla?
Realan minimum je 450e-600e medijskog budzeta mesecno, plus vodjenje. Ispod toga je tesko skupiti dovoljno podataka za pametnu optimizaciju.

### Koliko brzo stizu prvi ozbiljni upiti?
Prvi pozivi cesto stizu u prvih nekoliko dana, ali za stabilan CPA i predvidljiv pipeline obicno treba 3-6 nedelja.

### Da li je bolje targetirati samo jedan grad?
Ako je tim mali, da. Uzi geo target smanjuje rasipanje i podize procenat relevantnih upita.

### Da li treba call-only kampanja?
Za hitne intervencije cesto da, ali je najbolje da radi paralelno sa landing kampanjom koja hvata detaljnije upite.

### Kako znam da je kampanja profitabilna?
Prati cenu ugovorene procene i procenat procena koje prelaze u realizovan posao. Tek tad znas pravi ROI.

## Zakljucak

Google Ads za krovopokrivace u Srbiji 2026 donosi najvise kada kampanje vodis po intentu i regionu, a landing i response proces drze isti cilj: ugovorena procena, ne samo klik.
Ako hoces, mogu da mapiram 3 najbrza poteza za tvoj nalog preko [kontakt forme](/kontakt).
`,
  },

"""

updated = text.replace(marker, marker + insert, 1)
path.write_text(updated, encoding="utf-8")
print("Inserted new blog post")
