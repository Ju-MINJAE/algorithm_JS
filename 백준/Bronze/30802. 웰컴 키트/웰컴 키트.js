const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const people = Number(input[0]);
const size = input[1].split(' ').map(Number);
const set = input[2].split(' ').map(Number);

let sum = size.map((el) => el / set[0]).map((el) => Math.ceil(el));
console.log(sum.reduce((acc, cur) => acc + cur, 0));
console.log(Math.floor(people / set[1]), Math.floor(people % set[1]));
