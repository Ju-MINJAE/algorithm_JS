const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
let result = new Array(N).fill(1).map((a, b) => a + b);

for (let i = 1; i <= M; i++) {
  const [a, b] = input[i].split(' ').map(Number);
  const array = result.slice(a - 1, b).reverse();
  result.splice(a - 1, b - a + 1, ...array);
}
console.log(result.join(' '));