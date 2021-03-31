const express = require("express")
const app = express()
const MongoClient = require("mongodb").MongoClient
const PORT = 2121

let db, 
    dbConnectionstr = "mongodb+srv://Rapid1898:I65faueI65f@cluster0.ram23.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    dbName = "rap"

console.log(db)
console.log(dbConnectionstr)
console.log(dbName)

// connect to mongoDB
MongoClient.connect(dbConnectionstr, {
    useUnifiedTopology: true})
    .then(client => {
        console.log(`Connected to ${dbName} Database`)
        db = client.db(dbName)
    })

