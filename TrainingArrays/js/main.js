// Task1
function camelize(word) {
    arrWord = word.split("-")
    arrWord.forEach((elem,idx) => {
        if (idx > 0) {
            arrWord[idx] = arrWord[idx][0].toUpperCase() + arrWord[idx].slice(1)
        }
    })
    arrWord = arrWord.join("")
    return(arrWord)
}
console.log("Task1:")
console.log(camelize("background-color"))
console.log(camelize("list-style-image"))
console.log(camelize("-webkit-transition"))

// Task2
function filterRange(arr,a,b) {
    newarr = arr.filter (function(x){
        if (x >= a && x <= b)  {
            return true
        }
    })
    return newarr
}
let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
console.log("\nTask2:")
console.log( filtered ); // 3,1 (matching values)
console.log( arr ); // 5,3,8,1 (not modified)

// Task3
function filterRangeInPlace(arr,a,b) {
    for (let i=arr.length-1; i>=0; i--){
        if (arr[i] < a || arr[i] > b) {
            arr.splice(i,1)
        }
    }
}
arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4
console.log("\nTask3:")
console.log( arr ); // [3, 1]

// Task 4
arr = [5, 2, 1, -10, 8];
arr.sort((a,b) => a > b ? -1 : 1)
console.log("\nTask4:")
console.log( arr ); // 8, 5, 2, 1, -10

// Task 5
function copySorted(arr) {
    let ergArray = [...arr]
    ergArray.sort((a,b) => a > b ? 1 : -1)
    return ergArray
}
arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);
console.log("\nTask5:")
console.log( sorted ); // CSS, HTML, JavaScript
console.log( arr ); // HTML, JavaScript, CSS (no changes)

// Task 6
function Calculator() {
    this addMtehod (name, func) {
        
    }



    this.calculate = function(str) {
        if (str.includes("-")) {
            let num1 = Number(str.split("-")[0])
            let num2 = Number(str.split("-")[1])
            return(num1 - num2)
        } else if (str.includes("+")) {
            let num1 = Number(str.split("+")[0])
            let num2 = Number(str.split("+")[1])
            return(num1 + num2)
        }
    }
}
let calc = new Calculator;
console.log("\nTask6:")
console.log( calc.calculate("3 + 7") ); // 10





