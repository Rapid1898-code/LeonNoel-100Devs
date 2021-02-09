function thirt(n) {
    thirtRules = [1,10,9,12,3,4]
    let previousValue = 0
    let running = true
    while (running) {
        // console.log(previousValue)
        // console.log(n)
        if (previousValue == n) {
            running = false
        } else {
            previousValue = n
        }
        strReversed = String(n).split("").reverse().join("")
        let thirtSum = 0
        for (let i = 0; i < strReversed.length; i++) {
            thirtSum += Number(strReversed[i] * thirtRules[i % 6])
        }
        n = thirtSum
    }
    return(n)
}

console.log(thirt(1234567))
console.log(thirt(321))
