import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import BottomCTA from '../components/BottomCTA'

const heroHomeDark = `${import.meta.env.BASE_URL}hero-home-dark.webp`
const heroHomeLight = `${import.meta.env.BASE_URL}hero-home-light.webp`

const faqData = [
  {
    category: 'Opšte',
    questions: [
      {
        q: 'Šta je Platinum Zenith i čime se bavite?',
        a: 'Platinum Zenith je digitalna agencija fokusirana na jedno: da vam dovedemo više klijenata koji su spremni da plate. Bavimo se digitalnim marketingom, web dizajnom, CRO optimizacijom, poslovnim savetovanjem i društvenim mrežama.'
      },
      {
        q: 'Za koje industrije radite?',
        a: 'Radimo sa e-commerce brendovima, SaaS kompanijama, lokalnim biznisom i startapovima. Ako prodajete nešto online ili želite da privučete klijente digitalno, mi smo pravi tim za vas.'
      },
      {
        q: 'Koliko dugo traje saradnja?',
        a: 'Zavisi od projekta. Web design projekti traju 4-8 nedelja. Marketing kampanje obično počinju sa 3-6 meseci jer rezultati dolaze tokom vremena. Consulting može biti jednokratan audit ili kontinuirana saradnja.'
      },
    ]
  },
  {
    category: 'Cene i Paketi',
    questions: [
      {
        q: 'Koliko koštaju vaše usluge?',
        a: 'Svaki projekat je drugačiji. Web design počinje od €2,500. Digitalni marketing paketi kreću od €1,200 mesečno. CRO i consulting se naplaćuju po projektu. Za tačnu cenu, zakažite besplatan razgovor.'
      },
      {
        q: 'Da li nudite fiksne pakete?',
        a: 'Imamo bazne pakete koje prilagođavamo svakom klijentu. Cene za web dizajn možete videti na stranici Web Design. Ali najbolje je da razgovaramo uživo i napravimo ponudu koja odgovara vašim potrebama.'
      },
      {
        q: 'Kako izgleda plaćanje?',
        a: 'Za projekte: 50% unapred, 50% pri završetku. Za mesečne usluge (marketing, društvene mreže): plaćanje mesec unapred. Prihvatamo bankovni transfer, PayPal i kartice.'
      },
    ]
  },
  {
    category: 'Marketing i Oglasi',
    questions: [
      {
        q: 'Koji oglasni budžet mi treba?',
        a: 'Minimalno €1,000 mesečno za Facebook/Instagram oglase da biste videli smislene rezultate. Za Google Ads preporučujemo bar €1,500. To ne uključuje našu naknadu, samo spend na platformama.'
      },
      {
        q: 'Koliko brzo ću videti rezultate?',
        a: 'Prvi podaci dolaze za 7-14 dana. Optimizovane kampanje koje donose stabilan ROI obično su potrebne 60-90 dana. Marketing nije magija, ali sa dobrim sistemom rezultati su predvidivi.'
      },
      {
        q: 'Koje platforme koristite?',
        a: 'Meta Ads (Facebook/Instagram), Google Ads (Search i Shopping), TikTok, LinkedIn. Zavisno od vaše industrije i publike, biramo platforme koje donose najbolje rezultate.'
      },
      {
        q: 'Šta ako oglasi ne funkcionišu?',
        a: 'Analiziramo podatke i menjamo pristup. Ako posle 90 dana nema poboljšanja, razgovaramo o alternativnim strategijama ili prekidamo saradnju bez zatvaranja u ugovor.'
      },
    ]
  },
  {
    category: 'Web Design',
    questions: [
      {
        q: 'Koliko traje izrada sajta?',
        a: 'Landing page za kampanje: 2-3 nedelje. Kompletan korporativni sajt: 6-8 nedelja. E-commerce shop: 8-12 nedelja. Zavisi od broja strana, funkcionalnosti i brzine dobijanja materijala od vas.'
      },
      {
        q: 'Da li radite na WordPress, Shopify ili custom kodovima?',
        a: 'Radimo sve tri. WordPress za većinu korporativnih sajtova, Shopify za e-commerce, custom React/Next.js za specifične potrebe. Biramo tehnologiju prema vašim ciljevima.'
      },
      {
        q: 'Šta je uključeno u web design paket?',
        a: 'UX/UI dizajn, responsive razvoj (mobilni i desktop), SEO optimizacija, integracija sa alatima (CRM, email, analytics), brzina učitavanja, edukacija za korišćenje.'
      },
      {
        q: 'Da li dobijam pristup kodu i hosting?',
        a: 'Da. Sajt je potpuno vaš. Dajemo vam pristup svim fajlovima, kodu i preporučujemo hosting rešenja. Možete nastaviti samostalno ili uz našu podršku.'
      },
    ]
  },
  {
    category: 'CRO i Optimizacija',
    questions: [
      {
        q: 'Šta je CRO i zašto mi treba?',
        a: 'Conversion Rate Optimization znači da više posetilaca postanu kupci. Većina sajtova gubi 95% posetilaca jer nisu optimizovani za prodaju. CRO popravlja to i povećava prihod bez dodatnog troška za saobraćaj.'
      },
      {
        q: 'Kako merite uspeh CRO projekta?',
        a: 'Pratimo konverzije, bounce rate, time on site, klikove na CTA dugmad, dodavanja u korpu i završena plaćanja. Postavljamo A/B testove i merimo poboljšanja mesec po mesec.'
      },
      {
        q: 'Koliko traje CRO projekat?',
        a: 'Inicijalnu analizu radimo za 2 nedelje. Implementacija izmena traje 2-4 nedelje. Testiranje i optimizacija su kontinuirani proces koji daje najbolje rezultate posle 3-6 meseci.'
      },
    ]
  },
  {
    category: 'Consulting i Podrška',
    questions: [
      {
        q: 'Šta dobijam u consulting usluzi?',
        a: 'Biznis audit gde analiziramo pozicioniranje, prodajni proces, marketing, brending, operacije. Dobijate strategiju rasta sa konkretnim koracima, prioritetima i timeline-om. Zatim radimo zajedno na implementaciji.'
      },
      {
        q: 'Da li radite sa startapovima?',
        a: 'Da. Pomagali smo startapovima da lansiraju proizvod, definišu go-to-market strategiju i privuku prve klijente. Razumemo ograničenja budžeta i fokusiramo se na taktike sa visokim ROI.'
      },
      {
        q: 'Da li nudite podršku posle završenog projekta?',
        a: 'Da. Svi sajtovi imaju 30 dana besplatne tehničke podrške. Posle toga možete nastaviti sa mesečnim održavanjem (od €200) ili podršku po potrebi.'
      },
    ]
  },
]

