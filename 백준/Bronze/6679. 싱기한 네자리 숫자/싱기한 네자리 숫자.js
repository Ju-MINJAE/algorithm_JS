for (let i = 1000; i < 10000; i++) {
  let sum_10 = 0;
  let sum_12 = 0;
  let sum_16 = 0;

  for (let j = i; j > 0; j = Math.floor(j / 10)) {
    sum_10 += j % 10;
  }
  for (let j = i; j > 0; j = Math.floor(j / 12)) {
    sum_12 += j % 12;
  }
  for (let j = i; j > 0; j = Math.floor(j / 16)) {
    sum_16 += j % 16;
  }

  if (sum_10 === sum_12 && sum_12 === sum_16) {
    console.log(i);
  }
}
