from pathlib import Path

path = Path(r"C:\Users\Eventide\.openclaw\workspace-devona\projects\arcads-clone\src\pages\blog\blogData.js")
text = path.read_text(encoding="utf-8")

marker = "const rawBlogPosts = [\n"
insert = """  {
    slug: 'odrzavanje-wordpress-sajta-cena-srbija-2026',
    title: 'Odrzavanje WordPress sajta cena u Srbiji 2026: sta stvarno ulazi i koliko kosta bez skrivenih troskova',
    excerpt: 'Koliko realno kosta odrzavanje WordPress sajta u Srbiji 2026, koji su paketi po obimu i kako da izbegnete skupe hitne intervencije kroz dobar maintenance plan.',
    date: '2026-03-14',
    category: 'WordPress',
    readTime: '10 min',
    content: `
## Odrzavanje WordPress sajta cena u Srbiji 2026: kratak odgovor

Ako trazis upit **odrzavanje wordpress sajta cena**, najcesci realni rasponi na srpskom trzistu u 2026 su:

- **osnovni maintenance (update + backup + monitoring):** 50e-120e/mes,
- **rast paket (tehnicko + manji SEO/CRO zahvati):** 120e-280e/mes,
- **aktivan e-commerce maintenance (WooCommerce + hitne intervencije):** 280e-700e+/mes.

Ako tek planiras launch i hoces kompletan troskovni okvir, pogledaj i [izrada WordPress sajta cena](/izrada-wordpress-sajta-cena).

## Sta ulazi u maintenance kada je usluga uradjena kako treba

Dobar WordPress maintenance nije samo "klik na update".
Minimum koji mora da postoji svakog meseca:

1. update core/theme/plugin sloja sa staging proverom,
2. automatizovani dnevni backup + mesečni restore test,
3. security monitoring i brute-force zastita,
4. uptime i performanse (LCP/CLS/TBT) kontrola,
5. kratak operativni izvestaj sa prioritetima.

Bez ove discipline najcesce dolazi do "tihog" pada performansi, pa onda i pada konverzije i lead kvaliteta.
Za SEO deo koji ide uz maintenance pogledaj i [seo optimizacija cena](/seo-optimizacija-cena).

## Gde firme najcesce izgube novac

### 1) "Imamo backup" bez restore provere
Backup koji nikad nije testiran nije backup plan nego pretpostavka.
Kad se desi incident, tek tad se vidi da arhiva nije validna.

### 2) Update direktno na live sajtu
Bez staging testa sitan plugin konflikt moze da obori checkout, forme ili tracking.
Jedan izgubljen vikend cesto kosta vise nego mesec dana kvalitetnog odrzavanja.

### 3) Maintenance bez KPI-a
Ako ne pratis vreme ucitavanja, uptime, broj kriticnih gresaka i vreme reakcije, placas aktivnost bez kontrole kvaliteta.

### 4) "Jeftin paket" bez sigurnosne rutine
Nizi fee nema vrednost ako nema malware skena, hardeninga i redovne kontrole korisnickih naloga.

## Kako da procenis koji maintenance paket ti stvarno treba

Prakticno pravilo po tipu sajta:

- **prezentacioni sajt sa manjim izmenama:** osnovni maintenance,
- **lead-gen sajt sa aktivnim kampanjama:** rast paket,
- **WooCommerce shop i veci promet:** aktivan e-commerce maintenance.

Ako sajt dobija redovan paid saobracaj, maintenance mora biti uskladjen sa akvizicijom.
U suprotnom placas klikove na stranicu koja tehnicki gubi prodaju.
Za paid kontekst uporedi i [Google reklame cena](/google-reklame-cena) i [Instagram reklame cena](/instagram-reklame-cena).

## 30-dnevni maintenance plan bez lutanja

- **Nedelja 1:** tehnicki audit plugin/theme stack-a + backup/restore test.
- **Nedelja 2:** staging update ciklus i zatvaranje kriticnih security rupa.
- **Nedelja 3:** brzina + CWV optimizacija za stranice sa najvise saobracaja.
- **Nedelja 4:** mesecni izvestaj + plan sledecih iteracija po uticaju na lead/prodaju.

## KPI koje treba gledati svakog meseca

Ako hoces da maintenance bude investicija, ne trosak, prati:

1. uptime (%),
2. broj kriticnih gresaka,
3. prosecno vreme reakcije na incident,
4. trend Core Web Vitals metrika,
5. konverzija na kljucnim landing stranicama posle update ciklusa.

Tek tada znas da li paket stvarno stiti prihod.

## Zakljucak

Odrzavanje WordPress sajta u Srbiji 2026 nema smisla gledati samo po ceni, nego po tome koliko dobro cuva stabilnost, brzinu i konverziju sajta.
Ako hoces, mogu da oznacim sta ti je minimum maintenance plana po tipu sajta preko [kontakt forme](/kontakt).
`,
  },
"""

if marker not in text:
    raise SystemExit("Marker not found")

if "slug: 'odrzavanje-wordpress-sajta-cena-srbija-2026'" in text:
    raise SystemExit("Post already exists")

text = text.replace(marker, marker + insert, 1)
path.write_text(text, encoding="utf-8")
print("Inserted new blog post entry")
