// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let day = "christmas"
day = day.toUpperCase()
console.log(day)

//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
let varString = "asdklfjaslkj"
console.log(varString.substr(varString.length-3))
console.log(varString.slice(-3))

// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
function numbers5(n1,n2,n3,n4,n5) {
    let erg = 100 - n1 - n2 - n3 - n4 - n5
    console.log(Math.abs(erg))
}
numbers5(1,2,3,4,5,6)
numbers5(20,50,70,2,4)

// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
function numbers3(n1, n2, n3) {
    let minVar = Math.min(n1,n2,n3)
    let maxVar = Math.max(n1,n2,n3)
    console.log(`Min: ${minVar}`)
    console.log(`Max: ${maxVar}`)
}
numbers3(3,6,12)

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
function headTailsRandom () {
    erg = Math.floor(Math.random()*2)
    if (erg === 0) {
        console.log("Head!")
    } else if (erg === 1) {
        console.log("Tails!")
    }
}
headTailsRandom()

//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times
// where x is the number passed into the function. Call the function.
function loopGame(n1) {
    for (let i=0; i<n1; i++) {
        headTailsRandom()
    }
}
loopGame(5)
