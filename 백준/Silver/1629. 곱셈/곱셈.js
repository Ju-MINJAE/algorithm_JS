const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ');

const A = BigInt(input[0]);
const B = BigInt(input[1]);
const C = BigInt(input[2]);

const modularExponentiation = (a, b, c) => {
  if (b === 0n) return 1n;
  const half = modularExponentiation(a, b / 2n, c);
  const halfSquared = (half * half) % c;

  if (b % 2n === 0n) return halfSquared;
  else return (halfSquared * a) % c;
};

console.log(modularExponentiation(A, B, C).toString());
