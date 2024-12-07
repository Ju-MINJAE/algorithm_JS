const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [K, N] = input.shift().split(' ').map(Number);
const lines = input.map(Number).sort((a, b) => a - b);

let start = 0;
let end = Math.max(...lines);
let result = 0;

while (start <= end) {
  let mid = Math.floor((start + end) / 2);
  let count = lines.reduce((sum, line) => sum + Math.floor(line / mid), 0);

  if (count >= N) {
    result = mid;
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}

console.log(result);
