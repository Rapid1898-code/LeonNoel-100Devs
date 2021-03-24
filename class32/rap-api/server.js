const express = require("express")
const app = express()
const PORT = 8000

let savage = {
    "age": 28,
    "birthname": "Sayaa Bin Abraham-Joseph",
    "birthLocation": "London, England"
}

app.get("/", (request, response) => {
    response.sendFile(__dirname + "/index.html")    
})

app.get("/api/savage", (request, response) => {
    response.json(savage)
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})