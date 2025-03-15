const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();
const num = Number(input);
const dp = new Array(num + 1).fill(0);

dp[1] = 1;
dp[2] = 2;
for (let i = 3; i < num + 1; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2]) % 15746;
}
console.log(dp[num]);
