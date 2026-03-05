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

Aleksandar Nenadović, vodim agenciju Platinum Zenith iz Zrenjanina.

Imam jednu priču za koju mislim da bi bila dobra za vaš portal. Pre godinu i po radili smo sa firmom koja je imala oko 300 hiljada evra godišnjeg prometa. Osam meseci kasnije prešli su 3 miliona. Nisu dobili nikakvu investiciju niti se desilo neko čudo. Promenili smo im pozicioniranje na tržištu, sredili prodajni proces i pokrenuli marketing koji je počeo da se isplati.

Napisao bih tekst sa konkretnim brojevima i koracima, šta se menjalo mesec po mesec. Bez reklamiranja, čisto priča o tome šta je potrebno da se napravi taj skok. Mislim da bi vašim čitaocima koji vode firme bilo korisno da vide kako to izgleda iznutra.

Javite mi ako ste zainteresovani pa se dogovorimo oko formata.

Pozdrav,
Aleksandar Nenadović
aleksandar@platinumzenith.com
platinumzenith.com`
  },
  {
    subject: 'Članak: Srpska firma utrostručila promet sa 5 izmena na web shopu',
    target: 'urednik@ekapija.com',
    body: `Poštovani,

Aleksandar Nenadović sam, vodim agenciju Platinum Zenith.

Imam predlog za tekst koji bi mogao da bude zanimljiv vašim čitaocima. Radili smo sa jednom domaćom firmom koja ima online prodavnicu. Ljudi su dolazili na sajt, ali kupovina je bila slaba. Uveli smo pet izmena na njihovom web shopu i promet se utrostručio za par meseci.

Nisu to bile nikakve skupe stvari. Radi se o tome kako je organizovana stranica proizvoda, koliko koraka ima u naručivanju, gde stoje dugmad, te stvari. Većina domaćih online prodavnica ima iste probleme a ne zna za njih.

Napisao bih tekst gde bih naveo tačno tih pet izmena sa rezultatima, bez reklame, kao praktičan vodič za ljude koji imaju web shop.

Javite mi ako vas zanima.

Pozdrav,
Aleksandar Nenadović
aleksandar@platinumzenith.com
platinumzenith.com`
  },
]

async function main() {
  for (let i = 0; i < pitches.length; i++) {
    const p = pitches[i]
    console.log(`[${i+1}/2] Šaljem: "${p.subject}" → alnen96@gmail.com (target: ${p.target})`)
    await transporter.sendMail({
      from: '"Aleksandar Nenadović" <aleksandar@platinumzenith.com>',
      to: 'alnen96@gmail.com',
      subject: `[HUMANIZED v3 za ${p.target}] ${p.subject}`,
      text: `ORIGINALNI PRIMALAC: ${p.target}\n\n---\n\n${p.body}`,
    })
    console.log(`  ✅ Poslat!`)
    await new Promise(r => setTimeout(r, 2000))
  }
  console.log('\nOba mejla poslata.')
}

main().catch(e => { console.error(e); process.exit(1) })
