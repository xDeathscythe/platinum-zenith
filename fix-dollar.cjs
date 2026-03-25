const fs = require('fs')
let c = fs.readFileSync('src/pages/blog/blogData.js', 'utf8')
c = c.replace(
  "Marketing automatizacija donosi $5.44 na svaki ulozeni dolar (544% ROI). Trziste",
  "Marketing automatizacija donosi 5.44 dolara na svaki ulozeni dolar (544% ROI). Trziste"
)
fs.writeFileSync('src/pages/blog/blogData.js', c, 'utf8')
console.log('Fixed last $ in excerpt')
