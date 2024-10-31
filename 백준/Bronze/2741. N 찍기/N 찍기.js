const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

for (let i = 0; i < input; i++) {
  console.log(i + 1);
}
