const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const itemCount = Number(input[0]);
let arr = [];
for (let i = 1; i <= itemCount; i++) {
  const item = Number(input[i]);
  arr.push(item);
}
arr.sort((a, b) => a - b);

let str = '';
for (let i = 0; i < arr.length; i++) {
  str += String(arr[i]) + '\n';
}
console.log(str.trim());
