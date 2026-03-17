import fs from 'fs';

let content = fs.readFileSync('src/hooks/pageMetaData.js', 'utf8');

const newMeta = `
  '/marketing-za-racunovodje': {
    title: 'Marketing za Računovodstvene Agencije u Srbiji | Platinum Zenith',
    description: 'Specijalizovani marketing za računovođe i knjigovođe u Srbiji. B2B Google Ads, SEO i LinkedIn strategije koje donose stabilne klijente.',
    keywords: 'marketing za racunovodje, knjigovodstvena agencija marketing, digitalni marketing racunovodstvo, b2b marketing srbija, seo za racunovodje',
  },`;

content = content.replace(
  /'\/industrije\/startapovi': \{[^}]+\},/g,
  match => match + '\n' + newMeta
);

const newSchemas = `
  '/marketing-za-racunovodje': {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": \`\${SITE_URL}/marketing-za-racunovodje#webpage\`,
        "url": \`\${SITE_URL}/marketing-za-racunovodje\`,
        "name": "Marketing za Računovodstvene Agencije u Srbiji | Platinum Zenith",
        "description": "Specijalizovani marketing za računovođe i knjigovođe u Srbiji.",
        "isPartOf": { "@id": \`\${SITE_URL}/#website\` },
        "about": { "@id": \`\${SITE_URL}/marketing-za-racunovodje#service\` },
        "breadcrumb": { "@id": \`\${SITE_URL}/marketing-za-racunovodje#breadcrumb\` }
      },
      {
        "@type": "Service",
        "@id": \`\${SITE_URL}/marketing-za-racunovodje#service\`,
        "name": "Marketing za računovodstvene agencije",
        "serviceType": "B2B Marketing",
        "url": \`\${SITE_URL}/marketing-za-racunovodje\`,
        "mainEntityOfPage": { "@id": \`\${SITE_URL}/marketing-za-racunovodje#webpage\` },
        "provider": { "@id": \`\${SITE_URL}/#organization\` }
      },
      {
        "@type": "BreadcrumbList",
        "@id": \`\${SITE_URL}/marketing-za-racunovodje#breadcrumb\`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Početna", "item": SITE_URL },
          { "@type": "ListItem", "position": 2, "name": "Marketing za računovođe", "item": \`\${SITE_URL}/marketing-za-racunovodje\` }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": \`\${SITE_URL}/marketing-za-racunovodje#faq\`,
        "mainEntity": []
      }
    ]
  },
  '/marketing-za-autoservise': {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": \`\${SITE_URL}/marketing-za-autoservise#webpage\`,
        "url": \`\${SITE_URL}/marketing-za-autoservise\`,
        "name": "Marketing za Autoservise u Srbiji | Platinum Zenith",
        "description": "Marketing za autoservise u Srbiji: lokalni SEO, Google Ads, sajt i kampanje koje donose pozive i pune raspored.",
        "isPartOf": { "@id": \`\${SITE_URL}/#website\` },
        "about": { "@id": \`\${SITE_URL}/marketing-za-autoservise#service\` },
        "breadcrumb": { "@id": \`\${SITE_URL}/marketing-za-autoservise#breadcrumb\` }
      },
      {
        "@type": "Service",
        "@id": \`\${SITE_URL}/marketing-za-autoservise#service\`,
        "name": "Marketing za autoservise",
        "serviceType": "Automotive Marketing",
        "url": \`\${SITE_URL}/marketing-za-autoservise\`,
        "mainEntityOfPage": { "@id": \`\${SITE_URL}/marketing-za-autoservise#webpage\` },
        "provider": { "@id": \`\${SITE_URL}/#organization\` }
      },
      {
        "@type": "BreadcrumbList",
        "@id": \`\${SITE_URL}/marketing-za-autoservise#breadcrumb\`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Početna", "item": SITE_URL },
          { "@type": "ListItem", "position": 2, "name": "Marketing za autoservise", "item": \`\${SITE_URL}/marketing-za-autoservise\` }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": \`\${SITE_URL}/marketing-za-autoservise#faq\`,
        "mainEntity": []
      }
    ]
  },`;

content = content.replace(
  /'\/alati\/roi-kalkulator': \{ "@context"/,
  newSchemas + "\n  '/alati/roi-kalkulator': { \"@context\""
);

fs.writeFileSync('src/hooks/pageMetaData.js', content, 'utf8');
