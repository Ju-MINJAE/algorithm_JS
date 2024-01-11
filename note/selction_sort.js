function selctionSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    var lowset = i;
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowset]) {
        lowset = j;
      }
    }
    if (i !== lowset) {
      var temp = arr[i];
      arr[i] = arr[lowset];
      arr[lowset] = temp;
      console.log(arr);
    }
  }

  return arr;
}

selctionSort([34, 22, 10, 19, 17]);

// Big O of Sorting Algorithms

//               시간복잡도(Best-Worst)           공간복잡도
// bubbleSort      O(n) - O(n^2)                 O(1)
// insertionSort   O(n) - O(n^2)                 O(1)
// selectionSort   O(n^2) - O(n^2)               O(1)
