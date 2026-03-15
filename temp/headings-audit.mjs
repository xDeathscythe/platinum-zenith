import fs from 'fs'
import path from 'path'

const dir='src/pages'
const files=fs.readdirSync(dir).filter(f=>f.endsWith('Page.jsx'))
for (const f of files){
  const t=fs.readFileSync(path.join(dir,f),'utf8')
  const h1=(t.match(/<h1\b/g)||[]).length
  const h2=(t.match(/<h2\b/g)||[]).length
  if (h1!==1 || h2===0){
    console.log(f,'h1',h1,'h2',h2)
  }
}
