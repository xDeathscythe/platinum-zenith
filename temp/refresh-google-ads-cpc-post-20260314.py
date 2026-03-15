from pathlib import Path
import re

path = Path(r"C:\Users\Eventide\.openclaw\workspace-devona\projects\arcads-clone\src\pages\blog\blogData.js")
text = path.read_text(encoding="utf-8")

new_block = """  {
    slug: 'google-ads-cena-po-kliku-srbija-2026',
    title: 'Google Ads cena po kliku u Srbiji 2026: realni CPC rasponi po nisi i intentu',
    excerpt: 'Koliko Google Ads klik realno kosta u Srbiji 2026, koji su rasponi po industrijama i kako da razlikujes zdrav CPC od skupe kampanje koja samo izgleda jeftino.',
    date: '2026-03-14',
    category: 'Google Ads',
    readTime: '12 min',
    content: `
## Google Ads cena po kliku u Srbiji 2026: kratak odgovor

Ako trazis jednu prosecnu cenu klika za celo trziste, najverovatnije ces pogresno planirati budzet.
U praksi se **Google Ads cena po kliku u Srbiji 2026** najcesce krece od oko **0.15e do 3.20e+**, zavisno od nise, grada, intenziteta konkurencije i namere korisnika.

Klik od 0.35e nije automatski "dobar", kao sto klik od 1.40e nije automatski "los".
Pravo pitanje je: da li taj klik donosi kvalifikovan upit ili samo traffic bez rezultata.

Za siri okvir ukupnog ulaganja (ne samo CPC) pogledaj i [Google reklame cena](/google-reklame-cena).

## Realni CPC rasponi po industrijama (Search, Srbija)

Ovo su prakticni benchmark rasponi za start planiranja u 2026:

- **Lokalne usluge (frizeri, saloni, manji servisi):** 0.15e-0.55e
- **Kucne/terenske usluge (klime, stolarija, vodoinstalater):** 0.35e-1.35e
- **Medicina i stomatologija (privatni sektor):** 0.65e-2.10e
- **Pravne i finansijske usluge:** 1.00e-3.20e
- **B2B usluge (software, industrija, consulting):** 0.75e-2.40e
- **E-commerce Search (zavisno od kategorije):** 0.20e-1.25e

Ovi brojevi su orijentir, ne garancija. Korisni su da brzo procenis da li tvoj nalog radi u zdravom opsegu ili postoji curenje budzeta.

## Zasto isti biznis ne placa isti klik u svakom gradu

Ista usluga cesto ima drugaciji CPC izmedju Beograda, Novog Sada, Nisa i manjih gradova.
Glavni razlozi su:

1. broj aktivnih oglasivaca na istim terminima,
2. snaga istorije naloga i quality signala,
3. odnos mobile vs desktop saobracaja,
4. hitnost upita (npr. "odmah" scenariji),
5. kvalitet landing stranice koja prima klik.

Ako landing stranica ne prati poruku oglasa 1:1, Quality Score pada i klik poskupljuje.
Za post-click deo korisno je da procenis i [izradu WordPress sajta cena](/izrada-wordpress-sajta-cena).

## Intent menja CPC vise nego sto vecina ocekuje

Cena klika ne zavisi samo od reci, nego od **namere**.

- **Informativni intent** ("sta je", "kako radi") cesto ima nizi CPC, ali slabiji komercijalni signal.
- **Komercijalni intent** ("cena", "ponuda", "agencija") cesto ima visi CPC i vecu sansu za lead.
- **Transakcioni intent** ("zakazi", "kontakt", "kupovina") je cesto najskuplji, ali i najvredniji.

Zato kampanju ne treba optimizovati za "najnizi CPC", vec za **CPL i kvalitet lead-a**.

## Kako da iz CPC-a izracunas realan test budzet

Praktican model za prvi mesec:

1. definisi realan CPC raspon za svoju industriju,
2. planiraj minimum 250-400 klikova za smislen uzorak,
3. dodaj trosak upravljanja i tracking setup-a,
4. postavi prag kvaliteta lead-a pre skaliranja.

Primer:
Ako ocekujes prosek oko 0.90e po kliku, medijski test budzet je okvirno **225e-360e**.
Ako zelis brze ucenje sa vise ad grupa i testova oglasa, budzet mora da raste proporcionalno.

Za poredjenje sa social kanalom pogledaj [Instagram reklame cena](/instagram-reklame-cena), a za kompletan miks i [cene digitalnog marketinga](/cene-digitalnog-marketinga).

## Najcesci razlozi zbog kojih CPC nepotrebno raste

U vecini naloga CPC "bezi" nagore zbog iste kombinacije gresaka:

- previse sirok keyword set bez discipline negativnih reci,
- slabi oglasi i nizak CTR,
- ad grupe bez jasnog intent fokusa,
- landing koji ne odgovara query-ju i obecanju iz oglasa,
- retka analiza search terms izvestaja,
- oslanjanje na automatiku bez kontrole kvaliteta upita.

Ako ti kampanja trosi budzet a leadovi nisu upotrebljivi, cesto je problem i u konverzionoj putanji. Tu pomaze i [SEO optimizacija cena](/seo-optimizacija-cena) kada zelis dugorocno stabilniji traffic miks.

## 30-dnevni plan za zdraviji CPC i bolji kvalitet upita

- **Nedelja 1:** segmentacija kampanja po intentu + osnovni keyword klasteri.
- **Nedelja 2:** search terms ciscenje + negativne reci + gasenje otpada.
- **Nedelja 3:** dorada oglasa i landing sekcija sa slabim CR-om.
- **Nedelja 4:** preraspodela budzeta na ad grupe sa najboljim CPL trendom.

Na kraju meseca glavno pitanje nije "koliko je klik", nego **koliko kosta kvalifikovan lead koji mozes da zatvoris**.

## Zakljucak

Ako treba da zapamtis jednu stvar: CPC je korisna metrika, ali samo u kontekstu intenta, landing kvaliteta i poslovnog ishoda.
Nizak klik bez upita je skup. Visi klik koji donosi kvalitetnog klijenta moze biti najisplativiji.

Ako hoces, mogu da ti slozim brz benchmark za tvoju industriju (CPC raspon + test budzet + prve optimizacije) preko [kontakt forme](/kontakt).
`,
  },
"""

pattern = re.compile(
    r"\s*\{\n\s*slug: 'google-ads-cena-po-kliku-srbija-2026',[\s\S]*?\n\s*\},\n\s*\{\n\s*slug: 'vodjenje-google-ads-kampanja-cena-srbija-2026',",
    re.MULTILINE,
)

replacement = "\n" + new_block + "  {\n    slug: 'vodjenje-google-ads-kampanja-cena-srbija-2026',"

new_text, count = pattern.subn(replacement, text, count=1)
if count != 1:
    raise SystemExit(f"Replacement failed, count={count}")

path.write_text(new_text, encoding="utf-8")
print("Updated google-ads-cena-po-kliku-srbija-2026 block")
