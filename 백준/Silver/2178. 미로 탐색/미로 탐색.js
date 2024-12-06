const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const arr = [];
for (let i = 0; i < N; i++) {
  const row = input.shift().split('').map(Number);
  arr.push(row);
}

function bfs(x, y) {
  const q = [[x, y]];

  while (q.length) {
    const [cx, cy] = q.shift();
    // console.log(q);
    // console.log(arr);
    for (let i = 0; i < 4; i++) {
      const nx = cx + dx[i];
      const ny = cy + dy[i];

      if (nx >= 0 && ny >= 0 && nx < N && ny < M) {
        if (arr[nx][ny] === 1) {
          arr[nx][ny] = arr[cx][cy] + 1;
          q.push([nx, ny]);
        }
      }
    }
  }
  return arr[N - 1][M - 1];
}
console.log(bfs(0, 0));
