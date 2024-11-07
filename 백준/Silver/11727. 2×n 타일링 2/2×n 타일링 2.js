const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

let dp = [0, 1, 3];

for (let i = 3; i <= Number(input); i++) {
  dp[i] = (dp[i - 1] + 2 * dp[i - 2]) % 10007;
}
console.log(dp[input]);
