const fs = require('fs');
const input = fs.readFileSync(0).toString().split('\n');

const num = Number(input[0]);
const arr = input[1].split(' ').map(Number);

let min = arr[0];
let max = arr[0];
for (let i = 0; i < num; i++) {
  if (max < arr[i]) max = arr[i];
  if (min > arr[i]) min = arr[i];
}

console.log(min, max);
