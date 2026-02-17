import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const pageMeta = {
  '/': {
    title: 'Platinum Zenith | Digitalna Agencija — Marketing, Web Design, Consulting',
    description: 'Privucite pažnju i generišite prodaju na lak, siguran i predvidljiv način. Zenith sistem za akviziciju klijenata.',
  },
  '/web-design': {
    title: 'Web Design & Izrada Sajta | Platinum Zenith',
    description: 'Sajtovi koji pretvaraju posetioce u klijente. +340% prosečan rast konverzija. PageSpeed 95+. Mobile-first dizajn.',
  },
  '/digitalni-marketing': {
    title: 'Digitalni Marketing — Zenith Sistem | Platinum Zenith',
    description: 'Meta Ads, Google Ads, TikTok Ads — 15x ROAS prosek. Dokazan sistem za predvidljivu akviziciju klijenata.',
  },
  '/consulting': {
    title: 'Poslovno Savetovanje | Platinum Zenith',
    description: 'Biznis audit, strategija rasta i implementacija. Tražimo kočnice u vašem biznisu i pomažemo da ih razbijete.',
  },
  '/cro': {
    title: 'CRO Optimizacija Konverzije | Platinum Zenith',
    description: 'Više klijenata, isti budžet. +300% prosečno poboljšanje konverzija. Heatmap analiza, A/B testovi, UX audit.',
  },
  '/kontakt': {
    title: 'Kontakt | Platinum Zenith',
    description: 'Zakažite besplatne konsultacije. service@platinumzenith.com. Ruže Šulman 19, Zrenjanin, Srbija.',
  },
  '/o-nama': {
    title: 'O Nama | Platinum Zenith',
    description: 'Digitalna agencija iz Zrenjanina. 50+ klijenata, 15x prosečan ROAS, 97% zadovoljstvo klijenata.',
  },
  '/case-studies': {
    title: 'Case Studies — Rezultati | Platinum Zenith',
    description: 'Pogledajte rezultate naših klijenata. +350% konverzije, €18,500/mesec prihod, 520% ROI.',
  },
  '/paketi': {
    title: 'Paketi & Cene | Platinum Zenith',
    description: 'Starter €499/mesec, Growth €1,499/mesec, Enterprise custom. Transparentne cene bez skrivenih troškova.',
  },
}

export default function usePageMeta() {
  const { pathname } = useLocation()

  useEffect(() => {
    const meta = pageMeta[pathname] || pageMeta['/']
    document.title = meta.title

    let descTag = document.querySelector('meta[name="description"]')
    if (descTag) descTag.setAttribute('content', meta.description)

    let ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.setAttribute('content', meta.title)

    let ogDesc = document.querySelector('meta[property="og:description"]')
    if (ogDesc) ogDesc.setAttribute('content', meta.description)

    // Dynamic canonical URL per page (prevents Google duplicate content issues)
    const canonicalUrl = `https://platinumzenith.com${pathname === '/' ? '/' : pathname}`
    let canonical = document.querySelector('link[rel="canonical"]')
    if (canonical) canonical.setAttribute('href', canonicalUrl)

    // Dynamic og:url per page
    let ogUrl = document.querySelector('meta[property="og:url"]')
    if (ogUrl) ogUrl.setAttribute('content', canonicalUrl)
  }, [pathname])
}
