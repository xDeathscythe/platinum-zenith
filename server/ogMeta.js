/**
 * Server-side OG meta data for social media crawlers.
 * Crawlers (Facebook, Twitter, LinkedIn) don't execute JS,
 * so we inject correct OG tags per route at the server level.
 */
import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dir = dirname(__filename)

const SITE_URL = 'https://platinumzenith.com'
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`
const DEFAULT_OG_IMAGE_ALT = 'Platinum Zenith - Digitalna agencija iz Zrenjanina'

const CORE_ORG_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Platinum Zenith',
  url: SITE_URL,
  logo: `${SITE_URL}/pz-icon.webp`,
  email: 'aleksandar@platinumzenith.com',
  telephone: '+381668168929',
  areaServed: {
    '@type': 'Country',
    name: 'Srbija',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: 'aleksandar@platinumzenith.com',
      telephone: '+381668168929',
      availableLanguage: ['sr', 'en'],
      areaServed: 'RS',
      url: `${SITE_URL}/kontakt`,
    },
  ],
}

const CORE_LOCAL_BUSINESS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Platinum Zenith',
  url: SITE_URL,
  image: `${SITE_URL}/pz-og.jpg`,
  email: 'aleksandar@platinumzenith.com',
  telephone: '+381668168929',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Zrenjanin',
    addressCountry: 'RS',
  },
  areaServed: {
    '@type': 'Country',
    name: 'Srbija',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    email: 'aleksandar@platinumzenith.com',
    telephone: '+381668168929',
    availableLanguage: ['sr', 'en'],
    areaServed: 'RS',
    url: `${SITE_URL}/kontakt`,
  },
}

const HOMEPAGE_WEBSITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Platinum Zenith',
  url: SITE_URL,
  inLanguage: 'sr-RS',
  potentialAction: {
    '@type': 'SearchAction',
    target: `${SITE_URL}/blog?search={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
}

