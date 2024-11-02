const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input.shift());
const arr = input.map((row) => row.split(' ').map(Number));

let white = 0;
let black = 0;

const divide = (x, y, size) => {
  const color = arr[x][y];
  let isSame = true;

  for (let i = x; i < x + size; i++) {
    for (let j = y; j < y + size; j++) {
      if (arr[i][j] !== color) {
        isSame = false;
        break;
      }
    }
    if (!isSame) break;
  }
  if (isSame) {
    if (color === 0) white += 1;
    else black += 1;
  } else {
    const newSize = size / 2;
    divide(x, y, newSize);
    divide(x, y + newSize, newSize);
    divide(x + newSize, y, newSize);
    divide(x + newSize, y + newSize, newSize);
  }
};

divide(0, 0, n);

console.log(white);
console.log(black);
