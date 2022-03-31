const express = require('express')
require('dotenv').config()
const Sequelize = require('sequelize')


const app = express()

app.set('view engine', 'ejs')
app.use( express.static('public'))
app.use( express.urlencoded({extended: true}))

const db = new Sequelize('sqlite://database/icecreams.sqlite')

app.get('/', async (req, res) => {
    const topFlavour = await db.query('SELECT * FROM flavours ORDER BY totalVotes DESC LIMIT 3', {type: Sequelize.QueryTypes.SELECT})
    res.render('index', {topFlavour})
})

app.get('/vote', async (req, res) => {
    const voteFlavour = await db.query('SELECT * FROM flavours', {type: Sequelize.QueryTypes.SELECT})
    res.render('voteForm', {voteFlavour})
})


const PORT = 8080
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})