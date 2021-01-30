url = "https://api.ratesapi.io/api/latest"
fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector("#currency").innerText += " " + data.base
        document.querySelector("#date").innerText += " " + data.date
        for (let key in data.rates) {
            document.querySelector("h3").innerText += key + " " + data.rates[key] + "\n"
        }
    })
    .catch(err => {
        console.log(`error ${err}`)
    });





