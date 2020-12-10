document.querySelector("#calcButton").addEventListener("click",calcFunc)

function calcFunc() {
    let celsius = document.querySelector("#inp").value
    let fahrenheit = celsius * 1.8 + 32
    document.querySelector("#result").innerText = fahrenheit
}
