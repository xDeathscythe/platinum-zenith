const fs = require('fs');
const file = 'src/hooks/pageMetaData.js';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
    /Marketing za Majstore i Zanatlije \(Električari, Vodoinstalateri\) \| Platinum Zenith/g,
    'Digitalni Marketing za Majstore i Zanatlije | Platinum Zenith'
);

content = content.replace(
    /Marketing za Majstore i Zanatlije \(Elektri\?ari, Vodoinstalateri\) \| Platinum Zenith/g,
    'Digitalni Marketing za Majstore i Zanatlije | Platinum Zenith'
);

fs.writeFileSync(file, content, 'utf8');

const file2 = 'server/ogMeta.js';
let content2 = fs.readFileSync(file2, 'utf8');
content2 = content2.replace(
    /Marketing za Majstore i Zanatlije \(Električari, Vodoinstalateri\) \| Platinum Zenith/g,
    'Digitalni Marketing za Majstore i Zanatlije | Platinum Zenith'
);
content2 = content2.replace(
    /Marketing za Majstore i Zanatlije \(Elektri\?ari, Vodoinstalateri\) \| Platinum Zenith/g,
    'Digitalni Marketing za Majstore i Zanatlije | Platinum Zenith'
);
fs.writeFileSync(file2, content2, 'utf8');

const file3 = 'src/pages/MarketingZaZanatlijePage.jsx';
let content3 = fs.readFileSync(file3, 'utf8');
content3 = content3.replace(
    /Marketing za Majstore i Zanatlije \(Električari, Vodoinstalateri\) \| Platinum Zenith/g,
    'Digitalni Marketing za Majstore i Zanatlije | Platinum Zenith'
);
content3 = content3.replace(
    /Marketing za Majstore i Zanatlije \(Elektri\?ari, Vodoinstalateri\) \| Platinum Zenith/g,
    'Digitalni Marketing za Majstore i Zanatlije | Platinum Zenith'
);
fs.writeFileSync(file3, content3, 'utf8');

console.log('Fixed titles');
