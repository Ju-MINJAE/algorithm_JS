const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [m, n] = input.shift().split(' ').map(Number);
const box = input.map((col) => col.split(' ').map((el) => Number(el)));
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

let day = 0;
const queue = [];

for (let y = 0; y < n; y++) {
  for (let x = 0; x < m; x++) {
    if (box[y][x] === 1) {
      queue.push([y, x]);
    }
  }
}

function BFS() {
  let idx = 0;

  while (idx < queue.length) {
    const [y, x] = queue[idx];
    idx++;

    for (let i = 0; i < 4; i++) {
      const ny = y + dy[i];
      const nx = x + dx[i];

      if (ny >= 0 && ny < n && nx >= 0 && nx < m && box[ny][nx] === 0) {
        box[ny][nx] = box[y][x] + 1;
        queue.push([ny, nx]);
        // console.log(box);
      }
    }
  }
}
BFS();

for (let y = 0; y < n; y++) {
  for (let x = 0; x < m; x++) {
    if (box[y][x] === 0) {
      console.log(-1);
      return;
    }
    day = Math.max(day, box[y][x]);
  }
}

console.log(day - 1);
