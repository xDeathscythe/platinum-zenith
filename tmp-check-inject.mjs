import { injectOgMeta } from './server/ogMeta.js';
const html = '<html><head><meta name="robots" content=""><meta property="og:description" content=""><meta name="twitter:description" content=""></head><body></body></html>';
const r = injectOgMeta(html, '/marketing-za-racunovodje');
const robots = r.match(/name="robots" content="([^"]*)"/);
const ogDesc = r.match(/og:description" content="([^"]*)"/);
const twDesc = r.match(/twitter:description" content="([^"]*)"/);
console.log('robots:', robots?.[1]);
console.log('ogDesc:', ogDesc?.[1]);
console.log('twDesc:', twDesc?.[1]);
