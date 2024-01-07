// function areThereDuplicates(...args) {
//   // Two pointers
//   args.sort((a, b) => a > b);
//   let start = 0;
//   let next = 1;
//   while (next < args.length) {
//     if (args[start] === args[next]) {
//       return true;
//     }
//     start++;
//     next++;
//   }
//   return false;
// }

function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}

console.log(areThereDuplicates('a', 'b', 'c'));
