const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [Na, Ma] = input.shift().split(' ').map(Number);
const arr1 = [];
const arr2 = [];
for (let i = 0; i < Na; i++) {
  arr1.push(input.shift().split(' ').map(Number));
}

const [Nb, Mb] = input.shift().split(' ').map(Number);
for (let i = 0; i < Nb; i++) {
  arr2.push(input.shift().split(' ').map(Number));
}
const result = Array.from({ length: Na }, () => Array(Mb).fill(0));
for (let i = 0; i < Na; i++) {
  for (let j = 0; j < Mb; j++) {
    for (let k = 0; k < Ma; k++) {
      result[i][j] += arr1[i][k] * arr2[k][j];
    }
  }
}
result.forEach((row) => console.log(row.join(' ')));
