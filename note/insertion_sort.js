function insertionSort(arr) {
  for (var i = 1; i < arr.length; i++) {
    var currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

console.log(insertionSort([34, 22, 10, 19, 17, 1]));

// Big O of Sorting Algorithms

//               시간복잡도(Best-Worst)           공간복잡도
// bubbleSort      O(n) - O(n^2)                 O(1)
// insertionSort   O(n) - O(n^2)                 O(1)
// selectionSort   O(n^2) - O(n^2)               O(1)
