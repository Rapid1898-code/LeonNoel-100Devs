document.querySelector(id="#convertLowercase").addEventListener("click",convertLowercase)

function convertLowercase() {
    let txtInput = document.querySelector(id="#textField").value
    txtInput = txtInput.toLowerCase()
    document.querySelector(id="#textOutput").innerText = txtInput
}
