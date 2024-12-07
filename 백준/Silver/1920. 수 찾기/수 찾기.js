const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const N = Number(input.shift());
const arr1 = input.shift().split(' ').map(Number);
const M = Number(input.shift());
const arr2 = input.shift().split(' ').map(Number);

arr1.sort((a, b) => a - b);
arr2.forEach((el) => {
  let start = 0;
  let end = arr1.length - 1;
  let isExist = false;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr1[mid] === el) {
      isExist = true;
      break;
    } else if (arr1[mid] < el) start = mid + 1;
    else end = mid - 1;
  }
  console.log(isExist ? 1 : 0);
});
