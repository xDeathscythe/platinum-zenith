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
  '/marketing-agencija-nis': { title: 'Marketing Agencija za Nis | Digitalni Marketing | Platinum Zenith', description: 'Marketing agencija za Nis: SEO, Google Ads i Meta kampanje koje povecavaju upite i prodaju uz nize troskove akvizicije.', keywords: 'marketing agencija nis, digitalni marketing nis, seo nis, izrada sajta nis, google ads nis, marketing jug srbije' },
  '/marketing-agencija-kragujevac': { title: 'Marketing Agencija za Kragujevac | Digitalni Marketing | Platinum Zenith', description: 'Marketing agencija za Kragujevac i Sumadiju: SEO, Google Ads i Meta kampanje za lokalne firme koje zele vise upita i prodaje uz merljiv ROI.', keywords: 'marketing agencija kragujevac, digitalni marketing kragujevac, seo kragujevac, izrada sajta kragujevac, google ads kragujevac, marketing sumadija' },
  '/marketing-agencija-subotica': { title: 'Marketing Agencija za Suboticu | Digitalni Marketing | Platinum Zenith', description: 'Marketing agencija za Suboticu i severnu Vojvodinu: SEO, Google Ads i Meta kampanje za lokalne firme koje zele vise upita i prodaje uz merljiv ROI.', keywords: 'marketing agencija subotica, digitalni marketing subotica, seo subotica, izrada sajta subotica, google ads subotica, marketing vojvodina' },
  '/marketing-agencija-pancevo': { title: 'Marketing Agencija za Pancevo | Digitalni Marketing | Platinum Zenith', description: 'Marketing agencija za Pancevo i juzni Banat: SEO, Google Ads i Meta kampanje za lokalne firme koje zele vise upita i prodaje uz merljiv ROI.', keywords: 'marketing agencija pancevo, digitalni marketing pancevo, seo pancevo, izrada sajta pancevo, google ads pancevo, marketing juzni banat' },
  '/marketing-agencija-cacak': { title: 'Marketing Agencija za Cacak | Digitalni Marketing | Platinum Zenith', description: 'Marketing agencija za Cacak i Moravicki okrug: SEO, Google Ads i Meta kampanje za lokalne firme koje zele vise upita i prodaje uz merljiv ROI.', keywords: 'marketing agencija cacak, digitalni marketing cacak, seo cacak, izrada sajta cacak, google ads cacak, marketing moravicki okrug' },
  '/marketing-agencija-kraljevo': { title: 'Marketing Agencija za Kraljevo | Digitalni Marketing | Platinum Zenith', description: 'Marketing agencija za Kraljevo i Raski okrug: SEO, Google Ads i Meta kampanje za lokalne firme koje zele vise upita i prodaje uz merljiv ROI.', keywords: 'marketing agencija kraljevo, digitalni marketing kraljevo, seo kraljevo, izrada sajta kraljevo, google ads kraljevo, marketing raski okrug, vrnjacka banja marketing' },
  '/marketing-agencija-krusevac': { title: 'Marketing Agencija za Krusevac | Digitalni Marketing | Platinum Zenith', description: 'Marketing agencija za Krusevac i Rasinski okrug: SEO, Google Ads i Meta kampanje za lokalne firme koje zele vise upita i prodaje uz merljiv ROI.', keywords: 'marketing agencija krusevac, digitalni marketing krusevac, seo krusevac, izrada sajta krusevac, google ads krusevac, marketing rasinski okrug, aleksandrovac marketing' },
  '/marketing-agencija-leskovac': { title: 'Marketing Agencija za Leskovac | Digitalni Marketing | Platinum Zenith', description: 'Marketing agencija za Leskovac i Jablanicki okrug: SEO, Google Ads i Meta kampanje za lokalne firme koje zele vise upita i prodaje uz merljiv ROI.', keywords: 'marketing agencija leskovac, digitalni marketing leskovac, seo leskovac, izrada sajta leskovac, google ads leskovac, marketing jablanicki okrug, vlasotince marketing' },
  '/seo-optimizacija-cena': { title: 'Koliko Košta SEO Optimizacija u Srbiji 2026 | Cene SEO | Platinum Zenith', description: 'Cene SEO optimizacije u Srbiji 2026: koliko košta lokalni SEO, content i link building, koji paket ima smisla po fazi rasta i kako da procenite realan ROI.', keywords: 'seo optimizacija cena, koliko košta seo, seo cena srbija, seo agencija cena, cena seo optimizacije' },
  '/marketing-agencija-zrenjanin': { title: 'Marketing Agencija Zrenjanin | Digitalni Marketing | Platinum Zenith', description: 'Digitalni marketing u Zrenjaninu za lokalne firme: SEO, Google Ads, društvene mreže i optimizacija sajta koja donosi više poziva, upita i prodaja.', keywords: 'marketing agencija zrenjanin, digitalni marketing zrenjanin, izrada sajta zrenjanin, seo zrenjanin, web dizajn zrenjanin' },
  '/cene-izrade-sajta': { title: 'Koliko Košta Izrada Sajta u Srbiji 2026 | Cene i Vodič | Platinum Zenith', description: 'Cene izrade sajta u Srbiji 2026: prezentacioni, poslovni i web shop paketi, rokovi isporuke, održavanje i troškovi koji se najčešće prećute u ponudi.', keywords: 'cena izrade sajta, koliko košta sajt, izrada sajta cena, web dizajn cena, izrada sajta srbija, cena web sajta' },
  '/agencija-vs-freelancer': { title: 'Agencija ili Freelancer? Uporedni Vodič za 2026 | Platinum Zenith', description: 'Agencija vs freelancer: realno poređenje po ceni, kvalitetu, rokovima i pouzdanosti. Konkretni saveti za firme u Srbiji.', keywords: 'agencija vs freelancer, agencija ili freelancer, izrada sajta agencija, freelancer sajt, marketing agencija srbija, freelancer vs agencija cena' },
  '/cene-digitalnog-marketinga': { title: 'Koliko Košta Digitalni Marketing u Srbiji 2026 | Cene i Vodič | Platinum Zenith', description: 'Cene digitalnog marketinga u Srbiji 2026: mesečni budžeti za SEO, Google Ads i Meta Ads, šta ulazi u agencijski fee i kako da planirate profitabilan rast.', keywords: 'cena digitalnog marketinga, koliko košta marketing, marketing agencija cena, SEO cena, Google Ads cena, Facebook Ads cena, digitalni marketing srbija' },
  '/marketing-agencija-novi-sad': { title: 'Marketing Agencija Novi Sad | Digitalni Marketing | Platinum Zenith', description: 'Marketing agencija za Novi Sad: SEO, Google Ads, Meta kampanje i web optimizacija za stabilan rast upita i prodaje uz transparentno praćenje budžeta.', keywords: 'marketing agencija novi sad, digitalni marketing novi sad, SEO novi sad, izrada sajta novi sad, google ads novi sad, marketing vojvodina' },
  '/web-shop-nema-prodaju': { title: 'Web Shop Nema Prodaju? 5 Razloga i Rešenja | Platinum Zenith', description: 'Vaš web shop ima posete, ali nema prodaju? Otkrivamo 5 najčešćih razloga, konkretna rešenja za svaki problem i korake za brže podizanje konverzije.', keywords: 'web shop nema prodaju, zašto web shop ne prodaje, online prodavnica bez prodaje, e-commerce konverzija, web shop optimizacija, checkout optimizacija' },
  '/koliko-kosta-facebook-reklama': { title: 'Koliko Košta Facebook Reklama u Srbiji 2026 | Vodič Kroz Cene | Platinum Zenith', description: 'Koliko košta Facebook reklama u Srbiji 2026: realni CPC/CPM/CPA rasponi, početni budžeti, cena vođenja kampanja i greške koje najskuplje podižu trošak.', keywords: 'koliko košta facebook reklama, facebook oglasi cena, instagram oglasi cena srbija, facebook ads srbija, cena oglašavanja na facebooku, meta ads cena' },
  '/google-reklame-cena': { title: 'Google Reklame Cena 2026 + Vo\u0111enje Kampanja | Platinum Zenith', description: 'Google reklame cena u Srbiji 2026: realni CPC i CPA po niši, budžeti po fazi rasta i cena vođenja Google Ads kampanja sa fokusom na profit, ne samo klikove.', keywords: 'google reklame cena, google ads cena, koliko kostaju google reklame, cena po kliku google, vodjenje google ads kampanja cena, upravljanje google ads kampanjama' },
  '/instagram-reklame-cena': { title: 'Instagram Reklame Cena 2026 + Vođenje Kampanja | Platinum Zenith', description: 'Instagram reklame cena u Srbiji 2026: CPC, CPM i CPA benchmark, Reels troškovi, preporučeni start budžet i cena vođenja kampanja pre skaliranja.', keywords: 'instagram reklame cena, instagram ads cena, instagram reels reklame cena, koliko kostaju instagram reklame, cena instagram oglasa, instagram oglasavanje srbija, vodjenje instagram ads kampanja cena, upravljanje instagram reklamama' },
  '/izrada-wordpress-sajta-cena': { title: 'Izrada WordPress Sajta Cena u Srbiji 2026 | Platinum Zenith', description: 'Izrada WordPress sajta cena u Srbiji 2026: raspon za prezentacione i WooCommerce projekte, rokovi i održavanje, uz jasnu cenu bez skrivenih troškova.', keywords: 'izrada wordpress sajta cena, wordpress sajt cena, koliko kosta wordpress sajt, wordpress izrada sajta srbija, woocommerce cena izrade, odrzavanje wordpress sajta' },
  '/marketing-za-nekretnine': {
    title: 'Marketing za Agencije za Nekretnine | Platinum Zenith',
    description: 'Digitalni marketing za agencije za nekretnine u Srbiji. Povećajte broj kupaca i prodavaca kroz Google Ads, SEO i Meta kampanje za nekretnine.',
    keywords: 'marketing za nekretnine, agencija za nekretnine marketing, digitalni marketing nekretnine, seo za nekretnine, google oglasi prodaja stanova',
  },
  '/marketing-za-frizerske-salone': {
    title: 'Marketing za Frizerske Salone u Srbiji | Platinum Zenith',
    description: 'Marketing za frizerske salone u Srbiji: lokalni SEO, Instagram, Google Ads i booking funnel koji donose vise rezervacija i manje praznih termina.',
    keywords: 'marketing za frizerske salone, marketing za frizere, digitalni marketing frizerski salon, instagram reklame frizerski salon, google ads frizerski salon, seo za salon',
  },
  '/marketing-za-autoservise': {
    title: 'Marketing za Autoservise u Srbiji | Platinum Zenith',
    description: 'Marketing za autoservise u Srbiji: lokalni SEO, Google Ads, sajt i kampanje koje donose pozive i pune raspored servisa.',
    keywords: 'marketing za autoservise, digitalni marketing autoservis, google ads autoservis, seo za autoservis, reklame za autoservis, sajt za autoservis',
  },
  '/marketing-za-kozmeticke-salone': {
    title: 'Marketing za Kozmeticke Salone u Srbiji | Platinum Zenith',
    description: 'Marketing za kozmeticke salone u Srbiji: lokalni SEO, Instagram, Google Ads i booking funnel koji donose vise zakazivanja i manje praznih termina.',
    keywords: 'marketing za kozmeticke salone, marketing za kozmeticki salon, digitalni marketing kozmeticki salon, instagram reklame kozmeticki salon, google ads kozmeticki salon, seo za salon',
  },
  '/marketing-za-teretane': {
    title: 'Marketing za Teretane i Fitnes Studije u Srbiji | Platinum Zenith',
    description: 'Marketing za teretane i fitnes studije u Srbiji: lokalni SEO, Google Ads, Instagram kampanje i retencija koji pune salu i zadrzavaju clanove.',
    keywords: 'marketing za teretane, marketing za fitnes, digitalni marketing teretana, google ads teretana, instagram reklame fitnes, seo za teretanu, marketing fitnes studio',
  },
  '/marketing-za-advokate': { title: 'Marketing za Advokate u Srbiji | Platinum Zenith', description: 'Marketing za advokatske kancelarije u Srbiji: SEO, Google Ads, sajt i content strategija koja donosi kvalifikovane upite i stabilan rast klijenata.', keywords: 'marketing za advokate, digitalni marketing advokatska kancelarija, google ads advokat, seo za advokate, sajt za advokatsku kancelariju, marketing pravne usluge' },
  '/marketing-za-stomatologe': { title: 'Marketing za Stomatologe u Srbiji | Platinum Zenith', description: 'Specijalizovani marketing za stomatološke ordinacije: Google Ads, lokalni SEO, sajt i kampanje koje pune kalendar novim pacijentima i povećavaju prihod.', keywords: 'marketing za stomatologe, digitalni marketing stomatologija, google ads stomatolog, seo za stomatologe, sajt za ordinaciju, marketing stomatološka ordinacija' },
  '/marketing-za-restorane': { title: 'Marketing za Restorane | Digitalni Marketing za Ugostiteljstvo | Platinum Zenith', description: 'Marketing za restorane u Srbiji: Google Business, društvene mreže, oglasi i sajt koji povećavaju rezervacije, porudžbine i popunjenost stolova.', keywords: 'marketing za restorane, digitalni marketing ugostiteljstvo, restoran marketing srbija, google business restoran, instagram za restorane, sajt za restoran' },
  '/draft/netokracija-cro-case': { title: 'DRAFT: Kako smo povećali profit 4x kroz CRO izmene | Platinum Zenith', description: 'Interni draft case study članka za Netokraciju o CRO optimizaciji: brzina sajta, mini-korpa, order bumps i Niwa AI logika u realnom e-commerce toku.', keywords: 'cro case study, netokracija draft, e-commerce konverzija, pagespeed optimizacija, niwa ai, order bumps' },
  '/in-house-tim-vs-agencija': { title: 'In-House Tim ili Marketing Agencija? Uporedni Vodič 2026 | Platinum Zenith', description: 'In-house tim ili agencija? Uporedni vodič sa realnim troškovima u Srbiji, prednostima i manama oba modela i jasnim kriterijumima za pravi izbor.', keywords: 'in-house marketing vs agencija, zaposliti marketara, marketing agencija ili zaposleni, cena marketing tima srbija, in-house tim vs outsourcing' },
  '/fiksna-naknada-vs-revenue-share': { title: 'Fiksna Naknada vs Revenue Share | Koji Model Naplate je Bolji? | Platinum Zenith', description: 'Fiksna naknada ili revenue share? Praktično poređenje modela naplate agencije sa primerima iz prakse, rizicima i savetima za profitabilniji izbor.', keywords: 'fiksna naknada vs revenue share, model naplate agencija, revenue share marketing, kako platiti agenciju, marketing agencija cena model' },
  '/facebook-oglasi-ne-rade': { title: 'Facebook Oglasi Ne Rade? 6 Razloga i Kako Popraviti | Platinum Zenith', description: 'Zašto vaši Facebook oglasi ne donose rezultate i šta konkretno da promenite. Dijagnostika najčešćih grešaka sa koracima za popravku.', keywords: 'facebook oglasi ne rade, facebook ads ne rade, zašto ne rade facebook oglasi, facebook reklame ne funkcionišu, problemi sa facebook oglasima, facebook kampanja ne daje rezultate' },
  '/alati/roi-kalkulator': { title: 'ROI Kalkulator za Marketing | Besplatan Alat | Platinum Zenith', description: 'Besplatan ROI kalkulator za marketing: unesite budžet, prihod i maržu, pa odmah izračunajte realan povrat investicije i profit kampanja.', keywords: 'ROI kalkulator, povrat investicije, marketing ROI, marketing budžet, kalkulator profita' },
  '/industrije/startapovi': { title: 'Marketing za Startapove | Platinum Zenith', description: 'Marketing za startapove od validacije ideje do skaliranja: pozicioniranje, akvizicija prvih korisnika i ubrzanje product-market fit-a.', keywords: 'startup marketing, growth hacking' },

  '/marketing-za-racunovodje': {
    robots: 'index, follow',
    title: 'Marketing za Računovodstvene Agencije u Srbiji | Platinum Zenith',
    description: 'Specijalizovani marketing za računovođe i knjigovođe u Srbiji. B2B Google Ads, SEO i LinkedIn strategije koje donose stabilne klijente.',
    keywords: 'marketing za racunovodje, knjigovodstvena agencija marketing, digitalni marketing racunovodstvo, b2b marketing srbija, seo za racunovodje',
    og: { title: 'Marketing za Računovodstvene Agencije u Srbiji | Platinum Zenith', description: 'Specijalizovani marketing za računovođe i knjigovođe u Srbiji. B2B Google Ads, SEO i LinkedIn strategije koje donose stabilne klijente.' },
    twitter: { title: 'Marketing za Računovodstvene Agencije u Srbiji | Platinum Zenith', description: 'Specijalizovani marketing za računovođe i knjigovođe u Srbiji. B2B Google Ads, SEO i LinkedIn strategije koje donose stabilne klijente.' },
  },

  '/marketing-za-privatne-klinike': {
    robots: 'index, follow',
    title: 'Marketing za Privatne Klinike u Srbiji | Platinum Zenith',
    description: 'Marketing za privatne klinike u Srbiji: Google Ads po specijalizaciji, lokalni SEO, sajt za zakazivanje i remarketing koji dovodi pacijente sa pravom namerom.',
    keywords: 'marketing za privatne klinike, digitalni marketing klinika, google ads privatna klinika, seo za klinike, marketing zdravstvo srbija, privatna klinika oglasi',
    og: { title: 'Marketing za Privatne Klinike u Srbiji | Platinum Zenith', description: 'Marketing za privatne klinike u Srbiji: Google Ads po specijalizaciji, lokalni SEO, sajt za zakazivanje i remarketing koji dovodi pacijente sa pravom namerom.' },
    twitter: { title: 'Marketing za Privatne Klinike u Srbiji | Platinum Zenith', description: 'Marketing za privatne klinike u Srbiji: Google Ads po specijalizaciji, lokalni SEO, sajt za zakazivanje i remarketing koji dovodi pacijente sa pravom namerom.' },
  },
  '/marketing-za-privatne-vrtice': {
    robots: 'index, follow',
    title: 'Marketing za Privatne Vrtice u Srbiji | Platinum Zenith',
    description: 'Marketing za privatne vrtice u Srbiji: lokalni SEO, Google Ads, Instagram kampanje i sajt koji popunjavaju grupe kvalitetnim upisima tokom cele godine.',
    keywords: 'marketing za privatne vrtice, marketing za vrtic, digitalni marketing vrtic, google ads privatni vrtic, instagram vrtic, seo za vrtic, upis u vrtic reklame',
    og: { title: 'Marketing za Privatne Vrtice u Srbiji | Platinum Zenith', description: 'Marketing za privatne vrtice u Srbiji: lokalni SEO, Google Ads, Instagram kampanje i sajt koji popunjavaju grupe kvalitetnim upisima tokom cele godine.' },
    twitter: { title: 'Marketing za Privatne Vrtice u Srbiji | Platinum Zenith', description: 'Marketing za privatne vrtice u Srbiji: lokalni SEO, Google Ads, Instagram kampanje i sajt koji popunjavaju grupe kvalitetnim upisima tokom cele godine.' },
  },
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
  '/cene-digitalnog-marketinga': {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/cene-digitalnog-marketinga#webpage`,
        "url": `${SITE_URL}/cene-digitalnog-marketinga`,
        "name": "Koliko kosta digitalni marketing u Srbiji 2026",
        "description": "Realne cene digitalnog marketinga u Srbiji 2026: paketi, cene po usluzi, skriveni troskovi i model planiranja budzeta.",
        "inLanguage": "sr-RS",
        "isPartOf": { "@id": SITE_URL },
        "about": { "@id": `${SITE_URL}/cene-digitalnog-marketinga#service` },
        "breadcrumb": { "@id": `${SITE_URL}/cene-digitalnog-marketinga#breadcrumb` },
        "mainEntity": [
          { "@id": `${SITE_URL}/cene-digitalnog-marketinga#service` },
          { "@id": `${SITE_URL}/cene-digitalnog-marketinga#package-tiers` },
          { "@id": `${SITE_URL}/cene-digitalnog-marketinga#service-breakdown` },
          { "@id": `${SITE_URL}/cene-digitalnog-marketinga#hidden-costs` },
          { "@id": `${SITE_URL}/cene-digitalnog-marketinga#budget-planning` },
          { "@id": `${SITE_URL}/cene-digitalnog-marketinga#faq` }
        ],
        "mentions": [
          { "@id": `${SITE_URL}/google-reklame-cena#service` },
          { "@id": `${SITE_URL}/instagram-reklame-cena#service` },
          { "@id": `${SITE_URL}/seo-optimizacija-cena#service` },
          { "@id": `${SITE_URL}/cene-izrade-sajta#service` }
        ],
        "potentialAction": {
          "@type": "ContactAction",
          "target": `${SITE_URL}/kontakt`,
          "name": "Zakazi konsultacije za digitalni marketing budzet"
        }
      },
      {
        "@type": "Service",
        "@id": `${SITE_URL}/cene-digitalnog-marketinga#service`,
        "name": "Digitalni marketing paketi i upravljanje kampanjama",
        "description": "Planiranje i realizacija digitalnog marketinga kroz SEO, Google/Meta oglase, content i analitiku sa fokusom na merljiv rast.",
        "serviceType": "Digital Marketing",
        "url": `${SITE_URL}/cene-digitalnog-marketinga`,
        "areaServed": { "@type": "Country", "name": "Srbija" },
        "provider": { "@id": `${SITE_URL}#organization`, "@type": "Organization", "name": "Platinum Zenith", "url": SITE_URL },
        "mainEntityOfPage": { "@id": `${SITE_URL}/cene-digitalnog-marketinga#webpage` },
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "EUR",
          "lowPrice": "300",
          "highPrice": "3000",
          "offerCount": "4"
        },
        "hasOfferCatalog": [
          { "@id": `${SITE_URL}/cene-digitalnog-marketinga#package-tiers` },
          { "@id": `${SITE_URL}/cene-digitalnog-marketinga#service-breakdown` }
        ],
        "subjectOf": [
          { "@id": `${SITE_URL}/cene-digitalnog-marketinga#hidden-costs` },
          { "@id": `${SITE_URL}/cene-digitalnog-marketinga#budget-planning` }
        ]
      },
      {
        "@type": "OfferCatalog",
        "@id": `${SITE_URL}/cene-digitalnog-marketinga#package-tiers`,
        "name": "Mesečni paketi digitalnog marketinga",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Osnovno prisustvo",
            "description": "Paket za manje firme koje ulaze u digitalni marketing i treba im osnovni kontinuitet.",
            "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "EUR", "minPrice": "300", "maxPrice": "500" }
          },
          {
            "@type": "Offer",
            "name": "Rast i vidljivost",
            "description": "Paket za firme koje traze merljive rezultate kroz vise kanala i redovnu optimizaciju.",
            "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "EUR", "minPrice": "500", "maxPrice": "1500" }
          },
          {
            "@type": "Offer",
            "name": "Pun servis",
            "description": "Kompletan marketing tim sa strategijom, egzekucijom i optimizacijom po KPI ciljevima.",
            "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "EUR", "minPrice": "1500", "maxPrice": "3000" }
          },
          {
            "@type": "Offer",
            "name": "Enterprise / Custom",
            "description": "Custom model za kompanije sa vecim budzetom, slozenijim funnel-om i regionalnim skaliranjem.",
            "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "EUR", "minPrice": "3000" }
          }
        ]
      },
      {
        "@type": "ItemList",
        "@id": `${SITE_URL}/cene-digitalnog-marketinga#service-breakdown`,
        "name": "Cene po digital marketing usluzi",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "item": {
              "@type": "Service",
              "name": "SEO optimizacija",
              "additionalProperty": [
                { "@type": "PropertyValue", "name": "Cena", "value": "200 - 800EUR/mes" }
              ]
            }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "item": {
              "@type": "Service",
              "name": "Google Ads upravljanje",
              "additionalProperty": [
                { "@type": "PropertyValue", "name": "Cena", "value": "200 - 600EUR/mes + budzet za oglase" }
              ]
            }
          },
          {
            "@type": "ListItem",
            "position": 3,
            "item": {
              "@type": "Service",
              "name": "Facebook i Instagram Ads",
              "additionalProperty": [
                { "@type": "PropertyValue", "name": "Cena", "value": "200 - 500EUR/mes + budzet za oglase" }
              ]
            }
          },
          {
            "@type": "ListItem",
            "position": 4,
            "item": {
              "@type": "Service",
              "name": "Upravljanje drustvenim mrezama",
              "additionalProperty": [
                { "@type": "PropertyValue", "name": "Cena", "value": "200 - 600EUR/mes" }
              ]
            }
          },
          {
            "@type": "ListItem",
            "position": 5,
            "item": {
              "@type": "Service",
              "name": "Email marketing",
              "additionalProperty": [
                { "@type": "PropertyValue", "name": "Cena", "value": "150 - 400EUR/mes" }
              ]
            }
          },
          {
            "@type": "ListItem",
            "position": 6,
            "item": {
              "@type": "Service",
              "name": "Content marketing",
              "additionalProperty": [
                { "@type": "PropertyValue", "name": "Cena", "value": "300 - 800EUR/mes" }
              ]
            }
          }
        ]
      },
      {
        "@type": "ItemList",
        "@id": `${SITE_URL}/cene-digitalnog-marketinga#hidden-costs`,
        "name": "Najcesci skriveni troskovi digitalnog marketinga",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Budzet za oglase" },
          { "@type": "ListItem", "position": 2, "name": "Alati i platforme" },
          { "@type": "ListItem", "position": 3, "name": "Kreative i foto/video produkcija" },
          { "@type": "ListItem", "position": 4, "name": "Izrada landing stranica" }
        ]
      },
      {
        "@type": "HowTo",
        "@id": `${SITE_URL}/cene-digitalnog-marketinga#budget-planning`,
        "name": "Kako odrediti digital marketing budzet bez nagadjanja",
        "description": "Praktican model da marketing budzet postavis na osnovu cilja prihoda, marze i kapaciteta optimizacije.",
        "inLanguage": "sr-RS",
        "totalTime": "P90D",
        "step": [
          {
            "@type": "HowToStep",
            "position": 1,
            "name": "Definisi cilj prihoda",
            "text": "Postavi cilj prihoda i broj novih upita/prodaja koje zelis mesecno.",
            "url": `${SITE_URL}/cene-digitalnog-marketinga#cilj-prihoda`
          },
          {
            "@type": "HowToStep",
            "position": 2,
            "name": "Postavi maksimalni CPL i CPA",
            "text": "Odredi maksimalni trosak po upitu i po prodaji koji ostavlja zdravu marzu.",
            "url": `${SITE_URL}/cene-digitalnog-marketinga#maksimalni-cpl-cpa`
          },
          {
            "@type": "HowToStep",
            "position": 3,
            "name": "Raspodeli budzet po fazama",
            "text": "Podeli budzet na test, stabilan kanal i eksperimentisanje kako bi smanjio rizik.",
            "url": `${SITE_URL}/cene-digitalnog-marketinga#raspodela-budzeta`
          },
          {
            "@type": "HowToStep",
            "position": 4,
            "name": "Drzi isti ritam minimum 90 dana",
            "text": "Izbegni prekide i drzi budzet konzistentno minimum tri meseca da bi optimizacija imala smisla.",
            "url": `${SITE_URL}/cene-digitalnog-marketinga#period-optimizacije`
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/cene-digitalnog-marketinga#breadcrumb`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Početna", "item": SITE_URL },
          { "@type": "ListItem", "position": 2, "name": "Cene digitalnog marketinga", "item": `${SITE_URL}/cene-digitalnog-marketinga` }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/cene-digitalnog-marketinga#faq`,
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Koliko treba uloziti u marketing mesecno?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Za male firme u Srbiji minimum koji ima smisla je 500-800EUR mesecno ukljucujuci budzet za oglase. Za srednje firme realan raspon je 1.500-3.000EUR."
            }
          },
          {
            "@type": "Question",
            "name": "Kad se vide rezultati?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Placeni oglasi najcesce daju prve rezultate za 2-4 nedelje, dok SEO obicno trazi 3-6 meseci za stabilnije pomake."
            }
          },
          {
            "@type": "Question",
            "name": "Da li mogu da radim marketing sam?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Mozete, ali kada marketing pocne da uzima 15-20 sati nedeljno, angazovanje strucnog tima obicno ubrzava rast i oslobadja vlasnika za operativne prioritete."
            }
          },
          {
            "@type": "Question",
            "name": "Sta je ukljuceno u mesecni paket agencije?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Standardno su ukljuceni strategija, kreiranje i upravljanje kampanjama, osnovna analitika i mesecni izvestaj, dok su SEO, email i video produkcija cesto dodatne stavke."
            }
          },
          {
            "@type": "Question",
            "name": "Kako da znam da li mi se marketing isplati?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Pratite cenu po upitu i cenu po prodaji u odnosu na prosecnu vrednost klijenta i marzu. Tek tada imate realnu sliku povrata investicije."
            }
          },
          {
            "@type": "Question",
            "name": "Da li je jeftinije angazovati in-house marketara?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "In-house resenje moze biti dobro za specifican kanal, ali agencija za slican trosak cesto daje siri spektar ekspertize kroz SEO, oglase, dizajn i analitiku."
            }
          }
        ]
      }
    ]
  },
  '/marketing-agencija-zrenjanin': { "@context": "https://schema.org", "@type": "ProfessionalService", "name": "Platinum Zenith - Marketing Agencija Zrenjanin", "description": "Digitalni marketing za firme u Zrenjaninu kroz SEO, Google Ads, društvene mreže i optimizaciju konverzije.", "url": `${SITE_URL}/marketing-agencija-zrenjanin`, "provider": { "@id": `${SITE_URL}#organization`, "@type": "Organization", "name": "Platinum Zenith", "url": SITE_URL }, "areaServed": { "@type": "City", "name": "Zrenjanin" }, "serviceType": "Digital Marketing", "hasOfferCatalog": { "@type": "OfferCatalog", "name": "Marketing usluge za Zrenjanin", "itemListElement": [ { "@type": "Offer", "name": "SEO optimizacija" }, { "@type": "Offer", "name": "Google Ads kampanje" }, { "@type": "Offer", "name": "Društvene mreže" } ] } },
  '/marketing-agencija-beograd': { "@context": "https://schema.org", "@type": "ProfessionalService", "name": "Platinum Zenith - Marketing Agencija Beograd", "description": "Digitalni marketing za firme u Beogradu kroz SEO, Google Ads, društvene mreže i optimizaciju konverzije.", "url": `${SITE_URL}/marketing-agencija-beograd`, "provider": { "@id": `${SITE_URL}#organization`, "@type": "Organization", "name": "Platinum Zenith", "url": SITE_URL }, "areaServed": { "@type": "City", "name": "Beograd" }, "serviceType": "Digital Marketing", "hasOfferCatalog": { "@type": "OfferCatalog", "name": "Marketing usluge za Beograd", "itemListElement": [ { "@type": "Offer", "name": "SEO optimizacija" }, { "@type": "Offer", "name": "Google Ads kampanje" }, { "@type": "Offer", "name": "Društvene mreže" } ] } },
  '/marketing-agencija-novi-sad': { "@context": "https://schema.org", "@type": "ProfessionalService", "name": "Platinum Zenith - Marketing Agencija Novi Sad", "description": "Digitalni marketing za firme u Novom Sadu kroz SEO, Google Ads, društvene mreže i optimizaciju konverzije.", "url": `${SITE_URL}/marketing-agencija-novi-sad`, "provider": { "@id": `${SITE_URL}#organization`, "@type": "Organization", "name": "Platinum Zenith", "url": SITE_URL }, "areaServed": { "@type": "City", "name": "Novi Sad" }, "serviceType": "Digital Marketing", "hasOfferCatalog": { "@type": "OfferCatalog", "name": "Marketing usluge za Novi Sad", "itemListElement": [ { "@type": "Offer", "name": "SEO optimizacija" }, { "@type": "Offer", "name": "Google Ads kampanje" }, { "@type": "Offer", "name": "Društvene mreže" } ] } },
  '/marketing-za-restorane': { "@context": "https://schema.org", "@type": "Service", "name": "Marketing za restorane", "description": "Marketing za restorane kroz Google Business, društvene mreže i oglase koji povećavaju rezervacije, porudžbine i popunjenost stolova.", "url": `${SITE_URL}/marketing-za-restorane`, "provider": { "@id": `${SITE_URL}#organization`, "@type": "Organization", "name": "Platinum Zenith", "url": SITE_URL }, "serviceType": "Restaurant Marketing", "areaServed": { "@type": "Country", "name": "Srbija" }, "hasOfferCatalog": { "@type": "OfferCatalog", "name": "Marketing usluge za restorane", "itemListElement": [ { "@type": "Offer", "name": "Google Business optimizacija" }, { "@type": "Offer", "name": "Meta kampanje za rezervacije" }, { "@type": "Offer", "name": "Lokalni performance oglasi" } ] } },
  '/marketing-za-nekretnine': {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/marketing-za-nekretnine#webpage`,
        "url": `${SITE_URL}/marketing-za-nekretnine`,
        "name": "Marketing za Agencije za Nekretnine | Platinum Zenith",
        "description": "Digitalni marketing za agencije za nekretnine u Srbiji. Povećajte broj kupaca i prodavaca kroz Google Ads, SEO i Meta kampanje za nekretnine.",
        "isPartOf": { "@id": `${SITE_URL}/#website` },
        "about": { "@id": `${SITE_URL}/marketing-za-nekretnine#service` },
        "breadcrumb": { "@id": `${SITE_URL}/marketing-za-nekretnine#breadcrumb` }
      },
      {
        "@type": "Service",
        "@id": `${SITE_URL}/marketing-za-nekretnine#service`,
        "name": "Marketing za agencije za nekretnine",
        "serviceType": "Real estate marketing",
        "url": `${SITE_URL}/marketing-za-nekretnine`,
        "mainEntityOfPage": { "@id": `${SITE_URL}/marketing-za-nekretnine#webpage` },
        "provider": { "@id": `${SITE_URL}/#organization` },
        "areaServed": {
          "@type": "Country",
          "name": "Srbija"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/marketing-za-nekretnine#breadcrumb`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Početna", "item": SITE_URL },
          { "@type": "ListItem", "position": 2, "name": "Marketing za nekretnine", "item": `${SITE_URL}/marketing-za-nekretnine` }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/marketing-za-nekretnine#faq`,
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Koji kanali najbolje rade za nekretnine?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Google Ads donosi kupce koji aktivno traže specifične stanove, dok Meta Ads sa video turama podiže interesovanje i prikuplja kontakte prodavaca."
            }
          },
          {
            "@type": "Question",
            "name": "Koliko traje SEO za agenciju za nekretnine?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Lokalni SEO može pokazati prve rezultate za nekoliko nedelja na nivou grada, dok nacionalne pretrage zahtevaju više meseci rada."
            }
          }
        ]
      }
    ]
  },
  '/marketing-za-frizerske-salone': {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/marketing-za-frizerske-salone#webpage`,
        "url": `${SITE_URL}/marketing-za-frizerske-salone`,
        "name": "Marketing za Frizerske Salone u Srbiji | Platinum Zenith",
        "description": "Marketing za frizerske salone u Srbiji: lokalni SEO, Instagram, Google Ads i booking funnel koji donose vise rezervacija i manje praznih termina.",
        "isPartOf": { "@id": `${SITE_URL}/#website` },
        "about": { "@id": `${SITE_URL}/marketing-za-frizerske-salone#service` },
        "breadcrumb": { "@id": `${SITE_URL}/marketing-za-frizerske-salone#breadcrumb` },
        "mainEntity": [
          { "@id": `${SITE_URL}/marketing-za-frizerske-salone#service` },
          { "@id": `${SITE_URL}/marketing-za-frizerske-salone#faq` }
        ],
        "potentialAction": {
          "@type": "ContactAction",
          "name": "Zakazite analizu salona",
          "target": `${SITE_URL}/kontakt`
        }
      },
      {
        "@type": "Service",
        "@id": `${SITE_URL}/marketing-za-frizerske-salone#service`,
        "name": "Marketing za frizerske salone",
        "serviceType": "Hair salon marketing",
        "url": `${SITE_URL}/marketing-za-frizerske-salone`,
        "mainEntityOfPage": { "@id": `${SITE_URL}/marketing-za-frizerske-salone#webpage` },
        "provider": { "@id": `${SITE_URL}/#organization` },
        "areaServed": { "@type": "Country", "name": "Srbija" },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Marketing usluge za frizerske salone",
          "itemListElement": [
            { "@type": "Offer", "name": "Instagram i Meta kampanje za salone" },
            { "@type": "Offer", "name": "Lokalni SEO i Google Business" },
            { "@type": "Offer", "name": "Landing i booking funnel optimizacija" }
          ]
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/marketing-za-frizerske-salone#breadcrumb`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Pocetna", "item": SITE_URL },
          { "@type": "ListItem", "position": 2, "name": "Marketing za frizerske salone", "item": `${SITE_URL}/marketing-za-frizerske-salone` }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/marketing-za-frizerske-salone#faq`,
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Da li su za frizerski salon vazniji Instagram ili Google?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Google hvata ljude koji sada traze salon, dok Instagram gradi zelju, poverenje i vraca ljude koji jos razmisljaju. Najjaci rezultat je obicno kombinacija, ali ne krecemo naslepo na sve odjednom."
            }
          },
          {
            "@type": "Question",
            "name": "Koliko brzo salon moze da vidi vise rezervacija?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ako su ponuda, booking put i lokalni signal dobro postavljeni, prvi kvalitetni upiti mogu da stignu brzo, a realnija slika o ceni rezervacije obicno se vidi kroz prve 3 do 6 nedelja."
            }
          },
          {
            "@type": "Question",
            "name": "Da li salonu treba sajt ako vec ima aktivan Instagram?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Vrlo cesto da. Instagram je dobar za paznju, ali sajt ili landing pomaze da klijent brzo vidi usluge, lokaciju, recenzije i jasan sledeci korak bez lutanja kroz DM poruke."
            }
          },
          {
            "@type": "Question",
            "name": "Koje usluge najcesce prve gurate kod salona?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "To zavisi od cilja i kapaciteta, ali cesto prvo guramo tretmane koji imaju dobru marzu, jak vizuelni efekat i veci lifetime value. Poenta nije da reklamiramo sve, nego ono sto najzdravije puni kalendar."
            }
          }
        ]
      }
    ]
  },
  '/marketing-za-kozmeticke-salone': {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/marketing-za-kozmeticke-salone#webpage`,
        "url": `${SITE_URL}/marketing-za-kozmeticke-salone`,
        "name": "Marketing za Kozmeticke Salone u Srbiji | Platinum Zenith",
        "description": "Marketing za kozmeticke salone u Srbiji: lokalni SEO, Instagram, Google Ads i booking funnel koji donose vise zakazivanja i manje praznih termina.",
        "isPartOf": { "@id": `${SITE_URL}/#website` },
        "about": { "@id": `${SITE_URL}/marketing-za-kozmeticke-salone#service` },
        "breadcrumb": { "@id": `${SITE_URL}/marketing-za-kozmeticke-salone#breadcrumb` },
        "mainEntity": [
          { "@id": `${SITE_URL}/marketing-za-kozmeticke-salone#service` },
          { "@id": `${SITE_URL}/marketing-za-kozmeticke-salone#faq` }
        ],
        "potentialAction": {
          "@type": "ContactAction",
          "name": "Zakazite analizu salona",
          "target": `${SITE_URL}/kontakt`
        }
      },
      {
        "@type": "Service",
        "@id": `${SITE_URL}/marketing-za-kozmeticke-salone#service`,
        "name": "Marketing za kozmeticke salone",
        "serviceType": "Beauty salon marketing",
        "url": `${SITE_URL}/marketing-za-kozmeticke-salone`,
        "mainEntityOfPage": { "@id": `${SITE_URL}/marketing-za-kozmeticke-salone#webpage` },
        "provider": { "@id": `${SITE_URL}/#organization` },
        "areaServed": { "@type": "Country", "name": "Srbija" },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Marketing usluge za kozmeticke salone",
          "itemListElement": [
            { "@type": "Offer", "name": "Instagram i Meta kampanje za kozmeticke salone" },
            { "@type": "Offer", "name": "Lokalni SEO i Google Business" },
            { "@type": "Offer", "name": "Landing i booking funnel optimizacija" },
            { "@type": "Offer", "name": "Google Ads za kozmeticke salone" }
          ]
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/marketing-za-kozmeticke-salone#breadcrumb`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Pocetna", "item": SITE_URL },
          { "@type": "ListItem", "position": 2, "name": "Marketing za kozmeticke salone", "item": `${SITE_URL}/marketing-za-kozmeticke-salone` }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/marketing-za-kozmeticke-salone#faq`,
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Da li su za kozmeticki salon vazniji Instagram ili Google?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Oba kanala imaju razlicitu ulogu. Google hvata ljude koji sada traze tretman u svom gradu, dok Instagram gradi zelju, poverenje i vraca ljude koji jos razmisljaju. Vecina salona profitira kad oba kanala rade zajedno."
            }
          },
          {
            "@type": "Question",
            "name": "Koliko brzo salon moze da vidi vise zakazivanja?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ako su ponuda, booking put i lokalni signal dobro postavljeni, prvi kvalitetni upiti mogu da stignu vec u prvoj nedelji. Realnija slika o ceni termina obicno se vidi kroz 3 do 6 nedelja."
            }
          },
          {
            "@type": "Question",
            "name": "Da li salonu treba sajt ako vec ima jak Instagram profil?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Najcesce da. Instagram je odlican za paznju, ali sajt ili landing pomaze klijentu da brzo vidi cene, usluge, lokaciju, recenzije i jasan sledeci korak bez lutanja kroz DM poruke."
            }
          },
          {
            "@type": "Question",
            "name": "Koliki budzet treba za pocetak?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Za Google Ads u kozmetici, realan start je 250 do 500 evra mesecno za ad spend, plus fee za vodjenje kampanje. Za Instagram, slican raspon moze da donese prve rezultate ako je kreativa i ponuda dobro postavljena."
            }
          }
        ]
      }
    ]
  },
  '/marketing-za-teretane': {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/marketing-za-teretane#webpage`,
        "url": `${SITE_URL}/marketing-za-teretane`,
        "name": "Marketing za Teretane i Fitnes Studije u Srbiji | Platinum Zenith",
        "description": "Marketing za teretane i fitnes studije u Srbiji: lokalni SEO, Google Ads, Instagram kampanje i retencija koji pune salu i zadrzavaju clanove.",
        "isPartOf": { "@id": `${SITE_URL}/#website` },
        "about": { "@id": `${SITE_URL}/marketing-za-teretane#service` },
        "breadcrumb": { "@id": `${SITE_URL}/marketing-za-teretane#breadcrumb` },
        "mainEntity": [
          { "@id": `${SITE_URL}/marketing-za-teretane#service` },
          { "@id": `${SITE_URL}/marketing-za-teretane#faq` }
        ],
        "potentialAction": {
          "@type": "ContactAction",
          "name": "Zakazite analizu sale",
          "target": `${SITE_URL}/kontakt`
        }
      },
      {
        "@type": "Service",
        "@id": `${SITE_URL}/marketing-za-teretane#service`,
        "name": "Marketing za teretane i fitnes studije",
        "serviceType": "Gym and fitness marketing",
        "url": `${SITE_URL}/marketing-za-teretane`,
        "mainEntityOfPage": { "@id": `${SITE_URL}/marketing-za-teretane#webpage` },
        "provider": { "@id": `${SITE_URL}/#organization` },
        "areaServed": { "@type": "Country", "name": "Srbija" },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Marketing usluge za teretane i fitnes studije",
          "itemListElement": [
            { "@type": "Offer", "name": "Google Ads za teretane i fitnes centre" },
            { "@type": "Offer", "name": "Instagram i Meta kampanje za upis clanova" },
            { "@type": "Offer", "name": "Lokalni SEO i Google Business" },
            { "@type": "Offer", "name": "Retencija i win-back kampanje" }
          ]
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/marketing-za-teretane#breadcrumb`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Pocetna", "item": SITE_URL },
          { "@type": "ListItem", "position": 2, "name": "Marketing za teretane", "item": `${SITE_URL}/marketing-za-teretane` }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/marketing-za-teretane#faq`,
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Da li teretani vise odgovara Google ili Instagram marketing?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Google hvata ljude koji aktivno traze teretanu u svom kraju i spremni su da se upisu. Instagram gradi zelju, pokazuje atmosferu i vraca ljude koji razmisljaju. Najbolji rezultat dolazi kada oba kanala rade zajedno."
            }
          },
          {
            "@type": "Question",
            "name": "Koliko brzo mogu da ocekujem nove clanove?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ako su ponuda i landing dobro postavljeni, prvi upiti za probni trening mogu doci vec u prvoj nedelji kampanje. Stabilnija slika o ceni po clanu i kvalitetu upisa obicno se vidi kroz 4 do 8 nedelja."
            }
          },
          {
            "@type": "Question",
            "name": "Koji budzet je realan za pocetak?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Za Meta kampanje, realan start je 300 do 600 evra mesecno za ad spend, plus fee za vodjenje. Za Google Ads u fitnes industriji, slican raspon moze dati rezultate u lokalnom krugu."
            }
          },
          {
            "@type": "Question",
            "name": "Kako da zadrzim clanove, ne samo da upisem nove?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Retencija pocinje od onboarding iskustva: prvi trening, follow-up poruka, raspored. Marketing pomaze kroz automatizovane email/SMS sekvence, loyalty ponude i win-back kampanje za neaktivne clanove."
            }
          },
          {
            "@type": "Question",
            "name": "Da li radite i za male studije, ne samo za velike sale?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Da. Pilates studio, yoga sala, CrossFit box i boutique gym zahtevaju prilagodjen pristup jer zive od manjeg broja premium clanova, ali principi lokalnog marketinga su isti."
            }
          }
        ]
      }
    ]
  },
  '/marketing-za-advokate': { "@context": "https://schema.org", "@type": "Service", "name": "Marketing za advokate", "description": "Marketing za advokatske kancelarije kroz SEO, Google Ads, sajt i content strategija koja donosi kvalifikovane upite.", "url": `${SITE_URL}/marketing-za-advokate`, "provider": { "@id": `${SITE_URL}#organization`, "@type": "Organization", "name": "Platinum Zenith", "url": SITE_URL }, "serviceType": "Legal Services Marketing", "areaServed": { "@type": "Country", "name": "Srbija" }, "hasOfferCatalog": { "@type": "OfferCatalog", "name": "Marketing usluge za advokate", "itemListElement": [ { "@type": "Offer", "name": "SEO za pravne usluge" }, { "@type": "Offer", "name": "Google Ads za advokate" }, { "@type": "Offer", "name": "Sadržaj i lead forma optimizacija" } ] } },
  '/marketing-za-stomatologe': { "@context": "https://schema.org", "@type": "Service", "name": "Marketing za stomatologe", "description": "Marketing za stomatološke ordinacije kroz Google Ads, lokalni SEO, sajt i kampanje koje pune kalendar novim pacijentima.", "url": `${SITE_URL}/marketing-za-stomatologe`, "provider": { "@id": `${SITE_URL}#organization`, "@type": "Organization", "name": "Platinum Zenith", "url": SITE_URL }, "serviceType": "Dental Marketing", "areaServed": { "@type": "Country", "name": "Srbija" }, "hasOfferCatalog": { "@type": "OfferCatalog", "name": "Marketing usluge za stomatologe", "itemListElement": [ { "@type": "Offer", "name": "Google Ads za ordinacije" }, { "@type": "Offer", "name": "Lokalni SEO za ordinacije" }, { "@type": "Offer", "name": "Lead funnel optimizacija" } ] } },
  '/web-shop-nema-prodaju': {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/web-shop-nema-prodaju#webpage`,
        "url": `${SITE_URL}/web-shop-nema-prodaju`,
        "name": "Web shop nema prodaju? Evo 5 razloga",
        "description": "Dijagnostika za web shop bez prodaje: najcesci razlozi, brze popravke i sledeci koraci za vecu konverziju.",
        "inLanguage": "sr-RS",
        "isPartOf": { "@id": SITE_URL },
        "about": { "@id": `${SITE_URL}/web-shop-nema-prodaju#article` },
        "mainEntity": [
          { "@id": `${SITE_URL}/web-shop-nema-prodaju#article` },
          { "@id": `${SITE_URL}/web-shop-nema-prodaju#reasons` },
          { "@id": `${SITE_URL}/web-shop-nema-prodaju#quick-wins` },
          { "@id": `${SITE_URL}/web-shop-nema-prodaju#faq` }
        ],
        "mentions": [
          { "@id": `${SITE_URL}/cro#service` },
          { "@id": `${SITE_URL}/google-reklame-cena#service` },
          { "@id": `${SITE_URL}/koliko-kosta-facebook-reklama#service` },
          { "@id": `${SITE_URL}/cene-izrade-sajta#service` }
        ],
        "breadcrumb": { "@id": `${SITE_URL}/web-shop-nema-prodaju#breadcrumb` },
        "potentialAction": {
          "@type": "ContactAction",
          "name": "Zatrazite dijagnostiku web shopa",
          "target": `${SITE_URL}/kontakt`
        }
      },
      {
        "@type": "Article",
        "@id": `${SITE_URL}/web-shop-nema-prodaju#article`,
        "headline": "Web shop nema prodaju? Evo 5 razloga",
        "description": "Praktican vodic za otkrivanje razloga zasto web shop ne prodaje i kako da podignete konverziju.",
        "author": { "@type": "Person", "name": "Aleksandar Nenadovic" },
        "publisher": { "@id": `${SITE_URL}#organization` },
        "inLanguage": "sr-RS",
        "datePublished": "2026-03-05",
        "dateModified": "2026-03-14",
        "mainEntityOfPage": { "@id": `${SITE_URL}/web-shop-nema-prodaju#webpage` }
      },
      {
        "@type": "ItemList",
        "@id": `${SITE_URL}/web-shop-nema-prodaju#reasons`,
        "name": "Najcesci razlozi zasto web shop nema prodaju",
        "numberOfItems": 5,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Sajt se sporo ucitava", "url": `${SITE_URL}/web-shop-nema-prodaju#razlog-01` },
          { "@type": "ListItem", "position": 2, "name": "Nema poverenja za online kupovinu", "url": `${SITE_URL}/web-shop-nema-prodaju#razlog-02` },
          { "@type": "ListItem", "position": 3, "name": "Checkout proces je komplikovan", "url": `${SITE_URL}/web-shop-nema-prodaju#razlog-03` },
          { "@type": "ListItem", "position": 4, "name": "Ne dolazi dovoljno pravih ljudi na sajt", "url": `${SITE_URL}/web-shop-nema-prodaju#razlog-04` },
          { "@type": "ListItem", "position": 5, "name": "Stranice proizvoda ne prodaju", "url": `${SITE_URL}/web-shop-nema-prodaju#razlog-05` }
        ]
      },
      {
        "@type": "HowTo",
        "@id": `${SITE_URL}/web-shop-nema-prodaju#quick-wins`,
        "name": "6 brzih popravki za web shop koji nema prodaju",
        "description": "Checklist koraka koje mozete uraditi istog dana da uklonite najvece blokere prodaje.",
        "inLanguage": "sr-RS",
        "totalTime": "PT3H",
        "step": [
          {
            "@type": "HowToStep",
            "position": 1,
            "name": "Proverite brzinu sajta",
            "text": "Pokrenite PageSpeed i otklonite najvece blokere ucitavanja stranica proizvoda.",
            "url": `${SITE_URL}/web-shop-nema-prodaju#brze-popravke-web-shop`
          },
          {
            "@type": "HowToStep",
            "position": 2,
            "name": "Dodajte elemente poverenja",
            "text": "Istaknite recenzije, telefon i jasne informacije o dostavi i vracanju robe.",
            "url": `${SITE_URL}/web-shop-nema-prodaju#razlog-02`
          },
          {
            "@type": "HowToStep",
            "position": 3,
            "name": "Skratite checkout",
            "text": "Uklonite nepotrebna polja, dozvolite kupovinu bez registracije i ukljucite pouzece.",
            "url": `${SITE_URL}/web-shop-nema-prodaju#razlog-03`
          },
          {
            "@type": "HowToStep",
            "position": 4,
            "name": "Dovedite trazeni saobracaj",
            "text": "Spojite SEO i Google Ads za proizvode sa jasnim komercijalnim intentom.",
            "url": `${SITE_URL}/web-shop-nema-prodaju#razlog-04`
          },
          {
            "@type": "HowToStep",
            "position": 5,
            "name": "Popravite stranice proizvoda",
            "text": "Napravite originalne opise, bolje slike i vidljive informacije o isporuci.",
            "url": `${SITE_URL}/web-shop-nema-prodaju#razlog-05`
          },
          {
            "@type": "HowToStep",
            "position": 6,
            "name": "Uvedite analitiku",
            "text": "Podesite GA4 i pratite gde korisnici odustaju pre kupovine.",
            "url": `${SITE_URL}/web-shop-nema-prodaju#brze-popravke-web-shop`
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/web-shop-nema-prodaju#faq`,
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Imam web shop ali prodajem samo 2-3 proizvoda mesecno. Da li se isplati ulagati?",
            "acceptedAnswer": { "@type": "Answer", "text": "Ako postoji potraznja i zdrava margina, ulaganje ima smisla. Prvo podignite konverziju kroz brzinu sajta, checkout i poverenje, pa tek onda skalirajte budzet." }
          },
          {
            "@type": "Question",
            "name": "Koliko treba uloziti da web shop pocne da prodaje?",
            "acceptedAnswer": { "@type": "Answer", "text": "Krenite od besplatnih popravki, a za paid test obicno je potreban minimum 200-300EUR mesecno da biste dobili dovoljno podataka za optimizaciju." }
          },
          {
            "@type": "Question",
            "name": "Da li treba da menjam ceo sajt ili mogu popraviti postojeci?",
            "acceptedAnswer": { "@type": "Answer", "text": "U vecini slucajeva postojeci shop moze da se popravi. Redizajn je potreban tek kada je platforma tehnicki ogranicena ili prespora za realan rast." }
          },
          {
            "@type": "Question",
            "name": "Zasto imam puno poseta ali malo prodaje?",
            "acceptedAnswer": { "@type": "Answer", "text": "Najcesce je problem u kvalitetu saobracaja, nedostatku poverenja ili komplikovanom checkoutu. Analitika po koracima funnel-a najbrze pokazuje gde je glavni gubitak." }
          },
          {
            "@type": "Question",
            "name": "Da li je Instagram dovoljan za prodaju ili mi treba web shop?",
            "acceptedAnswer": { "@type": "Answer", "text": "Instagram je odlican za otkrivanje brenda, ali web shop je neophodan za ozbiljnu prodaju, korpu, pracenje zaliha i merenje konverzija." }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/web-shop-nema-prodaju#breadcrumb`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Pocetna", "item": SITE_URL },
          { "@type": "ListItem", "position": 2, "name": "Web shop nema prodaju", "item": `${SITE_URL}/web-shop-nema-prodaju` }
        ]
      }
    ]
  },
    '/koliko-kosta-facebook-reklama': {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/koliko-kosta-facebook-reklama#webpage`,
        "url": `${SITE_URL}/koliko-kosta-facebook-reklama`,
        "name": "Koliko kosta Facebook reklama u Srbiji 2026",
        "description": "Praktican vodic kroz realne troskove Facebook i Instagram oglasa u Srbiji 2026, sa budzetskim fazama, CPC/CPA rasponima i cenom vodjenja kampanja.",
        "inLanguage": "sr-RS",
        "isPartOf": { "@id": SITE_URL },
        "about": { "@id": `${SITE_URL}/koliko-kosta-facebook-reklama#service` },
        "breadcrumb": { "@id": `${SITE_URL}/koliko-kosta-facebook-reklama#breadcrumb` },
        "mainEntity": [
          { "@id": `${SITE_URL}/koliko-kosta-facebook-reklama#article` },
          { "@id": `${SITE_URL}/koliko-kosta-facebook-reklama#service` },
          { "@id": `${SITE_URL}/koliko-kosta-facebook-reklama#budget-tiers` },
          { "@id": `${SITE_URL}/koliko-kosta-facebook-reklama#management-models` },
          { "@id": `${SITE_URL}/koliko-kosta-facebook-reklama#pricing-models` },
          { "@id": `${SITE_URL}/koliko-kosta-facebook-reklama#placement-benchmarks` },
          { "@id": `${SITE_URL}/koliko-kosta-facebook-reklama#funnel-split` },
          { "@id": `${SITE_URL}/koliko-kosta-facebook-reklama#cost-mistakes` },
          { "@id": `${SITE_URL}/koliko-kosta-facebook-reklama#howto-budget` },
          { "@id": `${SITE_URL}/koliko-kosta-facebook-reklama#faq` }
        ],
        "mentions": [
          { "@id": `${SITE_URL}/google-reklame-cena#service` },
          { "@id": `${SITE_URL}/instagram-reklame-cena#service` },
          { "@id": `${SITE_URL}/cene-digitalnog-marketinga#service` },
          { "@id": `${SITE_URL}/izrada-wordpress-sajta-cena#service` },
          { "@id": `${SITE_URL}/cro#service` }
        ],
        "potentialAction": {
          "@type": "ContactAction",
          "name": "Zakazite procenu Meta Ads budzeta",
          "target": `${SITE_URL}/kontakt`
        }
      },
      {
        "@type": "Article",
        "@id": `${SITE_URL}/koliko-kosta-facebook-reklama#article`,
        "headline": "Koliko kosta Facebook reklama u Srbiji 2026: CPC, CPM, CPA i cena vodjenja kampanja",
        "description": "Realni benchmark rasponi i praktican plan budzeta za Facebook i Instagram oglase na trzistu Srbije.",
        "author": { "@type": "Person", "name": "Aleksandar Nenadovic" },
        "publisher": { "@id": `${SITE_URL}#organization` },
        "inLanguage": "sr-RS",
        "datePublished": "2026-03-06",
        "dateModified": "2026-03-15",
        "mainEntityOfPage": { "@id": `${SITE_URL}/koliko-kosta-facebook-reklama#webpage` },
        "about": { "@id": `${SITE_URL}/koliko-kosta-facebook-reklama#service` }
      },
      {
        "@type": "Service",
        "@id": `${SITE_URL}/koliko-kosta-facebook-reklama#service`,
        "name": "Meta Ads upravljanje kampanjama",
        "description": "Planiranje, vodjenje i optimizacija Facebook i Instagram kampanja sa jasnim budzetskim fazama i fokusom na profitabilne konverzije.",
        "serviceType": "Meta Ads management",
        "url": `${SITE_URL}/koliko-kosta-facebook-reklama`,
        "areaServed": { "@type": "Country", "name": "Srbija" },
        "provider": { "@id": `${SITE_URL}#organization`, "@type": "Organization", "name": "Platinum Zenith", "url": SITE_URL },
        "mainEntityOfPage": { "@id": `${SITE_URL}/koliko-kosta-facebook-reklama#webpage` },
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "EUR",
          "lowPrice": "200",
          "highPrice": "5000",
          "offerCount": "4"
        },
        "hasOfferCatalog": [
          { "@id": `${SITE_URL}/koliko-kosta-facebook-reklama#budget-tiers` },
          { "@id": `${SITE_URL}/koliko-kosta-facebook-reklama#management-models` },
          { "@id": `${SITE_URL}/koliko-kosta-facebook-reklama#pricing-models` }
        ],
        "subjectOf": [
          { "@id": `${SITE_URL}/koliko-kosta-facebook-reklama#placement-benchmarks` },
          { "@id": `${SITE_URL}/koliko-kosta-facebook-reklama#funnel-split` },
          { "@id": `${SITE_URL}/koliko-kosta-facebook-reklama#cost-mistakes` },
          { "@id": `${SITE_URL}/koliko-kosta-facebook-reklama#howto-budget` }
        ],
        "additionalProperty": [
          { "@type": "PropertyValue", "name": "Tipicni CPC raspon", "value": "0,05 EUR - 0,65 EUR" },
          { "@type": "PropertyValue", "name": "Tipicni CPM raspon", "value": "2 EUR - 11 EUR" },
          { "@type": "PropertyValue", "name": "Tipicni CPA raspon", "value": "4 EUR - 45 EUR" },
          { "@type": "PropertyValue", "name": "Preporuceni test period", "value": "21-30 dana" }
        ]
      },
      {
        "@type": "OfferCatalog",
        "@id": `${SITE_URL}/koliko-kosta-facebook-reklama#budget-tiers`,
        "name": "Budzetske faze za Facebook i Instagram oglase",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Test faza",
            "description": "Pocetni period validacije publike, ponude i kreativa.",
            "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "EUR", "minPrice": "200", "maxPrice": "600" }
          },
          {
            "@type": "Offer",
            "name": "Stabilan lead flow",
            "description": "Faza kontinuiteta i optimizacije za stabilan broj upita.",
            "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "EUR", "minPrice": "600", "maxPrice": "1800" }
          },
          {
            "@type": "Offer",
            "name": "Skaliranje",
            "description": "Povecanje obima kampanja uz kontrolu CPA i ROAS metrika.",
            "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "EUR", "minPrice": "1800", "maxPrice": "5000" }
          },
          {
            "@type": "Offer",
            "name": "Enterprise",
            "description": "Model za vise trzista i slozenije funnel scenarije.",
            "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "EUR", "minPrice": "5000" }
          }
        ]
      },
      {
        "@type": "OfferCatalog",
        "@id": `${SITE_URL}/koliko-kosta-facebook-reklama#management-models`,
        "name": "Cena vodjenja Meta Ads kampanja",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Freelance / mikro tim",
            "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "EUR", "minPrice": "120", "maxPrice": "300", "billingDuration": "P1M" }
          },
          {
            "@type": "Offer",
            "name": "Specijalizovana agencija",
            "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "EUR", "minPrice": "250", "maxPrice": "700", "billingDuration": "P1M" }
          },
          {
            "@type": "Offer",
            "name": "Enterprise vodjenje",
            "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "EUR", "minPrice": "700", "billingDuration": "P1M" }
          }
        ]
      },
      {
        "@type": "OfferCatalog",
        "@id": `${SITE_URL}/koliko-kosta-facebook-reklama#pricing-models`,
        "name": "Modeli naplate za Meta Ads",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Fiksna mesecna naknada",
            "description": "Predvidljiv mesecni trosak uz jasno definisan scope optimizacije.",
            "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "EUR", "minPrice": "200", "maxPrice": "650", "billingDuration": "P1M" }
          },
          {
            "@type": "Offer",
            "name": "Procenat od ad spend-a",
            "description": "Model 8-15% medijskog budzeta za naloge u fazi ubrzanog rasta.",
            "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "EUR", "minPrice": "8", "maxPrice": "15", "unitText": "%" }
          },
          {
            "@type": "Offer",
            "name": "Hibridni model",
            "description": "Kombinacija fiksnog dela i varijabilnog bonusa po performansu.",
            "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "EUR", "minPrice": "180", "maxPrice": "500", "billingDuration": "P1M" }
          }
        ]
      },
      {
        "@type": "ItemList",
        "@id": `${SITE_URL}/koliko-kosta-facebook-reklama#placement-benchmarks`,
        "name": "Benchmark rasponi po placement-u",
        "numberOfItems": 3,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "item": {
              "@type": "Thing",
              "name": "Instagram Reels",
              "description": "Najcesce nizi CPM uz dobar hook u prvih 2-3 sekunde.",
              "additionalProperty": [
                { "@type": "PropertyValue", "name": "CPM", "value": "2,5 - 8,5 EUR" },
                { "@type": "PropertyValue", "name": "CPC", "value": "0,07 - 0,40 EUR" },
                { "@type": "PropertyValue", "name": "CPA", "value": "5 - 28 EUR" }
              ]
            }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "item": {
              "@type": "Thing",
              "name": "Facebook Feed",
              "description": "Stabilan placement za lead generation i remarketing kampanje.",
              "additionalProperty": [
                { "@type": "PropertyValue", "name": "CPM", "value": "3 - 10 EUR" },
                { "@type": "PropertyValue", "name": "CPC", "value": "0,12 - 0,65 EUR" },
                { "@type": "PropertyValue", "name": "CPA", "value": "8 - 45 EUR" }
              ]
            }
          },
          {
            "@type": "ListItem",
            "position": 3,
            "item": {
              "@type": "Thing",
              "name": "Facebook/Instagram Stories",
              "description": "Cesto efikasan remarketing sloj kada je ponuda jasna i kratka.",
              "additionalProperty": [
                { "@type": "PropertyValue", "name": "CPM", "value": "2 - 7 EUR" },
                { "@type": "PropertyValue", "name": "CPC", "value": "0,05 - 0,30 EUR" },
                { "@type": "PropertyValue", "name": "CPA", "value": "4 - 22 EUR" }
              ]
            }
          }
        ]
      },
      {
        "@type": "ItemList",
        "@id": `${SITE_URL}/koliko-kosta-facebook-reklama#funnel-split`,
        "name": "Primer raspodele budzeta po funnel-u",
        "numberOfItems": 3,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "item": { "@type": "Thing", "name": "Cold publika", "description": "55-70% budzeta za akviziciju novih korisnika." }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "item": { "@type": "Thing", "name": "Warm publika", "description": "20-30% budzeta za edukaciju i engagement." }
          },
          {
            "@type": "ListItem",
            "position": 3,
            "item": { "@type": "Thing", "name": "Hot/remarketing", "description": "10-20% budzeta za zavrsni push ka konverziji." }
          }
        ]
      },
      {
        "@type": "ItemList",
        "@id": `${SITE_URL}/koliko-kosta-facebook-reklama#cost-mistakes`,
        "name": "Najcesce greske koje podizu cenu Meta kampanja",
        "numberOfItems": 5,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Presiroko targetiranje bez segmentacije publike" },
          { "@type": "ListItem", "position": 2, "name": "Jedna kreativa predugo bez osvezavanja" },
          { "@type": "ListItem", "position": 3, "name": "Optimizacija po klikovima umesto po konverzijama" },
          { "@type": "ListItem", "position": 4, "name": "Slaba landing stranica i spor follow-up leadova" },
          { "@type": "ListItem", "position": 5, "name": "Skaliranje budzeta bez validiranih CPA granica" }
        ]
      },
      {
        "@type": "HowTo",
        "@id": `${SITE_URL}/koliko-kosta-facebook-reklama#howto-budget`,
        "name": "Kako postaviti Meta Ads budzet za prvih 90 dana",
        "description": "Praktican model za planiranje, validaciju i skaliranje Facebook/Instagram kampanja bez rasipanja budzeta.",
        "inLanguage": "sr-RS",
        "totalTime": "P90D",
        "step": [
          {
            "@type": "HowToStep",
            "position": 1,
            "name": "Definisite cilj i maksimalni CPA",
            "text": "Postavite koliko leadova/prodaja zelite mesecno i koliki CPA ostavlja zdravu marzu.",
            "url": `${SITE_URL}/koliko-kosta-facebook-reklama#cilj-kampanje`
          },
          {
            "@type": "HowToStep",
            "position": 2,
            "name": "Pokrenite test sa vise kreativnih uglova",
            "text": "Testirajte najmanje 3-5 oglasa i odvojite cold, warm i hot publike.",
            "url": `${SITE_URL}/koliko-kosta-facebook-reklama#budzet-faze-rasta`
          },
          {
            "@type": "HowToStep",
            "position": 3,
            "name": "Uvedite nedeljnu optimizaciju",
            "text": "Gasite slabe ad set-ove, osvezavajte kreative i pratite kvalitet upita, ne samo volumen.",
            "url": `${SITE_URL}/koliko-kosta-facebook-reklama#kako-smanjiti-cenu-facebook-reklama`
          },
          {
            "@type": "HowToStep",
            "position": 4,
            "name": "Skalirajte samo profitabilne kampanje",
            "text": "Povecavajte budzet postepeno 15-25% nedeljno na kampanjama koje drze ciljnu cenu akvizicije.",
            "url": `${SITE_URL}/koliko-kosta-facebook-reklama#checklist-pre-nego-sto-povecas-budzet`
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/koliko-kosta-facebook-reklama#breadcrumb`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Pocetna", "item": SITE_URL },
          { "@type": "ListItem", "position": 2, "name": "Koliko kosta Facebook reklama", "item": `${SITE_URL}/koliko-kosta-facebook-reklama` }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/koliko-kosta-facebook-reklama#faq`,
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Koliki je minimalni budzet za pocetak?",
            "acceptedAnswer": { "@type": "Answer", "text": "Realan minimum je oko 200-300 EUR mesecno za medijski budzet, plus trosak vodjenja kampanja." }
          },
          {
            "@type": "Question",
            "name": "Koliko kosta vodjenje Facebook i Instagram kampanja?",
            "acceptedAnswer": { "@type": "Answer", "text": "Za manje naloge vodjenje je obicno 120-300 EUR mesecno, a za aktivnije naloge 250-700 EUR mesecno u zavisnosti od obima rada." }
          },
          {
            "@type": "Question",
            "name": "Da li je bolje ulagati u Facebook ili Instagram?",
            "acceptedAnswer": { "@type": "Answer", "text": "U praksi najbolje radi kombinacija oba placement-a, uz raspodelu budzeta prema tipu publike i performansama kreativa." }
          },
          {
            "@type": "Question",
            "name": "Koliko brzo mogu da se vide rezultati?",
            "acceptedAnswer": { "@type": "Answer", "text": "Prvi signali dolaze u prvim danima, ali za stabilne zakljucke i optimizaciju najcesce je potrebno 2-4 nedelje kontinuiranog rada." }
          },
          {
            "@type": "Question",
            "name": "Sta najvise utice na cenu reklame?",
            "acceptedAnswer": { "@type": "Answer", "text": "Najveci uticaj imaju kvalitet kreative, jasna ponuda, relevantnost publike i kvalitet landing stranice posle klika." }
          },
          {
            "@type": "Question",
            "name": "Da li Meta oglasi rade za B2B usluge?",
            "acceptedAnswer": { "@type": "Answer", "text": "Da, posebno uz lead magnet, edukativni sadrzaj i jasan follow-up proces prodajnog tima." }
          },
          {
            "@type": "Question",
            "name": "Kako da znam da li je kampanja profitabilna?",
            "acceptedAnswer": { "@type": "Answer", "text": "Pratite CPA i kvalitet leadova u odnosu na prosecnu vrednost klijenta i marzu. Ako ostaje profit posle svih troskova, kampanja je odrziva." }
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
        "name": "Koliko kostaju Google reklame u Srbiji 2026",
        "description": "Realni budzeti, cena klika i cena vodjenja Google Ads kampanja u Srbiji 2026.",
        "inLanguage": "sr-RS",
        "isPartOf": { "@id": SITE_URL },
        "about": { "@id": `${SITE_URL}/google-reklame-cena#service` },
        "breadcrumb": { "@id": `${SITE_URL}/google-reklame-cena#breadcrumb` },
        "primaryImageOfPage": { "@type": "ImageObject", "url": `${SITE_URL}/og-image.jpg` },
        "mainEntity": [
          { "@id": `${SITE_URL}/google-reklame-cena#article` },
          { "@id": `${SITE_URL}/google-reklame-cena#service` },
          { "@id": `${SITE_URL}/google-reklame-cena#budget-tiers` },
          { "@id": `${SITE_URL}/google-reklame-cena#management-models` },
          { "@id": `${SITE_URL}/google-reklame-cena#pricing-models` },
          { "@id": `${SITE_URL}/google-reklame-cena#cost-breakdown` },
          { "@id": `${SITE_URL}/google-reklame-cena#market-metrics` },
          { "@id": `${SITE_URL}/google-reklame-cena#howto-budget` },
          { "@id": `${SITE_URL}/google-reklame-cena#industry-benchmarks` },
          { "@id": `${SITE_URL}/google-reklame-cena#intent-benchmarks` },
          { "@id": `${SITE_URL}/google-reklame-cena#city-benchmarks` },
          { "@id": `${SITE_URL}/google-reklame-cena#cost-mistakes` },
          { "@id": `${SITE_URL}/google-reklame-cena#faq` }
        ],
        "mentions": [
          { "@id": `${SITE_URL}/instagram-reklame-cena#service` },
          { "@id": `${SITE_URL}/koliko-kosta-facebook-reklama#service` },
          { "@id": `${SITE_URL}/izrada-wordpress-sajta-cena#service` },
          { "@id": `${SITE_URL}/cene-digitalnog-marketinga#service` },
          { "@id": `${SITE_URL}/cro#service` }
        ],
        "potentialAction": {
          "@type": "ContactAction",
          "target": `${SITE_URL}/kontakt`,
          "name": "Zakazite konsultacije za Google Ads budzet"
        }
      },
      {
        "@type": "Article",
        "@id": `${SITE_URL}/google-reklame-cena#article`,
        "headline": "Google reklame cena u Srbiji 2026: budzet, CPC i cena vodjenja kampanja",
        "description": "Detaljan vodic kroz budzetske faze, CPC/CPA raspone i modele naplate za Google Ads kampanje u Srbiji.",
        "inLanguage": "sr-RS",
        "author": { "@type": "Person", "name": "Aleksandar Nenadović" },
        "publisher": { "@id": `${SITE_URL}#organization` },
        "datePublished": "2026-03-10",
        "dateModified": "2026-03-14",
        "mainEntityOfPage": { "@id": `${SITE_URL}/google-reklame-cena#webpage` },
        "about": { "@id": `${SITE_URL}/google-reklame-cena#service` }
      },
      {
        "@type": "Service",
        "@id": `${SITE_URL}/google-reklame-cena#service`,
        "name": "Google Ads upravljanje kampanjama",
        "description": "Google Ads upravljanje sa jasnim budzetskim fazama, cenom vodjenja kampanja i optimizacijom troska po leadu.",
        "serviceType": "Google Ads management",
        "url": `${SITE_URL}/google-reklame-cena`,
        "areaServed": { "@type": "Country", "name": "Srbija" },
        "provider": { "@id": `${SITE_URL}#organization`, "@type": "Organization", "name": "Platinum Zenith", "url": SITE_URL },
        "mainEntityOfPage": { "@id": `${SITE_URL}/google-reklame-cena#webpage` },
        "offers": { "@type": "AggregateOffer", "priceCurrency": "EUR", "lowPrice": "300", "highPrice": "6000", "offerCount": "4" },
        "hasOfferCatalog": [
          { "@id": `${SITE_URL}/google-reklame-cena#budget-tiers` },
          { "@id": `${SITE_URL}/google-reklame-cena#management-models` },
          { "@id": `${SITE_URL}/google-reklame-cena#pricing-models` }
        ],
        "subjectOf": [
          { "@id": `${SITE_URL}/google-reklame-cena#cost-breakdown` },
          { "@id": `${SITE_URL}/google-reklame-cena#market-metrics` },
          { "@id": `${SITE_URL}/google-reklame-cena#howto-budget` },
          { "@id": `${SITE_URL}/google-reklame-cena#industry-benchmarks` },
          { "@id": `${SITE_URL}/google-reklame-cena#intent-benchmarks` },
          { "@id": `${SITE_URL}/google-reklame-cena#city-benchmarks` },
          { "@id": `${SITE_URL}/google-reklame-cena#cost-mistakes` }
        ],
        "additionalProperty": [
          { "@type": "PropertyValue", "name": "CPC (Search) u Srbiji", "value": "0,10 - 1,20EUR" },
          { "@type": "PropertyValue", "name": "CTR (Search) u Srbiji", "value": "4% - 12%" },
          { "@type": "PropertyValue", "name": "CPA (lead) u Srbiji", "value": "8 - 60EUR" },
          { "@type": "PropertyValue", "name": "Preporuceni test period", "value": "3-6 nedelja" }
        ]
      },
      {
        "@type": "OfferCatalog",
        "@id": `${SITE_URL}/google-reklame-cena#budget-tiers`,
        "name": "Google Ads budzetske faze",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Pocetni test",
            "description": "Za firme koje prvi put ulaze u Google Ads i zele test kljucnih reci sa visokim intentom.",
            "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "EUR", "minPrice": "300", "maxPrice": "700" }
          },
          {
            "@type": "Offer",
            "name": "Stabilan rast",
            "description": "Za firme koje zele predvidljiv priliv upita kroz Search + remarketing i kontinuiranu optimizaciju.",
            "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "EUR", "minPrice": "700", "maxPrice": "2000" }
          },
          {
            "@type": "Offer",
            "name": "Agresivna akvizicija",
            "description": "Za kompanije koje zele veci trzisni udeo kroz kombinaciju Search i Performance Max kampanja.",
            "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "EUR", "minPrice": "2000", "maxPrice": "6000" }
          },
          {
            "@type": "Offer",
            "name": "Enterprise",
            "description": "Za velike sisteme sa vise trzista, visim obimom pretrage i profit-orijentisanim skaliranjem.",
            "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "EUR", "minPrice": "6000" }
          }
        ]
      },
      {
        "@type": "OfferCatalog",
        "@id": `${SITE_URL}/google-reklame-cena#management-models`,
        "name": "Cena vodjenja Google Ads kampanja",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Freelance / mikro tim",
            "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "EUR", "minPrice": "150", "maxPrice": "300", "billingDuration": "P1M" }
          },
          {
            "@type": "Offer",
            "name": "Specijalizovana agencija",
            "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "EUR", "minPrice": "250", "maxPrice": "700", "billingDuration": "P1M" }
          },
          {
            "@type": "Offer",
            "name": "Enterprise vodjenje",
            "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "EUR", "minPrice": "700", "billingDuration": "P1M" }
          }
        ]
      },
      {
        "@type": "OfferCatalog",
        "@id": `${SITE_URL}/google-reklame-cena#pricing-models`,
        "name": "Modeli naplate vodjenja Google Ads kampanja",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Fiksna mesecna naknada",
            "description": "Stabilan mesecni fee uz jasno definisan scope i optimizacione sprintove.",
            "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "EUR", "minPrice": "250", "maxPrice": "900", "billingDuration": "P1M" }
          },
          {
            "@type": "Offer",
            "name": "Procenat od medijskog budzeta",
            "description": "Model 8-15% ad spend-a za naloge sa brzim tempom skaliranja.",
            "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "EUR", "minPrice": "8", "maxPrice": "15", "unitText": "%" }
          },
          {
            "@type": "Offer",
            "name": "Hibrid (fiksno + procenat)",
            "description": "Bazna operativa + varijabilni deo za ubrzano skaliranje kampanja.",
            "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "EUR", "minPrice": "200", "maxPrice": "500", "billingDuration": "P1M" }
          },
          {
            "@type": "Offer",
            "name": "Performance bonus (CPA/ROAS target)",
            "description": "Fiksna baza uz bonus kada se ispune dogovoreni profitni KPI-jevi.",
            "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "EUR", "minPrice": "200", "billingDuration": "P1M" }
          }
        ]
      },
      {
        "@type": "ItemList",
        "@id": `${SITE_URL}/google-reklame-cena#cost-breakdown`,
        "name": "Sta ulazi u ukupan trosak Google Ads kampanja",
        "numberOfItems": 4,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "item": {
              "@type": "Thing",
              "name": "Budzet za klikove (Google)",
              "description": "Direktna medijska potrosnja koja zavisi od konkurencije, kvaliteta oglasa i landing stranice."
            }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "item": {
              "@type": "Thing",
              "name": "Vodjenje kampanja (agencija)",
              "description": "Research kljucnih reci, setup kampanja, optimizacija i izvestavanje kroz mesecne iteracije."
            }
          },
          {
            "@type": "ListItem",
            "position": 3,
            "item": {
              "@type": "Thing",
              "name": "Kreativa i copy",
              "description": "Tekstovi oglasa, asseti za Performance Max i testiranje varijanti ponude koje uticu na CPC i konverzije."
            }
          },
          {
            "@type": "ListItem",
            "position": 4,
            "item": {
              "@type": "Thing",
              "name": "Landing i tracking infrastruktura",
              "description": "Landing stranice, GA4 i konverzijski tracking bez kojih nije moguce meriti profitabilnost kampanje."
            }
          }
        ]
      },
      {
        "@type": "ItemList",
        "@id": `${SITE_URL}/google-reklame-cena#market-metrics`,
        "name": "Kljucne Google Ads metrike za srpsko trziste",
        "numberOfItems": 4,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "item": {
              "@type": "Thing",
              "name": "CPC (Search)",
              "description": "Tipican raspon 0,10-1,20 EUR, uz vise cene u konkurentnim B2B i pravnim nisama."
            }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "item": {
              "@type": "Thing",
              "name": "CTR (Search)",
              "description": "Tipican raspon 4%-12%, kao indikator relevantnosti oglasa i search namere."
            }
          },
          {
            "@type": "ListItem",
            "position": 3,
            "item": {
              "@type": "Thing",
              "name": "CPA (lead)",
              "description": "Tipican raspon 8-60 EUR, zavisno od konkurencije, vrednosti ponude i kvaliteta prodajnog procesa."
            }
          },
          {
            "@type": "ListItem",
            "position": 4,
            "item": {
              "@type": "Thing",
              "name": "ROAS/ROI",
              "description": "Tipican raspon 3x-10x kada su kampanje i landing optimizovani po profitabilnosti, ne po kliku."
            }
          }
        ]
      },
      {
        "@type": "HowTo",
        "@id": `${SITE_URL}/google-reklame-cena#howto-budget`,
        "name": "Kako da izracunate Google Ads budzet bez nagadjanja",
        "description": "Cetiri koraka za odredjivanje odrzivog Google Ads budzeta na osnovu marze i ciljanog CPA-a.",
        "inLanguage": "sr-RS",
        "totalTime": "P30D",
        "step": [
          {
            "@type": "HowToStep",
            "position": 1,
            "name": "Definisite vrednost klijenta",
            "text": "Izracunajte prosecnu vrednost jednog klijenta ili porudzbine i neto marzu.",
            "url": `${SITE_URL}/google-reklame-cena#vrednost-klijenta`
          },
          {
            "@type": "HowToStep",
            "position": 2,
            "name": "Odredite maksimalni CPA",
            "text": "Postavite maksimalan trosak akvizicije koji ostavlja zdravu marzu.",
            "url": `${SITE_URL}/google-reklame-cena#maksimalni-cpa`
          },
          {
            "@type": "HowToStep",
            "position": 3,
            "name": "Izracunajte potreban broj lead-ova",
            "text": "Odredite koliko kvalifikovanih lead-ova mesecno je potrebno za ciljani prihod.",
            "url": `${SITE_URL}/google-reklame-cena#broj-leadova`
          },
          {
            "@type": "HowToStep",
            "position": 4,
            "name": "Postavite test budzet",
            "text": "Planirajte budzet za minimum 200-400 klikova u prvih 30 dana kako biste imali dovoljno podataka.",
            "url": `${SITE_URL}/google-reklame-cena#test-budzet-google`
          }
        ]
      },
      {
        "@type": "ItemList",
        "@id": `${SITE_URL}/google-reklame-cena#industry-benchmarks`,
        "name": "Google Ads benchmark po nisama u Srbiji",
        "itemListOrder": "http://schema.org/ItemListUnordered",
        "numberOfItems": 4,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Lokalne usluge",
            "item": { "@type": "Thing", "name": "CPC 0,10-0,45EUR, CPA 8-25EUR, budzet 300-900EUR/mes" }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "B2B usluge i konsulting",
            "item": { "@type": "Thing", "name": "CPC 0,35-1,20EUR, CPA 20-60EUR, budzet 700-2.500EUR/mes" }
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "E-commerce",
            "item": { "@type": "Thing", "name": "CPC 0,20-0,80EUR, CPA 6-30EUR, budzet 800-4.000EUR/mes" }
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Pravne i finansijske nise",
            "item": { "@type": "Thing", "name": "CPC 0,80-2,80EUR, CPA 35-120EUR, budzet 1.200-5.000EUR/mes" }
          }
        ]
      },
      {
        "@type": "ItemList",
        "@id": `${SITE_URL}/google-reklame-cena#intent-benchmarks`,
        "name": "Google Ads CPC i CPA po intentu",
        "numberOfItems": 3,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "item": { "@type": "Thing", "name": "Brend upiti", "description": "CPC 0,06-0,22EUR, CPA 4-18EUR, CVR 12%-28%" }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "item": { "@type": "Thing", "name": "Komercijalni non-brand upiti", "description": "CPC 0,35-1,60EUR, CPA 12-65EUR, CVR 4%-14%" }
          },
          {
            "@type": "ListItem",
            "position": 3,
            "item": { "@type": "Thing", "name": "Urgent / visokovredni upiti", "description": "CPC 1,10-3,40EUR, CPA 35-160EUR, CVR 3%-9%" }
          }
        ]
      },
      {
        "@type": "ItemList",
        "@id": `${SITE_URL}/google-reklame-cena#city-benchmarks`,
        "name": "Google Ads benchmark po gradu u Srbiji",
        "numberOfItems": 3,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "item": { "@type": "Thing", "name": "Beograd", "description": "CPC 0,35-1,80EUR, CPA 15-90EUR, budzet 900-3.500EUR/mes" }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "item": { "@type": "Thing", "name": "Novi Sad", "description": "CPC 0,22-1,10EUR, CPA 12-55EUR, budzet 600-2.100EUR/mes" }
          },
          {
            "@type": "ListItem",
            "position": 3,
            "item": { "@type": "Thing", "name": "Zrenjanin i manji gradovi", "description": "CPC 0,12-0,65EUR, CPA 8-35EUR, budzet 300-1.200EUR/mes" }
          }
        ]
      },
      {
        "@type": "ItemList",
        "@id": `${SITE_URL}/google-reklame-cena#cost-mistakes`,
        "name": "Najcesce greske koje podizu cenu Google Ads kampanja",
        "numberOfItems": 5,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Gadjanje presirokih kljucnih reci" },
          { "@type": "ListItem", "position": 2, "name": "Bez negativnih kljucnih reci" },
          { "@type": "ListItem", "position": 3, "name": "Jedan oglas za sve usluge" },
          { "@type": "ListItem", "position": 4, "name": "Losa landing stranica" },
          { "@type": "ListItem", "position": 5, "name": "Optimizacija samo po ceni klika" }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/google-reklame-cena#breadcrumb`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Pocetna", "item": SITE_URL },
          { "@type": "ListItem", "position": 2, "name": "Google reklame cena", "item": `${SITE_URL}/google-reklame-cena` }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/google-reklame-cena#faq`,
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Koliki je minimalan budzet za Google Ads?",
            "acceptedAnswer": { "@type": "Answer", "text": "Prakticni minimum je oko 300EUR mesecno za klikove, plus upravljanje. Ispod toga je tesko prikupiti dovoljno podataka za ozbiljnu optimizaciju." }
          },
          {
            "@type": "Question",
            "name": "Koliko kostaju Google reklame za malu firmu u Srbiji?",
            "acceptedAnswer": { "@type": "Answer", "text": "Za vecinu lokalnih usluga realan start je 300-900EUR mesecno za mediju, uz dodatnu cenu upravljanja kampanjom. Tacan iznos zavisi od konkurencije i vrednosti jednog klijenta." }
          },
          {
            "@type": "Question",
            "name": "Kako da znam da li mi je cena Google oglasa odrziva?",
            "acceptedAnswer": { "@type": "Answer", "text": "Posmatrajte cenu kvalifikovanog leada (CPA) u odnosu na prosecnu marzu po klijentu. Ako lead kosta manje od onoga sto vam ostaje kao profit, kampanja je odrziva i moze da se skalira." }
          },
          {
            "@type": "Question",
            "name": "Da li je Google Ads bolji od Facebook oglasa?",
            "acceptedAnswer": { "@type": "Answer", "text": "Google hvata postojecu potraznju (ljudi koji aktivno traze resenje), dok Facebook cesce kreira potraznju. Za vecinu firmi najbolje radi kombinacija oba kanala." }
          },
          {
            "@type": "Question",
            "name": "Koliko brzo se vide rezultati?",
            "acceptedAnswer": { "@type": "Answer", "text": "Prvi klikovi i upiti dolaze brzo, cesto u prvih nekoliko dana. Za stabilne brojke i kvalitetnu optimizaciju obicno je potrebno 3-6 nedelja." }
          },
          {
            "@type": "Question",
            "name": "Sta najvise utice na cenu klika?",
            "acceptedAnswer": { "@type": "Answer", "text": "Konkurencija za kljucnu rec, kvalitet oglasa, relevantnost landing stranice i istorija naloga. Dobar Quality Score moze osetno smanjiti CPC." }
          },
          {
            "@type": "Question",
            "name": "Da li mogu sam da vodim kampanje?",
            "acceptedAnswer": { "@type": "Answer", "text": "Mozete, ali bez jasne strukture i trackinga cesto dolazi do rasipanja budzeta. Ako vodite kampanje sami, krenite sa uskim setom kljucnih reci i jasnim ciljem konverzije." }
          },
          {
            "@type": "Question",
            "name": "Koliko kosta vodjenje Google Ads kampanja bez medijskog budzeta?",
            "acceptedAnswer": { "@type": "Answer", "text": "Za vecinu firmi u Srbiji vodjenje kampanja je najcesce 250-700EUR mesecno. Tacan fee zavisi od broja kampanja, obima testiranja i nivoa analitike koji vam je potreban." }
          },
          {
            "@type": "Question",
            "name": "Da li budzet treba povecavati odmah ili postepeno?",
            "acceptedAnswer": { "@type": "Answer", "text": "U praksi je sigurnije postepeno skaliranje (20-30% na 7-10 dana) kada kampanja drzi stabilan CPA. Naglo podizanje budzeta cesto remeti delivery i dize cenu leada." }
          },
          {
            "@type": "Question",
            "name": "Da li Google Ads ima smisla za B2B sa manjim obimom pretrage?",
            "acceptedAnswer": { "@type": "Answer", "text": "Da, ako su kljucne reci usko vezane za komercijalni intent i ako pratite kvalitet leadova, ne samo broj formi. Kod B2B-a je cesto vazniji profit po klijentu nego volumen klikova." }
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
        "mainEntity": [
          { "@id": `${SITE_URL}/instagram-reklame-cena#article` },
          { "@id": `${SITE_URL}/instagram-reklame-cena#service` },
          { "@id": `${SITE_URL}/instagram-reklame-cena#budget-tiers` },
          { "@id": `${SITE_URL}/instagram-reklame-cena#management-models` },
          { "@id": `${SITE_URL}/instagram-reklame-cena#pricing-models` },
          { "@id": `${SITE_URL}/instagram-reklame-cena#market-benchmarks` },
          { "@id": `${SITE_URL}/instagram-reklame-cena#placement-benchmarks` },
          { "@id": `${SITE_URL}/instagram-reklame-cena#split-scenarios` },
          { "@id": `${SITE_URL}/instagram-reklame-cena#cost-mistakes` },
          { "@id": `${SITE_URL}/instagram-reklame-cena#howto` },
          { "@id": `${SITE_URL}/instagram-reklame-cena#faq` }
        ],
        "about": { "@id": `${SITE_URL}/instagram-reklame-cena#service` },
        "mentions": [
          { "@id": `${SITE_URL}/google-reklame-cena#service` },
          { "@id": `${SITE_URL}/koliko-kosta-facebook-reklama#service` },
          { "@id": `${SITE_URL}/izrada-wordpress-sajta-cena#service` },
          { "@id": `${SITE_URL}/cro#service` },
          { "@id": `${SITE_URL}/cene-digitalnog-marketinga#service` }
        ],
        "breadcrumb": { "@id": `${SITE_URL}/instagram-reklame-cena#breadcrumb` },
        "primaryImageOfPage": { "@type": "ImageObject", "url": `${SITE_URL}/og-image.jpg` },
        "potentialAction": {
          "@type": "ContactAction",
          "name": "Zakažite procenu za Instagram Ads",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": `${SITE_URL}/kontakt`
          }
        }
      },
      {
        "@type": "Article",
        "@id": `${SITE_URL}/instagram-reklame-cena#article`,
        "headline": "Instagram reklame cena u Srbiji 2026: budzet, CPM/CPC i cena vodjenja kampanja",
        "description": "Praktican vodic kroz realne troskove Instagram oglasa u Srbiji: budzetske faze, benchmark rasponi i modeli naplate vođenja.",
        "inLanguage": "sr-RS",
        "author": { "@type": "Person", "name": "Aleksandar Nenadović" },
        "publisher": { "@id": `${SITE_URL}#organization` },
        "datePublished": "2026-03-10",
        "dateModified": "2026-03-14",
        "mainEntityOfPage": { "@id": `${SITE_URL}/instagram-reklame-cena#webpage` },
        "about": { "@id": `${SITE_URL}/instagram-reklame-cena#service` }
      },
      {
        "@type": "Service",
        "@id": `${SITE_URL}/instagram-reklame-cena#service`,
        "name": "Instagram Ads upravljanje kampanjama",
        "description": "Instagram Ads upravljanje sa jasnim budžetskim fazama, realnom cenom vođenja kampanja i fokusom na kvalitetne upite i prodaju.",
        "serviceType": "Instagram advertising management",
        "url": `${SITE_URL}/instagram-reklame-cena`,
        "mainEntityOfPage": { "@id": `${SITE_URL}/instagram-reklame-cena#webpage` },
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
          { "@id": `${SITE_URL}/instagram-reklame-cena#budget-tiers` },
          { "@id": `${SITE_URL}/instagram-reklame-cena#management-models` },
          { "@id": `${SITE_URL}/instagram-reklame-cena#pricing-models` }
        ],
        "subjectOf": [
          { "@id": `${SITE_URL}/instagram-reklame-cena#howto` },
          { "@id": `${SITE_URL}/instagram-reklame-cena#market-benchmarks` },
          { "@id": `${SITE_URL}/instagram-reklame-cena#placement-benchmarks` },
          { "@id": `${SITE_URL}/instagram-reklame-cena#split-scenarios` },
          { "@id": `${SITE_URL}/instagram-reklame-cena#cost-mistakes` }
        ],
        "additionalProperty": [
          { "@type": "PropertyValue", "name": "Tipični CPC raspon", "value": "0,05€ - 0,35€" },
          { "@type": "PropertyValue", "name": "Tipični CPM raspon", "value": "2€ - 9€" },
          { "@type": "PropertyValue", "name": "Tipični CPA raspon", "value": "3€ - 30€" },
          { "@type": "PropertyValue", "name": "Tipični ROAS raspon", "value": "2,5x - 9x" },
          { "@type": "PropertyValue", "name": "Preporučeni test period", "value": "14-30 dana pre agresivnog skaliranja" }
        ]
      },
      {
        "@type": "OfferCatalog",
        "@id": `${SITE_URL}/instagram-reklame-cena#budget-tiers`,
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
        "@id": `${SITE_URL}/instagram-reklame-cena#management-models`,
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
      },
      {
        "@type": "OfferCatalog",
        "@id": `${SITE_URL}/instagram-reklame-cena#pricing-models`,
        "name": "Modeli naplate vođenja Instagram Ads kampanja",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Fiksna mesečna naknada",
            "description": "Predvidljiv mesečni trošak uz jasno definisan scope optimizacije i reporting.",
            "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "EUR", "minPrice": "200", "maxPrice": "650", "billingDuration": "P1M" }
          },
          {
            "@type": "Offer",
            "name": "Procenat od medijskog budžeta",
            "description": "Model 8-15% ad spend-a za naloge koji ulaze u fazu bržeg skaliranja.",
            "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "EUR", "minPrice": "8", "maxPrice": "15", "unitText": "%" }
          },
          {
            "@type": "Offer",
            "name": "Hibrid (fiksno + procenat)",
            "description": "Bazni operativni fee plus varijabilni deo kada kampanje prelaze planirani spend.",
            "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "EUR", "minPrice": "180", "maxPrice": "450", "billingDuration": "P1M" }
          },
          {
            "@type": "Offer",
            "name": "Performance bonus",
            "description": "Fiksna baza uz bonus kada se ispune dogovoreni CPA/ROAS KPI-jevi.",
            "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "EUR", "minPrice": "150", "billingDuration": "P1M" }
          }
        ]
      },
      {
        "@type": "ItemList",
        "@id": `${SITE_URL}/instagram-reklame-cena#market-benchmarks`,
        "name": "Instagram Ads benchmark metrike za Srbiju (2026)",
        "numberOfItems": 4,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "item": {
              "@type": "Thing",
              "name": "CPC (Srbija)",
              "description": "Cena klika zavisi od niše, kvaliteta kreative i konkurencije.",
              "additionalProperty": [
                { "@type": "PropertyValue", "name": "Raspon", "value": "0,05 - 0,35€" }
              ]
            }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "item": {
              "@type": "Thing",
              "name": "CPM (Srbija)",
              "description": "CPM raste kada se publika zasiti ili je kreativa slaba u prvim sekundama.",
              "additionalProperty": [
                { "@type": "PropertyValue", "name": "Raspon", "value": "2 - 9€" }
              ]
            }
          },
          {
            "@type": "ListItem",
            "position": 3,
            "item": {
              "@type": "Thing",
              "name": "CPA (lead/prodaja)",
              "description": "Konačan CPA zavisi od ponude, landing strane i kvaliteta follow-up procesa.",
              "additionalProperty": [
                { "@type": "PropertyValue", "name": "Raspon", "value": "3 - 30€" }
              ]
            }
          },
          {
            "@type": "ListItem",
            "position": 4,
            "item": {
              "@type": "Thing",
              "name": "ROAS",
              "description": "Stabilan ROAS pri rastu budžeta je ključ dugoročne profitabilnosti.",
              "additionalProperty": [
                { "@type": "PropertyValue", "name": "Raspon", "value": "2,5x - 9x" }
              ]
            }
          }
        ]
      },
      {
        "@type": "ItemList",
        "@id": `${SITE_URL}/instagram-reklame-cena#placement-benchmarks`,
        "name": "Instagram placement benchmark rasponi",
        "numberOfItems": 3,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "item": {
              "@type": "Thing",
              "name": "Instagram Reels (cold publika)",
              "description": "Kratki UGC format sa jakim hook-om obično daje najbolji odnos CPM/CPC.",
              "additionalProperty": [
                { "@type": "PropertyValue", "name": "CPM", "value": "2,5 - 8,5€" },
                { "@type": "PropertyValue", "name": "CPC", "value": "0,07 - 0,32€" },
                { "@type": "PropertyValue", "name": "CPA", "value": "5 - 24€" }
              ]
            }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "item": {
              "@type": "Thing",
              "name": "Instagram Stories (retargeting)",
              "description": "Stories placement često spušta remarketing CPA kada je ponuda jasna.",
              "additionalProperty": [
                { "@type": "PropertyValue", "name": "CPM", "value": "1,8 - 6,5€" },
                { "@type": "PropertyValue", "name": "CPC", "value": "0,05 - 0,26€" },
                { "@type": "PropertyValue", "name": "CPA", "value": "4 - 18€" }
              ]
            }
          },
          {
            "@type": "ListItem",
            "position": 3,
            "item": {
              "@type": "Thing",
              "name": "Instagram Feed (mixed funnel)",
              "description": "Feed traži češći refresh kreativa da CPC ostane stabilan kroz duži period.",
              "additionalProperty": [
                { "@type": "PropertyValue", "name": "CPM", "value": "3 - 10€" },
                { "@type": "PropertyValue", "name": "CPC", "value": "0,10 - 0,40€" },
                { "@type": "PropertyValue", "name": "CPA", "value": "6 - 30€" }
              ]
            }
          }
        ]
      },
      {
        "@type": "ItemList",
        "@id": `${SITE_URL}/instagram-reklame-cena#split-scenarios`,
        "name": "Instagram vs Facebook split scenariji",
        "numberOfItems": 3,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "item": {
              "@type": "Thing",
              "name": "Lokalne usluge (lead generation)",
              "description": "Instagram 55-70% / Facebook 30-45% tokom 14-21 dana testiranja."
            }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "item": {
              "@type": "Thing",
              "name": "E-commerce D2C",
              "description": "Instagram 45-60% / Facebook 40-55% tokom 21-30 dana testiranja."
            }
          },
          {
            "@type": "ListItem",
            "position": 3,
            "item": {
              "@type": "Thing",
              "name": "Premium/B2B ponude",
              "description": "Instagram 35-50% / Facebook 50-65% uz 30 dana test prozor i fokus na kvalitet leadova."
            }
          }
        ]
      },
      {
        "@type": "ItemList",
        "@id": `${SITE_URL}/instagram-reklame-cena#cost-mistakes`,
        "name": "Najčešće greške koje podižu cenu Instagram kampanja",
        "numberOfItems": 5,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Previše estetska, a premalo prodajna kreativa" },
          { "@type": "ListItem", "position": 2, "name": "Slab hook u prve dve sekunde videa" },
          { "@type": "ListItem", "position": 3, "name": "Nema testiranja više uglova ponude" },
          { "@type": "ListItem", "position": 4, "name": "Nedovoljno jak retargeting sloj" },
          { "@type": "ListItem", "position": 5, "name": "Optimizacija po vanity metricima umesto po profitu" }
        ]
      },
      {
        "@type": "HowTo",
        "@id": `${SITE_URL}/instagram-reklame-cena#howto`,
        "name": "Kako postaviti Instagram Ads budžet za prvih 90 dana",
        "description": "Praktičan 3-fazni plan za validaciju ponude, optimizaciju i skaliranje Instagram Ads kampanja bez rasipanja budžeta.",
        "inLanguage": "sr-RS",
        "totalTime": "P90D",
        "supply": [
          { "@type": "HowToSupply", "name": "Medijski budžet" },
          { "@type": "HowToSupply", "name": "Kreative (video, UGC, statika)" },
          { "@type": "HowToSupply", "name": "Landing stranica sa jasnim CTA" }
        ],
        "tool": [
          { "@type": "HowToTool", "name": "Meta Ads Manager" },
          { "@type": "HowToTool", "name": "GA4/UTM tracking" },
          { "@type": "HowToTool", "name": "CRM za obradu leadova" }
        ],
        "step": [
          {
            "@type": "HowToStep",
            "position": 1,
            "name": "Dani 1-30: Validacija",
            "text": "Lansirajte 3-5 kreativnih uglova, odvojite cold i warm publike i pratite CTR, CPC i kvalitet prvih leadova.",
            "url": `${SITE_URL}/instagram-reklame-cena#cilj-kampanje`
          },
          {
            "@type": "HowToStep",
            "position": 2,
            "name": "Dani 31-60: Optimizacija",
            "text": "Gasite ad set-ove ispod cilja, osvežavajte hook pre ad fatigue-a i uvedite UTM + CRM praćenje po kampanjama.",
            "url": `${SITE_URL}/instagram-reklame-cena#cold-retargeting`
          },
          {
            "@type": "HowToStep",
            "position": 3,
            "name": "Dani 61-90: Skaliranje",
            "text": "Povećavajte budžet postepeno 15-25% nedeljno samo na kampanjama koje drže CPA/ROAS cilj i stabilan kvalitet upita.",
            "url": `${SITE_URL}/instagram-reklame-cena#skaliranje`
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
        "@id": `${SITE_URL}/instagram-reklame-cena#faq`,
        "isPartOf": { "@id": `${SITE_URL}/instagram-reklame-cena#webpage` },
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
        "description": "Izrada WordPress sajta cena kroz realne raspone za WordPress i WooCommerce projekte, rokove i mesečne troškove održavanja.",
        "inLanguage": "sr-RS",
        "isPartOf": { "@id": SITE_URL },
        "mainEntity": [
          { "@id": `${SITE_URL}/izrada-wordpress-sajta-cena#article` },
          { "@id": `${SITE_URL}/izrada-wordpress-sajta-cena#service` },
          { "@id": `${SITE_URL}/izrada-wordpress-sajta-cena#project-tiers` },
          { "@id": `${SITE_URL}/izrada-wordpress-sajta-cena#pricing-models` },
          { "@id": `${SITE_URL}/izrada-wordpress-sajta-cena#recurring-costs` },
          { "@id": `${SITE_URL}/izrada-wordpress-sajta-cena#maintenance-tiers` },
          { "@id": `${SITE_URL}/izrada-wordpress-sajta-cena#howto-transparent-offer` },
          { "@id": `${SITE_URL}/izrada-wordpress-sajta-cena#handover-deliverables` },
          { "@id": `${SITE_URL}/izrada-wordpress-sajta-cena#delivery-timelines` },
          { "@id": `${SITE_URL}/izrada-wordpress-sajta-cena#business-type-benchmarks` },
          { "@id": `${SITE_URL}/izrada-wordpress-sajta-cena#cost-drivers` },
          { "@id": `${SITE_URL}/izrada-wordpress-sajta-cena#common-mistakes` },
          { "@id": `${SITE_URL}/izrada-wordpress-sajta-cena#faq` }
        ],
        "about": { "@id": `${SITE_URL}/izrada-wordpress-sajta-cena#service` },
        "mentions": [
          { "@id": `${SITE_URL}/web-design#service` },
          { "@id": `${SITE_URL}/cro#service` },
          { "@id": `${SITE_URL}/google-reklame-cena#service` },
          { "@id": `${SITE_URL}/instagram-reklame-cena#service` },
          { "@id": `${SITE_URL}/cene-digitalnog-marketinga#service` }
        ],
        "breadcrumb": { "@id": `${SITE_URL}/izrada-wordpress-sajta-cena#breadcrumb` },
        "potentialAction": {
          "@type": "ContactAction",
          "name": "Zatražite procenu WordPress projekta",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": `${SITE_URL}/kontakt`
          }
        }
      },
      {
        "@type": "Article",
        "@id": `${SITE_URL}/izrada-wordpress-sajta-cena#article`,
        "headline": "Izrada WordPress sajta cena u Srbiji 2026: paketi, rokovi i stvarni troskovi",
        "description": "Detaljan vodič kroz cenu izrade WordPress i WooCommerce projekata u Srbiji, sa paketima po obimu, rokovima i mesečnim operativnim troškovima.",
        "inLanguage": "sr-RS",
        "author": { "@type": "Person", "name": "Aleksandar Nenadović" },
        "publisher": { "@id": `${SITE_URL}#organization` },
        "datePublished": "2026-03-10",
        "dateModified": "2026-03-15",
        "mainEntityOfPage": { "@id": `${SITE_URL}/izrada-wordpress-sajta-cena#webpage` },
        "about": { "@id": `${SITE_URL}/izrada-wordpress-sajta-cena#service` }
      },
      {
        "@type": "Service",
        "@id": `${SITE_URL}/izrada-wordpress-sajta-cena#service`,
        "name": "Izrada WordPress sajta",
        "description": "Izrada WordPress sajta i WooCommerce shopa sa jasnim rasponima cena, rokovima, planom isporuke i mesečnim operativnim troškovima.",
        "serviceType": "WordPress web development",
        "url": `${SITE_URL}/izrada-wordpress-sajta-cena`,
        "mainEntityOfPage": { "@id": `${SITE_URL}/izrada-wordpress-sajta-cena#webpage` },
        "areaServed": { "@type": "Country", "name": "Srbija" },
        "provider": { "@id": `${SITE_URL}#organization`, "@type": "Organization", "name": "Platinum Zenith", "url": SITE_URL },
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "EUR",
          "lowPrice": "400",
          "highPrice": "9000",
          "offerCount": "4"
        },
        "hasOfferCatalog": [
          { "@id": `${SITE_URL}/izrada-wordpress-sajta-cena#project-tiers` },
          { "@id": `${SITE_URL}/izrada-wordpress-sajta-cena#pricing-models` },
          { "@id": `${SITE_URL}/izrada-wordpress-sajta-cena#recurring-costs` },
          { "@id": `${SITE_URL}/izrada-wordpress-sajta-cena#maintenance-tiers` }
        ],
        "subjectOf": [
          { "@id": `${SITE_URL}/izrada-wordpress-sajta-cena#howto-transparent-offer` },
          { "@id": `${SITE_URL}/izrada-wordpress-sajta-cena#handover-deliverables` },
          { "@id": `${SITE_URL}/izrada-wordpress-sajta-cena#delivery-timelines` },
          { "@id": `${SITE_URL}/izrada-wordpress-sajta-cena#business-type-benchmarks` },
          { "@id": `${SITE_URL}/izrada-wordpress-sajta-cena#cost-drivers` },
          { "@id": `${SITE_URL}/izrada-wordpress-sajta-cena#common-mistakes` }
        ],
        "additionalProperty": [
          { "@type": "PropertyValue", "name": "Tipični rokovi", "value": "1-8 nedelja (u zavisnosti od obima projekta)" },
          { "@type": "PropertyValue", "name": "Mesečni maintenance", "value": "70€ - 1.200€ (u zavisnosti od SLA nivoa)" },
          { "@type": "PropertyValue", "name": "Godišnji TCO raspon", "value": "2.200€ - 13.000€ za aktivne biznis sajtove" }
        ]
      },
      {
        "@type": "OfferCatalog",
        "@id": `${SITE_URL}/izrada-wordpress-sajta-cena#project-tiers`,
        "name": "WordPress paketi po obimu projekta",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Start WordPress sajt",
            "description": "Do 6 stranica, premium tema i osnovni SEO setup.",
            "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "EUR", "minPrice": "400", "maxPrice": "900" }
          },
          {
            "@type": "Offer",
            "name": "Poslovni WordPress",
            "description": "Do 15 stranica, custom sekcije, blog i tracking setup.",
            "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "EUR", "minPrice": "900", "maxPrice": "2200" }
          },
          {
            "@type": "Offer",
            "name": "WordPress + WooCommerce",
            "description": "E-commerce setup sa checkout tokom, email automacijama i SEO osnovom.",
            "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "EUR", "minPrice": "1600", "maxPrice": "4500" }
          },
          {
            "@type": "Offer",
            "name": "Custom WordPress sistem",
            "description": "Napredna rešenja sa API integracijama i custom plugin logikom.",
            "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "EUR", "minPrice": "3500", "maxPrice": "9000" }
          }
        ]
      },
      {
        "@type": "OfferCatalog",
        "@id": `${SITE_URL}/izrada-wordpress-sajta-cena#recurring-costs`,
        "name": "Mesečni i godišnji operativni troškovi WordPress sajta",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Domen + hosting",
            "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "EUR", "minPrice": "8", "maxPrice": "35", "billingDuration": "P1M" }
          },
          {
            "@type": "Offer",
            "name": "Premium plugin licence",
            "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "EUR", "minPrice": "5", "maxPrice": "40", "billingDuration": "P1M" }
          },
          {
            "@type": "Offer",
            "name": "Maintenance (update + backup + monitoring)",
            "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "EUR", "minPrice": "50", "maxPrice": "200", "billingDuration": "P1M" }
          },
          {
            "@type": "Offer",
            "name": "Content i CRO iteracije",
            "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "EUR", "minPrice": "120", "maxPrice": "500", "billingDuration": "P1M" }
          }
        ]
      },
      {
        "@type": "OfferCatalog",
        "@id": `${SITE_URL}/izrada-wordpress-sajta-cena#maintenance-tiers`,
        "name": "Paketi održavanja WordPress sajta nakon launch-a",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Basic Care",
            "description": "Mesečni update-i, backup i monitoring za manje poslovne sajtove.",
            "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "EUR", "minPrice": "70", "maxPrice": "120", "billingDuration": "P1M" }
          },
          {
            "@type": "Offer",
            "name": "Growth Care",
            "description": "Maintenance + tehnički SEO i male CRO iteracije za lead-gen sajtove.",
            "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "EUR", "minPrice": "150", "maxPrice": "350", "billingDuration": "P1M" }
          },
          {
            "@type": "Offer",
            "name": "E-commerce Care",
            "description": "WooCommerce podrška sa testiranjem checkout-a, performansi i incident response slojem.",
            "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "EUR", "minPrice": "250", "maxPrice": "650", "billingDuration": "P1M" }
          },
          {
            "@type": "Offer",
            "name": "SLA + Dev sprint",
            "description": "Prioritetni razvojni slot i brzi oporavak za sajtove sa kritičnim prihodnim tokom.",
            "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "EUR", "minPrice": "500", "maxPrice": "1200", "billingDuration": "P1M" }
          }
        ]
      },
      {
        "@type": "OfferCatalog",
        "@id": `${SITE_URL}/izrada-wordpress-sajta-cena#pricing-models`,
        "name": "Modeli naplate WordPress projekta",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Fiksna projektna cena",
            "description": "Jasno definisan scope i ukupna cena pre početka rada.",
            "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "EUR", "minPrice": "400", "maxPrice": "4500" }
          },
          {
            "@type": "Offer",
            "name": "Milestone naplata (40/40/20)",
            "description": "Plaćanje kroz faze isporuke za bolju kontrolu rizika i obima projekta.",
            "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "EUR", "minPrice": "900", "maxPrice": "9000" }
          },
          {
            "@type": "Offer",
            "name": "Time & material",
            "description": "Fleksibilan model za kompleksne projekte sa promenljivim scope-om.",
            "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "EUR", "minPrice": "25", "maxPrice": "60", "unitText": "EUR/sat" }
          },
          {
            "@type": "Offer",
            "name": "Launch + mesečni retainer",
            "description": "Kombinacija inicijalne izrade i kontinuiranog maintenance/CRO rada.",
            "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "EUR", "minPrice": "350", "maxPrice": "1200", "billingDuration": "P1M" }
          }
        ]
      },
      {
        "@type": "HowTo",
        "@id": `${SITE_URL}/izrada-wordpress-sajta-cena#howto-transparent-offer`,
        "name": "Kako izgleda transparentna WordPress ponuda bez skrivenih troškova",
        "description": "Proces za procenu scope-a, izračunavanje TCO i planiranje post-launch iteracija pre potpisivanja projekta.",
        "inLanguage": "sr-RS",
        "totalTime": "P14D",
        "about": { "@id": `${SITE_URL}/izrada-wordpress-sajta-cena#service` },
        "step": [
          {
            "@type": "HowToStep",
            "name": "Definiši scope i funkcionalnosti",
            "text": "Mapiraj cilj sajta, broj stranica, integracije i sadržaj kako bi procena bila realna od prvog drafta ponude.",
            "url": `${SITE_URL}/izrada-wordpress-sajta-cena#scope-funkcionalnosti`
          },
          {
            "@type": "HowToStep",
            "name": "Razdvoji jednokratni i mesečni trošak",
            "text": "Odvoj launch cenu od operativnih troškova (hosting, licence, maintenance) da bi ROI projekcije bile realne.",
            "url": `${SITE_URL}/izrada-wordpress-sajta-cena#tco-plan`
          },
          {
            "@type": "HowToStep",
            "name": "Potvrdi 90-dnevni post-launch plan",
            "text": "Zaključi prioritete za SEO, CRO i akviziciju kako sajt ne bi ostao pasivan nakon puštanja u rad.",
            "url": `${SITE_URL}/izrada-wordpress-sajta-cena#post-launch-plan`
          }
        ]
      },
      {
        "@type": "ItemList",
        "@id": `${SITE_URL}/izrada-wordpress-sajta-cena#handover-deliverables`,
        "name": "Šta treba da dobijete na handover-u WordPress projekta",
        "itemListOrder": "https://schema.org/ItemListOrderAscending",
        "numberOfItems": 6,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Admin pristupi i vlasništvo nad nalogom" },
          { "@type": "ListItem", "position": 2, "name": "Backup i restore procedura" },
          { "@type": "ListItem", "position": 3, "name": "Inventar plugin licenci i rokova" },
          { "@type": "ListItem", "position": 4, "name": "GA4/GTM tracking mapa događaja" },
          { "@type": "ListItem", "position": 5, "name": "Editor uputstvo za sadržaj i medija fajlove" },
          { "@type": "ListItem", "position": 6, "name": "90-dnevni backlog prioriteta" }
        ]
      },
      {
        "@type": "ItemList",
        "@id": `${SITE_URL}/izrada-wordpress-sajta-cena#cost-drivers`,
        "name": "Glavni faktori koji utiču na cenu WordPress sajta",
        "itemListOrder": "https://schema.org/ItemListOrderAscending",
        "numberOfItems": 6,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Template ili custom dizajn" },
          { "@type": "ListItem", "position": 2, "name": "Broj i složenost stranica" },
          { "@type": "ListItem", "position": 3, "name": "Plugin ekosistem" },
          { "@type": "ListItem", "position": 4, "name": "SEO i struktura sadržaja" },
          { "@type": "ListItem", "position": 5, "name": "Brzina i hosting" },
          { "@type": "ListItem", "position": 6, "name": "Sigurnost i backup politika" }
        ]
      },
      {
        "@type": "ItemList",
        "@id": `${SITE_URL}/izrada-wordpress-sajta-cena#delivery-timelines`,
        "name": "Tipični rokovi izrade WordPress projekta",
        "itemListOrder": "https://schema.org/ItemListOrderAscending",
        "numberOfItems": 4,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "item": { "@type": "Thing", "name": "Start WordPress sajt", "description": "1-2 nedelje" } },
          { "@type": "ListItem", "position": 2, "item": { "@type": "Thing", "name": "Poslovni WordPress", "description": "2-5 nedelja" } },
          { "@type": "ListItem", "position": 3, "item": { "@type": "Thing", "name": "WordPress + WooCommerce", "description": "4-8 nedelja" } },
          { "@type": "ListItem", "position": 4, "item": { "@type": "Thing", "name": "Custom WordPress sistem", "description": "6-12 nedelja" } }
        ]
      },
      {
        "@type": "ItemList",
        "@id": `${SITE_URL}/izrada-wordpress-sajta-cena#business-type-benchmarks`,
        "name": "Raspon cene WordPress projekta po tipu biznisa",
        "itemListOrder": "https://schema.org/ItemListOrderAscending",
        "numberOfItems": 4,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "item": {
              "@type": "Thing",
              "name": "Lokalne usluge",
              "description": "Tipičan launch 700-1.800 EUR + operativni raspon 180-600 EUR mesečno za lokalni SEO i lead flow."
            }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "item": {
              "@type": "Thing",
              "name": "B2B lead generation",
              "description": "Tipičan launch 1.200-3.200 EUR + operativni raspon 250-900 EUR mesečno za CRM i sadržajni funnel."
            }
          },
          {
            "@type": "ListItem",
            "position": 3,
            "item": {
              "@type": "Thing",
              "name": "WooCommerce retail",
              "description": "Tipičan launch 1.800-5.000 EUR + operativni raspon 350-1.400 EUR mesečno za katalog i konverzije."
            }
          },
          {
            "@type": "ListItem",
            "position": 4,
            "item": {
              "@type": "Thing",
              "name": "Multi-location i franšizni sistemi",
              "description": "Tipičan launch 2.500-7.000 EUR + operativni raspon 500-1.800 EUR mesečno za više lokacija i workflow automatizaciju."
            }
          }
        ]
      },
      {
        "@type": "ItemList",
        "@id": `${SITE_URL}/izrada-wordpress-sajta-cena#common-mistakes`,
        "name": "Najčešće greške pri izboru WordPress izvođača",
        "itemListOrder": "https://schema.org/ItemListOrderAscending",
        "numberOfItems": 5,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Kupovina najjeftinije ponude" },
          { "@type": "ListItem", "position": 2, "name": "Previše plugin-ova bez plana" },
          { "@type": "ListItem", "position": 3, "name": "Nema staging okruženja" },
          { "@type": "ListItem", "position": 4, "name": "Ignorisanje mobilnog UX-a" },
          { "@type": "ListItem", "position": 5, "name": "Nedefinisan maintenance" }
        ]
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
        "@id": `${SITE_URL}/izrada-wordpress-sajta-cena#faq`,
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
        "breadcrumb": { "@id": `${SITE_URL}/seo-optimizacija-cena#breadcrumb` },
        "primaryImageOfPage": { "@type": "ImageObject", "url": `${SITE_URL}/pz-og.jpg` },
        "mainEntity": [
          { "@id": `${SITE_URL}/seo-optimizacija-cena#article` },
          { "@id": `${SITE_URL}/seo-optimizacija-cena#service` },
          { "@id": `${SITE_URL}/seo-optimizacija-cena#package-tiers` },
          { "@id": `${SITE_URL}/seo-optimizacija-cena#cost-drivers` },
          { "@id": `${SITE_URL}/seo-optimizacija-cena#results-timeline` },
          { "@id": `${SITE_URL}/seo-optimizacija-cena#implementation-howto` },
          { "@id": `${SITE_URL}/seo-optimizacija-cena#faq` }
        ],
        "mentions": [
          { "@id": `${SITE_URL}/google-reklame-cena#service` },
          { "@id": `${SITE_URL}/cene-digitalnog-marketinga#service` },
          { "@id": `${SITE_URL}/web-design#service` }
        ],
        "potentialAction": {
          "@type": "ContactAction",
          "target": `${SITE_URL}/kontakt`,
          "name": "Zatražite besplatan SEO audit"
        }
      },
      {
        "@type": "Article",
        "@id": `${SITE_URL}/seo-optimizacija-cena#article`,
        "headline": "Koliko košta SEO optimizacija u Srbiji 2026: paketi, rokovi i očekivani rezultati",
        "description": "Praktičan vodič kroz SEO cene u Srbiji: paketi, vremenski okvir rezultata, najčešći mitovi i konkretan plan rada.",
        "inLanguage": "sr-RS",
        "author": { "@type": "Person", "name": "Aleksandar Nenadović" },
        "publisher": { "@id": `${SITE_URL}#organization` },
        "datePublished": "2026-03-04",
        "dateModified": "2026-03-14",
        "mainEntityOfPage": { "@id": `${SITE_URL}/seo-optimizacija-cena#webpage` },
        "about": { "@id": `${SITE_URL}/seo-optimizacija-cena#service` }
      },
      {
        "@type": "Service",
        "@id": `${SITE_URL}/seo-optimizacija-cena#service`,
        "name": "SEO optimizacija",
        "description": "SEO optimizacija sa tehničkim auditom, content planom i kontinuiranom optimizacijom za rast organskog saobraćaja i upita.",
        "serviceType": "Search Engine Optimization",
        "url": `${SITE_URL}/seo-optimizacija-cena`,
        "mainEntityOfPage": { "@id": `${SITE_URL}/seo-optimizacija-cena#webpage` },
        "areaServed": { "@type": "Country", "name": "Srbija" },
        "provider": { "@id": `${SITE_URL}#organization`, "@type": "Organization", "name": "Platinum Zenith", "url": SITE_URL },
        "offers": { "@type": "AggregateOffer", "priceCurrency": "EUR", "lowPrice": "300", "highPrice": "3000", "offerCount": "3" },
        "hasOfferCatalog": [
          { "@id": `${SITE_URL}/seo-optimizacija-cena#package-tiers` }
        ],
        "subjectOf": [
          { "@id": `${SITE_URL}/seo-optimizacija-cena#cost-drivers` },
          { "@id": `${SITE_URL}/seo-optimizacija-cena#results-timeline` },
          { "@id": `${SITE_URL}/seo-optimizacija-cena#implementation-howto` }
        ],
        "additionalProperty": [
          { "@type": "PropertyValue", "name": "Preporučeni period evaluacije", "value": "90 dana" },
          { "@type": "PropertyValue", "name": "Tipični prvi pomaci", "value": "1-2 meseca za lokalne upite" },
          { "@type": "PropertyValue", "name": "Ozbiljniji rezultat za konkurentne upite", "value": "4-6 meseci" }
        ]
      },
      {
        "@type": "OfferCatalog",
        "@id": `${SITE_URL}/seo-optimizacija-cena#package-tiers`,
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
      },
      {
        "@type": "ItemList",
        "@id": `${SITE_URL}/seo-optimizacija-cena#cost-drivers`,
        "name": "Ključni faktori koji utiču na cenu SEO optimizacije",
        "numberOfItems": 6,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Tehničko stanje sajta i brzina učitavanja" },
          { "@type": "ListItem", "position": 2, "name": "Konkurentnost ključnih reči i industrije" },
          { "@type": "ListItem", "position": 3, "name": "Obim sadržaja i content produkcije mesečno" },
          { "@type": "ListItem", "position": 4, "name": "Kvalitet internog linkovanja i strukture stranica" },
          { "@type": "ListItem", "position": 5, "name": "Kvalitet backlink profila i domen autoritet" },
          { "@type": "ListItem", "position": 6, "name": "Brzina obrade leadova i poslovni kapacitet" }
        ]
      },
      {
        "@type": "ItemList",
        "@id": `${SITE_URL}/seo-optimizacija-cena#results-timeline`,
        "name": "SEO vremenski okvir rezultata",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "item": { "@type": "Thing", "name": "Mesec 1-2: audit i tehnički temelji", "description": "Tehnički audit sajta, istraživanje ključnih reči i optimizacija postojećih stranica." }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "item": { "@type": "Thing", "name": "Mesec 3-4: sadržaj i linkovi", "description": "Objava novih sadržaja i početak sistemskog internog i eksternog linkovanja." }
          },
          {
            "@type": "ListItem",
            "position": 3,
            "item": { "@type": "Thing", "name": "Mesec 5-6: rast i konverzija", "description": "Rast organskog saobraćaja i optimizacija ka većem broju kvalifikovanih upita." }
          }
        ]
      },
      {
        "@type": "HowTo",
        "@id": `${SITE_URL}/seo-optimizacija-cena#implementation-howto`,
        "name": "Kako izgleda SEO plan rada za prvih 90 dana",
        "description": "Operativni SEO plan u četiri koraka: audit, keyword intent, content plan i KPI izveštavanje.",
        "inLanguage": "sr-RS",
        "totalTime": "P90D",
        "about": { "@id": `${SITE_URL}/seo-optimizacija-cena#service` },
        "step": [
          {
            "@type": "HowToStep",
            "position": 1,
            "name": "Audit i tehnički temelji",
            "text": "Analiza tehničkih grešaka, brzine učitavanja i trenutnih SEO blokera koji koče rast.",
            "url": `${SITE_URL}/seo-optimizacija-cena#audit-temelji`
          },
          {
            "@type": "HowToStep",
            "position": 2,
            "name": "Keyword intent mapa",
            "text": "Biranje ključnih reči sa realnom namerom kupovine umesto fokusiranja na prazne volumene pretrage.",
            "url": `${SITE_URL}/seo-optimizacija-cena#keyword-intent`
          },
          {
            "@type": "HowToStep",
            "position": 3,
            "name": "90-dnevni sadržajni plan",
            "text": "Planiranje novih stranica i blog sadržaja koji internim linkovanjem guraju money stranice ka vrhu.",
            "url": `${SITE_URL}/seo-optimizacija-cena#seo-plan-90-dana`
          },
          {
            "@type": "HowToStep",
            "position": 4,
            "name": "SEO KPI izveštaj i iteracije",
            "text": "Mesečni pregled pozicija, organskog saobraćaja i konverzija uz jasne naredne prioritete.",
            "url": `${SITE_URL}/seo-optimizacija-cena#seo-kpi-izvestaj`
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/seo-optimizacija-cena#breadcrumb`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Početna", "item": SITE_URL },
          { "@type": "ListItem", "position": 2, "name": "SEO optimizacija cena", "item": `${SITE_URL}/seo-optimizacija-cena` }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/seo-optimizacija-cena#faq`,
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
  
  '/marketing-za-racunovodje': {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/marketing-za-racunovodje#webpage`,
        "url": `${SITE_URL}/marketing-za-racunovodje`,
        "name": "Marketing za Računovodstvene Agencije u Srbiji | Platinum Zenith",
        "description": "Specijalizovani marketing za računovođe i knjigovođe u Srbiji.",
        "isPartOf": { "@id": `${SITE_URL}/#website` },
        "about": { "@id": `${SITE_URL}/marketing-za-racunovodje#service` },
        "breadcrumb": { "@id": `${SITE_URL}/marketing-za-racunovodje#breadcrumb` }
      },
      {
        "@type": "Service",
        "@id": `${SITE_URL}/marketing-za-racunovodje#service`,
        "name": "Marketing za računovodstvene agencije",
        "serviceType": "B2B Marketing",
        "url": `${SITE_URL}/marketing-za-racunovodje`,
        "mainEntityOfPage": { "@id": `${SITE_URL}/marketing-za-racunovodje#webpage` },
        "provider": { "@id": `${SITE_URL}/#organization` }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/marketing-za-racunovodje#breadcrumb`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Početna", "item": SITE_URL },
          { "@type": "ListItem", "position": 2, "name": "Marketing za računovođe", "item": `${SITE_URL}/marketing-za-racunovodje` }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/marketing-za-racunovodje#faq`,
        "mainEntity": []
      }
    ]
  },
  '/marketing-za-autoservise': {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/marketing-za-autoservise#webpage`,
        "url": `${SITE_URL}/marketing-za-autoservise`,
        "name": "Marketing za Autoservise u Srbiji | Platinum Zenith",
        "description": "Marketing za autoservise u Srbiji: lokalni SEO, Google Ads, sajt i kampanje koje donose pozive i pune raspored.",
        "isPartOf": { "@id": `${SITE_URL}/#website` },
        "about": { "@id": `${SITE_URL}/marketing-za-autoservise#service` },
        "breadcrumb": { "@id": `${SITE_URL}/marketing-za-autoservise#breadcrumb` }
      },
      {
        "@type": "Service",
        "@id": `${SITE_URL}/marketing-za-autoservise#service`,
        "name": "Marketing za autoservise",
        "serviceType": "Automotive Marketing",
        "url": `${SITE_URL}/marketing-za-autoservise`,
        "mainEntityOfPage": { "@id": `${SITE_URL}/marketing-za-autoservise#webpage` },
        "provider": { "@id": `${SITE_URL}/#organization` }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/marketing-za-autoservise#breadcrumb`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Početna", "item": SITE_URL },
          { "@type": "ListItem", "position": 2, "name": "Marketing za autoservise", "item": `${SITE_URL}/marketing-za-autoservise` }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/marketing-za-autoservise#faq`,
        "mainEntity": []
      }
    ]
  },
  '/marketing-za-privatne-klinike': {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/marketing-za-privatne-klinike#webpage`,
        "url": `${SITE_URL}/marketing-za-privatne-klinike`,
        "name": "Marketing za Privatne Klinike u Srbiji | Platinum Zenith",
        "description": "Marketing za privatne klinike u Srbiji: Google Ads po specijalizaciji, lokalni SEO, sajt za zakazivanje i remarketing koji dovodi pacijente sa pravom namerom.",
        "isPartOf": { "@id": `${SITE_URL}/#website` },
        "about": { "@id": `${SITE_URL}/marketing-za-privatne-klinike#service` },
        "breadcrumb": { "@id": `${SITE_URL}/marketing-za-privatne-klinike#breadcrumb` },
        "mainEntity": [
          { "@id": `${SITE_URL}/marketing-za-privatne-klinike#service` },
          { "@id": `${SITE_URL}/marketing-za-privatne-klinike#faq` }
        ],
        "potentialAction": {
          "@type": "ContactAction",
          "name": "Zakazite analizu klinike",
          "target": `${SITE_URL}/kontakt`
        }
      },
      {
        "@type": "Service",
        "@id": `${SITE_URL}/marketing-za-privatne-klinike#service`,
        "name": "Marketing za privatne klinike",
        "serviceType": "Healthcare Marketing",
        "url": `${SITE_URL}/marketing-za-privatne-klinike`,
        "mainEntityOfPage": { "@id": `${SITE_URL}/marketing-za-privatne-klinike#webpage` },
        "provider": { "@id": `${SITE_URL}/#organization` },
        "areaServed": { "@type": "Country", "name": "Srbija" },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Marketing usluge za privatne klinike",
          "itemListElement": [
            { "@type": "Offer", "name": "Google Ads kampanje po specijalizaciji" },
            { "@type": "Offer", "name": "Lokalni SEO i Google Business" },
            { "@type": "Offer", "name": "Sajt za zakazivanje i konverziju" },
            { "@type": "Offer", "name": "Remarketing i edukativni sadrzaj" }
          ]
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/marketing-za-privatne-klinike#breadcrumb`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Pocetna", "item": SITE_URL },
          { "@type": "ListItem", "position": 2, "name": "Marketing za privatne klinike", "item": `${SITE_URL}/marketing-za-privatne-klinike` }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/marketing-za-privatne-klinike#faq`,
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Koliki budzet treba privatnoj klinici za Google Ads?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Za pocetak, 400 do 800 evra mesecno za ad spend obicno pokriva 2-3 specijalizacije u jednom gradu. Klinike sa vise lokacija ili premium uslugama idu iznad toga."
            }
          },
          {
            "@type": "Question",
            "name": "Koliko brzo klinika moze da vidi nove pacijente iz kampanja?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Google Ads za zdravstvene usluge obicno donosi prve kvalitetne upite vec u prvoj nedelji. Realnija slika o ceni pacijenta i kvalitetu leadova formira se kroz 4 do 6 nedelja rada."
            }
          },
          {
            "@type": "Question",
            "name": "Da li smemo da koristimo pre-posle fotografije u reklamama?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Google i Meta imaju stroga pravila za zdravstveni marketing. Pre-posle slike su ogranicene, ali postoje nacini da se grade poverenje bez krsenja politika: edukativni sadrzaj, video objasnjenja i recenzije."
            }
          },
          {
            "@type": "Question",
            "name": "Kako merite uspeh kampanje za kliniku?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Pratimo cenu po kvalifikovanom upitu, stopu konverzije sa sajta, broj zakazanih pregleda i prihod po pacijentu."
            }
          },
          {
            "@type": "Question",
            "name": "Da li klinici treba sajt ako vec ima profil na doktorima.rs?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Portal je koristan za recenzije, ali ne daje kontrolu nad porukom, cenama, lekarima i zakazivanjem. Sopstveni sajt znaci pun utisak o klinici bez distrakcija od konkurentskih oglasa."
            }
          }
        ]
      }
    ]
  },
  '/alati/roi-kalkulator': { "@context": "https://schema.org", "@type": "SoftwareApplication", "name": "ROI Kalkulator za Marketing", "applicationCategory": "BusinessApplication", "operatingSystem": "Web", "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR" }, "description": "Besplatan interaktivni kalkulator za izračunavanje povrata investicije u marketing.", "url": `${SITE_URL}/alati/roi-kalkulator`, "provider": { "@type": "Organization", "name": "Platinum Zenith", "url": SITE_URL } }
}

export function setJsonLd(id, data) {
  let el = document.getElementById(id)
  if (!el) { el = document.createElement('script'); el.id = id; el.type = 'application/ld+json'; document.head.appendChild(el) }
  el.textContent = JSON.stringify(data)
}

export { SITE_URL }
