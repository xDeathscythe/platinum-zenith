# SEO i analitika — 0.1.3

## Objavljeno

- Sve javne sitemap adrese dobijaju kompletan HTML iz prerendera, uključujući tekst blogova. React zatim preuzima interakcije.
- Posebne usluge: `/google-ads-agencija`, `/meta-ads-agencija`, `/seo-agencija`, `/growth-marketing-agencija`. Naslovi, opisi i Service/WebPage/Breadcrumb podaci imaju zajednički izvor u `src/data/services.js`.
- Nepostojeće javne adrese vraćaju 404 i noindex. Administracija i nacrti se ne indeksiraju.
- Search Console domen je verifikovan, a `/sitemap-index.xml` prihvaćen 15. septembra 2026. Prihvatanje mape nije potvrda indeksiranja ili boljeg rangiranja.
- Microsoft Clarity projekat: `yilacvvgl0`. Prikupljanje počinje tek posle pristanka posetioca. Balanced masking, dodatno maskirane forme i isključeni podrazumevani kolačići; aplikacija šalje ConsentV2 signal.

## Gde se prate rezultati

- `/log/analytics`: sesije, pregledači, stranice, ulazne stranice, izvori, kampanje, interakcije, put kroz sesiju, upiti i ugovorena vrednost.
- `/log/poruke` i `/log/prijave`: izvor i put do upita, statusi Nov upit → Kvalifikovan → Sastanak → Ponuda → Klijent / Nije ugovoreno. Vrednost i valuta unose se nakon ugovaranja.
- Search Console: pojmovi pretrage, prikazi, klikovi, CTR i prosečna pozicija. To su zbirni podaci; ne otkrivaju tačan Google upit pojedinačne osobe.
- Clarity: snimci i mape interakcija. Pseudonimni identifikatori povezuju sesiju, bez slanja imena, emaila ili sadržaja forme.
- Google Analytics 4: nalog `408050176`, property `554183178`, web stream `15780253962`, measurement ID `G-P4VXTSSF14`. Direktan pristup: https://analytics.google.com/analytics/web/#/a408050176p554183178/reports/home . ID dolazi iz privatnog serverskog okruženja preko `GA_MEASUREMENT_ID`.

## Definicije i ograničenja

Sesija ističe posle 30 minuta neaktivnosti. Identifikator pregledača i prvi dolazak ističu posle 90 dana. Jedna osoba može koristiti više pregledača; anonimnu posetu nije moguće automatski pretvoriti u poznatu osobu. Bez pristanka ne pravimo analitičke identifikatore. Primljena forma se i tada čuva, uz oznaku da izvor nije izmeren.

Izvor je UTM source kada postoji, inače domen spoljnog referrera, inače direct. Organski Google dolazak bez UTM-a zato može da se prikaže kao `www.google.com / referral`, uz stvarni domen umesto pretpostavljenog kanala. Jezički keyword heuristici se ne koriste. Prvi izvor i izvor tekuće sesije čuvaju se odvojeno. UTM vrednosti treba da budu oznake kampanja, bez ličnih podataka.

Pregled stranice deduplikuje se po ID-u učitavanja. Aktivno vreme je vreme sa vidljivom stranicom, ne dokaz da osoba čita svaki red. Klik na telefon, email ili kalendar nije potvrđen poziv ili sastanak. Kontakt i prijava broje se kada ih server sačuva. SMTP greška ne briše sačuvani upit i ne izaziva lažnu poruku da nije primljen.

Tabela izvora prati sesije započete u periodu i pripadajuće upite. Ukupni upiti prate datum prijema, a ugovorena vrednost datum prelaska u Klijent. Zbog toga zbirovi različitih tabela ne moraju biti isti. Valute se ne sabiraju međusobno. Stara evidencija ostaje arhiva jer njene sesije i izvori nisu uporedivi sa novim merenjem.

