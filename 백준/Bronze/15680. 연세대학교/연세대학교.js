const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const num = Number(input);

if (num === 0) console.log('YONSEI');
if (num === 1) console.log('Leading the Way to the Future');
