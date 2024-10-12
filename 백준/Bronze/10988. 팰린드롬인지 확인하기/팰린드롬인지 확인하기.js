const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const length = input.length;
let answer = 1;
for (let i = 0; i < Math.floor(length); i++) {
  if (input[i] !== input[length - 1 - i]) answer = 0;
}
console.log(answer);
