function presses(phrase) {
    let onePress = ["A","D","G","J","M","P","T","W","*"," ","#","1"]
    let twoPress = ["B","E","H","K","N","Q","U","X","0"]
    let threePress = ["C","F","I","L","O","R","V","Y"]
    let fourPress = ["S","Z","2","4","5","6","8"]
    let fivePress = ["7","9"]
    let sumErg = 0
    phrase = phrase.toUpperCase()
    for (let i=0; i<phrase.length; i++) {
        if (onePress.includes(phrase[i])) {
            sumErg += 1
        } else if (twoPress.includes(phrase[i])) {
            sumErg += 2
        } else if (threePress.includes(phrase[i])) {
            sumErg += 3
        } else if (fourPress.includes(phrase[i])) {
            sumErg += 4
        } else {
            console.log(`Errror - char ${phrase[i]} not found...}`)
        }
    }
    return(sumErg)
}
console.log(presses("LOL"))
console.log(presses("HOW R U"))
