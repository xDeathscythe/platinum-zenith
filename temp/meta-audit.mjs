import { pageMeta } from '../src/hooks/pageMetaData.js'
const entries = Object.entries(pageMeta)
const missingDesc = entries.filter(([,v])=>!v.description || !v.description.trim())
const shortDesc = entries.filter(([,v])=>(v.description||'').length < 80)
const dupMap = new Map()
for (const [path,v] of entries){const d=(v.description||'').trim(); if(!d) continue; if(!dupMap.has(d)) dupMap.set(d,[]); dupMap.get(d).push(path)}
const dups=[...dupMap.entries()].filter(([,paths])=>paths.length>1)
console.log('entries',entries.length)
console.log('missingDesc',missingDesc)
console.log('shortDescCount',shortDesc.length)
console.log('dups',dups.length)
if (dups.length) console.log(JSON.stringify(dups.slice(0,20),null,2))
