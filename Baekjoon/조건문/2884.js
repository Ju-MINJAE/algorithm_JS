const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ');

const h = Number(input[0]);
const m = Number(input[1]);

if (m < 45) {
  if (h !== 0) {
    console.log(h - 1, 60 - 45 + m);
  } else {
    console.log(h + 23, 60 - 45 + m);
  }
} else {
  console.log(h, m - 45);
}
