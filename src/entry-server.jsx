import { renderToPipeableStream } from 'react-dom/server'
import { PassThrough } from 'node:stream'
import App from './App'

export function render(url, initialContent) {
  return new Promise((resolve, reject) => {
    const output = new PassThrough()
    const chunks = []
    let piped = false
    output.on('data', chunk => chunks.push(chunk))
    output.on('end', () => { clearTimeout(timer); resolve(Buffer.concat(chunks).toString()) })
    const stream = renderToPipeableStream(<App url={url} initialContent={initialContent} />, {
      onAllReady() { if (!piped) { piped = true; stream.pipe(output) } },
      onError(error) { clearTimeout(timer); reject(error) },
    })
    const timer = setTimeout(() => { stream.abort(); reject(new Error(`Rendering timed out: ${url}`)) }, 15000)
  })
}
import { Buffer } from 'node:buffer'
