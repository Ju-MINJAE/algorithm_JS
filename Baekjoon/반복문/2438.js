const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const num = Number(input[0]);
let result = '';

for (let i = 0; i < num; i++) {
  result += '*';
  console.log(result);
}
