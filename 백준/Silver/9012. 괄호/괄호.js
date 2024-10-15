const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

let cnt = Number(input[0]);
for (let i = 1; i <= cnt; i++) {
  const str = input[i].split('');
  let a = 0;
  let correct = true;

  for (let j = 0; j < str.length; j++) {
    if (str[j] === '(') a += 1;
    else if (str[j] === ')') a -= 1;

    if (a < 0) {
      correct = false;
      break;
    }
  }
  if (a === 0 && correct) console.log('YES');
  else console.log('NO');
}
