/**
 * Page meta data — lazy loaded to keep index bundle small.
 * Contains pageMeta, pageSchemas, orgSchema, websiteSchema, setJsonLd
 */
const SITE_URL = 'https://platinumzenith.com'

export const pageMeta = {
  '/': {
    title: 'Platinum Zenith | Digitalna Agencija | Marketing, Web Design, Consulting',
    description: 'Privucite pažnju i generišite prodaju kroz Zenith sistem za akviziciju klijenata: digitalni marketing, web design i consulting sa merljivim rezultatima.',
    keywords: 'digitalna agencija, marketing agencija, web design, Zrenjanin, Srbija, digitalni marketing, izrada sajta',
  },
  '/web-design': {
    title: 'Web Design & Izrada Sajta | Platinum Zenith',
    description: 'Sajtovi koji pretvaraju posetioce u klijente uz mobile-first UX, PageSpeed 95+ i strukturu koja podiže upite, prodaju i dugoročnu SEO vidljivost.',
    keywords: 'web dizajn, izrada sajta, web development, WordPress, React, responsive dizajn, sajt koji prodaje',
  },
  '/digitalni-marketing': {
    title: 'Digitalni Marketing | Zenith Sistem | Platinum Zenith',
    description: 'Meta Ads, Google Ads i TikTok Ads kampanje sa jasnim KPI-jevima, optimizacijom budžeta i sistemom koji donosi predvidljivu akviziciju klijenata.',
    keywords: 'digitalni marketing, Meta Ads, Google Ads, TikTok Ads, ROAS, PPC, online oglašavanje',
  },
  '/consulting': {
    title: 'Poslovno Savetovanje | Platinum Zenith',
    description: 'Biznis konsultacije za vlasnike firmi: audit, strategija rasta i implementacija kroz jasne akcione korake koji uklanjaju uska grla i podižu profit.',
    keywords: 'poslovno savetovanje, biznis consulting, strategija rasta, audit, marketinška strategija',
  },
  '/cro': {
    title: 'CRO Optimizacija Konverzije | Platinum Zenith',
    description: 'CRO optimizacija koja diže broj upita i prodaja bez većeg budžeta: heatmap analiza, A/B testovi, UX audit i konkretne iteracije za rast konverzije.',
    keywords: 'CRO, optimizacija konverzije, A/B testiranje, UX audit, heatmap, bounce rate',
  },
  '/kontakt': { title: 'Kontakt i Besplatna Konsultacija | Platinum Zenith', description: 'Kontaktirajte Platinum Zenith i zakažite besplatne konsultacije u Zrenjaninu. Pošaljite upit i dobijte konkretan plan rasta za vaš biznis.', keywords: 'kontakt, konsultacije, Platinum Zenith kontakt, Zrenjanin' },
  '/o-nama': { title: 'O Nama i Naš Pristup Rastu Biznisa | Platinum Zenith', description: 'Upoznajte Platinum Zenith tim iz Zrenjanina: digitalni marketing, web design i consulting fokusiran na profitabilan rast i merljive rezultate.', keywords: 'o nama, Platinum Zenith, digitalna agencija Zrenjanin, tim, misija' },
  '/case-studies': { title: 'Case Studies | Rezultati | Platinum Zenith', description: 'Studije slučaja sa realnim rezultatima klijenata: rast prihoda, niži trošak po kupovini i bolji ROI kroz digitalni marketing, web sajt i CRO optimizaciju.', keywords: 'case studies, rezultati, portfolio, referentni projekti, ROI' },
  '/uslovi-koriscenja': { title: 'Uslovi Korišćenja | Platinum Zenith', description: 'Pročitajte uslove korišćenja Platinum Zenith usluga, prava i obaveze korisnika, način saradnje, plaćanja i ograničenja odgovornosti.', keywords: 'uslovi korišćenja, terms of service' },
  '/uslovi-kupovine': { title: 'Uslovi Kupovine i Saradnje | Platinum Zenith', description: 'Uslovi kupovine za Platinum Zenith: ugovaranje putem email korespondencije, B2B model saradnje, reklamacije, isporuka i pravila realizacije.', keywords: 'uslovi kupovine, B2B kupovina, ugovaranje emailom, reklamacije' },
  '/nacin-placanja': { title: 'Način Plaćanja i Fakturisanje | Platinum Zenith', description: 'Način plaćanja za Platinum Zenith: virmansko plaćanje za pravna lica i izdavanje fakture nakon sklopljenog dogovora putem emaila.', keywords: 'način plaćanja, virman, pravna lica, faktura, B2B' },
  '/dostava': { title: 'Dostava i Rokovi Realizacije | Platinum Zenith', description: 'Uslovi dostave i realizacije: isporuka nakon potvrđenog dogovora, rokovi, troškovi i proces za fizičku robu i digitalne usluge.', keywords: 'dostava, isporuka, rokovi, digitalne usluge, fizička roba' },
  '/politika-privatnosti': { title: 'Politika Privatnosti | Platinum Zenith', description: 'Politika privatnosti Platinum Zenith agencije: kako prikupljamo, obrađujemo i štitimo lične podatke, koja su vaša prava i kako ostvarujete GDPR zaštitu.', keywords: 'politika privatnosti, privacy policy, GDPR' },
  '/drustvene-mreze': { title: 'Društvene Mreže | Instagram, Facebook, TikTok, LinkedIn | Platinum Zenith', description: 'Instagram, Facebook, TikTok i LinkedIn strategije za firme u Srbiji: content, community i plaćene kampanje koje podižu engagement, upite i prodaju.', keywords: 'društvene mreže, Instagram marketing, Facebook, TikTok, LinkedIn, SMM' },
  '/faq': { title: 'Česta Pitanja (FAQ) | Platinum Zenith', description: 'Česta pitanja o saradnji sa Platinum Zenith agencijom: proces rada, cene, rokovi, komunikacija, izveštavanje i merljivi rezultati.', keywords: 'FAQ, česta pitanja' },
  '/blog': { title: 'Blog | Marketing Saveti i Strategije | Platinum Zenith', description: 'Blog o digitalnom marketingu, prodaji i rastu biznisa: praktične strategije, studije slučaja, SEO i Meta/Google Ads saveti.', keywords: 'blog, marketing saveti, digitalni marketing blog' },
  '/industrije/e-commerce': { title: 'E-Commerce Marketing | Platinum Zenith', description: 'E-commerce marketing sistemi za online prodavnice: Meta Ads, email automatizacija, CRO i retargeting koji povećavaju konverzije i vrednost porudžbine.', keywords: 'e-commerce marketing, online prodavnica, ROAS' },
  '/industrije/saas': { title: 'SaaS Marketing za Rast MRR-a | Platinum Zenith', description: 'SaaS marketing za brži MRR rast: akvizicija korisnika, onboarding, aktivacija, retencija i smanjenje churn-a kroz full-funnel strategiju.', keywords: 'SaaS marketing, MRR rast, B2B marketing' },
  '/industrije/lokalni-biznisi': { title: 'Marketing za Lokalne Biznise | Platinum Zenith', description: 'Marketing za lokalne biznise: Google Business optimizacija, lokalni SEO, oglasi i kampanje koje dovode više poziva i upita.', keywords: 'lokalni marketing, lokalni SEO, Google Business' },
  '/marketing-agencija-beograd': { title: 'Marketing Agencija za Beograd | Digitalni Marketing | Platinum Zenith', description: 'Marketing agencija za Beograd: SEO, Google Ads, Meta Ads i landing stranice koje povećavaju kvalifikovane upite, uz mesečne izveštaje i jasan ROI po kanalu.', keywords: 'marketing agencija beograd, digitalni marketing beograd, seo beograd, izrada sajta beograd, google ads beograd' },
  '/seo-optimizacija-cena': { title: 'Koliko Košta SEO Optimizacija u Srbiji 2026 | Cene SEO | Platinum Zenith', description: 'Realne cene SEO optimizacije u Srbiji: osnovni paketi od 300€, napredni od 500€ i premium od 1.200€ mesečno, uz audit sajta i plan rasta pozicija.', keywords: 'seo optimizacija cena, koliko košta seo, seo cena srbija, seo agencija cena, cena seo optimizacije' },
  '/marketing-agencija-zrenjanin': { title: 'Marketing Agencija Zrenjanin | Digitalni Marketing | Platinum Zenith', description: 'Digitalni marketing u Zrenjaninu za lokalne firme: SEO, Google Ads, društvene mreže i optimizacija sajta koja donosi više poziva, upita i prodaja.', keywords: 'marketing agencija zrenjanin, digitalni marketing zrenjanin, izrada sajta zrenjanin, seo zrenjanin, web dizajn zrenjanin' },
  '/cene-izrade-sajta': { title: 'Koliko Košta Izrada Sajta u Srbiji 2026 | Cene i Vodič | Platinum Zenith', description: 'Realne cene izrade sajta u Srbiji za 2026. Prezentacioni sajt od 300€, poslovni od 800€, web shop od 1.500€. Vodič kroz cene bez skrivenih troškova.', keywords: 'cena izrade sajta, koliko košta sajt, izrada sajta cena, web dizajn cena, izrada sajta srbija, cena web sajta' },
  '/agencija-vs-freelancer': { title: 'Agencija ili Freelancer? Uporedni Vodič za 2026 | Platinum Zenith', description: 'Agencija vs freelancer: realno poređenje po ceni, kvalitetu, rokovima i pouzdanosti. Konkretni saveti za firme u Srbiji.', keywords: 'agencija vs freelancer, agencija ili freelancer, izrada sajta agencija, freelancer sajt, marketing agencija srbija, freelancer vs agencija cena' },
  '/cene-digitalnog-marketinga': { title: 'Koliko Košta Digitalni Marketing u Srbiji 2026 | Cene i Vodič | Platinum Zenith', description: 'Realne cene digitalnog marketinga u Srbiji za 2026. Mesečni paketi od 300€, SEO od 200€, Google Ads od 200€. Vodič kroz troškove po usluzi.', keywords: 'cena digitalnog marketinga, koliko košta marketing, marketing agencija cena, SEO cena, Google Ads cena, Facebook Ads cena, digitalni marketing srbija' },
  '/marketing-agencija-novi-sad': { title: 'Marketing Agencija Novi Sad | Digitalni Marketing | Platinum Zenith', description: 'Marketing agencija za Novi Sad: SEO, Google Ads, Meta kampanje i web optimizacija za stabilan rast upita i prodaje uz transparentno praćenje budžeta.', keywords: 'marketing agencija novi sad, digitalni marketing novi sad, SEO novi sad, izrada sajta novi sad, google ads novi sad, marketing vojvodina' },
  '/web-shop-nema-prodaju': { title: 'Web Shop Nema Prodaju? 5 Razloga i Rešenja | Platinum Zenith', description: 'Vaš web shop ima posete, ali nema prodaju? Otkrivamo 5 najčešćih razloga, konkretna rešenja za svaki problem i korake za brže podizanje konverzije.', keywords: 'web shop nema prodaju, zašto web shop ne prodaje, online prodavnica bez prodaje, e-commerce konverzija, web shop optimizacija, checkout optimizacija' },
  '/koliko-kosta-facebook-reklama': { title: 'Koliko Košta Facebook Reklama u Srbiji 2026 | Vodič Kroz Cene | Platinum Zenith', description: 'Realne cene Facebook i Instagram oglasa u Srbiji za 2026. CPC od 0,05€, mesečni budžet od 200€. Vodič kroz troškove i česte greške.', keywords: 'koliko košta facebook reklama, facebook oglasi cena, instagram oglasi cena srbija, facebook ads srbija, cena oglašavanja na facebooku, meta ads cena' },
  '/google-reklame-cena': { title: 'Google Reklame Cena 2026 + Vođenje Kampanja | Platinum Zenith', description: 'Koliko koštaju Google reklame i vođenje Google Ads kampanja u Srbiji 2026: CPC rasponi, budžeti po fazama rasta i realna cena upravljanja.', keywords: 'google reklame cena, google ads cena, koliko kostaju google reklame, cena po kliku google, vodjenje google ads kampanja cena, upravljanje google ads kampanjama' },
  '/instagram-reklame-cena': { title: 'Instagram Reklame Cena 2026 + Vođenje Kampanja | Platinum Zenith', description: 'Koliko koštaju Instagram reklame, Reels oglasi i vođenje Instagram Ads kampanja u Srbiji 2026: CPC, CPM, budžeti po fazama rasta i realna cena upravljanja.', keywords: 'instagram reklame cena, instagram ads cena, instagram reels reklame cena, koliko kostaju instagram reklame, cena instagram oglasa, instagram oglasavanje srbija, vodjenje instagram ads kampanja cena, upravljanje instagram reklamama' },
  '/izrada-wordpress-sajta-cena': { title: 'Izrada WordPress Sajta Cena u Srbiji 2026 | Platinum Zenith', description: 'Cena izrade WordPress sajta u Srbiji 2026: paketi za prezentacione i WooCommerce sajtove, rokovi, održavanje i realni skriveni troškovi.', keywords: 'izrada wordpress sajta cena, wordpress sajt cena, koliko kosta wordpress sajt, wordpress izrada sajta srbija, woocommerce cena izrade, odrzavanje wordpress sajta' },
  '/marketing-za-advokate': { title: 'Marketing za Advokate u Srbiji | Platinum Zenith', description: 'Marketing za advokatske kancelarije u Srbiji: SEO, Google Ads, sajt i content strategija koja donosi kvalifikovane upite i stabilan rast klijenata.', keywords: 'marketing za advokate, digitalni marketing advokatska kancelarija, google ads advokat, seo za advokate, sajt za advokatsku kancelariju, marketing pravne usluge' },
  '/marketing-za-stomatologe': { title: 'Marketing za Stomatologe u Srbiji | Platinum Zenith', description: 'Specijalizovani marketing za stomatološke ordinacije: Google Ads, lokalni SEO, sajt i kampanje koje pune kalendar novim pacijentima i povećavaju prihod.', keywords: 'marketing za stomatologe, digitalni marketing stomatologija, google ads stomatolog, seo za stomatologe, sajt za ordinaciju, marketing stomatološka ordinacija' },
  '/marketing-za-restorane': { title: 'Marketing za Restorane | Digitalni Marketing za Ugostiteljstvo | Platinum Zenith', description: 'Marketing za restorane u Srbiji: Google Business, društvene mreže, oglasi i sajt koji povećavaju rezervacije, porudžbine i popunjenost stolova.', keywords: 'marketing za restorane, digitalni marketing ugostiteljstvo, restoran marketing srbija, google business restoran, instagram za restorane, sajt za restoran' },
  '/draft/netokracija-cro-case': { title: 'DRAFT: Kako smo povećali profit 4x kroz CRO izmene | Platinum Zenith', description: 'Interni draft case study članka za Netokraciju o CRO optimizaciji: brzina sajta, mini-korpa, order bumps i Niwa AI logika u realnom e-commerce toku.', keywords: 'cro case study, netokracija draft, e-commerce konverzija, pagespeed optimizacija, niwa ai, order bumps' },
  '/in-house-tim-vs-agencija': { title: 'In-House Tim ili Marketing Agencija? Uporedni Vodič 2026 | Platinum Zenith', description: 'In-house tim ili agencija? Uporedni vodič sa realnim troškovima u Srbiji, prednostima i manama oba modela i jasnim kriterijumima za pravi izbor.', keywords: 'in-house marketing vs agencija, zaposliti marketara, marketing agencija ili zaposleni, cena marketing tima srbija, in-house tim vs outsourcing' },
  '/fiksna-naknada-vs-revenue-share': { title: 'Fiksna Naknada vs Revenue Share | Koji Model Naplate je Bolji? | Platinum Zenith', description: 'Fiksna naknada ili revenue share? Praktično poređenje modela naplate agencije sa primerima iz prakse, rizicima i savetima za profitabilniji izbor.', keywords: 'fiksna naknada vs revenue share, model naplate agencija, revenue share marketing, kako platiti agenciju, marketing agencija cena model' },
  '/facebook-oglasi-ne-rade': { title: 'Facebook Oglasi Ne Rade? 6 Razloga i Kako Popraviti | Platinum Zenith', description: 'Zašto vaši Facebook oglasi ne donose rezultate i šta konkretno da promenite. Dijagnostika najčešćih grešaka sa koracima za popravku.', keywords: 'facebook oglasi ne rade, facebook ads ne rade, zašto ne rade facebook oglasi, facebook reklame ne funkcionišu, problemi sa facebook oglasima, facebook kampanja ne daje rezultate' },
  '/alati/roi-kalkulator': { title: 'ROI Kalkulator za Marketing | Besplatan Alat | Platinum Zenith', description: 'Besplatan ROI kalkulator za marketing: unesite budžet, prihod i maržu, pa odmah izračunajte realan povrat investicije i profit kampanja.', keywords: 'ROI kalkulator, povrat investicije, marketing ROI, marketing budžet, kalkulator profita' },
  '/industrije/startapovi': { title: 'Marketing za Startapove | Platinum Zenith', description: 'Marketing za startapove od validacije ideje do skaliranja: pozicioniranje, akvizicija prvih korisnika i ubrzanje product-market fit-a.', keywords: 'startup marketing, growth hacking' },
}

