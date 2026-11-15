const fs = require('fs');
const ok = fs.existsSync('build/index.html') &&
  fs.readFileSync('build/index.html', 'utf8').includes('Hello Jenkins');
fs.mkdirSync('test-results', { recursive: true });
const xml = '<?xml version="1.0" encoding="UTF-8"?>\n' +
  '<testsuite name="demo" tests="1" failures="' + (ok ? 0 : 1) + '">\n' +
  '  <testcase classname="build" name="index.html existe">' +
  (ok ? '' : '<failure message="index.html manquant"/>') +
  '</testcase>\n</testsuite>\n';
fs.writeFileSync('test-results/junit.xml', xml);
console.log(ok ? 'Test OK' : 'Test failed');
process.exit(ok ? 0 : 1);
