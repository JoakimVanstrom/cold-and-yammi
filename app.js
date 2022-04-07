const express = require('express')
const {User, Flavour} = require('./models')
const session = require('cookie-session')
const bcrypt = require('bcryptjs')


const app = express()


app.set('view engine', 'ejs')
app.use(express.json())
app.use( express.static('public'))
app.use( express.urlencoded({extended: true}))
app.use( session({
    name: 'session',
    keys: [process.env.SESSION_SECRET]
  }))


app.get('/', async (req, res) => {
    const topFlavour = await Flavour.findAll({
        limit: 5,
        order: [['totalVotes', 'DESC']]
    })
    res.render('index', {topFlavour})
})

app.get('/vote', async (req, res) => {
    const voteFlavour = await Flavour.findAll()
    res.render('voteForm', {voteFlavour})
})

app.get('/login' , (req, res) => {
    res.render('login')
})
app.get('/register' , (req, res) => {
    res.render('register')
})

app.post('/register', async (req, res) => {
    const {username, userEmail, password} = req.body
    let password_hash = bcrypt.hashSync(password, 10)
    const user = await User.create({username, userEmail, password_hash})
    req.session.user = {id: user.id, username: user.username}
    res.redirect('/')
})

app.post('/login', async (req,res) => {
    try{
      const {username, password} = req.body
      const user = await User.authenticate(username, password)
      req.session.user = {
        username: user.username,
        id: user.id
      }
      res.redirect('/welcome')
    }catch(error){
      req.session.errorMessage = error.message
      res.redirect('/')
    }
  })


app.post('/vote', async (req, res) => {
    const {voteSelected, userName, userEmail} = req.body
    const dupUser = await User.findOne({where: {email: userEmail}})
    if(!dupUser.flavour_id){
    const votedFlavour = await Flavour.findOne({where: {flavour_id: voteSelected}})
    votedFlavour.increment('totalVotes', {by: 1})
    await User.update({flavour: voteSelected}, {where: {email: userEmail}})
    res.redirect('/')
    }else{
        res.redirect('/error')
    }
})

app.get('/error', (req, res) => {
    res.render('error')
})

const PORT =  process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})