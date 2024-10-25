const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const ladder = input.slice(1, N + 1).map((e) => e.split(' ').map(Number));
const snake = input.slice(N + 1).map((e) => e.split(' ').map(Number));
const visited = Array(101).fill(false);
const arr = Array(101).fill(0);

for (let [x, y] of ladder) {
  arr[x] = y;
}
for (let [u, v] of snake) {
  arr[u] = v;
}

const bfs = () => {
  const q = [[1, 0]];
  visited[1] = true;

  while (q.length > 0) {
    const [cur, move] = q.shift();

    for (let i = 1; i <= 6; i++) {
      let next = cur + i;

      if (next > 100) continue;
      if (arr[next] !== 0) next = arr[next];
      if (!visited[next]) {
        if (next === 100) return move + 1;
        q.push([next, move + 1]);
        visited[next] = true;
      }
    }
  }
};

console.log(bfs());
