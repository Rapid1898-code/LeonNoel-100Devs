multiplicationTable = function(size) {
    let startArray = []
    let tmpArray = []
    let ergArray = []
    for (let i=1; i<=size; i++) {
        startArray.push(i)
    }
    for (let i=1; i<=size; i++) {
        tmpArray = []
        startArray.forEach((elem,idx) => {
            tmpArray.push(elem * i)
        })
        ergArray.push(tmpArray)
    }
    return(ergArray)
}

console.log(multiplicationTable(3))
