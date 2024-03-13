const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const max = Number(input[0]);

for (let i = 1; i <= max; i++) {
  let num = input[i].split(' ');
  console.log(
    `Case #${i}: ${num[0]} + ${num[1]} = ${Number(num[0]) + Number(num[1])}`
  );
}
