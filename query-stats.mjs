import initSqlJs from 'sql.js';
import { readFileSync, existsSync } from 'fs';

async function run() {
  const dbPath = 'data/pz.db';
  if (!existsSync(dbPath)) {
    console.log("Nema baze.");
    return;
  }
  const SQL = await initSqlJs();
  const buffer = readFileSync(dbPath);
  const db = new SQL.Database(buffer);

  console.log("=== NAJPOPULARNIJE STRANICE (SVE) ===");
  const pages = db.exec("SELECT path, COUNT(*) as visits FROM page_visits GROUP BY path ORDER BY visits DESC LIMIT 15");
  if (pages.length > 0) {
    pages[0].values.forEach(row => console.log(`${row[1]} poseta: ${row[0]}`));
  }

  console.log("\n=== NAJPOPULARNIJI BLOGOVI ===");
  const blogs = db.exec("SELECT slug, COUNT(*) as visits FROM page_visits WHERE content_type = 'blog' GROUP BY slug ORDER BY visits DESC LIMIT 15");
  if (blogs.length > 0) {
    blogs[0].values.forEach(row => console.log(`${row[1]} poseta: /blog/${row[0]}`));
  } else {
      // maybe content_type is just 'page' for blogs, let's query paths with /blog/
      const blogPaths = db.exec("SELECT path, COUNT(*) as visits FROM page_visits WHERE path LIKE '/blog/%' GROUP BY path ORDER BY visits DESC LIMIT 15");
      if (blogPaths.length > 0) {
        blogPaths[0].values.forEach(row => console.log(`${row[1]} poseta: ${row[0]}`));
      } else {
        console.log("Nema podataka za blogove.");
      }
  }

  console.log("\n=== UKUPAN BROJ POSETA ===");
  const total = db.exec("SELECT COUNT(*) FROM page_visits");
  if (total.length > 0) console.log(total[0].values[0][0]);
}

run();
