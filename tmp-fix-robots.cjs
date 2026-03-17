const fs = require('fs');
const path = 'C:/Users/Eventide/.openclaw/workspace-devona/projects/arcads-clone/src/hooks/pageMetaData.js';
let content = fs.readFileSync(path, 'utf8');
content = content.replace(
  "'/marketing-za-racunovodje': {",
  "'/marketing-za-racunovodje': {\n    robots: 'index, follow',"
);
fs.writeFileSync(path, content, 'utf8');
console.log('Fixed robots for racunovodje');
