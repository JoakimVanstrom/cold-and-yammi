const express = require('express')
require('dotenv').config()
const Sequelize = require('sequelize')


const app = express()

app.set('view engine', 'ejs')
app.use( express.static('public'))
app.use( express.urlencoded({extended: true}))

const db = new Sequelize('sqlite://database/icecreams.sqlite')

app.get('/', async (req, res) => {
    const icecreams = await db.query('SELECT * FROM flavours', {type: Sequelize.QueryTypes.SELECT})
    res.render('index', {icecreams})
})


const PORT = 8080
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})