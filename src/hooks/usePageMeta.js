import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const SITE_URL = 'https://platinumzenith.com'

const pageMeta = {
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
  '/kontakt': {
    title: 'Kontakt | Platinum Zenith',
    description: 'Zakažite besplatne konsultacije. aleksandar@platinumzenith.com. Ruže Šulman 19, Zrenjanin, Srbija.',
    keywords: 'kontakt, konsultacije, Platinum Zenith kontakt, Zrenjanin',
  },
  '/o-nama': {
    title: 'O Nama | Platinum Zenith',
    description: 'Digitalna agencija iz Zrenjanina. 50+ klijenata, 15x prosečan ROAS, 97% zadovoljstvo klijenata.',
    keywords: 'o nama, Platinum Zenith, digitalna agencija Zrenjanin, tim, misija',
  },
  '/case-studies': {
    title: 'Case Studies | Rezultati | Platinum Zenith',
    description: 'Pogledajte rezultate naših klijenata. +350% konverzije, €18,500/mesec prihod, 520% ROI.',
    keywords: 'case studies, rezultati, portfolio, referentni projekti, ROI',
  },
  '/paketi': {
    title: 'Paketi & Cene | Platinum Zenith',
    description: 'Starter €499/mesec, Growth €1,499/mesec, Enterprise custom. Transparentne cene bez skrivenih troškova.',
    keywords: 'cene, paketi, pricing, Starter, Growth, Enterprise',
  },
  '/uslovi-koriscenja': {
    title: 'Uslovi Korišćenja | Platinum Zenith',
    description: 'Uslovi korišćenja usluga Platinum Zenith Agency. Prava, obaveze, garancije i pravila saradnje.',
    keywords: 'uslovi korišćenja, terms of service, pravila, Platinum Zenith',
  },
  '/politika-privatnosti': {
    title: 'Politika Privatnosti | Platinum Zenith',
    description: 'Saznajte kako Platinum Zenith prikuplja, koristi i štiti vaše lične podatke. GDPR usklađeno.',
    keywords: 'politika privatnosti, privacy policy, GDPR, zaštita podataka, kolačići',
  },
  '/drustvene-mreze': {
    title: 'Društvene Mreže | Instagram, Facebook, TikTok, LinkedIn | Platinum Zenith',
    description: 'Sadržaj koji algoritam nagrađuje i publiku pretvara u kupce. Instagram, Facebook, TikTok i LinkedIn upravljanje.',
    keywords: 'društvene mreže, Instagram marketing, Facebook marketing, TikTok, LinkedIn, social media management, SMM',
  },
  '/faq': {
    title: 'Česta Pitanja (FAQ) | Platinum Zenith',
    description: 'Odgovori na najčešća pitanja o saradnji, cenama, rokovima i procesu rada sa Platinum Zenith agencijom.',
    keywords: 'FAQ, česta pitanja, cene, saradnja, marketing agencija pitanja',
  },
  '/blog': {
    title: 'Blog | Marketing Saveti i Strategije | Platinum Zenith',
    description: 'Praktični saveti o digitalnom marketingu, Facebook oglasima, SEO-u i rastu biznisa. Bez floskula, samo konkretni koraci.',
    keywords: 'blog, marketing saveti, Facebook oglasi, SEO, digitalni marketing blog',
  },
  '/industrije/e-commerce': {
    title: 'E-Commerce Marketing | Online Prodavnice | Platinum Zenith',
    description: 'Kompletni sistemi za e-commerce brendove: Meta Ads, email automatizacija, CRO, retargeting. 4.2x prosečan ROAS.',
    keywords: 'e-commerce marketing, online prodavnica, ROAS, Shopify marketing, WooCommerce, retargeting',
  },
  '/industrije/saas': {
    title: 'SaaS Marketing | Rast Korisničke Baze | Platinum Zenith',
    description: 'Marketing za SaaS kompanije: akvizicija, aktivacija, retencija. Od prvih 100 korisnika do skaliranja MRR-a.',
    keywords: 'SaaS marketing, MRR rast, trial konverzija, B2B marketing, churn reduction, CAC',
  },
  '/industrije/lokalni-biznisi': {
    title: 'Marketing za Lokalne Biznise | Google Maps, Lokalni SEO | Platinum Zenith',
    description: 'Kad neko pretraži, vi se pojavite prvi. Google Business profil, lokalni SEO, Google Ads sa geo-targetiranjem.',
    keywords: 'lokalni marketing, lokalni SEO, Google Business, Google Maps, lokalni biznisi, marketing Zrenjanin',
  },
  '/industrije/startapovi': {
    title: 'Marketing za Startapove | Od Ideje do Prvih 100 Korisnika | Platinum Zenith',
    description: 'Od validacije do skaliranja. Marketing sistemi za startape sa ograničenim budžetom i velikim ambicijama.',
    keywords: 'startup marketing, growth hacking, go-to-market, startup Srbija, rast korisnika',
  },
}

