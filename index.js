const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

const cors = require('cors')

app.use(cors())

const data = require('./data.json')
const news = require('./news.json')

app.get('/', (req, res) => {
    res.send('Hello World 2')
})

app.get('/categories', (req, res) => {
    res.send(data)
})

app.get('/categories/:id', (req, res) => {
    const id = req.params.id
    if (id === '0') {
        res.send(news)
    }
    else {
        const categoryNews = news.filter(n => n.category_id === id)
        res.send(categoryNews)
    }
})

app.get('/news', (req, res) => {
    res.send(news)
})

app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    const singleNews = news.find(n => n._id === id)
    res.send(singleNews)
})


app.listen(port, () => {
    console.log('hello from port ', port)
})
