//Implementation of the insertion sort algorithm in JavaScript.

function insertionSort(arr) {
  const n = arr.length;

  for (let i = 1; i < n; i++) {
    let current = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = current;
  }

  return arr;
}

// Example usage:
const unsortedArray = [5, 2, 9, 3, 6];
const sortedArray = insertionSort(unsortedArray);
console.log(sortedArray); // Output: [2, 3, 5, 6, 9]