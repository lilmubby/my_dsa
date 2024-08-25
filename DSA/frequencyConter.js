// FREQUENCY COUNTER

function validAnagram(str1, str2) {
  // compare the lengths
  if (str1.length !== str2.length) return false
  // create a frequency objects for the 2 strings
  const obj1 = {}
  const obj2 = {}
  // loop through the strings, add the str frequency to each corresponding obj
  for (const i of str1) {
    obj1[i] = ++obj1[i] || 1
  }
  for (const i of str2) {
    obj2[i] = ++obj2[i] || 1
  }
  // if the str1 is contained in the str2and contain the same frequency, return true else false
  for (const key in obj1) {
    if (!([key] in obj2)) {
      return false
    }
    if (obj1[key] !== obj2[key]) {
      return false
    }
  }
  return true
}


function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }
  console.log(lookup)

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

// {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
// validAnagram('anagrams', 'nagaramm')
// console.log(validAnagram('anagrams', 'nagarams'))