function FAQItem({ question, answer, index }) {
  const [open, setOpen] = useState(false)

  return (
    <Reveal delay={index * 50}>
      <div className="border-b border-edge-2">
        <button
          onClick={() => setOpen(!open)}
          className="w-full text-left py-5 flex items-center justify-between gap-4 group"
        >
          <span className="text-[15px] md:text-[16px] font-medium text-ink group-hover:text-ink-3 transition-colors">{question}</span>
          <motion.div
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="text-ink-4 flex-shrink-0"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
        </button>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <div className="pb-5 text-[14px] md:text-[15px] text-ink-4 leading-[26px] max-w-[700px]">
                {answer}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Reveal>
  )
}

export default function FAQPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex flex-col items-center text-center pt-[200px] md:pt-[260px] pb-[80px] md:pb-[120px] px-4 md:px-8 overflow-hidden min-h-[70vh]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 only-dark" style={{ backgroundImage: `url(${heroHomeDark})`, backgroundSize: 'cover', backgroundPosition: 'center top', backgroundColor: '#000000' }} />
          <div className="absolute inset-0 only-light" style={{ backgroundImage: `url(${heroHomeLight})`, backgroundSize: 'cover', backgroundPosition: 'center top', backgroundColor: '#ffffff' }} />
          <div className="absolute inset-x-0 z-[1]" style={{ top: '64vh', height: '52vh', backdropFilter: 'blur(68px)', WebkitBackdropFilter: 'blur(68px)', maskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 82%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 82%, transparent 100%)' }} />
          <div className="absolute inset-0 z-[2] only-dark" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0) 50%, rgba(0,0,0,0.30) 65%, rgba(0,0,0,0.70) 80%, #000000 95%)' }} />
          <div className="absolute inset-0 z-[2] only-light" style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0) 50%, rgba(255,255,255,0.35) 65%, rgba(255,255,255,0.75) 80%, #ffffff 95%)' }} />
        </div>
        <div className="relative z-10 w-full max-w-[800px] mx-auto">
          <h1 className="hero-enter hero-enter-d1 text-[32px] md:text-[62px] font-medium leading-[1.1] md:leading-[62px] tracking-[-1px] md:tracking-[-1.86px] text-black mb-4">
            Sve što želite da znate
          </h1>
          <p className="hero-enter hero-enter-d2 text-[14px] md:text-[15px] font-normal leading-[22px] md:leading-[26px] tracking-[-0.15px] text-black text-center max-w-[600px] mx-auto px-6 md:px-2">
            Odgovori na najčešća pitanja o uslugama, cenama, procesu rada i rezultatima.
          </p>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-[900px] mx-auto space-y-16">
          {faqData.map((category, ci) => (
            <div key={category.category}>
              <Reveal>
                <h2 className="text-[24px] md:text-[32px] font-medium tracking-[-1px] text-ink mb-8">{category.category}</h2>
              </Reveal>
              <div>
                {category.questions.map((item, qi) => (
                  <FAQItem
                    key={item.q}
                    question={item.q}
                    answer={item.a}
                    index={qi}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA box */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-[700px] mx-auto text-center">
          <Reveal className="bg-tint rounded-[16px] p-10 border border-edge-2">
            <h3 className="text-[24px] md:text-[32px] font-medium text-ink mb-4">Niste pronašli odgovor?</h3>
            <p className="text-[15px] text-ink-4 mb-6 leading-relaxed">
              Zakažite besplatan razgovor i postavite sva pitanja uživo. Bez obaveza, bez pritiska.
            </p>
            <Link to="/kontakt" className="inline-flex items-center gap-1.5 bg-inv-bg text-inv-fg text-[14px] font-medium h-11 px-6 rounded-[40px] hover:bg-inv-bg-hover transition-colors">
              Zakažite Razgovor →
            </Link>
          </Reveal>
        </div>
      </section>

      <BottomCTA />
    </>
  )
}
