/**
 * add-internal-links.js
 * Adds contextual internal links to blog post content in blogData.js
 * Each post gets 1-2 relevant service page links + 1 related blog link
 * placed in the closing paragraph (before the existing CTA).
 */
import { readFileSync, writeFileSync } from 'fs'

const FILE = 'src/pages/blog/blogData.js'
let src = readFileSync(FILE, 'utf-8')

// Service page link templates by category/topic relevance
const serviceLinks = {
  // Marketing category posts → link to digitalni-marketing service
  marketing: {
    text: 'Saznajte više o našem [pristupu digitalnom marketingu](/digitalni-marketing) i kako gradimo kampanje koje donose merljive rezultate.',
    alt: 'Pogledajte kako [naš marketing tim](/digitalni-marketing) strukturira kampanje za predvidljiv rast.',
  },
  // CRO category posts → link to CRO service
  cro: {
    text: 'Detaljnije o našem [CRO procesu](/cro) i kako optimizujemo konverzije za klijente.',
    alt: 'Pogledajte naš [pristup optimizaciji konverzija](/cro) koji donosi rezultate bez povećanja budžeta.',
  },
  // SEO category posts → link to digitalni-marketing (covers SEO)
  seo: {
    text: 'Pogledajte kako [naš SEO pristup](/digitalni-marketing) pomaže klijentima da se pojave prvi na pretrazi.',
    alt: 'Saznajte više o [kompletnom digitalnom marketing sistemu](/digitalni-marketing) koji uključuje SEO, oglase i sadržaj.',
  },
  // Business/strategy posts → link to consulting
  biznis: {
    text: 'Ako želite strukturiran pogled na vaš biznis, pogledajte naš [consulting program](/consulting).',
    alt: 'Saznajte kako naš [program poslovnog savetovanja](/consulting) pomaže firmama da probiju plato rasta.',
  },
  // Web/landing/design related → link to web-design
  web: {
    text: 'Pogledajte naš [web design pristup](/web-design) i kako pravimo sajtove koji pretvaraju posetioce u klijente.',
    alt: 'Detaljnije o [izradi sajtova](/web-design) koji su optimizovani za konverziju od prvog dana.',
  },
  // Social media related → link to drustvene-mreze
  social: {
    text: 'Saznajte kako [upravljamo društvenim mrežama](/drustvene-mreze) za firme koje žele rezultate, ne samo pratioce.',
    alt: 'Pogledajte naš [pristup društvenim mrežama](/drustvene-mreze) koji pretvara engagement u prodaju.',
  },
}

