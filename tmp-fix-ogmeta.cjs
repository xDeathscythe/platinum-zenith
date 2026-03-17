const fs = require('fs');
const path = 'C:/Users/Eventide/.openclaw/workspace-devona/projects/arcads-clone/server/ogMeta.js';
let content = fs.readFileSync(path, 'utf8');

// Add racunovodje to ogMeta (after teretane entry in the OG section)
const ogInsert = `  '/marketing-za-racunovodje': {
    title: 'Marketing za Računovodstvene Agencije u Srbiji | Platinum Zenith',
    description: 'Specijalizovani marketing za računovođe i knjigovođe u Srbiji. B2B Google Ads, SEO i LinkedIn strategije koje donose stabilne klijente.',
  },`;

content = content.replace(
  "  '/marketing-za-advokate': {\n    title: 'Marketing za Advokate",
  ogInsert + "\n  '/marketing-za-advokate': {\n    title: 'Marketing za Advokate"
);

// Add schema entry
const schemaInsert = `  '/marketing-za-racunovodje': {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Marketing za računovodstvene agencije',
    serviceType: 'Accounting firm marketing',
    url: 'https://platinumzenith.com/marketing-za-racunovodje',
    areaServed: { '@type': 'Country', name: 'Srbija' },
    provider: { '@id': 'https://platinumzenith.com#organization' },
  },`;

// Find a good insertion point in pageSchemas
content = content.replace(
  "  '/marketing-za-teretane': {\n    '@context': 'https://schema.org',\n    '@type': 'Service',\n    name: 'Marketing za teretane i fitnes studije',",
  schemaInsert + "\n  '/marketing-za-teretane': {\n    '@context': 'https://schema.org',\n    '@type': 'Service',\n    name: 'Marketing za teretane i fitnes studije',"
);

// Add breadcrumb entry
const breadcrumbInsert = `  '/marketing-za-racunovodje': [
    { name: 'Početna', url: 'https://platinumzenith.com/' },
    { name: 'Industrije', url: 'https://platinumzenith.com/industrije' },
    { name: 'Marketing za Računovođe', url: 'https://platinumzenith.com/marketing-za-racunovodje' },
  ],`;

content = content.replace(
  "  '/marketing-za-teretane': [\n",
  breadcrumbInsert + "\n  '/marketing-za-teretane': [\n"
);

fs.writeFileSync(path, content, 'utf8');
console.log('Added racunovodje to ogMeta.js');
