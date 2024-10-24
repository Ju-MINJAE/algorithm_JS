const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const grid = input.slice(1).map((row) => row.split(''));

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const visited1 = Array.from(Array(n), () => Array(n).fill(false));
const visited2 = Array.from(Array(n), () => Array(n).fill(false));

function dfs(x, y, visited, map, color) {
  visited[x][y] = true;
  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (
      nx >= 0 &&
      ny >= 0 &&
      nx < n &&
      ny < n &&
      !visited[nx][ny] &&
      map[nx][ny] === color
    )
      dfs(nx, ny, visited, map, color);
  }
}

let cnt1 = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (!visited1[i][j]) {
      dfs(i, j, visited1, grid, grid[i][j]);
      cnt1 += 1;
    }
  }
}

const grid2 = grid.map((row) =>
  row.map((color) => (color === 'R' ? 'G' : color))
);

let cnt2 = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (!visited2[i][j]) {
      dfs(i, j, visited2, grid2, grid2[i][j]);
      cnt2 += 1;
    }
  }
}

console.log(cnt1, cnt2);
