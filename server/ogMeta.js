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
  '@id': `${SITE_URL}#organization`,
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
  '@id': `${SITE_URL}#localbusiness`,
  name: 'Platinum Zenith',
  url: SITE_URL,
  image: `${SITE_URL}/pz-og.jpg`,
  email: 'aleksandar@platinumzenith.com',
  telephone: '+381668168929',
  priceRange: '€€',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Ruže Šulman 19',
    addressLocality: 'Zrenjanin',
    postalCode: '23000',
    addressCountry: 'RS',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 45.3836,
    longitude: 20.3819,
  },
  areaServed: {
    '@type': 'Country',
    name: 'Srbija',
  },
  parentOrganization: {
    '@id': `${SITE_URL}#organization`,
  },
  openingHoursSpecification: [{
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '18:00',
  }],
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
    description: 'Google reklame cena u Srbiji 2026: realni CPC i CPA po niši, budžeti po fazi rasta i cena vođenja Google Ads kampanja sa fokusom na profit, ne samo klikove.',
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
    description: 'Instagram reklame cena u Srbiji 2026: CPC, CPM i CPA benchmark, Reels troškovi, preporučeni start budžet i cena vođenja kampanja pre skaliranja.',
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
    '@id': `${SITE_URL}/izrada-wordpress-sajta-cena#service`,
    name: 'Izrada WordPress sajta',
    description: 'Izrada WordPress sajta cena u Srbiji 2026: raspon za prezentacione i WooCommerce projekte, rokovi i održavanje, uz jasnu cenu bez skrivenih troškova.',
    serviceType: 'WordPress web development',
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
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'EUR',
      lowPrice: '400',
      highPrice: '9000',
      offerCount: '4',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'WordPress paketi',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'Start WordPress sajt',
          priceCurrency: 'EUR',
          price: '400',
        },
        {
          '@type': 'Offer',
          name: 'Poslovni WordPress',
          priceCurrency: 'EUR',
          price: '900',
        },
        {
          '@type': 'Offer',
          name: 'WordPress + WooCommerce',
          priceCurrency: 'EUR',
          price: '1600',
        },
        {
          '@type': 'Offer',
          name: 'Custom WordPress sistem',
          priceCurrency: 'EUR',
          price: '3500',
        },
      ],
    },
  },
  '/marketing-za-nekretnine': {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Marketing za agencije za nekretnine',
    serviceType: 'Real estate marketing',
    url: `${SITE_URL}/marketing-za-nekretnine`,
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
  '/marketing-za-autoservise': {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Marketing za autoservise',
    serviceType: 'Auto repair shop marketing',
    url: `${SITE_URL}/marketing-za-autoservise`,
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
  '/marketing-za-frizerske-salone': {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Marketing za frizerske salone',
    serviceType: 'Hair salon marketing',
    url: `${SITE_URL}/marketing-za-frizerske-salone`,
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
  '/marketing-za-kozmeticke-salone': {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Marketing za kozmeticke salone',
    serviceType: 'Beauty salon marketing',
    url: `${SITE_URL}/marketing-za-kozmeticke-salone`,
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
  '/marketing-za-teretane': {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Marketing za teretane i fitnes studije',
    serviceType: 'Gym and fitness marketing',
    url: `${SITE_URL}/marketing-za-teretane`,
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
  '/marketing-za-racunovodje': {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Marketing za računovodstvene agencije',
    serviceType: 'Accounting marketing',
    url: `${SITE_URL}/marketing-za-racunovodje`,
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
  '/marketing-za-privatne-klinike': {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Marketing za privatne klinike',
    serviceType: 'Healthcare marketing',
    url: `${SITE_URL}/marketing-za-privatne-klinike`,
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
  '/marketing-agencija-nis': {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Marketing agencija Nis',
    serviceType: 'Digital marketing agency services',
    url: `${SITE_URL}/marketing-agencija-nis`,
    areaServed: {
      '@type': 'City',
      name: 'Nis',
    },
    provider: {
      '@type': 'Organization',
      name: 'Platinum Zenith',
      url: SITE_URL,
    },
  },
  '/marketing-agencija-kragujevac': {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Marketing agencija Kragujevac',
    serviceType: 'Digital marketing agency services',
    url: `${SITE_URL}/marketing-agencija-kragujevac`,
    areaServed: {
      '@type': 'City',
      name: 'Kragujevac',
    },
    provider: {
      '@type': 'Organization',
      name: 'Platinum Zenith',
      url: SITE_URL,
    },
  },
  '/marketing-agencija-subotica': {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Marketing agencija Subotica',
    serviceType: 'Digital marketing agency services',
    url: `${SITE_URL}/marketing-agencija-subotica`,
    areaServed: {
      '@type': 'City',
      name: 'Subotica',
    },
    provider: {
      '@type': 'Organization',
      name: 'Platinum Zenith',
      url: SITE_URL,
    },
  },
  '/marketing-agencija-pancevo': {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Marketing agencija Pancevo',
    serviceType: 'Digital marketing agency services',
    url: `${SITE_URL}/marketing-agencija-pancevo`,
    areaServed: {
      '@type': 'City',
      name: 'Pancevo',
    },
    provider: {
      '@type': 'Organization',
      name: 'Platinum Zenith',
      url: SITE_URL,
    },
  },
  '/marketing-agencija-cacak': {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Marketing agencija Cacak',
    serviceType: 'Digital marketing agency services',
    url: `${SITE_URL}/marketing-agencija-cacak`,
    areaServed: {
      '@type': 'City',
      name: 'Cacak',
    },
    provider: {
      '@type': 'Organization',
      name: 'Platinum Zenith',
      url: SITE_URL,
    },
  },
  '/marketing-agencija-kraljevo': {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Marketing agencija Kraljevo',
    serviceType: 'Digital marketing agency services',
    url: `${SITE_URL}/marketing-agencija-kraljevo`,
    areaServed: {
      '@type': 'City',
      name: 'Kraljevo',
    },
    provider: {
      '@type': 'Organization',
      name: 'Platinum Zenith',
      url: SITE_URL,
    },
  },
  '/marketing-agencija-krusevac': {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Marketing agencija Krusevac',
    serviceType: 'Digital marketing agency services',
    url: `${SITE_URL}/marketing-agencija-krusevac`,
    areaServed: {
      '@type': 'City',
      name: 'Krusevac',
    },
    provider: {
      '@type': 'Organization',
      name: 'Platinum Zenith',
      url: SITE_URL,
    },
  },
  '/marketing-agencija-leskovac': {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Marketing agencija Leskovac',
    serviceType: 'Digital marketing agency services',
    url: `${SITE_URL}/marketing-agencija-leskovac`,
    areaServed: {
      '@type': 'City',
      name: 'Leskovac',
    },
    provider: {
      '@type': 'Organization',
      name: 'Platinum Zenith',
      url: SITE_URL,
    },
  },
  '/marketing-agencija-uzice': {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Marketing agencija Uzice',
    serviceType: 'Digital marketing agency services',
    url: `${SITE_URL}/marketing-agencija-uzice`,
    areaServed: {
      '@type': 'City',
      name: 'Uzice',
    },
    provider: {
      '@type': 'Organization',
      name: 'Platinum Zenith',
      url: SITE_URL,
    },
  },
  '/marketing-agencija-valjevo': {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Marketing agencija Valjevo',
    serviceType: 'Digital marketing agency services',
    url: `${SITE_URL}/marketing-agencija-valjevo`,
    areaServed: {
      '@type': 'City',
      name: 'Valjevo',
    },
    provider: {
      '@type': 'Organization',
      name: 'Platinum Zenith',
      url: SITE_URL,
    },
  },
  '/marketing-agencija-novi-pazar': {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Marketing agencija Novi Pazar',
    serviceType: 'Digital marketing agency services',
    url: `${SITE_URL}/marketing-agencija-novi-pazar`,
    areaServed: {
      '@type': 'City',
      name: 'Novi Pazar',
    },
    provider: {
      '@type': 'Organization',
      name: 'Platinum Zenith',
      url: SITE_URL,
    },
  },
  '/marketing-agencija-sabac': {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Marketing agencija Sabac',
    serviceType: 'Digital marketing agency services',
    url: `${SITE_URL}/marketing-agencija-sabac`,
    areaServed: {
      '@type': 'City',
      name: 'Sabac',
    },
    provider: {
      '@type': 'Organization',
      name: 'Platinum Zenith',
      url: SITE_URL,
    },
  },
  '/marketing-agencija-smederevo': {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Marketing agencija Smederevo',
    serviceType: 'Digital marketing agency services',
    url: `${SITE_URL}/marketing-agencija-smederevo`,
    areaServed: {
      '@type': 'City',
      name: 'Smederevo',
    },
    provider: {
      '@type': 'Organization',
      name: 'Platinum Zenith',
      url: SITE_URL,
    },
  },
  '/marketing-agencija-sremska-mitrovica': {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Marketing agencija Sremska Mitrovica',
    serviceType: 'Digital marketing agency services',
    url: `${SITE_URL}/marketing-agencija-sremska-mitrovica`,
    areaServed: {
      '@type': 'City',
      name: 'Sremska Mitrovica',
    },
    provider: {
      '@type': 'Organization',
      name: 'Platinum Zenith',
      url: SITE_URL,
    },
  },
  '/marketing-agencija-vranje': {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Marketing agencija Vranje',
    serviceType: 'Digital marketing agency services',
    url: `${SITE_URL}/marketing-agencija-vranje`,
    areaServed: {
      '@type': 'City',
      name: 'Vranje',
    },
    provider: {
      '@type': 'Organization',
      name: 'Platinum Zenith',
      url: SITE_URL,
    },
  },
  '/marketing-agencija-sombor': {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Marketing agencija Sombor',
    serviceType: 'Digital marketing agency services',
    url: `${SITE_URL}/marketing-agencija-sombor`,
    areaServed: {
      '@type': 'City',
      name: 'Sombor',
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
  '/agencija-vs-freelancer': {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Strategijsko savetovanje: agencija vs freelancer',
    serviceType: 'Marketing vendor selection consulting',
    url: `${SITE_URL}/agencija-vs-freelancer`,
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
    description: 'Cene SEO optimizacije u Srbiji 2026: koliko košta lokalni SEO, content i link building, koji paket ima smisla po fazi rasta i kako da procenite realan ROI.',
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
    description: 'Cene SEO optimizacije u Srbiji 2026: koliko košta lokalni SEO, content i link building, koji paket ima smisla po fazi rasta i kako da procenite realan ROI.',
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
    description: 'Cene izrade sajta u Srbiji 2026: prezentacioni, poslovni i web shop paketi, rokovi isporuke, održavanje i troškovi koji se najčešće prećute u ponudi.',
    ogImage: `${SITE_URL}/pz-og.jpg`,
    ogImageAlt: 'Koliko košta izrada sajta u Srbiji - cenovni vodič 2026',
  },
  '/agencija-vs-freelancer': {
    title: 'Agencija ili Freelancer? Uporedni Vodič za 2026 | Platinum Zenith',
    description: 'Agencija vs freelancer: realno poređenje po ceni, kvalitetu, rokovima i pouzdanosti. Konkretni saveti za firme u Srbiji.',
  },
  '/cene-digitalnog-marketinga': {
    title: 'Koliko Košta Digitalni Marketing u Srbiji 2026 | Cene i Vodič | Platinum Zenith',
    description: 'Cene digitalnog marketinga u Srbiji 2026: mesečni budžeti za SEO, Google Ads i Meta Ads, šta ulazi u agencijski fee i kako da planirate profitabilan rast.',
    ogImage: `${SITE_URL}/pz-og.jpg`,
    ogImageAlt: 'Cene digitalnog marketinga u Srbiji 2026 - pregled usluga',
  },
  '/marketing-agencija-novi-sad': {
    title: 'Marketing Agencija Novi Sad | Digitalni Marketing | Platinum Zenith',
    description: 'Marketing agencija za Novi Sad: SEO, Google Ads, Meta kampanje i web optimizacija za stabilan rast upita i prodaje uz transparentno praćenje budžeta.',
    ogImage: `${SITE_URL}/pz-og.jpg`,
    ogImageAlt: 'Marketing agencija Novi Sad - SEO i PPC za stabilan rast',
  },
  '/marketing-agencija-nis': {
    title: 'Marketing Agencija za Nis | Digitalni Marketing | Platinum Zenith',
    description: 'Marketing agencija za Nis: SEO, Google Ads i Meta kampanje koje povecavaju upite i prodaju uz nize troskove akvizicije.',
    ogImage: `${SITE_URL}/pz-og.jpg`,
    ogImageAlt: 'Marketing agencija Nis - digitalni marketing za jug Srbije',
  },
  '/marketing-agencija-kragujevac': {
    title: 'Marketing Agencija za Kragujevac | Digitalni Marketing | Platinum Zenith',
    description: 'Marketing agencija za Kragujevac i Sumadiju: SEO, Google Ads i Meta kampanje za lokalne firme koje zele vise upita i prodaje uz merljiv ROI.',
    ogImage: `${SITE_URL}/pz-og.jpg`,
    ogImageAlt: 'Marketing agencija Kragujevac - digitalni marketing za Sumadiju',
  },
  '/marketing-agencija-subotica': {
    title: 'Marketing Agencija za Suboticu | Digitalni Marketing | Platinum Zenith',
    description: 'Marketing agencija za Suboticu i severnu Vojvodinu: SEO, Google Ads i Meta kampanje za lokalne firme koje zele vise upita i prodaje uz merljiv ROI.',
    ogImage: `${SITE_URL}/pz-og.jpg`,
    ogImageAlt: 'Marketing agencija Subotica - digitalni marketing za severnu Vojvodinu',
  },
  '/marketing-agencija-pancevo': {
    title: 'Marketing Agencija za Pancevo | Digitalni Marketing | Platinum Zenith',
    description: 'Marketing agencija za Pancevo i juzni Banat: SEO, Google Ads i Meta kampanje za lokalne firme koje zele vise upita i prodaje uz merljiv ROI.',
    ogImage: `${SITE_URL}/pz-og.jpg`,
    ogImageAlt: 'Marketing agencija Pancevo - digitalni marketing za juzni Banat',
  },
  '/marketing-agencija-cacak': {
    title: 'Marketing Agencija za Cacak | Digitalni Marketing | Platinum Zenith',
    description: 'Marketing agencija za Cacak i Moravicki okrug: SEO, Google Ads i Meta kampanje za lokalne firme koje zele vise upita i prodaje uz merljiv ROI.',
    ogImage: `${SITE_URL}/pz-og.jpg`,
    ogImageAlt: 'Marketing agencija Cacak - digitalni marketing za Moravicki okrug',
  },
  '/marketing-agencija-kraljevo': {
    title: 'Marketing Agencija za Kraljevo | Digitalni Marketing | Platinum Zenith',
    description: 'Marketing agencija za Kraljevo i Raski okrug: SEO, Google Ads i Meta kampanje za lokalne firme koje zele vise upita i prodaje uz merljiv ROI.',
    ogImage: `${SITE_URL}/pz-og.jpg`,
    ogImageAlt: 'Marketing agencija Kraljevo - digitalni marketing za Raski okrug',
  },
  '/marketing-agencija-krusevac': {
    title: 'Marketing Agencija za Krusevac | Digitalni Marketing | Platinum Zenith',
    description: 'Marketing agencija za Krusevac i Rasinski okrug: SEO, Google Ads i Meta kampanje za lokalne firme koje zele vise upita i prodaje uz merljiv ROI.',
    ogImage: `${SITE_URL}/pz-og.jpg`,
    ogImageAlt: 'Marketing agencija Krusevac - digitalni marketing za Rasinski okrug',
  },
  '/marketing-agencija-leskovac': {
    title: 'Marketing Agencija za Leskovac | Digitalni Marketing | Platinum Zenith',
    description: 'Marketing agencija za Leskovac i Jablanicki okrug: SEO, Google Ads i Meta kampanje za lokalne firme koje zele vise upita i prodaje uz merljiv ROI.',
    ogImage: `${SITE_URL}/pz-og.jpg`,
    ogImageAlt: 'Marketing agencija Leskovac - digitalni marketing za Jablanicki okrug',
  },
  '/marketing-agencija-uzice': {
    title: 'Marketing Agencija za Uzice | Digitalni Marketing | Platinum Zenith',
    description: 'Marketing agencija za Uzice i Zlatiborski okrug: SEO, Google Ads i kampanje na drustvenim mrezama za lokalne firme i turizam uz merljiv ROI.',
    ogImage: `${SITE_URL}/pz-og.jpg`,
    ogImageAlt: 'Marketing agencija Uzice - digitalni marketing za Zlatiborski okrug',
  },
  '/marketing-agencija-valjevo': {
    title: 'Marketing Agencija za Valjevo | Digitalni Marketing | Platinum Zenith',
    description: 'Marketing agencija za Valjevo i Kolubarski okrug: SEO, Google Ads i Meta kampanje za lokalne firme uz merljiv ROI.',
    ogImage: `${SITE_URL}/pz-og.jpg`,
    ogImageAlt: 'Marketing agencija Valjevo - digitalni marketing za Kolubarski okrug',
  },
  '/marketing-agencija-novi-pazar': {
    title: 'Marketing Agencija za Novi Pazar | Digitalni Marketing | Platinum Zenith',
    description: 'Marketing agencija za Novi Pazar i Raski okrug: SEO, Google Ads i Meta kampanje za tekstilnu industriju, ugostiteljstvo i lokalne firme.',
    ogImage: `${SITE_URL}/pz-og.jpg`,
    ogImageAlt: 'Marketing agencija Novi Pazar - digitalni marketing za Raski okrug',
  },
  '/marketing-agencija-sabac': {
    title: 'Marketing Agencija za Sabac | Digitalni Marketing | Platinum Zenith',
    description: 'Marketing agencija za Sabac i Macvanski okrug: SEO, Google Ads i Meta kampanje za poljoprivredu, prehrambenu industriju i lokalne firme.',
    ogImage: `${SITE_URL}/pz-og.jpg`,
    ogImageAlt: 'Marketing agencija Sabac - digitalni marketing za Macvanski okrug',
  },
  '/marketing-agencija-smederevo': {
    title: 'Marketing Agencija za Smederevo | Digitalni Marketing | Platinum Zenith',
    description: 'Marketing agencija za Smederevo i Podunavski okrug: SEO, Google Ads i Meta kampanje za industriju, usluzni sektor i lokalne firme.',
    ogImage: `${SITE_URL}/pz-og.jpg`,
    ogImageAlt: 'Marketing agencija Smederevo - digitalni marketing za Podunavski okrug',
  },
  '/marketing-agencija-sremska-mitrovica': {
    title: 'Marketing Agencija za Sremsku Mitrovicu | Digitalni Marketing | Platinum Zenith',
    description: 'Marketing agencija za Sremsku Mitrovicu i Sremski okrug: SEO, Google Ads i Meta kampanje za prehrambenu industriju, poljoprivredu i lokalne firme.',
    ogImage: `${SITE_URL}/pz-og.jpg`,
    ogImageAlt: 'Marketing agencija Sremska Mitrovica - digitalni marketing za Sremski okrug',
  },
  '/marketing-agencija-vranje': {
    title: 'Marketing Agencija za Vranje | Digitalni Marketing | Platinum Zenith',
    description: 'Marketing agencija za Vranje i Pcinski okrug: SEO, Google Ads i Meta kampanje za tekstilnu industriju, turizam i lokalne firme na jugu Srbije.',
    ogImage: `${SITE_URL}/pz-og.jpg`,
    ogImageAlt: 'Marketing agencija Vranje - digitalni marketing za Pcinski okrug',
  },
    '/marketing-agencija-sombor': {
      title: 'Marketing Agencija za Sombor | Digitalni Marketing | Platinum Zenith',
      description: 'Marketing agencija za Sombor i Zapadnobacki okrug: SEO, Google Ads i Meta kampanje za lokalne firme u zapadnoj Vojvodini.',
      ogImage: `${SITE_URL}/pz-og.jpg`,
      ogImageAlt: 'Marketing agencija Sombor - digitalni marketing za Zapadnobacki okrug',
    },
  '/web-shop-nema-prodaju': {
    title: 'Web Shop Nema Prodaju? 5 Razloga i Rešenja | Platinum Zenith',
    description: 'Vaš web shop ima posete, ali nema prodaju? Otkrivamo 5 najčešćih razloga, konkretna rešenja za svaki problem i korake za brže podizanje konverzije.',
    ogImage: `${SITE_URL}/pz-og.jpg`,
    ogImageAlt: 'Web shop nema prodaju - dijagnostika i koraci za rast konverzije',
  },
  '/koliko-kosta-facebook-reklama': {
    title: 'Koliko Košta Facebook Reklama u Srbiji 2026 | Vodič Kroz Cene | Platinum Zenith',
    description: 'Koliko košta Facebook reklama u Srbiji 2026: realni CPC/CPM/CPA rasponi, početni budžeti, cena vođenja kampanja i greške koje najskuplje podižu trošak.',
    ogImage: `${SITE_URL}/pz-og.jpg`,
    ogImageAlt: 'Koliko košta Facebook reklama u Srbiji - vodič kroz troškove',
  },
  '/google-reklame-cena': {
    title: 'Google Reklame Cena 2026 + Vođenje Kampanja | Platinum Zenith',
    description: 'Google reklame cena u Srbiji 2026: realni CPC i CPA po niši, budžeti po fazi rasta i cena vođenja Google Ads kampanja sa fokusom na profit, ne samo klikove.',
    ogImage: `${SITE_URL}/pz-og.jpg`,
    ogImageAlt: 'Google reklame cena u Srbiji 2026 - vodič Platinum Zenith',
  },
  '/instagram-reklame-cena': {
    title: 'Instagram Reklame Cena 2026 + Vođenje Kampanja | Platinum Zenith',
    description: 'Instagram reklame cena u Srbiji 2026: CPC, CPM i CPA benchmark, Reels troškovi, preporučeni start budžet i cena vođenja kampanja pre skaliranja.',
    ogImage: `${SITE_URL}/pz-og.jpg`,
    ogImageAlt: 'Instagram reklame cena u Srbiji 2026 - vodič Platinum Zenith',
  },
  '/izrada-wordpress-sajta-cena': {
    title: 'Izrada WordPress Sajta Cena u Srbiji 2026 | Platinum Zenith',
    description: 'Izrada WordPress sajta cena u Srbiji 2026: raspon za prezentacione i WooCommerce projekte, rokovi i održavanje, uz jasnu cenu bez skrivenih troškova.',
    ogImage: `${SITE_URL}/pz-og.jpg`,
    ogImageAlt: 'Izrada WordPress sajta cena u Srbiji 2026 - vodič Platinum Zenith',
  },
  '/draft/netokracija-cro-case': {
    title: 'DRAFT: Kako smo povećali profit 4x kroz CRO izmene | Platinum Zenith',
    description: 'Interni draft case study članka za Netokraciju o CRO optimizaciji: brzina sajta, mini-korpa, order bumps i Niwa AI logika u realnom e-commerce toku.',
  },
  '/marketing-za-nekretnine': {
    title: 'Marketing za Agencije za Nekretnine | Platinum Zenith',
    description: 'Digitalni marketing za agencije za nekretnine u Srbiji. Povećajte broj kupaca i prodavaca kroz Google Ads, SEO i Meta kampanje za nekretnine.',
  },
  '/marketing-za-autoservise': {
    title: 'Marketing za Autoservise u Srbiji | Platinum Zenith',
    description: 'Marketing za autoservise u Srbiji: lokalni SEO, Google Ads, sajt i kampanje koje donose pozive i pune raspored servisa.',
  },
  '/marketing-za-frizerske-salone': {
    title: 'Marketing za Frizerske Salone u Srbiji | Platinum Zenith',
    description: 'Marketing za frizerske salone u Srbiji: lokalni SEO, Instagram, Google Ads i booking funnel koji donose vise rezervacija i manje praznih termina.',
  },
  '/marketing-za-kozmeticke-salone': {
    title: 'Marketing za Kozmeticke Salone u Srbiji | Platinum Zenith',
    description: 'Marketing za kozmeticke salone u Srbiji: lokalni SEO, Instagram, Google Ads i booking funnel koji donose vise zakazivanja i manje praznih termina.',
  },
  '/marketing-za-teretane': {
    title: 'Marketing za Teretane i Fitnes Studije u Srbiji | Platinum Zenith',
    description: 'Marketing za teretane i fitnes studije u Srbiji: lokalni SEO, Google Ads, Instagram kampanje i retencija koji pune salu i zadrzavaju clanove.',
  },
  '/marketing-za-racunovodje': {
    title: 'Marketing za Računovodstvene Agencije u Srbiji | Platinum Zenith',
    description: 'Specijalizovani marketing za računovođe i knjigovođe u Srbiji. B2B Google Ads, SEO i LinkedIn strategije koje donose stabilne klijente.',
  },
  '/marketing-za-privatne-klinike': {
    title: 'Marketing za Privatne Klinike u Srbiji | Platinum Zenith',
    description: 'Marketing za privatne klinike u Srbiji: Google Ads po specijalizaciji, lokalni SEO, sajt za zakazivanje i remarketing koji dovodi pacijente sa pravom namerom.',
  },
  '/marketing-za-privatne-vrtice': {
    title: 'Marketing za Privatne Vrtice u Srbiji | Platinum Zenith',
    description: 'Marketing za privatne vrtice u Srbiji: lokalni SEO, Google Ads, Instagram kampanje i sajt koji popunjavaju grupe kvalitetnim upisima tokom cele godine.',
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
      q: 'Koliko traje izrada WordPress sajta?',
      a: 'Start sajt obično 1-2 nedelje, poslovni 2-5 nedelja, a WooCommerce projekti 4-8 nedelja u zavisnosti od obima.',
    },
    {
      q: 'Da li WordPress može da bude brz?',
      a: 'Da. Uz dobar hosting, kvalitetan theme setup, optimizovane slike i keš strategiju WordPress može imati vrlo dobar PageSpeed.',
    },
    {
      q: 'Da li mogu sam da menjam sadržaj?',
      a: 'Da, to je jedna od glavnih prednosti WordPress-a. Nakon isporuke dobijate kratko uputstvo za osnovne izmene.',
    },
    {
      q: 'Koliko košta održavanje WordPress sajta?',
      a: 'Zavisi od obima, ali osnovno održavanje je najčešće 50-200€ mesečno. U to ulaze update-i, backup i osnovni sigurnosni monitoring.',
    },
    {
      q: 'WordPress ili custom development?',
      a: 'Ako želite bržu isporuku i fleksibilan CMS, WordPress je često bolji izbor. Za specifične sisteme sa posebnom logikom nekad je bolji custom pristup.',
    },
    {
      q: 'Da li su domen, hosting i licence uključeni u cenu izrade?',
      a: 'Najčešće se vode kao posebne stavke. Zdrava ponuda ih jasno razdvaja na jednokratni trošak izrade i mesečni operativni trošak.',
    },
    {
      q: 'Koji su najčešći skriveni troškovi WordPress projekta?',
      a: 'Najčešće su to premium licence, hitne intervencije bez maintenance plana i kasne UX/SEO dorade. Zato je važno da roadmap i održavanje budu deo dogovora od starta.',
    },
  ],
  '/marketing-za-nekretnine': [
    {
      q: 'Koji kanali najbolje rade za nekretnine?',
      a: 'Google Ads donosi kupce koji aktivno traže specifične stanove, dok Meta Ads sa video turama podiže interesovanje i prikuplja kontakte prodavaca.',
    },
    {
      q: 'Koliko traje SEO za agenciju za nekretnine?',
      a: 'Lokalni SEO može pokazati prve rezultate za nekoliko nedelja na nivou grada, dok nacionalne pretrage zahtevaju više meseci rada.',
    },
  ],
  '/marketing-za-autoservise': [
    {
      q: 'Koliko brzo autoservis moze da dobije nove musterije preko Google-a?',
      a: 'Ako je Google Business profil dobro popunjen i kampanja pravilno podesena, prvi pozivi obicno stizu vec u prvoj ili drugoj nedelji. Za stabilan protok obicno treba 4 do 6 nedelja optimizacije.',
    },
    {
      q: 'Da li autoservis mora da ima sajt ili je dovoljan Google Business?',
      a: 'Google Business je obavezan minimum, ali sajt sa jasnim cenama, uslugama i recenzijama drasticno povecava poverenje i konverziju. Ljudi cesto uporedjuju dva-tri servisa pre nego sto pozovu.',
    },
    {
      q: 'Koliko kosta marketing za autoservis mesecno?',
      a: 'Zavisi od grada i konkurencije, ali vecina autoservisa u Srbiji krece sa 300 do 800 evra mesecno za Google Ads i lokalni SEO. Bitnije od budzeta je da se prati cena po pozivu i zakazivanju.',
    },
    {
      q: 'Koje usluge autoservisa se najlakse reklamiraju?',
      a: 'Hitne usluge kao sto su zamena ulja, klima servis, dijagnostika i vulkanizerske usluge imaju jak intent na pretrazi. Sezonske kampanje za klimu ili zimske gume takodje donose odlicne rezultate.',
    },
  ],
  '/marketing-za-frizerske-salone': [
    {
      q: 'Da li su za frizerski salon vazniji Instagram ili Google?',
      a: 'Google hvata ljude koji sada traze salon, dok Instagram gradi zelju, poverenje i vraca ljude koji jos razmisljaju. Najjaci rezultat je obicno kombinacija, ali ne krecemo naslepo na sve odjednom.',
    },
    {
      q: 'Koliko brzo salon moze da vidi vise rezervacija?',
      a: 'Ako su ponuda, booking put i lokalni signal dobro postavljeni, prvi kvalitetni upiti mogu da stignu brzo, a realnija slika o ceni rezervacije obicno se vidi kroz prve 3 do 6 nedelja.',
    },
    {
      q: 'Da li salonu treba sajt ako vec ima aktivan Instagram?',
      a: 'Vrlo cesto da. Instagram je dobar za paznju, ali sajt ili landing pomaze da klijent brzo vidi usluge, lokaciju, recenzije i jasan sledeci korak bez lutanja kroz DM poruke.',
    },
    {
      q: 'Koje usluge najcesce prve gurate kod salona?',
      a: 'To zavisi od cilja i kapaciteta, ali cesto prvo guramo tretmane koji imaju dobru marzu, jak vizuelni efekat i veci lifetime value. Poenta nije da reklamiramo sve, nego ono sto najzdravije puni kalendar.',
    },
  ],
  '/marketing-za-kozmeticke-salone': [
    {
      q: 'Da li su za kozmeticki salon vazniji Instagram ili Google?',
      a: 'Oba kanala imaju razlicitu ulogu. Google hvata ljude koji sada traze tretman u svom gradu, dok Instagram gradi zelju, poverenje i vraca ljude koji jos razmisljaju. Vecina salona profitira kad oba kanala rade zajedno.',
    },
    {
      q: 'Koliko brzo salon moze da vidi vise zakazivanja?',
      a: 'Ako su ponuda, booking put i lokalni signal dobro postavljeni, prvi kvalitetni upiti mogu da stignu vec u prvoj nedelji. Realnija slika o ceni termina obicno se vidi kroz 3 do 6 nedelja.',
    },
    {
      q: 'Da li salonu treba sajt ako vec ima jak Instagram profil?',
      a: 'Najcesce da. Instagram je odlican za paznju, ali sajt ili landing pomaze klijentu da brzo vidi cene, usluge, lokaciju, recenzije i jasan sledeci korak bez lutanja kroz DM poruke.',
    },
    {
      q: 'Koliki budzet treba za pocetak?',
      a: 'Za Google Ads u kozmetici, realan start je 250 do 500 evra mesecno za ad spend, plus fee za vodjenje kampanje. Za Instagram, slican raspon moze da donese prve rezultate ako je kreativa i ponuda dobro postavljena.',
    },
  ],
  '/marketing-za-teretane': [
    {
      q: 'Da li teretani vise odgovara Google ili Instagram marketing?',
      a: 'Google hvata ljude koji aktivno traze teretanu u svom kraju i spremni su da se upisu. Instagram gradi zelju, pokazuje atmosferu i vraca ljude koji razmisljaju. Najbolji rezultat dolazi kada oba kanala rade zajedno.',
    },
    {
      q: 'Koliko brzo mogu da ocekujem nove clanove?',
      a: 'Ako su ponuda i landing dobro postavljeni, prvi upiti za probni trening mogu doci vec u prvoj nedelji kampanje. Stabilnija slika o ceni po clanu i kvalitetu upisa obicno se vidi kroz 4 do 8 nedelja.',
    },
    {
      q: 'Koji budzet je realan za pocetak?',
      a: 'Za Meta kampanje, realan start je 300 do 600 evra mesecno za ad spend, plus fee za vodjenje. Za Google Ads u fitnes industriji, slican raspon moze dati rezultate u lokalnom krugu.',
    },
    {
      q: 'Kako da zadrzim clanove, ne samo da upisem nove?',
      a: 'Retencija pocinje od onboarding iskustva: prvi trening, follow-up poruka, raspored. Marketing pomaze kroz automatizovane email/SMS sekvence, loyalty ponude i win-back kampanje za neaktivne clanove.',
    },
    {
      q: 'Da li radite i za male studije, ne samo za velike sale?',
      a: 'Da. Pilates studio, yoga sala, CrossFit box i boutique gym zahtevaju prilagodjen pristup jer zive od manjeg broja premium clanova, ali principi lokalnog marketinga su isti.',
    },
  ],
  '/marketing-za-racunovodje': [
    {
      q: 'Koliko košta marketing za računovodstvenu agenciju?',
      a: 'Osnovni paket (sajt + SEO + Google Business) kreće od 400€ mesečno. Sa Google Ads kampanjama, realan budžet je 600-1.500€ mesečno. Jedan novi klijent koji ostaje godinu dana obično pokriva troškove marketinga za ceo kvartal.'
    },
    {
      q: 'Da li se isplati ulagati u marketing kad radim sam?',
      a: 'Posebno tada. Solo računovođe imaju kapacitet za 30-50 klijenata. Cilj nije 100 upita mesečno, nego 3-5 kvalitetnih klijenata koji odgovaraju vašem profilu. Ciljani marketing to omogućava.'
    },
    {
      q: 'Koliko brzo mogu očekivati nove klijente?',
      a: 'Google Ads donosi upite za 1-2 nedelje. SEO zahteva 3-6 meseci za značajne rezultate. Preporuka je kombinacija: oglasi za brze rezultate, SEO za dugoročni tok klijenata bez plaćanja po kliku.'
    },
    {
      q: 'Koji tip sadržaja najbolje radi za računovođe?',
      a: 'Praktični vodiči o poreskim obavezama, rokovima, razlike između oblika poslovanja (paušalac vs DOO). Ljudi pretražuju ove teme pre nego što izaberu računovođu, i kad nađu koristan odgovor na vašem sajtu, veruju vam.'
    },
    {
      q: 'Da li radite samo sa agencijama iz velikih gradova?',
      a: 'Ne. Radimo sa računovodstvenim agencijama iz cele Srbije. U manjim gradovima online konkurencija je slabija, pa su rezultati brži. Ako nudite cloud knjigovodstvo, geografija uopšte nije ograničenje.'
    }
  ],

  '/marketing-za-privatne-klinike': [
    {
      q: 'Koliki budzet treba privatnoj klinici za Google Ads?',
      a: 'Za pocetak, 400 do 800 evra mesecno za ad spend obicno pokriva 2-3 specijalizacije u jednom gradu. Klinike sa vise lokacija ili premium uslugama idu iznad toga, ali je bitno da se budzet rasporedi po uslugama koje nose najvisu maruzu.',
    },
    {
      q: 'Koliko brzo klinika moze da vidi nove pacijente iz kampanja?',
      a: 'Google Ads za zdravstvene usluge obicno donosi prve kvalitetne upite vec u prvoj nedelji. Realnija slika o ceni pacijenta i kvalitetu leadova formira se kroz 4 do 6 nedelja rada.',
    },
    {
      q: 'Da li smemo da koristimo pre-posle fotografije u reklamama?',
      a: 'Google i Meta imaju stroga pravila za zdravstveni marketing. Pre-posle slike su ogranicene, ali postoje nacini da se grade poverenje bez krsenja politika: edukativni sadrzaj, video objasnjenja i recenzije.',
    },
    {
      q: 'Kako merite uspeh kampanje za kliniku?',
      a: 'Pratimo cenu po kvalifikovanom upitu, stopu konverzije sa sajta, broj zakazanih pregleda i prihod po pacijentu. Cilj nije samo dovesti klikove, nego pacijente koji zaista zakazu i dodju na pregled.',
    },
    {
      q: 'Da li klinici treba sajt ako vec ima profil na doktorima.rs?',
      a: 'Portal je koristan za recenzije, ali ne daje kontrolu nad porukom, cenama, lekarima i zakazivanjem. Sopstveni sajt znaci pun utisak o klinici bez distrakcija od konkurentskih oglasa.',
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
  '/marketing-agencija-nis': [
    {
      q: 'Da li imate klijente na jugu Srbije?',
      a: 'Da, radimo sa firmama iz cele Srbije. Komunikacija je online, a rezultati su merljivi bez obzira na udaljenost.',
    },
    {
      q: 'Koliko je jeftiniji CPC u Nisu u poredjenju sa Beogradom?',
      a: 'Za vecinu lokalnih usluga, CPC u Nisu je dva do tri puta nizi nego u Beogradu, sto znaci vise klikova za isti budzet.',
    },
  ],
  '/marketing-agencija-kragujevac': [
    {
      q: 'Zasto bih birao agenciju koja nije iz Kragujevca?',
      a: 'Zato sto lokacija agencije ne odredjuje kvalitet rada. Digitalni marketing se radi online. Bitni su rezultati, ne fizicka blizina kancelarije.',
    },
    {
      q: 'Kakav je CPC u Kragujevcu u odnosu na Beograd?',
      a: 'Za lokalne usluge, CPC u Kragujevcu je obicno dva do tri puta nizi nego u Beogradu. Manja konkurencija znaci vise klikova za isti budzet.',
    },
  ],
  '/marketing-agencija-subotica': [
    {
      q: 'Zasto bih birao agenciju koja nije iz Subotice?',
      a: 'Zato sto kvalitet digitalnog marketinga ne zavisi od fizicke lokacije agencije. Rad se odvija online, rezultati su merljivi, a komunikacija funkcionise jednako dobro preko video poziva.',
    },
    {
      q: 'Da li mozete da radite kampanje i na madjarskom jeziku?',
      a: 'Mozemo da prilagodimo kampanje za dvojezicnu publiku u Subotici. Lokalni SEO i oglasi na madjarskom pomazu da dopremo do svih potencijalnih klijenata.',
    },
  ],
  '/marketing-agencija-pancevo': [
    {
      q: 'Zasto bih birao agenciju koja nije iz Panceva?',
      a: 'Zato sto kvalitet digitalnog marketinga ne zavisi od fizicke lokacije agencije. Rad se odvija online, rezultati su merljivi, a komunikacija funkcionise jednako dobro preko video poziva.',
    },
    {
      q: 'Da li pokrivate i okolna mesta poput Starceva i Omoljice?',
      a: 'Naravno. Lokalni SEO i Google Ads kampanje mogu da ciljaju ceo juzni Banat, ukljucujuci Starcevo, Omoljicu, Opovo i Kovin.',
    },
  ],
  '/marketing-agencija-cacak': [
    {
      q: 'Zasto bih birao agenciju koja nije iz Cacka?',
      a: 'Zato sto kvalitet digitalnog marketinga ne zavisi od fizicke lokacije agencije. Rad se odvija online, rezultati su merljivi, a komunikacija funkcionise jednako dobro preko video poziva.',
    },
    {
      q: 'Da li pokrivate i okolna mesta poput Gornjeg Milanovca i Lucana?',
      a: 'Naravno. Lokalni SEO i Google Ads kampanje mogu da ciljaju ceo Moravicki okrug, ukljucujuci Gornji Milanovac, Lucane, Ivanjicu i okolna naselja.',
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
  '/agencija-vs-freelancer': [
    {
      q: 'Da li je agencija uvek bolja od freelancera?',
      a: 'Ne. Za male, jasno definisane projekte, dobar freelancer je često bolji izbor. Agencija ima smisla kad vam treba tim koji pokriva više oblasti ili kad je projekat dovoljno velik da jedna osoba ne može da ga iznese sama.',
    },
    {
      q: 'Koliko košta rad sa agencijom u Srbiji?',
      a: 'Zavisi od obima. Mesečni marketing paketi kreću od 500€, izrada sajta od 800€. Za pun paket, poput sajta, marketinga i strategije, računajte okvirno na 1.500€ do 3.000€ mesečno, uz ceo tim u pozadini.',
    },
    {
      q: 'Kako da proverim da li je freelancer pouzdan?',
      a: 'Tražite portfolio sa realnim projektima, ne template sajtovima. Pitajte za reference, dogovorite manji probni projekat i obavezno tražite jasan pisani dogovor oko rokova, opsega i odgovornosti.',
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
        anchor: 'vrednost-klijenta',
      },
      {
        name: 'Odredite maksimalni prihvatljiv CPA',
        text: 'Izračunajte kolika cena po leadu ili kupovini vam i dalje ostavlja zdravu maržu. To je gornja granica preko koje kampanja više nije održiva.',
        anchor: 'maksimalni-cpa',
      },
      {
        name: 'Izračunajte potreban broj leadova za ciljani prihod',
        text: 'Povežite target prihoda sa prosečnom stopom zatvaranja prodaje, pa izračunajte koliko vam kvalifikovanih leadova realno treba svakog meseca.',
        anchor: 'broj-leadova',
      },
      {
        name: 'Postavite test budžet sa dovoljno podataka za optimizaciju',
        text: 'Prvi budžet postavite tako da u prvih 30 dana dobijete barem 200 do 400 klikova i dovoljno konverzija za ozbiljnu optimizaciju, umesto da kampanju gasite na osnovu premalo podataka.',
        anchor: 'test-budzet-google',
      },
    ],
  },
  '/instagram-reklame-cena': {
    name: 'Kako da postavite Instagram Ads budžet koji donosi kvalifikovane upite',
    description: 'Korak-po-korak okvir za planiranje Instagram Ads budžeta kroz faze testiranja, optimizacije i skaliranja bez rasipanja medije.',
    totalTime: 'PT18M',
    step: [
      {
        name: 'Definišite jedan jasan cilj kampanje',
        text: 'Pre budžeta izaberite jednu primarnu akciju koju želite da korisnik uradi, na primer lead forma, poruka ili kupovina, jer mešanje više ciljeva u startu otežava optimizaciju.',
        anchor: 'cilj-kampanje',
      },
      {
        name: 'Napravite test budžet po kreativnom uglu',
        text: 'Raspodelite budžet na 3 do 6 kreativnih varijanti sa različitim hook porukama, kako biste u prvih 14 dana dobili signal šta publika zaista klikće i čemu veruje.',
        anchor: 'test-budzet',
      },
      {
        name: 'Odvojite cold i retargeting publiku',
        text: 'Budžet ne sme da ide u isti koš za novu i toplu publiku, zato zasebno merite cenu rezultata za cold i retargeting set da biste jasno videli gde je profitabilniji signal.',
        anchor: 'cold-retargeting',
      },
      {
        name: 'Skalirajte samo pobedničke ad setove',
        text: 'Kada se pojavi stabilan CPA i kvalitet leadova, povećavajte budžet postepeno u manjim koracima i gasite slabe kombinacije pre nego što pojedu veći deo mesečnog plana.',
        anchor: 'skaliranje',
      },
    ],
  },
  '/izrada-wordpress-sajta-cena': {
    name: 'Kako da procenite realan budžet za izradu WordPress sajta',
    description: 'Praktičan vodič kako da planirate WordPress projekat kroz scope, tehničke zahteve i trošak održavanja da biste izbegli skupe revizije.',
    totalTime: 'PT22M',
    step: [
      {
        name: 'Definišite poslovni cilj i tip sajta',
        text: 'Prvo odredite da li vam treba prezentacioni, lead generation ili WooCommerce sajt, jer od tipa projekta direktno zavise arhitektura, obim rada i početni budžet.',
        anchor: 'tip-sajta',
      },
      {
        name: 'Mapirajte stranice i funkcionalnosti pre ponude',
        text: 'Napravite listu potrebnih stranica, formi, integracija i custom sekcija pre nego što tražite cenu, pošto nejasan scope skoro uvek vodi ka kasnijim doplatama.',
        anchor: 'scope-funkcionalnosti',
      },
      {
        name: 'Odvojite jednokratni trošak izrade i mesečni TCO',
        text: 'Pored launch cene posebno planirajte hosting, licence, maintenance i backup politiku, jer ukupni godišnji trošak vlasništva daje realniju sliku ulaganja od same početne cifre.',
        anchor: 'tco-plan',
      },
      {
        name: 'Uvedite 90-dnevni plan optimizacije posle launch-a',
        text: 'Dogovorite unapred šta se radi u prva tri meseca nakon puštanja sajta, uključujući SEO i CRO iteracije, kako biste brže pretvorili saobraćaj u konkretne upite ili prodaje.',
        anchor: 'post-launch-plan',
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
      url: `${canonicalUrl}#${item.anchor || `korak-${index + 1}`}`,
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
        description: post.excerpt,
        url: `${SITE_URL}/blog/${post.slug}`,
        inLanguage: 'sr-RS',
        image: post.ogImage || DEFAULT_OG_IMAGE,
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

      if (post.category) {
        item.articleSection = post.category
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
      /(<meta\s+name="twitter:image:alt"\s+content=")[^"]*(")/,
      `$1${safeDefaultOgImageAlt}$2`
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
  result = result.replace(
    /(<meta\s+name="twitter:image:alt"\s+content=")[^"]*(")/,
    `$1${safeOgImageAlt}$2`
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

export {
  ogMeta,
  SITE_URL,
  SERVER_ROUTE_SCHEMAS as serverRouteSchemas,
  CORE_ORG_SCHEMA as serverOrgSchema,
  CORE_LOCAL_BUSINESS_SCHEMA as serverLocalBusinessSchema,
  HOMEPAGE_WEBSITE_SCHEMA as serverWebsiteSchema,
}
