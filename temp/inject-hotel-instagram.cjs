const fs = require('fs');
const path = require('path');

const blogDataPath = path.join(__dirname, '..', 'src', 'pages', 'blog', 'blogData.js');
let content = fs.readFileSync(blogDataPath, 'utf8');

// Remove BOM if present
if (content.charCodeAt(0) === 0xFEFF) content = content.slice(1);

const newPost = `  {
    slug: 'instagram-reklame-za-hotele-i-smestaj-cena-rezervacije-srbija-2026',
    title: 'Instagram reklame za hotele i smestaj u Srbiji 2026: cena po rezervaciji i strategija',
    excerpt: 'Koliko kostaju Instagram reklame za hotele, apartmane i vile u Srbiji. Tipovi kampanja, budzeti, kreativa koja privlaci goste i strategija za direktne rezervacije.',
    date: '2026-03-20',
    category: 'Instagram Ads',
    readTime: 10,
    content: \`
## Instagram reklame za hotele i smestaj: prakticni okvir

Ako upravljate hotelom, apartmanom, vilom ili etno selom u Srbiji i razmisljate o Instagram oglasavanju, evo sta ocekivati u 2026:

- **CPM (cena za 1.000 prikaza):** 2,50e - 6e za srpsko trziste
- **CPC (cena po kliku):** 0,10e - 0,45e za smestajne kampanje
- **Cena po upitu/rezervaciji:** 8e - 35e zavisno od tipa objekta i sezone
- **Minimalni mesecni budzet za pouzdan test:** 200e - 500e
- **Break-even:** najcesce posle 3-6 nedelja za nove kampanje

Za celokupnu sliku o cenama Instagram oglasavanja pogledajte [Instagram reklame cena](/instagram-reklame-cena). Za marketing strategiju za smestajne objekte, korisno je videti nas vodic za [marketing za hotele i smestaj](/marketing-za-hotele-i-smestaj).

## Zasto Instagram radi za smestaj

Odluka o putovanju i rezervaciji smestaja je vizuelna. Niko ne rezervise sobu u hotelu koji nema ni jednu fotografiju. Instagram je platforma gde ljudi aktivno traze inspiraciju za sledece putovanje, pregledaju lokacije i cuvaju mesta u kolekcije.

Za razliku od Google Ads-a gde hvatate ljude koji vec znaju gde idu, Instagram vam omogucava da kreirate zelju kod ljudi koji jos biraju destinaciju ili tip odmora. To je posebno korisno za:

- Objekte van velikih gradova koji nemaju organsku potraznju na Google-u
- Sezonske kapacitete kojima treba popuniti prazan period
- Premium sobe i pakete gde vizuelni prikaz opravdava visu cenu
- Nove objekte bez recenzija na Booking-u koji moraju da izgrade svest

Za poredjenje sa Google Ads pristupom, pogledajte [Google Ads za hotele i smestaj](/blog/google-ads-za-hotele-i-smestaj-cena-rezervacije-srbija-2026).

## 4 tipa kampanja koje rade za smestajne objekte

### 1. Awareness kampanja za destinaciju

Cilj nije direktna rezervacija. Cilj je da ljudi saznaju da vas objekat postoji i da zapamte lokaciju.

Format koji radi:
- **Reels (15-30 sekundi):** brzi prikaz objekta, okoline i jednog momenta iskustva (jutarnji pogled sa terase, bazen u sumrak, dorucak sa lokalnim proizvodima)
- **Carousel:** 5-7 slika koje pricaju pricu tog konkretnog odmora

Targeting:
- Interesovanja: putovanja, Srbija turizam, vikend izleti, planine/jezera zavisno od lokacije
- Uzrast: 25-55 za porodicni smestaj, 22-40 za boutique/glamping
- Lokacija: Beograd, Novi Sad i jos 2-3 velika grada odakle dolazi vecina gostiju

Budzet: 5e - 10e dnevno je dovoljan za awareness. Cilj je reach i video views, ne konverzija.

### 2. Retargeting kampanja za posete sajtu

Ovo je najvrednija kampanja. Hvata ljude koji su vec bili na vasem sajtu (pregledali sobe, cene, lokaciju) ali nisu rezervisali.

- **Custom Audience:** posetioci sajta u poslednjih 14-30 dana
- **Format:** dinamicki carousel sa konkretnim sobama/paketima i cenom
- **Poruka:** konkretan razlog da zavrse rezervaciju ("Poslednje 3 sobe za maj vikend" ili "Besplatan dorucak za rezervacije do petka")

Cena po kliku u retargetingu je niza (0,05e - 0,15e), a konverzija 3-5x visa nego kod hladne publike. Ako imate 500+ mesecnih posetilaca na sajtu, ovo je obavezan korak.

### 3. Sezonska kampanja za popunjavanje kapaciteta

Vecina smestajnih objekata u Srbiji ima jasne sezone. Zlatibor i Kopaonik zimi, Fruska Gora i Tara u prolece, Sokobanja i jezera leti. Problem nastaje u periodima izmedju.

Sezonske kampanje su agresivnije i vremenski ogranicene:
- **Last-minute ponude:** "Ovog vikenda na Zlatiboru od 45e po nocenju" sa countdown sticker-om
- **Rani booking:** "Rezervisite leto 2026 do kraja marta: 20% popust za minimum 5 nocenja"
- **Tematski paketi:** wellness vikend, romanticni paket, team building za firme, Nova Godina

Budzet: 15e - 30e dnevno tokom sezonske kampanje. Kratke kampanje (7-14 dana) sa jasnom ponudom rade bolje nego kontinuirano ograsavanje bez specifike.

### 4. Social Proof kampanja

Gosti veruju drugim gostima vise nego vasim fotografijama. UGC (User Generated Content) kampanje sa recenzijama, video testimonialima i repostovima gostiju konvertuju bolje od profesionalnih fotki.

- **Format:** Reels sa citatom gosta + snimak objekta
- **Carousel:** 3 recenzije (tekst + slika) sa razlicitih platformi (Google, Booking, TripAdvisor)
- **Targeting:** Lookalike audience bazirana na ljudima koji su vec rezervisali

Ovo posebno pomaze novim objektima. Ako nemate recenzije na Booking-u, Instagram social proof delom kompenzuje taj deficit.

## Kreativa koja donosi rezervacije

### Sta radi za smestajne objekte

1. **Realni snimci, ne stock fotografije.** Gosti prepoznaju genericki hotel stock. Snimajte svojim telefonom u dobrom svetlu.
2. **Prikaz iskustva, ne samo sobe.** Soba je krevet i kupatilo. Iskustvo je pogled sa terase, setnja do recnog izvora, lokalna hrana za vecerom.
3. **Cena u oglasu.** "Od 45e po nocenju" eliminise ljude kojima je preskupo i privlaci ljude koji su spremni da plate.
4. **Lokacija u prvoj sekundi.** "3 minuta peske od Zlatibor centra" ili "Nasred Fruske Gore, 80km od Beograda" daje kontekst odmah.

### Sta ne radi

- Profesionalne fotke sa wide-angle objektivom koje cine sobu vecom nego sto jeste. Gosti se osecaju prevareno i ostavljaju lose recenzije.
- Genericki copy tipa "Vas raj za odmor". To ne govori nista specificno.
- Video duzi od 30 sekundi za awareness. Niko ne gleda minutni obilazak hotela u feed-u.
- Oglas bez jasnog CTA. "Rezervisite direktno" sa linkom na booking stranicu je minimum.

## Budzeti po tipu smestajnog objekta

### Mali apartman / vikendica (1-5 jedinica)
- Mesecni budzet: 150e - 300e
- Fokus: retargeting + jedna sezonska kampanja
- Ocekivani upiti: 8-20 mesecno
- Cena po upitu: 10e - 25e

### Srednji objekat (6-20 soba)
- Mesecni budzet: 300e - 800e
- Fokus: awareness + retargeting + sezonske + social proof
- Ocekivani upiti: 20-50 mesecno
- Cena po upitu: 8e - 20e

### Veci hotel / resort (20+ soba)
- Mesecni budzet: 800e - 2.500e+
- Fokus: full funnel sa odvojenim kampanjama po tipu sobe i sezoni
- Ocekivani upiti: 50-150+ mesecno
- Cena po upitu: 6e - 15e

## Instagram vs Booking/Airbnb: poredjenje troskova

Booking uzima 15% provizije. Za sobu od 80e po nocenju i prosecnom boravku od 2 nocenja, Booking uzima 24e po rezervaciji.

Instagram reklama za istu rezervaciju kosta 8e - 20e. Plus ta rezervacija je direktna, gost vam daje email, mozete ga pozvati ponovo bez troskova.

Razlika postaje ogromna na godsnjem nivou. Objekat sa 500 nocenja godisnje:
- **Booking provizija (15%):** 6.000e - 12.000e (zavisno od prosecne cene)
- **Instagram ads za ekvivalentan obim:** 2.000e - 5.000e + direktan odnos sa gostom

Cilj nije potpuno napustiti Booking (i dalje donosi vidljivost), vec postepeno povecavati udeo direktnih rezervacija sa 10-15% na 35-50%.

Za siru analizu troskova digitalnog marketinga, pogledajte [cene digitalnog marketinga](/cene-digitalnog-marketinga).

## Tracking i merenje rezultata

### Sta pratiti

1. **Cena po upitu za rezervaciju (CPL).** Svaki upit koji dodje preko sajta, DM-a ili poziva koji je dosao iz Instagram kampanje.
2. **Cena po potvrdenoj rezervaciji.** CPL vam govori koliko kosta lead, ali potvrdjene rezervacije su jedino sto se racuna.
3. **ROAS za sezonske kampanje.** Ako potrosite 500e na kampanju za maj vikend i generisete 3.000e u rezervacijama, ROAS je 6:1.
4. **Udeo direktnih rezervacija.** Pratite mesecno koliki procenat dolazi direktno (sajt + telefon) vs OTA platforme.

### Meta Pixel obavezno

Instalirajte Meta Pixel na sajt i pratite:
- ViewContent (pregled sobe/paketa)
- InitiateCheckout (pocetak rezervacije)
- Purchase (zavrsena rezervacija)
- Lead (formular za upit)

Bez Pixel-a ne mozete raditi retargeting i ne znate sta vam radi. Ovo je jedini tehnicki preduslov koji ne smete preskociti.

## 5 najcescih gresaka smestajnih objekata na Instagramu

1. **Isti budzet cele godine.** Smestaj je sezonski biznis. Pojacajte budzet 4-6 nedelja pre pocetka sezone, smanjite u mrtvom periodu.
2. **Oglas vodi na Instagram profil umesto na sajt.** Profil je za organski sadrzaj. Oglas mora da vodi na stranicu gde gost moze rezervisati ili poslati upit.
3. **Siroko targetiranje bez lokacije.** Ako ste na Zlatiboru, ciljajte ljude iz Beograda, Novog Sada, Kragujevca. Ne trositi budzet na ljude iz Subotice kojima je Zlatibor daleko za vikend izlet.
4. **Nema odgovora na DM upite.** Ako vam oglas generise poruke, morate da odgovarate u roku od sat vremena. Posle toga gost je vec nasao drugi objekat.
5. **Samo profesionalne fotke.** Mesajte profesionalne sa autenticnim snimcima. Mobilni video gosta koji uziva na terasi konvertuje bolje od studijskog snimka prazne sobe.

## Zakljucak

Instagram reklame za smestajne objekte u Srbiji 2026 su isplativa alternativa visokim OTA provizijama. Kljuc je kombinacija awareness kampanja za novu publiku, retargeting za ljude koji su vec pokazali interesovanje i sezonskih kampanja za popunjavanje kapaciteta.

Pocnite sa 200e - 300e mesecno, fokusirajte se na retargeting ako imate dovoljno poseta na sajtu, i merite sve kroz cenu po potvrdenoj rezervaciji.

Za celokupnu strategiju digitalnog marketinga za smestajne objekte, pogledajte nas vodic za [marketing za hotele i smestaj](/marketing-za-hotele-i-smestaj) i [Google Ads vodic za hotele](/blog/google-ads-za-hotele-i-smestaj-cena-rezervacije-srbija-2026).

Ako zelite da proverite da li Instagram reklame imaju smisla za vas objekat ili vam treba pomoc sa postavkom, javite se preko [kontakt forme](/kontakt).
\`,
  },`;

// Insert before the closing ] of rawBlogPosts
const closingBracketIndex = content.lastIndexOf(']');
if (closingBracketIndex === -1) {
  console.error('Could not find closing ] of rawBlogPosts');
  process.exit(1);
}

// Find the last }, before the ]
const lastObjEnd = content.lastIndexOf('},', closingBracketIndex);
if (lastObjEnd === -1) {
  console.error('Could not find last }, before ]');
  process.exit(1);
}

// Insert after the last },
const insertAt = lastObjEnd + 2; // after },
content = content.slice(0, insertAt) + '\n' + newPost + '\n' + content.slice(insertAt);

fs.writeFileSync(blogDataPath, content, 'utf8');
console.log('Blog post injected successfully');
