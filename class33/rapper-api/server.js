const express = require("express")
const app = express()
const MongoClient = require("mongodb").MongoClient
const PORT = 2121

let db, 
    dbConnectionstr = "mongodb+srv://Rapid1898:I65faue#MB7#@cluster0.ram23.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    dbName = "rap"
// connect to mongoDB
MongoClient.connect(dbConnectionstr, {useUnifiedTopology: true})
    .then(client => {
        console.log(`Connected to ${dbName} Database`)
        db = client.db(dbName)
    })