const fs = require('fs');

const lines = fs.readFileSync('index.html', 'utf8').split('\n');
let depth = 0;

lines.forEach((l, i) => {
  const opens = (l.match(/<div(\s+[^>]*)?>/g) || []).length;
  const closes = (l.match(/<\/div>/g) || []).length;
  depth += (opens - closes);
  if (depth < 0) {
    console.log(`Line ${i + 1} went negative! Current depth: ${depth}, line: ${l.trim()}`);
  }
});
console.log('Final depth in index.html:', depth);
