import { Link, useLocation } from 'react-router-dom'
import { services } from '../data/services'

export default function ServicePage() {
  const { pathname } = useLocation()
  const service = services[pathname]
  return <main className="max-w-[1100px] mx-auto px-5 md:px-12 pt-32 pb-20">
    <nav aria-label="Putanja" className="text-sm text-ink-2 mb-8"><Link to="/">Početna</Link> / <Link to="/digitalni-marketing">Digitalni marketing</Link> / {service.name}</nav>
    <h1 className="text-4xl md:text-6xl font-semibold tracking-tight max-w-3xl">{service.name}</h1>
    <p className="text-lg md:text-xl leading-relaxed text-ink-2 mt-7 max-w-3xl">{service.intro}</p>
    <Link className="inline-flex rounded-full bg-inv-bg text-inv-fg px-6 py-3 mt-7" to="/kontakt">Razgovarajmo o vašem biznisu</Link>
    <div className="grid md:grid-cols-2 gap-x-14 gap-y-12 mt-20">
      {service.sections.map(([title, body]) => <section key={title}><h2 className="text-2xl font-semibold mb-4">{title}</h2><p className="text-ink-2 leading-relaxed">{body}</p></section>)}
    </div>
    <section className="mt-16 border-t border-edge pt-10">
      <h2 className="text-2xl font-semibold mb-6">Pre nego što počnemo</h2>
      {service.questions.map(([question, answer]) => <details key={question} className="border-b border-edge py-5"><summary className="font-medium cursor-pointer">{question}</summary><p className="text-ink-2 leading-relaxed mt-3">{answer}</p></details>)}
      <Link className="inline-block underline mt-7" to={service.pricePath}>{service.priceLabel}</Link>
    </section>
    <section className="mt-16 rounded-2xl bg-tint border border-edge p-7 md:p-10">
      <h2 className="text-2xl font-semibold">Primenite plan na svoju firmu</h2>
      <p className="mt-4 text-ink-2 leading-relaxed">Pošaljite nam sajt, opis ponude i cilj koji želite da postignete. Na osnovu toga možemo da razgovaramo o prioritetima, obimu posla i sledećem koraku.</p>
      <div className="flex flex-wrap gap-5 mt-6"><Link className="underline" to="/kontakt">Pošaljite upit</Link><Link className="underline" to="/case-studies">Projekti i studije slučaja</Link><Link className="underline" to="/marketing-za-frizerske-salone">Marketing za frizerske salone</Link></div>
    </section>
    <nav aria-label="Povezane usluge" className="flex flex-wrap gap-5 mt-10">{Object.entries(services).filter(([path]) => path !== pathname).map(([path, item]) => <Link className="underline text-sm" key={path} to={path}>{item.name}</Link>)}</nav>
  </main>
}
