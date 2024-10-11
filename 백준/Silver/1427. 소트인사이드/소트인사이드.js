const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const num = input
  .split('')
  .map(Number)
  .sort((a, b) => b - a);

console.log(num.join(''));
