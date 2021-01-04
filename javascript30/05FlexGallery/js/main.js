const panels = document.querySelectorAll(".panel");

panels.forEach(panel => panel.addEventListener("click",toggleOpen))
panels.forEach(panel => panel.addEventListener("transitionend",toggleActive))

function toggleOpen() {
    panels.forEach((elem) => {
        elem.classList.remove("open")
    })
    this.classList.add("open")

}

function toggleActive(e) {
    if (e.propertyName.includes("flex")) {
        panels.forEach((elem) => {
            elem.classList.remove("open-active")
        })
        this.classList.add("open-active")
    }
}
