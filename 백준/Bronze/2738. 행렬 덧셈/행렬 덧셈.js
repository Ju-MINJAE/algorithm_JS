const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
let array1 = [];
let array2 = [];

for (let i = 1; i <= N; i++) {
  const row = input[i].split(' ').map(Number);
  array1.push(row);
}
for (let i = N + 1; i <= 2 * N; i++) {
  const row = input[i].split(' ').map(Number);
  array2.push(row);
}

const result = [];
for (let i = 0; i < N; i++) {
  const row = [];
  for (let j = 0; j < M; j++) {
    row.push(array1[i][j] + array2[i][j]);
  }
  result.push(row);
}

let str = '';
for (let i = 0; i < result.length; i++) {
  str += result[i].join(' ') + '\n';
}
console.log(str.trim());
