from pathlib import Path

path = Path('C:/Users/Eventide/.openclaw/workspace-devona/projects/arcads-clone/src/pages/blog/blogData.js')
text = path.read_text(encoding='utf-8')

start_marker = "  {\n    slug: 'vodjenje-google-ads-kampanja-cena-srbija-2026',"
end_marker = "  {\n    slug: 'izrada-landing-stranice-cena-rokovi-sta-ulazi-u-cenu',"

start = text.find(start_marker)
if start == -1:
    raise RuntimeError('start marker not found')

end = text.find(end_marker, start)
if end == -1:
    raise RuntimeError('end marker not found')

new_block = """  {
    slug: 'vodjenje-google-ads-kampanja-cena-srbija-2026',
    title: 'Vodenje Google Ads kampanja: cena u Srbiji 2026 (sta ulazi u uslugu)',
    excerpt: 'Koliko realno kosta vodenje Google Ads kampanja u Srbiji 2026, sta mora da ulazi u fee i kako da procenis da li agencija pravi profit ili samo trosi budzet.',
    date: '2026-03-14',
    category: 'Google Ads',
    readTime: '10 min',
    content: `
## Vodenje Google Ads kampanja: koliko realno kosta u Srbiji 2026

Ako trazis kratak odgovor za upit **vodenje Google Ads kampanja cena**, najcesci raspon u Srbiji 2026 izgleda ovako:

- **manji nalozi (do 700e ad budget): 150e-300e / mesec**
- **srednji nalozi (700e-2.000e): 300e-700e / mesec**
- **veci nalozi (2.000e+): 700e+ / mesec ili procenat od budzeta**

Ali sama cifra ne znaci mnogo dok ne znas sta je ukljuceno. Dve agencije mogu naplatiti isti fee, a isporuciti potpuno razlicit rezultat.

Ako hoces benchmark i za sam medijski trosak (van fee-ja), pogledaj i [Google reklame cena](/google-reklame-cena).

## Sta zapravo placas kada placas vodenje

Dobro vodenje nije "klikni launch i cekaj". Ozbiljan rad ukljucuje:

1. mapiranje keyword-a po intentu i business prioritetu,
2. jasnu strukturu kampanja/ad grupa,
3. redovan search terms audit + negativne kljucne reci,
4. testiranje oglasa, ekstenzija i poruka,
5. optimizaciju po kvalitetu lead-a, ne samo po CPC-u,
6. kontrolu trackinga i konverzionih signala,
7. mesecni plan eksperimenata i izvestaj sa sledecim koracima.

Ako od svega dobijas samo screenshot grafika i genericki PDF, to nije vodenje nego administracija.

## 4 modela naplate koje ces najcesce videti

### 1) Fiksna mesecna naknada
Najpredvidljiviji model. Dobar je kada je scope rada jasno definisan.

### 2) Procenat od ad budget-a
Cest kod vecih naloga, ali mora da postoji jasan dogovor sta raste zajedno sa budzetom (broj testova, dubina analize, CRO input, reporting nivo).

### 3) Hibrid (fiksno + procenat)
Praktican kada nalog prelazi iz test faze u skaliranje i treba i stabilan rad i dodatna operativa.

### 4) Performance bonus
Fiksna baza + bonus za dogovorene KPI-jeve. Ima smisla samo kada su tracking i atribucija cisti.

Ako poredis modele saradnje, korisno je i [fiksna naknada vs revenue share](/fiksna-naknada-vs-revenue-share).

## Kako da procenis da li je ponuda agencije realna

Postavi ovih 6 pitanja pre potpisa:

1. Da li nalog ostaje u mom vlasnistvu?
2. Koji je konkretan plan testiranja za prvih 30 dana?
3. Kako pratite kvalitet lead-a, ne samo broj lead-ova?
4. Kako izgleda search terms higijena i koliko cesto se radi?
5. Sta tacno dobijam u mesecnom izvestaju?
6. Koji KPI je glavni signal da saradnja napreduje?

Ako odgovori nisu jasni, verovatno placas neizvestan proces.

## Najcesce greske zbog kojih fee izgleda "preskup"

- nema razdvajanja kampanja po intentu,
- nema discipline oko negativnih keyword-a,
- oglasi se testiraju retko ili nikad,
- landing stranica ne prati poruku oglasa,
- sve se meri kroz klikove, ne kroz prodajni ishod.

U tim slucajevima problem obicno nije "cena agencije", nego los sistem.

Za post-click optimizaciju pogledaj i [izrada WordPress sajta cena](/izrada-wordpress-sajta-cena), a za siri marketinski miks [cene digitalnog marketinga](/cene-digitalnog-marketinga).

## Brza racunica da izbegnes pogresan fokus

Recimo da je fee agencije **500e mesecno**. Na prvi pogled deluje visoko.

Ali ako isti budzet za oglase, uz bolju optimizaciju, spusti cenu kvalifikovanog lead-a sa 40e na 26e, razlika vrlo brzo pokrije fee.

Zato je kljucna metrika: **koliko kosta kvalifikovan lead koji se zatvara u prodaju**.

Ako hoces dublji benchmark CPC raspona po industriji, pogledaj [Google Ads cena po kliku u Srbiji 2026](/blog/google-ads-cena-po-kliku-srbija-2026).

## 90-dnevni okvir za zdravu saradnju

- **Mesec 1:** tracking audit, intent struktura, pocetni test oglasa.
- **Mesec 2:** ciscenje search terms, dorada oglasa/landinga, stabilizacija CPL-a.
- **Mesec 3:** skaliranje najboljih segmenata i uvodjenje novih eksperimenata.

Ako posle 90 dana nema jasnog napretka kroz KPI trendove, model rada mora da se menja.

## Zakljucak

Za temu **vodenje Google Ads kampanja cena** ne biraj najnizi fee, nego najjasniji sistem koji vodi do profitabilnih lead-ova.
Ako zelis, mozemo uraditi brz pregled tvog naloga i predloziti gde su najbrze optimizacije po uticaju - javi se preko [kontakt forme](/kontakt).
`,
  },
"""

updated = text[:start] + new_block + text[end:]
path.write_text(updated, encoding='utf-8')
print('updated blogData.js')
