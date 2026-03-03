import { motion } from '../components/Motion'

export default function NacinPlacanjaPage() {
  return (
    <section className="pt-[120px] md:pt-[160px] pb-16 md:pb-20 px-4 md:px-8">
      <div className="max-w-[820px] mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-[13px] text-ink-2 uppercase tracking-widest mb-4 block">Legal</span>
          <h1 className="text-[36px] md:text-[48px] font-medium leading-[1.1] tracking-[-1px] text-ink mb-4">
            Način plaćanja
          </h1>
          <p className="text-[15px] text-ink-3 mb-12">Poslednje ažuriranje: 03. mart 2026.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-8"
        >
          <Section title="1. Poslovni model naplate">
            <p>Platinum Zenith posluje po modelu direktnog dogovora sa klijentom (B2B). Ne postoji checkout/kasa stranica sa instant naplatom na sajtu.</p>
            <p>Kupovina/angažovanje usluge realizuje se nakon potvrđenog dogovora kroz email korespondenciju.</p>
          </Section>

          <Section title="2. Dostupan način plaćanja">
            <p><strong>Virmansko plaćanje za pravna lica</strong> je primarni i trenutno jedini način plaćanja.</p>
            <ul>
              <li>Nakon usaglašavanja ponude, klijent dobija podatke za uplatu.</li>
              <li>Uplata se vrši na poslovni račun po izdatoj ponudi/fakturi.</li>
              <li>Realizacija ugovorenog posla počinje po potvrdi prijema uplate, osim ako ugovorom nije drugačije definisano.</li>
            </ul>
          </Section>

          <Section title="3. Fakturisanje">
            <p>Faktura se izdaje nakon sklopljenog dogovora putem email korespondencije, u skladu sa važećim propisima Republike Srbije.</p>
            <p>Dokumentacija (ponuda/faktura) dostavlja se elektronski na email klijenta.</p>
          </Section>

          <Section title="4. Važno ograničenje">
            <p>Plaćanje karticom, pouzećem i druge instant metode trenutno nisu aktivne na sajtu.</p>
          </Section>

          <Section title="5. Podaci poslovnog subjekta">
            <ul>
              <li><strong>Brend:</strong> Platinum Zenith</li>
              <li><strong>Pravni okvir:</strong> Platinum Zenith je ogranak firme PLATINUM TRUFFLES DOO ZRENJANIN</li>
              <li><strong>Email podrška:</strong> aleksandar@platinumzenith.com</li>
              <li><strong>Telefon:</strong> +381 66 816 8929</li>
              <li><strong>Adresa:</strong> Ruže Šulman 19, Zrenjanin, Srbija</li>
            </ul>
          </Section>
        </motion.div>
      </div>
    </section>
  )
}

function Section({ title, children }) {
  return (
    <div>
      <h2 className="text-[20px] md:text-[24px] font-medium text-ink mb-3">{title}</h2>
      <div className="space-y-3 text-[15px] md:text-[16px] text-ink-2 leading-[26px] [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1 [&_li]:text-ink-2">
        {children}
      </div>
    </div>
  )
}
