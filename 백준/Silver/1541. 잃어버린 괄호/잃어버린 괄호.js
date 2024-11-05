const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const fomula = input.split('-');

let answer = [];

fomula.forEach((item) => {
  if (item.includes('+')) {
    let sum = 0;
    item = item.split('+').map(Number);
    item.forEach((i) => (sum += i));
    answer.push(sum);
  } else {
    answer.push(Number(item));
  }
});

console.log(answer.reduce((prev, cur) => prev - cur));
