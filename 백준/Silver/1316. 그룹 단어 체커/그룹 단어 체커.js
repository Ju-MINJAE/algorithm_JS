const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const items = Number(input[0]);
let cnt = 0;

for (let i = 1; i <= items; i++) {
  const word = input[i];
  const letter = [];
  let isTrue = true;

  for (let j = 0; j < word.length; j++) {
    if (letter.indexOf(word[j]) === -1) {
      letter.push(word[j]);
    } else {
      if (letter.indexOf(word[j]) !== letter.length - 1) {
        isTrue = false;
        break;
      }
    }
  }
  if (isTrue) cnt++;
}
console.log(cnt);