const SERVER_ROUTE_SCHEMAS = {
  '/alati/roi-kalkulator': {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'ROI Kalkulator za Marketing',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'EUR',
    },
    description: 'Besplatan interaktivni kalkulator za izračunavanje povrata investicije u marketing.',
    url: `${SITE_URL}/alati/roi-kalkulator`,
    provider: {
      '@type': 'Organization',
      name: 'Platinum Zenith',
      url: SITE_URL,
    },
  },
  '/case-studies': {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Studije slučaja | Platinum Zenith',
    url: `${SITE_URL}/case-studies`,
    inLanguage: 'sr-RS',
    about: {
      '@type': 'Organization',
      name: 'Platinum Zenith',
      url: SITE_URL,
    },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          item: {
            '@type': 'CreativeWork',
            name: 'Grubin Showroom — studija slučaja',
            url: `${SITE_URL}/case-studies#study-1`,
          },
        },
        {
          '@type': 'ListItem',
          position: 2,
          item: {
            '@type': 'CreativeWork',
            name: 'Ordinacija Medifizio — studija slučaja',
            url: `${SITE_URL}/case-studies#study-2`,
          },
        },
        {
          '@type': 'ListItem',
          position: 3,
          item: {
            '@type': 'CreativeWork',
            name: 'Focus Fizikal — studija slučaja',
            url: `${SITE_URL}/case-studies#study-3`,
          },
        },
      ],
    },
  },
  '/digitalni-marketing': {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Digitalni marketing usluge',
    serviceType: 'Digitalni marketing',
    url: `${SITE_URL}/digitalni-marketing`,
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
  '/web-design': {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Web design i izrada sajtova',
    serviceType: 'Web design',
    url: `${SITE_URL}/web-design`,
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
  '/consulting': {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Poslovni consulting',
    serviceType: 'Business consulting',
    url: `${SITE_URL}/consulting`,
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
  '/cro': {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'CRO optimizacija konverzije',
    serviceType: 'Conversion rate optimization',
    url: `${SITE_URL}/cro`,
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
  '/drustvene-mreze': {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Vođenje društvenih mreža',
    serviceType: 'Social media management',
    url: `${SITE_URL}/drustvene-mreze`,
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
  '/google-reklame-cena': {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Google Ads upravljanje kampanjama',
    serviceType: 'Google Ads management',
    url: `${SITE_URL}/google-reklame-cena`,
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
  '/instagram-reklame-cena': {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Instagram oglašavanje i optimizacija kampanja',
    serviceType: 'Instagram advertising',
    url: `${SITE_URL}/instagram-reklame-cena`,
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
  '/izrada-wordpress-sajta-cena': {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Izrada WordPress sajtova',
    serviceType: 'WordPress website development',
    url: `${SITE_URL}/izrada-wordpress-sajta-cena`,
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
  '/marketing-za-advokate': {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Marketing za advokatske kancelarije',
    serviceType: 'Legal marketing',
    url: `${SITE_URL}/marketing-za-advokate`,
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
  '/marketing-za-stomatologe': {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Marketing za stomatološke ordinacije',
    serviceType: 'Dental marketing',
    url: `${SITE_URL}/marketing-za-stomatologe`,
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
  '/marketing-za-restorane': {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Marketing za restorane',
    serviceType: 'Restaurant marketing',
    url: `${SITE_URL}/marketing-za-restorane`,
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
  '/marketing-agencija-beograd': {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Marketing agencija Beograd',
    serviceType: 'Digital marketing agency services',
    url: `${SITE_URL}/marketing-agencija-beograd`,
    areaServed: {
      '@type': 'City',
      name: 'Beograd',
    },
    provider: {
      '@type': 'Organization',
      name: 'Platinum Zenith',
      url: SITE_URL,
    },
  },
  '/marketing-agencija-zrenjanin': {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Marketing agencija Zrenjanin',
    serviceType: 'Digital marketing agency services',
    url: `${SITE_URL}/marketing-agencija-zrenjanin`,
    areaServed: {
      '@type': 'City',
      name: 'Zrenjanin',
    },
    provider: {
      '@type': 'Organization',
      name: 'Platinum Zenith',
      url: SITE_URL,
    },
  },
  '/marketing-agencija-novi-sad': {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Marketing agencija Novi Sad',
    serviceType: 'Digital marketing agency services',
    url: `${SITE_URL}/marketing-agencija-novi-sad`,
    areaServed: {
      '@type': 'City',
      name: 'Novi Sad',
    },
    provider: {
      '@type': 'Organization',
      name: 'Platinum Zenith',
      url: SITE_URL,
    },
  },
  '/in-house-tim-vs-agencija': {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Strategijsko savetovanje: in-house tim vs agencija',
    serviceType: 'Marketing strategy consulting',
    url: `${SITE_URL}/in-house-tim-vs-agencija`,
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
  '/fiksna-naknada-vs-revenue-share': {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Strategijsko savetovanje: fiksna naknada vs revenue share',
    serviceType: 'Marketing pricing strategy consulting',
    url: `${SITE_URL}/fiksna-naknada-vs-revenue-share`,
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
  '/seo-optimizacija-cena': {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'SEO optimizacija cena',
    serviceType: 'SEO services',
    url: `${SITE_URL}/seo-optimizacija-cena`,
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
  '/cene-izrade-sajta': {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Cene izrade sajta',
    serviceType: 'Website development pricing',
    url: `${SITE_URL}/cene-izrade-sajta`,
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
  '/cene-digitalnog-marketinga': {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Cene digitalnog marketinga',
    serviceType: 'Digital marketing pricing',
    url: `${SITE_URL}/cene-digitalnog-marketinga`,
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
  '/koliko-kosta-facebook-reklama': {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Facebook oglašavanje cena',
    serviceType: 'Facebook ads management',
    url: `${SITE_URL}/koliko-kosta-facebook-reklama`,
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
  '/facebook-oglasi-ne-rade': {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Audit i optimizacija Facebook oglasa',
    serviceType: 'Facebook ads optimization',
    url: `${SITE_URL}/facebook-oglasi-ne-rade`,
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
  '/web-shop-nema-prodaju': {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Audit i optimizacija web shop konverzije',
    serviceType: 'E-commerce conversion optimization',
    url: `${SITE_URL}/web-shop-nema-prodaju`,
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
}


// Load blog post data for dynamic OG meta on /blog/:slug
let blogOgPosts = []
try {
  const raw = readFileSync(join(__dir, 'blogOgData.json'), 'utf8')
  blogOgPosts = JSON.parse(raw)
} catch { /* blogOgData.json not yet generated — blog OG falls back to generic */ }

const INTERNAL_NOINDEX_PATHS = new Set([
  '/dashboard',
  '/prijave',
  '/poruke',
  '/newsletter',
  '/emails',
  '/analytics',
])

const ogMeta = {
  '/': {
    title: 'Platinum Zenith | Digitalna Agencija | Marketing, Web Design, Consulting',
    description: 'Privucite pažnju i generišite prodaju kroz Zenith sistem za akviziciju klijenata: digitalni marketing, web design i consulting sa merljivim rezultatima.',
  },
  '/web-design': {
    title: 'Web Design & Izrada Sajta | Platinum Zenith',
    description: 'Sajtovi koji pretvaraju posetioce u klijente uz mobile-first UX, PageSpeed 95+ i strukturu koja podiže upite, prodaju i dugoročnu SEO vidljivost.',
  },
  '/digitalni-marketing': {
    title: 'Digitalni Marketing | Zenith Sistem | Platinum Zenith',
    description: 'Meta Ads, Google Ads i TikTok Ads kampanje sa jasnim KPI-jevima, optimizacijom budžeta i sistemom koji donosi predvidljivu akviziciju klijenata.',
  },
  '/consulting': {
    title: 'Poslovno Savetovanje | Platinum Zenith',
    description: 'Biznis konsultacije za vlasnike firmi: audit, strategija rasta i implementacija kroz jasne akcione korake koji uklanjaju uska grla i podižu profit.',
  },
  '/cro': {
    title: 'CRO Optimizacija Konverzije | Platinum Zenith',
    description: 'CRO optimizacija koja diže broj upita i prodaja bez većeg budžeta: heatmap analiza, A/B testovi, UX audit i konkretne iteracije za rast konverzije.',
  },
  '/kontakt': {
    title: 'Kontakt i Besplatna Konsultacija | Platinum Zenith',
    description: 'Kontaktirajte Platinum Zenith i zakažite besplatne konsultacije u Zrenjaninu. Pošaljite upit i dobijte konkretan plan rasta za vaš biznis.',
  },
  '/o-nama': {
    title: 'O Nama i Naš Pristup Rastu Biznisa | Platinum Zenith',
    description: 'Upoznajte Platinum Zenith tim iz Zrenjanina: digitalni marketing, web design i consulting fokusiran na profitabilan rast i merljive rezultate.',
  },
  '/case-studies': {
    title: 'Case Studies | Rezultati | Platinum Zenith',
    description: 'Studije slučaja sa realnim rezultatima klijenata: rast prihoda, niži trošak po kupovini i bolji ROI kroz digitalni marketing, web sajt i CRO optimizaciju.',
  },
  '/uslovi-koriscenja': {
    title: 'Uslovi Korišćenja | Platinum Zenith',
    description: 'Pročitajte uslove korišćenja Platinum Zenith usluga, prava i obaveze korisnika, način saradnje, plaćanja i ograničenja odgovornosti.',
  },
  '/uslovi-kupovine': {
    title: 'Uslovi Kupovine i Saradnje | Platinum Zenith',
    description: 'Uslovi kupovine za Platinum Zenith: ugovaranje putem email korespondencije, B2B model saradnje, reklamacije, isporuka i pravila realizacije.',
  },
  '/nacin-placanja': {
    title: 'Način Plaćanja i Fakturisanje | Platinum Zenith',
    description: 'Način plaćanja za Platinum Zenith: virmansko plaćanje za pravna lica i izdavanje fakture nakon sklopljenog dogovora putem emaila.',
  },
  '/dostava': {
    title: 'Dostava i Rokovi Realizacije | Platinum Zenith',
    description: 'Uslovi dostave i realizacije: isporuka nakon potvrđenog dogovora, rokovi, troškovi i proces za fizičku robu i digitalne usluge.',
  },
  '/politika-privatnosti': {
    title: 'Politika Privatnosti | Platinum Zenith',
    description: 'Politika privatnosti Platinum Zenith agencije: kako prikupljamo, obrađujemo i štitimo lične podatke, koja su vaša prava i kako ostvarujete GDPR zaštitu.',
  },
  '/drustvene-mreze': {
    title: 'Društvene Mreže | Instagram, Facebook, TikTok, LinkedIn | Platinum Zenith',
    description: 'Instagram, Facebook, TikTok i LinkedIn strategije za firme u Srbiji: content, community i plaćene kampanje koje podižu engagement, upite i prodaju.',
  },
  '/faq': {
    title: 'Česta Pitanja (FAQ) | Platinum Zenith',
    description: 'Česta pitanja o saradnji sa Platinum Zenith agencijom: proces rada, cene, rokovi, komunikacija, izveštavanje i merljivi rezultati.',
  },
  '/blog': {
    title: 'Blog | Marketing Saveti i Strategije | Platinum Zenith',
    description: 'Blog o digitalnom marketingu, prodaji i rastu biznisa: praktične strategije, studije slučaja, SEO i Meta/Google Ads saveti.',
  },
  '/industrije/e-commerce': {
    title: 'E-Commerce Marketing | Platinum Zenith',
    description: 'E-commerce marketing sistemi za online prodavnice: Meta Ads, email automatizacija, CRO i retargeting koji povećavaju konverzije i vrednost porudžbine.',
  },
  '/industrije/saas': {
    title: 'SaaS Marketing za Rast MRR-a | Platinum Zenith',
    description: 'SaaS marketing za brži MRR rast: akvizicija korisnika, onboarding, aktivacija, retencija i smanjenje churn-a kroz full-funnel strategiju.',
  },
  '/industrije/lokalni-biznisi': {
    title: 'Marketing za Lokalne Biznise | Platinum Zenith',
    description: 'Marketing za lokalne biznise: Google Business optimizacija, lokalni SEO, oglasi i kampanje koje dovode više poziva i upita.',
  },
  '/industrije/startapovi': {
    title: 'Marketing za Startapove | Platinum Zenith',
    description: 'Marketing za startapove od validacije ideje do skaliranja: pozicioniranje, akvizicija prvih korisnika i ubrzanje product-market fit-a.',
  },
  '/marketing-agencija-beograd': {
    title: 'Marketing Agencija za Beograd | Digitalni Marketing | Platinum Zenith',
    description: 'Marketing agencija za Beograd: SEO, Google Ads, Meta Ads i landing stranice koje povećavaju kvalifikovane upite, uz mesečne izveštaje i jasan ROI po kanalu.',
    ogImage: `${SITE_URL}/pz-og.jpg`,
    ogImageAlt: 'Marketing agencija Beograd - SEO i oglasi za rast upita',
  },
  '/seo-optimizacija-cena': {
    title: 'Koliko Košta SEO Optimizacija u Srbiji 2026 | Cene SEO | Platinum Zenith',
    description: 'Realne cene SEO optimizacije u Srbiji: osnovni paketi od 300€, napredni od 500€ i premium od 1.200€ mesečno, uz audit sajta i plan rasta pozicija.',
    ogImage: `${SITE_URL}/pz-og.jpg`,
    ogImageAlt: 'SEO optimizacija cena u Srbiji 2026 - vodič kroz pakete',
  },
  '/marketing-agencija-zrenjanin': {
    title: 'Marketing Agencija Zrenjanin | Digitalni Marketing | Platinum Zenith',
    description: 'Digitalni marketing u Zrenjaninu za lokalne firme: SEO, Google Ads, društvene mreže i optimizacija sajta koja donosi više poziva, upita i prodaja.',
    ogImage: `${SITE_URL}/pz-og.jpg`,
    ogImageAlt: 'Marketing agencija Zrenjanin - lokalni rast kroz SEO i oglase',
  },
  '/cene-izrade-sajta': {
    title: 'Koliko Košta Izrada Sajta u Srbiji 2026 | Cene i Vodič | Platinum Zenith',
    description: 'Realne cene izrade sajta u Srbiji za 2026. Prezentacioni sajt od 300€, poslovni od 800€, web shop od 1.500€. Vodič kroz cene bez skrivenih troškova.',
    ogImage: `${SITE_URL}/pz-og.jpg`,
    ogImageAlt: 'Koliko košta izrada sajta u Srbiji - cenovni vodič 2026',
  },
  '/agencija-vs-freelancer': {
    title: 'Agencija ili Freelancer? Uporedni Vodič za 2026 | Platinum Zenith',
    description: 'Agencija vs freelancer: realno poređenje po ceni, kvalitetu, rokovima i pouzdanosti. Konkretni saveti za firme u Srbiji.',
  },
  '/cene-digitalnog-marketinga': {
    title: 'Koliko Košta Digitalni Marketing u Srbiji 2026 | Cene i Vodič | Platinum Zenith',
    description: 'Realne cene digitalnog marketinga u Srbiji za 2026. Mesečni paketi od 300€, SEO od 200€, Google Ads od 200€. Vodič kroz troškove po usluzi.',
    ogImage: `${SITE_URL}/pz-og.jpg`,
    ogImageAlt: 'Cene digitalnog marketinga u Srbiji 2026 - pregled usluga',
  },
  '/marketing-agencija-novi-sad': {
    title: 'Marketing Agencija Novi Sad | Digitalni Marketing | Platinum Zenith',
    description: 'Marketing agencija za Novi Sad: SEO, Google Ads, Meta kampanje i web optimizacija za stabilan rast upita i prodaje uz transparentno praćenje budžeta.',
    ogImage: `${SITE_URL}/pz-og.jpg`,
    ogImageAlt: 'Marketing agencija Novi Sad - SEO i PPC za stabilan rast',
  },
  '/web-shop-nema-prodaju': {
    title: 'Web Shop Nema Prodaju? 5 Razloga i Rešenja | Platinum Zenith',
    description: 'Vaš web shop ima posete, ali nema prodaju? Otkrivamo 5 najčešćih razloga, konkretna rešenja za svaki problem i korake za brže podizanje konverzije.',
    ogImage: `${SITE_URL}/pz-og.jpg`,
    ogImageAlt: 'Web shop nema prodaju - dijagnostika i koraci za rast konverzije',
  },
  '/koliko-kosta-facebook-reklama': {
    title: 'Koliko Košta Facebook Reklama u Srbiji 2026 | Vodič Kroz Cene | Platinum Zenith',
    description: 'Realne cene Facebook i Instagram oglasa u Srbiji za 2026. CPC od 0,05€, mesečni budžet od 200€. Vodič kroz troškove i česte greške.',
    ogImage: `${SITE_URL}/pz-og.jpg`,
    ogImageAlt: 'Koliko košta Facebook reklama u Srbiji - vodič kroz troškove',
  },
  '/google-reklame-cena': {
    title: 'Google Reklame Cena 2026 + Vođenje Kampanja | Platinum Zenith',
    description: 'Koliko koštaju Google reklame i vođenje Google Ads kampanja u Srbiji 2026: CPC rasponi, budžeti po fazama rasta i realna cena upravljanja.',
    ogImage: `${SITE_URL}/pz-og.jpg`,
    ogImageAlt: 'Google reklame cena u Srbiji 2026 - vodič Platinum Zenith',
  },
  '/instagram-reklame-cena': {
    title: 'Instagram Reklame Cena 2026 + Vođenje Kampanja | Platinum Zenith',
    description: 'Koliko koštaju Instagram reklame i vođenje Instagram Ads kampanja u Srbiji 2026: CPC, CPM, budžeti po fazama rasta i realna cena upravljanja.',
    ogImage: `${SITE_URL}/pz-og.jpg`,
    ogImageAlt: 'Instagram reklame cena u Srbiji 2026 - vodič Platinum Zenith',
  },
  '/izrada-wordpress-sajta-cena': {
    title: 'Izrada WordPress Sajta Cena u Srbiji 2026 | Platinum Zenith',
    description: 'Cena izrade WordPress sajta u Srbiji 2026: trošak prezentacionog sajta i WooCommerce shopa, šta ulazi u cenu, rokovi i kako da izbegnete skrivene troškove.',
    ogImage: `${SITE_URL}/pz-og.jpg`,
    ogImageAlt: 'Izrada WordPress sajta cena u Srbiji 2026 - vodič Platinum Zenith',
  },
  '/draft/netokracija-cro-case': {
    title: 'DRAFT: Kako smo povećali profit 4x kroz CRO izmene | Platinum Zenith',
    description: 'Interni draft case study članka za Netokraciju o CRO optimizaciji: brzina sajta, mini-korpa, order bumps i Niwa AI logika u realnom e-commerce toku.',
  },
  '/marketing-za-advokate': {
    title: 'Marketing za Advokate u Srbiji | Platinum Zenith',
    description: 'Marketing za advokatske kancelarije u Srbiji: SEO, Google Ads, sajt i content strategija koja donosi kvalifikovane upite i stabilan rast klijenata.',
  },
  '/marketing-za-stomatologe': {
    title: 'Marketing za Stomatologe u Srbiji | Platinum Zenith',
    description: 'Specijalizovani marketing za stomatološke ordinacije: Google Ads, lokalni SEO, sajt i kampanje koje pune kalendar novim pacijentima i povećavaju prihod.',
  },
  '/marketing-za-restorane': {
    title: 'Marketing za Restorane | Digitalni Marketing za Ugostiteljstvo | Platinum Zenith',
    description: 'Marketing za restorane u Srbiji: Google Business, društvene mreže, oglasi i sajt koji povećavaju rezervacije, porudžbine i popunjenost stolova.',
  },
  '/in-house-tim-vs-agencija': {
    title: 'In-House Tim ili Marketing Agencija? Uporedni Vodič 2026 | Platinum Zenith',
    description: 'In-house tim ili agencija? Uporedni vodič sa realnim troškovima u Srbiji, prednostima i manama oba modela i jasnim kriterijumima za pravi izbor.',
  },
  '/fiksna-naknada-vs-revenue-share': {
    title: 'Fiksna Naknada vs Revenue Share | Koji Model Naplate je Bolji? | Platinum Zenith',
    description: 'Fiksna naknada ili revenue share? Praktično poređenje modela naplate agencije sa primerima iz prakse, rizicima i savetima za profitabilniji izbor.',
  },
  '/facebook-oglasi-ne-rade': {
    title: 'Facebook Oglasi Ne Rade? 6 Razloga i Kako Popraviti | Platinum Zenith',
    description: 'Zašto vaši Facebook oglasi ne donose rezultate i šta konkretno da promenite. Dijagnostika najčešćih grešaka sa koracima za popravku.',
    ogImage: `${SITE_URL}/pz-og.jpg`,
    ogImageAlt: 'Facebook oglasi ne rade - 6 razloga i plan popravke kampanje',
  },
  '/alati/roi-kalkulator': {
    title: 'ROI Kalkulator za Marketing | Besplatan Alat | Platinum Zenith',
    description: 'Besplatan ROI kalkulator za marketing: unesite budžet, prihod i maržu, pa odmah izračunajte realan povrat investicije i profit kampanja.',
  },
}

function upsertJsonLdScript(html, id, data) {
  const escapedJson = JSON.stringify(data).replace(/<\//g, '<\\/')
  const script = `<script id="${id}" type="application/ld+json">${escapedJson}</script>`
  const existingRe = new RegExp(`<script\\s+id="${id}"[\\s\\S]*?<\\/script>`, 'i')

  if (existingRe.test(html)) {
    return html.replace(existingRe, script)
  }

  return html.replace('</head>', `  ${script}\n  </head>`)
}

function removeJsonLdScript(html, id) {
  const existingRe = new RegExp(`\\s*<script\\s+id="${id}"[\\s\\S]*?<\\/script>\\s*`, 'i')
  return html.replace(existingRe, '\n')
}

const serverFaqByPath = {
  '/google-reklame-cena': [
    {
      q: 'Koliki je minimalni budžet za Google reklame?',
      a: 'Za većinu lokalnih biznisa početni test budžet je oko 500–1.000€ mesečno, uz optimizaciju prema kvalitetu leadova.',
    },
    {
      q: 'Kako da smanjim cenu klika bez pada kvaliteta?',
      a: 'Najviše pomažu bolja struktura kampanja, negativne ključne reči, relevantniji oglasi i bolji landing page nakon klika.',
    },
  ],
  '/instagram-reklame-cena': [
    {
      q: 'Da li Instagram reklame rade za manje budžete?',
      a: 'Da, ali je važno da kampanja ima jasan cilj i dobar kreativni format. Rezultati su stabilniji kada se radi kroz test fazu pre skaliranja.',
    },
    {
      q: 'Koliko košta vođenje Instagram kampanja?',
      a: 'Za manje naloge vođenje je najčešće 120–280€ mesečno, dok je za aktivnije naloge sa redovnim testovima uglavnom 250–650€ mesečno.',
    },
    {
      q: 'Šta najviše podiže cenu Instagram kampanja?',
      a: 'Najčešće su problem loša poruka oglasa, neprecizno targetiranje i slaba stranica na koju korisnik dolazi nakon klika.',
    },
  ],
  '/izrada-wordpress-sajta-cena': [
    {
      q: 'Od čega zavisi cena izrade WordPress sajta?',
      a: 'Cena zavisi od obima stranica, dizajna, funkcionalnosti, SEO pripreme i dodatnih integracija poput forme, analitike i prodajnih elemenata.',
    },
    {
      q: 'Koliko traje izrada WordPress sajta?',
      a: 'Jednostavniji sajtovi se najčešće završavaju za 2–4 nedelje, dok kompleksniji projekti sa više funkcionalnosti traže duži rok.',
    },
  ],
  '/marketing-za-advokate': [
    {
      q: 'Da li advokati smeju da se reklamiraju?',
      a: 'Klasično agresivno reklamiranje je ograničeno, ali su informativan sadržaj, sajt, SEO i Google Business potpuno legitimni načini da kancelarija bude vidljiva.',
    },
    {
      q: 'Koliko brzo marketing može da donese nove upite?',
      a: 'Google Ads obično donosi prve upite za 1–2 nedelje, dok SEO gradi stabilan kanal kroz nekoliko meseci i daje dugoročniji efekat.',
    },
  ],
  '/marketing-za-stomatologe': [
    {
      q: 'Koliko košta marketing za stomatološku ordinaciju?',
      a: 'Osnovni setup obično kreće od nekoliko stotina evra mesečno, dok kombinacija SEO + oglasa zavisi od grada, konkurencije i ciljanog broja novih pacijenata.',
    },
    {
      q: 'Koliko brzo stomatološka ordinacija vidi rezultate?',
      a: 'Plaćeni oglasi mogu doneti pozive vrlo brzo, dok SEO i organsko prisustvo daju stabilnije rezultate kroz naredne mesece kontinuiranog rada.',
    },
  ],
  '/marketing-za-restorane': [
    {
      q: 'Da li je restoranima dovoljan samo Instagram?',
      a: 'Instagram je važan za vizuelni utisak, ali Google profil i sajt su ključni za lokalne pretrage i direktne rezervacije kada ljudi aktivno traže restoran.',
    },
    {
      q: 'Kako merimo da li marketing za restoran radi?',
      a: 'Prate se pregledi na Google-u, klikovi za poziv i rutu, rezervacije, poruke i rast popunjenosti u terminima koji su ranije bili slabi.',
    },
  ],
  '/in-house-tim-vs-agencija': [
    {
      q: 'Kada je bolji in-house tim od agencije?',
      a: 'In-house tim je odličan kada imate stabilan marketinški budžet, potrebu za svakodnevnim operativnim izvršenjem i dovoljno kapaciteta da vodite tim dugoročno.',
    },
    {
      q: 'Kada agencija donosi veću vrednost?',
      a: 'Agencija je bolji izbor kada vam treba brži start, specijalizovana ekspertiza po kanalima i fleksibilniji trošak bez zapošljavanja više različitih profila.',
    },
  ],
  '/fiksna-naknada-vs-revenue-share': [
    {
      q: 'Šta je sigurnije za kompaniju: fiksna naknada ili revenue share?',
      a: 'Fiksna naknada daje predvidljiv mesečni trošak, dok revenue share bolje poravnava interes agencije i klijenta kada postoji jasan model merenja prihoda.',
    },
    {
      q: 'Kada revenue share model ima najviše smisla?',
      a: 'Revenue share najčešće daje najbolje rezultate kada postoji pouzdana analitika, dovoljno podataka o prodaji i spremnost oba tima da rade na kontinuiranoj optimizaciji.',
    },
  ],
  '/marketing-agencija-beograd': [
    {
      q: 'Da li radite sa firmama koje već imaju interni tim u Beogradu?',
      a: 'Da. Čest model je da naš tim preuzme strategiju, performance i optimizaciju, dok interni tim ostaje fokusiran na operativnu produkciju i prodaju.',
    },
    {
      q: 'Koliki budžet je realan za rezultate na tržištu Beograda?',
      a: 'Zavisi od niše i konkurencije, ali najčešće je potreban budžet koji pokriva i test fazu i optimizaciju, a ne samo inicijalno puštanje kampanja.',
    },
  ],
  '/marketing-agencija-zrenjanin': [
    {
      q: 'Da li lokalna agencija može da vodi kampanje i van Zrenjanina?',
      a: 'Može. Iako smo fizički u Zrenjaninu, kampanje vodimo za cele regione i gradove uz isti model merenja učinka i transparentnog izveštavanja.',
    },
    {
      q: 'Šta je najbolje prvo uraditi za lokalni biznis u Zrenjaninu?',
      a: 'Najbrže rezultate obično daju sređen Google Business profil, lokalni SEO i jasno strukturisana landing stranica za upite i pozive.',
    },
  ],
  '/marketing-agencija-novi-sad': [
    {
      q: 'Kako se razlikuje marketing za Novi Sad u odnosu na manje gradove?',
      a: 'U Novom Sadu je veća konkurencija po upitu, pa su preciznije targetiranje, jača ponuda i bolja landing struktura ključni za profitabilnu akviziciju.',
    },
    {
      q: 'Koliko vremena treba da kampanje u Novom Sadu daju stabilne rezultate?',
      a: 'Prvi signali dolaze brzo kroz plaćene kanale, ali stabilan i predvidljiv rezultat obično dolazi nakon više iteracija optimizacije kroz nekoliko ciklusa.',
    },
  ],
  '/seo-optimizacija-cena': [
    {
      q: 'Koliko vremena je obično potrebno da SEO da merljive rezultate?',
      a: 'Prve pomake često vidite u prvim mesecima kroz rast relevantnih upita, ali stabilniji i veći rezultati najčešće dolaze kroz kontinuiran rad u dužem periodu.',
    },
    {
      q: 'Šta sve ulazi u cenu SEO optimizacije?',
      a: 'Cena obično uključuje tehnički audit, on-page optimizaciju, plan sadržaja, praćenje ključnih reči i redovne iteracije na osnovu performansi.',
    },
  ],
  '/cene-izrade-sajta': [
    {
      q: 'Zašto dve ponude za izradu sajta mogu imati veliku razliku u ceni?',
      a: 'Razlika je najčešće u obimu posla: broj stranica, kvalitet UX-a, brzina sajta, SEO priprema, analitika i nivo podrške nakon isporuke.',
    },
    {
      q: 'Da li je održavanje sajta uračunato u početnu cenu izrade?',
      a: 'Nekad jeste, nekad nije. Važno je da ponuda jasno razdvoji jednokratnu izradu od mesečnog održavanja, update-a i tehničke podrške.',
    },
  ],
  '/cene-digitalnog-marketinga': [
    {
      q: 'Koliki marketing budžet je realan za firmu koja tek kreće sa plaćenim kampanjama?',
      a: 'Najčešće je najbolje krenuti sa budžetom koji pokriva i test fazu i optimizaciju, umesto da sav novac ode samo na kratkoročno puštanje oglasa.',
    },
    {
      q: 'Da li je pametno rasporediti budžet na više kanala od prvog dana?',
      a: 'U većini slučajeva bolje je krenuti sa manjim brojem kanala, dokazati profitabilnost, pa tek onda širiti budžet na dodatne kanale.',
    },
  ],
  '/koliko-kosta-facebook-reklama': [
    {
      q: 'Da li je Facebook i dalje isplativ za oglašavanje u Srbiji?',
      a: 'Da, ali rezultat zavisi od niše, ponude i kreativnog pristupa. Najbolje prolaze kampanje koje imaju jasan funnel i dobro optimizovanu landing stranicu.',
    },
    {
      q: 'Šta je važnije od same cene klika na Facebook-u?',
      a: 'Važniji je kvalitet saobraćaja i cena po leadu ili prodaji. Nizak klik nije koristan ako posetioci ne preduzimaju konkretne akcije na sajtu.',
    },
  ],
  '/facebook-oglasi-ne-rade': [
    {
      q: 'Zašto Facebook oglasi imaju klikove, ali nemaju upite ili prodaju?',
      a: 'Najčešći razlog je prekid između oglasa i landing stranice: poruka u oglasu obećava jedno, a stranica ne daje jasan sledeći korak za korisnika.',
    },
    {
      q: 'Koliko brzo može da se popravi loša Facebook kampanja?',
      a: 'Prvi pomaci se obično vide kroz 7 do 14 dana kada se istovremeno poprave kreativni hook, targetiranje i struktura landing stranice.',
    },
  ],
  '/web-shop-nema-prodaju': [
    {
      q: 'Zašto web shop ima promet, ali i dalje nema dovoljno porudžbina?',
      a: 'Najčešće postoji problem u jednom od ključnih koraka kupovine: nejasna ponuda, slaba produkt stranica ili predugačak checkout koji prekida kupca pred završetak.',
    },
    {
      q: 'Koji je prvi korak kada web shop ne konvertuje?',
      a: 'Prvi korak je analiza funnel-a po fazama, od izvora saobraćaja do checkout-a, da se jasno vidi gde se gubi najveći broj korisnika i šta prvo treba popraviti.',
    },
  ],
  '/faq': [
    {
      q: 'Koliko brzo mogu da očekujem prve marketing rezultate?',
      a: 'Prvi podaci se vide u prvih 7 do 14 dana, dok stabilniji i predvidljiviji rezultati obično dolaze kroz 60 do 90 dana optimizacije.',
    },
    {
      q: 'Koji je minimalni oglasni budžet za ozbiljnije testiranje?',
      a: 'Za većinu kampanja preporuka je minimum 1.000€ mesečno za Meta platforme i oko 1.500€ za Google Ads, kako bi test faza imala dovoljno podataka.',
    },
    {
      q: 'Da li radite samo sa određenim industrijama?',
      a: 'Najčešće radimo sa e-commerce brendovima, SaaS kompanijama, lokalnim biznisima i startapovima, ali model prilagođavamo cilju i tržištu klijenta.',
    },
  ],
}

function injectServerFaqSchema(html, cleanPath) {
  const schemaId = 'ld-faq-server'
  const faqs = serverFaqByPath[cleanPath]

  if (!faqs || faqs.length === 0) {
    return removeJsonLdScript(html, schemaId)
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  }

  return upsertJsonLdScript(html, schemaId, faqSchema)
}

function injectServerArticleSchema(html, cleanPath, canonicalUrl) {
  const schemaId = 'ld-article-server'
  const isBlogLikePath = cleanPath.startsWith('/blog/') || cleanPath.startsWith('/draft/')

  if (!isBlogLikePath) {
    return removeJsonLdScript(html, schemaId)
  }

  const slug = cleanPath.replace(/^\/(blog|draft)\//, '')
  const post = blogOgPosts.find((p) => p.slug === slug)

  if (!post) {
    return removeJsonLdScript(html, schemaId)
  }

  const articleImage = post.ogImage || DEFAULT_OG_IMAGE

  const article = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    url: canonicalUrl,
    image: [articleImage],
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonicalUrl,
    },
    inLanguage: 'sr-RS',
    author: {
      '@type': 'Person',
      name: post.author || 'Aleksandar Nenadović',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Platinum Zenith',
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/pz-icon.webp`,
      },
    },
  }

  if (post.date) {
    article.datePublished = post.date
    article.dateModified = post.date
  }

  if (post.category) {
    article.articleSection = post.category
  }

  return upsertJsonLdScript(html, schemaId, article)
}

function injectServerBlogListingSchema(html, cleanPath) {
  const schemaId = 'ld-blog-list-server'

  if (cleanPath !== '/blog') {
    return removeJsonLdScript(html, schemaId)
  }

  const posts = [...blogOgPosts]
    .filter((post) => post?.slug)
    .sort((a, b) => {
      const da = Date.parse(a?.date || '')
      const db = Date.parse(b?.date || '')
      if (Number.isNaN(da) || Number.isNaN(db)) return 0
      return db - da
    })
    .slice(0, 30)

  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Platinum Zenith Blog',
    url: `${SITE_URL}/blog`,
    inLanguage: 'sr-RS',
    blogPost: posts.map((post) => {
      const item = {
        '@type': 'BlogPosting',
        headline: post.title,
        url: `${SITE_URL}/blog/${post.slug}`,
        author: {
          '@type': 'Person',
          name: post.author || 'Aleksandar Nenadović',
        },
      }

      if (post.date) {
        item.datePublished = post.date
        item.dateModified = post.date
      }

      return item
    }),
  }

  return upsertJsonLdScript(html, schemaId, blogSchema)
}

function injectServerCoreSchemas(html, cleanPath) {
  let result = html
  result = upsertJsonLdScript(result, 'ld-org-server', CORE_ORG_SCHEMA)
  result = upsertJsonLdScript(result, 'ld-local-business-server', CORE_LOCAL_BUSINESS_SCHEMA)

  if (cleanPath === '/') {
    result = upsertJsonLdScript(result, 'ld-website-server', HOMEPAGE_WEBSITE_SCHEMA)
  } else {
    result = removeJsonLdScript(result, 'ld-website-server')
  }

  return result
}

function injectServerRouteSpecificSchema(html, cleanPath) {
  const schemaId = 'ld-route-schema-server'
  const schema = SERVER_ROUTE_SCHEMAS[cleanPath]

  if (!schema) {
    return removeJsonLdScript(html, schemaId)
  }

  return upsertJsonLdScript(html, schemaId, schema)
}

function breadcrumbPageNameFromTitle(title) {
  if (!title) return null
  return title.split('|')[0].trim() || null
}

function breadcrumbNameFromPath(cleanPath) {
  const last = cleanPath.split('/').filter(Boolean).pop()
  if (!last) return 'Stranica'
  return last
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (ch) => ch.toUpperCase())
}

function injectServerBreadcrumbSchema(html, cleanPath, canonicalUrl, meta) {
  const schemaId = 'ld-breadcrumb-server'

  if (cleanPath === '/') {
    return removeJsonLdScript(html, schemaId)
  }

  const itemListElement = [
    { '@type': 'ListItem', position: 1, name: 'Početna', item: SITE_URL },
  ]

  if (cleanPath === '/blog') {
    itemListElement.push({
      '@type': 'ListItem',
      position: 2,
      name: 'Blog',
      item: `${SITE_URL}/blog`,
    })
  } else if (cleanPath.startsWith('/blog/') || cleanPath.startsWith('/draft/')) {
    const slug = cleanPath.replace(/^\/(blog|draft)\//, '')
    const post = blogOgPosts.find((p) => p.slug === slug)

    const blogCrumb = {
      '@type': 'ListItem',
      position: 2,
      name: cleanPath.startsWith('/draft/') ? 'Draft' : 'Blog',
      item: `${SITE_URL}/blog`,
    }
    itemListElement.push(blogCrumb)

    itemListElement.push({
      '@type': 'ListItem',
      position: 3,
      name: post?.title || breadcrumbPageNameFromTitle(meta?.title) || breadcrumbNameFromPath(cleanPath),
      item: canonicalUrl,
    })
  } else {
    itemListElement.push({
      '@type': 'ListItem',
      position: 2,
      name: breadcrumbPageNameFromTitle(meta?.title) || breadcrumbNameFromPath(cleanPath),
      item: canonicalUrl,
    })
  }

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement,
  }

  return upsertJsonLdScript(html, schemaId, breadcrumb)
}

/**
 * Inject per-route OG meta tags into the HTML template.
 * Replaces title, description, canonical URL, og:*, twitter:* tags
 * so crawlers that don't execute JS see correct metadata.
 */
export function injectOgMeta(html, pathname) {
  // Normalize: strip trailing slash (except root)
  const cleanPath = pathname === '/' ? '/' : pathname.replace(/\/+$/, '')
  let meta = ogMeta[cleanPath]
  const canonicalUrl = `${SITE_URL}${cleanPath}`
  const isBlogPath = cleanPath.startsWith('/blog/')
  const isDraftPath = cleanPath.startsWith('/draft/')
  const ogType = (isBlogPath || isDraftPath) ? 'article' : 'website'

  const blogSlug = isBlogPath
    ? cleanPath.replace('/blog/', '')
    : (isDraftPath ? cleanPath.replace('/draft/', '') : null)
  const matchedBlogPost = blogSlug ? blogOgPosts.find((p) => p.slug === blogSlug) : null

  const isKnownRoute = Boolean(ogMeta[cleanPath]) || Boolean(matchedBlogPost) || INTERNAL_NOINDEX_PATHS.has(cleanPath)
  const shouldNoIndex = isDraftPath || INTERNAL_NOINDEX_PATHS.has(cleanPath) || !isKnownRoute
  const robotsContent = shouldNoIndex
    ? 'noindex, nofollow'
    : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'

  const articleDateIso = matchedBlogPost?.date ? `${matchedBlogPost.date}T00:00:00+01:00` : ''
  const articleSection = matchedBlogPost?.category || ''

  // Dynamic blog post OG: lookup from blogOgData.json
  if (!meta && isBlogPath && matchedBlogPost) {
    meta = {
      title: `${matchedBlogPost.title} | Platinum Zenith Blog`,
      description: matchedBlogPost.excerpt,
    }
  }

  // Dynamic draft OG: lookup from blogOgData.json
  if (!meta && isDraftPath && matchedBlogPost) {
    meta = {
      title: `DRAFT: ${matchedBlogPost.title} | Platinum Zenith`,
      description: matchedBlogPost.excerpt,
    }
  }

  if (!meta) {
    // Even without specific OG data, always inject correct canonical + og:url
    let result = html
    result = result.replace(
      /(<link\s+rel="canonical"\s+href=")[^"]*(")/,
      `$1${canonicalUrl}$2`
    )
    result = result.replace(
      /(<link\s+rel="alternate"\s+hreflang="sr-RS"\s+href=")[^"]*(")/,
      `$1${canonicalUrl}$2`
    )
    result = result.replace(
      /(<link\s+rel="alternate"\s+hreflang="x-default"\s+href=")[^"]*(")/,
      `$1${canonicalUrl}$2`
    )
    result = result.replace(
      /(<meta\s+property="og:url"\s+content=")[^"]*(")/,
      `$1${canonicalUrl}$2`
    )
    result = result.replace(
      /(<meta\s+property="og:type"\s+content=")[^"]*(")/,
      `$1${ogType}$2`
    )
    result = result.replace(
      /(<meta\s+property="article:published_time"\s+content=")[^"]*(")/,
      `$1${articleDateIso}$2`
    )
    result = result.replace(
      /(<meta\s+property="article:modified_time"\s+content=")[^"]*(")/,
      `$1${articleDateIso}$2`
    )
    result = result.replace(
      /(<meta\s+property="article:section"\s+content=")[^"]*(")/,
      `$1${articleSection}$2`
    )
    result = result.replace(
      /(<meta\s+property="og:image"\s+content=")[^"]*(")/,
      `$1${DEFAULT_OG_IMAGE}$2`
    )
    result = result.replace(
      /(<meta\s+property="og:image:alt"\s+content=")[^"]*(")/,
      `$1${DEFAULT_OG_IMAGE_ALT}$2`
    )
    result = result.replace(
      /(<meta\s+name="twitter:image"\s+content=")[^"]*(")/,
      `$1${DEFAULT_OG_IMAGE}$2`
    )
    result = result.replace(
      /(<meta\s+name="robots"\s+content=")[^"]*(")/,
      `$1${robotsContent}$2`
    )
    result = injectServerCoreSchemas(result, cleanPath)
    result = injectServerRouteSpecificSchema(result, cleanPath)
    result = injectServerFaqSchema(result, cleanPath)
    result = injectServerArticleSchema(result, cleanPath, canonicalUrl)
    result = injectServerBlogListingSchema(result, cleanPath)
    result = injectServerBreadcrumbSchema(result, cleanPath, canonicalUrl, meta)
    return result
  }

  let result = html
  const ogImageUrl = meta.ogImage || DEFAULT_OG_IMAGE
  const ogImageAlt = meta.ogImageAlt || DEFAULT_OG_IMAGE_ALT

  // <title>
  result = result.replace(
    /<title>[^<]*<\/title>/,
    `<title>${meta.title}</title>`
  )

  // <meta name="description">
  result = result.replace(
    /(<meta\s+name="description"\s+content=")[^"]*(")/,
    `$1${meta.description}$2`
  )

  // <link rel="canonical"> + hreflang alternates
  result = result.replace(
    /(<link\s+rel="canonical"\s+href=")[^"]*(")/,
    `$1${canonicalUrl}$2`
  )
  result = result.replace(
    /(<link\s+rel="alternate"\s+hreflang="sr-RS"\s+href=")[^"]*(")/,
    `$1${canonicalUrl}$2`
  )
  result = result.replace(
    /(<link\s+rel="alternate"\s+hreflang="x-default"\s+href=")[^"]*(")/,
    `$1${canonicalUrl}$2`
  )

  // og:type
  result = result.replace(
    /(<meta\s+property="og:type"\s+content=")[^"]*(")/,
    `$1${ogType}$2`
  )

  // article Open Graph (blog/draft only)
  result = result.replace(
    /(<meta\s+property="article:published_time"\s+content=")[^"]*(")/,
    `$1${articleDateIso}$2`
  )
  result = result.replace(
    /(<meta\s+property="article:modified_time"\s+content=")[^"]*(")/,
    `$1${articleDateIso}$2`
  )
  result = result.replace(
    /(<meta\s+property="article:section"\s+content=")[^"]*(")/,
    `$1${articleSection}$2`
  )

  // og:title
  result = result.replace(
    /(<meta\s+property="og:title"\s+content=")[^"]*(")/,
    `$1${meta.title}$2`
  )

  // og:description
  result = result.replace(
    /(<meta\s+property="og:description"\s+content=")[^"]*(")/,
    `$1${meta.description}$2`
  )

  // og:url
  result = result.replace(
    /(<meta\s+property="og:url"\s+content=")[^"]*(")/,
    `$1${canonicalUrl}$2`
  )

  // og:image + alt
  result = result.replace(
    /(<meta\s+property="og:image"\s+content=")[^"]*(")/,
    `$1${ogImageUrl}$2`
  )
  result = result.replace(
    /(<meta\s+property="og:image:alt"\s+content=")[^"]*(")/,
    `$1${ogImageAlt}$2`
  )

  // twitter:image
  result = result.replace(
    /(<meta\s+name="twitter:image"\s+content=")[^"]*(")/,
    `$1${ogImageUrl}$2`
  )

  // twitter:title
  result = result.replace(
    /(<meta\s+name="twitter:title"\s+content=")[^"]*(")/,
    `$1${meta.title}$2`
  )

  // twitter:description
  result = result.replace(
    /(<meta\s+name="twitter:description"\s+content=")[^"]*(")/,
    `$1${meta.description}$2`
  )

  // robots (noindex for internal draft routes)
  result = result.replace(
    /(<meta\s+name="robots"\s+content=")[^"]*(")/,
    `$1${robotsContent}$2`
  )

  result = injectServerCoreSchemas(result, cleanPath)
  result = injectServerRouteSpecificSchema(result, cleanPath)
  result = injectServerFaqSchema(result, cleanPath)
  result = injectServerArticleSchema(result, cleanPath, canonicalUrl)
  result = injectServerBlogListingSchema(result, cleanPath)
  result = injectServerBreadcrumbSchema(result, cleanPath, canonicalUrl, meta)
  return result
}

export { ogMeta, SITE_URL, SERVER_ROUTE_SCHEMAS as serverRouteSchemas }
