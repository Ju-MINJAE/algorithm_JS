const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const num = Number(input);

function factorial(num) {
  if (num === 0) return 1;
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

console.log(factorial(num));
