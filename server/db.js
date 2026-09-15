import { DatabaseSync } from 'node:sqlite'
import { existsSync, mkdirSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const dataDir = process.env.PZ_DATA_DIR || join(__dirname, '..', 'data')
const dbPath = join(dataDir, 'pz.db')

// Ensure data directory exists
if (!existsSync(dataDir)) mkdirSync(dataDir, { recursive: true })

let db = null

async function getDb() {
  if (db) return db

  const native = new DatabaseSync(dbPath)
  native.exec('PRAGMA journal_mode = WAL; PRAGMA busy_timeout = 5000')
  // The existing query API is kept small; SQLite owns durability and locking.
  db = {
    run(sql, params = []) { return native.prepare(sql).run(...params) },
    exec(sql, params = []) {
      const statement = native.prepare(sql)
      const columns = statement.columns().map(column => column.name)
      if (!columns.length) { statement.run(...params); return [] }
      statement.setReturnArrays(true)
      return [{ columns, values: statement.all(...params) }]
    },
  }
  native.exec('BEGIN IMMEDIATE')
  try {
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

  db.run(`CREATE TABLE IF NOT EXISTS measurement_sessions (
    id TEXT PRIMARY KEY, visitor_id TEXT NOT NULL, source TEXT, medium TEXT, campaign TEXT,
    landing_path TEXT, referrer TEXT, first_touch_json TEXT, created_at TEXT DEFAULT CURRENT_TIMESTAMP
  )`)
  db.run(`CREATE TABLE IF NOT EXISTS measured_pages (
    id TEXT PRIMARY KEY, session_id TEXT NOT NULL, path TEXT NOT NULL, content_type TEXT,
    language TEXT, viewport_w INTEGER, created_at TEXT DEFAULT CURRENT_TIMESTAMP
  )`)
  db.run(`CREATE TABLE IF NOT EXISTS measured_events (
    id INTEGER PRIMARY KEY, session_id TEXT NOT NULL, path TEXT NOT NULL,
    event_name TEXT NOT NULL, event_value REAL, meta_json TEXT, created_at TEXT DEFAULT CURRENT_TIMESTAMP
  )`)
  db.run('CREATE INDEX IF NOT EXISTS measured_pages_session ON measured_pages(session_id, created_at)')
  db.run('CREATE INDEX IF NOT EXISTS measured_events_session ON measured_events(session_id, created_at)')
  db.run('CREATE INDEX IF NOT EXISTS measurement_sessions_created ON measurement_sessions(created_at)')
  db.run('CREATE INDEX IF NOT EXISTS measured_pages_created ON measured_pages(created_at)')
  db.run('CREATE INDEX IF NOT EXISTS measured_events_created ON measured_events(created_at)')
  const columns = new Set(db.exec('PRAGMA table_info(submissions)')[0].values.map(row => row[1]))
  for (const [name, type] of Object.entries({ session_id: 'TEXT', lead_stage: "TEXT DEFAULT 'new'", revenue: 'REAL', revenue_currency: "TEXT DEFAULT 'EUR'", closed_at: 'TEXT' })) {
    if (!columns.has(name)) db.run(`ALTER TABLE submissions ADD COLUMN ${name} ${type}`)
  }
  db.run('CREATE INDEX IF NOT EXISTS submissions_session ON submissions(session_id)')
  native.exec('COMMIT')
  } catch (error) { native.exec('ROLLBACK'); native.close(); db = null; throw error }
  return db
}

export { getDb }
import process from 'node:process'
