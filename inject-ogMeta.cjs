const fs = require('fs');
const file = 'server/ogMeta.js';
let content = fs.readFileSync(file, 'utf8');

const metaToAdd = `
  '/marketing-za-zanatlije': {
    title: 'Marketing za Majstore i Zanatlije (Električari, Vodoinstalateri) | Platinum Zenith',
    description: 'Specijalizovan digitalni marketing za zanatlije, električare, vodoinstalatere i keramičare. Google Ads za hitne intervencije, lokalni SEO i izrada brzih sajtova.',
    image: 'https://platinumzenith.com/og-images/default-og.png', // Fallback, would be nice to generate specific
    type: 'website'
  },`;

content = content.replace(
  "'/marketing-za-gradjevinske-firme': {",
  metaToAdd.trimStart() + "\n  '/marketing-za-gradjevinske-firme': {"
);

fs.writeFileSync(file, content, 'utf8');
console.log('ogMeta done!');
