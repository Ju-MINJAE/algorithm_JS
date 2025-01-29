const fs = require('fs');
const input = Number(fs.readFileSync(0).toString().trim());

const queue = Array.from({ length: input }, (_, i) => i + 1);
let front = 0;

while (queue.length - front > 1) {
  front++;
  queue.push(queue[front]);
  front++;
}

console.log(queue[front]);
