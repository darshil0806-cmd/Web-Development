// The Asynchronous Shopper: Imagine you are building an online shopping application. Write an asynchronous function called placeOrder that simulates placing an order and returns a promise. The promise should resolve with an order confirmation message after a random delay.
async function placeOrder(items) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Order confirmed for items: ${items.join(', ')}`);
    }, Math.random() * 5000 + 500); 
  });
}
alert("Enter the items you want to order, separated by commas:");
let input = prompt();
let itemsArray = input.split(',').map(item => item.trim());
placeOrder(itemsArray).then((result) => {
  console.log(result);
});