// *Variables*
// Create a variable and alert log the value
let varNum = 4
alert(varNum)

// Create a variable, add -15 to it, and print the value to the console
let varNew = varNum -15
console.log(varNew)

// *Functions*
// Create a function that multiplys 4 numbers and alerts the product
function multi4(n1,n2,n3,n4) {
    alert(n1*n2*n3*n4)
}

// Create a function that divides one number by another and returns the remainder plus 10
function divide(n1,n2) {
    return n1 % n2 + 10
}

// *Conditionals*
// Create a function that adds three numbers and if the sum is greater than 1000 alert "Block Party"
function threeNums (n1,n2,n3) {
    if (n1 + n2 + n3 > 1000) {
        alert("Block Party!")
    }
}

// Create a function that divides five numbers and if the quotient is divisible by 5 alert LINCOLN
function fiveNums(n1,n2,n3,n4,n5) {
    let erg = n1 / n2 / n3 / n4 / n5
    if (erg % 5 === 0) {
        alert ("Lincoln!")
    }
}

//*Loops*
//Create a function that takes in a word and a number. Console log the word x cubed times where x was the number passed in
function wordAndNumber() {
    const wordVar = prompt("Word pls:")
    const numVar = prompt("Number pls:")
    for (let i=0; i<numVar**2; i++) {
        console.log(wordVar)
    }
}







