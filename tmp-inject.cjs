const fs = require('fs')
const path = require('path')

const blogDataPath = path.join(__dirname, 'src', 'pages', 'blog', 'blogData.js')
let content = fs.readFileSync(blogDataPath, 'utf8')

const newPost = `  {
    slug: 'google-ads-roi-statistika-roas-po-industriji-srbija-2026',
    title: 'Google Ads ROI: koliko zapravo zaradjujete na svaki ulozeni dinar (podaci po industriji)',
    excerpt: 'Prosecni Google Ads ROI je 200%, ali stvarni ROAS varira od 0.7x u finansijama do 8x u pravnim uslugama. Benchmark podaci po industriji, tipu kampanje i savet kako izracunati vas break-even.',
    date: '2026-03-24',
    category: 'Marketing',
    readTime: '9 min',
    content: \`
## Svaki vlasnik firme pita isto pitanje

"Koliko cu zaraditi ako ulozim 500 evra u Google Ads?"

Odgovor koji cete najcesce cuti na internetu: "2 dolara za svaki ulozen dolar." To je prosek koji Google voli da citira. Ali prosek sakriva ogromne razlike izmedju industrija, tipova kampanja i kvaliteta upravljanja nalogom.

Neko u pravnim uslugama moze da izvuce 8x povrat na svaki dinar. Neko u finansijskom sektoru zavrsi na 0.7x i ostane u minusu. Razlika nije u platformi. Razlika je u tome koliko razumete svoju matematiku pre nego sto kliknete "Pokreni kampanju."

Za konkretne cene klikova po industrijama pogledajte [Google Ads cene u Srbiji](/google-reklame-cena).

## Sta je ROAS i zasto vas ROI laze

Pre bilo kakvih podataka, moramo razjasniti dva pojma koja se konstantno mesaju:

- **ROAS (Return on Ad Spend):** prihod podeljen troskovima oglasa. Ako potrosite 100 evra i zaradite 400, ROAS je 4x.
- **ROI (Return on Investment):** profit podeljen ukupnom investicijom. Ukljucuje plate, alate, proviziju agencije, vreme. Skoro uvek nizi od ROAS-a.

Problem: vecina platformi prikazuje ROAS koji koristi last-click atribuciju. To znaci da Google sebi pripisuje konverziju cak i kad je korisnik vec znao za vas brend i ionako bi kupio.

Marketing Mix Modeli (MMM) koji mere inkrementalni uticaj daju realnije brojke. I ti brojevi su i dalje pozitivni za Google Ads, samo ne toliko sjanji koliko ih Google platforma prikazuje.

## Prosecni ROAS po industriji (2025-2026 benchmark podaci)

Evo sta zapravo pokazuju podaci za razlicite industrije:

### Usluzne delatnosti

- **Pravne usluge:** 8.0x ROAS (vrednost jednog slucaja pokriva mesece oglasavanja)
- **Profesionalne usluge:** 3x do 6x ROAS (zavisno od kvaliteta lead-ova i stope zatvaranja)
- **Lokalne usluge i mali biznisi:** 2x+ ROAS (uz ciljanje na visoko-namerne pretrage i preciznu geografiju)

### Proizvodnja i industrija

- **Teska oprema i industrijske masine:** 6.86x ROAS (mali volumen, ali ogromna vrednost po transakciji)
- **Proizvodnja (B2B opsti):** 5.36x ROAS za PPC u 2026
- **Proizvodnja (manji obim):** 1.8x do 2.3x u zavisnosti od slozenosti prodajnog ciklusa

### E-commerce

- **Prosecni e-commerce ROAS:** 2.87x u 2025. godini (4% pad u odnosu na prethodnu godinu)
- **Moda i odeca:** 3.40x
- **Kuca i basta:** 3.80x
- **Elektronika:** 3.02x
- **Lepota i nega:** 2.80x
- **Hrana i pice:** 2.60x
- **Zdravlje i wellness:** 2.12x

### Tehnologija

- **B2B SaaS:** 1.5x do 3x na prvom dodiru (srednji SaaS 2.6x, top 25% preko 4.1x)
- **Enterprise B2B Tech:** 3.2x prosecni ROAS

### Finansije

- **Finansijske usluge:** 0.7x ROAS na placanoj pretrazi (glavni razlog: ekstremno skupe kljucne reci i dug prodajni ciklus)

## ROAS po tipu Google Ads kampanje

Nisu sve kampanje jednake. Inkrementalni ROI (koliko je oglasavanje zapravo uzrokovalo, ne samo pripisalo sebi) po tipu kampanje u 2026:

- **Search Brand:** 8.05x medijana (do 11.48x za top performere). Zvuci sjajno, ali pazi: ovi korisnici bi mozda kupili i bez oglasa
- **Search Non-Brand:** 5.21x medijana (do 11.93x). Najveci potencijal jer hvata ljude koji vas jos ne znaju
- **Performance Max:** 4.64x medijana. Konzistentan, ali sa ogranicenim plafonom rasta
- **Video / YouTube:** 2.70x medijana. Potcenjen kanal koji konkurise cenom daleko skupljim formatima
- **Demand Gen / Discovery:** 2.22x medijana. Dobro za gornji deo funnel-a, ali slabiji direktni povrat

Za poredjenje sa drugim kanalima pogledajte [Google Ads vs Facebook Ads](/blog/google-ads-vs-facebook-ads-koji-je-bolji-za-vas-biznis).

## Kako izracunati vas break-even ROAS

Ovo je korak koji vecina preskoce. Pre nego sto pogledate benchmark podatke i zakljucite da je vas ROAS "dobar" ili "los", morate znati sopstvenu break-even tacku.

Formula:

**Break-even ROAS = 1 / Profitna marza**

Primeri:

- Profitna marza 50%: break-even ROAS = 2x (sve iznad 2x je profit)
- Profitna marza 30%: break-even ROAS = 3.33x
- Profitna marza 20%: break-even ROAS = 5x
- Profitna marza 10%: break-even ROAS = 10x

E-commerce sa marzom od 20% koji ostvaruje ROAS od 3x izgleda kao da zardjuje, ali je zapravo u gubitku. Zato industrija benchmark sam po sebi ne znaci nista bez vase finansijske realnosti.

## Zasto firme u Srbiji imaju nizi ROAS nego globalni proseci

Nekoliko faktora specificnih za srpsko trziste:

**1. Manji obim pretrage.** Manje pretrazivanja znaci manje mogucnosti za optimizaciju. Google-ov algoritam treba volumen podataka da bi naucio koje konverzije donose rezultate.

**2. Nedostatak konverzionog pracenja.** Ogroman procenat srpskih sajtova nema pravilno podesen Google Tag Manager, konverzione akcije ili offline konverziono pracenje. Bez podataka, algoritam radi naslepo.

**3. Landing stranice koje ne konvertuju.** Prosecna stopa konverzije na Google Search kampanjama je oko 4.4%. Mnogi srpski biznisi imaju stopu ispod 1% jer salju saobracaj na homepage umesto na dedicirane landing stranice. Za savete o optimizaciji pogledajte [kako napraviti landing stranicu](/blog/kako-napraviti-landing-stranicu-koja-konvertuje).

**4. Kratki testni periodi.** Firma ulozi 200 evra za 2 nedelje, ne vidi rezultate i zakljuci da "Google Ads ne radi." Algoritmu treba minimum 2-4 nedelje i bar 15-30 konverzija mesecno da bi efektivno optimizovao.

## 5 koraka za poboljsanje vaseg Google Ads ROI

### 1. Postavite konverziono pracenje pre bilo cega drugog

Ne otvarajte Google Ads nalog dok nemate: Google Tag Manager, konverzione akcije za svaki cilj (kupovina, poziv, kontakt forma, chat), i Enhanced Conversions za bolji matching. Ovo je preduslov, ne opcija.

### 2. Razdvojte brand i non-brand kampanje

Brand kampanje (ljudi koji traze vas naziv) imaju 8x ROI, ali to je mahom saobracaj koji bi dosao i organskim putem. Non-brand kampanje (ljudi koji traze vasu uslugu/proizvod) su gde je pravi rast. Merite ih odvojeno i ne dozvolite da vam brand kampanja maskira los non-brand performans.

### 3. Koristite negativne kljucne reci agresivno

Tipicna kampanja u Srbiji trosi 20-40% budzeta na potpuno nebitne pretrage. Pregled search terms izvestaja bi trebalo raditi minimum jednom nedeljno. Blokirajte sve sto nema jasnu kupovnu nameru.

### 4. Testirajte landing stranice, ne samo oglase

70% rezultata dolazi od onoga sto se desi posle klika. Posaljite korisnike na stranu koja direktno odgovara na njihovu pretragu, sa jednim jasnim pozivom na akciju. Ne na homepage.

### 5. Dajte algoritmu dovoljno podataka i vremena

Minimum 15 konverzija mesecno po kampnji za automatske strategije licitiranja (Target CPA, Target ROAS, Maximize Conversions). Ispod toga, koristite manuelno licitiranje ili Enhanced CPC dok ne sakupite dovoljno podataka.

## Kada Google Ads nije pravi kanal

Iskreno: postoje situacije gde Google Ads nije odgovor.

- **Niski mesecni budzet (ispod 300 evra):** nedovoljno podataka za optimizaciju, bolje uloziti u SEO ili drustvene mreze
- **Proizvod/usluga bez pretrazivacke potraznje:** ako niko ne trazi to sto nudite, Search Ads nece pomoci (probajte Display ili Social)
- **Nedovoljno jasna ponuda:** ako nemate jasnu razliku od konkurencije, platicete za klikove koji se nece pretvoriti u prodaju
- **Sajt bez mobilne verzije:** 60%+ saobracaja je sa mobilnih uredjaja, a konverzije na losem mobilnom sajtu su blizu nule

Ako niste sigurni koji kanal je pravi za vas, pogledajte [cene digitalnog marketinga](/cene-digitalnog-marketinga) ili nas [kontaktirajte direktno](/kontakt) za besplatnu analizu.

## Zakljucak: ROAS je kompas, ne cilj

Prosecni Google Ads ROI od 200% zvuci lepo u prezentaciji. Ali vas konkretni ROAS zavisi od vase marze, kvaliteta sajta, konkurencije u vasoj nisi i koliko dobro upravljate kampanjom.

Firme koje mere, optimizuju i razumeju svoju matematiku redovno dostizu 4-8x ROAS. Firme koje "samo pokrenu kampanju i cekaju" zavrsavaju ispod break-even tacke i zakljucuju da digitalni marketing ne radi.

Razlika nije u platformi. Razlika je u pristupu.
\`,
    schema: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Google Ads ROI: koliko zapravo zaradjujete na svaki ulozeni dinar (podaci po industriji)",
      "datePublished": "2026-03-24",
      "author": { "@type": "Organization", "name": "Platinum Zenith" },
      "publisher": { "@type": "Organization", "name": "Platinum Zenith", "url": "https://platinumzenith.com" },
      "description": "Prosecni Google Ads ROI je 200%, ali stvarni ROAS varira od 0.7x u finansijama do 8x u pravnim uslugama. Benchmark podaci po industriji, tipu kampanje i savet kako izracunati vas break-even.",
      "mainEntityOfPage": "https://platinumzenith.com/blog/google-ads-roi-statistika-roas-po-industriji-srbija-2026"
    }
  },
`

// Inject at top of array
content = content.replace(
  'const rawBlogPosts = [\n',
  'const rawBlogPosts = [\n' + newPost
)

fs.writeFileSync(blogDataPath, content, 'utf8')
console.log('Blog post injected successfully')
