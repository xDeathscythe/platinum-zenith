import fs from 'fs'

const path = 'src/pages/blog/blogData.js'
let content = fs.readFileSync(path, 'utf8')

const newPost = `  {
    slug: 'facebook-vs-instagram-oglasi-gde-je-publika',
    title: 'Facebook vs Instagram oglasi: Gde je vaša publika u 2026?',
    excerpt: 'Da li je Facebook mrtav? Da li mlađi kupuju samo preko Instagrama? Razbijamo mitove i pokazujemo na kojoj Meta platformi se zapravo krije vaš najprofitabilniji kupac.',
    date: '2026-03-31',
    readTime: '6 min read',
    category: 'Marketing',
    author: 'Aleksandar Nenadović',
    role: 'Founder',
    authorImage: 'aleksandar-nenadovic.jpg',
    tags: ['Facebook Ads', 'Instagram Ads', 'Meta Ads', 'PPC'],
    image: 'analyze2.png',
    content: \`
Kada razgovaram sa vlasnicima firmi o [cenama digitalnog marketinga](/cene-digitalnog-marketinga), skoro svaki put čujem istu rečenicu:
"Naši kupci više nisu na Facebooku. Mladi su na Instagramu i TikToku, Facebook koriste samo stariji."

Na prvi pogled, ovo deluje tačno. Svi mi provodimo više vremena vrteći Instagram Reels nego čitajući Facebook News Feed. 

Ali kada pogledamo analitiku stotina kampanja u Srbiji, podaci pričaju potpuno drugačiju priču. Vreme provedeno na aplikaciji nije isto što i **spremnost na kupovinu**.

Gde zaista treba da uložite svoj budžet za oglašavanje u 2026. godini?

## Mit: "Facebook je mrtav"

Facebook nije platforma za mlade, to je tačno. Ali razmislite o ovome: ko ima najveću kupovnu moć u Srbiji?
Da li je to student od 20 godina na TikToku ili osoba od 45 godina na Facebooku?

Kada prodajemo usluge [izrade WordPress sajtova](/izrada-wordpress-sajta-cena), stomatološke implante, skuplji nameštaj ili B2B usluge — Facebook u 80% slučajeva donosi jeftinije i kvalitetnije leadove (upite).

Razlog je jednostavan. Ljudi na Facebooku su navikli da čitaju duže tekstove, klikću na linkove i popunjavaju forme. Ljudi na Instagramu žele vizuelnu zabavu u tri sekunde.

**Ako prodajete nešto što zahteva razmišljanje, poverenje ili veći budžet — Facebook je i dalje kralj.**

## Mit: "Instagram donosi mlađu publiku, a mladi kupuju sve"

Instagram je neverovatan alat za prodaju, ali ne funkcioniše na isti način kao Facebook.
Na Instagramu vizual prodaje proizvod. Slika mora da bude savršena. Video mora da bude brz i dinamičan.

Instagram briljira za:
- Odeću i obuću
- Kozmetičke salone
- Fitnes i zdravlje
- Hranu i restorane

Ako uporedite [cenu Instagram reklama](/instagram-reklame-cena) sa Facebookom, primetićete da Instagram često daje jeftinije klikove (CPC) i impresije (CPM). Međutim, ti klikovi se ređe pretvaraju u kupovinu ako ne postoji jak "impulse buy" faktor. 

Instagram publika kupuje emocijom. Facebook publika kupuje opravdanjem.

## Kako zapravo funkcioniše Meta algoritam (i zašto ne treba da birate)

Najveća greška koju možete da napravite je da sami isključite jedan od ova dva kanala u podešavanjima kampanje.

Meta (kompanija koja poseduje obe platforme) ima algoritam koji je mnogo pametniji od bilo kog marketing stručnjaka. Umesto da mu kažete "Prikazuj moje oglase samo na Instagramu", dajte mu slobodu. 

Postavite kampanju tako da se prikazuje svuda (Advantage+ Placements). 
Algoritam će prvih nekoliko dana testirati. Možda će potrošiti 10€ na Instagramu i 10€ na Facebooku. 
Kada shvati da korisnici na Facebooku češće popunjavaju vašu kontakt formu, on će sam preusmeriti 90% budžeta na Facebook, a Instagram će ostaviti za jeftin retargeting.

Vaš posao nije da birate platformu. Vaš posao je da kreirate ponudu koju publika želi.

## Retargeting: Gde magija zaista nastaje

Evo jedne strategije koja dokazano radi:
1. Pustite brz, zanimljiv video na Instagram Reels. Ljudi ga gledaju, lajkuju, možda kliknu, ali ne kupuju.
2. Zatim iskoristite Facebook da uhvatite te iste ljude. Prikažete im dugačak oglas sa recenzijama (social proof) i jasnim pozivom na akciju.

Instagram služi kao "pecaroška mreža" za privlačenje pažnje. Facebook služi kao prodavac koji zatvara posao. U simbiozi, ova dva kanala spuštaju vašu ukupnu cenu akvizicije kupca. Pitanje više nije [koliko košta Facebook reklama](/koliko-kosta-facebook-reklama) ili Instagram reklama izolovano, već koliko vas košta da provedete kupca kroz ceo levak.

## Zaključak: Šta da radite sledeće?

Ne oslanjajte se na "osećaj" gde se vaši kupci nalaze. Podaci uvek pobeđuju mišljenje.

Testirajte različite formate (slike, kratki video, dugački copy) i dozvolite algoritmu da sam pronađe ko reaguje na njih.

Ako niste sigurni kako da podesite Meta Ads nalog da radi u vašu korist, umesto da rasipa budžet, [javite nam se za besplatne konsultacije](/kontakt). Pregledaćemo vaše dosadašnje kampanje i pokazati vam tačno gde curi budžet i kako to da popravite.
\`
  },
`

content = content.replace('const rawBlogPosts = [', 'const rawBlogPosts = [\n' + newPost)
fs.writeFileSync(path, content)
console.log('Post dodan!')