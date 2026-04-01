import fs from 'fs'

const path = 'src/pages/blog/blogData.js'
let content = fs.readFileSync(path, 'utf8')

const newPost = `  {
    slug: 'zasto-vas-sajt-ne-prodaje-sta-promeniti',
    title: 'Zašto vaš sajt ne prodaje (i šta da promenite danas)',
    excerpt: 'Imate odličan proizvod, plaćate reklame, ljudi dolaze na sajt, ali niko ne kupuje niti šalje upit. Otkrijte 3 najčešće greške zbog kojih vaš sajt služi kao ukras umesto kao alat za prodaju.',
    date: '2026-03-30',
    readTime: '6 min read',
    category: 'Marketing',
    author: 'Aleksandar Nenadović',
    role: 'Founder',
    authorImage: 'aleksandar-nenadovic.jpg',
    tags: ['Konverzija', 'Web Design', 'CRO'],
    image: 'analyze.png',
    content: \`
Ovo je scenario koji viđam svakog meseca: Firma plati hiljade evra za prelep nov sajt. Dizajn je moderan, animacije su glatke, slike su profesionalne.

Onda krenu sa [Google Ads kampanjama](/google-reklame-cena) ili Facebook oglasima. Ljudi klikću, dolaze na sajt... i ništa. Nema upita, nema prodaje.

Problem je u tome što je sajt dizajniran da izgleda dobro, a ne da konvertuje. 

Većina sajtova pati od tri osnovne greške koje možete da popravite već danas.

## 1. Vaš naslov je nevidljiv (ili previše pametan)

Ljudi na internetu ne čitaju. Oni skeniraju.
Kada neko klikne na vaš oglas, vi imate tačno 3 sekunde da mu odgovorite na jedno pitanje: **"Da li sam na pravom mestu?"**

Većina firmi ovo vreme troši na prazne fraze:
- "Inovativna rešenja za budućnost"
- "Pomeramo granice mogućeg"
- "Vaš pouzdan partner od 1998."

Ovo ne znači apsolutno ništa. Klijent ne zna šta vi radite i odlazi.

Naslov (H1) na vašoj stranici mora da bude brutalan i jasan: **Šta radite i za koga?**
Umesto "Pomeramo granice", napišite "Softver za upravljanje magacinom koji smanjuje greške za 80%". 
Umesto "Inovativni digitalni pristup", napišite "[Izrada WordPress sajtova](/izrada-wordpress-sajta-cena) koji dovode klijente na autopilotu".

Ako u tri sekunde nije jasno šta prodajete, izgubili ste kupca.

## 2. Tražite od klijenta da razmišlja (Nema jasnog CTA)

Najčešći problem na B2B i uslužnim sajtovima je nedostatak pravca.
Ljudi dođu na stranicu, pročitaju tekst i onda šta?

- Neki sajtovi uopšte nemaju dugme.
- Drugi imaju "Saznajte više" koje vodi na stranicu "O nama".
- Treći imaju pet različitih dugmića: "Preuzmi PDF", "Zaprati nas", "Pročitaj blog", "Kontakt".

Pravilo je jednostavno: **Jedna stranica = jedan jasan cilj.**

Vaš Call-to-Action mora da bude direktan. "Zakažite besplatne konsultacije", "Zatražite ponudu", "Kupite odmah". 
Ne ostavljajte korisniku opciju da razmišlja šta treba sledeće da uradi. Vodite ga za ruku. Povećanje konverzije (CRO) se uvek svodi na uklanjanje frikcije.

{{cro-cta}}

## 3. Imate karakteristike, ali nemate benefite

Ljude ne zanimaju tehničke specifikacije vašeg proizvoda, osim ako su već odlučili da ga kupe i samo porede modele. 
Ljude zanima **kako vaš proizvod rešava njihov problem**.

Većina sajtova prodaje "Karakteristike":
- "Naš softver ima 256-bitnu enkripciju."
- "Ova jakna je napravljena od Gore-Tex materijala."
- "Naša agencija ima tim od 10 ljudi."

Morate prevesti karakteristike u Benefite:
- "Vaši podaci su 100% bezbedni od hakera."
- "Ostaćete potpuno suvi i na najjačem pljusku."
- "Imate ceo tim stručnjaka za [cene digitalnog marketinga](/cene-digitalnog-marketinga) u rangu jedne prosečne plate."

Niko ne kupuje burgiju od 8 milimetara zato što želi burgiju. Ljudi kupuju burgiju jer im treba rupa od 8 milimetara u zidu.

## Zaključak

Prestanite da plaćate skupe oglase dok ne sredite stranicu na koju šaljete ljude. Popravite naslove, dodajte jasan poziv na akciju i prevedite tehničke opise u jasne benefite.

Ako niste sigurni gde vaš sajt "prokišnjava" i zašto posetioci ne postaju kupci, [javite nam se](/kontakt) za besplatan audit konverzije. Pokazaćemo vam tačno šta da promenite da biste od postojećeg saobraćaja napravili merljiv profit.
\`
  },
`

content = content.replace('const rawBlogPosts = [', 'const rawBlogPosts = [\n' + newPost)
fs.writeFileSync(path, content)
console.log('Post dodan!')