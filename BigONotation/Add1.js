// 빅오표기법 - 알고리즘 최악의 실행 시간을 표기. 최소한 보장되는 성능을 표기하기 떄문에 일반적으로 사용.

// 시간복잡도 - 알고리즘의 수행 시간이 얼마인지를 나타냄.
// 1. 상수항 무시 - O(N+5)의 복잡도는 상수를 생략해 O(N)으로 표기
// 2. 계수 무시 - O(3N)의 복잡도는 계수를 생략해  O(N)으로 표기
// 3. 최고차항만 표기 - O(3N^3+2N^2+N+5)의 복잡도는 O(N^3)으로 표기

// 빅오표기법 종류
// O(1), O(logN), O(N), O(N logN), O(N^2), O(2^N)

// 공간복잡도 - 알고리즘이 공간을 얼마나 필요로 하는지 나타냄.

function addUpTo(n) {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
}

let time1 = performance.now();
addUpTo(10000);
let time2 = performance.now();
console.log(`Time Elapsed : ${(time2 - time1) / 1000} seconds.`);
