const fs = require('fs');
const file = 'src/hooks/pageMetaData.js';
let content = fs.readFileSync(file, 'utf8');

const metaToAdd = `
    '/marketing-za-zanatlije': {
      robots: 'index, follow',
      title: 'Marketing za Majstore i Zanatlije (Električari, Vodoinstalateri) | Platinum Zenith',
      description: 'Specijalizovan digitalni marketing za zanatlije, električare, vodoinstalatere i keramičare. Google Ads za hitne intervencije, lokalni SEO i izrada brzih sajtova.',
      keywords: 'marketing za majstore, marketing za zanatlije, marketing za elektricare, marketing za vodoinstalatere, google ads za majstore, lokalni seo srbija',
      og: { title: 'Marketing za Majstore i Zanatlije (Električari, Vodoinstalateri) | Platinum Zenith', description: 'Specijalizovan digitalni marketing za zanatlije, električare, vodoinstalatere i keramičare. Google Ads za hitne intervencije, lokalni SEO i izrada brzih sajtova.' },
      twitter: { title: 'Marketing za Majstore i Zanatlije (Električari, Vodoinstalateri) | Platinum Zenith', description: 'Specijalizovan digitalni marketing za zanatlije, električare, vodoinstalatere i keramičare. Google Ads za hitne intervencije, lokalni SEO i izrada brzih sajtova.' },
    },`;

const schemaToAdd = `
    '/marketing-za-zanatlije': {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": \`\${SITE_URL}/marketing-za-zanatlije#webpage\`,
          "url": \`\${SITE_URL}/marketing-za-zanatlije\`,
          "name": "Marketing za Majstore i Zanatlije (Električari, Vodoinstalateri) | Platinum Zenith",
          "description": "Specijalizovan digitalni marketing za zanatlije, električare, vodoinstalatere i keramičare. Google Ads za hitne intervencije, lokalni SEO i izrada brzih sajtova.",
          "isPartOf": { "@id": \`\${SITE_URL}/#website\` },
          "about": { "@id": \`\${SITE_URL}/marketing-za-zanatlije#service\` },
          "breadcrumb": { "@id": \`\${SITE_URL}/marketing-za-zanatlije#breadcrumb\` },
          "mainEntity": [
            { "@id": \`\${SITE_URL}/marketing-za-zanatlije#service\` },
            { "@id": \`\${SITE_URL}/marketing-za-zanatlije#faq\` }
          ],
          "potentialAction": {
            "@type": "ContactAction",
            "target": \`\${SITE_URL}/kontakt\`,
            "name": "Kontaktirajte nas za ponudu"
          }
        },
        {
          "@type": "Service",
          "@id": \`\${SITE_URL}/marketing-za-zanatlije#service\`,
          "name": "Marketing za zanatlije",
          "serviceType": "Marketing za zanatlije i majstore",
          "url": \`\${SITE_URL}/marketing-za-zanatlije\`,
          "mainEntityOfPage": { "@id": \`\${SITE_URL}/marketing-za-zanatlije#webpage\` },
          "provider": { "@id": \`\${SITE_URL}/#organization\` },
          "areaServed": { "@type": "Country", "name": "Srbija" }
        },
        {
          "@type": "BreadcrumbList",
          "@id": \`\${SITE_URL}/marketing-za-zanatlije#breadcrumb\`,
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Početna", "item": SITE_URL },
            { "@type": "ListItem", "position": 2, "name": "Marketing za zanatlije", "item": \`\${SITE_URL}/marketing-za-zanatlije\` }
          ]
        },
        {
          "@type": "FAQPage",
          "@id": \`\${SITE_URL}/marketing-za-zanatlije#faq\`,
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Koliko košta marketing za vodoinstalatere ili električare?",
              "acceptedAnswer": { "@type": "Answer", "text": "Za lokalni SEO i vođenje Google Business profila cene kreću od 300€ mesečno. Za Google Ads, preporučujemo početni budžet za klikove od bar 200-300€ mesečno." }
            },
            {
              "@type": "Question",
              "name": "Da li mi treba sajt ako već imam Facebook stranicu?",
              "acceptedAnswer": { "@type": "Answer", "text": "Apsolutno da. Kada nekome curi bojler, on ne ide na Facebook da traži majstora, već na Google." }
            }
          ]
        }
      ]
    },`;

// Insert meta
let splitAt1 = content.indexOf("'/marketing-za-gradjevinske-firme': {");
if (splitAt1 !== -1) {
    content = content.substring(0, splitAt1) + metaToAdd.trimStart() + "\n    " + content.substring(splitAt1);
}

// Insert schema
let pageSchemaMapIndex = content.indexOf("export const pageSchemaMap = {");
if (pageSchemaMapIndex !== -1) {
    let splitAt2 = content.indexOf("'/marketing-za-gradjevinske-firme': {", pageSchemaMapIndex);
    if (splitAt2 !== -1) {
        content = content.substring(0, splitAt2) + schemaToAdd.trimStart() + "\n    " + content.substring(splitAt2);
    }
}

fs.writeFileSync(file, content, 'utf8');
console.log('done correctly!');
