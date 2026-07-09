// The Sum Selector: You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.
function sumUntilNegative(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      break;
    }
    sum += arr[i];
  }
  return sum;
}

alert("enter the numbers in the array separated by commas:");
let input = prompt();
let inputArray = input.split(',').map(Number);
console.log(inputArray);
let result = sumUntilNegative(inputArray);
console.log(result);
