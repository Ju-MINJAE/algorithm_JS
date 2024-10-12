const fs = require('fs');
let input = fs.readFileSync(0).toString().trim();
input = Number(input);

for (let i = 1; i < input; i++) {
  let blank = ' '.repeat(input - i);
  let stars = '*'.repeat(i + (i - 1));
  console.log(blank + stars);
}

for (let j = input; j > 0; j--) {
  let blank = ' '.repeat(input - j);
  let stars = '*'.repeat(j + (j - 1));
  console.log(blank + stars);
}
