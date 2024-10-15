const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

let result = 0;
let length = input.length;
let sum = 0;
for (let i = 0; i < length; i++) {
  const [_, b, c] = input[i].split(' ');
  if (c === 'P') continue;

  sum += parseFloat(b);
  if (c === 'A+') result += parseFloat(b) * 4.5;
  else if (c === 'A0') result += parseFloat(b) * 4.0;
  else if (c === 'B+') result += parseFloat(b) * 3.5;
  else if (c === 'B0') result += parseFloat(b) * 3.0;
  else if (c === 'C+') result += parseFloat(b) * 2.5;
  else if (c === 'C0') result += parseFloat(b) * 2.0;
  else if (c === 'D+') result += parseFloat(b) * 1.5;
  else if (c === 'D0') result += parseFloat(b) * 1.0;
  else result += parseFloat(b) * 0;
}

console.log(result / sum);
