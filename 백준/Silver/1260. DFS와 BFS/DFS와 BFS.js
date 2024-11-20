const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m, v] = input[0].split(' ').map(Number);
const g = new Array(n + 1);
for (let i = 0; i < g.length; i++) {
  g[i] = [];
}
for (let i = 1; i <= m; i++) {
  let [a, b] = input[i].split(' ').map(Number);
  g[a].push(b);
  g[b].push(a);
}
g.forEach((e) => {
  e.sort((a, b) => a - b);
});

const DFS_visited = new Array(n + 1).fill(false);
const BFS_visited = new Array(n + 1).fill(false);
const DFS_answer = [];
const BFS_answer = [];

function DFS(v) {
  DFS_visited[v] = true;
  DFS_answer.push(v);

  for (const neighbor of g[v]) {
    if (!DFS_visited[neighbor]) {
      DFS(neighbor);
    }
  }
}

function BFS(v) {
  BFS_visited[v] = true;
  BFS_answer.push(v);
  const q = [v];

  while (q.length > 0) {
    const node = q.shift();
    for (const neighbor of g[node]) {
      if (!BFS_visited[neighbor]) {
        BFS_visited[neighbor] = true;
        q.push(neighbor);
        BFS_answer.push(neighbor);
      }
    }
  }
}

DFS(v);
BFS(v);
console.log(DFS_answer.join(' '));
console.log(BFS_answer.join(' '));
