const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const num = Number(input[0]);
const stack = [];
const answer = [];

for (let i = 1; i <= num; i++) {
  const [a, b] = input[i].split(' ');

  switch (a) {
    case 'push':
      stack.push(b);
      break;
    case 'pop':
      answer.push(stack.length ? stack.pop() : -1);
      break;
    case 'size':
      answer.push(stack.length);
      break;
    case 'empty':
      answer.push(stack.length ? 0 : 1);
      break;
    case 'top':
      answer.push(stack.length ? stack[stack.length - 1] : -1);
      break;
  }
}
console.log(answer.join('\n'));
