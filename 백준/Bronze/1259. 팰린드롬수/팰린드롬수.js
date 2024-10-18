const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

for (let i = 0; i < input.length; i++) {
  if (input[i] === '0') continue;
  let reverseInput = input[i].split('').reverse().join('');

  console.log(input[i] === reverseInput ? 'yes' : 'no');
}
