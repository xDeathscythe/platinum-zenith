import dotenv from 'dotenv'
import process from 'node:process'
import { fileURLToPath } from 'node:url'

const privateFile = process.env.PZ_ENV_FILE
const runtimePort = process.env.PORT
const result = dotenv.config({ path: privateFile || fileURLToPath(new URL('../.env', import.meta.url)), override: Boolean(privateFile), quiet: true })
if (privateFile && result.error) throw result.error
// The hosting process and local audits own the listening port.
if (runtimePort) process.env.PORT = runtimePort
