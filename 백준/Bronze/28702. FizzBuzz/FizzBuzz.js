const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

let value = 0;
let idx = 0;

for (let i = 0; i < input.length; i++) {
  if (input[i] !== 'Fizz' && input[i] !== 'Buzz' && input[i] !== 'FizzBuzz') {
    value = Number(input[i]);
    idx = i;
  }
}

if (idx === 0) value += 3;
else if (idx === 1) value += 2;
else if (idx === 2) value += 1;

if (value % 3 === 0 && value % 5 === 0) console.log('FizzBuzz');
else if (value % 3 === 0) console.log('Fizz');
else if (value % 5 === 0) console.log('Buzz');
else console.log(value);
