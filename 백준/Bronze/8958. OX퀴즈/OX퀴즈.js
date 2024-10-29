const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const num = Number(input[0]);
for (let i = 1; i <= num; i++) {
  const arr = input[i].split('');
  let result = 0;
  let score = 0;

  for (let j = 0; j < arr.length; j++) {
    if (arr[j] === 'O') {
      score += 1;
      result += score;
    } else {
      score = 0;
    }
  }
  console.log(result);
}
