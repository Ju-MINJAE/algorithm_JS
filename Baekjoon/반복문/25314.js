const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const num = input;
let result = '';

for (let i = 1; i <= num / 4; i++) {
  result += 'long ';
}
// console.log(result + 'int');
console.log(`${result}int`);
