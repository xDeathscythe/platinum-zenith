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
          <Section title="1. Područje isporuke">
            <p>Isporuka se vrši na teritoriji Republike Srbije putem partnerskih kurirskih službi.</p>
            <p>Za adrese van standardnih zona isporuke ili posebne slučajeve, kupac dobija potvrdu dostupnosti pre slanja robe.</p>
          </Section>

          <Section title="2. Rok obrade i slanja porudžbine">
            <ul>
              <li>Porudžbine potvrđene radnim danom obrađuju se u najkraćem roku, u pravilu u roku od 1 radnog dana.</li>
              <li>Porudžbine kreirane vikendom i praznicima obrađuju se prvog narednog radnog dana.</li>
              <li>U periodima povećanog obima (akcije, praznici) obrada može trajati duže, o čemu kupca obaveštavamo.</li>
            </ul>
          </Section>

          <Section title="3. Rok dostave">
            <p>Uobičajen rok dostave nakon predaje kuriru je 1 do 5 radnih dana, u zavisnosti od lokacije.</p>
            <p>Na rok dostave mogu uticati okolnosti van kontrole prodavca i kurirske službe (vremenske nepogode, vanredne situacije, tehnički zastoji).</p>
          </Section>

          <Section title="4. Trošak dostave">
            <p>Trošak dostave se prikazuje transparentno u korpi i na checkout stranici pre potvrde porudžbine.</p>
            <p>Ako je aktivna akcija besplatne dostave (npr. iznad određenog iznosa), uslov i prag su jasno prikazani kupcu pre kupovine.</p>
          </Section>

          <Section title="5. Praćenje pošiljke">
            <p>Nakon slanja robe kupac može dobiti broj pošiljke i informacije za praćenje, kada je ta opcija podržana od strane kurirske službe.</p>
          </Section>

          <Section title="6. Neuspešna isporuka i ponovno slanje">
            <p>Ako kurir ne uspe da uruči pošiljku (netačna adresa, kupac nedostupan, odbijeno preuzimanje), pošiljka može biti vraćena pošiljaocu.</p>
            <p>U tom slučaju, novo slanje je moguće nakon potvrde podataka i eventualne dodatne naplate troškova dostave.</p>
          </Section>

          <Section title="7. Oštećenje pošiljke">
            <p>Molimo kupca da po prijemu pregleda paket. Ako su vidljiva oštećenja, preporuka je da se paket ne preuzima bez zapisnika kurira ili da se odmah prijavi šteta.</p>
            <p>Prijavu pošaljite na aleksandar@platinumzenith.com uz fotografije paketa i sadržaja.</p>
          </Section>

          <Section title="8. Kontakt za dostavu">
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
      <div className="space-y-3 text-[15px] md:text-[16px] text-ink-2 leading-[26px] [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1 [&_li]:text-ink-2">
        {children}
      </div>
    </div>
  )
}
