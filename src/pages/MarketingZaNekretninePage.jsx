import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta'

const challenges = [
  { icon: '🏠', title: 'Kupci pretražuju online', desc: '"Stanovi na prodaju" i "izdavanje stanova" imaju ogromne mesečne pretrage. Ako vaša agencija nije vidljiva, kupci zovu konkurenciju.' },
  { icon: '📸', title: 'Vizuelni utisak prodaje', desc: 'Ljudi prvo kupuju očima. Loše slike i neprofesionalna prezentacija na društvenim mrežama direktno ubijaju šansu za obilazak nekretnine.' },
  { icon: '⭐', title: 'Poverenje i recenzije', desc: 'Kupovina nekretnine je najveća životna investicija za većinu ljudi. Oni žele agenciju i agenta sa besprekornom reputacijom.' },
  { icon: '🎯', title: 'Dvosmerno tržište', desc: 'Ne trebaju vam samo kupci – trebaju vam i prodavci (listing). Marketing mora paralelno da privlači ljude koji prodaju i one koji kupuju.' },
  { icon: '💰', title: 'Visoka vrednost leada', desc: 'Provizija od jedne prodaje iznosi hiljade evra. Investicija u kvalitetan marketing se višestruko vraća samo jednom uspešnom transakcijom.' },
  { icon: '🏢', title: 'Agresivna lokalna konkurencija', desc: 'Svaki grad ima desetine agencija za nekretnine. Da biste se izdvojili, morate izgledati kao lider na tržištu, a ne kao još jedan portal.' },
]

const services = [
  {
    title: 'Google Ads i Lokalni SEO',
    desc: 'Kada neko ukuca "agencija za nekretnine + vaš grad" ili traži stanove, morate biti na vrhu pretrage.',
    items: ['Google Ads Search kampanje za kupce sa visokim intentom', 'Google Business profil optimizacija za lokalne pretrage', 'Strategija prikupljanja recenzija od zadovoljnih klijenata', 'SEO optimizacija sajta za specifične lokacije i tipove nekretnina'],
  },
  {
    title: 'Sajt koji generiše upite',
    desc: 'Vaš sajt ne sme biti samo online vizitkarta. Mora biti platforma koja lako prikazuje ponudu i konvertuje posete u pozive.',
    items: ['Brz i mobilno optimizovan prikaz nekretnina', 'Napredna pretraga i filtriranje oglasa', 'Isticanje profila i biografija vaših agenata', 'Integracija sa CRM sistemima za praćenje upita'],
  },
  {
    title: 'Meta Ads (Facebook & Instagram)',
    desc: 'Vizuelne platforme su savršene za nekretnine. Retargetujemo ljude koji razmišljaju o kupovini ili prodaji.',
    items: ['Kampanje za ekskluzivne nekretnine (video ture i fotografije)', 'Lead generation kampanje za prikupljanje kontakata prodavaca', 'Retargeting posetilaca vašeg sajta', 'Brending kampanje za podizanje svesti u lokalnoj zajednici'],
  },
  {
    title: 'Brendiranje i Sadržaj',
    desc: 'Edukacija tržišta je najbolji način da se pozicionirate kao ekspert kojem se veruje.',
    items: ['Vodiči za kupovinu i prodaju nekretnina (Lead magneti)', 'Edukativni video sadržaj o cenama kvadrata i trendovima', 'Profesionalno vođenje društvenih mreža (Instagram, TikTok)', 'Email newsletter sa najnovijim ponudama i savetima'],
  },
]

export default function MarketingZaNekretninePage() {
  usePageMeta()

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container-custom">
        <Link to="/" className="inline-flex items-center text-ink-3 hover:text-ink transition-colors mb-8 group">
          <svg className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Nazad na početnu
        </Link>

        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-20 hero-enter">
          <div className="inline-block px-4 py-1.5 rounded-full border border-edge bg-panel text-sm font-medium mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 text-transparent bg-clip-text">Marketing za agencije za nekretnine</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Više prodavaca. Više kupaca. <span className="text-ink-3">Veće provizije.</span>
          </h1>
          <p className="text-xl text-ink-2 max-w-2xl mx-auto leading-relaxed mb-10">
            Specijalizovani digitalni marketing za agencije za nekretnine u Srbiji. Pomažemo vam da dominirate lokalnim tržištem, privučete kvalitetne kupce i osigurate ekskluzivne listinge.
          </p>
          <Link to="/kontakt" className="btn-primary text-lg px-8 py-4">
            Besplatna konsultacija
          </Link>
        </div>

        {/* Challenges Section */}
        <div className="max-w-5xl mx-auto mb-24 hero-enter-d1">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Zašto je marketing za nekretnine drugačiji?</h2>
            <p className="text-ink-2">Tržište nekretnina zahteva poverenje, profesionalizam i ogromnu vidljivost.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map((item, idx) => (
              <div key={idx} className="bg-panel rounded-2xl border border-edge p-6 hover:border-indigo-500/30 transition-colors">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-ink-2 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Services Section */}
        <div className="max-w-4xl mx-auto mb-24 hero-enter-d2">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Kako donosimo rezultate vašoj agenciji</h2>
            <p className="text-ink-2">Kompletan sistem za generisanje upita i pozicioniranje brenda.</p>
          </div>
          <div className="space-y-6">
            {services.map((service, idx) => (
              <div key={idx} className="bg-panel rounded-2xl border border-edge p-8 hover:border-indigo-500/30 transition-colors">
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-ink-2 mb-6">{service.desc}</p>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start text-ink-2">
                      <svg className="w-5 h-5 text-indigo-400 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-indigo-900/20 to-blue-900/20 border border-indigo-500/20 rounded-3xl p-10 md:p-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Spremni za više zatvorenih prodaja?</h2>
          <p className="text-xl text-ink-2 mb-10 max-w-2xl mx-auto">
            Zakazivanje besplatne konsultacije je prvi korak. Analiziraćemo vašu trenutnu poziciju na tržištu nekretnina i predložiti plan za dominaciju u vašem gradu.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/kontakt" className="btn-primary text-lg px-8 py-4">
              Zakažite poziv
            </Link>
            <Link to="/cene-digitalnog-marketinga" className="bg-panel border border-edge hover:bg-edge/50 text-ink text-lg font-medium px-8 py-4 rounded-full transition-all text-center">
              Pogledajte cene
            </Link>
          </div>
        </div>

        {/* Internal Linking / Cross-linking */}
        <div className="max-w-4xl mx-auto mt-20 pt-10 border-t border-edge text-sm text-ink-3">
          <p className="mb-2">Srodne usluge i teme koje vas mogu zanimati:</p>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            <Link to="/google-reklame-cena" className="text-ink-3 hover:text-ink transition-colors">Google reklame cena</Link>
            <Link to="/instagram-reklame-cena" className="text-ink-3 hover:text-ink transition-colors">Instagram reklame cena</Link>
            <Link to="/izrada-wordpress-sajta-cena" className="text-ink-3 hover:text-ink transition-colors">Izrada sajta za nekretnine cena</Link>
              <Link to="/blog/google-ads-za-agencije-za-nekretnine-cena-leada-srbija-2026" className="text-ink-3 hover:text-ink transition-colors">Google Ads za agencije za nekretnine →</Link>
          </div>
        </div>
      </div>
    </main>
  )
}
