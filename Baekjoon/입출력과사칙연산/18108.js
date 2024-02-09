const fs = require('fs');
const input = fs.readFileSync('example.txt').toString().trim();

const A = Number(input);

console.log(A - 543);
