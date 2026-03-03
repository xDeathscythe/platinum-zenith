import initSqlJs from 'sql.js'
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const dataDir = join(__dirname, '..', 'data')
const dbPath = join(dataDir, 'pz.db')

// Ensure data directory exists
if (!existsSync(dataDir)) mkdirSync(dataDir, { recursive: true })

let db = null

async function getDb() {
  if (db) return db

  const SQL = await initSqlJs()

  if (existsSync(dbPath)) {
    const buffer = readFileSync(dbPath)
    db = new SQL.Database(buffer)
  } else {
    db = new SQL.Database()
  }

  // Create tables
  db.run(`
    CREATE TABLE IF NOT EXISTS submissions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      type TEXT NOT NULL,
      name TEXT,
      email TEXT,
      phone TEXT,
      company TEXT,
      program TEXT,
      message TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `)
  db.run(`
    CREATE TABLE IF NOT EXISTS email_log (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      recipient TEXT NOT NULL,
      subject TEXT NOT NULL,
      type TEXT DEFAULT 'outbound',
      submission_id INTEGER,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `)

  db.run(`
    CREATE TABLE IF NOT EXISTS page_visits (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      session_id TEXT NOT NULL,
      path TEXT NOT NULL,
      slug TEXT,
      content_type TEXT DEFAULT 'page',
      referrer TEXT,
      source TEXT,
      medium TEXT,
      campaign TEXT,
      term TEXT,
      content TEXT,
      user_agent TEXT,
      ip_hash TEXT,
      language TEXT,
      screen_w INTEGER,
      screen_h INTEGER,
      viewport_w INTEGER,
      viewport_h INTEGER,
      tz_offset INTEGER,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `)

  db.run(`
    CREATE TABLE IF NOT EXISTS analytics_events (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      session_id TEXT NOT NULL,
      path TEXT NOT NULL,
      slug TEXT,
      content_type TEXT DEFAULT 'page',
      event_name TEXT NOT NULL,
      event_value REAL,
      meta_json TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `)

  db.run('CREATE INDEX IF NOT EXISTS idx_page_visits_created_at ON page_visits(created_at)')
  db.run('CREATE INDEX IF NOT EXISTS idx_page_visits_path ON page_visits(path)')
  db.run('CREATE INDEX IF NOT EXISTS idx_page_visits_content_type ON page_visits(content_type)')
  db.run('CREATE INDEX IF NOT EXISTS idx_page_visits_session ON page_visits(session_id)')
  db.run('CREATE INDEX IF NOT EXISTS idx_analytics_events_created_at ON analytics_events(created_at)')
  db.run('CREATE INDEX IF NOT EXISTS idx_analytics_events_name ON analytics_events(event_name)')

  save()
  return db
}

function save() {
  if (!db) return
  const data = db.export()
  writeFileSync(dbPath, Buffer.from(data))
}

// Auto-save every 30 seconds
setInterval(() => save(), 30000)

export { getDb, save }
