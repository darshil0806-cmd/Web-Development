// The Coffee Machine: In your coffee shop application, you need to simulate the process of brewing coffee asynchronously. Write an async function named brewCoffee that takes the type of coffee and returns a promise. The promise should resolve with a message indicating that the coffee is ready after a random delay.
async function brewCoffee(coffeeType) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Your ${coffeeType} is ready!`);
    }, Math.random() * 5000 + 500);
  });
}

alert("Enter the type of coffee you want to brew:");
let input = prompt();
brewCoffee(input).then((result) => {
  console.log(result);
});