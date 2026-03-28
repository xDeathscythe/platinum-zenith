import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta'

const challenges = [
  {
    icon: '🏭',
    title: 'Kompleksna B2B ponuda',
    desc: 'Industrijski proizvodi i usluge retko se prodaju jednim oglasom. Potrebni su jasan positioning, dobar sajt i sadržaj koji tehničke prednosti prevodi u poslovnu vrednost.'
  },
  {
    icon: '🌍',
    title: 'Izvoz i strana tržišta',
    desc: 'Mnoge proizvodne firme iz Srbije žele stabilniji priliv upita iz EU. To traži drugačiji keyword plan, drugačiji copy i drugačiji pristup poverenju.'
  },
  {
    icon: '⏳',
    title: 'Dug prodajni ciklus',
    desc: 'Od prvog upita do ugovora često prolaze nedelje ili meseci. Marketing mora da gradi autoritet i da prati kupca kroz više tačaka kontakta.'
  },
  {
    icon: '📐',
    title: 'Tehnički sadržaj koji mora da bude jasan',
    desc: 'Specifikacije, kapaciteti i procesi jesu važni, ali kupac pre svega želi da razume rok, pouzdanost i to da li možete da isporučite bez problema.'
  },
  {
    icon: '🤝',
    title: 'Više ljudi učestvuje u odluci',
    desc: 'Ne odlučuje samo jedna osoba. U igri su vlasnik, nabavka, operativa i tehnički tim. Sajt mora da odgovori na pitanja svih njih.'
  },
  {
    icon: '📉',
    title: 'Zavisnost od preporuka i sajmova',
    desc: 'Preporuke su sjajne, ali nestabilne. Digitalni sistem vam donosi kontinuirane upite i kada nema sajma, preporuke ili stare veze.'
  },
]

const services = [
  {
    title: 'B2B sajt koji uliva poverenje',
    desc: 'Prvi korak je prezentacija koja izgleda ozbiljno i jasno komunicira šta proizvodite, za koga i pod kojim uslovima.',
    items: [
      'Struktura sajta po proizvodima, kapacitetima i industrijama',
      'Isticanje sertifikata, kontrole kvaliteta i procesa rada',
      'Case study sekcije, reference i fotografije pogona',
      'Jasan CTA za upit, sastanak ili tehničku konsultaciju'
    ],
  },
  {
    title: 'Google Ads i SEO za industrijske upite',
    desc: 'Hvatamo firme koje već traže dobavljača, partnera ili proizvodni kapacitet.',
    items: [
      'Search kampanje za komercijalne i izvozne upite',
      'SEO stranice za tačne proizvode, materijale i usluge',
      'Odvojene landing strane za industrije koje gađate',
      'Merenje leadova, ne samo klikova i saobraćaja'
    ],
  },
  {
    title: 'LinkedIn za ozbiljnije B2B razgovore',
    desc: 'Kada želite kvalitetnije sastanke sa pravim ljudima iz nabavke, operacije ili menadžmenta.',
    items: [
      'Targetiranje po industriji, funkciji i veličini firme',
      'Lead Gen kampanje za B2B sastanke',
      'Remarketing prema posetiocima sajta i toplim kontaktima',
      'Sadržaj koji gradi autoritet bez generičkog korporativnog spama'
    ],
  },
  {
    title: 'Lead nurturing i praćenje upita',
    desc: 'Kada kupac ne odlučuje odmah, sistem mora da ostane prisutan i posle prvog kontakta.',
    items: [
      'Follow-up sekvence za preuzete kataloge i upite',
      'Segmentacija po industriji, tržištu i nivou interesovanja',
      'Praćenje izvora leadova i kvaliteta razgovora',
      'Bolji pregled šta zatvara posao, a šta samo pravi buku'
    ],
  },
]

const metrics = [
  {
    num: '2-5x',
    label: 'više kvalifikovanih B2B upita',
    desc: 'Kada sajt, oglas i prodajna poruka rade kao jedan sistem umesto kao odvojeni komadi.'
  },
  {
    num: '6-12 meseci',
    label: 'za ozbiljan organski rast',
    desc: 'Industrijski SEO je sporiji, ali donosi stabilniji pipeline i nižu cenu akvizicije na duži rok.'
  },
  {
    num: '1 ugovor',
    label: 'može da isplati mesece marketinga',
    desc: 'Kod proizvodnih firmi jedan pravi klijent često vredi više nego desetine slabih leadova.'
  },
]

