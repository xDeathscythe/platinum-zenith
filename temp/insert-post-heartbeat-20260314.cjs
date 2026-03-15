const fs = require('fs')
const path = 'src/pages/blog/blogData.js'
let t = fs.readFileSync(path, 'utf8')
const marker = "  }\n\n]\n\nconst seenSlugs"
if (!t.includes(marker)) throw new Error('marker not found')

const newPost = `  {
    slug: 'kako-odrediti-budzet-za-google-reklame-srbija-2026',
    title: 'Kako odrediti budzet za Google reklame u Srbiji 2026: praktican model pre prvog evra',
    excerpt: 'Korak-po-korak model kako da izracunate realan Google Ads budzet u Srbiji 2026, od maksimalnog CPL-a do test faze i skaliranja bez rasipanja para.',
    date: '2026-03-14',
    category: 'Google Ads',
    readTime: '11 min',
    content: \`
## Kako odrediti budzet za Google reklame: kratak odgovor

Ako trazis upit **kako odrediti budzet za Google reklame**, najbrzi odgovor je da budzet ne krece od toga "koliko imas", nego od toga **koliko jedan klijent realno vredi i koliki CPL mozes da izdrzis**.

U praksi, vecina firmi u Srbiji u 2026 pravi dve greske:
- krene sa preniskim budzetom pa ne skupi dovoljno podataka,
- ili krene agresivno bez jasnog CPL limita pa "spali" mesec.

Za bazni pregled raspona po industriji pogledaj i [Google reklame cena](/google-reklame-cena), ali za realnu odluku moras da uradis racunicu za svoj biznis.

## Formula koja najvise pomaze pre launch-a

Pre nego sto uplatis prvi evro, odredi 4 broja:

1. prosecan prihod po klijentu,
2. bruto marza,
3. procenat leadova koji postanu kupci,
4. zeljeni profit po klijentu.

**Maksimalni CPL (grubi okvir):**

\\\`(prosecan prihod po klijentu x bruto marza - zeljeni profit) x stopa zatvaranja leadova\\\`

Ako ovaj broj ne znas, svaka kampanja je nagadjanje.

### Brz primer (lokalna usluga)

- prosecna vrednost klijenta: 600e,
- bruto marza: 50% (300e),
- zeljeni profit posle marketinga: 150e,
- lead -> klijent: 20%.

Maksimalni CPL je oko **30e**.
To znaci da iznad 30e kampanja ulazi u crvenu zonu i mora optimizaciju.

## Koliki test budzet ima smisla u prvih 30 dana

Ljudi cesto pitaju "da li je 200e dovoljno za Google Ads?".
Odgovor je: retko, osim za ultra-uske lokalne termine.

Da bi kampanja naucila i da bi imao dovoljno podataka, u test fazi je korisno da ciljas najmanje:
- **200-400 klikova** za uzorak,
- minimum 2-3 ad grupe po usluzi,
- 2-3 varijante oglasa po grupi.

Ako je ocekivani CPC 0.45e, samo za klikove ti treba oko 90-180e.
Ali realan test skoro uvek trazi vise jer deo budzeta ide na ucenje, negativne reci i ciscenje slabih upita.

Praktican okvir za mnoge lokalne biznize je **300e-900e test faza**, a za konkurentnije nise i vise.

## Kako raspodeliti budzet po strukturi kampanja

Jedna kampanja za sve usluge skoro uvek pravi haos.
Bolje radi podela po intentu:

- **High intent search** (upiti sa jasnom kupovnom namerom),
- **Branded sloj** (naziv firme + varijacije),
- **Remarketing** (povratak posetilaca koji nisu poslali upit).

Ako tek kreces i budzet je ogranicen, ne siris sve odmah.
Prvo stabilizuj high intent, pa dodaj branded i remarketing.

Za sire poredjenje kanala i raspodele ulaganja pogledaj [cene digitalnog marketinga](/cene-digitalnog-marketinga).

## Gde najcesce curi budzet

### 1) Presiroke kljucne reci

Ako targetiras informativne termine bez komercijalnog signala, dobijas "jeftine" klikove i skup lead.

### 2) Bez discipline sa negativnim recima

Nerelevantne pretrage pojedu budzet brze nego los oglas.
Negativne reci nisu opcija, nego obavezni nedeljni posao.

### 3) Landing ne prati poruku oglasa

Korisnik klikne na "Google reklame cena", a sleti na genericku stranicu bez jasnog sledeceg koraka.
Rezultat: visoka cena leada i slab quality score.

Ako ovaj deo skripi, prvo sredi stranicu i poruku. Koristan kontekst je i [izrada WordPress sajta cena](/izrada-wordpress-sajta-cena).

### 4) Fokus na CPC umesto na CPL i kvalitet

Nizak klik ne znaci dobar biznis rezultat.
Bitno je koliko kosta **kvalifikovan upit**, ne koliko kosta bilo koji klik.

## Model budzeta po fazama

### Faza 1: Test (0-30 dana)

Cilj: pronaci sta ne radi i sta ima signal.
- budzet ide na ucenje,
- prati se search terms i osnovni CPL trend,
- ne skalira se agresivno.

### Faza 2: Stabilizacija (30-90 dana)

Cilj: spustiti cenu kvalifikovanog upita.
- gasenje slabih segmenata,
- bolja poruka oglasa,
- dorada landing CTA toka,
- preraspodela samo na segmente sa zdravim signalom.

### Faza 3: Skaliranje (90+ dana)

Cilj: rast bez razbijanja ekonomije.
- povecanje budzeta postepeno,
- zadrzavanje CPL granica,
- sirenje tek kada osnovni kanal stabilno drzi target.

## KPI koje treba pratiti svake nedelje

Ako hoces kontrolu, prati ovih 5 brojeva:

1. CPL po kampanji,
2. procenat kvalifikovanih leadova,
3. lead -> klijent stopu,
4. cenu klijenta (CAC),
5. neto povrat po kanalu.

Bez ovoga je lako pomesati "aktivnost" i "rezultat".

Za CPC benchmark po nisi pogledaj [Google Ads cena po kliku u Srbiji 2026](/blog/google-ads-cena-po-kliku-srbija-2026), a za social poredjenje [Instagram reklame cena](/instagram-reklame-cena).

## Zakljucak

Google Ads budzet u Srbiji 2026 ne treba odredjivati po osecaju, nego po jasnom CPL limitu, test fazi i disciplini optimizacije.
Ako hoces, mogu da ti pomognem da izracunamo tvoj konkretan start budzet i granice rizika kroz [kontakt](/kontakt).
\`,
  }`

t = t.replace(marker, `  },\n\n${newPost}\n\n]\n\nconst seenSlugs`)
fs.writeFileSync(path, t, 'utf8')
console.log('Inserted new blog post')
