const fs = require('fs');
const input = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const [a, b] = input;
console.log(a * b);
