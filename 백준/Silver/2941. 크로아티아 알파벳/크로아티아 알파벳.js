const fs = require('fs');
let input = fs.readFileSync(0).toString().trim();
console.log(input.replace(/c=|c-|dz=|d-|lj|nj|s=|z=|./g, 'a').length);
