const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

input.shift();
const splitArr = input.reduce(
  (acc, cur) => {
    if (cur === 'ENTER') {
      acc.push([]);
    } else {
      acc[acc.length - 1].push(cur);
    }
    return acc;
  },
  [[]]
);

let result = 0;
for (let i = 0; i < splitArr.length; i++) {
  const a = new Set(splitArr[i]);
  result += a.size;
}
console.log(result);
