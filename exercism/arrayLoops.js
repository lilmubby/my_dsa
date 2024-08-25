
function cardTypeCheck(stack, card) {
  let count = 0;
  stack.forEach((x) => {
    if (x === card) {
      count++
    }
  })
  return count
}
const cardType = 3;

function determineOddEvenCards(stack, type) {
  let evenCount = 0;
  let oddCount = 0;
  for (let item of stack) {
    if (item % 2 === 0) {
        console.log("even");
      evenCount++
    } else {
      oddCount++
    }
    
  }
  return type ? evenCount : oddCount
}