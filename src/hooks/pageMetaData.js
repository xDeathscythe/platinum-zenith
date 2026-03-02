/**
 * Page meta data — lazy loaded to keep index bundle small.
 * Contains pageMeta, pageSchemas, orgSchema, websiteSchema, setJsonLd
 */
const SITE_URL = 'https://platinumzenith.com'

export const pageMeta = {
  '/': {
    title: 'Platinum Zenith | Digitalna Agencija | Marketing, Web Design, Consulting',
    description: 'Privucite pažnju i generišite prodaju na lak, siguran i predvidljiv način. Zenith sistem za akviziciju klijenata.',
    keywords: 'digitalna agencija, marketing agencija, web design, Zrenjanin, Srbija, digitalni marketing, izrada sajta',
  },
  '/web-design': {
    title: 'Web Design & Izrada Sajta | Platinum Zenith',
    description: 'Sajtovi koji pretvaraju posetioce u klijente. +340% prosečan rast konverzija. PageSpeed 95+. Mobile-first dizajn.',
    keywords: 'web dizajn, izrada sajta, web development, WordPress, React, responsive dizajn, sajt koji prodaje',
  },
  '/digitalni-marketing': {
    title: 'Digitalni Marketing | Zenith Sistem | Platinum Zenith',
    description: 'Meta Ads, Google Ads, TikTok Ads. 15x ROAS prosek. Dokazan sistem za predvidljivu akviziciju klijenata.',
    keywords: 'digitalni marketing, Meta Ads, Google Ads, TikTok Ads, ROAS, PPC, online oglašavanje',
  },
  '/consulting': {
    title: 'Poslovno Savetovanje | Platinum Zenith',
    description: 'Biznis audit, strategija rasta i implementacija. Tražimo kočnice u vašem biznisu i pomažemo da ih razbijete.',
    keywords: 'poslovno savetovanje, biznis consulting, strategija rasta, audit, marketinška strategija',
  },
  '/cro': {
    title: 'CRO Optimizacija Konverzije | Platinum Zenith',
    description: 'Više klijenata, isti budžet. +300% prosečno poboljšanje konverzija. Heatmap analiza, A/B testovi, UX audit.',
    keywords: 'CRO, optimizacija konverzije, A/B testiranje, UX audit, heatmap, bounce rate',
  },
  '/kontakt': { title: 'Kontakt | Platinum Zenith', description: 'Zakažite besplatne konsultacije. aleksandar@platinumzenith.com. Ruže Šulman 19, Zrenjanin, Srbija.', keywords: 'kontakt, konsultacije, Platinum Zenith kontakt, Zrenjanin' },
  '/o-nama': { title: 'O Nama | Platinum Zenith', description: 'Digitalna agencija iz Zrenjanina. 50+ klijenata, 15x prosečan ROAS, 97% zadovoljstvo klijenata.', keywords: 'o nama, Platinum Zenith, digitalna agencija Zrenjanin, tim, misija' },
  '/case-studies': { title: 'Case Studies | Rezultati | Platinum Zenith', description: 'Pogledajte rezultate naših klijenata. +350% konverzije, €18,500/mesec prihod, 520% ROI.', keywords: 'case studies, rezultati, portfolio, referentni projekti, ROI' },
  '/paketi': { title: 'Paketi & Cene | Platinum Zenith', description: 'Starter €499/mesec, Growth €1,499/mesec, Enterprise custom. Transparentne cene bez skrivenih troškova.', keywords: 'cene, paketi, pricing, Starter, Growth, Enterprise' },
  '/uslovi-koriscenja': { title: 'Uslovi Korišćenja | Platinum Zenith', description: 'Uslovi korišćenja usluga Platinum Zenith Agency.', keywords: 'uslovi korišćenja, terms of service' },
  '/politika-privatnosti': { title: 'Politika Privatnosti | Platinum Zenith', description: 'Saznajte kako Platinum Zenith prikuplja, koristi i štiti vaše lične podatke. GDPR usklađeno.', keywords: 'politika privatnosti, privacy policy, GDPR' },
  '/drustvene-mreze': { title: 'Društvene Mreže | Instagram, Facebook, TikTok, LinkedIn | Platinum Zenith', description: 'Sadržaj koji algoritam nagrađuje i publiku pretvara u kupce.', keywords: 'društvene mreže, Instagram marketing, Facebook, TikTok, LinkedIn, SMM' },
  '/faq': { title: 'Česta Pitanja (FAQ) | Platinum Zenith', description: 'Odgovori na najčešća pitanja o saradnji, cenama, rokovima i procesu rada.', keywords: 'FAQ, česta pitanja' },
  '/blog': { title: 'Blog | Marketing Saveti i Strategije | Platinum Zenith', description: 'Praktični saveti o digitalnom marketingu, Facebook oglasima, SEO-u i rastu biznisa.', keywords: 'blog, marketing saveti, digitalni marketing blog' },
  '/industrije/e-commerce': { title: 'E-Commerce Marketing | Platinum Zenith', description: 'Kompletni sistemi za e-commerce brendove: Meta Ads, email automatizacija, CRO, retargeting.', keywords: 'e-commerce marketing, online prodavnica, ROAS' },
  '/industrije/saas': { title: 'SaaS Marketing | Platinum Zenith', description: 'Marketing za SaaS kompanije: akvizicija, aktivacija, retencija.', keywords: 'SaaS marketing, MRR rast, B2B marketing' },
  '/industrije/lokalni-biznisi': { title: 'Marketing za Lokalne Biznise | Platinum Zenith', description: 'Kad neko pretraži, vi se pojavite prvi. Google Business, lokalni SEO.', keywords: 'lokalni marketing, lokalni SEO, Google Business' },
  '/industrije/startapovi': { title: 'Marketing za Startapove | Platinum Zenith', description: 'Od validacije do skaliranja. Marketing za startape.', keywords: 'startup marketing, growth hacking' },
}

