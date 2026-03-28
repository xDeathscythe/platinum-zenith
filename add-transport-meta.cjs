const fs = require('fs')
const path = require('path')

const file1 = path.join(__dirname, 'src', 'hooks', 'pageMetaData.js')
let content1 = fs.readFileSync(file1, 'utf8')

// Add to pageMeta
const pageMetaString = `  '/marketing-za-transport-i-logistiku': {
    robots: 'index, follow',
    title: 'Marketing za Transport i Logistiku | Platinum Zenith',
    description: 'Povećajte B2B upite i smanjite prazne ture kroz SEO, LinkedIn Lead Generation i Google Ads kampanje za transportne firme i špedicije.',
    keywords: 'marketing za transport, marketing za logistiku, marketing za spediciju, b2b marketing transport, seo za transport, google ads transport',
    og: { title: 'Marketing za Transport i Logistiku | Platinum Zenith', description: 'Povećajte B2B upite i smanjite prazne ture kroz SEO, LinkedIn Lead Generation i Google Ads kampanje za transportne firme i špedicije.' },
    twitter: { title: 'Marketing za Transport i Logistiku | Platinum Zenith', description: 'Povećajte B2B upite i smanjite prazne ture kroz SEO, LinkedIn Lead Generation i Google Ads kampanje za transportne firme i špedicije.' },
  },
`

const firstIdx = content1.indexOf("  '/marketing-za-salone-namestaja': {")
if (firstIdx !== -1) {
  content1 = content1.slice(0, firstIdx) + pageMetaString + content1.slice(firstIdx)
}

// Add to pageSchemas
const schemaString = `  '/marketing-za-transport-i-logistiku': {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": \`\${SITE_URL}/marketing-za-transport-i-logistiku#webpage\`,
        "url": \`\${SITE_URL}/marketing-za-transport-i-logistiku\`,
        "name": "Marketing za Transport i Logistiku | Platinum Zenith",
        "description": "Povećajte B2B upite i smanjite prazne ture kroz SEO, LinkedIn Lead Generation i Google Ads kampanje za transportne firme i špedicije.",
        "isPartOf": { "@id": \`\${SITE_URL}/#website\` },
        "about": { "@id": \`\${SITE_URL}/marketing-za-transport-i-logistiku#service\` },
        "breadcrumb": { "@id": \`\${SITE_URL}/marketing-za-transport-i-logistiku#breadcrumb\` },
        "mainEntity": [
          { "@id": \`\${SITE_URL}/marketing-za-transport-i-logistiku#service\` },
          { "@id": \`\${SITE_URL}/marketing-za-transport-i-logistiku#faq\` }
        ],
        "potentialAction": {
          "@type": "ContactAction",
          "name": "Zatražite besplatnu analizu",
          "target": \`\${SITE_URL}/kontakt\`
        }
      },
      {
        "@type": "Service",
        "@id": \`\${SITE_URL}/marketing-za-transport-i-logistiku#service\`,
        "name": "Marketing za transport i logistiku",
        "serviceType": "Logistics and transport marketing",
        "url": \`\${SITE_URL}/marketing-za-transport-i-logistiku\`,
        "mainEntityOfPage": { "@id": \`\${SITE_URL}/marketing-za-transport-i-logistiku#webpage\` },
        "provider": { "@id": \`\${SITE_URL}/#organization\` },
        "areaServed": { "@type": "Country", "name": "Srbija" },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Marketing usluge za industriju transporta i logistike",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Google Ads (Search) za hitne upite" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "B2B Lead Generation na LinkedIn-u" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SEO optimizacija sajta za logistiku" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Employer Branding (Zapošljavanje vozača)" } }
          ]
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": \`\${SITE_URL}/marketing-za-transport-i-logistiku#breadcrumb\`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Početna", "item": SITE_URL },
          { "@type": "ListItem", "position": 2, "name": "Marketing za transport i logistiku", "item": \`\${SITE_URL}/marketing-za-transport-i-logistiku\` }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": \`\${SITE_URL}/marketing-za-transport-i-logistiku#faq\`,
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Mi radimo samo B2B transport kamionima. Da li su društvene mreže za nas?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Facebook verovatno nije kanal za direktnu prodaju B2B transporta, ali je ključan za Employer Branding (zapošljavanje vozača). S druge strane, LinkedIn je izuzetno moćan alat za B2B prodaju i građenje odnosa sa direktorima logistike."
            }
          },
          {
            "@type": "Question",
            "name": "Da li možete da nam pomognete da smanjimo prazne ture?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Da. Kroz ciljane Google Ads i LinkedIn kampanje možemo targetirati specifične regione gde vam najčešće nedostaje roba za povratne ture. Kampanje se mogu paliti i gasiti po potrebi."
            }
          }
        ]
      }
    ]
  },
`

