import fs from 'fs';
const path = 'src/hooks/pageMetaData.js';
const file = fs.readFileSync(path, 'utf8');
const startMarker = "  '/seo-optimizacija-cena': {";
const endMarker = "  '/draft/netokracija-cro-case':";
const start = file.indexOf(startMarker);
const end = file.indexOf(endMarker);
if (start === -1 || end === -1 || end <= start) {
  throw new Error('Markers not found for seo-optimizacija-cena block');
}
const replacement = `  '/seo-optimizacija-cena': {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": \`\${SITE_URL}/seo-optimizacija-cena#webpage\`,
        "url": \`\${SITE_URL}/seo-optimizacija-cena\`,
        "name": "Koliko košta SEO optimizacija u Srbiji 2026",
        "description": "Realni rasponi cena SEO optimizacije u Srbiji, timeline rezultata i modeli saradnje po fazama rasta.",
        "inLanguage": "sr-RS",
        "isPartOf": { "@id": SITE_URL },
        "about": { "@id": \`\${SITE_URL}/seo-optimizacija-cena#service\` },
        "breadcrumb": { "@id": \`\${SITE_URL}/seo-optimizacija-cena#breadcrumb\` },
        "mainEntity": [
          { "@id": \`\${SITE_URL}/seo-optimizacija-cena#service\` },
          { "@id": \`\${SITE_URL}/seo-optimizacija-cena#howto-plan\` },
          { "@id": \`\${SITE_URL}/seo-optimizacija-cena#timeline\` },
          { "@id": \`\${SITE_URL}/seo-optimizacija-cena#faq\` }
        ],
        "potentialAction": {
          "@type": "ContactAction",
          "name": "Zatražite besplatan SEO audit",
          "target": \`\${SITE_URL}/kontakt\`
        }
      },
      {
        "@type": "Service",
        "@id": \`\${SITE_URL}/seo-optimizacija-cena#service\`,
        "name": "SEO optimizacija",
        "description": "SEO optimizacija sa tehničkim auditom, content planom i kontinuiranom optimizacijom za rast organskog saobraćaja i upita.",
        "serviceType": "Search Engine Optimization",
        "url": \`\${SITE_URL}/seo-optimizacija-cena\`,
        "mainEntityOfPage": { "@id": \`\${SITE_URL}/seo-optimizacija-cena#webpage\` },
        "areaServed": { "@type": "Country", "name": "Srbija" },
        "provider": { "@id": \`\${SITE_URL}#organization\`, "@type": "Organization", "name": "Platinum Zenith", "url": SITE_URL },
        "offers": { "@type": "AggregateOffer", "priceCurrency": "EUR", "lowPrice": "300", "highPrice": "3000", "offerCount": "3" },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "SEO paketi",
          "itemListElement": [
            {
              "@type": "Offer",
              "name": "Osnovni SEO",
              "description": "Lokalni SEO i tehničke osnove za manje biznise.",
              "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "EUR", "minPrice": "300", "maxPrice": "500", "billingDuration": "P1M" }
            },
            {
              "@type": "Offer",
              "name": "Napredni SEO",
              "description": "SEO rast kroz sadržaj, tehničke iteracije i konkurentsku analizu.",
              "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "EUR", "minPrice": "500", "maxPrice": "1200", "billingDuration": "P1M" }
            },
            {
              "@type": "Offer",
              "name": "Premium SEO",
              "description": "Agresivan SEO pristup za visoko konkurentne niše.",
              "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "EUR", "minPrice": "1200", "maxPrice": "3000", "billingDuration": "P1M" }
            }
          ]
        },
        "additionalProperty": [
          { "@type": "PropertyValue", "name": "Prvi pomaci (lokalne pretrage)", "value": "1-2 meseca" },
          { "@type": "PropertyValue", "name": "Ozbiljniji rezultati (konkurentne niše)", "value": "4-6 meseci" },
          { "@type": "PropertyValue", "name": "Preporučen horizont procene", "value": "minimum 6 meseci kontinuiranog rada" }
        ]
      },
      {
        "@type": "HowTo",
        "@id": \`\${SITE_URL}/seo-optimizacija-cena#howto-plan\`,
        "name": "Kako da proceniš SEO budžet pre ugovora",
        "description": "Četiri koraka za procenu realnog SEO budžeta i očekivanja pre početka saradnje.",
        "inLanguage": "sr-RS",
        "totalTime": "P180D",
        "step": [
          {
            "@type": "HowToStep",
            "position": 1,
            "name": "Audit i tehnički temelji",
            "text": "Proveri tehničko stanje sajta, brzinu, indeksaciju i kritične SEO greške pre bilo kog skaliranja.",
            "url": \`\${SITE_URL}/seo-optimizacija-cena#audit-temelji\`
          },
          {
            "@type": "HowToStep",
            "position": 2,
            "name": "Mapiranje keyword intenta",
            "text": "Podeli ključne reči po nameri korisnika i prioritetu prihoda, ne samo po obimu pretrage.",
            "url": \`\${SITE_URL}/seo-optimizacija-cena#keyword-intent\`
          },
          {
            "@type": "HowToStep",
            "position": 3,
            "name": "Plan sadržaja i autoriteta",
            "text": "Definiši 90-dnevni plan sadržaja, internog linkovanja i link-building aktivnosti.",
            "url": \`\${SITE_URL}/seo-optimizacija-cena#seo-plan-90-dana\`
          },
          {
            "@type": "HowToStep",
            "position": 4,
            "name": "KPI i mesečni reporting",
            "text": "Postavi KPI-jeve za pozicije, saobraćaj i konverzije, pa prati trend na mesečnom nivou.",
            "url": \`\${SITE_URL}/seo-optimizacija-cena#seo-kpi-izvestaj\`
          }
        ]
      },
      {
        "@type": "ItemList",
        "@id": \`\${SITE_URL}/seo-optimizacija-cena#timeline\`,
        "name": "SEO vremenski okvir rezultata",
        "itemListOrder": "http://schema.org/ItemListUnordered",
        "numberOfItems": 3,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Mesec 1-2: Audit i temelji",
            "item": { "@type": "Thing", "name": "Tehnički audit, research ključnih reči i optimizacija postojećih stranica." }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Mesec 3-4: Sadržaj i linkovi",
            "item": { "@type": "Thing", "name": "Objava sadržaja po prioritetnim temama i početak link-building aktivnosti." }
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Mesec 5-6: Rast i konverzije",
            "item": { "@type": "Thing", "name": "Stabilizacija rasta organskog saobraćaja i fokus na kvalitet upita i konverzije." }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": \`\${SITE_URL}/seo-optimizacija-cena#breadcrumb\`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Početna", "item": SITE_URL },
          { "@type": "ListItem", "position": 2, "name": "SEO optimizacija cena", "item": \`\${SITE_URL}/seo-optimizacija-cena\` }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": \`\${SITE_URL}/seo-optimizacija-cena#faq\`,
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Koliko brzo mogu da očekujem rezultate?",
            "acceptedAnswer": { "@type": "Answer", "text": "Za lokalne pretrage prvi pomaci su često vidljivi za 1-2 meseca, dok za konkurentne nacionalne upite ozbiljniji rezultati dolaze posle 4-6 meseci kontinuiranog rada." }
          },
          {
            "@type": "Question",
            "name": "Da li garantujete prvu poziciju na Google-u?",
            "acceptedAnswer": { "@type": "Answer", "text": "Ne, jer nijedna agencija ne kontroliše Google algoritam. Garantujemo transparentan proces, merenje i stalnu optimizaciju koja vodi ka stabilnom rastu." }
          },
          {
            "@type": "Question",
            "name": "Šta ako već imam agenciju koja radi SEO?",
            "acceptedAnswer": { "@type": "Answer", "text": "Možemo uraditi SEO audit i pokazati šta radi, a šta usporava rezultate. Na osnovu toga dobijate jasan plan prioriteta i odlučujete o sledećem koraku." }
          },
          {
            "@type": "Question",
            "name": "Da li SEO zamenjuje plaćene oglase?",
            "acceptedAnswer": { "@type": "Answer", "text": "Ne zamenjuje ih, već ih dopunjuje. SEO gradi dugoročan organski kanal, dok oglasi donose brže testiranje i instant podatke." }
          },
          {
            "@type": "Question",
            "name": "Šta je uključeno u mesečni izveštaj?",
            "acceptedAnswer": { "@type": "Answer", "text": "Mesečni izveštaj uključuje pozicije ključnih reči, organski saobraćaj, konverzije, urađene aktivnosti i plan za sledeći period." }
          }
        ]
      }
    ]
  },
`;
const updated = file.slice(0, start) + replacement + file.slice(end);
fs.writeFileSync(path, updated, 'utf8');
