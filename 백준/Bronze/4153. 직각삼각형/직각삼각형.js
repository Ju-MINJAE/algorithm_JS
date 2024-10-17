const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

for (let i = 0; i < input.length - 1; i++) {
  let isTrue = false;
  const arr = input[i].split(' ').map(Number);
  arr.sort((a, b) => a - b);

  const x = arr[0] ** 2 + arr[1] ** 2;
  if (x === arr[2] ** 2) {
    isTrue = true;
  }
  console.log(isTrue ? 'right' : 'wrong');
}
