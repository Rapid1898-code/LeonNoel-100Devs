// Example Variable
// let admin = "Name of Admin"
// let name = "Max"
// admin = name
// console.log(admin)


// Example functions min
// function min(a,b) {
//     if (a <= b) {
//         return(a)
//     } else {
//         return(b)
//     }
// }
// console.log(min(2,5))
// console.log(min(3,-1))
// console.log(min(1,1))


// Example functions pow
function pow(x,n) {
    let value = 1
    for (let i=0; i<n ;i++) {
        value *= x
    }
    return (value)
}

console.log(pow(3,2))
console.log(pow(3,3))
console.log(pow(1,100))
