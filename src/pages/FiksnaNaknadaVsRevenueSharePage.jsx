import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta'

const comparison = [
  {
    factor: 'Rizik za klijenta',
    fixed: 'Plaćate unapred, bez obzira na rezultat. Ako kampanja ne donese ništa, agencija je već naplatila.',
    revShare: 'Agencija zarađuje samo kad vi zarađujete. Ako nema rezultata, nema ni troškova za upravljanje.',
    verdict: 'Revenue share prebacuje rizik sa klijenta na agenciju. Agencija mora da isporuči jer njen prihod zavisi od toga.',
  },
  {
    factor: 'Motivacija agencije',
    fixed: 'Garantovan prihod za agenciju bez obzira na performanse. Nema finansijskog podsticaja da optimizuje iznad dogovorenog.',
    revShare: 'Agencija direktno profitira od vašeg uspeha. Što više vi zarađujete, više zarađuje i ona.',
    verdict: 'Revenue share model prirodno motiviše agenciju da stalno poboljšava rezultate.',
  },
  {
    factor: 'Predvidljivost troškova',
    fixed: 'Fiksni mesečni iznos koji se lako planira u budžetu. Znate tačno koliko plaćate.',
    revShare: 'Troškovi variraju zavisno od prometa. U dobrim mesecima plaćate više, u slabim manje.',
    verdict: 'Fiksna naknada je lakša za planiranje. Revenue share je pravednija jer prati vaš stvarni promet.',
  },
  {
    factor: 'Transparentnost',
    fixed: 'Agencija šalje izveštaj jednom mesečno, ali nema potrebu da deli sve podatke jer je već naplatila.',
    revShare: 'Agencija mora da deli podatke o prometu jer joj od toga zavisi zarada. Obostrani pristup analitici.',
    verdict: 'Revenue share zahteva potpunu transparentnost od obe strane, što je zdravije za dugoročnu saradnju.',
  },
  {
    factor: 'Ulazna cena',
    fixed: 'Obično 500-3.000€ mesečno bez obzira na veličinu biznisa. Za manje firme ovo može biti preveliki trošak.',
    revShare: 'Početni troškovi su manji jer agencija uzima procenat od prihoda umesto fiksne sume.',
    verdict: 'Revenue share je pristupačniji za manje biznise koji nemaju budžet za fiksnu mesečnu naknadu.',
  },
  {
    factor: 'Dugoročni troškovi',
    fixed: 'Ostaju isti bez obzira koliko narastete. Ako vam promet skoči 5x, i dalje plaćate isti iznos agenciji.',
    revShare: 'Rastete zajedno. Kad vaš promet naraste, agencija zarađuje više, ali i vi zarađujete više.',
    verdict: 'Kod velikog rasta, fiksna naknada postaje jeftinija. Ali revenue share agencija aktivno radi na tom rastu.',
  },
]

const idealFixed = [
  'Imate stabilan promet i treba vam održavanje, ne rast',
  'Budžet za marketing je jasno definisan i nepromenljiv',
  'Projekat je ograničen po obimu (3-6 meseci)',
  'Već znate šta vam treba i samo treba neko da izvede',
  'Kompanija ima jak interni marketing tim koji vodi strategiju',
]

const idealRevShare = [
  'Tek počinjete i nemate budžet za veliku mesečnu naknadu',
  'Želite agenciju koja je motivisana da donese rezultate',
  'Spremni ste na dugoročnu saradnju (6+ meseci)',
  'Vaš biznis ima jasan put do onlajn prodaje ili generisanja upita',
  'Želite partnera, ne izvođača',
]

const myths = [
  {
    myth: 'Revenue share agencije uzimaju previše procenata',
    reality: 'Standardni procenat je 10-20% od prihoda generisanog kroz kampanje. Ako agencija donese 10.000€ prihoda i uzme 15%, platili ste 1.500€ za 10.000€ prihoda. Uporedite to sa fiksnih 2.000€ mesečno bez garancije rezultata.'
  },
  {
    myth: 'Fiksna naknada znači bolji kvalitet rada',
    reality: 'Kvalitet rada zavisi od agencije, ne od modela naplate. Razlika je u motivaciji. Fiksna naknada ne garantuje rezultat. Revenue share garantuje da se agencija trudi jer od toga zavisi njena zarada.'
  },
  {
    myth: 'Revenue share radi samo za e-commerce',
    reality: 'Radi za svaki biznis gde se može meriti rezultat. E-commerce, generisanje upita (lead gen), rezervacije, prijave. Bitan je jasan KPI koji se može pratiti.'
  },
  {
    myth: 'Agencija može da manipuliše brojevima',
    reality: 'Zato postoji obostrani pristup analitici. Google Analytics, Meta Ads Manager, CRM. Obe strane vide iste podatke. Ako agencija nema ništa protiv da vam da pristup svemu, to je dobar znak.'
  },
]

