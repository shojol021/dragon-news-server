const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

const cors = require('cors')

app.use(cors())

const data = require('./data.json')

app.get('/', (req, res) => {
    res.send('Hello World 2')
})

app.get('/categories', (req, res) => {
    res.send(data)
})

app.listen(port, () => {
    console.log('hello from port ', port)
})
