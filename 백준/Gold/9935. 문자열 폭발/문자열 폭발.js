const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const string = input[0];
const bomb = input[1];
const stack = [];

for (let i = 0; i < string.length; i++) {
  stack.push(string[i]);

  if (
    stack.length >= bomb.length &&
    stack.slice(-bomb.length).join('') === bomb
  )
    stack.splice(-bomb.length);
}

console.log(stack.length ? stack.join('') : 'FRULA');
