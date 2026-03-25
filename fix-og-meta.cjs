const fs = require('fs')

let c = fs.readFileSync('server/ogMeta.js', 'utf8')

const str1 = "  '/marketing-za-kafice-i-barove': {\r\n" +
  "    '@context': 'https://schema.org',\r\n" +
  "    '@type': 'Service',\r\n" +
  "    name: 'Marketing za kafice i barove',"

const add1 = "  '/marketing-za-gradjevinske-firme': {\n" +
  "    '@context': 'https://schema.org',\n" +
  "    '@type': 'Service',\n" +
  "    name: 'Marketing za građevinske firme',\n" +
  "    serviceType: 'Construction marketing',\n" +
  "    url: `${SITE_URL}/marketing-za-gradjevinske-firme`,\n" +
  "    areaServed: { '@type': 'Country', name: 'Srbija' },\n" +
  "    provider: { '@type': 'Organization', name: 'Platinum Zenith', url: SITE_URL },\n" +
  "    title: 'Marketing za Građevinske Firme | Platinum Zenith',\n" +
  "    description: 'Povećajte broj upita za građevinske projekte kroz SEO, Google Ads i web dizajn. Generisanje leadova za visoku gradnju i renovacije.',\n" +
  "  },\n"

const str2 = "  '/marketing-za-kafice-i-barove': {\r\n" +
  "    title: 'Marketing za Kafice i Barove u Srbiji | Platinum Zenith',\r\n" +
  "    description: 'Marketing za kafice i barove u Srbiji: Google Business optimizacija, Instagram kampanje, lokalni SEO i dogadjaji koji pune stolove svaki dan, ne samo vikendom.',\r\n" +
  "  },"

const add2 = "  '/marketing-za-gradjevinske-firme': {\n" +
  "    title: 'Marketing za Građevinske Firme | Platinum Zenith',\n" +
  "    description: 'Povećajte broj upita za građevinske projekte kroz SEO, Google Ads i web dizajn. Generisanje leadova za visoku gradnju i renovacije.',\n" +
  "  },\n"

const str3 = "  '/marketing-za-kafice-i-barove': [\r\n" +
  "    {\r\n" +
  "      q: 'Da li se marketing isplati za kafic sa prosecnom potrosnjom od 500 dinara?',"

const add3 = "  '/marketing-za-gradjevinske-firme': [\n" +
  "    {\n" +
  "      q: 'Koliko košta marketing za građevinsku firmu?',\n" +
  "      a: 'Zavisi od vaših ciljeva. Lokalni SEO i održavanje kreću od 400€ mesečno. Za ozbiljnije Google i LinkedIn Ads kampanje, preporučujemo budžet od 1.000€ do 3.000€ mesečno. Jedan dobijen tender ili projekat izgradnje pokriva višemesečni budžet.'\n" +
  "    },\n" +
  "    {\n" +
  "      q: 'Mi radimo samo B2B (sa investitorima). Da li nam trebaju društvene mreže?',\n" +
  "      a: 'Facebook i Instagram možda nisu primarni, ali LinkedIn jeste. Investitori vas proveravaju online. Ako vaš sajt i LinkedIn profil izgledaju profesionalno, šanse za dobijanje posla drastično rastu.'\n" +
  "    }\n" +
  "  ],\n"

// Handle both LF and CRLF
const s1a = str1.replace(/\r\n/g, '\n')
const s2a = str2.replace(/\r\n/g, '\n')
const s3a = str3.replace(/\r\n/g, '\n')

let replaced = false

if (c.includes(str1)) { c = c.replace(str1, add1 + str1); replaced = true }
else if (c.includes(s1a)) { c = c.replace(s1a, add1 + s1a); replaced = true }

if (c.includes(str2)) { c = c.replace(str2, add2 + str2); replaced = true }
else if (c.includes(s2a)) { c = c.replace(s2a, add2 + s2a); replaced = true }

if (c.includes(str3)) { c = c.replace(str3, add3 + str3); replaced = true }
else if (c.includes(s3a)) { c = c.replace(s3a, add3 + s3a); replaced = true }

if (replaced) {
  fs.writeFileSync('server/ogMeta.js', c, 'utf8')
  console.log('Fixed!')
} else {
  console.log('Not found')
}
