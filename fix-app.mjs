import fs from 'fs';

let app = fs.readFileSync('src/App.jsx', 'utf8');

app = app.replace(
  `const MarketingZaTeretanePage = lazy(() => import('./pages/MarketingZaTeretanePage'))`,
  `const MarketingZaTeretanePage = lazy(() => import('./pages/MarketingZaTeretanePage'))\nconst MarketingZaRacunovodjePage = lazy(() => import('./pages/MarketingZaRacunovodjePage'))`
);

app = app.replace(
  `<Route path="/marketing-za-teretane" element={<MarketingZaTeretanePage />} />`,
  `<Route path="/marketing-za-teretane" element={<MarketingZaTeretanePage />} />\n              <Route path="/marketing-za-racunovodje" element={<MarketingZaRacunovodjePage />} />`
);

fs.writeFileSync('src/App.jsx', app, 'utf8');
