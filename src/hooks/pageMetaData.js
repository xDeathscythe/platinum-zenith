/**
 * Page meta data — lazy loaded to keep index bundle small.
 * Contains pageMeta, pageSchemas, orgSchema, websiteSchema, setJsonLd
 */
const SITE_URL = 'https://platinumzenith.com'

export const pageMeta = {
  '/': {
    title: 'Platinum Zenith | Digitalna Agencija | Marketing, Web Design, Consulting',
    description: 'Digitalna agencija iz Zrenjanina. Izrada sajtova, SEO, Google Ads, društvene mreže. Revenue share model — zarađujemo kad vi zarađujete. Besplatna procena.',
    keywords: 'digitalna agencija, marketing agencija, web design, Zrenjanin, Srbija, digitalni marketing, izrada sajta',
  },
  '/web-design': {
    title: 'Web Design & Izrada Sajta | Platinum Zenith',
    description: 'Profesionalna izrada sajtova koji pretvaraju posetioce u klijente. Web design, SEO i PageSpeed optimizacija od prvog dana. Isporuka za 2-8 nedelja.',
    keywords: 'web dizajn, izrada sajta, web development, WordPress, React, responsive dizajn, sajt koji prodaje',
  },
  '/digitalni-marketing': {
    title: 'Digitalni Marketing | Zenith Sistem | Platinum Zenith',
    description: 'Meta Ads, Google Ads, TikTok Ads sa prosečnim ROAS-om od 15x. Dokazan sistem za akviziciju klijenata u Srbiji. Mesečni izveštaji sa konkretnim brojevima.',
    keywords: 'digitalni marketing, Meta Ads, Google Ads, TikTok Ads, ROAS, PPC, online oglašavanje',
  },
  '/consulting': {
    title: 'Poslovno Savetovanje | Platinum Zenith',
    description: 'Biznis audit, strategija rasta i implementacija za firme u Srbiji. Tražimo kočnice u vašem biznisu i pomažemo da ih razbijete. 5 programa konsaltinga.',
    keywords: 'poslovno savetovanje, biznis consulting, strategija rasta, audit, marketinška strategija',
  },
  '/cro': {
    title: 'CRO Optimizacija Konverzije | Platinum Zenith',
    description: 'Više klijenata sa istim budžetom. Prosečno poboljšanje konverzija od 300%. Heatmap analiza, A/B testiranje, UX audit i optimizacija landing stranica.',
    keywords: 'CRO, optimizacija konverzije, A/B testiranje, UX audit, heatmap, bounce rate',
  },
  '/kontakt': { title: 'Kontakt | Platinum Zenith', description: 'Kontaktirajte Platinum Zenith i zakažite besplatne konsultacije u Zrenjaninu. Pošaljite upit i dobijte konkretan plan rasta za vaš biznis.', keywords: 'kontakt, konsultacije, Platinum Zenith kontakt, Zrenjanin' },
  '/o-nama': { title: 'O Nama | Platinum Zenith', description: 'Upoznajte Platinum Zenith tim iz Zrenjanina: digitalni marketing, web design i consulting fokusiran na profitabilan rast i merljive rezultate.', keywords: 'o nama, Platinum Zenith, digitalna agencija Zrenjanin, tim, misija' },
  '/case-studies': { title: 'Case Studies | Rezultati | Platinum Zenith', description: 'Pogledajte realne rezultate klijenata Platinum Zenith agencije: rast konverzija, veći prihodi, bolji ROAS i jasni KPI pokazatelji po projektu.', keywords: 'case studies, rezultati, portfolio, referentni projekti, ROI' },
  '/paketi': { title: 'Paketi & Cene | Platinum Zenith', description: 'Starter od 499€/mesec, Growth od 1.499€/mesec, Enterprise custom. Transparentne cene bez skrivenih troškova. Revenue share opcija za ozbiljne projekte.', keywords: 'cene, paketi, pricing, Starter, Growth, Enterprise' },
  '/uslovi-koriscenja': { title: 'Uslovi Korišćenja | Platinum Zenith', description: 'Detaljni uslovi korišćenja Platinum Zenith sajta i usluga: prava i obaveze korisnika, B2B model saradnje, plaćanje, odgovornost i zaštita podataka.', keywords: 'uslovi korišćenja, terms of service' },
  '/uslovi-kupovine': { title: 'Uslovi Kupovine | Platinum Zenith', description: 'Uslovi kupovine za Platinum Zenith: ugovaranje putem email korespondencije, B2B model saradnje, reklamacije, isporuka i pravila realizacije.', keywords: 'uslovi kupovine, B2B kupovina, ugovaranje emailom, reklamacije' },
  '/nacin-placanja': { title: 'Način Plaćanja | Platinum Zenith', description: 'Način plaćanja za Platinum Zenith: virmansko plaćanje za pravna lica i izdavanje fakture nakon sklopljenog dogovora putem emaila.', keywords: 'način plaćanja, virman, pravna lica, faktura, B2B' },
  '/dostava': { title: 'Dostava | Platinum Zenith', description: 'Uslovi dostave i realizacije: isporuka nakon potvrđenog dogovora, rokovi, troškovi i proces za fizičku robu i digitalne usluge.', keywords: 'dostava, isporuka, rokovi, digitalne usluge, fizička roba' },
  '/politika-privatnosti': { title: 'Politika Privatnosti | Platinum Zenith', description: 'Saznajte kako Platinum Zenith prikuplja, koristi i štiti vaše lične podatke. Usklađeno sa GDPR regulativom i Zakonom o zaštiti podataka.', keywords: 'politika privatnosti, privacy policy, GDPR' },
  '/drustvene-mreze': { title: 'Društvene Mreže | Instagram, Facebook, TikTok, LinkedIn | Platinum Zenith', description: 'Upravljanje društvenim mrežama za firme u Srbiji: Instagram, Facebook, TikTok i LinkedIn strategija, oglasi i community management koji donose upite.', keywords: 'društvene mreže, Instagram marketing, Facebook, TikTok, LinkedIn, SMM' },
  '/faq': { title: 'Česta Pitanja (FAQ) | Platinum Zenith', description: 'Odgovori na najčešća pitanja o saradnji sa Platinum Zenith timom: proces rada, paketi, rokovi, komunikacija, izveštavanje, KPI praćenje i očekivani rezultati.', keywords: 'FAQ, česta pitanja' },
  '/blog': { title: 'Blog | Marketing Saveti i Strategije | Platinum Zenith', description: 'Blog o digitalnom marketingu, prodaji i rastu biznisa: praktične strategije, studije slučaja, SEO i Meta/Google Ads saveti.', keywords: 'blog, marketing saveti, digitalni marketing blog' },
  '/industrije/e-commerce': { title: 'E-Commerce Marketing | Platinum Zenith', description: 'Kompletni marketing sistemi za e-commerce brendove u Srbiji: Meta Ads, Google Ads, email automatizacija, CRO optimizacija i retargeting. Merljiv ROAS.', keywords: 'e-commerce marketing, online prodavnica, ROAS' },
  '/industrije/saas': { title: 'SaaS Marketing | Platinum Zenith', description: 'SaaS marketing strategije za brži MRR rast: akvizicija korisnika, onboarding, aktivacija, retencija i smanjenje churn-a kroz merljiv full-funnel pristup.', keywords: 'SaaS marketing, MRR rast, B2B marketing' },
  '/industrije/lokalni-biznisi': { title: 'Marketing za Lokalne Biznise | Platinum Zenith', description: 'Marketing za lokalne biznise u Srbiji: Google Business optimizacija, lokalni SEO, Meta i Google oglasi koji povećavaju pozive, upite i rezervacije.', keywords: 'lokalni marketing, lokalni SEO, Google Business' },
  '/marketing-agencija-beograd': { title: 'Marketing Agencija za Beograd | Digitalni Marketing | Platinum Zenith', description: 'Digitalni marketing za firme u Beogradu. Izrada sajtova, SEO, Google Ads, društvene mreže. Merljivi rezultati i revenue share model. Besplatna procena.', keywords: 'marketing agencija beograd, digitalni marketing beograd, seo beograd, izrada sajta beograd, google ads beograd' },
  '/seo-optimizacija-cena': { title: 'Koliko Košta SEO Optimizacija u Srbiji 2026 | Cene SEO | Platinum Zenith', description: 'Realne cene SEO optimizacije u Srbiji. Osnovni SEO od 300€, napredni od 500€, premium od 1.200€ mesečno. Besplatan SEO audit vašeg sajta.', keywords: 'seo optimizacija cena, koliko košta seo, seo cena srbija, seo agencija cena, cena seo optimizacije' },
  '/marketing-agencija-zrenjanin': { title: 'Marketing Agencija Zrenjanin | Digitalni Marketing | Platinum Zenith', description: 'Marketing agencija u Zrenjaninu. Izrada sajtova, SEO optimizacija, Google Ads, društvene mreže. Lokalna firma koja razume vaš biznis. Besplatne konsultacije.', keywords: 'marketing agencija zrenjanin, digitalni marketing zrenjanin, izrada sajta zrenjanin, seo zrenjanin, web dizajn zrenjanin' },
  '/cene-izrade-sajta': { title: 'Koliko Košta Izrada Sajta u Srbiji 2026 | Cene i Vodič | Platinum Zenith', description: 'Realne cene izrade sajta u Srbiji za 2026. godinu. Prezentacioni sajt od 300€, poslovni od 800€, web shop od 1.500€. Bez skrivenih troškova.', keywords: 'cena izrade sajta, koliko košta sajt, izrada sajta cena, web dizajn cena, izrada sajta srbija, cena web sajta' },
  '/agencija-vs-freelancer': { title: 'Agencija ili Freelancer? Uporedni Vodič za 2026 | Platinum Zenith', description: 'Agencija vs freelancer: poređenje cene, kvaliteta, rokova i pouzdanosti za firme u Srbiji koje biraju partnera za izradu sajta, SEO ili digitalni marketing.', keywords: 'agencija vs freelancer, agencija ili freelancer, izrada sajta agencija, freelancer sajt, marketing agencija srbija, freelancer vs agencija cena' },
  '/cene-digitalnog-marketinga': { title: 'Koliko Košta Digitalni Marketing u Srbiji 2026 | Cene i Vodič | Platinum Zenith', description: 'Realne cene digitalnog marketinga u Srbiji za 2026. Mesečni paketi od 300€, SEO od 200€, Google Ads upravljanje od 200€. Pregled troškova po usluzi.', keywords: 'cena digitalnog marketinga, koliko košta marketing, marketing agencija cena, SEO cena, Google Ads cena, Facebook Ads cena, digitalni marketing srbija' },
  '/marketing-agencija-novi-sad': { title: 'Marketing Agencija Novi Sad | Digitalni Marketing | Platinum Zenith', description: 'Marketing agencija za firme u Novom Sadu. Izrada sajtova, SEO optimizacija, Google Ads, društvene mreže. Besplatna procena i merljivi rezultati.', keywords: 'marketing agencija novi sad, digitalni marketing novi sad, SEO novi sad, izrada sajta novi sad, google ads novi sad, marketing vojvodina' },
  '/web-shop-nema-prodaju': { title: 'Web Shop Nema Prodaju? 5 Razloga i Rešenja | Platinum Zenith', description: 'Vaš web shop ne prodaje? Evo 5 najčešćih razloga zašto online prodavnica nema konverzija i konkretna rešenja za svaki problem. Besplatna dijagnostika.', keywords: 'web shop nema prodaju, zašto web shop ne prodaje, online prodavnica bez prodaje, e-commerce konverzija, web shop optimizacija, checkout optimizacija' },
  '/koliko-kosta-facebook-reklama': { title: 'Koliko Košta Facebook Reklama u Srbiji 2026 | Vodič Kroz Cene | Platinum Zenith', description: 'Realne cene Facebook i Instagram oglasa u Srbiji za 2026. CPC od 0,05€, mesečni budžet od 200€. Koliko plaćate Meti, koliko agenciji i šta da očekujete.', keywords: 'koliko košta facebook reklama, facebook oglasi cena, instagram oglasi cena srbija, facebook ads srbija, cena oglašavanja na facebooku, meta ads cena' },
  '/google-reklame-cena': { title: 'Koliko Koštaju Google Reklame u Srbiji 2026 | Vodič Kroz Cene | Platinum Zenith', description: 'Realne cene Google oglasa u Srbiji za 2026. CPC, budžeti po fazama rasta, trošak po leadu i najčešće greške koje povećavaju potrošnju bez rezultata.', keywords: 'google reklame cena, google ads cena, koliko kostaju google reklame, cena po kliku google, google oglasi srbija, upravljanje google ads kampanjama' },
  '/instagram-reklame-cena': { title: 'Koliko Koštaju Instagram Reklame u Srbiji 2026 | Vodič Kroz Cene | Platinum Zenith', description: 'Realne cene Instagram oglasa u Srbiji za 2026. CPC, CPM, budžeti po fazama rasta i najčešće greške koje povećavaju trošak bez više prodaje.', keywords: 'instagram reklame cena, instagram ads cena, koliko kostaju instagram reklame, cena instagram oglasa, instagram oglasavanje srbija, meta ads cena' },
  '/izrada-wordpress-sajta-cena': { title: 'Koliko Košta Izrada WordPress Sajta u Srbiji 2026 | Vodič Kroz Cene | Platinum Zenith', description: 'Realne cene izrade WordPress sajta u Srbiji za 2026. Šta ulazi u cenu, koliko košta WooCommerce, održavanje i koje greške najviše koštaju.', keywords: 'izrada wordpress sajta cena, wordpress sajt cena, koliko kosta wordpress sajt, wordpress izrada sajta srbija, woocommerce cena izrade, odrzavanje wordpress sajta' },
  '/marketing-za-advokate': { title: 'Marketing za Advokate | Digitalni Marketing za Advokatske Kancelarije | Platinum Zenith', description: 'Marketing za advokatske kancelarije u Srbiji. SEO, Google Ads, sajt i content marketing. Dovodimo 10-20 kvalifikovanih upita mesečno. ROI 8-12x.', keywords: 'marketing za advokate, digitalni marketing advokatska kancelarija, google ads advokat, seo za advokate, sajt za advokatsku kancelariju, marketing pravne usluge' },
  '/marketing-za-stomatologe': { title: 'Marketing za Stomatologe | Digitalni Marketing za Stomatološke Ordinacije | Platinum Zenith', description: 'Specijalizovani marketing za stomatološke ordinacije u Srbiji. Google Ads, lokalni SEO, sajt i društvene mreže. Dovodimo 15-25 novih pacijenata mesečno.', keywords: 'marketing za stomatologe, digitalni marketing stomatologija, google ads stomatolog, seo za stomatologe, sajt za ordinaciju, marketing stomatološka ordinacija' },
  '/marketing-za-restorane': { title: 'Marketing za Restorane | Digitalni Marketing za Ugostiteljstvo | Platinum Zenith', description: 'Marketing za restorane u Srbiji: Google Business, društvene mreže, plaćeni oglasi i izrada sajta koji povećavaju rezervacije i pune stolove i radnim danima.', keywords: 'marketing za restorane, digitalni marketing ugostiteljstvo, restoran marketing srbija, google business restoran, instagram za restorane, sajt za restoran' },
  '/in-house-tim-vs-agencija': { title: 'In-House Tim ili Marketing Agencija? Uporedni Vodič 2026 | Platinum Zenith', description: 'Zaposliti marketara ili angažovati agenciju? Uporedni vodič sa konkretnim cenama u Srbiji, prednostima i manama oba pristupa. Saznajte šta se više isplati.', keywords: 'in-house marketing vs agencija, zaposliti marketara, marketing agencija ili zaposleni, cena marketing tima srbija, in-house tim vs outsourcing' },
  '/fiksna-naknada-vs-revenue-share': { title: 'Fiksna Naknada vs Revenue Share | Koji Model Naplate je Bolji? | Platinum Zenith', description: 'Uporedni vodič za firme u Srbiji: fiksna mesečna naknada ili revenue share model naplate agencije. Prednosti, mane, primeri iz prakse i saveti za izbor.', keywords: 'fiksna naknada vs revenue share, model naplate agencija, revenue share marketing, kako platiti agenciju, marketing agencija cena model' },
  '/facebook-oglasi-ne-rade': { title: 'Facebook Oglasi Ne Rade? 6 Razloga i Kako Popraviti | Platinum Zenith', description: 'Zašto vaši Facebook oglasi ne donose rezultate i šta konkretno da promenite. Dijagnostika najčešćih grešaka sa koracima za popravku. Besplatna analiza kampanje.', keywords: 'facebook oglasi ne rade, facebook ads ne rade, zašto ne rade facebook oglasi, facebook reklame ne funkcionišu, problemi sa facebook oglasima, facebook kampanja ne daje rezultate' },
  '/alati/roi-kalkulator': { title: 'ROI Kalkulator za Marketing | Besplatan Alat | Platinum Zenith', description: 'Izračunajte povrat investicije za vaš marketing budžet. Besplatan ROI kalkulator sa benchmarkovima po industriji. Saznajte koliko vam marketing zaista donosi.', keywords: 'ROI kalkulator, povrat investicije, marketing ROI, marketing budžet, kalkulator profita' },
  '/industrije/startapovi': { title: 'Marketing za Startapove | Platinum Zenith', description: 'Marketing za startapove u Srbiji: validacija ideje, akvizicija prvih korisnika, testiranje ponude i ubrzanje product-market fit-a kroz merljiv growth pristup.', keywords: 'startup marketing, growth hacking' },
}

