// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let variable = 0
variable = "apple"
alert(variable)

//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let stringVar = "testvalue"
let erg = stringVar[1]
alert(erg)

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
function divideMultiply(n1,n2,n3) {
    let erg = n1 / n2 * n3
    alert(erg)
}
divideMultiply(5,7,8)

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
function cubeRoot(n1) {
    let erg = Math.cbrt(n1)
    console.log(erg)
}
cubeRoot(4)

//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
function monthFunc (monthNr) {
    if (monthNr in [7,8]) {
        alert ("YAY")
    } else {
        alert ("Booo")
    }
}
monthFunc(5)

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
function loopNum (n1) {
    for (let i=1; i<=n1; i++) {
        if (i % 5 != 0) {
            console.log(i)
        }
    }
}
loopNum(16)
