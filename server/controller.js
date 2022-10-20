const path = require('path')
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '7a4918c9e9b74076b9293caa1c64838b',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

module.exports = {
    getHTML:  (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'))
    },
    getCSS: (req,res) => {
        res.sendFile(path.join(__dirname, '../public/styles.css'))
    },
    getJS: (req,res) => {
        res.sendFile(path.join(__dirname, '../public/main.js'))
    },
    getError: (req, res) => {
        try{
            function32();
        } catch(error){
            rollbar.error('throw error')
            console.log(error);
        }
    }
}














