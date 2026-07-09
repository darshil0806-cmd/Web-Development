let a = prompt("Enter first number")

let b = prompt("Enter second number")
if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Sorry this is not allowed")
}

let sum = parseInt(a) + parseInt(b)

function main(){ 
    let x = 1;
    try {
        console.log("The sum is ", sum * x)
        return true
        
    } catch (error) {//not work with timeout function because it is asynchronous. It will not catch the error. It will only catch the error if it is synchronous code.
        console.log("Error aa gaya bhai")
        return false
    } 
    finally{ // finaly used in function so that it can be run after try and catch block. 
        console.log("files are being closed and db connection is being closed")
    }
  
}

let c = main()