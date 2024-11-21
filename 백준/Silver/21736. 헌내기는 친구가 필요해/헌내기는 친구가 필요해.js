const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input.shift().split(' ').map(Number);
let graph = Array.from({ length: n }).map(() => []);
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

for (let i = 0; i < n; i++) {
  graph[i] = input[i].split('');
}

const visited = Array.from({ length: n }).map(() => new Array(m).fill(false));
let answer = 0;

function dfs(y, x) {
  visited[y][x] = true;
  // console.log(visited);
  if (graph[y][x] === 'P') answer += 1;

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx < 0 || ny < 0 || nx >= m || ny >= n) continue;
    if (!visited[ny][nx] && graph[ny][nx] !== 'X') dfs(ny, nx);
  }
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (graph[i][j] === 'I') {
      dfs(i, j);
      break;
    }
  }
}
console.log(answer === 0 ? 'TT' : answer);
