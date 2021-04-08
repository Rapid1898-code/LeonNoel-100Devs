const express = require("express")      // include express module
const app = express()                   // creates express app application
const MongoClient = require("mongodb").MongoClient      // include Mongo Client module
const PORT = 2121
require("dotenv").config()

let db,
    dbConnectionStr = process.env.DB_STRING,
    dbName = "todo"

MongoClient.connect(dbConnectionStr, {useUnifiedTopology: true})
    .then(client =>{
        console.log(`Hey, connected to ${dbName} database`)
        db = client.db(dbName)
    })
    .catch(err =>{
        console.log(`Connection to db not possible - error ${err}`)
    })

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
 
app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})
    
app.get("/", async (req,res) => {
    const todoItems = await db.collection("todos").find().toArray()
    const itemsLeft = await db.collection("todos").countDocuments({completed: false})
    res.render("index.ejs", {zebra: todoItems, left: itemsLeft})
    // db.collection("todos").find().toArray()
    // .then (data => {
    //     db.collection("todos").countDocuments({completed: false})
    //     .then(itemsLeft => {
    //         res.render("index.ejs", {zebra: data, left: itemsLeft})
    //     })        
    // })    
    // .catch(error => console.error(error))
})

app.post("/createTodo", (req,res) => { 
    db.collection("todos").insertOne({todo: req.body.todoItem, completed: false})
    .then(result => {
        console.log(`Todo ${req.body.todoItem} has been added...`)
        res.redirect("/")
    })
})

app.delete("/deleteTodo", (req,res) => {
    console.log(req.body.rainbowUnicorn)
    db.collection("todos").deleteOne({todo: req.body.rainbowUnicorn})
    .then(result => {
        console.log(`Todo ${req.body.rainbowUnicorn} has been deleted...`)
        res.json("Deleted It")   
    })
    .catch (err => console.log(err))
})

app.put("/markComplete", (req,res) => {
    console.log(req.body.rainbowUnicorn)
    db.collection("todos").updateOne({todo: req.body.rainbowUnicorn}, {
        $set: {
            completed: true
        }
    })
    .then(result => {
        console.log("Marked Complete")
        res.json("Marked Complete")           
    })
})

app.put("/undo", (req,res) => {
    console.log(req.body.rainbowUnicorn)
    db.collection("todos").updateOne({todo: req.body.rainbowUnicorn}, {
        $set: {
            completed: false
        }
    })
    .then(result => {
        console.log("Marked Complete")
        res.json("Marked Complete")           
    })
})