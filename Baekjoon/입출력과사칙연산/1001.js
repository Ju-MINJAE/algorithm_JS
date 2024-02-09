const fs = require('fs');
const input = fs.readFileSync('example.txt').toString().trim().split('\n');

var a = parseInt(input[0]);
var b = parseInt(input[1]);
console.log(a - b);
