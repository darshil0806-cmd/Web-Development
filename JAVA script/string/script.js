let str = "Hello World";
console.log(str.length); 
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.includes("World")); 
console.log(str.indexOf("o")); 
console.log(str.slice(0, 5));
console.log(str.replace("World", "Universe"));

let str1 = "Hello";
let str2 = " World";
console.log(str1.concat(str2)); // Output: "Hello World"

let name = "   Abhinav   ";
console.log(name.trim()); // Output: "Abhinav"

let fruits = "apple,banana,grape";
console.log(fruits.split(",")); // Output: ["apple", "banana", "grape"]