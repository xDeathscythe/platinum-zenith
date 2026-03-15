from pathlib import Path
import re

path = Path(r"C:\Users\Eventide\.openclaw\workspace-devona\projects\arcads-clone\src\hooks\pageMetaData.js")
text = path.read_text(encoding='utf-8')

replacement = """    '/koliko-kosta-facebook-reklama': {
    \"@context\": \"https://schema.org\",
    \"@graph\": [
      {
        \"@type\": \"WebPage\",
        \"@id\": `${SITE_URL}/koliko-kosta-facebook-reklama#webpage`,
        \"url\": `${SITE_URL}/koliko-kosta-facebook-reklama`,
        \"name\": \"Koliko kosta Facebook reklama u Srbiji 2026\",
        \"description\": \"Praktican vodic kroz realne troskove Facebook i Instagram oglasa u Srbiji 2026, sa budzetskim fazama, CPC/CPA rasponima i cenom vodjenja kampanja.\",
        \"inLanguage\": \"sr-RS\",
        \"isPartOf\": { \"@id\": SITE_URL },
        \"about\": { \"@id\": `${SITE_URL}/koliko-kosta-facebook-reklama#service` },
        \"breadcrumb\": { \"@id\": `${SITE_URL}/koliko-kosta-facebook-reklama#breadcrumb` },
        \"mainEntity\": [
          { \"@id\": `${SITE_URL}/koliko-kosta-facebook-reklama#article` },
          { \"@id\": `${SITE_URL}/koliko-kosta-facebook-reklama#service` },
          { \"@id\": `${SITE_URL}/koliko-kosta-facebook-reklama#budget-tiers` },
          { \"@id\": `${SITE_URL}/koliko-kosta-facebook-reklama#management-models` },
          { \"@id\": `${SITE_URL}/koliko-kosta-facebook-reklama#pricing-models` },
          { \"@id\": `${SITE_URL}/koliko-kosta-facebook-reklama#placement-benchmarks` },
          { \"@id\": `${SITE_URL}/koliko-kosta-facebook-reklama#funnel-split` },
          { \"@id\": `${SITE_URL}/koliko-kosta-facebook-reklama#cost-mistakes` },
          { \"@id\": `${SITE_URL}/koliko-kosta-facebook-reklama#howto-budget` },
          { \"@id\": `${SITE_URL}/koliko-kosta-facebook-reklama#faq` }
        ],
        \"mentions\": [
          { \"@id\": `${SITE_URL}/google-reklame-cena#service` },
          { \"@id\": `${SITE_URL}/instagram-reklame-cena#service` },
          { \"@id\": `${SITE_URL}/cene-digitalnog-marketinga#service` },
          { \"@id\": `${SITE_URL}/izrada-wordpress-sajta-cena#service` },
          { \"@id\": `${SITE_URL}/cro#service` }
        ],
        \"potentialAction\": {
          \"@type\": \"ContactAction\",
          \"name\": \"Zakazite procenu Meta Ads budzeta\",
          \"target\": `${SITE_URL}/kontakt`
        }
      },
      {
        \"@type\": \"Article\",
        \"@id\": `${SITE_URL}/koliko-kosta-facebook-reklama#article`,
        \"headline\": \"Koliko kosta Facebook reklama u Srbiji 2026: CPC, CPM, CPA i cena vodjenja kampanja\",
        \"description\": \"Realni benchmark rasponi i praktican plan budzeta za Facebook i Instagram oglase na trzistu Srbije.\",
        \"author\": { \"@type\": \"Person\", \"name\": \"Aleksandar Nenadovic\" },
        \"publisher\": { \"@id\": `${SITE_URL}#organization` },
        \"inLanguage\": \"sr-RS\",
        \"datePublished\": \"2026-03-06\",
        \"dateModified\": \"2026-03-15\",
        \"mainEntityOfPage\": { \"@id\": `${SITE_URL}/koliko-kosta-facebook-reklama#webpage` },
        \"about\": { \"@id\": `${SITE_URL}/koliko-kosta-facebook-reklama#service` }
      },
      {
        \"@type\": \"Service\",
        \"@id\": `${SITE_URL}/koliko-kosta-facebook-reklama#service`,
        \"name\": \"Meta Ads upravljanje kampanjama\",
        \"description\": \"Planiranje, vodjenje i optimizacija Facebook i Instagram kampanja sa jasnim budzetskim fazama i fokusom na profitabilne konverzije.\",
        \"serviceType\": \"Meta Ads management\",
        \"url\": `${SITE_URL}/koliko-kosta-facebook-reklama`,
        \"areaServed\": { \"@type\": \"Country\", \"name\": \"Srbija\" },
        \"provider\": { \"@id\": `${SITE_URL}#organization`, \"@type\": \"Organization\", \"name\": \"Platinum Zenith\", \"url\": SITE_URL },
        \"mainEntityOfPage\": { \"@id\": `${SITE_URL}/koliko-kosta-facebook-reklama#webpage` },
        \"offers\": {
          \"@type\": \"AggregateOffer\",
          \"priceCurrency\": \"EUR\",
          \"lowPrice\": \"200\",
          \"highPrice\": \"5000\",
          \"offerCount\": \"4\"
        },
        \"hasOfferCatalog\": [
          { \"@id\": `${SITE_URL}/koliko-kosta-facebook-reklama#budget-tiers` },
          { \"@id\": `${SITE_URL}/koliko-kosta-facebook-reklama#management-models` },
          { \"@id\": `${SITE_URL}/koliko-kosta-facebook-reklama#pricing-models` }
        ],
        \"subjectOf\": [
          { \"@id\": `${SITE_URL}/koliko-kosta-facebook-reklama#placement-benchmarks` },
          { \"@id\": `${SITE_URL}/koliko-kosta-facebook-reklama#funnel-split` },
          { \"@id\": `${SITE_URL}/koliko-kosta-facebook-reklama#cost-mistakes` },
          { \"@id\": `${SITE_URL}/koliko-kosta-facebook-reklama#howto-budget` }
        ],
        \"additionalProperty\": [
          { \"@type\": \"PropertyValue\", \"name\": \"Tipicni CPC raspon\", \"value\": \"0,05 EUR - 0,65 EUR\" },
          { \"@type\": \"PropertyValue\", \"name\": \"Tipicni CPM raspon\", \"value\": \"2 EUR - 11 EUR\" },
          { \"@type\": \"PropertyValue\", \"name\": \"Tipicni CPA raspon\", \"value\": \"4 EUR - 45 EUR\" },
          { \"@type\": \"PropertyValue\", \"name\": \"Preporuceni test period\", \"value\": \"21-30 dana\" }
        ]
      },
      {
        \"@type\": \"OfferCatalog\",
        \"@id\": `${SITE_URL}/koliko-kosta-facebook-reklama#budget-tiers`,
        \"name\": \"Budzetske faze za Facebook i Instagram oglase\",
        \"itemListElement\": [
          {
            \"@type\": \"Offer\",
            \"name\": \"Test faza\",
            \"description\": \"Pocetni period validacije publike, ponude i kreativa.\",
            \"priceSpecification\": { \"@type\": \"PriceSpecification\", \"priceCurrency\": \"EUR\", \"minPrice\": \"200\", \"maxPrice\": \"600\" }
          },
          {
            \"@type\": \"Offer\",
            \"name\": \"Stabilan lead flow\",
            \"description\": \"Faza kontinuiteta i optimizacije za stabilan broj upita.\",
            \"priceSpecification\": { \"@type\": \"PriceSpecification\", \"priceCurrency\": \"EUR\", \"minPrice\": \"600\", \"maxPrice\": \"1800\" }
          },
          {
            \"@type\": \"Offer\",
            \"name\": \"Skaliranje\",
            \"description\": \"Povecanje obima kampanja uz kontrolu CPA i ROAS metrika.\",
            \"priceSpecification\": { \"@type\": \"PriceSpecification\", \"priceCurrency\": \"EUR\", \"minPrice\": \"1800\", \"maxPrice\": \"5000\" }
          },
          {
            \"@type\": \"Offer\",
            \"name\": \"Enterprise\",
            \"description\": \"Model za vise trzista i slozenije funnel scenarije.\",
            \"priceSpecification\": { \"@type\": \"PriceSpecification\", \"priceCurrency\": \"EUR\", \"minPrice\": \"5000\" }
          }
        ]
      },
      {
        \"@type\": \"OfferCatalog\",
        \"@id\": `${SITE_URL}/koliko-kosta-facebook-reklama#management-models`,
        \"name\": \"Cena vodjenja Meta Ads kampanja\",
        \"itemListElement\": [
          {
            \"@type\": \"Offer\",
            \"name\": \"Freelance / mikro tim\",
            \"priceSpecification\": { \"@type\": \"PriceSpecification\", \"priceCurrency\": \"EUR\", \"minPrice\": \"120\", \"maxPrice\": \"300\", \"billingDuration\": \"P1M\" }
          },
          {
            \"@type\": \"Offer\",
            \"name\": \"Specijalizovana agencija\",
            \"priceSpecification\": { \"@type\": \"PriceSpecification\", \"priceCurrency\": \"EUR\", \"minPrice\": \"250\", \"maxPrice\": \"700\", \"billingDuration\": \"P1M\" }
          },
          {
            \"@type\": \"Offer\",
            \"name\": \"Enterprise vodjenje\",
            \"priceSpecification\": { \"@type\": \"PriceSpecification\", \"priceCurrency\": \"EUR\", \"minPrice\": \"700\", \"billingDuration\": \"P1M\" }
          }
        ]
      },
      {
        \"@type\": \"OfferCatalog\",
        \"@id\": `${SITE_URL}/koliko-kosta-facebook-reklama#pricing-models`,
        \"name\": \"Modeli naplate za Meta Ads\",
        \"itemListElement\": [
          {
            \"@type\": \"Offer\",
            \"name\": \"Fiksna mesecna naknada\",
            \"description\": \"Predvidljiv mesecni trosak uz jasno definisan scope optimizacije.\",
            \"priceSpecification\": { \"@type\": \"PriceSpecification\", \"priceCurrency\": \"EUR\", \"minPrice\": \"200\", \"maxPrice\": \"650\", \"billingDuration\": \"P1M\" }
          },
          {
            \"@type\": \"Offer\",
            \"name\": \"Procenat od ad spend-a\",
            \"description\": \"Model 8-15% medijskog budzeta za naloge u fazi ubrzanog rasta.\",
            \"priceSpecification\": { \"@type\": \"PriceSpecification\", \"priceCurrency\": \"EUR\", \"minPrice\": \"8\", \"maxPrice\": \"15\", \"unitText\": \"%\" }
          },
          {
            \"@type\": \"Offer\",
            \"name\": \"Hibridni model\",
            \"description\": \"Kombinacija fiksnog dela i varijabilnog bonusa po performansu.\",
            \"priceSpecification\": { \"@type\": \"PriceSpecification\", \"priceCurrency\": \"EUR\", \"minPrice\": \"180\", \"maxPrice\": \"500\", \"billingDuration\": \"P1M\" }
          }
        ]
      },
      {
        \"@type\": \"ItemList\",
        \"@id\": `${SITE_URL}/koliko-kosta-facebook-reklama#placement-benchmarks`,
        \"name\": \"Benchmark rasponi po placement-u\",
        \"numberOfItems\": 3,
        \"itemListElement\": [
          {
            \"@type\": \"ListItem\",
            \"position\": 1,
            \"item\": {
              \"@type\": \"Thing\",
              \"name\": \"Instagram Reels\",
              \"description\": \"Najcesce nizi CPM uz dobar hook u prvih 2-3 sekunde.\",
              \"additionalProperty\": [
                { \"@type\": \"PropertyValue\", \"name\": \"CPM\", \"value\": \"2,5 - 8,5 EUR\" },
                { \"@type\": \"PropertyValue\", \"name\": \"CPC\", \"value\": \"0,07 - 0,40 EUR\" },
                { \"@type\": \"PropertyValue\", \"name\": \"CPA\", \"value\": \"5 - 28 EUR\" }
              ]
            }
          },
          {
            \"@type\": \"ListItem\",
            \"position\": 2,
            \"item\": {
              \"@type\": \"Thing\",
              \"name\": \"Facebook Feed\",
              \"description\": \"Stabilan placement za lead generation i remarketing kampanje.\",
              \"additionalProperty\": [
                { \"@type\": \"PropertyValue\", \"name\": \"CPM\", \"value\": \"3 - 10 EUR\" },
                { \"@type\": \"PropertyValue\", \"name\": \"CPC\", \"value\": \"0,12 - 0,65 EUR\" },
                { \"@type\": \"PropertyValue\", \"name\": \"CPA\", \"value\": \"8 - 45 EUR\" }
              ]
            }
          },
          {
            \"@type\": \"ListItem\",
            \"position\": 3,
            \"item\": {
              \"@type\": \"Thing\",
              \"name\": \"Facebook/Instagram Stories\",
              \"description\": \"Cesto efikasan remarketing sloj kada je ponuda jasna i kratka.\",
              \"additionalProperty\": [
                { \"@type\": \"PropertyValue\", \"name\": \"CPM\", \"value\": \"2 - 7 EUR\" },
                { \"@type\": \"PropertyValue\", \"name\": \"CPC\", \"value\": \"0,05 - 0,30 EUR\" },
                { \"@type\": \"PropertyValue\", \"name\": \"CPA\", \"value\": \"4 - 22 EUR\" }
              ]
            }
          }
        ]
      },
      {
        \"@type\": \"ItemList\",
        \"@id\": `${SITE_URL}/koliko-kosta-facebook-reklama#funnel-split`,
        \"name\": \"Primer raspodele budzeta po funnel-u\",
        \"numberOfItems\": 3,
        \"itemListElement\": [
          {
            \"@type\": \"ListItem\",
            \"position\": 1,
            \"item\": { \"@type\": \"Thing\", \"name\": \"Cold publika\", \"description\": \"55-70% budzeta za akviziciju novih korisnika.\" }
          },
          {
            \"@type\": \"ListItem\",
            \"position\": 2,
            \"item\": { \"@type\": \"Thing\", \"name\": \"Warm publika\", \"description\": \"20-30% budzeta za edukaciju i engagement.\" }
          },
          {
            \"@type\": \"ListItem\",
            \"position\": 3,
            \"item\": { \"@type\": \"Thing\", \"name\": \"Hot/remarketing\", \"description\": \"10-20% budzeta za zavrsni push ka konverziji.\" }
          }
        ]
      },
      {
        \"@type\": \"ItemList\",
        \"@id\": `${SITE_URL}/koliko-kosta-facebook-reklama#cost-mistakes`,
        \"name\": \"Najcesce greske koje podizu cenu Meta kampanja\",
        \"numberOfItems\": 5,
        \"itemListElement\": [
          { \"@type\": \"ListItem\", \"position\": 1, \"name\": \"Presiroko targetiranje bez segmentacije publike\" },
          { \"@type\": \"ListItem\", \"position\": 2, \"name\": \"Jedna kreativa predugo bez osvezavanja\" },
          { \"@type\": \"ListItem\", \"position\": 3, \"name\": \"Optimizacija po klikovima umesto po konverzijama\" },
          { \"@type\": \"ListItem\", \"position\": 4, \"name\": \"Slaba landing stranica i spor follow-up leadova\" },
          { \"@type\": \"ListItem\", \"position\": 5, \"name\": \"Skaliranje budzeta bez validiranih CPA granica\" }
        ]
      },
      {
        \"@type\": \"HowTo\",
        \"@id\": `${SITE_URL}/koliko-kosta-facebook-reklama#howto-budget`,
        \"name\": \"Kako postaviti Meta Ads budzet za prvih 90 dana\",
        \"description\": \"Praktican model za planiranje, validaciju i skaliranje Facebook/Instagram kampanja bez rasipanja budzeta.\",
        \"inLanguage\": \"sr-RS\",
        \"totalTime\": \"P90D\",
        \"step\": [
          {
            \"@type\": \"HowToStep\",
            \"position\": 1,
            \"name\": \"Definisite cilj i maksimalni CPA\",
            \"text\": \"Postavite koliko leadova/prodaja zelite mesecno i koliki CPA ostavlja zdravu marzu.\",
            \"url\": `${SITE_URL}/koliko-kosta-facebook-reklama#cilj-kampanje`
          },
          {
            \"@type\": \"HowToStep\",
            \"position\": 2,
            \"name\": \"Pokrenite test sa vise kreativnih uglova\",
            \"text\": \"Testirajte najmanje 3-5 oglasa i odvojite cold, warm i hot publike.\",
            \"url\": `${SITE_URL}/koliko-kosta-facebook-reklama#budzet-faze-rasta`
          },
          {
            \"@type\": \"HowToStep\",
            \"position\": 3,
            \"name\": \"Uvedite nedeljnu optimizaciju\",
            \"text\": \"Gasite slabe ad set-ove, osvezavajte kreative i pratite kvalitet upita, ne samo volumen.\",
            \"url\": `${SITE_URL}/koliko-kosta-facebook-reklama#kako-smanjiti-cenu-facebook-reklama`
          },
          {
            \"@type\": \"HowToStep\",
            \"position\": 4,
            \"name\": \"Skalirajte samo profitabilne kampanje\",
            \"text\": \"Povecavajte budzet postepeno 15-25% nedeljno na kampanjama koje drze ciljnu cenu akvizicije.\",
            \"url\": `${SITE_URL}/koliko-kosta-facebook-reklama#checklist-pre-nego-sto-povecas-budzet`
          }
        ]
      },
      {
        \"@type\": \"BreadcrumbList\",
        \"@id\": `${SITE_URL}/koliko-kosta-facebook-reklama#breadcrumb`,
        \"itemListElement\": [
          { \"@type\": \"ListItem\", \"position\": 1, \"name\": \"Pocetna\", \"item\": SITE_URL },
          { \"@type\": \"ListItem\", \"position\": 2, \"name\": \"Koliko kosta Facebook reklama\", \"item\": `${SITE_URL}/koliko-kosta-facebook-reklama` }
        ]
      },
      {
        \"@type\": \"FAQPage\",
        \"@id\": `${SITE_URL}/koliko-kosta-facebook-reklama#faq`,
        \"mainEntity\": [
          {
            \"@type\": \"Question\",
            \"name\": \"Koliki je minimalni budzet za pocetak?\",
            \"acceptedAnswer\": { \"@type\": \"Answer\", \"text\": \"Realan minimum je oko 200-300 EUR mesecno za medijski budzet, plus trosak vodjenja kampanja.\" }
          },
          {
            \"@type\": \"Question\",
            \"name\": \"Koliko kosta vodjenje Facebook i Instagram kampanja?\",
            \"acceptedAnswer\": { \"@type\": \"Answer\", \"text\": \"Za manje naloge vodjenje je obicno 120-300 EUR mesecno, a za aktivnije naloge 250-700 EUR mesecno u zavisnosti od obima rada.\" }
          },
          {
            \"@type\": \"Question\",
            \"name\": \"Da li je bolje ulagati u Facebook ili Instagram?\",
            \"acceptedAnswer\": { \"@type\": \"Answer\", \"text\": \"U praksi najbolje radi kombinacija oba placement-a, uz raspodelu budzeta prema tipu publike i performansama kreativa.\" }
          },
          {
            \"@type\": \"Question\",
            \"name\": \"Koliko brzo mogu da se vide rezultati?\",
            \"acceptedAnswer\": { \"@type\": \"Answer\", \"text\": \"Prvi signali dolaze u prvim danima, ali za stabilne zakljucke i optimizaciju najcesce je potrebno 2-4 nedelje kontinuiranog rada.\" }
          },
          {
            \"@type\": \"Question\",
            \"name\": \"Sta najvise utice na cenu reklame?\",
            \"acceptedAnswer\": { \"@type\": \"Answer\", \"text\": \"Najveci uticaj imaju kvalitet kreative, jasna ponuda, relevantnost publike i kvalitet landing stranice posle klika.\" }
          },
          {
            \"@type\": \"Question\",
            \"name\": \"Da li Meta oglasi rade za B2B usluge?\",
            \"acceptedAnswer\": { \"@type\": \"Answer\", \"text\": \"Da, posebno uz lead magnet, edukativni sadrzaj i jasan follow-up proces prodajnog tima.\" }
          },
          {
            \"@type\": \"Question\",
            \"name\": \"Kako da znam da li je kampanja profitabilna?\",
            \"acceptedAnswer\": { \"@type\": \"Answer\", \"text\": \"Pratite CPA i kvalitet leadova u odnosu na prosecnu vrednost klijenta i marzu. Ako ostaje profit posle svih troskova, kampanja je odrziva.\" }
          }
        ]
      }
    ]
  },
  '/google-reklame-cena': {"""

pattern = re.compile(r"    '/koliko-kosta-facebook-reklama': \{[\s\S]*?  \},'/google-reklame-cena': \{", re.MULTILINE)
new_text, count = pattern.subn(replacement, text, count=1)
if count != 1:
    raise SystemExit(f"Replacement failed, count={count}")

path.write_text(new_text, encoding='utf-8')
print('Patched /koliko-kosta-facebook-reklama schema block')