const secondIdx = content1.indexOf("  '/marketing-za-salone-namestaja': {", firstIdx + pageMetaString.length + 10)
if (secondIdx !== -1) {
  content1 = content1.slice(0, secondIdx) + schemaString + content1.slice(secondIdx)
}

fs.writeFileSync(file1, content1, 'utf8')
console.log('Added schema to pageMetaData.js')

const file2 = path.join(__dirname, 'server', 'ogMeta.js')
let content2 = fs.readFileSync(file2, 'utf8')

const og1 = "  '/marketing-za-transport-i-logistiku': {\n" +
  "    '@context': 'https://schema.org',\n" +
  "    '@type': 'Service',\n" +
  "    name: 'Marketing za transport i logistiku',\n" +
  "    serviceType: 'Logistics and transport marketing',\n" +
  "    url: `${SITE_URL}/marketing-za-transport-i-logistiku`,\n" +
  "    areaServed: { '@type': 'Country', name: 'Srbija' },\n" +
  "    provider: { '@type': 'Organization', name: 'Platinum Zenith', url: SITE_URL },\n" +
  "    title: 'Marketing za Transport i Logistiku | Platinum Zenith',\n" +
  "    description: 'Povećajte B2B upite i smanjite prazne ture kroz SEO, LinkedIn Lead Generation i Google Ads kampanje za transportne firme i špedicije.',\n" +
  "  },\n"

const idx1 = content2.indexOf("  '/marketing-za-salone-namestaja': {")
if (idx1 !== -1) {
  content2 = content2.slice(0, idx1) + og1 + content2.slice(idx1)
}

const og2 = "  '/marketing-za-transport-i-logistiku': {\n" +
  "    title: 'Marketing za Transport i Logistiku | Platinum Zenith',\n" +
  "    description: 'Povećajte B2B upite i smanjite prazne ture kroz SEO, LinkedIn Lead Generation i Google Ads kampanje za transportne firme i špedicije.',\n" +
  "  },\n"

const idx2 = content2.indexOf("  '/marketing-za-salone-namestaja': {", idx1 + og1.length + 10)
if (idx2 !== -1) {
  content2 = content2.slice(0, idx2) + og2 + content2.slice(idx2)
}

const og3 = "  '/marketing-za-transport-i-logistiku': [\n" +
  "    {\n" +
  "      q: 'Mi radimo samo B2B transport kamionima. Da li su društvene mreže za nas?',\n" +
  "      a: 'Facebook verovatno nije kanal za direktnu prodaju B2B transporta, ali je ključan za Employer Branding (zapošljavanje vozača). S druge strane, LinkedIn je izuzetno moćan alat za B2B prodaju i građenje odnosa sa direktorima logistike.'\n" +
  "    },\n" +
  "    {\n" +
  "      q: 'Da li možete da nam pomognete da smanjimo prazne ture?',\n" +
  "      a: 'Da. Kroz ciljane Google Ads i LinkedIn kampanje možemo targetirati specifične regione gde vam najčešće nedostaje roba za povratne ture. Kampanje se mogu paliti i gasiti po potrebi.'\n" +
  "    }\n" +
  "  ],\n"

const idx3 = content2.indexOf("  '/marketing-za-salone-namestaja': [", idx2 + og2.length + 10)
if (idx3 !== -1) {
  content2 = content2.slice(0, idx3) + og3 + content2.slice(idx3)
}

fs.writeFileSync(file2, content2, 'utf8')
console.log('Added meta to ogMeta.js')
