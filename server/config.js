import dotenv from 'dotenv'
import process from 'node:process'
import { fileURLToPath } from 'node:url'

const privateFile = process.env.PZ_ENV_FILE
const result = dotenv.config({ path: privateFile || fileURLToPath(new URL('../.env', import.meta.url)), override: Boolean(privateFile), quiet: true })
if (privateFile && result.error) throw result.error
