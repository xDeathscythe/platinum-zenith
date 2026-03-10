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
}

const HOMEPAGE_WEBSITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Platinum Zenith',
  url: SITE_URL,
  inLanguage: 'sr-RS',
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
    description: 'Digitalni marketing za firme u Beogradu: izrada sajtova, SEO, Google Ads i društvene mreže uz jasne KPI ciljeve, mesečne izveštaje i plan rasta po budžetu.',
  },
  '/seo-optimizacija-cena': {
    title: 'Koliko Košta SEO Optimizacija u Srbiji 2026 | Cene SEO | Platinum Zenith',
    description: 'Realne cene SEO optimizacije u Srbiji: osnovni paketi od 300€, napredni od 500€ i premium od 1.200€ mesečno, uz audit sajta i plan rasta pozicija.',
  },
  '/marketing-agencija-zrenjanin': {
    title: 'Marketing Agencija Zrenjanin | Digitalni Marketing | Platinum Zenith',
    description: 'Digitalni marketing u Zrenjaninu. Izrada sajtova, SEO, Google Ads, društvene mreže. Lokalna agencija koja donosi rezultate.',
  },
  '/cene-izrade-sajta': {
    title: 'Koliko Košta Izrada Sajta u Srbiji 2026 | Cene i Vodič | Platinum Zenith',
    description: 'Realne cene izrade sajta u Srbiji za 2026. Prezentacioni sajt od 300€, poslovni od 800€, web shop od 1.500€. Vodič kroz cene bez skrivenih troškova.',
  },
  '/agencija-vs-freelancer': {
    title: 'Agencija ili Freelancer? Uporedni Vodič za 2026 | Platinum Zenith',
    description: 'Agencija vs freelancer: realno poređenje po ceni, kvalitetu, rokovima i pouzdanosti. Konkretni saveti za firme u Srbiji.',
  },
  '/cene-digitalnog-marketinga': {
    title: 'Koliko Košta Digitalni Marketing u Srbiji 2026 | Cene i Vodič | Platinum Zenith',
    description: 'Realne cene digitalnog marketinga u Srbiji za 2026. Mesečni paketi od 300€, SEO od 200€, Google Ads od 200€. Vodič kroz troškove po usluzi.',
  },
  '/marketing-agencija-novi-sad': {
    title: 'Marketing Agencija Novi Sad | Digitalni Marketing | Platinum Zenith',
    description: 'Marketing agencija za firme u Novom Sadu. Izrada sajtova, SEO, Google Ads, društvene mreže. Besplatna procena i merljivi rezultati.',
  },
  '/web-shop-nema-prodaju': {
    title: 'Web Shop Nema Prodaju? 5 Razloga i Rešenja | Platinum Zenith',
    description: 'Vaš web shop ima posete, ali nema prodaju? Otkrivamo 5 najčešćih razloga, konkretna rešenja za svaki problem i korake za brže podizanje konverzije.',
  },
  '/koliko-kosta-facebook-reklama': {
    title: 'Koliko Košta Facebook Reklama u Srbiji 2026 | Vodič Kroz Cene | Platinum Zenith',
    description: 'Realne cene Facebook i Instagram oglasa u Srbiji za 2026. CPC od 0,05€, mesečni budžet od 200€. Vodič kroz troškove i česte greške.',
  },
  '/google-reklame-cena': {
    title: 'Koliko Koštaju Google Reklame u Srbiji 2026 | Vodič Kroz Cene | Platinum Zenith',
    description: 'Realne cene Google oglasa u Srbiji za 2026. CPC, budžeti po fazama rasta, trošak po leadu i najčešće greške koje dižu trošak.',
    ogImage: `${SITE_URL}/pz-og.jpg`,
    ogImageAlt: 'Google reklame cena u Srbiji 2026 - vodič Platinum Zenith',
  },
  '/instagram-reklame-cena': {
    title: 'Instagram Reklame Cena u Srbiji 2026 | Platinum Zenith',
    description: 'Realne cene Instagram oglasa u Srbiji za 2026. CPC, CPM, budžeti po fazama rasta i greške koje dižu trošak bez više upita i prodaje.',
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
  const shouldNoIndex = isDraftPath || INTERNAL_NOINDEX_PATHS.has(cleanPath)
  const ogType = (isBlogPath || isDraftPath) ? 'article' : 'website'
  const robotsContent = shouldNoIndex
    ? 'noindex, nofollow'
    : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'

  // Dynamic blog post OG: lookup from blogOgData.json
  if (!meta && isBlogPath) {
    const slug = cleanPath.replace('/blog/', '')
    const post = blogOgPosts.find(p => p.slug === slug)
    if (post) {
      meta = {
        title: `${post.title} | Platinum Zenith Blog`,
        description: post.excerpt,
      }
    }
  }

  // Dynamic draft OG: lookup from blogOgData.json
  if (!meta && isDraftPath) {
    const slug = cleanPath.replace('/draft/', '')
    const post = blogOgPosts.find(p => p.slug === slug)
    if (post) {
      meta = {
        title: `DRAFT: ${post.title} | Platinum Zenith`,
        description: post.excerpt,
      }
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

export { ogMeta, SITE_URL }
