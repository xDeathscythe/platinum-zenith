import fs from 'fs';

let ogMeta = fs.readFileSync('server/ogMeta.js', 'utf8');

const newSchemaOg = `  '/marketing-za-racunovodje': {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Marketing za računovodstvene agencije',
    serviceType: 'B2B marketing',
    url: \`\${SITE_URL}/marketing-za-racunovodje\`,
    areaServed: {
      '@type': 'Country',
      name: 'Srbija',
    },
    provider: {
      '@type': 'Organization',
      name: 'Platinum Zenith',
      url: SITE_URL,
    },
  },
  '/marketing-za-stomatologe': {`;

ogMeta = ogMeta.replace(/  '\/marketing-za-stomatologe': {\n    '@context': 'https:\/\/schema.org',/g, newSchemaOg + "\n    '@context': 'https://schema.org',");

const newOg = `  '/marketing-za-racunovodje': {
    title: 'Marketing za Računovodstvene Agencije u Srbiji | Platinum Zenith',
    description: 'Specijalizovani marketing za računovođe i knjigovođe u Srbiji. B2B Google Ads, SEO i LinkedIn strategije koje donose stabilne klijente.',
  },
  '/marketing-za-stomatologe': {`;

ogMeta = ogMeta.replace(/  '\/marketing-za-stomatologe': {\n    title: 'Marketing za Stomatologe u Srbiji \| Platinum Zenith',/g, newOg + "\n    title: 'Marketing za Stomatologe u Srbiji | Platinum Zenith',");

fs.writeFileSync('server/ogMeta.js', ogMeta, 'utf8');
