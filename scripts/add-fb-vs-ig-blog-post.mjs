import fs from 'fs'

const path = 'src/pages/blog/blogData.js'
let content = fs.readFileSync(path, 'utf8')

const newPost = `  {
    slug: 'facebook-vs-instagram-oglasi-gde-je-publika',
    title: 'Facebook vs Instagram oglasi: Gde je zaista vaša publika u 2026?',
    excerpt: 'Svi govore da je Facebook mrtav i da je budućnost samo na Instagramu. Međutim, brojevi iz oglasnih naloga pokazuju potpuno drugačiju sliku. Otkrijte u koju platformu zapravo treba da investirate.',
    date: '2026-03-31',
    readTime: '6 min read',
    category: 'Marketing',
    author: 'Aleksandar Nenadović',
    role: 'Founder',
    authorImage: 'aleksandar-nenadovic.jpg',
    tags: ['Facebook Ads', 'Instagram Ads', 'PPC', 'ROI'],
    image: 'analyze.png',
    content: \`
Svake godine slušamo istu priču u digitalnom marketingu: "Facebook je mrtav, svi su na Instagramu (ili TikToku)."
Mnogi vlasnici firmi zato gase Facebook kampanje, fokusiraju se isključivo na Instagram i onda se pitaju zašto im je cena po upitu ([CPA](/cene-digitalnog-marketinga)) drastično skočila.

Istina je da Facebook kao društvena mreža za objavljivanje slika sa letovanja možda nije ono što je bio 2015. godine. Ali Facebook kao **oglasna platforma** i dalje donosi jedne od najboljih rezultata u industriji.

Hajde da razbijemo mitove i pogledamo kako da pametno podelite budžet.

## Mit broj 1: "Mlađa publika je samo na Instagramu"

Kada pitate ljude, reći će vam da Instagram drži pažnju mlađe i urbane publike. To delimično jeste tačno za *organsku potrošnju sadržaja*.

Ali kada analiziramo podatke o **kupovini**, Facebook feed i dalje generiše ogroman broj konverzija. Ljudi možda skroluju Instagram zbog zabave, ali su na Facebook-u često spremniji da kliknu na oglas koji nudi rešenje za konkretan problem.

Ako prodajete B2B usluge, skuplje proizvode (nameštaj, nekretnine) ili usluge koje rešavaju ozbiljne probleme, Facebook publika često ima veću platežnu moć i donosi zrelije odluke od publike na Instagramu.

## Mit broj 2: "Moramo da izaberemo jednu platformu"

Najveća greška koju možete napraviti u Ads Manageru je da ručno ograničite prikazivanje oglasa samo na Instagram ili samo na Facebook.

Algoritam kompanije Meta je pametniji od bilo kog medija planera. Ako mu date jasan cilj (npr. Lead ili Purchase) i dovoljan budžet, on će sam tražiti osobu tamo gde je ona u tom trenutku najspremnija da konvertuje.

Ista osoba ujutru možda gleda Instagram Stories, popodne proverava Facebook grupe, a uveče čita članke preko Facebook feed-a. Ograničavanjem platforme gubite šansu da uhvatite pravog kupca u pravom trenutku.

{{roi-calculator-cta}}

## Kada Instagram zaista dominira?

Postoje industrije gde [Instagram reklame](/instagram-reklame-cena) prirodno daju bolje rezultate:
- Kozmetika i beauty saloni
- Modni brendovi i nakit
- Vizuelno atraktivni restorani i kafići
- Impulsivne kupovine (jeftiniji proizvodi gde odluka pada u sekundi)

Instagram Stories i Reels su trenutno najbolji formati za pokazivanje atmosfere, procesa rada ("iza kulisa") i rezultata "pre i posle".

## Kada Facebook donosi više novca?

S druge strane, [Facebook oglasi](/koliko-kosta-facebook-reklama) briljiraju u ovim situacijama:
- Kompleksnije B2B usluge gde je potrebno više teksta da se objasni vrednost
- Usluge lokalnih majstora i servisa (gde ljudi traže preporuke u lokalnim grupama)
- Prodaja edukacija i visokotarifnih konsultacija
- Dugački prodajni ciklusi gde je poverenje ključno

Facebook i dalje dozvoljava dugačke opise (long-form copy) koji ljudi zapravo čitaju, za razliku od Instagrama gde je fokus isključivo na vizualu.

## Zaključak: Kako postaviti kampanju danas

Prestanite da birate platformu na osnovu ličnih preferencija ("Ja ne koristim Facebook, pa ga ne koristi ni moja publika"). 

1. Napravite kampanju sa širokim targetiranjem.
2. Uključite *Advantage+ Placements* (neka Meta algoritam bira gde će prikazati oglas).
3. Testirajte različite formate (Reels za Instagram, kvadratne slike sa dužim tekstom za Facebook).
4. Nakon 14 dana pogledajte u izveštajima odakle dolaze najjeftinije konverzije i pustite sistem da nastavi optimizaciju.

Ako trošite novac na oglase, a niste sigurni koja platforma vam zaista donosi profit, [zakažite besplatne konsultacije](/kontakt). Pregledaćemo vaše dosadašnje kampanje i pokazati vam gde curi budžet, a gde se krije najveća prilika za rast.
\`
  },
`

content = content.replace('const rawBlogPosts = [', 'const rawBlogPosts = [\n' + newPost)
fs.writeFileSync(path, content)
console.log('Post dodan!')