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
    const user = req.session.user
    const topFlavour = await Flavour.findAll({
        limit: 5,
        order: [['totalVotes', 'DESC']]
    })
    res.render('index', {topFlavour, user})
})

app.get('/vote', async (req, res) => {
    const user = req.session.user
    const voteFlavour = await Flavour.findAll()
    res.render('voteForm', {voteFlavour, user})
})

app.get('/login' , (req, res) => {
    const user = req.session.user
    const errorMessage = req.session.errorMessage 
    res.render('login', {user, errorMessage})
})
app.get('/register' , (req, res) => {
  const user = req.session.user
    res.render('register', {user})
})

app.post('/register', async (req, res) => {
    const {username, email, password} = req.body
    let password_hash = bcrypt.hashSync(password, 10)
    const user = await User.create({username, email, password_hash})
    req.session.user = {id: user.id, email: user.email, username: user.username}
    res.redirect('/')
})

app.post('/login', async (req,res) => {
    try{
      const {username, password, email} = req.body
      const user = await User.authenticate(username, password, email)
      req.session.user = {
        username: user.username,
        email: user.email,
        id: user.id
      }
      res.redirect('/')
    }catch(error){
      req.session.errorMessage = error.message
      res.redirect('/login', {errorMessage: error.message})
    }
  })

  app.get('/logout', (req, res) => { 
    const user = req.session.user
    res.render('logout', {user})
  })

  app.post('/logout', (req, res) => {
    req.session = null
    res.clearCookie('session')
    res.redirect('/')
  })


app.post('/vote', async (req, res) => {
    const {voteSelected} = req.body
    const email = req.session.user.email
    console.log(email)
    console.log(voteSelected)
    const findUser = await User.findOne({where: {email: email}})
    if(!findUser.flavour_id){
    const votedFlavour = await Flavour.findOne({where: {id: voteSelected}})
    console.log(votedFlavour)
    votedFlavour.increment('totalVotes', {by: 1})
    await User.update({flavour_id: voteSelected}, {where: {email: email}})
    res.redirect('/')
    }else{
        res.redirect('/error')
    }
})



const PORT =  process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})