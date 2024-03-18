const fs = require('fs');
const input = fs.readFileSync(0).toString().split('\n');

for (let i = 0; i < input.length; i++) {
  let num1 = Number(input[i].split(' ')[0]);
  let num2 = Number(input[i].split(' ')[1]);

  if (num1 === 0 && num2 === 0) break;
  else console.log(num1 + num2);
}
