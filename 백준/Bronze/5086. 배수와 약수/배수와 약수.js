const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

let answer = '';
let length = input.length;

for (let i = 0; i < length - 1; i++) {
  const [a, b] = input[i].split(' ').map(Number);
  if (b % a === 0) answer = 'factor';
  else if (a % b === 0) answer = 'multiple';
  else answer = 'neither';

  console.log(answer);
}
