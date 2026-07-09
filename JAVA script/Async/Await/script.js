function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data received")
        }, 2000);
    })
}

console.log("Start")

console.log("Fetching data...")

console.log("load data")

let data = getData()

data.then((a) => {// without this then method cosole data,process data and end will be printed before the data is received because of the asyncronius nature of js. But with this then method we can make sure that the data is received before we process it and end the program.
console.log(data)

console.log("process data")

console.log("End")
})

//help to beat asyncronius nature of js. It makes the code look like synchronous code. 
