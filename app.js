const express = require('express')
require('dotenv').config()


const app = express()

app.set('view engine', 'ejs')
app.use( express.static('public'))
app.use( express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.render('index')
})


const PORT = 8080
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})