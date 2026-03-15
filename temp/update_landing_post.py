from pathlib import Path

path = Path(r"C:\Users\Eventide\.openclaw\workspace-devona\projects\arcads-clone\src\pages\blog\blogData.js")
text = path.read_text(encoding="utf-8")
start = text.index("slug: 'izrada-landing-stranice-cena-rokovi-sta-ulazi-u-cenu'")
end = text.index("slug: 'copywriting-formule-koje-rade'", start)

new_block = """slug: 'izrada-landing-stranice-cena-rokovi-sta-ulazi-u-cenu',
    title: 'Izrada landing stranice: cena, rokovi, šta ulazi u cenu (Srbija 2026)',
    excerpt: 'Koliko realno košta landing stranica u Srbiji 2026, šta ulazi u cenu, gde firme najčešće pogreše i kako da proceniš da li je ponuda zdrava ili samo izgleda jeftino.',
    date: '2026-03-11',
    category: 'Web Design',
    readTime: '10 min',
    content: `
## Koliko košta izrada landing stranice u Srbiji 2026 (kratak odgovor)

Ako tražite brzu i poštenu procenu za upit **izrada landing stranice cena**, realan raspon na srpskom tržištu je najčešće **300€ do 1.800€+**.

Na papiru to deluje kao ogroman raspon. U praksi i jeste. Nije isto da li dobijate jednu jednostavnu stranicu sa formom i osnovnim copy-em, ili stranicu koja je stvarno spremna za plaćeni saobraćaj, praćenje konverzija i ozbiljniji CRO rad.

Drugim rečima, razlika u ceni retko nastaje zato što je neko "skuplji bez razloga". Najčešće nastaje zato što jedna ponuda pokriva samo dizajn i development, a druga uključuje istraživanje publike, poruku, tracking i logiku zbog koje landing kasnije stvarno prodaje.

Ako želite širi kontekst troškova sajta, pogledajte i [izrada WordPress sajta cena](/izrada-wordpress-sajta-cena).

## Rasponi cena po nivou projekta

Najprirodnije je da landing stranicu gledate kroz tri realna nivoa, jer tako mnogo lakše procenite gde zapravo pripada vaš projekat.

- **Starter landing (300€-600€)** - jedna ponuda, osnovni copy, forma i tehnički čist deployment. Ovo ima smisla kada vam treba brza validacija jedne usluge ili jednostavan lead capture.
- **Growth landing (600€-1.100€)** - jači copywriting, bolja sekciona struktura, osnovni GA4 događaji i ozbiljnija mobilna optimizacija. Ovo je najčešći zdrav raspon za firme koje već planiraju oglase ili aktivniji outbound.
- **Performance landing (1.100€-1.800€+)** - istraživanje publike i konkurencije, jasna value proposition matrica, CRO logika, A/B-ready struktura i napredniji tracking. Ovo je nivo gde landing više nije "stranica", nego deo prodajnog sistema.

Ako neka ponuda deluje predobro da bi bila istinita, najčešće je problem u onome što nije napisano. Obično fale poruka, merenje, revizije ili ozbiljna mobilna optimizacija. To se ne vidi odmah na PDF ponudi, ali se vrlo brzo vidi kada krenu klikovi i leadovi.

## Šta tačno ulazi u cenu (i šta se često plaća posebno)

U ozbiljnoj ponudi najčešće dobijate:

- brief i ciljnu strukturu stranice,
- copy za hero, benefite, dokazne sekcije i CTA,
- responsive dizajn (mobile-first),
- development + validaciju forme,
- osnovni SEO setup (title, meta, canonical, heading hijerarhija),
- osnovni analytics setup (lead event + zahvalnica ili event-based cilj),
- QA (mobilni prikaz, brzina, forma, osnovni UX flow).

Najčešći dodatni troškovi:

- custom ilustracije/video produkcija,
- više verzija stranice za različite ICP segmente,
- CRM integracije i automatizacije,
- kontinuirana CRO optimizacija posle launch-a.

Za budžet po kanalima pre lansiranja, korisno je uporediti i [Google reklame cena](/google-reklame-cena) i [Instagram reklame cena](/instagram-reklame-cena).

## Rokovi: koliko traje kvalitetna landing stranica

Tipičan rok je **6-15 radnih dana**, uz normalan feedback ciklus.

Primer realnog timeline-a:

1. **Dan 1-2:** discovery + ponuda + KPI cilj
2. **Dan 2-4:** wireframe + struktura poruke
3. **Dan 4-8:** copy + dizajn + development
4. **Dan 8-11:** QA, form testing, speed pass
5. **Dan 11-15:** launch + tracking verifikacija + početni monitoring

Najčešće kašnjenje ne nastaje u kodu, već u nejasnom brief-u i sporom odobrenju sadržaja.

## Kako da procenite da li je ponuda realna ili "jeftina zamka"

Pre potpisa, pitajte sledeće:

- Da li je uključeno merenje konverzija, ne samo dizajn?
- Ko piše copy i da li je vezan za kanal akvizicije?
- Da li postoji jasan CTA tok (jedna primarna akcija)?
- Da li ponuda pokriva mobile UX i brzinu?
- Šta je tačno scope revizija (koliko rundi i šta ulazi)?

Ako na ova pitanja dobijete nejasne odgovore, verovatno kupujete "stranicu kao fajl", a ne alat za akviziciju.

## Cena landing stranice bez CPC i lead kvaliteta je nepotpuna

Landing ne treba posmatrati izolovano od medija.
Ako je Google Ads klik skup, svaka greška na landing-u je dodatni trošak.

Zato pre finalnog launch-a proverite:

- usklađenost headline-a sa ključnim upitom,
- jasan dokaz poverenja iznad prevoja,
- kratku formu bez "frikcije",
- jednu dominantnu CTA akciju,
- brzinu učitavanja na mobilnom.

Za referencu troška klika pogledajte [Google Ads cena po kliku u Srbiji 2026](/blog/google-ads-cena-po-kliku-srbija-2026), a za najčešće UX/CRO propuste i [5 grešaka na landing stranicama koje ubijaju konverzije](/blog/5-gresaka-landing-stranice-konverzije).

## Mini ROI primer (kako da gledate isplativost)

Primer:

- ulaganje u landing: **1.200€**
- budžet oglasa: **1.500€ / mesec**
- rast konverzije: **2,1% -> 3,4%**

Sa istim ad spend-om dobijate više kvalifikovanih lead-ova, pa razlika u performansu često vrati investiciju u 1-3 meseca, zavisno od vrednosti klijenta.

Drugim rečima: prava metrika nije "koliko košta landing stranica", nego **koliko košta jedan kvalitetan upit posle launch-a**.

## Zaključak

Ako iz ovog teksta treba da ponesete samo jednu stvar, neka bude ovo: landing stranica nije trošak koji kupujete zbog dizajna, nego alat koji treba da vrati uložen novac kroz bolje upite i bolju konverziju.

Zato cenu nemojte gledati odvojeno od tri pitanja:
- šta tačno stranica treba da proda,
- odakle dolazi saobraćaj,
- kako ćete meriti da li radi.

Kada to imate jasno, mnogo lakše procenite da li je ponuda realna ili samo izgleda jeftino dok ne krenu dorade.

Ako želite precizan opseg cene i rokova za vaš konkretan funnel, javite se kroz [kontakt formu](/kontakt) i dobićete plan po prioritetima.
`,
  },
  {
    """

text = text[:start] + new_block + text[end:]
path.write_text(text, encoding="utf-8")
print("Updated landing page pricing blog post block.")
