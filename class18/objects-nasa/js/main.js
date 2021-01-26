//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
document.querySelector("button").addEventListener("click",getPhoto)
function getPhoto() {
    let dateSelect = document.querySelector("input").value
    let url = "https://api.nasa.gov/planetary/apod?api_key=4gV3s6N5Uj9eDpMZOMebk2yaQ1oWL9oeNrwBROmd&date=" + dateSelect
    fetch(url)
        .then(res => res.json())
        .then(data => {
            document.querySelector("h2").innerText = data.title
            document.querySelector("img").src = data.url
            document.querySelector("h3").innerText = data.explanation
        })
        .catch(err => {
            console.log("error ${err}")
        });
}
