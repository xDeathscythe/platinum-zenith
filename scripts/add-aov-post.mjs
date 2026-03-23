import fs from 'fs'
const path = 'src/pages/blog/blogData.js'
let content = fs.readFileSync(path, 'utf8')

const newPost = `  {
    slug: 'prosecna-vrednost-porudzbine-aov-po-industriji-benchmark-statistika-2026',
    title: 'Prosecna vrednost porudzbine (AOV) po industriji: benchmark podaci za 2025-2026',
    excerpt: 'Kolika je prosecna vrednost narudzbine u e-commerce-u, modi, elektronici i food delivery-ju? Citirani benchmark podaci za 2025-2026, AOV po uredjaju i strategije za povecanje.',
    date: '2026-03-23',
    category: 'CRO',
    readTime: '10 min',
    content: \`
## Zasto je prosecna vrednost porudzbine jedna od najvaznijih e-commerce metrika

Prosecna vrednost porudzbine (Average Order Value, AOV) pokazuje koliko kupac u proseku potrosi po jednoj transakciji. Firma sa 1.000 porudzbina mesecno i AOV od 50 evra ima 50.000 evra prometa. Ista firma sa AOV od 75 evra ima 75.000 evra, bez ijednog novog kupca. Zato je podizanje AOV-a najbrzi nacin za rast prihoda bez povecanja troskova akvizicije.

Prema SpeedCommerce i Oberlo podacima za 2024-2025, globalni prosecni AOV u e-commerce-u iznosi 144 dolara (rast od 8.7% u odnosu na 2023), sa projekcijom od 150-180 dolara do kraja 2025.

Za povezanu metriku o troskovima privlacenja kupaca pogledajte [CPA benchmark po industriji](/blog/koliko-kosta-novi-klijent-cpa-po-industriji-google-facebook-2026). Za optimizaciju konverzija pogledajte [benchmark konverzija po industriji](/blog/prosecna-stopa-konverzije-po-industriji-benchmark-statistika-2026).

## AOV po industriji: gde se vas biznis pozicionira

Razlike u prosecnoj vrednosti porudzbine izmedju industrija su ogromne. Firma koja prodaje nakit ne moze da poredi svoj AOV sa food delivery servisom. Zato su benchmark podaci kriticni za realno postavljanje ciljeva.

**AOV benchmark po industriji (2024-2025):**

| Industrija | AOV (USD) | Napomena |
|-----------|-----------|---------|
| Nakit i luksuz | $436-$1,058 | Najvisi AOV, premijum proizvodi |
| Edukacija (online kursevi) | $496 | Digitalni proizvodi, visoke marze |
| Beba i deca | $362 | Rast od 71% u odnosu na prethodnu godinu |
| Kompjuteri i elektronika | $349 | Visok AOV, duzi ciklus odlucivanja |
| Dom i dekoracija | $253-$373 | Namestajna i kucni dekor |
| Potrosacka dobra | $211 | Sirok spektar proizvoda |
| Moda i odeca | $82-$196 | Varijacija zavisno od segmenta (fast fashion vs premium) |
| Home goods (Q1 2025) | $266 | Oberlo Q1 2025 podaci |
| Fashion (Q1 2025) | $191 | Oberlo Q1 2025 podaci |
| Health i beauty (Q1 2025) | $151 | Oberlo Q1 2025 podaci |
| Sport | $122 | Stabilna kategorija |
| Hrana i pice | $69-$114 | Manje porudzbine, visa frekvencija |
| Multi-brand retail | $94 | Marketplace model |
| Kucni ljubimci | $83 | Repeat kupovina, pretplatnicki modeli rastu |
| Lepota i nega | $71 | Nizak AOV, ali visoka repeat stopa |
| Suplementi (Q1 2025) | $70 | Decile Q1 2025 podaci |
| Food delivery | $36 | Najnizi AOV, ali najveca frekvencija |

Prema Decile Q1 2025 podacima, tri najjace kategorije po AOV su Home Goods ($266), Fashion ($191) i Health & Beauty ($151). Na drugom kraju spektra, food delivery i leisure kategorije imaju AOV ispod $40.

Za strategije zadrzavanja kupaca koji donose visok AOV pogledajte [CLV benchmark po industriji](/blog/customer-lifetime-value-clv-po-industriji-benchmark-statistika-2026).

## AOV po uredjaju: desktop i dalje dominira

Uredjaj sa koga kupac kupuje drasticno utice na to koliko ce potrositi.

**AOV po uredjaju (2024-2025):**

| Uredjaj | AOV 2024 | AOV 2025 |
|---------|----------|----------|
| Desktop | $146-$197 | $192-$230 |
| Mobilni sajt | $85-$98 | $133-$149 |
| Tablet | ~$140 | ~$154 |
| Mobilna aplikacija | $217 | raste |

Desktop korisnici trose 50-70% vise po porudzbini od mobilnih korisnika na sajtu. Razlog: na desktopu kupci cesce kupuju skuplje proizvode jer im je pregled proizvoda udobniji, a checkout proces manje frustrirajuci.

Interesantno, mobilne aplikacije imaju AOV cak i visi od desktopa ($217 vs $197 u 2024). Ovo je posledica toga sto korisnici aplikacija vec imaju visoku purchase intent i sacuvane podatke za placanje.

Mobilna trgovina sada cini 59% svih globalnih online prodaja, ali sa nizim AOV-om po transakciji. To znaci da optimizacija mobilnog iskustva za upselling postaje kriticna.

Za kontekst o mobilnoj vs desktop kupovini pogledajte [mobilna vs desktop konverzija](/blog/mobilna-vs-desktop-kupovina-konverzije-statistika-2026).

## Regionalne razlike: SAD vs globalni prosek

Americki trziste pokazuje znacajno visi AOV od globalnog proseka.

**SAD AOV trendovi (2025):**
- Prosecni AOV u SAD: $182 (rast od 22% u odnosu na $149 prethodne godine)
- Mart 2025: $159.05
- Globalni prosek: $150

Ovaj jaz ukazuje na vecu kupovnu moc americkih potrosaca, ali i na agresivnije upselling i free shipping strategije americkih e-commerce kompanija.

## B2B vs B2C: potpuno razlicite dimenzije

B2B e-commerce ima dramaticno visi AOV od B2C, cesto u stotinama do hiljada dolara po porudzbini. Razlozi: bulk narudzbine, ponavljajuca kupovina, recurring billing i vise zainteresovanih strana u odlucivanju.

Za B2B marketing strategije pogledajte [B2B marketing vodic](/blog/b2b-marketing-srbija-2026-vodic).

## 6 strategija za povecanje prosecne vrednosti porudzbine

### 1. Free shipping prag: najjednostavnija AOV poluga

Postavljanje minimalnog iznosa za besplatnu dostavu je najlaksi nacin da povecate AOV. Prema istrazivanjima, free shipping prag povecava AOV za 15-30%, a 58% kupaca dodaje proizvode u korpu da bi dostiglo prag.

Preporuka je da prag postavite 10-30% iznad trenutnog AOV-a. Ako vam je prosecna korpa 65 evra, prag od 85 evra motivise kupce da dodaju jos jedan proizvod.

Dinamicke poruke poput "Jos X evra do besplatne dostave" konvertuju znacajno bolje od staticnih.

90% online kupaca navodi besplatnu dostavu kao glavni razlog za online kupovinu. Sa druge strane, 70% kupaca je napustilo korpu iskljucivo zbog troskova dostave.

Za detaljne podatke o napustanju korpe pogledajte [statistika napustanja korpe](/blog/napustanje-korpe-statistika-po-industriji-2026).

### 2. Upselling: skuplja verzija istog proizvoda

Upselling povecava prihod za 10-30% u proseku. Ponudite kupcu premijum verziju, veci paket ili napredniji model onoga sto vec gleda.

Upselling je 68% isplativiji od akvizicije novog kupca. Post-purchase upsell ponude (nakon sto kupac zavrsi kupovinu) dodaju 10-15% na AOV.

### 3. Cross-selling: komplementarni proizvodi

Cross-selling generise 10-30% ukupnog e-commerce prihoda. Brendovi koji koriste cross-selling belize prosecni rast profita od 20%.

Personalizovani cross-selling, baziran na podacima o kupcu, povecava prodaju za 35% i potrosnju po kupcu za 34%.

Predlaganje komplementarnih proizvoda na product stranicama, u korpi ili tokom checkout-a je standard koji vecina e-commerce platformi podrzava out-of-the-box.

### 4. Product bundling: paketi po povoljnijoj ceni

Bundling povecava AOV za 20-30%, a neki biznisi beleze poboljsanje i do 60%. Kupci koji kupe bundle imaju 2.7x vecu lifetime vrednost od onih koji kupe pojedinacne proizvode.

Personalizovani bundling donosi 40% visu retenciju u poredjenju sa standardnom prodajom. Ocekuje se da ce bundlovi ciniti 30% svih online porudzbina do kraja 2025.

### 5. AI preporuke: personalizacija koja prodaje

Kupci koji interaguju sa AI preporukama imaju do 369% visi AOV u poredjenju sa sesijama bez preporuka. Prosecno poboljsanje je 15-30%.

AI chat funkcije povecavaju AOV za 25% kod kupaca koji ih koriste. Ovo vise nije buducnost, ovo je standard za ozbiljne e-commerce operacije.

Za kontekst o AI alatima pogledajte [statistika AI usvajanja u firmama](/blog/koliko-firmi-koristi-ai-statistika-produktivnost-roi-2026).

### 6. Pretplatnicki model: predvidljiv visok AOV

Subscription modeli podizu AOV kreiranjem predvidivih, visokovrednih kupovina. Pretplatnici trose vise jer je odluka o kupovini vec doneta, a friction pri ponovnoj kupovini je minimalan.

Za metriku retencije pretplatnika pogledajte [churn rate po industriji](/blog/churn-rate-po-industriji-benchmark-statistika-2026).

## Kako izracunati i pratiti AOV

Formula je jednostavna:

**AOV = Ukupan prihod / Broj porudzbina**

Ali ne pratite samo jedan broj. Segmentirajte AOV po:
- **Uredjaju** (desktop vs mobile vs app)
- **Kanalu akvizicije** (organski vs placeni vs email vs social)
- **Kategoriji proizvoda** (razlicite kategorije imaju razlicit AOV)
- **Novim vs povratnim kupcima** (povratni kupci obicno imaju visi AOV)
- **Vremenskom periodu** (sezonalnost, promotivni periodi)

Pratite AOV zajedno sa konverzijom i saobracajem. Povecanje AOV-a uz pad konverzije moze da znaci da ste odvratili kupce sa nizim budzetom bez da ste privukli nove sa visim.

## Zakljucak: gde je vas AOV u poredjenju sa benchmarkom

| Industrija | Nizak AOV (ispod proseka) | Prosecan | Dobar (iznad proseka) |
|-----------|--------------------------|----------|----------------------|
| E-commerce generalno | <$100 | $144-$150 | >$180 |
| Moda i odeca | <$100 | $150-$190 | >$220 |
| Elektronika | <$200 | $350 | >$450 |
| Dom i dekoracija | <$150 | $253-$370 | >$400 |
| Nakit i luksuz | <$300 | $436-$1,058 | >$1,100 |
| Hrana i pice | <$50 | $69-$114 | >$130 |
| Lepota i nega | <$50 | $71-$151 | >$170 |

Ako vam je AOV ispod industrijskog proseka, fokusirajte se prvo na free shipping prag (najbrza implementacija), zatim na cross-selling na product stranicama (srednja kompleksnost), pa na bundling i AI preporuke (najveci dugorocni efekat).

Za kompletnu analizu vaseg AOV-a i strategiju za povecanje vrednosti svake porudzbine, [kontaktirajte nas](/kontakt).

---

*Izvori: SpeedCommerce E-commerce AOV Benchmarks 2024, Oberlo Average Order Value by Industry 2025, Doofinder AOV Statistics by Industry, OpenSend Average Order Size Statistics, DigitalWebSolutions Average Order Value Report, Decile Q1 2025 Benchmarking Report, WiserReview AOV Statistics, Dynamic Yield AOV Benchmarks by Device, RetailCustomerExperience E-commerce Orders 2025, Envive AI AOV Boost Statistics, SalesGenie Upselling and Cross-selling Statistics, Swell Product Bundling Statistics, LimeSpot Bundling Strategy Report, GrowthSuite Free Shipping Threshold Guide, RedStagFulfillment Free Shipping Statistics, CapitalOneShopping Free Shipping Research.*
\`
  },
`

content = content.replace('const rawBlogPosts = [', 'const rawBlogPosts = [\n' + newPost)
fs.writeFileSync(path, content)
console.log('AOV post dodan!')
