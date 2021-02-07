//Create a button that adds 1 to a botScore stored in localStorage 
document.querySelector("#check").addEventListener("click",addOne)
if (!localStorage.getItem("botScore")) {
    localStorage.setItem ("botScore",0)
    document.querySelector("h2").innerText = 0
}

function addOne() {
    let tmpValue = Number(localStorage.getItem("botScore"))
    tmpValue += 1
    localStorage.setItem("botScore",tmpValue)
    document.querySelector("h2").innerText = tmpValue
}

