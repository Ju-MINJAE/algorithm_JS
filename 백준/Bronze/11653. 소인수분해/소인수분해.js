const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

let num = Number(input);
while (num % 2 === 0) {
  console.log(2);
  num /= 2;
}
for (let i = 3; i <= num; i++) {
  while (num % i === 0) {
    console.log(i);
    num /= i;
  }
}
