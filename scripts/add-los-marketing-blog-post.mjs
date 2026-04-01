import fs from 'fs'

const path = 'src/pages/blog/blogData.js'
let content = fs.readFileSync(path, 'utf8')

const newPost = `  {
    slug: 'koliko-kosta-los-marketing',
    title: 'Koliko zapravo košta loš marketing (skriveni troškovi o kojima se ne priča)',
    excerpt: 'Većina firmi gleda samo cenu agencijske usluge ili budžet za oglase. Međutim, najveći trošak u marketingu nije ono što ste platili, već ono što ste izgubili zbog pogrešnog pristupa. Otkrijte 4 skrivena troška lošeg marketinga.',
    date: '2026-03-31',
    readTime: '7 min read',
    category: 'Marketing',
    author: 'Aleksandar Nenadović',
    role: 'Founder',
    authorImage: 'aleksandar-nenadovic.jpg',
    tags: ['Strategija', 'Budžetiranje', 'Marketing', 'ROI'],
    image: 'strategy3.png',
    content: \`
Kada razgovaram sa vlasnicima firmi o marketingu, najčešće pitanje je: "Koliko će ovo da nas košta?"
I to je potpuno logično pitanje. 

Problem nastaje kada vlasnik firme upoređuje dve ponude. Jedna agencija traži 300 evra mesečno, druga 1.000 evra mesečno. Na papiru, izbor deluje očigledno. Zašto platiti tri puta više za "istu stvar"?

Zato što marketing nije trošak materijala, već investicija u budući prihod. Kada kupujete marketing, vi ne kupujete vreme agencije. Vi kupujete rezultat. 

Izabraćete jeftiniju opciju, a to vas može koštati mnogo više nego što mislite. Evo četiri skrivena troška lošeg marketinga.

## Skriveni trošak broj 1: Izgubljeni medijski budžet (Ad Spend)

Kada platite agenciji 300 evra da vam vodi kampanje, a vi na same oglase trošite 1.500 evra mesečno, agencija direktno upravlja sa vaših 1.500 evra.

Ako agencija nema kapacitet, znanje ili vreme (jer radi sa 30 klijenata istovremeno da bi preživela na ceni od 300 evra), vaše kampanje neće biti optimizovane. 

Možda targetiraju pogrešnu publiku na [Facebook i Instagram oglasima](/facebook-vs-instagram-oglasi-gde-je-publika). Možda troše novac na nerelevantne ključne reči na [Google oglasima](/google-reklame-cena).

U tom scenariju, vi niste uštedeli 700 evra na agenciji. Vi ste bacili 1.500 evra na Gugl i Fejsbuk, i plus 300 evra agenciji. Izgubili ste 1.800 evra.

{{roi-calculator-cta}}

## Skriveni trošak broj 2: Oportunitetni trošak (Šta ste mogli da zaradite)

Ovo je najskuplja stavka o kojoj niko ne razmišlja.

Zamislimo da ste angažovali kvalitetan tim koji zna šta radi. Uložili ste 1.500 evra u oglase i 1.000 evra u agenciju (ukupno 2.500 evra). 
Dobar tim optimizuje kampanje i taj budžet vam donese 10.000 evra novog profita tog meseca.

Sada zamislimo realnost u kojoj ste izabrali jeftiniju opciju. Potrošili ste 1.800 evra ukupno i niste dobili nijednog klijenta.

Koliko vas je koštao taj mesec? Nije vas koštao 1.800 evra. Koštao vas je **11.800 evra** (1.800 bačenog budžeta + 10.000 evra profita koji niste ostvarili).

A marketing nije izolovan događaj. Ako taj loš setup traje 6 meseci dok ne shvatite da ne radi, oportunitetni trošak raste eksponencijalno. Dok vi tapkate u mestu, vaša konkurencija sa dobrim marketingom uzima te klijente i širi svoj udeo na tržištu.

## Skriveni trošak broj 3: Uništavanje brenda i poverenja

Ljudi misle da loš marketing znači samo da nema prodaje. Nažalost, loš marketing može aktivno da šteti vašoj firmi.

Kada agencija bez plana šalje generičke poruke, kada pušta neprofesionalne vizuale pune pravopisnih grešaka, kada vaš sajt [ne prodaje i odbija kupce](/zasto-vas-sajt-ne-prodaje-sta-promeniti) zbog lošeg korisničkog iskustva... vaša ciljna grupa to vidi.

Klijent koji vidi lošu, neozbiljnu reklamu ne misli "Aha, angažovali su jeftinu agenciju". On misli "Ova firma je neozbiljna, verovatno im je i usluga takva". 

Narušena reputacija u B2B sektoru ili uslužnim delatnostima košta više od bilo kog oglasnog budžeta. Popravljanje lošeg imidža traje mesecima.

## Skriveni trošak broj 4: Vaše vreme i energija

Kada angažujete jeftinu agenciju (ili amatera bez procesa), oni vam obično govore šta "vi treba da im pošaljete". 
Vi morate da pišete tekstove. Vi morate da osmišljavate šta će biti na slici. Vi radite follow-up jer oni kasne. Vi im govorite šta ne valja u kampanjama.

Umesto da marketing agencija bude vaš partner koji vam oslobađa vreme, ona postaje još jedan zaposleni kojim morate da mikromenadžerujete. Vaše vreme kao vlasnika firme je ubedljivo najskuplji resurs koji imate. Svaki sat koji provedete prepravljajući lošu reklamu je sat koji ste mogli da posvetite unapređenju svog proizvoda ili razgovoru sa bitnim klijentima.

## Kako doneti pravu odluku?

Sledeći put kada birate agenciju, ne pitajte samo "Koliko to košta?".
Pitajte:
- "Kako merite uspeh ove kampanje?"
- "Koliko ćemo često komunicirati i šta je moj deo posla?"
- "Koji je jasan plan ako prvi test ne prođe dobro?"

Dobar marketing tim sebe otplaćuje. Loš marketing tim vas košta tri puta — kroz honorar, kroz bačen medijski budžet i kroz profit koji nikada niste ostvarili.

Ako želite da prekinete sa bacanjem novca na taktike koje ne rade i postavite sistem koji donosi merljiv povrat, pogledajte naš vodič o [cenama digitalnog marketinga](/cene-digitalnog-marketinga) u Srbiji ili [zakažite besplatne konsultacije](/kontakt). Pomoći ćemo vam da izračunate tačan budžet potreban za vaše ciljeve.
\`
  },
`

content = content.replace('const rawBlogPosts = [', 'const rawBlogPosts = [\n' + newPost)
fs.writeFileSync(path, content)
console.log('Post dodan!')