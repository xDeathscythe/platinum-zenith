from pathlib import Path

path = Path(r"C:\Users\Eventide\.openclaw\workspace-devona\projects\arcads-clone\src\pages\blog\blogData.js")
text = path.read_text(encoding="utf-8")
slug = "google-ads-za-proizvodne-firme-cena-b2b-leada-srbija-2026"
if slug in text:
    print("Slug already exists, skipping")
    raise SystemExit(0)
marker = "const rawBlogPosts = ["
idx = text.find(marker)
if idx == -1:
    raise SystemExit("Marker not found")
insert = r'''
  {
    slug: 'google-ads-za-proizvodne-firme-cena-b2b-leada-srbija-2026',
    title: 'Google Ads za proizvodne firme u Srbiji 2026: cena B2B lead-a i budzet koji ima smisla',
    excerpt: 'Koliko realno kostaju Google Ads kampanje za proizvodne firme u Srbiji 2026, koji CPL raspon je zdrav za B2B upite i kako da smanjite bacanje budzeta na nekvalitetne leadove.',
    date: '2026-03-13',
    category: 'Google Ads',
    readTime: '10 min',
    content: `
## Google Ads za proizvodne firme u Srbiji 2026: kratak odgovor

Ako trazite upit **google ads za proizvodne firme cena**, realan start okvir za vecinu B2B proizvodnih kompanija u Srbiji je:

- **Test faza:** 900e-2.200e/mes
- **Stabilan lead flow:** 2.200e-5.500e/mes
- **Skaliranje po segmentima i izvoznim trzistima:** 5.500e+/mes

Za siri benchmark Search troska pogledajte i [Google reklame cena](/google-reklame-cena).

## Koliko realno kosta B2B lead za proizvodne firme

Posle inicijalne optimizacije, najcesci rasponi u praksi su:

- **CPC:** 0.35e-2.90e
- **Kvalifikovan upit:** 22e-140e
- **SQL (sales qualified lead):** 70e-380e

Kod proizvodnje nije poenta da kupite sto vise form submit-ova. Poenta je da dobijete upite sa stvarnim specifikacijama, realnim kolicinama i jasnim rokovima nabavke.

## Gde proizvodne firme najcesce gube budzet

1. **Mesanje potpuno razlicitih proizvoda u jednoj kampanji**  
   Ako isti ad set pokriva CNC usluge, serijsku proizvodnju i prototipove, signal je mutan i trosak raste.

2. **Siroki keyword-i sa informativnim intentom**  
   Upiti tipa "sta je CNC", "kako radi laser" i slicno trose budzet bez nabavne namere.

3. **Nema filtracije lead-a u formi**  
   Bez pitanja o kolicini, materijalu i roku, sales tim dobija previse nekvalifikovanih zahteva.

4. **Genericki landing bez industrijskih detalja**  
   Oglas obecava konkretan tehnicki kapacitet, a strana prikazuje samo opsti marketing tekst.

Ako zelite da popravite post-click deo, koristan okvir je i [izrada landing stranice: cena, rokovi, sta ulazi u cenu](/blog/izrada-landing-stranice-cena-rokovi-sta-ulazi-u-cenu).

## Struktura kampanje koja najcesce radi za proizvodne firme

### 1) Kampanje po proizvodnom segmentu

Odvojite kampanje po realnim profitnim linijama (npr. obrada metala, plastika, custom delovi, serijska proizvodnja) umesto jedne "all-in" kampanje.

### 2) Kampanje po intentu

Razdvojite "RFQ / ponuda" upite od istrazivackih upita. High-intent budzet mora imati prioritet.

### 3) Brand defense kampanja

Kad nabavka vec trazi vas naziv firme, treba da vas vidi prvo, pre distributera i konkurenata.

### 4) Remarketing za tehnicki zainteresovane posetioce

Posetioci koji su gledali tehnicke stranice i kapacitete imaju vecu verovatnocu prelaska u ozbiljan upit.

## Landing za B2B proizvodnju: sta mora da postoji

Ako saljete Search saobracaj, landing mora da skrati put do procene i ponude:

- jasan naslov (kapacitet + tip usluge),
- masina/tehnologija i opseg materijala,
- okvirni MOQ i rokovi,
- forma sa 4-6 kvalifikacionih pitanja,
- vidljiv CTA: "Posaljite upit" ili "Zatrazite ponudu".

Ako landing ne odgovara oglasu 1:1, CPL raste i kad je CPC pod kontrolom.

## KPI koji su vazni svake nedelje

Nemojte voditi kampanje po klikovima i impresijama. Fokusirajte se na:

1. cenu kvalifikovanog upita,
2. SQL stopu po kampanji,
3. cenu SQL-a,
4. procenat SQL -> ponuda,
5. procenat ponuda -> ugovor.

Tek kad spojite marketing i sales metrike, znate da li Google Ads donosi pipeline ili samo aktivnost.

## 30-dnevni plan bez lutanja

- **Nedelja 1:** audit keyword mape + podela kampanja po segmentima i intentu.
- **Nedelja 2:** search terms ciscenje + negativne reci + test 2-3 oglasa po grupi.
- **Nedelja 3:** dorada landing forme, kvalifikacionih pitanja i CTA toka.
- **Nedelja 4:** preraspodela budzeta samo na kampanje sa najboljim odnosom SQL cena / stopa zatvaranja.

Za ukupan kanal mix i raspodelu ulaganja pogledajte i [cene digitalnog marketinga](/cene-digitalnog-marketinga). Ako paralelno testirate demand capture na Meta kanalima, uporedni benchmark je [Instagram reklame cena](/instagram-reklame-cena).

## Zakljucak

Google Ads za proizvodne firme u Srbiji 2026 moze da bude stabilan B2B kanal kada kampanje vodite po segmentu, nameri i SQL kvalitetu, ne po jeftinom kliku.
Ako zelite, mogu da uradim mini audit naloga i oznacim 3 najbrza poteza za nizu cenu kvalitetnog lead-a preko [kontakt forme](/kontakt).
`,
  },'''
insert_at = idx + len(marker)
text = text[:insert_at] + insert + text[insert_at:]
path.write_text(text, encoding="utf-8")
print("Inserted new blog post")
