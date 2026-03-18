const fs = require('fs');
const path = 'C:/Users/Eventide/.openclaw/workspace-devona/projects/arcads-clone/src/pages/blog/blogData.js';

const newPost = `  {
    slug: 'email-lista-za-male-firme-srbija-2026',
    title: 'Kako izgraditi email listu od nule za male firme u Srbiji 2026',
    excerpt: 'Prakticni vodic za izgradnju email liste za male firme u Srbiji. Lead magneti koji rade, alati, landing stranice i strategija prvog meseca.',
    date: '2026-03-18',
    category: 'Lead Generation',
    readTime: '8 min',
    content: \`
## Zasto je email lista najvredniji asset male firme

Drustvene mreze menjaju algoritme, Google menja rangiranje, oglasi poskupljuju. Email lista je jedini kanal koji u potpunosti kontrolisete. Niko vam ne moze smanjiti doseg ili ugasiti nalog.

Firme sa aktivnom email listom imaju 3-5x veci customer lifetime value od onih koje se oslanjaju samo na organski saobracaj. Razlog je jednostavan: email vam omogucava da komunicirate sa zainteresovanim ljudima kad god zelite, bez placanja za svaki kontakt.

Za kompletnu sliku troskova pogledaj [cene digitalnog marketinga](/cene-digitalnog-marketinga).

## Sta je lead magnet i zasto vam treba

Lead magnet je nesto korisno sto nudite besplatno u zamenu za email adresu. Bez lead magneta, "pretplatite se na nas newsletter" ne radi -- jer niko ne zeli jos jedan newsletter u inbox-u.

### Lead magneti koji rade za srpsko trziste

**Popust na prvu kupovinu (e-commerce)** -- 10-15% popust kod za nove kupce. Najjednostavniji lead magnet koji konvertuje 5-8% posetilaca u pretplatnike.

**Besplatan vodic (usluzne firme)** -- PDF od 5-10 stranica koji resava konkretan problem vase ciljne grupe. "Checklista za pripremu poreskog izvestaja" za racunovodstvenu agenciju. "5 stvari koje morate znati pre kupovine stana" za agenciju za nekretnine.

**Kalkulator ili alat** -- interaktivni kalkulator troskova, procena ustedja, ili mini-test. Zahteva vise truda za kreiranje ali ima 2-3x vecu stopu konverzije od PDF-a.

**Webinar ili video trening** -- besplatan online trening na temu relevantnu za vasu publiku. Radi odlicno za B2B firme i edukatora.

**Besplatna konsultacija** -- 15-minutni poziv za prvu procenu. Radi za skuplje usluge (advokati, konsultanti, agencije).

## Alati za email marketing koji rade u Srbiji

### MailerLite (preporuka za pocetak)

Besplatan plan do 1.000 pretplatnika. Dovoljan za prvu godinu vecine malih firmi. Drag-and-drop editor, automatizacije, landing stranice, pop-up forme. Podrska za srpski jezik u emailovima.

### Brevo (bivsi Sendinblue)

Besplatan plan do 300 emailova dnevno (neogranicen broj kontakata). Odlican za firme koje salju retko ali imaju vecu listu. Transakcioni emailovi ukljuceni. SMS marketing kao bonus.

### Mailchimp

Popularan ali skuplji od alternativa. Besplatan plan do 500 kontakata (ranije 2.000). Dobar za firme koje vec koriste Mailchimp integracije sa drugim alatima.

Za detaljan pregled cena pogledaj [email marketing cena u Srbiji](/blog/email-marketing-cena-srbija-2026).

## Kako napraviti landing stranicu za lead magnet

Landing stranica za lead magnet mora da ima pet elemenata:

**Naslov koji obecava rezultat** -- ne "Preuzmite nas vodic" nego "Naucite kako da ustedite 30% na porezu za preduzetnike".

**3-5 bullet poena** -- sta ce citaoc nauciti ili dobiti. Konkretno, ne genericki.

**Forma sa 2-3 polja** -- ime i email su dovoljni. Svako dodatno polje smanjuje konverziju za 10-15%.

**Social proof** -- broj dosad preuzetih kopija, kratki testimonijal, ili logotipi firmi koje koriste vas proizvod.

**Jasno dugme** -- ne "Submit" nego "Posalji mi vodic" ili "Zelim popust". Tekst na dugmetu treba da zavrsi misao "Zelim da...".

## Strategija za prvi mesec

### Nedelja 1: Priprema

Kreirajte lead magnet (PDF vodic ili popust kod). Napravite landing stranicu sa formom. Povežite formu sa email alatom (MailerLite ili Brevo).

### Nedelja 2: Pokretanje

Postavite pop-up na sajt (pojavi se posle 30 sekundi ili pri izlasku). Dodajte link ka landing stranici u meni sajta. Objavite lead magnet na drustvenim mrezama.

### Nedelja 3: Automatizacija

Napravite welcome email sekvencu (3-5 emailova u 2 nedelje). Prvi email: isporuka lead magneta. Drugi: pricajte o vasoj firmi. Treci: ponudite nesto (proizvod, uslugu, konsultaciju). Cetvrti: studija slucaja ili testimonijal. Peti: poslednji poziv na akciju.

### Nedelja 4: Analiza

Proverite open rate (zdrav prosek za Srbiju: 25-35%). Proverite click rate (zdrav prosek: 3-7%). Testirajte drugaciji naslov emaila. Dodajte exit-intent pop-up ako ga nemate.

## Najcesce greske pri izgradnji email liste

### 1) Kupovina email lista

Kupljene liste imaju 90%+ losih adresa, visok bounce rate, i rizikujete da vas email provajder blokira nalog. Jedna kupljena lista moze trajno ostetiti vas domain reputation.

### 2) Slanje bez segmentacije

Isti email za sve pretplatnike = nizak engagement = veci spam skor. Segmentirajte bar po tome kako su se prijavili (koji lead magnet) i po aktivnosti (otvaraju li emailove).

### 3) Prevelika ucestalost

Slanje svakog dana kad imate 200 pretplatnika je agresivno. Pocnite sa jednom nedeljno. Povecavajte ucestalost samo kad vidite da engagement ne pada.

### 4) Nema double opt-in

Bez potvrde pretplate dobijate lazne adrese, botove i nezainteresovane ljude. Double opt-in smanjuje velicinu liste ali drasticno povecava kvalitet.

Za pomoc sa email marketing strategijom i izgradnjom liste, javite se preko [kontakt forme](/kontakt). Pogledajte i nas vodic o [SEO optimizaciji](/seo-optimizacija-cena) za organski saobracaj koji hrani vasu listu.
\`
  },`;

let content = fs.readFileSync(path, 'utf8');
content = content.replace('const rawBlogPosts = [', 'const rawBlogPosts = [\n' + newPost);
fs.writeFileSync(path, content, 'utf8');
console.log('Email list building blog injected');
