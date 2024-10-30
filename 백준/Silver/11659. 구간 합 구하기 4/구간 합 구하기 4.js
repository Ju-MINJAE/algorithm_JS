const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const numbers = input[1].split(' ').map(Number);
const queries = input.slice(2).map((line) => line.split(' ').map(Number));
const sum = new Array(N + 1).fill(0);

for (let i = 1; i <= N; i++) {
  sum[i] = sum[i - 1] + numbers[i - 1];
}
const answer = [];
queries.forEach(([start, end]) => {
  answer.push(sum[end] - sum[start - 1]);
});

console.log(answer.join('\n'));