/* JSON-LD Organization schema */
const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Platinum Zenith",
  "url": SITE_URL,
  "logo": `${SITE_URL}/pz-logo.svg`,
  "description": "Digitalna marketing agencija iz Zrenjanina, Srbija. Web dizajn, digitalni marketing, CRO, consulting.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Ruže Šulman 19",
    "addressLocality": "Zrenjanin",
    "addressCountry": "RS"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "aleksandar@platinumzenith.com",
    "contactType": "customer service",
    "availableLanguage": ["Serbian", "English"]
  },
  "sameAs": []
}

/* JSON-LD WebSite schema for sitelinks */
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Platinum Zenith",
  "url": SITE_URL,
  "potentialAction": {
    "@type": "SearchAction",
    "target": `${SITE_URL}/?s={search_term_string}`,
    "query-input": "required name=search_term_string"
  }
}

/* Page-specific schemas */
const pageSchemas = {
  '/web-design': {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Web Design & Izrada Sajta",
    "provider": { "@type": "Organization", "name": "Platinum Zenith" },
    "description": "Profesionalna izrada web sajtova sa fokusom na konverziju i performanse. WordPress, React, WooCommerce.",
    "areaServed": { "@type": "Country", "name": "Serbia" },
    "serviceType": "Web Design"
  },
  '/digitalni-marketing': {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Digitalni Marketing",
    "provider": { "@type": "Organization", "name": "Platinum Zenith" },
    "description": "Meta Ads, Google Ads, TikTok Ads kampanje. Dokazan Zenith sistem za predvidljivu akviziciju klijenata.",
    "areaServed": { "@type": "Country", "name": "Serbia" },
    "serviceType": "Digital Marketing"
  },
  '/consulting': {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Poslovno Savetovanje",
    "provider": { "@type": "Organization", "name": "Platinum Zenith" },
    "description": "Biznis audit, strategija rasta i implementacija za mala i srednja preduzeća.",
    "areaServed": { "@type": "Country", "name": "Serbia" },
    "serviceType": "Business Consulting"
  },
  '/cro': {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "CRO Optimizacija",
    "provider": { "@type": "Organization", "name": "Platinum Zenith" },
    "description": "Optimizacija stope konverzije. A/B testiranje, UX audit, heatmap analiza.",
    "areaServed": { "@type": "Country", "name": "Serbia" },
    "serviceType": "Conversion Rate Optimization"
  },
  '/drustvene-mreze': {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Upravljanje Društvenim Mrežama",
    "provider": { "@type": "Organization", "name": "Platinum Zenith" },
    "description": "Instagram, Facebook, TikTok i LinkedIn marketing. Organski rast i plaćeni oglasi.",
    "areaServed": { "@type": "Country", "name": "Serbia" },
    "serviceType": "Social Media Marketing"
  },
  '/paketi': {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Platinum Zenith Paketi",
    "description": "Marketing i web dizajn paketi",
    "offers": [
      {
        "@type": "Offer",
        "name": "Starter",
        "price": "499",
        "priceCurrency": "EUR",
        "priceSpecification": { "@type": "UnitPriceSpecification", "billingDuration": "P1M" }
      },
      {
        "@type": "Offer",
        "name": "Growth",
        "price": "1499",
        "priceCurrency": "EUR",
        "priceSpecification": { "@type": "UnitPriceSpecification", "billingDuration": "P1M" }
      }
    ]
  }
}

