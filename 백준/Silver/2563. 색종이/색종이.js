const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const countPaper = Number(input[0]);
const paper = Array.from({ length: 100 }, () => Array(100).fill(0));

for (let i = 1; i <= countPaper; i++) {
  const [x, y] = input[i].split(' ').map(Number);
  for (let j = x; j < x + 10; j++) {
    for (let k = y; k < y + 10; k++) {
      paper[j][k] = 1;
    }
  }
}

let result = 0;
for (let i = 0; i < 100; i++) {
  for (let j = 0; j < 100; j++) {
    result += paper[i][j];
  }
}
console.log(result);
