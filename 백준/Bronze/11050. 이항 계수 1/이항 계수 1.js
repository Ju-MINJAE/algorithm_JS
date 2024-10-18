const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ');

const [N, K] = input.map(Number);
let parent = 1;
let child = 1;

for (i = 0; i < K; i++) {
  parent *= N - i;
  child *= K - i;
}

console.log(parent / child);
