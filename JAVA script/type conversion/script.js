String(123);        // "123"
String(true);       // "true"
String(null);       // "null"
(123).toString();   // "123"
Number("123");    // 123
Number("3.14");   // 3.14
Number(true);     // 1
Number(false);    // 0
Number("hello");  // NaN (Not a Number)
Boolean(1);      // true
Boolean(0);      // false
Boolean("Hi");   // true
Boolean("");     // false
Boolean(null);   // false
Boolean(undefined); // false
//let result = "The number is " + 5;
//console.log(result);  "The number is 5"
console.log(1 + "2");   // "12"
console.log("3" + 4 + 5); // "345"
console.log(3 + 4 + "5"); // "75"
console.log("10" + 5); // "105"  → String concatenation, not addition!
console.log("10" - 5);  // 5
console.log("10" * 2);  // 20
console.log("10" / 2);  // 5

if ("hello") {
  console.log("This runs!"); // because "hello" is truthy
}

if (0) {
  console.log("This won’t run."); // because 0 is falsy
}