const fs = require('fs');
let content = fs.readFileSync('public/app.js', 'utf8');
content = content.replace(/axios\.defaults\.baseURL = 'http:\/\/localhost:3000';/, "// axios.defaults.baseURL = 'http://localhost:3000';");
fs.writeFileSync('public/app.js', content, 'utf8');

let html = fs.readFileSync('public/index.html', 'utf8');
html = html.replace(/http:\/\/localhost:3000\/api/g, '/api');
fs.writeFileSync('public/index.html', html, 'utf8');
