const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const num = Number(input);

function fibonacci(num) {
  if (num === 0) return 0;
  if (num === 1) return 1;
  return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci(num));
