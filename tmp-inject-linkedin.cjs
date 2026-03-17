const fs = require('fs');
const path = 'C:/Users/Eventide/.openclaw/workspace-devona/projects/arcads-clone/src/pages/blog/blogData.js';

const newPost = `  {
    slug: 'linkedin-marketing-za-b2b-firme-srbija-2026',
    title: 'LinkedIn marketing za B2B firme u Srbiji 2026: strategija, budzet i rezultati',
    excerpt: 'Kako B2B firme u Srbiji koriste LinkedIn za generisanje lead-ova 2026. Organski vs placeni, content koji radi na srpskom trzistu i realni budzeti.',
    date: '2026-03-17',
    category: 'Marketing',
    readTime: '9 min',
    content: \`
## LinkedIn marketing za B2B firme u Srbiji: zasto je vazan

Za B2B firme u Srbiji LinkedIn je kanal sa najvisim kvalitetom lead-ova. Tu su direktori, vlasnici firmi i donosioci odluka. Razlika u odnosu na Facebook ili Instagram je u tome sto ljudi dolaze na LinkedIn sa poslovnim mindset-om -- ne skroluju slike sa odmora nego traze poslovne informacije i kontakte.

Srpsko LinkedIn trziste ima oko 1.2 miliona korisnika, od cega je znacajan procenat u upravljackim pozicijama. Konkurencija u sadrzaju je daleko manja nego na drugim mrezama jer vecina srpskih firmi jos uvek ne koristi LinkedIn aktivno.

Za siru sliku troskova digitalnog prisustva pogledaj i [cene digitalnog marketinga](/cene-digitalnog-marketinga).

## Organski LinkedIn marketing: sta zapravo radi u Srbiji

### Licni profili vs. company page

Najvaznija specificnost LinkedIn algoritma: licni profili imaju 5-10x veci organski doseg nego company page-ovi. CEO koji objavi post o iskustvu sa klijentom dobija vise pregleda nego zvanicna stranica firme sa istim budzetom.

Zato B2B strategija u Srbiji treba da pocne sa licnim profilima osnivaca ili kljucnih ljudi u firmi. Company page sluzi kao referenca, ali organski rast dolazi sa licnih profila.

### Tipovi sadrzaja koji rade na srpskom LinkedIn-u

**Postovi o konkretnim poslovnim iskustvima** -- sta ste probali, sta nije uspelo, sta je donelo rezultate. Ljudi na LinkedIn-u reaguju na autenticnost, ne na korporativni govor.

**Studije slucaja sa brojevima** -- "Za klijenta X smo uradili Y i rezultat je bio Z". Konkretni brojevi imaju 3x vise engagement-a od generickih postova.

**Stavovi o industriji** -- misljenje o trendovima u vasoj oblasti. Kontroverzni stavovi (ali argumentovani) dobijaju komentare, a komentari su najjaci signal za LinkedIn algoritam.

**Karusel postovi** -- PDF slajdovi sa edukativnim sadrzajem. Imaju duze vreme zadrzavanja i veci doseg od tekst-only postova.

### Konzistentnost je presudna

Minimalna kadenca za rezultate: 3 posta nedeljno. Algoritam favorizuje profile koji redovno objavljuju. Jedan viralan post ne menja nista ako posle njega sledi tisina od mesec dana.

## LinkedIn Ads za B2B firme u Srbiji

### Realni budzeti

LinkedIn oglasi su skuplji od Facebook/Instagram oglasa. CPC za B2B targeting u Srbiji:

- **Awareness kampanje:** 2-5 EUR po kliku.
- **Lead gen forme:** 5-15 EUR po lead-u (za topao lead sa kontakt podacima).
- **Sponsored InMail:** 0.30-0.80 EUR po poslatoj poruci.

Minimalni mesecni budzet za smislene rezultate: 500-1.000 EUR (ad spend). Za manje od toga bolje je fokusirati se na organski sadrzaj.

### Tipovi kampanja

**Sponsored Content** -- postovi koji se prikazuju u feed-u ciljane publike. Najbolji za awareness i content distribuciju.

**Lead Gen Forms** -- oglasi sa formom koja se automatski popuni iz LinkedIn profila korisnika. Najbolji conversion rate jer korisnik ne napusta LinkedIn.

**Sponsored InMail** -- direktna poruka u LinkedIn inbox. Radi za konkretne ponude (webinar poziv, besplatan audit, demo).

### Targeting mogucnosti

LinkedIn targeting je najjaci za B2B jer mozete ciljati po:
- Poziciji (CEO, direktor, CTO)
- Velicini firme (1-10, 11-50, 51-200+ zaposlenih)
- Industriji
- Skills (specifican softver, metodologije)
- Grupi (pripadnost LinkedIn grupama)

## Najcesce greske srpskih B2B firmi na LinkedIn-u

### 1) Company page kao jedini kanal
Postovi sa company page-a imaju minimalan organski doseg. Ako nemate licne profile koji aktivno objavljuju, gubite 80% potencijalnog dosega.

### 2) Korporativni ton umesto licnog
"Drago nam je da objavimo..." i slicne formulacije ne rade na LinkedIn-u. Ljudi reaguju na licne price, konkretna iskustva i autenticnost.

### 3) Samo samopromocija
LinkedIn algoritam kaznjava postove koji sadrze samo linkove i reklamne poruke. Edukativni sadrzaj koji resava probleme vase ciljne publike je osnova organske strategije.

### 4) Nedoslednost
Jedna kampanja od 2 nedelje nece doneti rezultate. LinkedIn zahteva minimum 3-6 meseci konzistentnog rada na sadrzaju da bi se videli merljivi rezultati.

## Kako meriti rezultate LinkedIn marketinga

Kljucni KPI-jevi za B2B firme:

- **SSI skor** (Social Selling Index) -- LinkedIn-ov interni skor za vasu aktivnost.
- **Profil pregledi** -- koliko ljudi mesecno pregleda vas profil.
- **Connection acceptance rate** -- procenat prihvacenih pozivnica.
- **Engagement rate** -- interakcije po postu u odnosu na broj konekcija.
- **Inbound poruke** -- koliko potencijalnih klijenata vas kontaktira prvi.

Za merenje ROI pogledaj i nas vodic [kako meriti ROI digitalnog marketinga](/blog/kako-meriti-roi-digitalnog-marketinga-srbija-2026).

## Plan za prvih 90 dana

**Mesec 1:** Optimizacija licnih profila osnivaca i kljucnih ljudi. Definisanje content pillara (3-4 teme oko kojih se gradi sadrzaj). Poceti sa 3 posta nedeljno.

**Mesec 2:** Analiza sta radi, sta ne radi. Dodavanje karusel postova i studija slucaja. Testiranje LinkedIn Ads sa minimalnim budzetom (200-300 EUR) za retargeting posetilaca sajta.

**Mesec 3:** Skaliranje onoga sto radi. Dodavanje Lead Gen kampanje. Aktivno komentarisanje u relevantnim LinkedIn grupama i na postovima potencijalnih klijenata.

Za kompletnu strategiju digitalnog prisustva vase B2B firme, javite se preko [kontakt forme](/kontakt).
\`
  },`;

let content = fs.readFileSync(path, 'utf8');
content = content.replace('const rawBlogPosts = [', 'const rawBlogPosts = [\n' + newPost);
fs.writeFileSync(path, content, 'utf8');
console.log('LinkedIn B2B blog injected via Node.js');
