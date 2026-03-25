const fs = require('fs')
const path = require('path')

const file = path.join(__dirname, 'src', 'hooks', 'pageMetaData.js')
let content = fs.readFileSync(file, 'utf8')

// Add to pageMeta
const pageMetaString = `  '/marketing-za-gradjevinske-firme': {
    robots: 'index, follow',
    title: 'Marketing za Građevinske Firme | Platinum Zenith',
    description: 'Povećajte broj upita za građevinske projekte kroz SEO, Google Ads i web dizajn. Generisanje leadova za visoku gradnju i renovacije.',
    keywords: 'marketing za gradjevinske firme, seo za gradjevinu, izrada sajta za gradjevinsku firmu, b2b marketing gradjevina',
    og: { title: 'Marketing za Građevinske Firme | Platinum Zenith', description: 'Povećajte broj upita za građevinske projekte kroz SEO, Google Ads i web dizajn. Generisanje leadova za visoku gradnju i renovacije.' },
  },
`

// Find the first occurrence (in pageMeta)
const firstIdx = content.indexOf("  '/marketing-za-kafice-i-barove': {")
if (firstIdx !== -1) {
  content = content.slice(0, firstIdx) + pageMetaString + content.slice(firstIdx)
}

// Add to pageSchemas
const schemaString = `  '/marketing-za-gradjevinske-firme': {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": \`\${SITE_URL}/marketing-za-gradjevinske-firme#webpage\`,
        "url": \`\${SITE_URL}/marketing-za-gradjevinske-firme\`,
        "name": "Marketing za Građevinske Firme | Platinum Zenith",
        "description": "Povećajte broj upita za građevinske projekte kroz SEO, Google Ads i web dizajn. Generisanje leadova za visoku gradnju i renovacije.",
        "isPartOf": { "@id": \`\${SITE_URL}/#website\` },
        "about": { "@id": \`\${SITE_URL}/marketing-za-gradjevinske-firme#service\` },
        "breadcrumb": { "@id": \`\${SITE_URL}/marketing-za-gradjevinske-firme#breadcrumb\` },
        "mainEntity": [
          { "@id": \`\${SITE_URL}/marketing-za-gradjevinske-firme#service\` },
          { "@id": \`\${SITE_URL}/marketing-za-gradjevinske-firme#faq\` }
        ],
        "potentialAction": {
          "@type": "ContactAction",
          "name": "Zatražite besplatnu analizu",
          "target": \`\${SITE_URL}/kontakt\`
        }
      },
      {
        "@type": "Service",
        "@id": \`\${SITE_URL}/marketing-za-gradjevinske-firme#service\`,
        "name": "Marketing za građevinske firme",
        "serviceType": "Construction marketing",
        "url": \`\${SITE_URL}/marketing-za-gradjevinske-firme\`,
        "mainEntityOfPage": { "@id": \`\${SITE_URL}/marketing-za-gradjevinske-firme#webpage\` },
        "provider": { "@id": \`\${SITE_URL}/#organization\` },
        "areaServed": { "@type": "Country", "name": "Srbija" },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Marketing usluge za građevinsku industriju",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Izrada sajta sa portfoliom" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Google Ads i Lokalni SEO" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "LinkedIn B2B generisanje leadova" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Meta (Facebook/Instagram) za B2C" } }
          ]
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": \`\${SITE_URL}/marketing-za-gradjevinske-firme#breadcrumb\`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Početna", "item": SITE_URL },
          { "@type": "ListItem", "position": 2, "name": "Marketing za građevinske firme", "item": \`\${SITE_URL}/marketing-za-gradjevinske-firme\` }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": \`\${SITE_URL}/marketing-za-gradjevinske-firme#faq\`,
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Koliko košta marketing za građevinsku firmu?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Zavisi od vaših ciljeva. Lokalni SEO i održavanje kreću od 400€ mesečno. Za ozbiljnije Google i LinkedIn Ads kampanje, preporučujemo budžet od 1.000€ do 3.000€ mesečno. Jedan dobijen tender ili projekat izgradnje pokriva višemesečni budžet."
            }
          },
          {
            "@type": "Question",
            "name": "Mi radimo samo B2B (sa investitorima). Da li nam trebaju društvene mreže?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Facebook i Instagram možda nisu primarni, ali LinkedIn jeste. Investitori vas proveravaju online. Ako vaš sajt i LinkedIn profil izgledaju profesionalno, šanse za dobijanje posla drastično rastu."
            }
          }
        ]
      }
    ]
  },
`

// Find the second occurrence (in pageSchemas)
const secondIdx = content.indexOf("  '/marketing-za-kafice-i-barove': {", firstIdx + pageMetaString.length + 10)
if (secondIdx !== -1) {
  content = content.slice(0, secondIdx) + schemaString + content.slice(secondIdx)
}

fs.writeFileSync(file, content, 'utf8')
console.log('Added schema and meta')
