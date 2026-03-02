import { readdirSync, readFileSync, writeFileSync, statSync, existsSync } from 'fs'
import { join, extname } from 'path'
import { brotliCompressSync, constants } from 'zlib'

const dist = join(process.cwd(), 'dist')
const targets = []

function collect(dir) {
  for (const name of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, name.name)
    if (name.isDirectory()) collect(p)
    else {
      const ext = extname(p).toLowerCase()
      if (ext === '.js' || ext === '.css' || ext === '.html' || ext === '.svg') targets.push(p)
    }
  }
}

collect(dist)

let count = 0
let saved = 0
for (const file of targets) {
  const src = readFileSync(file)
  const br = brotliCompressSync(src, {
    params: {
      [constants.BROTLI_PARAM_QUALITY]: 11,
      [constants.BROTLI_PARAM_MODE]: constants.BROTLI_MODE_TEXT,
    },
  })

  if (br.length >= src.length) continue

  const out = `${file}.br`
  writeFileSync(out, br)
  count++
  saved += src.length - br.length
}

console.log(`✅ Precompressed ${count} files (.br), saved ${(saved / 1024).toFixed(1)} KB`)
