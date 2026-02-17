import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <section className="pt-[200px] pb-40 px-8 text-center">
      <div className="text-[80px] font-bold text-white/10 mb-4">404</div>
      <h1 className="text-[36px] font-medium text-white mb-4">Stranica nije pronađena</h1>
      <p className="text-[17px] text-white/45 mb-8 max-w-[400px] mx-auto">Izgleda da ste zalutali. Ova stranica ne postoji ili je premeštena.</p>
      <Link to="/" className="inline-flex items-center gap-2 bg-white text-black text-[14px] font-medium h-10 px-5 rounded-[40px]">
        ← Nazad na početnu
      </Link>
    </section>
  )
}
