const fs = require('fs');
const path = 'C:/Users/Eventide/.openclaw/workspace-devona/projects/arcads-clone/src/pages/blog/blogData.js';
let content = fs.readFileSync(path, 'utf8');

content = content.replace("(/seo-optimizacija)", "(/seo-optimizacija-cena)");

fs.writeFileSync(path, content, 'utf8');
console.log("Fixed broken link /seo-optimizacija to /seo-optimizacija-cena");
