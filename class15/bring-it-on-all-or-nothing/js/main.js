// *Variables*
// Declare a variable, assign it a boolean, and alert the value
const bool = true
alert(bool)

// Declare a variable, reassign it to your favorite color, and console log the value
let color = "default"
color = "green"
console.log(color)

// *Functions*
// Create a function that takes in 4 numbers and returns the sum of the first 3 numbers divided by the fourth. Return the result. Call the function.
function fourNumbers(n1,n2,n3,n4) {
    const erg = (n1+n2n+3) / n4
    return erg
}
fourNumbers(5,6,7,8)

// Create a function that takes in 2 numbers. Console log the first number to the power of the second. Call the function.
function twoNumbers(n1,n2) {
    const erg = n1 ** n2
    console.log(erg)
}
twoNumbers(5,7)

// *Conditionals*
// Create a function that takes in a boolean and a string. If the boolean is true, alert the string. If the boolean is false, console log the string
function takeBoolString(b1,s1) {
    if (b1) {
        alert(s1)
    } else {
        console.log(s1)
    }
}

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number, but if the number is divisible by 3 log "fizz" instead of that number,
// if the number is divisible by 5 log "buzz" instead of the number, and if the number is divisible by 3 and 5 log "fizzbuzz" instead of that number
function numberLoop(n1) {
    for (let i=1; i<=n1; i++) {
        if (i%3==0 && i%5==0) {
            console.log("fizzbuzz")
        } else if (i%3==0) {
            console.log("fizz")
        } else if (i%5==0) {
            console.log("buzz")
        } else {
            console.log(i)
        }
    }
}
numberLoop(25)
