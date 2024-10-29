const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const num = Number(input[0]);

for (let i = 1; i <= num; i++) {
  const [h, w, n] = input[i].split(' ').map(Number);
  const floor = n % h === 0 ? h : n % h;
  const roomnum = Math.ceil(n / h);

  console.log(`${floor}${roomnum < 10 ? '0' + roomnum : roomnum}`);
}
