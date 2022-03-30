const express = require('express')
require('dotenv').config()


const app = express()

app.use( express.static('public'))
app.use( express.urlencoded({extended: true}))



const PORT = 8080
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})