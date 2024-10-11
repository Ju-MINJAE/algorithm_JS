const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
let result = new Array(N).fill(1).map((a, b) => a + b);

for (let i = 1; i <= M; i++) {
  let [a, b] = input[i].split(' ').map(Number);
  let temp = result[a - 1];
  result[a - 1] = result[b - 1];
  result[b - 1] = temp;
}
console.log(result.join(' '));
