const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const t = input[0];
const v = input[1];

console.log(t[v - 1]);
