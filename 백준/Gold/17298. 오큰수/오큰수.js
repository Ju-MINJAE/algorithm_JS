const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const N = Number(input.shift());
const arr = input[0].split(' ').map(Number);
// console.log(N, arr);
const stack = [];

for (let i = 0; i < N; i++) {
  while (
    stack.length &&
    Number(arr[i]) > Number(arr[stack[stack.length - 1]])
  ) {
    arr[stack.pop()] = arr[i];
    // console.log(stack);
    // console.log(arr);
  }
  stack.push(i);
  // console.log('stack: ', stack);
  // console.log('arr: ', arr);
}

// console.log('result stack: ', stack);
while (stack.length) {
  arr[stack.pop()] = -1;
}
console.log(arr.join(' '));
