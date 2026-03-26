import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta'

const challenges = [
  { icon: '🚨', title: 'Hitne intervencije', desc: 'Klijenti vas traže kada im pukne cev ili nestane struje. Tada ne gledaju društvene mreže, već ukucaju problem na Google-u i zovu prvog na listi.' },
  { icon: '🤝', title: 'Poverenje i bezbednost', desc: 'Puštanje majstora u kuću zahteva poverenje. Ako nemate profesionalan sajt i dobre Google recenzije, ljudi će pozvati nekog drugog.' },
  { icon: '⏱️', title: 'Nedostatak vremena', desc: 'Vi ste po ceo dan na terenu i radite. Nemate vremena da odgovarate na poruke na Instagramu ili da se bavite optimizacijom sajta.' },
  { icon: '📍', title: 'Lokalna pretraga', desc: 'Usluge vodoinstalatera, električara ili bravara su strogo lokalne. Vaš marketing mora biti fokusiran isključivo na vaš grad ili opštinu.' },
  { icon: '📉', title: 'Nelojalna konkurencija', desc: 'Tržište je puno majstora na crno sa nerealno niskim cenama. Vi se morate pozicionirati kao pouzdana, registrovana firma koja daje garanciju.' },
  { icon: '☀️', title: 'Sezonalnost posla', desc: 'Ugradnja klima uređaja leti, grejanje zimi, moleraj u proleće. Kampanje moraju pratiti sezonu kako biste uvek imali pune ruke posla.' },
]

const services = [
  {
    title: 'Lokalni SEO i Google Business profil',
    desc: 'Najvažnija stvar za zanatlije. Kada neko kuca \"električar Beograd\" ili \"hitne intervencije vodoinstalater\", morate biti u Top 3 na mapi.',
    items: ['Optimizacija Google Business profila', 'Sakupljanje i odgovaranje na recenzije klijentima', 'Lokalni SEO za ključne reči u vašem gradu', 'Pozicioniranje na Google Maps aplikaciji'],
  },
  {
    title: 'Google Ads (Call-Only Kampanje)',
    desc: 'Savršeno za hitne intervencije. Reklame koje se prikazuju samo na mobilnim telefonima i imaju samo jedno dugme – Pozovi.',
    items: ['Kampanje za hitne intervencije (00-24h ako radite)', 'Ciljanje specifičnih usluga (npr. odgušenje kanalizacije)', 'Filtriranje loših klikova kako ne biste bacali novac', 'Praćenje svakog poziva koji dođe preko reklame'],
  },
  {
    title: 'Brz i funkcionalan sajt',
    desc: 'Ljudi u panici nemaju strpljenja. Sajt mora da se učita momentalno i da broj telefona bude ogroman i odmah klikabilan.',
    items: ['Mobilni dizajn prilagođen za brzu konverziju', 'Sticky dugme za poziv koje uvek prati korisnika', 'Jasan pregled usluga i eventualnog cenovnika', 'Prikaz licenci, sertifikata i garancija'],
  },
  {
    title: 'Meta Ads za veće projekte (Adaptacije)',
    desc: 'Dok je Google za hitne stvari, Facebook i Instagram su odlični za skuplje projekte poput kompletnog renoviranja kupatila.',
    items: ['Before/After slike završenih adaptacija', 'Prikupljanje leadova za besplatnu procenu radova', 'Retargeting ljudi koji su posetili vaš sajt', 'Izgradnja prepoznatljivosti brenda u lokalu'],
  },
]

const metrics = [
  { num: '50-150+', label: 'Poziva mesečno', desc: 'Kvalitetna Google Ads kampanja donosi direktne pozive ljudi kojima treba majstor odmah.' },
  { num: 'Top 3', label: 'Na Google Mapi', desc: 'Firme koje se nalaze u prva tri rezultata na mapi dobijaju preko 70% svih lokalnih poziva.' },
  { num: '3x-10x', label: 'Povrat investicije', desc: 'Jedan veći posao (npr. uvođenje grejanja) može isplatiti višemesečni marketing budžet.' },
]

