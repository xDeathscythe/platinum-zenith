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
  '/kontakt': { title: 'Kontakt | Platinum Zenith', description: 'Kontaktirajte Platinum Zenith i zakažite besplatne konsultacije u Zrenjaninu. Pošaljite upit i dobijte konkretan plan rasta za vaš biznis.', keywords: 'kontakt, konsultacije, Platinum Zenith kontakt, Zrenjanin' },
  '/o-nama': { title: 'O Nama | Platinum Zenith', description: 'Upoznajte Platinum Zenith tim iz Zrenjanina: digitalni marketing, web design i consulting fokusiran na profitabilan rast i merljive rezultate.', keywords: 'o nama, Platinum Zenith, digitalna agencija Zrenjanin, tim, misija' },
  '/case-studies': { title: 'Case Studies | Rezultati | Platinum Zenith', description: 'Pogledajte realne rezultate klijenata Platinum Zenith agencije: rast konverzija, veći prihodi, bolji ROAS i jasni KPI pokazatelji po projektu.', keywords: 'case studies, rezultati, portfolio, referentni projekti, ROI' },
  '/paketi': { title: 'Paketi & Cene | Platinum Zenith', description: 'Starter €499/mesec, Growth €1,499/mesec, Enterprise custom. Transparentne cene bez skrivenih troškova.', keywords: 'cene, paketi, pricing, Starter, Growth, Enterprise' },
  '/uslovi-koriscenja': { title: 'Uslovi Korišćenja | Platinum Zenith', description: 'Pročitajte uslove korišćenja Platinum Zenith usluga, prava i obaveze korisnika, način saradnje, plaćanja i ograničenja odgovornosti.', keywords: 'uslovi korišćenja, terms of service' },
  '/uslovi-kupovine': { title: 'Uslovi Kupovine | Platinum Zenith', description: 'Uslovi kupovine za Platinum Zenith: ugovaranje putem email korespondencije, B2B model saradnje, reklamacije, isporuka i pravila realizacije.', keywords: 'uslovi kupovine, B2B kupovina, ugovaranje emailom, reklamacije' },
  '/nacin-placanja': { title: 'Način Plaćanja | Platinum Zenith', description: 'Način plaćanja za Platinum Zenith: virmansko plaćanje za pravna lica i izdavanje fakture nakon sklopljenog dogovora putem emaila.', keywords: 'način plaćanja, virman, pravna lica, faktura, B2B' },
  '/dostava': { title: 'Dostava | Platinum Zenith', description: 'Uslovi dostave i realizacije: isporuka nakon potvrđenog dogovora, rokovi, troškovi i proces za fizičku robu i digitalne usluge.', keywords: 'dostava, isporuka, rokovi, digitalne usluge, fizička roba' },
  '/politika-privatnosti': { title: 'Politika Privatnosti | Platinum Zenith', description: 'Saznajte kako Platinum Zenith prikuplja, koristi i štiti vaše lične podatke. GDPR usklađeno.', keywords: 'politika privatnosti, privacy policy, GDPR' },
  '/drustvene-mreze': { title: 'Društvene Mreže | Instagram, Facebook, TikTok, LinkedIn | Platinum Zenith', description: 'Instagram, Facebook, TikTok i LinkedIn strategije koje grade publiku, podižu engagement i pretvaraju pratioce u kupce.', keywords: 'društvene mreže, Instagram marketing, Facebook, TikTok, LinkedIn, SMM' },
  '/faq': { title: 'Česta Pitanja (FAQ) | Platinum Zenith', description: 'Česta pitanja o saradnji sa Platinum Zenith agencijom: proces rada, cene, rokovi, komunikacija, izveštavanje i merljivi rezultati.', keywords: 'FAQ, česta pitanja' },
  '/blog': { title: 'Blog | Marketing Saveti i Strategije | Platinum Zenith', description: 'Blog o digitalnom marketingu, prodaji i rastu biznisa: praktične strategije, studije slučaja, SEO i Meta/Google Ads saveti.', keywords: 'blog, marketing saveti, digitalni marketing blog' },
  '/industrije/e-commerce': { title: 'E-Commerce Marketing | Platinum Zenith', description: 'Kompletni sistemi za e-commerce brendove: Meta Ads, email automatizacija, CRO, retargeting.', keywords: 'e-commerce marketing, online prodavnica, ROAS' },
  '/industrije/saas': { title: 'SaaS Marketing | Platinum Zenith', description: 'SaaS marketing za brži MRR rast: akvizicija korisnika, onboarding, aktivacija, retencija i smanjenje churn-a kroz full-funnel strategiju.', keywords: 'SaaS marketing, MRR rast, B2B marketing' },
  '/industrije/lokalni-biznisi': { title: 'Marketing za Lokalne Biznise | Platinum Zenith', description: 'Marketing za lokalne biznise: Google Business optimizacija, lokalni SEO, oglasi i kampanje koje dovode više poziva i upita.', keywords: 'lokalni marketing, lokalni SEO, Google Business' },
  '/industrije/startapovi': { title: 'Marketing za Startapove | Platinum Zenith', description: 'Marketing za startapove od validacije ideje do skaliranja: pozicioniranje, akvizicija prvih korisnika i ubrzanje product-market fit-a.', keywords: 'startup marketing, growth hacking' },
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
