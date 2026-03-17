const fs = require('fs');
const path = 'C:/Users/Eventide/.openclaw/workspace-devona/projects/arcads-clone/src/hooks/pageMetaData.js';
let content = fs.readFileSync(path, 'utf8');
content = content.replace(
  "keywords: 'marketing za racunovodje, knjigovodstvena agencija marketing, digitalni marketing racunovodstvo, b2b marketing srbija, seo za racunovodje',\n  },",
  "keywords: 'marketing za racunovodje, knjigovodstvena agencija marketing, digitalni marketing racunovodstvo, b2b marketing srbija, seo za racunovodje',\n    og: { title: 'Marketing za Računovodstvene Agencije u Srbiji | Platinum Zenith', description: 'Specijalizovani marketing za računovođe i knjigovođe u Srbiji. B2B Google Ads, SEO i LinkedIn strategije koje donose stabilne klijente.' },\n    twitter: { title: 'Marketing za Računovodstvene Agencije u Srbiji | Platinum Zenith', description: 'Specijalizovani marketing za računovođe i knjigovođe u Srbiji. B2B Google Ads, SEO i LinkedIn strategije koje donose stabilne klijente.' },\n  },"
);
fs.writeFileSync(path, content, 'utf8');
console.log('Added OG/Twitter meta for racunovodje');
