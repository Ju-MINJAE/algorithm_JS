const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const max = Number(input[0]);
let result = '';

for (let i = 1; i <= max; i++) {
  let num = input[i].split(' ');
  result += Number(num[0]) + Number(num[1]) + '\n';
}
console.log(result);
