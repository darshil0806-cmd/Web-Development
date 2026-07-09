for (let i = 1; i <= 5; i++) {
  console.log("Count:", i);
}

//for (variable in object)

let person = {
  name: "Alice",
  age: 25,
  job: "Designer"
};

for (let key in person) {
  console.log(key + ": " + person[key]);
}

//for (variable of iterable)

let colors = ["red", "green", "blue"];

for (let color of colors) {
  console.log(color);
}