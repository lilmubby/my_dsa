// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(base, pow){
  if (pow === 0) return 1;
  return base * power(base, pow-1)

}

//factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040

function factorial(numb) {
  if (numb <= 1) return 1
  return numb * factorial(numb-1)
}

// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(arr) {
  let result = 1;

  const helper = (helperInput) => {
    if (helperInput.length === 0) {
      return;
    }
    result *= helperInput[0]
    return helper(helperInput.slice(1))
  }
  helper(arr)

  return result
}

// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55 

function recursiveRange(number){
  let sum = 0;

  const helper = (num) => {
    if (num < 1) return;
    sum += num
    return helper(num-1)
  }
  helper(number)
  return sum
}

console.log(
  recursiveRange(10)
)