const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const nums = input[1].split('').map(Number);
const sum = nums.reduce((acc, cur) => acc + cur);
console.log(sum);
