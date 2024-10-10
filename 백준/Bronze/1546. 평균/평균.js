const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const scores = input[1].split(' ').map(Number);
const maxScore = Math.max(...scores);
const newScore = scores.map((x) => (x / maxScore) * 100);

let sum = 0;
for (let i = 0; i < newScore.length; i++) {
  sum += newScore[i];
}
const average = sum / newScore.length;
console.log(average);
