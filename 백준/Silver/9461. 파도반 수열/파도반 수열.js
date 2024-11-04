const fs = require('fs');
const [a, ...input] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const memo = [0, 1, 1, 1];

function P(n) {
  if (memo[n] !== undefined) return memo[n];
  memo[n] = P(n - 2) + P(n - 3);
  return memo[n];
}

for (let i = 0; i < a; i++) {
  console.log(P(input[i]));
}

