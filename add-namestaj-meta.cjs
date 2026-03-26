const fs = require('fs')
const path = require('path')

const file = path.join(__dirname, 'src', 'hooks', 'pageMetaData.js')
let content = fs.readFileSync(file, 'utf8')

// Add to pageMeta
const pageMetaString = `  '/marketing-za-salone-namestaja': {
    robots: 'index, follow',
    title: 'Marketing za Salone Nameštaja | Platinum Zenith',
    description: 'Povećajte foot traffic u salonu i e-commerce prodaju. Google Ads, Meta retargeting i SEO optimizacija za salone nameštaja.',
    keywords: 'marketing za salone namestaja, digitalni marketing namestaj, prodaja namestaja online, reklamiranje salona namestaja, seo za namestaj',
    og: { title: 'Marketing za Salone Nameštaja | Platinum Zenith', description: 'Povećajte foot traffic u salonu i e-commerce prodaju. Google Ads, Meta retargeting i SEO optimizacija za salone nameštaja.' },
    twitter: { title: 'Marketing za Salone Nameštaja | Platinum Zenith', description: 'Povećajte foot traffic u salonu i e-commerce prodaju. Google Ads, Meta retargeting i SEO optimizacija za salone nameštaja.' },
  },
`

const firstIdx = content.indexOf("  '/marketing-za-zanatlije': {")
if (firstIdx !== -1) {
  content = content.slice(0, firstIdx) + pageMetaString + content.slice(firstIdx)
}

// Add to pageSchemas
const schemaString = `  '/marketing-za-salone-namestaja': {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": \`\${SITE_URL}/marketing-za-salone-namestaja#webpage\`,
        "url": \`\${SITE_URL}/marketing-za-salone-namestaja\`,
        "name": "Marketing za Salone Nameštaja | Platinum Zenith",
        "description": "Povećajte foot traffic u salonu i e-commerce prodaju. Google Ads, Meta retargeting i SEO optimizacija za salone nameštaja.",
        "isPartOf": { "@id": \`\${SITE_URL}/#website\` },
        "about": { "@id": \`\${SITE_URL}/marketing-za-salone-namestaja#service\` },
        "breadcrumb": { "@id": \`\${SITE_URL}/marketing-za-salone-namestaja#breadcrumb\` },
        "mainEntity": [
          { "@id": \`\${SITE_URL}/marketing-za-salone-namestaja#service\` },
          { "@id": \`\${SITE_URL}/marketing-za-salone-namestaja#faq\` }
        ],
        "potentialAction": {
          "@type": "ContactAction",
          "name": "Zatražite besplatnu analizu",
          "target": \`\${SITE_URL}/kontakt\`
        }
      },
      {
        "@type": "Service",
        "@id": \`\${SITE_URL}/marketing-za-salone-namestaja#service\`,
        "name": "Marketing za salone nameštaja",
        "serviceType": "Furniture store marketing",
        "url": \`\${SITE_URL}/marketing-za-salone-namestaja\`,
        "mainEntityOfPage": { "@id": \`\${SITE_URL}/marketing-za-salone-namestaja#webpage\` },
        "provider": { "@id": \`\${SITE_URL}/#organization\` },
        "areaServed": { "@type": "Country", "name": "Srbija" },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Marketing usluge za industriju nameštaja",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Meta (Facebook/Instagram) kampanje" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Google Ads i Lokalni SEO" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "E-commerce SEO i optimizacija sajta" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Email marketing i automatizacija" } }
          ]
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": \`\${SITE_URL}/marketing-za-salone-namestaja#breadcrumb\`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Početna", "item": SITE_URL },
          { "@type": "ListItem", "position": 2, "name": "Marketing za salone nameštaja", "item": \`\${SITE_URL}/marketing-za-salone-namestaja\` }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": \`\${SITE_URL}/marketing-za-salone-namestaja#faq\`,
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Da li nam treba web shop ili je dovoljan katalog?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Web shop (e-commerce) vam daje mogućnost direktne prodaje i lakše merenje ROI-a. Međutim, dobar online katalog sa jasnim cenama, specifikacijama i formom za upit može odlično funkcionisati ako se oslanjate prvenstveno na prodaju u fizičkom salonu."
            }
          },
          {
            "@type": "Question",
            "name": "Ljudi kupuju jeftiniji nameštaj online, ali naš je premium klasa. Kako to prodati?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Premium nameštaj zahteva 'nurturing' strategiju. Ne očekujemo kupovinu na prvi klik. Koristimo content marketing, detaljne video prezentacije, retargeting edukativnim sadržajem i nudimo zakazivanje VIP konsultacija u salonu ili online."
            }
          }
        ]
      }
    ]
  },
`

const secondIdx = content.indexOf("  '/marketing-za-zanatlije': {", firstIdx + pageMetaString.length + 10)
if (secondIdx !== -1) {
  content = content.slice(0, secondIdx) + schemaString + content.slice(secondIdx)
}

fs.writeFileSync(file, content, 'utf8')
console.log('Added schema and meta')
