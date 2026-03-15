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

const emails = [
  {
    to: 'komunikacije@startit.rs',
    subject: 'Predlog autorskog teksta: šta nam je doneo revenue share model',
    body: `Poštovani,

Vaši čitaoci redovno prate kako se menja odnos između klijenata i agencija u Srbiji, i mislim da imam temu koja bi mogla da izazove diskusiju u komentarima. Radi se o tome šta se desi kad agencija potpuno napusti fiksnu mesečnu naknadu i počne da zarađuje samo ako klijent zarađuje.

Moje ime je Aleksandar, direktor sam agencije Platinum Zenith kao i Platinum Truffles doo, firme za dostavu svežih tartufa.

Pre godinu dana smo prešli na revenue share model i ono što smo naučili iz tog procesa mislim da bi vašim čitaocima bilo korisno da čuju. Napisao bih tekst o tome gde klasičan model zapne, kako se menja svakodnevni rad kad je zarada vezana za rezultat, koje brojke vredi pratiti i šta je iz prakse radilo a šta nije.

Ako vam tema odgovara, mogu prvo poslati kratak outline pa onda kompletan tekst u formatu koji vam odgovara.

Hvala na vremenu,
Aleksandar Nenadović
aleksandar@platinumzenith.com
platinumzenith.com`
  },
  {
    to: 'crnjanski@netokracija.com',
    subject: 'Predlog teksta: CRO koji diže prodaju bez većeg budžeta za oglase',
    body: `Poštovani,

Pratim Netokraciju već duže vreme i znam da vaši čitaoci cene tekstove koji im daju nešto što mogu odmah da primene u svom poslu. Imam temu za koju mislim da bi donela baš takvu vrednost vašem portalu.

Moje ime je Aleksandar, direktor sam agencije Platinum Zenith kao i Platinum Truffles doo, firme za dostavu svežih tartufa.

Tema je CRO optimizacija i kako se može podići prodaja na sajtu bez povećanja budžeta za reklame. Imamo konkretan primer gde smo podigli konverziju sa 1.2% na 4.8% za jedan domaći e-commerce. Napisao bih tekst sa najčešćim greškama koje viđamo na domaćim shopovima, jednostavan framework za A/B testiranje i rezultate iz prakse. Čisto praktično, bez prodajnog pristupa.

Ako vam ima smisla, mogu poslati predlog strukture pa da se dogovorimo.

Pozdrav,
Aleksandar Nenadović
aleksandar@platinumzenith.com
platinumzenith.com`
  },
  {
    to: 'redakcija@bizlife.rs',
    subject: 'Kako je jedna srpska firma sa 300.000€ prometa dostigla 3 miliona za 8 meseci',
    body: `Poštovani,

Znam da vaši čitaoci vole priče iz prakse sa konkretnim brojevima, naročito kad se radi o domaćim firmama. Imam jednu takvu priču za koju mislim da bi bila odlično štivo za vaš portal.

Moje ime je Aleksandar, direktor sam agencije Platinum Zenith kao i Platinum Truffles doo, firme za dostavu svežih tartufa.

Pre godinu i po radili smo sa firmom koja je imala oko 300 hiljada evra godišnjeg prometa. Osam meseci kasnije prešli su 3 miliona. Nije bilo nikakve investicije sa strane. Promenili smo im pozicioniranje na tržištu, sredili prodajni proces i pokrenuli marketing koji je konačno počeo da vraća novac. Napisao bih tekst sa konkretnim koracima, šta se menjalo mesec po mesec, bez reklamiranja. Čisto priča koja može da posluži svakom vlasniku firme koji razmišlja kako da napravi taj skok.

Javite mi ako ste zainteresovani pa se dogovorimo oko formata.

Pozdrav,
Aleksandar Nenadović
aleksandar@platinumzenith.com
platinumzenith.com`
  },
]

async function main() {
  for (let i = 0; i < emails.length; i++) {
    const e = emails[i]
    console.log(`[${i+1}/3] Šaljem: "${e.subject}" → ${e.to}`)
    await transporter.sendMail({
      from: '"Aleksandar Nenadović" <aleksandar@platinumzenith.com>',
      to: e.to,
      subject: e.subject,
      text: e.body,
    })
    console.log(`  ✅ Poslat!`)
    await new Promise(r => setTimeout(r, 3000))
  }
  console.log('\nSva 3 mejla poslata na prave adrese.')
}

main().catch(e => { console.error(e); process.exit(1) })
