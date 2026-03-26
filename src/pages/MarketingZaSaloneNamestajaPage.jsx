import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta'

const challenges = [
  { icon: '🛋️', title: 'Visoka cena proizvoda', desc: 'Nameštaj se ne kupuje impulsivno. Kupci nedeljama razgledaju ponudu pre nego što donesu odluku. Ako niste prisutni u svakoj fazi razmišljanja, gubite prodaju.' },
  { icon: '📸', title: 'Vizuelna prodaja', desc: 'Ljudi kupuju emociju i estetiku, ne samo komad drveta. Vaš marketing mora perfektno da dočara kako će se proizvod uklopiti u njihov dom.' },
  { icon: '📍', title: 'Online do offline konverzija', desc: 'Većina kupaca želi da vidi i proba nameštaj pre kupovine. Vaš online nastup mora da ih motiviše da posete vaš fizički salon.' },
  { icon: '🚚', title: 'Logistika i poverenje', desc: 'Rok isporuke, unos u stan, garancija i montaža su faktori koji prelamaju kupovinu. Ove informacije moraju biti jasno komunicirane kroz marketing.' },
  { icon: '🔍', title: 'Ogromna konkurencija', desc: 'Tržište je preplavljeno velikim lancima i malim proizvođačima. Morate se izdvojiti kroz dizajn, kvalitet, cenu ili specifičnu nišu (npr. nameštaj po meri).' },
  { icon: '🛒', title: 'Napuštene korpe u E-commerce-u', desc: 'Ako prodajete online, stopa napuštenih korpi za skupe proizvode je ogromna. Potreban vam je snažan retargeting sistem.' },
]

const services = [
  {
    title: 'Meta (Facebook i Instagram) kampanje',
    desc: 'Inspiracija je ključ u industriji nameštaja. Mi kreiramo kampanje koje hvataju pažnju.',
    items: ['Katalog oglasi sa dinamičkim retargetingom (DPA)', 'Carousel oglasi za prikazivanje kolekcija i ambijenata', 'Video oglasi koji prikazuju funkcionalnost i dizajn', 'Oglasi sa fokusom na dovođenje kupaca u fizički salon (Store Traffic)'],
  },
  {
    title: 'Google Ads i Lokalni SEO',
    desc: 'Hvatamo ljude u momentu kada aktivno traže "ugaona garnitura" ili "salon nameštaja blizu mene".',
    items: ['Google Search kampanje za proizvode i kategorije', 'Google Performance Max kampanje (kombinacija Search, Display, YouTube)', 'Google Business Profile optimizacija za lokalnu vidljivost', 'Prikupljanje i menadžment recenzija kupaca'],
  },
  {
    title: 'E-commerce SEO i optimizacija sajta',
    desc: 'Vaš online katalog mora biti brz, pregledan i optimizovan za Google pretragu.',
    items: ['SEO optimizacija kategorija i proizvoda (on-page SEO)', 'Poboljšanje brzine učitavanja (Core Web Vitals)', 'UX/UI revizija za lakšu navigaciju i filtriranje', 'Implementacija napredne pretrage na sajtu'],
  },
  {
    title: 'Email marketing i automatizacija',
    desc: 'Nameštaj ima dug proces razmatranja. Email je najjeftiniji način da ostanete "top of mind".',
    items: ['Automatizovane sekvence za napuštenu korpu (Abandoned Cart)', 'Welcome serije za nove pretplatnike sa inspiracijom za uređenje', 'Newsletteri sa akcijama, novitetima i savetima za enterijer', 'Segmentacija kupaca po interesovanjima (npr. spavaće sobe, kuhinje)'],
  },
]

const metrics = [
  { num: '3-7x', label: 'Povrat investicije (ROAS)', desc: 'Prosečan ROAS koji ciljamo za klijente u industriji nameštaja na Meta i Google platformama.' },
  { num: '40%+', label: 'Rast poseta salonu', desc: 'Povećanje "foot traffic-a" kroz lokalne kampanje i online zakazivanje konsultacija.' },
  { num: '100%+', label: 'Veća prodaja online', desc: 'Rast e-commerce prihoda kroz optimizaciju konverzije (CRO) i retargeting.' },
]

const faqs = [
  { q: 'Mi radimo samo nameštaj po meri. Da li je pristup isti?', a: 'Pristup se prilagođava. Za nameštaj po meri fokus je na Lead Generation-u (prikupljanje upita za ponudu ili zakazivanje merenja) kroz Google Ads i Facebook Lead Ads, a manje na direktnoj e-commerce prodaji. SEO igra ogromnu ulogu u građenju autoriteta.' },
  { q: 'Koliki budžet nam je potreban za Google i Meta oglase?', a: 'Zavisi od vaših ciljeva i veličine asortimana. Za manje proizvođače i lokalne salone preporučujemo početni budžet od 500€ do 1.000€ mesečno. Za veće e-commerce prodavnice nameštaja budžeti kreću od 2.000€ naviše za optimalne rezultate.' },
  { q: 'Da li nam treba web shop ili je dovoljan katalog?', a: 'Web shop (e-commerce) vam daje mogućnost direktne prodaje i lakše merenje ROI-a. Međutim, dobar online katalog sa jasnim cenama, specifikacijama i formom za upit može odlično funkcionisati ako se oslanjate prvenstveno na prodaju u fizičkom salonu.' },
  { q: 'Ljudi kupuju jeftiniji nameštaj online, ali naš je premium klasa. Kako to prodati?', a: 'Premium nameštaj zahteva "nurturing" strategiju. Ne očekujemo kupovinu na prvi klik. Koristimo content marketing, detaljne video prezentacije, retargeting edukativnim sadržajem i nudimo zakazivanje VIP konsultacija u salonu ili online.' },
  { q: 'Da li radite TikTok za salone nameštaja?', a: 'Da. TikTok i Instagram Reels su savršeni za industriju nameštaja. Snimci "pre/posle" renoviranja, detalji izrade ili brzi saveti za uređenje enterijera generišu odličan organski doseg i visoku angažovanost.' },
]

