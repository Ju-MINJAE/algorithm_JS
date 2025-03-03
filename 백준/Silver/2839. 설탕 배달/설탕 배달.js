const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();
const num = Number(input);

function sol(num) {
  let result = 0;

  while (num > 0) {
    if (num % 5 === 0) {
      num -= 5;
    } else {
      num -= 3;
    }

    result += 1;
  }
  return num === 0 ? result : -1;
}

const a = sol(num);
console.log(a);
