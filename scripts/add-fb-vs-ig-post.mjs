import fs from 'fs'

const path = 'src/pages/blog/blogData.js'
let content = fs.readFileSync(path, 'utf8')

const newPost = `  {
    slug: 'facebook-vs-instagram-oglasi-gde-je-vasa-publika',
    title: 'Facebook vs Instagram oglasi: gde je zaista vaša publika u 2026?',
    excerpt: 'Većina firmi pušta oglase na obe platforme sa istim budžetom i istom porukom. To je najbrži način da spalite novac. Otkrijte pravu razliku između Facebook i Instagram korisnika i gde treba da bude vaš fokus.',
    date: '2026-03-31',
    readTime: '6 min read',
    category: 'Marketing',
    author: 'Aleksandar Nenadović',
    role: 'Founder',
    authorImage: 'aleksandar-nenadovic.jpg',
    tags: ['Facebook Ads', 'Instagram Ads', 'PPC', 'Social Media'],
    image: 'analyze2.png',
    content: \`
Kada firma u Srbiji reši da pokrene kampanje na društvenim mrežama, najčešći pristup je takozvani "Autopilot". 
Uđu u Meta Ads Manager, ubace sliku, stave dnevni budžet i ostave štiklirano *Advantage+ Placements*.

To znači da Meta sama odlučuje gde će vaš oglas biti prikazan: malo na Facebook-u, malo na Instagramu, malo na Messenger-u.

Zvuči logično, zar ne? Neka algoritam radi svoj posao.

Problem je u tome što Facebook i Instagram nisu ista platforma, nemaju istu publiku i, što je najvažnije, ljudi na njima nemaju istu **psihologiju kupovine**.

## Psihologija Facebook-a: Znanje i zajednica

Da li ste primetili ko danas najviše koristi Facebook?
To više nisu tinejdžeri. To su ljudi preko 30, 40 i 50 godina. 

Kada korisnik uđe na Facebook, on želi da:
1. Vidi šta rade njegovi prijatelji i porodica
2. Pročita vesti
3. Učestvuje u tematskim grupama (od majstora, preko roditelja, do ljubitelja automobila)

Facebook je postao platforma zasnovana na **tekstu i diskusiji**. Zato oglasi sa dugačkim, edukativnim tekstom (long-form copy) i dalje savršeno rade na Facebook-u. Ljudi imaju vremena da pročitaju vašu priču.

Ako prodajete B2B usluge, kompleksnije softvere, nekretnine ili skuplje usluge gde kupcu treba poverenje i edukacija, Facebook je mesto gde se donose odluke. Tu [cene digitalnog marketinga](/cene-digitalnog-marketinga) dobijaju pravi smisao jer edukovan kupac razume vrednost.

## Psihologija Instagrama: Brzina i vizuelni status

Instagram je čista vizuelna platforma. Fokus je na videu, brzini i estetici.
Korisnici na Instagramu donose odluku u mikrosekundi dok skroluju kroz Stories ili Reels. 

Na Instagramu ljudi žele:
1. Zabavu (Dopamin)
2. Inspiraciju (Estetiku)
3. Status (Šta drugi nose, gde jedu, šta voze)

Oglas sa dugačkim tekstom na Instagramu je promašaj. Niko to neće čitati.
Ono što prodaje na Instagramu je **dinamičan video od 15 sekundi (Reels) i kvalitetan vizuelni prikaz proizvoda (UGC - User Generated Content)**.

Ako imate e-commerce brend, prodajete odeću, šminku, fitnes opremu ili držite [frizerski salon](/marketing-za-frizerske-salone), Instagram mora da bude vaš primarni fokus. Tu se prodaja zatvara na emociju i impuls.

## Najskuplja greška: Isti oglas za obe platforme

Kada uzmete kvadratnu sliku sa puno teksta i pustite je kao oglas, na Facebook Newsfeed-u ona može izgledati solidno. 
Kada tu istu sliku Meta prikaže na Instagram Reels-u, ona izgleda kao greška u sistemu. Odsečena je, ima crne ivice, a dugme za kupovinu je skriveno.

Korisnik to odmah prepoznaje kao "lenj oglas" i skroluje dalje u deliću sekunde.

Vi plaćate te prikaze. Plaćate to što vas publika ignoriše. Ako želite da vidite tačne raspone koliko košta koji klik, pogledajte naš detaljan vodič za [Instagram reklame cenu](/instagram-reklame-cena).

## Gde da usmerite budžet?

Pravilo je jednostavno:

**Fokus na Facebook (70% budžeta) ako:**
- Je vaš proizvod skuplji i zahteva razmišljanje.
- Gađate stariju, kupovno moćniju demografiju (40+).
- Prodajete B2B usluge ili radite lead generation za ozbiljnije projekte.

**Fokus na Instagram (70% budžeta) ako:**
- Vaš proizvod rešava problem odmah ili se kupuje impulsivno.
- Možete da ga prikažete kroz atraktivan video (UGC).
- Ciljate mlađu publiku (18-35).

Naravno, idealno je koristiti obe platforme, ali sa **prilagođenom kreativom**.
Na Facebook pošaljite edukativan tekst i karusel. Na Instagram pošaljite kratak video sa snažnim vizuelnim "hook-om".

Ako niste sigurni gde se nalazi vaša publika i zašto trenutne kampanje ne daju rezultate, [zakažite besplatne konsultacije](/kontakt). Pregledaćemo vaše naloge i pokazati vam gde gubite novac.
\`
  },
`

content = content.replace('const rawBlogPosts = [', 'const rawBlogPosts = [\n' + newPost)
fs.writeFileSync(path, content)
console.log('Post dodan!')