const faqs = [
  { q: 'Koliko košta marketing za vodoinstalatere ili električare?', a: <>Za lokalni SEO i vođenje Google Business profila cene kreću od 300€ mesečno. Za Google Ads (reklame za hitne pozive), preporučujemo početni budžet za klikove od bar 200-300€ mesečno. Više o cenama pročitajte na stranici <Link to="/cene-digitalnog-marketinga" className="text-blue-600 hover:underline">cene digitalnog marketinga</Link>.</> },
  { q: 'Da li mi treba sajt ako već imam Facebook stranicu?', a: <>Apsolutno da. Kada nekome curi bojler, on ne ide na Facebook da traži majstora, već na Google. Ako nemate brz sajt i Google profil, gubite najtoplije klijente. Pročitajte više o <Link to="/cene-izrade-sajta" className="text-blue-600 hover:underline">cenama izrade sajta</Link>.</> },
  { q: 'Ja radim po ceo dan na terenu, nemam vremena za marketing.', a: 'To je idealno! Naš posao je da vam napravimo sistem koji sam dovodi klijente. Vaše je samo da se javite na telefon kada zazvoni i zakažete intervenciju. Mi brinemo o sajtu, oglasima i optimizaciji.' },
  { q: 'Da li možete da mi dovedete samo velike poslove (npr. adaptacije), a ne sitne popravke?', a: 'Da. Google Ads kampanje možemo podesiti tako da ciljaju samo ljude koji traže "renoviranje kupatila ključ u ruke" ili "postavljanje centralnog grejanja", a da ignorišu pretrage za zamenu gumice na slavini.' },
  { q: 'Koliko brzo mogu očekivati prve pozive?', a: 'Ako pokrenemo Google Ads (Call-Only) kampanje, prve pozive možete očekivati u roku od 24 do 48 sati od lansiranja reklama. SEO i Google Maps optimizacija su dugoročnije i pravi rezultati stižu posle 2-3 meseca.' },
]

export default function MarketingZaZanatlijePage() {
  usePageMeta({
    title: 'Digitalni Marketing za Majstore i Zanatlije | Platinum Zenith',
    description: 'Specijalizovan digitalni marketing za zanatlije, električare, vodoinstalatere i keramičare. Google Ads za hitne intervencije, lokalni SEO i izrada brzih sajtova.',
    keywords: 'marketing za majstore, marketing za zanatlije, marketing za elektricare, marketing za vodoinstalatere, google ads za majstore, lokalni seo srbija',
  })

  return (
    <div className="bg-white min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-20 sm:pt-32 sm:pb-24 lg:pb-32">
        <div className="absolute inset-0 bg-blue-50/50 -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-8">
              Digitalni marketing za <span className="text-blue-600">zanatlije i majstore</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-10 leading-relaxed">
              Kada nekome curi voda ili nema struje, on ne ide na Facebook – <strong className="text-gray-900">ide na Google</strong>. Postanite majstor koga prvog zovu.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/kontakt"
                className="inline-flex justify-center items-center px-8 py-4 text-lg font-semibold rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
              >
                Zatražite besplatnu konsultaciju
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Specifičnosti marketinga za zanatlije
            </h2>
            <p className="text-xl text-gray-600">
              Vaš biznis nije kao kafić ili butik. Vama ne trebaju lajkovi, vama treba telefon koji zvoni.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {challenges.map((challenge, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:bg-blue-50 transition-colors duration-300">
                <div className="text-4xl mb-6">{challenge.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{challenge.title}</h3>
                <p className="text-gray-600 leading-relaxed">{challenge.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Sistemi koji donose pozive i veće poslove
            </h2>
            <p className="text-xl text-gray-600">
              Implementiramo strategije koje provereno rade za vodoinstalatere, električare, molere, keramičare i firme za grejanje i klimatizaciju.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-lg text-gray-600 mb-8">{service.desc}</p>
                <ul className="space-y-4">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="h-6 w-6 text-blue-600 mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-24 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {metrics.map((metric, index) => (
              <div key={index} className="text-white">
                <div className="text-5xl font-bold mb-4">{metric.num}</div>
                <div className="text-xl font-semibold mb-2">{metric.label}</div>
                <div className="text-blue-100">{metric.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Česta pitanja majstora
            </h2>
            <p className="text-xl text-gray-600">
              Sve što vas zanima o saradnji sa marketing agencijom.
            </p>
          </div>
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Neka vaš telefon ne prestaje da zvoni
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Zakažite besplatne konsultacije. Pregledaćemo vašu trenutnu online vidljivost i napraviti jasan plan kako da dominirate u vašem gradu.
          </p>
          <Link
            to="/kontakt"
            className="inline-flex justify-center items-center px-8 py-4 text-lg font-semibold rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Zakažite besplatan razgovor
          </Link>
        </div>
      </section>
    </div>
  )
}
