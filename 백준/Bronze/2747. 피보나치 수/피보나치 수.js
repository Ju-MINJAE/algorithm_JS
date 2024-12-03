const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const num = Number(input);

const dp = [];
dp[0] = 0;
dp[1] = 1;
for (let i = 2; i <= num; i++) {
  dp[i] = dp[i - 2] + dp[i - 1];
}
console.log(dp[num]);
