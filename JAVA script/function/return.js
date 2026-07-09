function calculateBill(amount, taxRate) {
  function addTax(value) {
    return value + (value * taxRate);
  }
  return addTax(amount);
}

console.log(calculateBill(100, 0.05)); 