import fs from 'fs';

let ogMeta = fs.readFileSync('server/ogMeta.js', 'utf8');

const newOg = `
    '/marketing-za-racunovodje': {
      title: 'Marketing za Računovodstvene Agencije u Srbiji | Platinum Zenith',
      description: 'Specijalizovani marketing za računovođe i knjigovođe u Srbiji. B2B Google Ads, SEO i LinkedIn strategije koje donose stabilne klijente.',
    },
    '/marketing-za-stomatologe': {`;

ogMeta = ogMeta.replace(`    '/marketing-za-stomatologe': {`, newOg);

const newSchemaOg = `
    '/marketing-za-racunovodje': {
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

ogMeta = ogMeta.replace(`    '/marketing-za-stomatologe': {`, newSchemaOg);

fs.writeFileSync('server/ogMeta.js', ogMeta, 'utf8');

let blog = fs.readFileSync('src/pages/blog/blogData.js', 'utf8');
blog = blog.replace(
  `Tra?i vodoinstalatera, stomatologa, teretanu, racunovodu.`,
  `Tra?i vodoinstalatera, [marketing za stomatologe](/marketing-za-stomatologe), [marketing za teretane](/marketing-za-teretane), [marketing za racunovodje](/marketing-za-racunovodje).`
);
blog = blog.replace(
  `Traži vodoinstalatera, stomatologa, teretanu, racunovodu.`,
  `Traži vodoinstalatera, [marketing za stomatologe](/marketing-za-stomatologe), [marketing za teretane](/marketing-za-teretane), [marketing za racunovodje](/marketing-za-racunovodje).`
);
fs.writeFileSync('src/pages/blog/blogData.js', blog, 'utf8');
