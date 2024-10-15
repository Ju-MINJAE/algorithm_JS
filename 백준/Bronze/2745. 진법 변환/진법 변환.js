const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ');

const A = input[0];
const B = Number(input[1]);

console.log(parseInt(A, B));
