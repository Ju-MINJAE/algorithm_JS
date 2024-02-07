const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const A = Number(input[0]);
const B = Number(input[1]);

console.log(A * (B % 10));
console.log(A * Math.floor((B % 100) / 10));
console.log(A * Math.floor(B / 100));
console.log(A * B);
