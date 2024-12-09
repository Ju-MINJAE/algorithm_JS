const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();
const [a, b, c] = input.split(' ').map(Number);

if (a + b === c) console.log(`${a}+${b}=${c}`);
else if (a - b === c) console.log(`${a}-${b}=${c}`);
else if (a * b === c) console.log(`${a}*${b}=${c}`);
else if (a / b === c) console.log(`${a}/${b}=${c}`);
else if (a === b + c) console.log(`${a}=${b}+${c}`);
else if (a === b - c) console.log(`${a}=${b}-${c}`);
else if (a === b * c) console.log(`${a}=${b}*${c}`);
else if (a === b / c) console.log(`${a}=${b}/${c}`);
