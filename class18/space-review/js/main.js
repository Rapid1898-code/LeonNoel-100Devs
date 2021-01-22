//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let arr1 = [1,2,3,4,5,6]
erg = arr1.reduce ((total, element) => {
	return total + element
},0)
console.log(erg)

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
arr1 = [1,2,3,4,5]
newarr = arr1.map(x => x * x);
console.log(newarr)

//Create a function that takes string
//Print the reverse of that string to the console
function strFunc(str) {
    tmpArr = str.split("")
    ergArr = tmpArr.reverse()
    ergStr = ergArr.join("")
    console.log(ergStr)
    return(ergStr)
}
strFunc("ein test")

//Create a function that takes in a string
//Alert if the string is a palindrome or not
function strFunc2(str) {
    strNew = strFunc(str)
    console.log(strNew, str)
    if (strNew === str) {
        console.log(`${str} is a palindrome!`)
    } else {
        console.log(`${str} is NOT a palindrome!`)
    }
}
strFunc2("das ist ein test")
strFunc2("abcba")
