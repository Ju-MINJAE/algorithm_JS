const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const cases = Number(input[0]);
const coins = [25, 10, 5, 1];

for (let i = 1; i <= cases; i++) {
  let money = Number(input[i]);
  let count = [0, 0, 0, 0];
  if (money >= coins[0]) {
    count[0] = parseInt(money / coins[0]);
    money -= parseInt(coins[0] * count[0]);
  }
  if (money >= coins[1]) {
    count[1] = parseInt(money / coins[1]);
    money -= parseInt(coins[1] * count[1]);
  }
  if (money >= coins[2]) {
    count[2] = parseInt(money / coins[2]);
    money -= parseInt(coins[2] * count[2]);
  }
  count[3] = parseInt(money / coins[3]);
  console.log(count.join(' '));
}
