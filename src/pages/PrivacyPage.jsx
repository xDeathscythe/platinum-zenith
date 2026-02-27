import { motion } from 'framer-motion'

export default function PrivacyPage() {
  return (
    <section className="pt-[120px] md:pt-[160px] pb-16 md:pb-20 px-4 md:px-8">
      <div className="max-w-[780px] mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-[13px] text-ink-2 uppercase tracking-widest mb-4 block">Legal</span>
          <h1 className="text-[36px] md:text-[48px] font-medium leading-[1.1] tracking-[-1px] text-ink mb-4">
            Politika privatnosti
          </h1>
          <p className="text-[15px] text-ink-3 mb-12">Poslednje ažuriranje: 18. februar 2026.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-8"
        >
          <Section title="1. Uvod">
            <p>Platinum Zenith Agency d.o.o. Zrenjanin (u daljem tekstu: "mi", "nas" ili "Agencija") posvećena je zaštiti vaše privatnosti. Ova Politika privatnosti objašnjava kako prikupljamo, koristimo, čuvamo i štitimo vaše lične podatke u skladu sa Zakonom o zaštiti podataka o ličnosti Republike Srbije i GDPR regulativom.</p>
          </Section>

          <Section title="2. Podaci koje prikupljamo">
            <p>Prikupljamo sledeće kategorije podataka:</p>
            <h3>2.1 Podaci koje nam direktno pružate</h3>
            <ul>
              <li>Ime i prezime</li>
              <li>Email adresa</li>
              <li>Broj telefona</li>
              <li>Naziv kompanije</li>
              <li>Poruke poslate putem kontakt forme</li>
            </ul>
            <h3>2.2 Podaci koji se automatski prikupljaju</h3>
            <ul>
              <li>IP adresa</li>
              <li>Tip pretraživača i uređaja</li>
              <li>Stranice koje posećujete na našem sajtu</li>
              <li>Vreme i trajanje posete</li>
              <li>Referalni izvor (kako ste došli na sajt)</li>
            </ul>
            <h3>2.3 Podaci putem zakazivanja</h3>
            <ul>
              <li>Odabrani termin konsultacije</li>
              <li>Email adresa za potvrdu termina</li>
              <li>Napomene koje unesete pri zakazivanju</li>
            </ul>
          </Section>

          <Section title="3. Svrha obrade podataka">
            <p>Vaše podatke koristimo za:</p>
            <ul>
              <li>Pružanje ugovorenih usluga i komunikaciju u vezi sa projektima</li>
              <li>Odgovaranje na upite putem kontakt forme</li>
              <li>Zakazivanje i upravljanje konsultacijama</li>
              <li>Slanje relevantnih informacija o našim uslugama (samo uz vašu saglasnost)</li>
              <li>Poboljšanje korisničkog iskustva na našem sajtu</li>
              <li>Ispunjavanje zakonskih obaveza</li>
            </ul>
          </Section>

          <Section title="4. Pravni osnov obrade">
            <p>Vaše podatke obrađujemo na osnovu:</p>
            <ul>
              <li><strong>Saglasnosti</strong> — za marketing komunikacije i kolačiće</li>
              <li><strong>Izvršenja ugovora</strong> — za pružanje ugovorenih usluga</li>
              <li><strong>Legitimnog interesa</strong> — za analitiku sajta i poboljšanje usluga</li>
              <li><strong>Zakonske obaveze</strong> — za čuvanje poslovne dokumentacije</li>
            </ul>
          </Section>

          <Section title="5. Deljenje podataka">
            <p>Vaše podatke ne prodajemo niti iznajmljujemo trećim licima. Podatke možemo deliti sa:</p>
            <ul>
              <li><strong>Pružaocima usluga</strong> — hosting provajderi, email servisi, platforme za zakazivanje (Cal.com), analitički alati</li>
              <li><strong>Reklamnim platformama</strong> — Meta, Google, TikTok (u okviru upravljanja kampanjama za klijente)</li>
              <li><strong>Pravnim organima</strong> — kada je to zakonom propisano</li>
            </ul>
            <p>Svi naši partneri su obavezni da poštuju standarde zaštite podataka.</p>
          </Section>

          <Section title="6. Kolačići (Cookies)">
            <p>Naš sajt koristi kolačiće za poboljšanje korisničkog iskustva:</p>
            <h3>6.1 Neophodni kolačići</h3>
            <p>Omogućavaju osnovno funkcionisanje sajta. Ne mogu se isključiti.</p>
            <h3>6.2 Analitički kolačići</h3>
            <p>Pomažu nam da razumemo kako koristite sajt (broj poseta, popularne stranice). Možete ih odbiti bez uticaja na funkcionalnost sajta.</p>
            <h3>6.3 Marketing kolačići</h3>
            <p>Koriste se za prikazivanje relevantnih reklama. Aktiviraju se samo uz vašu saglasnost.</p>
            <p>Postavke kolačića možete promeniti u bilo kom trenutku putem podešavanja vašeg pretraživača.</p>
          </Section>

          <Section title="7. Čuvanje podataka">
            <p>Vaše podatke čuvamo samo onoliko dugo koliko je neophodno:</p>
            <ul>
              <li><strong>Podaci klijenata</strong> — tokom trajanja saradnje + 5 godina (zakonska obaveza)</li>
              <li><strong>Kontakt forme</strong> — 12 meseci od prijema</li>
              <li><strong>Analitički podaci</strong> — 26 meseci</li>
              <li><strong>Marketing saglasnosti</strong> — do povlačenja saglasnosti</li>
            </ul>
          </Section>

          <Section title="8. Vaša prava">
            <p>U skladu sa Zakonom o zaštiti podataka o ličnosti, imate pravo na:</p>
            <ul>
              <li><strong>Pristup</strong> — uvid u podatke koje čuvamo o vama</li>
              <li><strong>Ispravku</strong> — ažuriranje netačnih podataka</li>
              <li><strong>Brisanje</strong> — zahtev za brisanje vaših podataka</li>
              <li><strong>Ograničenje obrade</strong> — privremeno zaustavljanje obrade</li>
              <li><strong>Prenosivost</strong> — dobijanje podataka u strukturiranom formatu</li>
              <li><strong>Prigovor</strong> — prigovor na obradu zasnovanu na legitimnom interesu</li>
              <li><strong>Povlačenje saglasnosti</strong> — u bilo kom trenutku, bez uticaja na zakonitost prethodne obrade</li>
            </ul>
            <p>Za ostvarivanje bilo kog od ovih prava, kontaktirajte nas na: aleksandar@platinumzenith.com</p>
          </Section>

          <Section title="9. Bezbednost podataka">
            <p>Primenjujemo odgovarajuće tehničke i organizacione mere zaštite podataka, uključujući:</p>
            <ul>
              <li>SSL/TLS enkripcija za sve komunikacije</li>
              <li>Ograničen pristup podacima samo ovlašćenim licima</li>
              <li>Redovno ažuriranje softvera i sigurnosnih sistema</li>
              <li>Bezbedne metode čuvanja i prenosa podataka</li>
            </ul>
          </Section>

          <Section title="10. Međunarodni prenos podataka">
            <p>Neki od naših pružalaca usluga mogu biti locirani van Srbije i EU. U takvim slučajevima obezbeđujemo odgovarajući nivo zaštite podataka u skladu sa važećim propisima (standardne ugovorne klauzule ili odluke o adekvatnosti).</p>
          </Section>

          <Section title="11. Izmene politike">
            <p>Ovu politiku možemo povremeno ažurirati. O značajnim promenama obavestićemo vas putem emaila ili obaveštenja na sajtu. Preporučujemo da redovno proveravate ovu stranicu.</p>
          </Section>

          <Section title="12. Kontakt za zaštitu podataka">
            <p>Za sva pitanja u vezi sa zaštitom vaših podataka:</p>
            <ul>
              <li>Email: aleksandar@platinumzenith.com</li>
              <li>Adresa: Ruže Šulman 19, Zrenjanin, Srbija</li>
            </ul>
            <p>Takođe imate pravo da podnesete pritužbu Povereniku za informacije od javnog značaja i zaštitu podataka o ličnosti Republike Srbije.</p>
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
      <div className="space-y-3 text-[15px] md:text-[16px] text-ink-2 leading-[26px] [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1 [&_li]:text-ink-2 [&_h3]:text-[16px] [&_h3]:font-medium [&_h3]:text-ink [&_h3]:mt-4 [&_h3]:mb-2">{children}</div>
    </div>
  )
}
