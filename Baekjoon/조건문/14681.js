const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const QuadrantX = parseInt(input[0]);
const QuadrantY = parseInt(input[1]);

if (QuadrantX > 0 && QuadrantY > 0) {
  console.log('1');
} else if (QuadrantX < 0 && QuadrantY > 0) {
  console.log('2');
} else if (QuadrantX < 0 && QuadrantY < 0) {
  console.log('3');
} else {
  console.log('4');
}