const faqs = [
  { q: 'Koji procenat uzima revenue share agencija?', a: 'Zavisi od industrije i obima. Za e-commerce je standard 10-20% od prihoda generisanog kroz kampanje agencije. Za lead gen modele, cena po upitu se dogovara unapred. Bitno je da je formula jasna pre početka saradnje.' },
  { q: 'Šta ako moj biznis ima sezonu sa slabim prometom?', a: 'To je jedna od prednosti revenue share modela. U slabim mesecima plaćate manje jer je procenat od manjeg prometa. Kod fiksne naknade, plaćate isto i u januaru i u decembru.' },
  { q: 'Kako se meri šta je agencija donela, a šta bi svakako došlo?', a: 'Koriste se UTM tagovi, konverzijsko praćenje (Meta Pixel, Google Ads conversion tracking), i attribution modeli. Jasno se vidi koji prihod dolazi iz kojih kampanja.' },
  { q: 'Da li revenue share model zahteva minimalni period saradnje?', a: 'Obično da, minimum 3-6 meseci. Agencija ulaže vreme i resurse u postavljanje kampanja i potrebno je vreme da se vidi pun efekat. Kratkoročna saradnja ne odgovara ni jednoj strani.' },
  { q: 'Mogu li kombinovati fiksnu naknadu i revenue share?', a: 'Da, hibridni model je čest. Manja fiksna naknada pokriva operativne troškove agencije, a revenue share deo motiviše na rezultate. Ovo je dobar kompromis za obe strane.' },
]

