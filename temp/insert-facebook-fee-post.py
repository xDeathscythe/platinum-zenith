from pathlib import Path

path = Path(r"C:\Users\Eventide\.openclaw\workspace-devona\projects\arcads-clone\src\pages\blog\blogData.js")
text = path.read_text(encoding="utf-8")
marker = "const rawBlogPosts = [\n"
if marker not in text:
    raise SystemExit("marker not found")
slug = "vodjenje-facebook-ads-kampanja-cena-srbija-2026"
if slug in text:
    raise SystemExit("post already exists")

insert = """\n  {
    slug: 'vodjenje-facebook-ads-kampanja-cena-srbija-2026',
    title: 'Vodjenje Facebook Ads kampanja cena u Srbiji 2026: koliko kosta i sta realno dobijas',
    excerpt: 'Koliko realno kosta vodjenje Facebook Ads kampanja u Srbiji 2026, koji modeli naplate postoje i kako da procenis da li agencija donosi profit ili samo lep dashboard.',
    date: '2026-03-15',
    category: 'Facebook Ads',
    readTime: '10 min',
    content: `
## Vodjenje Facebook Ads kampanja cena u Srbiji 2026: kratak odgovor

Ako trazis upit **vodjenje facebook ads kampanja cena**, najcesci rasponi na srpskom trzistu u 2026 izgledaju ovako:

- **freelance / junior setup:** 250e-500e mesecno,
- **agencijski standard za SMB:** 500e-1.200e mesecno,
- **napredni growth model (vise funnel-a, kreativni testovi, CRO):** 1.200e-3.000e+.

Model naplate moze biti fiksni fee, procenat od budzeta ili hibrid. Ako biras izmedju modela, korisno je i poredjenje [fiksna naknada vs revenue share](/fiksna-naknada-vs-revenue-share).

## Zasto "jeftino vodjenje" cesto bude najskuplje

Najveca greska je da gledas samo cenu usluge, bez kvaliteta sistema iza nje.
Ako je fee nizak, a kampanja trosi budzet na pogresan intent i slabe kreative, ukupan trosak po klijentu postaje veci.

Drugim recima: nije bitno da li je menadzment 300e ili 900e ako je rezultat isti.
Bitno je koliko te izadje **kvalifikovan lead** i koliko tih leadova postaje prodaja.

Za benchmark CPC sloja pogledaj i [Meta Ads cena po kliku u Srbiji 2026](/blog/meta-ads-cena-po-kliku-srbija-2026).

## Sta treba da ulazi u ozbiljno vodjenje Facebook Ads-a

Ako agencija samo "pusti kampanju" i jednom nedeljno posalje screenshot, to nije vodjenje.
Minimum koji treba da dobijes:

1. strategija po funnel fazama (cold, warm, hot),
2. plan testiranja kreativa i poruka,
3. event tracking i atribucija koja ima smisla,
4. nedeljna optimizacija publika, placement-a i budzeta,
5. mesecni performance review sa sledecim jasnim potezima.

Bez ovoga placas media buying, a ne sistem rasta.

## Koji model naplate ima smisla za vecinu firmi

### 1) Fiksni fee
Najbolji kad je scope jasan i treba ti predvidiv trosak.
Dobar je za firme koje tek grade proces i ne zele varijabilan overhead.

### 2) Procenat od budzeta
Ima logiku kada je nalog vec stabilan i skaluje se.
Problem: agencija moze imati motiv da samo digne potrosnju umesto da podigne profit.

### 3) Hibrid (fiksno + performance uslov)
Cesto najzdraviji kompromis jer pokriva operativni rad i uvodi odgovornost za rezultat.
Ali performance deo mora biti vezan za metrike koje firma moze da verifikuje.

Ako zelis da uporedis Facebook i Search kanal po trosku i intentu, pogledaj i [google reklame cena](/google-reklame-cena) i [instagram reklame cena](/instagram-reklame-cena).

## Kako da procenis da li agencija stvarno radi posao

Prepotentan dashboard nije dokaz.
Ove metrike su prakticnije za evaluaciju:

- cena kvalifikovanog upita,
- cena zakazanog poziva/termina,
- procenat leadova koji odgovara ICP-u,
- ROAS ili blended CAC (gde je primenljivo),
- brzina reakcije tima na promene u performansama.

Ako agencija ne zna da poveze kampanju sa prodajnim ishodom, fee je sekundaran problem.

## Najcesce greske zbog kojih cena vodjenja ne vraca ulaganje

### 1) Jedna kampanja za sve ponude
Razlicit intent trazi razlicit oglas, publiku i poruku.

### 2) Nema ritma testiranja kreativa
Facebook bez novog creative input-a brzo udje u zamor i rast cene.

### 3) Slab post-click deo
Klik nije cilj. Ako landing ili forma ne zatvaraju odluku, CPL raste bez obzira na dobar CTR.
Za taj deo pogledaj i [izradu landing stranice: cena, rokovi, sta ulazi u cenu](/blog/izrada-landing-stranice-cena-rokovi-sta-ulazi-u-cenu).

### 4) Kasna obrada leadova
Ako sales odgovori tek sutra, kampanja placa "vruce" upite koji se ohlade.

### 5) Izvestaji bez poslovnog konteksta
"Imamo bolji CTR" ne znaci nista ako broj zakazanih sastanaka stagnira.

## Koliki budzet i fee imaju smisla za start

Praktican okvir za vecinu lokalnih usluga:

- media budzet: 600e-1.500e mesecno,
- menadzment fee: 500e-1.200e,
- test period: minimum 6-8 nedelja pre ozbiljnih zakljucaka.

Ispod tog volumena tesko je skupiti dovoljno signala za kvalitetnu optimizaciju.

Za siri pregled ulaganja po kanalima, pogledaj [cene digitalnog marketinga](/cene-digitalnog-marketinga).

## 30-dnevni plan koji najcesce donosi najbrzi pomak

- **Nedelja 1:** audit naloga, tracking, definicija ICP i ponude.
- **Nedelja 2:** launch 2-3 creative ugla i jedna jasna landing poruka.
- **Nedelja 3:** gasenje slabih kombinacija + preraspodela budzeta.
- **Nedelja 4:** optimizacija pobednickog ugla, dorada CTA toka i report sa sledecim fokusom.

Poenta nije da sve radi savrseno odmah, nego da svake nedelje donosis bolje odluke na realnim podacima.

## FAQ: vodjenje Facebook Ads kampanja cena

### Da li je bolje platiti manji fee i veci budzet, ili obrnuto?
Ako biras, bolji je kvalitetniji menadzment i malo manji budzet, jer losa optimizacija vrlo brzo "pojede" razliku.

### Koliko brzo mogu da ocekujem stabilne rezultate?
Prve signale vidis brzo, ali za stabilan CPA i predvidiv pipeline obicno treba 6-10 nedelja.

### Da li mala firma moze da radi sa agencijom?
Moze, ako postoji realan minimalni budzet i jasna ponuda. Bez toga ni najbolji menadzment ne moze da izvuce rezultat.

### Da li je procenat od budzeta los model?
Nije automatski los, ali mora imati jasne granice i KPI-jeve koji cuvaju profit, ne samo rast potrosnje.

## Zakljucak

Vodjenje Facebook Ads kampanja u Srbiji 2026 nije trosak koji biras po najnizoj ponudi, nego sistem koji treba da vrati ulozen novac kroz kvalitetnije leadove i bolji pipeline.
Ako hoces, mogu da uradim mini audit tvog naloga i dam 3 konkretna poteza za bolji odnos budzeta i rezultata preko [kontakt forme](/kontakt).
`,
  },
"""

updated = text.replace(marker, marker + insert, 1)
path.write_text(updated, encoding="utf-8")
print("Inserted new blog post")
