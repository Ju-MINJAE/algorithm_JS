const fs = require('fs');
const input = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map((item) => Number(item)));

const n = input.shift();
let dp = [...input];

for (let i = 1; i < dp.length; i++) {
  for (let j = 0; j < dp[i].length; j++) {
    if (j == 0) {
      dp[i][j] += dp[i - 1][j];
    } else if (j == dp[i].length - 1) {
      dp[i][j] += dp[i - 1][j - 1];
    } else {
      dp[i][j] += Math.max(dp[i - 1][j - 1], dp[i - 1][j]);
    }
  }
}

console.log(Math.max(...dp[dp.length - 1]));
