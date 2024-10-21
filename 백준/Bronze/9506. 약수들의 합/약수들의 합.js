const fs = require('fs');
const input = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

for (let i = 0; i < input.length; i++) {
  const num = input[i];
  if (num === -1) break;

  let sum = 0;
  const divisors = [];

  for (let j = 1; j <= num / 2; j++) {
    if (num % j === 0) {
      sum += j;
      divisors.push(j);
    }
  }

  if (sum === num) console.log(num + ' = ' + divisors.join(' + '));
  else console.log(num + ' is NOT perfect.');
}
