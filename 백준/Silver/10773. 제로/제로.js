const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

let cnt = Number(input[0]);
let arr = [];
for (let i = 1; i <= cnt; i++) {
  if (Number(input[i]) !== 0) arr.push(Number(input[i]));
  else arr.pop();
}
console.log(arr.length ? arr.reduce((acc, num) => acc + num) : 0);
