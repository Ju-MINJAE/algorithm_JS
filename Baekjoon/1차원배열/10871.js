const fs = require('fs');
const input = fs.readFileSync(0).toString().split('\n');

const num = Number(input[0].split(' ')[0]);
const val = Number(input[0].split(' ')[1]);

const arr = input[1].split(' ');
let result = '';

for (let i = 0; i < num; i++) {
  if (arr[i] < val) result += arr[i] + ' ';
}
console.log(result);
