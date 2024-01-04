// 객체의 빅오 - 정렬되어 있을 필요가 없을때 빠르게 동작, 키를 통한 접근, 입력, 삭제가 빠름
// 삽입, 삭제, 접근, 수정 O(1)
// 탐색 O(N) : 값을 찾기 위해 모든 키를 탐색

let instructor = {
  firstName: 'Kelly',
  isInstructor: true,
  favoriteNumbers: [1, 2, 3, 4],
};

console.log(Object.keys(instructor)); // O(N)
console.log(Object.values(instructor)); // O(N)
console.log(Object.entries(instructor)); // O(N)
console.log(instructor.hasOwnProperty('firstName')); // O(1)