export const orgSchema = {
  "@context": "https://schema.org", "@type": "Organization", "name": "Platinum Zenith", "url": SITE_URL,
  "logo": `${SITE_URL}/pz-logo.svg`,
  "address": { "@type": "PostalAddress", "streetAddress": "Ruže Šulman 19", "addressLocality": "Zrenjanin", "addressCountry": "RS" },
  "contactPoint": { "@type": "ContactPoint", "email": "aleksandar@platinumzenith.com", "contactType": "customer service", "availableLanguage": ["Serbian", "English"] },
  "sameAs": []
}

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Platinum Zenith",
  "url": SITE_URL,
  "image": `${SITE_URL}/og-image.jpg`,
  "telephone": "+381668168929",
  "email": "aleksandar@platinumzenith.com",
  "priceRange": "€€",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Ruže Šulman 19",
    "addressLocality": "Zrenjanin",
    "postalCode": "23000",
    "addressCountry": "RS"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": 45.3836, "longitude": 20.3819 },
  "areaServed": { "@type": "Country", "name": "Srbija" },
  "openingHoursSpecification": [{
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "09:00",
    "closes": "18:00"
  }]
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
  ]},
  '/uslovi-koriscenja': { "@context": "https://schema.org", "@type": "WebPage", "name": "Uslovi korišćenja", "url": `${SITE_URL}/uslovi-koriscenja`, "inLanguage": "sr-RS", "isPartOf": { "@type": "WebSite", "name": "Platinum Zenith", "url": SITE_URL } },
  '/politika-privatnosti': { "@context": "https://schema.org", "@type": "WebPage", "name": "Politika privatnosti", "url": `${SITE_URL}/politika-privatnosti`, "inLanguage": "sr-RS", "isPartOf": { "@type": "WebSite", "name": "Platinum Zenith", "url": SITE_URL } },
  '/uslovi-kupovine': { "@context": "https://schema.org", "@type": "WebPage", "name": "Uslovi kupovine", "url": `${SITE_URL}/uslovi-kupovine`, "inLanguage": "sr-RS", "isPartOf": { "@type": "WebSite", "name": "Platinum Zenith", "url": SITE_URL } },
  '/nacin-placanja': { "@context": "https://schema.org", "@type": "WebPage", "name": "Način plaćanja", "url": `${SITE_URL}/nacin-placanja`, "inLanguage": "sr-RS", "isPartOf": { "@type": "WebSite", "name": "Platinum Zenith", "url": SITE_URL } },
  '/dostava': { "@context": "https://schema.org", "@type": "WebPage", "name": "Dostava", "url": `${SITE_URL}/dostava`, "inLanguage": "sr-RS", "isPartOf": { "@type": "WebSite", "name": "Platinum Zenith", "url": SITE_URL } },
  '/industrije/e-commerce': { "@context": "https://schema.org", "@type": "Service", "name": "E-Commerce Marketing", "provider": { "@type": "Organization", "name": "Platinum Zenith" }, "serviceType": "E-Commerce Marketing", "areaServed": "RS" },
  '/industrije/saas': { "@context": "https://schema.org", "@type": "Service", "name": "SaaS Marketing", "provider": { "@type": "Organization", "name": "Platinum Zenith" }, "serviceType": "SaaS Marketing", "areaServed": "RS" },
  '/industrije/lokalni-biznisi': { "@context": "https://schema.org", "@type": "Service", "name": "Marketing za Lokalne Biznise", "provider": { "@type": "Organization", "name": "Platinum Zenith" }, "serviceType": "Local Business Marketing", "areaServed": "RS" },
  '/industrije/startapovi': { "@context": "https://schema.org", "@type": "Service", "name": "Marketing za Startapove", "provider": { "@type": "Organization", "name": "Platinum Zenith" }, "serviceType": "Startup Marketing", "areaServed": "RS" },
  '/agencija-vs-freelancer': { "@context": "https://schema.org", "@type": "WebPage", "name": "Agencija ili freelancer — uporedni vodič", "url": `${SITE_URL}/agencija-vs-freelancer`, "inLanguage": "sr-RS", "isPartOf": { "@type": "WebSite", "name": "Platinum Zenith", "url": SITE_URL } },
  '/cene-digitalnog-marketinga': { "@context": "https://schema.org", "@type": "WebPage", "name": "Cene digitalnog marketinga u Srbiji 2026", "url": `${SITE_URL}/cene-digitalnog-marketinga`, "inLanguage": "sr-RS", "isPartOf": { "@type": "WebSite", "name": "Platinum Zenith", "url": SITE_URL } },
  '/marketing-agencija-zrenjanin': { "@context": "https://schema.org", "@type": "ProfessionalService", "name": "Platinum Zenith - Marketing Agencija Zrenjanin", "url": `${SITE_URL}/marketing-agencija-zrenjanin`, "areaServed": { "@type": "City", "name": "Zrenjanin" }, "serviceType": "Digital Marketing" },
  '/marketing-agencija-beograd': { "@context": "https://schema.org", "@type": "ProfessionalService", "name": "Platinum Zenith - Marketing Agencija Beograd", "url": `${SITE_URL}/marketing-agencija-beograd`, "areaServed": { "@type": "City", "name": "Beograd" }, "serviceType": "Digital Marketing" },
  '/marketing-agencija-novi-sad': { "@context": "https://schema.org", "@type": "ProfessionalService", "name": "Platinum Zenith - Marketing Agencija Novi Sad", "url": `${SITE_URL}/marketing-agencija-novi-sad`, "areaServed": { "@type": "City", "name": "Novi Sad" }, "serviceType": "Digital Marketing" },
  '/web-shop-nema-prodaju': { "@context": "https://schema.org", "@type": "WebPage", "name": "Web shop nema prodaju — 5 razloga i rešenja", "url": `${SITE_URL}/web-shop-nema-prodaju`, "inLanguage": "sr-RS", "isPartOf": { "@type": "WebSite", "name": "Platinum Zenith", "url": SITE_URL } },
  '/koliko-kosta-facebook-reklama': { "@context": "https://schema.org", "@type": "WebPage", "name": "Koliko košta Facebook reklama u Srbiji 2026", "url": `${SITE_URL}/koliko-kosta-facebook-reklama`, "inLanguage": "sr-RS", "isPartOf": { "@type": "WebSite", "name": "Platinum Zenith", "url": SITE_URL } },
  '/google-reklame-cena': { "@context": "https://schema.org", "@type": "WebPage", "name": "Koliko koštaju Google reklame u Srbiji 2026", "url": `${SITE_URL}/google-reklame-cena`, "inLanguage": "sr-RS", "isPartOf": { "@type": "WebSite", "name": "Platinum Zenith", "url": SITE_URL } },
  '/instagram-reklame-cena': { "@context": "https://schema.org", "@type": "WebPage", "name": "Koliko koštaju Instagram reklame u Srbiji 2026", "url": `${SITE_URL}/instagram-reklame-cena`, "inLanguage": "sr-RS", "isPartOf": { "@type": "WebSite", "name": "Platinum Zenith", "url": SITE_URL } },
  '/izrada-wordpress-sajta-cena': { "@context": "https://schema.org", "@type": "WebPage", "name": "Koliko košta izrada WordPress sajta u Srbiji 2026", "url": `${SITE_URL}/izrada-wordpress-sajta-cena`, "inLanguage": "sr-RS", "isPartOf": { "@type": "WebSite", "name": "Platinum Zenith", "url": SITE_URL } },
  '/alati/roi-kalkulator': { "@context": "https://schema.org", "@type": "SoftwareApplication", "name": "ROI Kalkulator za Marketing", "applicationCategory": "BusinessApplication", "operatingSystem": "Web", "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR" }, "description": "Besplatan interaktivni kalkulator za izračunavanje povrata investicije u marketing.", "url": `${SITE_URL}/alati/roi-kalkulator`, "provider": { "@type": "Organization", "name": "Platinum Zenith", "url": SITE_URL } }
}

export function setJsonLd(id, data) {
  let el = document.getElementById(id)
  if (!el) { el = document.createElement('script'); el.id = id; el.type = 'application/ld+json'; document.head.appendChild(el) }
  el.textContent = JSON.stringify(data)
}

export { SITE_URL }
