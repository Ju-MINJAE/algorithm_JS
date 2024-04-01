const fs = require('fs');
const input = fs.readFileSync(0).toString().split('\n').map(Number);

const n = input.length;
let max = input[0];
let index = 0;

for (let i = 0; i < n; i++) {
  if (max < input[i]) {
    max = input[i];
    index = i;
  }
}

console.log(max);
console.log(index + 1);
