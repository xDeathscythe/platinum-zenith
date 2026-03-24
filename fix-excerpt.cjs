const fs = require('fs')
let c = fs.readFileSync('src/pages/blog/blogData.js', 'utf8')
c = c.replaceAll(
  'Prosecni Google Ads ROI je 200%, ali stvarni ROAS varira od 0.7x u finansijama do 8x u pravnim uslugama. Benchmark podaci po industriji, tipu kampanje i savet kako izracunati vas break-even.',
  'Prosecni Google Ads ROI je 200%, ali ROAS varira od 0.7x u finansijama do 8x u pravnim uslugama. Benchmark podaci po industriji za 2025-2026.'
)
fs.writeFileSync('src/pages/blog/blogData.js', c, 'utf8')
console.log('fixed excerpt length')