export const orgSchema = {
  "@context": "https://schema.org", "@type": "Organization", "@id": `${SITE_URL}#organization`, "name": "Platinum Zenith", "url": SITE_URL,
  "logo": `${SITE_URL}/pz-icon.webp`,
  "email": "aleksandar@platinumzenith.com",
  "telephone": "+381668168929",
  "address": { "@type": "PostalAddress", "streetAddress": "Ruže Šulman 19", "addressLocality": "Zrenjanin", "addressCountry": "RS" },
  "areaServed": { "@type": "Country", "name": "Srbija" },
  "contactPoint": [{ "@type": "ContactPoint", "email": "aleksandar@platinumzenith.com", "telephone": "+381668168929", "contactType": "customer support", "availableLanguage": ["sr", "en"], "areaServed": "RS", "url": `${SITE_URL}/kontakt` }],
  "sameAs": []
}

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}#localbusiness`,
  "name": "Platinum Zenith",
  "url": SITE_URL,
  "image": `${SITE_URL}/pz-og.jpg`,
  "telephone": "+381668168929",
  "email": "aleksandar@platinumzenith.com",
  "priceRange": "€€",
  "contactPoint": { "@type": "ContactPoint", "contactType": "customer support", "email": "aleksandar@platinumzenith.com", "telephone": "+381668168929", "availableLanguage": ["sr", "en"], "areaServed": "RS", "url": `${SITE_URL}/kontakt` },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Ruže Šulman 19",
    "addressLocality": "Zrenjanin",
    "postalCode": "23000",
    "addressCountry": "RS"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": 45.3836, "longitude": 20.3819 },
  "areaServed": { "@type": "Country", "name": "Srbija" },
  "parentOrganization": { "@id": `${SITE_URL}#organization` },
  "openingHoursSpecification": [{
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "09:00",
    "closes": "18:00"
  }]
}

export const websiteSchema = {
  "@context": "https://schema.org", "@type": "WebSite", "name": "Platinum Zenith", "url": SITE_URL,
  "inLanguage": "sr-RS",
  "potentialAction": { "@type": "SearchAction", "target": `${SITE_URL}/blog?search={search_term_string}`, "query-input": "required name=search_term_string" }
}

