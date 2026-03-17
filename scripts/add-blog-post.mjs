import fs from 'fs'
const path = 'src/pages/blog/blogData.js'
let content = fs.readFileSync(path, 'utf8')

const newPost = `  {
    slug: 'b2b-marketing-srbija-2026-vodic',
    title: 'B2B marketing u Srbiji 2026: Kako do pravih klijenata bez rasipanja budzeta',
    excerpt: 'Vecina B2B firmi u Srbiji rasipa budzet na drustvene mreze koje donose samo lajkove, umesto da grade sistem koji direktno dovodi donosioce odluka. Evo sta stvarno radi u 2026.',
    date: '2026-03-17',
    readTime: '7 min read',
    category: 'Marketing',
    author: 'Aleksandar Nenadovic',
    role: 'Founder',
    authorImage: 'aleksandar-nenadovic.jpg',
    tags: ['B2B', 'Lead Generation', 'Strategija'],
    image: 'analyze2.png',
    content: \`
Vodio sam sastanke sa desetinama B2B firmi u Srbiji. Od softverskih agencija do proizvodjaca opreme.

Vecina njih ima isti problem: prodaja zavisi iskljucivo od preporuka i licnih poznanstava direktora.

Kada pokusaju da ukljuce marketing, agencije im prodaju sablon za B2C:
"Hajde da snimamo zanimljive Reels-e za Instagram i pravimo nagradne igre."

Krajnji rezultat? Puno pregleda, nula novih klijenata. 

Zasto? Zato sto direktor proizvodnje u fabrici ne kupuje CNC masinu od 50.000 evra jer mu je izasao zanimljiv TikTok video. 

B2B marketing u 2026. godini ne trpi povrsnost. Ako prodajete drugim firmama, ovo su tri stuba na koja morate da preusmerite budzet.

## 1. LinkedIn nije za motivacione citate, vec za mapiranje odluka

LinkedIn je i dalje najjaci B2B alat u Srbiji, ali se koristi pogresno. Vecina firmi kaci slike sa team buildinga i genericke clanke. 

Ono sto zapravo radi je **Social Selling i mapiranje donosioca odluka**.

Umesto da objavljujete za "sve", objavljujte za onu jednu osobu koja potpisuje fakturu.
- Koje probleme vas softver resava finansijskom direktoru?
- Zbog cega trenutni dobavljac kasni sa isporukom repromaterijala?
- Kako vasa usluga stiti vlasnika firme od rizika?

Ne treba vam 1.000 lajkova. Treba vam 5 komentara od pravih direktora. 

## 2. Google Ads: Ne hvatajte pocetnike, hvatajte one koji imaju problem

Kada neko kuca "sta je ERP softver", to je student ili pocetnik. On ne kupuje.
Kada neko kuca "integracija ERP sistema sa WooCommerce platformom cena", to je firma koja ima problem danas i trazi resenje.

Zato je **B2B Google Ads u Srbiji** igra visoke namere (High Intent).
Vase kampanje ne smeju da trose budzet na opste pojmove. Kljucne reci treba da budu dugacke, specificne, cak i po cenu da imaju samo 50 pretraga mesecno.

Cena klika (CPC) u B2B sektoru moze biti i preko 2-3 evra, ali ako taj jedan klik dovede klijenta koji ostavi 10.000 evra godisnje, to je najjeftiniji klik koji cete ikada platiti.

{{roi-calculator-cta}}

## 3. SEO i edukativni sadrzaj koji stedi vreme prodaji

B2B ciklus prodaje traje nedeljama, nekad i mesecima. Klijent se ne odlucuje na prvu.

Tu na scenu stupa SEO. Vas sajt mora da odgovori na sva pitanja koja vas prodajni tim ponavlja svaki dan na sastancima.

- Koje su razlike izmedju vas i najjeftinijeg konkurenta?
- Koji su rokovi implementacije?
- Koliko kosta odrzavanje naknadno?
- Koje su tehnicke specifikacije?

Kada firma trazi novog dobavljaca, oni istrazuju danima pre nego sto vas kontaktiraju. Ako na vasem sajtu nadju sve odgovore, vi postajete autoritet. Oni uce od vas. Zato je [izrada sajta](/web-design) za B2B potpuno drugacija od sajta za online prodavnicu – to je vas najbolji prodavac koji radi 24/7.

## Kako da postavite B2B sistem bez bacanja novca?

Ako trenutno nemate predvidljiv nacin za generisanje B2B upita, nemojte kretati u sve kanale odjednom.
Odaberite samo jedan - ili Google Ads za hitne pretrage, ili LinkedIn direktni outreach sa jasnom ponudom - i dajte mu 90 dana. 

Kada taj jedan kanal proradi, tek tada sirite strategiju.

Ako niste sigurni gde vasa B2B publika provodi vreme i kako da ih targetirate, prekinite sa nagadjanjem. [Javite nam se da zajedno postavimo B2B levak](/kontakt). Fokusirajte se na ono sto daje merljiv povrat.
\`
  },
`

content = content.replace('const rawBlogPosts = [', 'const rawBlogPosts = [\n' + newPost)
fs.writeFileSync(path, content)
console.log('Post dodan!')
