import { motion } from 'framer-motion'

export default function TermsPage() {
  return (
    <section className="pt-[120px] md:pt-[160px] pb-16 md:pb-20 px-4 md:px-8">
      <div className="max-w-[780px] mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-[13px] text-ink-2 uppercase tracking-widest mb-4 block">Legal</span>
          <h1 className="text-[36px] md:text-[48px] font-medium leading-[1.1] tracking-[-1px] text-ink mb-4">
            Uslovi korišćenja
          </h1>
          <p className="text-[15px] text-ink-3 mb-12">Poslednje ažuriranje: 18. februar 2026.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="prose-custom space-y-8"
        >
          <Section title="1. Opšte odredbe">
            <p>Ovi Uslovi korišćenja regulišu odnos između Platinum Zenith Agency d.o.o. Zrenjanin (u daljem tekstu: "Agencija") i klijenta (u daljem tekstu: "Klijent") koji koristi usluge Agencije.</p>
            <p>Korišćenjem naših usluga ili pristupanjem ovom sajtu, prihvatate ove uslove u celosti. Ako se ne slažete sa bilo kojim delom, molimo vas da ne koristite naše usluge.</p>
          </Section>

          <Section title="2. Opis usluga">
            <p>Agencija pruža usluge digitalnog marketinga, uključujući ali ne ograničavajući se na:</p>
            <ul>
              <li>Upravljanje reklamnim kampanjama (Meta Ads, Google Ads, TikTok Ads)</li>
              <li>Izrada i održavanje web sajtova</li>
              <li>Optimizacija konverzija (CRO)</li>
              <li>Poslovno savetovanje i marketing strategija</li>
              <li>Upravljanje društvenim mrežama</li>
              <li>SEO optimizacija</li>
            </ul>
            <p>Tačan obim usluga definiše se pojedinačnim ugovorom ili ponudom za svakog klijenta.</p>
          </Section>

          <Section title="3. Obaveze klijenta">
            <p>Klijent se obavezuje da:</p>
            <ul>
              <li>Pruži tačne i potpune informacije neophodne za pružanje usluga</li>
              <li>Obezbedi pristup nalozima i platformama neophodnim za realizaciju usluga</li>
              <li>Blagovremeno dostavi materijale (logotipe, fotografije, tekstove) potrebne za kampanje</li>
              <li>Izvrši plaćanja u skladu sa dogovorenim rokovima</li>
              <li>Poštuje važeće zakone i propise prilikom korišćenja naših usluga</li>
            </ul>
          </Section>

          <Section title="4. Obaveze agencije">
            <p>Agencija se obavezuje da:</p>
            <ul>
              <li>Pruži usluge profesionalno, u skladu sa najboljim praksama industrije</li>
              <li>Redovno izveštava klijenta o rezultatima kampanja</li>
              <li>Čuva poverljivost svih informacija dobijenih od klijenta</li>
              <li>Poštuje dogovorene rokove</li>
              <li>Transparentno komunicira o svim relevantnim promenama</li>
            </ul>
          </Section>

          <Section title="5. Cene i plaćanje">
            <p>Cene usluga definisane su važećim cenovnikom ili pojedinačnom ponudom. Sva plaćanja vrše se u skladu sa dogovorenim uslovima. U slučaju kašnjenja sa plaćanjem, Agencija zadržava pravo da obustavi pružanje usluga do izmirenja obaveza.</p>
            <p>Budžeti za reklamne platforme (Meta, Google, TikTok) su odvojeni od honorara Agencije i plaćaju se direktno platformama ili kroz Agenciju prema dogovoru.</p>
          </Section>

          <Section title="6. Intelektualna svojina">
            <p>Svi materijali kreirani od strane Agencije (dizajni, tekstovi, strategije, kreativni materijali) ostaju vlasništvo Agencije do potpunog izmirenja obaveza klijenta. Nakon plaćanja, klijent dobija licencu za korišćenje materijala u komercijalne svrhe.</p>
            <p>Agencija zadržava pravo da koristi realizovane projekte u svom portfoliju, osim ako nije drugačije dogovoreno.</p>
          </Section>

          <Section title="7. Garancija rezultata">
            <p>Agencija se obavezuje da uloži maksimalne napore za postizanje dogovorenih ciljeva. Rezultati digitalnog marketinga zavise od brojnih faktora van kontrole Agencije (tržišni uslovi, konkurencija, promene algoritama platformi).</p>
            <p>Specifične garancije rezultata definišu se isključivo kroz pojedinačne ugovore.</p>
          </Section>

          <Section title="8. Raskid ugovora">
            <p>Svaka strana može raskinuti saradnju uz pisano obaveštenje od 30 dana. U slučaju raskida:</p>
            <ul>
              <li>Klijent je dužan da plati sve izvršene usluge do datuma raskida</li>
              <li>Agencija će predati sve pristupe i materijale koji pripadaju klijentu</li>
              <li>Aktivne reklamne kampanje biće zaustavljene u dogovorenom roku</li>
            </ul>
          </Section>

          <Section title="9. Ograničenje odgovornosti">
            <p>Agencija nije odgovorna za indirektne, posledične ili specijalne štete nastale korišćenjem usluga. Ukupna odgovornost Agencije ograničena je na iznos plaćen za usluge u poslednjih 12 meseci.</p>
            <p>Agencija nije odgovorna za promene politika reklamnih platformi, njihove tehničke probleme ili promene algoritama koje mogu uticati na rezultate kampanja.</p>
          </Section>

          <Section title="10. Poverljivost">
            <p>Obe strane se obavezuju da čuvaju poverljivost svih poslovnih informacija dobijenih tokom saradnje. Ova obaveza ostaje na snazi i nakon prestanka saradnje.</p>
          </Section>

          <Section title="11. Izmene uslova">
            <p>Agencija zadržava pravo izmene ovih uslova. O svim promenama klijenti će biti obavešteni putem emaila ili obaveštenja na sajtu najmanje 15 dana pre stupanja na snagu.</p>
          </Section>

          <Section title="12. Merodavno pravo">
            <p>Na ove uslove primenjuje se pravo Republike Srbije. Za sve sporove nadležan je sud u Zrenjaninu.</p>
          </Section>

          <Section title="13. Kontakt">
            <p>Za sva pitanja u vezi sa ovim uslovima, kontaktirajte nas:</p>
            <ul>
              <li>Email: aleksandar@platinumzenith.com</li>
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
      <div className="space-y-3 text-[15px] md:text-[16px] text-ink-2 leading-[26px] [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1 [&_li]:text-ink-2">{children}</div>
    </div>
  )
}
