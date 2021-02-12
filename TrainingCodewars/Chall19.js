var numbers = [1, 2, 3, 4, 5];

Array.prototype.square = function() {
    let input = this;
    input = input.map(x => x * x);
    return(input)
}
Array.prototype.cube = function() {
    let input = this;
    input = input.map(x => x * x * x);
    return(input)
}
Array.prototype.average = function() {
    let input = this;
    let sum = 0
    input.forEach((elem,idx) => {
        sum += elem
    })
    return(sum / input.length)
}
Array.prototype.sum = function() {
    let input = this;
    let sum = 0
    input.forEach((elem,idx) => {
        sum += elem
    })
    return(sum)
}
Array.prototype.even = function() {
    let input = this;
    input = input.filter(x => x % 2 === 0);
    return(input)
}
Array.prototype.odd = function() {
    let input = this;
    input = input.filter(x => x % 2 !== 0);
    return(input)
}


console.log(numbers.square())
console.log(numbers.cube())
console.log(numbers.average())
console.log(numbers.sum())
console.log(numbers.even())
console.log(numbers.odd())

