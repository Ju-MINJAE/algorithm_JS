const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const arr = [];
for (let i = 0; i < N; i++) {
  const el = input.shift().split(' ').map(Number);
  arr.push(el);
}

const K = Number(input.shift());
for (let k = 0; k < K; k++) {
  const [i, j, x, y] = input.shift().split(' ').map(Number);
  let result = 0;

  for (let a = i - 1; a < x; a++) {
    for (let b = j - 1; b < y; b++) {
      result += arr[a][b];
    }
  }
  console.log(result);
}
