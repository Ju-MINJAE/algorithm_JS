const fs = require('fs');
const input = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const [x, y] = input.slice(0, 2);
const [w, h] = input.slice(2, 4);

let minX = w - x < x ? w - x : x;
let minY = h - y < y ? h - y : y;

console.log(minX < minY ? minX : minY);
