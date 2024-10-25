const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const time = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

let totalWaitTime = 0;
let accumulatedWaitTime = 0;

for (let i = 0; i < n; i++) {
  accumulatedWaitTime += time[i];
  totalWaitTime += accumulatedWaitTime;
  // console.log(accumulatedWaitTime, totalWaitTime);
}

console.log(totalWaitTime);
