


const fs = require('fs');
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split('\n')
  .map(Number);

let result = [];

for (let i = 1; i <= 30; i++) {
  if (!input.includes(i)) {
    result.push(i);
  }

  if (result.length === 2) break;
}

console.log(`${result[0]}\n${result[1]}`);