export const pageSchemas = {
  '/web-design': { "@context": "https://schema.org", "@type": "Service", "name": "Web Design & Izrada Sajta", "description": "Izrada sajtova sa fokusom na brzinu, UX i konverzije: od strukture stranica do tehničke SEO optimizacije.", "provider": { "@id": `${SITE_URL}#organization`, "@type": "Organization", "name": "Platinum Zenith", "url": SITE_URL }, "serviceType": "Web Design", "areaServed": { "@type": "Country", "name": "Srbija" }, "hasOfferCatalog": { "@type": "OfferCatalog", "name": "Web design usluge", "itemListElement": [ { "@type": "Offer", "name": "Prezentacioni sajt", "description": "Brz i SEO-pripremljen sajt za usluge" }, { "@type": "Offer", "name": "Poslovni sajt", "description": "Struktura za upite, lead forme i tracking" }, { "@type": "Offer", "name": "Web shop", "description": "E-commerce sa optimizovanim checkout tokom" } ] } },
  '/digitalni-marketing': { "@context": "https://schema.org", "@type": "Service", "name": "Digitalni Marketing", "description": "Digitalni marketing kroz Meta, Google i TikTok kampanje sa jasnim KPI ciljevima, optimizacijom budžeta i planom skaliranja.", "provider": { "@id": `${SITE_URL}#organization`, "@type": "Organization", "name": "Platinum Zenith", "url": SITE_URL }, "serviceType": "Digital Marketing", "areaServed": { "@type": "Country", "name": "Srbija" }, "hasOfferCatalog": { "@type": "OfferCatalog", "name": "Digital marketing usluge", "itemListElement": [ { "@type": "Offer", "name": "Meta Ads", "description": "Akvizicija i retargeting kroz Facebook i Instagram" }, { "@type": "Offer", "name": "Google Ads", "description": "Search, Display i Performance Max kampanje" }, { "@type": "Offer", "name": "TikTok Ads", "description": "Kampanje za awareness i performance" } ] } },
  '/consulting': { "@context": "https://schema.org", "@type": "Service", "name": "Poslovno Savetovanje", "description": "Poslovno savetovanje za vlasnike firmi: audit trenutnog stanja, plan rasta i implementacija kroz jasne akcione korake.", "provider": { "@id": `${SITE_URL}#organization`, "@type": "Organization", "name": "Platinum Zenith", "url": SITE_URL }, "serviceType": "Business Consulting", "areaServed": { "@type": "Country", "name": "Srbija" }, "hasOfferCatalog": { "@type": "OfferCatalog", "name": "Consulting programi", "itemListElement": [ { "@type": "Offer", "name": "Biznis audit", "description": "Analiza uskih grla i prioriteta za rast" }, { "@type": "Offer", "name": "Strategija rasta", "description": "Plan akvizicije, ponude i pozicioniranja" }, { "@type": "Offer", "name": "Implementacija", "description": "Operativna podrška u sprovođenju plana" } ] } },
  '/cro': { "@context": "https://schema.org", "@type": "Service", "name": "CRO Optimizacija", "description": "CRO optimizacija koja povećava broj upita i prodaja kroz analizu ponašanja korisnika, A/B testove i UX poboljšanja.", "provider": { "@id": `${SITE_URL}#organization`, "@type": "Organization", "name": "Platinum Zenith", "url": SITE_URL }, "serviceType": "Conversion Rate Optimization", "areaServed": { "@type": "Country", "name": "Srbija" }, "hasOfferCatalog": { "@type": "OfferCatalog", "name": "CRO usluge", "itemListElement": [ { "@type": "Offer", "name": "CRO audit", "description": "Analiza toka korisnika i tačaka odustajanja" }, { "@type": "Offer", "name": "A/B test iteracije", "description": "Testiranje varijanti CTA, forme i ponude" }, { "@type": "Offer", "name": "UX optimizacija", "description": "Poboljšanja stranica za veći procenat konverzije" } ] } },
  '/drustvene-mreze': { "@context": "https://schema.org", "@type": "Service", "name": "Upravljanje Društvenim Mrežama", "description": "Instagram, Facebook, TikTok i LinkedIn upravljanje za rast upita, zajednice i prodaje kroz sadržaj i plaćene kampanje.", "provider": { "@id": `${SITE_URL}#organization`, "@type": "Organization", "name": "Platinum Zenith", "url": SITE_URL }, "serviceType": "Social Media Management", "areaServed": { "@type": "Country", "name": "Srbija" }, "hasOfferCatalog": { "@type": "OfferCatalog", "name": "SMM usluge", "itemListElement": [ { "@type": "Offer", "name": "Content plan", "description": "Plan sadržaja po kanalu i cilju" }, { "@type": "Offer", "name": "Community management", "description": "Moderacija i odgovori na poruke i komentare" }, { "@type": "Offer", "name": "Plaćene kampanje", "description": "Meta i TikTok oglasi za akviziciju i retargeting" } ] } },
  '/faq': {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Šta je Platinum Zenith i čime se bavite?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Platinum Zenith je digitalna agencija fokusirana na jedno: da vam dovedemo više klijenata koji su spremni da plate. Bavimo se digitalnim marketingom, web dizajnom, CRO optimizacijom, poslovnim savetovanjem i društvenim mrežama."
        }
      },
      {
        "@type": "Question",
        "name": "Koliko koštaju vaše usluge?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Svaki projekat je drugačiji. Web design počinje od €2,500. Digitalni marketing paketi kreću od €1,200 mesečno. CRO i consulting se naplaćuju po projektu. Za tačnu cenu, zakažite besplatan razgovor."
        }
      },
      {
        "@type": "Question",
        "name": "Koji oglasni budžet mi treba?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Minimalno €1,000 mesečno za Facebook/Instagram oglase da biste videli smislene rezultate. Za Google Ads preporučujemo bar €1,500. To ne uključuje našu naknadu, samo spend na platformama."
        }
      },
      {
        "@type": "Question",
        "name": "Koliko brzo ću videti rezultate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Prvi podaci dolaze za 7-14 dana. Optimizovane kampanje koje donose stabilan ROI obično su potrebne 60-90 dana. Marketing nije magija, ali sa dobrim sistemom rezultati su predvidivi."
        }
      },
      {
        "@type": "Question",
        "name": "Koliko traje izrada sajta?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Landing page za kampanje: 2-3 nedelje. Kompletan korporativni sajt: 6-8 nedelja. E-commerce shop: 8-12 nedelja. Zavisi od broja strana, funkcionalnosti i brzine dobijanja materijala od vas."
        }
      },
      {
        "@type": "Question",
        "name": "Šta je CRO i zašto mi treba?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Conversion Rate Optimization znači da više posetilaca postanu kupci. Većina sajtova gubi 95% posetilaca jer nisu optimizovani za prodaju. CRO popravlja to i povećava prihod bez dodatnog troška za saobraćaj."
        }
      },
      {
        "@type": "Question",
        "name": "Da li radite sa startapovima?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Da. Pomagali smo startapovima da lansiraju proizvod, definišu go-to-market strategiju i privuku prve klijente. Razumemo ograničenja budžeta i fokusiramo se na taktike sa visokim ROI."
        }
      },
      {
        "@type": "Question",
        "name": "Da li nudite podršku posle završenog projekta?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Da. Svi sajtovi imaju 30 dana besplatne tehničke podrške. Posle toga možete nastaviti sa mesečnim održavanjem (od €200) ili podršku po potrebi."
        }
      }
    ]
  },
  '/facebook-oglasi-ne-rade': {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/facebook-oglasi-ne-rade#webpage`,
        "url": `${SITE_URL}/facebook-oglasi-ne-rade`,
        "name": "Facebook oglasi ne rade? 6 razloga i kako popraviti",
        "description": "Dijagnostika za Facebook kampanje koje troše budžet bez rezultata: najčešći problemi, rešenja i naredni koraci.",
        "inLanguage": "sr-RS",
        "isPartOf": { "@id": SITE_URL },
        "about": { "@id": `${SITE_URL}/facebook-oglasi-ne-rade#article` }
      },
      {
        "@type": "Article",
        "@id": `${SITE_URL}/facebook-oglasi-ne-rade#article`,
        "headline": "Facebook oglasi ne rade? 6 razloga i kako to popraviti",
        "description": "Praktična dijagnostika najčešćih problema sa Facebook oglasima i konkretni koraci za stabilniji ROI.",
        "author": { "@type": "Person", "name": "Aleksandar Nenadović" },
        "publisher": { "@id": `${SITE_URL}#organization` },
        "inLanguage": "sr-RS",
        "datePublished": "2026-03-04",
        "dateModified": "2026-03-12",
        "mainEntityOfPage": { "@id": `${SITE_URL}/facebook-oglasi-ne-rade#webpage` }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Koliko traje dok Facebook kampanja počne da daje rezultate?",
            "acceptedAnswer": { "@type": "Answer", "text": "Faza učenja traje 3-7 dana. Pravi rezultati se vide posle 2-3 nedelje kada algoritam sakupi dovoljno podataka. Ako posle mesec dana nema poboljšanja, problem je u strategiji." }
          },
          {
            "@type": "Question",
            "name": "Koliko treba uložiti u Facebook oglase mesečno?",
            "acceptedAnswer": { "@type": "Answer", "text": "Minimum 500€ mesečno za ozbiljne rezultate, plus troškovi upravljanja kampanjom. Sa manjim budžetom se može testirati, ali algoritam radi najbolje sa 15-20€ dnevno po ad setu." }
          },
          {
            "@type": "Question",
            "name": "Da li Facebook oglasi rade za B2B?",
            "acceptedAnswer": { "@type": "Answer", "text": "Da, ali drugačije nego za B2C. Za B2B koristite lead gen forme, whitepaper/e-book ponude i retargeting na osnovu poseta sajtu. LinkedIn je bolji za direktne prodajne poruke, ali Facebook je jeftiniji za awareness." }
          },
          {
            "@type": "Question",
            "name": "Zašto moj ROAS opada vremenom?",
            "acceptedAnswer": { "@type": "Answer", "text": "Najčešći razlog je ad fatigue, jer ista publika vidi iste oglase. Drugi razlog je povećana konkurencija u aukciji. Rešenje: novi kreativ svake 1-2 nedelje i širenje publike." }
          },
          {
            "@type": "Question",
            "name": "Da li je bolje koristiti automatsko ili ručno bidovanje?",
            "acceptedAnswer": { "@type": "Answer", "text": "Za većinu biznisa, automatsko (lowest cost) je bolji izbor. Ručno bidovanje ima smisla tek kad imate dovoljno podataka i jasno znate koliko vam jedna konverzija vredi." }
          }
        ]
      }
    ]
  },
  '/uslovi-koriscenja': { "@context": "https://schema.org", "@type": "WebPage", "name": "Uslovi korišćenja", "url": `${SITE_URL}/uslovi-koriscenja`, "inLanguage": "sr-RS", "isPartOf": { "@type": "WebSite", "name": "Platinum Zenith", "url": SITE_URL } },
  '/politika-privatnosti': { "@context": "https://schema.org", "@type": "WebPage", "name": "Politika privatnosti", "url": `${SITE_URL}/politika-privatnosti`, "inLanguage": "sr-RS", "isPartOf": { "@type": "WebSite", "name": "Platinum Zenith", "url": SITE_URL } },
  '/uslovi-kupovine': { "@context": "https://schema.org", "@type": "WebPage", "name": "Uslovi kupovine", "url": `${SITE_URL}/uslovi-kupovine`, "inLanguage": "sr-RS", "isPartOf": { "@type": "WebSite", "name": "Platinum Zenith", "url": SITE_URL } },
  '/nacin-placanja': { "@context": "https://schema.org", "@type": "WebPage", "name": "Način plaćanja", "url": `${SITE_URL}/nacin-placanja`, "inLanguage": "sr-RS", "isPartOf": { "@type": "WebSite", "name": "Platinum Zenith", "url": SITE_URL } },
  '/dostava': { "@context": "https://schema.org", "@type": "WebPage", "name": "Dostava", "url": `${SITE_URL}/dostava`, "inLanguage": "sr-RS", "isPartOf": { "@type": "WebSite", "name": "Platinum Zenith", "url": SITE_URL } },
  '/industrije/e-commerce': { "@context": "https://schema.org", "@type": "Service", "name": "E-Commerce Marketing", "description": "E-commerce marketing sistemi kroz Meta Ads, email automatizaciju, CRO i retargeting za veće konverzije i veću vrednost porudžbine.", "provider": { "@id": `${SITE_URL}#organization`, "@type": "Organization", "name": "Platinum Zenith", "url": SITE_URL }, "serviceType": "E-Commerce Marketing", "areaServed": { "@type": "Country", "name": "Srbija" }, "hasOfferCatalog": { "@type": "OfferCatalog", "name": "E-commerce marketing usluge", "itemListElement": [ { "@type": "Offer", "name": "Meta Ads za e-commerce" }, { "@type": "Offer", "name": "Email automatizacija" }, { "@type": "Offer", "name": "CRO i retargeting" } ] } },
  '/industrije/saas': { "@context": "https://schema.org", "@type": "Service", "name": "SaaS Marketing", "description": "SaaS marketing za rast MRR-a kroz akviziciju korisnika, onboarding, aktivaciju i smanjenje churn-a.", "provider": { "@id": `${SITE_URL}#organization`, "@type": "Organization", "name": "Platinum Zenith", "url": SITE_URL }, "serviceType": "SaaS Marketing", "areaServed": { "@type": "Country", "name": "Srbija" }, "hasOfferCatalog": { "@type": "OfferCatalog", "name": "SaaS marketing usluge", "itemListElement": [ { "@type": "Offer", "name": "Akvizicija korisnika" }, { "@type": "Offer", "name": "Onboarding i aktivacija" }, { "@type": "Offer", "name": "Retencija i churn optimizacija" } ] } },
  '/industrije/lokalni-biznisi': { "@context": "https://schema.org", "@type": "Service", "name": "Marketing za Lokalne Biznise", "description": "Marketing za lokalne biznise kroz Google Business optimizaciju, lokalni SEO i oglase koji povećavaju pozive, upite i rezervacije.", "provider": { "@id": `${SITE_URL}#organization`, "@type": "Organization", "name": "Platinum Zenith", "url": SITE_URL }, "serviceType": "Local Business Marketing", "areaServed": { "@type": "Country", "name": "Srbija" }, "hasOfferCatalog": { "@type": "OfferCatalog", "name": "Lokalni marketing usluge", "itemListElement": [ { "@type": "Offer", "name": "Google Business optimizacija" }, { "@type": "Offer", "name": "Lokalni SEO" }, { "@type": "Offer", "name": "Meta i Google oglasi" } ] } },
  '/industrije/startapovi': { "@context": "https://schema.org", "@type": "Service", "name": "Marketing za Startapove", "description": "Marketing za startapove od validacije ponude do skaliranja akvizicije kroz performance kampanje i CRO iteracije.", "provider": { "@id": `${SITE_URL}#organization`, "@type": "Organization", "name": "Platinum Zenith", "url": SITE_URL }, "serviceType": "Startup Marketing", "areaServed": { "@type": "Country", "name": "Srbija" }, "hasOfferCatalog": { "@type": "OfferCatalog", "name": "Startup marketing usluge", "itemListElement": [ { "@type": "Offer", "name": "Validacija ponude" }, { "@type": "Offer", "name": "Akvizicija prvih korisnika" }, { "@type": "Offer", "name": "Skaliranje rasta" } ] } },
  '/cene-izrade-sajta': {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/cene-izrade-sajta#webpage`,
        "url": `${SITE_URL}/cene-izrade-sajta`,
        "name": "Koliko košta izrada sajta u Srbiji 2026",
        "description": "Vodič kroz realne cene izrade sajta u Srbiji 2026, sa rasponima za prezentacione sajtove, poslovne sajtove i web shop rešenja.",
        "inLanguage": "sr-RS",
        "isPartOf": { "@id": SITE_URL },
        "about": { "@id": `${SITE_URL}/cene-izrade-sajta#service` }
      },
      {
        "@type": "Service",
        "@id": `${SITE_URL}/cene-izrade-sajta#service`,
        "name": "Izrada sajta i web shop rešenja",
        "description": "Izrada sajtova sa transparentnim rasponima cena, od prezentacionih sajtova do custom i e-commerce rešenja.",
        "serviceType": "Web development and web design",
        "url": `${SITE_URL}/cene-izrade-sajta`,
        "areaServed": { "@type": "Country", "name": "Srbija" },
        "provider": { "@id": `${SITE_URL}#organization`, "@type": "Organization", "name": "Platinum Zenith", "url": SITE_URL },
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "EUR",
          "lowPrice": "300",
          "highPrice": "10000",
          "offerCount": "4"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Rasponi cena izrade sajta",
          "itemListElement": [
            {
              "@type": "Offer",
              "name": "Prezentacioni sajt",
              "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "EUR", "minPrice": "300", "maxPrice": "800" }
            },
            {
              "@type": "Offer",
              "name": "Poslovni sajt",
              "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "EUR", "minPrice": "800", "maxPrice": "2000" }
            },
            {
              "@type": "Offer",
              "name": "Web shop",
              "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "EUR", "minPrice": "1500", "maxPrice": "5000" }
            },
            {
              "@type": "Offer",
              "name": "Korporativni / Custom",
              "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "EUR", "minPrice": "3000", "maxPrice": "10000" }
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Koliko traje izrada sajta?",
            "acceptedAnswer": { "@type": "Answer", "text": "Prezentacioni sajt: 1-2 nedelje. Poslovni sajt: 2-4 nedelje. Web shop: 4-8 nedelja. Korporativni projekti: zavisi od obima, obično 2-4 meseca." }
          },
          {
            "@type": "Question",
            "name": "Da li je hosting uključen u cenu?",
            "acceptedAnswer": { "@type": "Answer", "text": "Hosting i domen se plaćaju odvojeno, obično oko 50-80€ godišnje za obe stavke. Pomaćemo vam u izboru i podešavanju." }
          },
          {
            "@type": "Question",
            "name": "Šta ako mi treba web shop?",
            "acceptedAnswer": { "@type": "Answer", "text": "Web shopovi kreću od 1.500€ za osnovno rešenje. Za ozbiljniju prodavnicu sa većim brojem proizvoda i naprednim funkcijama, cena ide do 5.000€ i više." }
          },
          {
            "@type": "Question",
            "name": "Da li radite redizajn postojećeg sajta?",
            "acceptedAnswer": { "@type": "Answer", "text": "Da. Redizajn obično košta isto ili nešto manje od izrade novog sajta jer zadržavamo sadržaj i domen, a menjamo dizajn i tehničku osnovu." }
          },
          {
            "@type": "Question",
            "name": "Kako izgleda proces saradnje?",
            "acceptedAnswer": { "@type": "Answer", "text": "Počinjemo sa besplatnim konsultacijama gde definišemo vaše potrebe. Zatim pripremamo predlog i ponudu. Nakon odobrenja, kreće dizajn, razvoj, vaša revizija i na kraju lansiranje." }
          }
        ]
      }
    ]
  },
  '/agencija-vs-freelancer': {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/agencija-vs-freelancer#webpage`,
        "url": `${SITE_URL}/agencija-vs-freelancer`,
        "name": "Agencija ili freelancer? Kako da izaberete.",
        "description": "Uporedni vodič za izbor između agencije i freelancera uz realne troškove, rokove, rizike i konkretne kriterijume odluke za firme u Srbiji.",
        "inLanguage": "sr-RS",
        "isPartOf": { "@id": SITE_URL },
        "about": { "@id": `${SITE_URL}/agencija-vs-freelancer#article` }
      },
      {
        "@type": "Article",
        "@id": `${SITE_URL}/agencija-vs-freelancer#article`,
        "headline": "Agencija ili freelancer? Kako da izaberete",
        "description": "Praktičan vodič za firme koje biraju između agencije i freelancera za sajt, marketing i dugoročni rast.",
        "author": { "@type": "Person", "name": "Aleksandar Nenadović" },
        "publisher": { "@id": `${SITE_URL}#organization` },
        "inLanguage": "sr-RS",
        "datePublished": "2026-03-04",
        "dateModified": "2026-03-12",
        "mainEntityOfPage": { "@id": `${SITE_URL}/agencija-vs-freelancer#webpage` }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Da li je agencija uvek bolja od freelancera?",
            "acceptedAnswer": { "@type": "Answer", "text": "Ne. Za male, jasno definisane projekte, dobar freelancer je često bolji izbor. Agencija ima smisla kad vam treba tim koji pokriva više oblasti ili kad je projekat dovoljno velik da jedna osoba ne može da ga iznese sama." }
          },
          {
            "@type": "Question",
            "name": "Koliko košta rad sa agencijom u Srbiji?",
            "acceptedAnswer": { "@type": "Answer", "text": "Zavisi od obima. Mesečni marketing paketi kreću od 500€, izrada sajta od 800€. Za pun paket (sajt + marketing + strategija) računajte na 1.500-3.000€ mesečno. Dobijate ceo tim za tu cenu." }
          },
          {
            "@type": "Question",
            "name": "Kako da proverim da li je freelancer pouzdan?",
            "acceptedAnswer": { "@type": "Answer", "text": "Tražite portfolio sa realnim projektima, ne template sajtovima. Pitajte za reference. Dogovorite probni manji projekat pre nego što mu date veći posao. I obavezno potpišite ugovor." }
          },
          {
            "@type": "Question",
            "name": "Mogu li da počnem sa freelancerom pa pređem na agenciju?",
            "acceptedAnswer": { "@type": "Answer", "text": "Možete, i mnogi to rade. Problem nastaje kad freelancer ne dokumentuje šta je radio. Onda agencija troši vreme (i vaš novac) da razume tuđi kod pre nego što može da nastavi." }
          },
          {
            "@type": "Question",
            "name": "Šta ako nemam budžet ni za jedno ni za drugo?",
            "acceptedAnswer": { "@type": "Answer", "text": "Počnite sami. WordPress sa besplatnim temama, Canva za grafiku, Google My Business za vidljivost. Kad počnete da zarađujete, investirajte u profesionalnu pomoć. Bolje to nego loš sajt od 100€ koji odbija klijente." }
          }
        ]
      }
    ]
  },
  '/in-house-tim-vs-agencija': {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/in-house-tim-vs-agencija#webpage`,
        "url": `${SITE_URL}/in-house-tim-vs-agencija`,
        "name": "In-house tim ili marketing agencija?",
        "description": "Uporedni vodič sa realnim troškovima in-house tima i agencije u Srbiji, plus kriterijumi kada se koji model više isplati.",
        "inLanguage": "sr-RS",
        "isPartOf": { "@id": SITE_URL },
        "about": { "@id": `${SITE_URL}/in-house-tim-vs-agencija#article` }
      },
      {
        "@type": "Article",
        "@id": `${SITE_URL}/in-house-tim-vs-agencija#article`,
        "headline": "In-house tim ili marketing agencija: šta se više isplati u 2026",
        "description": "Detaljno poređenje troškova, brzine pokretanja, ekspertize i skalabilnosti između in-house marketing tima i agencije.",
        "author": { "@type": "Person", "name": "Aleksandar Nenadović" },
        "publisher": { "@id": `${SITE_URL}#organization` },
        "inLanguage": "sr-RS",
        "datePublished": "2026-03-04",
        "dateModified": "2026-03-12",
        "mainEntityOfPage": { "@id": `${SITE_URL}/in-house-tim-vs-agencija#webpage` }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Koliko košta in-house marketing tim u Srbiji?",
            "acceptedAnswer": { "@type": "Answer", "text": "Za minimum funkcionalan tim (1 senior marketer + 1 junior): 2.500-5.000€ mesečno sa svim troškovima. Za kompletan tim (strateg, dizajner, copywriter, ads specijalista): 8.000-15.000€. Za poređenje, agencija košta 1.000-3.000€ za širi obim usluga." }
          },
          {
            "@type": "Question",
            "name": "Da li agencija može da zameni ceo marketing tim?",
            "acceptedAnswer": { "@type": "Answer", "text": "Za većinu malih i srednjih firmi, da. Agencija pokriva strategiju, egzekuciju i analitiku. Jedino što agencija ne može je da prisustvuje internim sastancima i da bude deo vaše dnevne komunikacije kao zaposleni." }
          },
          {
            "@type": "Question",
            "name": "Šta ako mi agencija ne odgovara posle mesec dana?",
            "acceptedAnswer": { "@type": "Answer", "text": "Dobar ugovor nema višegodišnje obaveze. Tražite agenciju koja nudi mesečno otkazivanje ili probni period od 1-3 meseca. Ako rezultati izostanu, možete lako promeniti agenciju." }
          },
          {
            "@type": "Question",
            "name": "Da li je hibridni model previše komplikovan?",
            "acceptedAnswer": { "@type": "Answer", "text": "Nije, ako su uloge jasno podeljene. Najbitnije je da jedna strana vodi strategiju, a druga egzekuciju. Problemi nastaju kad obe strane rade isto ili kad nema jasnog lidera." }
          },
          {
            "@type": "Question",
            "name": "Kad je pravo vreme da pređem sa agencije na in-house?",
            "acceptedAnswer": { "@type": "Answer", "text": "Kad vaš mesečni marketing budžet (bez ad spend-a) stalno prelazi 4.000-5.000€ i kad imate jasno definisane procese koje agencija može da dokumentuje i prenese vašem timu." }
          }
        ]
      }
    ]
  },
  '/fiksna-naknada-vs-revenue-share': {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/fiksna-naknada-vs-revenue-share#webpage`,
        "url": `${SITE_URL}/fiksna-naknada-vs-revenue-share`,
        "name": "Fiksna naknada ili revenue share model?",
        "description": "Vodič kroz modele naplate agencije sa poređenjem rizika, motivacije, predvidljivosti troškova i dugoročne isplativosti.",
        "inLanguage": "sr-RS",
        "isPartOf": { "@id": SITE_URL },
        "about": { "@id": `${SITE_URL}/fiksna-naknada-vs-revenue-share#article` }
      },
      {
        "@type": "Article",
        "@id": `${SITE_URL}/fiksna-naknada-vs-revenue-share#article`,
        "headline": "Fiksna naknada vs revenue share: koji model naplate je bolji",
        "description": "Praktično poređenje modela naplate agencije sa primerima iz prakse, rizicima i preporukama za izbor po fazi rasta biznisa.",
        "author": { "@type": "Person", "name": "Aleksandar Nenadović" },
        "publisher": { "@id": `${SITE_URL}#organization` },
        "inLanguage": "sr-RS",
        "datePublished": "2026-03-04",
        "dateModified": "2026-03-12",
        "mainEntityOfPage": { "@id": `${SITE_URL}/fiksna-naknada-vs-revenue-share#webpage` }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Koji procenat uzima revenue share agencija?",
            "acceptedAnswer": { "@type": "Answer", "text": "Zavisi od industrije i obima. Za e-commerce je standard 10-20% od prihoda generisanog kroz kampanje agencije. Za lead gen modele, cena po upitu se dogovara unapred. Bitno je da je formula jasna pre početka saradnje." }
          },
          {
            "@type": "Question",
            "name": "Šta ako moj biznis ima sezonu sa slabim prometom?",
            "acceptedAnswer": { "@type": "Answer", "text": "To je jedna od prednosti revenue share modela. U slabim mesecima plaćate manje jer je procenat od manjeg prometa. Kod fiksne naknade, plaćate isto i u januaru i u decembru." }
          },
          {
            "@type": "Question",
            "name": "Kako se meri šta je agencija donela, a šta bi svakako došlo?",
            "acceptedAnswer": { "@type": "Answer", "text": "Koriste se UTM tagovi, konverzijsko praćenje (Meta Pixel, Google Ads conversion tracking), i attribution modeli. Jasno se vidi koji prihod dolazi iz kojih kampanja." }
          },
          {
            "@type": "Question",
            "name": "Da li revenue share model zahteva minimalni period saradnje?",
            "acceptedAnswer": { "@type": "Answer", "text": "Obično da, minimum 3-6 meseci. Agencija ulaže vreme i resurse u postavljanje kampanja i potrebno je vreme da se vidi pun efekat. Kratkoročna saradnja ne odgovara ni jednoj strani." }
          },
          {
            "@type": "Question",
            "name": "Mogu li kombinovati fiksnu naknadu i revenue share?",
            "acceptedAnswer": { "@type": "Answer", "text": "Da, hibridni model je čest. Manja fiksna naknada pokriva operativne troškove agencije, a revenue share deo motiviše na rezultate. Ovo je dobar kompromis za obe strane." }
          }
        ]
      }
    ]
  },
  '/cene-digitalnog-marketinga': { "@context": "https://schema.org", "@type": "Service", "name": "Digitalni marketing paketi", "description": "Cene digitalnog marketinga u Srbiji kroz jasne pakete usluga, KPI ciljeve i mesečnu optimizaciju budžeta.", "url": `${SITE_URL}/cene-digitalnog-marketinga`, "provider": { "@id": `${SITE_URL}#organization`, "@type": "Organization", "name": "Platinum Zenith", "url": SITE_URL }, "serviceType": "Digital Marketing", "areaServed": { "@type": "Country", "name": "Srbija" }, "hasOfferCatalog": { "@type": "OfferCatalog", "name": "Digital marketing usluge", "itemListElement": [ { "@type": "Offer", "name": "SEO optimizacija" }, { "@type": "Offer", "name": "Google Ads upravljanje" }, { "@type": "Offer", "name": "Meta Ads kampanje" } ] } },
  '/marketing-agencija-zrenjanin': { "@context": "https://schema.org", "@type": "ProfessionalService", "name": "Platinum Zenith - Marketing Agencija Zrenjanin", "description": "Digitalni marketing za firme u Zrenjaninu kroz SEO, Google Ads, društvene mreže i optimizaciju konverzije.", "url": `${SITE_URL}/marketing-agencija-zrenjanin`, "provider": { "@id": `${SITE_URL}#organization`, "@type": "Organization", "name": "Platinum Zenith", "url": SITE_URL }, "areaServed": { "@type": "City", "name": "Zrenjanin" }, "serviceType": "Digital Marketing", "hasOfferCatalog": { "@type": "OfferCatalog", "name": "Marketing usluge za Zrenjanin", "itemListElement": [ { "@type": "Offer", "name": "SEO optimizacija" }, { "@type": "Offer", "name": "Google Ads kampanje" }, { "@type": "Offer", "name": "Društvene mreže" } ] } },
  '/marketing-agencija-beograd': { "@context": "https://schema.org", "@type": "ProfessionalService", "name": "Platinum Zenith - Marketing Agencija Beograd", "description": "Digitalni marketing za firme u Beogradu kroz SEO, Google Ads, društvene mreže i optimizaciju konverzije.", "url": `${SITE_URL}/marketing-agencija-beograd`, "provider": { "@id": `${SITE_URL}#organization`, "@type": "Organization", "name": "Platinum Zenith", "url": SITE_URL }, "areaServed": { "@type": "City", "name": "Beograd" }, "serviceType": "Digital Marketing", "hasOfferCatalog": { "@type": "OfferCatalog", "name": "Marketing usluge za Beograd", "itemListElement": [ { "@type": "Offer", "name": "SEO optimizacija" }, { "@type": "Offer", "name": "Google Ads kampanje" }, { "@type": "Offer", "name": "Društvene mreže" } ] } },
  '/marketing-agencija-novi-sad': { "@context": "https://schema.org", "@type": "ProfessionalService", "name": "Platinum Zenith - Marketing Agencija Novi Sad", "description": "Digitalni marketing za firme u Novom Sadu kroz SEO, Google Ads, društvene mreže i optimizaciju konverzije.", "url": `${SITE_URL}/marketing-agencija-novi-sad`, "provider": { "@id": `${SITE_URL}#organization`, "@type": "Organization", "name": "Platinum Zenith", "url": SITE_URL }, "areaServed": { "@type": "City", "name": "Novi Sad" }, "serviceType": "Digital Marketing", "hasOfferCatalog": { "@type": "OfferCatalog", "name": "Marketing usluge za Novi Sad", "itemListElement": [ { "@type": "Offer", "name": "SEO optimizacija" }, { "@type": "Offer", "name": "Google Ads kampanje" }, { "@type": "Offer", "name": "Društvene mreže" } ] } },
  '/marketing-za-restorane': { "@context": "https://schema.org", "@type": "Service", "name": "Marketing za restorane", "description": "Marketing za restorane kroz Google Business, društvene mreže i oglase koji povećavaju rezervacije, porudžbine i popunjenost stolova.", "url": `${SITE_URL}/marketing-za-restorane`, "provider": { "@id": `${SITE_URL}#organization`, "@type": "Organization", "name": "Platinum Zenith", "url": SITE_URL }, "serviceType": "Restaurant Marketing", "areaServed": { "@type": "Country", "name": "Srbija" }, "hasOfferCatalog": { "@type": "OfferCatalog", "name": "Marketing usluge za restorane", "itemListElement": [ { "@type": "Offer", "name": "Google Business optimizacija" }, { "@type": "Offer", "name": "Meta kampanje za rezervacije" }, { "@type": "Offer", "name": "Lokalni performance oglasi" } ] } },
  '/marketing-za-advokate': { "@context": "https://schema.org", "@type": "Service", "name": "Marketing za advokate", "description": "Marketing za advokatske kancelarije kroz SEO, Google Ads, sajt i content strategiju koja donosi kvalifikovane upite.", "url": `${SITE_URL}/marketing-za-advokate`, "provider": { "@id": `${SITE_URL}#organization`, "@type": "Organization", "name": "Platinum Zenith", "url": SITE_URL }, "serviceType": "Legal Services Marketing", "areaServed": { "@type": "Country", "name": "Srbija" }, "hasOfferCatalog": { "@type": "OfferCatalog", "name": "Marketing usluge za advokate", "itemListElement": [ { "@type": "Offer", "name": "SEO za pravne usluge" }, { "@type": "Offer", "name": "Google Ads za advokate" }, { "@type": "Offer", "name": "Sadržaj i lead forma optimizacija" } ] } },
  '/marketing-za-stomatologe': { "@context": "https://schema.org", "@type": "Service", "name": "Marketing za stomatologe", "description": "Marketing za stomatološke ordinacije kroz Google Ads, lokalni SEO, sajt i kampanje koje pune kalendar novim pacijentima.", "url": `${SITE_URL}/marketing-za-stomatologe`, "provider": { "@id": `${SITE_URL}#organization`, "@type": "Organization", "name": "Platinum Zenith", "url": SITE_URL }, "serviceType": "Dental Marketing", "areaServed": { "@type": "Country", "name": "Srbija" }, "hasOfferCatalog": { "@type": "OfferCatalog", "name": "Marketing usluge za stomatologe", "itemListElement": [ { "@type": "Offer", "name": "Google Ads za ordinacije" }, { "@type": "Offer", "name": "Lokalni SEO za ordinacije" }, { "@type": "Offer", "name": "Lead funnel optimizacija" } ] } },
  '/web-shop-nema-prodaju': { "@context": "https://schema.org", "@type": "WebPage", "name": "Web shop nema prodaju — 5 razloga i rešenja", "url": `${SITE_URL}/web-shop-nema-prodaju`, "inLanguage": "sr-RS", "isPartOf": { "@type": "WebSite", "name": "Platinum Zenith", "url": SITE_URL } },
  '/koliko-kosta-facebook-reklama': {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/koliko-kosta-facebook-reklama#webpage`,
        "url": `${SITE_URL}/koliko-kosta-facebook-reklama`,
        "name": "Koliko košta Facebook reklama u Srbiji 2026",
        "description": "Realni troškovi Facebook i Instagram oglasa u Srbiji 2026: CPC, CPM, CPA, budžetski rasponi i cena vođenja kampanja.",
        "inLanguage": "sr-RS",
        "isPartOf": { "@id": SITE_URL },
        "about": { "@id": `${SITE_URL}/koliko-kosta-facebook-reklama#service` }
      },
      {
        "@type": "Service",
        "@id": `${SITE_URL}/koliko-kosta-facebook-reklama#service`,
        "name": "Meta Ads upravljanje kampanjama",
        "description": "Planiranje, vođenje i optimizacija Facebook i Instagram kampanja sa jasnim budžetskim fazama i fokusom na merljive konverzije.",
        "serviceType": "Meta Ads management",
        "url": `${SITE_URL}/koliko-kosta-facebook-reklama`,
        "areaServed": { "@type": "Country", "name": "Srbija" },
        "provider": { "@id": `${SITE_URL}#organization`, "@type": "Organization", "name": "Platinum Zenith", "url": SITE_URL },
        "offers": { "@type": "AggregateOffer", "priceCurrency": "EUR", "lowPrice": "200", "highPrice": "5000", "offerCount": "4" },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Meta Ads budžetske faze",
          "itemListElement": [
            { "@type": "Offer", "name": "Testiranje", "priceCurrency": "EUR", "price": "200" },
            { "@type": "Offer", "name": "Rast", "priceCurrency": "EUR", "price": "500" },
            { "@type": "Offer", "name": "Ozbiljan marketing", "priceCurrency": "EUR", "price": "1500" },
            { "@type": "Offer", "name": "Enterprise", "priceCurrency": "EUR", "price": "5000" }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Koliko novca treba za početak?",
            "acceptedAnswer": { "@type": "Answer", "text": "Minimum koji ima smisla je oko 200€ mesečno za medijski budžet, plus 200-300€ za vođenje kampanja. Ispod toga je teško dobiti dovoljno podataka za pouzdanu optimizaciju." }
          },
          {
            "@type": "Question",
            "name": "Da li mogu sam da vodim Facebook oglase?",
            "acceptedAnswer": { "@type": "Answer", "text": "Možete, ali bez iskustva cena po konverziji često bude 2-3x viša. Ako krećete sami, počnite sa manjim budžetom i jasnim konverzijskim ciljem." }
          },
          {
            "@type": "Question",
            "name": "Facebook ili Instagram oglasi?",
            "acceptedAnswer": { "@type": "Answer", "text": "Oba placement-a rade kroz isti Meta Ads sistem. U praksi najbolji rezultat najčešće daje kombinacija Facebook i Instagram inventara uz testiranje kreativnog formata." }
          },
          {
            "@type": "Question",
            "name": "Kad se vide rezultati?",
            "acceptedAnswer": { "@type": "Answer", "text": "Prve klikove vidite brzo, ali za stabilnu optimizaciju najčešće je potrebno 2-4 nedelje kontinuiranog rada i testiranja." }
          },
          {
            "@type": "Question",
            "name": "Da li Facebook oglasi rade za B2B?",
            "acceptedAnswer": { "@type": "Answer", "text": "Da, posebno kroz lead forme, webinar funnel i edukativni sadržaj. Cena lead-a je obično viša nego u B2C, ali je i vrednost klijenta znatno veća." }
          }
        ]
      }
    ]
  },
  '/google-reklame-cena': {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/google-reklame-cena#webpage`,
        "url": `${SITE_URL}/google-reklame-cena`,
        "name": "Koliko koštaju Google reklame u Srbiji 2026",
        "description": "Realni budžeti, cena klika i cena vođenja Google Ads kampanja u Srbiji 2026.",
        "inLanguage": "sr-RS",
        "isPartOf": { "@id": SITE_URL },
        "about": { "@id": `${SITE_URL}/google-reklame-cena#service` },
        "breadcrumb": { "@id": `${SITE_URL}/google-reklame-cena#breadcrumb` },
        "primaryImageOfPage": { "@type": "ImageObject", "url": `${SITE_URL}/og-image.jpg` }
      },
      {
        "@type": "Service",
        "@id": `${SITE_URL}/google-reklame-cena#service`,
        "name": "Google Ads upravljanje kampanjama",
        "description": "Google Ads upravljanje sa jasnim budžetskim fazama, cenom vođenja kampanja i optimizacijom troška po leadu.",
        "serviceType": "Google Ads management",
        "url": `${SITE_URL}/google-reklame-cena`,
        "areaServed": { "@type": "Country", "name": "Srbija" },
        "provider": { "@id": `${SITE_URL}#organization`, "@type": "Organization", "name": "Platinum Zenith", "url": SITE_URL },
        "offers": { "@type": "AggregateOffer", "priceCurrency": "EUR", "lowPrice": "300", "highPrice": "6000", "offerCount": "4" },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Google Ads budžetske faze",
          "itemListElement": [
            {
              "@type": "Offer",
              "name": "Početni test",
              "description": "Za firme koje prvi put ulaze u Google Ads i žele test ključnih reči sa visokim intentom.",
              "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "EUR", "minPrice": "300", "maxPrice": "700" }
            },
            {
              "@type": "Offer",
              "name": "Stabilan rast",
              "description": "Za firme koje žele predvidljiv priliv upita kroz Search + remarketing i kontinuiranu optimizaciju.",
              "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "EUR", "minPrice": "700", "maxPrice": "2000" }
            },
            {
              "@type": "Offer",
              "name": "Agresivna akvizicija",
              "description": "Za kompanije koje žele veći tržišni udeo kroz kombinaciju Search i Performance Max kampanja.",
              "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "EUR", "minPrice": "2000", "maxPrice": "6000" }
            },
            {
              "@type": "Offer",
              "name": "Enterprise",
              "description": "Za velike sisteme sa više tržišta, višim obimom pretrage i profit-orijentisanim skaliranjem.",
              "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "EUR", "minPrice": "6000" }
            }
          ]
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/google-reklame-cena#breadcrumb`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Početna", "item": SITE_URL },
          { "@type": "ListItem", "position": 2, "name": "Google reklame cena", "item": `${SITE_URL}/google-reklame-cena` }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Koliki je minimalan budžet za Google Ads?",
            "acceptedAnswer": { "@type": "Answer", "text": "Praktični minimum je oko 300€ mesečno za klikove, plus upravljanje. Ispod toga je teško prikupiti dovoljno podataka za ozbiljnu optimizaciju." }
          },
          {
            "@type": "Question",
            "name": "Koliko koštaju Google reklame za malu firmu u Srbiji?",
            "acceptedAnswer": { "@type": "Answer", "text": "Za većinu lokalnih usluga realan start je 300-900€ mesečno za mediju, uz dodatnu cenu upravljanja kampanjom. Tačan iznos zavisi od konkurencije i vrednosti jednog klijenta." }
          },
          {
            "@type": "Question",
            "name": "Kako da znam da li mi je cena Google oglasa održiva?",
            "acceptedAnswer": { "@type": "Answer", "text": "Posmatrajte cenu kvalifikovanog leada (CPA) u odnosu na prosečnu maržu po klijentu. Ako lead košta manje od onoga što vam ostaje kao profit, kampanja je održiva i može da se skalira." }
          },
          {
            "@type": "Question",
            "name": "Da li je Google Ads bolji od Facebook oglasa?",
            "acceptedAnswer": { "@type": "Answer", "text": "Google hvata postojeću potražnju (ljudi koji aktivno traže rešenje), dok Facebook češće kreira potražnju. Za većinu firmi najbolje radi kombinacija oba kanala." }
          },
          {
            "@type": "Question",
            "name": "Koliko brzo se vide rezultati?",
            "acceptedAnswer": { "@type": "Answer", "text": "Prvi klikovi i upiti dolaze brzo, često u prvih nekoliko dana. Za stabilne brojke i kvalitetnu optimizaciju obično je potrebno 3-6 nedelja." }
          },
          {
            "@type": "Question",
            "name": "Šta najviše utiče na cenu klika?",
            "acceptedAnswer": { "@type": "Answer", "text": "Konkurencija za ključnu reč, kvalitet oglasa, relevantnost landing stranice i istorija naloga. Dobar Quality Score može osetno smanjiti CPC." }
          },
          {
            "@type": "Question",
            "name": "Da li mogu sam da vodim kampanje?",
            "acceptedAnswer": { "@type": "Answer", "text": "Možete, ali bez jasne strukture i trackinga često dolazi do rasipanja budžeta. Ako vodite kampanje sami, krenite sa uskim setom ključnih reči i jasnim ciljem konverzije." }
          }
        ]
      }
    ]
  },
  '/instagram-reklame-cena': {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/instagram-reklame-cena#webpage`,
        "url": `${SITE_URL}/instagram-reklame-cena`,
        "name": "Koliko koštaju Instagram reklame u Srbiji 2026",
        "description": "Realni budžeti, cena klika i cena vođenja Instagram Ads kampanja u Srbiji 2026.",
        "inLanguage": "sr-RS",
        "isPartOf": { "@id": SITE_URL },
        "about": { "@id": `${SITE_URL}/instagram-reklame-cena#service` },
        "breadcrumb": { "@id": `${SITE_URL}/instagram-reklame-cena#breadcrumb` },
        "primaryImageOfPage": { "@type": "ImageObject", "url": `${SITE_URL}/og-image.jpg` }
      },
      {
        "@type": "Service",
        "@id": `${SITE_URL}/instagram-reklame-cena#service`,
        "name": "Instagram Ads upravljanje kampanjama",
        "description": "Instagram Ads upravljanje sa jasnim budžetskim fazama, realnom cenom vođenja kampanja i fokusom na kvalitetne upite i prodaju.",
        "serviceType": "Instagram advertising management",
        "url": `${SITE_URL}/instagram-reklame-cena`,
        "areaServed": { "@type": "Country", "name": "Srbija" },
        "provider": { "@id": `${SITE_URL}#organization`, "@type": "Organization", "name": "Platinum Zenith", "url": SITE_URL },
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "EUR",
          "lowPrice": "200",
          "highPrice": "5000",
          "offerCount": "4"
        },
        "hasOfferCatalog": [
          {
            "@type": "OfferCatalog",
            "name": "Instagram Ads budžetske faze",
            "itemListElement": [
              {
                "@type": "Offer",
                "name": "Test faza",
                "description": "Početni budžet za testiranje publike i kreativa.",
                "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "EUR", "minPrice": "200", "maxPrice": "600" }
              },
              {
                "@type": "Offer",
                "name": "Stabilan rast",
                "description": "Kontinuirana optimizacija cold + retargeting kampanja.",
                "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "EUR", "minPrice": "600", "maxPrice": "1800" }
              },
              {
                "@type": "Offer",
                "name": "Skaliranje",
                "description": "Skaliranje performansnih kampanja uz kontrolu profitabilnosti.",
                "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "EUR", "minPrice": "1800", "maxPrice": "5000" }
              },
              {
                "@type": "Offer",
                "name": "Enterprise",
                "description": "Više tržišta i napredna atribucija po segmentima.",
                "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "EUR", "minPrice": "5000" }
              }
            ]
          },
          {
            "@type": "OfferCatalog",
            "name": "Cena vođenja Instagram Ads kampanja",
            "itemListElement": [
              {
                "@type": "Offer",
                "name": "Freelance / mikro tim",
                "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "EUR", "minPrice": "120", "maxPrice": "280", "billingDuration": "P1M" }
              },
              {
                "@type": "Offer",
                "name": "Specijalizovana agencija",
                "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "EUR", "minPrice": "250", "maxPrice": "650", "billingDuration": "P1M" }
              },
              {
                "@type": "Offer",
                "name": "Enterprise vođenje",
                "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "EUR", "minPrice": "650", "billingDuration": "P1M" }
              }
            ]
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/instagram-reklame-cena#breadcrumb`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Početna", "item": SITE_URL },
          { "@type": "ListItem", "position": 2, "name": "Instagram reklame cena", "item": `${SITE_URL}/instagram-reklame-cena` }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Koliko je realno potrebno za početak?",
            "acceptedAnswer": { "@type": "Answer", "text": "Praktičan minimum je oko 200-300€ za medijski budžet plus upravljanje. Ispod toga je teško doneti kvalitetne zaključke iz podataka." }
          },
          {
            "@type": "Question",
            "name": "Koliko košta vođenje Instagram kampanja?",
            "acceptedAnswer": { "@type": "Answer", "text": "Za manje naloge vođenje je najčešće 120-280€ mesečno, dok je za aktivnije naloge sa redovnim testovima uglavnom 250-650€ mesečno. Veći budžeti često idu kroz enterprise model ili procenat od medija." }
          },
          {
            "@type": "Question",
            "name": "Da li Instagram oglasi rade i za uslužne biznise?",
            "acceptedAnswer": { "@type": "Answer", "text": "Da, posebno kada postoji jasan problem i dobra ponuda. Ključ je kvalitetan hook i jasna sledeća akcija na landing stranici." }
          },
          {
            "@type": "Question",
            "name": "Koliko brzo se vide rezultati?",
            "acceptedAnswer": { "@type": "Answer", "text": "Prve signale vidite brzo, ali za stabilne brojke i ozbiljnu optimizaciju obično treba 2-4 nedelje kontinuiranog rada." }
          },
          {
            "@type": "Question",
            "name": "Instagram ili Facebook oglasi?",
            "acceptedAnswer": { "@type": "Answer", "text": "U praksi su to iste Meta kampanje, ali format i ponašanje publike su različiti. Najčešće najbolje radi kombinacija oba placement-a." }
          },
          {
            "@type": "Question",
            "name": "Da li je UGC obavezan?",
            "acceptedAnswer": { "@type": "Answer", "text": "Nije obavezan, ali često značajno pomaže performanse jer izgleda prirodnije i gradi poverenje brže nego klasičan polished ad." }
          },
          {
            "@type": "Question",
            "name": "Koliko koštaju Instagram Reels reklame u Srbiji?",
            "acceptedAnswer": { "@type": "Answer", "text": "Za većinu niša Reels CPM je najčešće između 2,5€ i 8,5€, dok CPC često ulazi u raspon 0,07-0,32€. Konačna cena po rezultatu zavisi od hook-a, kreative i kvaliteta landing stranice." }
          }
        ]
      }
    ]
  },
  '/izrada-wordpress-sajta-cena': {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/izrada-wordpress-sajta-cena#webpage`,
        "url": `${SITE_URL}/izrada-wordpress-sajta-cena`,
        "name": "Koliko košta izrada WordPress sajta u Srbiji 2026",
        "description": "Rasponi cena WordPress sajtova i WooCommerce prodavnica, rokovi i mesečni troškovi održavanja koji utiču na ukupnu cenu.",
        "inLanguage": "sr-RS",
        "isPartOf": { "@id": SITE_URL },
        "about": { "@id": `${SITE_URL}/izrada-wordpress-sajta-cena#service` },
        "breadcrumb": { "@id": `${SITE_URL}/izrada-wordpress-sajta-cena#breadcrumb` }
      },
      {
        "@type": "Service",
        "@id": `${SITE_URL}/izrada-wordpress-sajta-cena#service`,
        "name": "Izrada WordPress sajta",
        "description": "Izrada WordPress sajta i WooCommerce shopa sa jasnim rasponima cena, rokovima, planom isporuke i mesečnim operativnim troškovima.",
        "serviceType": "WordPress web development",
        "url": `${SITE_URL}/izrada-wordpress-sajta-cena`,
        "areaServed": { "@type": "Country", "name": "Srbija" },
        "provider": { "@id": `${SITE_URL}#organization`, "@type": "Organization", "name": "Platinum Zenith", "url": SITE_URL },
        "offers": { "@type": "AggregateOffer", "priceCurrency": "EUR", "lowPrice": "400", "highPrice": "9000", "offerCount": "4" },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "WordPress paketi",
          "itemListElement": [
            { "@type": "Offer", "name": "Start WordPress sajt", "priceCurrency": "EUR", "price": "400" },
            { "@type": "Offer", "name": "Poslovni WordPress", "priceCurrency": "EUR", "price": "900" },
            { "@type": "Offer", "name": "WordPress + WooCommerce", "priceCurrency": "EUR", "price": "1600" },
            { "@type": "Offer", "name": "Custom WordPress sistem", "priceCurrency": "EUR", "price": "3500" }
          ]
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/izrada-wordpress-sajta-cena#breadcrumb`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Početna", "item": SITE_URL },
          { "@type": "ListItem", "position": 2, "name": "Izrada WordPress sajta cena", "item": `${SITE_URL}/izrada-wordpress-sajta-cena` }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Koliko traje izrada WordPress sajta?",
            "acceptedAnswer": { "@type": "Answer", "text": "Start sajt obično 1-2 nedelje, poslovni 2-5 nedelja, a WooCommerce projekti 4-8 nedelja u zavisnosti od obima." }
          },
          {
            "@type": "Question",
            "name": "Da li WordPress može da bude brz?",
            "acceptedAnswer": { "@type": "Answer", "text": "Da. Uz dobar hosting, kvalitetan theme setup, optimizovane slike i keš strategiju WordPress može imati vrlo dobar PageSpeed." }
          },
          {
            "@type": "Question",
            "name": "Da li mogu sam da menjam sadržaj?",
            "acceptedAnswer": { "@type": "Answer", "text": "Da, to je jedna od glavnih prednosti WordPress-a. Nakon isporuke dobijate kratko uputstvo za osnovne izmene." }
          },
          {
            "@type": "Question",
            "name": "Koliko košta održavanje WordPress sajta?",
            "acceptedAnswer": { "@type": "Answer", "text": "Zavisi od obima, ali osnovno održavanje je najčešće 50-200€ mesečno. U to ulaze update-i, backup i osnovni sigurnosni monitoring." }
          },
          {
            "@type": "Question",
            "name": "WordPress ili custom development?",
            "acceptedAnswer": { "@type": "Answer", "text": "Ako želite bržu isporuku i fleksibilan CMS, WordPress je često bolji izbor. Za specifične sisteme sa posebnom logikom nekad je bolji custom pristup." }
          },
          {
            "@type": "Question",
            "name": "Da li su domen, hosting i licence uključeni u cenu izrade?",
            "acceptedAnswer": { "@type": "Answer", "text": "Najčešće se vode kao posebne stavke. Zdrava ponuda ih jasno razdvaja na jednokratni trošak izrade i mesečni operativni trošak." }
          },
          {
            "@type": "Question",
            "name": "Koji su najčešći skriveni troškovi WordPress projekta?",
            "acceptedAnswer": { "@type": "Answer", "text": "Najčešće su to premium licence, hitne intervencije bez maintenance plana i kasne UX/SEO dorade. Zato je važno da roadmap i održavanje budu deo dogovora od starta." }
          }
        ]
      }
    ]
  },
  '/seo-optimizacija-cena': {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/seo-optimizacija-cena#webpage`,
        "url": `${SITE_URL}/seo-optimizacija-cena`,
        "name": "Koliko košta SEO optimizacija u Srbiji 2026",
        "description": "Realne cene SEO optimizacije u Srbiji kroz pakete, rokove i očekivane rezultate po fazama rasta.",
        "inLanguage": "sr-RS",
        "isPartOf": { "@id": SITE_URL },
        "about": { "@id": `${SITE_URL}/seo-optimizacija-cena#service` },
        "primaryImageOfPage": { "@type": "ImageObject", "url": `${SITE_URL}/pz-og.jpg` }
      },
      {
        "@type": "Service",
        "@id": `${SITE_URL}/seo-optimizacija-cena#service`,
        "name": "SEO optimizacija",
        "description": "SEO optimizacija sa tehničkim auditom, content planom i kontinuiranom optimizacijom za rast organskog saobraćaja i upita.",
        "serviceType": "Search Engine Optimization",
        "url": `${SITE_URL}/seo-optimizacija-cena`,
        "areaServed": { "@type": "Country", "name": "Srbija" },
        "provider": { "@id": `${SITE_URL}#organization`, "@type": "Organization", "name": "Platinum Zenith", "url": SITE_URL },
        "offers": { "@type": "AggregateOffer", "priceCurrency": "EUR", "lowPrice": "300", "highPrice": "3000", "offerCount": "3" },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "SEO paketi",
          "itemListElement": [
            {
              "@type": "Offer",
              "name": "Osnovni SEO",
              "description": "Lokalni SEO i tehničke osnove za manje biznise.",
              "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "EUR", "minPrice": "300", "maxPrice": "500", "billingDuration": "P1M" }
            },
            {
              "@type": "Offer",
              "name": "Napredni SEO",
              "description": "SEO rast kroz sadržaj, tehničke iteracije i konkurentsku analizu.",
              "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "EUR", "minPrice": "500", "maxPrice": "1200", "billingDuration": "P1M" }
            },
            {
              "@type": "Offer",
              "name": "Premium SEO",
              "description": "Agresivan SEO pristup za visoko konkurentne niše.",
              "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "EUR", "minPrice": "1200", "maxPrice": "3000", "billingDuration": "P1M" }
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Koliko brzo mogu da očekujem rezultate?",
            "acceptedAnswer": { "@type": "Answer", "text": "Za lokalne pretrage prvi pomaci su često vidljivi za 1-2 meseca, dok za konkurentne nacionalne upite ozbiljniji rezultati dolaze posle 4-6 meseci kontinuiranog rada." }
          },
          {
            "@type": "Question",
            "name": "Da li garantujete prvu poziciju na Google-u?",
            "acceptedAnswer": { "@type": "Answer", "text": "Ne, jer nijedna agencija ne kontroliše Google algoritam. Garantujemo transparentan proces, merenje i stalnu optimizaciju koja vodi ka stabilnom rastu." }
          },
          {
            "@type": "Question",
            "name": "Šta ako već imam agenciju koja radi SEO?",
            "acceptedAnswer": { "@type": "Answer", "text": "Možemo uraditi SEO audit i pokazati šta radi, a šta usporava rezultate. Na osnovu toga dobijate jasan plan prioriteta i odlučujete o sledećem koraku." }
          },
          {
            "@type": "Question",
            "name": "Da li SEO zamenjuje plaćene oglase?",
            "acceptedAnswer": { "@type": "Answer", "text": "Ne zamenjuje ih, već ih dopunjuje. SEO gradi dugoročan organski kanal, dok oglasi donose brže testiranje i instant podatke." }
          },
          {
            "@type": "Question",
            "name": "Šta je uključeno u mesečni izveštaj?",
            "acceptedAnswer": { "@type": "Answer", "text": "Mesečni izveštaj uključuje pozicije ključnih reči, organski saobraćaj, konverzije, urađene aktivnosti i plan za sledeći period." }
          }
        ]
      }
    ]
  },
  '/draft/netokracija-cro-case': { "@context": "https://schema.org", "@type": "WebPage", "name": "Draft: CRO case study za Netokraciju", "url": `${SITE_URL}/draft/netokracija-cro-case`, "inLanguage": "sr-RS", "isPartOf": { "@type": "WebSite", "name": "Platinum Zenith", "url": SITE_URL } },
  '/alati/roi-kalkulator': { "@context": "https://schema.org", "@type": "SoftwareApplication", "name": "ROI Kalkulator za Marketing", "applicationCategory": "BusinessApplication", "operatingSystem": "Web", "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR" }, "description": "Besplatan interaktivni kalkulator za izračunavanje povrata investicije u marketing.", "url": `${SITE_URL}/alati/roi-kalkulator`, "provider": { "@type": "Organization", "name": "Platinum Zenith", "url": SITE_URL } }
}

export function setJsonLd(id, data) {
  let el = document.getElementById(id)
  if (!el) { el = document.createElement('script'); el.id = id; el.type = 'application/ld+json'; document.head.appendChild(el) }
  el.textContent = JSON.stringify(data)
}

export { SITE_URL }
