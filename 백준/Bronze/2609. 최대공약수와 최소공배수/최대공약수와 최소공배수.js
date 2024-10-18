const fs = require('fs');
const input = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

let x = 0;
const [A, B] = input.sort((a, b) => a - b);
for (let i = 1; i <= B; i++) {
  if (A % [i] === 0 && B % [i] === 0) {
    x = i;
  }
}
console.log(x);
for (let i = A; i <= A * B; i++) {
  if (i % A === 0 && i % B === 0) {
    console.log(i);
    break;
  }
}
