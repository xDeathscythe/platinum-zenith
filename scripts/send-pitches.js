import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: 'smtp.hostinger.com',
  port: 465,
  secure: true,
  auth: {
    user: 'aleksandar@platinumzenith.com',
    pass: 'sasasasA11+',
  },
})

const pitches = [
  {
    subject: 'Predlog za stručni članak: Revenue Share model u agencijskom poslovanju',
    target: 'komunikacije@startit.rs',
    body: `Zdravo,

Zovem se Aleksandar Nenadović, osnivač Platinum Zenith agencije iz Zrenjanina. Pišem vam jer imam predlog za stručni članak koji bi bio zanimljiv vašim čitaocima.

Tema: "Zašto smo napustili klasičan model naplate i prešli na revenue share — i šta smo naučili"

Članak bi pokrivao:
- Zašto klasičan model "fiksna mesečna naknada" ne motiviše agencije da daju rezultate
- Kako revenue share menja dinamiku odnosa agencija-klijent
- Konkretni brojevi: šta se dešava kad agencija ima skin in the game
- Lekcije iz prakse sa srpskim malim i srednjim preduzećima

Ovo nije promotivni tekst — fokus je na poslovnom modelu i lekcijama koje mogu biti korisne svakome ko razmišlja o saradnji sa agencijama ili o pokretanju sopstvene.

Članak bih napisao sam, u dogovoru sa vašom redakcijom oko obima i tona.

Hvala na vremenu,
Aleksandar Nenadović
aleksandar@platinumzenith.com
platinumzenith.com`
  },
  {
    subject: 'Predlog za članak: Kako CRO optimizacija udvostručuje prodaju bez dodatnog budžeta',
    target: 'crnjanski@netokracija.com',
    body: `Zdravo Marko,

Zovem se Aleksandar Nenadović, vodim Platinum Zenith agenciju. Imam predlog za stručni članak o temi koja je relevantna za vaše čitaoce iz digitalnog biznisa.

Tema: "CRO optimizacija: Kako udvostručiti online prodaju bez povećanja marketing budžeta"

Članak bi obuhvatio:
- Šta je CRO i zašto je to najisplativija investicija u digitalnom marketingu
- 5 najčešćih grešaka na srpskim e-commerce sajtovima (sa konkretnim primerima)
- Jednostavan framework za A/B testiranje koji svako može primeniti
- Case study: od 1.2% do 4.8% konverzije za lokalni e-commerce

Spreman sam da napišem kompletan tekst prilagođen vašem formatu. Fokus je na praktičnoj vrednosti, bez prodajnog pristupa.

Srdačan pozdrav,
Aleksandar Nenadović
aleksandar@platinumzenith.com
platinumzenith.com`
  },
  {
    subject: 'Predlog za kolumnu: 5 grešaka koje koštaju srpske firme hiljade evra u marketingu',
    target: 'redakcija@bizlife.rs',
    body: `Poštovana redakcijo,

Aleksandar Nenadović sam, osnivač Platinum Zenith digitalne agencije. Želeo bih da predložim stručni tekst za vaš portal.

Tema: "5 grešaka u digitalnom marketingu koje koštaju srpske firme hiljade evra"

Tekst bi pokrio:
- Zašto većina srpskih firmi baca novac na marketing bez merljivih rezultata
- Pet najskupljih grešaka (sa konkretnim primerima sa domaćeg tržišta)
- Kako postaviti marketing koji se zaista isplati
- Praktični saveti za male i srednje firme sa ograničenim budžetom

Tekst je edukativnog karaktera, namenjen vlasnicima malih i srednjih preduzeća koji žele da bolje razumeju digitalni marketing pre nego što investiraju.

S poštovanjem,
Aleksandar Nenadović
aleksandar@platinumzenith.com
platinumzenith.com`
  },
  {
    subject: 'Stručni članak: Digitalna transformacija malih preduzeća u Srbiji',
    target: 'urednik@ekapija.com',
    body: `Poštovani,

Zovem se Aleksandar Nenadović, osnivač Platinum Zenith agencije iz Zrenjanina. Predlažem stručni tekst na temu digitalne transformacije malih preduzeća.

Tema: "Zašto 90% malih firmi u Srbiji nema funkcionalan sajt — i koliko ih to košta"

Tekst bi obuhvatio:
- Trenutno stanje digitalne prisutnosti malih firmi u Srbiji
- Koliko prihoda gube firme bez optimizovanog sajta
- Minimalni koraci za digitalnu prisutnost (šta je zaista potrebno vs šta se prodaje)
- Kako izabrati agenciju ili freelancera za web projekat

Tekst je informativan, bez reklamnog sadržaja, prilagođen čitaocima eKapije koji prate poslovne trendove.

Srdačan pozdrav,
Aleksandar Nenadović
aleksandar@platinumzenith.com
platinumzenith.com`
  },
]

async function main() {
  for (let i = 0; i < pitches.length; i++) {
    const p = pitches[i]
    console.log(`[${i+1}/4] Šaljem: "${p.subject}" → alnen96@gmail.com (original target: ${p.target})`)
    await transporter.sendMail({
      from: '"Aleksandar Nenadović" <aleksandar@platinumzenith.com>',
      to: 'alnen96@gmail.com',
      subject: `[PREVIEW za ${p.target}] ${p.subject}`,
      text: `ORIGINALNI PRIMALAC: ${p.target}\n\n---\n\n${p.body}`,
    })
    console.log(`  ✅ Poslat!`)
    // 2s pauza između mejlova
    await new Promise(r => setTimeout(r, 2000))
  }
  console.log('\nSva 4 mejla poslata na alnen96@gmail.com za pregled.')
}

main().catch(e => { console.error(e); process.exit(1) })
