const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const T = Number(input.shift());
const dp = Array.from({ length: T }, () => Array(3).fill(0));
const costs = input.slice(0).map((line) => line.split(' ').map(Number));

dp[0][0] = costs[0][0];
dp[0][1] = costs[0][1];
dp[0][2] = costs[0][2];

for (let i = 1; i < T; i++) {
  dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + costs[i][0];
  dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + costs[i][1];
  dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + costs[i][2];
}
console.log(Math.min(...dp[T - 1]));
