const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

let result = 0;

for (let i = 1; i <= input; i++) {
  result = result + i;
}

console.log(result);
