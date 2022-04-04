const express = require('express')
require('dotenv').config()
const Sequelize = require('sequelize')


const app = express()

app.set('view engine', 'ejs')
app.use( express.static('public'))
app.use( express.urlencoded({extended: true}))

const db = new Sequelize('sqlite://database/icecreams.sqlite')

app.get('/', async (req, res) => {
    const topFlavour = await db.query('SELECT * FROM flavours ORDER BY totalVotes DESC LIMIT 5', {type: Sequelize.QueryTypes.SELECT})
    res.render('index', {topFlavour})
})

app.get('/vote', async (req, res) => {
    const voteFlavour = await db.query('SELECT * FROM flavours', {type: Sequelize.QueryTypes.SELECT})
    res.render('voteForm', {voteFlavour})
})

app.post('/vote', async (req, res) => {
    const flavour = req.body.voteSelected
    const email = req.body.email
    const voted = await db.query(`SELECT totalVotes FROM flavours WHERE title = '${flavour}'`, {type: Sequelize.QueryTypes.SELECT})
    const addVote = voted[0].totalVotes + 1
    await db.query(`UPDATE flavours SET totalVotes = ${addVote} WHERE title = '${flavour}'`, {type: Sequelize.QueryTypes.UPDATE})
    res.redirect('/')
})

const PORT = 8080
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})