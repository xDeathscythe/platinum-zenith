const fs = require('fs');
const path = 'src/pages/blog/blogData.js';
let text = fs.readFileSync(path, 'utf8');

const replacements = [
  {
    titleNeedle: "title: 'Instagram Ads cena po kliku u Srbiji 2026: realni CPC rasponi i bud",
    fromSlug: "slug: 'instagram-ads-cena-po-kliku-srbija-2026'",
    toSlug: "slug: 'instagram-ads-cpc-budzet-plan-srbija-2026'"
  },
  {
    titleNeedle: "title: 'Vodjenje Google Ads kampanja cena u Srbiji 2026: sta ulazi u fee i kako da izaberes partnera'",
    fromSlug: "slug: 'vodjenje-google-ads-kampanja-cena-srbija-2026'",
    toSlug: "slug: 'vodjenje-google-ads-kampanja-fee-izbor-partnera-srbija-2026'"
  }
];

for (const r of replacements) {
  const titleIdx = text.indexOf(r.titleNeedle);
  if (titleIdx === -1) {
    throw new Error(`Title marker not found: ${r.titleNeedle}`);
  }

  const windowStart = Math.max(0, titleIdx - 260);
  const windowEnd = Math.min(text.length, titleIdx + 260);
  const chunk = text.slice(windowStart, windowEnd);

  if (!chunk.includes(r.fromSlug)) {
    throw new Error(`Expected slug near title not found: ${r.fromSlug}`);
  }

  const updatedChunk = chunk.replace(r.fromSlug, r.toSlug);
  text = text.slice(0, windowStart) + updatedChunk + text.slice(windowEnd);
}

fs.writeFileSync(path, text, 'utf8');
console.log('Updated duplicate slugs in blogData.js');
