const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const length = input.length;
let array = [];
for (let i = 0; i < length; i++) {
  const row = input[i].split(' ').map(Number);
  array.push(row);
}
const arr2 = array.flat();
const maxValue = Math.max(...arr2);
const index = arr2.indexOf(maxValue);
const row = Math.floor(index / 9) + 1;
const col = (index % 9) + 1;

console.log(maxValue);
console.log(row, col);
