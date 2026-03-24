const fs = require('fs');
const path = require('path');

const blogDataPath = path.join(__dirname, 'src/pages/blog/blogData.js');
let content = fs.readFileSync(blogDataPath, 'utf8');

const newEntry = `
  {
    slug: "zadrzavanje-kupaca-retention-rate-churn-lojalnost-statistika-2026",
    title: "Zadrzavanje kupaca: retention, churn i lojalnost u brojevima za 2026",
    date: "2026-03-24",
    readTime: 8,
    category: "Statistika",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    popular: false,
    excerpt: "Koliko kosta izgubiti kupca? 5-25x je skuplje naci novog nego zadrzati postojeceg. Pogledajte retention, churn i loyalty statistike po industriji za 2026.",
    content: \`
<p>Svaka firma zna da treba da privlaci nove kupce. Ali mnoge zaboravljaju koliko ih kosta kad postojeci odu. Podaci za 2024. i 2025. godinu jasno pokazuju da je zadrzavanje kupaca profitabilnije od akvizicije, a programi lojalnosti daju povrat i do 700%.</p>

<p>Evo sta kazu brojevi o retention-u, churn-u i lojalnosti — i kako da ih iskoristite za svoju firmu.</p>

<h2>Koliko kosta novi vs. postojeci kupac</h2>

<p>Akvizicija novog kupca je 5 do 25 puta skuplja od zadrzavanja postojeceg (Yotpo, Artisan Growth Strategies). Prosecni trosak akvizicije (CAC) iznosi 200-300 dolara po kupcu, a taj broj je skocio za 60% od 2013. do 2024. godine.</p>

<p>Sa druge strane, povecanje retention rate-a za samo 5% podize profit za 25-95% (Bain & Company). Verovatnoca prodaje postojecem kupcu je 60-70%, dok je za novog samo 5-20%.</p>

<table>
<thead><tr><th>Metrika</th><th>Novi kupac</th><th>Postojeci kupac</th></tr></thead>
<tbody>
<tr><td>Trosak</td><td>5-25x veci</td><td>Bazni trosak</td></tr>
<tr><td>Verovatnoca prodaje</td><td>5-20%</td><td>60-70%</td></tr>
<tr><td>CAC (prosek 2025)</td><td>200-300 USD</td><td>N/A</td></tr>
<tr><td>Rast CAC (2013-2024)</td><td>+60%</td><td>-</td></tr>
</tbody>
</table>

<h2>Retention rate po industriji (2025)</h2>

<p>Prosecni retention rate u 2024. godini bio je oko 75% (Sprinklr). Ali razlike po sektorima su ogromne:</p>

<table>
<thead><tr><th>Industrija</th><th>Retention rate</th></tr></thead>
<tbody>
<tr><td>Mediji i profesionalne usluge</td><td>84%</td></tr>
<tr><td>Automotive i transport</td><td>83%</td></tr>
<tr><td>Osiguranje</td><td>83%</td></tr>
<tr><td>IT usluge</td><td>81%</td></tr>
<tr><td>Gradjevinarstvo</td><td>80%</td></tr>
<tr><td>Telekomunikacije</td><td>78%</td></tr>
<tr><td>Finansijske usluge</td><td>78%</td></tr>
<tr><td>Zdravstvo</td><td>77%</td></tr>
<tr><td>SaaS</td><td>77%</td></tr>
<tr><td>Bankarstvo</td><td>75%</td></tr>
<tr><td>Potrosacke usluge</td><td>67%</td></tr>
<tr><td>Maloprodaja (retail)</td><td>63%</td></tr>
<tr><td>Hotelijerstvo i turizam</td><td>55%</td></tr>
<tr><td>E-commerce</td><td>38%</td></tr>
</tbody>
</table>

<p>B2B SaaS firme imaju retention od 90%, dok B2C pretplate stoje na 72%, a transakcioni e-commerce na samo 38% (Electroiq, Focus Digital).</p>

<h2>Churn rate - koliko kupaca gubite</h2>

<p>Prosecni ukupni churn u 2024. bio je oko 10%, sa tendencijom rasta krajem godine. Cak i mesecni churn od 5% znaci gubitak skoro polovine kupaca godisnje.</p>

<table>
<thead><tr><th>Industrija</th><th>Churn rate (2024)</th></tr></thead>
<tbody>
<tr><td>Maloprodaja</td><td>25.4%</td></tr>
<tr><td>Telekomunikacije</td><td>21.5%</td></tr>
<tr><td>Bankarstvo</td><td>15.3%</td></tr>
<tr><td>SaaS</td><td>13.2%</td></tr>
<tr><td>Zdravstvo</td><td>8.7%</td></tr>
</tbody>
</table>

<p>Za pretplatne e-commerce modele, prosecni mesecni churn u 2025. je 3.4% - od toga 2.5% volonterski i 0.9% nevolonterski (neuspele transakcije). B2B SaaS kompanije fokusirane na automatizaciju retention-a oporave do 70% nevolonterskog churn-a (Churnkey, Growth-onomics).</p>

<h2>Programi lojalnosti - ROI koji se isplati</h2>

<p>Preko 90% kompanija na svetu ima neki oblik loyalty programa. I rezultati su jasni:</p>

<ul>
<li>90% kompanija sa loyalty programom prijavljuje pozitivan ROI (Capital One Shopping)</li>
<li>Prosecni povrat: 4.8-4.9x ulozenog novca</li>
<li>ROI se krece od 100% do 700%, a 14.3% programa prelazi cak 800%</li>
<li>Samo 3.8% loyalty programa imalo je negativan ROI u 2024.</li>
</ul>

<p>Clanovi programa lojalnosti trose 12-18% vise od ostalih kupaca. Oni koji koriste personalizovane nagrade trose 4.3x vise od onih koji koriste standardne ponude. 84% potrosaca bira brendove koji nude program lojalnosti (Growave, StampMe).</p>

<h2>Ponovljene kupovine - lojalnost u praksi</h2>

<p>Lojalni kupci kupuju ponovo 5 puta cesce. U trecoj godini odnosa sa brendom, trose 67% vise nego u prvih 6 meseci. Kupci sa 3+ kupovine imaju 3x vecu verovatnocu da postanu dugorocno lojalni.</p>

<p>Faktori koji podizu repeat purchase:</p>
<ul>
<li>Brza dostava (isti/sledeci dan): +7-15% repeat rate</li>
<li>1-click ponovljena narudzbina: +12-18%</li>
<li>Personalizovani email: +29%</li>
<li>Loyalty program sa otkupom poena: 65% repeat rate vs. 12.3% bez programa</li>
</ul>

<h2>Korisnicko iskustvo i AI u retention-u</h2>

<p>Korisnicko iskustvo pokrece 73% kupovnih odluka. Poboljsanje CX-a smanjuje churn za 15%. Personalizovano iskustvo tera 77% kupaca da biraju ili preporucuju brend.</p>

<p>Firme koje koriste AI alate za korisnicku podrsku beleze poboljsanje retention-a od 67%. Emocionalna konekcija sa agentom podrske drzi 86% kupaca lojalnim (Sprinklr, Electroiq).</p>

<h2>5 koraka za povecanje retention-a u vasoj firmi</h2>

<ol>
<li><strong>Merite churn i retention mesecno</strong> - ne mozete poboljsati ono sto ne pratite</li>
<li><strong>Pokrenite program lojalnosti</strong> - cak i jednostavan program daje 4.8x povrat</li>
<li><strong>Personalizujte komunikaciju</strong> - email sa personalizacijom podize repeat purchase za 29%</li>
<li><strong>Ubrzajte dostavu</strong> - brza dostava donosi 7-15% vise ponovljenih kupovina</li>
<li><strong>Uvedite AI u podrsku</strong> - 67% bolji retention sa AI alatima</li>
</ol>

<h2>Izvori podataka</h2>

<p>Sprinklr - Customer Retention Statistics 2025 | Electroiq - Customer Retention Statistics | Focus Digital - Average Customer Retention Rate by Industry | Growth-onomics - Churn Rate Benchmarks by Industry 2025 | Churnkey - State of Retention 2025 | Yotpo - Cost of Customer Acquisition vs. Retention | Artisan Growth Strategies - CAC vs. Retention Cost Analysis | Capital One Shopping - Loyalty Program Statistics | Growave - Loyalty Report 2025 | StampMe - Customer Loyalty Programs ROI | G2 - Customer Retention Statistics</p>
\`,
    tableOfContents: [
      "Koliko kosta novi vs. postojeci kupac",
      "Retention rate po industriji (2025)",
      "Churn rate - koliko kupaca gubite",
      "Programi lojalnosti - ROI koji se isplati",
      "Ponovljene kupovine - lojalnost u praksi",
      "Korisnicko iskustvo i AI u retention-u",
      "5 koraka za povecanje retention-a u vasoj firmi",
      "Izvori podataka"
    ],
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Zadrzavanje kupaca: retention, churn i lojalnost u brojevima za 2026",
      "datePublished": "2026-03-24",
      "author": { "@type": "Organization", "name": "Platinum Zenith" },
      "publisher": { "@type": "Organization", "name": "Platinum Zenith", "url": "https://platinumzenith.com" },
      "description": "Koliko kosta izgubiti kupca? 5-25x je skuplje naci novog nego zadrzati postojeceg. Retention, churn i loyalty statistike po industriji za 2026.",
      "mainEntityOfPage": "https://platinumzenith.com/blog/zadrzavanje-kupaca-retention-rate-churn-lojalnost-statistika-2026"
    }
  },`;

// Find the closing ] of rawBlogPosts array - it's on its own line before "const seenSlugs"
const seenSlugsIdx = content.indexOf('const seenSlugs');
if (seenSlugsIdx === -1) throw new Error('Cannot find seenSlugs');

// Find the ] before seenSlugs
const closingBracket = content.lastIndexOf(']', seenSlugsIdx);
if (closingBracket === -1) throw new Error('Cannot find closing bracket');

content = content.slice(0, closingBracket) + newEntry + '\n' + content.slice(closingBracket);

fs.writeFileSync(blogDataPath, content, 'utf8');
console.log('Customer retention stat blog injected');

const verify = fs.readFileSync(blogDataPath, 'utf8');
const slugs = verify.match(/slug:/g);
console.log('OK:', slugs ? slugs.length : 0);
