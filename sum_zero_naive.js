function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}
// 시간 복잡도 O(N^2) ,  공간 복잡도 O(1)

console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]));
