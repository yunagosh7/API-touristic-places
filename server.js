const express = require('express')

const app = express()

const data = require('./data.json')
app.get("/touristic-places", (req, res) => {
    return res.json(data)
})

app.listen(3000, () => {
    console.log('app listen on port 3000')
})