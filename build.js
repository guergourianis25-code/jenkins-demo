const fs = require('fs');
fs.mkdirSync('build', { recursive: true });
fs.writeFileSync('build/index.html', '<h1>Hello Jenkins</h1>');
console.log('Build OK');
