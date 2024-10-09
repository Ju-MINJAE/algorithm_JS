const fs = require('fs');
const input = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const array = [];
input.forEach((num) => {
  const num2 = num % 42;

  if (array.indexOf(num2) === -1) array.push(num2);
});
console.log(array.length);
