let firstNum = false
function calculateOperation(input) {
    calcOperationArr = ["ADD","SUB","DIV","MULT"]
    calcNumArr = ["1","2","3","4","5","6","7","8","9","0"]
    let actualField = document.querySelector("#idInput")
    if (calcNumArr.includes(input)) {
        if (actualField.value.length) {
            actualField.value += input
        } else {
            actualField.value = input
        }
    }
    if (input === ".") {
        if (!actualField.value.includes(".")) {
            actualField.value += input
        }
    }
    if (input === "+/-") {
        actualField.value *= -1
    }
    if (input === "CE") {
        actualField.value = ""
        firstNum = false
        for (let i=0; i<calcOperationArr.length; i++) {
            document.querySelector("#id"+calcOperationArr[i]).classList.remove("selected")
        }
    }
    if (input === "SQRT") {
        actualField.value = Math.sqrt(actualField.value)
    }
    if (input === "PROC") {
        actualField.value /= 100
    }
    if (input === "ONEX") {
        actualField.value = 1 / actualField.value
    }
    if (calcOperationArr.includes(input)) {
        if (actualField.value.length) {
            for (let i = 0; i < calcOperationArr.length; i++) {
                document.querySelector("#id" + calcOperationArr[i]).classList.remove("selected")
            }
            let selectorCont = "#id" + input
            document.querySelector(selectorCont).classList.add("selected")
            firstNum = Number(actualField.value)
            actualField.value = ""
        }
    }
    if (input === "RESULT") {
        let tmpSelected = document.querySelector(".selected")
        if (tmpSelected && actualField.value.length && firstNum) {
            if (tmpSelected.id == "idADD") {
                actualField.value = firstNum + Number(actualField.value)
                firstNum = actualField.value
            }
            if (tmpSelected.id == "idSUB") {
                actualField.value = firstNum - Number(actualField.value)
                firstNum = actualField.value
            }
            if (tmpSelected.id == "idMULT") {
                actualField.value = firstNum * Number(actualField.value)
                firstNum = actualField.value
            }
            if (tmpSelected.id == "idDIV") {
                actualField.value = firstNum / Number(actualField.value)
                firstNum = actualField.value
            }
            for (let i=0; i<calcOperationArr.length; i++) {
                document.querySelector("#id"+calcOperationArr[i]).classList.remove("selected")
            }
        }
    }
}

document.querySelector("#id1").addEventListener("click",function () {
    calculateOperation("1")
}, false)
document.querySelector("#id2").addEventListener("click",function () {
    calculateOperation("2")
}, false)
document.querySelector("#id3").addEventListener("click",function () {
    calculateOperation("3")
}, false)
document.querySelector("#id4").addEventListener("click",function () {
    calculateOperation("4")
}, false)
document.querySelector("#id5").addEventListener("click",function () {
    calculateOperation("5")
}, false)
document.querySelector("#id6").addEventListener("click",function () {
    calculateOperation("6")
}, false)
document.querySelector("#id7").addEventListener("click",function () {
    calculateOperation("7")
}, false)
document.querySelector("#id8").addEventListener("click",function () {
    calculateOperation("8")
}, false)
document.querySelector("#id9").addEventListener("click",function () {
    calculateOperation("9")
}, false)
document.querySelector("#id0").addEventListener("click",function () {
    calculateOperation("0")
}, false)
document.querySelector("#idDecimal").addEventListener("click",function () {
    calculateOperation(".")
}, false)
document.querySelector("#idPlusMinus").addEventListener("click",function () {
    calculateOperation("+/-")
}, false)
document.querySelector("#idCE").addEventListener("click",function () {
    calculateOperation("CE")
}, false)
document.querySelector("#idSQRT").addEventListener("click",function () {
    calculateOperation("SQRT")
}, false)
document.querySelector("#idPROC").addEventListener("click",function () {
    calculateOperation("PROC")
}, false)
document.querySelector("#idONEX").addEventListener("click",function () {
    calculateOperation("ONEX")
}, false)
document.querySelector("#idONEX").addEventListener("click",function () {
    calculateOperation("ONEX")
}, false)
document.querySelector("#idDIV").addEventListener("click",function () {
    calculateOperation("DIV")
}, false)
document.querySelector("#idMULT").addEventListener("click",function () {
    calculateOperation("MULT")
}, false)
document.querySelector("#idADD").addEventListener("click",function () {
    calculateOperation("ADD")
}, false)
document.querySelector("#idSUB").addEventListener("click",function () {
    calculateOperation("SUB")
}, false)
document.querySelector("#idRESULT").addEventListener("click",function () {
    calculateOperation("RESULT")
}, false)


