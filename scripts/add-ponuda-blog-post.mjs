import fs from 'fs'

const path = 'src/pages/blog/blogData.js'
let content = fs.readFileSync(path, 'utf8')

const newPost = `  {
    slug: 'kako-napisati-ponudu-koja-zatvara-posao',
    title: 'Kako napisati ponudu koja zatvara posao za 24 sata',
    excerpt: 'Većina firmi gubi poslove u trenutku kada pošalje PDF ponudu. Umesto da ponuda bude prodajni alat, ona postaje dosadan cenovnik koji klijenti ignorišu. Evo šta zapravo donosi potpis.',
    date: '2026-03-30',
    readTime: '6 min read',
    category: 'Prodaja',
    author: 'Aleksandar Nenadović',
    role: 'Founder',
    authorImage: 'aleksandar-nenadovic.jpg',
    tags: ['Prodaja', 'Ponuda', 'B2B', 'Konverzija'],
    image: 'strategy3.png',
    content: \`
Gledao sam stotine poslatih ponuda raznih firmi. Od malih agencija do velikih proizvodnih sistema.

Skoro sve prave istu grešku. Njihova ponuda je zapravo samo dizajniran Excel dokument.
Nakon odličnog sastanka gde su klijentu objasnili sve benefite, oni pošalju PDF na tri strane koji izgleda ovako:

- Usluga 1: 500€
- Usluga 2: 300€
- Rok: 15 dana
- Pozdrav, naš tim.

I onda se pitaju zašto klijent odgovara sa "Javićemo se sledeće nedelje". A to "sledeće nedelje" najčešće znači nikada.

Problem je u tome što većina firmi tretira ponudu kao kraj procesa prodaje. Ponuda je zapravo vrhunac prodaje. Ako ona ne proda vašu uslugu dok niste u sobi, izgubili ste posao.

## Greška broj 1: Ponuda priča o vama, a ne o klijentu

Klijenta ne zanima vaša misija, vizija i koliko godina iskustva imate. Njega zanima da li možete da rešite njegov konkretan problem.

Mnoge agencije na prve dve strane ponude stavljaju "O nama" sekciju. To je potpuno gubljenje vremena. Klijent to preskače i traži cenu.

Umesto toga, prva strana ponude treba da bude **dijagnoza problema**.
- Jasno napišite koji problem klijent trenutno ima.
- Koje su posledice tog problema po njegov biznis.
- Koji cilj on želi da postigne.

Kada klijent pročita prvu stranu i kaže "Ovo su tačno moji problemi", on automatski veruje da imate rešenje. Ljudi najviše veruju onima koji najbolje razumeju njihov problem.

## Greška broj 2: Samo jedna cena

Kada pošaljete samo jednu opciju, klijent mora da bira između "Da" i "Ne". A najlakši odgovor za svaki biznis je uvek "Ne, hvala, razmislićemo".

Ako pošaljete više opcija, mozak klijenta automatski prelazi iz moda "Da li da kupim?" u mod "Koju opciju da izaberem?". To je mala psihološka promena koja pravi ogromnu razliku.

Uvedite tri paketa:
1. **Osnovni** - Rešava glavni problem, bez dodataka.
2. **Srednji (Preporučeni)** - Ono što zaista želite da prodate, jer daje najbolji odnos cene i kvaliteta.
3. **Premium** - Sve što možete da ponudite, uključujući brzinu, prioritet i dodatne servise.

Premium paket služi kao sidro. Kada klijent vidi cenu premium paketa, srednji paket odjednom deluje kao potpuno razumna investicija. Ako paralelno gradite sajtove, ovo je isti princip koji se primenjuje pri [izradi WordPress sajta](/izrada-wordpress-sajta-cena) i formiranju paketa usluga.

## Greška broj 3: Nema jasnog sledećeg koraka

Kraj ponude je često mesto gde stvari padaju u vodu. 
"Nadamo se uspešnoj saradnji."
"Stojimo na raspolaganju za sva pitanja."

Ovo su pasivne rečenice. Klijent pročita ponudu, zatvori PDF i nastavi sa svojim danom.

Vaša ponuda mora da ima izuzetno jasan **Call to Action**. Šta tačno treba da se desi u sledećih 5 minuta?

- "Ukoliko vam ponuda odgovara, odgovorite na ovaj email sa DA i poslaćemo vam predračun i ugovor."
- "Kliknite ovde da izaberete paket i zakažete termin za početak projekta."

Ne ostavljajte prostor za razmišljanje o sledećim koracima. Vodite klijenta za ruku do samog kraja.

## Kako napraviti promenu već danas

Ako trenutno imate nisku stopu zatvaranja poslova (close rate), problem verovatno nije u ceni. Problem je u percepciji vrednosti koju komunicirate kroz ponudu.

Prekinite sa slanjem suvih cenovnika. Počnite da šaljete dokumente koji prvo pokazuju razumevanje problema, zatim nude rešenja kroz jasne pakete, i završavaju se konkretnim pozivom na akciju.

Ako želite da vaš prodajni funnel i marketing budu jednako efikasni kao vaša usluga, [zakažite besplatne konsultacije](/kontakt). Pomoći ćemo vam da postavite sistem koji generiše kvalitetne upite i olakšava zatvaranje posla.
\`
  },
`

content = content.replace('const rawBlogPosts = [', 'const rawBlogPosts = [\n' + newPost)
fs.writeFileSync(path, content)
console.log('Post dodan!')