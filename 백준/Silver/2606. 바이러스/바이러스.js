const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const computer = Number(input[0]);
const pair = Number(input[1]);
const result = new Array(computer + 1).fill(false);
result[1] = true;

const graph = Array.from({ length: computer + 1 }, () => []);
for (let i = 2; i < 2 + pair; i++) {
  const [a, b] = input[i].split(' ').map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

let cnt = 0;
const dfs = (x) => {
  result[x] = true;
  for (let y of graph[x]) {
    if (!result[y]) {
      cnt += 1;
      dfs(y);
    }
  }
};
dfs(1);

console.log(cnt);
