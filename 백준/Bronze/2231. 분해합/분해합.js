const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const num = Number(input);
let answer = 0;

for (let i = 1; i <= num; i++) {
  const str = String(i);
  const a = str.split('').map((x) => Number(x));
  let sum = 0;

  for (let j = 0; j < a.length; j++) {
    sum += a[j];
  }
  sum += Number(str);
  if (sum === num) {
    answer = str;
    break;
  }
}
console.log(answer);
