// Async Array Mapping: Write an asynchronous function that takes an array of numbers and returns a new array of Promises where each number is multiplied by 2 after a delay of 500 milliseconds.

async function asyncArrayMap(numbers) {
  return Promise.all(
    numbers.map(async (num) => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      return num * 2;
    })
  );
}

alert("Enter the numbers in the array separated by commas:");
let input = prompt();
let inputArray = input.split(',').map(Number);
asyncArrayMap(inputArray).then((result) => {
  console.log(result);
});
