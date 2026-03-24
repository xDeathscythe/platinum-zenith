const fs = require('fs');
let c = fs.readFileSync('src/pages/blog/blogData.js', 'utf8');

// Fix 1: add CTA + internal link in the 5 steps section
c = c.replace(
  '<h2>5 koraka za povecanje retention-a u vasoj firmi</h2>',
  '<h2>5 koraka za povecanje retention-a u vasoj firmi</h2>\n\n<p>Ako vam treba pomoc sa strategijom zadrzavanja kupaca, <a href="/kontakt">kontaktirajte nas</a> za besplatnu konsultaciju.</p>'
);

// Fix 2: add internal link in CX section
c = c.replace(
  '<h2>Korisnicko iskustvo i AI u retention-u</h2>',
  '<h2>Korisnicko iskustvo i AI u retention-u</h2>\n\n<p>Personalizacija koju omogucava <a href="/blog/ai-automatizacija-marketinga-prednosti-i-primena-2026">AI automatizacija marketinga</a> direktno utice na zadrzavanje kupaca.</p>'
);

// Fix 3: add service link in intro
c = c.replace(
  '<p>Evo sta kazu brojevi o retention-u, churn-u i lojalnosti',
  '<p>Zadrzavanje kupaca je kljucni deo svake <a href="/usluge/digitalni-marketing">strategije digitalnog marketinga</a>. Evo sta kazu brojevi o retention-u, churn-u i lojalnosti'
);

// Fix 4: add cross-link to email marketing blog
c = c.replace(
  '<h2>Programi lojalnosti - ROI koji se isplati</h2>',
  '<h2>Programi lojalnosti - ROI koji se isplati</h2>\n\n<p>Povezano: pogledajte nase <a href="/blog/email-marketing-roi-statistika-po-industriji-2026">statistike o email marketing ROI-u</a> za jos podataka o kanalu koji direktno podrzava loyalty programe.</p>'
);

fs.writeFileSync('src/pages/blog/blogData.js', c, 'utf8');
console.log('Fixed: 4 internal links + CTA added');
