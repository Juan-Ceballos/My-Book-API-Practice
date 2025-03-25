const express = require('express')
const app = express()
const port = 3000

const books = [
    {id: 1, title: '1984', author: 'George Orwell'},
    {id: 2, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald'}
]

app.get('/books', (req, res) => {
    res.json(books)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})