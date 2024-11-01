const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const testCase = Number(input.shift());

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
let result = [];

const dfs = (y, x, N, M) => {
  visited[y][x] = true;

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];
    if (nx >= 0 && nx < M && ny >= 0 && ny < N) {
      if (farm[ny][nx] === 1 && visited[ny][nx] === false) {
        dfs(ny, nx, N, M);
      }
    }
  }
};

let line = 0;
for (let t = 0; t < testCase; t++) {
  const [M, N, K] = input[line++].split(' ').map(Number);
  farm = Array.from(Array(N), () => Array(M).fill(0));
  visited = Array.from(Array(N), () => Array(M).fill(false));

  for (let i = 0; i < K; i++) {
    const [x, y] = input[line++].split(' ').map(Number);
    farm[y][x] = 1;
  }

  let cnt = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (farm[i][j] === 1 && !visited[i][j]) {
        dfs(i, j, N, M);
        cnt++;
      }
    }
  }
  result.push(cnt);
}
console.log(result.join('\n'));
