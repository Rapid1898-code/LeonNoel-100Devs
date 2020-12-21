// *Variables*
// Create a variable and console log the value
let age = 40
console.log(`Variables: Defined Variable is ${age}`)
// Create a variable, add 10 to it, and alert the value
let age2 = 35
age2 = age2 + 10
alert (`Variables: Added 10 is ${age2}`)

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtract4Numbers(n1,n2,n3,n4) {
    let ergFunc = n1 - n2 - n3 - n4
    alert (`Functions: Subtract 4 Numbers is: ${ergFunc}`)
}
subtract4Numbers(100,10,5,8)

// Create a function that divides one number by another and returns the remainder
function remainder2Numbers (n1,n2) {
    return (n1 % n2)
}
let ergFunc2 = remainder2Numbers(88,13)
alert(`Functions2: Remainder from 2 Numbers is: ${ergFunc2}`)

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function check2Numbers(n1,n2) {
    let erg = n1 + n2
    if (erg > 50) {
        alert(`Jumanji - ${erg} is greater 50`)
    } else {
        alert(`NO Jumanji - ${erg} is not greater than 50`)
    }
}
check2Numbers(25,35)
check2Numbers(10,13)

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function check3NumbersDivided (n1,n2,n3) {
    let erg = n1 * n2 * n3
    if (erg % 3 === 0) {
        alert(`ZEBRA - ${erg} is divisible by 3`)
    } else {
        alert(`NO ZEBRA - ${erg} is NOT divisible by 3`)
    }
}
check3NumbersDivided(9,33,969)
check3NumbersDivided(13,7,2)

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function outputWordNumber (word,n1) {
    for (let i=1; i<=n1; i++) {
        console.log(`Round ${i}: ${word}`)
    }
}
outputWordNumber("Rapid",10)
