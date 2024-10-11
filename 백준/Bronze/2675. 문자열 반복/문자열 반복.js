const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const num = input[0];

for (let i = 1; i <= num; i++) {
  const [time, string] = input[i].split(' ');
  const str = string.split('').map((x) => x.repeat(Number(time)));
  console.log(str.join(''));
}
