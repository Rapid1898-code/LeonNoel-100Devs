function findNum(numbers) {
    numbers.forEach((elem,idx) => {
        if (elem === 2) {
            return idx
        }
    })
}

console.log(findNum([1,2,3]))
