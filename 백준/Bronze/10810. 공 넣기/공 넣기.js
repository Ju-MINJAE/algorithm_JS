const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
let result = new Array(N).fill(0);

for (let i = 1; i <= M; i++) {
  const [a, b, c] = input[i].split(' ').map(Number);
  for (let j = a; j <= b; j++) {
    result[j - 1] = c;
  }
}
console.log(result.join(' '));
