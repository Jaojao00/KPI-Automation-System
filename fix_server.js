const fs = require('fs');
let content = fs.readFileSync('server.js', 'utf8');
if (!content.includes('module.exports = app')) {
    content += \nmodule.exports = app;\n;
    fs.writeFileSync('server.js', content, 'utf8');
}
