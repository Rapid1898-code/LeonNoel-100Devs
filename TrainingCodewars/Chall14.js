function oddOrEven(array) {
   erg = array.reduce ((total, element) => {
    return total + element
    },0)
    if (erg % 2 === 0) {
        return "even"
    } else {
        return "odd"
    }
}
console.log(oddOrEven([1023, 1, 2]))
console.log(oddOrEven([]))
