import fs from 'fs';
const file = 'src/pages/blog/blogData.js';
let text = fs.readFileSync(file, 'utf8');
const marker = 'const rawBlogPosts = [';
const idx = text.indexOf(marker);
if (idx === -1) throw new Error('marker not found');
const insert = `
  {
    slug: 'google-ads-za-stomatologe-cena-leada-srbija-2026',
    title: 'Google Ads za stomatologe u Srbiji 2026: realna cena leada i kako da ne spalite budzet',
    excerpt: 'Koliko realno kostaju Google oglasi za stomatoloske ordinacije u Srbiji 2026, koji je zdrav CPL raspon i kako da postavite kampanju koja donosi kvalitetne pacijente umesto skupih klikova bez zakazanih termina.',
    date: '2026-03-11',
    category: 'Google Ads',
    readTime: '9 min',
    content: \`
## Kratak odgovor: Google Ads za stomatologe radi, ali samo ako merite cenu zakazanog termina, ne cenu klika

Ako pretrazujes upit **google ads za stomatologe cena Srbija**, najkorisniji odgovor je sledeci:
za vecinu ordinacija zdrav start je **700e-2.500e mesecno medijskog budzeta**, uz disciplinovanu optimizaciju i jasan plan po uslugama.

Najvaznije: nemoj da vodis kampanju po logici "sto jeftiniji klik".
Ordinaciji je bitna **cena zakazanog termina** i kvalitet pacijenta, ne vanity brojke.

Za siri okvir medijskog budzeta pogledaj i [Google reklame cena](/google-reklame-cena).

## Koliko realno kosta lead za stomatoloske usluge u Srbiji

Tipicni rasponi koje ordinacije vide posle inicijalnog perioda stabilizacije:

- **CPC (Search):** 0.20e-1.10e
- **CPL (upit/poziv):** 9e-45e
- **Cena zakazanog termina:** 18e-90e

Raspon je sirok jer nije ista ekonomija za:
- redovan pregled,
- estetske usluge,
- implantologiju,
- hitne intervencije.

High-ticket usluge mogu tolerisati visi CPL, dok kod nizih vrednosti usluga kampanja mora biti mnogo preciznija.

## Zasto neke ordinacije plate duplo vise za isti broj upita

Najcesca razlika nije "trziste" nego setup.
U praksi, najvece gubitke prave ove 4 stvari:

1. **Sve usluge su u jednoj kampanji**
   Kad su ciscenje kamenca, implanti i hitne usluge u istom bucket-u, signal je mutan i budzet ide na pogresne upite.

2. **Landing stranica ne prati intent pretrage**
   Korisnik trazi "zubni implant cena", a padne na genericku stranicu "o nama". To skoro uvek digne cenu lead-a.

3. **Bez negativnih kljucnih reci**
   Upiti poput "besplatno", "fakultet", "plate stomatologa" pojedu budzet bez ikakvog poslovnog efekta.

4. **Spor odgovor na upit**
   Ako se na lead odgovori nakon 2-3 sata, vrednost tog klika drasticno pada.

## Struktura kampanje koja najcesce radi za ordinacije

Praktican model za 2026 na srpskom trzistu:

- **Kampanja 1: High intent treatment keywords**
  (npr. implant, krunica, ortodoncija po usluzi)
- **Kampanja 2: Branded + local intent**
  (naziv ordinacije + grad/opstina)
- **Kampanja 3: Emergency/urgent intent**
  (npr. "zubobolja hitno", gde ordinacija to realno pokriva)
- **Kampanja 4: Remarketing**
  (za korisnike koji su posetili sajt, ali nisu zakazali)

Svaka kampanja treba poseban oglasni ugao, odvojene extension-e i landing poruku 1:1 sa query-jem.

Ako razvijas i lokalnu organsku vidljivost, dobar paralelan potez je [marketing za stomatologe](/marketing-za-stomatologe).

## Kako da izracunate da li kampanja ima smisla

Najjednostavniji okvir:

- prosecna vrednost tretmana,
- bruto marza,
- procenat ljudi koji se pojave na terminu,
- procenat onih koji prihvate terapiju.

Primer:

- prosecna vrednost usluge: 320e
- bruto marza: 50% (160e)
- od lead-a do zakazanog termina: 40%
- od termina do placene usluge: 60%

Efektivna vrednost lead-a je ~38.4e (160e x 0.4 x 0.6).
To znaci da CPL znacajno iznad tog nivoa trazi hitnu korekciju ponude, keyword-a ili landing-a.

## Landing stranica za stomatoloske oglase: sta mora da postoji

Za medicinske usluge poverenje je pola prodaje.
Minimum koji landing mora da pokrije:

- jasan naslov sa uslugom i lokacijom,
- doktor/tim i kredibilitet (sertifikati, iskustvo),
- 2-3 konkretna dokaza (recenzije, rezultati, pre/posle gde je dozvoljeno),
- jednostavan CTA (poziv ili zakazivanje),
- mobilna brzina ispod 3 sekunde.

Ako i dalje saljes paid traffic na genericki homepage, kampanja ce skoro uvek biti skuplja nego sto mora.
Za trosak i scope izrade takvih stranica pogledaj [izradu landing stranice: cena, rokovi, sta ulazi u cenu](/blog/izrada-landing-stranice-cena-rokovi-sta-ulazi-u-cenu).

## 30-dnevni plan za ordinacije koje krecu od nule

- **Nedelja 1:** tracking setup, conversion ciljevi, keyword mapiranje po usluzi
- **Nedelja 2:** launch 2-3 kampanje sa odvojenim oglasima i ad extension-ima
- **Nedelja 3:** search term cleanup, negativne reci, prva preraspodela budzeta
- **Nedelja 4:** landing dorade + fokus na segmente sa najboljim odnosom CPL i zakazanih termina

Kluc: svake nedelje gasiti ono sto nema signal i gurati ono sto donosi kvalitetne pacijente.

## Najcesce greske koje najbrze pojedu budzet ordinacije

1. **Pogresan KPI**
   Tim slavi nizak CPC, a kalendar termina nije pun.

2. **Jedan oglas za sve usluge**
   Implant i regularan pregled nemaju isti kupovni intent.

3. **Nema discipline u negative keyword listi**
   Ovo je jedan od najbrzih nacina da se CPL spusti bez dodatnog budzeta.

4. **Nema povezivanja marketinga i recepcije**
   Ako call handling nije brz i strukturiran, pola marketing ulaganja se izgubi posle klika.

Za poredjenje sa drugim kanalima, korisno je i [koliko kosta Facebook reklama](/koliko-kosta-facebook-reklama).

## Zakljucak

Google Ads za stomatologe u Srbiji 2026 moze biti izuzetno profitabilan kanal, ali samo kad je vezan za realne poslovne metrike: zakazan termin, dolazak pacijenta i vrednost terapije.
Ako hoces, mozemo uraditi brz audit tvoje trenutne kampanje i oznaciti 3 poteza koji najbrze spustaju cenu kvalitetnog lead-a - javi se preko [kontakt forme](/kontakt).
\`,
  },`;
const insertAt = idx + marker.length;
text = text.slice(0, insertAt) + insert + text.slice(insertAt);
fs.writeFileSync(file, text, 'utf8');
console.log('Inserted new blog post');
