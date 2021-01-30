function findUniq(arr) {
    let nr1 = false
    let nr2 = false
    let double = false
    arr.forEach((elem,idx) => {
        if (nr1 === false) {
            nr1 = elem
        } else if (elem === nr1)  {
            double = elem
        } else if (nr2 === false) {
            nr2 = elem
        } else if (elem === nr2)  {
            double = elem
        }
    })

    console.log(nr1, nr2, double)

    if (nr1 === double) {
        return (nr2)
    } else {
        return (nr1)
    }
}
console.log(findUniq([ 0, 1, 0 ]))
