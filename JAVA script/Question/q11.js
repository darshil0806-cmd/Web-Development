// The Array Filterer: You are building a search feature for your e-commerce site. Write a function named filterProducts that takes an array of product objects and a filter criterion. The function should return a new array containing only the products that match the filter criterion.
function filterProducts(products, criterion) {
  return products.filter((product) => {
    return product[criterion.key] === criterion.value;
  });
}

alert("Enter the filter criterion (key and value) in the format 'key:value':");
let input = prompt();
let [key, value] = input.split(':');
let criterion = { key: key.trim(), value: value.trim() };
