const fs = require('fs');
const input = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const a = input.reduce((acc, cur) => acc + cur * cur, 0);
console.log(a % 10);
