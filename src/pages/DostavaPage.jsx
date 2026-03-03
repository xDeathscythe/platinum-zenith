import { motion } from '../components/Motion'

export default function DostavaPage() {
  return (
    <section className="pt-[120px] md:pt-[160px] pb-16 md:pb-20 px-4 md:px-8">
      <div className="max-w-[820px] mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-[13px] text-ink-2 uppercase tracking-widest mb-4 block">Legal</span>
          <h1 className="text-[36px] md:text-[48px] font-medium leading-[1.1] tracking-[-1px] text-ink mb-4">
            Dostava
          </h1>
          <p className="text-[15px] text-ink-3 mb-12">Poslednje ažuriranje: 03. mart 2026.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-8"
        >
          <Section title="1. Opšti model isporuke">
            <p>Isporuka i/ili realizacija ugovorenog posla vrši se nakon potvrđenog dogovora putem email korespondencije i u skladu sa izdatom ponudom/fakturom.</p>
            <p>Pošto ne postoji checkout na sajtu, rokovi i način isporuke se potvrđuju individualno za svaku porudžbinu/uslugu.</p>
          </Section>

          <Section title="2. Fizička roba (kada je primenljivo)">
            <ul>
              <li>Roba se šalje kurirskom službom na adresu navedenu u potvrđenom dogovoru.</li>
              <li>Rok slanja i isporuke zavisi od dostupnosti robe i kurirske službe.</li>
              <li>Trošak dostave definiše se u ponudi/fakturi ili posebnom dogovoru.</li>
            </ul>
          </Section>

          <Section title="3. Digitalne usluge i dokumentacija">
            <p>Za digitalne usluge, isporuka se vrši elektronski (email, linkovi, dokumentacija, izveštaji, pristupi) prema dinamici definisanoj u dogovoru sa klijentom.</p>
          </Section>

          <Section title="4. Kašnjenja i više sile">
            <p>U slučaju okolnosti van kontrole prodavca (viša sila, tehnički zastoji, problemi kod partnera), rokovi mogu biti produženi. Kupac će o tome biti blagovremeno obavešten.</p>
          </Section>

          <Section title="5. Neuspešna isporuka / korekcija podataka">
            <p>Ako su podaci za isporuku netačni ili nepotpuni, kupac je dužan da ih ispravi bez odlaganja. Dodatni troškovi ponovne isporuke mogu biti obračunati kada je to primenljivo.</p>
          </Section>

          <Section title="6. Kontakt za isporuku i podršku">
            <ul>
              <li><strong>Pravni okvir:</strong> Platinum Zenith je ogranak firme PLATINUM TRUFFLES DOO ZRENJANIN</li>
              <li>Email: aleksandar@platinumzenith.com</li>
              <li>Telefon: +381 66 816 8929</li>
              <li>Adresa: Ruže Šulman 19, Zrenjanin, Srbija</li>
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