export default function FiksnaNaknadaVsRevenueSharePage() {
  usePageMeta()
  return (
    <div className="min-h-screen bg-page">
      {/* Hero */}
      <section className="relative pt-[140px] md:pt-[180px] pb-16 md:pb-24 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 only-dark" style={{ background: 'radial-gradient(ellipse at 30% 20%, rgba(99,102,241,0.15) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(168,85,247,0.1) 0%, transparent 50%)' }} />
          <div className="absolute inset-0 only-light" style={{ background: 'radial-gradient(ellipse at 30% 20%, rgba(99,102,241,0.08) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(168,85,247,0.06) 0%, transparent 50%)' }} />
        </div>
        <div className="relative z-10 max-w-[800px] mx-auto text-center">
          <span className="inline-block text-[11px] uppercase tracking-[0.2em] text-ink-3 mb-5">Uporedni vodič · 2026</span>
          <h1 className="text-[30px] md:text-[50px] font-medium leading-[1.1] tracking-[-1px] text-ink mb-5">
            Fiksna naknada ili<br />revenue share model?
          </h1>
          <p className="text-[16px] md:text-[18px] text-ink-2 leading-relaxed max-w-[620px] mx-auto mb-8">
            Dva načina da platite marketing agenciju. Jedan je siguran ali skup. Drugi je riskantan ali pravičan. Evo šta vam se više isplati.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/kontakt" className="inline-flex items-center gap-2 bg-inv-bg text-inv-fg text-[14px] font-medium h-11 px-6 rounded-full hover:bg-inv-bg-hover transition-colors">
              Besplatne konsultacije
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
            <a href="#poredjenje" className="inline-flex items-center gap-2 text-ink-2 text-[14px] font-medium h-11 px-6 rounded-full border border-edge hover:bg-tint transition-colors">
              Pogledajte poređenje
            </a>
          </div>
        </div>
      </section>

      {/* Quick Summary */}
      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[900px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-panel rounded-[20px] border border-edge p-6 md:p-8">
              <div className="text-[28px] mb-3">💰</div>
              <h2 className="text-[20px] font-medium text-ink mb-3">Fiksna naknada</h2>
              <p className="text-[14px] text-ink-2 leading-relaxed mb-4">Plaćate dogovoreni iznos svaki mesec bez obzira na rezultate. Agencija isporučuje rad, ali njen prihod ne zavisi od vašeg uspeha.</p>
              <div className="text-[13px] text-ink-3">Tipično: 500 - 3.000€/mesec</div>
            </div>
            <div className="bg-panel rounded-[20px] border border-indigo-500/[0.2] p-6 md:p-8 relative overflow-hidden">
              <div className="absolute top-3 right-3 text-[10px] uppercase tracking-wider bg-indigo-500/[0.1] text-indigo-400 px-2 py-0.5 rounded-full font-medium">Naš model</div>
              <div className="text-[28px] mb-3">🤝</div>
              <h2 className="text-[20px] font-medium text-ink mb-3">Revenue share</h2>
              <p className="text-[14px] text-ink-2 leading-relaxed mb-4">Agencija uzima procenat od prihoda koji generiše kroz kampanje. Njen uspeh je direktno vezan za vaš uspeh. Nema rezultata, nema naplate.</p>
              <div className="text-[13px] text-ink-3">Tipično: 10-20% od generisanog prihoda</div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section id="poredjenje" className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[26px] md:text-[34px] font-medium text-ink mb-10 text-center">Detaljno poređenje</h2>
          <div className="space-y-6">
            {comparison.map(c => (
              <div key={c.factor} className="bg-panel rounded-[16px] border border-edge overflow-hidden">
                <div className="bg-tint px-5 py-3 border-b border-edge">
                  <h3 className="text-[16px] font-medium text-ink">{c.factor}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-edge">
                  <div className="bg-panel p-5">
                    <span className="text-[11px] uppercase tracking-wider text-ink-3 font-medium">Fiksna naknada</span>
                    <p className="text-[14px] text-ink-2 leading-relaxed mt-2">{c.fixed}</p>
                  </div>
                  <div className="bg-panel p-5">
                    <span className="text-[11px] uppercase tracking-wider text-indigo-400 font-medium">Revenue share</span>
                    <p className="text-[14px] text-ink-2 leading-relaxed mt-2">{c.revShare}</p>
                  </div>
                </div>
                <div className="px-5 py-3 border-t border-edge">
                  <p className="text-[13px] text-ink-3"><span className="font-medium text-ink-2">Zaključak:</span> {c.verdict}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* When to Choose */}
      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[26px] md:text-[34px] font-medium text-ink mb-10 text-center">Kad izabrati koji model?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-panel rounded-[20px] border border-edge p-6">
              <h3 className="text-[18px] font-medium text-ink mb-4">💰 Fiksna naknada je bolja kad:</h3>
              <ul className="space-y-3">
                {idealFixed.map(item => (
                  <li key={item} className="flex gap-3 items-start">
                    <svg className="w-4 h-4 text-ink-3 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    <span className="text-[14px] text-ink-2">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-panel rounded-[20px] border border-indigo-500/[0.2] p-6">
              <h3 className="text-[18px] font-medium text-ink mb-4">🤝 Revenue share je bolji kad:</h3>
              <ul className="space-y-3">
                {idealRevShare.map(item => (
                  <li key={item} className="flex gap-3 items-start">
                    <svg className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    <span className="text-[14px] text-ink-2">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Myths */}
      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[760px] mx-auto">
          <h2 className="text-[26px] md:text-[34px] font-medium text-ink mb-10 text-center">Mitovi o revenue share modelu</h2>
          <div className="space-y-5">
            {myths.map(m => (
              <div key={m.myth} className="bg-panel rounded-[16px] border border-edge p-6">
                <div className="flex gap-3 items-start mb-3">
                  <span className="text-red-400 text-[14px] font-medium flex-shrink-0">✕ Mit:</span>
                  <p className="text-[15px] text-ink font-medium">{m.myth}</p>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-emerald-400 text-[14px] font-medium flex-shrink-0">✓ Realnost:</span>
                  <p className="text-[14px] text-ink-2 leading-relaxed">{m.reality}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Example */}
      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[760px] mx-auto bg-gradient-to-br from-indigo-500/[0.08] to-purple-500/[0.08] rounded-[20px] border border-indigo-500/[0.15] p-6 md:p-8">
          <h2 className="text-[22px] md:text-[26px] font-medium text-ink mb-5">Primer iz prakse</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-[15px] font-medium text-ink mb-2">Scenario: E-commerce sajt</h3>
              <ul className="space-y-2 text-[14px] text-ink-2">
                <li>Mesečni promet pre kampanje: 5.000€</li>
                <li>Promet posle 3 meseca: 18.000€</li>
                <li>Prihod generisan kampanjom: 13.000€</li>
              </ul>
            </div>
            <div>
              <h3 className="text-[15px] font-medium text-ink mb-2">Poređenje troškova:</h3>
              <div className="space-y-2 text-[14px]">
                <div className="flex justify-between"><span className="text-ink-2">Fiksna naknada (svaki mesec isto):</span><span className="text-ink font-medium">2.000€/mes</span></div>
                <div className="border-t border-edge pt-2 mt-2">
                  <div className="text-[12px] text-ink-3 mb-2">Revenue share (15%) po mesecima:</div>
                  <div className="flex justify-between"><span className="text-ink-2">Mesec 1 (generisano ~3.000€):</span><span className="text-ink font-medium">450€</span></div>
                  <div className="flex justify-between"><span className="text-ink-2">Mesec 2 (generisano ~8.000€):</span><span className="text-ink font-medium">1.200€</span></div>
                  <div className="flex justify-between"><span className="text-ink-2">Mesec 3 (generisano 13.000€):</span><span className="text-ink font-medium">1.950€</span></div>
                </div>
                <div className="border-t border-edge pt-2 mt-2">
                  <div className="flex justify-between font-medium"><span className="text-ink-2">Fiksna ukupno (3 meseca):</span><span className="text-ink">6.000€</span></div>
                  <div className="flex justify-between font-medium"><span className="text-ink-2">Revenue share ukupno (3 meseca):</span><span className="text-indigo-400">3.600€</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[760px] mx-auto">
          <h2 className="text-[26px] md:text-[34px] font-medium text-ink mb-10 text-center">Često postavljana pitanja</h2>
          <div className="space-y-5">
            {faqs.map(f => (
              <details key={f.q} className="group bg-panel rounded-[14px] border border-edge">
                <summary className="flex items-center justify-between p-5 cursor-pointer text-[15px] font-medium text-ink">
                  {f.q}
                  <svg className="w-4 h-4 text-ink-3 transition-transform group-open:rotate-180 flex-shrink-0 ml-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
                </summary>
                <div className="px-5 pb-5 text-[14px] text-ink-2 leading-relaxed">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[760px] mx-auto">
          <h2 className="text-[22px] font-medium text-ink mb-6 text-center">Povezane stranice</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
            <Link to="/cene-digitalnog-marketinga" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Cene digitalnog marketinga</div>
              <div className="text-[12px] text-ink-3">Mesečni paketi i cene po usluzi</div>
            </Link>
            <Link to="/agencija-vs-freelancer" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Agencija vs freelancer</div>
              <div className="text-[12px] text-ink-3">Kako da izaberete izvođača</div>
            </Link>
            <Link to="/paketi" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Naši paketi</div>
              <div className="text-[12px] text-ink-3">Starter, Growth, Enterprise</div>
            </Link>
            <Link to="/google-reklame-cena" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Google reklame cena</div>
              <div className="text-[12px] text-ink-3">Uporedite trošak sa modelom naplate</div>
            </Link>
            <Link to="/instagram-reklame-cena" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Instagram reklame cena</div>
              <div className="text-[12px] text-ink-3">Vizualni kanal uz isti model naplate</div>
            </Link>
            <Link to="/blog/kako-izabrati-pravu-marketing-agenciju" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Kako izabrati agenciju</div>
              <div className="text-[12px] text-ink-3">7 znakova da je partner za vas</div>
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-4 md:px-8 pb-20 md:pb-32">
        <div className="max-w-[600px] mx-auto text-center">
          <h2 className="text-[22px] md:text-[28px] font-medium text-ink mb-4">Isprobajte revenue share model bez rizika</h2>
          <p className="text-[15px] text-ink-2 mb-6">Zakažite besplatan razgovor i saznajte da li revenue share model odgovara vašem biznisu. Analiziramo vaš trenutni marketing i dajemo konkretne preporuke.</p>
          <Link to="/kontakt" className="inline-flex items-center gap-2 bg-inv-bg text-inv-fg text-[14px] font-medium h-11 px-6 rounded-full hover:bg-inv-bg-hover transition-colors">
            Zakažite razgovor
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>
      </section>

      {/* JSON-LD FAQPage — BreadcrumbList handled by usePageMeta */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(f => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": { "@type": "Answer", "text": f.a }
        }))
      })}} />
    </div>
  )
}
