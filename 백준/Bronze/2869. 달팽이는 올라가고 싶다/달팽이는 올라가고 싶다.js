const fs = require('fs');
const input = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

let climb = input[0];
let slipped = input[1];
let height = input[2];

let day = Math.ceil((height - slipped) / (climb - slipped));

console.log(day);

// 시간 초과로 실패
// const [A, B, V] = input;
// let cnt = 0;
// let h = 0;
// while (true) {
//   cnt++;
//   h += A;
//   if (h < V) h -= B;
//   else if (h >= V) break;
// }
// console.log(cnt);
