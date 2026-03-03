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
            <p>Ovi Uslovi kupovine uređuju način ugovaranja i realizacije kupovine/usluga preko sajta platinumzenith.com.</p>
            <ul>
              <li><strong>Brend:</strong> Platinum Zenith</li>
              <li><strong>Pravni okvir:</strong> Platinum Zenith je ogranak firme PLATINUM TRUFFLES DOO ZRENJANIN</li>
              <li><strong>Email podrška:</strong> aleksandar@platinumzenith.com</li>
              <li><strong>Telefon:</strong> +381 66 816 8929</li>
              <li><strong>Adresa:</strong> Ruže Šulman 19, Zrenjanin, Srbija</li>
            </ul>
          </Section>

          <Section title="2. Način zaključenja ugovora">
            <p>Na sajtu trenutno ne postoji checkout/kasa stranica za automatsko zaključivanje kupovine.</p>
            <p>Ugovorni odnos nastaje nakon usaglašene ponude i potvrde saradnje kroz email korespondenciju između prodavca i kupca/klijenta.</p>
          </Section>

          <Section title="3. Cene i ponuda">
            <p>Cene, obim usluge/robe, rokovi i uslovi saradnje definišu se kroz ponudu dostavljenu klijentu email putem.</p>
            <p>Prodavac zadržava pravo izmene opšte ponude, dok za potvrđene ponude važe uslovi koji su dostavljeni i prihvaćeni u trenutku zaključenja dogovora.</p>
          </Section>

          <Section title="4. Plaćanje">
            <p>Detalji su definisani na stranici <a href="/nacin-placanja" className="underline">Način plaćanja</a>.</p>
            <p>Primarni model je virmansko plaćanje za pravna lica na osnovu ponude/fakture.</p>
          </Section>

          <Section title="5. Isporuka / realizacija">
            <p>Detalji isporuke robe ili realizacije usluge definisani su na stranici <a href="/dostava" className="underline">Dostava</a> i kroz konkretan dogovor sa klijentom.</p>
          </Section>

          <Section title="6. Reklamacije i prigovori">
            <p>Kupac ima pravo na reklamaciju u slučaju nesaobraznosti isporučene robe/usluge sa dogovorenom specifikacijom.</p>
            <ul>
              <li>Prigovor se podnosi pisanim putem na aleksandar@platinumzenith.com.</li>
              <li>Na prigovor odgovaramo u zakonskom roku.</li>
              <li>Rešenje reklamacije sprovodi se u skladu sa važećim propisima i prirodom proizvoda/usluge.</li>
            </ul>
          </Section>

          <Section title="7. Pravo na odustanak i raskid">
            <p>Uslovi odustanka/raskida zavise od vrste isporuke (roba ili usluga), statusa kupca (pravno/fizičko lice) i trenutka realizacije.</p>
            <p>Za svaku konkretnu kupovinu primenjuju se važeći propisi i uslovi definisani u ponudi i potvrđenoj email korespondenciji.</p>
          </Section>

          <Section title="8. Zaštita podataka">
            <p>Podaci kupaca koriste se isključivo za obradu upita, ugovaranje i realizaciju saradnje. Više detalja nalazi se na stranici <a href="/politika-privatnosti" className="underline">Politika privatnosti</a>.</p>
          </Section>

          <Section title="9. Završne odredbe">
            <p>Prodavac može periodično ažurirati ove uslove radi usklađivanja sa zakonom i poslovnim procesima.</p>
            <p>Za eventualne sporove nadležan je sud prema sedištu prodavca, osim kada prinudni propisi određuju drugačije.</p>
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
