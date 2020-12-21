//Create a function that grabs the number of snacks from the input and tells you to stop that many times
document.querySelector("#help").addEventListener("click",showStop)

function showStop() {
    // alert("Drinnen!")
    let countText = Number(document.querySelector("input").value)

    for (let i=0; i<countText; i++) {
        // alert("Drinnen!")
        document.querySelector("#stops").innerText += " stop"
    }
}
