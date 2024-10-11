const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

let str = input.toUpperCase().split('');
const freq = {};

for (let char of str) {
  freq[char] = (freq[char] || 0) + 1;
}

let maxCount = 0;
let mostFreq = '?';

for (let char in freq) {
  if (freq[char] > maxCount) {
    maxCount = freq[char];
    mostFreq = char;
  } else if (freq[char] === maxCount) mostFreq = '?';
}
console.log(mostFreq);
