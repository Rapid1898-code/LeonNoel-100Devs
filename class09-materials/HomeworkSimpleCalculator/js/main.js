let result = 0

document.querySelector("#reset").addEventListener("click",resetResult)
document.querySelector("#plus5").addEventListener("click",addFive)
document.querySelector("#minus23").addEventListener("click",minusTwentythree)
document.querySelector("#multi5").addEventListener("click",multiplicateFive)
document.querySelector("#divide2").addEventListener("click",divideByTwo)

function resetResult() {
    result = 0
    document.querySelector("#result").innerText = result
}
function addFive() {
    result += 5
    document.querySelector("#result").innerText = result
}
function minusTwentythree() {
    result -= 23
    document.querySelector("#result").innerText = result
}
function multiplicateFive() {
    result *= 5
    document.querySelector("#result").innerText = result
}
 function divideByTwo() {
    result /= 2
    document.querySelector("#result").innerText = result
}




