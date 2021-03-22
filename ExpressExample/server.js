const express = require('express');
const bodyParser= require('body-parser')
const MongoClient = require('mongodb').MongoClient
const app = express();

app.use(bodyParser.urlencoded({ extended: true }))

MongoClient.connect("mongodb+srv://Rapid1898:I65faueI65f@cluster0.ram23.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
  useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database')
    const db = client.db('star-wars-quotes')
    const quotesCollection = db.collection('quotes')

    app.get('/', (req, res) => {
      res.sendFile(__dirname + '/index.html')
    })

    app.post('/quotes', (req, res) => {
      quotesCollection.insertOne(req.body)
        .then(result => {
          console.log(result)
        })
        .catch(error => console.error(error))
    })
  })



app.listen(3000, function() {
  console.log('listening on 3000')
})

// app.get('/', (req, res) => {
//   res.send('Hello World')
// })

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

// app.post('/quotes', (req, res) => {
//   console.log('Hellooooooooooooooooo!')
// })

// app.post('/quotes', (req, res) => {
//   console.log(req.body)
// })

// app.post('/quotes', (req, res) => {
//   quotesCollection.insertOne(req.body)
//     .then(result => {
//       console.log(result)
//     })
//     .catch(error => console.error(error))
// })
