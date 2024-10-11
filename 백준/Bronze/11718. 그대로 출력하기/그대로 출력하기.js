const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

for (str of input) {
  console.log(str);
}
