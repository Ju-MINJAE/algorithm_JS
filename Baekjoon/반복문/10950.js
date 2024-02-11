const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const T = Number(input[0]);

for (let i = 1; i < T + 1; i++) {
  let num = input[i].split(' ');
  console.log(Number(num[0]) + Number(num[1]));
}
