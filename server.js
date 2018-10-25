const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')
const port = process.env.PORT || 7000
// var cors = require('cors')

app.use(bodyParser.json())
// app.use(express.static(path.join(__dirname, './index.html')))
// app.use(express.static(path.resolve('./index.html')))
app.use(express.static('public'))
// app.use(cors())


// app.get('/', function(req, res) {
// 	console.log('ok hitting our backend');
// 	// let index = require('./index.html')
// 	res.send(express.static(path.resolve("./index.html")))
// })


app.listen(port)
console.log('express server is up and listening on port ' + port)
