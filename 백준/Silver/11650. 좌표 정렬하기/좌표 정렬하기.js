const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

let arr = [];
for (let i = 1; i <= Number(input[0]); i++) {
  const a = input[i].split(' ').map(Number);
  arr.push(a);
}

arr.sort((a, b) => {
  if (a[0] === b[0]) return a[1] - b[1];
  else return a[0] - b[0];
});
arr.forEach((a) => {
  console.log(a.join(' '));
});
