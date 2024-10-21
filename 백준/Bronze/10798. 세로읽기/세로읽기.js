const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const strArr = [];
let maxLength = 0;
for (let i = 0; i < input.length; i++) {
  const strCol = input[i].split('');
  strArr.push(strCol);
  maxLength = Math.max(maxLength, strCol.length);
}

let result = '';

for (let j = 0; j < maxLength; j++) {
  for (let i = 0; i < strArr.length; i++) {
    if (j < strArr[i].length) {
      result += strArr[i][j];
    }
  }
}

console.log(result);
