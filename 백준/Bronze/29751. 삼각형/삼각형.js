const fs = require('fs');
const input = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const result = (input[0] * input[1]) / 2;
console.log(result.toFixed(1));
