from pathlib import Path

path = Path(r"C:\Users\Eventide\.openclaw\workspace-devona\projects\arcads-clone\src\pages\blog\blogData.js")
text = path.read_text(encoding="utf-8")

slug = "instagram-reels-reklame-cena-srbija-2026"
if slug in text:
    raise SystemExit("Slug already exists, aborting.")

insert_block = """  {
    slug: 'instagram-reels-reklame-cena-srbija-2026',
    title: 'Instagram Reels reklame cena u Srbiji 2026: budzet, CPM, CPC i CPL rasponi',
    excerpt: 'Koliko realno kostaju Instagram Reels reklame u Srbiji 2026, koji budzet ima smisla i kako da postavis CPM/CPC/CPL metrike da kampanja ne pojede profit.',
    date: '2026-03-15',
    category: 'Instagram Ads',
    readTime: '11 min',
    content: `
## Instagram Reels reklame cena u Srbiji 2026: kratak odgovor

Ako trazis upit **instagram reels reklame cena**, najkorisnije je da ne juris jednu "magicnu" brojku.
Za Srbiju 2026 je realnije gledati raspon po fazi funnel-a i po kvalitetu publike:

- **cold publika (prospecting):** 0.07e-0.45e CPC,
- **warm publika (engagement/video/lookalike):** 0.12e-0.65e CPC,
- **retargeting:** 0.10e-0.55e CPC.

Klik od 0.08e moze da izgleda odlicno, ali da ne donese nijedan ozbiljan upit.
Klik od 0.40e moze da bude sjajan ako zatvara lead koji se realno pretvara u prihod.
Za siri okvir ulaganja po samom kanalu pogledaj i [instagram reklame cena](/instagram-reklame-cena), a ovaj tekst koristi kao Reels-specifikaciju.

## CPC je samo deo slike (CPC + CPM + CPL zajedno)

Najcesca greska je optimizacija samo po CPC-u.
Ako hoces profitabilan kanal, uvek gledaj tri metrike zajedno:

1. **CPM** - koliko skupo kupujes paznju,
2. **CPC** - koliko kreativa pretvara prikaz u klik,
3. **CPL/CPA** - da li klikovi daju poslovni rezultat.

Ako je CPM normalan, a CPC visok, problem je najcesce u kreativama ili poruci.
Ako su CPM i CPC dobri, a CPL los, problem je najcesce u landing-u i obradi leadova.
Za post-click deo korisno je proveriti i [izradu WordPress sajta cena](/izrada-wordpress-sajta-cena).

## Realni benchmark rasponi po nisama (Srbija 2026)

Orijentacioni opsezi kada je tracking postavljen kako treba i kada kampanje nisu u haosu:

- **lokalne usluge (saloni, servisi, ordinacije):** CPC 0.08e-0.45e | CPL 7e-35e
- **edukacija i kursevi:** CPC 0.12e-0.70e | CPL 10e-55e
- **B2B usluge:** CPC 0.30e-1.20e | CPL 25e-120e
- **e-commerce (prospecting):** CPC 0.06e-0.35e | CPA 6e-32e
- **premium usluge (pravne, finansijske, medicinske):** CPC 0.35e-1.40e | CPL 35e-170e

Ako hoces Search benchmark za isti period, uporedi i [Google Ads cena po kliku u Srbiji 2026](/blog/google-ads-cena-po-kliku-srbija-2026).

## Sta najvise dize Instagram cenu klika

### 1) Jedna kreativna poruka za sve publike
Kada isti oglas gadja i hladnu i toplu publiku, signal se rasipa.
Rezultat je skuplji klik i slabiji kvalitet upita.

### 2) Pogresan odnos video i static formata
Instagram feed, stories i reels ne rade isto.
Ako sve ide na jedan format, brzo raste frequency i CPC ide gore.

### 3) Oglas obecava jedno, landing stranica drugo
Ako oglas obecava "brzu procenu" a landing otvara opstu pricu, kvalitet signala pada.
To direktno podize i CPC i CPL.

### 4) Nema ciscenja publika i iskljucenja
Bez redovnog ciscenja overlap-a i exclusion pravila, ad setovi sami sebi dizu aukcijsku cenu.

### 5) KPI se vodi po vanity metrikama
Ako gledas samo klikove i reach bez CPL/CPA i quality rate-a, budzet "curi" nevidljivo.
Za poredjenje sa drugim Meta scenarijem pogledaj i [koliko kostaju Facebook reklame](/koliko-kosta-facebook-reklama).

## Kako da postavis test budzet bez gadjanja

Prakticna formula za prvi mesec:

1. odredi ciljnu cenu leada ili kupovine,
2. odredi potreban broj rezultata,
3. dodaj safety faktor 1.3-1.6 za fazu ucenja.

Primer:
- cilj je 30 kvalifikovanih leadova,
- ciljna cena leada 22e,
- safety faktor 1.4.

Test budzet = 30 x 22e x 1.4 = **924e** mesecno.

To je mnogo stabilnije nego "pustimo 200e pa da vidimo" bez ozbiljne hipoteze.

## 30-dnevni plan za nizi CPC i bolji kvalitet lead-a

- **Nedelja 1:** audit kreativa, publika i pixel/event signala.
- **Nedelja 2:** launch novih oglasa po 3 razlicita ugla poruke.
- **Nedelja 3:** rezanje slabih ad setova i preraspodela budzeta po kvalitetu lead-a.
- **Nedelja 4:** optimizacija landing sekcija i brzine odgovora prodajnog tima.

Kada je ovaj ritam stabilan, CPC padne, ali je jos vaznije da padne i realan trosak po zakljucenom poslu.

Za siri budzetski okvir po kanalima pogledaj i [cene digitalnog marketinga](/cene-digitalnog-marketinga), a za search demand i [google reklame cena](/google-reklame-cena).

## Zakljucak

Instagram Reels reklame cena u Srbiji 2026 treba meriti kroz kvalitet rezultata, ne samo kroz nisku cenu klika.
Ako hoces, mogu da oznacim 3 najbrze optimizacije koje obicno najvise spuste CPL u tvom nalogu preko [kontakt forme](/kontakt).
`,
  },
"""

needle = "const rawBlogPosts = [\n"
if needle in text:
    text = text.replace(needle, needle + insert_block, 1)
else:
    needle = "const rawBlogPosts = [\r\n"
    if needle not in text:
        raise SystemExit("Could not find rawBlogPosts start.")
    text = text.replace(needle, needle + insert_block.replace("\n", "\r\n"), 1)

path.write_text(text, encoding="utf-8")
print("Inserted post:", slug)
