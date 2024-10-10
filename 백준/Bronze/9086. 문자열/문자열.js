const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const testCase = input[0];
for (let i = 1; i <= testCase; i++) {
  const str = input[i].split('');
  let result = '';
  if (str.length === 1) result = `${str[0]}${str[0]}`;
  else if (str.length === 2) result = input[i];
  else result = `${str[0]}${str[input[i].length - 1]}`;
  console.log(result);
}
