const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const count = Number(input[0]);
let arr = [];
for (let i = 1; i <= count; i++) {
  let a = input[i].split(' ');
  arr.push(a);
}
for (let i = 0; i < arr.length; i++) {
  arr[i][0] = Number(arr[i][0]);
}
arr.sort((a, b) => a[0] - b[0]);
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i].join(' '));
}
