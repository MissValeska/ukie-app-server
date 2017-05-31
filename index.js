var express = require('express')
 
var app = express()

app.get('/conj', function(req, res) {
  res.send("живеш")
})

app.get('/infin', function(req, res) {
  res.send("жити")
})

app.get('/conjtype', function(req, res) {
  res.send("ти")
})
 
app.get('/', function(req, res) {
  res.send("HAI")
})

app.listen(3000)