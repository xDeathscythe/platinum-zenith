const fs = require('fs');
const path = 'C:/Users/Eventide/.openclaw/workspace-devona/projects/arcads-clone/src/hooks/pageMetaData.js';
let content = fs.readFileSync(path, 'utf8');
// Find the racunovodje block and check if og and twitter descriptions match
const start = content.indexOf("'/marketing-za-racunovodje':");
const end = content.indexOf("},", start) + 2;
const block = content.substring(start, end);
console.log("Current block:\n" + block);
