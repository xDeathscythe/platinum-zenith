import { injectOgMeta } from './server/ogMeta.js';

const html = '<head><title>T</title><meta name="description" content="D"></head>';
console.log(injectOgMeta(html, '/marketing-za-racunovodje'));