export default function MarketingZaSaloneNamestajaPage() {
  usePageMeta()

  return (
    <>
      <section className="pt-[140px] pb-20 md:pt-[200px] md:pb-28 px-4 md:px-8 bg-panel overflow-hidden border-b border-edge-2">
        <div className="max-w-[1000px] mx-auto text-center relative z-10">
          <p className="text-[13px] md:text-[14px] text-ink-3 uppercase tracking-[2px] font-medium mb-6">Marketing za salone nameštaja</p>
          <h1 className="text-[32px] md:text-[56px] font-medium leading-[1.1] tracking-[-1.5px] text-ink mb-6">
            Više posetilaca u salonu. Veća prodaja u web shop-u.
          </h1>
          <p className="text-[16px] md:text-[18px] text-ink-2 max-w-[600px] mx-auto leading-relaxed mb-10">
            Od ugaonih garnitura do nameštaja po meri. Kombinujemo Meta i Google Ads kampanje, SEO i email marketing da bismo vaše proizvode stavili ispred kupaca spremnih za opremanje doma.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/kontakt" className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-inv-bg text-inv-fg text-[15px] font-medium hover:bg-inv-bg-hover transition-colors w-full sm:w-auto">
              Zatražite besplatnu analizu
            </Link>
            <Link to="/digitalni-marketing" className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-transparent border border-edge text-ink text-[15px] font-medium hover:border-ink/30 transition-colors w-full sm:w-auto">
              Pogledajte naše usluge
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 md:px-8 bg-page">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[28px] md:text-[40px] font-medium tracking-[-1px] text-ink mb-4">Industrija nameštaja je vizuelna i zahtevna</h2>
            <p className="text-[16px] text-ink-2 max-w-[600px] mx-auto">Zašto vam treba više od "boostovanog" posta sa slikom kauča.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map((c, i) => (
              <div key={i} className="bg-panel rounded-2xl p-8 border border-edge-2">
                <span className="text-[32px] mb-4 block">{c.icon}</span>
                <h3 className="text-[18px] font-medium text-ink mb-3">{c.title}</h3>
                <p className="text-[15px] text-ink-3 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 md:px-8 bg-ink text-inv-fg">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-edge/20">
            {metrics.map((m, i) => (
              <div key={i} className="pt-8 md:pt-0 first:pt-0">
                <div className="text-[48px] md:text-[56px] font-medium text-blue-400 mb-2">{m.num}</div>
                <div className="text-[18px] font-medium text-inv-fg mb-3">{m.label}</div>
                <div className="text-[15px] text-inv-fg/60 leading-relaxed max-w-[280px] mx-auto">{m.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 md:px-8 bg-page">
        <div className="max-w-[1000px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[28px] md:text-[40px] font-medium tracking-[-1px] text-ink mb-4">Sistem prodaje za salone nameštaja</h2>
            <p className="text-[16px] text-ink-2 max-w-[600px] mx-auto">Od prvog pregleda na Instagramu do isporuke na kućnu adresu.</p>
          </div>
          <div className="space-y-6">
            {services.map((s, i) => (
              <div key={i} className="bg-panel rounded-2xl p-8 md:p-10 border border-edge-2">
                <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
                  <div className="md:w-1/3">
                    <span className="text-[13px] text-ink-4 uppercase tracking-[2px] font-medium block mb-2">Strategija 0{i + 1}</span>
                    <h3 className="text-[22px] font-medium text-ink mb-3">{s.title}</h3>
                    <p className="text-[15px] text-ink-3 leading-relaxed">{s.desc}</p>
                  </div>
                  <div className="md:w-2/3">
                    <ul className="grid sm:grid-cols-2 gap-4">
                      {s.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <span className="text-blue-500 mt-1">✓</span>
                          <span className="text-[15px] text-ink-2 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 md:px-8 bg-panel border-t border-edge-2">
        <div className="max-w-[800px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[28px] md:text-[40px] font-medium tracking-[-1px] text-ink mb-4">Često postavljana pitanja</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-page rounded-2xl p-6 md:p-8 border border-edge-2">
                <h3 className="text-[18px] font-medium text-ink mb-3">{faq.q}</h3>
                <p className="text-[15px] text-ink-3 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 md:px-8 bg-blue-600 text-white text-center">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-[32px] md:text-[48px] font-medium tracking-[-1px] mb-6 text-white">Spremni da napunite vaš salon kupcima?</h2>
          <p className="text-[16px] md:text-[18px] text-white/80 mb-10 max-w-[600px] mx-auto">
            Zakazivanje besplatne analize vas ne obavezuje na saradnju. Pogledaćemo vaš trenutni sajt, kampanje i dati vam konkretan plan za povećanje prodaje nameštaja.
          </p>
          <Link to="/kontakt" className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-white text-blue-600 text-[15px] font-medium hover:bg-gray-50 transition-colors">
            Zakažite besplatne konsultacije
          </Link>
        </div>
      </section>
    </>
  )
}
