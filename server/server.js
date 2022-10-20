const express = require('express')
const cors = require('cors')

const app = express()

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '7a4918c9e9b74076b9293caa1c64838b',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')

app.use(express.json())
app.use(cors())
app.use(express.static ('public'))

const {getHTML, getCSS, getJS} = require('./controller')

app.get('/', getHTML)
app.get('/css', getCSS)
app.get('/js', getJS)

const port = process.env.PORT || 4040

app.listen(port, console.log(`Server running on ${port}`))