function setJsonLd(id, data) {
  let el = document.getElementById(id)
  if (!el) {
    el = document.createElement('script')
    el.id = id
    el.type = 'application/ld+json'
    document.head.appendChild(el)
  }
  el.textContent = JSON.stringify(data)
}

export default function usePageMeta() {
  const { pathname } = useLocation()

  useEffect(() => {
    const meta = pageMeta[pathname] || pageMeta['/']
    document.title = meta.title

    // Description
    const descTag = document.querySelector('meta[name="description"]')
    if (descTag) descTag.setAttribute('content', meta.description)

    // Keywords
    let kwTag = document.querySelector('meta[name="keywords"]')
    if (!kwTag) {
      kwTag = document.createElement('meta')
      kwTag.name = 'keywords'
      document.head.appendChild(kwTag)
    }
    kwTag.setAttribute('content', meta.keywords || '')

    // Open Graph
    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.setAttribute('content', meta.title)
    const ogDesc = document.querySelector('meta[property="og:description"]')
    if (ogDesc) ogDesc.setAttribute('content', meta.description)

    // Canonical URL
    const canonicalUrl = `${SITE_URL}${pathname === '/' ? '/' : pathname}`
    const canonical = document.querySelector('link[rel="canonical"]')
    if (canonical) canonical.setAttribute('href', canonicalUrl)
    const ogUrl = document.querySelector('meta[property="og:url"]')
    if (ogUrl) ogUrl.setAttribute('content', canonicalUrl)

    // JSON-LD: Organization (always)
    setJsonLd('ld-org', orgSchema)
    // JSON-LD: WebSite (homepage only)
    if (pathname === '/') setJsonLd('ld-website', websiteSchema)
    else {
      const ws = document.getElementById('ld-website')
      if (ws) ws.remove()
    }
    // JSON-LD: Page-specific
    if (pageSchemas[pathname]) {
      setJsonLd('ld-page', pageSchemas[pathname])
    } else {
      const ps = document.getElementById('ld-page')
      if (ps) ps.remove()
    }

    // JSON-LD: Blog Article + Breadcrumb (dynamic import to avoid bundling blogData in main chunk)
    const blogMatch = pathname.match(/^\/blog\/(.+)$/)
    if (blogMatch || pathname === '/blog') {
      import('../pages/blog/blogData').then(({ blogPosts }) => {
        if (blogMatch) {
          const post = blogPosts.find(p => p.slug === blogMatch[1])
          if (post) {
            document.title = `${post.title} | Platinum Zenith Blog`
            if (descTag) descTag.setAttribute('content', post.excerpt)
            if (ogTitle) ogTitle.setAttribute('content', post.title)
            if (ogDesc) ogDesc.setAttribute('content', post.excerpt)

            setJsonLd('ld-article', {
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": post.title,
              "description": post.excerpt,
              "datePublished": post.date,
              "dateModified": post.date,
              "author": { "@type": "Organization", "name": "Platinum Zenith", "url": SITE_URL },
              "publisher": { "@type": "Organization", "name": "Platinum Zenith", "url": SITE_URL, "logo": { "@type": "ImageObject", "url": `${SITE_URL}/pz-logo.svg` } },
              "mainEntityOfPage": { "@type": "WebPage", "@id": `${SITE_URL}/blog/${post.slug}` },
              "articleSection": post.category,
              "wordCount": post.content ? post.content.split(/\s+/).length : 0,
              "inLanguage": "sr"
            })
            setJsonLd('ld-breadcrumb', {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Početna", "item": SITE_URL },
                { "@type": "ListItem", "position": 2, "name": "Blog", "item": `${SITE_URL}/blog` },
                { "@type": "ListItem", "position": 3, "name": post.title, "item": `${SITE_URL}/blog/${post.slug}` }
              ]
            })
          }
        } else {
          setJsonLd('ld-breadcrumb', {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Početna", "item": SITE_URL },
              { "@type": "ListItem", "position": 2, "name": "Blog", "item": `${SITE_URL}/blog` }
            ]
          })
        }
      })
    } else {
      const art = document.getElementById('ld-article')
      if (art) art.remove()
      const bc = document.getElementById('ld-breadcrumb')
      if (bc) bc.remove()
    }

  }, [pathname])
}
