//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 

// solution without reduce
function multiplyNums(arr1) {
    let erg = 1
    arr1.forEach((elem,idx) =>
        erg *= elem
    )
    console.log(erg)
}
multiplyNums([1,2,3,4,5])

// solution with reduce
arr1 = [1,2,3,4,5]
erg = arr1.reduce ((total, element) => {
	return total * element
},1)
console.log(erg)
