const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const num = Number(input);

let l = 0;
if (num === 1) l = 4;
else l = num * 2 + 2 * num;
console.log(l);
