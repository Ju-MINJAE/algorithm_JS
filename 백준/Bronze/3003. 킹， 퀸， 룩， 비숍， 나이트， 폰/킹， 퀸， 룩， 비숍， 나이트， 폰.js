const fs = require('fs');
const input = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

let result = '';
const collect = [1, 1, 2, 2, 2, 8];
for (let i = 0; i < input.length; i++) {
  let gap = collect[i] - input[i];
  result += `${gap} `;
}
console.log(result);
