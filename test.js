const fs = require('fs');
if (!fs.existsSync('build/index.html')) { console.error('Test failed'); process.exit(1); }
console.log('Test OK');
