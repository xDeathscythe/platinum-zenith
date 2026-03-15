import fs from 'fs'
import path from 'path'

function walk(dir){
  const out=[]
  for (const e of fs.readdirSync(dir,{withFileTypes:true})){
    const p=path.join(dir,e.name)
    if (e.isDirectory()) out.push(...walk(p))
    else if (/\.(jsx|tsx|js|ts)$/.test(e.name)) out.push(p)
  }
  return out
}
const files=walk('src')
let count=0
for (const f of files){
  const lines=fs.readFileSync(f,'utf8').split(/\r?\n/)
  for (let i=0;i<lines.length;i++){
    const line=lines[i]
    if (line.includes('<img') && !line.includes('alt=')){
      console.log(`${f}:${i+1}: ${line.trim().slice(0,180)}`)
      count++
    }
  }
}
console.log('missing-alt-lines',count)
