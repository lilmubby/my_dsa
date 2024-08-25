function binarySearch(arr, val){
  // add whatever parameters you deem necessary - good luck!
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    console.log({mid, left, right});
    if (arr[mid]=== val) {
      return mid
    }
    if (arr[mid] < val) {
      left = mid + 1
    }
    if (arr[mid] > val) {
      right = mid - 1
    }
  }
  return -1
}

console.log(
  binarySearch([10,11, 12, 13, 15, 20, 25, 30], 50)
);