Nova sirova analitika čuva se najduže 26 meseci. Dnevno održavanje uklanja starije zapise iz novih analitičkih tabela; stara arhiva i poslovni upiti imaju zasebnu politiku čuvanja.

## GA4 konfiguracija

1. Nalog Platinum Zenith i web stream kreirani su 15. septembra 2026. po potvrdi vlasnika.
2. Postaviti `GA_MEASUREMENT_ID=G-P4VXTSSF14` u privatno serversko okruženje i proveriti Realtime.
3. Isključeno je automatsko merenje promena istorije, pomeranja, odlaznih klikova i formi, jer aplikacija već šalje odgovarajuće događaje. Ostaju pretraga sajta, video i preuzimanja.
4. `generate_lead` je key event, broji se jednom po događaju bez podrazumevane novčane vrednosti. Search Console domen je povezan sa web stream-om. Retention za događaje i korisnike je 14 meseci, bez resetovanja roka pri novoj aktivnosti. `booking_open` nije završen sastanak.
5. Kada postoji dovoljno podataka, proveriti integraciju sa Clarity i dostupnost AI Visibility citiranja. Bot activity zahteva podržan CDN izvor; sama instalacija Clarity taga to ne omogućava.

## Rad tokom narednih 90 dana

Prve dve nedelje služe za proveru indeksiranja i pouzdanosti podataka. Posle toga biramo stranice sa relevantnim prikazima i slabijim CTR-om, odnosno one koje dovode upite. Rezultate poredimo po upitima koji ne sadrže ime brenda i po usluzi/industriji, uz isti period i tržište.

Stranica za frizerske salone već je poslovno važna prema iskustvu vlasnika. Sledeći sadržaj treba da bude stvarna studija slučaja sa odobrenim imenom ili anonimnim opisom, periodom i proverljivim rezultatom. Ne dodavati izmišljene rezultate, recenzije ili masovne kopije stranica po gradovima. Prioritet novih tema određuje se iz stvarnih upita i kvaliteta klijenata.

Mesečni pregled: nebrendirani klikovi i relevantni prikazi, kvalitetni upiti, procenat ugovaranja, vrednost poslova i stranice koje ih dovode. Prva pozicija i AI preporuke se ne garantuju.

## Runtime, podaci i objavljivanje

Potreban je Node 24.x zbog ugrađenog `node:sqlite`. Taj API na korišćenom Node 24 runtime-u još ispisuje experimental upozorenje; migracija, integracija i paralelni upisi provereni su na hostu. SQLite koristi WAL i zaključavanje; nema periodičnog prepisivanja celog fajla.

`PZ_ENV_FILE` određuje privatni env fajl van koda. Kada je izričito zadat, njegove vrednosti imaju prednost nad starim deployment promenljivama; nedostupan fajl prekida pokretanje servera. `PZ_DATA_DIR` određuje trajni direktorijum za bazu, takođe van direktorijuma koji deployment menja. Bez podešenih admin podataka pristup se odbija. `.env` ne sme biti u Git-u, release arhivi ili javnom direktorijumu. Brisanje fajla iz aktuelnog Git-a ne poništava ranije objavljene tajne: potrebna je njihova zamena.

Pre narednog Hostinger deployment-a iz GitHub-a sačuvati Node 24.x i `PZ_ENV_FILE` u podešavanjima okruženja. Ne vraćati bazu iz stare rezervne kopije preko novih upita. Pri vraćanju koda prvo sačuvati aktuelnu bazu.

Port koji postavi hosting proces ili lokalni audit ima prednost nad `PORT` vrednošću privatnog fajla. Ovo je provereno uz izdvojeni env fajl sa `PORT=3000` i audit procesom na drugom portu.

Provere: `npm test`, `npm run build`, scoped ESLint, javni HTTP odgovori i pregled desktop/mobilnog prikaza. Testovi koriste izdvojenu bazu i simulirani SMTP; ne šalju klijentima probne poruke.
