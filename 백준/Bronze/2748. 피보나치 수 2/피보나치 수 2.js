const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

let dp = new Array(91).fill(null);
dp[0] = 0;
dp[1] = 1;

for (let i = 2; i <= input; i++) {
  dp[i] = BigInt(dp[i - 1]) + BigInt(dp[i - 2]);
}
console.log(String(dp[input]));
