const fs = require('fs')
let c = fs.readFileSync('src/pages/blog/blogData.js', 'utf8')
// Fix excerpt - replace $277B with 277 milijardi dolara
c = c.replaceAll(
  "globalna potrosnja na oglase $277B. Benchmark podaci po platformi.",
  "globalna potrosnja na oglase 277 milijardi dolara. Benchmark podaci po platformi."
)
fs.writeFileSync('src/pages/blog/blogData.js', c, 'utf8')
console.log('Fixed excerpt (removed $ sign)')
