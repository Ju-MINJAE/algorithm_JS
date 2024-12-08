const fs = require('fs');
const input = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const T = input.shift();
const maxN = Math.max(...input);
const dp = Array.from({ length: maxN + 1 }, () => [0, 0]);

dp[0] = [1, 0];
dp[1] = [0, 1];

for (let i = 2; i <= maxN; i++) {
  dp[i][0] = dp[i - 1][0] + dp[i - 2][0];
  dp[i][1] = dp[i - 1][1] + dp[i - 2][1];
}
const result = input.map((n) => `${dp[n][0]} ${dp[n][1]}`);
console.log(result.join('\n'));
