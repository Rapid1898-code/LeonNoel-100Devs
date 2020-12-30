function handleUpdate() {
    // console.log(this.value);
    const suffix = this.dataset.sizing || "";
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

function loadPicture() {
    let cont = document.querySelector("#inputURL").value
    document.querySelector("#imgPicture").src = cont
}

document.querySelector("#loadButton").addEventListener("click",loadPicture)
let inputs = document.querySelectorAll(".controls input");

inputs.forEach(input => input.addEventListener("change", handleUpdate));
inputs.forEach(input => input.addEventListener("mousemove", handleUpdate));
