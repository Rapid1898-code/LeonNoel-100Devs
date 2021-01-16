//Create a function that takes in an array of numbers. Return a new array containing every even number
// from the original array (do not use map or filter)

// without map/filter
function evenNumber(arr1) {
    let ergArray = []
    arr1.forEach((elem,idx) => {						// Iterate through array by elements and index (with shortform)
        if (elem % 2 == 0) {
            ergArray.push(elem)
        }
    })
    console.log(ergArray)
}
evenNumber([1,2,3,4,5,6])

// with filter
arr1 = [1,2,3,4,5,6]
newarr = arr1.filter(x => x % 2 === 0);				// Short Method in one line
console.log(newarr)


