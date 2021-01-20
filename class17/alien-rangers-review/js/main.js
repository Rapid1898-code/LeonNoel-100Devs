//Arrays

//Create and array of tv shows. Loop through and print each show to the console
showsArr = ["Terminator","Rambo","Es"]
showsArr.forEach((elem,idx) => {
	console.log(elem)
})

//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays
numArr = [1,2,3,4,5]
newArr = numArr.filter (x => x % 2 === 0)
console.log(newArr)

//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number
numArr2 = [10,3,1,4,5]
numArr2.sort((a,b) => a > b ? 1 : -1)
let sum = numArr2[1] + numArr2[numArr2.length-2]
console.log(sum)
