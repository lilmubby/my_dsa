
function sameFrequency(a, b){

  if (String(a).length !== String(a).length) return false;
  const obj1 = {}
  const obj2 = {}
  for (const char of String(a)) {
    obj1[char] = (obj1[char] || 0) +1
  }
  for (const char of String(b)) {
    obj2[char] = (obj2[char] || 0) +1
  }
  for (const key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false
    }
  }

  return true
}

function areThereDuplicates(...rest) {
  rest.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });
  let i = 0
  let j = 1
  while (j < rest.length) {
    if (rest[i] === rest[j]) {
      return true
    }
    j++;
    i++
  }
  return false
}

function averagePair(arr, target){
  // add whatever parameters you deem necessary - good luck!
  let i = 0;
  let j = arr.length-1;
  while (i < j) {
    let average = (arr[i] + arr[j]) / 2;
    if (average === target) {
      return true
    }else if (average < target) {
      i++
    } else {
      j--
    }
    
  }
  return false
}
// console.log(averagePair([1,3,3,5,6,7,10,12,19],8));
