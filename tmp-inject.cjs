const fs = require('fs')
const path = require('path')

const blogDataPath = path.join(__dirname, 'src', 'pages', 'blog', 'blogData.js')
let content = fs.readFileSync(blogDataPath, 'utf8')

const newPost = `  {
    slug: 'core-web-vitals-page-speed-konverzija-bounce-rate-seo-statistika-2026',
    title: 'Core Web Vitals i brzina sajta: kako uticu na konverzije, bounce rate i SEO (podaci za 2026)',
    excerpt: 'Samo 62% mobilnih stranica prolazi LCP test. Kasnjenje od 1 sekunde smanjuje konverzije do 7%. Benchmark podaci za CWV, brzinu i uticaj na rangiranje.',
    date: '2026-03-25',
    category: 'SEO',
    readTime: '9 min',
    content: \`
## Koliko brzo se ucitava vas sajt?

Ako ne znate odgovor na ovo pitanje, imate problem. Ne zato sto je brzina tehnicka zanimljivost, vec zato sto direktno utice na to koliko posetilaca ce zapravo postati vasi kupci.

Google je 2021. godine uveo Core Web Vitals kao faktor rangiranja. Od tada, ovi pokazatelji su postali standard za merenje korisnickog iskustva na vebu. U 2026. godini, CWV nisu samo SEO metrika. Oni su indikator koliko ozbiljno shvatate korisnike koji dolaze na vas sajt.

## Sta su Core Web Vitals (tri metrike koje morate znati)

### LCP (Largest Contentful Paint) — brzina ucitavanja

Meri kada se najveci vidljiv element na stranici (obicno glavna slika ili naslov) pojavi na ekranu.

- **Dobar:** ispod 2.5 sekunde
- **Potrebno poboljsanje:** 2.5 do 4 sekunde
- **Los:** preko 4 sekunde

Trenutno stanje: samo **62% mobilnih stranica** prolazi LCP test. Ovo je najtezi CWV za optimizaciju jer zavisi od velicine slika, servera, koda i svega sto se ucitava pre glavnog sadrzaja.

### INP (Interaction to Next Paint) — interaktivnost

Zamenio je stari FID u martu 2024. Meri koliko brzo stranica reaguje na SVE interakcije korisnika (klikovi, tapovi, unos sa tastature), ne samo na prvu.

- **Dobar:** ispod 200 milisekundi
- **Los:** preko 500 milisekundi

WordPress sajtovi su iznenadujuce dobri ovde: **98% prolazi INP na desktopu** i 88% na mobilnom. Razlog: vecina WordPress tema nema tezak JavaScript koji blokira interakciju.

### CLS (Cumulative Layout Shift) — vizuelna stabilnost

Meri koliko se sadrzaj "pomera" tokom ucitavanja. Znate onu situaciju kad kliknete dugme, ali se stranica pomeri i kliknete nesto drugo? To je los CLS.

- **Dobar:** ispod 0.1
- **Los:** preko 0.25

Ovo je najlaksi CWV za prolaz: **81% mobilnih stranica** vec ima dobar CLS globalno.

## Kako brzina sajta utice na konverzije

Veza izmedju brzine i novca je direktna i izmerena u desetinama studija:

- **Kasnjenje od 1 sekunde** u ucitavanju smanjuje konverzije za **4.4% do 7%**
- E-commerce sajtovi koji optimizuju CWV do "dobar" nivoa beleze **15-30% poboljsanje** u konverzijama
- Brzi checkout proces znaci manje napustenih korpi
- Sajt koji se ucitava za **2 sekunde** ima bounce rate od 9%, dok sajt koji se ucitava **5 sekundi** ima bounce rate od 38%

Za nase klijente, ovo znaci sledece: mozete imati savrsene oglase na [Google-u](/google-reklame-cena) ili [Instagramu](/instagram-reklame-cena), ali ako vas sajt kasni, vise od trecine placanog saobracaja ce otici pre nego sto vidi vasu ponudu.

## Bounce rate po brzini ucitavanja (benchmark 2026)

Podaci pokazuju jasnu korelaciju izmedju LCP vrednosti i stope napustanja:

- **LCP ispod 2 sekunde:** bounce rate 28-35%
- **LCP 2-4 sekunde:** bounce rate 40-52%
- **LCP preko 4 sekunde:** bounce rate 55-70%

Kriticna granica: **53% mobilnih korisnika napusta sajt** koji se ucitava duze od 3 sekunde. Na mobilnom, svaka sekunda kasnjenja kosta vise nego na desktopu jer su korisnici manje strpljivi i cesto koriste sporije mreze.

Dobra vest: poboljsanje CWV moze da smanji bounce rate za **do 29%**. To je skoro trecina manje izgubljenih posetilaca bez ikakvog dodatnog ulaganja u oglase.

## CWV i SEO rangiranje — sta kazu podaci

Core Web Vitals su potvrdjen faktor rangiranja u okviru Google-ovog Page Experience signala. Ali koliko zapravo uticu?

- Stranice na **poziciji 1** u Google rezultatima imaju **10% vecu verovatnocu** da prolaze CWV testove u odnosu na stranice na poziciji 9
- CWV funkcionisu kao "tiebreaker" kada je kvalitet sadrzaja slican izmedju konkurenata
- Mobilne performanse nose vecu tezinu jer Google koristi mobile-first indeksiranje
- Preko **60% web saobracaja** dolazi sa mobilnih uredjaja

CWV nece pretvoriti los sadrzaj u prvi rezultat. Ali ce spreciti dobar sadrzaj da dostigne pun potencijal ako su performanse losee. Za detaljniju analizu SEO optimizacije pogledajte [SEO optimizacija cena](/seo-optimizacija-cena).

## Tri metrike koje su najbitnije za vas biznis

### Ako imate e-commerce sajt

**LCP je prioritet.** Korisnici moraju da vide proizvod brzo. Slike proizvoda su cesto najveci element na stranici i glavni uzrok sporog LCP-a. Optimizujte slike (WebP format, lazy loading, pravilne dimenzije) i brizete brz server.

### Ako imate usluzni sajt

**CLS je prioritet.** Forme za kontakt i pozive na akciju ne smeju da "skacu" dok se stranica ucitava. Korisnik koji promasi dugme "Zakazite termin" jer se layout pomerio je korisnik kojeg ste izgubili. Za savete o dizajnu sajta pogledajte [izradu sajta](/cene-izrade-sajta).

### Ako imate blog ili content sajt

**INP je prioritet.** Korisnici klikcu na linkove, otvaraju menije, skroluju. Svaka od tih interakcija mora biti brza. Tezak JavaScript (pogotovo od analitike i reklama) je najcesci uzrok loseg INP-a.

## Kako proveriti vase Core Web Vitals

Pet besplatnih alata:

1. **Google PageSpeed Insights** (pagespeed.web.dev) — najjednostavniji, unos URL-a i dobijete izvestaj
2. **Google Search Console** — Core Web Vitals izvestaj za ceo sajt baziran na realnim korisnicima
3. **Lighthouse** (ugradjen u Chrome DevTools) — detaljniji tehnicki izvestaj
4. **GTmetrix** — vizuelni waterfall prikaz ucitavanja
5. **web.dev/measure** — Google-ov alat sa preporukama

Najbitniji izvor su **field data** (podaci od realnih korisnika) u Search Console, ne lab data iz Lighthouse-a. Lab data pokazuje potencijal; field data pokazuje stvarnost.

## Najcesce greske na srpskim sajtovima

Na osnovu naseg iskustva sa klijentskim sajtovima u Srbiji, ovo su najcesci problemi:

**1. Neoptimizovane slike.** JPEG od 3MB za baner koji se prikazuje u 1200px sirine. Resenje: WebP format, pravilne dimenzije, lazy loading za sve slike ispod prvog ekrana.

**2. Spor hosting.** Deljeni hosting sa serverom u Nemackoj za sajt koji cilja publiku u Srbiji. TTFB (Time to First Byte) preko 800ms pre nego sto se ista ucita. Resenje: hosting sa serverom blize ciljanoj publici, CDN za staticke resurse.

**3. Previse pluginova (WordPress).** Prosecni WordPress sajt u Srbiji ima 25-40 pluginova, od kojih se 10+ ucitava na svakoj stranici. Svaki plugin dodaje JavaScript i CSS koji usporavaju ucitavanje. Resenje: audit pluginova, uklanjanje nepotrebnih, odlozeno ucitavanje skripti.

**4. Nedostajuce width/height atribute na slikama.** Bez ovih atributa, browser ne zna koliko prostora da rezervise za sliku, sto uzrokuje layout shift (los CLS). Resenje: uvek definisati width i height na img elementima.

**5. Trecopartijske skripte bez kontrole.** Google Analytics, Facebook Pixel, chat widgeti, heatmaps — svaki dodaje 50-200ms na ucitavanje. Resenje: ucitavajte ih asinhrono i sa defer atributom.

## Zakljucak: brzina nije luksuz

Core Web Vitals nisu tehnicka zanimljivost za programere. Oni su direktno povezani sa novcem koji zaradjujete (ili gubite) online.

Sajt koji se ucitava za 2 sekunde umesto 5 ima duplo manji bounce rate, do 30% vise konverzija, i bolju poziciju na Google-u. A optimizacija CWV je jednokratna investicija koja donosi rezultate mesecima i godinama.

Ako vas sajt ne prolazi CWV testove, prvi korak je besplatan: otvorite [PageSpeed Insights](https://pagespeed.web.dev/), unesite vas URL i pogledajte rezultat. Ako vam treba pomoc sa optimizacijom, [javite nam se](/kontakt).
\`,
    schema: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Core Web Vitals i brzina sajta: kako uticu na konverzije, bounce rate i SEO (podaci za 2026)",
      "datePublished": "2026-03-25",
      "author": { "@type": "Organization", "name": "Platinum Zenith" },
      "publisher": { "@type": "Organization", "name": "Platinum Zenith", "url": "https://platinumzenith.com" },
      "description": "Samo 62% mobilnih stranica prolazi LCP test. Kasnjenje od 1 sekunde smanjuje konverzije do 7%. Benchmark podaci za CWV, brzinu i uticaj na rangiranje.",
      "mainEntityOfPage": "https://platinumzenith.com/blog/core-web-vitals-page-speed-konverzija-bounce-rate-seo-statistika-2026"
    }
  },
`

content = content.replace(
  'const rawBlogPosts = [\n',
  'const rawBlogPosts = [\n' + newPost
)

fs.writeFileSync(blogDataPath, content, 'utf8')
console.log('Blog post injected successfully')
