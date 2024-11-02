const fs = require('fs');
const [N, r, c] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const z = (N, r, c) => {
  if (N === 0) return 0;

  const half = 2 ** (N - 1);

  if (r < half && c < half) return z(N - 1, r, c);
  else if (r < half && c >= half) return half * half + z(N - 1, r, c - half);
  else if (r >= half && c < half)
    return 2 * half * half + z(N - 1, r - half, c);
  else return 3 * half * half + z(N - 1, r - half, c - half);
};

console.log(z(N, r, c));
