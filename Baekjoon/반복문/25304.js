const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const totalMoney = Number(input[0]);
const amount = Number(input[1]);

let sum = 0;
for (let i = 2; i < amount + 2; i++) {
  let num = input[i].split(' ');
  sum = sum + Number(num[0]) * Number(num[1]);
}

if (sum === totalMoney) {
  console.log('Yes');
} else {
  console.log('No');
}
