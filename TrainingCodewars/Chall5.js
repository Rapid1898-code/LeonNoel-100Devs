function squareSum(numbers){
    let newArr = numbers.map(x => x ** 2);
    let erg = newArr.reduce ((total, element) => {
        return total + element
    },0)
    return(erg)

}
console.log(squareSum([0,3,4,5]))
