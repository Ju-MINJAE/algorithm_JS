const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const [N, K] = input.split(' ').map(Number);
const arr = Array.from({ length: N }, (x, i) => i + 1);
const result = [];
let index = 0;

while (arr.length) {
  index = (index + K - 1) % arr.length;
  result.push(arr.splice(index, 1)[0]);
}
console.log('<' + result.join(', ') + '>');
