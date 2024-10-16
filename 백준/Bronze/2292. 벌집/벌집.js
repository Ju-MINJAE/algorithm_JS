const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

let cnt = 1;
let sum = 1;
while (sum < Number(input)) {
  sum += 6 * cnt;
  cnt += 1;
}

console.log(cnt);
