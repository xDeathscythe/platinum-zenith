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

// Load blog post data for dynamic OG meta on /blog/:slug
let blogOgPosts = []
try {
  const raw = readFileSync(join(__dir, 'blogOgData.json'), 'utf8')
  blogOgPosts = JSON.parse(raw)
} catch { /* blogOgData.json not yet generated — blog OG falls back to generic */ }

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
    title: 'Kontakt | Platinum Zenith',
    description: 'Kontaktirajte Platinum Zenith i zakažite besplatne konsultacije u Zrenjaninu. Pošaljite upit i dobijte konkretan plan rasta za vaš biznis.',
  },
  '/o-nama': {
    title: 'O Nama | Platinum Zenith',
    description: 'Upoznajte Platinum Zenith tim iz Zrenjanina: digitalni marketing, web design i consulting fokusiran na profitabilan rast i merljive rezultate.',
  },
  '/case-studies': {
    title: 'Case Studies | Rezultati | Platinum Zenith',
    description: 'Pogledajte realne rezultate klijenata Platinum Zenith agencije: rast konverzija, veći prihodi, bolji ROAS i jasni KPI pokazatelji po projektu.',
  },
  '/uslovi-koriscenja': {
    title: 'Uslovi Korišćenja | Platinum Zenith',
    description: 'Pročitajte uslove korišćenja Platinum Zenith usluga, prava i obaveze korisnika, način saradnje, plaćanja i ograničenja odgovornosti.',
  },
  '/uslovi-kupovine': {
    title: 'Uslovi Kupovine | Platinum Zenith',
    description: 'Uslovi kupovine za Platinum Zenith: ugovaranje putem email korespondencije, B2B model saradnje, reklamacije, isporuka i pravila realizacije.',
  },
  '/nacin-placanja': {
    title: 'Način Plaćanja | Platinum Zenith',
    description: 'Način plaćanja za Platinum Zenith: virmansko plaćanje za pravna lica i izdavanje fakture nakon sklopljenog dogovora putem emaila.',
  },
  '/dostava': {
    title: 'Dostava | Platinum Zenith',
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
    title: 'SaaS Marketing | Platinum Zenith',
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
  '/paketi': {
    title: 'Paketi i Cene | Starter, Growth, Enterprise | Platinum Zenith',
    description: 'Izaberite paket koji odgovara vašim potrebama. Starter od €499, Growth od €1.499 ili custom Enterprise rešenje za vaš biznis.',
  },
  '/marketing-agencija-beograd': {
    title: 'Marketing Agencija za Beograd | Platinum Zenith',
    description: 'Digitalni marketing za firme u Beogradu: izrada sajtova, SEO, Google Ads i društvene mreže uz jasne KPI ciljeve, mesečne izveštaje i plan rasta po budžetu.',
  },
  '/seo-optimizacija-cena': {
    title: 'Koliko Košta SEO Optimizacija u Srbiji 2026 | Platinum Zenith',
    description: 'Realne cene SEO optimizacije u Srbiji: osnovni paketi od 300€, napredni od 500€ i premium od 1.200€ mesečno, uz audit sajta i plan rasta pozicija.',
  },
  '/marketing-agencija-zrenjanin': {
    title: 'Marketing Agencija Zrenjanin | Platinum Zenith',
    description: 'Digitalni marketing u Zrenjaninu. Izrada sajtova, SEO, Google Ads, društvene mreže. Lokalna agencija koja donosi rezultate.',
  },
  '/cene-izrade-sajta': {
    title: 'Koliko Košta Izrada Sajta u Srbiji 2026 | Platinum Zenith',
    description: 'Realne cene izrade sajta u Srbiji za 2026. Prezentacioni sajt od 300€, poslovni od 800€, web shop od 1.500€. Vodič kroz cene bez skrivenih troškova.',
  },
  '/agencija-vs-freelancer': {
    title: 'Agencija ili Freelancer? Uporedni Vodič za 2026 | Platinum Zenith',
    description: 'Agencija vs freelancer: realno poređenje po ceni, kvalitetu, rokovima i pouzdanosti. Konkretni saveti za firme u Srbiji.',
  },
  '/cene-digitalnog-marketinga': {
    title: 'Koliko Košta Digitalni Marketing u Srbiji 2026 | Platinum Zenith',
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
    title: 'Koliko Košta Facebook Reklama u Srbiji 2026 | Platinum Zenith',
    description: 'Realne cene Facebook i Instagram oglasa u Srbiji za 2026. CPC od 0,05€, mesečni budžet od 200€. Vodič kroz troškove i česte greške.',
  },
  '/google-reklame-cena': {
    title: 'Koliko Koštaju Google Reklame u Srbiji 2026 | Platinum Zenith',
    description: 'Realne cene Google oglasa u Srbiji za 2026. CPC, budžeti po fazama rasta, trošak po leadu i najčešće greške koje dižu trošak.',
  },
  '/instagram-reklame-cena': {
    title: 'Koliko Koštaju Instagram Reklame u Srbiji 2026 | Platinum Zenith',
    description: 'Realne cene Instagram oglasa u Srbiji za 2026. CPC, CPM, budžeti po fazama rasta i greške koje dižu trošak bez više upita i prodaje.',
  },
  '/izrada-wordpress-sajta-cena': {
    title: 'Koliko Košta Izrada WordPress Sajta u Srbiji 2026 | Platinum Zenith',
    description: 'Cena izrade WordPress sajta u Srbiji 2026: trošak prezentacionog sajta i WooCommerce shopa, šta ulazi u cenu, rokovi i kako da izbegnete skrivene troškove.',
  },
  '/draft/netokracija-cro-case': {
    title: 'DRAFT: Kako smo povećali profit 4x kroz CRO izmene | Platinum Zenith',
    description: 'Interni draft case study članka za Netokraciju o CRO optimizaciji: brzina sajta, mini-korpa, order bumps i Niwa AI logika u realnom e-commerce toku.',
  },
  '/marketing-za-advokate': {
    title: 'Marketing za Advokate | Digitalni Marketing za Advokatske Kancelarije | Platinum Zenith',
    description: 'Marketing za advokatske kancelarije u Srbiji: SEO, Google Ads, sajt i content strategija koja donosi kvalifikovane upite i stabilan rast klijenata.',
  },
  '/marketing-za-stomatologe': {
    title: 'Marketing za Stomatologe | Digitalni Marketing za Ordinacije | Platinum Zenith',
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
    description: 'Izračunajte povrat investicije za marketing budžet uz besplatan ROI kalkulator, benchmarkove po industriji i brzu procenu koliko kampanje zaista donose profita.',
  },
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
  const robotsContent = isDraftPath
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
      /(<meta\s+property="og:url"\s+content=")[^"]*(")/,
      `$1${canonicalUrl}$2`
    )
    result = result.replace(
      /(<meta\s+property="og:type"\s+content=")[^"]*(")/,
      `$1${ogType}$2`
    )
    result = result.replace(
      /(<meta\s+name="robots"\s+content=")[^"]*(")/,
      `$1${robotsContent}$2`
    )
    return result
  }

  let result = html

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

  // <link rel="canonical">
  result = result.replace(
    /(<link\s+rel="canonical"\s+href=")[^"]*(")/,
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

  return result
}

export { ogMeta, SITE_URL }
