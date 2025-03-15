const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const N = Number(input.shift());
const nums = input[0].split(' ').map(Number);

const dp = new Array(N).fill(0);
dp[0] = nums[0];

for (let i = 1; i < N; i++) {
  if (dp[i - 1] < 0) {
    dp[i] = nums[i];
    continue;
  }
  dp[i] = dp[i - 1] + nums[i];
}

console.log(Math.max(...dp));
