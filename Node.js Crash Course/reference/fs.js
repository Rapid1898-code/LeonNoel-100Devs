const path = require("path")
const fs = require("fs")

/*fs.mkdir(path.join(__dirname, "/test"), {}, (err)  =>  {
    if (err) throw err
    console.log("Folder created...")
})*/

// // Create and write to file
// fs.writeFile(path.join(__dirname, "/test", "hello.txt"), "Hello World!", (err)  =>  {
//     if (err) throw err
//     console.log("File written to...")
// })

// // Append and write to file
// fs.appendFile(path.join(__dirname, "/test", "hello.txt"), "\nsecond text", (err)  =>  {
//     if (err) throw err
//     console.log("File written to...")
// })

// fs.readFile(path.join(__dirname, "/test", "hello.txt"), "utf8", (err, data)  =>  {
//     if (err) throw err
//     console.log(data)
// })

// Rename file
fs.rename(path.join(__dirname, "/test", "hello.txt"), path.join(__dirname, "/test", "hello2.txt"), (err, data)  =>  {
    if (err) throw err
    console.log("File renamed...")
})
