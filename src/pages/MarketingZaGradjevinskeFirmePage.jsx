import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta'

const challenges = [
  { icon: '🏗️', title: 'Visoka vrednost projekta', desc: 'Jedan ugovor u građevini može vredeti od 10.000€ do više miliona. Klijenti (investitori ili fizička lica) temeljno istražuju pre nego što donesu odluku.' },
  { icon: '🔍', title: 'Portfolio prodaje', desc: 'Ako vaš sajt nema kvalitetne fotografije završenih projekata i jasan pregled usluga, gubite kredibilitet u prvih 5 sekundi.' },
  { icon: '🤝', title: 'B2B i B2C segmentacija', desc: 'Građevinske firme često rade i sa investitorima (B2B) i sa vlasnicima kuća (B2C). Marketing mora biti prilagođen za obe ciljne grupe.' },
  { icon: '📍', title: 'Lokalna dominacija', desc: 'Većina projekata je geografski vezana. Ako niste prvi na Google-u kada neko traži "građevinska firma [vaš grad]", posao dobija konkurencija.' },
  { icon: '⏳', title: 'Dug prodajni ciklus', desc: 'Odluka o gradnji se ne donosi preko noći. Potreban je sistem koji će pratiti potencijalnog klijenta mesecima (retargeting i email).' },
  { icon: '👷', title: 'Nedostatak radne snage', desc: 'Marketing nije samo za nalaženje klijenata. Snažan brend pomaže i u privlačenju kvalitetnih inženjera i majstora.' },
]

const services = [
  {
    title: 'Izrada sajta sa portfoliom',
    desc: 'Sajt koji uliva poverenje. Investitori žele da vide vaše prethodne projekte, mehanizaciju i stručni tim.',
    items: ['Detaljan portfolio sa filterima po tipu gradnje', 'Optimizacija brzine (slike visoke rezolucije se učitavaju trenutno)', 'Stranice za specifične usluge (grubi radovi, ključ u ruke, renoviranje)', 'Formular za procenu troškova i prikupljanje leadova'],
  },
  {
    title: 'Google Ads i Lokalni SEO',
    desc: 'Kada neko traži "izgradnja kuća ključ u ruke", vi morate biti prvi rezultat.',
    items: ['Google Search kampanje sa visokom namerom kupovine', 'Optimizacija Google Business profila za lokalnu dominaciju', 'SEO za specifične građevinske usluge i materijale', 'Praćenje konverzija (pozivi i popunjeni formulari)'],
  },
  {
    title: 'LinkedIn B2B generisanje leadova',
    desc: 'Direktan pristup investitorima, arhitektama i projekt menadžerima.',
    items: ['Targetiranje donosioca odluka u industriji nekretnina', 'LinkedIn Ads za B2B partnerstva i veće projekte', 'Izgradnja autoriteta kroz objave o završenim projektima', 'Povezivanje sa arhitektonskim biroima'],
  },
  {
    title: 'Meta (Facebook/Instagram) za B2C',
    desc: 'Idealno za firme koje rade renoviranja, adaptacije ili prodaju stanove direktno kupcima.',
    items: ['Before/After vizuali adaptacija i izgradnje', 'Retargeting posetilaca sajta koji su gledali specifične projekte', 'Video sadržaj sa gradilišta (tim na delu gradi poverenje)', 'Lead generation kampanje za besplatne procene'],
  },
]

const metrics = [
  { num: '10-30', label: 'Kvalifikovanih upita mesečno', desc: 'Zavisno od budžeta, generišemo direktne upite od ljudi spremnih za gradnju.' },
  { num: '10.000€+', label: 'Vrednost jednog klijenta', desc: 'U građevini, samo jedan zatvoren posao višestruko isplati godišnji marketing budžet.' },
  { num: '5x-15x', label: 'Povrat investicije (ROI)', desc: 'Zbog visoke cene građevinskih usluga, ROI u ovoj industriji je među najvišim.' },
]

