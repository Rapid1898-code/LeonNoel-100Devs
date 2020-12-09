document.querySelector("#work").addEventListener("click", checkDay)
// document.querySelector('#check').addEventListener('click', checkDay)


function checkDay() {
    let day = document.querySelector("#inputField").value
    day = day.toUpperCase()
    // alert(day)

    if (day === "TUESDAY" || day === "THURSDAY") {
        alert("This is a class-day!")
    } else if (day === "SATURDAY" || day === "SUNDAY")  {
        alert("This is a weekendday!")
    } else if (day === "MONDAY" || day === "WEDDNESDAY" || day === "FRIDAY") {
        alert("This is a other day!")
    } else {
        alert("You gave a wrong input!")
    }
}
