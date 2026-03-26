const fs = require('fs')

let c = fs.readFileSync('server/ogMeta.js', 'utf8')

const add2 = "  '/marketing-za-salone-namestaja': {\n" +
  "    title: 'Marketing za Salone Nameštaja | Platinum Zenith',\n" +
  "    description: 'Povećajte foot traffic u salonu i e-commerce prodaju. Google Ads, Meta retargeting i SEO optimizacija za salone nameštaja.',\n" +
  "  },\n"

const add3 = "  '/marketing-za-salone-namestaja': [\n" +
  "    {\n" +
  "      q: 'Da li nam treba web shop ili je dovoljan katalog?',\n" +
  "      a: 'Web shop (e-commerce) vam daje mogućnost direktne prodaje i lakše merenje ROI-a. Međutim, dobar online katalog sa jasnim cenama, specifikacijama i formom za upit može odlično funkcionisati ako se oslanjate prvenstveno na prodaju u fizičkom salonu.'\n" +
  "    },\n" +
  "    {\n" +
  "      q: 'Ljudi kupuju jeftiniji nameštaj online, ali naš je premium klasa. Kako to prodati?',\n" +
  "      a: 'Premium nameštaj zahteva nurturing strategiju. Ne očekujemo kupovinu na prvi klik. Koristimo content marketing, detaljne video prezentacije, retargeting edukativnim sadržajem i nudimo zakazivanje VIP konsultacija u salonu ili online.'\n" +
  "    }\n" +
  "  ],\n"

const idx1 = c.indexOf("'/marketing-za-zanatlije': {")
if (idx1 !== -1) {
  c = c.substring(0, idx1) + add2 + c.substring(idx1)
}

const idx2 = c.indexOf("'/marketing-za-zanatlije': [")
if (idx2 !== -1) {
  c = c.substring(0, idx2) + add3 + c.substring(idx2)
}

fs.writeFileSync('server/ogMeta.js', c, 'utf8')
console.log('Fixed using indexOf')
