function sumRagne(num) {
  if (num === 1) return 1;
  return num + sumRagne(num - 1);
}

console.log(sumRagne(4));
