const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const num = Number(input[0]);

let result = '';
let blank = '';
for (let i = 1; i <= num; i++) {
  result += '*';
  for (let j = 0; j < num - i; j++) {
    blank += ' ';
  }
  console.log(blank + result);
  blank = '';
}
