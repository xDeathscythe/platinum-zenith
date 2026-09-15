import { getDb } from './db.js'

export async function expireMeasurements() {
  const db = await getDb()
  db.run('BEGIN IMMEDIATE')
  try {
    db.run("DELETE FROM measured_events WHERE created_at < datetime('now', '-26 months')")
    db.run("DELETE FROM measured_pages WHERE created_at < datetime('now', '-26 months')")
    db.run("UPDATE submissions SET session_id=NULL WHERE session_id IN (SELECT id FROM measurement_sessions WHERE created_at < datetime('now', '-26 months'))")
    db.run("DELETE FROM measurement_sessions WHERE created_at < datetime('now', '-26 months')")
    db.run('COMMIT')
  } catch (error) { db.run('ROLLBACK'); throw error }
}
