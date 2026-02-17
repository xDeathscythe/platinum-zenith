import { motion } from 'framer-motion'

/* ─── Mockups za svaku uslugu ───────────────────── */
function MockAds() {
  return (
    <div className="bg-[#1a1a1a] rounded-[11px] p-5 space-y-3">
      {[
        { platform: 'Meta Ads', metric: 'ROAS 4.2x', status: 'Active', spend: '€2,400/mo' },
        { platform: 'Google Ads', metric: 'CPA €12', status: 'Active', spend: '€1,800/mo' },
        { platform: 'TikTok Ads', metric: 'CTR 3.8%', status: 'Scaling', spend: '€900/mo' },
      ].map(a => (
        <div key={a.platform} className="bg-[#232323] rounded-lg px-4 py-3.5 flex items-center justify-between">
          <div><div className="text-[14px] font-medium text-white">{a.platform}</div><div className="text-[12px] text-white/30 mt-0.5">{a.spend}</div></div>
          <div className="flex items-center gap-3"><span className="text-[13px] text-emerald-400 font-medium">{a.metric}</span><span className="text-[11px] text-emerald-400/70 bg-emerald-400/10 px-2 py-0.5 rounded-full">{a.status}</span></div>
        </div>
      ))}
    </div>
  )
}

function MockWebsite() {
  return (
    <div className="bg-[#1a1a1a] rounded-[11px] overflow-hidden">
      <div className="flex items-center gap-1.5 px-4 pt-4 pb-3"><div className="w-3 h-3 rounded-full bg-[#ff5f57]" /><div className="w-3 h-3 rounded-full bg-[#ffbd2e]" /><div className="w-3 h-3 rounded-full bg-[#28ca42]" /></div>
      <div className="px-5 pb-5">
        <div className="bg-[#232323] rounded-lg p-4 mb-3">
          <div className="h-3 bg-white/10 rounded w-2/3 mb-2" /><div className="h-3 bg-white/5 rounded w-full mb-2" /><div className="h-3 bg-white/5 rounded w-4/5" />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-gradient-to-br from-teal-500/20 to-blue-500/20 rounded-lg p-3 text-center"><div className="text-[20px] text-white font-bold">+340%</div><div className="text-[11px] text-white/40">Konverzije</div></div>
          <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg p-3 text-center"><div className="text-[20px] text-white font-bold">2.1s</div><div className="text-[11px] text-white/40">Load time</div></div>
        </div>
      </div>
    </div>
  )
}

function MockConsulting() {
  return (
    <div className="bg-[#1a1a1a] rounded-[11px] p-5 space-y-3">
      {['Pozicioniranje na tržištu', 'Prodajni proces', 'Lansiranje proizvoda', 'Kreiranje marketing tima'].map(s => (
        <div key={s} className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-emerald-400" />
          <span className="text-[13px] text-white/70">{s}</span>
          <span className="ml-auto text-[11px] text-emerald-400/60 bg-emerald-400/10 px-2 py-0.5 rounded-full">Audit ✓</span>
        </div>
      ))}
      <div className="mt-3 pt-3 border-t border-white/[0.06] text-center"><span className="text-[13px] text-white/40">Biznis skor: </span><span className="text-[16px] text-emerald-400 font-bold">87/100</span></div>
    </div>
  )
}

function MockCRO() {
  return (
    <div className="bg-[#1a1a1a] rounded-[11px] p-5">
      <div className="text-[14px] font-medium text-white mb-3">Conversion Rate Optimization</div>
      <div className="space-y-2">
        <div className="flex items-center justify-between"><span className="text-[12px] text-white/40">Pre optimizacije</span><span className="text-[14px] text-red-400">1.2%</span></div>
        <div className="w-full bg-[#232323] rounded-full h-2"><div className="bg-red-400/60 h-2 rounded-full" style={{width:'12%'}} /></div>
        <div className="flex items-center justify-between mt-3"><span className="text-[12px] text-white/40">Posle optimizacije</span><span className="text-[14px] text-emerald-400">4.8%</span></div>
        <div className="w-full bg-[#232323] rounded-full h-2"><div className="bg-emerald-400 h-2 rounded-full" style={{width:'48%'}} /></div>
      </div>
      <div className="mt-3 pt-3 border-t border-white/[0.06] text-center text-[12px] text-emerald-400">+300% poboljšanje</div>
    </div>
  )
}

