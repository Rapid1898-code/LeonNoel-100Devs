// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
let varDrink = "  Cola   "
varDrink = varDrink.trim()
console.log(varDrink)

//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
let varWord = "eins zwei drei vier apple"
varArr = varWord.split(" ")
console.log(varArr)
if (varArr.includes("apple")) {
    console.log("apple is IN the string!")
}

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rockPaperScissors() {
    let erg = Math.floor(Math.random()*3) + 1
    if (erg === 1) {
        return("rock")
    } else if (erg === 2) {
        return("paper")
    } else if (erg === 3) {
        return("scissors")
    }
}
console.log(rockPaperScissors())

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function choice(turn) {
    let cpu = rockPaperScissors()

    if (turn === cpu) {
        console.log(`Its a draw - CPU: ${cpu}, YOU: ${turn} `)
    }
    if ((turn === "rock" && cpu === "scissors") || (turn === "scissors" && cpu === "paper") || (turn === "paper" && cpu === "rock")) {
        console.log(`You won! - CPU: ${cpu}, YOU: ${turn} `)
    }
    if ((cpu === "rock" && turn === "scissors") || (cpu === "scissors" && turn === "paper") || (cpu === "paper" && turn === "rock")) {
        console.log(`Computer won! - CPU: ${cpu}, YOU: ${turn} `)
    }
}

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
choiceArr = ["paper","scissors","rock"]
choiceArr.forEach((elem,idx) => {
    console.log(`Round ${idx+1}:`)
    choice(elem)
})