// Related blog post suggestions (slug → related slugs)
const relatedBlogLinks = {
  'copywriting-formule-koje-rade': 'facebook-oglasi-koji-zapravo-rade',
  'ab-testiranje-male-promene-veliki-rezultati': '5-gresaka-landing-stranice-konverzije',
  'kako-meriti-roi-marketinga-kpi-vodic': 'kako-citati-marketing-izvestaj',
  'lead-magneti-koji-zapravo-konvertuju': 'email-marketing-kralj-konverzija',
  'brending-za-male-firme-identitet-vazniji-od-loga': 'social-proof-recenzije-za-vise-prodaje',
  'video-marketing-zasto-video-dominira': 'ugc-buducnost-oglasa',
  'seo-vs-ppc-sta-je-bolje-za-dugorocni-rast': 'lokalni-seo-kako-se-pojaviti-prvi',
  'psihologija-zaradjivanja-mentalni-blokovi': 'ponuda-koju-niko-ne-moze-da-odbije',
  'komunikacija-u-prodaji-kako-napisati-ponudu': 'kako-napisati-ponudu-koja-zatvara-posao',
  'kako-izabrati-pravu-marketing-agenciju': 'koliko-kosta-los-marketing',
  'social-proof-recenzije-za-vise-prodaje': 'customer-retention-zadrzati-vs-naci-novog',
  'retargeting-zasto-95-posetilaca-ne-kupi': 'sales-funnel-koji-radi-na-autopilotu',
  'customer-retention-zadrzati-vs-naci-novog': 'email-marketing-kralj-konverzija',
  '17-godina-marketing-iskustva': '17-godina-marketing-iskustva-u-jednom-tekstu',
  '13-godina-poslovnog-iskustva-najskuplje-greske': 'od-nule-do-prvog-miliona-konkretni-koraci',
  'od-nule-do-prvog-miliona-konkretni-koraci': 'kako-se-kretati-10x-brze-kao-vlasnik-firme',
  'kako-se-kretati-10x-brze-kao-vlasnik-firme': 'zasto-vecina-firmi-stagnira-posle-prvog-miliona',
  'zasto-vecina-firmi-stagnira-posle-prvog-miliona': 'od-nule-do-prvih-10000-evra-mesecno',
  'od-nule-do-prvih-10000-evra-mesecno': 'kako-napraviti-marketing-budzet-koji-ima-smisla',
  'pricing-psihologija-kontrola-percepcije-cene': 'pricing-psihologija-kako-luksuzni-brendovi-kontrolisu-percepciju-cene',
  'ponuda-koju-niko-ne-moze-da-odbije': 'komunikacija-u-prodaji-kako-napisati-ponudu',
  'organski-doseg-umire-sta-raditi': 'content-marketing-dugorocna-investicija',
  'google-ads-vs-facebook-ads-koji-je-bolji': 'facebook-vs-instagram-oglasi-gde-je-vasa-publika',
  'content-marketing-dugorocna-investicija': 'seo-vs-ppc-sta-je-bolje-za-dugorocni-rast',
  'sales-funnel-koji-radi-na-autopilotu': 'lead-magneti-koji-zapravo-konvertuju',
  'lokalni-seo-kako-se-pojaviti-prvi': 'lokalni-biznis-vs-online-hibridna-strategija',
  'email-marketing-kralj-konverzija': 'automatizacija-marketinga-sta-mozete-delegirati-masini',
  '5-gresaka-landing-stranice-konverzije': 'kako-napraviti-landing-stranicu-koja-konvertuje',
  'facebook-oglasi-koji-zapravo-rade': 'piramida-kupaca-4-tipa-publike',
  'piramida-kupaca-4-tipa-publike': 'retargeting-zasto-95-posetilaca-ne-kupi',
  'pricing-psihologija-kako-luksuzni-brendovi-kontrolisu-percepciju-cene': 'pricing-psihologija-kontrola-percepcije-cene',
  '17-godina-marketing-iskustva-u-jednom-tekstu': '13-godina-poslovnog-iskustva-najskuplje-greske',
  'kako-napraviti-marketing-budzet-koji-ima-smisla': 'koliko-kosta-los-marketing',
  'ugc-buducnost-oglasa': 'video-marketing-zasto-video-dominira',
  'automatizacija-marketinga-sta-mozete-delegirati-masini': 'sales-funnel-koji-radi-na-autopilotu',
  'lokalni-biznis-vs-online-hibridna-strategija': 'lokalni-seo-kako-se-pojaviti-prvi',
  'kako-citati-marketing-izvestaj': 'kako-meriti-roi-marketinga-kpi-vodic',
  'zasto-vas-sajt-ne-prodaje': 'ab-testiranje-male-promene-veliki-rezultati',
  'kako-napisati-ponudu-koja-zatvara-posao': 'ponuda-koju-niko-ne-moze-da-odbije',
  'facebook-vs-instagram-oglasi-gde-je-vasa-publika': 'organski-doseg-umire-sta-raditi',
  'koliko-kosta-los-marketing': 'kako-napraviti-marketing-budzet-koji-ima-smisla',
  'kako-napraviti-landing-stranicu-koja-konvertuje': 'zasto-vas-sajt-ne-prodaje',
}

