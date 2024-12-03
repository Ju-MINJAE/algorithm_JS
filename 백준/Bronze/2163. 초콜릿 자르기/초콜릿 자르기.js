const fs = require('fs');
const input = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const [N, M] = input;
//1 1 0
//1 2 1
//2 2 3
//2 3 5
//3 3 8
console.log(N * M - 1);
