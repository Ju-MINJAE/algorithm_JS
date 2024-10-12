const fs = require('fs');
const input = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const [N, K] = input;
const divisors = [];

for (let i = 1; i <= N; i++) {
  if (N % i === 0) {
    divisors.push(i);
    if (divisors.length === K) {
      console.log(i);
      process.exit(0);
    }
  }
}
console.log(0);
