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
          <Section title="1. Opšte informacije">
            <p>Dostupni načini plaćanja zavise od proizvoda, adrese isporuke i tehničke dostupnosti payment sistema u trenutku kupovine.</p>
            <p>Na checkout strani kupcu su prikazane samo opcije koje su u tom trenutku aktivne za konkretnu porudžbinu.</p>
          </Section>

          <Section title="2. Dostupne metode plaćanja">
            <h3>2.1 Plaćanje pouzećem</h3>
            <p>Plaćanje gotovinom kuriru prilikom preuzimanja pošiljke (kada je ova opcija dostupna).</p>

            <h3>2.2 Online plaćanje karticom</h3>
            <p>Prihvatamo kartice platnih sistema koji su prikazani na checkout stranici. Transakcija se obrađuje preko bezbednog payment procesora.</p>

            <h3>2.3 Uplata na račun (virman/predračun)</h3>
            <p>Za pravna lica i određene porudžbine može biti dostupno plaćanje po predračunu. Podaci za uplatu šalju se nakon potvrde narudžbine.</p>
          </Section>

          <Section title="3. Fiskalni račun i dokumentacija">
            <p>Uz svaku uspešno realizovanu porudžbinu kupac dobija račun u skladu sa važećim propisima Republike Srbije.</p>
            <p>Račun se dostavlja uz pošiljku i/ili elektronski, u zavisnosti od procesa obrade porudžbine.</p>
          </Section>

          <Section title="4. Sigurnost plaćanja">
            <p>Podaci o kartici se ne čuvaju na našem sajtu. Online naplata se vrši kroz zaštićene kanale payment provajdera uz enkripciju i bezbednosne standarde industrije.</p>
          </Section>

          <Section title="5. Neuspešna ili odbijena transakcija">
            <p>U slučaju neuspešne transakcije, porudžbina neće biti potvrđena dok uplata ne bude uspešno evidentirana.</p>
            <ul>
              <li>Proverite raspoloživa sredstva i tačnost unetih podataka.</li>
              <li>Pokušajte ponovo ili izaberite drugi način plaćanja.</li>
              <li>Za pomoć nas kontaktirajte na aleksandar@platinumzenith.com.</li>
            </ul>
          </Section>

          <Section title="6. Povraćaj sredstava">
            <p>Kada je povraćaj opravdan (odustanak, otkazana porudžbina, prihvaćena reklamacija), povraćaj se vrši istim načinom plaćanja, osim ako se kupac i prodavac ne dogovore drugačije.</p>
            <p>Rok povraćaja je u skladu sa Zakonom o zaštiti potrošača i internim procedurama obrade.</p>
          </Section>

          <Section title="7. Kontakt">
            <ul>
              <li>Email: aleksandar@platinumzenith.com</li>
              <li>Telefon: +381 66 816 8929</li>
              <li>Adresa: Ruže Šulman 19, Zrenjanin</li>
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
      <div className="space-y-3 text-[15px] md:text-[16px] text-ink-2 leading-[26px] [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1 [&_li]:text-ink-2 [&_h3]:text-[16px] [&_h3]:font-medium [&_h3]:text-ink [&_h3]:mt-4 [&_h3]:mb-2">
        {children}
      </div>
    </div>
  )
}
