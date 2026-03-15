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
    subject: 'Članak: Kako je jedna srpska firma sa 300.000€ prometa dostigla 3 miliona za 8 meseci',
    target: 'redakcija@bizlife.rs',
    body: `Zdravo,

Imam za vas priču koja bi mogla da bude zanimljiva vašim čitaocima.

Radi se o firmi iz Srbije koja je pre godinu i po dana imala promet od 300 hiljada evra godišnje. Osam meseci kasnije, ta ista firma je prešla 3 miliona. Nije u pitanju nikakav trik niti čudo. Radili smo zajedno na svemu — od repozicioniranja ponude, preko rekonstrukcije prodajnog procesa, do digitalnog marketinga koji je konačno počeo da vraća novac.

Mogao bih da napišem detaljan tekst o tome šta se tačno promenilo i koje su bile ključne odluke koje su napravile tu razliku. Bez ulepšavanja, sa konkretnim brojevima i koracima.

Mislim da bi to bilo korisno čitanje za svakog vlasnika firme koji razmišlja kako da pomeri poslovanje sa jednog nivoa na sledeći.

Javite mi ako vas zanima, rado bih napisao tekst prilagođen vašem formatu.

Aleksandar Nenadović
aleksandar@platinumzenith.com
platinumzenith.com`
  },
  {
    subject: 'Članak: Srpska firma utrostručila promet sa 5 izmena na web shopu',
    target: 'urednik@ekapija.com',
    body: `Poštovani,

Hteo bih da vam predložim jednu konkretnu priču za vaš portal.

Radili smo sa e-commerce firmom iz Srbije koja je imala solidan saobraćaj na sajtu, ali prodaja nikako nije pratila broj posetilaca. Posle detaljne analize, uveli smo pet relativno jednostavnih izmena na njihovom web shopu. Rezultat: promet se utrostručio u narednih nekoliko meseci.

Nije u pitanju ništa komplikovano niti skupo. Radi se o stvarima koje većina domaćih online prodavnica previđa, a koje prave ogromnu razliku — od načina na koji je strukturirana stranica proizvoda, do toga kako izgleda checkout proces.

Mogao bih da napišem tekst sa konkretnim izmenama i rezultatima, bez reklame, čisto kao praktičan vodič za ljude koji imaju online prodavnice.

Javite mi da li vas interesuje.

Aleksandar Nenadović
aleksandar@platinumzenith.com
platinumzenith.com`
  },
]

async function main() {
  for (let i = 0; i < pitches.length; i++) {
    const p = pitches[i]
    console.log(`[${i+1}/2] Šaljem: "${p.subject}" → alnen96@gmail.com (original target: ${p.target})`)
    await transporter.sendMail({
      from: '"Aleksandar Nenadović" <aleksandar@platinumzenith.com>',
      to: 'alnen96@gmail.com',
      subject: `[PREVIEW za ${p.target}] ${p.subject}`,
      text: `ORIGINALNI PRIMALAC: ${p.target}\n\n---\n\n${p.body}`,
    })
    console.log(`  ✅ Poslat!`)
    await new Promise(r => setTimeout(r, 2000))
  }
  console.log('\nOba mejla poslata na alnen96@gmail.com za pregled.')
}

main().catch(e => { console.error(e); process.exit(1) })
