const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const result = [];

for (let i = 97; i <= 122; i++) {
  result.push(input.indexOf(String.fromCharCode(i)));
}
console.log(result.join(' '));
