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
    '@id': `${SITE_URL}/google-reklame-cena#service`,
    name: 'Google Ads upravljanje kampanjama',
    description: 'Google Ads upravljanje sa jasnim budžetskim fazama, cenom vođenja kampanja i optimizacijom troška po leadu.',
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
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'EUR',
      lowPrice: '300',
      highPrice: '6000',
      offerCount: '4',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Google Ads budžetske faze',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'Početni test',
          description: 'Za firme koje prvi put ulaze u Google Ads i žele test ključnih reči sa visokim intentom.',
          priceSpecification: {
            '@type': 'PriceSpecification',
            priceCurrency: 'EUR',
            minPrice: '300',
            maxPrice: '700',
          },
        },
        {
          '@type': 'Offer',
          name: 'Stabilan rast',
          description: 'Za firme koje žele predvidljiv priliv upita kroz Search + remarketing i kontinuiranu optimizaciju.',
          priceSpecification: {
            '@type': 'PriceSpecification',
            priceCurrency: 'EUR',
            minPrice: '700',
            maxPrice: '2000',
          },
        },
        {
          '@type': 'Offer',
          name: 'Agresivna akvizicija',
          description: 'Za kompanije koje žele veći tržišni udeo kroz kombinaciju Search i Performance Max kampanja.',
          priceSpecification: {
            '@type': 'PriceSpecification',
            priceCurrency: 'EUR',
            minPrice: '2000',
            maxPrice: '6000',
          },
        },
        {
          '@type': 'Offer',
          name: 'Enterprise',
          description: 'Za velike sisteme sa više tržišta, višim obimom pretrage i profit-orijentisanim skaliranjem.',
          priceSpecification: {
            '@type': 'PriceSpecification',
            priceCurrency: 'EUR',
            minPrice: '6000',
          },
        },
      ],
    },
  },
  '/instagram-reklame-cena': {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_URL}/instagram-reklame-cena#service`,
    name: 'Instagram Ads upravljanje kampanjama',
    description: 'Instagram Ads upravljanje sa jasnim budžetskim fazama, realnom cenom vođenja kampanja i fokusom na kvalitetne upite i prodaju.',
    serviceType: 'Instagram advertising management',
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
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'EUR',
      lowPrice: '200',
      highPrice: '5000',
      offerCount: '4',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Instagram Ads budžetske faze',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'Test faza',
          description: 'Za firme koje prvi put kreću sa Instagram oglasima i žele da validiraju kreativu i publiku.',
          priceSpecification: {
            '@type': 'PriceSpecification',
            priceCurrency: 'EUR',
            minPrice: '200',
            maxPrice: '600',
          },
        },
        {
          '@type': 'Offer',
          name: 'Stabilan rast',
          description: 'Za firme koje žele predvidljiv priliv upita kroz prospecting i retargeting kampanje.',
          priceSpecification: {
            '@type': 'PriceSpecification',
            priceCurrency: 'EUR',
            minPrice: '600',
            maxPrice: '1800',
          },
        },
        {
          '@type': 'Offer',
          name: 'Skaliranje',
          description: 'Za biznise koji su dokazali da Instagram donosi prodaju i žele rast bez pada profitabilnosti.',
          priceSpecification: {
            '@type': 'PriceSpecification',
            priceCurrency: 'EUR',
            minPrice: '1800',
            maxPrice: '5000',
          },
        },
        {
          '@type': 'Offer',
          name: 'Enterprise',
          description: 'Za veće sisteme i više tržišta sa dedikovanim timom i naprednom atribucijom rezultata.',
          priceSpecification: {
            '@type': 'PriceSpecification',
            priceCurrency: 'EUR',
            minPrice: '5000',
          },
        },
      ],
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
    description: 'SEO optimizacija sa jasnim paketima, tehničkim auditom, planom sadržaja i mesečnim optimizacijama za rast organskog saobraćaja.',
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
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'EUR',
      lowPrice: '300',
      highPrice: '3000',
      offerCount: '3',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'SEO paketi',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'Osnovni SEO',
          description: 'Tehničke SEO osnove i lokalna vidljivost',
          priceSpecification: {
            '@type': 'PriceSpecification',
            priceCurrency: 'EUR',
            minPrice: '300',
            maxPrice: '500',
          },
        },
        {
          '@type': 'Offer',
          name: 'Napredni SEO',
          description: 'Content + tehnička optimizacija za stabilan rast',
          priceSpecification: {
            '@type': 'PriceSpecification',
            priceCurrency: 'EUR',
            minPrice: '500',
            maxPrice: '1200',
          },
        },
        {
          '@type': 'Offer',
          name: 'Premium SEO',
          description: 'Agresivniji SEO za konkurentne niše',
          priceSpecification: {
            '@type': 'PriceSpecification',
            priceCurrency: 'EUR',
            minPrice: '1200',
            maxPrice: '3000',
          },
        },
      ],
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
    description: 'Koliko koštaju Instagram reklame, Reels oglasi i vođenje Instagram Ads kampanja u Srbiji 2026: CPC, CPM, budžeti po fazama rasta i realna cena upravljanja.',
    ogImage: `${SITE_URL}/pz-og.jpg`,
    ogImageAlt: 'Instagram reklame cena u Srbiji 2026 - vodič Platinum Zenith',
  },
  '/izrada-wordpress-sajta-cena': {
    title: 'Izrada WordPress Sajta Cena u Srbiji 2026 | Platinum Zenith',
    description: 'Cena izrade WordPress sajta u Srbiji 2026: paketi za prezentacione i WooCommerce sajtove, rokovi, održavanje i realni skriveni troškovi.',
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
      q: 'Koliki je minimalan budžet za Google Ads?',
      a: 'Praktični minimum je oko 300€ mesečno za klikove, plus upravljanje. Ispod toga je teško prikupiti dovoljno podataka za ozbiljnu optimizaciju.',
    },
    {
      q: 'Koliko koštaju Google reklame za malu firmu u Srbiji?',
      a: 'Za većinu lokalnih usluga realan start je 300-900€ mesečno za mediju, uz dodatnu cenu upravljanja kampanjom. Tačan iznos zavisi od konkurencije i vrednosti jednog klijenta.',
    },
    {
      q: 'Kako da znam da li mi je cena Google oglasa održiva?',
      a: 'Posmatrajte cenu kvalifikovanog leada (CPA) u odnosu na prosečnu maržu po klijentu. Ako lead košta manje od onoga što vam ostaje kao profit, kampanja je održiva i može da se skalira.',
    },
    {
      q: 'Da li je Google Ads bolji od Facebook oglasa?',
      a: 'Google hvata postojeću potražnju (ljudi koji aktivno traže rešenje), dok Facebook češće kreira potražnju. Za većinu firmi najbolje radi kombinacija oba kanala.',
    },
    {
      q: 'Koliko brzo se vide rezultati?',
      a: 'Prvi klikovi i upiti dolaze brzo, često u prvih nekoliko dana. Za stabilne brojke i kvalitetnu optimizaciju obično je potrebno 3-6 nedelja.',
    },
    {
      q: 'Šta najviše utiče na cenu klika?',
      a: 'Konkurencija za ključnu reč, kvalitet oglasa, relevantnost landing stranice i istorija naloga. Dobar Quality Score može osetno smanjiti CPC.',
    },
    {
      q: 'Da li mogu sam da vodim kampanje?',
      a: 'Možete, ali bez jasne strukture i trackinga često dolazi do rasipanja budžeta. Ako vodite kampanje sami, krenite sa uskim setom ključnih reči i jasnim ciljem konverzije.',
    },
  ],
  '/instagram-reklame-cena': [
    {
      q: 'Koliko je realno potrebno za početak?',
      a: 'Praktičan minimum je oko 200-300€ za medijski budžet plus upravljanje. Ispod toga je teško doneti kvalitetne zaključke iz podataka.',
    },
    {
      q: 'Koliko košta vođenje Instagram kampanja?',
      a: 'Za manje naloge vođenje je najčešće 120-280€ mesečno, dok je za aktivnije naloge sa redovnim testovima uglavnom 250-650€ mesečno. Veći budžeti često idu kroz enterprise model ili procenat od medija.',
    },
    {
      q: 'Da li Instagram oglasi rade i za uslužne biznize?',
      a: 'Da, posebno kada postoji jasan problem i dobra ponuda. Ključ je kvalitetan hook i jasna sledeća akcija na landing stranici.',
    },
    {
      q: 'Koliko brzo se vide rezultati?',
      a: 'Prve signale vidite brzo, ali za stabilne brojke i ozbiljnu optimizaciju obično treba 2-4 nedelje kontinuiranog rada.',
    },
    {
      q: 'Instagram ili Facebook oglasi?',
      a: 'U praksi su to iste Meta kampanje, ali format i ponašanje publike su različiti. Najčešće najbolje radi kombinacija oba placement-a.',
    },
    {
      q: 'Da li je UGC obavezan?',
      a: 'Nije obavezan, ali često značajno pomaže performanse jer izgleda prirodnije i gradi poverenje brže nego klasičan polished ad.',
    },
    {
      q: 'Koliko koštaju Instagram Reels reklame u Srbiji?',
      a: 'Za većinu niša Reels CPM je najčešće između 2,5€ i 8,5€, dok CPC često ulazi u raspon 0,07-0,32€. Konačna cena po rezultatu zavisi od hook-a, kreative i kvaliteta landing stranice.',
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
      q: 'Koliko brzo mogu da očekujem rezultate?',
      a: 'Za lokalne pretrage prvi pomaci su često vidljivi za 1-2 meseca, dok za konkurentne nacionalne upite ozbiljniji rezultati obično dolaze posle 4-6 meseci kontinuiranog rada.',
    },
    {
      q: 'Da li garantujete prvu poziciju na Google-u?',
      a: 'Ne, jer nijedna agencija ne kontroliše Google algoritam. Garantujemo transparentan proces, merenje i kontinuiranu optimizaciju koja vodi ka stabilnom rastu.',
    },
    {
      q: 'Šta ako već imam agenciju koja radi SEO?',
      a: 'Možemo uraditi nezavisan SEO audit i pokazati šta radi, a šta usporava rezultate. Na osnovu toga dobijate prioritetni plan koraka.',
    },
    {
      q: 'Da li SEO zamenjuje plaćene oglase?',
      a: 'Ne zamenjuje ih, već ih dopunjuje. SEO gradi dugoročan organski kanal, dok plaćeni oglasi daju brže testiranje i odmah vidljive podatke.',
    },
    {
      q: 'Šta je uključeno u mesečni izveštaj?',
      a: 'Mesečni izveštaj obuhvata pozicije ključnih reči, organski saobraćaj, konverzije, realizovane aktivnosti i plan prioriteta za sledeći period.',
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

const serverHowToByPath = {
  '/google-reklame-cena': {
    name: 'Kako da izračunate budžet za Google Ads bez nagađanja',
    description: 'Praktičan postupak za određivanje održivog Google Ads budžeta na osnovu vrednosti klijenta, ciljnog CPA i potrebnog broja leadova.',
    totalTime: 'PT20M',
    step: [
      {
        name: 'Definišite vrednost jednog klijenta ili porudžbine',
        text: 'Prvo zapišite koliko vam u proseku vredi jedan novi klijent ili jedna porudžbina. Bez te brojke ne možete znati koliki CPA zaista imate prostora da platite.',
      },
      {
        name: 'Odredite maksimalni prihvatljiv CPA',
        text: 'Izračunajte kolika cena po leadu ili kupovini vam i dalje ostavlja zdravu maržu. To je gornja granica preko koje kampanja više nije održiva.',
      },
      {
        name: 'Izračunajte potreban broj leadova za ciljani prihod',
        text: 'Povežite target prihoda sa prosečnom stopom zatvaranja prodaje, pa izračunajte koliko vam kvalifikovanih leadova realno treba svakog meseca.',
      },
      {
        name: 'Postavite test budžet sa dovoljno podataka za optimizaciju',
        text: 'Prvi budžet postavite tako da u prvih 30 dana dobijete barem 200 do 400 klikova i dovoljno konverzija za ozbiljnu optimizaciju, umesto da kampanju gasite na osnovu premalo podataka.',
      },
    ],
  },
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

function injectServerHowToSchema(html, cleanPath, canonicalUrl) {
  const schemaId = 'ld-howto-server'
  const howTo = serverHowToByPath[cleanPath]

  if (!howTo) {
    return removeJsonLdScript(html, schemaId)
  }

  return upsertJsonLdScript(html, schemaId, {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: howTo.name,
    description: howTo.description,
    totalTime: howTo.totalTime,
    inLanguage: 'sr-RS',
    url: canonicalUrl,
    step: howTo.step.map((item, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: item.name,
      text: item.text,
      url: `${canonicalUrl}#korak-${index + 1}`,
    })),
  })
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
    '@type': 'BlogPosting',
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

function truncateOgTitle(value, maxLength = 95) {
  const raw = String(value || '').trim()
  if (!raw) return ''
  if (raw.length <= maxLength) return raw

  const cutoff = Math.max(20, maxLength - 1)
  const sliced = raw.slice(0, cutoff)
  const lastSpace = sliced.lastIndexOf(' ')
  const safe = lastSpace > 20 ? sliced.slice(0, lastSpace) : sliced
  return `${safe.trim()}…`
}

function buildDynamicBlogOgTitle(baseTitle, isDraft) {
  const cleanTitle = String(baseTitle || '').trim()
  if (!cleanTitle) return isDraft ? 'DRAFT | Platinum Zenith' : 'Platinum Zenith Blog'

  if (isDraft) {
    return truncateOgTitle(`DRAFT: ${cleanTitle} | Platinum Zenith`)
  }

  return truncateOgTitle(`${cleanTitle} | Platinum Zenith Blog`)
}

function escapeHtmlText(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function escapeHtmlAttr(value) {
  return escapeHtmlText(value)
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function normalizeRequestPath(pathname) {
  const raw = String(pathname || '/').trim() || '/'
  const withoutOrigin = raw.replace(/^https?:\/\/[^/]+/i, '')
  const withoutHash = withoutOrigin.split('#')[0] || '/'
  const withoutQuery = withoutHash.split('?')[0] || '/'
  const withLeadingSlash = withoutQuery.startsWith('/') ? withoutQuery : `/${withoutQuery}`
  const collapsed = withLeadingSlash.replace(/\/{2,}/g, '/')

  if (collapsed === '/' || collapsed === '') return '/'
  return collapsed.replace(/\/+$/, '')
}

/**
 * Inject per-route OG meta tags into the HTML template.
 * Replaces title, description, canonical URL, og:*, twitter:* tags
 * so crawlers that don't execute JS see correct metadata.
 */
export function injectOgMeta(html, pathname) {
  const cleanPath = normalizeRequestPath(pathname)
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
      title: buildDynamicBlogOgTitle(matchedBlogPost.title, false),
      description: matchedBlogPost.excerpt,
    }
  }

  // Dynamic draft OG: lookup from blogOgData.json
  if (!meta && isDraftPath && matchedBlogPost) {
    meta = {
      title: buildDynamicBlogOgTitle(matchedBlogPost.title, true),
      description: matchedBlogPost.excerpt,
    }
  }

  if (!meta) {
    // Even without specific OG data, always inject correct canonical + og:url
    const safeCanonicalUrl = escapeHtmlAttr(canonicalUrl)
    const safeOgType = escapeHtmlAttr(ogType)
    const safeArticleDateIso = escapeHtmlAttr(articleDateIso)
    const safeArticleSection = escapeHtmlAttr(articleSection)
    const safeDefaultOgImage = escapeHtmlAttr(DEFAULT_OG_IMAGE)
    const safeDefaultOgImageAlt = escapeHtmlAttr(DEFAULT_OG_IMAGE_ALT)
    const safeRobotsContent = escapeHtmlAttr(robotsContent)

    let result = html
    result = result.replace(
      /(<link\s+rel="canonical"\s+href=")[^"]*(")/,
      `$1${safeCanonicalUrl}$2`
    )
    result = result.replace(
      /(<link\s+rel="alternate"\s+hreflang="sr-RS"\s+href=")[^"]*(")/,
      `$1${safeCanonicalUrl}$2`
    )
    result = result.replace(
      /(<link\s+rel="alternate"\s+hreflang="x-default"\s+href=")[^"]*(")/,
      `$1${safeCanonicalUrl}$2`
    )
    result = result.replace(
      /(<meta\s+property="og:url"\s+content=")[^"]*(")/,
      `$1${safeCanonicalUrl}$2`
    )
    result = result.replace(
      /(<meta\s+property="og:type"\s+content=")[^"]*(")/,
      `$1${safeOgType}$2`
    )
    result = result.replace(
      /(<meta\s+property="article:published_time"\s+content=")[^"]*(")/,
      `$1${safeArticleDateIso}$2`
    )
    result = result.replace(
      /(<meta\s+property="article:modified_time"\s+content=")[^"]*(")/,
      `$1${safeArticleDateIso}$2`
    )
    result = result.replace(
      /(<meta\s+property="article:section"\s+content=")[^"]*(")/,
      `$1${safeArticleSection}$2`
    )
    result = result.replace(
      /(<meta\s+property="og:image"\s+content=")[^"]*(")/,
      `$1${safeDefaultOgImage}$2`
    )
    result = result.replace(
      /(<meta\s+property="og:image:alt"\s+content=")[^"]*(")/,
      `$1${safeDefaultOgImageAlt}$2`
    )
    result = result.replace(
      /(<meta\s+name="twitter:image"\s+content=")[^"]*(")/,
      `$1${safeDefaultOgImage}$2`
    )
    result = result.replace(
      /(<meta\s+name="robots"\s+content=")[^"]*(")/,
      `$1${safeRobotsContent}$2`
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

  const safeTitleText = escapeHtmlText(meta.title)
  const safeTitleAttr = escapeHtmlAttr(meta.title)
  const safeDescriptionAttr = escapeHtmlAttr(meta.description)
  const safeCanonicalUrl = escapeHtmlAttr(canonicalUrl)
  const safeOgType = escapeHtmlAttr(ogType)
  const safeArticleDateIso = escapeHtmlAttr(articleDateIso)
  const safeArticleSection = escapeHtmlAttr(articleSection)
  const safeOgImageUrl = escapeHtmlAttr(ogImageUrl)
  const safeOgImageAlt = escapeHtmlAttr(ogImageAlt)
  const safeRobotsContent = escapeHtmlAttr(robotsContent)

  // <title>
  result = result.replace(
    /<title>[^<]*<\/title>/,
    `<title>${safeTitleText}</title>`
  )

  // <meta name="description">
  result = result.replace(
    /(<meta\s+name="description"\s+content=")[^"]*(")/,
    `$1${safeDescriptionAttr}$2`
  )

  // <link rel="canonical"> + hreflang alternates
  result = result.replace(
    /(<link\s+rel="canonical"\s+href=")[^"]*(")/,
    `$1${safeCanonicalUrl}$2`
  )
  result = result.replace(
    /(<link\s+rel="alternate"\s+hreflang="sr-RS"\s+href=")[^"]*(")/,
    `$1${safeCanonicalUrl}$2`
  )
  result = result.replace(
    /(<link\s+rel="alternate"\s+hreflang="x-default"\s+href=")[^"]*(")/,
    `$1${safeCanonicalUrl}$2`
  )

  // og:type
  result = result.replace(
    /(<meta\s+property="og:type"\s+content=")[^"]*(")/,
    `$1${safeOgType}$2`
  )

  // article Open Graph (blog/draft only)
  result = result.replace(
    /(<meta\s+property="article:published_time"\s+content=")[^"]*(")/,
    `$1${safeArticleDateIso}$2`
  )
  result = result.replace(
    /(<meta\s+property="article:modified_time"\s+content=")[^"]*(")/,
    `$1${safeArticleDateIso}$2`
  )
  result = result.replace(
    /(<meta\s+property="article:section"\s+content=")[^"]*(")/,
    `$1${safeArticleSection}$2`
  )

  // og:title
  result = result.replace(
    /(<meta\s+property="og:title"\s+content=")[^"]*(")/,
    `$1${safeTitleAttr}$2`
  )

  // og:description
  result = result.replace(
    /(<meta\s+property="og:description"\s+content=")[^"]*(")/,
    `$1${safeDescriptionAttr}$2`
  )

  // og:url
  result = result.replace(
    /(<meta\s+property="og:url"\s+content=")[^"]*(")/,
    `$1${safeCanonicalUrl}$2`
  )

  // og:image + alt
  result = result.replace(
    /(<meta\s+property="og:image"\s+content=")[^"]*(")/,
    `$1${safeOgImageUrl}$2`
  )
  result = result.replace(
    /(<meta\s+property="og:image:alt"\s+content=")[^"]*(")/,
    `$1${safeOgImageAlt}$2`
  )

  // twitter:image
  result = result.replace(
    /(<meta\s+name="twitter:image"\s+content=")[^"]*(")/,
    `$1${safeOgImageUrl}$2`
  )

  // twitter:title
  result = result.replace(
    /(<meta\s+name="twitter:title"\s+content=")[^"]*(")/,
    `$1${safeTitleAttr}$2`
  )

  // twitter:description
  result = result.replace(
    /(<meta\s+name="twitter:description"\s+content=")[^"]*(")/,
    `$1${safeDescriptionAttr}$2`
  )

  // robots (noindex for internal draft routes)
  result = result.replace(
    /(<meta\s+name="robots"\s+content=")[^"]*(")/,
    `$1${safeRobotsContent}$2`
  )

  result = injectServerCoreSchemas(result, cleanPath)
  result = injectServerRouteSpecificSchema(result, cleanPath)
  result = injectServerFaqSchema(result, cleanPath)
  result = injectServerHowToSchema(result, cleanPath, canonicalUrl)
  result = injectServerArticleSchema(result, cleanPath, canonicalUrl)
  result = injectServerBlogListingSchema(result, cleanPath)
  result = injectServerBreadcrumbSchema(result, cleanPath, canonicalUrl, meta)
  return result
}

export { ogMeta, SITE_URL, SERVER_ROUTE_SCHEMAS as serverRouteSchemas }
