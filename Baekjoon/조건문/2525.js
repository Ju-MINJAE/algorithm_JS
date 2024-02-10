const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const h = Number(input[0].split(' ')[0]);
const m = Number(input[0].split(' ')[1]);
const t = Number(input[1]);

const result = h * 60 + m + t;
const resultH = Math.floor(result / 60);
const resultM = result % 60;

if (resultH >= 24) {
  console.log(resultH - 24, resultM);
} else {
  console.log(resultH, resultM);
}