export const orgSchema = {
  "@context": "https://schema.org", "@type": "Organization", "name": "Platinum Zenith", "url": SITE_URL,
  "logo": `${SITE_URL}/pz-logo.svg`,
  "address": { "@type": "PostalAddress", "streetAddress": "Ruže Šulman 19", "addressLocality": "Zrenjanin", "addressCountry": "RS" },
  "contactPoint": { "@type": "ContactPoint", "email": "aleksandar@platinumzenith.com", "contactType": "customer service", "availableLanguage": ["Serbian", "English"] },
  "sameAs": []
}

export const websiteSchema = {
  "@context": "https://schema.org", "@type": "WebSite", "name": "Platinum Zenith", "url": SITE_URL,
  "potentialAction": { "@type": "SearchAction", "target": `${SITE_URL}/?s={search_term_string}`, "query-input": "required name=search_term_string" }
}

export const pageSchemas = {
  '/web-design': { "@context": "https://schema.org", "@type": "Service", "name": "Web Design & Izrada Sajta", "provider": { "@type": "Organization", "name": "Platinum Zenith" }, "serviceType": "Web Design" },
  '/digitalni-marketing': { "@context": "https://schema.org", "@type": "Service", "name": "Digitalni Marketing", "provider": { "@type": "Organization", "name": "Platinum Zenith" }, "serviceType": "Digital Marketing" },
  '/consulting': { "@context": "https://schema.org", "@type": "Service", "name": "Poslovno Savetovanje", "provider": { "@type": "Organization", "name": "Platinum Zenith" }, "serviceType": "Business Consulting" },
  '/cro': { "@context": "https://schema.org", "@type": "Service", "name": "CRO Optimizacija", "provider": { "@type": "Organization", "name": "Platinum Zenith" }, "serviceType": "Conversion Rate Optimization" },
  '/drustvene-mreze': { "@context": "https://schema.org", "@type": "Service", "name": "Upravljanje Društvenim Mrežama", "provider": { "@type": "Organization", "name": "Platinum Zenith" }, "serviceType": "Social Media Management" },
  '/paketi': { "@context": "https://schema.org", "@type": "OfferCatalog", "name": "Platinum Zenith Paketi", "itemListElement": [
    { "@type": "Offer", "name": "Starter", "price": "499", "priceCurrency": "EUR" },
    { "@type": "Offer", "name": "Growth", "price": "1499", "priceCurrency": "EUR" },
    { "@type": "Offer", "name": "Enterprise", "description": "Custom" }
  ]}
}

export function setJsonLd(id, data) {
  let el = document.getElementById(id)
  if (!el) { el = document.createElement('script'); el.id = id; el.type = 'application/ld+json'; document.head.appendChild(el) }
  el.textContent = JSON.stringify(data)
}

export { SITE_URL }
