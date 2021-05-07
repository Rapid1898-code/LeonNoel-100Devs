// // One:
// // Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
// // [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
// arr = [1,2,3,4]
// let erg = arr.reduce((total,elem) => {
//     return total * elem
// },1)
// console.log(erg)

// // Two:
// // You will be given an array of all the family members' ages, in any order. The ages will be given 
// // in whole numbers, so a baby of 5 months, will have an ascribed 'age' of 0. 
// // Return a new array with [youngest age, oldest age, difference between the youngest and oldest age].
// let arr = [19,3,0,1,5,9]
// let erg = arr.sort((a,b) => a > b ? 1 : -1)
// console.log(erg)

// // Three:
// // Sum all the numbers of the array except the highest and the lowest element (the value, not the index!).
// // Example:
// // [ 6, 2, 1, 8, 10 ] => 16
// // [ 1, 1, 11, 2, 3 ] => 6
// // let arr = [ 6, 2, 1, 8, 10 ]
// let arr = [ 1, 1, 11, 2, 3 ]
// let tmpErg = arr.sort((a,b) => a > b ? 1 : -1)
// tmpErg = tmpErg.slice(1,tmpErg.length-1)
// let erg = tmpErg.reduce((total,elem) => {
//     return total + elem
// },0)
// console.log(erg)