// Slug → which service link category to use
const slugServiceMap = {
  'copywriting-formule-koje-rade': 'marketing',
  'ab-testiranje-male-promene-veliki-rezultati': 'cro',
  'kako-meriti-roi-marketinga-kpi-vodic': 'marketing',
  'lead-magneti-koji-zapravo-konvertuju': 'marketing',
  'brending-za-male-firme-identitet-vazniji-od-loga': 'marketing',
  'video-marketing-zasto-video-dominira': 'social',
  'seo-vs-ppc-sta-je-bolje-za-dugorocni-rast': 'seo',
  'psihologija-zaradjivanja-mentalni-blokovi': 'biznis',
  'komunikacija-u-prodaji-kako-napisati-ponudu': 'biznis',
  'kako-izabrati-pravu-marketing-agenciju': 'marketing',
  'social-proof-recenzije-za-vise-prodaje': 'cro',
  'retargeting-zasto-95-posetilaca-ne-kupi': 'marketing',
  'customer-retention-zadrzati-vs-naci-novog': 'marketing',
  '17-godina-marketing-iskustva': 'biznis',
  '13-godina-poslovnog-iskustva-najskuplje-greske': 'biznis',
  'od-nule-do-prvog-miliona-konkretni-koraci': 'biznis',
  'kako-se-kretati-10x-brze-kao-vlasnik-firme': 'biznis',
  'zasto-vecina-firmi-stagnira-posle-prvog-miliona': 'biznis',
  'od-nule-do-prvih-10000-evra-mesecno': 'biznis',
  'pricing-psihologija-kontrola-percepcije-cene': 'biznis',
  'ponuda-koju-niko-ne-moze-da-odbije': 'biznis',
  'organski-doseg-umire-sta-raditi': 'social',
  'google-ads-vs-facebook-ads-koji-je-bolji': 'marketing',
  'content-marketing-dugorocna-investicija': 'seo',
  'sales-funnel-koji-radi-na-autopilotu': 'marketing',
  'lokalni-seo-kako-se-pojaviti-prvi': 'seo',
  'email-marketing-kralj-konverzija': 'marketing',
  '5-gresaka-landing-stranice-konverzije': 'web',
  'facebook-oglasi-koji-zapravo-rade': 'marketing',
  'piramida-kupaca-4-tipa-publike': 'marketing',
  'pricing-psihologija-kako-luksuzni-brendovi-kontrolisu-percepciju-cene': 'biznis',
  '17-godina-marketing-iskustva-u-jednom-tekstu': 'biznis',
  'kako-napraviti-marketing-budzet-koji-ima-smisla': 'biznis',
  'ugc-buducnost-oglasa': 'social',
  'automatizacija-marketinga-sta-mozete-delegirati-masini': 'marketing',
  'lokalni-biznis-vs-online-hibridna-strategija': 'marketing',
  'kako-citati-marketing-izvestaj': 'marketing',
  'zasto-vas-sajt-ne-prodaje': 'web',
  'kako-napisati-ponudu-koja-zatvara-posao': 'biznis',
  'facebook-vs-instagram-oglasi-gde-je-vasa-publika': 'social',
  'koliko-kosta-los-marketing': 'marketing',
  'kako-napraviti-landing-stranicu-koja-konvertuje': 'web',
}

// Blog post title lookup
const titleMap = {}
const titleRegex = /slug:\s*'([^']+)',\s*\n\s*title:\s*'([^']+)'/g
let m
while ((m = titleRegex.exec(src)) !== null) {
  titleMap[m[1]] = m[2]
}

let updated = 0

for (const [slug, serviceCat] of Object.entries(slugServiceMap)) {
  const svc = serviceLinks[serviceCat]
  if (!svc) continue

  const relatedSlug = relatedBlogLinks[slug]
  const relatedTitle = relatedSlug ? titleMap[relatedSlug] : null

  // Build the internal links paragraph
  let linkParagraph = svc.text
  if (relatedTitle && relatedSlug) {
    linkParagraph += `\n\nTakođe preporučujemo: [${relatedTitle}](/blog/${relatedSlug}).`
  }

  // Find the CTA line for this post and insert links before it
  const ctaPattern = `Želite da`
  const altCtaPattern = `Želite`

  // Find this post's content section
  const slugEscaped = slug.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const postRegex = new RegExp(`slug:\\s*'${slugEscaped}'[\\s\\S]*?content:\\s*\`([\\s\\S]*?)\``, 'm')
  const postMatch = postRegex.exec(src)

  if (!postMatch) {
    console.log(`SKIP (not found): ${slug}`)
    continue
  }

  const content = postMatch[1]

  // Check if internal links already exist
  if (content.includes('/digitalni-marketing)') || content.includes('/consulting)') ||
      content.includes('/web-design)') || content.includes('/cro)') ||
      content.includes('/drustvene-mreze)') || content.includes('/blog/')) {
    console.log(`SKIP (already linked): ${slug}`)
    continue
  }

  // Find the last "---" separator before the CTA
  const lastSepIdx = content.lastIndexOf('---')
  if (lastSepIdx === -1) {
    console.log(`SKIP (no separator): ${slug}`)
    continue
  }

  // Insert link paragraph before the separator
  const newContent = content.slice(0, lastSepIdx) + linkParagraph + '\n\n' + content.slice(lastSepIdx)

  src = src.replace(content, newContent)
  updated++
  console.log(`UPDATED: ${slug} → [${serviceCat}]${relatedSlug ? ' + related: ' + relatedSlug : ''}`)
}

writeFileSync(FILE, src, 'utf-8')
console.log(`\nDone. Updated ${updated} posts.`)
