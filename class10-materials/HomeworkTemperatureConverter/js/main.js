// document.querySelector("#convertCelsius").addEventListener("click",convertFahrenheit)
// document.querySelector("#fahrenheit").addEventListener("change",convertFahrenheit)
document.querySelector("#fahrenheit").addEventListener("input",convertFahrenheit)

function convertFahrenheit() {
    let fahrenheit = document.querySelector("#fahrenheit").value
    celsius = (fahrenheit - 32) * 5/9
    celsius = celsius.toFixed(2)
    document.querySelector("#celsiusResult").value = celsius
    formula = fahrenheit + "°F - 32 x 5/9 = " + celsius + "°C"
    // document.querySelector("#formula").innerText = "dsklajfkl"
    document.getElementById("formula").innerText = formula
}



