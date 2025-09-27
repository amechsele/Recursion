function mergeSort(array) {
   // base case when length is less than 2 
  if (array.length < 2) return;

  // find the mid point of the array
  let mid = Math.floor(array.length / 2);

  let leftArr = [];
  let rightArr = [];

// split the array into two halves
  for (let i = 0; i < array.length; i++) {
      if (i < mid) 
          leftArr.push(array[i]);
      else
          rightArr.push(array[i]);
  }

  // recursively call mergeSort on both halves
  mergeSort(leftArr);
  mergeSort(rightArr);

  // merge the sorted halves
  return merge(array, leftArr, rightArr);
}

// function to merge two sorted arrays
function merge(arr, left, right) {
  let i = 0;
  let j = 0;
  let k = 0;

  // compare elements from both arrays and add the smaller one to the merged array
  while (j < left.length && k < right.length) {
      if (left[j] < right[k]) {
          arr[i] = left[j];
          i++; j++;
      }
      if (right[k] < left[j]) {
          arr[i] = right[k];
          i++; k++;
      }

  }
  // if there are remaining elements in left array add them to the merged array
  while (j < left.length) {
      arr[i] = left[j];
      i++; j++;
  }
//if there are remaining elements in right array add them to the merged array
  while (k < right.length) {
      arr[i] = right[k];
      i++; k++;
  }
  return arr;
}
//test the function
console.log(mergeSort([9, 1, 0, 200, 2, 5, 4]));

