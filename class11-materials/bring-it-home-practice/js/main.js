// *Variables*
// Create a variable and console log the value
let newVar = "blablabla"
console.log(newVar)
alert(`Function1 => see console.log output!`)

// Create a variable, add 10 to it, and alert the value
let newVar2 = 10
newVar2 += 10
alert(`Function2: Variable was 10 at first declaration+assignment and is now: ${newVar2}`)


// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtract4Numbers(n1, n2, n3, n4) {
    erg = n1 - n2 - n3 - n4
    alert (`Function3: ${n1}-${n2}-${n3}-${n4} = ${erg}`)
}
subtract4Numbers(20, 5,4,3)


// Create a function that divides one number by another and returns the remainder
function giveRemainder(n1, n2) {
    return(n1 % n2)
}
erg = giveRemainder(20, 7)
alert (`Function4: Reaminder for 20 and 7 is ${erg}`)


// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function addAndCheckNumbers(n1, n2) {
    if (n1 + n2 > 50) {
        alert (`Function5: Jumanji - Check if ${n1} and ${n2} is greater than 50!`)
    }
}
addAndCheckNumbers(25,30)
addAndCheckNumbers(24,24)

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function checkMultipliys(n1, n2, n3) {
    product = n1 * n2 * n3
    product = product % 3
    if (product == 0) {
        alert (`Function6: ZEBRA - Check Multiplies ${n1} ${n2} ${n3} no remainder for number 3!`)
    }
}
checkMultipliys(9, 12, 3)
