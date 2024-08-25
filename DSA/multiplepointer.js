// MULTIPLE POINTERS

function sumZero_naive(arr){
  for(let i = 0; i < arr.length; i++){
    for(let j = i+1; j < arr.length; j++){
      if(arr[i] + arr[j] === 0){
          return [arr[i], arr[j]];
      }
    }
  }
}

function sumZero (arr) {
  let left =0;
  let right = arr.length - 1

  while (left < right) {
    console.log(arr[left], arr[right]);
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]]
    } 
    else if (sum > 0) {
      right--;
    } 
    else {
      left++;
    }
  }
}

function countUniqueValues(arr) {
  // add whatever parameters you deem necessary - good luck!
  // initialise i to 0
  let i = 0;
  // initilise j to 1
  let j = 1;
  if (!arr.length) {
    return i
  }
  // loop through the array
  while (j < arr.length) {
    //  compare the array at the i and j
    //    and not the same, increment i, update the item at postion i with item at j
    if (arr[i] !== arr[j]) {
      i++
      // arr.splice(i, 1, arr[j]);
      arr[i] = arr[j]
      
    } 
    //    if same move j to the next index
    j++
  }
  return i + 1
}

// console.log(countUniqueValues([0, 0,1,1,1,1,1,2]));
// console.log(countUniqueValues([]));