const fs = require('fs');
const input = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const ascending = [...input].sort((a, b) => a - b);
const descending = [...input].sort((a, b) => b - a);

if (input.join('') === ascending.join('')) {
  console.log('ascending');
} else if (input.join('') === descending.join('')) {
  console.log('descending');
} else {
  console.log('mixed');
}
