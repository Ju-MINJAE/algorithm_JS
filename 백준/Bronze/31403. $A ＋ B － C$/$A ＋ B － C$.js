const fs = require('fs');
const input = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const [a, b, c] = input;
console.log(a + b - c);
console.log(Number(String(a) + String(b)) - c);
