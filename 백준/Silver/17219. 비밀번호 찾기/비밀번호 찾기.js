const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const password = {};
const address = [];

for (let i = 1; i <= n; i++) {
  const [site, pw] = input[i].split(' ');
  password[site] = pw;
}

for (let i = n + 1; i < input.length; i++) {
  address.push(input[i]);
}

const answer = address.map((site) => password[site]);
console.log(answer.join(' '));
