import Database from 'better-sqlite3'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const dbPath = join(__dirname, '..', 'data', 'pz.db')

const db = new Database(dbPath)
db.pragma('journal_mode = WAL')
db.pragma('foreign_keys = ON')

// Create tables
db.exec(`
  CREATE TABLE IF NOT EXISTS submissions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    type TEXT NOT NULL CHECK(type IN ('prijava', 'kontakt', 'newsletter')),
    name TEXT,
    email TEXT,
    phone TEXT,
    company TEXT,
    program TEXT,
    message TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS email_log (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    recipient TEXT NOT NULL,
    subject TEXT NOT NULL,
    type TEXT DEFAULT 'outbound',
    submission_id INTEGER,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (submission_id) REFERENCES submissions(id)
  );

  CREATE INDEX IF NOT EXISTS idx_submissions_type ON submissions(type);
  CREATE INDEX IF NOT EXISTS idx_submissions_date ON submissions(created_at DESC);
  CREATE INDEX IF NOT EXISTS idx_email_log_date ON email_log(created_at DESC);
`)

export default db
