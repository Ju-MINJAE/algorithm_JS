const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const Num = Number(input[0]);
const arr = [];
const result = [];
for (let i = 1; i <= Num; i++) {
  const a = input[i].split(' ').map(Number);
  arr.push(a);
}

for (let i = 0; i < Num; i++) {
  let cnt = 0;
  for (let j = 0; j < Num; j++) {
    if (arr[i][0] < arr[j][0] && arr[i][1] < arr[j][1]) {
      cnt++;
    }
  }
  result.push(cnt + 1);
}
console.log(result.join(' '));
