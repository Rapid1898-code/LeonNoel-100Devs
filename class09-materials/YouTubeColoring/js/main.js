document.querySelector('#idBlue').addEventListener('click',changeToBlue)
document.querySelector('#idGreen').addEventListener('click',changeToGreen)
document.querySelector('#idRed').addEventListener('click',changeToRed)

function changeToBlue() {
    document.querySelector("body").style.backgroundColor = "blue"
}
function changeToGreen() {
    document.querySelector("body").style.backgroundColor = "green"
}
function changeToRed() {
    document.querySelector("body").style.backgroundColor = "red"
}
