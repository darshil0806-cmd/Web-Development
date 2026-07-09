//1. Arithmetic Operators

let a = 10;
let b = 3;
console.log(a % b); // 1

//2. Comparison Operator
console.log(a > b);  // true
console.log(a < b);  // false
console.log(a >= b); // true
console.log(a <= b); // false
console.log(a == b); // false
console.log(a != b); // true

//3. Logical Operators

let age = 20;
let hasLicense = true;

if (age >= 18 && hasLicense) {
  console.log("You can drive!");
}

//5. Conditional (Ternary) Operator
//condition ? valueIfTrue : valueIfFalse

let age = 17;
let message = age >= 18 ? "You are an adult" : "You are a minor";
console.log(message); // "You are a minor"