const faqs = [
  {
    q: 'Da li digitalni marketing uopšte radi za proizvodne firme?',
    a: 'Radi, ali ne kao generična kampanja za široku publiku. Najbolje rezultate daju B2B sajt, Google Search za konkretne upite, SEO za proizvode/usluge i LinkedIn za ozbiljnije razgovore.'
  },
  {
    q: 'Da li radite i za firme koje ciljaju izvoz?',
    a: 'Da. Strategija može biti usmerena na Srbiju, region ili strana tržišta. Tu posebno pazimo na keyword nameru, jezike, reference i signal poverenja.'
  },
  {
    q: 'Koliki budžet je realan za industrijski marketing?',
    a: 'Zavisi od tržišta i cilja, ali kod B2B proizvodnje je važnije da kampanja bude precizna nego široka. Često je bolji manji, fokusiran budžet za prave upite nego veliki budžet za loš traffic.'
  },
  {
    q: 'Mi već dobijamo poslove preko preporuka. Da li nam marketing ipak treba?',
    a: 'Da, ako želite stabilniji rast i manje oslanjanje na sreću. Marketing vam ne menja preporuke, već pravi dodatni kanal koji je pod većom kontrolom.'
  },
  {
    q: 'Šta je prvi korak ako nam je sajt zastareo?',
    a: 'Najčešće krećemo od strukture sajta, poruke i CTA-a. Tek kada landing i prezentacija imaju smisla, oglasni budžet daje pravi povrat.'
  },
]

export default function MarketingZaProizvodneFirmePage() {
  usePageMeta()

  return (
    <>
      <section className="pt-[140px] pb-20 md:pt-[200px] md:pb-28 px-4 md:px-8 bg-panel overflow-hidden border-b border-edge-2">
        <div className="max-w-[1000px] mx-auto text-center relative z-10">
          <p className="text-[13px] md:text-[14px] text-ink-3 uppercase tracking-[2px] font-medium mb-6">Marketing za proizvodne firme</p>
          <h1 className="text-[32px] md:text-[56px] font-medium leading-[1.1] tracking-[-1.5px] text-ink mb-6">
            Više ozbiljnih B2B upita za proizvodnju i industriju.
          </h1>
          <p className="text-[16px] md:text-[18px] text-ink-2 max-w-[720px] mx-auto leading-relaxed mb-10">
            Pomažemo proizvodnim firmama da kroz
            {' '}
            <Link to="/google-reklame-cena" className="text-ink underline decoration-1 underline-offset-4 hover:opacity-80">Google Ads</Link>,
            {' '}
            <Link to="/seo-optimizacija-cena" className="text-ink underline decoration-1 underline-offset-4 hover:opacity-80">SEO</Link>
            {' '}
            i jači prodajni sajt dođu do boljih upita, većeg poverenja i stabilnijeg pipeline-a za Srbiju i izvozna tržišta.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/kontakt" className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-inv-bg text-inv-fg text-[15px] font-medium hover:bg-inv-bg-hover transition-colors w-full sm:w-auto">
              Zatražite B2B analizu
            </Link>
            <Link to="/izrada-wordpress-sajta-cena" className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-transparent border border-edge text-ink text-[15px] font-medium hover:border-ink/30 transition-colors w-full sm:w-auto">
              Pogledajte kako sređujemo sajt
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 md:px-8 bg-page">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[28px] md:text-[40px] font-medium tracking-[-1px] text-ink mb-4">Zašto industrijski marketing traži precizniji pristup</h2>
            <p className="text-[16px] text-ink-2 max-w-[760px] mx-auto">
              Proizvodne firme ne prodaju impuls. Prodaju pouzdanost, kapacitet, rok i poslovnu sigurnost. Zato marketing ovde mora da bude čist, jasan i zasnovan na poverenju.
            </p>
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
            <h2 className="text-[28px] md:text-[40px] font-medium tracking-[-1px] text-ink mb-4">Kako gradimo sistem za proizvodne firme</h2>
            <p className="text-[16px] text-ink-2 max-w-[740px] mx-auto">
              Ako želite manje praznog saobraćaja i više konkretnih razgovora, marketing mora da prati ceo put od prvog klika do upita i follow-up-a.
            </p>
          </div>
          <div className="space-y-6">
            {services.map((s, i) => (
              <div key={i} className="bg-panel rounded-2xl p-8 md:p-10 border border-edge-2">
                <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
                  <div className="md:w-1/3">
                    <span className="text-[13px] text-ink-4 uppercase tracking-[2px] font-medium block mb-2">Faza 0{i + 1}</span>
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
          <h2 className="text-[32px] md:text-[48px] font-medium tracking-[-1px] mb-6 text-white">Hoćete više industrijskih upita koji imaju smisla?</h2>
          <p className="text-[16px] md:text-[18px] text-white/80 mb-10 max-w-[640px] mx-auto">
            Pregledaćemo vaš sajt, postojeći marketing i način na koji danas dolazite do klijenata. Dobićete konkretan plan šta prvo treba srediti da biste imali stabilniji B2B rast.
          </p>
          <Link to="/kontakt" className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-white text-blue-600 text-[15px] font-medium hover:bg-gray-50 transition-colors">
            Zakažite besplatne konsultacije
          </Link>
        </div>
      </section>
    </>
  )
}
