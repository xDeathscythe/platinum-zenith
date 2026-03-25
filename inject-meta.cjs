const fs = require('fs');
const file = 'projects/arcads-clone/src/hooks/pageMetaData.js';
let content = fs.readFileSync(file, 'utf8');

const metaToAdd = 
    '/marketing-za-zanatlije': {
      robots: 'index, follow',
      title: 'Marketing za Majstore i Zanatlije (Električari, Vodoinstalateri) | Platinum Zenith',
      description: 'Specijalizovan digitalni marketing za zanatlije, električare, vodoinstalatere i keramičare. Google Ads za hitne intervencije, lokalni SEO i izrada brzih sajtova.',
      keywords: 'marketing za majstore, marketing za zanatlije, marketing za elektricare, marketing za vodoinstalatere, google ads za majstore, lokalni seo srbija',
      og: { title: 'Marketing za Majstore i Zanatlije (Električari, Vodoinstalateri) | Platinum Zenith', description: 'Specijalizovan digitalni marketing za zanatlije, električare, vodoinstalatere i keramičare. Google Ads za hitne intervencije, lokalni SEO i izrada brzih sajtova.' },
      twitter: { title: 'Marketing za Majstore i Zanatlije (Električari, Vodoinstalateri) | Platinum Zenith', description: 'Specijalizovan digitalni marketing za zanatlije, električare, vodoinstalatere i keramičare. Google Ads za hitne intervencije, lokalni SEO i izrada brzih sajtova.' },
    },;

content = content.replace(
  "'/marketing-za-gradjevinske-firme': {",
  metaToAdd + "\n    '/marketing-za-gradjevinske-firme': {"
);

const schemaToAdd = 
    '/marketing-za-zanatlije': {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": \\/marketing-za-zanatlije#webpage\,
          "url": \\/marketing-za-zanatlije\,
          "name": "Marketing za Majstore i Zanatlije (Električari, Vodoinstalateri) | Platinum Zenith",
          "description": "Specijalizovan digitalni marketing za zanatlije, električare, vodoinstalatere i keramičare. Google Ads za hitne intervencije, lokalni SEO i izrada brzih sajtova.",
          "isPartOf": { "@id": \\/#website\ },
          "about": { "@id": \\/marketing-za-zanatlije#service\ },
          "breadcrumb": { "@id": \\/marketing-za-zanatlije#breadcrumb\ },
          "mainEntity": [
            { "@id": \\/marketing-za-zanatlije#service\ },
            { "@id": \\/marketing-za-zanatlije#faq\ }
          ],
          "potentialAction": {
            "@type": "ContactAction",
            "target": \\/kontakt\,
            "name": "Kontaktirajte nas za ponudu"
          }
        },
        {
          "@type": "Service",
          "@id": \\/marketing-za-zanatlije#service\,
          "name": "Marketing za zanatlije",
          "serviceType": "Marketing za zanatlije i majstore",
          "url": \\/marketing-za-zanatlije\,
          "mainEntityOfPage": { "@id": \\/marketing-za-zanatlije#webpage\ },
          "provider": { "@id": \\/#organization\ },
          "areaServed": { "@type": "Country", "name": "Srbija" },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Marketinške usluge za zanatlije",
            "itemListElement": [
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Lokalni SEO i Google Business profil" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Google Ads (Call-Only Kampanje)" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Brz i funkcionalan sajt" } }
            ]
          }
        },
        {
          "@type": "BreadcrumbList",
          "@id": \\/marketing-za-zanatlije#breadcrumb\,
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Početna", "item": SITE_URL },
            { "@type": "ListItem", "position": 2, "name": "Marketing za zanatlije", "item": \\/marketing-za-zanatlije\ }
          ]
        },
        {
          "@type": "FAQPage",
          "@id": \\/marketing-za-zanatlije#faq\,
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
    },;

// There are two blocks for routing. Let's find the second occurence.
let firstSchemaIndex = content.indexOf("'/marketing-za-gradjevinske-firme': {", content.indexOf("pageSchemaMap"));
if (firstSchemaIndex !== -1) {
    content = content.substring(0, firstSchemaIndex) + schemaToAdd + "\n" + content.substring(firstSchemaIndex);
}

fs.writeFileSync(file, content, 'utf8');
