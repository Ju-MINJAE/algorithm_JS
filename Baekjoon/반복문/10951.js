const fs = require('fs');
const input = fs.readFileSync(0).toString().split('\n');

for (let i = 0; i < input.length; i++) {
  let num1 = Number(input[i].split(' ')[0]);
  let num2 = Number(input[i].split(' ')[1]);

  console.log(num1 + num2);
}

// const fs = require('fs');
// const inputData = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// for(let i = 0; i < inputData.length; i++){
// 	let data = inputData[i].split(' ').map(Number);
//   	console.log(data[0] + data[1]);
// }
