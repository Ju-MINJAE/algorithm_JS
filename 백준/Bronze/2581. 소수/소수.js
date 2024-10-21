const fs = require('fs');
const input = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const [m, n] = input;
const arr = [];
for (let i = m; i <= n; i++) {
  let cnt = 0;
  for (let j = 1; j <= i; j++) {
    if (i % j === 0) cnt += 1;
  }
  if (cnt === 2) arr.push(i);
}
if (arr.length) {
  console.log(arr.reduce((acc, cur) => acc + cur));
  console.log(arr[0]);
} else {
  console.log(-1);
}
