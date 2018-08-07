// Write a function that accepts 1 integer as an argument. The
// function should return "true" if the number is divisible by either
// 3 or 5, and return "false" otherwise.


let number = 12;


function threeFiveEval (number){
  // if number is divisible by 3 and 5, return true
 if (number % 3 === 0 || number % 5 === 0){
  return true;
  } else {
  // else return false
  return false;
  }
}
