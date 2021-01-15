// Solution with filter - longhand
let arr = [1,2,7,8,9];
function checkArr(x) {
    if (x % 2 === 0) {
        return true
    }
}
console.log(arr.filter(checkArr));

// Solution with filter - shorthand
let arr = [1,2,7,8,9];
let arr2 = arr.filter(x => x % 2 !== 0)
console.log(arr2)

// Solution without filter
let arr = [1,2,7,8,9];
function checkArr2 (arr) {
    let newArr = []
    arr.forEach(function(elem,idx) {
        if (elem % 2 != 0) {
            newArr.push(elem)
        }
    });
    return newArr
}
console.log(checkArr2(arr))
