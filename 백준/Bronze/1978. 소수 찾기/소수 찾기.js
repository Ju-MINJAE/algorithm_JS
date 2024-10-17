const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

let answer = 0;
const tc = Number(input[0]);
const arr = input[1].split(' ').map(Number);

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

for (let i = 0; i < tc; i++) {
  if (isPrime(arr[i])) answer += 1;
}
console.log(answer);
