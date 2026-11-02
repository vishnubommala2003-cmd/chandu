const fs = require('fs');

function checkBalance(filename) {
  const html = fs.readFileSync(filename, 'utf8');
  // Simple tag stack for divs
  let openDivs = (html.match(/<div(\s+[^>]*)?>/g) || []).length;
  let closeDivs = (html.match(/<\/div>/g) || []).length;
  console.log(`${filename}: open divs = ${openDivs}, close divs = ${closeDivs}, diff = ${openDivs - closeDivs}`);
}

['index.html', 'properties.html', 'developments.html', 'locations.html', 'journal.html', 'about.html'].forEach(checkBalance);
