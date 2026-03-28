const fs = require('fs')
let c = fs.readFileSync('src/App.jsx', 'utf8')

// Ukloni drugu deklaraciju MarketingZaZanatlijePage
c = c.replace("const MarketingZaTuristickeAgencijePage = lazy(() => import('./pages/MarketingZaTuristickeAgencijePage'))\nconst MarketingZaZanatlijePage = lazy(() => import('./pages/MarketingZaZanatlijePage'))", "const MarketingZaTuristickeAgencijePage = lazy(() => import('./pages/MarketingZaTuristickeAgencijePage'))")

// Ukloni drugi Route za zanatlije
c = c.replace("<Route path=\"/marketing-za-turisticke-agencije\" element={<MarketingZaTuristickeAgencijePage />} />`n            <Route path=\"/marketing-za-zanatlije\" element={<MarketingZaZanatlijePage />} />", "<Route path=\"/marketing-za-turisticke-agencije\" element={<MarketingZaTuristickeAgencijePage />} />")

fs.writeFileSync('src/App.jsx', c, 'utf8')
console.log('Fixed src/App.jsx')
