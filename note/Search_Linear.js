function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
}

console.log(linearSearch([10, 15, 20, 25, 30], 15));
console.log(linearSearch([10, 0], 100));
console.log(linearSearch([1, 2, 3, 4, 5, 6], 4));

// Linear Search BIG O
// O(1) : Best
// O(n) : Worst
