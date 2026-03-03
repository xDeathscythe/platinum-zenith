import { motion } from '../components/Motion'

export default function UsloviKupovinePage() {
  return (
    <section className="pt-[120px] md:pt-[160px] pb-16 md:pb-20 px-4 md:px-8">
      <div className="max-w-[820px] mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-[13px] text-ink-2 uppercase tracking-widest mb-4 block">Legal</span>
          <h1 className="text-[36px] md:text-[48px] font-medium leading-[1.1] tracking-[-1px] text-ink mb-4">
            Uslovi kupovine
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
            <p>Ovi Uslovi kupovine primenjuju se na kupovinu proizvoda preko online prodavnice na sajtu platinumzenith.com.</p>
            <p>Kupovinom potvrđujete da ste pročitali i prihvatili ove uslove.</p>
            <ul>
              <li><strong>Prodavac:</strong> Platinum Zenith</li>
              <li><strong>Email za podršku:</strong> aleksandar@platinumzenith.com</li>
              <li><strong>Telefon:</strong> +381 66 816 8929</li>
              <li><strong>Adresa:</strong> Ruže Šulman 19, Zrenjanin, Srbija</li>
            </ul>
          </Section>

          <Section title="2. Ko može da kupi">
            <p>Kupac može biti svako punoletno fizičko ili pravno lice koje unese tačne podatke potrebne za obradu porudžbine i isporuku.</p>
            <p>Prodavac ne snosi odgovornost za kašnjenje ili neisporuku uzrokovanu netačnim podacima koje je uneo kupac.</p>
          </Section>

          <Section title="3. Kako se zaključuje kupovina">
            <p>Ugovor o kupoprodaji smatra se zaključenim kada kupac potvrdi porudžbinu na checkout stranici.</p>
            <p>Nakon uspešne kupovine, kupac dobija potvrdu porudžbine putem emaila ili telefona (u zavisnosti od dostupnih kontakt podataka).</p>
          </Section>

          <Section title="4. Cene i dostupnost">
            <p>Sve cene su prikazane u RSD i važe u trenutku potvrde porudžbine.</p>
            <p>Prodavac zadržava pravo promene cena pre potvrde kupovine, dok potvrđena porudžbina ostaje po ceni koja je bila prikazana kupcu u trenutku naručivanja.</p>
            <p>U slučaju očigledne tehničke greške u ceni ili stanju zaliha, kupac će biti obavešten u najkraćem roku i ponuđeno mu je:
            </p>
            <ul>
              <li>poništenje porudžbine uz pun povraćaj uplaćenih sredstava, ili</li>
              <li>potvrda porudžbine po korigovanim uslovima.</li>
            </ul>
          </Section>

          <Section title="5. Način plaćanja i isporuka">
            <p>Detaljni uslovi su dostupni na posebnim stranicama:</p>
            <ul>
              <li><a href="/nacin-placanja" className="underline">Način plaćanja</a></li>
              <li><a href="/dostava" className="underline">Dostava</a></li>
            </ul>
          </Section>

          <Section title="6. Pravo na odustanak od ugovora (14 dana)">
            <p>U skladu sa Zakonom o zaštiti potrošača, kupac ima pravo da u roku od 14 dana od prijema robe odustane od kupovine bez navođenja razloga.</p>
            <p>Da biste iskoristili ovo pravo, potrebno je da nas u navedenom roku obavestite pisanim putem (email), uz broj porudžbine i podatke kupca.</p>
            <ul>
              <li>Roba mora biti vraćena bez nepotrebnog odlaganja, najkasnije u roku od 14 dana od slanja izjave o odustanku.</li>
              <li>Trošak vraćanja robe snosi kupac, osim ako nije drugačije navedeno.</li>
              <li>Povraćaj novca vršimo nakon prijema i provere vraćene robe, najkasnije u zakonskom roku.</li>
            </ul>
          </Section>

          <Section title="7. Izuzeci od prava na odustanak">
            <p>Pravo na odustanak se ne primenjuje u slučajevima predviđenim zakonom, uključujući robu izrađenu po posebnoj specifikaciji kupca ili jasno personalizovanu robu.</p>
          </Section>

          <Section title="8. Reklamacije i saobraznost">
            <p>Kupac ima pravo na reklamaciju u slučaju nesaobraznosti robe ugovoru, uz dokaz o kupovini (račun ili broj porudžbine).</p>
            <ul>
              <li>Na reklamaciju odgovaramo najkasnije u roku od 8 dana od prijema.</li>
              <li>Rok za rešavanje reklamacije je do 15 dana, odnosno do 30 dana za tehničku robu kada je to primenljivo.</li>
              <li>Reklamacija se šalje na: <strong>aleksandar@platinumzenith.com</strong>.</li>
            </ul>
          </Section>

          <Section title="9. Odgovornost kupca za umanjenu vrednost robe">
            <p>Kupac je odgovoran za umanjenu vrednost robe koja nastane kao posledica rukovanja koje prevazilazi ono što je neophodno za utvrđivanje prirode, karakteristika i funkcionalnosti robe.</p>
          </Section>

          <Section title="10. Zaštita podataka">
            <p>Podaci kupaca koriste se isključivo za obradu porudžbine, isporuku i zakonske obaveze. Detalji su dostupni na stranici <a href="/politika-privatnosti" className="underline">Politika privatnosti</a>.</p>
          </Section>

          <Section title="11. Završne odredbe">
            <p>Prodavac može ažurirati ove uslove radi usklađivanja sa zakonom i poslovnim procesima. Važeća verzija je uvek objavljena na ovoj stranici.</p>
            <p>Za eventualne sporove nadležan je sud prema sedištu prodavca, osim ako prinudni propisi o zaštiti potrošača ne određuju drugačije.</p>
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
      <div className="space-y-3 text-[15px] md:text-[16px] text-ink-2 leading-[26px] [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1 [&_li]:text-ink-2 [&_a]:text-ink [&_a]:underline [&_a]:underline-offset-2">
        {children}
      </div>
    </div>
  )
}
