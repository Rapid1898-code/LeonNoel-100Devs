function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        let obj = JSON.parse(body)
        // console.log(obj)
        // console.log(obj.date_range)
        return obj
}
}

function toggleBackground(field) {
    if (field === "yesterday") {
        document.querySelector("#dayYesterday").classList.add("selected")
        document.querySelector("#dayToday").classList.remove("selected")
        document.querySelector("#dayTomorrow").classList.remove("selected")
    }
    if (field === "today") {
        document.querySelector("#dayYesterday").classList.remove("selected")
        document.querySelector("#dayToday").classList.add("selected")
        document.querySelector("#dayTomorrow").classList.remove("selected")
    }
    if (field === "tomorrow") {
        document.querySelector("#dayYesterday").classList.remove("selected")
        document.querySelector("#dayToday").classList.remove("selected")
        document.querySelector("#dayTomorrow").classList.add("selected")
    }
}

function readAstro(sign) {
var request = require('request');
    var options = {
        url: "https://aztro.sameerkumar.website/?sign=" + sign + "aries&day=today",
        method: 'POST'
        };
    readData = request(options, callback);
}

document.querySelector("#dayYesterday").addEventListener("click",function() {
    toggleBackground("yesterday")
}, false);
document.querySelector("#dayToday").addEventListener("click",function() {
    toggleBackground("today")
}, false);
document.querySelector("#dayTomorrow").addEventListener("click",function() {
    toggleBackground("tomorrow")
}, false);

// document.querySelector("#capricorn").addEventListener("click",readAstro)

