function bubbleSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      //   console.log(arr);
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort([37, 45, 29, -3, 8, 20]));

// Big O of Sorting Algorithms

//               시간복잡도(Best-Worst)           공간복잡도
// bubbleSort      O(n) - O(n^2)                 O(1)
// insertionSort   O(n) - O(n^2)                 O(1)
// selectionSort   O(n^2) - O(n^2)               O(1)