function MockSocial() {
  return (
    <div className="bg-[#1a1a1a] rounded-[11px] p-5 space-y-3">
      {[
        { name: 'Instagram', followers: '24.5K', growth: '+12%', color: 'bg-gradient-to-r from-purple-500 to-pink-500' },
        { name: 'Facebook', followers: '18.2K', growth: '+8%', color: 'bg-blue-500' },
        { name: 'TikTok', followers: '31.7K', growth: '+45%', color: 'bg-black border border-white/10' },
      ].map(s => (
        <div key={s.name} className="bg-[#232323] rounded-lg px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3"><div className={`w-8 h-8 rounded-lg ${s.color} flex items-center justify-center`}><span className="text-[10px] text-white font-bold">{s.name[0]}</span></div><div><div className="text-[13px] text-white font-medium">{s.name}</div><div className="text-[11px] text-white/30">{s.followers} pratilaca</div></div></div>
          <span className="text-[12px] text-emerald-400 font-medium">{s.growth}</span>
        </div>
      ))}
    </div>
  )
}

const features = [
  { title: 'Digitalni Marketing i Oglašavanje', text: 'Kampanje koje prodaju kroz automatski sistem akvizicije. Razvili smo dokazan i predvidljiv način da visoko-kvalifikovani prospekti dođu u vaš biznis — Zenith sistem koji dramatično povećava broj klijenata spremnih da kupe.', mockup: 'ads', layout: 'text-left' },
  { title: 'Website Design i Izrada', text: 'Svake sekunde na Googlu se obavi oko 40.000 pretraga. Pravimo sajtove koji pretvaraju posetioce u klijente — lepo obučen, super moćan prodavac koji radi 24/7 i prodaje vaše proizvode dok vi spavate.', mockup: 'website', layout: 'text-right' },
  { title: 'Poslovno Savetovanje', text: 'Partner koji vas razume. Sa svakim klijentom vršimo reviziju ukupnog poslovanja i tražimo kočnice u biznisu. Pozicioniranje na tržištu, prodajni proces, brending, lansiranje novih proizvoda i još puno toga.', mockup: 'consulting', layout: 'text-left' },
  { title: 'CRO Optimizacija', text: 'Optimizacija stope konverzije — koliko posetilaca se zapravo pretvori u klijente. Čak i ako platite Googlu da vas prikazuje prve, bez CRO nećete dobiti klijente koje tražite. Mi to menjamo.', mockup: 'cro', layout: 'text-right' },
  { title: 'Društvene Mreže', text: 'Izgradite prisustvo na društvenim mrežama koje privlači pažnju i gradi poverenje. Od strategije do egzekucije — kreiramo sadržaj koji vaša publika želi da vidi i deli.', mockup: 'social', layout: 'text-left' },
]

const mockups = { ads: MockAds, website: MockWebsite, consulting: MockConsulting, cro: MockCRO, social: MockSocial }

function LogoBar() {
  return (
    <div className="flex items-center justify-around py-6 opacity-50 flex-wrap gap-y-3 gap-x-6">
      {['Super Food', 'In Motion', 'Invision', 'Abstract', 'Liko Studio', 'Creative Studio'].map(l => (
        <span key={l} className="text-[12px] md:text-[14px] font-medium text-white tracking-tight">{l}</span>
      ))}
    </div>
  )
}

export default function Features() {
  return (
    <section className="py-16 md:py-28 px-4 md:px-8 lg:px-16 bg-black">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-6"><span className="text-[13px] text-white/30 uppercase tracking-widest">Klijenti sa kojima gradimo</span></div>
        <LogoBar />

        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-[32px] md:text-[48px] font-medium leading-[1.15] md:leading-[55.68px] tracking-[-1px] md:tracking-[-1.44px] text-white text-center mt-12 md:mt-20 mb-6"
        >
          Privucite pažnju. Generišite prodaju.
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="text-[15px] md:text-[17px] text-white/50 text-center mb-14 md:mb-24 max-w-[600px] mx-auto px-2"
        >
          Kroz alate digitalnog marketinga, brending i konsalting pomažemo preduzećima da ostvare brz rast.
        </motion.p>

        <div className="space-y-16 md:space-y-28">
          {features.map((f) => {
            const Mockup = mockups[f.mockup]
            const isLeft = f.layout === 'text-left'
            return (
              <motion.div key={f.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6 }}
                className={`grid grid-cols-1 gap-8 md:gap-16 items-center ${isLeft ? 'lg:grid-cols-[30fr_70fr]' : 'lg:grid-cols-[70fr_30fr]'}`}
              >
                {/* On mobile: always text first, mockup second */}
                <div className={`py-2 md:py-8 ${!isLeft ? 'lg:order-2' : ''}`}>
                  <h3 className="text-[24px] md:text-[30px] font-medium leading-[1.3] tracking-[-0.3px] text-white mb-4 md:mb-5">{f.title}</h3>
                  <p className="text-[15px] md:text-[17px] font-normal leading-[26px] md:leading-[28px] tracking-[-0.17px] text-white/70">{f.text}</p>
                </div>
                <div className={`w-full ${!isLeft ? 'lg:order-1' : ''}`}><Mockup /></div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
