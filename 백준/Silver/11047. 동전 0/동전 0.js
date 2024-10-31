const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

let [N, K] = input.shift().split(' ').map(Number);
const coins = input.map(Number).sort((a, b) => b - a);
let cnt = 0;
for (let coin of coins) {
  cnt += Math.floor(K / coin);
  K %= coin;
}
console.log(cnt);
