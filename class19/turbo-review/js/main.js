// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question
let varName = "Is this a question?"
if (varName.includes("?")) {
    console.log(varName)
}

//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console
varName = "this is a sentence jr. dev and we are jr. dev so follow along"
varName = varName.replace(/jr. dev/g, 'software engineer');
console.log(varName)

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rockPaperScissor() {
    let erg = Math.floor(Math.random()*3) + 1
    if (erg === 1) {
        return "rock"
    } else if (erg === 2) {
        return "paper"
    } else {
        return "scissors"
    }
}

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function choiceFunc (choice) {
    let cpu = rockPaperScissor()
    if (choice === cpu) {
        console.log(`Its a draw! CPU:${cpu} YOU:${choice}`)
    } else if ((choice === "rock" && cpu === "paper") || (choice === "paper" && cpu === "rock") || (choice === "scissor") && cpu === "paper") {
        console.log(`YOU win! CPU:${cpu} YOU:${choice}`)
    } else {
        console.log(`CPU win! CPU:${cpu} YOU:${choice}`)
    }
}

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
let arrChoice = ["rock","paper","scissors"]
arrChoice.forEach((elem,idx) => {
    choiceFunc(elem)
})
