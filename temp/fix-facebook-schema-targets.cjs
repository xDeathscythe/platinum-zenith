const fs = require('fs')
const path = require('path')

const filePath = path.join(process.cwd(), 'src', 'hooks', 'pageMetaData.js')
let content = fs.readFileSync(filePath, 'utf8')

const start = "  '/koliko-kosta-facebook-reklama': {"
const end = "  '/google-reklame-cena': {"

const firstStart = content.indexOf(start)
if (firstStart === -1) throw new Error('First start marker not found')
const firstEnd = content.indexOf(end, firstStart)
if (firstEnd === -1) throw new Error('First end marker not found')

const metaReplacement = `  '/koliko-kosta-facebook-reklama': { title: 'Koliko Košta Facebook Reklama u Srbiji 2026 | Vodič Kroz Cene | Platinum Zenith', description: 'Realne cene Facebook i Instagram oglasa u Srbiji za 2026. CPC od 0,05€, mesečni budžet od 200€. Vodič kroz troškove i česte greške.', keywords: 'koliko košta facebook reklama, facebook oglasi cena, instagram oglasi cena srbija, facebook ads srbija, cena oglašavanja na facebooku, meta ads cena' },
`

content = content.slice(0, firstStart) + metaReplacement + content.slice(firstEnd)

const secondStart = content.lastIndexOf(start)
if (secondStart === -1) throw new Error('Second start marker not found')
const secondEnd = content.indexOf(end, secondStart)
if (secondEnd === -1) throw new Error('Second end marker not found')

