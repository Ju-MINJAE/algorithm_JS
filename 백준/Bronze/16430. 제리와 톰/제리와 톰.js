const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();
const [A, B] = input.split(' ').map(Number);

const C = B - A;
console.log(C, B);
