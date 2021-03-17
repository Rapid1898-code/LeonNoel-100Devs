const http = require("http")
const path = require("path")
const fs = require("fs")

const server = http.createServer((req, res) => {
    if (req.url === "/") {      // check if url is in root
        fs.readFile(
            path.join(__dirname, "public", "index.html"),   // read index.html in the public folder
            (err, content) => {
                if (err) throw err
                res.writeHead(200, {"Content-Type": "text/html"})
                res.end("<h1>Homepage</h1>")
            }
        )
    }
})

const PORT = process.env.PORT || 5000       // look at first if the is a port from the process - otherwise use port 5000
server.listen(PORT, () => console.log(`Server running on port ${PORT}`))
