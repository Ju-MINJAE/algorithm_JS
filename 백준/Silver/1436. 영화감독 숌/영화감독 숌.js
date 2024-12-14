const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();
const N = Number(input);

function findNthNumber(n) {
  let count = 0;
  let number = 666;

  while (true) {
    if (String(number).includes('666')) {
      count++;
      if (count === n) {
        return number;
      }
    }
    number++;
  }
}

console.log(findNthNumber(N));