const faqs = [
  { q: 'Koliko košta marketing za građevinsku firmu?', a: 'Zavisi od vaših ciljeva. Lokalni SEO i održavanje kreću od 400€ mesečno. Za ozbiljnije Google i LinkedIn Ads kampanje, preporučujemo budžet od 1.000€ do 3.000€ mesečno. Jedan dobijen tender ili projekat izgradnje pokriva višemesečni budžet.' },
  { q: 'Mi radimo samo B2B (sa investitorima). Da li nam trebaju društvene mreže?', a: 'Facebook i Instagram možda nisu primarni, ali LinkedIn jeste. Investitori vas proveravaju online. Ako vaš sajt i LinkedIn profil izgledaju profesionalno, šanse za dobijanje posla drastično rastu.' },
  { q: 'Nemamo profesionalne slike sa gradilišta, da li je to problem?', a: 'Slike sa telefona mogu biti odlične za društvene mreže ako prikazuju autentičan rad. Za sajt preporučujemo angažovanje profesionalnog fotografa ili drona da slika završene objekte. Mi vam možemo pomoći u organizaciji.' },
  { q: 'Koliko brzo možemo očekivati nove upite?', a: 'Google Ads i Meta kampanje donose prve upite u roku od 7-14 dana. SEO i građenje autoriteta na LinkedIn-u su dugoročne strategije koje pokazuju najbolje rezultate posle 3 do 6 meseci.' },
  { q: 'Da li radite marketing za prodaju stanova (novogradnja)?', a: 'Da. Pravimo namenske landing stranice za zgrade u izgradnji, kreiramo 3D ture i vodimo kampanje koje generišu upite potencijalnih kupaca pre nego što je zgrada završena.' },
]

export default function MarketingZaGradjevinskeFirmePage() {
  usePageMeta()

  return (
    <>
      <section className="pt-[140px] pb-20 md:pt-[200px] md:pb-28 px-4 md:px-8 bg-panel overflow-hidden border-b border-edge-2">
        <div className="max-w-[1000px] mx-auto text-center relative z-10">
          <p className="text-[13px] md:text-[14px] text-ink-3 uppercase tracking-[2px] font-medium mb-6">Marketing za građevinske firme</p>
          <h1 className="text-[32px] md:text-[56px] font-medium leading-[1.1] tracking-[-1.5px] text-ink mb-6">
            Povećajte broj upita, zatvorite veće projekte i izgradite autoritet u industriji.
          </h1>
          <p className="text-[16px] md:text-[18px] text-ink-2 max-w-[600px] mx-auto leading-relaxed mb-10">
            U građevini, poverenje je sve. Kroz SEO, Google Ads i profesionalan web dizajn, pozicioniramo vašu firmu kao prvi izbor za investitore i fizička lica.
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
            <h2 className="text-[28px] md:text-[40px] font-medium tracking-[-1px] text-ink mb-4">Građevinska industrija zahteva specifičan pristup</h2>
            <p className="text-[16px] text-ink-2 max-w-[600px] mx-auto">Zašto obične marketing strategije ne rade kada je u pitanju visoka gradnja i adaptacija.</p>
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
            <h2 className="text-[28px] md:text-[40px] font-medium tracking-[-1px] text-ink mb-4">Naš plan za vaš rast</h2>
            <p className="text-[16px] text-ink-2 max-w-[600px] mx-auto">Sistem koji generiše kvalifikovane upite za građevinske projekte.</p>
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
          <h2 className="text-[32px] md:text-[48px] font-medium tracking-[-1px] mb-6 text-white">Spremni za nove projekte?</h2>
          <p className="text-[16px] md:text-[18px] text-white/80 mb-10 max-w-[600px] mx-auto">
            Zakazivanje besplatne konsultacije vas ne obavezuje ni na šta. Pogledaćemo vaš trenutni sajt, analitiku i dati vam konkretan plan za dobijanje više građevinskih upita.
          </p>
          <Link to="/kontakt" className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-white text-blue-600 text-[15px] font-medium hover:bg-gray-50 transition-colors">
            Zakažite besplatne konsultacije
          </Link>
        </div>
      </section>
    </>
  )
}
