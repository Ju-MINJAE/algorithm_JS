const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ');

const A = Number(input[0]);
const B = Number(input[1]);

console.log(A.toString(B).toUpperCase());
