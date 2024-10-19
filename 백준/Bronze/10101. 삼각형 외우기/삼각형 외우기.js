const fs = require('fs');
const input = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split('\n')
  .map(Number);
const [a, b, c] = input;
const sum = a + b + c;

if (sum !== 180) {
  console.log('Error');
} else if (a === 60 && b === 60 && c === 60) {
  console.log('Equilateral');
} else if (a === b || b === c || a === c) {
  console.log('Isosceles');
} else {
  console.log('Scalene');
}