const routeReplacement = `  '/koliko-kosta-facebook-reklama': {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": \`${'${SITE_URL}'}/koliko-kosta-facebook-reklama#webpage\`,
        "url": \`${'${SITE_URL}'}/koliko-kosta-facebook-reklama\`,
        "name": "Koliko košta Facebook reklama u Srbiji 2026",
        "description": "Realni troškovi Facebook i Instagram oglasa u Srbiji 2026: CPC, CPM, CPA, budžetski rasponi i cena vođenja kampanja.",
        "inLanguage": "sr-RS",
        "isPartOf": { "@id": SITE_URL },
        "about": { "@id": \`${'${SITE_URL}'}/koliko-kosta-facebook-reklama#service\` },
        "breadcrumb": { "@id": \`${'${SITE_URL}'}/koliko-kosta-facebook-reklama#breadcrumb\` },
        "primaryImageOfPage": { "@type": "ImageObject", "url": \`${'${SITE_URL}'}/og-image.jpg\` },
        "mainEntity": [
          { "@id": \`${'${SITE_URL}'}/koliko-kosta-facebook-reklama#service\` },
          { "@id": \`${'${SITE_URL}'}/koliko-kosta-facebook-reklama#howto-budget-cycle\` },
          { "@id": \`${'${SITE_URL}'}/koliko-kosta-facebook-reklama#funnel-benchmarks\` },
          { "@id": \`${'${SITE_URL}'}/koliko-kosta-facebook-reklama#management-models\` },
          { "@id": \`${'${SITE_URL}'}/koliko-kosta-facebook-reklama#faq\` }
        ],
        "mentions": [
          { "@id": \`${'${SITE_URL}'}/instagram-reklame-cena#service\` },
          { "@id": \`${'${SITE_URL}'}/google-reklame-cena#service\` },
          { "@id": \`${'${SITE_URL}'}/izrada-wordpress-sajta-cena#service\` },
          { "@id": \`${'${SITE_URL}'}/fiksna-naknada-vs-revenue-share#article\` }
        ],
        "potentialAction": {
          "@type": "ContactAction",
          "target": \`${'${SITE_URL}'}/kontakt\`,
          "name": "Zakažite konsultacije za Meta Ads budžet"
        }
      },
      {
        "@type": "Service",
        "@id": \`${'${SITE_URL}'}/koliko-kosta-facebook-reklama#service\`,
        "name": "Meta Ads upravljanje kampanjama",
        "description": "Planiranje, vođenje i optimizacija Facebook i Instagram kampanja sa jasnim budžetskim fazama i fokusom na merljive konverzije.",
        "serviceType": "Meta Ads management",
        "url": \`${'${SITE_URL}'}/koliko-kosta-facebook-reklama\`,
        "mainEntityOfPage": { "@id": \`${'${SITE_URL}'}/koliko-kosta-facebook-reklama#webpage\` },
        "areaServed": { "@type": "Country", "name": "Srbija" },
        "provider": { "@id": \`${'${SITE_URL}'}#organization\`, "@type": "Organization", "name": "Platinum Zenith", "url": SITE_URL },
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "EUR",
          "lowPrice": "200",
          "highPrice": "5000",
          "offerCount": "4"
        },
        "hasOfferCatalog": [
          {
            "@type": "OfferCatalog",
            "@id": \`${'${SITE_URL}'}/koliko-kosta-facebook-reklama#budget-phases\`,
            "name": "Meta Ads budžetske faze",
            "itemListElement": [
              {
                "@type": "Offer",
                "name": "Testiranje",
                "description": "Početni budžet za validaciju publike, poruke i osnovnog konverzijskog toka.",
                "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "EUR", "minPrice": "200", "maxPrice": "500" }
              },
              {
                "@type": "Offer",
                "name": "Stabilan rast",
                "description": "Kontinuirano skaliranje kampanja uz nedeljne creative iteracije i kontrolu cene leada.",
                "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "EUR", "minPrice": "500", "maxPrice": "1500" }
              },
              {
                "@type": "Offer",
                "name": "Ozbiljan marketing",
                "description": "Full-funnel Meta sistem sa remarketingom, funnel segmentacijom i strožim KPI režimom.",
                "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "EUR", "minPrice": "1500", "maxPrice": "5000" }
              },
              {
                "@type": "Offer",
                "name": "Enterprise",
                "description": "Više tržišta, napredna atribucija i koordinacija većih kreativnih i prodajnih timova.",
                "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "EUR", "minPrice": "5000" }
              }
            ]
          },
          {
            "@type": "OfferCatalog",
            "@id": \`${'${SITE_URL}'}/koliko-kosta-facebook-reklama#management-fees\`,
            "name": "Cena vođenja Meta Ads kampanja",
            "itemListElement": [
              {
                "@type": "Offer",
                "name": "Freelance / mikro tim",
                "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "EUR", "minPrice": "120", "maxPrice": "280", "billingDuration": "P1M" }
              },
              {
                "@type": "Offer",
                "name": "Specijalizovana agencija",
                "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "EUR", "minPrice": "250", "maxPrice": "650", "billingDuration": "P1M" }
              },
              {
                "@type": "Offer",
                "name": "Enterprise vođenje",
                "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "EUR", "minPrice": "650", "billingDuration": "P1M" }
              }
            ]
          }
        ],
        "additionalProperty": [
          { "@type": "PropertyValue", "name": "CPC (Meta)", "value": "0,05€ - 0,90€" },
          { "@type": "PropertyValue", "name": "CPM (Meta)", "value": "2,5€ - 14€" },
          { "@type": "PropertyValue", "name": "CPA lead", "value": "6€ - 60€" },
          { "@type": "PropertyValue", "name": "Tipičan CTR", "value": "0,9% - 2,8%" },
          { "@type": "PropertyValue", "name": "Preporučeni test period", "value": "2-4 nedelje" }
        ]
      },
      {
        "@type": "HowTo",
        "@id": \`${'${SITE_URL}'}/koliko-kosta-facebook-reklama#howto-budget-cycle\`,
        "name": "Kako da postavite Meta Ads budžet za 30 dana bez rasipanja",
        "description": "Četiri koraka za stabilan Meta Ads budžet koji čuva kvalitet leadova i drži CPA pod kontrolom.",
        "inLanguage": "sr-RS",
        "totalTime": "P30D",
        "step": [
          {
            "@type": "HowToStep",
            "position": 1,
            "name": "Definišite ciljnu cenu leada",
            "text": "Pre kampanje odredite maksimalni CPA koji i dalje ostavlja zdravu maržu.",
            "url": \`${'${SITE_URL}'}/koliko-kosta-facebook-reklama#ciljni-cpa\`
          },
          {
            "@type": "HowToStep",
            "position": 2,
            "name": "Podelite budžet po funnel fazama",
            "text": "Krenite sa 60-70% cold publikom, 20-30% retargetingom i 10% rezervom za creative testove.",
            "url": \`${'${SITE_URL}'}/koliko-kosta-facebook-reklama#budzet-po-fazi\`
          },
          {
            "@type": "HowToStep",
            "position": 3,
            "name": "Uvedite pravila skaliranja",
            "text": "Budžet povećavajte samo kampanjama koje drže stabilan CPA i dobar kvalitet upita.",
            "url": \`${'${SITE_URL}'}/koliko-kosta-facebook-reklama#pravila-skaliranja\`
          },
          {
            "@type": "HowToStep",
            "position": 4,
            "name": "Rotirajte kreativu pre zamora",
            "text": "Na svakih 7-14 dana osvežite hook, vizual i CTA da biste sprečili pad performansi.",
            "url": \`${'${SITE_URL}'}/koliko-kosta-facebook-reklama#creative-rotacija\`
          }
        ]
      },
      {
        "@type": "ItemList",
        "@id": \`${'${SITE_URL}'}/koliko-kosta-facebook-reklama#funnel-benchmarks\`,
        "name": "Meta Ads benchmark po funnel fazama u Srbiji",
        "itemListOrder": "http://schema.org/ItemListUnordered",
        "numberOfItems": 4,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Lead generation lokalne usluge",
            "item": { "@type": "Thing", "name": "CPC 0,06-0,35€, CPL 6-18€, budžet 200-800€/mes" }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "E-commerce skaliranje",
            "item": { "@type": "Thing", "name": "CPC 0,12-0,65€, CPA 7-35€, budžet 600-3.000€/mes" }
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "B2B lead kampanje",
            "item": { "@type": "Thing", "name": "CPC 0,30-1,10€, CPL 20-70€, budžet 700-2.500€/mes" }
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Premium i konkurentne niše",
            "item": { "@type": "Thing", "name": "CPC 0,60-1,90€, CPL 35-120€, budžet 1.200-5.000€/mes" }
          }
        ]
      },
      {
        "@type": "ItemList",
        "@id": \`${'${SITE_URL}'}/koliko-kosta-facebook-reklama#management-models\`,
        "name": "Modeli naplate vođenja Meta Ads kampanja",
        "itemListOrder": "http://schema.org/ItemListUnordered",
        "numberOfItems": 4,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Fiksna mesečna naknada",
            "item": { "@type": "Thing", "name": "250-700€/mes uz jasan operativni scope i redovne optimizacije" }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Procenat od medijskog budžeta",
            "item": { "@type": "Thing", "name": "8%-15% budžeta, koristan model za naloge sa brzim skaliranjem" }
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Hibridni model",
            "item": { "@type": "Thing", "name": "200-500€ + 5%-10%, balans stabilnosti i performansnog fokusa" }
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Performance bonus",
            "item": { "@type": "Thing", "name": "fiksno + bonus na CPA/ROAS target uz čist tracking" }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": \`${'${SITE_URL}'}/koliko-kosta-facebook-reklama#breadcrumb\`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Početna", "item": SITE_URL },
          { "@type": "ListItem", "position": 2, "name": "Koliko košta Facebook reklama", "item": \`${'${SITE_URL}'}/koliko-kosta-facebook-reklama\` }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": \`${'${SITE_URL}'}/koliko-kosta-facebook-reklama#faq\`,
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Koliko novca treba za početak?",
            "acceptedAnswer": { "@type": "Answer", "text": "Minimum koji ima smisla je oko 200€ mesečno za medijski budžet, plus 200-300€ za vođenje kampanja. Ispod toga je teško dobiti dovoljno podataka za pouzdanu optimizaciju." }
          },
          {
            "@type": "Question",
            "name": "Da li mogu sam da vodim Facebook oglase?",
            "acceptedAnswer": { "@type": "Answer", "text": "Možete, ali bez iskustva cena po konverziji često bude 2-3x viša. Ako krećete sami, počnite sa manjim budžetom i jasnim konverzijskim ciljem." }
          },
          {
            "@type": "Question",
            "name": "Facebook ili Instagram oglasi?",
            "acceptedAnswer": { "@type": "Answer", "text": "Oba placement-a rade kroz isti Meta Ads sistem. U praksi najbolji rezultat najčešće daje kombinacija Facebook i Instagram inventara uz testiranje kreativnog formata." }
          },
          {
            "@type": "Question",
            "name": "Kad se vide rezultati?",
            "acceptedAnswer": { "@type": "Answer", "text": "Prve klikove vidite brzo, ali za stabilnu optimizaciju najčešće je potrebno 2-4 nedelje kontinuiranog rada i testiranja." }
          },
          {
            "@type": "Question",
            "name": "Da li Facebook oglasi rade za B2B?",
            "acceptedAnswer": { "@type": "Answer", "text": "Da, posebno kroz lead forme, webinar funnel i edukativni sadržaj. Cena lead-a je obično viša nego u B2C, ali je i vrednost klijenta znatno veća." }
          },
          {
            "@type": "Question",
            "name": "Koliko košta vođenje Meta Ads kampanja bez medijskog budžeta?",
            "acceptedAnswer": { "@type": "Answer", "text": "Za većinu firmi u Srbiji vođenje je najčešće 120-650€ mesečno, zavisno od broja kampanja, obima testiranja i nivoa analitike." }
          },
          {
            "@type": "Question",
            "name": "Šta najviše podiže cenu Facebook reklama?",
            "acceptedAnswer": { "@type": "Answer", "text": "Najčešće kreativni zamor, loš match poruke i landing stranice, preširoka publika i kašnjenje prodajnog follow-upa prema leadovima." }
          },
          {
            "@type": "Question",
            "name": "Kako da smanjim cenu leada bez većeg budžeta?",
            "acceptedAnswer": { "@type": "Answer", "text": "Najbrži pomaci dolaze iz boljeg hook-a, jasnog CTA-a, redovne creative rotacije i strožeg filtriranja publike po intent signalima." }
          }
        ]
      }
    ]
  },
`

content = content.slice(0, secondStart) + routeReplacement + content.slice(secondEnd)

fs.writeFileSync(filePath, content, 'utf8')
console.log('Fixed meta entry and replaced route schema for /koliko-kosta-facebook-reklama')
