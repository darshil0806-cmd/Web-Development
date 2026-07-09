async function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data received")
        }, 2000);
    })
}
async function processData() {
console.log("Start")

console.log("Fetching data...")

console.log("load data")

let data = await getData()//await always works within async function. It makes the code wait for the promise to resolve or reject before moving to the next line of code. It helps to beat the asyncronius nature of js. It makes the code look like synchronous code.
console.log(data)

console.log("process data")

console.log("End")
}
processData()