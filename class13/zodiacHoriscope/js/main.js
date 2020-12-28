var request = require('request');
let actualDayChoosen = "today"
let actualSignChoosen = false
let signsArr = ["aries", "taurus", "gemini", "cancer", "leo", "virgo", "libra", "scorpio", "sagittarius", "capricorn", "aquarius", "pisces"]

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
        let obj = JSON.parse(body)
        console.log(obj)
        // console.log(obj.date_range)
        // console.log(obj.current_date)
        document.querySelector("#currentDate").innerText = "Current Date: " + obj.current_date
        document.querySelector("#dateRangeStarSign").innerText = "Date Range: " + obj.date_range
        document.querySelector("#description").innerText = obj.description
        document.querySelector("#compatible").innerText = "Compatibility: " + obj.compatibility
        document.querySelector("#mood").innerText = "Mood: " + obj.mood
        document.querySelector("#color").innerText = "Color: " + obj.color
        document.querySelector("#luckyNumber").innerText = "Lucky Number: " + obj.lucky_number
        document.querySelector("#luckyTime").innerText = "Lucky Time: " + obj.lucky_time
}
}

function toggleBackground(field) {
    if (field === "yesterday") {
        document.querySelector("#dayYesterday").classList.add("selected")
        document.querySelector("#dayToday").classList.remove("selected")
        document.querySelector("#dayTomorrow").classList.remove("selected")
        actualDayChoosen = "yesterday"
    }
    if (field === "today") {
        document.querySelector("#dayYesterday").classList.remove("selected")
        document.querySelector("#dayToday").classList.add("selected")
        document.querySelector("#dayTomorrow").classList.remove("selected")
        actualDayChoosen = "today"
    }
    if (field === "tomorrow") {
        document.querySelector("#dayYesterday").classList.remove("selected")
        document.querySelector("#dayToday").classList.remove("selected")
        document.querySelector("#dayTomorrow").classList.add("selected")
        actualDayChoosen = "tomorrow"
    }
    if (actualSignChoosen != false) {
        readAstro(actualSignChoosen)
    }
}

function readAstro(sign) {
    var options = {
        url: "https://aztro.sameerkumar.website/?sign=" + sign + "&day=" + actualDayChoosen,
        // url: "https://aztro.sameerkumar.website/?sign=" + sign + "&day=today",
        // url: 'https://aztro.sameerkumar.website/?sign=aries&day=today',
        method: 'POST'
        };

    for (let i=0; i<signsArr.length; i++) {
        document.querySelector("#"+signsArr[i]).classList.remove("selected")
    }

    let selectorCont = "#" + sign
    document.querySelector(selectorCont).classList.add("selected")
    actualSignChoosen = sign
    request(options, callback);
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
document.querySelector("#capricorn").addEventListener("click",function() {
    readAstro("capricorn")
}, false);
document.querySelector("#aquarius").addEventListener("click",function() {
    readAstro("aquarius")
}, false);
document.querySelector("#pisces").addEventListener("click",function() {
    readAstro("pisces")
}, false);
document.querySelector("#aries").addEventListener("click",function() {
    readAstro("aries")
}, false);
document.querySelector("#taurus").addEventListener("click",function() {
    readAstro("taurus")
}, false);
document.querySelector("#gemini").addEventListener("click",function() {
    readAstro("gemini")
}, false);
document.querySelector("#cancer").addEventListener("click",function() {
    readAstro("cancer")
}, false);
document.querySelector("#leo").addEventListener("click",function() {
    readAstro("leo")
}, false);
document.querySelector("#virgo").addEventListener("click",function() {
    readAstro("virgo")
}, false);
document.querySelector("#libra").addEventListener("click",function() {
    readAstro("libra")
}, false);
document.querySelector("#scorpio").addEventListener("click",function() {
    readAstro("scorpio")
}, false);
document.querySelector("#sagittarius").addEventListener("click",function() {
    readAstro("sagittarius")
}, false);

