function numberCompare(num1, num2) {
  return num1 - num2;
  // return num2 - num1;
}

console.log([6, 3, 4, 1].sort(numberCompare));

function compareByLen(str1, str2) {
  return str1.length - str2.length;
}

console.log(
  ['Steele', 'Colt', 'Data Structures', 'Algorithms'].sort(compareByLen)
);
