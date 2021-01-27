//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let arr1 = [1,2,3,4,5]
erg = arr1.reduce ((total, element) => {
    return total + element
},0)
console.log(erg)

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
function  arrFunc(a) {
    let newarr = a.map(x => x * x);
    return(newarr)
}
console.log(arrFunc([1,2,3,4,5]))

//Create a function that takes string
//Print the reverse of that string to the console
function strFunc(s) {
    let tmpArr = s.split("")
    tmpArr = tmpArr.reverse()
    let erg = tmpArr.join("")
    console.log(erg)
    return(erg)
}
strFunc("sdakldfjlaskj")


//Create a function that takes in a string
//Alert if the string is a palindrome or not
function palindromFunc(s) {
    let tmpStr = strFunc(s)
    if (s === tmpStr) {
        console.log("Palindrome!")
    } else {
        console.log("No Palindrome!")
    }
}
palindromFunc("abba")
palindromFunc("sdaklfj")
