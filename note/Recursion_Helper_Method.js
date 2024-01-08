// function collectOddValues(arr) {
//   let result = [];

//   function helper(helperInput) {
//     if (helperInput.length === 0) return;

//     if (helperInput[0] % 2 !== 0) {
//       result.push(helperInput[0]);
//     }
//     helper(helperInput.slice(1));
//   }
//   helper(arr);

//   return result;
// }

function collectOddValues(arr) {
  let newArr = [];

  if (arr.length === 0) return newArr;

  if (arr[0] % 2 !== 0) newArr.push(arr[0]);

  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}
// collectOddValues([1,2,3,4,5])
// [1].concat(collectOddValues([2,3,4,5]))
// [1].concat(collectOddValues([3,4,5]))
// [1,3].concat(collectOddValues([4,5])
// [1,3].concat(collectOddValues([5]))
// [1,3,5]

console.log(collectOddValues([1, 2, 3, 4, 5]));
