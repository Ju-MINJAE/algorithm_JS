const fs = require('fs');
const input = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const N = input[0];
const K = input[1];
const arr = new Array(N).fill(1).map((a, b) => a + b);
const result = [];

while (arr.length) {
  for (let i = 0; i < K; i++) {
    arr.push(arr.shift());
  }
  result.push(arr.pop());
}
console.log('<' + result.join(', ') + '>');
