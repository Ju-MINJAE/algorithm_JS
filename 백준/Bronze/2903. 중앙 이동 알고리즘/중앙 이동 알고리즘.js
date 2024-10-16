const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const num = Number(input);
let dots = 2;
for (let i = 0; i < num; i++) {
  dots += Math.pow(2, i);
}
console.log(dots ** 2);
