import { useEffect } from 'react'
import usePageMeta from '../hooks/usePageMeta'

const changes = [
  {
    title: 'Mobile performance (PageSpeed 46 → 99)',
    text: 'Prvi korak nije bio novi dizajn, nego brzina. Uklonili smo uska grla na mobilnom učitavanju, optimizovali ključne assete i stabilizovali render putanju. Kad je sajt počeo da se otvara brzo, bounce rate je pao, a više korisnika je stiglo do korpe.',
  },
  {
    title: 'Mini-korpa sa progresom do besplatne dostave',
    text: 'U mini-korpu smo dodali jasan vizuelni progres koji korisniku u svakom trenutku pokazuje koliko mu fali do besplatne dostave. Ovaj mali UI signal je podigao broj porudžbina sa većim iznosom jer kupci imaju konkretan razlog da dodaju još jedan artikl.',
  },
  {
    title: 'Order bumps koji stvarno imaju smisla',
    text: 'Umesto nasumičnih predloga, order bumps su vezani za proizvode koji prirodno idu zajedno. Time smo povećali broj dopunskih kupovina bez agresivnog upsell-a i bez osećaja da kupca guramo u nepotrebnu kupovinu.',
  },
  {
    title: 'Realan prikaz zaliha',
    text: 'Dodata je transparentna informacija o stvarnom stanju zaliha po veličinama. Kod obuće to rešava ključnu dilemu kupca: da li da čeka ili poruči odmah. Kad je signal oskudice realan i pošteno prikazan, odluka se ubrzava.',
  },
]

const niwaFeatures = [
  'Ako korisnik ubaci 2+ proizvoda u korpu, Niwa aktivira dodatni kupon sa kratkim rokom trajanja.',
  'Kad Niwa detektuje oklevanje u korpi, šalje poruku koja adresira najveći prigovor pre kupovine.',
  'U najčešćem slučaju (dilema oko veličine), Niwa pokreće interaktivno vođenje kroz vodič veličina.',
  'Na izlasku sa sajta Niwa prikazuje lagan, komičan GIF sa porukom koja zadržava pažnju i vraća korisnika u funnel.',
]

export default function NetokracijaDraftCROPage() {
  usePageMeta()

  useEffect(() => {
    const robots = document.querySelector('meta[name="robots"]')
    const prev = robots?.getAttribute('content') || ''

    if (robots) robots.setAttribute('content', 'noindex, nofollow')

    return () => {
      if (robots) robots.setAttribute('content', prev || 'index, follow')
    }
  }, [])

  return (
    <div className="min-h-screen bg-page">
      <section className="relative pt-[140px] md:pt-[180px] pb-16 md:pb-24 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 only-dark"
            style={{
              background:
                'radial-gradient(ellipse at 30% 20%, rgba(16,185,129,0.15) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(59,130,246,0.12) 0%, transparent 50%)',
            }}
          />
          <div
            className="absolute inset-0 only-light"
            style={{
              background:
                'radial-gradient(ellipse at 30% 20%, rgba(16,185,129,0.08) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(59,130,246,0.06) 0%, transparent 50%)',
            }}
          />
        </div>

        <div className="relative z-10 max-w-[900px] mx-auto">
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-[12px]">
            DRAFT — interno za editorial review
          </div>
          <h1 className="text-[32px] md:text-[52px] font-medium leading-[1.1] tracking-[-1px] text-ink mb-5">
            Kako smo povećali profit 4x kroz nekoliko ključnih CRO izmena na domaćem web shopu
          </h1>
          <p className="text-[16px] md:text-[18px] text-ink-2 leading-relaxed max-w-[760px]">
            Ovaj draft je pripremljen kao predlog članka za Netokraciju. Fokus je na konkretnim promenama koje su dale rezultat: brzina, mini-korpa, order bumps, realan prikaz zaliha i AI asistencija u kritičnim momentima kupovine.
          </p>
        </div>
      </section>

      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <article className="max-w-[820px] mx-auto space-y-8">
          <div className="bg-panel border border-edge rounded-[18px] p-6 md:p-8">
            <h2 className="text-[24px] md:text-[30px] font-medium text-ink mb-4">Kontekst problema</h2>
            <p className="text-[15px] text-ink-2 leading-relaxed mb-4">
              Shop je imao stabilan saobraćaj, ali rezultat nije pratio broj poseta. Klasičan scenario: ljudi dođu, pogledaju proizvod, odu. U toj tački većina timova menja budžet za oglase, ali to obično samo ubrza gubitke.
            </p>
            <p className="text-[15px] text-ink-2 leading-relaxed">
              Umesto povećanja medijskog troška, pristup je bio CRO-first: ukloniti trenje, podići jasnoću odluke i pomoći korisniku tačno u momentu kada zapne.
            </p>
          </div>

          <div className="space-y-5">
            <h2 className="text-[24px] md:text-[30px] font-medium text-ink">Šta smo promenili u core funnel-u</h2>
            {changes.map((item, i) => (
              <div key={item.title} className="bg-panel border border-edge rounded-[16px] p-5 md:p-6">
                <h3 className="text-[18px] font-medium text-ink mb-2">
                  <span className="text-ink-4 mr-2">{i + 1}.</span>
                  {item.title}
                </h3>
                <p className="text-[15px] text-ink-2 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="bg-panel border border-edge rounded-[18px] p-6 md:p-8">
            <h2 className="text-[24px] md:text-[30px] font-medium text-ink mb-4">Gde je Niwa AI napravila najveću razliku</h2>
            <ul className="space-y-3">
              {niwaFeatures.map(f => (
                <li key={f} className="flex items-start gap-2 text-[15px] text-ink-2 leading-relaxed">
                  <span className="text-emerald-500 mt-0.5">✓</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-panel border border-edge rounded-[18px] p-6 md:p-8">
            <h2 className="text-[24px] md:text-[30px] font-medium text-ink mb-4">Zašto je ovo važno i drugim e-commerce timovima</h2>
            <p className="text-[15px] text-ink-2 leading-relaxed mb-4">
              Najveća greška je kada se konverzija tretira kao jedan element na checkout-u. U praksi, kupovina puca mnogo ranije: na brzini, nejasnoj mini-korpi, slabim predlozima i neadresiranim prigovorima.
            </p>
            <p className="text-[15px] text-ink-2 leading-relaxed">
              Ovaj case pokazuje da nekoliko ciljnih izmena u pravim tačkama može da donese veći efekat nego bilo kakvo „sipanje“ dodatnog budžeta u oglase.
            </p>
          </div>

          <div className="bg-panel border border-edge rounded-[18px] p-6 md:p-8">
            <h2 className="text-[24px] md:text-[30px] font-medium text-ink mb-4">Napomena za redakciju</h2>
            <p className="text-[15px] text-ink-2 leading-relaxed">
              Ako Netokraciji odgovara smer, finalna verzija može biti prilagođena njihovom editorial formatu (kraća newsroom verzija ili duža analiza sa više tehničkih detalja i vizuelnih primera).
            </p>
          </div>
        </article>
      </section>
    </div>
  )
}
